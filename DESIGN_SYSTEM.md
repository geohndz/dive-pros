# Dive Pros Design System

Living reference for brand tokens and UI patterns. Update this document as each section ships.

## Brand

- **Name:** Dive Pros — Pensacola, FL
- **Object:** A dive log. Instrument type for numbers and chrome. A reading face for the entry. Photography is the page.
- **Tone:** Knowledgeable, adventurous, welcoming, technical, local, established, slightly gritty. Not luxury, corporate, or “premium.”
- **Voice:** Write like a diver. Specific beats impressive. One idea per sentence. Use “you” more than “we.” Contractions unless technical or legal.
- **Numbers:** If a number is meaningful, make it visual. Don’t bury it in a paragraph.
- **Since 1988:** Brand asset, used once (hero). Don’t repeat it as filler.

### Style dictionary

| Term | Use |
|------|-----|
| SCUBA | Always, except in customer quotes and official PADI names (Discover Scuba, Master Scuba Diver) |
| Dive Pros | Never “Dive Pro’s” in our voice. Leave it inside quotes. |
| Gulf Coast | Capital C |
| Pensacola | As written |
| Open Water / Advanced Open Water | Course names, title case |
| Headlines | Write sentence case; render in all caps via CSS |

- **Icons:** [Lucide](https://lucide.dev)
- **Corners:** **0px everywhere.** No rounded buttons, cards, images, menus, or tags.

## Color

| Token | CSS variable | Hex | Usage |
|-------|--------------|-----|--------|
| Navy | `--color-brand-black` | `#05070E` | Page ground. Near-black navy. Static — does not change on scroll. |
| White | `--color-brand-white` | `#FFFFFF` | Type on dark, courses panel, mega nav |
| Yellow | `--color-brand-yellow` | `#FFFA3B` | Primary CTAs, accent words, indexes, visit band |
| Gray | `--color-brand-gray` | `#5E5E5E` | Mega column headers, secondary labels on light |

Hairlines: `white/10` on dark, `black/10` or `black/15` on light/yellow.

## Typography

| Role | Family | Notes |
|------|--------|-------|
| Primary | **Oxanium** | All UI: nav, headings, body, buttons, data |

### Scale

| Role | Size | Weight | Transform / color |
|------|------|--------|-------------------|
| Display (`.display`) | clamp ~2.4rem–5.25rem | Bold (700) | Uppercase; line-height 0.92 |
| Hero headline | clamp ~1.7rem–5.5rem | Bold (700) | White + yellow year |
| Log (`.log`) | 1.25rem / 1.55 | Regular (400) | Oxanium; max 38rem |
| Index / data | 0.7–0.875rem | Medium (500) | Oxanium; uppercase only when it is data |
| Nav link | 1rem | Medium (500) | Oxanium; title case; white |
| Button | 1rem | Medium (500) | Oxanium; black on yellow |

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

One log. Five chapters.

| Chapter | Notes |
|---------|--------|
| Surface | Hero. Droplets. Two-line headline. |
| Shop | Offerings list + photo. Hover swaps the picture. No autoplay. |
| Tank | 12′ + stats + Open Water + course ladder |
| Gulf | Local sites accordion, then Oriskany 911 pin |
| Reviews | Google rating + quote carousel |
| Shore | Address, hours, phone |

## Motion

Emil’s frequency gate. Tokens: `--ease-out`, `--duration-press` 160ms, `--duration-ui` 200ms.

| Effect | Where | Notes |
|--------|--------|--------|
| Droplets | Hero | WebGL2; respects `prefers-reduced-motion` |
| Fade / rise-in | Hero | CSS on load only |
| Offering photo | Shop | 200ms opacity; hover/focus only |
| Sites grow | Desktop | One accordion interaction |
| Oriskany pin | Desktop, motion ok | The wreck holds |
| Review rotate | Reviews | 8s interval; paused if reduced motion |
| Button swoosh | CTAs | Brand signature; press `scale(0.97)` at 160ms |

## Spacing

| Token | Value |
|-------|--------|
| Radius | `0` |
| Page gutters | `--page-gutter`: `1.25rem` / `2.5rem` |
| Max width | `1440px` |

## Assets

| File | Path | Use |
|------|------|-----|
| Logo | `/logo.png` | Header, footer |
| Hero | `/hero.jpg` | Hero (DNA — keep) |
| Awards | `/best-of-bay.png` | Shop stamp if used |
| Featured / source | `/featured-diver.jpg` | Original still in public |
| New photography | `/photos/*` | Copied from `assets/photos` |

## Component map

| Component | Path |
|-----------|------|
| Button | `src/components/ui/Button.tsx` |
| Container | `src/components/ui/Container.tsx` |
| Header / MegaNav / MobileNav | `src/components/header/` |
| Footer | `src/components/footer/Footer.tsx` |
| Hero | `src/components/hero/Hero.tsx` |
| Descent (Oriskany pin) | `src/components/home/Descent.tsx` |
| Home sections | `src/components/home/` |
| EditorialPage | `src/components/pages/EditorialPage.tsx` |
| ImageDroplets | `src/components/effects/ImageDroplets.tsx` |
| Site copy | `src/lib/site.ts` |
| Inner pages | `src/lib/pages.ts` |

---

*Last updated: Oxanium back on body; five homepage chapters*
