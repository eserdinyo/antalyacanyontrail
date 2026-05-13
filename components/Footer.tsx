import { useTranslations } from "next-intl";
import { RACES, EVENT_COORDS } from "@/lib/event";
import { Logo } from "./Logo";
import { RidgeLine } from "./Decorations";

export function Footer() {
  const t = useTranslations("Footer");
  const tr = useTranslations("Races");

  return (
    <footer id="footer" className="relative isolate overflow-hidden bg-shadow text-bone">
      {/* ridge silhouette at top */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -translate-y-[1px] text-bone-deep/15"
        style={{ height: "44px" }}
      >
        <RidgeLine className="h-full w-full" />
      </div>

      {/* giant editorial mark */}
      <div className="border-b border-bone/10 pt-32 pb-10">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <p className="label text-bone/60">A · C · T</p>
          <p className="mt-3 font-display text-[14vw] leading-[0.86] tracking-tight sm:text-[10vw] lg:text-[8vw]">
            {t("headline")}
          </p>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4 label text-bone/60">
            <span>{t("edition")}</span>
            <span>
              {EVENT_COORDS.lat} · {EVENT_COORDS.lng}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo inverted />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/70">
            {t("tagline")}
          </p>
        </div>

        <div>
          <h4 className="label text-bone/60">{t("races")}</h4>
          <ul className="mt-5 space-y-3 font-display text-base">
            {RACES.map((r) => (
              <li key={r.code}>
                <a href="#races" className="hover-swell text-bone/85 hover:text-bone">
                  {tr(`${r.slug}.name`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label text-bone/60">{t("contact")}</h4>
          <a
            href={`mailto:${t("email")}`}
            className="mt-5 inline-block font-display text-lg hover-swell text-bone/85 hover:text-bone"
          >
            {t("email")}
          </a>
          <div className="mt-6 flex items-center gap-3 label text-bone/55">
            <span className="block h-1 w-1 rounded-full bg-ember" />
            {t("social")}
          </div>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-5 py-6 label text-bone/50 sm:px-8">
          <span>{t("rights")}</span>
          <span>{t("love")}</span>
        </div>
      </div>
    </footer>
  );
}
