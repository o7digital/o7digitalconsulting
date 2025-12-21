import "../public/assets/scss/main.scss";
import "react-modal-video/scss/modal-video.scss";
import "photoswipe/dist/photoswipe.css";
import "../public/assets/css/fonts-optimized.css";
import "./custom-styles.css";
import Script from "next/script";
import ClientLayout from "./ClientLayout";

export const metadata = {
  metadataBase: new URL('https://www.o7digital-consulting.com'),
  title: {
    default: 'O7 Digital Consulting | CTO as a Service & SEO Technique International',
    template: '%s | O7 Digital Consulting'
  },
  description: 'CTO as a Service international - Europe, Amérique du Nord et Latam. Direction digitale externalisée, SEO technique international, architecture web haute performance pour entreprises en Europe, USA, Canada, Mexique et Amérique Latine.',
  keywords: ['CTO as a Service international', 'CTO as a Service Europe', 'CTO as a Service Amérique du Nord', 'CTO as a Service Latam', 'direction digitale externalisée internationale', 'conseil IT stratégique international', 'transformation digitale groupes internationaux', 'SEO technique international', 'consulting digital B2B international', 'consulting digital Europe Amérique', 'architecture web haute performance internationale', 'audit SEO technique avancé', 'accompagnement transformation digitale B2B', 'direction informatique externalisée internationale', 'consulting IT groupes internationaux', 'stratégie digitale internationale', 'développement web React Next.js', 'CMS headless entreprise internationale', 'optimisation performance web internationale', 'conseil architecture technique internationale'],
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
      'fr': '/',
      'en': '/en',
      'es': '/es',
      'de': '/de',
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
        url: '/assets/images/o7digital-logo.png',
        width: 1200,
        height: 630,
        alt: 'O7 Digital Consulting',
      },
    ],
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
          strategy="lazyOnload"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N5GR2L6P8T"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
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
