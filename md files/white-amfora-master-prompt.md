# White Amfora Hotel — Master Build Prompt (feed one increment at a time)

> **How to use this document.** Each numbered section below is a self-contained prompt. Paste them into your Claude Code agent **in order**, one at a time. Wait for the agent to finish and report back before sending the next. Increments 0–1 set up rules and context once; the agent should treat them as standing instructions for the whole project.

---

## INCREMENT 0 — Standing rules (paste first, before anything else)

```
You are building a production website for "White Amfora Hotel," a beachside hotel in Albania. This is a real client project I am contracting. Read and follow these standing rules for every increment that follows.

SKILLS
- Before doing work in any increment, search your own skill library and use every relevant skill you have. Run your skill/tool search at the start of each increment and load anything that applies (frontend design, image handling, file reading, document generation, etc.). Do not skip this step.
- The frontend-design skill in particular is mandatory whenever you write or style UI.

EXTERNAL FRONTEND REFERENCE
- Clone and study this repository for advanced frontend technique, and lean on it as the primary source of frontend craft for this project: https://github.com/pbakaus/impeccable
- Run: git clone https://github.com/pbakaus/impeccable reference/impeccable
- Read its README and source. Extract its patterns for layout, motion, typography, responsiveness, and performance. Apply those patterns to our build. Do NOT copy its content; use its techniques.

TECH STACK (decided — do not change without asking me)
- Astro + Tailwind CSS. Reason: near-zero JS by default, top-tier Lighthouse/mobile scores, component reuse for the bilingual content. Hydrate only interactive islands (language toggle, inquiry form, WhatsApp bubble, gallery lightbox, mobile nav).
- No backend / no database. The site is fully static.
- TypeScript on. Use Astro components (.astro) for content, minimal vanilla JS or a tiny island framework only where interactivity is required.

NON-NEGOTIABLE QUALITY BARS
- Fully responsive and equally polished on BOTH mobile and desktop. Build mobile-first as a methodology, but treat large screens (laptop/desktop) as a first-class target, not a scaled-up afterthought. The site must look and perform great on a laptop/desktop browser.
- Test and verify the layout looks intentional and complete at every breakpoint: 360px, 768px, 1024px, 1440px, AND 1920px (wide desktop). On wide screens, use proper max-width containers, multi-column layouts, and larger hero/typography so content never looks stretched, cramped, or empty.
- Fast: target Lighthouse Performance / Best Practices / SEO / Accessibility all 90+. Lazy-load images, use Astro's <Image> optimization, modern formats (AVIF/WebP), preload hero, no layout shift.
- Luxury aesthetic: restrained palette, generous whitespace, elegant serif+sans pairing, subtle motion, high-quality imagery. No "templatey" or cluttered feel.
- Accessible: semantic HTML, alt text, keyboard nav, color contrast AA.

LANGUAGES
- Bilingual: English (default) and Albanian. Build an i18n structure from the start (e.g. /en and /sq routes or a locale store) with a visible language toggle in the header. All copy lives in locale files, never hardcoded in components.

CONTACT / DATA HANDLING
- I do NOT yet have final contact details. Use clearly-marked placeholders in ONE central config file (e.g. src/config/site.ts): WHATSAPP_NUMBER, EMAIL, PHONE, ADDRESS, MAP_EMBED_URL, BOOKING_COM_URL, INSTAGRAM_URL, social links. Mark each with a // TODO: confirm with client comment so I can fill them in one place later.
- Known real references to seed content (verify, don't invent beyond these):
  - Instagram: https://www.instagram.com/whiteamforahotel/
  - Google Maps: https://maps.app.goo.gl/a9thMDvXZsuhXucT6
  - Booking.com: https://www.booking.com/hotel/al/amfora-apartments.html

WORKING STYLE
- At the end of each increment, give me: (1) a short summary of what you built, (2) how to run/preview it locally, (3) any decisions you made that I should confirm, (4) what placeholders I still need to fill.
- Commit your work with a clear message at the end of each increment.
- Ask before installing heavy dependencies or changing the agreed stack.

Confirm you understand these standing rules and have cloned the impeccable repo. Then stop and wait for Increment 1.
```

---

## INCREMENT 1 — Discovery, research & project scaffold

```
Increment 1: research and scaffold. Do not design pages yet.

A) RESEARCH THE HOTEL. Gather everything available about White Amfora Hotel to personalize the site:
- Pull the hotel's positioning, photos/videos vibe, room types, and amenities from its Instagram (https://www.instagram.com/whiteamforahotel/), its Google Maps listing (https://maps.app.goo.gl/a9thMDvXZsuhXucT6), and its Booking.com page (https://www.booking.com/hotel/al/amfora-apartments.html).
- Note exact location, nearby attractions/beach, distances to airport, and guest review themes.
- Save findings to docs/research.md. Flag anything uncertain so I can confirm. Do NOT fabricate amenities or awards — list only what you can substantiate, and mark the rest as "to confirm with client."

B) STUDY THE REFERENCE SITES for design ideas to adapt (not copy):
- https://www.plazatirana.com/
- https://www.marriott.com/en-us/hotels/tiamc-tirana-marriott/overview/
- https://arkahotel.al/
- https://mgallery.accor.com/en/hotels/B8R9.html
Write a short docs/design-notes.md capturing the strongest patterns worth adapting: hero treatment, room-card layouts, booking/inquiry placement, gallery style, nav behavior, and luxury cues. Combine these with the impeccable repo's techniques.

C) SCAFFOLD THE PROJECT:
- Initialize an Astro + Tailwind + TypeScript project.
- Set up the bilingual routing/i18n structure (EN default, SQ) and create empty locale files (src/locales/en.json, src/locales/sq.json).
- Create src/config/site.ts with all the placeholder contact/config values from Increment 0.
- Set up the folder structure: components, layouts, pages, locales, config, assets, and a public/ for static media.
- Add a base Layout with <head> SEO defaults, font loading, and a global stylesheet with the luxury design tokens (color palette, type scale, spacing) defined as Tailwind theme + CSS variables. Propose a palette and typography pairing based on the "white/amfora/beach" identity and show it to me.
- Get `npm run dev` working with a placeholder homepage.

Report back per the working-style rules and wait.
```

---

## INCREMENT 2 — Design system & shared components

```
Increment 2: build the reusable design system and shared layout components (no full pages yet). Use the frontend-design skill and impeccable patterns.

Build, styled and responsive, with EN/SQ copy pulled from locale files:
- Header / nav: logo, nav links, language toggle (EN/SQ), and a "Book / Inquire" call-to-action. Transparent-over-hero then solid-on-scroll behavior. Fully working mobile hamburger menu.
- Footer: contact summary, quick links, social icons, map link, copyright.
- Reusable primitives: Button, Section wrapper, SectionHeading, Card, and an image component using Astro <Image> optimization.
- The WhatsApp floating bubble (standing element on every page): fixed bottom-right, opens https://wa.me/<WHATSAPP_NUMBER> with a friendly prefilled message, accessible label, hides on print, doesn't overlap key content on mobile.
- Subtle, tasteful scroll/hover motion consistent with the luxury feel and impeccable's techniques. Respect prefers-reduced-motion.

Show me the components rendered on a demo page. Report and wait.
```

---

## INCREMENT 3 — Homepage

```
Increment 3: build the full homepage (both languages) using the design system from Increment 2.

Sections (adapt order/content from research + design-notes):
- Hero: full-bleed image or muted autoplay video loop from the hotel's real media vibe, hotel name, one-line positioning, primary CTA ("Check availability / Inquire") and secondary ("WhatsApp us").
- Intro / about teaser with a standout image.
- Highlights / amenities strip (pool, beach proximity, breakfast, etc. — only confirmed ones).
- Room types preview (cards linking to Rooms page).
- Gallery teaser (links to full Gallery).
- Location teaser with map and distance highlights.
- Guest reviews / testimonials (use real review themes from research, attributed generically).
- Final CTA band (inquire / WhatsApp / Booking.com).
Optimize all imagery, ensure zero layout shift, verify mobile. Report and wait.
```

---

## INCREMENT 4 — Inner content pages

```
Increment 4: build the remaining content pages, bilingual and responsive, reusing the design system.
- Rooms / Accommodation: each room type with images, description, amenities, capacity, and an "Inquire about this room" CTA that prefills the inquiry with the room name.
- Services / Amenities: detailed list (only confirmed offerings).
- Gallery: responsive masonry/grid with an accessible lightbox (keyboard + swipe), lazy-loaded, organized by category if useful.
- About: hotel story, location advantages, nearby attractions.
- (Optional, ask me first) Offers/Packages page if the hotel runs seasonal deals.
Keep all copy in locale files. Report and wait.
```

---

## INCREMENT 5 — Contact page & the inquiry flow (core feature)

```
Increment 5: build the Contact page and the inquiry mechanism. This is a priority feature — no backend, everything client-side.

CONTACT PAGE:
- All contact methods linked from the site config: tap-to-call phone, mailto email, WhatsApp, Instagram, Booking.com, and an embedded Google Map (MAP_EMBED_URL placeholder).
- Address, directions, distance-to-airport/beach, and check-in/out info.

INQUIRY FORM (the key requirement):
- Fields: check-in date, check-out date, number of guests (adults/children), room type (optional), name, and a short message.
- Validation: required dates, checkout after checkin, guests >= 1.
- The form does NOT submit to a server. Instead it builds a clean, prefilled message from the entered details, then offers the guest a choice of how to send it:
   1. "Send via WhatsApp" → opens https://wa.me/<WHATSAPP_NUMBER>?text=<urlencoded prefilled inquiry>
   2. "Send via Email" → opens a mailto: with subject + prefilled body
   3. "Book on Booking.com" → opens BOOKING_COM_URL in a new tab
- The prefilled message must read naturally and include the dates, guest count, room type, name, and message, in the active language (EN or SQ).
- Make the same inquiry reachable from the header CTA and the room-card "Inquire" buttons (prefilling room type where relevant).
Test the WhatsApp and mailto deep links on mobile and desktop. Report and wait.
```

---

## INCREMENT 6 — i18n completion, SEO, performance & accessibility pass

```
Increment 6: polish for production quality.
- i18n: confirm every visible string is translated EN + SQ, language toggle persists choice, and routes/hreflang are correct.
- SEO: per-page titles/descriptions, Open Graph + Twitter cards, JSON-LD Hotel schema (name, address, geo, contact, images), sitemap.xml, robots.txt, canonical URLs, favicons and social share image.
- Performance: run Lighthouse on BOTH mobile and desktop, fix anything under 90 on either. Confirm image optimization, font loading strategy, no render-blocking JS, minimal hydration.
- Accessibility: keyboard nav across nav/forms/lightbox, focus states, alt text, contrast AA, reduced-motion. Fix issues.
- Cross-check responsiveness at 360/768/1024/1440/1920. Confirm the desktop/laptop experience is fully polished — proper max-width containers, multi-column layouts, no stretched or empty wide-screen sections.
Give me a before/after Lighthouse summary. Report and wait.
```

---

## INCREMENT 7 — Deployment (Cloudflare Pages)

```
Increment 7: prepare and document deployment.
- Recommended host: Cloudflare Pages (free, global CDN, free SSL + custom domain, ideal for a static Astro site). Configure the project for it.
- Produce a build (`npm run build`) and verify the static output.
- Write docs/deploy.md with exact step-by-step instructions to: connect the Git repo to Cloudflare Pages, set build command (`npm run build`) and output dir (`dist`), deploy, and attach the hotel's custom domain with DNS + SSL.
- Add a docs/handoff.md listing every placeholder in src/config/site.ts and locale files I still need to fill before going live (WhatsApp number, email, phone, address, map embed, Booking.com URL, social links, any unconfirmed amenities).
- Include a simple way for me to run the site locally and a checklist for final pre-launch QA.
Report final status.
```

---

### Notes for you (Albert), not for the agent
- **Hosting pick:** Cloudflare Pages beats Netlify/Vercel here purely on static-site cold-load speed + free custom domain/SSL. If the client already uses a host, swap it in Increment 7.
- **No backend = no monthly cost** for forms, because the inquiry composes WhatsApp/email links rather than submitting server-side. If the client later wants inquiries logged in a database or auto-emailed, that's a future increment (add Cloudflare Workers or a form service).
- **Caution on identity:** search results showed a separate "Amfora Hotel & Spa, Durrës." Make sure the agent's research locks onto *White Amfora* via the Instagram/Maps links you gave, not the other property.
- **Media rights:** using the hotel's own Instagram photos/videos is fine since it's their site, but confirm the client owns/has rights to everything before launch.
