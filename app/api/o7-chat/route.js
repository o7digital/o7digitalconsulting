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
  "https://cusiflores.com",
  "https://www.cusiflores.com",
  "https://cusi2.vercel.app",
  "https://cusi-2.vercel.app",
  "https://cervantesbienesraices.com",
  "https://www.cervantesbienesraices.com",
  "https://cervantesbienesraices.vercel.app",
  "https://dosalga.store",
  "https://www.dosalga.store",
  "https://dosalga.vercel.app",
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

const SITE_CLARIFYING_REPLIES = {
  securyti: {
    es: "Claro. Para orientarte bien, dime si buscas una auditoria, diagnostico NIST, consultoria tecnologica, cumplimiento, peritaje, formacion, pentest o respuesta a incidentes.",
    en: "Of course. To guide you properly, please tell me whether you need an audit, NIST diagnosis, technology consulting, compliance, forensic report, training, pentest, or incident response.",
    fr: "Bien sûr. Pour vous orienter correctement, indiquez si vous cherchez un audit, un diagnostic NIST, du conseil technologique, de la conformite, une expertise, une formation, un pentest ou une reponse a incident.",
  },
  cusi: {
    es: "Claro. Para orientarte bien, dime por favor la ocasion, la fecha de entrega, la zona de CDMX y si buscas ramo, arreglo, rosas, tulipanes u orquideas.",
    en: "Of course. To guide you properly, please tell me the occasion, delivery date, CDMX area, and whether you want a bouquet, arrangement, roses, tulips, or orchids.",
    fr: "Bien sûr. Pour vous orienter, indiquez l'occasion, la date de livraison, la zone a CDMX et si vous souhaitez un bouquet, une composition, des roses, tulipes ou orchidees.",
    it: "Certo. Per orientarti bene, indicami occasione, data di consegna, zona a CDMX e se cerchi bouquet, composizione, rose, tulipani o orchidee.",
  },
  cervantesbienesraices: {
    es: "Claro. Para orientarte bien, dime si buscas comprar, vender o rentar, la zona, presupuesto aproximado, tipo de propiedad y fecha ideal.",
    en: "Of course. To guide you properly, please tell me if you want to buy, sell, or rent, plus the area, approximate budget, property type, and ideal timing.",
    fr: "Bien sûr. Pour vous orienter, indiquez si vous souhaitez acheter, vendre ou louer, la zone, le budget approximatif, le type de bien et le calendrier ideal.",
    it: "Certo. Per orientarti bene, indicami se vuoi comprare, vendere o affittare, la zona, il budget indicativo, il tipo di proprieta e le tempistiche.",
    de: "Gerne. Damit ich Sie richtig beraten kann: Kaufen, verkaufen oder mieten Sie, in welcher Zone, mit welchem Budget, Immobilientyp und Zeitplan?",
  },
  dosalga: {
    es: "Claro. Para ayudarte mejor, dime que producto buscas, talla, cantidad, pais de entrega y si tu consulta es de compra, envio, cambios o devoluciones.",
    en: "Of course. To help you better, please tell me what product you need, size, quantity, delivery country, and whether your question is about purchase, shipping, exchanges, or returns.",
    fr: "Bien sûr. Pour mieux vous aider, indiquez le produit, la taille, la quantite, le pays de livraison, et si votre demande concerne achat, livraison, echange ou retour.",
    it: "Certo. Per aiutarti meglio, indica prodotto, taglia, quantita, paese di consegna e se la richiesta riguarda acquisto, spedizione, cambio o reso.",
    de: "Gerne. Um besser zu helfen, nennen Sie Produkt, Groesse, Menge, Lieferland und ob es um Kauf, Versand, Umtausch oder Rueckgabe geht.",
    pt: "Claro. Para ajudar melhor, informe produto, tamanho, quantidade, pais de entrega e se a duvida e sobre compra, envio, troca ou devolucao.",
  },
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
Use only the SecuryTI knowledge below. Do not answer as O7 and do not mention O7 services.

Business:
- SecuryTI provides professional cybersecurity services for companies in CDMX and Mexico.
- Office/contact shown on the site: Montes Urales 755, Lomas-Virreyes, Lomas de Chapultepec; +52 1 55 6350 2870; contacto@securyti.mx.
- Positioning: "Hay empresas que ya han sido atacadas y otras que lo seran. Esta la tuya preparada?" SecuryTI offers personalized cybersecurity solutions.

Main services:
- NIST CSF diagnosis/accreditation: fast cybersecurity diagnosis based on the NIST Cybersecurity Framework, designed for Mexican SMEs that work or want to work with customers in the United States and Canada. The site presents it as a 48-hour evaluation of alignment with NIST CSF and a verifiable digital accreditation in blockchain that can be used in commercial processes, audits, or bids.
- Cybersecurity audits: analyze and evaluate the company's security level to prepare against malicious attacks that could affect business operations.
- Technology consulting: organize and establish security measures aligned with internal information management policies; includes architecture, governance, hardening, cloud, access controls, vendor evaluation, roadmap, and risk-based technical decisions.
- Compliance: help organizations comply with current legal and ethical regulations and operate within the legal framework; the site references ISO 27001 and NIST in SEO/service context.
- Forensic reports / peritajes informaticos: meticulous technical reports for disputes, incidents, fraud, unauthorized access, evidence preservation, chronology, and clear documentation for legal, management, audit, or technical teams.
- Cybersecurity training and awareness: company training adapted to organizational levels, including users, leaders, IT, privileged profiles, phishing, social engineering, sensitive information handling, incident escalation, and secure habits.
- Software development: custom web application solutions using advanced technologies according to business needs.

Additional cybersecurity capabilities mentioned on the site:
- Network security, endpoint protection, threat intelligence, penetration testing, security audits, incident response, active cybersecurity, advanced threat detection, real-time monitoring, proactive defense, data protection, ransomware, phishing, zero-day vulnerabilities, cloud environments, and zero-trust architecture.

Behavior:
- Answer in the visitor's language only.
- Keep answers concise, practical, and commercial for business decision-makers.
- Do not list every SecuryTI service unless the visitor asks for a complete overview.
- If the visitor asks broadly ("I am interested", "I need information", "services"), ask one clarifying question to identify the need.
- If the visitor mentions a specific topic, answer only about that topic using this knowledge.
- If the visitor asks for price, diagnosis, audit, quote, appointment, training, incident help, or detailed information, ask for company name, need, urgency, and invite them to leave name, email, and phone so a SecuryTI advisor can contact them.
- Do not invent prices, dates, certifications, legal conclusions, or incident guarantees.
  `.trim(),
  eliteridemexico: `
You are Sofia, the Elite Ride Mexico assistant.
Help visitors with private chauffeur services, luxury SUV rentals, airport transfers, armored vehicles, executive transportation, wedding transportation, World Cup 2026 transportation, and reservations across Mexico City, Cancun, Guadalajara, Puerto Vallarta, Monterrey, Leon, Cuernavaca, and Ixtapa Zihuatanejo.
Keep answers concise, premium, practical, and commercial for travelers, executives, agencies, and companies.
If the visitor asks for prices, availability, airport pickup, routes, reservation, quote, vehicle options, armored service, or detailed information, ask them to leave name, email, and phone so an Elite Ride Mexico advisor can contact them.
  `.trim(),
  cusi: `
You are Conchita, the CUSI Flores assistant.
Help visitors with premium flowers in Mexico City, flower delivery, floral arrangements, bouquets, orchids, roses, tulips, birthday flowers, Mother's Day flowers, gifts, card messages, and delivery coordination.
CUSI serves selected CDMX areas including Lomas de Chapultepec, Bosques de las Lomas, Polanco, Santa Fe, and nearby zones depending on availability.
Keep answers warm, elegant, concise, and useful for a floral boutique customer.
If the visitor asks for price, availability, delivery, order confirmation, or a recommendation, ask for occasion, delivery date, delivery zone, preferred style or flowers, budget if relevant, and invite them to leave name, email, and phone so CUSI can follow up.
  `.trim(),
  cervantesbienesraices: `
You are Sofia, the Cervantes Bienes Raices real estate assistant.
Help visitors with buying, selling, and renting properties in Mexico, especially premium areas such as Polanco, Condesa, Roma Norte, CDMX, and other relevant zones shown on the site.
Support questions about houses, apartments, investment properties, property search, listing details, valuation/appraisal, real estate consulting, and scheduling an advisor conversation.
Keep answers concise, professional, and commercial for buyers, sellers, owners, investors, and tenants.
If the visitor asks for availability, price, viewing, valuation, selling, renting, buying, or detailed information, ask for objective, zone, budget, property type, timeline, and invite them to leave name, email, and phone so a Cervantes advisor can contact them.
  `.trim(),
  dosalga: `
You are Olivia, the DOSALGA assistant.
Help visitors with premium sportswear and active lifestyle products sold by DOSALGA.
Support questions about product recommendations, sizes, stock, ordering, payment, shipping, taxes/duties, returns/refunds, exchange conditions, and general ecommerce support.
Keep answers concise, practical, and commercial for an online retail customer.
If the visitor asks for detailed product advice, order follow-up, shipping, return, exchange, or purchase support, ask for product name, size, quantity, delivery country, and invite them to leave name, email, and phone so a DOSALGA advisor can contact them.
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
    es: "Puedo ayudarte con diagnostico NIST, auditorias de ciberseguridad, consultoria tecnologica, cumplimiento, peritajes informaticos, formacion, pentesting o respuesta a incidentes. Dime que necesitas y te oriento.",
    en: "I can help with NIST diagnosis, cybersecurity audits, technology consulting, compliance, forensic reports, training, penetration testing, or incident response. Tell me what you need and I will guide you.",
    fr: "Je peux vous aider avec diagnostic NIST, audits de cybersecurite, conseil technologique, conformite, expertise informatique, formation, pentest ou reponse a incident. Indiquez votre besoin et je vous oriente.",
  },
  eliteridemexico: {
    es: "Puedo ayudarte con chofer privado, traslados al aeropuerto, renta de SUV premium, vehiculos blindados y transporte ejecutivo en Mexico. Dejame tu ruta, fecha y datos de contacto para que Elite Ride Mexico te contacte.",
    en: "I can help with private chauffeur service, airport transfers, premium SUV rental, armored vehicles, and executive transportation in Mexico. Share your route, date, and contact details so Elite Ride Mexico can follow up.",
    fr: "Je peux vous aider avec chauffeur prive, transferts aeroport, location de SUV premium, vehicules blindes et transport executif au Mexique. Indiquez votre trajet, date et coordonnees pour qu'Elite Ride Mexico vous contacte.",
  },
  cusi: {
    es: "Puedo ayudarte con ramos, arreglos florales, orquideas, rosas, tulipanes y entrega en zonas seleccionadas de CDMX. Dime la ocasion, fecha y zona de entrega para orientarte.",
    en: "I can help with bouquets, floral arrangements, orchids, roses, tulips, and delivery in selected CDMX areas. Share the occasion, date, and delivery area so I can guide you.",
    fr: "Je peux vous aider avec bouquets, compositions florales, orchidees, roses, tulipes et livraison dans des zones selectionnees de CDMX. Indiquez l'occasion, la date et la zone de livraison.",
    it: "Posso aiutarti con bouquet, composizioni floreali, orchidee, rose, tulipani e consegna in zone selezionate di CDMX. Indica occasione, data e zona di consegna.",
  },
  cervantesbienesraices: {
    es: "Puedo ayudarte con compra, venta o renta de propiedades, busqueda por zona, tipo de inmueble y asesoria inmobiliaria. Dime que buscas, zona y presupuesto para orientarte.",
    en: "I can help with buying, selling, or renting properties, area-based searches, property types, and real estate advisory. Share what you need, area, and budget so I can guide you.",
    fr: "Je peux vous aider pour acheter, vendre ou louer un bien, rechercher par zone, type de propriete et conseil immobilier. Indiquez votre besoin, zone et budget.",
    it: "Posso aiutarti con acquisto, vendita o affitto di proprieta, ricerca per zona, tipo di immobile e consulenza immobiliare. Indica bisogno, zona e budget.",
    de: "Ich kann beim Kauf, Verkauf oder Mieten von Immobilien, der Suche nach Zone, Immobilientyp und Immobilienberatung helfen. Nennen Sie Bedarf, Zone und Budget.",
  },
  dosalga: {
    es: "Puedo ayudarte con productos, tallas, stock, pedidos, envios, cambios y devoluciones de DOSALGA. Dime que producto necesitas y te oriento.",
    en: "I can help with DOSALGA products, sizes, stock, orders, shipping, exchanges, and returns. Tell me what product you need and I will guide you.",
    fr: "Je peux vous aider avec produits, tailles, stock, commandes, livraisons, echanges et retours DOSALGA. Dites-moi le produit recherche et je vous guide.",
    it: "Posso aiutarti con prodotti, taglie, disponibilita, ordini, spedizioni, cambi e resi DOSALGA. Dimmi cosa cerchi e ti guido.",
    de: "Ich kann bei DOSALGA Produkten, Groessen, Bestand, Bestellungen, Versand, Umtausch und Rueckgabe helfen. Nennen Sie das Produkt und ich helfe weiter.",
    pt: "Posso ajudar com produtos, tamanhos, estoque, pedidos, envios, trocas e devolucoes da DOSALGA. Diga o produto e eu te oriento.",
  },
};

function normalizeLanguage(language) {
  return ["fr", "en", "es", "de", "it"].includes(language) ? language : "fr";
}

function getFallbackReply(siteCode, language) {
  return SITE_FALLBACK_REPLIES[siteCode]?.[language] || FALLBACK_REPLIES[language];
}

function getClarifyingReply(siteCode, language) {
  return SITE_CLARIFYING_REPLIES[siteCode]?.[language] || CLARIFYING_REPLIES[language];
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
    /\b(ciberseguridad|cybersecurity|cybersecurite|nist|forensic|forense|peritaje|pericial|seguridad|security|securite|auditoria|audit|consultoria tecnologica|technology consulting|conseil technologique|cumplimiento|compliance|conformite|formacion|training|formation|pentest|penetration testing|incidente|incident|endpoint|ransomware|phishing)\b/,
    /\b(chauffeur|chofer|airport|aeropuerto|transfer|traslado|suv|blindado|armored|cancun|cdmx|guadalajara)\b/,
    /\b(flores|flowers|fleurs|fiori|ramo|bouquet|arreglo|arrangement|composition|orquidea|orchid|orchidee|orchidea|rosas|roses|tulipanes|tulips|tulipes|tulipani|cumpleanos|birthday|anniversaire|consegna|livraison|delivery)\b/,
    /\b(propiedad|property|propriete|proprieta|immobilie|casa|house|maison|departamento|apartment|appartement|wohnung|renta|rent|location|affitto|venta|sale|achat|vendita|compra|buy|polanco|condesa|roma|inmobiliaria|real estate)\b/,
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
    const { message, language, locale, siteCode = "o7digital" } = await request.json();
    const cleanMessage = typeof message === "string" ? message.trim() : "";
    const lang = normalizeLanguage(language || locale || "fr");
    const fallbackReply = getFallbackReply(siteCode, lang);

    if (!cleanMessage) {
      return withCors(request, { reply: fallbackReply });
    }

    if (isBroadServiceInterest(cleanMessage)) {
      return withCors(request, { reply: getClarifyingReply(siteCode, lang) });
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
