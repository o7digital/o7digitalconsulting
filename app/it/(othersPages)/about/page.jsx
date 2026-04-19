import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import CtaSection from "@/components/o7/common/CtaSection";
import AboutDetails from "@/components/o7/about/AboutDetails";
import AboutHero from "@/components/o7/about/AboutHero";
import Expertise from "@/components/o7/about/Expertise";
import Methodology from "@/components/o7/about/Methodology";
import {
  o7AboutHero as o7AboutHeroIt,
  o7AboutDetails as o7AboutDetailsIt,
  o7Methodology as o7MethodologyIt,
  o7ExpertiseCopy as o7ExpertiseCopyIt,
  o7CtaBlock as o7CtaIt,
} from "@/data/o7.it";

export const metadata = {
  title: "Chi siamo O7 Digital Consulting | Leadership digitale & engineering",
  description:
    "O7 Digital Consulting: strategia, engineering e performance. Scoprite il nostro approccio, missione, visione e valori.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/it/about',
    languages: {
      'fr': 'https://www.o7digital-consulting.com/about',
      'en': 'https://www.o7digital-consulting.com/en/about',
      'es': 'https://www.o7digital-consulting.com/es/about',
      'de': 'https://www.o7digital-consulting.com/de/about',
      'it': 'https://www.o7digital-consulting.com/it/about',
    },
  },
  openGraph: {
    locale: 'it_IT',
    alternateLocale: ['fr_FR', 'en_US', 'es_ES', 'de_DE'],
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
      <AboutHero heroData={o7AboutHeroIt} />
      <AboutDetails
        eyebrow="Chi siamo"
        title="Chi siamo"
        description=""
        details={o7AboutDetailsIt}
      />
      <Methodology
        eyebrow="Missione, Visione & Valori"
        title="Missione, Visione & Valori"
        description="Il nostro impegno: fornire soluzioni affidabili e ad alte prestazioni allineate agli obiettivi dei nostri clienti."
        items={o7MethodologyIt}
      />
      <Expertise
        eyebrow="Competenza"
        title="Integrati nel business dei nostri clienti"
        paragraphs={o7ExpertiseCopyIt}
      />
      <CtaSection anchorId="cta-about-it" cta={o7CtaIt} contactHref="/it/contact" />
      <Footer2 lang="it" />
    </>
  );
}
