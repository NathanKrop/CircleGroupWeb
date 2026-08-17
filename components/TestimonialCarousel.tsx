"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "The mentorship programme didn't just teach me a skill — it taught me how to walk into a room and believe I belonged there.",
    author: "[Name]",
    role: "Programme Graduate, [County]",
    image: "/img/new/photo_50_2026-03-03_11-10-37.jpg",
  },
  {
    quote:
      "Circle Group's career readiness training gave me the confidence and the CV I needed to land my first full-time job.",
    author: "[Name]",
    role: "Career Readiness Graduate, [County]",
    image: "/img/new/photo_55_2026-03-03_11-10-37.jpg",
  },
  {
    quote:
      "As an employer, hiring Circle Group graduates has been transformative — they arrive prepared, professional, and ready to contribute.",
    author: "[Name]",
    role: "Partner Employer, [Sector]",
    image: "/img/lux/pexels-rdne-6646944.jpg",
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [paused, next]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-sand-light p-8 sm:p-12 md:p-16">
        {testimonials.map((t, i) => (
          <div
            key={`${t.author}-${i}`}
            className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-700 sm:px-16 ${
              i === active
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-4 opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <span className="mb-6 block font-display text-7xl leading-none text-amber">
              &ldquo;
            </span>
            <p className="max-w-3xl text-balance font-display text-2xl font-medium leading-snug text-savanna sm:text-3xl">
              {t.quote}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={t.image}
                  alt={t.author}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-savanna">{t.author}</p>
                <p className="text-sm text-savanna/60">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-8 bg-amber" : "w-2 bg-savanna/20 hover:bg-savanna/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}