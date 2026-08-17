"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "newsletter", email }),
      });

      if (!res.ok) throw new Error("Subscription failed");

      setStatus("sent");
      setEmail("");
    } catch (err) {
      console.error("Newsletter error:", err);
      setStatus("error");
    }
  };

  return (
    <div>
      <h3 className="eyebrow text-amber">Stay in touch</h3>
      <p className="mt-4 text-sm text-sand-light/80">
        Monthly updates on our programmes, research, and impact stories.
      </p>

      {status === "sent" ? (
        <p className="mt-5 text-sm text-amber">
          Thanks for subscribing — we&rsquo;ll be in touch.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            aria-label="Email address"
            className="w-full rounded-full border border-sand-light/20 bg-sand-light/10 px-4 py-2.5 text-sm text-sand-light placeholder:text-sand-light/40 focus:border-amber focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="shrink-0 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-savanna transition-colors hover:bg-sand-light disabled:opacity-60"
          >
            {status === "submitting" ? "..." : "Sign up"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-3 text-xs text-rust">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}