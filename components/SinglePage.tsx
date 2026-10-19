import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import TeamSection from "@/components/TeamSection";
import PartnerLogos from "@/components/PartnerLogos";
import KenyaMap from "@/components/KenyaMap";

const pathways = [
  ["Skills & education", "TVET access, scholarships, life skills, mentorship and retention support."],
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

const partners = [
  "Training institutions",
  "Grassroots organisations",
  "Programme partners",
  "Disability inclusion",
  "Employers and industry",
];

export default function SinglePage() {
  return <>
    <section id="top" className="relative overflow-hidden bg-sand-light py-20 md:py-28">
      <div className="absolute -right-32 -top-24 h-96 w-96 rounded-full border border-leaf/10" />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <div><span className="eyebrow text-forest">Circle Group · Kenya</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[.96] text-ink sm:text-7xl">Bringing opportunity closer to <i className="not-italic text-leaf">young women.</i></h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/80">We are a women-led Kenyan social enterprise working with young women, particularly in rural, marginalised and underserved communities, to build pathways into dignified work and sustainable livelihoods.</p>
          <p className="mt-5 max-w-2xl font-display text-2xl leading-snug text-forest">Our goal is simple: reduce the distance between a young woman and sustainable income.</p>
          <div className="mt-9 flex flex-wrap gap-4"><a href="#work-with-us" className="rounded-full bg-leaf px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-forest">Work with us</a></div>
        </div>
        <figure className="group overflow-hidden rounded-[2rem] bg-white shadow-soft"><div className="relative aspect-[4/5]"><Image src="/img/home/photo_2026-10-07_11-44-41.jpg" alt="Young women taking part in a Circle Group community programme" fill sizes="(max-width: 1024px) 100vw, 45vw" priority className="object-cover transition duration-700 group-hover:scale-105" /></div><figcaption className="rounded-b-[2rem] p-5 text-sm text-ink/70">Opportunity grows when the right support meets a woman’s own ambition.</figcaption></figure>
      </div>
    </section>

    <section id="our-work" className="scroll-mt-24 bg-sand py-20 md:py-28"><div className="container-page">
      <div><span className="relative inline-block font-mono text-xl font-bold uppercase tracking-widest text-leaf sm:text-2xl">What we do<span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-amber" /></span><h2 className="mt-6 font-body text-4xl font-semibold leading-tight text-ink sm:text-5xl">Different starting points. Different pathways. One destination.</h2><p className="mt-5 text-lg leading-relaxed text-ink/75">Some young women need technical training; others already have skills but need customers, capital or business support; others are ready for work but need industry connections. We meet each woman where she is and connect her to the support she needs.</p></div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">{pathways.map(([title, description], i) => <article key={title} className={`group rounded-2xl border border-ink/10 bg-sand-light p-5 transition-colors duration-300 sm:p-7 md:p-8 ${i % 2 === 0 ? "hover:border-amber hover:bg-amber" : "hover:border-forest hover:bg-forest"}`}><h3 className={`font-body text-2xl font-semibold text-ink transition-colors ${i % 2 === 0 ? "" : "group-hover:text-white"}`}>{title}</h3><p className={`mt-3 leading-relaxed text-ink/70 transition-colors ${i % 2 === 0 ? "" : "group-hover:text-white/80"}`}>{description}</p></article>)}</div>
    </div></section>

    <section className="bg-forest py-20 text-white md:pb-20 md:pt-28"><div className="container-page"><span className="eyebrow text-amber">Our impact</span><h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">Opening more routes from capability to income.</h2><div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">{impact.map(([number, description]) => <article key={number + description} className="bg-forest p-7 md:p-8"><p className="font-display text-5xl text-amber">{number}</p><p className="mt-3 text-sm leading-relaxed text-white/75">{description}</p></article>)}</div><p className="mt-14 text-center font-display text-xl text-white/90 sm:text-2xl">Access <span className="text-amber">→</span> Retention <span className="text-amber">→</span> Completion <span className="text-amber">→</span> Transition <span className="text-amber">→</span> Sustainable earning</p></div></section>

    <section className="bg-sand-light py-20 md:py-28"><div className="container-page grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><span className="eyebrow text-leaf">Where we work</span><h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">Rooted in communities. Connected across Kenya.</h2></div><div><p className="text-lg leading-relaxed text-ink/75">Our direct work is concentrated in Kajiado and West Pokot, reaching young women from rural and underserved communities, including participants from Turkana, Baringo, Samburu, Taita Taveta and Makueni.</p><p className="mt-5 text-lg leading-relaxed text-ink/75">We work through existing TVETs, grassroots organisations, communities and employers rather than creating parallel systems.</p></div></div></section>

    <section id="partners" className="scroll-mt-24 bg-sand py-20 md:py-28"><div className="container-page grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><span className="eyebrow text-forest">Partnerships</span><h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">The pathway is built together.</h2><p className="mt-5 leading-relaxed text-ink/70">Our partners help make education, work experience, enterprise and inclusion support possible.</p><Link href="/#partner-logos" className="mt-7 inline-block border-b-2 border-leaf pb-1 text-sm font-bold text-leaf">Meet our partners →</Link></div><div className="grid gap-3">{partners.map((title) => <article key={title} className="rounded-2xl border border-ink/10 bg-sand-light p-5"><h3 className="font-semibold text-forest">{title}</h3></article>)}</div></div></section>

    <section className="bg-[#e5efd0] py-20 md:py-28"><div className="container-page grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><span className="eyebrow pt-2 text-forest">What we have learned</span><div><h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">The challenge is not simply lack of skills. It is lack of an accessible pathway from capability to income.</h2><p className="mt-6 text-lg leading-relaxed text-ink/75">A certificate does not automatically create a job. Business training does not automatically create a customer. Capital does not automatically create a viable enterprise. So we start with a different question:</p><p className="mt-5 font-display text-3xl text-forest">What stands between this young woman and sustainable income?</p><p className="mt-5 font-semibold text-leaf">The pathway adapts to the woman—not the woman to the programme.</p></div></div></section>

    <TeamSection />

    <PartnerLogos />
    <section className="bg-leaf py-8 text-white"><div className="container-page text-center"><p className="font-display text-xl">Circle Group Limited — Building pathways from capability to sustainable livelihoods.</p></div></section>
    <section id="work-with-us" className="scroll-mt-24 bg-forest py-20 text-white md:py-28"><div className="container-page"><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><span className="eyebrow text-amber">Work with us</span><h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Help build pathways to sustainable livelihoods.</h2><p className="mt-6 text-lg leading-relaxed text-white/75">We partner with TVETs, foundations, development organisations, government, employers and community organisations to design and deliver livelihood, skilling, entrepreneurship and transition-to-work programmes for young women.</p><p className="mt-6 font-semibold text-amber">Partner with us · Fund our work · Hire our talent · Open markets for young women</p></div><div className="rounded-[2rem] bg-white text-ink shadow-soft overflow-hidden"><div className="bg-sand-light px-8 py-7 sm:px-10"><p className="eyebrow text-leaf">Start a conversation</p><h3 className="mt-2 font-display text-3xl leading-tight">Tell us how you would like to work together.</h3><p className="mt-3 text-sm leading-relaxed text-ink/60">We typically respond within 2 business days.</p></div><div className="h-px bg-ink/8" /><div className="px-8 py-8 sm:px-10"><ContactForm formType="partner" fields={["name", "org", "email", "phone", "interest", "message"]} submitLabel="Send enquiry" /></div></div></div><div id="contact" className="scroll-mt-24 pt-16"><div className="mb-8"><span className="eyebrow text-amber">Our location</span><h3 className="mt-3 max-w-3xl font-display text-3xl leading-tight sm:text-4xl">Based in Kenya, working with communities across the country.</h3></div><div className="grid gap-6 lg:grid-cols-[1fr_320px]"><KenyaMap /><div className="flex flex-col gap-5"><div className="rounded-2xl border border-white/20 bg-white/10 p-6"><p className="eyebrow text-amber">Contact us</p><ul className="mt-4 space-y-4"><li className="flex items-start gap-3"><span className="mt-0.5 text-amber">📍</span><span className="text-white/90">Nairobi, Kenya</span></li><li className="flex items-start gap-3"><span className="mt-0.5 text-amber">✉️</span><a href="mailto:info@circlegroup.co.ke" className="text-white/90 underline-offset-2 hover:text-amber hover:underline">info@circlegroup.co.ke</a></li><li className="flex items-start gap-3"><span className="mt-0.5 text-amber">📞</span><a href="tel:+254181094157" className="text-white/90 underline-offset-2 hover:text-amber hover:underline">+254 181 094 157</a></li></ul></div><div className="rounded-2xl border border-white/20 bg-white/10 p-6"><p className="eyebrow text-amber">Where we work</p><p className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/40">Key Locations</p><ul className="mt-2 space-y-1.5 text-sm text-white/80"><li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber" />Nairobi</li><li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber" />Kiambu</li><li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber" />Narok</li><li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber" />Meru</li><li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber" />Kajiado</li><li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber" />West Pokot</li><li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber" />Turkana</li><li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber" />Baringo</li><li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber" />Samburu</li><li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber" />Taita Taveta</li><li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber" />Makueni</li></ul></div></div></div></div></div></section>
  </>;
}
