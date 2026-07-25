# Sustainability (Sürdürülebilirlik) Page — Design

**Date:** 2026-07-25
**Status:** Approved

## Goal

Add two entries under the "Yarış Bilgisi" / "Race Info" nav dropdown, below the existing
"Ulaşım" item:

1. **Konaklama / Accommodation** — no copy exists yet, so it ships as a disabled nav item
   (same treatment as "Sonuçlar"). No page, no route.
2. **Sürdürülebilirlik / Sustainability** — a full bilingual page built from the copy the
   organiser supplied (Green Commitment, Environmental Policy, Green Manager, Leave No
   Trace, Sustainable Practices).

## Files

| File | Change |
|---|---|
| `lib/sustainability.ts` | New. `SustainabilityContent` type, `tr` + `en` content, `getSustainability(locale)`. |
| `app/[locale]/sustainability/page.tsx` | New. Server component page. |
| `components/Header.tsx` | Edit. Two new items in the `raceInfo` dropdown. |
| `messages/tr.json`, `messages/en.json` | Edit. `Nav.accommodation`, `Nav.sustainability`. |

Content lives in `lib/`, not `messages/*.json`, matching `lib/transport.ts`,
`lib/event-program.ts` and `lib/race-rules.ts`. The route slug is `/sustainability` in
both locales — `routing.ts` defines no localized pathnames.

## Nav order

`raceInfo` dropdown becomes:

Kayıt Ol · Etkinlik Programı · Yarış Kuralları · Ulaşım · **Konaklama** (disabled) ·
**Sürdürülebilirlik** · Sonuçlar (disabled)

## Content model

The transport page models a section body as `string[]` (paragraphs only). The
sustainability copy needs checkmark lists and a three-phase grid, so a section body is a
list of typed blocks instead:

```ts
type SustainabilitySectionId =
  | "green-commitment" | "environmental-policy" | "green-manager"
  | "leave-no-trace" | "sustainable-practices";

type SustainabilityBlock =
  | { kind: "text"; body: string[] }
  | { kind: "list"; style: "check" | "bullet"; intro?: string; items: string[] }
  | { kind: "phases"; phases: { title: string; items: string[] }[] };

type SustainabilitySection = {
  id: SustainabilitySectionId;
  title: string;
  blocks: SustainabilityBlock[];
};

type SustainabilityContent = {
  metaTitle: string; metaDescription: string;
  eyebrow: string; title: string; lede: string;
  sections: SustainabilitySection[];
};
```

`style: "check"` renders a ✔ glyph (commitments, pledges); `style: "bullet"` renders the
square ember bullet already used by the transport note (Green Manager responsibilities).
Icons are NOT on the type — `lib/sustainability.ts` stays pure data and the page maps
`SECTION_ICONS: Record<SustainabilitySectionId, LucideIcon>`, as the transport page does.

There is no `note` aside. The Leave No Trace penalty warning is a trailing `text` block
inside its own section instead.

## Page structure

Reuses the transport page shell verbatim: dark hero (radial gradients, topo texture, two
outline circles) then a `bg-bone` section of numbered, border-separated blocks in a
`lg:grid-cols-[90px_1fr]` layout with `01`…`05` in ember.

- **Hero.** Eyebrow `ÇEVRE & SÜRDÜRÜLEBİLİRLİK` / `ENVIRONMENT & SUSTAINABILITY`; title
  `Sürdürülebilirlik` / `Sustainability`; lede *"Doğa yalnızca parkurumuz değil; en büyük
  sorumluluğumuzdur."* — lifted out of the Green Commitment copy because it is the
  strongest line and reads as a manifesto. It is therefore not repeated in section 01.
- **Title sizing.** `Sürdürülebilirlik` (17 chars) and `Sustainability` (14) are single
  unbreakable words. The transport hero already dropped to `text-[12vw]` for
  `Transportation`; this page uses `text-[10vw]` on phones for the longer Turkish word,
  with the same `sm:text-7xl lg:text-[8rem]` steps.
- **Sections and icons.** 01 Green Commitment (`Leaf`), 02 Environmental Policy
  (`ClipboardList`), 03 Green Manager (`UserCog`), 04 Leave No Trace (`Footprints`),
  05 Sustainable Practices (`Recycle`).
- **Phases block.** Three bordered `bg-paper` cards — Yarış Öncesi / Yarış Sırasında /
  Yarış Sonrası — in a `sm:grid-cols-3` grid, stacking on phones.

## Copy

English is the organiser's text as supplied, with one typo fixed: `Course clean-upr` →
`Course clean-up`. Turkish is a translation of the same text written for this change.

The Green Commitment section keeps the ITRA Green Charter sentence, which is a factual
claim by the organiser ("As an ITRA member event") and is carried over as-is.

## Out of scope

- Accommodation page content and route.
- Any footer link changes.
- Cross-linking Leave No Trace to `/race-rules`.
