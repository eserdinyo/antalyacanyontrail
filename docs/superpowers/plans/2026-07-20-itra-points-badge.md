# ITRA Points Badge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show each ITRA-scored race's performance points (ACT70 → 3, ACT45 → 2, ACT30 → 1) in the race detail hero and on the homepage race panels, using ITRA's official badge assets.

**Architecture:** A closed `itraPoints?: 1 | 2 | 3` field on `Race` drives a new `ItraPoints` component that maps the tier to one of three official SVG badges and returns `null` when the field is absent, so ACT13 and ACT05 render nothing. Two call sites, one shared horizontal lockup rendered at two scales.

**Tech Stack:** Next.js 16.2.6 (App Router, React Server Components), React 19.2.4, next-intl 4.11.2, Tailwind CSS v4, TypeScript 5.

**Spec:** `docs/superpowers/specs/2026-07-20-itra-points-badge-design.md`

## Global Constraints

- **No test framework exists in this repo.** `package.json` defines only `dev`, `build`, `start`, `lint`; `git ls-files | grep -E '\.(test|spec)\.'` returns nothing. Do NOT add vitest/jest/RTL as part of this plan — that is a separate decision for the maintainer. Verification per task is typecheck + lint + a visual check, with `npm run build` as the final gate.
- Verification commands: `npx tsc --noEmit`, `npm run lint`, `npm run build`, `npm run dev` for visual checks.
- Points values are confirmed with ITRA: ACT70 = 3, ACT45 = 2, ACT30 = 1. ACT13 and ACT05 are not ITRA-scored and get no `itraPoints` field at all — not `0`.
- The badge artwork is ITRA's, keyed to the point tier, not the race. Do NOT recolour, re-crop, or restyle the badges beyond the width normalisation in Task 2. A blue badge beside ACT70's red distance badge is the accepted, reviewed outcome.
- The ITRA logo in the race detail hero (`app/[locale]/races/[slug]/page.tsx:155-161`) stays on all five races. It is NOT made conditional.
- `Races.itraPoints` copy is uppercase in the source JSON (`PUAN` / `POINTS`), matching the existing `Races.start` / `Races.finish` convention. It never renders visually — it builds the `alt` text only.
- Out of scope: `components/Hero.tsx`, the "other races" grid at `app/[locale]/races/[slug]/page.tsx:493`, deleting the unused `components/RaceCard.tsx`.

## Preconditions

`public/logos/itra-1.svg`, `itra-2.svg`, `itra-3.svg` are already present and committed as untracked/staged files from the design step. Confirm before starting:

```bash
ls public/logos/itra-{1,2,3}.svg
```

## File Structure

| File | Responsibility |
|---|---|
| `lib/event.ts` | Modify. Add `itraPoints?: 1 \| 2 \| 3` to `Race`; set values on ACT70 / ACT45 / ACT30. |
| `messages/tr.json`, `messages/en.json` | Modify. Add `Races.itraPoints` label for the accessible name. |
| `public/logos/itra-{1,2,3}.svg` | Add to git. `itra-2.svg` normalised to match its siblings' width. |
| `components/ItraPoints.tsx` | Create. Tier → asset map, two scales, null when unscored. Single responsibility. |
| `app/[locale]/races/[slug]/page.tsx` | Modify. Render `ItraPoints size="lg"` beside `RaceBadge` in `RaceHero`. |
| `components/RaceCategories.tsx` | Modify. Render `ItraPoints size="sm"` in `RacePanel`. |

---

### Task 1: Data model and copy

**Files:**
- Modify: `lib/event.ts:30-43` (type), `lib/event.ts:79-165` (`RACES` entries)
- Modify: `messages/tr.json` (`Races` object), `messages/en.json` (`Races` object)

**Interfaces:**
- Consumes: nothing.
- Produces: `Race.itraPoints?: 1 | 2 | 3`, readable as `race.itraPoints`. Translation key `Races.itraPoints` → `"PUAN"` (tr) / `"POINTS"` (en).

- [ ] **Step 1: Add the field to the `Race` type**

In `lib/event.ts`, inside `type Race = { ... }`, after the `traceDeTrailId` line:

```ts
  /* ITRA performance points — set only for ITRA-scored courses.
     Absent (not 0) for courses that do not score: ACT13, ACT05.
     Closed union: one badge asset exists per tier in public/logos/. */
  itraPoints?: 1 | 2 | 3;
```

- [ ] **Step 2: Set values on the three scored races**

In the `RACES` array, add one line to each of these three objects. Add it directly after the `elevationM` line so the numbers read together.

ACT70 (`antalya-termessos-ultra`):
```ts
  itraPoints: 3,
```

ACT45 (`antalya-goat-ultra`):
```ts
  itraPoints: 2,
```

ACT30 (`alageyik-trail`):
```ts
  itraPoints: 1,
```

Do NOT touch the ACT13 (`guver-cliff-trail`) or ACT05 (`my-pace-run`) entries.

- [ ] **Step 3: Add the Turkish label**

In `messages/tr.json`, inside the `"Races"` object, next to the existing `"finish"` key:

```json
    "itraPoints": "PUAN",
```

- [ ] **Step 4: Add the English label**

In `messages/en.json`, inside the `"Races"` object, in the same position:

```json
    "itraPoints": "POINTS",
```

- [ ] **Step 5: Verify types and JSON validity**

Run:
```bash
npx tsc --noEmit && python3 -c "import json;[json.load(open(f'messages/{l}.json'))['Races']['itraPoints'] for l in ('tr','en')]" && echo OK
```
Expected: no TypeScript output, then `OK`. A `KeyError` means a label is missing or misplaced; a `JSONDecodeError` means a trailing/missing comma.

- [ ] **Step 6: Commit**

```bash
git add lib/event.ts messages/tr.json messages/en.json
git commit -m "feat: add itraPoints to Race model and points label copy"
```

---

### Task 2: Commit and normalise the ITRA badge assets

**Files:**
- Modify: `public/logos/itra-2.svg` (first line only)
- Add to git: `public/logos/itra-1.svg`, `public/logos/itra-2.svg`, `public/logos/itra-3.svg`

**Interfaces:**
- Consumes: nothing.
- Produces: three tracked assets at `/logos/itra-1.svg`, `/logos/itra-2.svg`, `/logos/itra-3.svg`, all rendering at a 77:45 aspect ratio.

Background: `itra-1.svg` and `itra-3.svg` are `width="77" viewBox="0 0 77 45"` with `<rect width="77" ... x=0>`. `itra-2.svg` is `width="78" viewBox="0 0 78 45"` with `<rect x="0.5" width="77" ...>`. Rendered at a shared height, the 2-point badge would come out 1px wider than the others.

- [ ] **Step 1: Normalise `itra-2.svg`**

In `public/logos/itra-2.svg`, change the opening tag from:

```svg
<svg width="78" height="45" viewBox="0 0 78 45" fill="none" xmlns="http://www.w3.org/2000/svg">
```

to:

```svg
<svg width="77" height="45" viewBox="0.5 0 77 45" fill="none" xmlns="http://www.w3.org/2000/svg">
```

Change nothing else in the file. Shifting the viewBox origin to `0.5` crops to the rect's actual bounds without moving the rect or any of the eight glyph paths — editing `rect x` instead would leave the "iTRA 2" artwork offset by half a pixel.

- [ ] **Step 2: Verify all three now share one aspect ratio**

Run:
```bash
python3 -c "
import xml.etree.ElementTree as E
for n in (1,2,3):
    r = E.parse(f'public/logos/itra-{n}.svg').getroot()
    vb = [float(x) for x in r.get('viewBox').split()]
    print(n, r.get('width'), r.get('viewBox'), round(vb[2]/vb[3], 4))
"
```
Expected: all three print width `77` and ratio `1.7111`.

- [ ] **Step 3: Commit**

```bash
git add public/logos/itra-1.svg public/logos/itra-2.svg public/logos/itra-3.svg
git commit -m "feat: add official ITRA points badge assets"
```

---

### Task 3: `ItraPoints` component

**Files:**
- Create: `components/ItraPoints.tsx`

**Interfaces:**
- Consumes: `Race.itraPoints` and the `Races.itraPoints` key (Task 1); the three assets (Task 2).
- Produces: `export function ItraPoints({ race, size }: { race: Race; size?: "sm" | "lg" }): React.ReactElement | null`.

- [ ] **Step 1: Create the component**

Create `components/ItraPoints.tsx` with exactly this content:

```tsx
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Race } from "@/lib/event";

/* Official ITRA badges — one per point tier, colour mandated by ITRA.
   Keyed by the closed union on Race.itraPoints so the map cannot drift
   out of sync with the files in public/logos/. */
const BADGE: Record<NonNullable<Race["itraPoints"]>, string> = {
  1: "/logos/itra-1.svg",
  2: "/logos/itra-2.svg",
  3: "/logos/itra-3.svg",
};

/* Intrinsic artwork is 77x45. The lg figure is a quarter of the area of
   RaceBadge size="lg" (w-36 h-[170px]), kept at the same 77:45 ratio. */
const SIZE = {
  sm: { width: 77, height: 45 },
  lg: { width: 102, height: 60 },
};

export function ItraPoints({
  race,
  size = "sm",
}: {
  race: Race;
  size?: "sm" | "lg";
}) {
  const t = useTranslations("Races");

  /* Not an ITRA-scored course — render nothing. Callers render unconditionally. */
  if (race.itraPoints === undefined) return null;

  const s = SIZE[size];

  return (
    <Image
      src={BADGE[race.itraPoints]}
      alt={`ITRA ${race.itraPoints} ${t("itraPoints")}`}
      width={s.width}
      height={s.height}
      className="h-auto shrink-0 drop-shadow-[0_8px_18px_rgba(27,24,23,0.32)]"
    />
  );
}
```

Notes for the implementer:
- No `"use client"`. This is a Server Component; `useTranslations` from next-intl works in Server Components — `components/RaceCategories.tsx:45` already does exactly this.
- The `alt` is the accessible name and must not be empty — the badge is meaningful content, not decoration.
- The component carries no outer margin. Spacing is the caller's job (Tasks 4 and 5).

- [ ] **Step 2: Verify types and lint**

Run:
```bash
npx tsc --noEmit && npm run lint
```
Expected: no TypeScript output; ESLint reports no errors for `components/ItraPoints.tsx`.

- [ ] **Step 3: Commit**

```bash
git add components/ItraPoints.tsx
git commit -m "feat: add ItraPoints component"
```

---

### Task 4: Race detail hero integration

**Files:**
- Modify: `app/[locale]/races/[slug]/page.tsx` (import block near line 8; `RaceHero` badge wrapper at lines 164-166)

**Interfaces:**
- Consumes: `ItraPoints` (Task 3).
- Produces: nothing for later tasks.

- [ ] **Step 1: Import the component**

In `app/[locale]/races/[slug]/page.tsx`, next to the existing `RaceBadge` import (line 8):

```ts
import { ItraPoints } from "@/components/ItraPoints";
```

- [ ] **Step 2: Render it beside the badge**

Replace the badge wrapper (currently lines 164-166):

```tsx
          <div className="shrink-0">
            <RaceBadge race={race} size="lg" />
          </div>
```

with:

```tsx
          <div className="flex shrink-0 items-center gap-4">
            <RaceBadge race={race} size="lg" />
            <ItraPoints race={race} size="lg" />
          </div>
```

`items-center` vertically centres the short horizontal badge against the tall distance badge. When `ItraPoints` returns `null` the flex row collapses to just the badge, so ACT13 and ACT05 look exactly as they do today.

- [ ] **Step 3: Verify types and lint**

Run:
```bash
npx tsc --noEmit && npm run lint
```
Expected: no TypeScript output, no ESLint errors.

- [ ] **Step 4: Visual check**

Run `npm run dev`, then open each of these and confirm:

| URL | Expected |
|---|---|
| `http://localhost:3000/tr/races/antalya-termessos-ultra` | Blue `iTRA 3` badge right of the 70 badge |
| `http://localhost:3000/tr/races/antalya-goat-ultra` | Yellow `iTRA 2` badge |
| `http://localhost:3000/tr/races/alageyik-trail` | Green `iTRA 1` badge |
| `http://localhost:3000/tr/races/guver-cliff-trail` | **No badge**; ITRA lockup still present above the distance badge |
| `http://localhost:3000/tr/races/my-pace-run` | **No badge**; ITRA lockup still present |

Also confirm:
- The badge is roughly a quarter of the distance badge's visual area — clearly secondary, but the number is legible at a glance.
- At a 390px-wide viewport the badge + distance badge row does not overflow horizontally.
- Inspect the `<img>` and confirm `alt="ITRA 3 PUAN"` on `/tr`, `alt="ITRA 3 POINTS"` on `/en`.

- [ ] **Step 5: Commit**

```bash
git add "app/[locale]/races/[slug]/page.tsx"
git commit -m "feat: show ITRA points badge beside distance badge in race hero"
```

---

### Task 5: Homepage `RacePanel` integration

**Files:**
- Modify: `components/RaceCategories.tsx` (import block near line 7; centre stack at lines 152-154)

**Interfaces:**
- Consumes: `ItraPoints` (Task 3).
- Produces: nothing for later tasks.

- [ ] **Step 1: Import the component**

In `components/RaceCategories.tsx`, next to the existing `ElevationProfile` import (line 7):

```ts
import { ItraPoints } from "./ItraPoints";
```

- [ ] **Step 2: Render the badge under the elevation figure**

Find the elevation line in `RacePanel` (currently lines 152-154):

```tsx
            <p className="mt-5 text-sm font-black tracking-[0.22em] text-bone">
              {race.elevationM}M+
            </p>
```

Add immediately after it, still inside the same `<div className="relative">`:

```tsx
            <div className="mt-5 flex justify-center">
              <ItraPoints race={race} size="sm" />
            </div>
```

The wrapper keeps the badge centred within the panel's centre stack and owns the spacing. When `ItraPoints` returns `null` the wrapper is an empty 0-height flex box, so ACT13 and ACT05 panels keep their current vertical rhythm.

- [ ] **Step 3: Verify types and lint**

Run:
```bash
npx tsc --noEmit && npm run lint
```
Expected: no TypeScript output, no ESLint errors.

- [ ] **Step 4: Visual check**

Run `npm run dev` and open `http://localhost:3000/tr`, scroll to the `#races` section:

- The 70 / 45 / 33 panels each show a badge under the `M+` figure: blue `3`, yellow `2`, green `1`.
- All three badges are the same width. If the 2-point one is wider, Task 2 Step 1 was not applied.
- The 13 and 7 panels show no badge and their layout is unchanged.
- Check the `md:grid-cols-2` breakpoint (~800px) and single-column mobile — the badge must not push the "Detaylar" button out of the panel.

- [ ] **Step 5: Full build gate**

Run:
```bash
npm run build
```
Expected: build completes; all `/tr` and `/en` race routes prerender without error.

- [ ] **Step 6: Commit**

```bash
git add components/RaceCategories.tsx
git commit -m "feat: show ITRA points badge on homepage race panels"
```

---

## Verification Summary

After all five tasks:

```bash
npx tsc --noEmit && npm run lint && npm run build
```

Manual checks that no automated command covers here (no test framework — see Global Constraints): the five hero URLs in Task 4 Step 4 including the `alt` text in both locales, and the homepage panel checks in Task 5 Step 4 including equal badge widths across the three tiers.
