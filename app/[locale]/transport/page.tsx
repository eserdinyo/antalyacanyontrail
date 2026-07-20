import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Building2,
  Bus,
  Car,
  Info,
  MapPin,
  Plane,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  getTransport,
  type TransportSection,
  type TransportSectionId,
} from "@/lib/transport";

const SECTION_ICONS: Record<TransportSectionId, LucideIcon> = {
  airport: Plane,
  "city-center": Building2,
  "group-transfers": Users,
  "private-vehicle": Car,
  "transfer-service": Bus,
  navigation: MapPin,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = await getTranslations({ locale, namespace: "Meta" });
  const transport = getTransport(locale);

  return {
    title: `${transport.metaTitle} · ${meta("title")}`,
    description: transport.metaDescription,
  };
}

export default async function TransportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const transport = getTransport(locale);

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
              <p className="label text-bone/65">{transport.eyebrow}</p>
              {/* 12vw, not the 14vw used by sibling heroes: the EN title
                  "Transportation" is a single unbreakable word and overflows
                  the hero at 14vw on phones. */}
              <h1 className="mt-5 font-display text-[12vw] leading-[0.84] tracking-tight sm:text-7xl lg:text-[8rem]">
                {transport.title}
              </h1>
              <p className="mt-8 max-w-2xl border-t border-bone/20 pt-6 font-display-wonk text-xl leading-snug text-bone/85 sm:text-2xl">
                {transport.lede}
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-bone">
          <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20">
            <article className="min-w-0">
              {transport.sections.map((section, index) => (
                <TransportSectionBlock
                  key={section.id}
                  section={section}
                  index={index}
                />
              ))}

              <aside className="mt-12 grid gap-8 lg:grid-cols-[90px_1fr]">
                <div className="hidden lg:block" />
                <div className="border border-line bg-paper p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <Info
                      size={20}
                      strokeWidth={2}
                      aria-hidden
                      className="shrink-0 text-ember"
                    />
                    <h2 className="font-display text-2xl leading-none tracking-tight sm:text-3xl">
                      {transport.note.title}
                    </h2>
                  </div>
                  <ul className="mt-5 grid gap-3">
                    {transport.note.items.map((item, index) => (
                      <li
                        key={index}
                        className="grid grid-cols-[10px_1fr] gap-3 text-base leading-relaxed text-ink-soft"
                      >
                        <span
                          aria-hidden
                          className="mt-2.5 h-1.5 w-1.5 bg-ember"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function TransportSectionBlock({
  section,
  index,
}: {
  section: TransportSection;
  index: number;
}) {
  const Icon = SECTION_ICONS[section.id];

  return (
    <section
      id={section.id}
      className="scroll-mt-24 border-b border-line py-10 first:pt-0 sm:py-14"
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

          <div className="mt-5 grid gap-4">
            {section.body.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-ink-soft sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
