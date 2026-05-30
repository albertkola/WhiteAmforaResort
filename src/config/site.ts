/**
 * White Amfora — central site configuration.
 *
 * ⚠️ SINGLE SOURCE OF TRUTH for all contact details and external links.
 * Every value marked `TODO: confirm with client` is a placeholder. Fill them in
 * here once confirmed — nothing should be hardcoded elsewhere in the site.
 */

export const site = {
  /** Brand — client chose the name alone, with the descriptor carried by the tagline. */
  name: 'White Amfora',
  legalName: 'White Amfora', // registered/legal name TODO: confirm exact legal entity with client
  tagline: {
    en: 'Sea-view apartments on the Rana e Hedhun beach, Shëngjin',
    sq: 'Apartamente me pamje nga deti në plazhin Rana e Hedhun, Shëngjin',
  },

  /** Contact — TODO: confirm ALL of these with the client */
  phone: '+355000000000', // TODO: confirm with client (E.164 format, e.g. +35569...)
  phoneDisplay: '+355 00 000 0000', // TODO: confirm with client (human-readable)
  email: 'info@whiteamfora.com', // TODO: confirm with client
  // WhatsApp number in INTERNATIONAL format, digits only, no "+" or spaces (for wa.me links)
  whatsappNumber: '355000000000', // TODO: confirm with client

  /** Address / location */
  address: {
    street: 'Rana e Hedhun', // TODO: confirm exact street/building with client
    city: 'Shëngjin',
    region: 'Lezhë',
    postalCode: '4501',
    country: 'Albania',
    countryCode: 'AL',
  },
  // Confirmed from the client-provided Google Maps listing (White Amfora Resort)
  geo: { lat: 41.8139262, lng: 19.5729833 },

  /** Maps */
  mapLink: 'https://maps.app.goo.gl/a9thMDvXZsuhXucT6', // confirmed (client-provided)
  mapEmbedUrl: '', // TODO: confirm with client — Google Maps "Embed a map" iframe src URL

  /** Booking & social */
  bookingComUrl: 'https://www.booking.com/hotel/al/amfora-apartments.html', // confirmed (client-provided)
  instagramUrl: 'https://www.instagram.com/whiteamforahotel/', // confirmed (client-provided)
  facebookUrl: '', // TODO: confirm with client
  tiktokUrl: '', // TODO: confirm with client

  /** Distances (confirmed from listing; verify with client) */
  distances: {
    beachMeters: 500, // to Rana e Hedhun beach — TODO: confirm "beachfront" vs 700 m
    airportKm: 50, // to Tirana International Airport (Mother Teresa)
  },

  /** Stay info — TODO: confirm with client */
  checkIn: '12:00', // TODO: confirm with client
  checkOut: '10:00', // TODO: confirm with client

  /** Default WhatsApp greeting (used by the bubble; the inquiry form builds its own) */
  whatsappGreeting: {
    en: 'Hello White Amfora! I have a question about my stay.',
    sq: 'Përshëndetje White Amfora! Kam një pyetje për qëndrimin tim.',
  },
} as const;

export type Site = typeof site;

/** Build a wa.me link with an optional prefilled (already plain) message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
