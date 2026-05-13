import type { Race, RaceColor } from "@/lib/event";

type Palette = { from: string; to: string; ridge: string; ink: string };

const PALETTE: Record<RaceColor, Palette> = {
  "ember-deep": { from: "#a52a1d", to: "#3a0d08", ridge: "#28080a", ink: "#f5d8c8" },
  ember:       { from: "#e85b48", to: "#8a1d10", ridge: "#5a1009", ink: "#fde4d6" },
  ochre:       { from: "#d99c4a", to: "#7a4912", ridge: "#5a3208", ink: "#fbe6c4" },
  moss:        { from: "#7a8e58", to: "#384528", ridge: "#26331a", ink: "#e4ecd3" },
  shadow:      { from: "#5a504a", to: "#1a1614", ridge: "#0c0a09", ink: "#e6dfd4" },
};

const SIZE = {
  sm: { dist: 34, km: 11, elev: 10 },
  md: { dist: 33, km: 9, elev: 8.5 },
  lg: { dist: 48, km: 12, elev: 11 },
};

const SIZE_CLASS = {
  sm: "w-20 h-24",
  md: "w-[104px] h-[124px] sm:w-24 sm:h-[114px]",
  lg: "w-28 h-[132px] sm:w-36 sm:h-[170px]",
};

export function RaceBadge({
  race,
  size = "md",
}: {
  race: Race;
  size?: "sm" | "md" | "lg";
}) {
  const p = PALETTE[race.color];
  const s = SIZE[size];
  const id = `b-${race.code}-${size}`;

  return (
    <svg
      viewBox="0 0 100 120"
      role="img"
      aria-label={`${race.distanceKm} kilometers, ${race.elevationM} meters elevation`}
      className={`${SIZE_CLASS[size]} shrink-0 drop-shadow-[0_8px_18px_rgba(27,24,23,0.32)]`}
    >
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.from} />
          <stop offset="100%" stopColor={p.to} />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <path d="M50 2 L62 16 L75 6 L86 20 L94 18 L94 102 Q94 114 82 116 L18 116 Q6 114 6 102 L6 18 L14 20 L25 6 L38 16 Z" />
        </clipPath>
      </defs>

      <path
        d="M50 2 L62 16 L75 6 L86 20 L94 18 L94 102 Q94 114 82 116 L18 116 Q6 114 6 102 L6 18 L14 20 L25 6 L38 16 Z"
        fill={`url(#${id}-fill)`}
      />

      <g clipPath={`url(#${id}-clip)`}>
        <path
          d="M0 78 L14 64 L26 72 L40 56 L52 68 L66 50 L80 64 L100 54 L100 120 L0 120 Z"
          fill={p.ridge}
          opacity="0.5"
        />
        <path
          d="M0 92 L18 80 L34 90 L50 78 L66 88 L82 78 L100 90 L100 120 L0 120 Z"
          fill={p.ridge}
          opacity="0.85"
        />
        <g stroke={p.ink} strokeWidth="0.4" fill="none" opacity="0.22">
          <path d="M-2 32 Q 30 26 50 34 T 102 32" />
          <path d="M-2 42 Q 30 36 50 44 T 102 42" />
          <path d="M-2 52 Q 30 46 50 54 T 102 52" />
        </g>
        <path
          d="M50 7 L61 19 L74 10 L83 22 L89 22 L89 100 Q89 109 80 111 L20 111 Q11 109 11 100 L11 22 L17 22 L26 10 L39 19 Z"
          fill="none"
          stroke={p.ink}
          strokeWidth="0.5"
          opacity="0.35"
        />
      </g>

      {/* elevation chip */}
      <g transform="translate(50 32)">
        <rect
          x={-24}
          y={-9}
          width={48}
          height={17}
          rx={8.5}
          fill="rgba(0,0,0,0.35)"
        />
        <text
          x={0}
          y={3}
          textAnchor="middle"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontWeight={600}
          fontSize={s.elev}
          letterSpacing="0.08em"
          fill={p.ink}
        >
          {race.elevationM}M+
        </text>
      </g>

      {/* distance number — display serif */}
      <text
        x={50}
        y={84}
        textAnchor="middle"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontWeight={800}
        fontSize={s.dist}
        letterSpacing="-0.05em"
        fill="white"
      >
        {race.distanceKm}
      </text>

      <g transform="translate(50 102)">
        <line x1={-14} x2={-5} y1={-1} y2={-1} stroke="white" strokeWidth="0.8" opacity="0.7" />
        <line x1={5} x2={14} y1={-1} y2={-1} stroke="white" strokeWidth="0.8" opacity="0.7" />
        <text
          x={0}
          y={2.5}
          textAnchor="middle"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontWeight={600}
          fontSize={s.km}
          letterSpacing="0.3em"
          fill="white"
        >
          KM
        </text>
      </g>
    </svg>
  );
}
