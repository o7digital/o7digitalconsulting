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
  }
};

const seoFooterKeywords = {
  fr: "Agence SEO Astro React · Sites web optimisés Google · Développement Astro · Développement React SEO · Migration WordPress vers Astro · SEO technique international · Audit SEO technique · Optimisation Core Web Vitals · Performance web mobile · Architecture SEO multilingue · Sites multilingues français anglais espagnol · CMS headless entreprise · Consultant SEO technique · Refonte web orientée SEO · Positionnement Google · Agence web haute performance · CTO as a Service · Conseil IT stratégique · Transformation digitale internationale · Direction digitale externalisée",
  en: "Astro React SEO agency · Google optimized websites · Astro development · React SEO development · WordPress to Astro migration · International technical SEO · Technical SEO audit · Core Web Vitals optimization · Mobile web performance · Multilingual SEO architecture · French English Spanish websites · Enterprise headless CMS · Technical SEO consultant · SEO-driven website redesign · Google ranking strategy · High performance web agency · CTO as a Service · Strategic IT consulting · International digital transformation · Outsourced digital leadership",
  es: "Agencia SEO Astro React · Sitios web optimizados para Google · Desarrollo Astro · Desarrollo React SEO · Migración WordPress a Astro · SEO técnico internacional · Auditoría SEO técnica · Optimización Core Web Vitals · Rendimiento web móvil · Arquitectura SEO multilingüe · Sitios multilingües francés inglés español · CMS headless empresarial · Consultor SEO técnico · Rediseño web orientado a SEO · Posicionamiento Google · Agencia web de alto rendimiento · CTO as a Service · Consultoría IT estratégica · Transformación digital internacional · Dirección digital externalizada",
};

export default function Footer2({ lang = "fr", showSeoFooterBlock = false }) {
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
        {showSeoFooterBlock && (
          <div
            style={{
              marginTop: "14px",
              fontSize: "12px",
              lineHeight: 1.7,
              color: "rgba(143, 143, 143, 0.9)",
            }}
          >
            <p style={{ margin: "0 0 4px" }}>{seoFooterKeywords.fr}</p>
            <p style={{ margin: "0 0 4px" }}>{seoFooterKeywords.en}</p>
            <p style={{ margin: 0 }}>{seoFooterKeywords.es}</p>
          </div>
        )}
      </div>
    </footer>
  );
}
