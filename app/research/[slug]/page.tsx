import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";

type Research = {
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

const researchItems: Research[] = [
  {
    slug: "barriers-to-entry-level-employment",
    tag: "Research Report",
    title: "Barriers to entry-level employment for young women in Kenya",
    excerpt:
      "A survey of 300 young women across four counties reveals that the biggest barriers to entry-level work are rarely about capability.",
    content: [
      "This report presents findings from a survey of 300 young women aged 18–30 across Nairobi, Mombasa, Kisumu, and Nakuru. Participants were asked about their experiences searching for entry-level employment over the past 12 months.",
      "The most commonly cited barriers were lack of professional networks (cited by 78% of respondents), limited access to interview practice (71%), and the cost of transport to interviews and workplaces (64%).",
      "Notably, 82% of respondents said they felt qualified for the roles they applied for, yet only 23% received interview invitations. This gap between qualification and opportunity points to systemic barriers rather than individual capability.",
      "The findings are already shaping Circle Group's career readiness curriculum. We have added more mock interview sessions, partnered with employers to host practice sessions, and are exploring transport support for interview days.",
    ],
    image: "/img/new/photo_12_2026-03-03_11-10-37.jpg",
    readTime: 8,
    author: "Circle Group Research Team",
    date: "March 2026",
  },
  {
    slug: "mentorship-impact-study",
    tag: "Impact Study",
    title: "The impact of structured mentorship on employment outcomes",
    excerpt:
      "Participants in our structured mentorship programme were 2.4x more likely to secure employment within 12 months than non-participants.",
    content: [
      "This impact study tracked 150 participants in Circle Group's structured mentorship programme over 12 months, comparing their outcomes against a control group of 150 similar young people not enrolled in the programme.",
      "The results were striking: 61% of mentorship participants secured employment within 12 months, compared to 25% of the control group — a 2.4x improvement.",
      "Participants also reported higher confidence in interviews, better salary negotiation outcomes, and stronger professional networks. The average starting salary for employed participants was 18% higher than the control group's average.",
      "The study concludes that structured, long-term mentorship — with regular check-ins, clear goals, and accountability — is one of the most effective interventions for improving employment outcomes for young people.",
    ],
    image: "/img/new/photo_5_2026-03-03_11-10-37.jpg",
    readTime: 10,
    author: "Circle Group Research Team",
    date: "January 2026",
  },
  {
    slug: "entrepreneurship-cohort-findings",
    tag: "Programme Evaluation",
    title: "What we learned from our first entrepreneurship cohort",
    excerpt:
      "Early findings from our entrepreneurship programme show that structured business training leads to measurable improvements in revenue and business registration.",
    content: [
      "Our first entrepreneurship cohort enrolled 45 young women running informal businesses. Over six months, participants received training in pricing, cash flow management, and business registration.",
      "By the end of the cohort, 68% of participants had registered their businesses, up from 12% at the start. Average monthly revenue increased by 41%.",
      "Participants also reported significant gains in confidence: 89% said they now feel confident pricing their work, and 76% said they have a clearer understanding of their business finances.",
      "These findings validate our approach of combining practical business skills with peer accountability. We are now scaling the programme to reach 200 young women in 2026.",
    ],
    image: "/img/new/photo_8_2026-03-03_11-10-37.jpg",
    readTime: 7,
    author: "Circle Group Research Team",
    date: "November 2025",
  },
];

export function generateStaticParams() {
  return researchItems.map((r) => ({ slug: r.slug }));
}

export default function ResearchDetail({ params }: { params: { slug: string } }) {
  const item = researchItems.find((r) => r.slug === params.slug);
  if (!item) notFound();

  return (
    <>
      <section className="page-intro pb-12 pt-16 md:pt-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <Link href="/research" className="eyebrow text-rust hover:text-savanna">
              ← All research
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-amber px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-savanna">
                {item.tag}
              </span>
              <span className="text-xs text-savanna/50">
                {item.readTime} min read · {item.date}
              </span>
            </div>
            <h1 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.1] text-savanna sm:text-5xl">
              {item.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-savanna/80">
              {item.excerpt}
            </p>
            <p className="mt-4 text-sm text-savanna/60">By {item.author}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand pb-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-12 space-y-6">
            {item.content.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-lg leading-relaxed text-savanna/80">{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="rounded-2xl bg-savanna p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl text-sand-light">
                Want to access the full report?
              </h2>
              <p className="mt-3 text-sand-light/70">
                Contact us to request the full research report or discuss partnership opportunities.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-savanna transition-colors hover:bg-sand-light"
                >
                  Request the report
                </Link>
                <Link
                  href="/get-involved"
                  className="rounded-full border border-sand-light/30 px-6 py-3 text-sm font-semibold text-sand-light transition-colors hover:border-amber hover:text-amber"
                >
                  Get involved
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}