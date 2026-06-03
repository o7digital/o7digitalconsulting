import React from "react";
import Script from "next/script";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Hero from "@/components/homes/index-international-consulting/Hero";
import CtaSection from "@/components/o7/common/CtaSection";
import HomeIntro from "@/components/o7/home/HomeIntro";
import HomeServices from "@/components/o7/home/HomeServices";
import LocalCoverage from "@/components/o7/home/LocalCoverage";

export const metadata = {
  title:
    "Agence SEO technique & sites rapides | O7 Digital",
  description:
    "O7 Digital conçoit des sites rapides et bien structurés pour améliorer l'indexation, la performance web et le positionnement Google.",
  alternates: {
    canonical: 'https://www.o7digital.com/',
    languages: {
      'x-default': 'https://www.o7digital.com/',
      'fr': 'https://www.o7digital.com/',
      'en': 'https://www.o7digital.com/en/index-digital-agency',
      'es': 'https://www.o7digital.com/es/index-digital-agency',
      'de': 'https://www.o7digital.com/de/index-digital-agency',
      'it': 'https://www.o7digital.com/it/index-digital-agency',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'es_ES', 'de_DE', 'it_IT'],
    url: 'https://www.o7digital.com/',
    siteName: 'O7 Digital Consulting',
    title:
      "Agence SEO technique & sites rapides | O7 Digital",
    description:
      "O7 Digital conçoit des sites rapides et bien structurés pour améliorer l'indexation, la performance web et le positionnement Google.",
    images: [
      {
        url: '/assets/images/o7digital-logo.png',
        width: 1200,
        height: 630,
        alt: 'O7 Digital Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Agence SEO technique & sites rapides | O7 Digital",
    description:
      "O7 Digital conçoit des sites rapides et bien structurés pour améliorer l'indexation, la performance web et le positionnement Google.",
    images: ['/assets/images/o7digital-logo.png'],
  },
};

export default function Home() {
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
      <Script id="ld-organization" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.o7digital.com/#organization",
            "name": "O7 Digital Consulting",
            "url": "https://www.o7digital.com",
            "logo": "https://www.o7digital.com/assets/images/logo/logo.png",
            "description": "Agence de consulting digital à Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Nantes, Strasbourg, Nice, Rennes, Montréal et Québec spécialisée en CTO as a Service, développement web React Next.js, consulting DevOps, CMS headless entreprise, intégration IA et SEO technique avancé.",
            "sameAs": [
              "https://www.linkedin.com/company/o7-digital-consulting"
            ],
            "areaServed": [
              { 
                "@type": "City", 
                "name": "Paris",
                "addressCountry": "FR"
              },
              { 
                "@type": "City", 
                "name": "Lyon",
                "addressCountry": "FR"
              },
              { 
                "@type": "City", 
                "name": "Marseille",
                "addressCountry": "FR"
              },
              { 
                "@type": "City", 
                "name": "Toulouse",
                "addressCountry": "FR"
              },
              { 
                "@type": "City", 
                "name": "Bordeaux",
                "addressCountry": "FR"
              },
              { 
                "@type": "City", 
                "name": "Lille",
                "addressCountry": "FR"
              },
              { 
                "@type": "City", 
                "name": "Nantes",
                "addressCountry": "FR"
              },
              { 
                "@type": "City", 
                "name": "Strasbourg",
                "addressCountry": "FR"
              },
              { 
                "@type": "City", 
                "name": "Nice",
                "addressCountry": "FR"
              },
              { 
                "@type": "City", 
                "name": "Rennes",
                "addressCountry": "FR"
              },
              { 
                "@type": "City", 
                "name": "Montréal",
                "addressCountry": "CA"
              },
              { 
                "@type": "City", 
                "name": "Québec",
                "addressCountry": "CA"
              },
              { 
                "@type": "City", 
                "name": "Laval",
                "addressCountry": "CA"
              },
              { 
                "@type": "City", 
                "name": "Longueuil",
                "addressCountry": "CA"
              },
              { 
                "@type": "City", 
                "name": "Gatineau",
                "addressCountry": "CA"
              },
              { "@type": "Country", "name": "France" },
              { "@type": "Country", "name": "Canada" }
            ],
            "founder": {
              "@type": "Person",
              "name": "Olivier Steineur"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services digitaux",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CTO as a Service Paris Lyon Marseille Toulouse Bordeaux Montréal Québec",
                    "description": "Direction digitale externalisée Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Nantes, Strasbourg, Nice, Rennes, Montréal et Québec"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Développement web React Next.js France Québec",
                    "description": "Développement web sur mesure Paris, Lyon, Montréal avec React, Next.js et architecture haute performance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CMS headless pour entreprises France Québec",
                    "description": "CMS headless et backends sur mesure pour entreprises en France et Québec"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Consulting DevOps France Québec",
                    "description": "Conseil DevOps, cloud et infrastructure pour entreprises France et Québec"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO technique Paris Montréal",
                    "description": "SEO technique Paris et Montréal, optimisation performance web internationale, audit SEO avancé"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Consulting IT stratégique Montréal Paris",
                    "description": "Consulting IT stratégique pour entreprises à Montréal et Paris"
                  }
                }
              ]
            }
          }
        `}
      </Script>
      <Script id="ld-professionalservice" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://www.o7digital.com/#professionalservice",
            "name": "O7 Digital Consulting",
            "image": "https://www.o7digital.com/assets/images/logo/logo.png",
            "url": "https://www.o7digital.com",
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
      <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.o7digital.com/#website",
            "url": "https://www.o7digital.com",
            "name": "O7 Digital Consulting",
            "inLanguage": "fr-FR",
            "publisher": {
              "@id": "https://www.o7digital.com/#organization"
            }
          }
        `}
      </Script>
      <Script id="ld-webpage" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.o7digital.com/#webpage",
            "url": "https://www.o7digital.com/",
            "name": "CTO as a Service Paris Lyon Marseille Toulouse Bordeaux Montréal | Direction Digitale Externalisée",
            "description": "CTO as a Service Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Nantes, Strasbourg, Nice, Rennes, Montréal et Québec. Direction digitale externalisée Paris, Lyon, Montréal. SEO technique Paris et Montréal, consulting IT stratégique Montréal, architecture web haute performance, transformation digitale groupes internationaux France et Québec.",
            "inLanguage": "fr-FR",
            "isPartOf": {
              "@id": "https://www.o7digital.com/#website"
            },
            "about": {
              "@id": "https://www.o7digital.com/#organization"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "https://www.o7digital.com/"
                }
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.o7digital.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </Script>
      <Hero />
      <HomeIntro />
      <HomeServices />
      <LocalCoverage />
      <CtaSection anchorId="cta" />
      <Footer2 showSeoFooterBlock />
    </>
  );
}
