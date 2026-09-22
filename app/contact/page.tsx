import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const contacts = [
  { label: "Email", value: "info@circlegroup.co.ke", href: "mailto:info@circlegroup.co.ke" },
  { label: "Phone / WhatsApp", value: "+254 181 094 157", href: "tel:+254181094157" },
];

export default function Contact() {
  return <>
    <section className="relative overflow-hidden bg-sand-light py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-2 bg-amber" />
      <div className="container-page grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div className="pb-2">
          <span className="eyebrow text-forest">Contact</span>
          <h1 className="mt-5 max-w-md font-display text-5xl font-medium leading-[.98] text-ink sm:text-7xl">Let’s build something that lasts.</h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink/75">Tell us what you are working towards. Our team will respond within a few working days.</p>
          <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {contacts.map((item) => <div key={item.label} className="py-5"><p className="eyebrow text-ink/50">{item.label}</p><a href={item.href} className="mt-2 inline-block font-display text-2xl text-leaf transition-colors hover:text-forest">{item.value}</a></div>)}
            <div className="py-5"><p className="eyebrow text-ink/50">Office</p><p className="mt-2 text-lg text-ink/80">Nairobi, Kenya</p></div>
          </div>
        </div>
        <div className="relative isolate grid overflow-hidden rounded-[2rem] bg-forest shadow-2xl lg:grid-cols-[.68fr_1fr]">
          <div className="relative min-h-64 lg:min-h-full"><Image src="/img/lux/pexels-lagosfoodbank-6472487.jpg" alt="Circle Group team member supporting a community session" fill className="object-cover grayscale" /><div className="absolute inset-0 bg-forest/35" /><p className="absolute bottom-7 left-7 right-7 font-display text-3xl leading-tight text-white">A conversation can be the start of a new pathway.</p></div>
          <div className="bg-[#f4f1e9] p-7 sm:p-10"><span className="eyebrow text-leaf">Send an enquiry</span><h2 className="mt-3 font-display text-3xl text-ink">How can we help?</h2><div className="mt-7"><ContactForm fields={["name", "org", "email", "phone", "message"]} submitLabel="Send enquiry" /></div></div>
        </div>
      </div>
    </section>
  </>;
}
