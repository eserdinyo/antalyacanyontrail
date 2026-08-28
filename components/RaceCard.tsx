import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Race } from "@/lib/event";
import { RaceBadge } from "./RaceBadge";
import { ElevationProfile } from "./ElevationProfile";

const COLOR_TINT: Record<Race["color"], string> = {
  "ember-deep": "text-ember-deep",
  ember: "text-ember",
  ochre: "text-ochre",
  pine: "text-pine",
  moss: "text-moss",
  shadow: "text-shadow",
};

export function RaceCard({
  race,
  variant = "default",
}: {
  race: Race;
  variant?: "default" | "featured";
}) {
  const t = useTranslations("Races");
  const featured = variant === "featured";

  return (
    <article
      className={`group relative flex h-full flex-col surface-paper overflow-hidden ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "aspect-[16/12] lg:aspect-auto lg:w-1/2" : "aspect-[5/4]"
        }`}
      >
        <Image
          src={race.image}
          alt=""
          fill
          sizes={
            featured
              ? "(min-width: 1024px) 50vw, 100vw"
              : "(min-width: 1024px) 25vw, 50vw"
          }
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-shadow/45 via-shadow/10 to-transparent"
        />
        <div className="absolute right-4 top-4">
          <RaceBadge race={race} size={featured ? "md" : "sm"} />
        </div>
      </div>

      <div
        className={`flex flex-1 flex-col gap-5 p-6 sm:p-7 ${
          featured ? "lg:p-10" : ""
        }`}
      >
        <div>
          <div className="flex">
            <span className="text-xs font-bold tracking-widest text-ink">
              {race.distanceKm}KM &nbsp;·&nbsp; {race.elevationM}M+
            </span>
          </div>
          <h3
            className={`mt-3 font-display tracking-tight ${
              featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
            }`}
          >
            {t(`${race.slug}.name`)}
          </h3>
          <p className="mt-2 font-display-wonk text-base leading-snug text-ink-soft">
            {t(`${race.slug}.tagline`)}
          </p>
        </div>

        {/* elevation profile thumbnail */}
        <div className="relative h-12 w-full">
          <ElevationProfile
            profile={race.profile}
            stroke="var(--ink)"
            fill="rgba(218,64,50,0.12)"
            className={COLOR_TINT[race.color]}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between border-t border-line pt-1 label text-ink/45">
            <span>{t("start")}</span>
            <span>{t("finish")}</span>
          </div>
        </div>

        <p
          className={`text-sm leading-relaxed text-ink-soft ${
            featured ? "max-w-md text-base" : ""
          }`}
        >
          {t(`${race.slug}.description`)}
        </p>

        <div className="mt-auto border-t border-line pt-4">
          <Link
            href={`/races/${race.slug}`}
            className="inline-flex items-center gap-2 label hover-swell text-ink"
          >
            {t("details")} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
