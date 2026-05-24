import { NextResponse } from "next/server";

const defaultAllowedOrigins = [
  "https://www.o7digital.com",
  "https://o7digital.com",
  "https://jeanlouisdavid.com.mx",
  "https://www.jeanlouisdavid.com.mx",
  "https://satelliteguard.com.mx",
  "https://www.satelliteguard.com.mx",
  "https://satelite-guard.vercel.app",
  "https://satelite-guuard.vercel.app",
  "https://securyti.mx",
  "https://www.securyti.mx",
  "https://securyti.vercel.app",
  "https://eliteridemexico.com",
  "https://www.eliteridemexico.com",
  "https://elite-ride-mexico.vercel.app",
  "https://eliteridemexico.vercel.app",
];

const FALLBACK_REPLIES = {
  fr: "Je peux vous aider sur le SEO technique, la performance web, une refonte, un projet React/Next.js/Astro, l'IA ou un accompagnement CTO. Donnez-moi quelques lignes sur votre besoin et je vous orienterai.",
  en: "I can help with technical SEO, web performance, redesigns, React/Next.js/Astro projects, AI integration, or fractional CTO support. Share a few details and I will guide you.",
  es: "Puedo ayudarte con SEO técnico, rendimiento web, rediseño, proyectos React/Next.js/Astro, IA o acompañamiento CTO. Cuéntame tu necesidad y te oriento.",
  de: "Ich kann bei technischem SEO, Web-Performance, Relaunch, React/Next.js/Astro-Projekten, KI oder CTO-Unterstützung helfen. Beschreiben Sie kurz Ihr Anliegen.",
  it: "Posso aiutarti con SEO tecnico, performance web, redesign, progetti React/Next.js/Astro, AI o supporto CTO. Raccontami brevemente la tua esigenza.",
};

const LANGUAGE_NAMES = {
  fr: "French",
  en: "English",
  es: "Spanish",
  de: "German",
  it: "Italian",
};

const CLARIFYING_REPLIES = {
  fr: "Bien sûr. Pour vous orienter correctement, pouvez-vous me préciser ce que vous cherchez exactement : un audit, un devis, une refonte, une question technique, un rendez-vous ou un service spécifique ?",
  en: "Of course. To guide you properly, could you specify what you need: an audit, a quote, a redesign, a technical question, an appointment, or a specific service?",
  es: "Claro. Para orientarte bien, puedes precisar que necesitas: una auditoria, una cotizacion, un rediseño, una pregunta tecnica, una cita o un servicio especifico?",
  de: "Gerne. Damit ich Sie richtig einordnen kann: Geht es um ein Audit, ein Angebot, einen Relaunch, eine technische Frage, einen Termin oder einen bestimmten Service?",
  it: "Certo. Per orientarti correttamente, puoi precisare cosa ti serve: un audit, un preventivo, un redesign, una domanda tecnica, un appuntamento o un servizio specifico?",
};

const SITE_CONTEXTS = {
  jeanlouisdavid: `
You are Olivia, the Jean Louis David Mexico salon assistant.
Help visitors with salon services, appointments, branches, haircuts, color, treatments, barberia, manicure, pedicure, and general information.
Keep answers warm, concise, and useful for a salon customer.
If the visitor asks for an appointment, quote, detailed service information, or availability, ask them to leave name, email, and phone so a Jean Louis David advisor can contact them.
  `.trim(),
  sateliteguard: `
You are Sofia, the Satellite Guard assistant.
Help visitors with GPS tracking, vehicle monitoring, fleet control, geofences, real-time alerts, asset tracking, security, and sales questions.
Keep answers concise, practical, and commercial for companies or vehicle owners in Mexico.
If the visitor asks for prices, a demo, installation, coverage, a quote, or detailed information, ask them to leave name, email, and phone so a Satellite Guard advisor can contact them.
  `.trim(),
  securyti: `
You are Olivia, the SecuryTI assistant.
Help visitors with cybersecurity consulting, NIST accreditation, technology consulting, cyber training, forensic reports, security audits, risk management, and incident response.
Keep answers concise, practical, and commercial for companies in Mexico.
If the visitor asks for prices, a diagnosis, audit, quote, appointment, training, or detailed information, ask them to leave name, email, and phone so a SecuryTI advisor can contact them.
  `.trim(),
  eliteridemexico: `
You are Sofia, the Elite Ride Mexico assistant.
Help visitors with private chauffeur services, luxury SUV rentals, airport transfers, armored vehicles, executive transportation, wedding transportation, World Cup 2026 transportation, and reservations across Mexico City, Cancun, Guadalajara, Puerto Vallarta, Monterrey, Leon, Cuernavaca, and Ixtapa Zihuatanejo.
Keep answers concise, premium, practical, and commercial for travelers, executives, agencies, and companies.
If the visitor asks for prices, availability, airport pickup, routes, reservation, quote, vehicle options, armored service, or detailed information, ask them to leave name, email, and phone so an Elite Ride Mexico advisor can contact them.
  `.trim(),
};

const SITE_FALLBACK_REPLIES = {
  jeanlouisdavid: {
    es: "Puedo ayudarte con servicios de salon, citas, sucursales, cortes, color, tratamientos, barberia, manicure y pedicure. Dejame tu necesidad y un asesor de Jean Louis David te contactara.",
    en: "I can help with salon services, appointments, branches, haircuts, color, treatments, barber services, manicure, and pedicure. Share what you need and a Jean Louis David advisor will contact you.",
    fr: "Je peux vous aider pour les services du salon, les rendez-vous, les succursales, coupes, colorations, soins, barberie, manucure et pedicure. Indiquez votre besoin et un conseiller Jean Louis David vous recontactera.",
  },
  sateliteguard: {
    es: "Puedo ayudarte con rastreo GPS, monitoreo vehicular, control de flotillas, geocercas, alertas y seguridad. Dejame tu necesidad y un asesor de Satellite Guard te contactara.",
    en: "I can help with GPS tracking, vehicle monitoring, fleet control, geofences, alerts, and security. Share what you need and a Satellite Guard advisor will contact you.",
  },
  securyti: {
    es: "Puedo ayudarte con consultoria en ciberseguridad, acreditacion NIST, auditorias, formacion, peritajes e informes periciales. Dejame tu necesidad y un asesor de SecuryTI te contactara.",
    en: "I can help with cybersecurity consulting, NIST accreditation, audits, training, forensic reports, and security programs. Share what you need and a SecuryTI advisor will contact you.",
    fr: "Je peux vous aider avec le conseil en cybersecurite, l'accreditation NIST, les audits, la formation et les rapports d'expertise. Indiquez votre besoin et un conseiller SecuryTI vous contactera.",
  },
  eliteridemexico: {
    es: "Puedo ayudarte con chofer privado, traslados al aeropuerto, renta de SUV premium, vehiculos blindados y transporte ejecutivo en Mexico. Dejame tu ruta, fecha y datos de contacto para que Elite Ride Mexico te contacte.",
    en: "I can help with private chauffeur service, airport transfers, premium SUV rental, armored vehicles, and executive transportation in Mexico. Share your route, date, and contact details so Elite Ride Mexico can follow up.",
    fr: "Je peux vous aider avec chauffeur prive, transferts aeroport, location de SUV premium, vehicules blindes et transport executif au Mexique. Indiquez votre trajet, date et coordonnees pour qu'Elite Ride Mexico vous contacte.",
  },
};

function normalizeLanguage(language) {
  return ["fr", "en", "es", "de", "it"].includes(language) ? language : "fr";
}

function getFallbackReply(siteCode, language) {
  return SITE_FALLBACK_REPLIES[siteCode]?.[language] || FALLBACK_REPLIES[language];
}

function isBroadServiceInterest(message) {
  const value = message
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const broadPatterns = [
    /\b(interesse|interesado|interesada|interested|interessiert|interessato|interessata)\b.*\b(service|services|servicio|servicios|servizi|dienstleistung)/,
    /\b(vos|sus|your|votre|tu|leurs|their)\b.*\b(service|services|servicio|servicios|servizi)/,
    /\b(info|information|informacion|informations)\b.*\b(service|services|servicio|servicios|servizi)/,
    /\b(que proposez vous|que ofrecen|what do you offer|cosa offrite|was bieten)\b/,
    /\b(j ai besoin d aide|j'ai besoin d'aide|necesito ayuda|i need help|besoin d aide|besoin d'aide)\b/,
  ];

  const specificPatterns = [
    /\b(seo|audit|core web vitals|react|next|astro|ia|ai|cto|refonte|performance|site web|web|prix|tarif|devis|quote|cotizacion|cita|appointment|rendez-vous)\b/,
    /\b(coupe|color|salon|manicure|pedicure|barber|cita|sucursal|cabello|hair)\b/,
    /\b(gps|rastreo|tracking|flotte|fleet|vehiculo|vehicle|geocerca|alerta)\b/,
    /\b(ciberseguridad|cybersecurity|nist|forensic|peritaje|seguridad|security|auditoria)\b/,
    /\b(chauffeur|chofer|airport|aeropuerto|transfer|traslado|suv|blindado|armored|cancun|cdmx|guadalajara)\b/,
  ];

  return broadPatterns.some((pattern) => pattern.test(value)) && !specificPatterns.some((pattern) => pattern.test(value));
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

function getResponseText(data) {
  if (typeof data?.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const text = data?.output
    ?.flatMap((item) => item?.content || [])
    ?.find((part) => part?.type === "output_text" && part?.text)?.text;

  return typeof text === "string" && text.trim() ? text.trim() : null;
}

export async function OPTIONS(request) {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(request),
  });
}

export async function POST(request) {
  try {
    const { message, language = "fr", siteCode = "o7digital" } = await request.json();
    const cleanMessage = typeof message === "string" ? message.trim() : "";
    const lang = normalizeLanguage(language);
    const fallbackReply = getFallbackReply(siteCode, lang);

    if (!cleanMessage) {
      return withCors(request, { reply: fallbackReply });
    }

    if (isBroadServiceInterest(cleanMessage)) {
      return withCors(request, { reply: CLARIFYING_REPLIES[lang] });
    }

    if (!process.env.OPENAI_API_KEY) {
      return withCors(request, { reply: fallbackReply });
    }

    const siteContext = SITE_CONTEXTS[siteCode] || `
You are the O7 Digital Consulting website assistant.
Business context:
- O7 Digital Consulting helps companies with technical SEO, Core Web Vitals, high-performance websites, React, Next.js, Astro, web architecture, UX/UI, automation, AI integration, and CTO as a Service.
    `.trim();

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.O7_CHAT_MODEL || "gpt-5.4-mini",
        instructions: `
Answer in ${LANGUAGE_NAMES[lang]} only.
Site code: ${siteCode}.

${siteContext}
- Keep answers concise, practical, and commercial.
- Do not dump a full list of services when the visitor asks a broad or vague question.
- If the visitor only says they are interested in services, asks for information in general, or does not mention a concrete need, ask one short clarifying question.
- Use the site context only to answer the specific need mentioned by the visitor.
- Do not invent pricing, timelines, guarantees, or legal commitments.
- If the visitor wants a quote, audit, appointment, proposal, or detailed information, invite them to leave name, email, and phone in the chat form so the team can follow up.
- Never ask for sensitive personal data.
        `.trim(),
        input: cleanMessage,
        max_output_tokens: 260,
      }),
    });

    if (!response.ok) {
      return withCors(request, { reply: fallbackReply });
    }

    const data = await response.json();
    return withCors(request, { reply: getResponseText(data) || fallbackReply });
  } catch (error) {
    console.error("O7 chat error:", error);
    return withCors(request, { reply: FALLBACK_REPLIES.fr }, { status: 200 });
  }
}
