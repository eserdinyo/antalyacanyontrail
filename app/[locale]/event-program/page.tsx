import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  getEventProgram,
  type EventProgramContent,
  type ProgramDay,
} from "@/lib/event-program";

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
              <p className="label text-bone/65">{program.eyebrow}</p>
              <h1 className="mt-5 font-display text-[14vw] leading-[0.84] tracking-tight sm:text-7xl lg:text-[8rem]">
                {program.title}
              </h1>
              <p className="mt-8 max-w-2xl border-t border-bone/20 pt-6 font-display-wonk text-xl leading-snug text-bone/85 sm:text-2xl">
                {program.lede}
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-bone">
          <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20">
            <article className="min-w-0">
              {program.days.map((day, index) => (
                <ProgramDaySection
                  key={day.id}
                  day={day}
                  index={index}
                  program={program}
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

function ProgramDaySection({
  day,
  index,
  program,
}: {
  day: ProgramDay;
  index: number;
  program: EventProgramContent;
}) {
  return (
    <section id={day.id} className="scroll-mt-24 py-12 first:pt-0 sm:py-16">
      <div className="sticky top-[100px] z-30 -mx-5 border-b border-line bg-bone/98 px-5 py-6 shadow-[0_18px_34px_rgba(27,24,23,0.08)] backdrop-blur sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-[90px_1fr] lg:px-0">
        <p className="label text-ember">{String(index + 1).padStart(2, "0")}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end lg:mt-0">
          <div>
            <p className="label text-ink-soft">{day.date}</p>
            <h2 className="mt-3 font-display text-4xl leading-none tracking-tight sm:text-6xl">
              {day.day}
            </h2>
            <p className="mt-3 font-display-wonk text-2xl leading-tight text-ink sm:text-3xl">
              {day.title}
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-right">
            {day.summary}
          </p>
        </div>
      </div>

      <div className="grid gap-8 pt-8 lg:grid-cols-[90px_1fr]">
        <div className="hidden lg:block" />

        <div>
          {day.courses ? (
            <div className="mt-8">
              <p className="label text-ink-soft">{program.courseTableTitle}</p>
              <div className="mt-4 overflow-hidden border border-line bg-paper">
                <div className="hidden grid-cols-[1.3fr_1fr_0.6fr_0.6fr] border-b border-line bg-bone-deep/60 px-5 py-3 label text-ink-soft sm:grid">
                  <span>{program.course}</span>
                  <span>{program.distanceElevation}</span>
                  <span>{program.start}</span>
                  <span>{program.cutoff}</span>
                </div>
                <div className="divide-y divide-line">
                  {day.courses.map((course) => (
                    <div
                      key={course.name}
                      className="grid gap-3 px-5 py-5 sm:grid-cols-[1.3fr_1fr_0.6fr_0.6fr] sm:items-center"
                    >
                      <p className="font-display text-xl leading-tight tracking-tight">
                        {course.name}
                      </p>
                      <p className="label text-ink-soft">
                        {course.distanceElevation}
                      </p>
                      <p className="font-bold tabular-nums text-ink">
                        <span className="mr-2 text-xs font-semibold uppercase tracking-widest text-ink-soft sm:hidden">
                          {program.start}
                        </span>
                        {course.start}
                      </p>
                      <p className="font-bold tabular-nums text-ink">
                        <span className="mr-2 text-xs font-semibold uppercase tracking-widest text-ink-soft sm:hidden">
                          {program.cutoff}
                        </span>
                        {course.cutoff}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          <div className="mt-9">
            <p className="label text-ink-soft">{program.schedule}</p>
            <ol className="mt-5 border-t border-line">
              {day.items.map((item) => (
                <li
                  key={`${item.time}-${item.title}`}
                  className="grid grid-cols-[92px_1fr] gap-5 border-b border-line py-4 last:border-b-0 sm:grid-cols-[140px_1fr] sm:gap-8"
                >
                  <time className="font-mono text-base font-black tracking-[0.18em] text-ember tabular-nums sm:text-lg">
                    {item.time}
                  </time>
                  <p className="font-bold leading-snug text-ink-soft">{item.title}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
