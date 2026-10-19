"use client";
import { useState } from "react";

const PIN_COLOR = "#E8A33D";

const locations = [
  { name: "Nairobi",      px: 58, py: 62, desc: "National headquarters & programme hub" },
  { name: "Kiambu",       px: 57, py: 57, desc: "Skills training & community outreach" },
  { name: "Narok",        px: 46, py: 67, desc: "Rural enterprise & inclusion programmes" },
  { name: "Meru",         px: 68, py: 46, desc: "TVET access & mentorship support" },
  { name: "Kajiado",      px: 60, py: 71, desc: "Disability inclusion & enterprise programmes" },
  { name: "West Pokot",   px: 38, py: 28, desc: "16 savings groups established" },
  { name: "Turkana",      px: 28, py: 14, desc: "Programme work area" },
  { name: "Baringo",      px: 50, py: 38, desc: "Programme work area" },
  { name: "Samburu",      px: 63, py: 30, desc: "Programme work area" },
  { name: "Taita Taveta", px: 65, py: 80, desc: "Programme work area" },
  { name: "Makueni",      px: 62, py: 75, desc: "Programme work area" },
];

function Pin({ size = 22, active = false }: { size?: number; active?: boolean }) {
  const r = size * 0.32;
  const stemH = size * 0.45;
  return (
    <svg width={size} height={size + stemH} viewBox={`0 0 ${size} ${size + stemH}`} style={{ overflow: "visible" }}>
      <circle cx={size / 2} cy={r + 1} r={r} fill={PIN_COLOR} stroke="white" strokeWidth="1.5" />
      <line x1={size / 2} y1={r * 2 + 1} x2={size / 2} y2={size + stemH - 2} stroke={PIN_COLOR} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function KenyaMap() {
  const [active, setActive] = useState<string | null>(null);
  const activeLoc = locations.find((l) => l.name === active);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/20">
      <div className="relative h-[380px] sm:h-[440px]">
        <iframe
          title="Map of Kenya"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3988811.0!2d37.9!3d0.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="pointer-events-none absolute inset-0">
          {locations.map((loc) => {
            const isActive = active === loc.name;
            return (
              <button
                key={loc.name}
                onClick={() => setActive(isActive ? null : loc.name)}
                className="pointer-events-auto absolute transition-transform duration-150"
                style={{
                  left: `${loc.px}%`,
                  top: `${loc.py}%`,
                  transform: `translate(-50%, -100%) scale(${isActive ? 1.4 : 1})`,
                  zIndex: isActive ? 20 : 10,
                  filter: isActive ? `drop-shadow(0 2px 6px ${PIN_COLOR}88)` : undefined,
                }}
                aria-label={loc.name}
              >
                <Pin size={isActive ? 26 : 20} active={isActive} />
              </button>
            );
          })}
        </div>

        {activeLoc && (
          <div
            className="pointer-events-none absolute left-1/2 top-3 z-30 -translate-x-1/2 rounded-xl px-4 py-2.5 text-center text-white shadow-xl"
            style={{ background: PIN_COLOR, minWidth: 200 }}
          >
            <p className="text-sm font-bold">{activeLoc.name}</p>
            <p className="mt-0.5 text-xs opacity-85">{activeLoc.desc}</p>
          </div>
        )}
      </div>

      <div className="border-t border-ink/10 bg-white px-5 py-4">
        <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-ink/60">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber" />
          Key Locations
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {locations.map((loc) => {
            const isActive = active === loc.name;
            return (
              <li
                key={loc.name}
                onClick={() => setActive(isActive ? null : loc.name)}
                className="flex cursor-pointer items-center gap-1.5 text-sm font-medium"
              >
                <span
                  className="inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full border border-white shadow-sm transition-transform"
                  style={{
                    background: PIN_COLOR,
                    transform: isActive ? "scale(1.5)" : "scale(1)",
                  }}
                />
                <span
                  className={isActive ? "font-semibold" : "text-ink/70 hover:text-ink"}
                  style={{ color: isActive ? PIN_COLOR : undefined }}
                >
                  {loc.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
