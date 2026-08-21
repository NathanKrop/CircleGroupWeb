import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";

type Program = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  whoFor: string;
  steps: { title: string; desc: string }[];
  outcomes: string[];
};

const programs: Program[] = [
  {
    slug: "life-skills-training",
    title: "Life Skills Training",
    audience: "Young people, ages 15–24",
    summary:
      "The foundation every other Circle Group programme builds on — confidence, communication, financial literacy, and digital skills delivered in cohorts close to home.",
    whoFor:
      "In-school and out-of-school young people, with priority given to young women in underserved communities.",
    steps: [
      { title: "Enrol in a cohort", desc: "Participants join a local cohort run through a partner school or community organisation." },
      { title: "Core curriculum", desc: "Weekly sessions covering communication, financial literacy, digital basics, and self-confidence." },
      { title: "Applied practice", desc: "Peer exercises and real-world scenarios that put each skill into practice immediately." },
      { title: "Graduate & progress", desc: "Graduates move into Career Readiness or Entrepreneurship Support based on their goals." },
    ],
    outcomes: [
      "Stronger communication and workplace confidence",
      "Basic financial literacy and budgeting habits",
      "Digital literacy fundamentals",
      "A clear next step in the pathway",
    ],
  },
  {
    slug: "career-readiness",
    title: "Career Readiness",
    audience: "Programme graduates & final-year students",
    summary:
      "CV clinics, interview practice, and workplace-readiness coaching that gets young people through the door — and keeps them there once they're in.",
    whoFor: "Life Skills Training graduates and final-year students at partner institutions.",
    steps: [
      { title: "CV & portfolio clinic", desc: "One-on-one support building a CV and portfolio that reflects real skills." },
      { title: "Mock interviews", desc: "Practice interviews with feedback from working professionals." },
      { title: "Workplace readiness", desc: "Coaching on workplace norms, communication, and first-90-days expectations." },
      { title: "Employer connection", desc: "Introductions to partner employers actively hiring entry-level talent." },
    ],
    outcomes: [
      "Interview-ready CV and portfolio",
      "Confidence walking into interviews",
      "Direct connections to hiring partners",
    ],
  },
  {
    slug: "mentorship",
    title: "Mentorship",
    audience: "Young women in underserved communities",
    summary:
      "Structured 1:1 mentorship pairing participants with professionals who open doors and stay in touch long after formal training ends.",
    whoFor: "Young women progressing through Circle Group's programmes who want a sustained professional relationship.",
    steps: [
      { title: "Matching", desc: "Participants are matched with a mentor based on interests and goals." },
      { title: "Structured check-ins", desc: "Regular guided sessions covering goals, obstacles, and next steps." },
      { title: "Network access", desc: "Mentors open their professional networks to introduce real opportunities." },
      { title: "Ongoing relationship", desc: "Many mentor pairs continue well beyond the formal programme period." },
    ],
    outcomes: [
      "A sustained professional relationship",
      "Access to networks otherwise out of reach",
      "Higher confidence pursuing ambitious goals",
    ],
  },
  {
    slug: "entrepreneurship",
    title: "Entrepreneurship Support",
    audience: "Aspiring young business owners",
    summary:
      "Business fundamentals, seed guidance, and peer networks for young people who want to build their own income rather than wait for an employer.",
    whoFor: "Young people with an existing idea, side hustle, or strong entrepreneurial interest.",
    steps: [
      { title: "Business fundamentals", desc: "Core training in pricing, cash flow, and basic bookkeeping." },
      { title: "Idea validation", desc: "Structured feedback from mentors and peers before committing resources." },
      { title: "Seed guidance", desc: "Support navigating micro-finance, savings groups, and early funding options." },
      { title: "Peer network", desc: "Ongoing peer group for accountability and shared problem-solving." },
    ],
    outcomes: [
      "A validated, workable business plan",
      "Practical financial management skills",
      "A peer network for ongoing support",
    ],
  },
  {
    slug: "safeguarding",
    title: "Safeguarding Systems & Training",
    audience: "Schools & partner organisations",
    summary:
      "Safeguarding policy design and staff training for institutions working directly with children and young people.",
    whoFor: "Schools, youth organisations, and development partners that engage minors or vulnerable young people.",
    steps: [
      { title: "Safeguarding audit", desc: "Review of existing policy, practice, and reporting channels." },
      { title: "Policy design", desc: "Drafting or strengthening a safeguarding policy fit for the institution's context." },
      { title: "Staff training", desc: "Practical training for teachers and staff on recognising and responding to risk." },
      { title: "Ongoing support", desc: "Periodic review and refresher training as the institution grows." },
    ],
    outcomes: [
      "A working safeguarding policy",
      "Trained staff who know how to respond",
      "A safer environment for young people",
    ],
  },
  {
    slug: "school-institutional-training",
    title: "Training for Schools & Institutions",
    audience: "Teachers, counsellors & administrators",
    summary:
      "Capacity-building for the adults supporting young people day to day — from career guidance to safeguarding practice.",
    whoFor: "Teachers, career counsellors, and administrators at partner schools and institutions.",
    steps: [
      { title: "Needs assessment", desc: "Understanding the institution's specific gaps and goals." },
      { title: "Custom curriculum", desc: "Training built around the institution's actual context and constraints." },
      { title: "Delivery", desc: "On-site or virtual training sessions with practical, usable takeaways." },
      { title: "Follow-up support", desc: "Check-ins to see what's working and adjust as needed." },
    ],
    outcomes: [
      "Staff equipped to support career readiness",
      "Stronger internal guidance systems",
      "A long-term partnership with Circle Group",
    ],
  },
];

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default function ProgramDetail({ params }: { params: { slug: string } }) {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) notFound();

  return (
    <>
      <section className="dark-grid pb-16 pt-16 md:pt-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <Link href="/programs" className="eyebrow text-amber hover:text-sand-light">
              ← Our Work
            </Link>
            <span className="mt-6 block eyebrow text-sand-light/60">{program.audience}</span>
            <h1 className="mt-3 text-balance font-display text-5xl font-medium leading-[1.05] text-sand-light sm:text-6xl">
              {program.title}
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-sand-light/80">{program.summary}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="container-page grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <span className="eyebrow text-rust">Who it&rsquo;s for</span>
            <p className="mt-4 font-display text-2xl leading-snug text-savanna">
              {program.whoFor}
            </p>
            <div className="mt-10">
              <span className="eyebrow text-rust">Outcomes</span>
              <ul className="mt-4 space-y-3">
                {program.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-savanna/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div>
            <span className="eyebrow text-rust">How it works</span>
            <ol className="mt-6 space-y-8">
              {program.steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="flex gap-6">
                    <span className="font-mono text-sm text-amber">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-xl text-savanna">{s.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-savanna/70">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-savanna py-20">
        <div className="container-page flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-savanna-light p-10 sm:flex-row sm:items-center sm:p-14">
          <div>
            <h2 className="font-display text-3xl text-sand-light">
              Bring {program.title} to your community.
            </h2>
            <p className="mt-2 text-sand-light/70">
              Schools, employers, and organisations can partner with us to run this programme.
            </p>
          </div>
          <Link
            href="/get-involved"
            className="shrink-0 rounded-full bg-amber px-7 py-3.5 text-center font-body text-sm font-semibold text-savanna transition-colors hover:bg-sand-light"
          >
            Get involved
          </Link>
        </div>
      </section>
    </>
  );
}
