import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  SITE,
  SOCIAL,
  WHATSAPP_NUMBER,
  BABIES_COUNT_TEXT,
  ADDRESS,
} from "@/lib/site";
import { BUSINESS_ID, CRISTIAN_ID, REYNA_ID } from "@/lib/seo";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-C7MQQ571LN";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Bambuky · Fotografía Newborn y Recién Nacidos en Querétaro",
  description:
    `Somos Cristian y Reyna. Fotografiamos recién nacidos en Querétaro desde 2015. Más de ${BABIES_COUNT_TEXT} bebés, certificados en primeros auxilios, papás de gemelos. Sesiones newborn, maternidad y smash the cake.`,
  keywords: [
    "fotografía newborn Querétaro",
    "fotógrafo recién nacido Querétaro",
    "sesión newborn Querétaro",
    "fotografía maternidad Querétaro",
    "smash the cake Querétaro",
    "sitters bebé Querétaro",
    "estudio fotográfico bebés Querétaro norte",
  ],
  authors: [{ name: "Bambuky Fotografía" }],
  creator: "Bambuky Fotografía",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: "Bambuky",
    title: "Bambuky · Fotografía Newborn en Querétaro",
    description:
      `Cristian y Reyna. ${BABIES_COUNT_TEXT} bebés fotografiados desde 2015. Fotografía newborn, maternidad y smash the cake en Querétaro.`,
    locale: "es_MX",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Fotografía newborn Querétaro - manos sosteniendo recién nacido en estudio Bambuky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bambuky · Fotografía Newborn en Querétaro",
    description: `Cristian y Reyna. ${BABIES_COUNT_TEXT} bebés fotografiados en Querétaro desde 2015.`,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@id": BUSINESS_ID,
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Bambuky Fotografía",
  description:
    `Cristian y Reyna fotografían recién nacidos, maternidad, sitters y smash the cake en Querétaro. Desde 2015, más de ${BABIES_COUNT_TEXT} bebés. Certificados en primeros auxilios pediátricos. Papás de gemelos.`,
  url: SITE.url,
  telephone: `+${WHATSAPP_NUMBER}`,
  image: `${SITE.url}/images/hero.jpg`,
  logo: `${SITE.url}/images/logo.png`,
  foundingDate: "2015-08",
  address: {
    "@type": "PostalAddress",
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    addressCountry: ADDRESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "20.6833",
    longitude: "-100.45",
  },
  areaServed: [
    { "@type": "City", name: "Querétaro" },
    { "@type": "Place", name: "Jurica" },
    { "@type": "Place", name: "Juriquilla" },
    { "@type": "Place", name: "El Refugio" },
    { "@type": "Place", name: "Zibatá" },
    { "@type": "Place", name: "Corregidora" },
  ],
  founder: [{ "@id": CRISTIAN_ID }, { "@id": REYNA_ID }],
  sameAs: [SOCIAL.instagram, SOCIAL.facebook],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: `+${WHATSAPP_NUMBER}`,
    url: `https://wa.me/${WHATSAPP_NUMBER}`,
    availableLanguage: "Spanish",
  },
  priceRange: "$$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sesiones de fotografía",
    itemListElement: [
      "Newborn · Recién Nacido",
      "Maternidad",
      "48 Horas Contigo",
      "Sitters",
      "Smash the Cake",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${bodoni.variable} ${manrope.variable}`}>
      <head>
        {/*
          Google Consent Mode v2 — debe correr antes de que cargue el tag de GA.
          Todo queda en "granted" para no alterar el comportamiento actual: todavía
          no hay banner de cookies. Cuando se implemente, debe llamar a
          updateConsent() de lib/analytics.ts para actualizar este estado.
        */}
        <Script id="consent-mode-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'granted',
              'ad_user_data': 'granted',
              'ad_personalization': 'granted',
              'analytics_storage': 'granted',
              'wait_for_update': 500
            });
          `}
        </Script>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
