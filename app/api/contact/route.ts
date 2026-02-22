import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

    if (!RESEND_API_KEY || !CONTACT_EMAIL) {
      console.error("Missing RESEND_API_KEY or CONTACT_EMAIL env vars");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "dAffiliates Contact <noreply@daffiliates.com>",
        to: CONTACT_EMAIL,
        reply_to: email,
        subject: `[dAffiliates Contact] ${subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; width: 100px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(name)}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Subject</td><td style="padding: 8px 0;">${escapeHtml(subject)}</td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <div style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact form error:", e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
