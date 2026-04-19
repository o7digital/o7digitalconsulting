import "../public/assets/scss/main.scss";
import "react-modal-video/scss/modal-video.scss";
import "photoswipe/dist/photoswipe.css";
import "./custom-styles.css";
import Script from "next/script";
import ClientLayout from "./ClientLayout";

export const metadata = {
  metadataBase: new URL('https://www.o7digital-consulting.com'),
  title: {
    default: 'O7 Digital Consulting | Agence de consulting digital, CTO & développement web',
    template: '%s | O7 Digital Consulting'
  },
  description: 'O7 Digital Consulting est une agence de consulting digital spécialisée en stratégie digitale, CTO as a Service, développement web moderne, design graphique, motion design, SEO et performance digitale.',
  keywords: ['consulting digital', 'CTO as a Service', 'développement web', 'agence digitale', 'SEO', 'design graphique', 'motion design', 'stratégie digitale', 'performance web'],
  authors: [{ name: 'O7 Digital Consulting' }],
  creator: 'O7 Digital Consulting',
  publisher: 'O7 Digital Consulting',
  alternates: {
    canonical: '/index-digital-agency',
    languages: {
      'fr': '/index-digital-agency',
      'en': '/en/index-digital-agency',
      'es': '/es/index-digital-agency',
      'de': '/de/index-digital-agency',
      'it': '/it/index-digital-agency',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'es_ES', 'de_DE'],
    url: 'https://www.o7digital-consulting.com',
    siteName: 'O7 Digital Consulting',
    title: 'O7 Digital Consulting | Agence de consulting digital, CTO & développement web',
    description: 'O7 Digital Consulting est une agence de consulting digital spécialisée en stratégie digitale, CTO as a Service, développement web moderne, design graphique, motion design, SEO et performance digitale.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'O7 Digital Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O7 Digital Consulting | Agence de consulting digital',
    description: 'Agence de consulting digital spécialisée en stratégie digitale, CTO as a Service, développement web moderne et SEO.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // À remplacer par votre token Google Search Console
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="9dbb2cde-b0c4-4148-82f7-15519c23b141"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N5GR2L6P8T"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-N5GR2L6P8T');
          `}
        </Script>
      </head>
      <body className="active-dark-mode">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
