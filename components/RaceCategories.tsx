import { useTranslations } from "next-intl";
import Image from "next/image";
import type { CSSProperties } from "react";

import { Link } from "@/i18n/navigation";
import { RACES, type Race } from "@/lib/event";
import { ItraPoints } from "./ItraPoints";
import { UtmbCategory } from "./UtmbCategory";

const PANEL_TINT: Record<
  Race["color"],
  {
    accent: string;
    wash: string;
    glow: string;
  }
> = {
  "ember-deep": {
    accent: "#f24932",
    wash: "rgba(122, 29, 18, 0.7)",
    glow: "rgba(255, 103, 62, 0.34)",
  },
  ember: {
    accent: "#ff725c",
    wash: "rgba(188, 44, 31, 0.68)",
    glow: "rgba(255, 160, 78, 0.34)",
  },
  ochre: {
    accent: "#f2af3f",
    wash: "rgba(166, 103, 24, 0.66)",
    glow: "rgba(255, 208, 91, 0.34)",
  },
  pine: {
    accent: "#5fc9a6",
    wash: "rgba(30, 78, 66, 0.72)",
    glow: "rgba(112, 224, 184, 0.3)",
  },
  moss: {
    accent: "#9fc267",
    wash: "rgba(70, 94, 48, 0.7)",
    glow: "rgba(176, 223, 110, 0.32)",
  },
  shadow: {
    accent: "#a99d95",
    wash: "rgba(48, 42, 40, 0.75)",
    glow: "rgba(182, 151, 255, 0.26)",
  },
};

export function RaceCategories() {
  const t = useTranslations("Races");

  return (
    <section
      id="races"
      className="relative overflow-hidden border-y border-line bg-shadow text-bone"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(circle at 18% 8%, rgba(218,64,50,0.38), transparent 28%), radial-gradient(circle at 80% 16%, rgba(198,140,60,0.3), transparent 24%), linear-gradient(180deg, rgba(26,22,20,0.2), rgba(26,22,20,0.92))",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-bone/15 pb-10">
          <div className="max-w-2xl">
            <span className="label text-bone/55">{t("sectionLabel")}</span>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
              {t("title")}.
            </h2>
            <p className="mt-4 max-w-md font-display-wonk text-lg leading-snug text-bone/70">
              {t("subtitle")}
            </p>
          </div>
          <div className="hidden label text-bone/55 sm:block">
            {t("summary")}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px bg-bone/12 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
          {RACES.map((race) => (
            <RacePanel key={race.code} race={race} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RacePanel({ race }: { race: Race }) {
  const t = useTranslations("Races");
  const tint = PANEL_TINT[race.color];

  return (
    <Link
      href={`/races/${race.slug}`}
      className="group relative isolate flex min-h-[440px] overflow-hidden bg-shadow text-bone transition-transform duration-500 hover:z-10 hover:scale-[1.012] lg:min-h-[540px]"
      style={
        {
          "--race-accent": tint.accent,
          "--race-glow": tint.glow,
        } as CSSProperties
      }
    >
      <Image
        src={race.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
        className="absolute inset-0 -z-30 object-cover grayscale-[0.72] saturate-[0.68] transition duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:saturate-100"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background: `linear-gradient(180deg, rgba(10,8,7,0.76) 0%, rgba(10,8,7,0.24) 40%, ${tint.wash} 100%)`,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-[58%] opacity-95 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(180deg, transparent, var(--race-glow) 38%, rgba(10,8,7,0.9) 100%)",
        }}
      />
      <div className="flex min-w-0 flex-1 flex-col justify-between p-6 text-center sm:p-7 lg:p-6 xl:p-7">
        <div className="flex flex-1 items-start justify-center py-8">
          <div className="w-full">
            {/* KM anchors to the numeral itself, so the badge row below
                cannot push it off the card. */}
            <span className="relative inline-block">
              <p
                className="font-display text-[6.5rem] leading-none tracking-tight text-white drop-shadow-[0_12px_28px_rgba(0,0,0,0.36)] sm:text-[7rem] lg:text-[5.8rem] xl:text-[7rem]"
                aria-hidden
              >
                {race.distanceKm}
              </p>
              <span
                className="absolute -right-6 top-2 rotate-90 label text-bone/65"
                aria-hidden
              >
                KM
              </span>
            </span>
            <div
              aria-hidden
              className="mx-auto mt-2 h-1.5 w-16"
              style={{ backgroundColor: tint.accent }}
            />
            <p className="mt-5 text-sm font-black tracking-[0.22em] text-bone">
              {race.elevationM}M+
            </p>
            <div className="mt-5 flex min-h-9 flex-wrap items-center justify-center gap-2">
              <UtmbCategory race={race} size="sm" />
              <ItraPoints race={race} size="sm" />
            </div>
          </div>
        </div>

        <div className="w-full border-t border-bone/18 pt-7">
          <h3 className="mx-auto max-w-[17rem] text-balance font-display text-3xl leading-[0.92] tracking-tight text-white sm:text-4xl lg:text-[1.9rem] xl:text-[2.25rem]">
            {t(`${race.slug}.name`)}
          </h3>
          <span className="mt-7 inline-flex items-center gap-2 border border-bone/35 px-4 py-3 label text-bone transition-colors group-hover:border-[var(--race-accent)] group-hover:bg-[var(--race-accent)] group-hover:text-shadow">
            {t("details")}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
