import nodemailer from "nodemailer";
// @ts-ignore - Vercel types are available at runtime
import type { VercelRequest, VercelResponse } from "@vercel/node";

// Create transporter using environment variables
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP credentials not configured");
      return res.status(500).json({ 
        error: "Email service not configured. Please check environment variables." 
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Send email using Nodemailer
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: "arbietomas@gmail.com",
      replyTo: email,
      subject: `New Message from ${name} - Portfolio Contact Form`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin-top: 20px;">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div style="margin-top: 30px; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

From: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return res.status(200).json({ 
      success: true, 
      messageId: info.messageId 
    });
  } catch (error: any) {
    console.error("Email error:", error);
    
    // Provide more detailed error information
    const errorMessage = error?.message || "Failed to send email. Please try again later.";
    const errorCode = error?.code || "UNKNOWN_ERROR";
    
    return res.status(500).json({ 
      error: "Failed to send email. Please try again later.",
      details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      code: process.env.NODE_ENV === "development" ? errorCode : undefined
    });
  }
}

