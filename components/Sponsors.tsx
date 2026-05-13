import { useTranslations } from "next-intl";
import { Marquee } from "./Marquee";

const SPONSOR_NAMES = [
  "ANTALYA",
  "ASICS",
  "GARMIN",
  "HERBALIFE",
  "POWER·APP",
  "SEGWAY",
  "SWISSÔTEL",
  "ANADOLU",
  "ALMIRA",
];

function Tier({
  label,
  count,
  size = "md",
}: {
  label: string;
  count: number;
  size?: "sm" | "md" | "lg";
}) {
  const t = useTranslations("Sponsors");
  const widthClass =
    size === "lg" ? "w-48" : size === "sm" ? "w-32" : "w-40";

  return (
    <div className="flex flex-col items-center gap-6 border-t border-line pt-10">
      <div className="flex items-center gap-3 label text-ink-soft">
        <span className="block h-1.5 w-1.5 rounded-full bg-ember" />
        {label}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`${widthClass} flex h-16 items-center justify-center bg-paper text-ink/35 label`}
            style={{ boxShadow: "inset 0 0 0 1px rgba(27,24,23,0.06)" }}
          >
            {t("placeholder")}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Sponsors() {
  const t = useTranslations("Sponsors");

  return (
    <section id="sponsors" className="bg-bone py-20 sm:py-28">
      {/* marquee strip */}
      <Marquee className="mb-20 border-y border-line bg-paper py-5 text-ink/70">
        {SPONSOR_NAMES.concat(SPONSOR_NAMES).map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="mx-8 flex items-center gap-8 font-mono text-xs tracking-[0.4em]"
          >
            {name}
            <span aria-hidden className="text-ember">
              ✦
            </span>
          </span>
        ))}
      </Marquee>

      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-14 px-5 sm:px-8">
        <header className="text-center">
          <span className="label text-ink-soft">{t("sectionLabel")}</span>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            {t("heading")}
          </h2>
        </header>

        <Tier label={t("title")} count={1} size="lg" />
        <Tier label={t("main")} count={3} size="md" />
        <Tier label={t("co")} count={6} size="sm" />
        <Tier label={t("official")} count={6} size="sm" />
        <Tier label={t("csr")} count={1} size="md" />
      </div>
    </section>
  );
}
