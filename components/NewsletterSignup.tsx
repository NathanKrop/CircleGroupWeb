"use client";
import { useState } from "react";
export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [county, setCounty] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "saved_without_notification" | "error"
  >("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "newsletter",
          email,
          message: `County: ${county}`,
        }),
      });
      const result = await res.json();
      if (!res.ok) {
        if (result.submissionSaved) {
          setStatus("saved_without_notification");
          return;
        }
        throw new Error("Newsletter signup failed");
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="opportunities" className="border-b border-white/15 bg-leaf">
      <div className="container-page py-10">
        <div className="grid gap-5 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <h2 className="font-display text-2xl text-white">Hear about opportunities first.</h2>
            <p className="mt-2 text-sm text-white/80">
              Leave your email and we will let you know when new training and work opportunities open.
            </p>
          </div>
          {status === "sent" ? (
            <p className="text-sm text-white">Thanks. We will keep you posted.</p>
          ) : (
            <form onSubmit={submit} className="grid gap-3 sm:grid-cols-3">
              <input
                required
                type="email"
                aria-label="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full px-4 py-3 text-sm text-ink"
              />
              <input
                required
                aria-label="County"
                placeholder="County"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                className="rounded-full px-4 py-3 text-sm text-ink"
              />
              <button
                disabled={status === "sending"}
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-forest disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Keep me posted"}
              </button>
            </form>
          )}
          {status === "saved_without_notification" && (
            <p className="text-sm text-white">
              Your signup was saved, but we could not notify our team. Please email{" "}
              <a className="underline" href="mailto:info@circlegroup.co.ke">
                info@circlegroup.co.ke
              </a>.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-white">We could not save your signup. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  );
}
