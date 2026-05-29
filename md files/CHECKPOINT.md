# CHECKPOINT — White Amfora Hotel Website

> **Purpose of this file.** This is a living handoff document. It is updated at the
> end of **every increment** so that *any* AI agent (or human) can pick up the project
> cold and immediately understand what it is, the rules it must follow, what has been
> built, and what comes next. If you are an agent starting fresh: **read this entire
> file first**, then read `white-amfora-master-prompt.md` for the full increment specs.

**Last updated:** 2026-05-30 — end of Increment 6
**Current phase:** Increment 6 complete → awaiting Increment 7 (Cloudflare Pages deploy + handoff)

> **File location note:** the markdown docs (this file, `README.md`,
> `white-amfora-master-prompt.md`) were moved by the client into the **`md files/`**
> folder. For a GitHub publish, `README.md` should move back to the repo root so it
> renders automatically.

---

## 1. What this project is

A **production website for "White Amfora Hotel"**, a beachside hotel in Albania. Real
client project. The site is marketing + inquiry-focused (no online payment/booking
engine of our own — inquiries are routed to WhatsApp / email / Booking.com).

**Identity lock:** This is *White Amfora* specifically. Do **not** confuse it with the
separate "Amfora Hotel & Spa, Durrës." Use only these verified sources:
- Instagram: https://www.instagram.com/whiteamforahotel/
- Google Maps: https://maps.app.goo.gl/a9thMDvXZsuhXucT6
- Booking.com: https://www.booking.com/hotel/al/amfora-apartments.html

---

## 2. Tech stack (LOCKED — do not change without asking the client)

- **Astro + Tailwind CSS + TypeScript**
- **Fully static.** No backend, no database.
- Hydrate **only** true interactive islands: language toggle, inquiry form, WhatsApp
  bubble, gallery lightbox, mobile nav. Everything else is static HTML.
- **Bilingual:** English (default) + Albanian (SQ). All copy lives in locale files,
  never hardcoded in components.
- **Deploy target:** Cloudflare Pages (free, global CDN, free SSL + custom domain).

---

## 3. Non-negotiable quality bars

- **Responsive + polished on BOTH mobile and desktop.** Mobile-first methodology, but
  desktop/laptop is a first-class target. Verify at **360 / 768 / 1024 / 1440 / 1920px**.
  Wide screens must use max-width containers, multi-column layouts, larger hero/type —
  never stretched, cramped, or empty.
- **Performance:** Lighthouse 90+ on Performance / Best Practices / SEO / Accessibility,
  on both mobile and desktop. Optimized images (AVIF/WebP via Astro `<Image>`), preload
  hero, no layout shift, minimal hydration.
- **Luxury aesthetic:** restrained palette, generous whitespace, elegant serif+sans
  pairing, subtle motion, high-quality imagery. No "templatey"/cluttered feel.
- **Accessible:** semantic HTML, alt text, keyboard nav, AA contrast, respects
  `prefers-reduced-motion`.

---

## 4. Tooling / skills in use

- **`impeccable`** — installed as a Claude Code skill at `~/.claude/skills/impeccable/`
  (global). This is the **primary frontend craft tool** for the project (1 skill + 23
  `/impeccable` commands: shape, craft, critique, audit, polish, animate, etc. + 27
  anti-pattern rules). Use it whenever writing or styling UI.
  - NOTE: It was originally cloned into `reference/impeccable` — that clone was
    **deleted** on purpose. Do not re-clone it into the repo; it lives as a skill.
- **`frontend-design`** (ECC/Anthropic) — base design skill that impeccable builds on.
- At the start of each increment, search the skill library and load anything relevant
  (image handling, SEO, a11y, etc.).
- **impeccable project context (set up):** `PRODUCT.md` (register=**brand**, users, purpose,
  personality, anti-references, design principles, a11y) and `DESIGN.md` (visual system
  mirroring `src/styles/global.css`) live at the repo root. Every `/impeccable` command reads
  them. Re-run `node ~/.claude/skills/impeccable/scripts/context.mjs` if needed. (Live mode
  not configured — it needs the Playwright MCP bridge browser extension, which isn't installed.)

---

## 5. Contact / config handling

All contact + config values live in **one** central file: `src/config/site.ts`
(to be created in Increment 1). Each unknown value is a placeholder marked with a
`// TODO: confirm with client` comment. Placeholders needed:
`WHATSAPP_NUMBER`, `EMAIL`, `PHONE`, `ADDRESS`, `MAP_EMBED_URL`, `BOOKING_COM_URL`,
`INSTAGRAM_URL`, and other social links.

The inquiry form (Increment 5) does **not** submit to a server — it composes a
prefilled message and offers: Send via WhatsApp / Send via Email / Book on Booking.com.

---

## 6. Increment roadmap & status

| # | Increment | Status |
|---|-----------|--------|
| 0 | Standing rules + impeccable skill setup | ✅ **Done** |
| 1 | Research (hotel + reference sites) & Astro scaffold + i18n + `site.ts` + base layout/tokens | ✅ **Done** |
| 2 | Design system & shared components (header/nav, footer, primitives, WhatsApp bubble, motion) | ✅ **Done** |
| 3 | Homepage (both languages) | ✅ **Done** |
| 4 | Inner pages (Rooms, Services, Gallery+lightbox, About, optional Offers) | ✅ **Done** (Offers not built — pending client OK) |
| 5 | Contact page + inquiry flow (WhatsApp/email/Booking deep links) | ✅ **Done** |
| 6 | i18n completion, SEO, performance & accessibility pass | ✅ **Done** |
| 7 | Cloudflare Pages deployment + handoff docs | ⬜ Not started |

Work **one increment at a time**; the client pastes each increment prompt. At the end
of each, report: (1) what was built, (2) how to preview, (3) decisions to confirm,
(4) remaining placeholders. Commit with a clear message. **Then update this file.**

---

## 7. Current state (detail)

**Increment 1 is complete.** The project is scaffolded and runs.

**Research/docs (`docs/`)**
- `docs/research.md` — hotel facts. Identity LOCKED to **White Amfora Resort**, Rana e
  Hedhun, **Shëngjin, Lezhë** (GPS 41.8139, 19.5730), ~700 m to beach, ~51 km to Tirana
  airport, **two-bedroom self-catering apartments** with sea-view balconies/kitchens.
  Many amenities (pool/restaurant/spa/AC) are **unconfirmed** — flagged TO CONFIRM.
- `docs/design-notes.md` — adapted patterns from the 4 reference sites (Maritim Plaza,
  Arka, MGallery/Green Coast; Marriott was bot-blocked) + impeccable anti-patterns +
  the chosen direction (**coastal editorial luxury**) + palette/type proposal.

**Stack & tooling (installed, working)**
- Astro **5.18.2**, Tailwind CSS **v4** (via `@tailwindcss/vite`), TypeScript strict.
- Fonts self-hosted via Fontsource: **Fraunces Variable** (display) + **Mulish Variable** (body).
- `npm run build` passes; `npm run dev --host` serves EN `/` and SQ `/sq/` (both HTTP 200).

**Folder structure**
- `src/config/site.ts` — all contact/config placeholders (`TODO: confirm with client`).
- `src/i18n/index.ts` — locale helpers (`useTranslations`, `localizedPath`, `alternatePath`).
- `src/locales/en.json`, `src/locales/sq.json` — seeded with nav/hero/footer copy.
- `src/styles/global.css` — `@theme` design tokens (OKLCH palette, fluid type scale,
  motion easing) → generate Tailwind utilities (`bg-clay`, `text-sea`, `font-display`, …).
- `src/layouts/BaseLayout.astro` — `<head>` SEO defaults, canonical, hreflang, OG basics.
- `src/components/HomePlaceholder.astro` — placeholder home + live palette/type preview.
- `src/pages/index.astro` (EN), `src/pages/sq/index.astro` (SQ).
- `public/favicon.svg` — minimalist amphora line-mark.

**i18n routing decision:** Astro built-in i18n, `prefixDefaultLocale: false` → EN at `/`,
SQ at `/sq/`. (Note: the increment said "empty locale files" — we seeded minimal real copy
instead so the page renders from locale files per the standing rule; easy to extend.)

**Design direction — CLIENT-APPROVED (2026-05-29):**
- Palette (OKLCH, warm-tinted): canvas/limestone, ink, **clay/terracotta (amfora accent)**,
  **sea/Adriatic teal**, sand, brass. Defined in `src/styles/global.css`. ✅ approved.
- Type: **Fraunces** (display serif) + **Mulish** (body sans). ✅ approved.
- **Branding:** use the name **"White Amfora" alone** (no Resort/Hotel/Apartments descriptor);
  the descriptor lives in the tagline ("Sea-view apartments on the Rana e Hedhun beach"). Applied
  in `src/config/site.ts` (`legalName` = "White Amfora").
- **Tone/personality:** **calm, refined, coastal** (serene Adriatic escape; warm, unhurried,
  specific voice).
- **Anti-references:** corporate-chain hotel, party/club resort, generic booking-listing density
  (plus the global impeccable bans). See `PRODUCT.md` + `DESIGN.md`.

**Increment 2 — design system (added)**
- Shared chrome now lives in `BaseLayout.astro`: `Header` + `Footer` + `WhatsAppBubble` +
  skip-link + scroll-reveal script render on every page. Pages pass `overHero` when they
  open with a dark hero.
- Layout components (`src/components/layout/`): `Header.astro` (transparent-over-hero →
  solid-on-scroll via `data-state`, EN/SQ toggle, Book CTA, accessible mobile drawer with
  ESC/backdrop/resize close + body-scroll lock), `Footer.astro` (brand, socials filtered to
  non-empty `site.ts` values, quick links, contact w/ tel:/mailto:/map), `WhatsAppBubble.astro`
  (fixed bottom-right, `whatsappLink()` + greeting, `no-print`, safe-area inset, motion-safe
  pulse), `Logo.astro` (amphora mark), `SocialIcon.astro`.
- UI primitives (`src/components/ui/`): `Button.astro` (primary/outline/ghost/light × sm/md/lg,
  renders `<a>` or `<button>`), `Section.astro` (bg/width/padding container), `SectionHeading.astro`
  (eyebrow/title/intro, level via `as`), `Card.astro` (image+meta+body+CTA, hover lift/zoom),
  `Picture.astro` (Astro `<Picture>` → AVIF/WebP, responsive, no CLS).
- Motion: `[data-reveal]` + `[data-reveal-group]` (stagger) via IntersectionObserver in
  `BaseLayout`; fully disabled under `prefers-reduced-motion`.
- Placeholder images generated by `scripts/gen-placeholders.mjs` (sharp) into
  `src/assets/placeholders/` — brand-toned, clearly marked PLACEHOLDER, to be replaced.
- **Demo page: `/components`** renders the whole library (hero, buttons, headings, cards, image).
- Build verified: `/`, `/sq/`, `/components` all build; image pipeline emits AVIF/WebP variants.
- ⚠️ Nav links point to `/rooms`, `/gallery`, `/location`, `/contact` which **don't exist yet**
  (Increments 3–5) → they 404 until built. Expected.
- ⚠️ Interactive JS (scroll-solid header, mobile drawer) verified by logic/markup only —
  the Playwright browser bridge isn't installed, so confirm visually in a browser/phone.

---

## 8. Phone / device testing (decided)

- Dev laptop WiFi IP: **`192.168.18.77`** (may change if the router reassigns it).
- Plan: the `npm run dev` script will include **`--host`** so the dev server binds to
  the LAN. Phone (on same WiFi) opens **`http://192.168.18.77:4321`** → live, hot-reloading.
- First run may trigger a Windows Firewall prompt for Node.js → Allow (Private network).
- For remote demos (client off-network): run a Cloudflare Tunnel / ngrok for a temporary
  public HTTPS URL. For production-like previews: Cloudflare Pages (Increment 7).

---

**Increment 3 — Homepage (added)**
- Built the full bilingual homepage in `src/components/home/` (composed by `HomePage.astro`,
  rendered by `src/pages/index.astro` + `src/pages/sq/index.astro`, both `overHero`):
  `Hero` (full-bleed photo, scrim, orchestrated load reveal, scroll cue), `IntroTeaser`,
  `Highlights` (6 CONFIRMED items only, line-icon row — pool/restaurant/breakfast/AC excluded),
  `ApartmentsPreview` (confirmed Two-Bedroom + honest "more coming"), `GalleryTeaser`
  (asymmetric mosaic → /gallery), `LocationTeaser` (distances + Get directions; map iframe slots
  in once `MAP_EMBED_URL` set), `Testimonials` (representative themes, generic attribution, teal
  band), `FinalCta` (Inquire / WhatsApp / Booking).
- `HomePlaceholder.astro` removed. All copy is in locale files (`home.*`, incl. arrays via the
  new `useList()` i18n helper).
- **Imagery:** interim **Unsplash** stock in `src/assets/photos/` (hero-cove, balcony-doors,
  balcony-curtains, apartment-interior, beach-umbrellas, bay-overlook, coast-oleander, town,
  beach-cove2), visually vetted, optimized via Astro `<Picture>` (AVIF/WebP, no CLS).
  ⚠️ **To replace with the client's real photos before launch** (Unsplash = interim credit).
- Build green: `/`, `/sq/`, `/components` (162 image variants emitted). Both locales verified
  to render all sections; couldn't screenshot (no Playwright browser bridge) — eyeball visually.
- Decisions locked this increment: image approach = interim Unsplash; apartment preview =
  confirmed one + "more coming".

**Increment 4 — inner content pages (added)**
- New pages (bilingual EN + `/sq/`, all `overHero`), bodies in `src/components/pages/`:
  - **/rooms** (`RoomsBody`): featured **Two-Bedroom Apartment** — image trio, capacity, description,
    amenities checklist, + **"Inquire about this apartment"** → `/contact?room=<name>` and a WhatsApp
    inquiry prefilled via `rooms.unit.wa`. "More layouts coming" block. (Capacity "sleeps up to 4" is an
    estimate — TO CONFIRM.)
  - **/services** (`ServicesBody`): 3 grouped lists, **confirmed offerings only**; honest "ask us about
    the rest" CTA (no pool/restaurant/breakfast/AC claimed).
  - **/gallery** (`GalleryBody`): CSS-columns masonry by category (coast / apartments) + accessible
    **lightbox** using native `<dialog>` (focus trap + Esc built in), arrow-key + swipe nav, backdrop
    close, focus returned to trigger; lazy thumbnails; full images pre-generated via `getImage()`.
  - **/about** (`AboutBody`): story, location advantages, nearby attractions (Shëngjin, Rozafa, Lake
    Skadar, Tirana), CTA.
- New reusable `src/components/ui/PageHero.astro` (inner-page image hero with load reveal).
- **Custom 404** (`src/pages/404.astro`, bilingual) — fixes a critique P1.
- **Nav restructured:** Home · Apartments · Services · Gallery · About (+ Book/Inquire CTA → contact).
  Dropped the dead `/location` item; footer quick-links add Services/About/Contact. This clears the
  critique's P1 "dead nav links" (except `/contact`, which is Increment 5).
- Copy: all in locale files (`rooms.*`, `services.*`, `gallery.*`, `about.*`, `notFound.*`).
- Build green: **12 pages**; `detect.mjs` returns `[]` across home/rooms/services/gallery/about/404.

**`/impeccable critique homepage` (run this increment):** score **31/40 (Good)**, detector clean,
0 P0 / 2 P1. Snapshot at `.impeccable/critique/…__src-pages-index-astro.md`. P1s = dead nav links
(now fixed) + placeholder contact targets (Increment 5 / client TODO). Open **P2s for a later
`/impeccable audit` or polish pass:** low-contrast muted text — testimonials note `text-canvas/60`
on teal and footer disclaimer `text-canvas/40` on ink (raise toward AA).

**Increment 5 — Contact page + inquiry flow (added)**
- **/contact** + **/sq/contact** (`ContactBody.astro`): PageHero, then a 2-col layout — the inquiry
  form (priority, larger col) + a details aside (tap-to-call, mailto, WhatsApp, Instagram, Booking
  with icons; address; directions → `mapLink`; check-in/out + beach/airport distances). Full-width
  map below: Google embed iframe when `MAP_EMBED_URL` is set, else a `bay-overlook` image that links
  to `mapLink`.
- **Inquiry form** (`InquiryForm.astro`, client-side island, no backend): fields check-in/out dates,
  adults/children, room (optional `<select>`), name, message. Validation: required dates, checkout >
  checkin, adults ≥ 1, name; inline a11y errors (`aria-invalid` + live regions), focuses first
  invalid. Date floors (checkin ≥ today, checkout > checkin). Composes a **natural, localized**
  message and offers **Send via WhatsApp** (`wa.me/<num>?text=`), **Send via email** (`mailto:` subj+
  body), **Book on Booking.com** (new tab). Localized strings + config passed to the script via
  `define:vars`. **Consumes `?room=`** to preselect the apartment (matches per-locale unit name).
  Verified: builder + encoded wa.me/mailto links produce correct output (node simulation).
- Reachable from header CTA, hero, room cards (`?room=`), and final CTAs. Build green: **14 pages**;
  detector clean on /contact.

**Increment 6 — production polish (added)**
- **i18n:** verified `en.json` and `sq.json` are full mirrors (every visible string translated). Language
  toggle now **persists choice**: an inline `<head>` script (in `BaseLayout`) records the viewed locale in
  `localStorage.waLocale` and, on the EN home only, redirects a returning `sq` visitor to `/sq/` before paint
  (crawlers have no localStorage → always see EN; canonical/hreflang intact). The toggle (`[data-lang-switch]`,
  Header) writes the chosen locale on click. hreflang en/sq/x-default already correct.
- **SEO:** expanded `BaseLayout` `<head>` — full Open Graph (incl. `og:image`, dimensions, alt, `og:locale`
  + alternate), Twitter `summary_large_image`, `apple-touch-icon`, `theme-color`, and **JSON-LD `Hotel`
  schema** (name, description, url, image, telephone, email, PostalAddress, GeoCoordinates, hasMap, sameAs)
  sourced from `site.ts`. Added **`@astrojs/sitemap`** (→ `sitemap-index.xml` + `sitemap-0.xml`, i18n-annotated,
  excludes `/components`), **`public/robots.txt`** (sitemap ref + disallows `/components`), and a `noindex`
  BaseLayout prop set on the demo page. canonical already present.
- **Brand assets:** `scripts/gen-brand-assets.mjs` (sharp) generates `public/{apple-touch-icon,icon-192,
  icon-512}.png` + `public/og-image.jpg` (1200×630 branded social card — amphora mark + serif wordmark +
  tagline). Run via `npm run gen:assets`. (favicon.svg unchanged.)
- **Accessibility:** fixed both Lighthouse a11y failures →
  (1) **color-contrast:** darkened `--color-clay` `62%→55%` L (AA 4.7:1 with canvas, fixes the primary
  button + every `text-clay`), lightened `--color-brass` `72%→86%` L (champagne; AA on sea/ink — only ever
  used on dark), raised testimonials note `canvas/60→/80` (on teal) and footer disclaimer `canvas/40→/60`
  (on ink). Exact values picked with `.lh/oklch.mjs` (OKLCH→sRGB WCAG calc).
  (2) **label-content-name-mismatch (WCAG 2.5.3):** language toggle now uses a visible language name +
  `sr-only` prefix (no conflicting aria-label); footer tel/mail/map and all contact-method links no longer
  carry an aria-label that hid their visible text. Keyboard nav (nav/drawer/form/lightbox), focus-visible
  ring, and `prefers-reduced-motion` were already in place and confirmed.
- **Responsiveness:** spot-checked the homepage at 360/1440/1920 and contact at 1440 via headless Brave
  (`--force-prefers-reduced-motion` so scroll-reveal content renders). All sections use `mx-auto max-w-7xl
  px-6` (centered, gutters on ultrawide — no stretching); multi-column grids hold; hero is intentional
  full-bleed. Mobile single-column stacks cleanly.
- **Lighthouse (before → after), homepage:**
  | | Perf | A11y | Best-Pr | SEO |
  |---|---|---|---|---|
  | Mobile before | 96 | 96 | 100 | 100 |
  | Mobile after | **96** | **100** | **100** | **100** |
  | Desktop before | 100 | 96 | 100 | 100 |
  | Desktop after | **100** | **100** | **100** | **100** |
  Also re-audited /contact, /gallery, /rooms (mobile): a11y/best-practices/SEO all **100**. (Perf is run as
  median of 3 — a single noisy run can dip on a loaded dev box via TBT; clean runs hold 96 mobile / 100 desktop.)
- **Tooling note:** `lighthouse` added as a devDependency. Audits driven against `npm run build && npm run
  preview` (port 4399) using Brave/Chrome headless. `.lh/` (audit JSON + screenshots + oklch calc) is
  gitignored scratch.

## 9. Immediate next step

**Increment 7 — Cloudflare Pages deployment + handoff docs.** Build command `npm run build`, output dir
`dist`. Set the production domain (currently `astro.config.mjs` `site:` = `https://www.whiteamfora.com` —
confirm with client) so canonical/sitemap/OG URLs are right. Move `README.md` back to repo root for GitHub
render. Write handoff docs (how to fill `site.ts`, replace interim photos, redeploy).

**Still TODO before launch:** real photos (replace interim Unsplash — only on client's word), and all
`src/config/site.ts` placeholders (WhatsApp number, phone, email, address, `MAP_EMBED_URL`, socials).
Offers page intentionally skipped (no confirmed deals).

— Original Increment 4 spec (now done) — (bilingual, reuse the design system): Rooms/Accommodation
(each apartment: images, description, amenities, capacity, "Inquire about this room" CTA that
prefills the room name), Services/Amenities (CONFIRMED only), Gallery (responsive masonry +
accessible lightbox: keyboard + swipe, lazy), About (story, location, nearby attractions). Ask
the client before adding an optional Offers/Packages page. All copy in locale files. These
routes are currently linked from nav/home and 404 until built (/rooms, /gallery, /location→ may
fold into About/Contact, /about).

Original Increment 3 spec (now done) — Homepage sections
(adapt from `docs/research.md` + `docs/design-notes.md`): hero (real media vibe), about teaser,
amenities strip (CONFIRMED items only), apartment-types preview cards, gallery teaser, location
teaser w/ map + distances, guest testimonials (generic attribution), final CTA band. Optimize
imagery, zero CLS, verify mobile. All copy via locale files. The home route already uses
`overHero`; build the real hero to replace `HomePlaceholder.astro`.

**Before Increment 3 ideally:** client confirms (a) palette + fonts, (b) the unconfirmed
amenities in `docs/research.md`, and (c) primary branding (Resort vs Hotel vs Apartments).

**How to run:** `npm install` then `npm run dev` → http://localhost:4321/ (EN),
http://localhost:4321/sq/ (SQ); phone on same WiFi → http://192.168.18.77:4321/.
