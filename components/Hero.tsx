import Image from "next/image";
import { useTranslations } from "next-intl";
import { HERO_IMAGE, RACES, REGISTER_URL } from "@/lib/event";
import { RaceBadge } from "./RaceBadge";

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
      <div className="relative mx-auto flex min-h-[88vh] max-w-[1400px] flex-col justify-between gap-12 px-5 pb-12 pt-12 sm:pb-16 sm:min-h-[90vh] sm:px-8 sm:pt-[140px]">
        <div className="flex flex-1 items-center max-w-5xl sm:flex-none sm:items-start">
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
            <Image
              src="/logos/utmb.png"
              alt="UTMB Index"
              width={905}
              height={217}
              className="h-10 w-auto self-start"
            />
            <div>
              <div className="label text-bone/60">{t("datesLabel")}</div>
              <div className="mt-1 font-display text-xl tracking-tight sm:text-3xl">
                {t("dateRange")}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={REGISTER_URL}
                className="group inline-flex w-full items-center justify-center gap-3 bg-ember px-6 py-4 label-lg text-bone transition-colors hover:bg-ember-deep sm:w-auto sm:justify-start sm:py-3"
              >
                <span className="block h-1.5 w-1.5 rounded-full bg-bone" />
                {t("register")}
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* race badges — desktop only */}
          <div className="reveal delay-5 hidden sm:flex sm:flex-row sm:items-end sm:justify-end sm:gap-4">
            {RACES.map((race) => (
              <RaceBadge key={race.code} race={race} size="md" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
