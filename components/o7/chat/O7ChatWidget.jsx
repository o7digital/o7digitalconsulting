"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const COPY = {
  fr: {
    title: "Olivia, assistante O7",
    status: "En ligne",
    welcome: "Bonjour, en quoi puis-je vous aider ?",
    placeholder: "Expliquez votre besoin...",
    send: "Envoyer",
    open: "Ouvrir le chat",
    close: "Fermer le chat",
    leadIntro: "Avant de commencer, indiquez vos coordonnées pour qu'un conseiller O7 puisse vous contacter.",
    firstName: "Prénom",
    lastName: "Nom",
    email: "Email",
    phone: "Téléphone",
    submitLead: "Envoyer mes coordonnées",
    leadThanks: "Merci, vos coordonnées ont bien été transmises. L'équipe O7 vous répondra rapidement.",
    error: "Je rencontre un souci temporaire. Vous pouvez aussi écrire à info@o7digital.com.",
  },
  en: {
    title: "Olivia, O7 Assistant",
    status: "Online",
    welcome: "Hello, how can I help you?",
    placeholder: "Tell me what you need...",
    send: "Send",
    open: "Open chat",
    close: "Close chat",
    leadIntro: "Before we start, please leave your contact details so an O7 advisor can contact you.",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone",
    submitLead: "Send my details",
    leadThanks: "Thanks, your details have been sent. The O7 team will reply shortly.",
    error: "I am having a temporary issue. You can also write to info@o7digital.com.",
  },
  es: {
    title: "Olivia, asistente O7",
    status: "En linea",
    welcome: "Hola, en que puedo ayudarte?",
    placeholder: "Explica tu necesidad...",
    send: "Enviar",
    open: "Abrir chat",
    close: "Cerrar chat",
    leadIntro: "Antes de empezar, deja tus datos para que un asesor O7 pueda contactarte.",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Telefono",
    submitLead: "Enviar mis datos",
    leadThanks: "Gracias, tus datos han sido enviados. El equipo O7 respondera pronto.",
    error: "Tengo un problema temporal. Tambien puedes escribir a info@o7digital.com.",
  },
  de: {
    title: "Olivia, O7 Assistentin",
    status: "Online",
    welcome: "Hallo, wie kann ich Ihnen helfen?",
    placeholder: "Beschreiben Sie Ihr Anliegen...",
    send: "Senden",
    open: "Chat offnen",
    close: "Chat schliessen",
    leadIntro: "Bevor wir starten, hinterlassen Sie bitte Ihre Kontaktdaten, damit ein O7-Berater Sie kontaktieren kann.",
    firstName: "Vorname",
    lastName: "Name",
    email: "E-Mail",
    phone: "Telefon",
    submitLead: "Kontaktdaten senden",
    leadThanks: "Danke, Ihre Kontaktdaten wurden gesendet. Das O7-Team meldet sich zeitnah.",
    error: "Es gibt gerade ein technisches Problem. Sie konnen auch an info@o7digital.com schreiben.",
  },
  it: {
    title: "Olivia, assistente O7",
    status: "Online",
    welcome: "Ciao, come posso aiutarti?",
    placeholder: "Descrivi la tua esigenza...",
    send: "Invia",
    open: "Apri chat",
    close: "Chiudi chat",
    leadIntro: "Prima di iniziare, lascia i tuoi dati cosi un consulente O7 potra contattarti.",
    firstName: "Nome",
    lastName: "Cognome",
    email: "Email",
    phone: "Telefono",
    submitLead: "Invia i miei dati",
    leadThanks: "Grazie, i tuoi dati sono stati inviati. Il team O7 rispondera presto.",
    error: "Si e verificato un problema temporaneo. Puoi anche scrivere a info@o7digital.com.",
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
  const [isOpen, setIsOpen] = useState(true);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const [lead, setLead] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [messages, setMessages] = useState([{ role: "assistant", content: copy.welcome }]);

  const transcript = useMemo(
    () => messages.map((msg) => `${msg.role}: ${msg.content}`).join("\n"),
    [messages]
  );

  const handleSend = async () => {
    const message = input.trim();
    if (!message || isLoading || !leadSent) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/o7-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, language, siteCode }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || copy.error }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: copy.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeadSubmit = async (event) => {
    event.preventDefault();
    const name = `${lead.firstName.trim()} ${lead.lastName.trim()}`.trim();
    if (!name || !lead.email.trim() || !lead.phone.trim()) return;

    setIsLoading(true);
    try {
      await fetch("https://formspree.io/f/xkgdyvze", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email: lead.email.trim(),
          phone: lead.phone.trim(),
          source: "Chat IA O7",
          language,
          siteCode,
          message: `Lead chat IA O7 (${language}, ${siteCode})\n\n${transcript}`,
        }),
      });
      setLeadSent(true);
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
              <p className="o7-chat-status">{copy.status}</p>
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

          {!leadSent && (
            <form className="o7-chat-lead" onSubmit={handleLeadSubmit}>
              <p>{copy.leadIntro}</p>
              <div className="o7-chat-lead-grid">
                <input required placeholder={copy.firstName} value={lead.firstName} onChange={(event) => setLead((prev) => ({ ...prev, firstName: event.target.value }))} />
                <input required placeholder={copy.lastName} value={lead.lastName} onChange={(event) => setLead((prev) => ({ ...prev, lastName: event.target.value }))} />
                <input required type="email" placeholder={copy.email} value={lead.email} onChange={(event) => setLead((prev) => ({ ...prev, email: event.target.value }))} />
                <input required type="tel" placeholder={copy.phone} value={lead.phone} onChange={(event) => setLead((prev) => ({ ...prev, phone: event.target.value }))} />
              </div>
              <button type="submit" disabled={isLoading}>{copy.submitLead}</button>
            </form>
          )}

          <div className="o7-chat-composer">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") handleSend();
              }}
              disabled={!leadSent || isLoading}
              placeholder={copy.placeholder}
            />
            <button type="button" onClick={handleSend} disabled={isLoading} aria-label={copy.send}>
              {">"}
            </button>
          </div>
        </section>
      )}

      <button type="button" className="o7-chat-toggle" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? copy.close : copy.open}>
        {isOpen ? "x" : "IA"}
      </button>

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
          border-radius: 20px;
          background: #0b0f17;
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.45);
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
          margin: 4px 0 0;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.72);
        }
        .o7-chat-close,
        .o7-chat-toggle,
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
        .o7-chat-toggle {
          display: block;
          width: 62px;
          height: 62px;
          margin-left: auto;
          border-radius: 18px;
          box-shadow: 0 18px 48px rgba(232, 95, 79, 0.32);
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
      `}</style>
    </div>
  );
}
