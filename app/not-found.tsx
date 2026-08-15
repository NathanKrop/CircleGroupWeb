import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-sand-light px-6 text-center">
      <span className="eyebrow text-rust">404</span>
      <h1 className="mt-4 font-display text-4xl text-savanna">This page doesn&rsquo;t exist yet.</h1>
      <p className="mt-3 text-savanna/70">Let&rsquo;s get you back on the pathway.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-savanna px-6 py-3 font-body text-sm font-semibold text-sand-light hover:bg-rust"
      >
        Back to Home
      </Link>
    </section>
  );
}
