"use client";

import { useState } from "react";

const inputClasses = "h-13 w-full rounded-xl border border-ink/15 bg-white px-4 text-sm text-ink shadow-sm placeholder:text-ink/35 hover:border-ink/30";
type FormType = "contact" | "partner" | "industry" | "funding" | "newsletter";

export default function ContactForm({ fields = ["name", "email", "org", "message"], submitLabel = "Send message", formType = "contact", defaultInterest }: { fields?: string[]; submitLabel?: string; formType?: FormType; defaultInterest?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", org: "", sector: "", email: "", phone: "", interest: defaultInterest || "", message: "" });
  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFormData((old) => ({ ...old, [e.target.name]: e.target.value }));
  const submit = async (e: React.FormEvent) => { e.preventDefault(); setStatus("submitting"); try { const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...formData, formType }) }); if (!response.ok) throw new Error(); setStatus("sent"); setFormData({ name: "", org: "", sector: "", email: "", phone: "", interest: defaultInterest || "", message: "" }); } catch { setStatus("error"); } };
  const label = (id: string, text: string) => <label htmlFor={id} className="mb-2 block text-[.68rem] font-bold uppercase tracking-[.12em] text-ink/60">{text}</label>;
  const fieldClass = (wide = false) => wide ? "sm:col-span-2" : "";
  return <form onSubmit={submit} className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
    {fields.includes("name") && <div className={fieldClass()}>{label("contact-name", "Full name")}<input required id="contact-name" name="name" placeholder="Your name" value={formData.name} onChange={change} className={inputClasses} /></div>}
    {fields.includes("org") && <div className={fieldClass()}>{label("contact-org", "Organisation")}<input id="contact-org" name="org" placeholder="Organisation name" value={formData.org} onChange={change} className={inputClasses} /></div>}
    {fields.includes("sector") && <div className={fieldClass()}>{label("contact-sector", "Industry / sector")}<input id="contact-sector" name="sector" placeholder="e.g. technology, hospitality" value={formData.sector} onChange={change} className={inputClasses} /></div>}
    {fields.includes("email") && <div className={fieldClass()}>{label("contact-email", "Email")}<input required type="email" id="contact-email" name="email" placeholder="you@organisation.org" value={formData.email} onChange={change} className={inputClasses} /></div>}
    {fields.includes("phone") && <div className={fieldClass()}>{label("contact-phone", "Phone / WhatsApp")}<input id="contact-phone" type="tel" name="phone" placeholder="+254 7XX XXX XXX" value={formData.phone} onChange={change} className={inputClasses} /></div>}
    {fields.includes("interest") && <div className={fieldClass(true)}>{label("contact-interest", "I’m interested in")}<select required id="contact-interest" name="interest" value={formData.interest} onChange={change} className={inputClasses}><option value="">Choose an option</option><option>Funding</option><option>Training for my school or organisation</option><option>Program partnership</option><option>Other</option></select></div>}
    {fields.includes("message") && <div className={fieldClass(true)}>{label("contact-message", "What would you like to discuss?")}<textarea required rows={5} id="contact-message" name="message" placeholder="A short outline of what you have in mind will help us direct your enquiry." value={formData.message} onChange={change} className="w-full resize-y rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink shadow-sm placeholder:text-ink/35 hover:border-ink/30" /></div>}
    <div className="flex flex-wrap items-center gap-4 sm:col-span-2"><button type="submit" disabled={status === "submitting"} className="rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-leaf disabled:opacity-60">{status === "submitting" ? "Sending enquiry..." : submitLabel}</button><p className="text-xs leading-relaxed text-ink/55">By sending this form, you agree that we may respond to your enquiry.</p></div>
    {status === "sent" && <p className="sm:col-span-2 rounded-xl bg-[#e5efd0] px-4 py-3 text-sm text-forest">Thank you. Your enquiry has been sent and our team will be in touch soon.</p>}
    {status === "error" && <p className="sm:col-span-2 text-sm text-leaf">Something went wrong. Please email <a href="mailto:info@circlegroup.co.ke" className="underline">info@circlegroup.co.ke</a>.</p>}
  </form>;
}
