"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const COPY = {
  fr: {
    title: "Olivia, assistante o7Digital",
    status: "En ligne",
    welcome: "Bonjour, en quoi puis-je vous aider ?",
    placeholder: "Expliquez votre besoin...",
    send: "Envoyer",
    open: "Ouvrir le chat",
    close: "Fermer le chat",
    teaser: "Olivia peut vous aider",
    leadIntro: "Avant de commencer, indiquez vos coordonnées pour qu'un conseiller o7Digital puisse vous contacter.",
    firstName: "Prénom",
    lastName: "Nom",
    email: "Email",
    phone: "Téléphone",
    company: "Entreprise",
    details: "Décrivez votre besoin",
    submitLead: "Envoyer mes coordonnées",
    leadThanks: "Merci, vos coordonnées ont bien été transmises. L'équipe o7Digital vous répondra rapidement.",
    leadMissing: "Merci de compléter tous les champs demandés.",
    consent: "J’ai lu et j’accepte la",
    privacyNotice: "politique de confidentialité",
    consentRequired: "Veuillez lire et accepter la politique de confidentialité pour continuer.",
    error: "Je rencontre un souci temporaire. Vous pouvez aussi écrire à info@o7digitalgroup.com.",
  },
  en: {
    title: "Olivia, o7Digital Assistant",
    status: "Online",
    welcome: "Hello, how can I help you?",
    placeholder: "Tell me what you need...",
    send: "Send",
    open: "Open chat",
    close: "Close chat",
    teaser: "Olivia can help",
    leadIntro: "Before we start, please leave your contact details so an o7Digital advisor can contact you.",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    details: "Describe your needs",
    submitLead: "Send my details",
    leadThanks: "Thanks, your details have been sent. The o7Digital team will reply shortly.",
    leadMissing: "Please complete all required fields.",
    consent: "I have read and accept the",
    privacyNotice: "Privacy Notice",
    consentRequired: "Please read and accept the Privacy Notice to continue.",
    error: "I am having a temporary issue. You can also write to info@o7digitalgroup.com.",
  },
  es: {
    title: "Olivia, asistente o7Digital",
    status: "En linea",
    welcome: "Hola, en que puedo ayudarte?",
    placeholder: "Explica tu necesidad...",
    send: "Enviar",
    open: "Abrir chat",
    close: "Cerrar chat",
    teaser: "Olivia puede ayudarte",
    leadIntro: "Antes de empezar, deja tus datos para que un asesor o7Digital pueda contactarte.",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Telefono",
    company: "Empresa",
    details: "Describe tu necesidad",
    submitLead: "Enviar mis datos",
    leadThanks: "Gracias, tus datos han sido enviados. El equipo o7Digital respondera pronto.",
    leadMissing: "Completa todos los campos obligatorios.",
    consent: "He leído y acepto el",
    privacyNotice: "Aviso de Privacidad",
    consentRequired: "Lee y acepta el Aviso de Privacidad para continuar.",
    error: "Tengo un problema temporal. Tambien puedes escribir a info@o7digitalgroup.com.",
  },
  de: {
    title: "Olivia, o7Digital Assistentin",
    status: "Online",
    welcome: "Hallo, wie kann ich Ihnen helfen?",
    placeholder: "Beschreiben Sie Ihr Anliegen...",
    send: "Senden",
    open: "Chat offnen",
    close: "Chat schliessen",
    teaser: "Olivia kann helfen",
    leadIntro: "Bevor wir starten, hinterlassen Sie bitte Ihre Kontaktdaten, damit ein o7Digital-Berater Sie kontaktieren kann.",
    firstName: "Vorname",
    lastName: "Name",
    email: "E-Mail",
    phone: "Telefon",
    company: "Unternehmen",
    details: "Beschreiben Sie Ihr Anliegen",
    submitLead: "Kontaktdaten senden",
    leadThanks: "Danke, Ihre Kontaktdaten wurden gesendet. Das o7Digital-Team meldet sich zeitnah.",
    leadMissing: "Bitte füllen Sie alle Pflichtfelder aus.",
    consent: "Ich habe die",
    privacyNotice: "Datenschutzerklärung gelesen",
    consentRequired: "Bitte lesen und akzeptieren Sie die Datenschutzerklärung, um fortzufahren.",
    error: "Es gibt gerade ein technisches Problem. Sie konnen auch an info@o7digitalgroup.com schreiben.",
  },
  it: {
    title: "Olivia, assistente o7Digital",
    status: "Online",
    welcome: "Ciao, come posso aiutarti?",
    placeholder: "Descrivi la tua esigenza...",
    send: "Invia",
    open: "Apri chat",
    close: "Chiudi chat",
    teaser: "Olivia puo aiutarti",
    leadIntro: "Prima di iniziare, lascia i tuoi dati cosi un consulente o7Digital potra contattarti.",
    firstName: "Nome",
    lastName: "Cognome",
    email: "Email",
    phone: "Telefono",
    company: "Azienda",
    details: "Descrivi la tua esigenza",
    submitLead: "Invia i miei dati",
    leadThanks: "Grazie, i tuoi dati sono stati inviati. Il team o7Digital rispondera presto.",
    leadMissing: "Compila tutti i campi obbligatori.",
    consent: "Ho letto e accetto la",
    privacyNotice: "informativa sulla privacy",
    consentRequired: "Leggi e accetta l’informativa sulla privacy per continuare.",
    error: "Si e verificato un problema temporaneo. Puoi anche scrivere a info@o7digitalgroup.com.",
  },
};

function getLanguage(pathname) {
  const firstSegment = pathname?.split("/").filter(Boolean)[0];
  return ["en", "es", "de", "it"].includes(firstSegment) ? firstSegment : "fr";
}

export default function O7ChatWidget({ siteCode = "o7digital" }) {
  const pathname = usePathname();
  const language = getLanguage(pathname);
  const copy = COPY[language];
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInactive, setIsInactive] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [consentAcceptedAt, setConsentAcceptedAt] = useState("");
  const [leadForm, setLeadForm] = useState(null);
  const [lead, setLead] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    details: "",
  });
  const [leadMetadata, setLeadMetadata] = useState({});
  const [messages, setMessages] = useState([{ role: "assistant", content: copy.welcome }]);
  const consentVersion = `${siteCode}-privacy-chat-2026-09-05`;
  const privacyHref = `${language === "fr" ? "" : `/${language}`}/privacy-policy`;

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length !== 1 || prev[0]?.role !== "assistant") return prev;
      if (prev[0].content === copy.welcome) return prev;
      return [{ role: "assistant", content: copy.welcome }];
    });
  }, [copy.welcome]);

  useEffect(() => {
    const consentKey = `oliviaConsent:${siteCode}`;
    const consentDateKey = `oliviaConsentAt:${siteCode}`;
    const accepted = window.localStorage.getItem(consentKey) === consentVersion;
    setHasConsent(accepted);
    setConsentAcceptedAt(
      accepted ? window.localStorage.getItem(consentDateKey) || "" : ""
    );
  }, [consentVersion, siteCode]);

  useEffect(() => {
    let timer;
    const markActive = () => {
      setIsInactive(false);
      clearTimeout(timer);
      timer = setTimeout(() => setIsInactive(true), 45000);
    };
    const events = ["pointerdown", "keydown", "scroll", "touchstart"];
    events.forEach((eventName) => window.addEventListener(eventName, markActive, { passive: true }));
    markActive();
    return () => {
      clearTimeout(timer);
      events.forEach((eventName) => window.removeEventListener(eventName, markActive));
    };
  }, []);

  const handleSend = async () => {
    const message = input.trim();
    if (!message || isLoading || !hasConsent) return;
    const history = messages
      .filter(
        (item) =>
          (item.role === "user" || item.role === "assistant") &&
          typeof item.content === "string" &&
          item.content.trim()
      )
      .slice(-12)
      .map((item) => ({ role: item.role, content: item.content.trim() }));

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/o7-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          language,
          siteCode,
          history,
          metadata: {
            pageUrl: window.location.href,
            pageTitle: document.title,
            pageContent: document.body.innerText.replace(/\s+/g, " ").slice(0, 5000),
            lead: leadMetadata,
          },
          consent: {
            accepted: true,
            acceptedAt: consentAcceptedAt,
            version: consentVersion,
          },
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.reply || copy.error);
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || copy.error }]);
      if (data.action === "show_lead_form" || data.leadForm) {
        setLeadForm(
          data.leadForm || {
            fields: ["firstName", "lastName", "company", "email", "phone", "details"],
            required: ["firstName", "lastName", "email", "phone", "details"],
          }
        );
        setLead((prev) => ({
          ...prev,
          details: prev.details || data.leadForm?.initialDetails || message,
        }));
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: copy.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeadSubmit = async (event) => {
    event.preventDefault();
    if (isLoading || !hasConsent) return;

    const fields = leadForm?.fields || [
      "firstName",
      "lastName",
      "company",
      "email",
      "phone",
      "details",
    ];
    const required = leadForm?.required || fields;
    const isComplete = required.every((field) => String(lead[field] || "").trim());

    if (!isComplete) {
      setMessages((prev) => [...prev, { role: "assistant", content: copy.leadMissing }]);
      return;
    }

    const normalizedLead = Object.fromEntries(
      Object.entries(lead).map(([key, value]) => [key, value.trim()])
    );
    const transcript = messages
      .map((message) => `${message.role}: ${message.content}`)
      .join("\n");

    setIsLoading(true);
    try {
      const response = await fetch("/api/o7-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...normalizedLead,
          source: "Olivia AI v2 - o7Digital",
          language,
          siteCode,
          message: [
            normalizedLead.company && `Entreprise: ${normalizedLead.company}`,
            normalizedLead.details && `Besoin: ${normalizedLead.details}`,
            transcript,
          ]
            .filter(Boolean)
            .join("\n\n"),
        }),
      });

      if (!response.ok) throw new Error("Lead delivery failed");
      setLeadMetadata(normalizedLead);
      setLeadForm(null);
      setMessages((prev) => [...prev, { role: "assistant", content: copy.leadThanks }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: copy.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="o7-chat">
      {isOpen && (
        <section className="o7-chat-panel" aria-label={copy.title}>
          <header className="o7-chat-header">
            <div>
              <p className="o7-chat-title">{copy.title}</p>
              <p className={`o7-chat-status ${isInactive ? "inactive" : ""}`}><i aria-hidden="true" />{copy.status}</p>
            </div>
            <button type="button" className="o7-chat-close" onClick={() => setIsOpen(false)} aria-label={copy.close}>
              x
            </button>
          </header>

          <div className="o7-chat-messages">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`o7-chat-message ${message.role}`}>
                {message.content}
              </div>
            ))}
            {isLoading && <div className="o7-chat-message assistant">...</div>}
          </div>

          {leadForm && (
            <form className="o7-chat-lead" onSubmit={handleLeadSubmit}>
              <p>{copy.leadIntro}</p>
              <div className="o7-chat-lead-grid">
                {(leadForm.fields || []).map((field) =>
                  field === "details" ? (
                    <textarea
                      key={field}
                      required={(leadForm.required || []).includes(field)}
                      rows={leadForm.detailsRows || 3}
                      placeholder={leadForm.labels?.[field] || copy.details}
                      value={lead[field] || ""}
                      onChange={(event) =>
                        setLead((prev) => ({ ...prev, [field]: event.target.value }))
                      }
                    />
                  ) : (
                    <input
                      key={field}
                      required={(leadForm.required || []).includes(field)}
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      placeholder={leadForm.labels?.[field] || copy[field] || field}
                      value={lead[field] || ""}
                      onChange={(event) =>
                        setLead((prev) => ({ ...prev, [field]: event.target.value }))
                      }
                    />
                  )
                )}
              </div>
              <button type="submit" disabled={isLoading || !hasConsent}>
                {copy.submitLead}
              </button>
            </form>
          )}

          <label className="o7-chat-consent">
            <input
              type="checkbox"
              checked={hasConsent}
              onChange={(event) => {
                const accepted = event.target.checked;
                const acceptedAt = accepted ? new Date().toISOString() : "";
                setHasConsent(accepted);
                setConsentAcceptedAt(acceptedAt);
                if (accepted) {
                  window.localStorage.setItem(`oliviaConsent:${siteCode}`, consentVersion);
                  window.localStorage.setItem(`oliviaConsentAt:${siteCode}`, acceptedAt);
                } else {
                  window.localStorage.removeItem(`oliviaConsent:${siteCode}`);
                  window.localStorage.removeItem(`oliviaConsentAt:${siteCode}`);
                }
              }}
            />
            <span>
              {copy.consent}{" "}
              <a href={privacyHref} target="_blank" rel="noreferrer noopener">
                {copy.privacyNotice}
              </a>
              .
            </span>
          </label>

          <div className="o7-chat-composer">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") handleSend();
              }}
              disabled={isLoading || !hasConsent}
              placeholder={hasConsent ? copy.placeholder : copy.consentRequired}
            />
            <button type="button" onClick={handleSend} disabled={isLoading || !hasConsent} aria-label={copy.send}>
              {">"}
            </button>
          </div>
        </section>
      )}

      <div className="o7-chat-closed">
        {!isOpen && (
          <button type="button" className="o7-chat-teaser" onClick={() => setIsOpen(true)}>
            {copy.teaser}
          </button>
        )}
        <button type="button" className="o7-chat-toggle" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? copy.close : copy.open}>
          {isOpen ? "x" : "IA"}
        </button>
      </div>

      <style jsx>{`
        .o7-chat {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 9999;
          font-family: inherit;
        }
        .o7-chat-panel {
          width: min(390px, calc(100vw - 28px));
          height: min(650px, calc(100vh - 110px));
          margin-bottom: 14px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 28px;
          background: linear-gradient(155deg, rgba(18, 25, 38, 0.99), rgba(6, 10, 17, 0.99));
          box-shadow: 0 52px 90px -30px rgba(0, 0, 0, 0.86), 0 22px 42px -24px rgba(0, 0, 0, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.16);
          transform: perspective(1200px) translateY(-8px) rotateX(0.4deg) rotateY(-0.4deg);
          animation: o7-chat-float 5.5s ease-in-out infinite;
        }
        .o7-chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 18px 16px;
          color: #fff;
          background: linear-gradient(135deg, #111827 0%, #1b4d5c 54%, #e85f4f 130%);
        }
        .o7-chat-title {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
        }
        .o7-chat-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 7px 0 0;
          padding: 5px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.09);
          font-size: 12px;
          color: rgba(255, 255, 255, 0.72);
        }
        .o7-chat-status i {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.14), 0 0 14px rgba(34, 197, 94, 0.8);
          transition: 0.25s ease;
        }
        .o7-chat-status.inactive i {
          background: #f59e0b;
          box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.14), 0 0 14px rgba(245, 158, 11, 0.75);
        }
        .o7-chat-close,
        .o7-chat-toggle,
        .o7-chat-teaser,
        .o7-chat-composer button,
        .o7-chat-lead button {
          border: 0;
          cursor: pointer;
        }
        .o7-chat-close {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          color: #fff;
          background: rgba(255, 255, 255, 0.14);
        }
        .o7-chat-messages {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          background:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            #0b0f17;
          background-size: 100% 28px;
        }
        .o7-chat-message {
          max-width: 86%;
          margin-bottom: 10px;
          padding: 11px 13px;
          border-radius: 14px;
          font-size: 14px;
          line-height: 1.45;
          color: #101522;
          background: #f4f7fb;
        }
        .o7-chat-message.user {
          margin-left: auto;
          color: #fff;
          background: #1b4d5c;
        }
        .o7-chat-lead {
          padding: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: #111827;
        }
        .o7-chat-lead p {
          margin: 0 0 10px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 13px;
        }
        .o7-chat-lead-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .o7-chat-lead input,
        .o7-chat-lead textarea,
        .o7-chat-composer input {
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.11);
          color: #fff;
          background: rgba(255, 255, 255, 0.06);
          outline: none;
        }
        .o7-chat-lead input {
          height: 38px;
          border-radius: 10px;
          padding: 0 10px;
          font-size: 13px;
        }
        .o7-chat-lead textarea {
          grid-column: 1 / -1;
          min-height: 68px;
          border-radius: 10px;
          padding: 9px 10px;
          resize: vertical;
          font: inherit;
          font-size: 13px;
        }
        .o7-chat-lead button {
          width: 100%;
          height: 40px;
          margin-top: 10px;
          border-radius: 10px;
          color: #fff;
          background: #e85f4f;
          font-weight: 700;
        }
        .o7-chat-composer {
          display: flex;
          gap: 8px;
          padding: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: #0e141f;
        }
        .o7-chat-consent {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 10px 12px 0;
          color: rgba(255, 255, 255, 0.78);
          background: #0e141f;
          font-size: 11px;
          line-height: 1.35;
          cursor: pointer;
        }
        .o7-chat-consent input {
          width: 15px;
          height: 15px;
          margin-top: 1px;
          flex: 0 0 auto;
          accent-color: #e85f4f;
        }
        .o7-chat-consent a {
          color: #fff;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .o7-chat-composer input {
          height: 44px;
          border-radius: 13px;
          padding: 0 12px;
          font-size: 14px;
        }
        .o7-chat-composer button,
        .o7-chat-toggle {
          color: #fff;
          background: #e85f4f;
          font-weight: 800;
        }
        .o7-chat-composer button {
          width: 44px;
          height: 44px;
          border-radius: 13px;
        }
        .o7-chat-composer button:disabled,
        .o7-chat-lead button:disabled {
          cursor: not-allowed;
          opacity: 0.45;
        }
        .o7-chat-closed {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
        }
        .o7-chat-teaser {
          min-height: 42px;
          max-width: 210px;
          padding: 0 14px;
          border-radius: 14px;
          color: #101522;
          background: #fff;
          box-shadow: 0 14px 42px rgba(0, 0, 0, 0.24);
          font-size: 13px;
          font-weight: 700;
          line-height: 1.2;
          text-align: left;
        }
        .o7-chat-toggle {
          display: block;
          width: 62px;
          height: 62px;
          margin-left: auto;
          border-radius: 50%;
          box-shadow: 0 28px 48px -20px rgba(0, 0, 0, 0.72), 0 18px 48px rgba(232, 95, 79, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.22);
        }
        @keyframes o7-chat-float {
          0%, 100% { transform: perspective(1200px) translateY(-8px) rotateX(0.4deg) rotateY(-0.4deg); }
          50% { transform: perspective(1200px) translateY(-14px) rotateX(0.65deg) rotateY(-0.15deg); }
        }
        @media (max-width: 575px) {
          .o7-chat {
            right: 14px;
            bottom: 14px;
          }
          .o7-chat-panel {
            height: calc(100vh - 96px);
            border-radius: 16px;
          }
          .o7-chat-lead-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .o7-chat-panel { animation: none; }
        }
      `}</style>
    </div>
  );
}
