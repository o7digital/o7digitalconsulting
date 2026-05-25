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

const PRECONFIGURED_REPLIES = {
  securyti: [
    {
      id: "nist",
      patterns: [
        /\bnist\b/,
        /\bcsf\b/,
        /\bacreditacion\b/,
        /\baccreditation\b/,
        /\baccreditation\b/,
        /\bdiagnostico\b/,
        /\bdiagnosis\b/,
        /\bdiagnostic\b/,
      ],
      replies: {
        es: "SecuryTI ofrece un diagnostico rapido basado en el NIST Cybersecurity Framework. Esta pensado para PyMEs mexicanas que trabajan, o quieren trabajar, con clientes en Estados Unidos y Canada.\n\nEl sitio lo presenta como una evaluacion en 48 horas del nivel de alineacion con NIST CSF y una acreditacion digital verificable en blockchain, util para procesos comerciales, auditorias o licitaciones.\n\nPara orientarte bien, dime el giro de tu empresa, si ya te pidieron NIST y que fecha limite tienes.",
        en: "SecuryTI offers a fast diagnosis based on the NIST Cybersecurity Framework. It is designed for Mexican SMEs working, or planning to work, with customers in the United States and Canada.\n\nThe site presents it as a 48-hour evaluation of alignment with NIST CSF plus a verifiable digital accreditation on blockchain, useful for commercial processes, audits, or bids.\n\nTo guide you properly, please share your industry, whether a customer already requested NIST, and your deadline.",
        fr: "SecuryTI propose un diagnostic rapide base sur le NIST Cybersecurity Framework. Il s'adresse aux PME mexicaines qui travaillent, ou veulent travailler, avec des clients aux Etats-Unis et au Canada.\n\nLe site le presente comme une evaluation en 48h de l'alignement avec NIST CSF, avec une accreditation numerique verifiable sur blockchain, utile pour les demarches commerciales, audits ou appels d'offres.\n\nPour vous orienter, indiquez le secteur de votre entreprise, si NIST vous a deja ete demande, et votre delai.",
      },
    },
    {
      id: "audit",
      patterns: [
        /\baudit\b/,
        /\bauditoria\b/,
        /\bauditorias\b/,
        /\bevaluacion\b/,
        /\bevaluate\b/,
        /\bevaluation\b/,
      ],
      replies: {
        es: "Una auditoria de ciberseguridad SecuryTI analiza el nivel de seguridad de la empresa para identificar riesgos, brechas y prioridades antes de que afecten la operacion.\n\nPuede revisar controles, accesos, red, endpoints, nube, politicas y exposicion frente a amenazas. El objetivo es entregar hallazgos claros y acciones priorizadas.\n\nPara avanzar, dime si buscas una auditoria general, tecnica, de cumplimiento o previa a un cliente/proveedor.",
        en: "A SecuryTI cybersecurity audit analyzes the company's security level to identify risks, gaps, and priorities before they affect operations.\n\nIt can review controls, access, network, endpoints, cloud, policies, and exposure to threats. The goal is to provide clear findings and prioritized actions.\n\nTo move forward, please tell me whether you need a general, technical, compliance, or customer/vendor-driven audit.",
        fr: "Un audit de cybersecurite SecuryTI analyse le niveau de securite de l'entreprise afin d'identifier les risques, les failles et les priorites avant impact operationnel.\n\nIl peut couvrir controles, acces, reseau, endpoints, cloud, politiques et exposition aux menaces. L'objectif est de livrer des constats clairs et des actions priorisees.\n\nPour avancer, indiquez si vous cherchez un audit general, technique, de conformite ou demande par un client/fournisseur.",
      },
    },
    {
      id: "technology-consulting",
      patterns: [
        /\bconsultoria\b/,
        /\bconsulting\b/,
        /\bconseil\b/,
        /\barquitectura\b/,
        /\barchitecture\b/,
        /\bhardening\b/,
        /\bgobierno\b/,
        /\bgovernance\b/,
        /\broadmap\b/,
      ],
      replies: {
        es: "La consultoria tecnologica de SecuryTI ayuda a ordenar decisiones tecnicas de seguridad: arquitectura, controles, accesos, nube, proveedores, hardening y roadmap.\n\nEl enfoque es convertir riesgos en acciones concretas, alineadas con la operacion y las politicas internas de gestion de informacion.\n\nPara orientarte, dime que entorno quieres revisar: nube, red, accesos, proveedores, aplicacion, infraestructura o gobierno de seguridad.",
        en: "SecuryTI technology consulting helps structure security decisions around architecture, controls, access, cloud, vendors, hardening, and roadmap.\n\nThe focus is to turn risks into concrete actions aligned with operations and internal information management policies.\n\nTo guide you, please tell me what environment you want to review: cloud, network, access, vendors, application, infrastructure, or security governance.",
        fr: "Le conseil technologique SecuryTI aide a structurer les decisions de securite: architecture, controles, acces, cloud, fournisseurs, hardening et roadmap.\n\nL'objectif est de transformer les risques en actions concretes, alignees avec l'operation et les politiques internes de gestion de l'information.\n\nPour vous orienter, indiquez l'environnement concerne: cloud, reseau, acces, fournisseurs, application, infrastructure ou gouvernance securite.",
      },
    },
    {
      id: "compliance",
      patterns: [
        /\bcumplimiento\b/,
        /\bcompliance\b/,
        /\bconformite\b/,
        /\biso\b/,
        /\b27001\b/,
        /\bnormativa\b/,
        /\bregulacion\b/,
      ],
      replies: {
        es: "SecuryTI ayuda a las organizaciones a cumplir con normativas y marcos de seguridad, incluyendo referencias como NIST e ISO 27001 segun el contexto del proyecto.\n\nEl trabajo puede incluir diagnostico, brechas, controles, evidencias, politicas y prioridades para operar dentro del marco requerido.\n\nPara orientarte, dime que marco o requisito te estan pidiendo y si viene de un cliente, auditoria, licitacion o necesidad interna.",
        en: "SecuryTI helps organizations align with security regulations and frameworks, including references such as NIST and ISO 27001 depending on the project context.\n\nThe work can include diagnosis, gaps, controls, evidence, policies, and priorities to operate within the required framework.\n\nTo guide you, please share which framework or requirement you need and whether it comes from a customer, audit, bid, or internal need.",
        fr: "SecuryTI accompagne les organisations dans l'alignement avec des normes et referentiels de securite, dont NIST et ISO 27001 selon le contexte du projet.\n\nLe travail peut couvrir diagnostic, ecarts, controles, preuves, politiques et priorites pour operer dans le cadre requis.\n\nPour vous orienter, indiquez le referentiel demande et s'il vient d'un client, audit, appel d'offres ou besoin interne.",
      },
    },
    {
      id: "forensics",
      patterns: [
        /\bperitaje\b/,
        /\bpericial\b/,
        /\bforense\b/,
        /\bforensic\b/,
        /\binforme\b/,
        /\bevidencia\b/,
        /\bfraude\b/,
        /\blitigio\b/,
      ],
      replies: {
        es: "SecuryTI realiza peritajes e informes periciales informaticos para incidentes, fraudes, accesos no autorizados, disputas tecnicas o procesos internos/legales.\n\nEl enfoque es preservar evidencia, reconstruir hechos, analizar elementos tecnicos y documentar hallazgos de forma clara para direccion, legal, auditoria o areas tecnicas.\n\nSi hay evidencia sensible, no la compartas por chat. Dime el tipo de caso, urgencia y si ya existe un proceso legal o interno.",
        en: "SecuryTI prepares digital forensic reports for incidents, fraud, unauthorized access, technical disputes, or internal/legal processes.\n\nThe approach is to preserve evidence, reconstruct facts, analyze technical elements, and document findings clearly for management, legal, audit, or technical teams.\n\nIf there is sensitive evidence, do not share it in the chat. Please tell me the type of case, urgency, and whether there is already a legal or internal process.",
        fr: "SecuryTI realise des expertises et rapports periciaux informatiques pour incidents, fraudes, acces non autorises, litiges techniques ou procedures internes/juridiques.\n\nL'approche consiste a preserver les preuves, reconstruire les faits, analyser les elements techniques et documenter les constats pour direction, juridique, audit ou equipes techniques.\n\nSi des preuves sensibles existent, ne les partagez pas dans le chat. Indiquez le type de cas, l'urgence et s'il existe deja une procedure juridique ou interne.",
      },
    },
    {
      id: "training",
      patterns: [
        /\bformacion\b/,
        /\bcapacitacion\b/,
        /\btraining\b/,
        /\bformation\b/,
        /\bconcienciacion\b/,
        /\bawareness\b/,
        /\bphishing\b/,
      ],
      replies: {
        es: "La formacion en ciberseguridad de SecuryTI esta dirigida a empresas y se adapta a usuarios, liderazgo, TI y perfiles con privilegios elevados.\n\nPuede cubrir phishing, ingenieria social, manejo de informacion sensible, escalamiento de incidentes y habitos seguros en la operacion diaria.\n\nPara recomendarte un formato, dime numero aproximado de personas, perfiles a capacitar y principal riesgo que quieres reducir.",
        en: "SecuryTI cybersecurity training is designed for companies and can be adapted for users, leadership, IT teams, and privileged profiles.\n\nIt can cover phishing, social engineering, sensitive information handling, incident escalation, and secure habits in daily operations.\n\nTo suggest a format, please share the approximate number of people, target profiles, and the main risk you want to reduce.",
        fr: "La formation cybersecurite SecuryTI s'adresse aux entreprises et s'adapte aux utilisateurs, dirigeants, equipes IT et profils a privileges.\n\nElle peut couvrir phishing, ingenierie sociale, gestion d'information sensible, escalade d'incident et bonnes pratiques au quotidien.\n\nPour proposer un format, indiquez le nombre approximatif de personnes, les profils concernes et le risque principal a reduire.",
      },
    },
    {
      id: "incident-response",
      patterns: [
        /\bincidente\b/,
        /\bincident\b/,
        /\bransomware\b/,
        /\bataque\b/,
        /\battack\b/,
        /\bbrecha\b/,
        /\bcomprometid\b/,
        /\bhack\b/,
        /\bintrusion\b/,
      ],
      replies: {
        es: "Si sospechas de un incidente, lo importante es contener sin destruir evidencia: no borres archivos, no reinstales equipos y documenta hora, sistemas afectados y sintomas.\n\nSecuryTI puede apoyar con analisis, contencion, respuesta a incidentes y recomendaciones posteriores.\n\nPor seguridad, no compartas credenciales ni evidencia sensible por chat. Deja tus datos y describe urgencia, sistemas afectados y desde cuando ocurre para que un asesor te contacte.",
        en: "If you suspect an incident, the priority is containment without destroying evidence: do not delete files, do not reinstall machines, and document time, affected systems, and symptoms.\n\nSecuryTI can support analysis, containment, incident response, and follow-up recommendations.\n\nFor safety, do not share credentials or sensitive evidence in chat. Leave your contact details and describe urgency, affected systems, and when it started so an advisor can contact you.",
        fr: "Si vous suspectez un incident, la priorite est de contenir sans detruire les preuves: ne supprimez pas de fichiers, ne reinstallez pas les machines, documentez l'heure, les systemes affectes et les symptomes.\n\nSecuryTI peut accompagner analyse, confinement, reponse a incident et recommandations.\n\nPour securite, ne partagez pas d'identifiants ni preuves sensibles dans le chat. Laissez vos coordonnees et indiquez urgence, systemes affectes et date de debut pour qu'un conseiller vous contacte.",
      },
    },
    {
      id: "pentest",
      patterns: [
        /\bpentest\b/,
        /\bpenetration\b/,
        /\bintrusion test\b/,
        /\bprueba de penetracion\b/,
        /\bpruebas de penetracion\b/,
      ],
      replies: {
        es: "SecuryTI puede orientar sobre pruebas de penetracion para evaluar exposicion tecnica, vulnerabilidades y riesgos explotables en aplicaciones, red o infraestructura.\n\nPara definir alcance, normalmente se necesita saber si el objetivo es web, red interna, nube, endpoints o un requisito de cliente/auditoria.\n\nDime que quieres probar, si tienes ventana de pruebas y si el alcance ya esta autorizado.",
        en: "SecuryTI can guide penetration testing to evaluate technical exposure, vulnerabilities, and exploitable risks in applications, network, or infrastructure.\n\nTo define scope, it is usually necessary to know whether the target is web, internal network, cloud, endpoints, or a customer/audit requirement.\n\nPlease tell me what you want to test, whether you have a testing window, and whether the scope is already authorized.",
        fr: "SecuryTI peut orienter des tests d'intrusion pour evaluer exposition technique, vulnerabilites et risques exploitables sur applications, reseau ou infrastructure.\n\nPour definir le perimetre, il faut generalement savoir si la cible est web, reseau interne, cloud, endpoints ou une exigence client/audit.\n\nIndiquez ce que vous voulez tester, si une fenetre de test existe et si le perimetre est autorise.",
      },
    },
    {
      id: "pricing",
      patterns: [
        /\bprecio\b/,
        /\bprecios\b/,
        /\btarifa\b/,
        /\btarifas\b/,
        /\bcosto\b/,
        /\bcotizacion\b/,
        /\bquote\b/,
        /\bprice\b/,
        /\bpricing\b/,
        /\bdevis\b/,
        /\btarif\b/,
      ],
      replies: {
        es: "Los precios dependen del servicio, alcance, tamano de la empresa, urgencia y sistemas a revisar. Para evitar darte una cifra incorrecta, SecuryTI debe validar primero el contexto.\n\nDime que necesitas: NIST, auditoria, consultoria, cumplimiento, peritaje, formacion, pentest o incidente. Tambien deja nombre, empresa, email y telefono para que un asesor te prepare una cotizacion.",
        en: "Pricing depends on the service, scope, company size, urgency, and systems to review. To avoid giving an incorrect number, SecuryTI needs to validate the context first.\n\nPlease tell me what you need: NIST, audit, consulting, compliance, forensic report, training, pentest, or incident response. Also leave name, company, email, and phone so an advisor can prepare a quote.",
        fr: "Les tarifs dependent du service, du perimetre, de la taille de l'entreprise, de l'urgence et des systemes a analyser. Pour eviter une estimation incorrecte, SecuryTI doit d'abord valider le contexte.\n\nIndiquez votre besoin: NIST, audit, conseil, conformite, expertise, formation, pentest ou incident. Laissez aussi nom, entreprise, email et telephone pour qu'un conseiller prepare un devis.",
      },
    },
    {
      id: "contact",
      patterns: [
        /\bcontacto\b/,
        /\bcontact\b/,
        /\btelefono\b/,
        /\bphone\b/,
        /\bemail\b/,
        /\bcorreo\b/,
        /\bdireccion\b/,
        /\baddress\b/,
        /\boficina\b/,
      ],
      replies: {
        es: "Puedes contactar a SecuryTI en contacto@securyti.mx o al +52 1 55 6350 2870.\n\nLa oficina indicada en el sitio es Montes Urales 755, Lomas-Virreyes, Lomas de Chapultepec.\n\nTambien puedes dejar tus datos en este chat para que un asesor te contacte.",
        en: "You can contact SecuryTI at contacto@securyti.mx or +52 1 55 6350 2870.\n\nThe office shown on the site is Montes Urales 755, Lomas-Virreyes, Lomas de Chapultepec.\n\nYou can also leave your details in this chat so an advisor can contact you.",
        fr: "Vous pouvez contacter SecuryTI a contacto@securyti.mx ou au +52 1 55 6350 2870.\n\nL'adresse indiquee sur le site est Montes Urales 755, Lomas-Virreyes, Lomas de Chapultepec.\n\nVous pouvez aussi laisser vos coordonnees dans ce chat pour qu'un conseiller vous contacte.",
      },
    },
  ],
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

function normalizeForMatch(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getPreconfiguredReply(siteCode, language, message) {
  const replies = PRECONFIGURED_REPLIES[siteCode];
  if (!replies) return null;

  const value = normalizeForMatch(message);
  const pricingMatch = replies.find((entry) => entry.id === "pricing" && entry.patterns.some((pattern) => pattern.test(value)));
  const match = pricingMatch || replies.find((entry) => entry.patterns.some((pattern) => pattern.test(value)));

  return match?.replies?.[language] || match?.replies?.es || null;
}

function isBroadServiceInterest(message) {
  const value = normalizeForMatch(message);

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

    const preconfiguredReply = getPreconfiguredReply(siteCode, lang, cleanMessage);
    if (preconfiguredReply) {
      return withCors(request, { reply: preconfiguredReply });
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
