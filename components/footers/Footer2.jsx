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
    description: "O7 Digital is an international digital consulting agency delivering CTO as a Service, custom web development, technical SEO, cloud, DevOps, artificial intelligence and automation to drive business performance.",
    followUs: "Follow us",
    legalNotice: "Legal Notice"
  },
  es: {
    description: "O7 Digital es una agencia internacional de consultoría digital especializada en CTO as a Service, desarrollo web a medida, SEO técnico, cloud, DevOps, inteligencia artificial y automatización para impulsar el rendimiento empresarial.",
    followUs: "Síguenos",
    legalNotice: "Aviso Legal"
  },
  de: {
    description: "O7 Digital ist eine internationale Digitalberatung, spezialisiert auf CTO as a Service, individuelle Webentwicklung, technische SEO, Cloud- und DevOps-Architekturen, künstliche Intelligenz und Automatisierung zur Steigerung der Unternehmensperformance.",
    followUs: "Folgen Sie uns",
    legalNotice: "Impressum"
  },
  it: {
    description: "O7 Digital è una società di consulenza digitale internazionale specializzata in CTO as a Service, sviluppo web su misura, SEO tecnica, architetture cloud e DevOps, intelligenza artificiale e automazione dei processi per supportare la crescita delle aziende.",
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
                {content.description ? (
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
