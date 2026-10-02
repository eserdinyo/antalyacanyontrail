import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RACE_RULES, type RuleContent } from "@/lib/race-rules";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "RaceRules" });
  const meta = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: `${t("title")} · ${meta("title")}`,
    description: t("description"),
  };
}

export default async function RaceRulesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("RaceRules");

  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden border-b border-line bg-shadow text-bone">
          <Image
            src="/races/race-rules-hero.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-shadow/35 via-shadow/70 to-shadow"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-shadow to-transparent"
          />

          <div className="relative mx-auto max-w-[1400px] px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
            <div className="max-w-5xl">
              <p className="label text-bone/65">{t("eyebrow")}</p>
              <h1 className="mt-5 font-display text-[13vw] leading-[0.86] tracking-tight sm:text-7xl lg:text-[7.5rem]">
                {t("title")}
              </h1>
              <div className="mt-8 grid gap-6 border-t border-bone/20 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="max-w-2xl font-display-wonk text-xl leading-snug text-bone/85 sm:text-2xl">
                  {t("lede")}
                </p>
                <p className="label text-bone/60">{t("dateRange")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-page">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[290px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 border-t border-line pt-5">
                <p className="label text-ink-soft">{t("toc")}</p>
                <nav className="mt-6 flex flex-col gap-3">
                  {RACE_RULES.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-sm font-bold leading-tight text-ink-soft transition-colors hover:text-ink"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y border-line py-4 lg:hidden">
                <span className="label text-ink-soft">{t("toc")}</span>
                <span className="label text-ink-soft">
                  {RACE_RULES.length} {t("sectionCount")}
                </span>
              </div>

              <article className="divide-y divide-line">
                {RACE_RULES.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 py-10 first:pt-0 sm:py-12"
                  >
                    <div className="grid gap-5 lg:grid-cols-[90px_1fr]">
                      <p className="label text-ember">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <div>
                        <h2 className="font-display text-3xl leading-none tracking-tight sm:text-4xl">
                          {section.title}
                        </h2>
                        <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                          {section.content.map((block, blockIndex) => (
                            <RuleBlock
                              key={`${section.id}-${blockIndex}`}
                              block={block}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function RuleBlock({ block }: { block: RuleContent }) {
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
