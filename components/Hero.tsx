import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  HERO_IMAGE,
  RACES,
  EVENT_COORDS,
  EDITION,
  REGISTER_URL,
} from "@/lib/event";
import { RaceBadge } from "./RaceBadge";
import { ElevationProfile } from "./ElevationProfile";
import { Compass } from "./Decorations";

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

      {/* top meta strip */}
      <div className="relative border-b border-bone/15">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3 label sm:px-8 reveal">
          <span className="flex items-center gap-3 text-bone/75">
            <span className="block h-1 w-1 rounded-full bg-ember" />
            {EVENT_COORDS.place}
          </span>
          <span className="hidden text-bone/60 sm:inline">
            {EVENT_COORDS.lat} &nbsp;·&nbsp; {EVENT_COORDS.lng}
          </span>
          <span className="text-bone/75">EDITION · {EDITION}</span>
        </div>
      </div>

      {/* headline grid */}
      <div className="relative mx-auto flex min-h-[78vh] max-w-[1400px] flex-col justify-between px-5 pb-6 pt-14 sm:px-8 sm:pt-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <p className="label-lg text-bone/75 reveal delay-1">
              {t("subtitle")}
            </p>

            <h1 className="reveal delay-2 mt-6 font-display text-[14vw] leading-[0.86] tracking-tight sm:text-[10vw] lg:text-[8.5vw]">
              <span className="block">{t("kicker")}</span>
              <span className="block font-display-wonk text-ember">
                {t("tagline")}
              </span>
            </h1>

            <div className="reveal delay-3 mt-10 flex flex-wrap items-end gap-x-10 gap-y-4">
              <div>
                <div className="label text-bone/60">DATES</div>
                <div className="mt-1 font-display text-2xl tracking-tight sm:text-3xl">
                  {t("dateRange")}
                </div>
              </div>
              <div className="hidden h-8 w-px bg-bone/25 sm:block" />
              <div>
                <div className="label text-bone/60">FIVE RACES</div>
                <div className="mt-1 font-mono text-base tracking-widest">
                  70 · 42 · 30 · 16 · 6&nbsp;<span className="opacity-70">KM</span>
                </div>
              </div>
            </div>

            <div className="reveal delay-4 mt-10 flex flex-wrap items-center gap-3">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-3 bg-ember px-6 py-3 label-lg text-bone transition-colors hover:bg-ember-deep"
              >
                <span className="block h-1.5 w-1.5 rounded-full bg-bone" />
                REGISTER
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#races"
                className="inline-flex items-center gap-3 border border-bone/30 px-6 py-3 label-lg text-bone/90 transition-colors hover:bg-bone/5"
              >
                EXPLORE THE COURSE
              </a>
            </div>
          </div>

          {/* right column — compass + small marginalia */}
          <aside className="reveal delay-3 hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:justify-between">
            <div className="text-bone/80">
              <Compass size={84} />
            </div>
            <div className="max-w-[260px] text-right">
              <div className="label text-bone/60">FROM THE FIELD NOTES</div>
              <p className="mt-3 font-display-wonk text-lg leading-snug text-bone/90">
                “Where limestone cliffs meet the Mediterranean and pine forests
                climb the Taurus.”
              </p>
            </div>
          </aside>
        </div>

        {/* badge row */}
        <div className="reveal delay-5 mt-12 flex flex-wrap items-end justify-start gap-3 sm:gap-4">
          {RACES.map((race) => (
            <RaceBadge key={race.code} race={race} size="md" />
          ))}
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
