import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER || "salauddin677785@gmail.com";
    const emailPass = process.env.EMAIL_PASS || "mdfhffaryseeksob";
    const recipientEmail = "salauddin677785@gmail.com";

    // Create Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Email layout
    const mailOptions = {
      from: `"${name} (Portfolio Inquiry)" <${emailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `[Portfolio Inquiry] ${name} - ${projectType || "General Inquiry"}`,
      text: `
New Contact Inquiry Received via Portfolio:

Name: ${name}
Email: ${email}
Project Type: ${projectType || "Not specified"}
Date: ${formattedDate} (BST)

Message:
${message}
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Portfolio Message</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #0c0c0e; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f4f4f5;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #18181b; border: 1px solid #27272a; border-radius: 16px; overflow: hidden;">
    <!-- Header -->
    <tr>
      <td style="padding: 28px 32px; background-color: #121214; border-bottom: 1px solid #27272a;">
        <span style="display: inline-block; padding: 4px 10px; font-size: 11px; font-family: monospace; font-weight: 700; text-transform: uppercase; background-color: #27272a; color: #a1a1aa; border-radius: 9999px; letter-spacing: 0.08em; margin-bottom: 8px;">
          New Portfolio Lead
        </span>
        <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">
          Inquiry from ${name}
        </h1>
        <p style="margin: 6px 0 0; font-size: 13px; color: #a1a1aa;">
          Received on ${formattedDate}
        </p>
      </td>
    </tr>

    <!-- Body Information -->
    <tr>
      <td style="padding: 32px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #27272a;">
              <span style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #71717a;">Client Name:</span>
              <div style="font-size: 15px; font-weight: 600; color: #ffffff; margin-top: 2px;">${name}</div>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #27272a;">
              <span style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #71717a;">Email Address:</span>
              <div style="font-size: 15px; font-weight: 600; color: #ffffff; margin-top: 2px;">
                <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #27272a;">
              <span style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #71717a;">Project Type:</span>
              <div style="font-size: 15px; font-weight: 600; color: #ffffff; margin-top: 2px;">
                <span style="display: inline-block; padding: 2px 8px; border-radius: 6px; background-color: #27272a; font-size: 13px; color: #e4e4e7;">
                  ${projectType || "General Inquiry"}
                </span>
              </div>
            </td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="margin-top: 20px;">
          <span style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #71717a; display: block; margin-bottom: 8px;">
            Submitted Message:
          </span>
          <div style="padding: 18px; background-color: #09090b; border: 1px solid #27272a; border-radius: 12px; font-size: 14px; line-height: 1.6; color: #e4e4e7; white-space: pre-wrap;">${message}</div>
        </div>

        <!-- Action Button -->
        <div style="margin-top: 28px; text-align: center;">
          <a href="mailto:${email}?subject=Re: Portfolio Inquiry" style="display: inline-block; padding: 12px 28px; background-color: #ffffff; color: #09090b; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 9999px;">
            Reply to ${name} &rarr;
          </a>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 20px 32px; background-color: #121214; border-top: 1px solid #27272a; text-align: center; font-size: 11px; color: #71717a; font-family: monospace;">
        Sent directly from your MD. Salauddin Portfolio website Contact Form
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Nodemailer send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later or reach out directly." },
      { status: 500 }
    );
  }
}
