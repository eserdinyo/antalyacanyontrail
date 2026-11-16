import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { RACES } from "@/lib/event";
import { VENUE } from "@/lib/transport";
import { Logo } from "./Logo";
import { LangSwitcher } from "./LangSwitcher";

export function Footer() {
  const t = useTranslations("Footer");
  const tr = useTranslations("Races");

  return (
    <footer id="footer" className="relative isolate overflow-hidden bg-shadow text-bone">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 pt-20 pb-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo inverted size="lg" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/70">
            {t("tagline")}
          </p>
          <div className="mt-10">
            <h4 className="label text-bone/60">{t("organizedBy")}</h4>
            <a
              href="mailto:mazorganizasyon@gmail.com"
              className="mt-5 inline-block opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src="/logos/maz.webp"
                alt="MAZ Organizasyon"
                width={150}
                height={61}
              />
            </a>
          </div>
        </div>

        <div>
          <h4 className="label text-bone/60">{t("races")}</h4>
          <ul className="mt-5 space-y-3 font-display text-base">
            {RACES.map((r) => (
              <li key={r.code}>
                <Link
                  href={`/races/${r.slug}`}
                  className="hover-swell text-bone/85 hover:text-bone"
                >
                  {tr(`${r.slug}.name`)}
                </Link>
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
          <a
            href={VENUE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block hover-swell text-bone/85 hover:text-bone"
          >
            <span className="label text-bone/60">{t("venueLabel")}</span>
            <span className="mt-2 block font-display text-lg">{VENUE.name}</span>
            <span className="block text-sm text-bone/65">
              {VENUE.address.join(", ")}
            </span>
          </a>
          <Link
            href="/race-rules"
            className="mt-6 block font-display text-lg hover-swell text-bone/85 hover:text-bone"
          >
            {t("rules")}
          </Link>
          <a
            href={t("socialUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 label text-bone/65 hover-swell hover:text-bone"
          >
            <span className="block h-1 w-1 rounded-full bg-ember" />
            {t("socialPrefix")} · {t("social")}
          </a>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-5 py-6 label text-bone/50 sm:px-8">
          <span>{t("rights")}</span>
          <span>{t("love")}</span>
          <LangSwitcher inverted />
        </div>
      </div>
    </footer>
  );
}
