type Props = {
  profile: number[];
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
  filled?: boolean;
  className?: string;
};

export function ElevationProfile({
  profile,
  width = 240,
  height = 48,
  stroke = "currentColor",
  fill,
  filled = true,
  className,
}: Props) {
  const w = width;
  const h = height;
  const padY = 2;
  const usable = h - padY * 2;
  const step = w / (profile.length - 1);

  const points = profile.map((v, i) => {
    const x = i * step;
    const y = padY + (1 - v) * usable;
    return [x, y] as const;
  });

  // smoothed catmull-rom-ish path
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

  const areaPath = `${linePath} L ${w} ${h} L 0 ${h} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      {filled && (
        <path d={areaPath} fill={fill ?? stroke} opacity={fill ? 1 : 0.12} />
      )}
      <path
        d={linePath}
        fill="none"
        stroke={stroke}
        strokeWidth={1.2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
