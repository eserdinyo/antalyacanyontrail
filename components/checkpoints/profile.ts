export type ProfileGeometry = {
  w: number;
  h: number;
  padT: number;
  padB: number;
  /* km covered by the chart (start → finish) */
  total: number;
  line: string;
  area: string;
  xAt: (km: number) => number;
  yAt: (km: number) => number;
  /* y of an elevation in metres */
  yOfEle: (m: number) => number;
  eleTicks: number[];
  kmTicks: number[];
  /* horizontal position as a % of the chart width, for HTML overlays */
  pct: (km: number) => string;
};

/* Flat courses would fill the whole height and read as hilly; never let the
   vertical scale span less than this. */
const MIN_RANGE_M = 120;

/* Smoothed elevation path over evenly spaced samples (metres) spanning
   0..total km. */
export function profileGeometry(
  elevations: number[],
  total: number,
  box: { w: number; h: number; padT?: number; padB?: number },
): ProfileGeometry {
  const { w, h, padT = 0, padB = 0 } = box;
  const innerH = h - padT - padB;

  const lo = Math.min(...elevations);
  const hi = Math.max(...elevations);
  const range = Math.max(hi - lo, MIN_RANGE_M);
  const eleMin = lo - (range - (hi - lo)) / 2 - range * 0.08;
  const eleMax = eleMin + range * 1.12;
  const yOfEle = (m: number) =>
    padT + (1 - (m - eleMin) / (eleMax - eleMin)) * innerH;

  const step = w / (elevations.length - 1);
  const pts = elevations.map((m, i) => [i * step, yOfEle(m)] as const);

  const line = pts
    .map(([x, y], i) => {
      if (i === 0) return `M ${x} ${y}`;
      const [px, py] = pts[i - 1];
      return `C ${px + step / 2} ${py}, ${x - step / 2} ${y}, ${x} ${y}`;
    })
    .join(" ");
  const area = `${line} L ${w} ${h - padB} L 0 ${h - padB} Z`;

  const xAt = (km: number) => (km / total) * w;
  const yAt = (km: number) => yOnPath(pts, step, xAt(km));
  const pct = (km: number) => `${(km / total) * 100}%`;

  const eleStep = niceStep(eleMax - eleMin, 4);
  const eleTicks: number[] = [];
  for (let m = Math.ceil(eleMin / eleStep) * eleStep; m < eleMax; m += eleStep) {
    if (yOfEle(m) > padT + 12) eleTicks.push(m);
  }

  const kmStep = niceStep(total, 7);
  const kmTicks: number[] = [];
  for (let k = kmStep; k < total - kmStep * 0.5; k += kmStep) kmTicks.push(k);

  return { w, h, padT, padB, total, line, area, xAt, yAt, yOfEle, eleTicks, kmTicks, pct };
}

function niceStep(span: number, target: number) {
  const raw = span / target;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const n = raw / mag;
  return (n < 1.5 ? 1 : n < 3.5 ? 2 : n < 7.5 ? 5 : 10) * mag;
}

/* y of the smoothed path at x. Each segment is a cubic Bézier whose control
   points sit half a step in, so x(t) = x0 + step·(1.5t − 1.5t² + t³). */
function yOnPath(
  pts: readonly (readonly [number, number])[],
  step: number,
  x: number,
) {
  const i = Math.min(Math.max(Math.floor(x / step), 0), pts.length - 2);
  const [x0, y0] = pts[i];
  const [, y1] = pts[i + 1];
  const target = (x - x0) / step;
  let lo = 0;
  let hi = 1;
  for (let k = 0; k < 24; k++) {
    const t = (lo + hi) / 2;
    if (1.5 * t - 1.5 * t * t + t * t * t < target) lo = t;
    else hi = t;
  }
  const t = (lo + hi) / 2;
  const a = (1 - t) ** 3 + 3 * t * (1 - t) ** 2;
  return y0 * a + y1 * (1 - a);
}
