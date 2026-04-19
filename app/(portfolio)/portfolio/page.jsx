import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import PortfolioSection from "@/components/o7/portfolio/PortfolioSection";
import { o7PortfolioCopy } from "@/data/o7";
import { o7PortfolioProjects } from "@/data/o7-portfolio";

export const metadata = {
  title: o7PortfolioCopy.metaTitle,
  description: o7PortfolioCopy.metaDescription,
  alternates: {
    canonical: "https://www.o7digital-consulting.com/portfolio",
    languages: {
      "x-default": "https://www.o7digital-consulting.com/portfolio",
      fr: "https://www.o7digital-consulting.com/portfolio",
      en: "https://www.o7digital-consulting.com/en/portfolio",
      es: "https://www.o7digital-consulting.com/es/portfolio",
      de: "https://www.o7digital-consulting.com/de/portfolio",
      it: "https://www.o7digital-consulting.com/it/portfolio",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US", "es_ES", "de_DE", "it_IT"],
    url: "https://www.o7digital-consulting.com/portfolio",
    siteName: "O7 Digital Consulting",
    title: o7PortfolioCopy.metaTitle,
    description: o7PortfolioCopy.metaDescription,
    images: [
      {
        url: "/assets/images/o7digital-logo.png",
        width: 1200,
        height: 630,
        alt: "Portfolio O7 Digital Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: o7PortfolioCopy.metaTitle,
    description: o7PortfolioCopy.metaDescription,
    images: ["/assets/images/o7digital-logo.png"],
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
      <Footer2 />
    </>
  );
}
