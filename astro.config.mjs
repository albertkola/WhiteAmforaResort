import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: confirm final production domain with client (used for SEO/sitemap)
  site: 'https://www.whiteamfora.com',
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
