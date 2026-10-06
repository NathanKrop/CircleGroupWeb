import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Pathway from "@/components/Pathway";
import TeamSection from "@/components/TeamSection";

const programs = [
  {
    number: "01",
    audience: "Young people",
    title: "Life Skills Training",
    description: "Confidence, communication, financial literacy, and digital skills that form the foundation for everything after.",
  },
  {
    number: "02",
    audience: "Program graduates",
    title: "Career Readiness",
    description: "CV clinics, interview practice, and workplace-readiness coaching that gets young people through the door and keeps them there.",
  },
  {
    number: "03",
    audience: "Graduates ready to work",
    title: "Work Placements & Industry Connections",
    description: "Internships, work placements and introductions to our network of industry partners, so preparation turns into a first day on the job.",
  },
  {
    number: "04",
    audience: "Aspiring young business owners",
    title: "Entrepreneurship Support",
    description: "Business fundamentals and peer networks for young people building their own income streams.",
  },
  {
    number: "05",
    audience: "Teachers, counsellors & administrators",
    title: "Training for Schools & Institutions",
    description: "Capacity building designed around the skills gaps schools, colleges and organisations see every day.",
  },
  {
    number: "06",
    audience: "Funders, institutions & partners",
    title: "Research & Evidence",
    description: "Community-based research on youth employment, rural economies and women’s empowerment that sharpens our work.",
  },
];

const pathways = [
  ["Learn", "Life skills, digital literacy and personal confidence"],
  ["Train", "Career readiness, vocational skills and professional practice"],
  ["Connect", "Work placements, mentors and industry networks"],
  ["Earn", "Employment, entrepreneurship and long-term growth"],
];

const partnerTypes = [
  ["01", "Industry partners", "Open doors to internships, first jobs, mentorship and practical experience."],
  ["02", "Development organisations", "Build stronger pathways with programs shaped by evidence and local context."],
  ["03", "Schools & institutions", "Bring career readiness and workplace preparation into the places young people already learn."],
  ["04", "Community groups", "Connect trusted local relationships to opportunities that reach young people where they live and grow."],
  ["05", "Funders", "Invest in practical, accountable pathways from learning to meaningful work."],
];

const values = [
  ["Integrity", "We do what we say we will."],
  ["Equity", "Access for those furthest from opportunity."],
  ["Impact", "Measured in lives that move forward."],
];

export default function SinglePage() {
  return (
    <>
      <section id="top" className="relative scroll-mt-24 overflow-hidden bg-sand-light pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="absolute -right-32 -top-24 h-96 w-96 rounded-full border border-leaf/10" />
        <div className="absolute -right-12 -top-8 h-72 w-72 rounded-full border border-amber/30" />
        <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <span className="eyebrow text-forest">Youth &amp; skills development</span>
            <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[.92] text-ink sm:text-7xl lg:text-[5.7rem]">
              From learning <br />to <i className="text-leaf">earning.</i>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
              Circle Group equips young people, especially young women, with the practical skills and workplace readiness they need to move from training into meaningful work.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#work-with-us" className="rounded-full bg-leaf px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-forest">Partner with us</a>
              <a href="#our-work" className="py-3.5 text-sm font-semibold text-leaf">See our work →</a>
            </div>
          </div>

          <div className="relative rounded-[2rem] bg-forest p-8 text-white shadow-soft sm:p-10">
            <span className="eyebrow text-amber">The Circle is wider</span>
            <p className="mt-8 font-display text-4xl leading-tight sm:text-5xl">Progress happens when the right people meet.</p>
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/15 pt-7">
              <div><p className="font-display text-4xl text-amber">Young people</p><p className="mt-2 text-sm text-white/70">At the centre of every pathway.</p></div>
              <div><p className="font-display text-4xl text-amber">Meaningful work</p><p className="mt-2 text-sm text-white/70">Built through trusted partnerships.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-sand py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <span className="eyebrow text-forest">About Us</span>
            <h2 className="mt-5 font-display text-5xl leading-[.98] text-ink sm:text-6xl">Talent is everywhere. Opportunity should be too.</h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75">Circle Group creates practical pathways from education to meaningful work. We equip young people with life skills, professional knowledge, networks and career preparation, with a strong focus on young women.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <figure className="group overflow-hidden rounded-[1.7rem] bg-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/img/pixx/photo_2026-10-06_13-46-17.jpg" alt="Circle Group community activity" fill sizes="(max-width: 639px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" priority />
              </div>
              <figcaption className="p-5 text-sm leading-relaxed text-ink/70">Community learning creates the confidence to move forward.</figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-[1.7rem] bg-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/img/pixx/photo_2026-10-06_13-47-06.jpg" alt="Circle Group youth opportunity" fill sizes="(max-width: 639px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" priority />
              </div>
              <figcaption className="p-5 text-sm leading-relaxed text-ink/70">Opportunity grows when people are supported together.</figcaption>
            </figure>
          </div>
        </div>
        <div className="container-page mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-ink/10 bg-ink/10 md:grid-cols-3">
          {values.map(([title, description]) => (
            <article key={title} className="bg-sand p-8 md:p-10">
              <span className="eyebrow text-leaf">Our value</span>
              <h3 className="mt-8 font-display text-3xl text-ink">{title}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="our-work" className="scroll-mt-24 bg-sand-light py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow text-leaf">Our work</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">Everything it takes to move from learning to earning.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">We train young people, prepare them for the workplace, connect them to industry partners, and build the evidence that keeps our work sharp.</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map(({ number, audience, title, description }) => (
              <article key={title} className="rounded-2xl border border-ink/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-leaf/30 hover:shadow-soft">
                <span className="text-xs font-semibold text-leaf">{number}</span>
                <p className="mt-8 eyebrow text-leaf">{audience}</p>
                <h3 className="mt-3 font-display text-2xl text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white md:py-28">
        <div className="container-page">
          <span className="eyebrow text-amber">The pathway</span>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">One route. Four stages. A dignified job at the end of it.</h2>
          <div className="mt-16"><Pathway /></div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-24 bg-sand py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div>
            <span className="eyebrow text-forest">Partnerships</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">The Circle is wider.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">We bring together the people who can make the journey from learning to earning possible.</p>
          </div>
          <div className="grid gap-4">
            {partnerTypes.map(([number, title, description]) => (
              <article key={title} className="grid gap-4 rounded-2xl border border-ink/10 bg-white p-6 sm:grid-cols-[70px_1fr] sm:p-7">
                <span className="font-display text-3xl text-leaf">{number}</span>
                <div><h3 className="font-display text-2xl text-ink">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink/70">{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      <section id="work-with-us" className="scroll-mt-24 bg-sand-light py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <span className="eyebrow text-forest">Work with us</span>
            <h2 className="mt-4 font-display text-5xl leading-[.98] text-ink">There’s a place for you in this work.</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">Whether you are a funder, industry partner, school, community organisation or someone who wants to join our team, there is a way to build this with us.</p>
            <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-6">
              <p className="font-semibold text-forest">What happens next?</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">Your enquiry goes directly to our team. We will review it and arrange the right next conversation.</p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-7 shadow-soft sm:p-10">
            <p className="eyebrow text-leaf">Start a conversation</p>
            <h3 className="mt-3 font-display text-3xl text-ink">Tell us what you would like to build.</h3>
            <div className="mt-8"><ContactForm formType="partner" fields={["name", "org", "email", "phone", "interest", "message"]} submitLabel="Send enquiry" /></div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-forest py-20 text-white md:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <span className="eyebrow text-amber">Contact</span>
            <h2 className="mt-4 font-display text-5xl leading-tight">Let’s build something that lasts.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">For general enquiries, program partnerships or opportunities to work with Circle Group.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-7 text-ink sm:p-10">
            <p className="eyebrow text-leaf">Send an enquiry</p>
            <h3 className="mt-3 font-display text-3xl">How can we help?</h3>
            <div className="mt-8"><ContactForm fields={["name", "org", "email", "phone", "message"]} submitLabel="Send enquiry" /></div>
          </div>
        </div>
      </section>

      <section id="opportunities" className="scroll-mt-24 border-b border-white/15 bg-leaf py-10 text-white">
        <div className="container-page grid gap-5 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div><h2 className="font-display text-2xl">Hear about opportunities first.</h2><p className="mt-2 text-sm text-white/80">Leave your email and we’ll let you know when new training and work opportunities open.</p></div>
          <Link href="mailto:info@circlegroup.co.ke?subject=Circle%20Group%20opportunities" className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-forest">Email our team</Link>
        </div>
      </section>
    </>
  );
}
