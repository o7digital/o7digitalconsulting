import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
];

const isConfigured = requiredEnv.every((key) => process.env[key]);
const contactRecipient = process.env.CONTACT_TO || "info@o7digitalgroup.com";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Champs manquants." },
        { status: 400 }
      );
    }

    if (!isConfigured) {
      return NextResponse.json(
        {
          message:
            "Le service email est momentanément indisponible. Merci de nous écrire à info@o7digitalgroup.com.",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `O7 Digital Contact <${process.env.SMTP_USER}>`,
      to: contactRecipient,
      replyTo: email,
      subject: "Nouveau message via le formulaire O7 Digital",
      text: `
Nom : ${name}
Email : ${email}
Téléphone : ${phone || "N/A"}

Message :
${message}
      `.trim(),
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "N/A"}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ message: "Message envoyé." });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}
