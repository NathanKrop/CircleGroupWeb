import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const items = [
  {
    title: "International Youth Day",
    body: "Celebrating young people who are actively shaping the future through policy, thought leadership, entrepreneurship, and community innovation.",
    image: "/img/new/photo_30_2026-03-03_11-10-37.jpg",
    href: "/stories",
    cta: "Read the stories",
  },
  {
    title: "Our Research & Learning",
    body: "Community-based research on youth employment, rural economies, and women's empowerment — feeding directly back into how our programmes are designed.",
    image: "/img/lux/pexels-rdne-6257693.jpg",
    href: "/research",
    cta: "View all research",
  },
  {
    title: "Partner With Us",
    body: "Schools, employers, and development organisations — there's a way to work with us. Bring training to your students, hire our graduates, or co-design a programme.",
    image: "/img/lux/pexels-finix-photographer-826467311-30874118.jpg",
    href: "/get-involved",
    cta: "Get involved",
  },
];

export default function FeaturedContent() {
  return (
    <div className="space-y-8">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.08}>
          <Link
            href={item.href}
            className={`group grid grid-cols-1 overflow-hidden rounded-[2rem] border border-savanna/10 bg-sand-light transition-shadow hover:shadow-xl md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[280px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <h3 className="font-display text-2xl font-medium text-savanna sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-savanna/70 sm:text-base">
                {item.body}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rust">
                {item.cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}