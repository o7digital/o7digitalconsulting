import React from "react";
import Script from "next/script";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Hero from "@/components/homes/index-international-consulting/Hero";
import CtaSection from "@/components/o7/common/CtaSection";
import HomeIntro from "@/components/o7/home/HomeIntro";
import HomeServices from "@/components/o7/home/HomeServices";
import {
  o7HomeIntro as o7HomeIntroEs,
  o7HomeServices as o7HomeServicesEs,
  o7CtaBlock as o7CtaEs,
} from "@/data/o7.es";

export const metadata = {
  title: "CTO as a Service Madrid Barcelona México Monterrey Guadalajara | Dirección Digital Externalizada",
  description:
    "CTO as a Service Madrid, Barcelona, Valencia, Sevilla, Ciudad de México, Monterrey y Guadalajara. Dirección digital externalizada México y España. Consultoría SEO técnica México y Madrid, consultoría IT estratégica España y México, arquitectura web escalable, transformación digital empresas México y España. Consultoría digital B2B internacional.",
  alternates: {
    canonical: 'https://www.o7digital.com/es/index-digital-agency',
    languages: {
      'fr': 'https://www.o7digital.com/',
      'en': 'https://www.o7digital.com/en/index-digital-agency',
      'es': 'https://www.o7digital.com/es/index-digital-agency',
      'de': 'https://www.o7digital.com/de/index-digital-agency',
      'it': 'https://www.o7digital.com/it/index-digital-agency',
    },
  },
  openGraph: {
    locale: 'es_ES',
    alternateLocale: ['fr_FR', 'en_US', 'de_DE', 'it_IT'],
  },
};

export default function HomeEs() {
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
      <Script id="ld-organization-es" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.o7digital.com/es/#organization",
            "name": "O7 Digital Consulting",
            "url": "https://www.o7digital.com/es",
            "logo": "https://www.o7digital.com/assets/images/logo/logo.png",
            "description": "Agencia digital Madrid, Barcelona, Ciudad de México, Monterrey y Guadalajara especializada en CTO as a Service, desarrollo web React Next.js, consultoría DevOps México y España, CMS headless para empresas, integración IA y SEO técnico México y España.",
            "sameAs": [
              "https://www.linkedin.com/company/o7-digital-consulting"
            ],
            "areaServed": [
              { 
                "@type": "City", 
                "name": "Madrid",
                "addressCountry": "ES"
              },
              { 
                "@type": "City", 
                "name": "Barcelona",
                "addressCountry": "ES"
              },
              { 
                "@type": "City", 
                "name": "Valencia",
                "addressCountry": "ES"
              },
              { 
                "@type": "City", 
                "name": "Sevilla",
                "addressCountry": "ES"
              },
              { 
                "@type": "City", 
                "name": "Málaga",
                "addressCountry": "ES"
              },
              { 
                "@type": "City", 
                "name": "Bilbao",
                "addressCountry": "ES"
              },
              { 
                "@type": "City", 
                "name": "Zaragoza",
                "addressCountry": "ES"
              },
              { 
                "@type": "City", 
                "name": "Alicante",
                "addressCountry": "ES"
              },
              { 
                "@type": "City", 
                "name": "Ciudad de México",
                "addressCountry": "MX"
              },
              { 
                "@type": "City", 
                "name": "Monterrey",
                "addressCountry": "MX"
              },
              { 
                "@type": "City", 
                "name": "Guadalajara",
                "addressCountry": "MX"
              },
              { 
                "@type": "City", 
                "name": "Querétaro",
                "addressCountry": "MX"
              },
              { 
                "@type": "City", 
                "name": "Puebla",
                "addressCountry": "MX"
              },
              { 
                "@type": "City", 
                "name": "Tijuana",
                "addressCountry": "MX"
              },
              { 
                "@type": "City", 
                "name": "Mérida",
                "addressCountry": "MX"
              },
              { 
                "@type": "City", 
                "name": "Cancún",
                "addressCountry": "MX"
              },
              { "@type": "Country", "name": "España" },
              { "@type": "Country", "name": "México" }
            ],
            "founder": {
              "@type": "Person",
              "name": "Olivier Steineur"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios digitales",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CTO as a Service Madrid Barcelona México Monterrey Guadalajara",
                    "description": "Dirección digital externalizada México y España, dirección tecnológica externalizada para empresas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Desarrollo web a medida México y España",
                    "description": "Desarrollo web React México y España, desarrollo web Next.js con arquitectura escalable"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Consultoría DevOps México y España",
                    "description": "Consultoría cloud México y España, infraestructura cloud empresas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO técnico México y España",
                    "description": "Consultoría SEO técnica México y España, auditoría SEO técnica avanzada"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CMS headless para empresas México y España",
                    "description": "Consultoría CMS headless México y España, gestión de contenidos empresariales"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Transformación digital empresas México y España",
                    "description": "Consultoría IT estratégica México y España, estrategia digital empresarial"
                  }
                }
              ]
            }
          }
        `}
      </Script>
      <Script id="ld-professionalservice-es" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://www.o7digital.com/es/#professionalservice",
            "name": "O7 Digital Consulting",
            "image": "https://www.o7digital.com/assets/images/logo/logo.png",
            "url": "https://www.o7digital.com/es",
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
      <Script id="ld-website-es" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.o7digital.com/es/#website",
            "url": "https://www.o7digital.com/es",
            "name": "O7 Digital Consulting",
            "inLanguage": "es-ES",
            "publisher": {
              "@id": "https://www.o7digital.com/es/#organization"
            }
          }
        `}
      </Script>
      <Script id="ld-webpage-es" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.o7digital.com/es/index-digital-agency#webpage",
            "url": "https://www.o7digital.com/es/index-digital-agency",
            "name": "CTO as a Service Madrid Barcelona México Monterrey Guadalajara | Dirección Digital Externalizada",
            "description": "CTO as a Service Madrid, Barcelona, Valencia, Sevilla, Ciudad de México, Monterrey y Guadalajara. Dirección digital externalizada México y España. Consultoría SEO técnica México y Madrid, consultoría IT estratégica España y México, arquitectura web escalable, transformación digital empresas México y España. Consultoría digital B2B internacional.",
            "inLanguage": "es-ES",
            "isPartOf": {
              "@id": "https://www.o7digital.com/es/#website"
            },
            "about": {
              "@id": "https://www.o7digital.com/es/#organization"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://www.o7digital.com/es/index-digital-agency"
                }
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.o7digital.com/es/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </Script>
      <Hero
        title={
          <>
            Te acompañamos en tu crecimiento <br />
            y en tu desarrollo
          </>
        }
        description="Go-to-market, marketing digital y servicios IT & Cloud (infogestión, ciberseguridad, consultoría)."
        ctaLabel="Hablar con un experto →"
        ctaHref="/es/contact"
      />
      <HomeIntro
        data={o7HomeIntroEs}
        approachTitle="Nuestro enfoque"
        approachText="Creamos soluciones modernas, rápidas y escalables basadas en tecnologías fiables y adaptadas a tus objetivos. Cada proyecto se apoya en una arquitectura limpia, segura y orientada a la performance."
        expertiseTitle="Áreas de expertise"
        expertiseText="Estrategia digital, desarrollo web (React, Next.js, Astro), CMS headless, IA y automatización, SEO técnico, infogestión y soporte. Acompañamiento integral del diagnóstico a la producción."
      />
      <HomeServices
        services={o7HomeServicesEs}
        eyebrow="Servicios clave"
        title="9 servicios principales"
        description="Estrategia, desarrollo, IA, SEO, infogestión, diseño gráfico, motion design y 3D para cubrir tus necesidades digitales."
      />
      <CtaSection anchorId="cta-es" cta={o7CtaEs} contactHref="/es/contact" />
      <Footer2 lang="es" />
    </>
  );
}
