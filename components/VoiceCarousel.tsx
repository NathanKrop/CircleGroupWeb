"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const voices = [
  { quote: "The mentorship programme didn’t just teach me a skill — it taught me how to walk into a room and believe I belonged there.", source: "[Participant name] · Programme Graduate, [County]" },
  { quote: "The strongest outcomes happen when preparation, opportunity, and a supportive network are designed to work together.", source: "[Partner name] · Circle Group collaborator" },
  { quote: "When young people are equipped with confidence and practical tools, they can turn ambition into meaningful work.", source: "[Mentor name] · Circle Group mentor" },
];

export default function VoiceCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => { if (paused || reduceMotion) return; const timer = window.setInterval(() => setCurrent((value) => (value + 1) % voices.length), 7000); return () => window.clearInterval(timer); }, [paused, reduceMotion]);
  const go = (direction: number) => setCurrent((value) => (value + direction + voices.length) % voices.length);
  return (
    <div className="mx-auto max-w-3xl text-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <span className="mb-8 block font-display text-6xl leading-none text-amber">“</span>
      <div className="min-h-52" aria-live="polite"><AnimatePresence mode="wait"><motion.div key={current} initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -14 }} transition={{ duration: 0.4 }}><p className="text-balance font-display text-3xl font-medium leading-snug text-savanna sm:text-4xl">{voices[current].quote}</p><p className="mt-8 eyebrow text-savanna/60">{voices[current].source}</p></motion.div></AnimatePresence></div>
      <div className="mt-6 flex items-center justify-center gap-3"><button type="button" aria-label="Previous voice" onClick={() => go(-1)} className="text-savanna/70 transition hover:text-rust">←</button>{voices.map((voice, index) => <button type="button" key={voice.source} aria-label={`Show voice ${index + 1}`} aria-current={current === index} onClick={() => setCurrent(index)} className={`h-2 rounded-full transition-all ${current === index ? "w-6 bg-rust" : "w-2 bg-savanna/25 hover:bg-savanna/55"}`} />)}<button type="button" aria-label="Next voice" onClick={() => go(1)} className="text-savanna/70 transition hover:text-rust">→</button></div>
    </div>
  );
}
