import "../public/assets/scss/main.scss";
import "react-modal-video/scss/modal-video.scss";
import "photoswipe/dist/photoswipe.css";
import "../public/assets/css/fonts-optimized.css";
import "./custom-styles.css";
import Script from "next/script";
import ClientLayout from "./ClientLayout";
import { frenchSeoKeywords } from "@/data/seoKeywords";

export const metadata = {
  metadataBase: new URL('https://www.o7digital.com'),
  title: {
    default: 'O7 Digital Consulting | CTO as a Service & SEO Technique International',
    template: '%s | O7 Digital Consulting'
  },
  description: 'CTO as a Service international - Europe, Amérique du Nord et Latam. Direction digitale externalisée, SEO technique international, architecture web haute performance pour entreprises en Europe, USA, Canada, Mexique et Amérique Latine.',
  keywords: frenchSeoKeywords,
  authors: [{ name: 'O7 Digital Consulting' }],
  creator: 'O7 Digital Consulting',
  publisher: 'O7 Digital Consulting',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
    languages: {
      'x-default': '/',
      'fr': '/',
      'en': '/en/index-digital-agency',
      'es': '/es/index-digital-agency',
      'de': '/de/index-digital-agency',
      'it': '/it/index-digital-agency',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'es_ES', 'de_DE', 'it_IT'],
    url: 'https://www.o7digital.com',
    siteName: 'O7 Digital Consulting',
    title: 'O7 Digital Consulting | Agence de consulting digital, CTO & développement web',
    description: 'O7 Digital Consulting est une agence de consulting digital spécialisée en stratégie digitale, CTO as a Service, développement web moderne, design graphique, motion design, SEO et performance digitale.',
    images: [
      {
        url: '/assets/images/o7digital-logo.png',
        width: 1200,
        height: 630,
        alt: 'O7 Digital Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O7 Digital Consulting | Agence de consulting digital, CTO & développement web',
    description: 'O7 Digital Consulting est une agence de consulting digital spécialisée en stratégie digitale, CTO as a Service, développement web moderne, design graphique, motion design, SEO et performance digitale.',
    images: ['/assets/images/o7digital-logo.png'],
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
    google: 'google2942c8bf8c7f17a1',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Preconnect pour accélérer le chargement */}
        <link rel="preconnect" href="https://consent.cookiebot.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://consent.cookiebot.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="9dbb2cde-b0c4-4148-82f7-15519c23b141"
          data-blockingmode="auto"
          strategy="afterInteractive"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N5GR2L6P8T"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-N5GR2L6P8T');
          `,
          }}
        />
      </head>
      <body className="active-dark-mode">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
