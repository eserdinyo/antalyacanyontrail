# Transport (Ulaşım) Page — Design

**Date:** 2026-07-20
**Status:** Approved

## Goal

Add a bilingual Ulaşım / Transport page covering how athletes reach the race area, and
enable the "Ulaşım" nav item that is currently rendered disabled in the header.

## Files

| File | Change |
|---|---|
| `lib/transport.ts` | New. `TransportContent` type, `tr` + `en` content objects, `getTransport(locale)`. |
| `app/[locale]/transport/page.tsx` | New. Server component page. |
| `components/Header.tsx` | Edit. Enable the existing disabled `t("transport")` nav item. |

Content lives in `lib/`, not `messages/*.json`, matching `lib/event-program.ts` and
`lib/race-rules.ts`. The route slug is `/transport` in both locales — `routing.ts`
defines no localized pathnames, so `race-rules` and `event-program` already use English
slugs under `/tr` as well.

## Content model

```ts
type TransportSectionId =
  | "airport" | "city-center" | "group-transfers"
  | "private-vehicle" | "transfer-service" | "navigation";

type TransportSection = {
  id: TransportSectionId;
  title: string;
  body: string[];      // paragraphs
};
// Icons are NOT on this type — lib/transport.ts stays pure data.
// The page maps SECTION_ICONS: Record<TransportSectionId, LucideIcon>.

type TransportNote = {
  title: string;
  items: string[];     // bullets
};

type TransportContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  sections: TransportSection[];
  note: TransportNote;
};

export function getTransport(locale: string): TransportContent;
```

The lede is the source text's opening paragraph ("…şehir merkezine yakın konumu
sayesinde…"). The remaining seven headed blocks become `sections`; "Önemli
Bilgilendirme" becomes `note`.

### Sections and icons

The source text's emoji are replaced with `lucide-react` icons — the site uses lucide
throughout and has no emoji in any component.

| # | id | Source heading | Icon |
|---|---|---|---|
| 01 | `airport` | ✈️ Antalya Havalimanı'ndan Ulaşım | `Plane` |
| 02 | `city-center` | 🏙️ Antalya Şehir Merkezinden Ulaşım | `Building2` |
| 03 | `group-transfers` | 👥 Grup Transferleri | `Users` |
| 04 | `private-vehicle` | 🚗 Özel Araç ile Ulaşım | `Car` |
| 05 | `transfer-service` | 🚐 Transfer Hizmeti | `Bus` |
| 06 | `navigation` | 📍 Navigasyon | `MapPin` |
| — | `note` | ℹ️ Önemli Bilgilendirme | `Info` |

## Layout

Two bands, following `app/[locale]/event-program/page.tsx`:

1. **Hero** — `bg-shadow` / `text-bone`, the same radial-gradient + `bg-topo` overlay and
   decorative circles. Eyebrow, display `h1`, lede on a top-bordered block.

   The eyebrow is `ULAŞIM & TRANSFER` / `TRANSPORT & TRANSFERS` — unnumbered. `event-program` is
   the only page using a `§ NN ·` eyebrow (`§ 03 · PROGRAM`); `race-rules` uses
   `RESMİ DOKÜMAN`. With no coherent sequence across the site, any number here would be
   arbitrary.
2. **Body** — `bg-bone`, `max-w-[1400px]`. Sections in the `lg:grid-cols-[90px_1fr]`
   rhythm: zero-padded index in the left rail, icon + `h2` + paragraphs on the right.
   The note renders last as a bordered `bg-paper` callout with a bulleted list, visually
   distinct from the numbered run.

Section headers do **not** use the program page's `sticky` treatment — these sections are
short prose, not a long scannable timetable.

## Deliberate exclusions

- **No map or embed.** The Navigasyon section states the venue will be announced closer
  to the race. `EVENT_COORDS` in `lib/event.ts` is decorative and does not mark the race
  area; embedding it would publish a wrong pin.
- **No group-transfer CTA.** The page stays purely informational, like the other static
  pages. Contact details remain in the footer.
- **No "TBA" badge.** Five of the seven sections end with "yarış tarihine yaklaştıkça
  duyurulacaktır". Badging five of seven makes the page read as unfinished rather than
  deliberate; the prose already says it.
- **No footer link.** The footer's link list stays as is; the header nav is the entry
  point.

## English content

Full translation of every section, matching the register of the existing EN pages
(`lib/route-rules-en.ts`, the `en` object in `lib/event-program.ts`). HAVAŞ keeps its
proper name; "servis" renders as "shuttle".

The EN page title is **"Transportation"**, matching the existing `Nav.transport` value in
`messages/en.json:23`. The message files are not edited.

## Verification

- `npx tsc --noEmit` and `npm run lint` pass.
- `/tr/transport` and `/en/transport` render, and the header "Ulaşım" / "Transport"
  item navigates to them in both locales.
