import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import CtaSection from "@/components/o7/common/CtaSection";
import AboutDetails from "@/components/o7/about/AboutDetails";
import AboutHero from "@/components/o7/about/AboutHero";
import Expertise from "@/components/o7/about/Expertise";
import Methodology from "@/components/o7/about/Methodology";
import {
  o7AboutHero as o7AboutHeroEn,
  o7AboutDetails as o7AboutDetailsEn,
  o7Methodology as o7MethodologyEn,
  o7ExpertiseCopy as o7ExpertiseCopyEn,
  o7CtaBlock as o7CtaEn,
} from "@/data/o7.en";

export const metadata = {
  title: "About O7 Digital Consulting | Digital leadership & engineering",
  description:
    "O7 Digital Consulting: strategy, engineering and performance. Discover our approach, mission, vision and values.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/en/about',
    languages: {
      'fr': 'https://www.o7digital-consulting.com/about',
      'en': 'https://www.o7digital-consulting.com/en/about',
      'es': 'https://www.o7digital-consulting.com/es/about',
      'de': 'https://www.o7digital-consulting.com/de/about',
      'it': 'https://www.o7digital-consulting.com/it/about',
    },
  },
  openGraph: {
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'es_ES', 'de_DE', 'it_IT'],
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
      <AboutHero heroData={o7AboutHeroEn} />
      <AboutDetails
        eyebrow="About"
        title="About"
        description=""
        details={o7AboutDetailsEn}
      />
      <Methodology
        eyebrow="Mission, Vision & Values"
        title="Mission, Vision & Values"
        description="Our commitment: deliver reliable, high-performance solutions aligned with our clients' goals."
        items={o7MethodologyEn}
      />
      <Expertise
        eyebrow="Expertise"
        title="Embedded in our clients' business"
        paragraphs={o7ExpertiseCopyEn}
      />
      <CtaSection anchorId="cta-about-en" cta={o7CtaEn} contactHref="/en/contact" />
      <Footer2 lang="en" />
    </>
  );
}
