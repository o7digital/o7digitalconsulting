"use client";
import React from "react";
import Link from "next/link";
import { socialLinks } from "@/data/footerLinks";

const editorialContent = {
  fr: {
    editorial:
      "O7 Digital Consulting accompagne les entreprises en France, au Mexique, en Europe, en Amérique du Nord et en Amérique Latine avec des sites Astro, React et CMS headless optimisés pour le SEO technique, la performance web et le positionnement Google.",
    followUs: "Suivez-nous",
    legalNotice: "Mentions Légales"
  },
  en: {
    editorial:
      "O7 Digital Consulting supports companies in France, Mexico, Europe, North America, and Latin America with Astro, React, and headless CMS websites optimized for technical SEO, web performance, and Google ranking.",
    followUs: "Follow us",
    legalNotice: "Legal Notice"
  },
  es: {
    editorial:
      "O7 Digital Consulting acompaña a empresas en Francia, México, Europa, América del Norte y América Latina con sitios Astro, React y CMS headless optimizados para SEO técnico, rendimiento web y posicionamiento en Google.",
    followUs: "Síguenos",
    legalNotice: "Aviso Legal"
  },
  de: {
    editorial:
      "Von Paris aus und in der Île-de-France führen wir eine digitalisierte Leitung für internationale Unternehmen mit CTO as a Service, individueller Webentwicklung, DevOps- und Cloud-Beratung, KI-Integration und fortgeschrittener SEO. In Savoie setzt dasselbe Team diese markenzentrierte, unaufdringliche Begleitung fort.",
    followUs: "Folgen Sie uns",
    legalNotice: "Impressum"
  },
  it: {
    editorial:
      "O7 Digital Consulting accompagna aziende in Italia, Europa, Nord America e America Latina con siti Astro, React e CMS headless ottimizzati per SEO tecnica, performance web e posizionamento Google.",
    followUs: "Seguici",
    legalNotice: "Note legali"
  }
};

export default function Footer2({ lang = "fr" }) {
  const content = editorialContent[lang] || editorialContent.fr;
  const prefix =
    lang === "en" ? "/en" : lang === "es" ? "/es" : lang === "de" ? "/de" : lang === "it" ? "/it" : "";

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
