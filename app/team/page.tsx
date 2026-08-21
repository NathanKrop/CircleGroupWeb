import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const team = [
  { name: "Rose Njenga", title: "Executive Director, Circle Group", image: "/img/Team/Rose, Executive Director, Circle Group.jpg" },
  { name: "Miriam Wambui", title: "Digital Communications Specialist", image: "/img/Team/Miriam Wambui. Digital Communications Specialist.jpg" },
  { name: "Monica Adobo", title: "Psychologist", image: "/img/Team/Monica Adobo. Psychologist.jpg" },
  { name: "Norah Ntarangwi", title: "Finance Officer", image: "/img/Team/Norah Ntarangwi- Finance Officer.jpg" },
  { name: "Jane Oduka", title: "Team member", image: "/img/Team/Jane Oduka, N.A.jpg" },
  { name: "Serah Chepkirui", title: "Safeguarding Assistant", image: "/img/Team/Serah Chepkirui - Safeguarding Assistant.jpg" },
  { name: "Sharon Juma", title: "HT & Payroll Officer", image: "/img/Team/Sharon Juma. HT & Payroll Officer.jpg" },
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
                  <Image src={member.image} alt={`Portrait of ${member.name}`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover saturate-[.8] transition duration-700 group-hover:scale-105 group-hover:saturate-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-savanna via-savanna/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="eyebrow text-amber">Circle Group team</span>
                    <h2 className="mt-3 font-display text-3xl text-sand-light">{member.name}</h2>
                    <p className="mt-2 text-sm text-sand-light/70">{member.title}</p>
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
        </div>
      </section>
    </>
  );
}
