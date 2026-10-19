"use client";

import { useState } from "react";

const input = "h-12 w-full rounded-xl border border-ink/15 bg-sand-light px-4 text-sm text-ink placeholder:text-ink/35 transition-colors hover:border-ink/30 focus:border-leaf focus:bg-white focus:outline-none focus:ring-2 focus:ring-leaf/20";
const textarea = "w-full resize-y rounded-xl border border-ink/15 bg-sand-light px-4 py-3 text-sm text-ink placeholder:text-ink/35 transition-colors hover:border-ink/30 focus:border-leaf focus:bg-white focus:outline-none focus:ring-2 focus:ring-leaf/20";

type FormType = "contact" | "partner" | "industry" | "funding" | "newsletter";

export default function ContactForm({
  fields = ["name", "email", "org", "message"],
  submitLabel = "Send message",
  formType = "contact",
  defaultInterest,
}: {
  fields?: string[];
  submitLabel?: string;
  formType?: FormType;
  defaultInterest?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "", org: "", sector: "", email: "", phone: "",
    interest: defaultInterest || "", message: "",
  });

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData((old) => ({ ...old, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setFormData({ name: "", org: "", sector: "", email: "", phone: "", interest: defaultInterest || "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const label = (id: string, text: string, req = false) => (
    <label htmlFor={id} className="mb-1.5 flex items-center gap-1 text-[.68rem] font-bold uppercase tracking-[.12em] text-ink/50">
      {text}{req && <span className="text-rust">*</span>}
    </label>
  );

  const wide = "sm:col-span-2";

  return (
    <form onSubmit={submit} className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
      {fields.includes("name") && (
        <div>
          {label("contact-name", "Full name", true)}
          <input required id="contact-name" name="name" placeholder="Your name" value={formData.name} onChange={change} className={input} />
        </div>
      )}
      {fields.includes("org") && (
        <div>
          {label("contact-org", "Organisation")}
          <input id="contact-org" name="org" placeholder="Organisation name" value={formData.org} onChange={change} className={input} />
        </div>
      )}
      {fields.includes("sector") && (
        <div>
          {label("contact-sector", "Industry / sector")}
          <input id="contact-sector" name="sector" placeholder="e.g. technology, hospitality" value={formData.sector} onChange={change} className={input} />
        </div>
      )}
      {fields.includes("email") && (
        <div>
          {label("contact-email", "Email", true)}
          <input required type="email" id="contact-email" name="email" placeholder="you@organisation.org" value={formData.email} onChange={change} className={input} />
        </div>
      )}
      {fields.includes("phone") && (
        <div>
          {label("contact-phone", "Phone / WhatsApp")}
          <input id="contact-phone" type="tel" name="phone" placeholder="+254 7XX XXX XXX" value={formData.phone} onChange={change} className={input} />
        </div>
      )}
      {fields.includes("interest") && (
        <div className={wide}>
          {label("contact-interest", "I'm interested in", true)}
          <select required id="contact-interest" name="interest" value={formData.interest} onChange={change}
            className="h-12 w-full cursor-pointer rounded-xl border border-ink/15 bg-sand-light px-4 text-sm text-ink transition-colors hover:border-ink/30 focus:border-leaf focus:bg-white focus:outline-none focus:ring-2 focus:ring-leaf/20">
            <option value="">Choose an option</option>
            <option>Funding</option>
            <option>Training for my school or organisation</option>
            <option>Program partnership</option>
            <option>Other</option>
          </select>
        </div>
      )}
      {fields.includes("message") && (
        <div className={wide}>
          {label("contact-message", "What would you like to discuss?", true)}
          <textarea required rows={5} id="contact-message" name="message"
            placeholder="A short outline of what you have in mind will help us direct your enquiry."
            value={formData.message} onChange={change} className={textarea} />
        </div>
      )}

      <div className={`flex flex-wrap items-center gap-4 pt-1 ${wide}`}>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2.5 rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-leaf disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Sending…
            </>
          ) : submitLabel}
        </button>
        <p className="text-xs text-ink/40">Required fields marked <span className="text-rust font-semibold">*</span></p>
      </div>

      {status === "sent" && (
        <div className={`flex items-start gap-3 rounded-xl bg-[#dfeec6] px-5 py-4 ${wide}`}>
          <span className="mt-0.5 text-base font-bold text-leaf">✓</span>
          <div>
            <p className="text-sm font-semibold text-forest">Enquiry sent successfully</p>
            <p className="mt-0.5 text-xs text-forest/70">Our team will be in touch within 2 business days.</p>
          </div>
        </div>
      )}
      {status === "error" && (
        <div className={`flex items-start gap-3 rounded-xl bg-red-50 px-5 py-4 ${wide}`}>
          <span className="mt-0.5 text-base font-bold text-rust">!</span>
          <p className="text-sm text-rust">Something went wrong. Please email <a href="mailto:info@circlegroup.co.ke" className="font-medium underline">info@circlegroup.co.ke</a>.</p>
        </div>
      )}
    </form>
  );
}
