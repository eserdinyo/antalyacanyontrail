# MAZ Organizasyon organizer credit — design

**Date:** 2026-08-03
**Status:** Approved (option 1 of 3)

## Goal

Credit MAZ Organizasyon as the event organizer on the site, using the logo
provided as `MAZ_Organizasyon_Siyah_Zemin.pdf` and the contact address
`mazorganizasyon@gmail.com`.

## Decision

Add an "Organized by" block to the footer's brand column (under the site
tagline), showing the MAZ wordmark linked to `mailto:mazorganizasyon@gmail.com`.

- **Asset:** the PDF (white wordmark on black) is converted to a
  white-on-transparent WebP at `public/logos/maz.webp` (800×325), so it sits
  on the dark footer without a black box.
- **Component:** `components/Footer.tsx` renders it with `next/image` at
  150×61, dimmed to 80% opacity with full opacity on hover, matching the
  footer's muted link treatment.
- **i18n:** new `Footer.organizedBy` key — EN "Organized by", TR
  "Organizasyon".
- **Out of scope:** the site contact email stays
  `antalyacanyonultra@gmail.com`; no sponsor tile; no dedicated organizer
  page.

## Alternatives considered

1. Text-only credit in the bottom bar — rejected: doesn't use the logo.
2. Full-width organizer strip above the bottom bar — rejected: too prominent,
   competes with the sponsors section.
