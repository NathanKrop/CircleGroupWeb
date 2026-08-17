"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Story: From programme graduate to full-time hire",
    tag: "Mentorship",
    country: "Kenya",
    excerpt:
      "A Nairobi mentor pair spent eight months on interview prep and portfolio work — then came the offer.",
    image: "/img/new/photo_5_2026-03-03_11-10-37.jpg",
    href: "/stories",
  },
  {
    title: "From side hustle to registered business",
    tag: "Entrepreneurship",
    country: "Kenya",
    excerpt:
      "A Circle Group graduate formalised her tailoring business after learning to price her work properly.",
    image: "/img/new/photo_8_2026-03-03_11-10-37.jpg",
    href: "/stories",
  },
  {
    title: "What 300 young women told us about the job search",
    tag: "Research",
    country: "Kenya",
    excerpt:
      "Early findings from our latest community research on barriers to entry-level roles.",
    image: "/img/new/photo_12_2026-03-03_11-10-37.jpg",
    href: "/research",
  },
  {
    title: "Life skills training in action",
    tag: "Life Skills",
    country: "Kenya",
    excerpt:
      "Weekly cohorts across four counties building the confidence and skills that come before a career.",
    image: "/img/new/photo_18_2026-03-03_11-10-37.jpg",
    href: "/programs/life-skills-training",
  },
  {
    title: "A safeguarding partnership that protects young people",
    tag: "Safeguarding",
    country: "Kenya",
    excerpt:
      "Working with schools to build safeguarding systems that keep young people safe in every programme.",
    image: "/img/new/photo_22_2026-03-03_11-10-37.jpg",
    href: "/programs/safeguarding",
  },
];

export default function ImpactCarousel() {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const totalPages = Math.ceil(slides.length / 3);

  const next = useCallback(() => {
    setDirection(1);
    setPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prev = () => {
    setDirection(-1);
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [paused, next]);

  const visibleSlides = slides.slice(page * 3, page * 3 + 3);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {visibleSlides.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-savanna md:aspect-[3/4]"
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-savanna via-savanna/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-amber px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-savanna">
                      {s.tag}
                    </span>
                    <span className="rounded-full border border-sand-light/30 px-3 py-1 text-[0.65rem] font-semibold text-sand-light/80">
                      {s.country}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium leading-snug text-sand-light">
                    {s.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-sand-light/70">
                    {s.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-amber">
                    Read story
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setDirection(i > page ? 1 : -1);
                setPage(i);
              }}
              className={`h-2 rounded-full transition-all ${
                i === page ? "w-8 bg-amber" : "w-2 bg-savanna/20 hover:bg-savanna/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-savanna/20 text-savanna transition hover:border-savanna hover:bg-savanna hover:text-sand-light"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-savanna/20 text-savanna transition hover:border-savanna hover:bg-savanna hover:text-sand-light"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}