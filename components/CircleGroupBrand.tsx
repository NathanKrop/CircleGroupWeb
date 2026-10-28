import Image from "next/image";
import Link from "next/link";

type CircleGroupBrandProps = {
  className?: string;
  logoClassName?: string;
  graphicClassName?: string;
  priority?: boolean;
};

export default function CircleGroupBrand({
  className,
  logoClassName,
  graphicClassName,
  priority = false,
}: CircleGroupBrandProps) {
  return (
    <div className={className}>
      <Link href="/" aria-label="Circle Group homepage" className="shrink-0">
        <Image
          src="/img/logo/CIRCLE GROUP (CGL) Logo-01.png"
          alt="Circle Group"
          width={260}
          height={104}
          className={logoClassName}
          priority={priority}
        />
      </Link>
      <svg
        viewBox="0 0 860 100"
        width="860"
        height="100"
        aria-hidden="true"
        className={graphicClassName}
      >
        <circle cx="780" cy="50" r="72" fill="#7BAE6C" fillOpacity="0.10" />
        <circle cx="650" cy="12" r="38" fill="#1B3A2B" fillOpacity="0.07" />
        <circle cx="820" cy="90" r="20" fill="#5A8F68" fillOpacity="0.12" />
        <circle cx="120" cy="10" r="14" fill="#4A7C59" fillOpacity="0.10" />
        <circle cx="300" cy="8" r="18" fill="#7BAE6C" fillOpacity="0.08" />
        <circle cx="420" cy="6" r="5" fill="#7BAE6C" fillOpacity="0.35" />
        <circle cx="436" cy="14" r="3" fill="#7BAE6C" fillOpacity="0.22" />
        <circle cx="408" cy="16" r="2" fill="#7BAE6C" fillOpacity="0.18" />
        <path d="M 100 90 Q 380 10 680 55" fill="none" stroke="#1B3A2B" strokeWidth="1.2" strokeDasharray="4 3" strokeOpacity="0.13" />
        <rect x="100" y="74" width="16" height="18" rx="4" fill="#B6D29E" fillOpacity="0.95" />
        <rect x="123" y="62" width="16" height="30" rx="4" fill="#8AB57B" fillOpacity="0.95" />
        <rect x="146" y="50" width="16" height="42" rx="4" fill="#609F6D" fillOpacity="0.95" />
        <rect x="169" y="36" width="16" height="56" rx="4" fill="#7BAE6C" fillOpacity="0.9" />
        <text x="108" y="72" textAnchor="middle" fontSize="5.5" fill="#1B3A2B" fillOpacity="0.55" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.4">ACCESS</text>
        <text x="131" y="60" textAnchor="middle" fontSize="5.5" fill="#1B3A2B" fillOpacity="0.55" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.4">RETENTION</text>
        <text x="154" y="48" textAnchor="middle" fontSize="5.5" fill="#1B3A2B" fillOpacity="0.75" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.4">COMPLETION</text>
        <text x="177" y="34" textAnchor="middle" fontSize="5.5" fill="#1B3A2B" fillOpacity="0.8" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.4">EARN</text>
        <line x1="94" y1="94" x2="192" y2="94" stroke="#7BAE6C" strokeWidth="2" strokeLinecap="round" />
        <text x="500" y="26" textAnchor="middle" fontSize="6.5" fill="#1B3A2B" fillOpacity="0.52" fontFamily="sans-serif" fontWeight="700" letterSpacing="1.1">ACCESS → RETENTION → COMPLETION → TRANSITION → EARN</text>
        <text x="490" y="36" textAnchor="middle" fontSize="7" fill="#1B3A2B" fillOpacity="0.40" fontFamily="sans-serif" fontWeight="700" letterSpacing="1">A WOMEN-LED SOCIAL ENTERPRISE</text>
        <text x="500" y="58" textAnchor="middle" fontSize="13" fill="#1B3A2B" fontFamily="Georgia, serif" fontWeight="600" fontStyle="italic">Bringing opportunity closer</text>
        <text x="500" y="74" textAnchor="middle" fontSize="13" fill="#1B3A2B" fontFamily="Georgia, serif" fontWeight="600" fontStyle="italic">to <tspan fill="#4A7C59">young women.</tspan></text>
        <rect x="420" y="82" width="32" height="2.5" rx="1.5" fill="#7BAE6C" />
        <rect x="456" y="82" width="18" height="2.5" rx="1.5" fill="#7BAE6C" fillOpacity="0.55" />
        <rect x="478" y="82" width="10" height="2.5" rx="1.5" fill="#7BAE6C" fillOpacity="0.28" />
        <circle cx="740" cy="38" r="26" fill="none" stroke="#1B3A2B" strokeWidth="0.8" strokeOpacity="0.10" strokeDasharray="3 3" />
        <circle cx="740" cy="38" r="16" fill="none" stroke="#7BAE6C" strokeWidth="0.8" strokeOpacity="0.20" />
        <circle cx="740" cy="38" r="4" fill="#5A8F68" fillOpacity="0.70" />
        <line x1="740" y1="42" x2="740" y2="50" stroke="#5A8F68" strokeWidth="1.2" strokeOpacity="0.50" />
        <text x="740" y="58" textAnchor="middle" fontSize="5.5" fill="#1B3A2B" fillOpacity="0.45" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.5">KENYA</text>
        <circle cx="220" cy="20" r="2.5" fill="#1B3A2B" fillOpacity="0.15" />
        <circle cx="310" cy="55" r="2" fill="#7BAE6C" fillOpacity="0.35" />
        <circle cx="380" cy="22" r="3" fill="#1B3A2B" fillOpacity="0.12" />
        <circle cx="600" cy="70" r="2" fill="#7BAE6C" fillOpacity="0.30" />
        <circle cx="660" cy="30" r="2.5" fill="#1B3A2B" fillOpacity="0.12" />
        <circle cx="700" cy="75" r="2" fill="#5A8F68" fillOpacity="0.20" />
      </svg>
    </div>
  );
}