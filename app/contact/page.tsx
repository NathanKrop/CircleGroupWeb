import ContactForm from "@/components/ContactForm";

const linkedinUrl = "https://www.linkedin.com/company/circle-group-limited/";
const instagramUrl = "https://www.instagram.com/circle__group?stkn=aGw2Zjk4NmloNjg=";

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2c1.1.4 2.3.6 3.6.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.6 21 3 14.4 3 6.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.3.2 2.5.6 3.6a1 1 0 0 1-.2 1L6.6 10.8Z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9.2h3.6v11.3H3.4V9.2Zm5.8 0h3.4v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v6.1H17v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.5H9.2V9.2Z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" className="fill-current stroke-none" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-20 text-white md:py-28">
        <div className="container-page max-w-3xl">
          <span className="eyebrow text-amber">Contact Us</span>
          <h1 className="mt-5 font-display text-5xl leading-[.96] sm:text-6xl">
            Let's start a conversation.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Whether you want to partner, fund our work, hire our talent, or simply learn more — we'd love to hear from you. Our team typically responds within 2 business days.
          </p>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="bg-sand-light py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">

          {/* Left — details */}
          <div className="flex flex-col gap-8">

            {/* Direct contact */}
            <div className="rounded-2xl border border-ink/10 bg-white p-8">
              <h2 className="font-display text-2xl text-ink">Get in touch directly</h2>
              <ul className="mt-6 space-y-5">
                <li>
                  <a href="tel:+254181094157" className="group flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber/15 text-forest transition group-hover:bg-amber group-hover:text-white">
                      <IconPhone />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-ink/40">Phone / WhatsApp</p>
                      <p className="mt-1 font-semibold text-ink group-hover:text-leaf">+254 181 094 157</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@circlegroup.co.ke" className="group flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber/15 text-forest transition group-hover:bg-amber group-hover:text-white">
                      <IconEmail />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-ink/40">Email</p>
                      <p className="mt-1 font-semibold text-ink group-hover:text-leaf">info@circlegroup.co.ke</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber/15 text-forest">
                      <IconLocation />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-ink/40">Location</p>
                      <p className="mt-1 font-semibold text-ink">Nairobi, Kenya</p>
                      <p className="mt-0.5 text-sm text-ink/60">Working across multiple counties nationwide</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="rounded-2xl border border-ink/10 bg-white p-8">
              <h2 className="font-display text-2xl text-ink">Follow us</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">Stay updated on our programmes, stories and opportunities.</p>
              <div className="mt-6 flex flex-col gap-3">
                <a href={linkedinUrl} target="_blank" rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-ink/10 p-4 transition hover:border-forest hover:bg-forest hover:text-white">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#0077b5]/10 text-[#0077b5] transition group-hover:bg-white/20 group-hover:text-white">
                    <IconLinkedIn />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink transition group-hover:text-white">LinkedIn</p>
                    <p className="text-xs text-ink/50 transition group-hover:text-white/70">Circle Group Limited</p>
                  </div>
                  <span className="ml-auto text-ink/30 transition group-hover:text-white/60">→</span>
                </a>
                <a href={instagramUrl} target="_blank" rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-ink/10 p-4 transition hover:border-forest hover:bg-forest hover:text-white">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-pink-50 text-pink-500 transition group-hover:bg-white/20 group-hover:text-white">
                    <IconInstagram />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink transition group-hover:text-white">Instagram</p>
                    <p className="text-xs text-ink/50 transition group-hover:text-white/70">@circle__group</p>
                  </div>
                  <span className="ml-auto text-ink/30 transition group-hover:text-white/60">→</span>
                </a>
              </div>
            </div>

            {/* Office hours */}
            <div className="rounded-2xl border border-ink/10 bg-white p-8">
              <h2 className="font-display text-2xl text-ink">Office hours</h2>
              <ul className="mt-5 space-y-2 text-sm text-ink/70">
                <li className="flex justify-between border-b border-ink/8 pb-2">
                  <span className="font-medium text-ink">Monday – Friday</span>
                  <span>8:00 am – 5:00 pm EAT</span>
                </li>
                <li className="flex justify-between border-b border-ink/8 pb-2">
                  <span className="font-medium text-ink">Saturday</span>
                  <span>By appointment</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium text-ink">Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-[2rem] overflow-hidden bg-white shadow-soft border border-ink/8">
            <div className="bg-forest px-8 py-8 sm:px-10">
              <span className="eyebrow text-amber">Send a message</span>
              <h2 className="mt-3 font-display text-3xl leading-tight text-white">How can we help you?</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">Fill in the form and the right person on our team will get back to you.</p>
            </div>
            <div className="px-8 py-8 sm:px-10">
              <ContactForm
                formType="contact"
                fields={["name", "org", "email", "phone", "interest", "message"]}
                submitLabel="Send message"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-amber/20 py-14">
        <div className="container-page flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-3xl text-ink">Ready to work together?</h2>
            <p className="mt-2 text-sm text-ink/60">Explore all the ways you can partner with Circle Group.</p>
          </div>
          <a href="/work-with-us" className="flex-shrink-0 rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-leaf">
            Work with us →
          </a>
        </div>
      </section>
    </>
  );
}
