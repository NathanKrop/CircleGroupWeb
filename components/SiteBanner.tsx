import Image from "next/image";
import Link from "next/link";

export default function SiteBanner() {
  return (
    <div className="relative hidden overflow-hidden bg-sand-light lg:block">
      {/* dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: "radial-gradient(circle, #1B3A2B 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container-page flex items-center justify-between gap-4 py-3">
        {/* LEFT — logo, same file & sizing as footer */}
        <Link href="/" className="shrink-0">
          <Image
            src="/img/logo/CIRCLE GROUP (CGL) Logo-01.png"
            alt="Circle Group"
            width={260}
            height={104}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* RIGHT — SVG graphic */}
        <svg
          viewBox="0 0 860 100"
          width="860"
          height="100"
          aria-hidden="true"
          className="shrink-0"
        >
          {/* ── BACKGROUND SHAPES ── */}
          <circle cx="780" cy="50" r="72" fill="#E8A33D" fillOpacity="0.10" />
          <circle cx="650" cy="12" r="38" fill="#1B3A2B" fillOpacity="0.07" />
          <circle cx="820" cy="90" r="20" fill="#B5533C" fillOpacity="0.12" />
          <circle cx="120" cy="10" r="14" fill="#4A7C59" fillOpacity="0.10" />
          <circle cx="300" cy="8"  r="18" fill="#E8A33D" fillOpacity="0.08" />
          {/* dot cluster */}
          <circle cx="420" cy="6"  r="5"  fill="#E8A33D" fillOpacity="0.35" />
          <circle cx="436" cy="14" r="3"  fill="#E8A33D" fillOpacity="0.22" />
          <circle cx="408" cy="16" r="2"  fill="#E8A33D" fillOpacity="0.18" />

          {/* ── DASHED ARC ── */}
          <path
            d="M 100 90 Q 380 10 680 55"
            fill="none"
            stroke="#1B3A2B"
            strokeWidth="1.2"
            strokeDasharray="4 3"
            strokeOpacity="0.13"
          />

          {/* ── PATHWAY STEPS ── */}
          <rect x="100" y="74" width="16" height="18" rx="4" fill="#1B3A2B" fillOpacity="0.20" />
          <rect x="123" y="62" width="16" height="30" rx="4" fill="#1B3A2B" fillOpacity="0.28" />
          <rect x="146" y="50" width="16" height="42" rx="4" fill="#E8A33D" fillOpacity="0.60" />
          <rect x="169" y="36" width="16" height="56" rx="4" fill="#1B3A2B" fillOpacity="0.75" />
          {/* step labels */}
          <text x="108" y="72" textAnchor="middle" fontSize="5.5" fill="#1B3A2B" fillOpacity="0.55" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.4">LEARN</text>
          <text x="131" y="60" textAnchor="middle" fontSize="5.5" fill="#1B3A2B" fillOpacity="0.55" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.4">TRAIN</text>
          <text x="154" y="48" textAnchor="middle" fontSize="5.5" fill="#B5533C"  fillOpacity="0.90" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.4">MENTOR</text>
          <text x="177" y="34" textAnchor="middle" fontSize="5.5" fill="#E8A33D"  fillOpacity="1"    fontFamily="sans-serif" fontWeight="700" letterSpacing="0.4">EARN</text>
          {/* baseline */}
          <line x1="94" y1="94" x2="192" y2="94" stroke="#E8A33D" strokeWidth="2" strokeLinecap="round" />

          {/* ── TAGLINE ── */}
          <text x="490" y="36" textAnchor="middle" fontSize="7" fill="#1B3A2B" fillOpacity="0.40" fontFamily="sans-serif" fontWeight="700" letterSpacing="1">A WOMEN-LED SOCIAL ENTERPRISE</text>
          <text x="500" y="58" textAnchor="middle" fontSize="13" fill="#1B3A2B" fontFamily="Georgia, serif" fontWeight="600" fontStyle="italic">Bringing opportunity closer</text>
          <text x="500" y="74" textAnchor="middle" fontSize="13" fill="#1B3A2B" fontFamily="Georgia, serif" fontWeight="600" fontStyle="italic">to <tspan fill="#4A7C59">young women.</tspan></text>

          {/* ── AMBER RULE ── */}
          <rect x="420" y="82" width="32" height="2.5" rx="1.5" fill="#E8A33D" />
          <rect x="456" y="82" width="18" height="2.5" rx="1.5" fill="#E8A33D" fillOpacity="0.55" />
          <rect x="478" y="82" width="10" height="2.5" rx="1.5" fill="#E8A33D" fillOpacity="0.28" />

          {/* ── DECORATIVE RING + PIN ── */}
          <circle cx="740" cy="38" r="26" fill="none" stroke="#1B3A2B" strokeWidth="0.8" strokeOpacity="0.10" strokeDasharray="3 3" />
          <circle cx="740" cy="38" r="16" fill="none" stroke="#E8A33D" strokeWidth="0.8" strokeOpacity="0.20" />
          <circle cx="740" cy="38" r="4"  fill="#B5533C" fillOpacity="0.70" />
          <line  x1="740" y1="42" x2="740" y2="50" stroke="#B5533C" strokeWidth="1.2" strokeOpacity="0.50" />
          <text x="740" y="58" textAnchor="middle" fontSize="5.5" fill="#1B3A2B" fillOpacity="0.45" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.5">KENYA</text>

          {/* ── CONNECTING DOTS ── */}
          <circle cx="220" cy="20" r="2.5" fill="#1B3A2B" fillOpacity="0.15" />
          <circle cx="310" cy="55" r="2"   fill="#E8A33D" fillOpacity="0.35" />
          <circle cx="380" cy="22" r="3"   fill="#1B3A2B" fillOpacity="0.12" />
          <circle cx="600" cy="70" r="2"   fill="#E8A33D" fillOpacity="0.30" />
          <circle cx="660" cy="30" r="2.5" fill="#1B3A2B" fillOpacity="0.12" />
          <circle cx="700" cy="75" r="2"   fill="#B5533C" fillOpacity="0.20" />
        </svg>
      </div>
    </div>
  );
}
