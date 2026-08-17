import Image from "next/image";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="page-intro py-16 md:py-24">
      <div className="container-page grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <span className="eyebrow text-rust">Contact</span>
          <h1 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.05] text-savanna">
            Let&rsquo;s talk.
          </h1>
          <div className="mt-10 space-y-6 text-savanna/80">
            <div>
              <p className="eyebrow text-savanna/50">Email</p>
              <a href="mailto:info@circlegroup.co.ke" className="mt-1 block font-display text-xl text-savanna hover:text-rust">
                info@circlegroup.co.ke
              </a>
            </div>
            <div>
              <p className="eyebrow text-savanna/50">Phone / WhatsApp</p>
              <p className="mt-1 font-display text-xl text-savanna">[Phone — confirm]</p>
            </div>
            <div>
              <p className="eyebrow text-savanna/50">Office</p>
              <p className="mt-1">Nairobi, Kenya<br />[Full address — confirm]</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-2xl border border-savanna/10 overflow-hidden h-96">
            <Image
              src="/img/lux/pexels-lagosfoodbank-6472487.jpg"
              alt="Contact Circle Group"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="bg-sand rounded-2xl p-8 sm:p-10 max-w-sm w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
