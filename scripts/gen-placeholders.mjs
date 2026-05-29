/**
 * Generates brand-toned placeholder images for the design-system demo.
 * These are NOT real hotel photos — they exist only so the Astro <Image>
 * optimization pipeline has real rasters to process. Replace with client media.
 *
 * Run: node scripts/gen-placeholders.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const OUT = 'src/assets/placeholders';
await mkdir(OUT, { recursive: true });

// Brand colors (approx hex of the OKLCH tokens)
const C = {
  canvas: '#F7F3EC',
  ink: '#33302B',
  clay: '#BD6A4C',
  sea: '#356A72',
  seaDeep: '#274E54',
  sand: '#E4D8C6',
  brass: '#C2A36B',
};

function svg({ w, h, from, to, label, accent = C.brass }) {
  return Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${from}"/>
      <stop offset="1" stop-color="${to}"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="18%" r="60%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <g fill="none" stroke="${accent}" stroke-opacity="0.5" stroke-width="${Math.round(w / 220)}"
     stroke-linecap="round" stroke-linejoin="round"
     transform="translate(${w * 0.5} ${h * 0.5}) scale(${h / 360})">
    <path d="M-26 -150c0 40 30 50 30 80s-70 50-70 130c0 80 44 140 100 140s100 -60 100 -140c0 -80 -70 -100 -70 -130s30 -40 30 -80"/>
    <path d="M-30 -150h120"/>
    <path d="M-10 200h60"/>
  </g>
  <text x="${w * 0.5}" y="${h - h * 0.07}" text-anchor="middle"
    font-family="Georgia, serif" font-size="${Math.round(w / 38)}"
    fill="${C.canvas}" fill-opacity="0.85" letter-spacing="3">${label}</text>
</svg>`);
}

const jobs = [
  { file: 'sea-balcony.jpg', w: 1600, h: 1067, from: C.sea, to: C.seaDeep, label: 'SEA-VIEW BALCONY · PLACEHOLDER' },
  { file: 'apartment.jpg', w: 1600, h: 1067, from: C.sand, to: C.clay, label: 'APARTMENT · PLACEHOLDER' },
  { file: 'beach.jpg', w: 1600, h: 1067, from: C.brass, to: C.sea, label: 'RANA E HEDHUN · PLACEHOLDER' },
  { file: 'hero-wide.jpg', w: 2400, h: 1350, from: C.seaDeep, to: C.clay, label: 'WHITE AMFORA · PLACEHOLDER' },
];

for (const j of jobs) {
  await sharp(svg(j)).jpeg({ quality: 82, mozjpeg: true }).toFile(`${OUT}/${j.file}`);
  console.log('wrote', `${OUT}/${j.file}`, `${j.w}x${j.h}`);
}
console.log('done');
