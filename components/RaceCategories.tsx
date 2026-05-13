import { useTranslations } from "next-intl";
import { RACES } from "@/lib/event";
import { RaceCard } from "./RaceCard";

export function RaceCategories() {
  const t = useTranslations("Races");
  const [ultra, ...rest] = RACES;

  return (
    <section
      id="races"
      className="relative overflow-hidden border-y border-line bg-bone-deep/60"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-10">
          <div className="max-w-2xl">
            <span className="label text-ink-soft">{t("sectionLabel")}</span>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
              {t("title")}.
            </h2>
            <p className="mt-4 max-w-md font-display-wonk text-lg leading-snug text-ink-soft">
              {t("subtitle")}
            </p>
          </div>
          <div className="hidden label text-ink-soft sm:block">
            {t("summary")}
          </div>
        </div>

        {/* featured ultra */}
        <div className="mt-10">
          <RaceCard race={ultra} variant="featured" index={1} />
        </div>

        {/* grid of the rest */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((race, i) => (
            <RaceCard key={race.code} race={race} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
