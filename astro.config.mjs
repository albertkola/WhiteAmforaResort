import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages as a project site (served under /WhiteAmforaResort/).
  // TODO: when the custom domain whiteamfora.com is live, switch site back to it
  // and remove `base` (also drop public/CNAME handling and base-aware link helpers).
  site: 'https://albertkola.github.io',
  base: '/WhiteAmforaResort',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sq'],
    routing: {
      // EN lives at "/", Albanian at "/sq/"
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Demo/internal pages stay out of the index.
      filter: (page) => !page.includes('/components'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', sq: 'sq' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
