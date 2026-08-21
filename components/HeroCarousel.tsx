"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  { src: "/img/new/photo_50_2026-03-03_11-10-37.jpg", alt: "Circle Group community engagement", label: "Building opportunity together" },
  { src: "/img/rays/photo_2026-05-19_13-57-27.jpg", alt: "Young woman learning practical technical skills", label: "Skills for the world of work" },
  { src: "/img/new/photo_8_2026-03-03_11-10-37.jpg", alt: "Circle Group programme participants", label: "Pathways shaped by people" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => setCurrent((value) => (value + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);
  const go = (direction: number) => setCurrent((value) => (value + direction + slides.length) % slides.length);
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-savanna" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <AnimatePresence mode="wait"><motion.div key={slides[current].src} initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0"><Image src={slides[current].src} alt={slides[current].alt} fill priority={current === 0} sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></motion.div></AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-savanna/65 via-transparent to-amber/10" />
      <svg viewBox="0 0 400 500" className="pointer-events-none absolute inset-0 h-full w-full opacity-70" aria-hidden="true"><path d="M 40 440 L 150 360 L 260 300 L 370 210" fill="none" stroke="#A8D038" strokeWidth="2.5" strokeDasharray="1 10" strokeLinecap="round" /><circle cx="370" cy="210" r="7" fill="#A8D038" /></svg>
      <p aria-live="polite" className="absolute bottom-7 left-7 right-7 font-display text-xl text-sand-light">{slides[current].label}</p>
      <div className="absolute right-5 top-5 flex gap-2"><button type="button" aria-label="Previous image" onClick={() => go(-1)} className="grid h-9 w-9 place-items-center rounded-full border border-sand-light/40 bg-savanna/30 text-sand-light transition hover:bg-amber hover:text-savanna">←</button><button type="button" aria-label="Next image" onClick={() => go(1)} className="grid h-9 w-9 place-items-center rounded-full border border-sand-light/40 bg-savanna/30 text-sand-light transition hover:bg-amber hover:text-savanna">→</button></div>
      <div className="absolute bottom-3 right-6 flex gap-1.5" aria-label="Select hero image">{slides.map((slide, index) => <button key={slide.src} type="button" aria-label={`Show image ${index + 1}`} aria-current={current === index} onClick={() => setCurrent(index)} className={`h-1.5 rounded-full transition-all ${current === index ? "w-7 bg-amber" : "w-1.5 bg-sand-light/60 hover:bg-sand-light"}`} />)}</div>
    </div>
  );
}
