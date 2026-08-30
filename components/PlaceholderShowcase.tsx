"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function PlaceholderShowcase({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: { eyebrow?: string; heading: string; body: string }[];
}) {
  return (
    <section className="bg-sand-light py-16 md:py-24">
      <div className="container-page max-w-3xl">
        <Reveal>
          <span className="eyebrow text-forest">Circle Group — Placeholder</span>
          <h1 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl">
            {title}
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-ink/80">{description}</p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {sections.map((section, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="rounded-2xl border border-ink/10 bg-sand-light p-8">
                {section.eyebrow && (
                  <span className="eyebrow text-leaf">{section.eyebrow}</span>
                )}
                <h2 className="mt-3 font-display text-2xl text-ink">
                  {section.heading}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{section.body}</p>
              </div>
            </Reveal>
          ))}

          <div className="mt-14 rounded-2xl bg-leaf p-8 text-center sm:p-10">
            <Reveal>
              <h2 className="font-display text-2xl text-white">
                This page is a placeholder — ready for final Circle Group content.
              </h2>
              <p className="mt-3 text-white/85">
                Replace this copy with the real story, programme detail, or report.
                Layout, motion, and structure are final. Content is all that remains.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/get-involved"
                  className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
                >
                  Get involved
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:text-white"
                >
                  Contact us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
