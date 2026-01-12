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
    "O7 Digital Consulting | Agence de consulting digital, CTO & développement web",
  description:
    "Agence de conseil digital à Paris et Montréal spécialisée en CTO as a Service, développement web sur mesure, conseil DevOps, cloud, intégration IA et stratégie SEO avancée.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/index-digital-agency',
    languages: {
      'fr': 'https://www.o7digital-consulting.com/index-digital-agency',
      'en': 'https://www.o7digital-consulting.com/en/index-digital-agency',
      'es': 'https://www.o7digital-consulting.com/es/index-digital-agency',
      'de': 'https://www.o7digital-consulting.com/de/index-digital-agency',
    },
  },
  openGraph: {
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'es_ES', 'de_DE'],
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
            "name": "O7 Digital Consulting",
            "url": "https://www.o7digital-consulting.com",
            "logo": "https://www.o7digital-consulting.com/logo.png",
            "description": "Agence de conseil digital à Paris et Montréal spécialisée en CTO as a Service, développement web sur mesure, conseil DevOps, cloud, intégration IA et stratégie SEO avancée.",
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
                "name": "Montréal",
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
                    "name": "CTO as a Service",
                    "description": "Services de direction technique externalisée"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Développement web sur mesure",
                    "description": "Création de sites web et applications à Paris et Montréal"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Conseil DevOps et Cloud",
                    "description": "Conseil en infrastructure cloud et DevOps"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Stratégie SEO avancée",
                    "description": "Optimisation SEO technique et stratégique"
                  }
                }
              ]
            }
          }
        `}
      </Script>
      <Hero />
      <HomeIntro />
      <HomeServices />
      <LocalCoverage />
      <CtaSection anchorId="cta" />
      <Footer2 />
    </>
  );
}
