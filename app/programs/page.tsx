import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const programs = [
  {
    slug: "life-skills-training",
    title: "Life Skills Training",
    audience: "Young people, ages 15–24",
    desc: "Confidence, communication, financial literacy, and digital skills — the foundation every other programme builds on.",
  },
  {
    slug: "career-readiness",
    title: "Career Readiness",
    audience: "Programme graduates & final-year students",
    desc: "CV clinics, interview practice, and workplace-readiness coaching that gets young people through the door and keeps them there.",
  },
  {
    slug: "mentorship",
    title: "Mentorship",
    audience: "Young women in underserved communities",
    desc: "Structured 1:1 mentorship pairing participants with professionals who open doors and stay in touch long after training ends.",
  },
  {
    slug: "entrepreneurship",
    title: "Entrepreneurship Support",
    audience: "Aspiring young business owners",
    desc: "Business fundamentals, seed guidance, and peer networks for young people building their own income streams.",
  },
  {
    slug: "safeguarding",
    title: "Safeguarding Systems & Training",
    audience: "Schools & partner organisations",
    desc: "Safeguarding policy design and staff training for institutions working directly with children and young people.",
  },
  {
    slug: "school-institutional-training",
    title: "Training for Schools & Institutions",
    audience: "Teachers, counsellors & administrators",
    desc: "Capacity-building for the adults supporting young people day to day — from career guidance to safeguarding practice.",
  },
];

export default function Programs() {
  return (
    <>
      <section className="dark-grid pb-16 pt-16 md:pt-24">
        <div className="container-page max-w-4xl">
          <div className="grid grid-cols-1 gap-14 items-center md:grid-cols-2">
            <Reveal>
              <span className="eyebrow text-amber">Our Work</span>
              <h1 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.05] text-sand-light sm:text-6xl">
                Six programmes. One pathway.
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-sand-light/80">
                Every programme below exists to move a young person one step
                closer to dignified, sustainable work — and to strengthen the
                schools, employers, and organisations around them.
              </p>
            </Reveal>
            <Reveal delay={0.1} y={40}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/img/lux/pexels-markusspiske-2990617.jpg"
                  alt="Circle Group programmes"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sand pb-24">
        <div className="container-page grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-savanna/10 bg-savanna/10 md:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05} y={16}>
              <Link
                href={`/programs/${p.slug}`}
                className="group flex h-full flex-col justify-between bg-sand-light p-9 transition-colors hover:bg-savanna"
              >
                <div>
                  <span className="eyebrow text-rust group-hover:text-amber">
                    {p.audience}
                  </span>
                  <h2 className="mt-4 font-display text-2xl text-savanna group-hover:text-sand-light">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-savanna/70 group-hover:text-sand-light/75">
                    {p.desc}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-savanna group-hover:text-amber">
                  View programme
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
