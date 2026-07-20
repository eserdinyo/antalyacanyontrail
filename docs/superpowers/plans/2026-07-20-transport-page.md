# Transport Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a bilingual `/transport` page describing how athletes reach the Antalya Canyon Ultra race area, and enable the header nav item that currently renders disabled.

**Architecture:** Follows the existing static-content page pattern exactly — a pure-data content module in `lib/` exporting `tr`/`en` objects behind a `getX(locale)` selector, consumed by an async server component under `app/[locale]/`. Layout mirrors `app/[locale]/event-program/page.tsx`: dark hero band, then a numbered run of sections on `bg-bone`.

**Tech Stack:** Next.js (App Router, async `params`), next-intl (`setRequestLocale`, `getTranslations`), Tailwind, lucide-react, TypeScript.

## Global Constraints

- Spec: `docs/superpowers/specs/2026-07-20-transport-page-design.md`. Read it before starting.
- **This is NOT the Next.js you know** (per `AGENTS.md`) — consult `node_modules/next/dist/docs/` before writing page code. `params` is a `Promise` and must be awaited.
- Route slug is `/transport` in **both** locales. `i18n/routing.ts` defines no localized pathnames.
- No map, no embed, no `EVENT_COORDS` on this page — the venue is not yet public.
- No contact CTA / mailto — the page is purely informational.
- No "TBA" badge component — deferred announcements stay as prose.
- `lib/transport.ts` stays **pure data**: no React, no JSX, no lucide imports. Icons are mapped by section `id` inside the page component. (This refines the spec's sketch, which showed `icon: LucideIcon` on the type; keeping lib/ free of components matches `lib/event-program.ts`.)
- No test framework exists. Verification is `npx tsc --noEmit`, `npm run lint`, and a rendered check of both locales.

---

### Task 1: Content module

**Files:**
- Create: `lib/transport.ts`

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `type TransportSection = { id: string; title: string; body: string[] }`
  - `type TransportNote = { title: string; items: string[] }`
  - `type TransportContent = { metaTitle: string; metaDescription: string; eyebrow: string; title: string; lede: string; sections: TransportSection[]; note: TransportNote }`
  - `function getTransport(locale: string): TransportContent`
  - Section ids, in order: `airport`, `city-center`, `group-transfers`, `private-vehicle`, `transfer-service`, `navigation`

- [ ] **Step 1: Create `lib/transport.ts` with the full content**

```ts
export type TransportSection = {
  id: string;
  title: string;
  body: string[];
};

export type TransportNote = {
  title: string;
  items: string[];
};

export type TransportContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  sections: TransportSection[];
  note: TransportNote;
};

const tr: TransportContent = {
  metaTitle: "Ulaşım",
  metaDescription:
    "Antalya Canyon Ultra yarış alanına havalimanından, şehir merkezinden, servisle ve özel araçla ulaşım bilgileri.",
  eyebrow: "ULAŞIM & TRANSFER",
  title: "Ulaşım",
  lede:
    "Antalya Canyon Ultra, şehir merkezine yakın konumu sayesinde hem yurt içinden hem de yurt dışından gelecek sporcular için kolay ulaşılabilir bir lokasyonda düzenlenmektedir.",
  sections: [
    {
      id: "airport",
      title: "Antalya Havalimanı'ndan Ulaşım",
      body: [
        "Havalimanından şehir merkezine düzenli olarak hizmet veren HAVAŞ ve toplu taşıma (otobüs, tramvay) ile ulaşım sağlanabilmektedir. Şehir merkezinden ise yarış alanına servis veya özel araçla kolaylıkla ulaşabilirsiniz.",
      ],
    },
    {
      id: "city-center",
      title: "Antalya Şehir Merkezinden Ulaşım",
      body: [
        "Yarış merkezi, Antalya şehir merkezine yaklaşık 20 km (20-25 dakika) mesafededir.",
        "Yarış tarihleri boyunca, şehir merkezinden yarış alanına düzenli servis (shuttle) hizmeti sunulacaktır. Servis güzergâhları ve saatleri yarış tarihine yaklaştıkça duyurulacaktır.",
      ],
    },
    {
      id: "group-transfers",
      title: "Grup Transferleri",
      body: [
        "Şehir dışından veya yurt dışından toplu olarak gelecek kulüp ve sporcu grupları için, katılımcı sayısına bağlı olarak organizasyon tarafından ulaşım desteği sağlanabilecektir. Bu konuda bizimle önceden iletişime geçmeniz yeterlidir.",
      ],
    },
    {
      id: "private-vehicle",
      title: "Özel Araç ile Ulaşım",
      body: [
        "Yarış alanına özel araçla ulaşım oldukça kolaydır. Yarış merkezinin hemen yanında sporcular ve misafirler için ayrılmış geniş ve ücretsiz otopark alanları bulunmaktadır.",
        "Otopark, hem otomobil hem de minibüsler için yeterli kapasiteye sahiptir. Görevli ekipler araç yönlendirmesi konusunda destek sağlayacaktır.",
      ],
    },
    {
      id: "transfer-service",
      title: "Transfer Hizmeti",
      body: [
        "Şehir dışından ve yurt dışından gelecek sporcular için transfer seçenekleri üzerinde çalışmalarımız devam etmektedir. Transfer hizmetine ilişkin detaylar ve rezervasyon bilgileri yarış tarihine yaklaştıkça paylaşılacaktır.",
      ],
    },
    {
      id: "navigation",
      title: "Navigasyon",
      body: [
        "Yarış merkezi konumu, Google Maps ve diğer navigasyon uygulamaları üzerinden kolayca bulunabilecektir. Konum bilgisi ve ulaşım detayları, resmî internet sitemiz ve sosyal medya hesaplarımız üzerinden yarış tarihine yaklaştıkça duyurulacaktır.",
      ],
    },
  ],
  note: {
    title: "Önemli Bilgilendirme",
    items: [
      "Otopark ile start/finish alanı arasındaki mesafe oldukça kısa olup yürüyerek kolayca ulaşılabilmektedir.",
      "Karavan ve camper araçlarla gelecek katılımcılar için de uygun park alanları bulunmaktadır. Detaylı bilgiler yarış tarihine yaklaştıkça duyurulacaktır.",
    ],
  },
};

const en: TransportContent = {
  metaTitle: "Transportation",
  metaDescription:
    "How to reach the Antalya Canyon Ultra race area — from the airport, from the city centre, by shuttle and by private vehicle.",
  eyebrow: "TRANSPORT & TRANSFERS",
  title: "Transportation",
  lede:
    "Antalya Canyon Ultra is held close to the city centre, in a location that is easy to reach for runners travelling from within Türkiye and from abroad.",
  sections: [
    {
      id: "airport",
      title: "From Antalya Airport",
      body: [
        "HAVAŞ shuttles and public transport (bus and tram) run regularly between the airport and the city centre. From the city centre you can reach the race area easily by shuttle or by private vehicle.",
      ],
    },
    {
      id: "city-center",
      title: "From Antalya City Centre",
      body: [
        "The race centre is roughly 20 km from central Antalya — a 20-25 minute drive.",
        "A regular shuttle service will run between the city centre and the race area throughout the race weekend. Routes and departure times will be announced closer to the race.",
      ],
    },
    {
      id: "group-transfers",
      title: "Group Transfers",
      body: [
        "For clubs and groups of runners travelling together from other cities or from abroad, the organisation may be able to arrange transport support depending on the number of participants. Just get in touch with us in advance.",
      ],
    },
    {
      id: "private-vehicle",
      title: "Arriving by Private Vehicle",
      body: [
        "Reaching the race area by private vehicle is straightforward. Large free parking areas are reserved for runners and guests right next to the race centre.",
        "The car park has ample capacity for both cars and minibuses. Marshals will be on hand to direct vehicles.",
      ],
    },
    {
      id: "transfer-service",
      title: "Transfer Service",
      body: [
        "We are still working on transfer options for runners travelling from other cities and from abroad. Details and booking information will be shared closer to the race.",
      ],
    },
    {
      id: "navigation",
      title: "Navigation",
      body: [
        "The race centre will be easy to find on Google Maps and other navigation apps. Location details and travel information will be announced on our official website and social media channels closer to the race.",
      ],
    },
  ],
  note: {
    title: "Important Information",
    items: [
      "The walk between the car park and the start/finish area is short and easy on foot.",
      "Suitable parking areas are also available for caravans and campers. Full details will follow closer to the race.",
    ],
  },
};

export function getTransport(locale: string): TransportContent {
  return locale === "tr" ? tr : en;
}
```

- [ ] **Step 2: Verify it typechecks**

Run: `npx tsc --noEmit`
Expected: no output (exit 0). The file is not yet imported anywhere, so this only proves the module itself is well-typed.

- [ ] **Step 3: Verify TR and EN section ids match**

Run:
```bash
grep -c 'id: "' lib/transport.ts
```
Expected: `12` — six ids in `tr`, six in `en`. If it is not 12, one locale is missing a section.

- [ ] **Step 4: Commit**

```bash
git add lib/transport.ts
git commit -m "feat: add transport page content module"
```

---

### Task 2: Transport page

**Files:**
- Create: `app/[locale]/transport/page.tsx`
- Reference (do not modify): `app/[locale]/event-program/page.tsx` — the layout being mirrored

**Interfaces:**
- Consumes: `getTransport` and `type TransportSection` from `@/lib/transport` (Task 1); `Header` from `@/components/Header`; `Footer` from `@/components/Footer`.
- Produces: the route `/tr/transport` and `/en/transport`.

- [ ] **Step 1: Create the page**

```tsx
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
import { getTransport, type TransportSection } from "@/lib/transport";

const SECTION_ICONS: Record<string, LucideIcon> = {
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
              <h1 className="mt-5 font-display text-[14vw] leading-[0.84] tracking-tight sm:text-7xl lg:text-[8rem]">
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
                    {transport.note.items.map((item) => (
                      <li
                        key={item}
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
      className="scroll-mt-24 border-b border-line py-10 first:pt-0 last:border-b-0 sm:py-14"
    >
      <div className="grid gap-6 lg:grid-cols-[90px_1fr] lg:gap-8">
        <p className="label text-ember">{String(index + 1).padStart(2, "0")}</p>

        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            {Icon ? (
              <Icon
                size={22}
                strokeWidth={2}
                aria-hidden
                className="shrink-0 text-ink-soft"
              />
            ) : null}
            <h2 className="font-display text-3xl leading-none tracking-tight sm:text-4xl">
              {section.title}
            </h2>
          </div>

          <div className="mt-5 grid gap-4">
            {section.body.map((paragraph) => (
              <p
                key={paragraph}
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
```

- [ ] **Step 2: Verify every section id has an icon**

`SECTION_ICONS` is keyed by string, so a typo silently renders a section with no icon rather than failing the build. Check the mapping covers all six ids:

```bash
grep -o 'id: "[a-z-]*"' lib/transport.ts | sort -u
```
Expected exactly these six lines: `id: "airport"`, `id: "city-center"`, `id: "group-transfers"`, `id: "navigation"`, `id: "private-vehicle"`, `id: "transfer-service"`. Every one must appear as a key in `SECTION_ICONS` in the page. If any is missing, add it there.

- [ ] **Step 3: Verify typecheck and lint pass**

Run: `npx tsc --noEmit && npm run lint`
Expected: no output from `tsc`, and no errors from `eslint` (exit 0).

- [ ] **Step 4: Verify both locales render**

Run in one terminal: `npm run dev`

Then:
```bash
curl -s localhost:3000/tr/transport | grep -c "Grup Transferleri"
curl -s localhost:3000/en/transport | grep -c "Group Transfers"
```
Expected: each prints a count of `1` or greater. If either prints `0`, the page did not render that locale's content — do not proceed.

Also confirm no map/iframe leaked in:
```bash
curl -s localhost:3000/tr/transport | grep -c "iframe\|maps.google"
```
Expected: `0`.

- [ ] **Step 5: Commit**

```bash
git add "app/[locale]/transport/page.tsx"
git commit -m "feat: add transport page"
```

---

### Task 3: Enable the header nav item

**Files:**
- Modify: `components/Header.tsx` — the `raceInfo` group inside the `nav` array (the line reading `{ label: t("transport"), disabled: true },`)

**Interfaces:**
- Consumes: the `/transport` route from Task 2. The `Nav.transport` message key already exists in both `messages/tr.json` ("Ulaşım") and `messages/en.json` — no message changes needed.
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Confirm the message key exists in both locales**

Run: `grep -n '"transport"' messages/tr.json messages/en.json`
Expected: `messages/tr.json:23: "transport": "Ulaşım",` and `messages/en.json:23: "transport": "Transportation",`. Both already exist — do not edit the message files. The page's `title` in Task 1 is deliberately "Transportation" to match this nav label.

- [ ] **Step 2: Enable the nav link**

In `components/Header.tsx`, inside the `raceInfo` group's `items` array, replace:

```tsx
        { label: t("transport"), disabled: true },
```

with:

```tsx
        { href: "/transport", label: t("transport") },
```

Leave `{ label: t("results"), disabled: true },` on the following line untouched — Results is still unbuilt.

- [ ] **Step 3: Verify typecheck and lint pass**

Run: `npx tsc --noEmit && npm run lint`
Expected: no output from `tsc`, no errors from `eslint`.

- [ ] **Step 4: Verify the link is live and points at the localized route**

With `npm run dev` running:
```bash
curl -s localhost:3000/tr | grep -o 'href="/tr/transport"' | head -1
curl -s localhost:3000/en | grep -o 'href="/en/transport"' | head -1
```
Expected: each prints the matching `href`. An empty result means the item is still rendering as a disabled `<span>`.

- [ ] **Step 5: Verify the production build succeeds**

Run: `npm run build`
Expected: build completes, and the route list includes `/[locale]/transport`.

- [ ] **Step 6: Commit**

```bash
git add components/Header.tsx
git commit -m "feat: enable transport nav link"
```

---

## Done when

- `/tr/transport` and `/en/transport` render the hero, six numbered sections, and the note callout.
- The header's "Ulaşım" / "Getting There" item under Yarış Bilgisi navigates to the page in both locales.
- `npx tsc --noEmit`, `npm run lint`, and `npm run build` all pass.
- No iframe, map embed, or mailto CTA appears on the page.
