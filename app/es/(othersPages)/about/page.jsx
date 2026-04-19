import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import CtaSection from "@/components/o7/common/CtaSection";
import AboutDetails from "@/components/o7/about/AboutDetails";
import AboutHero from "@/components/o7/about/AboutHero";
import Expertise from "@/components/o7/about/Expertise";
import Methodology from "@/components/o7/about/Methodology";
import {
  o7AboutHero as o7AboutHeroEs,
  o7AboutDetails as o7AboutDetailsEs,
  o7Methodology as o7MethodologyEs,
  o7ExpertiseCopy as o7ExpertiseCopyEs,
  o7CtaBlock as o7CtaEs,
} from "@/data/o7.es";

export const metadata = {
  title: "Sobre O7 Digital Consulting | Dirección digital e ingeniería",
  description:
    "O7 Digital Consulting: estrategia, ingeniería y rendimiento. Descubre nuestro enfoque, misión, visión y valores.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/es/about',
    languages: {
      'fr': 'https://www.o7digital-consulting.com/about',
      'en': 'https://www.o7digital-consulting.com/en/about',
      'es': 'https://www.o7digital-consulting.com/es/about',
      'de': 'https://www.o7digital-consulting.com/de/about',
      'it': 'https://www.o7digital-consulting.com/it/about',
    },
  },
  openGraph: {
    locale: 'es_ES',
    alternateLocale: ['fr_FR', 'en_US', 'de_DE', 'it_IT'],
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
      <AboutHero heroData={o7AboutHeroEs} />
      <AboutDetails
        eyebrow="Sobre nosotros"
        title="Sobre nosotros"
        description=""
        details={o7AboutDetailsEs}
      />
      <Methodology
        eyebrow="Misión, Visión y Valores"
        title="Misión, Visión y Valores"
        description="Nuestro compromiso: entregar soluciones fiables y de alto rendimiento, alineadas con los objetivos de nuestros clientes."
        items={o7MethodologyEs}
      />
      <Expertise
        eyebrow="Expertise"
        title="Implicación en el core del negocio"
        paragraphs={o7ExpertiseCopyEs}
      />
      <CtaSection anchorId="cta-about-es" cta={o7CtaEs} contactHref="/es/contact" />
      <Footer2 lang="es" />
    </>
  );
}
