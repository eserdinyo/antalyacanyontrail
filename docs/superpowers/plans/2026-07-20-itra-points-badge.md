# ITRA Points Badge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show each ITRA-scored race's performance points (ACT70 → 3, ACT45 → 2, ACT30 → 1) in the race detail hero and on the homepage race panels.

**Architecture:** A new optional `itraPoints` field on `Race` drives a new `ItraPoints` component that returns `null` when the field is absent, so ACT13 and ACT05 render nothing. Two variants: a vertical chip beside `RaceBadge` in the detail hero, and a horizontal outline pill inside `RacePanel` on the homepage. The existing full ITRA lockup is unusable at these sizes, so a cropped wordmark asset is added.

**Tech Stack:** Next.js 16.2.6 (App Router, React Server Components), React 19.2.4, next-intl 4.11.2, Tailwind CSS v4, TypeScript 5.

**Spec:** `docs/superpowers/specs/2026-07-20-itra-points-badge-design.md`

## Global Constraints

- **No test framework exists in this repo.** `package.json` defines only `dev`, `build`, `start`, `lint`; `git ls-files | grep -E '\.(test|spec)\.'` returns nothing. Do NOT add vitest/jest/RTL as part of this plan — that is a separate decision for the maintainer. Verification per task is typecheck + lint + a visual check, with `npm run build` as the final gate.
- Verification commands: `npx tsc --noEmit`, `npm run lint`, `npm run build`, `npm run dev` for visual checks.
- Points values are confirmed with ITRA: ACT70 = 3, ACT45 = 2, ACT30 = 1. ACT13 and ACT05 are not ITRA-scored and get no `itraPoints` field at all — not `0`.
- The ITRA logo in the race detail hero (`app/[locale]/races/[slug]/page.tsx:155-161`) stays on all five races. It is NOT made conditional.
- Copy strings are uppercase in the source JSON (`PUAN` / `POINTS`), matching the existing `Races.start` / `Races.finish` convention.
- Both render surfaces are dark (hero gradient overlay, `RacePanel` dark wash). The ITRA brand green `#8CD346` is preserved on the mark's triangle and dot; only the white letterforms become `currentColor`.
- Out of scope: `components/Hero.tsx`, the "other races" grid at `app/[locale]/races/[slug]/page.tsx:493`, deleting the unused `components/RaceCard.tsx`.

## File Structure

| File | Responsibility |
|---|---|
| `lib/event.ts` | Modify. Add `itraPoints?: number` to `Race`; set values on ACT70 / ACT45 / ACT30. |
| `messages/tr.json`, `messages/en.json` | Modify. Add `Races.itraPoints` label. |
| `public/logos/itra-mark.svg` | Create. Reference copy of the cropped wordmark (documentation/reuse; the component inlines the same paths). |
| `components/RaceBadge.tsx` | Modify. Export the existing `PALETTE` so the `lg` variant can share race colours. |
| `components/ItraPoints.tsx` | Create. Both variants plus the inline mark. Single responsibility: render ITRA points. |
| `app/[locale]/races/[slug]/page.tsx` | Modify. Render `ItraPoints size="lg"` beside `RaceBadge` in `RaceHero`. |
| `components/RaceCategories.tsx` | Modify. Render `ItraPoints size="sm"` in `RacePanel`. |

---

### Task 1: Data model and copy

**Files:**
- Modify: `lib/event.ts:30-43` (type), `lib/event.ts:79-165` (`RACES` entries)
- Modify: `messages/tr.json` (`Races` object), `messages/en.json` (`Races` object)

**Interfaces:**
- Consumes: nothing.
- Produces: `Race.itraPoints?: number`, readable as `race.itraPoints`. Translation key `Races.itraPoints` → `"PUAN"` (tr) / `"POINTS"` (en).

- [ ] **Step 1: Add the field to the `Race` type**

In `lib/event.ts`, inside `type Race = { ... }`, after the `traceDeTrailId` line:

```ts
  /* ITRA performance points — set only for ITRA-scored courses.
     Absent (not 0) for courses that do not score: ACT13, ACT05. */
  itraPoints?: number;
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

### Task 2: Cropped ITRA wordmark asset

**Files:**
- Create: `public/logos/itra-mark.svg`

**Interfaces:**
- Consumes: nothing.
- Produces: `public/logos/itra-mark.svg`, viewBox `0 0 107 40`. Task 3 inlines these same five paths into React; this file is the canonical reference and is available for any future `<img>` use.

Background: `public/logos/itra.svg` is a 216×40 lockup whose first five paths are the "iTRA" wordmark (x range 0.76–106.4) and whose remaining 36 paths are the "INTERNATIONAL / TRAIL RUNNING / ASSOCIATION" text block (x ≥ 113). Cropping means keeping the first five and tightening the viewBox.

- [ ] **Step 1: Write the asset**

Create `public/logos/itra-mark.svg` with exactly this content:

```svg
<svg width="107" height="40" viewBox="0 0 107 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.762695 39.9251V14.5225H9.16269V39.9251H0.762695Z" fill="currentColor"/>
<path d="M31.3919 11.424V39.9253H22.9919V11.424H12.1279V3.71729H42.2613V11.424H31.3919Z" fill="currentColor"/>
<path d="M64.1444 39.925L57.9684 28.117C57.4724 28.165 57.0297 28.165 56.5337 28.165C55.2964 28.165 54.6084 28.117 53.4244 28.069V39.925H45.0244V4.06368C48.0857 3.71701 51.4457 3.47168 55.6964 3.47168C66.9604 3.47168 71.4031 8.85835 71.4031 15.477C71.4031 19.7757 69.0831 23.6263 65.1791 25.9517L73.6751 39.9303H64.1444V39.925ZM56.6831 10.9757C55.3977 10.9757 54.6084 11.0237 53.4244 11.221V21.1997C54.5124 21.301 55.1044 21.349 56.0911 21.349C60.0911 21.349 62.6618 19.4237 62.6618 15.765C62.6618 12.757 60.2884 10.9757 56.6831 10.9757Z" fill="currentColor"/>
<path d="M89.3811 3.41895H88.2451L71.2051 39.9256H79.6851L88.7411 18.2403L97.6851 39.9256H106.426L89.3811 3.41895Z" fill="#8CD346"/>
<path d="M4.96504 9.82949C7.65429 9.82949 9.83437 7.64941 9.83437 4.96015C9.83437 2.27089 7.65429 0.0908203 4.96504 0.0908203C2.27578 0.0908203 0.0957031 2.27089 0.0957031 4.96015C0.0957031 7.64941 2.27578 9.82949 4.96504 9.82949Z" fill="currentColor"/>
</svg>
```

Note the fifth path (the dot over the "i") is `currentColor`, not green — in the source lockup it is `#8CD346`, but at 10–12px tall a green dot on a dark wash reads as a rendering artifact. Only the "A" triangle keeps the brand green.

- [ ] **Step 2: Verify it renders**

Run:
```bash
python3 -c "import xml.etree.ElementTree as E;r=E.parse('public/logos/itra-mark.svg').getroot();print(r.get('viewBox'), len(r))"
```
Expected: `0 0 107 40 5`

- [ ] **Step 3: Commit**

```bash
git add public/logos/itra-mark.svg
git commit -m "feat: add cropped ITRA wordmark asset"
```

---

### Task 3: `ItraPoints` component

**Files:**
- Modify: `components/RaceBadge.tsx:14` (export `PALETTE`)
- Create: `components/ItraPoints.tsx`

**Interfaces:**
- Consumes: `Race.itraPoints` (Task 1), `Races.itraPoints` translation key (Task 1), the five mark paths (Task 2).
- Produces: `export function ItraPoints({ race, size }: { race: Race; size?: "sm" | "lg" }): React.ReactElement | null` and `export const PALETTE: Record<RaceColor, Palette>` from `components/RaceBadge.tsx`.

- [ ] **Step 1: Export `PALETTE` from `RaceBadge.tsx`**

In `components/RaceBadge.tsx`, change line 14 from:

```ts
const PALETTE: Record<RaceColor, Palette> = {
```

to:

```ts
export const PALETTE: Record<RaceColor, Palette> = {
```

Leave everything else in that file unchanged.

- [ ] **Step 2: Create the component**

Create `components/ItraPoints.tsx` with exactly this content:

```tsx
import { useTranslations } from "next-intl";
import type { Race } from "@/lib/event";
import { PALETTE } from "./RaceBadge";

/* "iTRA" wordmark, cropped from public/logos/itra-mark.svg.
   Inlined rather than <Image>-d so the letterforms inherit currentColor. */
function ItraMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 107 40" aria-hidden className={className}>
      <path d="M0.762695 39.9251V14.5225H9.16269V39.9251H0.762695Z" fill="currentColor" />
      <path d="M31.3919 11.424V39.9253H22.9919V11.424H12.1279V3.71729H42.2613V11.424H31.3919Z" fill="currentColor" />
      <path d="M64.1444 39.925L57.9684 28.117C57.4724 28.165 57.0297 28.165 56.5337 28.165C55.2964 28.165 54.6084 28.117 53.4244 28.069V39.925H45.0244V4.06368C48.0857 3.71701 51.4457 3.47168 55.6964 3.47168C66.9604 3.47168 71.4031 8.85835 71.4031 15.477C71.4031 19.7757 69.0831 23.6263 65.1791 25.9517L73.6751 39.9303H64.1444V39.925ZM56.6831 10.9757C55.3977 10.9757 54.6084 11.0237 53.4244 11.221V21.1997C54.5124 21.301 55.1044 21.349 56.0911 21.349C60.0911 21.349 62.6618 19.4237 62.6618 15.765C62.6618 12.757 60.2884 10.9757 56.6831 10.9757Z" fill="currentColor" />
      <path d="M89.3811 3.41895H88.2451L71.2051 39.9256H79.6851L88.7411 18.2403L97.6851 39.9256H106.426L89.3811 3.41895Z" fill="#8CD346" />
      <path d="M4.96504 9.82949C7.65429 9.82949 9.83437 7.64941 9.83437 4.96015C9.83437 2.27089 7.65429 0.0908203 4.96504 0.0908203C2.27578 0.0908203 0.0957031 2.27089 0.0957031 4.96015C0.0957031 7.64941 2.27578 9.82949 4.96504 9.82949Z" fill="currentColor" />
    </svg>
  );
}

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

  const label = `ITRA ${race.itraPoints} ${t("itraPoints")}`;

  /* Detail hero: vertical chip beside RaceBadge size="lg" (w-36 h-[170px] at sm:),
     so ~a quarter of its area. Shares the badge palette to read as one system. */
  if (size === "lg") {
    const p = PALETTE[race.color];
    return (
      <div
        role="img"
        aria-label={label}
        className="flex w-16 flex-col items-center gap-1.5 border px-2 py-3 drop-shadow-[0_8px_18px_rgba(27,24,23,0.32)] sm:w-[68px]"
        style={{ borderColor: p.outline, backgroundColor: p.to, color: p.ink }}
      >
        <ItraMark className="h-3 w-auto" />
        <span className="numeral text-3xl leading-none">{race.itraPoints}</span>
        <span className="label opacity-70">{t("itraPoints")}</span>
      </div>
    );
  }

  /* Homepage RacePanel: horizontal outline pill. Colour comes from --race-accent,
     which RacePanel already sets on its root Link from PANEL_TINT. */
  return (
    <span
      role="img"
      aria-label={label}
      className="inline-flex items-center gap-1.5 border border-[var(--race-accent)] px-2.5 py-1 text-[var(--race-accent)]"
    >
      <ItraMark className="h-2.5 w-auto" />
      <span className="label">
        {race.itraPoints} {t("itraPoints")}
      </span>
    </span>
  );
}
```

Notes for the implementer:
- No `"use client"`. This is a Server Component; `useTranslations` from next-intl works in Server Components — `components/RaceCategories.tsx:45` and `components/RaceCard.tsx:23` already do exactly this.
- The component carries no outer margin. Spacing is the caller's job (Tasks 4 and 5).
- `role="img"` + `aria-label` means a screen reader announces "ITRA 3 points" once; the inner `<svg>` is `aria-hidden` so the brand is not announced twice.

- [ ] **Step 3: Verify types and lint**

Run:
```bash
npx tsc --noEmit && npm run lint
```
Expected: no TypeScript output; ESLint reports no errors for `components/ItraPoints.tsx`.

- [ ] **Step 4: Commit**

```bash
git add components/ItraPoints.tsx components/RaceBadge.tsx
git commit -m "feat: add ItraPoints component with hero and panel variants"
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
          <div className="flex shrink-0 items-end gap-4">
            <RaceBadge race={race} size="lg" />
            <ItraPoints race={race} size="lg" />
          </div>
```

`items-end` bottom-aligns the shorter chip with the badge. When `ItraPoints` returns `null` the flex row collapses to just the badge, so ACT13 and ACT05 look exactly as they do today.

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
| `http://localhost:3000/tr/races/antalya-termessos-ultra` | Chip right of the 70 badge, reads `3` / `PUAN` |
| `http://localhost:3000/tr/races/antalya-goat-ultra` | Reads `2` / `PUAN` |
| `http://localhost:3000/tr/races/alageyik-trail` | Reads `1` / `PUAN` |
| `http://localhost:3000/tr/races/guver-cliff-trail` | **No chip**; ITRA lockup still present above the badge |
| `http://localhost:3000/tr/races/my-pace-run` | **No chip**; ITRA lockup still present |
| `http://localhost:3000/en/races/antalya-termessos-ultra` | Reads `3` / `POINTS` |

Also check at a 390px-wide viewport that the badge + chip row does not overflow horizontally.

- [ ] **Step 5: Commit**

```bash
git add "app/[locale]/races/[slug]/page.tsx"
git commit -m "feat: show ITRA points beside distance badge in race hero"
```

---

### Task 5: Homepage `RacePanel` integration

**Files:**
- Modify: `components/RaceCategories.tsx` (import block near line 7; centre stack at lines 152-154)

**Interfaces:**
- Consumes: `ItraPoints` (Task 3), the `--race-accent` CSS variable already set at `components/RaceCategories.tsx:97`.
- Produces: nothing for later tasks.

- [ ] **Step 1: Import the component**

In `components/RaceCategories.tsx`, next to the existing `ElevationProfile` import (line 7):

```ts
import { ItraPoints } from "./ItraPoints";
```

- [ ] **Step 2: Render the pill under the elevation figure**

Find the elevation line in `RacePanel` (currently lines 152-154):

```tsx
            <p className="mt-5 text-sm font-black tracking-[0.22em] text-bone">
              {race.elevationM}M+
            </p>
```

Add immediately after it, still inside the same `<div className="relative">`:

```tsx
            <div className="mt-4 flex justify-center">
              <ItraPoints race={race} size="sm" />
            </div>
```

The wrapper keeps the pill centred within the panel's centre stack and owns the spacing. When `ItraPoints` returns `null` the wrapper is an empty 0-height flex box, so ACT13 and ACT05 panels keep their current vertical rhythm.

- [ ] **Step 3: Verify types and lint**

Run:
```bash
npx tsc --noEmit && npm run lint
```
Expected: no TypeScript output, no ESLint errors.

- [ ] **Step 4: Visual check**

Run `npm run dev` and open `http://localhost:3000/tr` , scroll to the `#races` section:

- The 70 / 45 / 33 panels each show an outline pill under the `M+` figure, reading `3 PUAN` / `2 PUAN` / `1 PUAN`.
- Each pill's border and text match that panel's accent colour (`ember-deep`, `ember`, `ochre` respectively) — they should NOT all be the same colour. If they are, `--race-accent` is not resolving; confirm the pill is rendered inside the root `<Link>` that sets it.
- The 13 and 7 panels show no pill and their layout is unchanged.
- Check `http://localhost:3000/en` shows `3 POINTS`.
- Check the `md:grid-cols-2` breakpoint (~800px) and single-column mobile — the pill must not push the "Detaylar" button out of the panel.

- [ ] **Step 5: Full build gate**

Run:
```bash
npm run build
```
Expected: build completes; all `/tr` and `/en` race routes prerender without error.

- [ ] **Step 6: Commit**

```bash
git add components/RaceCategories.tsx
git commit -m "feat: show ITRA points pill on homepage race panels"
```

---

## Verification Summary

After all five tasks:

```bash
npx tsc --noEmit && npm run lint && npm run build
```

Manual checks that no automated command covers here (no test framework — see Global Constraints): the six hero URLs in Task 4 Step 4, and the homepage panel checks in Task 5 Step 4, including per-panel accent colour and the two responsive breakpoints.
