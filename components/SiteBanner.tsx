import Image from "next/image";
import Link from "next/link";
import CircleGroupBrand from "@/components/CircleGroupBrand";

export default function SiteBanner() {
  return (
    <>
      <div className="relative hidden overflow-hidden bg-sand-light lg:block">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: "radial-gradient(circle, #1B3A2B 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
          }}
        />

        <CircleGroupBrand
          className="container-page flex items-center justify-between gap-4 py-3"
          logoClassName="h-24 w-auto object-contain sm:h-28"
          graphicClassName="h-[100px] w-[860px] shrink-0"
          priority
        />
      </div>

      <div className="relative overflow-hidden bg-sand-light px-4 py-2 lg:hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: "radial-gradient(circle, #1B3A2B 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="relative mx-auto max-w-sm">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" aria-label="Circle Group homepage" className="shrink-0">
              <Image
                src="/img/logo/CIRCLE GROUP (CGL) Logo-01.png"
                alt="Circle Group"
                width={200}
                height={80}
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>
            <Link
              href="/donate"
              className="rounded-full bg-amber px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-amber-light"
            >
              Donate
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 border-t border-forest/10 py-2">
            <svg
              viewBox="0 0 110 64"
              className="h-10 w-16 shrink-0"
              role="img"
              aria-label="Rising chart showing progress from access to earning"
            >
              <rect x="8" y="42" width="17" height="16" rx="3" fill="#B6D29E" />
              <rect x="29" y="32" width="17" height="26" rx="3" fill="#8AB57B" />
              <rect x="50" y="21" width="17" height="37" rx="3" fill="#609F6D" />
              <rect x="71" y="8" width="17" height="50" rx="3" fill="#7BAE6C" />
              <path d="M5 60h91" fill="none" stroke="#7BAE6C" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="min-w-0">
              <p className="font-serif text-xs italic leading-tight text-forest sm:text-sm">
                Bringing opportunity closer to young women.
              </p>
              <p className="mt-1 text-[0.42rem] font-bold uppercase leading-tight tracking-[0.08em] text-forest/65 sm:text-[0.48rem]">
                Access · Retention · Completion · Transition · Earn
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
