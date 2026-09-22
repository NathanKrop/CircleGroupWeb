"use client";

import { useState } from "react";
const inputClasses = "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-leaf";
type FormType = "contact" | "partner" | "industry" | "funding" | "newsletter";

export default function ContactForm({ fields = ["name", "email", "org", "message"], submitLabel = "Send message", formType = "contact", defaultInterest }: { fields?: string[]; submitLabel?: string; formType?: FormType; defaultInterest?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", org: "", sector: "", email: "", phone: "", interest: defaultInterest || "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setStatus("submitting"); try { const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...formData, formType }) }); if (!res.ok) throw new Error(); setStatus("sent"); setFormData({ name: "", org: "", sector: "", email: "", phone: "", interest: defaultInterest || "", message: "" }); } catch { setStatus("error"); } };
  const label = (htmlFor: string, text: string) => <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/60">{text}</label>;
  return <form onSubmit={handleSubmit} className="space-y-5">
    {fields.includes("name") && <div>{label("contact-name", "Full name")}<input required name="name" id="contact-name" value={formData.name} onChange={handleChange} className={inputClasses} /></div>}
    {fields.includes("org") && <div>{label("contact-org", "Organisation")}<input name="org" id="contact-org" value={formData.org} onChange={handleChange} className={inputClasses} /></div>}
    {fields.includes("sector") && <div>{label("contact-sector", "Industry/Sector")}<input name="sector" id="contact-sector" value={formData.sector} onChange={handleChange} className={inputClasses} /></div>}
    {fields.includes("email") && <div>{label("contact-email", "Email")}<input required type="email" name="email" id="contact-email" value={formData.email} onChange={handleChange} className={inputClasses} /></div>}
    {fields.includes("phone") && <div>{label("contact-phone", "Phone/WhatsApp")}<input type="tel" name="phone" id="contact-phone" value={formData.phone} onChange={handleChange} className={inputClasses} /></div>}
    {fields.includes("interest") && <div>{label("contact-interest", "I’m interested in")}<select required name="interest" id="contact-interest" value={formData.interest} onChange={handleChange} className={inputClasses}><option value="">Select one</option><option>Funding</option><option>Training for my school or organisation</option><option>Program partnership</option><option>Other</option></select></div>}
    {fields.includes("message") && <div>{label("contact-message", "Message")}<textarea required rows={5} name="message" id="contact-message" value={formData.message} onChange={handleChange} className={inputClasses} /></div>}
    <button type="submit" disabled={status === "submitting"} className="w-full rounded-full bg-leaf px-6 py-3.5 text-sm font-semibold text-white hover:bg-forest disabled:opacity-60 sm:w-auto">{status === "submitting" ? "Sending..." : submitLabel}</button>
    {status === "sent" && <p className="text-sm text-ink/70">Thanks, your message has been sent. We’ll be in touch soon.</p>}
    {status === "error" && <p className="text-sm text-leaf">Something went wrong. Please email <a href="mailto:info@circlegroup.co.ke" className="underline">info@circlegroup.co.ke</a>.</p>}
  </form>;
}
