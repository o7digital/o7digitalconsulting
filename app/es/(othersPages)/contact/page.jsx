import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import ContactContent from "@/components/o7/contact/ContactContent";
import { o7ContactCopy as o7ContactCopyEs } from "@/data/o7.es";

export const metadata = {
  title: "Contacto O7 Digital Consulting | Hablemos de tu proyecto digital",
  description:
    "Contacta a O7 Digital Consulting para hablar de tu proyecto digital, estrategia tecnológica o transformación digital. Respuesta rápida y acompañamiento personalizado.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/es/contact',
    languages: {
      'fr': 'https://www.o7digital-consulting.com/contact',
      'en': 'https://www.o7digital-consulting.com/en/contact',
      'es': 'https://www.o7digital-consulting.com/es/contact',
      'de': 'https://www.o7digital-consulting.com/de/contact',
      'it': 'https://www.o7digital-consulting.com/it/contact',
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
      <ContactContent copy={o7ContactCopyEs} eyebrow="Contacto" />
      <Footer2 lang="es" />
    </>
  );
}
