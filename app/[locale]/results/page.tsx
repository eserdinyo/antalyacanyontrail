import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FileText } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type RaceResults = {
  slug: string;
  distance: string;
  name: string;
  /** Race day; key under the "Results" messages namespace. */
  day: "saturday" | "sunday";
};

const RESULTS: RaceResults[] = [
  {
    slug: "70k",
    distance: "70K",
    name: "Termessos Ultra",
    day: "saturday",
  },
  { slug: "45k", distance: "45K", name: "Goat Ultra", day: "saturday" },
  { slug: "36k", distance: "36K", name: "Alageyik Trail", day: "saturday" },
  { slug: "22k", distance: "22K", name: "Forest Trail", day: "saturday" },
  { slug: "13k", distance: "13K", name: "Güver Cliff Trail", day: "sunday" },
  { slug: "7k", distance: "7K", name: "My Pace Run", day: "sunday" },
];

const FILES = [
  { key: "women", suffix: "kadinlar" },
  { key: "men", suffix: "erkekler" },
  { key: "overall", suffix: "genel" },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = await getTranslations({ locale, namespace: "Meta" });
  const t = await getTranslations({ locale, namespace: "Results" });

  return {
    title: `${t("metaTitle")} · ${meta("title")}`,
    description: t("lede"),
  };
}

export default async function ResultsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Results");

  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden border-b border-line bg-shadow text-bone">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(218,64,50,0.32),transparent_28%),radial-gradient(circle_at_78%_0%,rgba(198,140,60,0.22),transparent_30%),linear-gradient(135deg,rgba(27,24,23,0.35),rgba(26,22,20,0.96))]"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-20 bg-topo mix-blend-screen"
          />
          <div className="relative mx-auto max-w-[1400px] px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
            <div className="max-w-5xl">
              <p className="label text-bone/65">{t("eyebrow")}</p>
              <h1 className="mt-5 font-display text-[14vw] leading-[0.84] tracking-tight sm:text-7xl lg:text-[8rem]">
                {t("title")}
              </h1>
              <p className="mt-8 max-w-2xl border-t border-bone/20 pt-6 font-display-wonk text-xl leading-snug text-bone/85 sm:text-2xl">
                {t("lede")}
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-page">
          <div className="mx-auto grid max-w-[1400px] gap-6 px-5 py-14 sm:px-8 sm:py-20">
            {RESULTS.map((race) => (
              <article
                key={race.slug}
                className="grid gap-6 border border-line bg-paper p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center"
              >
                <div>
                  <p className="label text-ember">{t(race.day)}</p>
                  <h2 className="mt-3 font-display text-4xl leading-none tracking-tight sm:text-5xl">
                    {race.distance}{" "}
                    <span className="text-ink-soft">{race.name}</span>
                  </h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {FILES.map((file) => (
                    <a
                      key={file.key}
                      href={`/results/${race.slug}-${file.suffix}.pdf`}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex min-h-12 items-center justify-center gap-2 border border-line bg-page px-5 py-3 label-lg text-[13px]! transition-colors hover:border-ember hover:bg-ember hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70"
                    >
                      <FileText size={17} strokeWidth={2} aria-hidden />
                      {race.distance} {t(file.key)}
                      <span className="sr-only"> ({t("pdf")})</span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
