import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const segments = [
  {
    title: "Schools & Institutions",
    desc: "Bring life skills, career readiness, and safeguarding training directly to your students and staff.",
    cta: "Bring training to your school",
  },
  {
    title: "Employers & Workforce Partners",
    desc: "Hire from a pipeline of trained, mentored, workplace-ready young people — and shape the curriculum that prepares them.",
    cta: "Hire our graduates",
  },
  {
    title: "Development Organisations",
    desc: "Co-design programmes, contribute to research, and extend your youth-employment strategy through our community reach.",
    cta: "Explore a partnership",
  },
  {
    title: "Communities",
    desc: "Local leaders, parents, and community groups shape how our programmes actually work on the ground.",
    cta: "Get involved locally",
  },
];

export default function Partners() {
  return (
    <>
      <section className="dark-grid pb-16 pt-16 md:pt-24">
        <div className="container-page max-w-4xl">
          <div className="grid grid-cols-1 gap-14 items-center md:grid-cols-2">
            <Reveal>
              <span className="eyebrow text-amber">Who We Work With</span>
              <h1 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.05] text-sand-light sm:text-6xl">
                Nothing here happens alone.
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-sand-light/80">
                Circle Group collaborates with schools, youth associations,
                employers, development organisations, and communities to
                connect trained young people to real-world opportunity.
              </p>
            </Reveal>
            <Reveal delay={0.1} y={40}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/img/lux/pexels-august-de-richelieu-4427622.jpg"
                  alt="Circle Group partners collaborating"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sand pb-24">
        <div className="container-page grid grid-cols-1 gap-8 md:grid-cols-2">
          {segments.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-savanna/10 bg-sand-light p-9">
                <div>
                  <h2 className="font-display text-2xl text-savanna">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-savanna/70">{s.desc}</p>
                </div>
                <Link
                  href="/get-involved"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-savanna px-5 py-2.5 text-sm font-semibold text-sand-light transition-colors hover:bg-rust"
                >
                  {s.cta}
                  <span>→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-savanna py-20">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-amber">Our partners</span>
            <h2 className="mt-4 font-display text-3xl text-sand-light">
              The work is stronger when we build it together.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand-light/70">
              Partner names and logos will be added here once publication permissions are confirmed.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
