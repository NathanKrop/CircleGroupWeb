import Image from "next/image";

const partnerLogos = [
  { name: "Global Give Back Circle", src: "/img/Partners/Global Give Back Circle.jpg" },
  { name: "Humanitarian Efforts for the Learning of the Girl Child in Africa", src: "/img/Partners/Humaniterian Efforts For The Learning Of The Girl Child In Africa (HELGCA).jpg" },
  { name: "Perur Rays of Hope", src: "/img/Partners/Perur Rays Of Hope.jpg" },
  { name: "The Maasai National Polytechnic", src: "/img/Partners/The Maasai National Polytechnic.jpg" },
];

export default function PartnerLogos() {
  return (
    <section id="partners" aria-labelledby="partner-logos-heading" className="scroll-mt-20 bg-white py-16 md:py-20">
      <div className="container-page">
        <div className="mb-9 border-b border-ink/15 pb-5">
          <span className="eyebrow text-forest">Working together</span>
          <h2 id="partner-logos-heading" className="mt-3 font-display text-3xl text-ink sm:text-4xl">Our partners</h2>
        </div>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {partnerLogos.map((partner) => (
            <li key={partner.name} className="flex min-h-52 flex-col items-center justify-between gap-4 rounded-md border border-ink/10 bg-sand-light p-5 text-center sm:p-6">
              <div className="relative h-28 w-full">
                <Image src={partner.src} alt="" fill sizes="(max-width: 639px) 42vw, (max-width: 1023px) 45vw, 22vw" className="object-contain" />
              </div>
              <p className="text-sm font-semibold leading-snug text-ink">{partner.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}