import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-sand-light px-6 text-center">
      <span className="eyebrow text-leaf">404</span>
      <h1 className="mt-4 font-display text-4xl text-ink">This page doesn&rsquo;t exist yet.</h1>
      <p className="mt-3 text-ink/70">Let&rsquo;s get you back on the pathway.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-leaf px-6 py-3 font-body text-sm font-semibold text-white hover:bg-forest"
      >
        Back to Home
      </Link>
    </section>
  );
}
