"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTransition } from "react";

export function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={`flex items-center gap-1 label ${
        isPending ? "opacity-60" : ""
      }`}
    >
      {routing.locales.map((l, i) => {
        const active = l === locale;
        return (
          <span key={l} className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => {
                if (active) return;
                startTransition(() => router.replace(pathname, { locale: l }));
              }}
              className={`transition-colors ${
                active ? "text-ember" : "text-ink-soft hover:text-ink"
              }`}
              aria-pressed={active}
            >
              {l.toUpperCase()}
            </button>
            {i < routing.locales.length - 1 && (
              <span className="text-ink-soft">/</span>
            )}
          </span>
        );
      })}
    </div>
  );
}
