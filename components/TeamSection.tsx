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

export default function TeamSection() {
  return (
    <section id="team" className="bg-sand pb-24 pt-20 md:pt-28">
      <div className="container-page">
        <div className="mb-12 grid gap-8 md:grid-cols-[1.15fr_.85fr] md:items-end">
          <div>
            <span className="eyebrow text-forest">Our people</span>
            <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-6xl">
              Built by people who believe in what young people can become.
            </h2>
          </div>
          <p className="max-w-md border-l border-amber pl-6 text-lg leading-relaxed text-ink/75">
            We bring lived experience, practical expertise, and a shared commitment to creating pathways from learning to meaningful work.
          </p>
        </div>
        <div className="grid grid-cols-1 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06} y={18} className="border-b border-ink/15 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r">
              <article className="group relative aspect-[4/5] overflow-hidden bg-white">
                <Image src={member.image} alt={`Portrait of ${member.name}`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover saturate-[.8] transition duration-700 group-hover:scale-105 group-hover:saturate-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="eyebrow text-white">Circle Group team</span>
                  <h3 className="mt-3 font-display text-3xl text-white">{member.name}</h3>
                  <p className="mt-2 text-sm text-white/80">{member.title}</p>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.3} y={18} className="border-b border-ink/15">
            <Link href="/contact" className="flex aspect-[4/5] flex-col justify-end bg-amber p-7 text-ink transition hover:bg-leaf hover:text-white">
              <span className="eyebrow">Work with us</span>
              <span className="mt-3 font-display text-3xl leading-tight">Want to build a pathway together?</span>
              <span className="mt-6 text-sm font-semibold">Get in touch →</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
