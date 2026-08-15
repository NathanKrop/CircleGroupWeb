import Image from "next/image";
import Reveal from "@/components/Reveal";

const team = [
  { name: "[Name]", role: "Founder / Executive Director", image: "/img/lux/pexels-lara-jameson-8899031.jpg" },
  { name: "[Name]", role: "Programmes Lead", image: "/img/lux/pexels-august-de-richelieu-4427622.jpg" },
  { name: "[Name]", role: "Mentorship Coordinator", image: "/img/lux/pexels-max-fischer-5212318.jpg" },
  { name: "[Name]", role: "Research &amp; MERL Lead", image: "/img/lux/pexels-vlada-karpovich-4668360.jpg" },
];

export default function About() {
  return (
    <>
      <section className="bg-sand-light pb-20 pt-16 md:pt-24">
        <div className="container-page max-w-4xl">
          <Reveal>
            <span className="eyebrow text-rust">About Circle Group</span>
            <h1 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.05] text-savanna sm:text-6xl">
              Built on the belief that talent is everywhere — opportunity isn&rsquo;t.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-savanna/80">
              Circle Group works to create practical pathways from education to
              meaningful work. We equip young people with the life skills,
              professional knowledge, networks, mentorship, and career
              preparation they need to pursue employment, entrepreneurship, and
              long-term economic opportunity — with a strong focus on young
              women in underserved communities.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-savanna py-20">
        <div className="container-page grid grid-cols-1 gap-10 md:grid-cols-3">
          {[
            {
              t: "Our approach",
              d: "Training, mentorship, research and partnerships, woven together rather than run as separate programmes — each one sharpens the other.",
            },
            {
              t: "Our focus",
              d: "Young women from underserved communities face the steepest barriers to work. We design every programme with that gap in mind.",
            },
            {
              t: "Our reach",
              d: "We partner with schools, youth associations, employers, and development organisations to connect trained young people to real opportunity — locally and globally.",
            },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.1}>
              <span className="font-mono text-xs text-amber">0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl text-sand-light">{b.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-light/70">{b.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-rust">The loop</span>
            <h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-medium text-savanna">
              Training. Mentorship. Research. Partnerships.
            </h2>
            <p className="mt-5 max-w-2xl text-savanna/75">
              These four aren&rsquo;t separate programmes running in parallel —
              they feed each other. Research tells us where the gaps are.
              Training and mentorship close them. Partnerships turn a trained
              young person into an employed one. And what we learn along the
              way goes back into research.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-light py-24">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-rust">Our team</span>
            <h2 className="mt-4 font-display text-4xl font-medium text-savanna">
              The people behind the programmes.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-savanna/10">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-display text-lg text-savanna">{m.name}</p>
                <p className="mt-0.5 text-xs uppercase tracking-wide text-savanna/60">
                  {m.role}
                </p>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-savanna/50">
            [Placeholder team — confirm names, roles, bios and photos with Circle Group]
          </p>
        </div>
      </section>
    </>
  );
}
