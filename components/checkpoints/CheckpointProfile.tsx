import type { Race } from "@/lib/event";

import {
  ServiceIcons,
  ServiceLegend,
  cpName,
  fmtKm,
  legAfter,
  type RaceDetailT,
} from "./shared";
import { profileGeometry } from "./profile";

const W = 1000;
const H = 340;
/* climb rate (m per km) that gets the darkest tint; one scale for every race
   so a flat course reads as flat */
const STEEP_M_PER_KM = 70;

/* Aid stations on the elevation profile: each station is a flag on a pole,
   legs are tinted by how steeply they climb, with km / m axes. */
export function CheckpointProfile({
  race,
  td,
}: {
  race: Race;
  td: RaceDetailT;
}) {
  const cps = race.checkpoints;
  const elevations = race.checkpointProfileM;
  if (!cps || !elevations) return null;

  const g = profileGeometry(elevations, cps[cps.length - 1].km, {
    w: W,
    h: H,
    padT: 20,
  });
  const color = `var(--${race.color})`;

  const legs = cps.slice(0, -1).map((cp, i) => ({ from: cp, ...legAfter(cps, i)! }));

  return (
    <section className="border-b border-line bg-bone">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            {td("cpTitle")}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft">
            {td("cpNote")}
          </p>
        </div>

        <div className="mt-8 surface-paper px-3 pt-5 pb-4 sm:px-8 sm:pt-8 sm:pb-6">
          {/* flags */}
          <div className="relative h-8 sm:h-[92px]">
            {cps.map((cp) => {
              const isFinish = cp.code === "FINISH";
              const isEnd = isFinish || cp.code === "START";
              return (
                <div
                  key={cp.code}
                  className={`absolute top-0 bottom-0 flex flex-col gap-1 ${
                    isFinish
                      ? "items-end border-r-2 pr-2 text-right sm:pr-3"
                      : "border-l-2 pl-2 sm:pl-3"
                  }`}
                  style={{
                    left: isFinish ? undefined : g.pct(cp.km),
                    right: isFinish ? 0 : undefined,
                    borderColor: isEnd ? "var(--ink)" : color,
                  }}
                >
                  <span
                    className={`text-[10px] font-extrabold tracking-[0.12em] sm:label ${isEnd ? "hidden sm:inline" : ""}`}
                  >
                    {isEnd ? cpName(cp, td).toUpperCase() : cp.code}
                  </span>
                  <span className="hidden font-display text-lg leading-none tracking-tight whitespace-nowrap sm:block">
                    {isEnd ? `${fmtKm(cp.km)} km` : cpName(cp, td)}
                  </span>
                  {!isEnd && (
                    <span className="hidden items-center gap-3 text-xs font-semibold text-ink-soft sm:flex">
                      {fmtKm(cp.km)} km
                      <ServiceIcons services={cp.services} td={td} size={13} className="gap-1.5" />
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              width="100%"
              style={{ height: "auto", display: "block" }}
              aria-hidden
            >
              <defs>
                <clipPath id={`cp-area-${race.slug}`}>
                  <path d={g.area} />
                </clipPath>
              </defs>

              {g.eleTicks.map((m) => (
                <line
                  key={m}
                  x1={0}
                  x2={W}
                  y1={g.yOfEle(m)}
                  y2={g.yOfEle(m)}
                  stroke="var(--ink)"
                  strokeWidth={0.6}
                  strokeDasharray="2 5"
                  opacity={0.35}
                />
              ))}

              <g clipPath={`url(#cp-area-${race.slug})`}>
                {legs.map((l) => (
                  <rect
                    key={l.from.code}
                    x={g.xAt(l.from.km)}
                    y={0}
                    width={g.xAt(l.from.km + l.km) - g.xAt(l.from.km)}
                    height={H}
                    fill={color}
                    opacity={0.14 + 0.62 * Math.min(l.upM / l.km / STEEP_M_PER_KM, 1)}
                  />
                ))}
              </g>

              <path d={g.line} fill="none" stroke="var(--ink)" strokeWidth={1.8} strokeLinejoin="round" />

              {cps.map((cp) => {
                const isEnd = cp.code === "START" || cp.code === "FINISH";
                const x = Math.min(Math.max(g.xAt(cp.km), 1), W - 1);
                return (
                  <g key={cp.code}>
                    <line
                      x1={x}
                      x2={x}
                      y1={0}
                      y2={g.yAt(cp.km)}
                      stroke={isEnd ? "var(--ink)" : color}
                      strokeWidth={2}
                    />
                    <circle
                      cx={x}
                      cy={g.yAt(cp.km)}
                      r={isEnd ? 5 : 7}
                      fill={isEnd ? "var(--ink)" : color}
                      stroke="var(--paper)"
                      strokeWidth={2.5}
                    />
                  </g>
                );
              })}
            </svg>

            {/* elevation axis labels */}
            {g.eleTicks.map((m) => (
              <span
                key={m}
                className="absolute left-1 -translate-y-full pb-0.5 text-[10px] font-semibold text-ink-soft/80"
                style={{ top: `${(g.yOfEle(m) / H) * 100}%` }}
              >
                {m} m
              </span>
            ))}
          </div>

          {/* km axis */}
          <div className="relative mt-2 h-4 border-t border-ink/40 text-[10px] font-semibold text-ink-soft">
            {g.kmTicks.map((k) => (
              <span
                key={k}
                className="absolute top-1 -translate-x-1/2"
                style={{ left: g.pct(k) }}
              >
                {k}
              </span>
            ))}
            <span className="absolute top-1 right-0">km</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-line pt-4 text-ink-soft">
            <span className="inline-flex items-center gap-3 text-sm">
              <span aria-hidden className="flex h-3 w-16 overflow-hidden rounded-sm">
                {[0.14, 0.3, 0.46, 0.62, 0.76].map((o) => (
                  <span key={o} className="flex-1" style={{ background: color, opacity: o }} />
                ))}
              </span>
              {td("cpSteepLegend")}
            </span>
            <ServiceLegend td={td} />
          </div>
        </div>

        {/* phone: the flags only carry codes, so list the stations */}
        <ol className="mt-6 divide-y divide-line border-y border-line sm:hidden">
          {cps.map((cp, i) => {
            const leg = legAfter(cps, i);
            return (
              <li key={cp.code} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 py-4">
                <p className="font-display text-xl leading-tight tracking-tight">
                  {cp.code !== "START" && cp.code !== "FINISH" && (
                    <span className="mr-2 label text-ink-soft">{cp.code}</span>
                  )}
                  {cpName(cp, td)}
                </p>
                <p className="row-span-2 numeral text-2xl">
                  {fmtKm(cp.km)}
                  <span className="ml-1 text-xs font-semibold tracking-normal text-ink-soft">km</span>
                </p>
                <div className="flex items-center gap-4 text-xs text-ink-soft">
                  {leg && (
                    <span>
                      → {fmtKm(leg.km)} km ↑{leg.upM} ↓{leg.downM}
                    </span>
                  )}
                  {cp.services.length > 0 && <ServiceIcons services={cp.services} td={td} size={13} className="gap-1.5" />}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
