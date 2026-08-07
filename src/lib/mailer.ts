import nodemailer from "nodemailer";
import { company } from "@/config/company";

export async function sendMail(options: { subject: string; text: string; replyTo: string; attachments?: { filename: string; content: Buffer; contentType: string }[] }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
  });
  await transporter.sendMail({
    from: `TCAST Cargo Website <${process.env.SMTP_USER}>`,
    to: company.quoteEmail,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    attachments: options.attachments,
  });
}
