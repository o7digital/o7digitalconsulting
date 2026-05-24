import { NextResponse } from "next/server";

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

function normalizeLanguage(language) {
  return ["fr", "en", "es", "de", "it"].includes(language) ? language : "fr";
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

export async function POST(request) {
  try {
    const { message, language = "fr", siteCode = "o7digital" } = await request.json();
    const cleanMessage = typeof message === "string" ? message.trim() : "";
    const lang = normalizeLanguage(language);

    if (!cleanMessage) {
      return NextResponse.json({ reply: FALLBACK_REPLIES[lang] });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ reply: FALLBACK_REPLIES[lang] });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.O7_CHAT_MODEL || "gpt-5.4-mini",
        instructions: `
You are the O7 Digital Consulting website assistant.
Answer in ${LANGUAGE_NAMES[lang]} only.
Site code: ${siteCode}.

Business context:
- O7 Digital Consulting helps companies with technical SEO, Core Web Vitals, high-performance websites, React, Next.js, Astro, web architecture, UX/UI, automation, AI integration, and CTO as a Service.
- Keep answers concise, practical, and commercial.
- Do not invent pricing, timelines, guarantees, or legal commitments.
- If the visitor wants a quote, audit, appointment, proposal, or detailed information, invite them to leave name, email, and phone in the chat form so the team can follow up.
- Never ask for sensitive personal data.
        `.trim(),
        input: cleanMessage,
        max_output_tokens: 260,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ reply: FALLBACK_REPLIES[lang] });
    }

    const data = await response.json();
    return NextResponse.json({ reply: getResponseText(data) || FALLBACK_REPLIES[lang] });
  } catch (error) {
    console.error("O7 chat error:", error);
    return NextResponse.json({ reply: FALLBACK_REPLIES.fr }, { status: 200 });
  }
}
