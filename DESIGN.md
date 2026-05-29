# Design

Visual system for White Amfora. Source of truth for tokens lives in
`src/styles/global.css` (Tailwind v4 `@theme`). This document mirrors it; keep them in sync.

## Theme

**Direction:** coastal editorial luxury — calm, light, photography-forward. Warm limestone
canvas with a terracotta "amfora" accent and a deep Adriatic teal counterpoint. Light theme;
the physical scene is midday Mediterranean sun on a quiet sand-and-pine beach, an unhurried
mood. **Color strategy: restrained** — tinted-warm neutrals carry the surface, terracotta is
the single accent (≤10%), teal/ink/brass are supporting roles. Neutrals are warm-tinted in
OKLCH (never pure gray/black).

## Color

All values OKLCH. Defined as `@theme` tokens → generate utilities (`bg-clay`, `text-sea`, …).

| Token | Role | OKLCH | ~Hex |
|---|---|---|---|
| `canvas` | page background (warm limestone) | `oklch(97% 0.012 85)` | `#F7F3EC` |
| `canvas-deep` | alternating section background | `oklch(94% 0.018 82)` | — |
| `ink` | primary text / dark surfaces | `oklch(27% 0.02 60)` | `#33302B` |
| `ink-soft` | muted body text (still ≥4.5:1 on canvas) | `oklch(45% 0.02 60)` | — |
| `clay` | **primary accent** (terracotta / amphora) | `oklch(62% 0.12 42)` | `#BD6A4C` |
| `clay-deep` | accent hover/active | `oklch(54% 0.12 40)` | — |
| `sea` | secondary (Adriatic teal); dark hero bg | `oklch(45% 0.055 205)` | `#356A72` |
| `sea-deep` | teal depth / gradients | `oklch(38% 0.05 205)` | — |
| `sand` | warm neutral blocks | `oklch(86% 0.028 75)` | `#E4D8C6` |
| `brass` | fine luxury detail / on-dark eyebrows | `oklch(72% 0.075 82)` | `#C2A36B` |

**Contrast rules:** body text uses `ink` / `ink-soft` on `canvas` (≥4.5:1). On `sea`/`ink`
surfaces, text is `canvas` (and `brass` for eyebrows, used sparingly). Never gray text on the
teal; use `canvas` at full or a `canvas/80` transparency.

## Typography

Two families on a contrast axis (serif display + humanist sans). Both variable, self-hosted
via Fontsource. Albanian diacritics (ë, ç, Ë, Ç) required and supported.

- **Display — Fraunces Variable** (`--font-display`). Headings h1–h4, optical sizing on,
  weight ~300 (light) for large display, `letter-spacing: -0.01em`, `text-wrap: balance`.
- **Body — Mulish Variable** (`--font-body`). UI and prose, line-height 1.6, `text-wrap:
  pretty`, body measure capped (`--container-prose: 68ch`).

**Scale (fluid, clamped):** `--text-hero` clamp 2.75→5.5rem · `--text-display` 2.25→3.75rem ·
`--text-title` 1.5→2.25rem · `--text-eyebrow` 0.8125rem. Hierarchy via scale + weight
contrast. Eyebrows are used **sparingly** (brand cue, not on every section — see anti-patterns).

## Spacing & Layout

- Containers: `max-w-3xl` (narrow/prose), `max-w-6xl` (default), `max-w-7xl` (wide) via
  `Section.astro`; horizontal padding `px-6`.
- Section vertical rhythm: `py-20 md:py-28 lg:py-32` (lg) with sm/md variants; vary for rhythm.
- Responsive grids prefer `auto-fit minmax()` or explicit `sm:/lg:` columns; flex for 1D.
- Breakpoints verified at **360 / 768 / 1024 / 1440 / 1920**; wide screens use max-width
  containers + multi-column, never stretched/empty.
- z-index scale: header `z-50`, mobile drawer `z-60`, WhatsApp bubble `z-40`, skip-link `z-100`.

## Motion

- Easing token `--ease-luxury: cubic-bezier(0.22, 1, 0.36, 1)` (ease-out; no bounce/elastic).
- Scroll reveal: `[data-reveal]` + `[data-reveal-group]` (stagger via `--reveal-i`), driven by
  IntersectionObserver in `BaseLayout`. Content is visible by default; reveal enhances it.
- Hover: subtle card lift + image zoom (`scale-105`), nav underline grow, button `-translate-y`.
- **Reduced motion:** a global `@media (prefers-reduced-motion: reduce)` block neutralizes all
  transitions/animations; the reveal script also short-circuits to visible. Non-optional.

## Components

Built in Increment 2. Reuse these before inventing new ones.

- **Layout** (`src/components/layout/`): `Header.astro` (fixed; transparent-over-hero →
  solid-on-scroll via `data-state`; EN/SQ toggle; Book CTA; accessible mobile drawer),
  `Footer.astro` (brand, socials filtered to set values, quick links, tel/mailto/map),
  `WhatsAppBubble.astro` (fixed, prefilled greeting, `no-print`, safe-area, motion-safe pulse),
  `Logo.astro` (amphora line-mark, currentColor), `SocialIcon.astro`.
- **UI primitives** (`src/components/ui/`): `Button.astro` (primary / outline / ghost / light ×
  sm/md/lg; `<a>` or `<button>`), `Section.astro`, `SectionHeading.astro`, `Card.astro`
  (image + meta + body + CTA; hover lift/zoom), `Picture.astro` (Astro `<Picture>` → AVIF/WebP,
  responsive `srcset`, intrinsic sizing, no CLS).
- **Imagery:** always render through `Picture.astro`. Hero/LCP image `loading="eager"
  fetchpriority="high"`; everything else lazy. Real client photos replace
  `src/assets/placeholders/*` (generated, clearly marked).

## Anti-patterns (project-specific, on top of impeccable's global bans)

- No eyebrow above every section; no `01 / 02 / 03` numbered scaffolding by reflex.
- No cards-in-cards; no generic identical-card grids used as filler.
- No pure black/gray — tint warm. No gray text on the teal hero.
- No corporate-chain sterility, party-resort loudness, or booking-listing density (see
  PRODUCT.md anti-references). No gold-opulence luxury clichés.
- No em dashes or marketing buzzwords in copy; specific sensory nouns/verbs instead.
