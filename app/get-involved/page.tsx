import Image from "next/image";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export default function GetInvolved() {
  return (
    <>
      <section className="bg-sand-light pb-16 pt-16 md:pt-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <span className="eyebrow text-rust">Get Involved</span>
            <h1 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.05] text-savanna sm:text-6xl">
              There&rsquo;s a way for you to help.
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-savanna/80">
              Whether you want to partner institutionally, mentor a young
              person directly, or apply to a programme yourself — pick the
              path below.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="partner" className="bg-sand py-16">
        <div className="container-page grid grid-cols-1 gap-14 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/img/rays/photo_2026-05-19_13-57-27.jpg"
                alt="Partnership opportunity"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow text-rust">For organisations</span>
            <h2 className="mt-3 font-display text-3xl text-savanna">Partner with us</h2>
            <p className="mt-4 max-w-md text-savanna/75">
              Schools, employers, and development organisations — tell us what
              you&rsquo;re looking for and we&rsquo;ll follow up within a few
              working days.
            </p>
            <div className="mt-8">
              <ContactForm fields={["name", "org", "email", "phone", "message"]} submitLabel="Submit partnership enquiry" />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="mentor" className="bg-sand-light py-16">
        <div className="container-page grid grid-cols-1 gap-14 md:grid-cols-2">
          <Reveal>
            <span className="eyebrow text-rust">For professionals</span>
            <h2 className="mt-3 font-display text-3xl text-savanna">Become a mentor</h2>
            <p className="mt-4 max-w-md text-savanna/75">
              Mentors commit to regular check-ins with a matched participant.
              No formal mentoring experience needed — just consistency and
              honesty.
            </p>
            <div className="mt-8">
              <ContactForm fields={["name", "email", "phone", "message"]} submitLabel="Apply to mentor" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/img/rays/photo_2026-05-19_13-57-30.jpg"
                alt="Mentorship opportunity"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="apply" className="bg-sand py-16">
        <div className="container-page grid grid-cols-1 gap-14 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/img/rays/photo_2026-05-19_13-57-34.jpg"
                alt="Youth programme opportunity"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow text-rust">For young people</span>
            <h2 className="mt-3 font-display text-3xl text-savanna">Apply to a programme</h2>
            <p className="mt-4 max-w-md text-savanna/75">
              Interested in Life Skills Training, Career Readiness, or
              Entrepreneurship Support? Send your details and our team will
              reach out about the next intake.
            </p>
            <div className="mt-8">
              <ContactForm fields={["name", "email", "phone", "message"]} submitLabel="Submit application interest" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
