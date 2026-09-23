"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

type Frame = "arch" | "editorial" | "ribbon";

const frameStyles: Record<Frame, string> = {
  arch: "rounded-t-[7rem] rounded-bl-[2rem]",
  editorial: "rounded-[2rem] rotate-[-1.5deg] shadow-[18px_18px_0_#A8D038]",
  ribbon: "rounded-[2rem] rounded-br-[7rem]",
};

export default function CirclePhotoCarousel({
  photos,
  frame = "editorial",
}: {
  photos: Photo[];
  frame?: Frame;
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const inView = useInView(frameRef, { once: false, margin: "-20% 0px -20% 0px" });
  const reduceMotion = useReducedMotion();
  const active = photos[current];

  useEffect(() => {
    if (!inView || paused || reduceMotion || photos.length < 2) return;
    const timer = window.setInterval(() => setCurrent((value) => (value + 1) % photos.length), 4800);
    return () => window.clearInterval(timer);
  }, [inView, paused, reduceMotion, photos.length]);

  const move = (direction: number) => {
    setCurrent((value) => (value + direction + photos.length) % photos.length);
  };

  return (
    <motion.div
      ref={frameRef}
      initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative pb-3 pr-3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={`relative aspect-[4/3] overflow-hidden bg-ink ${frameStyles[frame]}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.src}
            initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image src={active.src} alt={active.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-white/10" />
        <div className="absolute inset-x-6 bottom-5 flex items-end justify-between gap-5 text-white sm:inset-x-8 sm:bottom-7">
          <p aria-live="polite" className="max-w-xs font-display text-2xl leading-tight">{active.caption}</p>
          <div className="flex shrink-0 gap-2">
            <button type="button" aria-label="Previous photo" onClick={() => move(-1)} className="grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-ink/30 text-lg transition hover:bg-forest">&#8592;</button>
            <button type="button" aria-label="Next photo" onClick={() => move(1)} className="grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-ink/30 text-lg transition hover:bg-forest">&#8594;</button>
          </div>
        </div>
        <div className="absolute left-6 top-6 flex gap-1.5 sm:left-8 sm:top-8" aria-label="Select photo">
          {photos.map((photo, index) => <button key={photo.src} type="button" aria-label={`Show photo ${index + 1}`} aria-current={current === index} onClick={() => setCurrent(index)} className={`h-1.5 rounded-full transition-all ${current === index ? "w-8 bg-amber" : "w-1.5 bg-white/70 hover:bg-white"}`} />)}
        </div>
      </div>
      <span aria-hidden="true" className="absolute bottom-0 right-0 h-14 w-14 rounded-br-[1.5rem] border-b-2 border-r-2 border-amber" />
    </motion.div>
  );
}
