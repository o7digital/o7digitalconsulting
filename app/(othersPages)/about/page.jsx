import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import CtaSection from "@/components/o7/common/CtaSection";
import AboutDetails from "@/components/o7/about/AboutDetails";
import AboutHero from "@/components/o7/about/AboutHero";
import Expertise from "@/components/o7/about/Expertise";
import Methodology from "@/components/o7/about/Methodology";

export const metadata = {
  title:
    "À propos de O7 Digital Consulting | Direction digitale & consulting stratégique",
  description:
    "Découvrez O7 Digital Consulting, agence de consulting digital impliquée au cœur du business de ses clients, agissant comme direction informatique et digitale externalisée.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/about',
    languages: {
      'x-default': 'https://www.o7digital-consulting.com/about',
      'fr': 'https://www.o7digital-consulting.com/about',
      'en': 'https://www.o7digital-consulting.com/en/about',
      'es': 'https://www.o7digital-consulting.com/es/about',
      'de': 'https://www.o7digital-consulting.com/de/about',
      'it': 'https://www.o7digital-consulting.com/it/about',
    },
  },
  openGraph: {
    type: 'article',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'es_ES', 'de_DE', 'it_IT'],
    url: 'https://www.o7digital-consulting.com/about',
    siteName: 'O7 Digital Consulting',
    title:
      "À propos de O7 Digital Consulting | Direction digitale & consulting stratégique",
    description:
      "Découvrez O7 Digital Consulting, agence de consulting digital impliquée au cœur du business de ses clients.",
    images: [
      {
        url: '/assets/images/o7digital-logo.png',
        width: 1200,
        height: 630,
        alt: 'À propos O7 Digital Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "À propos de O7 Digital Consulting | Direction digitale & consulting stratégique",
    description:
      "Agence de consulting digital impliquée au cœur du business de ses clients.",
    images: ['/assets/images/o7digital-logo.png'],
  },
};

export default function Page() {
  return (
    <>
      <Header2 parentClass="rainbow-header header-default header-left-align header-transparent header-sticky" />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <AboutHero />
      <AboutDetails />
      <Methodology />
      <Expertise />
      <CtaSection anchorId="cta-about" />
      <Footer2 />
    </>
  );
}
