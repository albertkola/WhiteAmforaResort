# White Amfora — Design Notes

> Patterns worth **adapting** (not copying) from the reference sites, fused with the
> `impeccable` skill's frontend craft. This guides Increments 2–4.

---

## Reference sites — what to steal (the technique, not the content)

### Maritim Hotel Plaza Tirana — plazatirana.com
- **Persistent "Book your stay" button** anchored in the header — always-visible conversion.
- **Photography-led**, understated neutral palette so images dominate.
- Rooms as **dedicated pages**, framed as "experiences/lifestyle," not commodity inventory.
- Embedded **Instagram feed** for social proof.
- → *Adapt:* always-visible primary CTA in header; let real hotel photography carry the page.

### Arka Art Hotel — arkahotel.al
- **Room cards in a clean grid** with image + name + **size (m²) + capacity** (e.g. "64 m² / 4 adults").
- Booking CTA **immediately under the hero tagline**, repeated in room cards + footer.
- A single **signature illustration/motif** ("ArkaLulja" flower) gives brand character on a
  clean white/dark-text base.
- → *Adapt:* room/apartment cards showing **m² + sleeps N + sea view**; one recurring brand
  motif (an **amphora line-mark**) used sparingly as our signature.

### MGallery / Green Coast (Albanian Riviera) — mgallery.accor.com
- **Poetic, destination-narrative hero copy** ("Radiant Elegance… Azure Shores").
- **Serif headings + sans body**, warm earth tones (ochre, sage, sandy neutrals), lots of whitespace.
- Room carousel with **bed-config icons, m², capacity, sea-view** emphasis.
- Repeated **"See rates"** CTA + sticky booking widget to reduce friction.
- Sensory, place-rooted language (history, local materials).
- → *Adapt:* this is our **closest aesthetic match** — coastal-luxury, serif+sans, earthy
  warm neutrals, narrative copy tied to Rana e Hedhun / Shëngjin / Adriatic.

### Tirana Marriott — marriott.com (⚠️ page was bot-blocked, 403; notes from general Marriott.com patterns)
- Big edge-to-edge hero, **sticky date/booking bar**, strong typographic hierarchy.
- Highly **structured info** (amenities grids, clear room comparison), robust accessibility.
- → *Adapt:* clean structured amenity grids and a clear, scannable rooms comparison; strong
  a11y baseline. (Treat as a structural reference only — could not inspect live.)

---

## Synthesis — the White Amfora direction

**Chosen visual direction (one, committed):** *coastal editorial luxury* — warm, light,
photography-forward, with refined serif display type and generous whitespace. Calm and
Mediterranean, not corporate. (See impeccable: pick one direction and execute cleanly.)

**Hero**
- Full-bleed real photo (or muted autoplay video loop) of the sea-view balcony / Rana e Hedhun beach.
- Short narrative tagline + hotel name; primary CTA "Check availability / Inquire",
  secondary "WhatsApp us". Subtle gradient scrim for text contrast (no heavy dark overlay).
- Preload hero, fixed aspect to avoid layout shift.

**Navigation**
- Transparent over hero → solid on scroll. Always-visible **"Book / Inquire"** CTA + EN/SQ toggle.
- Mobile: full hamburger drawer.

**Apartment/room cards**
- Grid of cards: image, name, **m² + sleeps N + sea view**, short line, **"Inquire about this
  apartment"** CTA (prefills the inquiry with the unit name — see Increment 5).
- Emphasize the self-catering angle (kitchen, living room, balcony).

**Booking / inquiry placement**
- No own booking engine. Repeat the inquiry CTA: header, hero, each apartment card, and a
  final CTA band. Inquiry composes WhatsApp / email / Booking.com links.

**Gallery**
- Large high-res grid / light masonry, consistent lighting, accessible lightbox (keyboard + swipe),
  lazy-loaded. Minimal text overlay.

**Location**
- Lean into storytelling: the scenic dune beach, Shëngjin promenade, day trips (Rozafa Castle,
  Lake Skadar), ~51 km from Tirana airport. Map + distance highlights.

**Luxury cues to use**
- Real photography over stock; generous whitespace; refined serif headlines; restrained palette;
  one signature **amphora** line-motif; subtle, purposeful motion only.

---

## impeccable anti-patterns to actively avoid
- ❌ Inter / Arial / system-default fonts (we use distinctive faces — see proposal below).
- ❌ Purple→blue gradients, dark glows, bounce/elastic easing.
- ❌ Pure black/gray — **tint** neutrals warm (limestone/clay/sand).
- ❌ Cards-in-cards, gray text on colored backgrounds, the rounded-icon-tile-above-every-heading cliché.
- ❌ Generic SaaS hero / interchangeable card piles with no hierarchy.

---

## Proposed palette & typography (implemented as a default; **awaiting client sign-off**)

**Concept:** *white + amfora (terracotta amphora clay) + Adriatic beach.* Warm limestone canvas,
terracotta as the signature accent, deep Adriatic teal as the cool counterpoint, sand/taupe
neutrals, a muted brass for fine luxury detail. Neutrals are warm-tinted (never pure gray),
defined in **OKLCH** per impeccable.

| Token | Role | Value (OKLCH) | ~Hex |
|---|---|---|---|
| `canvas` | warm limestone background | `oklch(97% 0.012 85)` | `#F7F3EC` |
| `ink` | deep warm charcoal text | `oklch(27% 0.02 60)` | `#33302B` |
| `clay` | **terracotta / amphora accent** | `oklch(62% 0.12 42)` | `#BD6A4C` |
| `sea` | Adriatic deep teal | `oklch(45% 0.055 205)` | `#356A72` |
| `sand` | warm taupe neutral | `oklch(86% 0.028 75)` | `#E4D8C6` |
| `brass` | muted gold detail | `oklch(72% 0.075 82)` | `#C2A36B` |

**Typography**
- **Display / headings: _Fraunces_** (variable serif, optical-size axis) — high-contrast,
  characterful, coastal-luxury. Supports Albanian diacritics (ë, ç, Ë, Ç).
- **Body / UI: _Mulish_** (variable humanist sans) — clean, warm, highly readable, full
  Latin-Extended for Albanian.
- Self-hosted via Fontsource (no render-blocking external requests; good Lighthouse).
- Fluid modular type scale with `clamp()`; ~1.25 ratio body, larger display steps.

> Alternatives if the client wants a different feel: **Cormorant Garamond** (airier, more
> classical serif) for display, or **Marcellus** (Roman-inscriptional, "ancient amphora" nod).
> Easy to swap — fonts/tokens live in one place (`src/styles/global.css`).
