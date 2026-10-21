"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import CircleGroupBrand from "@/components/CircleGroupBrand";

const slides = [
  {
    label: "Training partners",
    title: "Skills open doors.",
    description: "Schools and TVETs help connect young women with practical training and the support to stay on their path.",
    link: "Explore training partnerships",
    href: "/work-with-us#training",
  },
  {
    label: "Employers and industry",
    title: "Experience becomes opportunity.",
    description: "Employers create room for mentorship, internships and first jobs that move preparation into practice.",
    link: "Meet our employer partners",
    href: "/work-with-us#industry-partner",
  },
  {
    label: "Communities and funders",
    title: "Progress is built together.",
    description: "Community organisations and funders help make locally rooted, lasting pathways possible.",
    link: "Build a partnership",
    href: "/work-with-us#fund",
  },
];

export default function PartnerBrandSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const reduceMotion = useReducedMotion();
  const active = slides[current];
  const autoplayPaused = paused || hovered || focusWithin || reduceMotion;

  useEffect(() => {
    if (autoplayPaused) return;
    const timer = window.setInterval(() => {
      setCurrent((value) => (value + 1) % slides.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [autoplayPaused]);

  const move = (direction: number) => {
    setCurrent((value) => (value + direction + slides.length) % slides.length);
  };

  return (
    <div
      role="region"
      aria-label="Circle Group partnership stories"
      aria-roledescription="carousel"
      className="relative overflow-hidden rounded-[2rem] border border-forest/10 bg-sand-light p-6 shadow-[18px_18px_0_#A6CE39] sm:p-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocusWithin(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocusWithin(false);
        }
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #1B3A2B 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative flex min-h-[31rem] flex-col sm:min-h-[34rem]">
        <div className="flex flex-1 flex-col justify-center py-3">
          <CircleGroupBrand
            className="flex w-full flex-col items-center gap-5"
            logoClassName="h-28 w-auto object-contain sm:h-32"
            graphicClassName="hidden h-auto w-full lg:block"
          />
        </div>

        <div className="border-t border-forest/15 pt-5">
          <div className="grid gap-5">
            <div className="min-h-[17rem] sm:min-h-[15rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={active.title}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${current + 1} of ${slides.length}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.3 }}
                >
                  <p className="eyebrow text-forest">{active.label}</p>
                  <h2 aria-live="polite" className="mt-2 font-display text-3xl leading-tight text-ink sm:text-4xl">
                    {active.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/75 sm:text-base">
                    {active.description}
                  </p>
                  <Link href={active.href} className="mt-4 inline-block border-b-2 border-forest pb-1 text-sm font-semibold text-forest">
                    {active.link} <span aria-hidden="true">→</span>
                  </Link>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-2 pb-1">
              {!reduceMotion && (
                <button
                  type="button"
                  aria-label={paused ? "Resume automatic slideshow" : "Pause automatic slideshow"}
                  aria-pressed={paused}
                  onClick={() => setPaused((value) => !value)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-forest/30 text-sm text-forest transition hover:bg-amber"
                >
                  {paused ? "▶" : "Ⅱ"}
                </button>
              )}
              <button
                type="button"
                aria-label="Previous partnership story"
                onClick={() => move(-1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-forest/30 text-lg text-forest transition hover:bg-amber"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next partnership story"
                onClick={() => move(1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-forest/30 text-lg text-forest transition hover:bg-amber"
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-5 flex gap-2" aria-label="Choose a partnership story">
            {slides.map((slide, index) => (
              <button
                key={slide.label}
                type="button"
                aria-label={`Show ${slide.label}`}
                aria-current={current === index}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all ${current === index ? "w-10 bg-amber" : "w-2 bg-forest/30 hover:bg-forest/60"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}