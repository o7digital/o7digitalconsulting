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
  fr: "Agence SEO Astro React · Création de sites web rapides · Sites web optimisés pour Google · Positionnement Google international · SEO technique pour entreprises · Migration WordPress vers Astro · Développement Astro multilingue · Développement React SEO · Refonte de site web orientée SEO · Optimisation Core Web Vitals · Performance web mobile · Architecture SEO multilingue · Sites multilingues français espagnol anglais · Consultant SEO Astro · Consultant React SEO · Agence web haute performance · CTO as a Service international · Direction digitale externalisée internationale · Conseil IT stratégique international · Transformation digitale groupes internationaux · CMS headless entreprise internationale",
  en: "Astro React SEO agency · Fast website development · Websites optimized for Google · International Google ranking · Technical SEO for businesses · WordPress to Astro migration · Multilingual Astro development · React SEO development · SEO-driven website redesign · Core Web Vitals optimization · Mobile web performance · Multilingual SEO architecture · French Spanish English multilingual websites · Astro SEO consultant · React SEO consultant · High performance web agency · International CTO as a Service · Outsourced digital leadership · Strategic IT consulting international · Digital transformation for international groups · Enterprise headless CMS",
  es: "Agencia SEO Astro React · Creación de sitios web rápidos · Sitios web optimizados para Google · Posicionamiento Google internacional · SEO técnico para empresas · Migración WordPress a Astro · Desarrollo Astro multilingüe · Desarrollo React SEO · Rediseño web orientado a SEO · Optimización Core Web Vitals · Rendimiento web móvil · Arquitectura SEO multilingüe · Sitios multilingües francés español inglés · Consultor SEO Astro · Consultor React SEO · Agencia web de alto rendimiento · CTO as a Service internacional · Dirección digital externalizada internacional · Consultoría IT estratégica internacional · Transformación digital para grupos internacionales · CMS headless empresarial",
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
