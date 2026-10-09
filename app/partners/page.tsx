import Link from "next/link";
import CirclePhotoCarousel from "@/components/CirclePhotoCarousel";
import PartnerLogos from "@/components/PartnerLogos";

const segments = [
  ["Training institutions", "We work with Maasai National Polytechnic and other TVETs to connect young women with technical training and retention support.", "Explore a partnership ->", "/work-with-us#training"],
  ["Grassroots partners", "HELGA and Perur Rays of Hope help connect programmes with community knowledge and relationships.", "Partner on a programme ->", "/work-with-us#programs"],
  ["Programme partners", "Global Give Back Circle through HER Lab supports young women's pathways and opportunities.", "Explore a partnership ->", "/work-with-us#programs"],
  ["Disability inclusion", "AIC Kajiado Child Care Centre is a partner in practical disability inclusion.", "Talk with our team ->", "/work-with-us#partner-form"],
  ["Employers & industry", "A network of 100+ partners creates internships, workplace experience, mentorship, employment and market opportunities.", "Become an industry partner ->", "/work-with-us#industry-partner"],
  ["Funders & government", "Foundations, development organisations, county governments and business networks can help strengthen the pathway from education to work.", "Start a conversation ->", "/work-with-us#fund"],
];

const photos = [
  { src: "/img/circle/photo_2026-09-23_11-12-40.jpg", alt: "Circle Group team gathered outdoors", caption: "Partnership starts with people." },
  { src: "/img/circle/photo_2026-09-23_11-12-37.jpg", alt: "Community graduation event with Circle Group", caption: "Shared work, shared momentum." },
  { src: "/img/circle/photo_2026-09-23_11-12-42 (2).jpg", alt: "Young women celebrating a Circle Group achievement", caption: "Opportunity grows in company." },
];

export default function Partners() {
  return (
    <>
      <section className="bg-sand-light pb-16 pt-16 md:pt-24"><div className="container-page grid max-w-5xl items-center gap-14 md:grid-cols-2"><div><span className="eyebrow text-forest">Who We Work With</span><h1 className="mt-5 font-display text-5xl text-ink sm:text-6xl">Nothing here happens alone.</h1><p className="mt-7 text-lg text-ink/80">Circle Group collaborates with schools, youth associations, employers, development organisations, and communities to connect trained young people to real-world opportunity.</p></div><CirclePhotoCarousel frame="editorial" photos={photos} /></div></section>
      <PartnerLogos />
      <section className="bg-sand pb-24"><div className="container-page grid gap-8 md:grid-cols-2">{segments.map(([title, description, cta, href]) => <div key={title} className="rounded-2xl border border-ink/10 bg-sand-light p-9"><h2 className="font-display text-2xl text-ink">{title}</h2><p className="mt-3 text-sm text-ink/70">{description}</p><Link href={href} className="mt-7 inline-block text-sm font-semibold text-leaf">{cta}</Link></div>)}</div></section>
      <section className="bg-forest py-20 text-white md:py-28"><div className="container-page grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center"><div><span className="eyebrow text-amber">Built together</span><h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">The strongest pathways are shared.</h2><p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">From employers to schools and communities, every partner adds a door, a perspective, or a chance to keep moving.</p></div><div className="rounded-[2rem] border border-white/15 bg-white/5 p-5"><p className="font-display text-2xl text-amber">Many hands. One direction.</p><p className="mt-3 text-sm leading-relaxed text-white/70">Join the network that helps young people move from preparation into possibility.</p></div></div></section>
    </>
  );
}
