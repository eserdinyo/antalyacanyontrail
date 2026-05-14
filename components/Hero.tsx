import Image from "next/image";
import { useTranslations } from "next-intl";
import { HERO_IMAGE, RACES, REGISTER_URL } from "@/lib/event";
import { RaceBadge } from "./RaceBadge";
import { ElevationProfile } from "./ElevationProfile";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative isolate w-full overflow-hidden bg-shadow text-bone">
      {/* hero image */}
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      {/* warm wash + vignette */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,22,20,0.35) 0%, rgba(122,29,18,0.25) 35%, rgba(26,22,20,0.85) 100%), radial-gradient(120% 80% at 50% 110%, rgba(26,22,20,0.9) 0%, transparent 60%)",
          mixBlendMode: "multiply",
        }}
      />

      {/* headline grid */}
      <div className="relative mx-auto flex min-h-[88vh] max-w-[1400px] flex-col justify-between gap-12 px-5 pb-8 pt-12 sm:min-h-[90vh] sm:px-8 sm:pt-20">
        <div className="max-w-5xl">
          <h1 className="reveal delay-2 font-display leading-[0.88] tracking-tight text-[clamp(4rem,14vw,8.5rem)] sm:leading-[0.86]">
            <span className="block text-white">{t("kicker")}</span>
            <span className="block font-display-wonk text-ember">
              {t("tagline")}
            </span>
          </h1>
        </div>

        {/* bottom row — dates + CTA on left, race badges on right */}
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div className="reveal delay-3 flex flex-col gap-6 sm:gap-8">
            <div>
              <div className="label text-bone/60">{t("datesLabel")}</div>
              <div className="mt-1 font-display text-xl tracking-tight sm:text-3xl">
                {t("dateRange")}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener"
                className="group inline-flex w-full items-center justify-center gap-3 bg-ember px-6 py-4 label-lg text-bone transition-colors hover:bg-ember-deep sm:w-auto sm:justify-start sm:py-3"
              >
                <span className="block h-1.5 w-1.5 rounded-full bg-bone" />
                {t("register")}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* badge row — 3+2 centered grid on mobile, right-anchored row on desktop */}
          <div className="reveal delay-5 grid grid-cols-6 items-end gap-2 sm:flex sm:flex-row sm:justify-end sm:gap-4">
            {RACES.map((race, i) => (
              <div
                key={race.code}
                className={`flex justify-center sm:contents ${
                  i < 3 ? "col-span-2" : ""
                } ${i === 3 ? "col-span-2 col-start-2" : ""} ${
                  i === 4 ? "col-span-2 col-start-4" : ""
                }`}
              >
                <RaceBadge race={race} size="md" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* decorative elevation profile baseline */}
      <div className="relative h-12 w-full text-ember-deep/55">
        <ElevationProfile
          profile={[
            0.2, 0.4, 0.55, 0.4, 0.7, 0.85, 0.6, 0.78, 0.5, 0.6, 0.4, 0.55,
            0.32, 0.45, 0.25, 0.15,
          ]}
          height={48}
          stroke="rgba(243,237,224,0.75)"
          fill="rgba(218,64,50,0.18)"
          className="absolute inset-0"
        />
      </div>
    </section>
  );
}
