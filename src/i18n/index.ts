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

/** Raw dot-path lookup against a locale dictionary. Returns the value or undefined. */
function lookup(locale: Locale, key: string): unknown {
  return key.split('.').reduce<unknown>((obj, part) => {
    if (obj && typeof obj === 'object' && part in obj) {
      return (obj as Record<string, unknown>)[part];
    }
    return undefined;
  }, dictionaries[locale]);
}

/**
 * Translator for a given locale. Supports dot-paths ("home.hero.title").
 * Falls back to the key itself if a translation is missing (visible in dev).
 */
export function useTranslations(locale: Locale) {
  return function t(key: string): string {
    const value = lookup(locale, key);
    return typeof value === 'string' ? value : key;
  };
}

/**
 * List accessor for array-valued locale entries (e.g. "home.highlights.items").
 * Returns a typed array, or [] if missing.
 */
export function useList(locale: Locale) {
  return function list<T = Record<string, string>>(key: string): T[] {
    const value = lookup(locale, key);
    return Array.isArray(value) ? (value as T[]) : [];
  };
}

/**
 * Configured deploy base (e.g. "/WhiteAmforaResort"), normalized without a
 * trailing slash. Empty string when the site is served from the domain root.
 * GitHub Pages project sites live under a subpath, so every root-relative URL
 * we build by hand must be prefixed with this.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Prefix a root-relative path (e.g. "/favicon.svg") with the deploy base. */
export function withBase(path = '/'): string {
  const clean = `/${String(path).replace(/^\/+/, '')}`;
  return clean === '/' ? `${BASE}/` : `${BASE}${clean}`;
}

/** Build a locale-aware, base-aware path. EN omits the prefix; SQ gets "/sq". */
export function localizedPath(locale: Locale, path = '/'): string {
  const clean = `/${path.replace(/^\/+/, '')}`.replace(/\/+$/, '') || '/';
  const localized =
    locale === defaultLocale ? clean : clean === '/' ? `/${locale}` : `/${locale}${clean}`;
  return withBase(localized);
}

/** Given the current path + locale, return the equivalent path in the other locale. */
export function alternatePath(pathname: string, current: Locale): { locale: Locale; href: string } {
  const other: Locale = current === 'en' ? 'sq' : 'en';
  // strip a leading locale segment if present
  const stripped = pathname.replace(/^\/(en|sq)(?=\/|$)/, '') || '/';
  return { locale: other, href: localizedPath(other, stripped) };
}
