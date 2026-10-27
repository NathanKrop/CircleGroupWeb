import CircleGroupBrand from "@/components/CircleGroupBrand";

export default function SiteBanner() {
  return (
    <div className="relative hidden overflow-hidden bg-sand-light lg:block">
      {/* dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: "radial-gradient(circle, #1B3A2B 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />

      <CircleGroupBrand
        className="container-page flex items-center justify-between gap-4 py-3"
        logoClassName="h-24 w-auto object-contain sm:h-28"
        graphicClassName="h-[100px] w-[860px] shrink-0"
        priority
      />
    </div>
  );
}
