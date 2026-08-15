import Image from "next/image";
import Reveal from "@/components/Reveal";

const themes = ["Youth Employment", "Rural Economies", "Women's Empowerment", "Safeguarding"];

const reports = [
  {
    theme: "Youth Employment",
    title: "Barriers to entry-level work for young women in Nairobi",
    date: "[Date]",
  },
  {
    theme: "Rural Economies",
    title: "Skills gaps in county-level informal markets",
    date: "[Date]",
  },
  {
    theme: "Women's Empowerment",
    title: "What mentorship changes, and what it doesn't",
    date: "[Date]",
  },
];

export default function Research() {
  return (
    <>
      <section className="bg-sand-light pb-16 pt-16 md:pt-24">
        <div className="container-page max-w-4xl">
          <div className="grid grid-cols-1 gap-14 items-center md:grid-cols-2">
            <Reveal>
              <span className="eyebrow text-rust">Research &amp; Insights</span>
              <h1 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.05] text-savanna sm:text-6xl">
                What we learn shapes what we build.
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-savanna/80">
                Community-based research on youth employment, rural economies,
                and women&rsquo;s empowerment — feeding directly back into how
                our programmes are designed.
              </p>

              <Reveal delay={0.1}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {themes.map((t) => (
                    <span key={t} className="rounded-full border border-savanna/20 px-4 py-1.5 text-xs font-semibold text-savanna/70">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </Reveal>
            <Reveal delay={0.1} y={40}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/img/lux/pexels-rdne-6257693.jpg"
                  alt="Research and insights"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sand pb-24">
        <div className="container-page divide-y divide-savanna/10 rounded-2xl border border-savanna/10 bg-sand-light">
          {reports.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="eyebrow text-rust">{r.theme}</span>
                  <h2 className="mt-2 font-display text-xl text-savanna">{r.title}</h2>
                </div>
                <span className="font-mono text-xs text-savanna/50">{r.date}</span>
              </div>
            </Reveal>
          ))}
          <div className="p-8 text-sm text-savanna/50">
            [Placeholder research list — replace with real reports once supplied by Circle Group]
          </div>
        </div>
      </section>
    </>
  );
}
