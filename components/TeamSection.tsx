import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const team = [
  {
    name: "Rose Njenga",
    title: "Executive Director, Circle Group",
    image: "/img/Team/Rose, Executive Director, Circle Group.jpg",
    members: [
      { name: "Mercy Arita", title: "University Scholarships Officer" },
      { name: "Amina Mohamed", title: "Partnerships Officer" },
      { name: "Oduka Jane", title: "Assistant-Scholarships, Internships and Career Transitions Officer" },
      { name: "Prudence Olesha", title: "Internship & Job Placement Officer" },
      { name: "Leah Wamweru", title: "Budgeting and payment officer" },
    ],
  },
  {
    name: "Stellah Serem",
    title: "Program Manager",
    image: "/img/Team/Stellah Serem - Program Manager.jpg",
    members: [
      { name: "Monica Adogo", title: "Psychologist" },
      { name: "Serah Chepkirui", title: "Safeguarding Assistant" },
      { name: "Stella Kabui", title: "Gender and Safeguarding Intern" },
      { name: "Peter Wambui", title: "MSME Specialist" },
    ],
  },
  {
    name: "Lidemta Ireri",
    title: "Journalizing and MERL Manager",
    image: "/img/Team/Lidemta Ireri - Journalizing and MERL Manager.jpg",
    members: [
      { name: "Pauline Anyona", title: "MERL Officer" },
      { name: "Margaret Kelito", title: "Qualitative Coding Analyst" },
      { name: "Makena Njogu", title: "Qualitative Coding Analyst" },
      { name: "Lilian Nyabicha", title: "Qualitative Coding Analyst" },
      { name: "Josephine Ogaja", title: "Qualitative Coding Analyst" },
      { name: "Brenda Sang", title: "Qualitative Coding Analyst" },
    ],
  },
  {
    name: "Naom Oganga",
    title: "HR Manager",
    image: "/img/Team/Naom Oganga - HR Manager.jpg",
    members: [
      { name: "Sharon Juma-Onderi", title: "HR & Payroll Officer" },
      { name: "Esther Kimanzi", title: "Core Program Coordinator" },
      { name: "Maximine Oluoch", title: "HR Administrative Assistant" },
    ],
  },
  {
    name: "Asmahan Pogal",
    title: "Mentoring Program Manager",
    image: "/img/Team/Asmahan Pogal - Mentoring Program Manager.jpg",
    members: [
      { name: "Wambui Mbuthia", title: "Digital Communication Specialist" },
      { name: "Mumbi Wachira", title: "Mentoring Program Officer" },
    ],
  },
  {
    name: "FINANCE TEAM",
    title: "Finance Department",
    members: [
      { name: "Cynthia Kembene", title: "Finance Manager" },
      { name: "Wendy Anyango", title: "Finance Assistant (Reporting)" },
      { name: "Fiona Nkonge", title: "Procurement Officer" },
      { name: "Norah Ntarangwi", title: "Finance Officer" },
    ],
  },
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
              <details className="group/manager bg-white">
                <summary className="list-none cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-amber [&::-webkit-details-marker]:hidden">
                  <article className={`group relative aspect-[4/5] overflow-hidden ${member.image ? "bg-white" : "bg-forest"}`}>
                    {member.image && <Image src={member.image} alt={`Portrait of ${member.name}`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover saturate-[.8] transition duration-700 group-hover:scale-105 group-hover:saturate-100 group-open/manager:scale-105 group-open/manager:blur-sm" />}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
                    <div className="absolute inset-0 bg-ink/75 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-open/manager:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 p-7 transition-opacity duration-200 group-open/manager:opacity-0">
                      <span className="eyebrow text-white">Circle Group team</span>
                      <h3 className="mt-3 font-display text-3xl text-white">{member.name}</h3>
                      <p className="mt-2 text-sm text-white/80">{member.title}</p>
                      <span className="mt-5 flex items-center justify-between border-t border-white/35 pt-4 text-sm font-semibold text-white">
                        <span>{member.members.length} team members</span>
                        <span aria-hidden="true" className="text-xl font-normal transition-transform group-open/manager:rotate-45">+</span>
                      </span>
                    </div>
                    <div className="absolute inset-0 flex flex-col p-5 opacity-0 transition-opacity duration-300 group-open/manager:opacity-100 sm:p-6">
                      <div className="flex items-end justify-between gap-3 border-b border-white/30 pb-3">
                        <div>
                          <span className="eyebrow text-amber">Department roster</span>
                          <h3 className="mt-1 font-display text-2xl leading-tight text-white">{member.image ? `${member.name.split(" ")[0]}'s team` : member.name}</h3>
                        </div>
                        <span className="shrink-0 pb-0.5 text-xs text-white/75">{member.members.length} people</span>
                      </div>
                      <ul aria-label={member.image ? `Team members reporting to ${member.name}` : `Members of ${member.name}`} className="grid flex-1 grid-cols-2 content-center gap-x-4 gap-y-3 py-4">
                        {member.members.map((teamMember, index) => (
                          <li key={teamMember.name} className="min-w-0 border-l-2 border-amber/80 pl-2">
                            <p className="text-sm font-semibold leading-tight text-white">{teamMember.name}</p>
                            <p className="mt-1 text-xs leading-snug text-white/75">{teamMember.title}</p>
                            <span className="sr-only">Member {index + 1}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </summary>
              </details>
            </Reveal>
          ))}
          <Reveal delay={0.3} y={18} className="border-b border-ink/15">
            <Link href="#contact" className="flex aspect-[4/5] flex-col justify-end bg-amber p-7 text-ink transition hover:bg-leaf hover:text-white">
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
