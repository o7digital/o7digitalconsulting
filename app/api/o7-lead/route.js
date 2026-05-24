import { NextResponse } from "next/server";

const formspreeEndpoint = "https://formspree.io/f/xkgdyvze";

function clean(value) {
  return typeof value === "string" && value.trim() ? value.trim() : "";
}

export async function POST(request) {
  try {
    const body = await request.json();
    const firstName = clean(body.firstName);
    const lastName = clean(body.lastName);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const language = clean(body.language) || "fr";
    const siteCode = clean(body.siteCode) || "o7digital";
    const source = clean(body.source) || "Chat IA O7";
    const message = clean(body.message);
    const name = `${firstName} ${lastName}`.trim();

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { message: "Missing required lead fields." },
        { status: 400 }
      );
    }

    const leadPayload = {
      firstName,
      lastName,
      name,
      email,
      phone,
      source,
      language,
      siteCode,
      ownerEmail: "olivier.steineur@gmail.com",
      message,
    };

    const [formspreeResult, crmResult] = await Promise.allSettled([
      fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...leadPayload,
          _subject: "Nouveau lead chat IA O7",
          message: `Lead chat IA O7 (${language}, ${siteCode})\n\n${message}`,
        }),
      }),
      sendToCrm(leadPayload),
    ]);

    const formspreeOk =
      formspreeResult.status === "fulfilled" && formspreeResult.value.ok;
    const crmOk = crmResult.status === "fulfilled" && crmResult.value.ok;

    if (!formspreeOk && !crmOk) {
      return NextResponse.json(
        { message: "Lead delivery failed." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, formspreeOk, crmOk });
  } catch (error) {
    console.error("O7 lead error:", error);
    return NextResponse.json(
      { message: "Lead delivery failed." },
      { status: 500 }
    );
  }
}

async function sendToCrm(payload) {
  const webhookUrl = process.env.O7_CRM_LEADS_WEBHOOK_URL;
  const secret = process.env.O7_CRM_LEADS_SECRET;

  if (!webhookUrl || !secret) {
    return { ok: false, skipped: true };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-o7-webhook-secret": secret,
    },
    body: JSON.stringify(payload),
  });

  return { ok: response.ok, status: response.status };
}
