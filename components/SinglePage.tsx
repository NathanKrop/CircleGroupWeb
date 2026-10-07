import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import TeamSection from "@/components/TeamSection";

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
  ["Training institutions", "Maasai National Polytechnic and other training institutions"],
  ["Grassroots organisations", "HELGA and Perur Rays of Hope"],
  ["Programme partners", "Global Give Back Circle through HER Lab"],
  ["Disability inclusion", "AIC Kajiado Child Care Centre"],
  ["Employers and industry", "A network of more than 100 partners creating internships, employment, mentorship and market opportunities"],
];

export default function SinglePage() {
  return <>
    <section id="top" className="relative overflow-hidden bg-sand-light py-20 md:py-28">
      <div className="absolute -right-32 -top-24 h-96 w-96 rounded-full border border-leaf/10" />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <div><span className="eyebrow text-forest">Circle Group · Kenya</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[.96] text-ink sm:text-7xl">Bringing opportunity closer to <i className="text-leaf">young women.</i></h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/80">We are a women-led Kenyan social enterprise working with young women, particularly in rural, marginalised and underserved communities, to build pathways into dignified work and sustainable livelihoods.</p>
          <p className="mt-5 max-w-2xl font-display text-2xl leading-snug text-forest">Our goal is simple: reduce the distance between a young woman and sustainable income.</p>
          <div className="mt-9 flex flex-wrap gap-4"><Link href="/work-with-us" className="rounded-full bg-leaf px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-forest">Work with us</Link><a href="#our-work" className="py-3.5 text-sm font-semibold text-leaf">Explore our pathways ↓</a></div>
        </div>
        <figure className="group overflow-hidden rounded-[2rem] bg-white shadow-soft"><div className="relative aspect-[4/3]"><Image src="/img/home/photo_2026-10-07_11-44-41.jpg" alt="Young women taking part in a Circle Group community programme" fill sizes="(max-width: 1024px) 100vw, 45vw" priority className="object-cover transition duration-700 group-hover:scale-105" /></div><figcaption className="p-5 text-sm text-ink/70">Opportunity grows when the right support meets a woman’s own ambition.</figcaption></figure>
      </div>
    </section>

    <section id="our-work" className="scroll-mt-24 bg-sand py-20 md:py-28"><div className="container-page">
      <div className="max-w-3xl"><span className="eyebrow text-leaf">What we do</span><h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">Different starting points. Different pathways. One destination.</h2><p className="mt-5 text-lg leading-relaxed text-ink/75">Some young women need technical training; others already have skills but need customers, capital or business support; others are ready for work but need industry connections. We meet each woman where she is and connect her to the support she needs.</p></div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">{pathways.map(([title, description], i) => <article key={title} className="rounded-2xl border border-ink/10 bg-sand-light p-7 md:p-8"><span className="text-xs font-semibold text-leaf">0{i + 1}</span><h3 className="mt-5 font-display text-2xl text-ink">{title}</h3><p className="mt-3 leading-relaxed text-ink/70">{description}</p></article>)}</div>
    </div></section>

    <section className="bg-forest py-20 text-white md:py-28"><div className="container-page"><span className="eyebrow text-amber">Our impact</span><h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">Opening more routes from capability to income.</h2><div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">{impact.map(([number, description]) => <article key={number + description} className="bg-forest p-7 md:p-8"><p className="font-display text-5xl text-amber">{number}</p><p className="mt-3 text-sm leading-relaxed text-white/75">{description}</p></article>)}</div><p className="mt-10 text-center font-display text-xl text-white/90 sm:text-2xl">Access <span className="text-amber">→</span> Retention <span className="text-amber">→</span> Completion <span className="text-amber">→</span> Transition <span className="text-amber">→</span> Sustainable earning</p></div></section>

    <section className="bg-sand-light py-20 md:py-28"><div className="container-page grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><span className="eyebrow text-leaf">Where we work</span><h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">Rooted in communities. Connected across Kenya.</h2></div><div><p className="text-lg leading-relaxed text-ink/75">Our direct work is concentrated in Kajiado and West Pokot, reaching young women from rural and underserved communities, including participants from Turkana, Baringo, Samburu, Taita Taveta and Makueni.</p><p className="mt-5 text-lg leading-relaxed text-ink/75">We work through existing TVETs, grassroots organisations, communities and employers rather than creating parallel systems.</p></div></div></section>

    <section className="bg-sand py-20 md:py-28"><div className="container-page grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><span className="eyebrow text-forest">Partnerships</span><h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">The pathway is built together.</h2><p className="mt-5 leading-relaxed text-ink/70">Our partners help make education, work experience, enterprise and inclusion support possible.</p><Link href="/partners" className="mt-7 inline-block border-b-2 border-leaf pb-1 text-sm font-bold text-leaf">Meet our partners →</Link></div><div className="grid gap-3">{partners.map(([title, description]) => <article key={title} className="grid gap-2 rounded-2xl border border-ink/10 bg-sand-light p-5 sm:grid-cols-[180px_1fr]"><h3 className="font-semibold text-forest">{title}</h3><p className="text-sm leading-relaxed text-ink/70">{description}</p></article>)}</div></div></section>

    <section className="bg-[#e5efd0] py-20 md:py-28"><div className="container-page grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><span className="eyebrow pt-2 text-forest">What we have learned</span><div><h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">The challenge is not simply lack of skills. It is lack of an accessible pathway from capability to income.</h2><p className="mt-6 text-lg leading-relaxed text-ink/75">A certificate does not automatically create a job. Business training does not automatically create a customer. Capital does not automatically create a viable enterprise. So we start with a different question:</p><p className="mt-5 font-display text-3xl text-forest">What stands between this young woman and sustainable income?</p><p className="mt-5 font-semibold text-leaf">The pathway adapts to the woman—not the woman to the programme.</p></div></div></section>

    <TeamSection />

    <section id="work-with-us" className="scroll-mt-24 bg-forest py-20 text-white md:py-28"><div className="container-page grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><span className="eyebrow text-amber">Work with us</span><h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Help build pathways to sustainable livelihoods.</h2><p className="mt-6 text-lg leading-relaxed text-white/75">We partner with TVETs, foundations, development organisations, government, employers and community organisations to design and deliver livelihood, skilling, entrepreneurship and transition-to-work programmes for young women.</p><p className="mt-6 font-semibold text-amber">Partner with us · Fund our work · Hire our talent · Open markets for young women</p></div><div className="rounded-[2rem] bg-white p-7 text-ink shadow-soft sm:p-10"><p className="eyebrow text-leaf">Start a conversation</p><h3 className="mt-3 font-display text-3xl">Tell us how you would like to work together.</h3><div className="mt-8"><ContactForm formType="partner" fields={["name", "org", "email", "phone", "interest", "message"]} submitLabel="Send enquiry" /></div></div></div></section>
    <section className="bg-leaf py-8 text-white"><div className="container-page text-center"><p className="font-display text-xl">Circle Group Limited — Building pathways from capability to sustainable livelihoods.</p></div></section>
  </>;
}
