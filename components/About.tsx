import { useTranslations } from "next-intl";
import { ContourRings } from "./Decorations";

export function About() {
  const t = useTranslations("About");

  return (
    <section
      id="info"
      className="relative overflow-hidden border-y border-line bg-bone"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 text-ember/35"
      >
        <ContourRings size={520} />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-3">
          <div className="sticky top-24 space-y-4">
            <span className="label text-ink-soft">§ 01 · THE EVENT</span>
            <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              {t("title")}
            </h2>
            <div className="rule-fancy" />
            <p className="label text-ink-soft">
              EST. 2026 · ANTALYA · TÜRKİYE
            </p>
          </div>
        </div>

        <div className="lg:col-span-9">
          <p className="max-w-3xl font-display text-2xl leading-snug text-ink sm:text-3xl">
            <span className="float-left mr-3 mt-1 font-display text-7xl leading-none text-ember">
              {t("p1").slice(0, 1)}
            </span>
            {t("p1").slice(1)}
          </p>

          <p className="mt-10 max-w-3xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {t("p2")}
          </p>

          <div className="mt-14 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-10 sm:grid-cols-4">
            <Stat label="DISTANCE" value="6 → 70" suffix="KM" />
            <Stat label="ELEVATION" value="200 → 3,500" suffix="M+" />
            <Stat label="LANDMARKS" value="12" />
            <Stat label="AID STATIONS" value="24" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div>
      <div className="label text-ink-soft">{label}</div>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="numeral text-3xl sm:text-4xl">{value}</span>
        {suffix && (
          <span className="font-mono text-xs tracking-widest text-ink-soft">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
