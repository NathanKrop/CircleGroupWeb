"use client";
import { useState } from "react";

// Coordinates are % of viewBox 0 0 100 100
const locations = [
  // HQ / user-specified
  { name: "Nairobi",     x: 52, y: 57, type: "hq",      desc: "National headquarters & programme hub" },
  { name: "Kiambu",      x: 51, y: 51, type: "hq",      desc: "Skills training & community outreach" },
  { name: "Narok",       x: 40, y: 63, type: "hq",      desc: "Rural enterprise & inclusion programmes" },
  { name: "Meru",        x: 62, y: 41, type: "hq",      desc: "TVET access & mentorship support" },
  // Direct / primary work
  { name: "Kajiado",     x: 53, y: 65, type: "primary", desc: "Primary programme area — disability inclusion & enterprise" },
  { name: "West Pokot",  x: 34, y: 28, type: "primary", desc: "Primary programme area — 16 savings groups established" },
  // Reach counties
  { name: "Turkana",     x: 28, y: 18, type: "reach",   desc: "Participant reach county" },
  { name: "Baringo",     x: 44, y: 35, type: "reach",   desc: "Participant reach county" },
  { name: "Samburu",     x: 56, y: 28, type: "reach",   desc: "Participant reach county" },
  { name: "Taita Taveta",x: 58, y: 76, type: "reach",   desc: "Participant reach county" },
  { name: "Makueni",     x: 57, y: 68, type: "reach",   desc: "Participant reach county" },
] as const;

type LocationType = "hq" | "primary" | "reach";

const PIN_COLOR: Record<LocationType, string> = {
  hq:      "#E8A33D",
  primary: "#1B3A2B",
  reach:   "#B5533C",
};

const LEGEND = [
  { type: "hq",      label: "Key locations",       color: "#E8A33D" },
  { type: "primary", label: "Primary work areas",  color: "#1B3A2B" },
  { type: "reach",   label: "Participant reach",   color: "#B5533C" },
] as const;

export default function KenyaMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-full border-t border-ink/10 bg-white">
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-5 pt-4 pb-2">
        {LEGEND.map(({ type, label, color }) => (
          <span key={type} className="flex items-center gap-1.5 text-xs font-medium text-ink/60">
            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: color }} />
            {label}
          </span>
        ))}
      </div>

      {/* Scrollable pin list */}
      <ul className="flex flex-wrap gap-x-4 gap-y-2 px-5 pb-4">
        {locations.map((loc) => {
          const isActive = active === loc.name;
          return (
            <li
              key={loc.name}
              onClick={() => setActive(isActive ? null : loc.name)}
              className="flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: isActive ? PIN_COLOR[loc.type] : undefined }}
            >
              <span
                className="inline-block h-2.5 w-2.5 rounded-full border border-white/60 shadow-sm transition-transform"
                style={{
                  background: PIN_COLOR[loc.type],
                  transform: isActive ? "scale(1.4)" : "scale(1)",
                }}
              />
              <span className={isActive ? "font-semibold" : "text-ink/70 hover:text-ink"}>
                {loc.name}
              </span>
              {isActive && (
                <span className="text-xs text-ink/50">— {loc.desc}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
