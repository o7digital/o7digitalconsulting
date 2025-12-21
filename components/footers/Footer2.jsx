"use client";
import React from "react";
import Link from "next/link";
import { footerSections, socialLinks } from "@/data/footerLinks";

const expertiseContent = {
  fr: {
    description: "O7 Digital est une agence de consulting digital internationale spécialisée en CTO as a Service, développement web sur mesure, SEO technique, cloud, DevOps, intelligence artificielle et automatisation au service de la performance des entreprises.",
    followUs: "Suivez-nous",
    legalNotice: "Mentions Légales"
  },
  en: {
    title: "Digital expertise UK, USA, Canada & Mexico",
    keywords: [
      "digital consulting London",
      "digital consulting UK",
      "digital consulting New York",
      "digital consulting USA",
      "digital consulting Toronto",
      "digital consulting Canada",
      "digital consulting Manchester",
      "digital consulting Birmingham",
      "digital consulting San Francisco",
      "digital consulting Vancouver",
      "digital consulting Montreal",
      "IT consulting London",
      "IT consulting UK",
      "IT consulting New York",
      "IT consulting USA",
      "IT consulting Toronto",
      "IT consulting Canada",
      "IT consulting Manchester",
      "IT consulting Birmingham",
      "IT consulting San Francisco",
      "IT consulting Los Angeles",
      "IT consulting Seattle",
      "IT consulting Vancouver",
      "digital agency London",
      "digital agency UK",
      "digital agency New York",
      "digital agency Toronto",
      "enterprise IT services UK",
      "enterprise IT services USA",
      "enterprise IT services Canada",
      "DevOps consulting London",
      "DevOps consulting UK",
      "DevOps consulting New York",
      "DevOps consulting USA",
      "DevOps consulting Toronto",
      "cloud consulting London",
      "cloud consulting UK",
      "cloud consulting USA",
      "cloud consulting Canada",
      "AI integration consulting London",
      "AI integration consulting USA",
      "AI integration consulting Canada",
      "process automation consulting UK",
      "process automation consulting USA",
      "process automation consulting Canada",
      "digital optimization consulting London",
      "digital optimization consulting USA",
      "B2B digital consulting UK",
      "B2B digital consulting USA",
      "B2B digital consulting Canada",
      "enterprise consulting London",
      "enterprise consulting New York",
      "enterprise consulting Toronto",
      "strategic IT consulting",
      "strategic digital consulting",
      "digital leadership consulting",
      "international digital consulting firm",
      "global digital consulting services",
      "international CTO as a Service",
      "fractional CTO services",
      "enterprise digital strategy",
      "scalable web platforms UK",
      "scalable web platforms USA",
      "scalable web platforms Canada",
      "digital solutions for enterprises"
    ],
    followUs: "Follow us",
    legalNotice: "Legal Notice"
  },
  es: {
    title: "Experiencia digital España, México, USA & Canadá",
    keywords: [
      "consultoría digital México",
      "consultoría digital España",
      "consultoría digital Madrid",
      "consultoría digital Barcelona",
      "consultoría digital CDMX",
      "consultoría digital Monterrey",
      "consultoría tecnológica México",
      "consultoría tecnológica España",
      "agencia digital México",
      "agencia digital España",
      "agencia digital Madrid",
      "agencia digital CDMX",
      "soluciones digitales México",
      "soluciones digitales España",
      "consultoría IT CDMX",
      "consultoría IT Monterrey",
      "consultoría IT Guadalajara",
      "consultoría IT Madrid",
      "consultoría IT Barcelona",
      "consultoría IT Valencia",
      "servicios IT para empresas México",
      "servicios IT para empresas España",
      "servicios digitales México",
      "servicios digitales España",
      "transformación digital México",
      "transformación digital España",
      "innovación digital México",
      "innovación digital España",
      "consultoría DevOps México",
      "consultoría DevOps España",
      "consultoría cloud México",
      "consultoría cloud España",
      "automatización de procesos México",
      "automatización de procesos España",
      "gestión de proyectos digitales México",
      "gestión de proyectos digitales España",
      "estrategia digital empresarial México",
      "estrategia digital empresarial España",
      "consultoría digital internacional",
      "consultoría IT internacional",
      "dirección digital internacional",
      "CTO as a Service internacional",
      "SEO técnico internacional",
      "tecnología para empresas México",
      "tecnología para empresas España",
      "soluciones web empresariales",
      "plataformas digitales internacionales",
      "servicios IT internacionales",
      "consultoría empresarial digital México",
      "consultoría empresarial digital España"
    ],
    followUs: "Síguenos",
    legalNotice: "Aviso Legal"
  },
  de: {
    title: "Digitale Expertise Deutschland, Österreich, Schweiz, USA & Kanada",
    keywords: [
      "B2B Digital Consulting international",
      "professionelle Webentwicklung",
      "maßgeschneiderte digitale Lösungen",
      "digitale Transformation Unternehmen",
      "strategisches Digital Consulting",
      "moderne digitale Architektur",
      "fortgeschrittenes professionelles SEO",
      "optimierte Web-Performance",
      "Unternehmen Web-Lösungen",
      "internationale digitale Expertise",
      "IT-Dienstleistungen für Unternehmen",
      "technische SEO-Optimierung",
      "Google Workspace Consulting",
      "Microsoft 365 Consulting",
      "digitales Grafikdesign",
      "professionelles Motion Design"
    ],
    followUs: "Folgen Sie uns",
    legalNotice: "Impressum"
  },
  it: {
    title: "Esperienza digitale Italia, Svizzera, Europa, USA & Canada",
    keywords: [
      "consulenza digitale B2B internazionale",
      "sviluppo web professionale",
      "soluzioni digitali personalizzate",
      "trasformazione digitale aziende",
      "consulenza digitale strategica",
      "architettura digitale moderna",
      "SEO professionale avanzato",
      "performance web ottimizzate",
      "soluzioni web aziende",
      "esperienza digitale internazionale",
      "servizi IT per aziende",
      "ottimizzazione SEO tecnico",
      "consulenza Google Workspace",
      "consulenza Microsoft 365",
      "design grafico digitale",
      "motion design professionale"
    ],
    followUs: "Seguici",
    legalNotice: "Note Legali"
  }
};

export default function Footer2({ lang = "fr" }) {
  const content = expertiseContent[lang] || expertiseContent.fr;
  const prefix =
    lang === "en" ? "/en" : lang === "es" ? "/es" : lang === "de" ? "/de" : lang === "it" ? "/it" : "";

  return (
    <footer className="rainbow-footer footer-style-default no-border">
      <div
        className="footer-top"
        style={{ paddingTop: "32px", paddingBottom: "8px" }}
      >
        <div className="container">
          <div className="row">
            {footerSections.map((section, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                <div className="rainbow-footer-widget">
                  <h4 className="title">{section.title}</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rainbow-footer-widget">
                <h4 className="title">{content.followUs}</h4>
                <div className="inner">
                  <ul className="social-icon social-default justify-content-start">
                    {socialLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>
                          <i className={link.iconClass} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt--40">
            <div className="col-lg-12">
              <div className="rainbow-footer-widget">
                {lang === "fr" && content.description ? (
                  <div className="inner">
                    <p style={{ color: "#8f8f8f", fontSize: "14px", lineHeight: "1.6", marginTop: "0" }}>
                      {content.description}
                    </p>
                  </div>
                ) : (
                  <>
                    <h4 className="title">{content.title}</h4>
                    <div className="inner">
                      <ul className="footer-link link-hover" style={{ columns: "2", columnGap: "2rem" }}>
                        {content.keywords.map((keyword, i) => (
                          <li key={i} style={{ breakInside: "avoid", marginBottom: "8px" }}>
                            <span style={{ color: "#8f8f8f", fontSize: "14px" }}>{keyword}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="copyright-area copyright-style-one no-border"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright-left">
                <ul className="ft-menu link-hover">
                  <li>
                    <Link href={`${prefix || ""}/privacy-policy`}>{content.legalNotice}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright-right text-center text-md-right">
                <p className="copyright-text">
                  © o7 Digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
