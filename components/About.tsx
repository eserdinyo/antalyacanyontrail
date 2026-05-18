import { useTranslations } from "next-intl";
import { ContourRings } from "./Decorations";

export function About() {
  const t = useTranslations("About");

  return (
    <section
      id="info"
      className="relative overflow-hidden border-y border-line bg-bone"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 text-ember/35"
      >
        <ContourRings size={520} />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
          <span className="float-left mr-3 mt-1 font-display text-7xl leading-none text-ember">
            {t("p1").slice(0, 1)}
          </span>
          {t("p1").slice(1)}
        </p>

        <p className="mt-10 text-base leading-relaxed text-ink-soft sm:text-lg">
          {t("p2")}
        </p>
      </div>
    </section>
  );
}
