import KenyaMap from "@/components/KenyaMap";

export default function OurWork() {
  return (
    <>
      <section className="bg-sand-light py-16 md:py-24">
        <div className="container-page">
          <span className="eyebrow-display text-xl text-leaf sm:text-2xl">Where we work</span>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[.98] text-ink sm:text-6xl">Rooted in communities. Connected across Kenya.</h1>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <p className="text-lg leading-relaxed text-ink">Our direct work is concentrated in Kajiado and West Pokot, reaching young women from rural and underserved communities, including participants from Turkana, Baringo, Samburu, Taita Taveta and Makueni. We work through existing TVETs, grassroots organisations, communities and employers rather than creating parallel systems.</p>
            <p className="text-lg leading-relaxed text-ink">Our approach is to go where young women already are — not to ask them to come to us. That means working with local institutions, community leaders and employers who already have trust and presence in these areas.</p>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 md:py-16">
        <div className="container-page">
          <KenyaMap />
        </div>
      </section>
    </>
  );
}
