import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const principles = [
  ["Transparent stewardship", "Every contribution is tracked, reported and audited. You will always know where your money went."],
  ["Direct impact", "Funds go directly to participants — scholarships, seed capital, training costs and community grants."],
  ["Dignity-first", "We never use participant stories or images without consent. Your donation supports people, not narratives."],
];

export default function Donate() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-20 text-white md:py-28">
        <div className="container-page max-w-4xl">
          <span className="eyebrow text-amber">Support Our Work</span>
          <h1 className="mt-5 font-display text-5xl leading-[.96] sm:text-7xl">
            Every contribution builds a pathway.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80">
            Circle Group works with young women in rural, marginalised and underserved communities across Kenya. Your donation directly funds the training, readiness support and capital that turns potential into sustainable income.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#give" className="rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-amber-light">
              Make a donation
            </a>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-amber/20 py-20 md:py-28">
        <div className="container-page">
          <span className="eyebrow text-forest">How we handle your gift</span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            Responsible stewardship, always.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map(([title, text]) => (
              <article key={title} className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="font-display text-2xl text-forest">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Donate form */}
      <section id="give" className="scroll-mt-24 bg-forest py-20 text-white md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="eyebrow text-amber">Give today</span>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Ready to make a difference?
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
              Fill in the form and our team will reach out with bank transfer details, M-Pesa instructions, or to discuss a larger gift or recurring contribution.
            </p>
            <div className="mt-10 space-y-5 border-t border-white/15 pt-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/50">Bank transfer</p>
                <p className="mt-1 text-sm text-white/80">Details provided on request via email.</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/50">M-Pesa / Mobile money</p>
                <p className="mt-1 text-sm text-white/80">Details provided on request via email.</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/50">Enquiries</p>
                <a href="mailto:info@circlegroup.co.ke" className="mt-1 block text-sm text-amber hover:underline">
                  info@circlegroup.co.ke
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden bg-white text-ink shadow-soft">
            <div className="bg-sand-light px-8 py-7 sm:px-10">
              <p className="eyebrow text-leaf">Donation enquiry</p>
              <h3 className="mt-2 font-display text-3xl leading-tight">Tell us about your gift.</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">We will respond within 2 business days with payment details.</p>
            </div>
            <div className="h-px bg-ink/8" />
            <div className="px-8 py-8 sm:px-10">
              <ContactForm
                formType="funding"
                fields={["name", "org", "email", "phone", "message"]}
                submitLabel="Send donation enquiry"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other ways to help */}
      <section className="bg-sand-light py-20 md:py-24">
        <div className="container-page text-center">
          <span className="eyebrow text-leaf">Other ways to help</span>
          <h2 className="mt-4 font-display text-4xl text-ink">Not ready to donate? You can still help.</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/work-with-us#industry-partner" className="rounded-full border-2 border-forest px-7 py-3.5 text-sm font-semibold text-forest transition hover:bg-forest hover:text-white">
              Hire our talent
            </Link>
            <Link href="/work-with-us#programs" className="rounded-full border-2 border-forest px-7 py-3.5 text-sm font-semibold text-forest transition hover:bg-forest hover:text-white">
              Partner on a programme
            </Link>
            <Link href="/work-with-us" className="rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-leaf">
              Explore all ways to work with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
