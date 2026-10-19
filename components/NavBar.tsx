"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#top",          label: "About" },
  { href: "/#our-work",     label: "Our Work" },
  { href: "/#partners",     label: "Partners" },
  { href: "/#team",         label: "Our Team" },
  { href: "/#work-with-us", label: "Work With Us" },
  { href: "/contact",       label: "Contact" },
];

const hashLinks = links.filter((l) => l.href.startsWith("/#"));

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
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
      <div className="container-page flex h-24 items-center gap-4 pl-0 pr-0">
        <Link href="/" className="group -ml-6 flex shrink-0 items-center md:-ml-12 xl:-ml-20">
          <Image
            src="/img/logo/Circle_Group-removebg-preview.png"
            alt="Circle Group"
            width={420}
            height={160}
            className="h-[6rem] w-[24rem] max-w-[75vw] object-contain md:h-[6.5rem] md:w-[28rem] lg:h-[7rem] lg:w-[32rem]"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                isActive(l.href)
                  ? "text-amber-light underline decoration-2 underline-offset-8"
                  : "text-white/85 hover:text-amber-light"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:ml-auto lg:block">
          <Link
            href="/donate"
            className="rounded-full bg-amber px-5 py-2.5 font-body text-sm font-semibold text-ink transition-colors hover:bg-amber-light"
          >
            Donate
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-[2px] w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-[2px] w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/15 bg-forest lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-3 font-display text-xl ${
                  isActive(l.href) ? "text-amber-light" : "text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-amber px-5 py-3 text-center font-body text-sm font-semibold text-ink"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
