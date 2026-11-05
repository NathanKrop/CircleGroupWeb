import type { ReactNode } from "react";

const privacySections: { title: string; content: ReactNode }[] = [
  {
    title: "About this policy",
    content: (
      <>
        <p>
          This policy explains how Circle Group collects, uses, stores and protects
          personal information when you visit circlegroupke.org, contact us through
          the website, subscribe to our updates, or make a donation. You can browse
          this website without telling us who you are. The only information that
          identifies you personally is information you choose to give us.
        </p>
        <p>
          By using this website you accept this policy. If you do not agree with it,
          please do not use the site or send us your information. We may update this
          policy from time to time to reflect changes in our practice, our systems or
          the law, and the current version is always published on this page.
        </p>
        <p>
          This policy covers this website. Information collected from participants
          in our programs is also covered by section 7 and by the agreements made at
          the point a participant joins a program.
        </p>
      </>
    ),
  },
  {
    title: "Who we are",
    content: (
      <>
        <p>
          Circle Group is a women-led Kenyan social enterprise based in Nairobi. For
          the purposes of the Data Protection Act, 2019, Circle Group is the data
          controller for personal information collected through this website, and is
          registered as a data controller with the Office of the Data Protection
          Commissioner of Kenya.
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Email: <a className="underline" href="mailto:info@circlegroup.co.ke">info@circlegroup.co.ke</a></li>
          <li>Phone: <a className="underline" href="tel:+254181094157">+254 181 094 157</a></li>
          <li>Address: Nairobi, Kenya</li>
        </ul>
      </>
    ),
  },
  {
    title: "Information we collect",
    content: (
      <>
        <h3 className="font-semibold text-ink">Information you give us</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>Enquiry and partnership forms: name, organisation, email address, phone or WhatsApp number, your stated area of interest, and the content of your message.</li>
          <li>Newsletter subscription: your name, email address and county.</li>
          <li>Donations: your name and contact details where you provide them, and the record of your donation.</li>
          <li>Correspondence: any other information you choose to send us.</li>
        </ul>
        <h3 className="mt-5 font-semibold text-ink">Information collected automatically</h3>
        <p>
          When you visit the site we collect basic technical information: the pages
          you view, the date and time of your visit, the type of device and browser
          you use, the website you arrived from, and an approximate location derived
          from your internet connection. This is used in aggregate to understand how
          the site is used, and is not used to identify you.
        </p>
        <h3 className="mt-5 font-semibold text-ink">Information from third parties</h3>
        <p>
          Where you donate by bank transfer or mobile money, the financial
          institution processes the payment and confirms it to us. We do not receive
          or store your full card or account details.
        </p>
      </>
    ),
  },
  {
    title: "Consent",
    content: (
      <>
        <p>
          We collect, use and share personal information with your knowledge and
          consent, except in the limited circumstances described in this policy, such
          as where the law requires us to act or where someone&apos;s safety is at
          risk. You may withdraw your consent at any time by writing to us. We will
          then stop using your information for that purpose, although we may keep a
          record of the fact that you asked us to stop.
        </p>
        <p>
          Some of what we do depends on the information you give us. If you apply to
          take part in a program, for example, we cannot assess your application
          without the details it asks for. Choosing not to provide that information
          may mean we are unable to offer you that particular service.
        </p>
      </>
    ),
  },
  {
    title: "Why we use your information",
    content: (
      <>
        <p>We use personal information for the following purposes, on the lawful bases shown:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>To respond to your enquiry: your consent.</li>
          <li>To send updates you subscribed to: your consent, which you may withdraw at any time.</li>
          <li>To record, acknowledge and account for donations: legal obligation and our legitimate interest in running the organisation properly.</li>
          <li>To manage partnerships: performance of a contract and our legitimate interest.</li>
          <li>To understand how the website is used and improve it: our legitimate interest.</li>
          <li>To report to funders, auditors and regulators: legal obligation and legitimate interest.</li>
          <li>To protect someone&apos;s safety where a concern arises: the vital interests of the person concerned, and our legal obligations.</li>
        </ul>
        <p>
          We never sell your personal information, and we never share it so that
          another organisation can market to you.
        </p>
      </>
    ),
  },
  {
    title: "Cookies and analytics",
    content: (
      <p>
        This website uses a small number of cookies to make the site work correctly
        and to measure traffic. We may use analytics services provided by other
        organisations to understand how the site is used. Those services may set
        their own cookies and are not permitted to use what they collect on our
        behalf for any other purpose. Most browsers accept cookies by default. You
        can block or delete them through your browser settings, although some parts
        of the site may not work as intended if you do.
      </p>
    ),
  },
  {
    title: "Program participants and partner organisations",
    content: (
      <p>
        Circle Group delivers much of its work alongside other organisations,
        including training institutions, grassroots partners, employers and funded
        program consortia. Where you take part in a program delivered with partners,
        your information may be collected by us or by a partner organisation and
        shared between us for the purpose of running the program and reporting on it.
        We use that information to deliver the program, to understand whether it is
        working, and to report to the funders who make it possible. We do not use it
        for any other purpose without asking you first. Each program explains, at
        the point you join it, what information is collected, who it is shared with,
        and how long it is kept. If you are unsure about a program you are taking
        part in, please ask us and we will tell you. Where a safeguarding concern
        arises, information may be shared as described in our Safeguarding Policy.
      </p>
    ),
  },
  {
    title: "Who we share information with",
    content: (
      <ul className="list-disc space-y-2 pl-6">
        <li>Service providers who host the website, store form submissions, deliver email and measure traffic. They act only on our instructions and may not use the information for their own purposes.</li>
        <li>Professional advisers, auditors and regulators, where we are required to share information.</li>
        <li>Program partners and funders, as described in section 7, or where you have otherwise agreed.</li>
        <li>Law enforcement and relevant authorities, where the law requires it, or where it is necessary to protect someone from harm.</li>
      </ul>
    ),
  },
  {
    title: "Transfers outside Kenya",
    content: (
      <p>
        Some of our service providers store data on servers outside Kenya. Where
        this happens we take reasonable steps to confirm that the provider applies
        protection consistent with the Data Protection Act, 2019, including
        appropriate contractual safeguards. Information held in another country
        may be subject to lawful access requests by the authorities of that country.
      </p>
    ),
  },
  {
    title: "How long we keep information",
    content: (
      <>
        <p>
          We keep personal information only for as long as it is reasonably
          necessary for the purpose it was collected for, as required by section 39
          of the Data Protection Act, 2019.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Enquiries and partnership correspondence: two years from your last contact with us. Each time you contact us, this period starts again.</li>
          <li>Newsletter subscriptions: until you unsubscribe, or until you have not opened our emails for two years, whichever comes first.</li>
          <li>Donation and financial records: seven years, as required by section 630 of the Companies Act, 2015.</li>
          <li>Programme participant records: for the duration of the programme and usually for up to seven years afterwards, to meet audit and funder reporting requirements. The exact period is set out when you join a programme.</li>
          <li>Website analytics: 14 months, in aggregate form.</li>
        </ul>
        <p>
          Once a retention period ends, we delete, anonymise or pseudonymise the
          information, in line with section 39(2) of the Act.
        </p>
      </>
    ),
  },
  {
    title: "Keeping information secure",
    content: (
      <>
        <p>
          Information submitted through this website is transmitted over an
          encrypted connection and stored in a secured database, with access limited
          to the staff who need it for their work. We review these arrangements
          regularly. No method of transmitting or storing information over the
          internet is completely secure. While we take all reasonable measures to
          protect your information, we cannot guarantee it against loss, misuse or
          alteration, and you share information with us on that understanding.
        </p>
        <p>
          Please do not send sensitive personal information through the website
          forms, such as health details, identification numbers or financial account
          details. If we need information of that kind we will tell you how to send
          it safely.
        </p>
      </>
    ),
  },
  {
    title: "Children and young people",
    content: (
      <p>
        We do not knowingly collect personal information from anyone under the age
        of eighteen through this website. If you believe a young person has given us
        information through the site, please contact us and we will delete it.
        Information about young people who take part in our programs is collected
        separately, with the consent of a parent or guardian in addition to the
        young person&apos;s own agreement, and is handled under our Safeguarding
        Policy and our internal Data Protection Policy.
      </p>
    ),
  },
  {
    title: "If you would rather not give us your information",
    content: (
      <p>
        Giving us your personal information is your choice. You can read this
        website, learn about our work and follow us on social media without
        providing anything at all. You will not be able to complete certain
        actions, such as sending an enquiry or subscribing to our updates, without
        the information those actions require.
      </p>
    ),
  },
  {
    title: "Your rights",
    content: (
      <>
        <p>Under the Data Protection Act, 2019 you have the right to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Be told how your personal information is being used.</li>
          <li>Ask for a copy of the information we hold about you.</li>
          <li>Have inaccurate information corrected.</li>
          <li>Ask us to delete information where there is no continuing reason to keep it.</li>
          <li>Object to, or ask us to restrict, certain uses of your information.</li>
          <li>Withdraw your consent at any time.</li>
          <li>Ask for your information in a portable format, where that right applies.</li>
        </ul>
        <p>
          To exercise any of these rights, write to{" "}
          <a className="underline" href="mailto:info@circlegroup.co.ke">info@circlegroup.co.ke</a>.
          Please include your full name and the contact details you used when you
          gave us the information, so that we can verify your identity before we
          act. We will respond within the period set out in the Act.
        </p>
      </>
    ),
  },
  {
    title: "Complaints",
    content: (
      <p>
        If you are unhappy with how we have handled your personal information,
        please contact us first so that we can try to put it right.
      </p>
    ),
  },
  {
    title: "Links to other websites",
    content: (
      <p>
        Our website links to websites run by other organisations, including our
        partners, our funders and social media platforms. Once you follow a link you
        have left our site and this policy no longer applies. We have no control
        over how those organisations collect or use information about you, we take
        no responsibility for their content or their practices, and we encourage you
        to read their policies before giving them your information.
      </p>
    ),
  },
  {
    title: "Donations and payments",
    content: (
      <p>
        Donations made by bank transfer or mobile money are processed by the
        relevant financial institution under its own terms and privacy policy. We
        receive confirmation of the payment and the information we need to record
        and acknowledge it. We do not store card details or full account numbers.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    content: (
      <p>
        We review this policy regularly and update it when our practices or
        obligations change. The date at the top of this page shows when it was last
        revised, and we will note any material change on this page. Your continued
        use of the website after a change takes effect indicates your acceptance of
        the revised policy.
      </p>
    ),
  },
];

export default function Policies() {
  return (
    <section className="bg-sand-light py-16 md:py-24">
      <div className="container-page max-w-3xl">
        <span className="eyebrow text-forest">Policies</span>
        <h1 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
          Safeguarding &amp; Privacy
        </h1>
        <nav aria-label="Policies" className="mt-6 flex flex-wrap gap-3 text-sm">
          <a className="rounded-full border border-forest/20 px-4 py-2 text-forest hover:bg-forest/5" href="#safeguarding">
            Safeguarding
          </a>
          <a className="rounded-full border border-forest/20 px-4 py-2 text-forest hover:bg-forest/5" href="#privacy">
            Privacy
          </a>
        </nav>

        <section id="safeguarding" className="scroll-mt-24 mt-12 border-b border-ink/10 pb-10">
          <h2 className="font-display text-3xl text-leaf">Safeguarding</h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Circle Group is committed to creating safe, respectful environments for
            every young person who engages with our work. The safeguarding policy is
            under review and will be published here once approved.
          </p>
        </section>

        <section id="privacy" className="scroll-mt-24 mt-12">
          <p className="eyebrow text-forest">Circle Group · Published at circlegroupke.org</p>
          <p className="mt-2 text-sm text-ink/60">Last updated: 03/11/2026</p>
          <h2 className="mt-3 font-display text-3xl text-leaf">Privacy Policy</h2>
          <div className="mt-8 space-y-10 leading-relaxed text-ink/75">
            {privacySections.map((section, index) => (
              <section key={section.title} id={`privacy-section-${index + 1}`}>
                <h3 className="mb-3 font-display text-2xl text-ink">
                  {index + 1}. {section.title}
                </h3>
                <div className="space-y-4">{section.content}</div>
              </section>
            ))}
          </div>
          <p className="mt-10 border-t border-ink/10 pt-6 text-sm text-ink/60">
            Circle Group | Nairobi, Kenya |{" "}
            <a className="underline" href="mailto:info@circlegroup.co.ke">info@circlegroup.co.ke</a>
            {" | "}
            <a className="underline" href="tel:+254181094157">+254 181 094 157</a>
          </p>
        </section>
      </div>
    </section>
  );
}
