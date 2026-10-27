import Link from "next/link";
import Image from "next/image";

const pathways = [
  ["Skills & Education", "TVET access, scholarships, life skills, mentorship and retention support."],
  ["Employment", "Career preparation, internships, industry exposure and employer connections."],
  ["Enterprise", "Business development, financial capability, mentorship, capital and market linkages."],
  ["Inclusion", "Practical support that addresses distance, caregiving, disability, accommodation, mobility and family circumstances."],
];

const impact = [
  ["2,500+", "Young women reached through life skills, career and work-readiness programmes"],
  ["1,200+", "Rural young women supported to access technical training"],
  ["200+", "Connected to internships and workplace experience"],
  ["170", "Supported with seed capital to start or grow businesses"],
  ["100+", "Industry and employer partners"],
  ["16", "Young-women-led savings groups established in West Pokot"],
];

export default function SinglePage() {
  return <>
    {/* HERO */}
    <section id="top" className="relative overflow-hidden bg-sand-light py-20 md:py-28">
      <div className="absolute -right-32 -top-24 h-96 w-96 rounded-full border border-leaf/10" />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <h1 className="max-w-4xl font-display text-5xl leading-[.96] text-ink sm:text-7xl">Bringing opportunity closer to <i className="not-italic text-leaf">young women.</i></h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink">We are a women-led Kenyan social enterprise working with young women, particularly in rural, marginalised and underserved communities, to build pathways into dignified work and sustainable livelihoods.</p>
          <p className="mt-5 max-w-2xl font-display text-2xl leading-snug text-forest">Our goal is simple: reduce the distance between a young woman and sustainable income.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/work-with-us" className="rounded-full bg-leaf px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-forest">Work with us</Link>
          </div>
        </div>
        <figure className="group overflow-hidden rounded-[2rem] bg-white shadow-soft"><div className="relative aspect-[4/5]"><Image src="/img/home/photo_2026-10-07_11-44-41.jpg" alt="Young women taking part in a Circle Group community programme" fill sizes="(max-width: 1024px) 100vw, 45vw" priority className="object-cover transition duration-700 group-hover:scale-105" /></div><figcaption className="rounded-b-[2rem] p-5 text-sm text-ink/70">Opportunity grows when the right support meets a woman's own ambition.</figcaption></figure>
      </div>
    </section>

    {/* WHAT WE DO */}
    <section id="our-work" className="scroll-mt-24 bg-amber py-16 md:py-20"><div className="container-page">
      <div className="-mt-2"><span className="eyebrow-display text-xl text-ink sm:text-2xl">What we do</span><h2 className="mt-5 font-display text-4xl font-semibold leading-[0.95] text-ink sm:text-6xl">Different starting points. Different pathways. One destination.</h2><p className="mt-5 max-w-5xl text-lg leading-relaxed text-ink/75">Some young women need technical training; others already have skills but need customers, capital or business support; others are ready for work but need industry connections. We meet each woman where she is and connect her to the support she needs.</p></div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">{pathways.map(([title, description], i) => <article key={title} className={`group rounded-2xl border border-ink/10 bg-sand-light p-5 transition-colors duration-300 sm:p-7 md:p-8 ${i % 2 === 0 ? "hover:border-amber hover:bg-amber" : "hover:border-forest hover:bg-forest"}`}><h3 className={`font-display text-2xl font-semibold text-ink transition-colors ${i % 2 === 0 ? "" : "group-hover:text-white"}`}>{title}</h3><p className={`mt-3 leading-relaxed text-ink/70 transition-colors ${i % 2 === 0 ? "" : "group-hover:text-white/80"}`}>{description}</p></article>)}</div>
    </div></section>

    {/* OUR IMPACT */}
    <section className="bg-forest py-16 text-white md:pb-18 md:pt-20"><div className="container-page"><span className="eyebrow-display text-xl text-amber sm:text-2xl">Our impact</span><h2 className="mt-4 max-w-3xl font-display text-4xl leading-[0.95] sm:text-5xl">Opening more routes from capability to income.</h2><div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">{impact.map(([number, description]) => <article key={number + description} className="bg-forest p-7 md:p-8"><p className="font-display text-5xl text-amber">{number}</p><p className="mt-3 text-sm leading-relaxed text-white/75">{description}</p></article>)}</div><p className="mt-14 text-center font-display text-xl text-white/90 sm:text-2xl">Access <span className="text-amber">→</span> Retention <span className="text-amber">→</span> Completion <span className="text-amber">→</span> Transition <span className="text-amber">→</span> Sustainable earning</p></div></section>

    {/* WHAT WE HAVE LEARNED */}
    <section className="bg-white py-20 text-ink md:py-28"><div className="container-page grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><span className="eyebrow-display text-xl text-forest sm:text-2xl">What we have learned</span><div><h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">The challenge is not simply lack of skills. It is lack of an accessible pathway from capability to income.</h2><p className="mt-6 text-lg leading-relaxed text-ink/75">A certificate does not automatically create a job. Business training does not automatically create a customer. Capital does not automatically create a viable enterprise. So we start with a different question:</p><p className="mt-5 font-display text-3xl text-forest">What stands between this young woman and sustainable income?</p><p className="mt-5 font-semibold text-ink/80">The pathway adapts to the woman—not the woman to the programme.</p></div></div></section>

  </>;
}
