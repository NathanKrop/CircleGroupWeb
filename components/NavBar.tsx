"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
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
          ? "border-sand-light/10 bg-savanna/95 shadow-[0_1px_0_0_rgba(0,0,0,0.16)] backdrop-blur"
          : "border-transparent bg-savanna"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/img/logo/Circle Group.jpg"
            alt="Circle Group Logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-contain"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-sand-light">
            Circle Group
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="eyebrow text-sand-light/75 transition-colors hover:text-amber"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/get-involved"
            className="rounded-full bg-amber px-5 py-2.5 font-body text-sm font-semibold text-savanna transition-colors hover:bg-sand-light"
          >
            Partner With Us
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-sand-light transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-sand-light transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-sand-light transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-sand-light/10 bg-savanna md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
              className="py-3 font-display text-xl text-sand-light"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-amber px-5 py-3 text-center font-body text-sm font-semibold text-savanna"
            >
              Partner With Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
