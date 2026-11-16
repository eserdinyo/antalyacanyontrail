import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = await getTranslations({ locale, namespace: "Meta" });
  const t = await getTranslations({ locale, namespace: "Kids" });

  return {
    title: `${t("title")} · ${meta("title")}`,
    description: t("metaDescription"),
  };
}

export default async function KidsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Kids");

  const kitSlots = [
    { date: t("kitSlot0Date"), detail: t("kitSlot0Detail") },
    { date: t("kitSlot1Date"), detail: t("kitSlot1Detail") },
    { date: t("kitSlot2Date"), detail: t("kitSlot2Detail") },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line bg-page">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-12 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[1122/1402] w-full overflow-hidden">
              <Image
                src="/races/kids-v2.webp"
                alt={t("imageAlt")}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent"
              />
              <Image
                src="/logos/zenova-vertical-white.svg"
                alt="Zenova Gym"
                width={1731}
                height={2000}
                className="absolute right-5 bottom-5 h-auto w-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:right-8 sm:bottom-8 sm:w-[88px]"
              />
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-ember sm:text-base">
                  {t("eyebrow")}
                </span>
                <h1 className="mt-4 font-display text-5xl leading-none tracking-tight sm:text-6xl">
                  {t("title")}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
                  {t("lede")}
                </p>
              </div>

              <dl className="divide-y divide-line border-y border-line">
                <div className="grid gap-2 py-5 sm:grid-cols-[160px_1fr] sm:gap-6">
                  <dt className="label text-ink-soft">{t("startLabel")}</dt>
                  <dd>
                    <p className="numeral text-3xl sm:text-4xl">
                      {t("startTime")}
                    </p>
                    <p className="mt-1 text-sm text-ink-soft">
                      {t("startDate")}
                    </p>
                  </dd>
                </div>
                <div className="grid gap-2 py-5 sm:grid-cols-[160px_1fr] sm:gap-6">
                  <dt className="label text-ink-soft">{t("kitLabel")}</dt>
                  <dd className="grid gap-3">
                    {kitSlots.map((slot) => (
                      <div key={slot.date}>
                        <p className="font-display text-xl leading-tight tracking-tight">
                          {slot.date}
                        </p>
                        <p className="mt-0.5 text-sm text-ink-soft">
                          {slot.detail}
                        </p>
                      </div>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
