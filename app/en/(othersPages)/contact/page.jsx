import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import ContactContent from "@/components/o7/contact/ContactContent";
import { o7ContactCopy as o7ContactCopyEn } from "@/data/o7.en";

export const metadata = {
  title: "Contact O7 Digital Consulting | Tell us about your digital project",
  description:
    "Contact O7 Digital Consulting to discuss your digital project, technology strategy or digital transformation. Fast response and tailored support.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/en/contact',
    languages: {
      'fr': 'https://www.o7digital-consulting.com/contact',
      'en': 'https://www.o7digital-consulting.com/en/contact',
      'es': 'https://www.o7digital-consulting.com/es/contact',
      'de': 'https://www.o7digital-consulting.com/de/contact',
      'it': 'https://www.o7digital-consulting.com/it/contact',
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
      <ContactContent copy={o7ContactCopyEn} eyebrow="Contact" />
      <Footer2 lang="en" />
    </>
  );
}
