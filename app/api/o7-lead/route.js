import { NextResponse } from "next/server";

const formspreeEndpoint = "https://formspree.io/f/xkgdyvze";
const defaultAllowedOrigins = [
  "https://www.o7digital.com",
  "https://o7digital.com",
  "https://jeanlouisdavid.com.mx",
  "https://www.jeanlouisdavid.com.mx",
];

function clean(value) {
  return typeof value === "string" && value.trim() ? value.trim() : "";
}

function getCorsHeaders(request) {
  const origin = request.headers.get("origin") || "";
  const extraOrigins = (process.env.O7_LEAD_ALLOWED_ORIGINS || "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
  const allowedOrigins = new Set([...defaultAllowedOrigins, ...extraOrigins]);
  const allowedOrigin = allowedOrigins.has(origin) ? origin : defaultAllowedOrigins[0];

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "OPTIONS, POST",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function withCors(request, body, init = {}) {
  return NextResponse.json(body, {
    ...init,
    headers: {
      ...getCorsHeaders(request),
      ...(init.headers || {}),
    },
  });
}

function parseSiteConfigMap(rawValue) {
  if (!rawValue) return {};
  try {
    const parsed = JSON.parse(rawValue);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function getSiteConfig(siteCode) {
  const code = clean(siteCode) || "o7digital";
  const map = parseSiteConfigMap(process.env.O7_LEAD_SITE_CONFIG);
  const fromMap = map[code] || map.default || {};

  return {
    siteCode: code,
    crmWebhookUrl:
      clean(fromMap.crmWebhookUrl) || clean(process.env.O7_CRM_LEADS_WEBHOOK_URL),
    crmSecret: clean(fromMap.crmSecret) || clean(process.env.O7_CRM_LEADS_SECRET),
    pipelineId:
      clean(fromMap.pipelineId) || clean(process.env.O7_CRM_LEADS_PIPELINE_ID),
    ownerEmail:
      clean(fromMap.ownerEmail) || "olivier.steineur@gmail.com",
    notificationEmails: Array.isArray(fromMap.notificationEmails)
      ? fromMap.notificationEmails.map(clean).filter(Boolean)
      : [],
    formspreeEndpoint:
      clean(fromMap.formspreeEndpoint) || formspreeEndpoint,
  };
}

export async function OPTIONS(request) {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(request),
  });
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
    const siteConfig = getSiteConfig(siteCode);
    const source = clean(body.source) || "Chat IA O7";
    const message = clean(body.message);
    const name = `${firstName} ${lastName}`.trim();

    if (!firstName || !lastName || !email || !phone) {
      return withCors(
        request,
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
      pipelineId: siteConfig.pipelineId,
      ownerEmail: siteConfig.ownerEmail,
      notificationEmails: siteConfig.notificationEmails,
      message,
    };

    const [formspreeResult, crmResult] = await Promise.allSettled([
      fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...leadPayload,
          _subject: "Nouveau lead chat IA O7",
          _cc: siteConfig.notificationEmails.join(","),
          message: `Lead chat IA O7 (${language}, ${siteCode})\n\n${message}`,
        }),
      }),
      sendToCrm(leadPayload, siteConfig),
    ]);

    const formspreeOk =
      formspreeResult.status === "fulfilled" && formspreeResult.value.ok;
    const crmOk = crmResult.status === "fulfilled" && crmResult.value.ok;

    if (!formspreeOk && !crmOk) {
      return withCors(
        request,
        { message: "Lead delivery failed." },
        { status: 502 }
      );
    }

    return withCors(request, { ok: true, formspreeOk, crmOk });
  } catch (error) {
    console.error("O7 lead error:", error);
    return withCors(
      request,
      { message: "Lead delivery failed." },
      { status: 500 }
    );
  }
}

async function sendToCrm(payload, siteConfig) {
  const webhookUrl = siteConfig.crmWebhookUrl;
  const secret = siteConfig.crmSecret;

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
