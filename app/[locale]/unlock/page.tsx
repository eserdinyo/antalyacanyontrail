import { setRequestLocale, getTranslations } from "next-intl/server";
import { unlock } from "./actions";

export default async function UnlockPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ from?: string; error?: string }>;
}) {
  const { locale } = await params;
  const sp = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("Unlock");
  const from = sp.from ?? "/";
  const errored = sp.error === "1";

  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center bg-shadow-deep px-5 py-16 text-bone">
      {/* topographic dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-topo"
      />

      <div className="relative w-full max-w-md">
        <div className="flex items-center justify-center gap-3">
          <span className="block h-1 w-1 rounded-full bg-ember" />
          <span className="label text-bone/60">{t("eyebrow")}</span>
          <span className="block h-1 w-1 rounded-full bg-ember" />
        </div>

        <h1 className="mt-6 text-center font-display text-5xl leading-[0.95] tracking-tight">
          {t("title")}
        </h1>

        <p className="mt-4 text-center text-base leading-relaxed text-bone/70">
          {t("subtitle")}
        </p>

        <form action={unlock} className="mt-10 flex flex-col gap-3">
          <input type="hidden" name="locale" value={locale} />
          <input type="hidden" name="from" value={from} />
          <input
            type="password"
            name="password"
            required
            autoFocus
            autoComplete="current-password"
            placeholder={t("placeholder")}
            className="w-full border border-bone/25 bg-transparent px-4 py-4 label-lg text-bone caret-ember outline-none transition-colors placeholder:text-bone/40 focus:border-ember"
          />

          {errored && (
            <p className="label text-ember" role="alert">
              {t("error")}
            </p>
          )}

          <button
            type="submit"
            className="group mt-2 inline-flex w-full items-center justify-center gap-3 bg-ember px-6 py-4 label-lg text-bone transition-colors hover:bg-ember-deep"
          >
            <span className="block h-1.5 w-1.5 rounded-full bg-bone" />
            {t("submit")}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </form>

        <p className="mt-10 text-center label text-bone/35">
          ANTALYA · CANYON · TRAIL
        </p>
      </div>
    </main>
  );
}
