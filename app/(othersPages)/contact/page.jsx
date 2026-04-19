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
      'x-default': 'https://www.o7digital-consulting.com/contact',
      'fr': 'https://www.o7digital-consulting.com/contact',
      'en': 'https://www.o7digital-consulting.com/en/contact',
      'es': 'https://www.o7digital-consulting.com/es/contact',
      'de': 'https://www.o7digital-consulting.com/de/contact',
      'it': 'https://www.o7digital-consulting.com/it/contact',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'es_ES', 'de_DE', 'it_IT'],
    url: 'https://www.o7digital-consulting.com/contact',
    siteName: 'O7 Digital Consulting',
    title: 'Contact O7 Digital Consulting | Parlez de votre projet digital',
    description:
      "Contactez O7 Digital Consulting pour échanger sur votre projet digital, votre stratégie technologique ou votre transformation digitale.",
    images: [
      {
        url: '/assets/images/o7digital-logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact O7 Digital Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact O7 Digital Consulting | Parlez de votre projet digital',
    description:
      'Réponse rapide et accompagnement personnalisé pour votre projet digital.',
    images: ['/assets/images/o7digital-logo.png'],
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
