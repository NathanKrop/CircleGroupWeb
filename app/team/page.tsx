import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const team = [
  { name: "Rose Njenga", image: "/img/new/photo_90_2026-03-03_11-10-37.jpg" },
  { name: "Stellah Serem", image: "/img/new/photo_80_2026-03-03_11-10-37.jpg" },
  { name: "Asmahan Pogal", image: "/img/new/photo_75_2026-03-03_11-10-37.jpg" },
  { name: "Naom Oganga", image: "/img/new/photo_70_2026-03-03_11-10-37.jpg" },
  { name: "Lidemta Kawira", image: "/img/new/photo_65_2026-03-03_11-10-37.jpg" },
];

export default function Team() {
  return (
    <>
      <section className="dark-grid overflow-hidden py-20 md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-[1.15fr_.85fr] md:items-end">
          <Reveal>
            <span className="eyebrow text-amber">Circle Group Foundation</span>
            <h1 className="mt-5 max-w-3xl text-balance font-display text-5xl font-medium leading-[.98] text-sand-light sm:text-7xl">
              Built by people who believe in what young people can become.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-md border-l border-amber pl-6 text-lg leading-relaxed text-sand-light/75">
              We bring lived experience, practical expertise, and a shared commitment to creating pathways from learning to meaningful work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-savanna pb-24">
        <div className="container-page">
          <div className="grid grid-cols-1 border-t border-sand-light/15 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06} y={18} className="border-b border-sand-light/15 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r">
                <article className="group relative aspect-[4/5] overflow-hidden bg-savanna-light">
                  <Image src={member.image} alt={`Portrait placeholder for ${member.name}`} fill className="object-cover saturate-[.8] transition duration-700 group-hover:scale-105 group-hover:saturate-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-savanna via-savanna/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="eyebrow text-amber">Circle Group team</span>
                    <h2 className="mt-3 font-display text-3xl text-sand-light">{member.name}</h2>
                    <p className="mt-2 text-sm text-sand-light/70">Team profile coming soon</p>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.3} y={18} className="border-b border-sand-light/15">
              <Link href="/contact" className="flex aspect-[4/5] flex-col justify-end bg-amber p-7 text-savanna transition hover:bg-sand-light">
                <span className="eyebrow">Work with us</span>
                <span className="mt-3 font-display text-3xl leading-tight">Want to build a pathway together?</span>
                <span className="mt-6 text-sm font-semibold">Get in touch →</span>
              </Link>
            </Reveal>
          </div>
          <p className="mt-6 text-xs text-sand-light/45">Photography is currently representative. Team biographies and portraits can be replaced without changing the layout.</p>
        </div>
      </section>
    </>
  );
}
