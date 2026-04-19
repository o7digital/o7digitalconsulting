import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import PortfolioSection from "@/components/o7/portfolio/PortfolioSection";
import { o7PortfolioCopy } from "@/data/o7.it";
import { o7PortfolioProjects } from "@/data/o7-portfolio";

export const metadata = {
  title: o7PortfolioCopy.metaTitle,
  description: o7PortfolioCopy.metaDescription,
  alternates: {
    canonical: "https://www.o7digital-consulting.com/it/portfolio",
    languages: {
      fr: "https://www.o7digital-consulting.com/portfolio",
      en: "https://www.o7digital-consulting.com/en/portfolio",
      es: "https://www.o7digital-consulting.com/es/portfolio",
      de: "https://www.o7digital-consulting.com/de/portfolio",
      it: "https://www.o7digital-consulting.com/it/portfolio",
    },
  },
  openGraph: {
    locale: "it_IT",
    alternateLocale: ["fr_FR", "en_US", "es_ES", "de_DE"],
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
      <PortfolioSection copy={o7PortfolioCopy} projects={o7PortfolioProjects} />
      <Footer2 lang="it" />
    </>
  );
}
