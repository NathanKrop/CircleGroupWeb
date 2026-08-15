"use client";

import { useState } from "react";

const inputClasses =
  "w-full rounded-xl border border-savanna/15 bg-sand-light px-4 py-3 text-savanna placeholder:text-savanna/40 focus:border-amber";

export default function ContactForm({
  fields = ["name", "email", "org", "message"],
  submitLabel = "Send message",
}: {
  fields?: string[];
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to Supabase table + email notification (Resend, etc.)
        setStatus("sent");
      }}
      className="space-y-5"
    >
      {fields.includes("name") && (
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-savanna/60">
            Full name
          </label>
          <input required type="text" className={inputClasses} placeholder="Jane Wanjiru" />
        </div>
      )}
      {fields.includes("org") && (
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-savanna/60">
            Organisation
          </label>
          <input type="text" className={inputClasses} placeholder="School, company, or organisation" />
        </div>
      )}
      {fields.includes("email") && (
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-savanna/60">
            Email
          </label>
          <input required type="email" className={inputClasses} placeholder="you@example.com" />
        </div>
      )}
      {fields.includes("phone") && (
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-savanna/60">
            Phone / WhatsApp
          </label>
          <input type="tel" className={inputClasses} placeholder="+254 7XX XXX XXX" />
        </div>
      )}
      {fields.includes("message") && (
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-savanna/60">
            Message
          </label>
          <textarea required rows={5} className={inputClasses} placeholder="Tell us a bit about what you're looking for..." />
        </div>
      )}

      <button
        type="submit"
        className="w-full rounded-full bg-savanna px-6 py-3.5 font-body text-sm font-semibold text-sand-light transition-colors hover:bg-rust sm:w-auto"
      >
        {submitLabel}
      </button>

      {status === "sent" && (
        <p className="text-sm text-savanna/70">
          Thanks — this is a placeholder confirmation. Wire this form to Supabase + email before launch.
        </p>
      )}
    </form>
  );
}
