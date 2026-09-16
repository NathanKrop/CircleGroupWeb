import Link from "next/link";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import Pathway from "@/components/Pathway";
import HeroCarousel from "@/components/HeroCarousel";
import VoiceCarousel from "@/components/VoiceCarousel";

const focusAreas = [
  {
    n: "01",
    title: "Life Skills Training",
    desc: "Confidence, communication, financial literacy, and digital skills that form the foundation for everything after.",
    href: "/programs/life-skills-training",
  },
  {
    n: "02",
    title: "Career Readiness",
    desc: "CV clinics, interview practice, and workplace-readiness coaching that gets young people through the door.",
    href: "/programs/career-readiness",
  },
  {
    n: "03",
    title: "Mentorship",
    desc: "Structured 1:1 mentorship pairing young people — especially young women — with professionals who open doors.",
    href: "/programs/mentorship",
  },
  {
    n: "04",
    title: "Entrepreneurship Support",
    desc: "Business fundamentals, seed guidance, and peer networks for young people building their own income streams.",
    href: "/programs/entrepreneurship",
  },
  {
    n: "05",
    title: "Research & MERL",
    desc: "Community-based research on youth employment, rural economies, and women's empowerment that sharpens our own work.",
    href: "/research",
  },
  {
    n: "06",
    title: "Safeguarding Systems",
    desc: "Safeguarding policy design and training for schools and partner organisations working with young people.",
    href: "/programs/safeguarding",
  },
];

const values = [
  {
    icon: "🌱",
    title: "Integrity",
    desc: "Upholding your trust",
  },
  {
    icon: "💼",
    title: "Industry",
    desc: "Driven by diligence",
  },
  {
    icon: "💡",
    title: "Ingenuity",
    desc: "Crafting innovative solutions",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-sand-light relative overflow-hidden">
        <div className="container-page grid grid-cols-1 items-center gap-14 pb-20 pt-14 md:grid-cols-2 md:pb-28 md:pt-20">
          <div>
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2 text-forest">
                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                Youth & Skills Development
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance font-display text-[2.75rem] font-medium leading-[1.05] text-ink sm:text-6xl">
                From learning
                <br />
                to <span className="italic text-leaf">earning.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
                Circle Group equips young people, especially young women, with
                the practical skills and workplace readiness they need to make
                the crossing from training into meaningful work.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/get-involved"
                  className="rounded-full bg-leaf px-7 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-forest"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/programs"
                  className="group flex items-center gap-2 font-body text-sm font-semibold text-leaf hover:text-forest"
                >
                  See our work
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={40} className="relative">
            <HeroCarousel />

            <div className="relative mt-4 w-52 rounded-2xl border border-leaf/20 bg-white p-5 shadow-xl md:absolute md:bottom-4 md:-left-10 md:mt-0">
              <p className="font-display text-3xl text-leaf">2013</p>
              <p className="mt-1 text-xs leading-snug text-ink/70">
                A women-led social enterprise creating opportunity since
              </p>
            </div>
          </Reveal>
        </div>

        {/* trust strip */}
        <div className="border-y border-ink/10 bg-sand">
          <div className="container-page flex flex-wrap items-center gap-x-10 gap-y-3 py-5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink/70">
            <span>Working with —</span>
            <span>Schools & Institutions</span>
            <span className="text-amber">·</span>
            <span>Employers</span>
            <span className="text-amber">·</span>
            <span>Development Organisations</span>
            <span className="text-amber">·</span>
            <span>Community Groups</span>
          </div>
        </div>
      </section>

      {/* VALUES - Reference site style */}
      <section className="bg-sand py-16">
        <div className="container-page grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="flex items-center gap-5 rounded-2xl border border-leaf/15 bg-white p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber/15 text-2xl">
                  {v.icon}
                </div>
                <div>
                  <h4 className="eyebrow text-ink/60">{v.desc}</h4>
                  <h2 className="mt-1 font-display text-2xl text-leaf">{v.title}</h2>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PURPOSE */}
      <section className="page-intro py-24">
        <div className="container-page">
          <Reveal>
            <p className="max-w-3xl text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
              We create the conditions for young people to move from{" "}
              <span className="text-leaf">potential</span> to{" "}
              <span className="text-leaf">opportunity</span> — training,
              mentoring, and connecting them to real, dignified work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-sand py-24">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-leaf">What we do</span>
            <h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-medium text-ink">
              Six ways we close the gap between education and work.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((f, i) => (
              <Reveal key={f.n} delay={i * 0.06} y={16}>
                <Link
                  href={f.href}
                  className="group flex h-full flex-col justify-between bg-sand-light p-8 transition-colors hover:bg-leaf"
                >
                  <div>
                    <span className="font-mono text-xs text-leaf group-hover:text-white">
                      {f.n}
                    </span>
                    <h3 className="mt-4 font-display text-xl text-ink group-hover:text-white">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70 group-hover:text-white/85">
                      {f.desc}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-leaf group-hover:text-white">
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PATHWAY SIGNATURE */}
      <section className="bg-sand-light py-24">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-leaf">The pathway</span>
            <h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-medium text-ink">
              One route. Four stages. A dignified job at the end of it.
            </h2>
          </Reveal>
          <div className="mt-16">
            <Pathway />
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="bg-sand py-24">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-forest">By the numbers</span>
            <h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-medium text-ink">
              A shared commitment to Kenya&rsquo;s young people.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-10 rounded-2xl bg-sand-light p-10 sm:grid-cols-4 sm:p-14">
            <Reveal delay={0}><StatCounter value={1200} suffix="+" label="Young people trained" /></Reveal>
            <Reveal delay={0.08}><StatCounter value={70} suffix="%" label="Programme participants who are young women" /></Reveal>
            <Reveal delay={0.16}><StatCounter value={4} label="Counties with active programmes" /></Reveal>
            <Reveal delay={0.24}><StatCounter value={100} suffix="+" label="School & employer partners" /></Reveal>
          </div>
          <p className="mt-4 text-xs text-ink/50">
            [Placeholder figures — confirm real numbers with Circle Group before publishing]
          </p>
        </div>
      </section>

      {/* VOICES */}
      <section className="bg-sand py-24">
        <div className="container-page">
          <VoiceCarousel />
          <Reveal className="hidden">
            <span className="mx-auto mb-8 block font-display text-6xl leading-none text-amber">&ldquo;</span>
            <p className="text-balance font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
              The mentorship programme didn&rsquo;t just teach me a skill — it
              taught me how to walk into a room and believe I belonged there.
            </p>
            <p className="mt-8 eyebrow text-ink/60">
              [Name] · Programme Graduate, [County]
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-sand-light py-24">
        <div className="container-page">
          <Reveal className="grid grid-cols-1 items-center gap-10 rounded-[2rem] bg-leaf px-8 py-14 sm:px-14 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-balance font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
                Your organisation can help open the next door.
              </h2>
              <p className="mt-4 max-w-md text-white/85">
                Whether you&rsquo;re a school, an employer, or a development
                partner — there&rsquo;s a way to work with us.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                href="/get-involved"
                className="rounded-full bg-amber px-6 py-3.5 text-center font-body text-sm font-semibold text-ink transition-colors hover:bg-white"
              >
                Partner with us
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/60 px-6 py-3.5 text-center font-body text-sm font-semibold text-white transition-colors hover:border-white hover:text-white"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
