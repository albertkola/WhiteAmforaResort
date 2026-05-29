# White Amfora — Hotel Website

Marketing website for **White Amfora**, a collection of sea-view, self-catering
apartments on the Rana e Hedhun beach in Shëngjin, on the northern Albanian Adriatic
coast. Fast, fully static, bilingual (English + Albanian), built for a calm, refined
coastal feel.

The site is presentation- and inquiry-focused: there is **no in-house booking engine**.
Guest inquiries are routed to WhatsApp, email, and the property's Booking.com listing via
prefilled deep links.

---

## Tech stack

- **[Astro](https://astro.build/)** — static site generator, near-zero JavaScript by default
- **[Tailwind CSS v4](https://tailwindcss.com/)** — styling via design tokens (OKLCH palette)
- **TypeScript** (strict)
- **Self-hosted fonts** — Fraunces (display) + Mulish (body), via Fontsource
- **Bilingual** — English at `/`, Albanian at `/sq/`; all copy lives in locale files
- **No backend / no database** — fully static; inquiries go out over WhatsApp / email / Booking.com
- **Hosting** — Cloudflare Pages (static, global CDN, free SSL)

## Highlights

- Bilingual with correct `lang` / `hreflang` / canonical and a persisted language choice
- SEO: per-page titles & descriptions, Open Graph + Twitter cards, JSON-LD `Hotel` schema,
  `sitemap.xml`, `robots.txt`, and a generated social share image
- Accessibility: semantic HTML, full keyboard nav (incl. mobile drawer, form, gallery
  lightbox), visible focus, WCAG AA contrast, and a genuine `prefers-reduced-motion` path
- Performance: optimized AVIF/WebP images via Astro's `<Image>`/`<Picture>`, minimal
  hydration. Lighthouse: **100** on Accessibility / Best Practices / SEO and **96 mobile /
  100 desktop** on Performance

---

## Requirements

- **[Node.js](https://nodejs.org/) 18 or newer** (LTS recommended) — includes `npm`.
  Check with `node -v`.

## Run it locally

```bash
npm install      # first time only
npm run dev      # dev server with hot reload
```

Then open **http://localhost:4321** (English) or **http://localhost:4321/sq/** (Albanian).
The `dev` script binds with `--host`, so you can also open the printed network URL on a
phone connected to the same Wi-Fi.

### Other commands

```bash
npm run build            # build the production site into ./dist
npm run preview          # preview the production build locally
npm run gen:assets       # regenerate favicons + the 1200×630 social share image
npm run gen:placeholders # regenerate the design-system demo placeholder images
```

---

## Project structure

```
white-amfora/
├─ src/
│  ├─ components/   # UI: layout (header/footer/whatsapp), ui primitives, home, pages
│  ├─ layouts/      # BaseLayout.astro — <head>, SEO, OG/Twitter, JSON-LD, chrome
│  ├─ pages/        # Routes — English at /, Albanian under /sq/
│  ├─ locales/      # en.json, sq.json — ALL visible copy lives here
│  ├─ config/       # site.ts — single source of truth for contact details & links
│  ├─ i18n/         # locale helpers (translations, localized paths, hreflang)
│  ├─ assets/       # images optimized at build time
│  └─ styles/       # global.css — design tokens (palette, type scale, motion)
├─ public/          # served as-is: favicons, icons, og-image.jpg, robots.txt
├─ scripts/         # build-time asset generators (sharp)
├─ docs/            # research & design notes
├─ PRODUCT.md       # product / brand brief
└─ DESIGN.md        # visual system
```

---

## Configuration & before going live

All contact details and external links live in **one file** — `src/config/site.ts`.
Values still to be confirmed are marked with a `// TODO: confirm with client` comment:

- WhatsApp number, phone, email, physical address
- Google Maps embed URL (`mapEmbedUrl`) — until set, the contact page shows a linked image
- Booking.com listing URL, Instagram and any other social links
- Check-in / check-out times and confirmed amenities

Also before launch:

- Replace the interim stock photography in `src/assets/photos/` with the property's real images
- Set the production domain in `astro.config.mjs` (`site:`) so canonical / sitemap / OG URLs are correct

## Deployment (Cloudflare Pages)

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 18+

---

## Ownership

Client project for White Amfora. Hotel imagery and content are the property of the hotel —
confirm usage rights before launch.
