"use client";
import React from "react";
import Link from "next/link";
import { footerSections, socialLinks } from "@/data/footerLinks";
import {
  englishSeoKeywords,
  frenchSeoKeywords,
  germanSeoKeywords,
  italianSeoKeywords,
  spanishSeoKeywords,
} from "@/data/seoKeywords";

const expertiseContent = {
  fr: {
    description:
      "O7 Digital est une agence de consulting digital et CTO as a Service spécialisée en transformation digitale, développement web haute performance, SEO technique et architecture IT pour entreprises en France et au Québec, notamment à Paris, Lyon, Marseille et Montréal.",
    followUs: "Suivez-nous",
    legalNotice: "Mentions Légales",
    keywords: frenchSeoKeywords,
  },
  en: {
    description:
      "O7 Digital is a digital consulting and CTO as a Service agency delivering high-performance web development, technical SEO, cloud architecture and digital transformation for international companies in the UK, USA and Canada, including London, New York and Toronto.",
    followUs: "Follow us",
    legalNotice: "Legal Notice",
    keywords: englishSeoKeywords,
  },
  es: {
    description:
      "O7 Digital es una agencia de consultoría digital y CTO as a Service especializada en transformación digital, desarrollo web de alto rendimiento y SEO técnico para empresas en España, México y Norteamérica, incluyendo Madrid, Barcelona y Ciudad de México.",
    followUs: "Síguenos",
    legalNotice: "Aviso Legal",
    keywords: spanishSeoKeywords,
  },
  de: {
    description:
      "O7 Digital ist eine Agentur für digitale Beratung und CTO as a Service mit Fokus auf digitale Transformation, High-Performance-Webentwicklung und technisches SEO für Unternehmen in Deutschland, Österreich und der Schweiz, unter anderem in Berlin, München und Zürich.",
    followUs: "Folgen Sie uns",
    legalNotice: "Impressum",
    keywords: germanSeoKeywords,
  },
  it: {
    description:
      "O7 Digital è un'agenzia di consulenza digitale e CTO as a Service specializzata in trasformazione digitale, sviluppo web ad alte prestazioni e SEO tecnico per aziende in Italia, Svizzera ed Europa, inclusi Milano, Roma e Torino.",
    followUs: "Seguici",
    legalNotice: "Note Legali",
    keywords: italianSeoKeywords,
  },
};

export default function Footer2({ lang = "fr" }) {
  const content = expertiseContent[lang] || expertiseContent.fr;
  const footerKeywords = content.keywords || [];
  const prefix =
    lang === "en"
      ? "/en"
      : lang === "es"
      ? "/es"
      : lang === "de"
      ? "/de"
      : lang === "it"
      ? "/it"
      : "";

  return (
    <footer className="rainbow-footer footer-style-default no-border">
      <div className="footer-top" style={{ paddingTop: "32px", paddingBottom: "8px" }}>
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
                    <p
                      style={{
                        color: "#8f8f8f",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        marginTop: "0",
                      }}
                    >
                      {content.description}
                    </p>
                  </div>
                ) : (
                  <>
                    <h4 className="title">{content.title}</h4>
                    <div className="inner">
                      <ul
                        className="footer-link link-hover"
                        style={{ columns: "2", columnGap: "2rem" }}
                      >
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
      {footerKeywords.length > 0 && (
        <div style={{ borderTop: "1px solid rgba(143, 143, 143, 0.2)", padding: "18px 0 8px" }}>
          <div className="container">
            <p
              style={{
                color: "#8f8f8f",
                fontSize: "14px",
                lineHeight: "1.8",
                textAlign: "center",
                marginBottom: "0",
              }}
            >
              {footerKeywords.map((keyword, index) => (
                <React.Fragment key={keyword}>
                  <span>{keyword}</span>
                  {index < footerKeywords.length - 1 && <span>{" \u2022 "}</span>}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      )}
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
                <p className="copyright-text">© o7 Digital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
