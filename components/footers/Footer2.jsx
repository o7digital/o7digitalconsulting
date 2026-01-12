"use client";
import React from "react";
import Link from "next/link";
import { socialLinks } from "@/data/footerLinks";

const editorialContent = {
  fr: {
    editorial:
      "Depuis Paris et en Île-de-France, nous assurons une direction digitale externalisée pour entreprises internationales en orchestrant CTO as a Service, développement web sur mesure, conseil DevOps, cloud, intégration IA et stratégie SEO avancée. En Savoie, la même équipe déploie cette exigence avec une approche discrète et orientée marque.",
    followUs: "Suivez-nous",
    legalNotice: "Mentions Légales"
  },
  en: {
    editorial:
      "From Paris and across Île-de-France, we deliver digital leadership for international companies with CTO as a Service, custom web development, DevOps and cloud guidance, AI integration, and advanced SEO. In Savoie, the same team keeps that brand-first, low-friction approach.",
    followUs: "Follow us",
    legalNotice: "Legal Notice"
  },
  es: {
    editorial:
      "Desde París y en Île-de-France, ofrecemos dirección digital externalizada para empresas internacionales combinando CTO as a Service, desarrollo web a medida, consultoría DevOps y cloud, integración de IA y estrategia SEO avanzada. En Savoie, el mismo equipo mantiene esta lógica de marca sin fricción.",
    followUs: "Síguenos",
    legalNotice: "Aviso Legal"
  },
  de: {
    editorial:
      "Von Paris aus und in der Île-de-France führen wir eine digitalisierte Leitung für internationale Unternehmen mit CTO as a Service, individueller Webentwicklung, DevOps- und Cloud-Beratung, KI-Integration und fortgeschrittener SEO. In Savoie setzt dasselbe Team diese markenzentrierte, unaufdringliche Begleitung fort.",
    followUs: "Folgen Sie uns",
    legalNotice: "Impressum"
  }
};

export default function Footer2({ lang = "fr" }) {
  const content = editorialContent[lang] || editorialContent.fr;
  const prefix =
    lang === "en" ? "/en" : lang === "es" ? "/es" : lang === "de" ? "/de" : "";

  return (
    <footer className="rainbow-footer footer-style-default no-border">
      <div className="container" style={{ paddingTop: "32px", paddingBottom: "20px" }}>
        <p
          style={{
            color: "#8f8f8f",
            fontSize: "15px",
            lineHeight: 1.7,
            margin: 0,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px"
          }}
        >
          <span>{content.editorial}</span>
          <Link
            href={`${prefix || ""}/privacy-policy`}
            style={{ color: "#8f8f8f", fontSize: "14px", textDecoration: "none" }}
          >
            {content.legalNotice}
          </Link>
          <span style={{ color: "#8f8f8f", fontSize: "14px" }}>{content.followUs}</span>
          <span
            className="social-icon social-default"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            {socialLinks.map((link, index) => (
              <a href={link.href} key={index}>
                <i className={link.iconClass} />
              </a>
            ))}
          </span>
          <span style={{ color: "#8f8f8f", fontSize: "14px" }}>© o7 Digital</span>
        </p>
      </div>
    </footer>
  );
}
