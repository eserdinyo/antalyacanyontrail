import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RaceBadge } from "@/components/RaceBadge";
import { RouteProfile } from "@/components/RouteProfile";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { RACES, REGISTER_URL, getRace, type Race, type RaceColor } from "@/lib/event";

const COLOR_TINT: Record<RaceColor, string> = {
  "ember-deep": "text-ember-deep",
  ember: "text-ember",
  ochre: "text-ochre",
  moss: "text-moss",
  shadow: "text-shadow",
};

const FILL_TINT: Record<RaceColor, string> = {
  "ember-deep": "rgba(122,29,18,0.14)",
  ember: "rgba(218,64,50,0.14)",
  ochre: "rgba(198,140,60,0.18)",
  moss: "rgba(92,107,67,0.18)",
  shadow: "rgba(45,39,36,0.16)",
};

export function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const r of RACES) out.push({ locale, slug: r.slug });
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const race = getRace(slug);
  if (!race) return {};
  const t = await getTranslations({ locale, namespace: "Races" });
  const meta = await getTranslations({ locale, namespace: "Meta" });
  const name = t(`${race.slug}.name`);
  const tagline = t(`${race.slug}.tagline`);
  return {
    title: `${name} · ${meta("title")}`,
    description: tagline,
  };
}

export default async function RaceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const race = getRace(slug);
  if (!race) notFound();

  const t = await getTranslations("Races");
  const td = await getTranslations("RaceDetail");

  const others = RACES.filter((r) => r.slug !== race.slug);

  return (
    <>
      <Header />
      <main>
        <RaceHero race={race} t={t} td={td} />
        <RaceStats race={race} td={td} />
        <RouteProfileBlock race={race} td={td} />
        <RaceBody race={race} t={t} td={td} />
        {race.gpx && <GpxDownload race={race} td={td} />}
        <OtherRaces others={others} t={t} td={td} />
      </main>
      <Footer />
    </>
  );
}

function RaceHero({
  race,
  t,
  td,
}: {
  race: Race;
  t: Awaited<ReturnType<typeof getTranslations<"Races">>>;
  td: Awaited<ReturnType<typeof getTranslations<"RaceDetail">>>;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0">
        <Image
          src={race.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-shadow/30 via-shadow/55 to-shadow/85"
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 pt-10 pb-16 text-bone sm:px-8 sm:pt-14 sm:pb-24">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/#races"
            className="inline-flex items-center gap-2 label text-bone/75 hover-swell hover:text-bone"
          >
            <span aria-hidden>←</span> {td("back")}
          </Link>
          {race.gpx ? (
            <a
              href={race.gpx.file}
              download
              className="group inline-flex items-center gap-2 border border-bone/40 px-4 py-2 label text-bone transition-colors hover:border-bone hover:bg-bone/10"
            >
              <span aria-hidden>↓</span> {td("downloadCta")}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 border border-bone/20 px-4 py-2 label text-bone/45">
              {td("downloadSoon")}
            </span>
          )}
        </div>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="label text-bone/65">
              {td("kicker")} · {race.code}
            </p>
            <h1 className="mt-4 font-display text-[12vw] leading-[0.9] tracking-tight sm:text-7xl lg:text-[8rem]">
              {t(`${race.slug}.name`)}
            </h1>
            <p className="mt-5 max-w-xl font-display-wonk text-xl leading-snug text-bone/85 sm:text-2xl">
              {t(`${race.slug}.tagline`)}
            </p>
          </div>

          <div className="shrink-0">
            <RaceBadge race={race} size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

function RaceStats({
  race,
  td,
}: {
  race: Race;
  td: Awaited<ReturnType<typeof getTranslations<"RaceDetail">>>;
}) {
  const items: { label: string; value: string; sub?: string }[] = [
    {
      label: td("statDistance"),
      value: `${race.distanceKm} KM`,
      sub: race.gpx ? `${td("statMeasured")} · ${race.gpx.measuredKm} KM` : undefined,
    },
    {
      label: td("statElevation"),
      value: `${race.elevationM} M+`,
      sub: race.gpx ? `${td("statMeasured")} · ${race.gpx.ascentM} M+` : undefined,
    },
    {
      label: td("statLow"),
      value: race.gpx ? `${race.gpx.minEleM} M` : td("tba"),
    },
    {
      label: td("statHigh"),
      value: race.gpx ? `${race.gpx.maxEleM} M` : td("tba"),
    },
  ];

  return (
    <section className="border-b border-line bg-bone">
      <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
          <span className="label text-ink-soft">{td("summary")}</span>
        </div>
        <div className="grid grid-cols-2 gap-px bg-line/60 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.label}
              className="bg-bone px-2 py-8 sm:px-6"
            >
              <p className="label text-ink-soft">{it.label}</p>
              <p className="mt-3 numeral text-3xl sm:text-4xl">{it.value}</p>
              {it.sub && (
                <p className="mt-2 label text-ink-soft/70">{it.sub}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RouteProfileBlock({
  race,
  td,
}: {
  race: Race;
  td: Awaited<ReturnType<typeof getTranslations<"RaceDetail">>>;
}) {
  const distanceForAxis = race.gpx?.measuredKm ?? race.distanceKm;
  const min = race.gpx?.minEleM;
  const max = race.gpx?.maxEleM;
  const hasAxes = race.gpx != null;

  return (
    <section className="border-b border-line bg-bone-deep/60">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            {td("profileTitle")}
          </h2>
          <div className="flex flex-wrap items-center gap-5">
            <p className="max-w-md text-sm leading-relaxed text-ink-soft">
              {race.gpx ? td("profileNote") : td("profilePlaceholder")}
            </p>
            {race.gpx && (
              <a
                href={race.gpx.file}
                download
                className="group inline-flex shrink-0 items-center gap-2 border border-ink px-4 py-2 label text-ink transition-colors hover:bg-ink hover:text-bone"
              >
                <span aria-hidden>↓</span> {td("downloadCta")}
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 surface-paper p-4 sm:p-8">
          <RouteProfile
            profile={race.profile}
            distanceKm={distanceForAxis}
            minEleM={min}
            maxEleM={max}
            stroke="var(--ink)"
            fill={FILL_TINT[race.color]}
            showAxes={hasAxes}
            className={COLOR_TINT[race.color]}
            labels={
              hasAxes
                ? {
                    elevation: td("axisElevation"),
                    distance: td("axisDistance"),
                  }
                : undefined
            }
          />
        </div>
      </div>
    </section>
  );
}

function RaceBody({
  race,
  t,
  td,
}: {
  race: Race;
  t: Awaited<ReturnType<typeof getTranslations<"Races">>>;
  td: Awaited<ReturnType<typeof getTranslations<"RaceDetail">>>;
}) {
  return (
    <section className="border-b border-line bg-bone">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_360px]">
        <div className="max-w-2xl">
          <span className="label text-ink-soft">{td("courseTitle")}</span>
          <p className="mt-4 font-display-wonk text-2xl leading-snug sm:text-3xl">
            {t(`${race.slug}.description`)}
          </p>
        </div>

        <div className="surface-paper flex flex-col gap-5 p-6 sm:p-8">
          <span className="label text-ink-soft">{race.code}</span>
          <p className="font-display text-2xl leading-tight tracking-tight">
            {t(`${race.slug}.name`)}
          </p>
          <a
            href={REGISTER_URL}
            className="group mt-2 inline-flex items-center justify-between gap-3 bg-ink px-5 py-4 label-lg text-bone transition-colors hover:bg-ember"
          >
            {td("register")}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function GpxDownload({
  race,
  td,
}: {
  race: Race;
  td: Awaited<ReturnType<typeof getTranslations<"RaceDetail">>>;
}) {
  if (!race.gpx) return null;

  return (
    <section className="border-b border-line bg-shadow text-bone">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-20">
        <div className="max-w-xl">
          <span className="label text-bone/60">{td("downloadTitle")}</span>
          <p className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            {td("downloadDesc")}
          </p>
        </div>
        <a
          href={race.gpx.file}
          download
          className="group inline-flex items-center gap-3 self-start border border-bone/40 px-6 py-4 label-lg text-bone transition-colors hover:bg-ember hover:border-ember sm:self-auto"
        >
          {td("downloadCta")}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}

function OtherRaces({
  others,
  t,
  td,
}: {
  others: Race[];
  t: Awaited<ReturnType<typeof getTranslations<"Races">>>;
  td: Awaited<ReturnType<typeof getTranslations<"RaceDetail">>>;
}) {
  return (
    <section className="border-b border-line bg-bone-deep/60">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-end justify-between gap-4 border-b border-line pb-6">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            {td("otherRaces")}
          </h2>
          <Link
            href="/#races"
            className="label hover-swell text-ink-soft hover:text-ink"
          >
            {td("back")} →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-px bg-line/60 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((r) => (
            <Link
              key={r.code}
              href={`/races/${r.slug}`}
              className="group flex flex-col gap-4 bg-bone px-5 py-7 transition-colors hover:bg-paper"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="label text-ink-soft">{r.code}</span>
                <RaceBadge race={r} size="sm" />
              </div>
              <p className="font-display text-xl leading-tight tracking-tight">
                {t(`${r.slug}.name`)}
              </p>
              <p className="text-xs font-bold tracking-widest text-ink">
                {r.distanceKm}KM · {r.elevationM}M+
              </p>
              <span className="mt-auto inline-flex items-center gap-2 label text-ink-soft group-hover:text-ink">
                {t("details")} <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
