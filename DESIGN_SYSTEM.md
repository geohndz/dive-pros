# Dive Pros Design System

Living reference for brand tokens and UI patterns. Update this document as each section ships.

## Brand

- **Name:** Dive Pros — Pensacola, FL
- **Tone:** Local dive community, experienced, welcoming, Gulf Coast. Editorial and sharp — not beach-kitche.
- **Icons:** [Lucide](https://lucide.dev)
- **Corners:** **0px everywhere.** No rounded buttons, cards, images, menus, or tags.

## Color

| Token | CSS variable | Hex | Usage |
|-------|--------------|-----|--------|
| Black | `--color-brand-black` | `#111111` | Page ground, header (on scroll), primary text on light, inverse buttons |
| White | `--color-brand-white` | `#FFFFFF` | Type on dark, courses panel, mega nav |
| Yellow | `--color-brand-yellow` | `#FFFA3B` | Primary CTAs, accent words, indexes, marquee, visit band |
| Gray | `--color-brand-gray` | `#5E5E5E` | Mega column headers, secondary labels on light |

Hairlines: `white/10` on dark, `black/10` or `black/15` on light/yellow.

## Typography

| Role | Family | Notes |
|------|--------|--------|
| Primary | **Oxanium** (Google Fonts) | All UI: nav, headings, body, buttons |

### Scale

| Role | Size | Weight | Transform / color |
|------|------|--------|-------------------|
| Display (`.display`) | clamp ~2.6rem–6.25rem | Bold (700) | Uppercase; line-height 0.92 |
| Hero headline | clamp ~2.5rem–4.25rem | Bold (700) | Uppercase; white + yellow accent |
| Section body | ~1rem–1.125rem | Regular (400) | Sentence case |
| Index / kicker | 0.7rem | Medium (500) | Uppercase; tracking 0.22em; yellow |
| Nav link | 1rem | Medium (500) | Title case; white |
| Button | 1rem | Medium (500) | Black on yellow |

## Buttons

| Property | Value |
|----------|--------|
| Height | `48px` |
| Radius | `0` |
| Font | Oxanium, 16px, medium |
| Width (default) | Hug + `px-6` |
| Width (in card) | `100%` |

**Variants**

- `primary` — yellow fill, black text
- `outline` — white hairline, white text (dark surfaces)
- `outlineDark` — black hairline (yellow surfaces)
- `inverse` — black fill, white text
- `fullWidth` — `width: 100%`

## Navigation

### Header bar

- Transparent over hero; solid black on scroll, mega open, or mobile menu
- Fixed, full width, height `88px`
- Logo left · nav center · Contact Us right
- Active mega tab: white rectangle, **square** (no radius), flush with panel

### Mega navigation

- White panel, square corners, drop shadow
- Featured media card: square crop, full-width primary button on black

## Homepage map

| Index | Section | Notes |
|-------|---------|--------|
| — | Hero | Existing DNA: droplets, awards, left copy |
| — | Marquee | Yellow bar, uppercase ticker |
| 01 | About | “Not just certified. Qualified.” + stats |
| 02 | What we do | Numbered offerings, hover image swap |
| 03 | Training | White band, course ladder, Open Water $389 |
| 04–05 | Dive sites | Four ranges + USS Oriskany full-bleed |
| 06 | Process | Four steps |
| 07 | Reviews | Rotating quotes from the live site |
| 08 | Visit | Yellow band, hours, address |

## Motion

| Effect | Where | Notes |
|--------|--------|--------|
| Droplets | Hero | WebGL2; respects `prefers-reduced-motion` |
| Fade / rise-in | Hero | CSS on load |
| Scroll reveal | Sections | GSAP + ScrollTrigger; skipped if reduced motion |
| Marquee | Below hero | CSS; paused if reduced motion |
| Review rotate | Reviews | 8s interval; paused if reduced motion |

## Spacing

| Token | Value |
|-------|--------|
| Radius | `0` |
| Page gutters | `1.5rem` mobile → `2.5rem` desktop (`px-5` / `lg:px-10`) |
| Max width | `1440px` |

## Assets

| File | Path | Use |
|------|------|-----|
| Logo | `/logo.png` | Header, footer |
| Hero | `/hero.jpg` | Hero (DNA — keep) |
| Awards | `/best-of-bay.png` | Hero |
| Featured / source | `/featured-diver.jpg` | Original still in public |
| New photography | `/photos/*` | Copied from `assets/photos` — offerings, sites, courses, gallery, inner pages |

## Component map

| Component | Path |
|-----------|------|
| Button | `src/components/ui/Button.tsx` |
| Container / SectionIndex | `src/components/ui/Container.tsx` |
| Header / MegaNav / MobileNav | `src/components/header/` |
| Footer | `src/components/footer/Footer.tsx` |
| Hero | `src/components/hero/Hero.tsx` |
| Home sections | `src/components/home/` |
| EditorialPage | `src/components/pages/EditorialPage.tsx` |
| ImageDroplets | `src/components/effects/ImageDroplets.tsx` |
| Site copy | `src/lib/site.ts` |
| Inner pages | `src/lib/pages.ts` |

---

*Last updated: full homepage + inner pages, sharp system*
