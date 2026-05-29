/**
 * Generates production brand assets into /public:
 *   - apple-touch-icon.png (180×180)
 *   - icon-192.png, icon-512.png (PWA / Android)
 *   - og-image.jpg (1200×630 social share card)
 *
 * Brand-toned, derived from the amphora favicon mark. Not a photo — safe to ship.
 * Run: node scripts/gen-brand-assets.mjs
 */
import sharp from 'sharp';

const OUT = 'public';

// Brand hex (approx of the OKLCH tokens in src/styles/global.css)
const C = {
  canvas: '#F7F3EC',
  ink: '#2E241D',
  inkDeep: '#241C16',
  clay: '#B35025',
  sea: '#2B5E64',
  seaDeep: '#274E54',
  brass: '#E8CE99',
};

/** The amphora line-mark, drawn centered in a viewBox of size `s`, scaled by `k`. */
function amphora(cx, cy, k, stroke, sw) {
  return `<g fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"
     transform="translate(${cx} ${cy}) scale(${k})">
    <path d="M-13 -16c0 4 3 5 3 8s-7 5-7 13c0 8 4.4 14 10 14s10 -6 10 -14c0 -8 -7 -11 -7 -13s3 -4 3 -8"/>
    <path d="M-15 -16h30"/>
    <path d="M-5 19h10"/>
  </g>`;
}

function iconSvg(size) {
  const r = Math.round(size * 0.19);
  const k = size / 32;
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${r}" fill="${C.ink}"/>
  ${amphora(size / 2, size / 2, k, C.clay, 1.6 * k)}
</svg>`);
}

const og = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.sea}"/>
      <stop offset="1" stop-color="${C.inkDeep}"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="14%" r="65%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  ${amphora(600, 232, 4.6, C.brass, 1.5)}
  <text x="600" y="430" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"
    font-size="92" fill="${C.canvas}" letter-spacing="2">White Amfora</text>
  <text x="600" y="492" text-anchor="middle" font-family="Georgia, serif" font-style="italic"
    font-size="33" fill="${C.brass}" letter-spacing="1">Sea-view apartments · Rana e Hedhun, Shëngjin</text>
  <rect x="552" y="528" width="96" height="3" rx="1.5" fill="${C.clay}"/>
</svg>`);

await sharp(iconSvg(180)).png().toFile(`${OUT}/apple-touch-icon.png`);
await sharp(iconSvg(192)).png().toFile(`${OUT}/icon-192.png`);
await sharp(iconSvg(512)).png().toFile(`${OUT}/icon-512.png`);
await sharp(og).jpeg({ quality: 86, mozjpeg: true }).toFile(`${OUT}/og-image.jpg`);

console.log('wrote apple-touch-icon.png, icon-192.png, icon-512.png, og-image.jpg');
