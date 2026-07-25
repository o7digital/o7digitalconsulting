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

const seoFooterKeywords = {
  fr: "CTO as a Service Paris · CTO externalise Paris · consultant transformation digitale Paris · consultant SEO technique Paris · developpement web Astro React Paris · developpement web haute performance Paris · architecture web moderne Paris · CTO as a Service Montreal · CTO externalise Montreal · consultant transformation digitale Montreal · consultant SEO technique Montreal · developpement web Astro React Montreal",
  en: "CTO as a Service London · Fractional CTO London · outsourced CTO London · technical SEO consultant London · Astro React web development London · high performance web development London · web architecture consultant London · CTO as a Service New York · Fractional CTO New York · technical SEO consultant New York · Astro React web development New York · high performance web development New York",
  es: "CTO as a Service Madrid · CTO fraccional Madrid · transformacion digital para empresas Madrid · consultor SEO tecnico Madrid · desarrollo web Astro React Madrid · desarrollo web de alto rendimiento Madrid · arquitectura web moderna Madrid · CTO as a Service CDMX · CTO fraccional CDMX · transformacion digital para empresas CDMX · consultor SEO tecnico CDMX · desarrollo web Astro React CDMX",
  de: "CTO as a Service Frankfurt · externer CTO Frankfurt · digitale Transformation Frankfurt · technische SEO Beratung Frankfurt · Webentwicklung Astro React Frankfurt · High Performance Webentwicklung Frankfurt · moderne Webarchitektur Frankfurt · digitale Strategie B2B Frankfurt",
  it: "CTO as a Service Milano · CTO esterno Milano · consulente trasformazione digitale Milano · consulente SEO tecnico Milano · sviluppo web Astro React Milano · sviluppo web ad alte prestazioni Milano · architettura web moderna Milano · consulenza digitale per aziende Milano",
};

const additionalSeoFooterKeywords = {
  de: "CTO as a Service Berlin · externer CTO Berlin · technische SEO Agentur Berlin · SEO Beratung Berlin · Webentwicklung Next.js Berlin · Webentwicklung React Berlin · Astro Webentwicklung Berlin · Core Web Vitals Optimierung Berlin · Headless CMS Beratung Berlin · digitale Transformation Mittelstand Deutschland · IT Beratung Deutschland · KI Integration Deutschland · DevOps Beratung Deutschland · Cloud Beratung Deutschland · technische SEO München · CTO as a Service München · Web Performance Optimierung München · technische SEO Hamburg · CTO Beratung Hamburg · technische SEO Düsseldorf · technische SEO Stuttgart · technische SEO Österreich · technische SEO Schweiz",
  it: "CTO as a Service Roma · CTO esterno Roma · consulente SEO tecnico Roma · agenzia SEO tecnica Roma · sviluppo web Next.js Roma · sviluppo web React Roma · sviluppo web Astro Roma · ottimizzazione Core Web Vitals Roma · consulenza CMS headless Roma · trasformazione digitale aziende Italia · consulenza IT Italia · integrazione AI Italia · consulenza DevOps Italia · consulenza cloud Italia · SEO tecnica Milano · agenzia SEO tecnica Milano · performance web Milano · consulente SEO Torino · CTO as a Service Torino · SEO tecnica Bologna · SEO tecnica Firenze · SEO tecnica Svizzera italiana · consulenza digitale B2B Italia",
};

export default function Footer2({ lang = "fr", showSeoFooterBlock = false }) {
  const content = editorialContent[lang] || editorialContent.fr;
  const seoKeywords = seoFooterKeywords[lang];
  const additionalSeoKeywords = additionalSeoFooterKeywords[lang];
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
        {showSeoFooterBlock && seoKeywords && (
          <div
            style={{
              marginTop: "14px",
              fontSize: "12px",
              lineHeight: 1.7,
              color: "rgba(143, 143, 143, 0.9)",
            }}
          >
            <p style={{ margin: 0 }}>{seoKeywords}</p>
            {additionalSeoKeywords && (
              <p style={{ margin: "6px 0 0" }}>{additionalSeoKeywords}</p>
            )}
          </div>
        )}
      </div>
    </footer>
  );
}
