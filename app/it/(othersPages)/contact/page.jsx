import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import ContactContent from "@/components/o7/contact/ContactContent";
import { o7ContactCopy as o7ContactCopyIt } from "@/data/o7.it";

export const metadata = {
  title: "Contatto O7 Digital Consulting | Parliamo del vostro progetto digitale",
  description:
    "Contattate O7 Digital Consulting per discutere del vostro progetto digitale, strategia tecnologica o trasformazione digitale. Risposta rapida e supporto personalizzato.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/it/contact',
    languages: {
      'fr': 'https://www.o7digital-consulting.com/contact',
      'en': 'https://www.o7digital-consulting.com/en/contact',
      'es': 'https://www.o7digital-consulting.com/es/contact',
      'de': 'https://www.o7digital-consulting.com/de/contact',
      'it': 'https://www.o7digital-consulting.com/it/contact',
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
      <ContactContent copy={o7ContactCopyIt} eyebrow="Contatto" />
      <Footer2 lang="it" />
    </>
  );
}
