import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Check,
  ClipboardList,
  Footprints,
  Leaf,
  Recycle,
  UserCog,
  type LucideIcon,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  getSustainability,
  type SustainabilityBlock,
  type SustainabilitySection,
  type SustainabilitySectionId,
} from "@/lib/sustainability";

const SECTION_ICONS: Record<SustainabilitySectionId, LucideIcon> = {
  "green-commitment": Leaf,
  "environmental-policy": ClipboardList,
  "green-manager": UserCog,
  "leave-no-trace": Footprints,
  "sustainable-practices": Recycle,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = await getTranslations({ locale, namespace: "Meta" });
  const sustainability = getSustainability(locale);

  return {
    title: `${sustainability.metaTitle} · ${meta("title")}`,
    description: sustainability.metaDescription,
  };
}

export default async function SustainabilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const sustainability = getSustainability(locale);

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
          <div
            aria-hidden
            className="absolute -right-20 top-10 h-64 w-64 rounded-full border border-bone/10 sm:h-96 sm:w-96"
          />
          <div
            aria-hidden
            className="absolute -bottom-28 left-8 h-56 w-56 rounded-full border border-ember/30 sm:h-80 sm:w-80"
          />

          <div className="relative mx-auto max-w-[1400px] px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
            <div className="max-w-5xl">
              <p className="label text-bone/65">{sustainability.eyebrow}</p>
              {/* 10vw, below the 12vw of the transport hero: "Sürdürülebilirlik"
                  is a single unbreakable 17-character word and overflows the hero
                  on phones at anything larger. */}
              <h1 className="mt-5 font-display text-[10vw] leading-[0.84] tracking-tight sm:text-7xl lg:text-[8rem]">
                {sustainability.title}
              </h1>
              <p className="mt-8 max-w-2xl border-t border-bone/20 pt-6 font-display-wonk text-xl leading-snug text-bone/85 sm:text-2xl">
                {sustainability.lede}
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-bone">
          <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20">
            <article className="min-w-0">
              {sustainability.sections.map((section, index) => (
                <SustainabilitySectionBlock
                  key={section.id}
                  section={section}
                  index={index}
                />
              ))}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SustainabilitySectionBlock({
  section,
  index,
}: {
  section: SustainabilitySection;
  index: number;
}) {
  const Icon = SECTION_ICONS[section.id];

  return (
    <section
      id={section.id}
      className="scroll-mt-24 border-b border-line py-10 first:pt-0 last:border-b-0 sm:py-14"
    >
      <div className="grid gap-6 lg:grid-cols-[90px_1fr] lg:gap-8">
        <p className="label text-ember">{String(index + 1).padStart(2, "0")}</p>

        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <Icon
              size={22}
              strokeWidth={2}
              aria-hidden
              className="shrink-0 text-ink-soft"
            />
            <h2 className="font-display text-3xl leading-none tracking-tight sm:text-4xl">
              {section.title}
            </h2>
          </div>

          <div className="mt-5 grid gap-6">
            {section.blocks.map((block, index) => (
              <BlockView key={index} block={block} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlockView({ block }: { block: SustainabilityBlock }) {
  if (block.kind === "text") {
    return (
      <div className="grid gap-4">
        {block.body.map((paragraph, index) => (
          <p
            key={index}
            className="text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  if (block.kind === "list") {
    return (
      <div>
        {block.intro ? (
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            {block.intro}
          </p>
        ) : null}
        <ul className={`grid gap-3 ${block.intro ? "mt-4" : ""}`}>
          {block.items.map((item, index) => (
            <li
              key={index}
              className="grid grid-cols-[18px_1fr] gap-3 text-base leading-relaxed text-ink-soft"
            >
              {block.style === "check" ? (
                <Check
                  size={18}
                  strokeWidth={2.6}
                  aria-hidden
                  className="mt-1 shrink-0 text-ember"
                />
              ) : (
                <span
                  aria-hidden
                  className="ml-1.5 mt-2.5 h-1.5 w-1.5 bg-ember"
                />
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {block.phases.map((phase) => (
        <div key={phase.title} className="border border-line bg-paper p-5">
          <h3 className="label text-ember">{phase.title}</h3>
          <ul className="mt-4 grid gap-3">
            {phase.items.map((item, index) => (
              <li
                key={index}
                className="grid grid-cols-[16px_1fr] gap-2.5 text-sm leading-relaxed text-ink-soft"
              >
                <Check
                  size={16}
                  strokeWidth={2.6}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-ember"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
