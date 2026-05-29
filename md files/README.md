# White Amfora Hotel — Website

Marketing website for **White Amfora Hotel**, a beachside hotel in Albania.
Fast, static, bilingual (English + Albanian), built for a premium/luxury feel.

> **Status:** 🚧 In active development. Increment 0 (project setup) is complete.
> The Astro project itself is scaffolded in Increment 1 — until then there is no
> dev server to run yet. See [`CHECKPOINT.md`](./CHECKPOINT.md) for the live status.

---

## Tech stack

- **[Astro](https://astro.build/)** — static site generator, near-zero JavaScript by default
- **[Tailwind CSS](https://tailwindcss.com/)** — styling
- **TypeScript**
- **Bilingual:** English (default) + Albanian (`/en`, `/sq`)
- **No backend / no database** — fully static. Guest inquiries are sent via
  WhatsApp / email / Booking.com links (no server-side form handling).
- **Hosting:** Cloudflare Pages (planned)

---

## Requirements

- **[Node.js](https://nodejs.org/) 18 or newer** (LTS recommended) — includes `npm`.
  Check with: `node -v`

---

## Run it locally

> These commands work **once Increment 1 has scaffolded the project** (i.e. once a
> `package.json` exists). Until then they will not do anything yet.

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start the dev server (hot reload)
npm run dev
```

Then open **http://localhost:4321** in your browser.

### Other commands

```bash
npm run build      # Build the production site into ./dist
npm run preview    # Preview the production build locally
```

---

## 📱 Test it on your phone

You can view the in-progress site on your phone while it's running on your computer,
as long as **both are on the same WiFi network**.

1. Start the dev server on your computer: `npm run dev`
   (the dev script is configured with `--host` so it's reachable on your network)
2. On your phone's browser, go to:

   **`http://192.168.18.77:4321`**

3. The page hot-reloads on your phone as changes are made.

**Notes**
- `192.168.18.77` is this computer's current WiFi address. If it stops working, your
  router may have changed it — find the new one on Windows with:
  ```powershell
  Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.InterfaceAlias -like 'WiFi*' }
  ```
- The first time you run it, **Windows Firewall** may ask to allow Node.js — choose
  **Allow** (Private networks).
- To show someone **not** on your WiFi (e.g. the client on mobile data), ask for a
  temporary public link via Cloudflare Tunnel / ngrok — see `CHECKPOINT.md`.

---

## Project structure (planned)

```
white-amfora/
├─ src/
│  ├─ components/     # Reusable UI (header, footer, cards, buttons, ...)
│  ├─ layouts/        # Page shells (base layout, SEO <head>)
│  ├─ pages/          # Routes (EN default + /sq Albanian)
│  ├─ locales/        # en.json, sq.json — ALL copy lives here
│  ├─ config/         # site.ts — contact details & config (one place)
│  └─ assets/         # Images processed/optimized at build time
├─ public/            # Static files served as-is (favicons, etc.)
├─ docs/              # research.md, design-notes.md, deploy.md, handoff.md
├─ CHECKPOINT.md      # Live project status (read this for current state)
└─ README.md          # You are here
```

---

## Before going live

Contact details and some content are placeholders until confirmed with the client.
They're collected in **one file** — `src/config/site.ts` — each marked
`// TODO: confirm with client`. A full pre-launch checklist will live in
`docs/handoff.md` (created in Increment 7). Items to provide:

- WhatsApp number, email, phone, physical address
- Google Maps embed URL
- Booking.com listing URL
- Instagram + any other social links
- Confirmation of amenities / room types / any awards (we won't invent these)

---

## License / ownership

Private client project for White Amfora Hotel. Hotel imagery and content are the
property of the hotel; confirm usage rights before launch.
