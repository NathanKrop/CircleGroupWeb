import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";

type Story = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  readTime: number;
  author: string;
  date: string;
};

const stories: Story[] = [
  {
    slug: "mentorship-to-full-time-offer",
    tag: "Mentorship",
    title: "How a mentorship match turned into a full-time offer",
    excerpt:
      "A Nairobi mentor pair spent eight months on interview prep, portfolio work, and one hard conversation about salary negotiation.",
    content: [
      "When Faith joined Circle Group's mentorship programme, she had a degree, a portfolio, and a wall of rejection emails. Her mentor, a hiring manager at a Nairobi tech company, didn't just review her CV — they rebuilt it together, line by line.",
      "Over eight months, they met every two weeks. They practised interviews, refined her portfolio, and had one hard conversation about salary negotiation that Faith says changed how she saw her own worth.",
      "In month seven, her mentor's company opened an entry-level role. Faith applied, interviewed, and got the offer. She's now a year into the role and mentors two Circle Group participants herself.",
    ],
    image: "/img/new/photo_5_2026-03-03_11-10-37.jpg",
    readTime: 4,
    author: "[Author Name]",
    date: "[Date]",
  },
  {
    slug: "side-hustle-to-registered-business",
    tag: "Entrepreneurship",
    title: "From side hustle to registered business",
    excerpt:
      "A Circle Group graduate formalised her tailoring business after our entrepreneurship cohort helped her price her work properly for the first time.",
    content: [
      "Wanjiku had been tailoring from her living room for three years. She had loyal customers, but no pricing structure, no records, and no idea whether she was actually making money.",
      "Through Circle Group's entrepreneurship cohort, she learned to price her work properly, track her cash flow, and separate her business and personal finances. She also joined a peer network of young entrepreneurs who held each other accountable.",
      "Within six months, Wanjiku had registered her business, hired her first assistant, and moved into a small shop. She now employs two young women from her community.",
    ],
    image: "/img/new/photo_8_2026-03-03_11-10-37.jpg",
    readTime: 3,
    author: "[Author Name]",
    date: "[Date]",
  },
  {
    slug: "what-300-young-women-told-us",
    tag: "Research",
    title: "What 300 young women told us about the job search",
    excerpt:
      "Early findings from our latest community research round on barriers young women face applying for entry-level roles.",
    content: [
      "We spoke with 300 young women across four counties about their experience searching for entry-level work. The findings confirm what we've long suspected: the barriers are rarely about capability.",
      "The most common barriers were lack of professional networks, limited access to interview practice, and the cost of transport to interviews and workplaces. Many participants also described feeling underprepared for workplace culture after years in school.",
      "These findings are already shaping our career readiness curriculum — we've added more mock interviews, partnered with employers to host practice sessions, and are exploring transport support for interview days.",
    ],
    image: "/img/new/photo_12_2026-03-03_11-10-37.jpg",
    readTime: 5,
    author: "[Author Name]",
    date: "[Date]",
  },
];

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export default function StoryDetail({ params }: { params: { slug: string } }) {
  const story = stories.find((s) => s.slug === params.slug);
  if (!story) notFound();

  return (
    <>
      <section className="dark-grid pb-12 pt-16 md:pt-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <Link href="/stories" className="eyebrow text-amber hover:text-sand-light">
              ← All stories
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-amber px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-savanna">
                {story.tag}
              </span>
              <span className="text-xs text-sand-light/50">
                {story.readTime} min read · {story.date}
              </span>
            </div>
            <h1 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.1] text-sand-light sm:text-5xl">
              {story.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-sand-light/80">
              {story.excerpt}
            </p>
            <p className="mt-4 text-sm text-sand-light/60">By {story.author}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand pb-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-12 space-y-6">
            {story.content.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-lg leading-relaxed text-savanna/80">{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="rounded-2xl bg-savanna p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl text-sand-light">
                Want to be part of stories like this?
              </h2>
              <p className="mt-3 text-sand-light/70">
                Partner with us, mentor a young person, or apply to a programme.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/get-involved"
                  className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-savanna transition-colors hover:bg-sand-light"
                >
                  Get involved
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-sand-light/30 px-6 py-3 text-sm font-semibold text-sand-light transition-colors hover:border-amber hover:text-amber"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}