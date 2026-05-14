type Props = {
  profile: number[];
  distanceKm: number;
  minEleM?: number;
  maxEleM?: number;
  stroke?: string;
  fill?: string;
  className?: string;
  axisColor?: string;
  /* show numeric axis labels — requires min/max for elevation */
  showAxes?: boolean;
  labels?: {
    elevation: string;
    distance: string;
  };
};

// Larger elevation profile with optional km / meter axes.
export function RouteProfile({
  profile,
  distanceKm,
  minEleM,
  maxEleM,
  stroke = "currentColor",
  fill,
  className,
  axisColor = "rgba(27,24,23,0.35)",
  showAxes = true,
  labels,
}: Props) {
  const w = 1000;
  const h = 320;
  const padL = showAxes ? 56 : 8;
  const padR = 24;
  const padT = 24;
  const padB = showAxes ? 44 : 16;

  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const step = innerW / (profile.length - 1);

  const points = profile.map((v, i) => {
    const x = padL + i * step;
    const y = padT + (1 - v) * innerH;
    return [x, y] as const;
  });

  // smoothed bezier path between successive points
  const linePath = points
    .map(([x, y], i) => {
      if (i === 0) return `M ${x.toFixed(2)} ${y.toFixed(2)}`;
      const [px, py] = points[i - 1];
      const cx1 = px + step / 2;
      const cy1 = py;
      const cx2 = x - step / 2;
      const cy2 = y;
      return `C ${cx1.toFixed(2)} ${cy1.toFixed(2)}, ${cx2.toFixed(
        2
      )} ${cy2.toFixed(2)}, ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");

  const areaPath = `${linePath} L ${padL + innerW} ${padT + innerH} L ${padL} ${padT + innerH} Z`;

  const eleTicks =
    showAxes && minEleM != null && maxEleM != null
      ? buildEleTicks(minEleM, maxEleM)
      : [];
  const kmTicks = showAxes ? buildKmTicks(distanceKm) : [];

  const yAt = (m: number) => {
    if (minEleM == null || maxEleM == null || maxEleM === minEleM) return padT;
    const t = (m - minEleM) / (maxEleM - minEleM);
    return padT + (1 - t) * innerH;
  };
  const xAt = (km: number) => padL + (km / distanceKm) * innerW;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{ height: "auto", display: "block" }}
      className={className}
      aria-hidden
    >
      {/* horizontal grid lines */}
      {showAxes &&
        eleTicks.map((t) => (
          <line
            key={`gh-${t}`}
            x1={padL}
            x2={padL + innerW}
            y1={yAt(t)}
            y2={yAt(t)}
            stroke={axisColor}
            strokeWidth={0.5}
            strokeDasharray="2 4"
            opacity={0.5}
          />
        ))}

      {/* fill + line */}
      <path d={areaPath} fill={fill ?? stroke} opacity={fill ? 1 : 0.12} />
      <path
        d={linePath}
        fill="none"
        stroke={stroke}
        strokeWidth={1.4}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* axes */}
      {showAxes && (
        <>
          {/* y axis line */}
          <line
            x1={padL}
            x2={padL}
            y1={padT}
            y2={padT + innerH}
            stroke={axisColor}
            strokeWidth={0.8}
          />
          {/* x axis line */}
          <line
            x1={padL}
            x2={padL + innerW}
            y1={padT + innerH}
            y2={padT + innerH}
            stroke={axisColor}
            strokeWidth={0.8}
          />

          {/* y tick labels */}
          {eleTicks.map((t) => (
            <g key={`yt-${t}`}>
              <line
                x1={padL - 4}
                x2={padL}
                y1={yAt(t)}
                y2={yAt(t)}
                stroke={axisColor}
                strokeWidth={0.8}
              />
              <text
                x={padL - 8}
                y={yAt(t) + 3}
                textAnchor="end"
                fontFamily="var(--font-sans), system-ui, sans-serif"
                fontWeight={600}
                fontSize={10}
                letterSpacing="0.14em"
                fill={axisColor}
              >
                {t}
              </text>
            </g>
          ))}
          {labels && (
            <text
              x={padL - 48}
              y={padT + innerH / 2}
              textAnchor="middle"
              transform={`rotate(-90 ${padL - 48} ${padT + innerH / 2})`}
              fontFamily="var(--font-sans), system-ui, sans-serif"
              fontWeight={600}
              fontSize={9}
              letterSpacing="0.22em"
              fill={axisColor}
            >
              {labels.elevation}
            </text>
          )}

          {/* x tick labels */}
          {kmTicks.map((t) => (
            <g key={`xt-${t}`}>
              <line
                x1={xAt(t)}
                x2={xAt(t)}
                y1={padT + innerH}
                y2={padT + innerH + 4}
                stroke={axisColor}
                strokeWidth={0.8}
              />
              <text
                x={xAt(t)}
                y={padT + innerH + 18}
                textAnchor="middle"
                fontFamily="var(--font-sans), system-ui, sans-serif"
                fontWeight={600}
                fontSize={10}
                letterSpacing="0.14em"
                fill={axisColor}
              >
                {t}
              </text>
            </g>
          ))}
          {labels && (
            <text
              x={padL + innerW / 2}
              y={padT + innerH + 36}
              textAnchor="middle"
              fontFamily="var(--font-sans), system-ui, sans-serif"
              fontWeight={600}
              fontSize={9}
              letterSpacing="0.22em"
              fill={axisColor}
            >
              {labels.distance}
            </text>
          )}
        </>
      )}
    </svg>
  );
}

function buildEleTicks(min: number, max: number): number[] {
  const range = max - min;
  if (range <= 0) return [min];
  const target = 4;
  const raw = range / target;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const niceStep =
    (norm < 1.5 ? 1 : norm < 3.5 ? 2 : norm < 7.5 ? 5 : 10) * mag;
  const start = Math.ceil(min / niceStep) * niceStep;
  const ticks: number[] = [];
  for (let t = start; t <= max; t += niceStep) {
    ticks.push(Math.round(t));
  }
  if (ticks[0] !== min) ticks.unshift(Math.round(min));
  if (ticks[ticks.length - 1] !== max) ticks.push(Math.round(max));
  return Array.from(new Set(ticks)).sort((a, b) => a - b);
}

function buildKmTicks(total: number): number[] {
  const target = 6;
  const raw = total / target;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const step = (norm < 1.5 ? 1 : norm < 3.5 ? 2 : norm < 7.5 ? 5 : 10) * mag;
  const ticks: number[] = [0];
  for (let t = step; t < total; t += step) ticks.push(+t.toFixed(1));
  ticks.push(+total.toFixed(1));
  return ticks;
}
