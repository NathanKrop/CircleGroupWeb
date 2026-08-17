import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const resendApiKey = process.env.RESEND_API_KEY || "";
const contactEmail = process.env.CONTACT_EMAIL || "info@circlegroup.co.ke";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, name, org, email, phone, message } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1. Insert into Supabase
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { data, error } = await supabase
      .from("contact_leads")
      .insert([
        {
          form_type: formType || "contact",
          name: name || null,
          org: org || null,
          email,
          phone: phone || null,
          message: message || null,
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

    // 2. Send email notification via Resend (if configured)
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const formLabels: Record<string, string> = {
        contact: "Contact Form",
        partner: "Partnership Enquiry",
        mentor: "Mentor Application",
        apply: "Programme Application",
        newsletter: "Newsletter Signup",
      };

      await resend.emails.send({
        from: "Circle Group Website <onboarding@resend.dev>",
        to: [contactEmail],
        subject: `New ${formLabels[formType] || "Form"} Submission`,
        html: `
          <h2>New ${formLabels[formType] || "Form"} Submission</h2>
          <p><strong>Name:</strong> ${name || "—"}</p>
          <p><strong>Organisation:</strong> ${org || "—"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "—"}</p>
          <p><strong>Message:</strong></p>
          <p>${message || "—"}</p>
        `,
      });
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}