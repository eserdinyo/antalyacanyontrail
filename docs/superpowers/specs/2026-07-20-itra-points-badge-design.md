# ITRA Points Badge — Design

**Date:** 2026-07-20
**Status:** Approved (revised — supersedes the pre-asset draft)

## Goal

Surface each race's ITRA performance points so a runner sees them at a glance when
deciding which distance to enter. Points are confirmed with ITRA: ACT70 → 3,
ACT45 → 2, ACT30 → 1. ACT13 and ACT05 are not ITRA-scored.

The existing ITRA logo in the race detail hero stays on all five races — it represents
the organisation's ITRA affiliation, not a per-course score. Only the points badge is
conditional.

## Revision note

An earlier draft of this spec designed a custom badge: a cropped "iTRA" wordmark, a
separate points numeral, and per-race colours borrowed from `RaceBadge`'s `PALETTE`.
That is obsolete. ITRA supplied official badge assets, which are complete self-contained
lockups with mandated per-tier colours. Consequences: no wordmark cropping, no `PALETTE`
export, no vertical chip variant, and no visible "PUAN"/"POINTS" word.

## Assets

Three official ITRA badges, already committed to `public/logos/`:

| File | Intrinsic size | Background | Content |
|---|---|---|---|
| `itra-1.svg` | 77×45, `rx=4` | green `#8CCE3C` | white "iTRA" + "1" |
| `itra-2.svg` | 78×45, `rect x=0.5` | yellow `#D1C40A` | white "iTRA" + "2" |
| `itra-3.svg` | 77×45, `rx=4` | blue `#5BC9EE` | white "iTRA" + "3" |

`itra-2.svg` is 1px wider than its siblings because its rect is offset by 0.5. Rendered at
a shared height it would be visibly wider. Normalise it to `width="77"` and
`viewBox="0.5 0 77 45"` — cropping the viewBox rather than moving the rect leaves every
inner path untouched.

The badge colours are ITRA's, keyed to the point tier, not to the race. On the ACT70 hero
a blue ITRA badge therefore sits beside a red distance badge. This is accepted: the badge
is a certification mark, and reading as a separate object is correct.

## Files

| File | Change |
|---|---|
| `lib/event.ts` | Edit. Add optional `itraPoints` to `Race`; set `3` / `2` / `1` on ACT70 / ACT45 / ACT30. |
| `public/logos/itra-2.svg` | Edit. Normalise width/viewBox to match its siblings. |
| `components/ItraPoints.tsx` | New. Maps points → asset, renders at two scales. |
| `app/[locale]/races/[slug]/page.tsx` | Edit. Render `ItraPoints size="lg"` beside `RaceBadge` in `RaceHero`. |
| `components/RaceCategories.tsx` | Edit. Render `ItraPoints size="sm"` in `RacePanel`, under the `{race.elevationM}M+` line. |
| `messages/tr.json`, `messages/en.json` | Edit. Add `Races.itraPoints` label — used only for the accessible name. |

`components/Hero.tsx` renders a desktop-only row of five `RaceBadge size="md"` —
deliberately unchanged, out of scope.

`components/RaceCard.tsx` is dead code: it is not imported anywhere (`grep -rn RaceCard app
components lib` matches only its own definition). The homepage races section is
`RaceCategories`. This spec does not touch `RaceCard` and does not delete it either —
removing it is a separate decision.

## Data model

```ts
// lib/event.ts, on type Race
/* ITRA performance points — set only for ITRA-scored courses.
   The union is closed because one badge asset exists per tier. */
itraPoints?: 1 | 2 | 3;
```

Optional, not `0`-defaulted. "Not ITRA-scored" and "scored zero" are different claims;
`undefined` makes the first one unrepresentable as the second.

The literal union rather than `number` is what makes the asset lookup total: a
`Record<1 | 2 | 3, string>` map cannot go out of sync with the three files on disk, and
adding a hypothetical 4-point race becomes a type error that points at the missing asset
instead of a runtime 404.

## Component: `components/ItraPoints.tsx`

```ts
export function ItraPoints({
  race,
  size = "sm",
}: {
  race: Race;
  size?: "sm" | "lg";
}): React.ReactElement | null;
```

Returns `null` when `race.itraPoints` is undefined, so callers render it unconditionally
and ACT13 / ACT05 need no call-site conditions.

Rendered with `next/image` pointing at the static asset, matching how the existing ITRA
lockup is rendered at `app/[locale]/races/[slug]/page.tsx:155`. The badges are flat
multi-colour artwork with no `currentColor` needs, so there is no reason to inline them.

`size` is scale only — both variants are the same horizontal 77:45 lockup.

| size | Rendered | Where |
|---|---|---|
| `lg` | ~102×60px | Race detail hero, right of `RaceBadge size="lg"` |
| `sm` | ~77×45px (intrinsic) | `RacePanel`, under the elevation figure |

The `lg` figure comes from the sizing brief: `RaceBadge size="lg"` is `w-36 h-[170px]` =
24,480px², a quarter of which is 6,120px²; at 77:45 that is 102×60.

## Accessibility

`next/image` requires `alt`. The accessible name is the localised
`` `ITRA ${race.itraPoints} ${t("itraPoints")}` `` — e.g. "ITRA 3 PUAN" / "ITRA 3 POINTS".
The badge is meaningful content, not decoration, so `alt` must not be empty.

## Copy

| Key | tr | en |
|---|---|---|
| `Races.itraPoints` | `PUAN` | `POINTS` |

This string never renders visually — the badge artwork contains no such word. It exists
solely to build the accessible name, so a screen reader announces "ITRA 3 points" rather
than "ITRA 3".

## Out of scope

- ITRA points on `components/Hero.tsx` (desktop badge row) and on the "other races" grid
  at `app/[locale]/races/[slug]/page.tsx:493`.
- Showing the ITRA logo conditionally — it stays on all five race heroes.
- Deleting the unused `components/RaceCard.tsx`.
- Any UTMB points treatment, though `public/logos/utmb.png` exists unreferenced.
