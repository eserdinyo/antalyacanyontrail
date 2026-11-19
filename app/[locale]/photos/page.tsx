import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, Images } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const DRIVE = "https://drive.google.com/drive/folders/";

/** A shared Google Drive folder. `day` is the race day (1 = Saturday,
 *  2 = Sunday) and `n` its number within that day; no `day` means the
 *  edition's main album. */
type PhotoAlbum = { folderId: string; day?: 1 | 2; n?: number };

type PhotoYear = { year: number; albums: PhotoAlbum[] };

const YEARS: PhotoYear[] = [
  {
    year: 2026,
    albums: [
      { folderId: "1K9fyjsnLY6_X7UhH67vp5s88igx6N7R6" },
      { folderId: "1zBYjrB7-oFgDxG-LtNzPwA5B7NgnzMqx", day: 1, n: 1 },
      { folderId: "10QJ1kHpIeceYL0FKYeP5zaKnGQlyyZvp", day: 1, n: 2 },
      { folderId: "16AOjz7p26tUe4FaMGTdkDc7nmLvaKH_H", day: 2, n: 1 },
      { folderId: "1-sHbGUV_hlLvbq9t62C4yiAQM2tO4GNj", day: 2, n: 2 },
      { folderId: "1YsMIJwZi_FZFnTf-Dvwa5darUOYhc31E", day: 2, n: 3 },
    ],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = await getTranslations({ locale, namespace: "Meta" });
  const t = await getTranslations({ locale, namespace: "Photos" });

  return {
    title: `${t("metaTitle")} · ${meta("title")}`,
    description: t("lede"),
  };
}

export default async function PhotosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Photos");

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
            {YEARS.map(({ year, albums }) => (
              <article
                key={year}
                className="grid gap-6 border border-line bg-paper p-6 sm:p-8"
              >
                <div>
                  <p className="label text-ember">Antalya Canyon Ultra</p>
                  <h2 className="mt-3 font-display text-4xl leading-none tracking-tight sm:text-5xl">
                    {year}
                  </h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {albums.map((album) => (
                    <a
                      key={album.folderId}
                      href={DRIVE + album.folderId}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-12 items-center justify-center gap-2 border border-line bg-page px-5 py-3 label-lg text-[13px]! transition-colors hover:border-ember hover:bg-ember hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/70"
                    >
                      <Images size={17} strokeWidth={2} aria-hidden />
                      {album.day
                        ? t("dayAlbum", { day: album.day, n: album.n ?? 1 })
                        : t("mainAlbum")}
                      <ArrowUpRight size={16} strokeWidth={2} aria-hidden />
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
