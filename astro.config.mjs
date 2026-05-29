import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: confirm final production domain with client (used for SEO/sitemap later)
  site: 'https://www.whiteamfora.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sq'],
    routing: {
      // EN lives at "/", Albanian at "/sq/"
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
