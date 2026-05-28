import React from "react";
import Script from "next/script";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Hero from "@/components/homes/index-international-consulting/Hero";
import CtaSection from "@/components/o7/common/CtaSection";
import HomeIntro from "@/components/o7/home/HomeIntro";
import HomeServices from "@/components/o7/home/HomeServices";
import {
  o7HomeIntro as o7HomeIntroIt,
  o7HomeServices as o7HomeServicesIt,
  o7CtaBlock as o7CtaIt,
} from "@/data/o7.it";

export const metadata = {
  title: "Agenzia digitale Italia | Consulenza IT Milano Roma Torino Bologna Firenze | CTO as a Service",
  description:
    "Agenzia digitale internazionale e consulenza IT per aziende in Italia, Svizzera ed Europa. CTO as a Service, sviluppo web su misura, consulenza cloud, DevOps consulting, SEO tecnica e integrazione AI per trasformazione digitale. IT consulting Milano, Roma, Torino, Bologna, Firenze, Venezia.",
  alternates: {
    canonical: 'https://www.o7digital.com/it/index-digital-agency',
    languages: {
      'fr': 'https://www.o7digital.com/',
      'en': 'https://www.o7digital.com/en/index-digital-agency',
      'es': 'https://www.o7digital.com/es/index-digital-agency',
      'de': 'https://www.o7digital.com/de/index-digital-agency',
      'it': 'https://www.o7digital.com/it/index-digital-agency',
    },
  },
  openGraph: {
    locale: 'it_IT',
    alternateLocale: ['fr_FR', 'en_US', 'es_ES', 'de_DE'],
  },
};

export default function HomeIt() {
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
      <Script id="ld-organization-it" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.o7digital.com/it/#organization",
            "name": "O7 Digital Consulting",
            "alternateName": "O7 Digital",
            "url": "https://www.o7digital.com/it",
            "logo": "https://www.o7digital.com/assets/images/logo/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/o7-digital-consulting"
            ],
            "description": "Servizi CTO esternalizzati e trasformazione digitale per aziende in Italia, Europa, USA e Canada. SEO tecnico internazionale, architettura web ad alte prestazioni, consulenza digitale B2B e consulenza IT strategica.",
            "areaServed": [
              { "@type": "City", "name": "Milano", "containedIn": { "@type": "Country", "name": "Italia" } },
              { "@type": "City", "name": "Roma", "containedIn": { "@type": "Country", "name": "Italia" } },
              { "@type": "City", "name": "Torino", "containedIn": { "@type": "Country", "name": "Italia" } },
              { "@type": "City", "name": "Bologna", "containedIn": { "@type": "Country", "name": "Italia" } },
              { "@type": "City", "name": "Firenze", "containedIn": { "@type": "Country", "name": "Italia" } },
              { "@type": "City", "name": "Napoli", "containedIn": { "@type": "Country", "name": "Italia" } },
              { "@type": "City", "name": "Venezia", "containedIn": { "@type": "Country", "name": "Italia" } },
              { "@type": "City", "name": "Verona", "containedIn": { "@type": "Country", "name": "Italia" } },
              { "@type": "City", "name": "Padova", "containedIn": { "@type": "Country", "name": "Italia" } },
              { "@type": "City", "name": "Modena", "containedIn": { "@type": "Country", "name": "Italia" } },
              { "@type": "City", "name": "Genova", "containedIn": { "@type": "Country", "name": "Italia" } },
              { "@type": "City", "name": "Palermo", "containedIn": { "@type": "Country", "name": "Italia" } },
              { "@type": "City", "name": "Z\u00fcrich", "containedIn": { "@type": "Country", "name": "Svizzera" } },
              { "@type": "City", "name": "Ginevra", "containedIn": { "@type": "Country", "name": "Svizzera" } },
              { "@type": "City", "name": "Lugano", "containedIn": { "@type": "Country", "name": "Svizzera" } }
            ],
            "founder": {
              "@type": "Person",
              "name": "Olivier Steineur"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servizi digitali",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CTO as a Service Italia | Leadership digitale esternalizzata",
                    "description": "CTO as a Service per aziende in Italia e Svizzera, direzione tecnologica esternalizzata."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sviluppo web React e Next.js Italia",
                    "description": "Sviluppo web su misura con React e Next.js per aziende in Italia e Svizzera."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Consulenza DevOps e cloud Italia",
                    "description": "Consulenza cloud e DevOps per infrastrutture scalabili e affidabili."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO tecnico internazionale",
                    "description": "SEO tecnico avanzato, performance web e dati strutturati per siti internazionali."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CMS headless per aziende",
                    "description": "CMS headless e architetture API per la gestione dei contenuti in azienda."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Consulenza IT strategica",
                    "description": "Consulenza IT e trasformazione digitale per aziende B2B."
                  }
                }
              ]
            }
          }
        `}
      </Script>
      <Script id="ld-professionalservice-it" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://www.o7digital.com/it/#professionalservice",
            "name": "O7 Digital Consulting",
            "image": "https://www.o7digital.com/assets/images/logo/logo.png",
            "url": "https://www.o7digital.com/it",
            "telephone": "+33-XX-XX-XX-XX",
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
                "postalCode": "H0H 0H0",
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
      <Script id="ld-website-it" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.o7digital.com/it/#website",
            "url": "https://www.o7digital.com/it",
            "name": "O7 Digital Consulting",
            "inLanguage": "it-IT",
            "publisher": {
              "@id": "https://www.o7digital.com/it/#organization"
            }
          }
        `}
      </Script>
      <Script id="ld-webpage-it" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.o7digital.com/it/index-digital-agency#webpage",
            "url": "https://www.o7digital.com/it/index-digital-agency",
            "name": "Agenzia digitale Italia | Consulenza IT Milano Roma Torino Bologna Firenze | CTO as a Service",
            "description": "Agenzia digitale internazionale e consulenza IT per aziende in Italia, Svizzera ed Europa. CTO as a Service, sviluppo web su misura, consulenza cloud, DevOps consulting, SEO tecnica e integrazione AI per trasformazione digitale. IT consulting Milano, Roma, Torino, Bologna, Firenze, Venezia.",
            "inLanguage": "it-IT",
            "isPartOf": {
              "@id": "https://www.o7digital.com/it/#website"
            },
            "about": {
              "@id": "https://www.o7digital.com/it/#organization"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.o7digital.com/it/index-digital-agency"
                }
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.o7digital.com/it/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </Script>
      <Hero
        title={
          <>
            Vi accompagniamo <br />
            nella vostra crescita e sviluppo
          </>
        }
        description="Go-to-market, marketing digitale e servizi IT & Cloud (gestione IT, cybersecurity, consulenza):"
        ctaLabel="Parlare con un esperto →"
        ctaHref="/it/contact"
      />
      <HomeIntro
        data={o7HomeIntroIt}
        approachTitle="Il nostro approccio"
        approachText="Sviluppiamo soluzioni moderne, veloci e scalabili, basate su tecnologie affidabili e adattate ai vostri obiettivi. Ogni progetto si basa su un'architettura pulita, sicura e orientata alle prestazioni."
        expertiseTitle="Aree di competenza"
        expertiseText="Strategia digitale, sviluppo web (React, Next.js, Astro), CMS headless, IA e automazione, SEO tecnico, managed services e supporto. Accompagnamento completo, dalla diagnosi alla produzione."
      />
      <HomeServices
        services={o7HomeServicesIt}
        eyebrow="Servizi chiave"
        title="9 servizi principali"
        description="Strategia, sviluppo, IA, SEO, managed services, design grafico, motion design e 3D per coprire le vostre esigenze digitali."
      />
      <CtaSection anchorId="cta-home-it" cta={o7CtaIt} contactHref="/it/contact" />
      <Footer2 lang="it" showSeoFooterBlock />
    </>
  );
}
