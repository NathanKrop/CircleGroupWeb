import Image from "next/image";
import Reveal from "@/components/Reveal";

const stories = [
  {
    tag: "Mentorship",
    title: "How a mentorship match turned into a full-time offer",
    excerpt:
      "A Nairobi mentor pair spent eight months on interview prep, portfolio work, and one hard conversation about salary negotiation.",
    image: "/img/new/photo_5_2026-03-03_11-10-37.jpg",
  },
  {
    tag: "Entrepreneurship",
    title: "From side hustle to registered business",
    excerpt:
      "A Circle Group graduate formalised her tailoring business after our entrepreneurship cohort helped her price her work properly for the first time.",
    image: "/img/new/photo_8_2026-03-03_11-10-37.jpg",
  },
  {
    tag: "Research",
    title: "What 300 young women told us about the job search",
    excerpt:
      "Early findings from our latest community research round on barriers young women face applying for entry-level roles.",
    image: "/img/new/photo_12_2026-03-03_11-10-37.jpg",
  },
];

export default function Stories() {
  return (
    <>
      <section className="bg-sand-light pb-16 pt-16 md:pt-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <span className="eyebrow text-rust">Stories</span>
            <h1 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.05] text-savanna sm:text-6xl">
              Stories from the field.
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-savanna/80">
              [Placeholder stories — replace with real participant, mentor, and
              partner stories once content and permissions are confirmed.]
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand pb-24">
        <div className="container-page grid grid-cols-1 gap-8 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-savanna/10 bg-sand-light overflow-hidden">
                <div className="relative aspect-[4/3] w-full bg-savanna/10">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <span className="eyebrow text-rust">{s.tag}</span>
                  <h2 className="mt-3 font-display text-xl leading-snug text-savanna">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-savanna/70">
                    {s.excerpt}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
