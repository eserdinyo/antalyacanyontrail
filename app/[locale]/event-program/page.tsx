import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { EventProgramDays } from "@/components/EventProgramDays";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getEventProgram } from "@/lib/event-program";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = await getTranslations({ locale, namespace: "Meta" });
  const program = getEventProgram(locale);

  return {
    title: `${program.metaTitle} · ${meta("title")}`,
    description: program.metaDescription,
  };
}

export default async function EventProgramPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const program = getEventProgram(locale);

  return (
    <>
      <Header />
      <main className="border-b border-line bg-bone">
        <div className="mx-auto max-w-2xl px-4 pt-7 pb-14 sm:px-8 sm:pt-16 sm:pb-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
            {program.dateRange}
          </p>
          <h1 className="mt-2 font-display text-4xl leading-none sm:text-6xl">
            {program.title}
          </h1>
          <div className="mt-5 sm:mt-8">
            <EventProgramDays program={program} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
