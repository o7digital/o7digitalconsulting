import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import CtaSection from "@/components/o7/common/CtaSection";
import AboutDetails from "@/components/o7/about/AboutDetails";
import AboutHero from "@/components/o7/about/AboutHero";
import Expertise from "@/components/o7/about/Expertise";
import Methodology from "@/components/o7/about/Methodology";
import {
  o7AboutHero as o7AboutHeroDe,
  o7AboutDetails as o7AboutDetailsDe,
  o7Methodology as o7MethodologyDe,
  o7ExpertiseCopy as o7ExpertiseCopyDe,
  o7CtaBlock as o7CtaDe,
} from "@/data/o7.de";

export const metadata = {
  title: "Über O7 Digital Consulting | Digitale Leitung & Engineering",
  description:
    "O7 Digital Consulting: Strategie, Engineering und Performance. Entdecken Sie unseren Ansatz, Mission, Vision und Werte.",
  alternates: {
    canonical: 'https://www.o7digital.com/de/about',
    languages: {
      'fr': 'https://www.o7digital.com/about',
      'en': 'https://www.o7digital.com/en/about',
      'es': 'https://www.o7digital.com/es/about',
      'de': 'https://www.o7digital.com/de/about',
      'it': 'https://www.o7digital.com/it/about',
    },
  },
  openGraph: {
    locale: 'de_DE',
    alternateLocale: ['fr_FR', 'en_US', 'es_ES', 'it_IT'],
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
      <AboutHero heroData={o7AboutHeroDe} />
      <AboutDetails
        eyebrow="Über uns"
        title="Über uns"
        description=""
        details={o7AboutDetailsDe}
      />
      <Methodology
        eyebrow="Mission, Vision & Werte"
        title="Mission, Vision & Werte"
        description="Unser Anspruch: zuverlässige, performante Lösungen, die mit den Zielen unserer Kunden übereinstimmen."
        items={o7MethodologyDe}
      />
      <Expertise
        eyebrow="Expertise"
        title="Im Kern des Geschäfts unserer Kunden"
        paragraphs={o7ExpertiseCopyDe}
      />
      <CtaSection anchorId="cta-about-de" cta={o7CtaDe} contactHref="/de/contact" />
      <Footer2 lang="de" />
    </>
  );
}
