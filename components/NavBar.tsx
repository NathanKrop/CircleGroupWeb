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
  { href: "/stories", label: "Stories" },
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
          ? "border-ink/10 bg-white/95 shadow-[0_1px_0_0_rgba(0,0,0,0.1)] backdrop-blur"
          : "border-transparent bg-white"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="rounded-lg bg-forest px-2 py-1">
            <Image
              src="/img/logo/Circle_Group-removebg-preview.png"
              alt="Circle Group"
              width={192}
              height={80}
              className="h-14 w-48 object-contain"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="eyebrow text-ink/75 transition-colors hover:text-forest"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/get-involved"
            className="rounded-full bg-leaf px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-forest"
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
            className={`h-[2px] w-6 bg-ink transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
              className="py-3 font-display text-xl text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-leaf px-5 py-3 text-center font-body text-sm font-semibold text-white"
            >
              Partner With Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
