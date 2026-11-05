import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const resendApiKey = process.env.RESEND_API_KEY || "";
const contactEmail = process.env.CONTACT_EMAIL || "info@circlegroup.co.ke";
const fromEmail =
  process.env.RESEND_FROM_EMAIL ||
  "Circle Group <noreply@circlegroupke.org>";

const formLabels: Record<string, string> = {
  contact: "Contact Form",
  partner: "Partnership Enquiry",
  industry: "Industry Partnership Enquiry",
  funding: "Funding Enquiry",
  newsletter: "Newsletter Signup",
};

function escapeHtml(value: unknown) {
  if (typeof value !== "string" || value.length === 0) return "Not provided";
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
    .replaceAll("\n", "<br>");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, name, org, sector, interest, email, phone, message } = body;

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
    }

    const normalizedFormType =
      typeof formType === "string" &&
      Object.prototype.hasOwnProperty.call(formLabels, formType)
        ? formType
        : "contact";

    // 1. Insert into Supabase
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { data, error } = await supabase
      .from("contact_leads")
      .insert([
        {
          form_type: normalizedFormType,
          name: name || null,
          org: org || null,
          email,
          phone: phone || null,
          message: [interest && `Interest: ${interest}`, sector && `Industry/Sector: ${sector}`, message].filter(Boolean).join("\n") || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save submission" },
        { status: 500 }
      );
    }

    if (!resendApiKey) {
      console.error("Contact form email error: RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          error: "Submission was saved, but email delivery is not configured",
          submissionSaved: true,
        },
        { status: 503 }
      );
    }

    // Staff replies should go directly to the person who submitted the form.
    const resend = new Resend(resendApiKey);
    const formLabel = formLabels[normalizedFormType];
    const { error: notificationError } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: email,
      subject: `New ${formLabel} Submission`,
      html: `
        <h2>New ${formLabel} Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Organisation:</strong> ${escapeHtml(org)}</p>
        <p><strong>Sector:</strong> ${escapeHtml(sector)}</p>
        <p><strong>Interest:</strong> ${escapeHtml(interest)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    });

    if (notificationError) {
      console.error("Resend staff notification error:", notificationError);
      return NextResponse.json(
        {
          error: "Submission was saved, but the team could not be notified",
          submissionSaved: true,
        },
        { status: 502 }
      );
    }

    const isNewsletterSignup = normalizedFormType === "newsletter";
    const greeting = typeof name === "string" && name.trim()
      ? `Dear ${escapeHtml(name.trim())},`
      : "Hello,";
    const confirmationMessage = isNewsletterSignup
      ? "Thank you for signing up for Circle Group updates. We will email you about new training and work opportunities."
      : "Thank you for contacting Circle Group. We have received your enquiry and our team will be in touch within 2 business days.";

    const { error: confirmationError } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      replyTo: contactEmail,
      subject: isNewsletterSignup
        ? "You are signed up for Circle Group updates"
        : "We received your enquiry | Circle Group",
      html: `
        <p>${greeting}</p>
        <p>${confirmationMessage}</p>
        <p>If you need to add anything, reply to this email or contact us at <a href="mailto:${contactEmail}">${contactEmail}</a>.</p>
        <p>Kind regards,<br />Circle Group</p>
      `,
    });

    if (confirmationError) {
      console.error("Resend enquiry confirmation error:", confirmationError);
    }

    return NextResponse.json({
      success: true,
      id: data.id,
      confirmationSent: !confirmationError,
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
