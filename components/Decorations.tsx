export function Compass({
  size = 56,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden
    >
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <circle
        cx="50"
        cy="50"
        r="36"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="2 4"
        opacity="0.45"
      />
      {/* tick marks */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        const x1 = 50 + Math.cos(a) * 46;
        const y1 = 50 + Math.sin(a) * 46;
        const x2 = 50 + Math.cos(a) * (i % 6 === 0 ? 39 : 43);
        const y2 = 50 + Math.sin(a) * (i % 6 === 0 ? 39 : 43);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="0.8"
            opacity={i % 6 === 0 ? 0.8 : 0.35}
          />
        );
      })}
      {/* N arrow */}
      <path d="M50 16 L54 50 L50 44 L46 50 Z" fill="currentColor" />
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fontSize="9"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontWeight="700"
        letterSpacing="0.3em"
        fill="currentColor"
      >
        N
      </text>
    </svg>
  );
}

export function RidgeLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 60"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <path
        d="M0 50 L60 22 L100 38 L160 14 L220 32 L280 8 L340 28 L400 18 L460 36 L520 12 L580 28 L640 18 L700 30 L760 16 L800 24 L800 60 L0 60 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ContourRings({
  size = 220,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      className={className}
      aria-hidden
    >
      {Array.from({ length: 9 }).map((_, i) => {
        const r = 18 + i * 11;
        const wob = i % 2 === 0 ? 1 : -1;
        return (
          <ellipse
            key={i}
            cx={110 + wob * 4}
            cy={110}
            rx={r}
            ry={r * 0.86 + i * 0.4}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity={0.35 - i * 0.025}
          />
        );
      })}
    </svg>
  );
}

export function Edition({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-ink/40 px-2 py-1 label">
      <span className="block h-1 w-1 rounded-full bg-ember" />
      {children}
    </span>
  );
}
