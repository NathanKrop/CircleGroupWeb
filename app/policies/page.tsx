import Reveal from "@/components/Reveal";

export default function Policies() {
  return (
    <section className="page-intro py-16 md:py-24">
      <div className="container-page max-w-3xl">
        <Reveal>
          <span className="eyebrow text-rust">Policies</span>
          <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] text-savanna">
            Safeguarding &amp; Privacy
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div id="safeguarding" className="mt-14 scroll-mt-24">
            <h2 className="font-display text-2xl text-savanna">Safeguarding Policy</h2>
            <p className="mt-4 leading-relaxed text-savanna/75">
              [Placeholder — insert Circle Group&rsquo;s safeguarding policy
              here. Because our programmes work directly with young people,
              including minors, this section should be reviewed by the client
              before launch and should clearly state reporting channels for
              concerns.]
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div id="privacy" className="mt-14 scroll-mt-24">
            <h2 className="font-display text-2xl text-savanna">Privacy Policy</h2>
            <p className="mt-4 leading-relaxed text-savanna/75">
              [Placeholder — insert Circle Group&rsquo;s privacy policy here,
              covering how data submitted through the contact, partnership,
              mentorship, and application forms is stored and used.]
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-14">
            <h2 className="font-display text-2xl text-savanna">Terms of Use</h2>
            <p className="mt-4 leading-relaxed text-savanna/75">
              [Placeholder — insert terms of use for this website.]
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
