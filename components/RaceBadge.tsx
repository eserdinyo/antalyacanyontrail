import type { Race, RaceColor } from "@/lib/event";

type Palette = {
  from: string;
  mid: string;
  to: string;
  glow: string;
  ridgeA: string;
  ridgeB: string;
  ink: string;
  outline: string;
};

const PALETTE: Record<RaceColor, Palette> = {
  "ember-deep": {
    from: "#ef442d",
    mid: "#9b1727",
    to: "#2b070b",
    glow: "#ff9b45",
    ridgeA: "#7b1020",
    ridgeB: "#240508",
    ink: "#ffe0cf",
    outline: "#ff6645",
  },
  ember: {
    from: "#ff6a4f",
    mid: "#d72d2f",
    to: "#4c0b0c",
    glow: "#ffd05a",
    ridgeA: "#9e1d24",
    ridgeB: "#330707",
    ink: "#fff0df",
    outline: "#ff8067",
  },
  ochre: {
    from: "#ffbd45",
    mid: "#d87922",
    to: "#59320b",
    glow: "#f7f06a",
    ridgeA: "#b55b18",
    ridgeB: "#3a2108",
    ink: "#fff2c9",
    outline: "#ffc65b",
  },
  moss: {
    from: "#99b95d",
    mid: "#55783f",
    to: "#172818",
    glow: "#d7ed79",
    ridgeA: "#496a35",
    ridgeB: "#102111",
    ink: "#f0f7dd",
    outline: "#b6d877",
  },
  shadow: {
    from: "#857a73",
    mid: "#4a403f",
    to: "#0f0d12",
    glow: "#bf9cff",
    ridgeA: "#3b3336",
    ridgeB: "#08070a",
    ink: "#f0e9df",
    outline: "#a6958d",
  },
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
          <stop offset="48%" stopColor={p.mid} />
          <stop offset="100%" stopColor={p.to} />
        </linearGradient>
        <radialGradient id={`${id}-flare`} cx="30%" cy="20%" r="72%">
          <stop offset="0%" stopColor={p.glow} stopOpacity="0.72" />
          <stop offset="42%" stopColor={p.glow} stopOpacity="0.16" />
          <stop offset="100%" stopColor={p.glow} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.34" />
          <stop offset="42%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
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
          d="M50 2 L62 16 L75 6 L86 20 L94 18 L94 102 Q94 114 82 116 L18 116 Q6 114 6 102 L6 18 L14 20 L25 6 L38 16 Z"
          fill={`url(#${id}-flare)`}
        />
        <path
          d="M-8 38 C22 20 44 40 68 23 C82 13 95 13 108 20 L108 -10 L-8 -10 Z"
          fill={`url(#${id}-glass)`}
        />
        <path
          d="M0 70 L13 56 L27 66 L39 46 L53 61 L66 39 L80 58 L100 44 L100 120 L0 120 Z"
          fill={p.ridgeA}
          opacity="0.48"
        />
        <path
          d="M0 84 L15 72 L30 82 L43 67 L56 79 L70 61 L84 78 L100 68 L100 120 L0 120 Z"
          fill={p.ridgeA}
          opacity="0.72"
        />
        <path
          d="M0 95 L18 81 L34 92 L49 76 L65 90 L82 76 L100 90 L100 120 L0 120 Z"
          fill={p.ridgeB}
          opacity="0.9"
        />
        <g stroke={p.ink} strokeWidth="0.4" fill="none" opacity="0.22">
          <path d="M-2 32 Q 30 26 50 34 T 102 32" />
          <path d="M-2 42 Q 30 36 50 44 T 102 42" />
          <path d="M-2 52 Q 30 46 50 54 T 102 52" />
          <path d="M-2 62 Q 30 56 50 64 T 102 62" />
        </g>
        <path
          d="M50 7 L61 19 L74 10 L83 22 L89 22 L89 100 Q89 109 80 111 L20 111 Q11 109 11 100 L11 22 L17 22 L26 10 L39 19 Z"
          fill="none"
          stroke={p.outline}
          strokeWidth="1"
          opacity="0.62"
        />
      </g>

      <path
        d="M50 2 L62 16 L75 6 L86 20 L94 18 L94 102 Q94 114 82 116 L18 116 Q6 114 6 102 L6 18 L14 20 L25 6 L38 16 Z"
        fill="none"
        stroke={p.outline}
        strokeWidth="1.4"
        opacity="0.9"
      />

      {/* elevation chip */}
      <g transform="translate(50 32)">
        <rect
          x={-24}
          y={-9}
          width={48}
          height={17}
          rx={8.5}
          fill="rgba(12,8,8,0.44)"
          stroke={p.ink}
          strokeWidth="0.35"
          opacity="0.96"
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
