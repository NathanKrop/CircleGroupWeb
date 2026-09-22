"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Our Team" },
  { href: "/programs", label: "Our Work" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/15 bg-forest/95 shadow-[0_1px_0_0_rgba(0,0,0,0.1)] backdrop-blur"
          : "border-transparent bg-forest"
      }`}
    >
      <div className="container-page flex h-20 items-center gap-4 pl-0 pr-0">
        <Link href="/" className="flex shrink-0 -ml-4 items-center group sm:-ml-5">
          <Image
            src="/img/logo/Circle_Group-removebg-preview.png"
            alt="Circle Group"
            width={220}
            height={88}
            className="h-14 w-44 object-contain sm:h-15 sm:w-48 md:h-16 md:w-52"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="eyebrow text-white/85 transition-colors hover:text-amber-light"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:ml-auto lg:block">
          <Link
            href="/work-with-us"
            className="rounded-full bg-white px-5 py-2.5 font-body text-sm font-semibold text-forest transition-colors hover:bg-amber-light"
          >
            Partner With Us
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-white transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
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
                className="py-3 font-display text-xl text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/work-with-us"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-white px-5 py-3 text-center font-body text-sm font-semibold text-forest"
            >
              Partner With Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
