import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  BedDouble,
  Globe,
  Info,
  Mail,
  PartyPopper,
  Phone,
  type LucideIcon,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getAccommodation, HOTEL } from "@/lib/accommodation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = await getTranslations({ locale, namespace: "Meta" });
  const accommodation = getAccommodation(locale);

  return {
    title: `${accommodation.metaTitle} · ${meta("title")}`,
    description: accommodation.metaDescription,
  };
}

export default async function AccommodationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const accommodation = getAccommodation(locale);
  const { rates, afterParty, contact } = accommodation;

  const contactLinks: {
    icon: LucideIcon;
    label: string;
    value: string;
    href: string;
    external?: boolean;
  }[] = [
    {
      icon: Phone,
      label: contact.phone,
      value: HOTEL.phone,
      href: HOTEL.phoneHref,
    },
    {
      icon: Mail,
      label: contact.email,
      value: HOTEL.email,
      href: `mailto:${HOTEL.email}`,
    },
    {
      icon: Globe,
      label: contact.website,
      value: HOTEL.website,
      href: HOTEL.websiteUrl,
      external: true,
    },
  ];

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
              <p className="label text-bone/65">{accommodation.eyebrow}</p>
              {/* 12vw like Transport: "Accommodation" is a single long word. */}
              <h1 className="mt-5 font-display text-[12vw] leading-[0.84] tracking-tight sm:text-7xl lg:text-[8rem]">
                {accommodation.title}
              </h1>
              <p className="mt-8 max-w-2xl border-t border-bone/20 pt-6 font-display-wonk text-xl leading-snug text-bone/85 sm:text-2xl">
                {accommodation.lede}
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-page">
          <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-20">
            <article className="min-w-0">
              <SectionBlock
                id="rates"
                icon={BedDouble}
                title={rates.title}
              >
                <p className="label text-ember">
                  {accommodation.hotelLabel} · {HOTEL.name}
                </p>
                <ul className="mt-5 grid gap-4 sm:hidden">
                  {rates.rooms.map((room) => (
                    <li key={room.name} className="border border-line bg-paper">
                      <div className="border-b border-line p-4">
                        <p className="font-display text-xl leading-tight tracking-tight">
                          {room.name}
                        </p>
                        <p className="mt-1 text-sm text-ink-soft">{room.size}</p>
                      </div>
                      <dl className="divide-y divide-line">
                        {room.prices.map((price, index) => (
                          <div
                            key={index}
                            className="flex items-baseline justify-between gap-4 px-4 py-3"
                          >
                            <dt className="label text-ink-soft">
                              {rates.occupancy[index]}
                            </dt>
                            <dd className="font-display text-lg tracking-tight whitespace-nowrap">
                              {price}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 hidden border border-line bg-paper sm:block">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-line">
                        <th className="label p-4 font-normal text-ink-soft sm:p-5">
                          {rates.roomType}
                        </th>
                        {rates.occupancy.map((label) => (
                          <th
                            key={label}
                            className="label p-4 text-right font-normal text-ink-soft sm:p-5"
                          >
                            {label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rates.rooms.map((room) => (
                        <tr
                          key={room.name}
                          className="border-b border-line last:border-b-0"
                        >
                          <th className="p-4 font-normal sm:p-5">
                            <span className="block font-display text-xl leading-tight tracking-tight">
                              {room.name}
                            </span>
                            <span className="mt-1 block text-sm text-ink-soft">
                              {room.size}
                            </span>
                          </th>
                          {room.prices.map((price, index) => (
                            <td
                              key={index}
                              className="p-4 text-right font-display text-xl tracking-tight whitespace-nowrap sm:p-5"
                            >
                              {price}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                  {rates.note}
                </p>
              </SectionBlock>

              <SectionBlock
                id="after-party"
                icon={PartyPopper}
                title={afterParty.title}
              >
                <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                  {afterParty.body}
                </p>
              </SectionBlock>

              <SectionBlock
                id="booking"
                icon={Phone}
                title={contact.title}
              >
                <ul className="grid gap-px border border-line bg-line sm:grid-cols-3">
                  {contactLinks.map(({ icon: Icon, label, value, href, external }) => (
                    <li key={label} className="bg-paper">
                      <a
                        href={href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group flex h-full flex-col gap-3 p-5 transition-colors hover:bg-page sm:p-6"
                      >
                        <span className="flex items-center gap-2 label text-ember">
                          <Icon size={16} strokeWidth={2} aria-hidden />
                          {label}
                        </span>
                        <span className="break-all text-lg leading-snug text-ink group-hover:text-ember">
                          {value}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </SectionBlock>

              <aside className="mt-12 max-w-3xl">
                <div className="flex gap-3 border border-line bg-paper p-5 sm:p-8">
                  <Info
                    size={20}
                    strokeWidth={2}
                    aria-hidden
                    className="mt-1 shrink-0 text-ember"
                  />
                  <p className="text-base leading-relaxed text-ink-soft">
                    {contact.note}
                  </p>
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

function SectionBlock({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-line py-10 first:pt-0 sm:py-14"
    >
      <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <Icon
              size={22}
              strokeWidth={2}
              aria-hidden
              className="shrink-0 text-ink-soft"
            />
            <h2 className="font-display text-3xl leading-none tracking-tight sm:text-4xl">
              {title}
            </h2>
          </div>

          <div className="mt-5">{children}</div>
      </div>
    </section>
  );
}
