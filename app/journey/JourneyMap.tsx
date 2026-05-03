"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json";

type GeoFeature = { rsmKey: string; id: string | number };

interface Pin {
  coordinates: [number, number];
  label: string;
  sub: string;
  offsetX?: number;
  offsetY?: number;
  anchor?: "start" | "end";
}

function CountryOutline({
  focusId,
  center,
  scale,
  color,
  tilt,
  pins,
}: {
  focusId: number;
  center: [number, number];
  scale: number;
  color: string;
  tilt: number;
  pins: Pin[];
}) {
  return (
    <div
      style={{
        transform: `rotate(${tilt}deg)`,
        filter: `drop-shadow(0 0 18px ${color}33)`,
      }}
    >
      <ComposableMap
        width={500}
        height={420}
        projectionConfig={{ scale, center }}
        style={{ width: "100%", height: "auto", overflow: "visible" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }: { geographies: GeoFeature[] }) =>
            geographies.map((geo) => {
              if (Number(geo.id) !== focusId) return null;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={`${color}18`}
                  stroke={color}
                  strokeWidth={1.2}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {pins.map((pin) => (
          <Marker key={pin.label} coordinates={pin.coordinates}>
            {/* Pin dot */}
            <circle r={8} fill={color} stroke="#09090b" strokeWidth={2} />
            <circle r={9} fill="none" stroke={color} strokeWidth={0.8} opacity={0.4} />
            {/* Label */}
            <g transform={`translate(${pin.offsetX ?? 12}, ${pin.offsetY ?? -14})`}>
              <text
                textAnchor={pin.anchor ?? "start"}
                style={{ fontSize: "15px", fontWeight: 700, fill: "#f4f4f5" }}
              >
                {pin.label}
              </text>
              <text
                y={14}
                textAnchor={pin.anchor ?? "start"}
                style={{ fontSize: "15px", fill: "#a1a1aa" }}
              >
                {pin.sub}
              </text>
            </g>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}

// ── Poland ────────────────────────────────────────────────────────────
export function PolandMap() {
  return (
    <CountryOutline
      focusId={616}
      center={[19.5, 52.0]}
      scale={3200}
      color="#ef4444"
      tilt={-6}
      pins={[
        { coordinates: [19.36, 51.36], label: "Bełchatów", sub: "Urodzony · 2004", offsetX: 10, offsetY: -18 },
        { coordinates: [19.10, 51.10], label: "Kleszczów", sub: "Technikum · 2019–24", offsetX: 10, offsetY: 4 },
      ]}
    />
  );
}

// ── Netherlands ───────────────────────────────────────────────────────
export function NetherlandsMap() {
  return (
    <CountryOutline
      focusId={528}
      center={[5.3, 52.3]}
      scale={11000}
      color="#22c55e"
      tilt={5}
      pins={[
        { coordinates: [4.36, 52.01], label: "Delft", sub: "TU Delft · 2024–now", offsetX: 10, offsetY: -18, anchor: "start" },
      ]}
    />
  );
}

// ── Australia ─────────────────────────────────────────────────────────
export function AustraliaMap() {
  return (
    <CountryOutline
      focusId={36}
      center={[134, -27]}
      scale={800}
      color="#f59e0b"
      tilt={-4}
      pins={[
        { coordinates: [151.21, -33.87], label: "Sydney", sub: "UNSW · Aug 2026", offsetX: -12, offsetY: -18, anchor: "end" },
      ]}
    />
  );
}
