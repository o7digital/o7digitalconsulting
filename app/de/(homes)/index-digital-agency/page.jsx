import React from "react";
import Script from "next/script";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Hero from "@/components/homes/index-international-consulting/Hero";
import CtaSection from "@/components/o7/common/CtaSection";
import HomeIntro from "@/components/o7/home/HomeIntro";
import HomeServices from "@/components/o7/home/HomeServices";
import {
  o7HomeIntro as o7HomeIntroDe,
  o7HomeServices as o7HomeServicesDe,
  o7CtaBlock as o7CtaDe,
} from "@/data/o7.de";

export const metadata = {
  title: "Fractional CTO und technische SEO-Beratung | O7 Digital",
  description:
    "O7 Digital unterstuetzt Unternehmen bei Web-Performance, technischer SEO und digitaler Architektur mit CTO-as-a-Service und Beratung.",
  alternates: {
    canonical: 'https://www.o7digital.com/de/index-digital-agency',
    languages: {
      'fr': 'https://www.o7digital.com/',
      'en': 'https://www.o7digital.com/en/index-digital-agency',
      'es': 'https://www.o7digital.com/es/index-digital-agency',
      'de': 'https://www.o7digital.com/de/index-digital-agency',
      'it': 'https://www.o7digital.com/it/index-digital-agency',
    },
  },
  openGraph: {
    locale: 'de_DE',
    alternateLocale: ['fr_FR', 'en_US', 'es_ES', 'it_IT'],
  },
};

export default function HomeDe() {
  return (
    <>
      <Header2
        btnClass="btn-default btn-small "
        parentClass="rainbow-header header-default header-left-align header-transparent header-sticky"
      />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Script id="ld-organization-de" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.o7digital.com/de/#organization",
            "name": "O7 Digital Consulting",
            "url": "https://www.o7digital.com/de",
            "logo": "https://www.o7digital.com/assets/images/logo/logo.png",
            "description": "Digitale Beratungsagentur in Deutschland, Österreich und der Schweiz – spezialisiert auf CTO as a Service, individuelle Webentwicklung, DevOps- und Cloud-Consulting, KI-Integration und technisches SEO.",
            "sameAs": [
              "https://www.linkedin.com/company/o7-digital-consulting"
            ],
            "areaServed": [
              { "@type": "City", "name": "Berlin", "containedIn": { "@type": "Country", "name": "Deutschland" } },
              { "@type": "City", "name": "München", "containedIn": { "@type": "Country", "name": "Deutschland" } },
              { "@type": "City", "name": "Hamburg", "containedIn": { "@type": "Country", "name": "Deutschland" } },
              { "@type": "City", "name": "Frankfurt", "containedIn": { "@type": "Country", "name": "Deutschland" } },
              { "@type": "City", "name": "Köln", "containedIn": { "@type": "Country", "name": "Deutschland" } },
              { "@type": "City", "name": "Düsseldorf", "containedIn": { "@type": "Country", "name": "Deutschland" } },
              { "@type": "City", "name": "Stuttgart", "containedIn": { "@type": "Country", "name": "Deutschland" } },
              { "@type": "City", "name": "Leipzig", "containedIn": { "@type": "Country", "name": "Deutschland" } },
              { "@type": "City", "name": "Nürnberg", "containedIn": { "@type": "Country", "name": "Deutschland" } },
              { "@type": "City", "name": "Wien", "containedIn": { "@type": "Country", "name": "Österreich" } },
              { "@type": "City", "name": "Graz", "containedIn": { "@type": "Country", "name": "Österreich" } },
              { "@type": "City", "name": "Linz", "containedIn": { "@type": "Country", "name": "Österreich" } },
              { "@type": "City", "name": "Zürich", "containedIn": { "@type": "Country", "name": "Schweiz" } },
              { "@type": "City", "name": "Genf", "containedIn": { "@type": "Country", "name": "Schweiz" } },
              { "@type": "City", "name": "Basel", "containedIn": { "@type": "Country", "name": "Schweiz" } }
            ],
            "founder": {
              "@type": "Person",
              "name": "Olivier Steineur"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digitale Dienstleistungen",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CTO as a Service",
                    "description": "Fractional CTO Services im DACH-Raum"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Individuelle Webentwicklung",
                    "description": "Maßgeschneiderte Webentwicklung in Deutschland, Österreich und der Schweiz"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "DevOps- und Cloud-Consulting",
                    "description": "Beratung zu Cloud-Infrastruktur und DevOps"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technisches SEO",
                    "description": "Fortgeschrittene SEO-Strategie und Implementierung"
                  }
                }
              ]
            }
          }
        `}
      </Script>
      <Script id="ld-professionalservice-de" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://www.o7digital.com/de/#professionalservice",
            "name": "O7 Digital Consulting",
            "image": "https://www.o7digital.com/assets/images/logo/logo.png",
            "url": "https://www.o7digital.com/de",
            "priceRange": "€€€",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Paris",
                "addressLocality": "Paris",
                "addressRegion": "Île-de-France",
                "postalCode": "75000",
                "addressCountry": "FR"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Montréal",
                "addressLocality": "Montréal",
                "addressRegion": "QC",
                "addressCountry": "CA"
              }
            ],
            "geo": [
              {
                "@type": "GeoCoordinates",
                "latitude": 48.8566,
                "longitude": 2.3522
              },
              {
                "@type": "GeoCoordinates",
                "latitude": 45.5017,
                "longitude": -73.5673
              }
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.linkedin.com/company/o7-digital-consulting"
            ]
          }
        `}
      </Script>
      <Script id="ld-website-de" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.o7digital.com/de/#website",
            "url": "https://www.o7digital.com/de",
            "name": "O7 Digital Consulting",
            "inLanguage": "de-DE",
            "publisher": {
              "@id": "https://www.o7digital.com/de/#organization"
            }
          }
        `}
      </Script>
      <Script id="ld-webpage-de" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.o7digital.com/de/index-digital-agency#webpage",
            "url": "https://www.o7digital.com/de/index-digital-agency",
            "name": "Digitalagentur Deutschland | IT-Beratung Berlin München Frankfurt Wien Zürich | CTO as a Service DACH",
            "description": "Internationale Digitalagentur und IT-Beratung für Unternehmen in Deutschland, Österreich, Schweiz. CTO as a Service, individuelle Webentwicklung, Cloud Consulting, DevOps Beratung, technische SEO und KI-Integration für digitale Transformation DACH. IT Consulting Berlin, München, Hamburg, Frankfurt, Wien, Zürich.",
            "inLanguage": "de-DE",
            "isPartOf": {
              "@id": "https://www.o7digital.com/de/#website"
            },
            "about": {
              "@id": "https://www.o7digital.com/de/#organization"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Startseite",
                  "item": "https://www.o7digital.com/de/index-digital-agency"
                }
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.o7digital.com/de/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </Script>
      <Hero
        title={
          <>
            Wir begleiten Ihr Wachstum <br />
            und Ihre digitale Entwicklung
          </>
        }
        description="Go-to-market, digitales Marketing sowie IT- & Cloud-Services (Managed Services, Cybersicherheit, Consulting)."
        ctaLabel="Mit einem Experten sprechen →"
        ctaHref="/de/contact"
      />
      <HomeIntro
        data={o7HomeIntroDe}
        approachTitle="Unser Ansatz"
        approachText="Wir entwickeln moderne, schnelle und skalierbare Lösungen auf Basis verlässlicher Technologien, abgestimmt auf Ihre Ziele. Jedes Projekt ruht auf einer sauberen, sicheren, performanceorientierten Architektur."
        expertiseTitle="Expertise-Bereiche"
        expertiseText="Digitale Strategie, Webentwicklung (React, Next.js, Astro), Headless CMS, KI und Automatisierung, technisches SEO, Managed Services und Support. Ganzheitliche Begleitung vom Assessment bis zum Go-live."
      />
      <HomeServices
        services={o7HomeServicesDe}
        eyebrow="Kernleistungen"
        title="9 zentrale Services"
        description="Strategie, Entwicklung, KI, SEO, Managed Services, Grafikdesign, Motion Design und 3D für Ihre digitalen Anforderungen."
      />
      <CtaSection anchorId="cta-de" cta={o7CtaDe} contactHref="/de/contact" />
      <Footer2 lang="de" showSeoFooterBlock />
    </>
  );
}
