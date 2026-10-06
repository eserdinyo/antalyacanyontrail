"use client";

import { useState } from "react";

import type { EventProgramContent } from "@/lib/event-program";
import { VENUE } from "@/lib/transport";

export function EventProgramDays({ program }: { program: EventProgramContent }) {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div
        role="tablist"
        aria-label={program.daysLabel}
        className="grid grid-cols-3 gap-1 rounded-[14px] bg-bone-deep p-1"
      >
        {program.days.map((day, index) => {
          const active = index === selected;
          return (
            <button
              key={day.id}
              id={`tab-${day.id}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`panel-${day.id}`}
              onClick={() => setSelected(index)}
              className={`flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-[10px] px-1.5 py-1.5 transition-colors ${
                active ? "bg-ink text-paper" : "text-ink hover:bg-bone/60"
              }`}
            >
              <span className={`text-[15px] ${active ? "font-extrabold" : "font-bold"}`}>
                {day.day}
              </span>
              <span
                className={`text-[11px] font-medium ${active ? "text-paper/75" : "text-ink-soft"}`}
              >
                {day.shortDate}
              </span>
            </button>
          );
        })}
      </div>

      {program.days.map((day, index) => (
        <section
          key={day.id}
          id={`panel-${day.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${day.id}`}
          hidden={index !== selected}
          className="pt-5"
        >
          <h2 className="font-display-wonk text-xl sm:text-2xl">{day.theme}</h2>

          <ol className="mt-3.5 border-t border-line">
            {day.items.map((item, itemIndex) =>
              item.start ? (
                <li
                  key={itemIndex}
                  className="my-2.5 grid grid-cols-[88px_1fr] items-center gap-3 rounded-[14px] bg-shadow px-4 py-3.5 text-paper"
                >
                  <time className="text-[22px] font-extrabold tracking-tight tabular-nums">
                    {item.time}
                  </time>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#f2a28c]">
                      {program.start}
                    </p>
                    <p className="mt-0.5 text-[21px] font-extrabold leading-tight tracking-tight">
                      {item.races}
                    </p>
                  </div>
                </li>
              ) : (
                <li
                  key={itemIndex}
                  className="grid grid-cols-[104px_1fr] gap-3 border-b border-line py-[15px] sm:grid-cols-[140px_1fr]"
                >
                  <time className="pt-px text-[15px] font-extrabold tracking-[0.02em] whitespace-nowrap text-[#b8322a] tabular-nums">
                    {item.time}
                  </time>
                  <div className="flex min-w-0 flex-col gap-1">
                    <p className="text-base leading-snug font-semibold">
                      {item.title}
                      {item.location ? (
                        <>
                          {" ("}
                          <a
                            href={VENUE.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#b8322a] underline underline-offset-2 hover:no-underline"
                          >
                            {program.location}
                          </a>
                          {")"}
                        </>
                      ) : null}
                    </p>
                    {item.races ? (
                      <p className="text-[15px] font-extrabold tracking-tight">{item.races}</p>
                    ) : null}
                  </div>
                </li>
              ),
            )}
          </ol>

          {day.cutoffs.length > 0 ? (
            <div className="mt-4 rounded-[14px] bg-bone-deep px-4 pt-3.5 pb-1">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-ink-soft">
                {program.cutoffs}
              </p>
              <ul>
                {day.cutoffs.map((cutoff) => (
                  <li
                    key={cutoff.race}
                    className="flex items-baseline justify-between border-b border-ink/10 py-[11px] last:border-b-0"
                  >
                    <span className="text-lg font-extrabold tracking-tight">{cutoff.race}</span>
                    <span className="text-base font-extrabold text-[#b8322a] tabular-nums">
                      {cutoff.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}
