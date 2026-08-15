"use client";

import { useEffect, useState } from "react";
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
    teaser: "Olivia peut vous aider",
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
    teaser: "Olivia can help",
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
    teaser: "Olivia puede ayudarte",
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
    teaser: "Olivia kann helfen",
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
    teaser: "Olivia puo aiutarti",
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

function detectMessageLanguage(message, fallbackLanguage) {
  const value = (message || "").toLowerCase();
  if (!value) return fallbackLanguage;

  const spanishHints = /\b(hola|gracias|quiero|precio|precios|tarifa|tarifas|cita|citas|informacion|contacto|correo|telefono|servicio|servicios)\b/;
  const frenchHints = /\b(bonjour|merci|prix|tarif|devis|rendez-vous|contact|telephone|service|services)\b/;
  const englishHints = /\b(hello|thanks|price|prices|quote|appointment|appointments|contact|phone|service|services)\b/;
  const germanHints = /\b(hallo|danke|preis|preise|angebot|termin|kontakt|telefon|service)\b/;
  const italianHints = /\b(ciao|grazie|prezzo|prezzi|preventivo|appuntamento|contatto|telefono|servizio)\b/;

  if (spanishHints.test(value)) return "es";
  if (frenchHints.test(value)) return "fr";
  if (englishHints.test(value)) return "en";
  if (germanHints.test(value)) return "de";
  if (italianHints.test(value)) return "it";
  return fallbackLanguage;
}

export default function O7ChatWidget({ siteCode = "o7digital" }) {
  const pathname = usePathname();
  const language = getLanguage(pathname);
  const copy = COPY[language];
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInactive, setIsInactive] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: copy.welcome }]);

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length !== 1 || prev[0]?.role !== "assistant") return prev;
      if (prev[0].content === copy.welcome) return prev;
      return [{ role: "assistant", content: copy.welcome }];
    });
  }, [copy.welcome]);

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
    if (!message || isLoading) return;
    const messageLanguage = detectMessageLanguage(message, language);

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/o7-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, language: messageLanguage, siteCode }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || copy.error }]);
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

          <div className="o7-chat-composer">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") handleSend();
              }}
              disabled={isLoading}
              placeholder={copy.placeholder}
            />
            <button type="button" onClick={handleSend} disabled={isLoading} aria-label={copy.send}>
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
