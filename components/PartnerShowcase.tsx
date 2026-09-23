"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const partners = [
  {
    label: "01",
    name: "Industry partners",
    text: "Open doors to internships, first jobs, mentorship and the practical experience that turns preparation into progress.",
    accent: "bg-amber",
    number: "text-forest",
  },
  {
    label: "02",
    name: "Development organisations",
    text: "Build stronger pathways with programs shaped by evidence, local context and the ambitions of young people.",
    accent: "bg-leaf",
    number: "text-white",
  },
  {
    label: "03",
    name: "Schools & institutions",
    text: "Bring career readiness, life skills and workplace preparation into the places where young people are already learning.",
    accent: "bg-sky-200",
    number: "text-forest",
  },
  {
    label: "04",
    name: "Community groups",
    text: "Connect trusted local relationships to opportunities that reach young people where they live and grow.",
    accent: "bg-[#e5efd0]",
    number: "text-forest",
  },
  {
    label: "05",
    name: "Funders",
    text: "Invest in practical, accountable pathways from learning to meaningful work for young people across Kenya.",
    accent: "bg-white",
    number: "text-forest",
  },
];

export default function PartnerShowcase() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const active = partners[current];

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setCurrent((value) => (value + 1) % partners.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const move = (direction: number) => {
    setCurrent((value) => (value + direction + partners.length) % partners.length);
  };

  return (
    <section
      className="overflow-hidden bg-forest py-10 text-white md:py-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="container-page grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">
        <div>
          <span className="eyebrow text-amber">The Circle is wider</span>
          <h2 className="mt-4 max-w-md font-display text-4xl leading-[1.02] sm:text-5xl">Progress happens when the right people meet.</h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/70">We bring together the people who can make the journey from learning to earning possible.</p>
          <div className="mt-7 flex items-center gap-2" aria-label="Choose a partner pathway">
            {partners.map((partner, index) => (
              <button
                key={partner.name}
                type="button"
                aria-label={`Show ${partner.name}`}
                aria-current={current === index}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all ${current === index ? "w-10 bg-amber" : "w-2 bg-white/35 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </div>

        <div className="relative min-h-[15rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={active.name}
              initial={reduceMotion ? false : { opacity: 0, x: 32, rotate: 1 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -32, rotate: -1 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex min-h-[15rem] flex-col justify-between overflow-hidden rounded-[1.75rem] p-7 text-ink shadow-[12px_12px_0_rgba(168,208,56,0.22)] sm:p-9 ${active.accent}`}
            >
              <div className="flex items-start justify-between gap-5">
                <span className={`font-display text-5xl leading-none ${active.number}`}>{active.label}</span>
                <span className="rounded-full border border-ink/20 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink/65">Partner pathway</span>
              </div>
              <div className="max-w-xl pb-12 pr-12 sm:pb-0 sm:pr-0">
                <h3 className="font-display text-3xl sm:text-4xl">{active.name}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-ink/75">{active.text}</p>
              </div>
            </motion.article>
          </AnimatePresence>
          <div className="absolute bottom-5 right-5 flex gap-2 sm:bottom-7 sm:right-7">
            <button type="button" aria-label={paused ? "Resume partner pathway slideshow" : "Pause partner pathway slideshow"} aria-pressed={paused} onClick={() => setPaused((value) => !value)} className="grid h-9 w-9 place-items-center rounded-full border border-ink/30 bg-white/30 text-sm text-ink transition hover:bg-white/70">{paused ? "▶" : "Ⅱ"}</button>
            <button type="button" aria-label="Previous partner pathway" onClick={() => move(-1)} className="grid h-9 w-9 place-items-center rounded-full border border-ink/30 bg-white/30 text-lg text-ink transition hover:bg-white/70">←</button>
            <button type="button" aria-label="Next partner pathway" onClick={() => move(1)} className="grid h-9 w-9 place-items-center rounded-full border border-ink/30 bg-white/30 text-lg text-ink transition hover:bg-white/70">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
