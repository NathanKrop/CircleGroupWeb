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

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="page-intro relative overflow-hidden">
        <div className="container-page grid grid-cols-1 items-center gap-14 pb-20 pt-14 md:grid-cols-2 md:pb-28 md:pt-20">
          <div>
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2 text-rust">
                <span className="h-1.5 w-1.5 rounded-full bg-rust" />
                Nairobi, Kenya — Youth & Skills Development
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance font-display text-[2.75rem] font-medium leading-[1.05] text-savanna sm:text-6xl">
                From learning
                <br />
                to <span className="italic text-rust">earning.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-savanna/80">
                Circle Group equips young people — especially young women in
                underserved communities — with the life skills, mentorship,
                and career pathways that turn potential into dignified work.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/get-involved"
                  className="rounded-full bg-savanna px-7 py-3.5 font-body text-sm font-semibold text-sand-light transition-colors hover:bg-rust"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/programs"
                  className="group flex items-center gap-2 font-body text-sm font-semibold text-savanna"
                >
                  See our work
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={40} className="relative">
            <HeroCarousel />

            <div className="absolute -bottom-8 -left-6 w-52 rounded-2xl border border-savanna/10 bg-sand-light p-5 shadow-xl sm:-left-10">
              <p className="font-display text-3xl text-savanna">2013</p>
              <p className="mt-1 text-xs leading-snug text-savanna/70">
                A women-led social enterprise creating opportunity since
              </p>
            </div>
          </Reveal>
        </div>

        {/* trust strip */}
        <div className="border-y border-savanna/10 bg-savanna">
          <div className="container-page flex flex-wrap items-center gap-x-10 gap-y-3 py-5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-sand-light/70">
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

      {/* PURPOSE */}
      <section className="page-intro py-24">
        <div className="container-page">
          <Reveal>
            <p className="max-w-3xl text-balance font-display text-3xl font-medium leading-tight text-savanna sm:text-4xl">
              We create the conditions for young people to move from{" "}
              <span className="text-rust">potential</span> to{" "}
              <span className="text-rust">opportunity</span> — training,
              mentoring, and connecting them to real, dignified work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-sand py-24">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-rust">What we do</span>
            <h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-medium text-savanna">
              Six ways we close the gap between education and work.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-savanna/10 bg-savanna/10 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((f, i) => (
              <Reveal key={f.n} delay={i * 0.06} y={16}>
                <Link
                  href={f.href}
                  className="group flex h-full flex-col justify-between bg-sand-light p-8 transition-colors hover:bg-savanna"
                >
                  <div>
                    <span className="font-mono text-xs text-rust group-hover:text-amber">
                      {f.n}
                    </span>
                    <h3 className="mt-4 font-display text-xl text-savanna group-hover:text-sand-light">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-savanna/70 group-hover:text-sand-light/75">
                      {f.desc}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-savanna group-hover:text-amber">
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
            <span className="eyebrow text-rust">The pathway</span>
            <h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-medium text-savanna">
              One route. Four stages. A dignified job at the end of it.
            </h2>
          </Reveal>
          <div className="mt-16">
            <Pathway />
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="bg-savanna py-24">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-amber">By the numbers</span>
            <h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-medium text-sand-light">
              A shared commitment to Kenya&rsquo;s young people.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-10 rounded-2xl bg-sand-light p-10 sm:grid-cols-4 sm:p-14">
            <Reveal delay={0}><StatCounter value={1200} suffix="+" label="Young people trained" /></Reveal>
            <Reveal delay={0.08}><StatCounter value={70} suffix="%" label="Programme participants who are young women" /></Reveal>
            <Reveal delay={0.16}><StatCounter value={4} label="Counties with active programmes" /></Reveal>
            <Reveal delay={0.24}><StatCounter value={35} suffix="+" label="School & employer partners" /></Reveal>
          </div>
          <p className="mt-4 text-xs text-sand-light/50">
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
            <p className="text-balance font-display text-3xl font-medium leading-snug text-savanna sm:text-4xl">
              The mentorship programme didn&rsquo;t just teach me a skill — it
              taught me how to walk into a room and believe I belonged there.
            </p>
            <p className="mt-8 eyebrow text-savanna/60">
              [Name] · Programme Graduate, [County]
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-sand-light py-24">
        <div className="container-page">
          <Reveal className="grid grid-cols-1 items-center gap-10 rounded-[2rem] bg-savanna px-8 py-14 sm:px-14 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-balance font-display text-3xl font-medium leading-tight text-sand-light sm:text-4xl">
                Your organisation can help open the next door.
              </h2>
              <p className="mt-4 max-w-md text-sand-light/75">
                Whether you&rsquo;re a school, an employer, or a development
                partner — there&rsquo;s a way to work with us.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                href="/get-involved"
                className="rounded-full bg-amber px-6 py-3.5 text-center font-body text-sm font-semibold text-savanna transition-colors hover:bg-sand-light"
              >
                Partner with us
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-sand-light/30 px-6 py-3.5 text-center font-body text-sm font-semibold text-sand-light transition-colors hover:border-amber hover:text-amber"
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
