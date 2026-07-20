# ITRA Points Badge — Design

**Date:** 2026-07-20
**Status:** Approved

## Goal

Surface each race's ITRA performance points so a runner sees them at a glance when
deciding which distance to enter. Points are confirmed with ITRA: ACT70 → 3,
ACT45 → 2, ACT30 → 1. ACT13 and ACT05 are not ITRA-scored.

The existing ITRA logo in the race detail hero stays on all five races — it represents
the organisation's ITRA affiliation, not a per-course score. Only the points badge is
conditional.

## Files

| File | Change |
|---|---|
| `lib/event.ts` | Edit. Add optional `itraPoints` to `Race`; set `3` / `2` / `1` on ACT70 / ACT45 / ACT30. |
| `public/logos/itra-mark.svg` | New. "iTRA" wordmark only, cropped from `itra.svg`, `fill="currentColor"`. |
| `components/ItraPoints.tsx` | New. Renders the points badge in a `lg` (vertical) and `sm` (horizontal pill) variant. |
| `app/[locale]/races/[slug]/page.tsx` | Edit. Render `ItraPoints size="lg"` beside `RaceBadge` in `RaceHero`. |
| `components/RaceCategories.tsx` | Edit. Render `ItraPoints size="sm"` in `RacePanel`, under the `{race.elevationM}M+` line. |
| `messages/tr.json`, `messages/en.json` | Edit. Add `Races.itraPoints` label. |

`components/Hero.tsx` renders a desktop-only row of five `RaceBadge size="md"` — deliberately
unchanged, out of scope.

`components/RaceCard.tsx` is dead code: it is not imported anywhere (`grep -rn RaceCard app
components lib` matches only its own definition). The homepage races section is
`RaceCategories`. This spec does not touch `RaceCard` and does not delete it either —
removing it is a separate decision.

## Data model

```ts
// lib/event.ts, on type Race
/* ITRA performance points — set only for ITRA-scored courses */
itraPoints?: number;
```

Optional, not `0`-defaulted. "Not ITRA-scored" and "scored zero" are different claims;
`undefined` makes the first one unrepresentable as the second, and makes the badge
impossible to render for ACT13 / ACT05 rather than merely suppressed by a condition.

## Component: `components/ItraPoints.tsx`

```ts
export function ItraPoints({
  race,
  size = "sm",
}: {
  race: Race;
  size?: "sm" | "lg";
}): JSX.Element | null;
```

Returns `null` when `race.itraPoints` is undefined. Callers render it unconditionally.

The two variants sit on different surfaces and get their colour differently.

### `size="lg"` — race detail hero

Vertical chip, `w-16` (64px). `RaceBadge size="lg"` is `w-36 h-[170px]` at `sm:`, so this
is roughly a quarter of its area — present but not competing with the distance number.

```
┌────────┐
│  iTRA  │
│        │
│   3    │
│  PUAN  │
└────────┘
```

It sits directly beside `RaceBadge`, so it uses the same per-race colours to read as one
system. `PALETTE` is currently module-private in `components/RaceBadge.tsx` — export it
there and import it here rather than duplicating the values.

### `size="sm"` — homepage `RacePanel`

Horizontal pill: `iTRA · 3 PUAN`, placed under the `{race.elevationM}M+` line in the
panel's centre stack (`RaceCategories.tsx:152`).

Not a scaled-down vertical chip. A quarter-area vertical chip would be ~40×48px, which is
unreadable over a photographic background; the pill carries the same information in less
vertical space at a legible type size.

Colour: an outline pill drawn with `border-[var(--race-accent)]` /
`text-[var(--race-accent)]` on the panel's dark wash. `RacePanel` already sets
`--race-accent` from `PANEL_TINT` on its root `Link` (`RaceCategories.tsx:97`), so the pill
picks up each panel's own tone with no new colour map and no prop threading. This variant
therefore does not import `PALETTE`.

### Logo asset

`public/logos/itra.svg` is the full 216×40 lockup — wordmark plus three lines of
"INTERNATIONAL / TRAIL RUNNING / ASSOCIATION" — with hardcoded white fills. It is
unusable below ~120px wide and invisible on light card surfaces.

`itra-mark.svg` is the wordmark alone — the first five paths of the lockup, viewBox
`0 0 107 40`. The white letterforms become `currentColor` so both variants inherit their
surrounding palette; the "A" triangle keeps ITRA's brand green `#8CD346`. The dot over the
"i" is green in the source but becomes `currentColor` here — at 10–12px tall an isolated
green dot on a dark wash reads as a rendering artifact.

Rendered as an inline SVG in the component (not `next/image`) so `currentColor` resolves.

## Accessibility

The badge carries `role="img"` with `aria-label={`ITRA ${race.itraPoints} points`}`
(localised). The "iTRA" mark inside is `aria-hidden` — the label already names it, and a
separate alt text would make screen readers announce the brand twice.

## Copy

| Key | tr | en |
|---|---|---|
| `Races.itraPoints` | `PUAN` | `POINTS` |

Uppercase in the source string, matching the existing `Races.start` / `Races.finish`
convention rather than relying on `text-transform`.

## Out of scope

- ITRA points on `components/Hero.tsx` (desktop badge row) and on the "other races" grid
  at `app/[locale]/races/[slug]/page.tsx:493`.
- Showing the ITRA logo conditionally — it stays on all five race heroes.
- Deleting the unused `components/RaceCard.tsx`.
- Any UTMB points treatment, though `public/logos/utmb.png` exists unreferenced.
