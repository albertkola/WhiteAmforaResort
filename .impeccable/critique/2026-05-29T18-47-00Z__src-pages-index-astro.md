---
target: homepage
total_score: 31
p0_count: 0
p1_count: 2
timestamp: 2026-05-29T18-47-00Z
slug: src-pages-index-astro
---
# Critique — Homepage (src/pages/index.astro)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Header solid-on-scroll, hover/focus states present; little dynamic status (static page) |
| 2 | Match System / Real World | 4 | Plain, sensory copy; natural section order; no jargon |
| 3 | User Control and Freedom | 3 | Lang toggle, mobile-menu close, skip link; nav leads to unbuilt pages |
| 4 | Consistency and Standards | 3 | Design-system primitives used throughout; dead nav links break the contract |
| 5 | Error Prevention | 3 | No inputs on home; main risk is dead links + placeholder WhatsApp number |
| 6 | Recognition Rather Than Recall | 4 | Text-labeled nav, clear CTAs, visible options |
| 7 | Flexibility and Efficiency | 3 | WhatsApp shortcut + multiple inquiry paths; no power-user needs |
| 8 | Aesthetic and Minimalist Design | 3 | Detector clean, strong hierarchy; live spacing/contrast unverified (no browser) |
| 9 | Error Recovery | 2 | No custom 404; dead nav links land on default Astro 404 |
| 10 | Help and Documentation | 3 | WhatsApp/contact always reachable; no FAQ (fine for scope) |
| **Total** | | **31/40** | **Good** |

## Anti-Patterns Verdict
- **LLM:** Does not read as AI slop. Committed coastal-editorial direction, real photography, warm-tinted OKLCH palette, restrained eyebrows (not on every section), honest amenity strip. Identity-preserved Fraunces+Mulish steered away from the serif-mono-ruled cliché.
- **Deterministic scan:** `detect.mjs` on rendered `dist/index.html` returned `[]` (zero findings).
- **Visual overlays:** not available (no Playwright browser bridge); live pixel inspection skipped.

## Overall Impression
Confident, calm, on-brand. The biggest real problem is not aesthetic but structural: the nav promises pages that 404 (being built in Increment 4–5), and there's no custom 404. Second concern is a few low-contrast muted-text-on-color spots to verify.

## What's Working
1. Hero: full-bleed pine-cove photo + scrim + staggered load reveal reads premium without gimmicks.
2. Honesty as a feature: confirmed-only highlights, "more layouts coming," flagged testimonials — matches the brand's "honest by default" principle.
3. Coherent system: Section/Button/Card/Picture reuse keeps rhythm; AVIF/WebP + intrinsic sizing protect CLS and performance.

## Priority Issues
- **[P1] Dead navigation links.** Header/footer link to /rooms, /gallery, /about, /location, /contact which 404. **Why:** breaks trust on the primary nav. **Fix:** build the pages (Increment 4 in progress) + drop the dead /location item + add a custom 404. **Command:** /impeccable harden
- **[P1] Placeholder WhatsApp/contact targets.** wa.me/355000000000 and tel/mailto are placeholders; CTAs currently dead-end. **Why:** the core conversion action fails. **Fix:** fill src/config/site.ts before launch (known TODO). **Command:** /impeccable harden
- **[P2] Low-contrast muted text on color.** Testimonials note `text-canvas/60` on teal and footer disclaimer `text-canvas/40` on ink likely miss 4.5:1. **Why:** AA failure, hard to read. **Fix:** raise to ~/80 or solid brass/canvas. **Command:** /impeccable audit
- **[P2] Testimonials read as real but are representative.** **Why:** credibility/trust risk if mistaken for verified reviews. **Fix:** keep the disclaimer visible; replace with real quotes when available. **Command:** /impeccable clarify
- **[P3] Interim stock imagery + image-only location map.** Expected pre-launch; replace with client photos and a real map embed. **Command:** /impeccable optimize

## Persona Red Flags
- **Jordan (first-timer):** clear hero CTA and labeled nav, but clicking most nav items 404s — dead ends with no guidance. Fix once inner pages + 404 exist.
- **Casey (mobile):** WhatsApp bubble sits in the thumb zone (good); header "Book/Inquire" is hidden under `sm:` so on the smallest phones the only book path is via the hamburger — acceptable but worth confirming the menu is discoverable. Touch targets look adequate.
- **Sam (screen reader / low vision):** strong baseline — skip link, focus-visible, alt text, reduced-motion, lang/hreflang. Red flag: the muted-on-color contrast spots above; verify with an audit.

## Minor Observations
- Highlights icons map to items by array index — fragile if copy reorders; consider keying icons explicitly.
- No custom 404 page yet.
- Map section is a static image until MAP_EMBED_URL is set.

## Questions to Consider
- Should the homepage show any price signal (from / per night), or stay inquiry-only by design?
- Is inquiry-only (no live booking) the intended conversion, with WhatsApp as the hero path?
