"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/",            label: "Home" },
  { href: "/our-work",   label: "Our Work" },
  { href: "/partners",   label: "Partnerships" },
  { href: "/team",       label: "Our Team" },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/contact",    label: "Contact" },
];

const hashLinks = links.filter((l) => l.href.startsWith("/#"));

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = hashLinks.map(({ href }) => href.slice(2));
    const update = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActiveId(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return isHome && activeId === href.slice(2);
    return pathname === href;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/15 bg-forest/95 shadow-[0_1px_0_0_rgba(0,0,0,0.1)] backdrop-blur"
          : "border-transparent bg-forest"
      }`}
    >
      {/* Desktop: logo hidden (SiteBanner shows it) + centered nav + donate */}
      <div className="container-page hidden h-16 items-center gap-4 lg:flex">
        <nav className="flex flex-1 items-center justify-center gap-5 xl:gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`group relative inline-flex items-center justify-center px-1 py-2 text-[0.72rem] font-bold uppercase tracking-[0.15em] transition-all duration-200 sm:text-[0.75rem] ${
                isActive(l.href) ? "text-amber-light" : "text-white/85 hover:text-amber-light"
              }`}
            >
              <span className="relative leading-none">{l.label}</span>
              <span className={`absolute -bottom-3 left-0 h-[2px] w-full rounded-full bg-amber-light transition-all duration-200 ${
                isActive(l.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`} />
            </Link>
          ))}
        </nav>
        <div className="ml-auto">
          <Link href="/donate" className="rounded-full bg-amber px-5 py-2.5 font-body text-sm font-semibold text-ink transition-colors hover:bg-amber-light">
            Donate
          </Link>
        </div>
      </div>

      {/* Mobile: compact, two-row navigation */}
      <div className="lg:hidden">
        <nav aria-label="Main navigation" className="mx-auto grid max-w-3xl grid-cols-3 gap-x-1 gap-y-1 px-3 py-2 sm:grid-cols-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-1 py-1.5 text-center text-[0.62rem] font-bold uppercase tracking-[0.07em] transition-colors sm:text-[0.68rem] ${
                isActive(l.href)
                  ? "bg-amber text-ink"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
