"use client";

import { useState } from "react";

const inputClasses =
  "w-full rounded-xl border border-savanna/15 bg-sand-light px-4 py-3 text-savanna placeholder:text-savanna/40 focus:border-amber";

export default function ContactForm({
  fields = ["name", "email", "org", "message"],
  submitLabel = "Send message",
  formType = "contact",
}: {
  fields?: string[];
  submitLabel?: string;
  formType?: "contact" | "partner" | "mentor" | "apply" | "newsletter";
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("sent");
      setFormData({ name: "", org: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {fields.includes("name") && (
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-savanna/60">
            Full name
          </label>
          <input
            required
            type="text"
            name="name"
            id="contact-name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Jane Wanjiru"
          />
        </div>
      )}
      {fields.includes("org") && (
        <div>
          <label htmlFor="contact-org" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-savanna/60">
            Organisation
          </label>
          <input
            type="text"
            name="org"
            id="contact-org"
            value={formData.org}
            onChange={handleChange}
            className={inputClasses}
            placeholder="School, company, or organisation"
          />
        </div>
      )}
      {fields.includes("email") && (
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-savanna/60">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            id="contact-email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
      )}
      {fields.includes("phone") && (
        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-savanna/60">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            name="phone"
            id="contact-phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+254 7XX XXX XXX"
          />
        </div>
      )}
      {fields.includes("message") && (
        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-savanna/60">
            Message
          </label>
          <textarea
            required
            rows={5}
            name="message"
            id="contact-message"
            value={formData.message}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Tell us a bit about what you're looking for..."
          />
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-savanna px-6 py-3.5 font-body text-sm font-semibold text-sand-light transition-colors hover:bg-rust disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : submitLabel}
      </button>

      {status === "sent" && (
        <p className="text-sm text-savanna/70">
          Thanks — your message has been sent. We&rsquo;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-rust">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:info@circlegroup.co.ke" className="underline">
            info@circlegroup.co.ke
          </a>
          .
        </p>
      )}
    </form>
  );
}