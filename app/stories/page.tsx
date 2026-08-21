import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const stories = [
  {
    slug: "mentorship-to-full-time-offer",
    tag: "Mentorship",
    title: "How a mentorship match turned into a full-time offer",
    excerpt:
      "A Nairobi mentor pair spent eight months on interview prep, portfolio work, and one hard conversation about salary negotiation.",
    image: "/img/new/photo_5_2026-03-03_11-10-37.jpg",
    readTime: 4,
  },
  {
    slug: "side-hustle-to-registered-business",
    tag: "Entrepreneurship",
    title: "From side hustle to registered business",
    excerpt:
      "A Circle Group graduate formalised her tailoring business after our entrepreneurship cohort helped her price her work properly for the first time.",
    image: "/img/new/photo_8_2026-03-03_11-10-37.jpg",
    readTime: 3,
  },
  {
    slug: "what-300-young-women-told-us",
    tag: "Research",
    title: "What 300 young women told us about the job search",
    excerpt:
      "Early findings from our latest community research round on barriers young women face applying for entry-level roles.",
    image: "/img/new/photo_12_2026-03-03_11-10-37.jpg",
    readTime: 5,
  },
];

export default function Stories() {
  return (
    <>
      <section className="dark-grid pb-16 pt-16 md:pt-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <span className="eyebrow text-amber">Stories</span>
            <h1 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.05] text-sand-light sm:text-6xl">
              Stories from the field.
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-sand-light/80">
              Real stories from participants, mentors, and partners — the
              people behind the numbers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand pb-24">
        <div className="container-page grid grid-cols-1 gap-8 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <Link
                href={`/stories/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-savanna/10 bg-sand-light transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-savanna/10">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <span className="eyebrow text-rust">{s.tag}</span>
                    <span className="text-xs text-savanna/40">
                      {s.readTime} min read
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-xl leading-snug text-savanna">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-savanna/70">
                    {s.excerpt}
                  </p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-savanna group-hover:text-rust">
                    Read story
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}