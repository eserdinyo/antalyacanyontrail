import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RaceBadge } from "@/components/RaceBadge";
import { ItraPoints } from "@/components/ItraPoints";
import { UtmbCategory } from "@/components/UtmbCategory";
import { CheckpointProfile } from "@/components/checkpoints/CheckpointProfile";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { RACES, getRace, type Race } from "@/lib/event";
import { ROUTE_RULES, type RouteRuleContent, type RouteRules } from "@/lib/route-rules";
import { ROUTE_RULES_EN } from "@/lib/route-rules-en";

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
  const routeRules = (locale === "en" ? ROUTE_RULES_EN : ROUTE_RULES)[race.slug];

  return (
    <>
      <Header />
      <main>
        <RaceHero race={race} t={t} td={td} />
        <RaceStats race={race} td={td} />
        {race.traceDeTrailId != null && (
          <TraceDeTrailBlock race={race} td={td} />
        )}
        <CheckpointProfile race={race} td={td} />
        <RaceBody race={race} t={t} td={td} />
        {routeRules && <RouteRulesBlock routeRules={routeRules} td={td} />}
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
        </div>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="font-display text-[12vw] leading-[0.9] tracking-tight sm:text-7xl lg:text-[8rem]">
              {t(`${race.slug}.name`)}
            </h1>
            <p className="mt-5 max-w-xl font-display-wonk text-xl leading-snug text-bone/85 sm:text-2xl">
              {t(`${race.slug}.tagline`)}
            </p>
            {/* Sanctioning row: ITRA wordmark plus the course's UTMB Index
                and ITRA points badges, all 36px tall on one baseline. */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Image
                src="/logos/itra.svg"
                alt="ITRA"
                width={216}
                height={40}
                className="h-9 w-auto"
              />
              <UtmbCategory race={race} size="sm" />
              <ItraPoints race={race} size="sm" />
            </div>
          </div>

          <RaceBadge race={race} size="lg" />
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
  const items: { label: string; value: string }[] = [
    {
      label: td("statDistance"),
      value: `${race.distanceKm} KM`,
    },
    {
      label: td("statElevation"),
      value: `${race.elevationM} M+`,
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
    <section className="border-b border-line bg-page">
      <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
          <span className="label text-ink-soft">{td("summary")}</span>
          <div className="flex w-full flex-col gap-3 sm:w-auto">
            <a
              href={race.registerUrl}
              target="_blank"
              rel="noopener"
              className="group inline-flex w-full items-center justify-center gap-3 bg-ember px-6 py-4 label-lg text-bone transition-colors hover:bg-ember-deep sm:justify-start sm:py-3"
            >
              <span className="block h-1.5 w-1.5 rounded-full bg-bone" />
              {td("register")}
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            {race.gpx && (
              <a
                href={race.gpx.file}
                download
                className="group inline-flex w-full items-center justify-center gap-3 border border-ink/30 px-6 py-4 label-lg text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone sm:justify-start sm:py-3"
              >
                {td("downloadCta")}
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </a>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-px bg-line/60 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.label}
              className="bg-page px-2 py-8 sm:px-6"
            >
              <p className="label text-ink-soft">{it.label}</p>
              <p className="mt-3 numeral text-3xl sm:text-4xl">{it.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TraceDeTrailBlock({
  race,
  td,
}: {
  race: Race;
  td: Awaited<ReturnType<typeof getTranslations<"RaceDetail">>>;
}) {
  if (race.traceDeTrailId == null && !race.mapUpdating) return null;

  return (
    <section className="border-b border-line bg-page">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            {td("mapTitle")}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft">
            {td(race.mapUpdating ? "mapUpdatingNote" : "mapNote")}
          </p>
        </div>

        {race.mapUpdating ? (
          <div className="mt-8 surface-paper flex min-h-[320px] flex-col items-center justify-center gap-4 px-6 py-16 text-center sm:min-h-[420px]">
            <span className="block h-2 w-2 animate-pulse rounded-full bg-ember" />
            <p className="font-display text-2xl tracking-tight sm:text-3xl">
              {td("mapUpdatingTitle")}
            </p>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft">
              {td("mapUpdatingBody")}
            </p>
          </div>
        ) : (
          <div className="mt-8 surface-paper p-2 sm:p-4">
            <iframe
              src={`https://tracedetrail.fr/en/iframe/${race.traceDeTrailId}`}
              title={td("mapTitle")}
              allowFullScreen
              scrolling="no"
              className="block h-[800px] w-full border-0"
            />
          </div>
        )}
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
    <section className="border-b border-line bg-page">
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
            href={race.registerUrl}
            target="_blank"
            rel="noopener"
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

function RouteRulesBlock({
  routeRules,
  td,
}: {
  routeRules: RouteRules;
  td: Awaited<ReturnType<typeof getTranslations<"RaceDetail">>>;
}) {
  return (
    <section className="border-b border-line bg-bone-deep/60">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[320px_1fr]">
        <aside>
          <div className="sticky top-24 border-t border-line pt-5">
            <p className="label text-ink-soft">{td("routeRulesLabel")}</p>
            <h2 className="mt-4 font-display text-4xl leading-none tracking-tight sm:text-5xl">
              {td("routeRulesTitle")}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              {routeRules.title}
            </p>
            <p className="mt-2 label text-ember">{routeRules.subtitle}</p>
          </div>
        </aside>

        <article className="divide-y divide-line bg-page px-5 sm:px-8">
          {routeRules.sections.map((section) => (
            <section
              key={section.id}
              className="py-9 first:pt-8 last:pb-8 sm:py-11"
            >
              <h3 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">
                {section.title}
              </h3>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
                {section.content.map((block, index) => (
                  <RouteRuleBlock key={`${section.id}-${index}`} block={block} />
                ))}
              </div>
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}

function RouteRuleBlock({ block }: { block: RouteRuleContent }) {
  if (block.type === "paragraph") {
    return <p>{block.text}</p>;
  }

  return (
    <ul className="grid gap-3">
      {block.items.map((item) => (
        <li key={item} className="grid grid-cols-[14px_1fr] gap-3">
          <span
            aria-hidden
            className="mt-[0.72em] h-1.5 w-1.5 rounded-full bg-ember"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
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
              className="group flex flex-col gap-4 bg-page px-5 py-7 transition-colors hover:bg-paper"
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
