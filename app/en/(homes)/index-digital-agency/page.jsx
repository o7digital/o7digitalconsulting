import React from "react";
import Script from "next/script";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Hero from "@/components/homes/index-international-consulting/Hero";
import CtaSection from "@/components/o7/common/CtaSection";
import HomeIntro from "@/components/o7/home/HomeIntro";
import HomeServices from "@/components/o7/home/HomeServices";
import {
  o7HomeIntro as o7HomeIntroEn,
  o7HomeServices as o7HomeServicesEn,
  o7CtaBlock as o7CtaEn,
} from "@/data/o7.en";
import { englishSeoKeywords } from "@/data/seoKeywords";

export const metadata = {
  title: "CTO as a Service London New York San Francisco Toronto | Fractional CTO UK USA Canada",
  description:
    "CTO as a Service London, New York, San Francisco, Toronto, Montreal and Vancouver. Digital consulting firm London, New York and Toronto. Technical SEO consulting London and New York, enterprise digital consulting, high-performance web architecture, digital transformation consulting UK, USA and Canada. IT consulting for enterprises.",
  keywords: englishSeoKeywords,
  alternates: {
    canonical: 'https://www.o7digital.com/en/index-digital-agency',
    languages: {
      'fr': 'https://www.o7digital.com/',
      'en': 'https://www.o7digital.com/en/index-digital-agency',
      'es': 'https://www.o7digital.com/es/index-digital-agency',
      'de': 'https://www.o7digital.com/de/index-digital-agency',
      'it': 'https://www.o7digital.com/it/index-digital-agency',
    },
  },
  openGraph: {
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'es_ES', 'de_DE', 'it_IT'],
  },
};

export default function HomeEn() {
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
      <Script id="ld-organization-en" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.o7digital.com/en/#organization",
            "name": "O7 Digital Consulting",
            "url": "https://www.o7digital.com/en",
            "logo": "https://www.o7digital.com/assets/images/logo/logo.png",
            "description": "Digital consulting firm London, New York, San Francisco and Toronto specializing in CTO as a Service, React Next.js development, DevOps consulting, headless CMS for enterprises, AI integration and technical SEO consulting UK, USA and Canada.",
            "sameAs": [
              "https://www.linkedin.com/company/o7-digital-consulting"
            ],
            "areaServed": [
              { 
                "@type": "City", 
                "name": "London",
                "addressCountry": "GB"
              },
              { 
                "@type": "City", 
                "name": "Manchester",
                "addressCountry": "GB"
              },
              { 
                "@type": "City", 
                "name": "Birmingham",
                "addressCountry": "GB"
              },
              { 
                "@type": "City", 
                "name": "Leeds",
                "addressCountry": "GB"
              },
              { 
                "@type": "City", 
                "name": "Bristol",
                "addressCountry": "GB"
              },
              { 
                "@type": "City", 
                "name": "Edinburgh",
                "addressCountry": "GB"
              },
              { 
                "@type": "City", 
                "name": "New York",
                "addressCountry": "US"
              },
              { 
                "@type": "City", 
                "name": "San Francisco",
                "addressCountry": "US"
              },
              { 
                "@type": "City", 
                "name": "Los Angeles",
                "addressCountry": "US"
              },
              { 
                "@type": "City", 
                "name": "Seattle",
                "addressCountry": "US"
              },
              { 
                "@type": "City", 
                "name": "Austin",
                "addressCountry": "US"
              },
              { 
                "@type": "City", 
                "name": "Boston",
                "addressCountry": "US"
              },
              { 
                "@type": "City", 
                "name": "Chicago",
                "addressCountry": "US"
              },
              { 
                "@type": "City", 
                "name": "Toronto",
                "addressCountry": "CA"
              },
              { 
                "@type": "City", 
                "name": "Montreal",
                "addressCountry": "CA"
              },
              { 
                "@type": "City", 
                "name": "Vancouver",
                "addressCountry": "CA"
              },
              { 
                "@type": "City", 
                "name": "Calgary",
                "addressCountry": "CA"
              },
              { 
                "@type": "City", 
                "name": "Ottawa",
                "addressCountry": "CA"
              },
              { 
                "@type": "Country", 
                "name": "United Kingdom"
              },
              { 
                "@type": "Country", 
                "name": "United States"
              },
              { 
                "@type": "Country", 
                "name": "Canada"
              }
            ],
            "founder": {
              "@type": "Person",
              "name": "Olivier Steineur"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CTO as a Service London New York San Francisco Toronto Montreal",
                    "description": "Fractional CTO London, New York and Toronto. Technical leadership outsourcing UK, USA and Canada"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom web development London New York Toronto",
                    "description": "React development consulting and Next.js development consulting UK, USA, Canada"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "DevOps consulting London USA Canada",
                    "description": "Cloud consulting and DevOps consulting UK, USA and Canada"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technical SEO consulting London New York San Francisco Toronto",
                    "description": "Enterprise SEO consulting London, technical SEO for international websites"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Headless CMS consulting London USA Canada",
                    "description": "Headless CMS for enterprises UK, USA and Canada"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital transformation consulting UK USA Canada",
                    "description": "Enterprise digital consulting London, New York and Toronto"
                  }
                }
              ]
            }
          }
        `}
      </Script>
      <Script id="ld-professionalservice-en" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://www.o7digital.com/en/#professionalservice",
            "name": "O7 Digital Consulting",
            "image": "https://www.o7digital.com/assets/images/logo/logo.png",
            "url": "https://www.o7digital.com/en",
            "telephone": "+33-XX-XX-XX-XX",
            "priceRange": "€€€",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Paris",
                "addressLocality": "Paris",
                "addressRegion": "Ile-de-France",
                "postalCode": "75000",
                "addressCountry": "FR"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Montreal",
                "addressLocality": "Montreal",
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
      <Script id="ld-website-en" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.o7digital.com/en/#website",
            "url": "https://www.o7digital.com/en",
            "name": "O7 Digital Consulting",
            "inLanguage": "en-US",
            "publisher": {
              "@id": "https://www.o7digital.com/en/#organization"
            }
          }
        `}
      </Script>
      <Script id="ld-webpage-en" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.o7digital.com/en/index-digital-agency#webpage",
            "url": "https://www.o7digital.com/en/index-digital-agency",
            "name": "CTO as a Service London New York San Francisco Toronto | Fractional CTO UK USA Canada",
            "description": "CTO as a Service London, New York, San Francisco, Toronto, Montreal and Vancouver. Digital consulting firm London, New York and Toronto. Technical SEO consulting London and New York, enterprise digital consulting, high-performance web architecture, digital transformation consulting UK, USA and Canada. IT consulting for enterprises.",
            "inLanguage": "en-US",
            "isPartOf": {
              "@id": "https://www.o7digital.com/en/#website"
            },
            "about": {
              "@id": "https://www.o7digital.com/en/#organization"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.o7digital.com/en/index-digital-agency"
                }
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.o7digital.com/en/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </Script>
      <Hero
        title={
          <>
            We support your growth <br />
            and development
          </>
        }
        description="Go-to-market, digital marketing, and IT & Cloud services (managed services, cybersecurity, consulting)."
        ctaLabel="Talk to an expert →"
        ctaHref="/en/contact"
      />
      <HomeIntro
        data={o7HomeIntroEn}
        approachTitle="Our approach"
        approachText="We build modern, fast, scalable solutions based on reliable technologies and tailored to your objectives. Each project relies on clean, secure architecture focused on performance."
        expertiseTitle="Areas of expertise"
        expertiseText="Digital strategy, web development (React, Next.js, Astro), headless CMS, AI and automation, technical SEO, managed services and support. End-to-end support from diagnosis to production."
      />
      <HomeServices
        services={o7HomeServicesEn}
        eyebrow="Key services"
        title="9 core services"
        description="Strategy, development, AI, SEO, managed services, graphic design, motion design and 3D to cover your digital needs."
      />
      <CtaSection anchorId="cta-en" cta={o7CtaEn} contactHref="/en/contact" />
      <Footer2 lang="en" />
    </>
  );
}
