import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { KIDS_REGISTER_URL } from "@/lib/event";

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
                src="/races/kids.webp"
                alt={t("imageAlt")}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <span className="label text-ember">{t("eyebrow")}</span>
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

              <div className="flex flex-col gap-4">
                <p className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                  <span
                    aria-hidden
                    className="mt-[0.5em] block h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                  />
                  {t("onsiteNote")}
                </p>
                <a
                  href={KIDS_REGISTER_URL}
                  target="_blank"
                  rel="noopener"
                  className="group inline-flex w-full items-center justify-center gap-3 bg-ember px-6 py-4 label-lg text-bone transition-colors hover:bg-ember-deep sm:w-auto sm:self-start sm:px-10"
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
