/**
 * Minimal, dependency-free i18n for Astro.
 * EN is the default locale (served at "/"), SQ is served under "/sq/".
 * All visible copy lives in src/locales/*.json — never hardcode strings in components.
 */
import en from '../locales/en.json';
import sq from '../locales/sq.json';

export const locales = ['en', 'sq'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  sq: 'Shqip',
};

const dictionaries: Record<Locale, unknown> = { en, sq };

/** Returns true if `value` is one of our supported locales. */
export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Resolve the active locale from an Astro URL pathname. */
export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  return isLocale(seg) ? seg : defaultLocale;
}

/**
 * Translator for a given locale. Supports dot-paths ("home.hero.title").
 * Falls back to the key itself if a translation is missing (visible in dev).
 */
export function useTranslations(locale: Locale) {
  const dict = dictionaries[locale];
  return function t(key: string): string {
    const value = key
      .split('.')
      .reduce<unknown>((obj, part) => {
        if (obj && typeof obj === 'object' && part in obj) {
          return (obj as Record<string, unknown>)[part];
        }
        return undefined;
      }, dict);
    return typeof value === 'string' ? value : key;
  };
}

/** Build a locale-aware path. EN omits the prefix; SQ gets "/sq". */
export function localizedPath(locale: Locale, path = '/'): string {
  const clean = `/${path.replace(/^\/+/, '')}`.replace(/\/+$/, '') || '/';
  if (locale === defaultLocale) return clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

/** Given the current path + locale, return the equivalent path in the other locale. */
export function alternatePath(pathname: string, current: Locale): { locale: Locale; href: string } {
  const other: Locale = current === 'en' ? 'sq' : 'en';
  // strip a leading locale segment if present
  const stripped = pathname.replace(/^\/(en|sq)(?=\/|$)/, '') || '/';
  return { locale: other, href: localizedPath(other, stripped) };
}
