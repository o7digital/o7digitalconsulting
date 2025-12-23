import React from "react";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import ContactContent from "@/components/o7/contact/ContactContent";
import { o7ContactCopy } from "@/data/o7";

export const metadata = {
  title: "Contact O7 Digital Consulting | Parlez de votre projet digital",
  description:
    "Contactez O7 Digital Consulting pour échanger sur votre projet digital, votre stratégie technologique ou votre transformation digitale. Réponse rapide et accompagnement personnalisé.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/contact',
    languages: {
      'fr': 'https://www.o7digital-consulting.com/contact',
      'en': 'https://www.o7digital-consulting.com/en/contact',
      'es': 'https://www.o7digital-consulting.com/es/contact',
      'de': 'https://www.o7digital-consulting.com/de/contact',
      'it': 'https://www.o7digital-consulting.com/it/contact',
    },
  },
  openGraph: {
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'es_ES', 'de_DE', 'it_IT'],
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
      <ContactContent copy={o7ContactCopy} />
      <Footer2 />
    </>
  );
}
