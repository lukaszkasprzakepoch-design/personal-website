/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Pre-renders the three journey maps as static SVG files saved to public/maps/.
 * Run via `npm run generate-maps` or automatically as prebuild.
 *
 * When SVG is served as <img>, the browser clips to the viewBox — CSS transforms
 * and overflow:visible have no effect. We work around this by:
 *   1. Adding PADDING (px) around the map so rotation corners don't get clipped.
 *   2. Embedding the tilt as an SVG transform="rotate(...)" on a <g>, not CSS.
 *   3. Setting clipExtent on the projection so far-off overseas territories
 *      (e.g. Netherlands Caribbean) don't produce multi-thousand-px path segments.
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const d3geo = require("../node_modules/d3-geo/dist/d3-geo.js");
const topojson = require("../node_modules/topojson-client/dist/topojson-client.js");

const OUT_DIR = path.join(__dirname, "../public/maps");
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json";

const WIDTH = 500;
const HEIGHT = 420;
const PADDING = 80;
const OUTER_W = WIDTH + 2 * PADDING;   // 620
const OUTER_H = HEIGHT + 2 * PADDING;  // 540
const CX = OUTER_W / 2;                // 310
const CY = OUTER_H / 2;                // 270

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(JSON.parse(data)));
      res.on("error", reject);
    }).on("error", reject);
  });
}

function buildProjection(scale, center) {
  return d3geo
    .geoEqualEarth()
    .translate([CX, CY])
    .scale(scale)
    .center(center)
    .clipExtent([[0, 0], [OUTER_W, OUTER_H]]);
}

function renderMap({ id, scale, center, color, tilt, pins }) {
  const projection = buildProjection(scale, center);
  const pathGen = d3geo.geoPath(projection);

  const feature = countryFeatures.find((f) => Number(f.id) === id);
  if (!feature) throw new Error(`Country ID ${id} not found`);

  const pathD = pathGen(feature);

  const pinsSvg = pins
    .map(({ coordinates, label, sub, offsetX = 12, offsetY = -14, anchor = "start" }) => {
      const [px, py] = projection(coordinates);
      return `
    <g transform="translate(${px.toFixed(2)},${py.toFixed(2)})">
      <circle r="8" fill="${color}" stroke="#09090b" stroke-width="2"/>
      <circle r="9" fill="none" stroke="${color}" stroke-width="0.8" opacity="0.4"/>
      <g transform="translate(${offsetX},${offsetY})">
        <text text-anchor="${anchor}" style="font-size:16px;font-weight:700;fill:#f4f4f5;font-family:sans-serif">${label}</text>
        <text y="14" text-anchor="${anchor}" style="font-size:16px;fill:#a1a1aa;font-family:sans-serif">${sub}</text>
      </g>
    </g>`;
    })
    .join("\n");

  // Hex opacity 0x33 ≈ 0.2
  const shadowColor = color;
  const shadowOpacity = 0.2;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${OUTER_W}" height="${OUTER_H}" viewBox="0 0 ${OUTER_W} ${OUTER_H}">
  <defs>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="9" flood-color="${shadowColor}" flood-opacity="${shadowOpacity}"/>
    </filter>
  </defs>
  <g transform="rotate(${tilt},${CX},${CY})" filter="url(#shadow)">
    <path d="${pathD}" fill="${color}18" stroke="${color}" stroke-width="1.2"/>
    ${pinsSvg}
  </g>
</svg>`;
}

const MAPS = [
  {
    name: "poland",
    id: 616,
    scale: 4500,
    center: [19.5, 52.0],
    color: "#ef4444",
    tilt: -6,
    pins: [
      { coordinates: [19.36, 51.36], label: "Bełchatów", sub: "Urodzony · 2004", offsetX: 10, offsetY: -18 },
      { coordinates: [19.10, 51.10], label: "Kleszczów", sub: "Technikum · 2019–24", offsetX: 10, offsetY: 4 },
    ],
  },
  {
    name: "netherlands",
    id: 528,
    scale: 11000,
    center: [5.3, 51.9],
    color: "#22c55e",
    tilt: 5,
    pins: [
      { coordinates: [4.36, 52.01], label: "Delft", sub: "TU Delft · 2024–now", offsetX: 10, offsetY: -18, anchor: "start" },
    ],
  },
  {
    name: "australia",
    id: 36,
    scale: 800,
    center: [134, -27],
    color: "#f59e0b",
    tilt: -4,
    pins: [
      { coordinates: [151.21, -33.87], label: "Sydney", sub: "UNSW · Aug 2026", offsetX: -12, offsetY: -18, anchor: "end" },
    ],
  },
];

let countryFeatures;

async function main() {
  console.log("Fetching world-atlas GeoJSON…");
  const world = await fetchJson(GEO_URL);
  countryFeatures = topojson.feature(world, world.objects.countries).features;
  console.log(`Loaded ${countryFeatures.length} country features.`);

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const map of MAPS) {
    const svg = renderMap(map);
    const outPath = path.join(OUT_DIR, `${map.name}.svg`);
    fs.writeFileSync(outPath, svg, "utf8");
    console.log(`Wrote ${outPath}`);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
