import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <>
      <section className="dark-grid pb-20 pt-16 md:pt-24">
        <div className="container-page max-w-4xl">
          <Reveal>
            <span className="eyebrow text-amber">About Circle Group</span>
            <h1 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.05] text-sand-light sm:text-6xl">Built on the belief that talent is everywhere. We exist to make sure opportunity is too.</h1>
          </Reveal>
          <Reveal delay={0.1}><p className="mt-8 max-w-2xl text-lg leading-relaxed text-sand-light/80">Circle Group creates practical pathways from education to meaningful work. We equip young people with life skills, professional knowledge, networks and career preparation, with a strong focus on young women.</p></Reveal>
        </div>
      </section>

      <section className="bg-savanna py-20">
        <div className="container-page grid grid-cols-1 gap-10 md:grid-cols-3">
          {[
            { t: "Our story", d: "Founded in 2013 as a women-led social enterprise, Circle Group formalised its mission through Circle Group Foundation in 2025." },
            { t: "Our focus", d: "We design every programme around the barriers young women in underserved communities face when moving into work." },
            { t: "Our reach", d: "We work with schools, youth associations, employers, and development organisations to turn training into opportunity." },
          ].map((block, i) => (
            <Reveal key={block.t} delay={i * 0.1}><span className="font-mono text-xs text-amber">0{i + 1}</span><h2 className="mt-3 font-display text-2xl text-sand-light">{block.t}</h2><p className="mt-3 text-sm leading-relaxed text-sand-light/70">{block.d}</p></Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand py-24"><div className="container-page"><Reveal><span className="eyebrow text-rust">The Circle Group approach</span><h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-medium text-savanna">Training, readiness, research, and partnerships work together.</h2><p className="mt-5 max-w-2xl text-savanna/75">These aren&apos;t separate programmes. Research shows us where the gaps are; training and work readiness close them; partnerships turn preparation into employment. What we learn goes back into the next programme.</p></Reveal></div></section>

      <section className="dark-grid py-24"><div className="container-page grid items-end gap-10 md:grid-cols-[1fr_auto]"><Reveal><span className="eyebrow text-amber">Our people</span><h2 className="mt-4 max-w-xl font-display text-4xl font-medium text-sand-light">The people doing the work behind every opportunity.</h2></Reveal><Link href="/team" className="rounded-full border border-sand-light/30 px-6 py-3 text-center text-sm font-semibold text-sand-light transition hover:border-amber hover:text-amber">Meet the team →</Link></div></section>
    </>
  );
}