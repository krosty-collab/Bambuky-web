import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import {
  SITE,
  SOCIAL,
  WHATSAPP_NUMBER,
} from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Bambuky · Fotografía Newborn y Recién Nacidos en Querétaro",
  description:
    "Estudio de fotografía newborn en Querétaro. Más de 10 años y 800+ bebés fotografiados. Cristian y Reyna en Jurica, Querétaro. Sesiones de recién nacido, maternidad y smash the cake.",
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
      "10 años y 800+ bebés fotografiados. Estudio de fotografía newborn, maternidad y smash the cake en Jurica, Querétaro.",
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
    description: "10 años y 800+ bebés fotografiados en Querétaro.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Bambuky Fotografía",
  description:
    "Estudio de fotografía especializado en recién nacidos, maternidad, sitters y smash the cake en Querétaro. Más de 10 años de experiencia y 800+ bebés fotografiados. Equipo de pareja certificado en primeros auxilios pediátricos.",
  url: SITE.url,
  telephone: `+${WHATSAPP_NUMBER}`,
  image: `${SITE.url}/images/hero.jpg`,
  logo: `${SITE.url}/images/logo.png`,
  foundingDate: "2015-08",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jurica",
    addressRegion: "Querétaro",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "20.6752",
    longitude: "-100.3827",
  },
  areaServed: {
    "@type": "City",
    name: "Querétaro",
  },
  founder: [
    { "@type": "Person", name: "Cristian Andrada" },
    { "@type": "Person", name: "Reyna" },
  ],
  sameAs: [SOCIAL.instagram, SOCIAL.facebook],
  priceRange: "$$$$",
  openingHours: "Mo-Sa 09:00-18:00",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sesiones de fotografía",
    itemListElement: [
      "Newborn · Recién Nacido",
      "Maternidad",
      "48 Horas Contigo",
      "Sitters · Bebé Sentado",
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
    <html lang="es" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
