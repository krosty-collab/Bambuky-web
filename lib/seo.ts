import { SITE, SOCIAL, WHATSAPP_NUMBER } from "./site";
import type { FAQ } from "./faqs";

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    image: `${SITE.url}${opts.image}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Bambuky Fotografía",
      url: SITE.url,
      telephone: `+${WHATSAPP_NUMBER}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Querétaro",
        addressRegion: "Querétaro",
        addressCountry: "MX",
      },
      areaServed: {
        "@type": "City",
        name: "Querétaro",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Querétaro",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bambuky Fotografía",
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    sameAs: [SOCIAL.instagram, SOCIAL.facebook],
    founder: [
      { "@type": "Person", name: "Cristian Andrada" },
      { "@type": "Person", name: "Reyna" },
    ],
    foundingDate: "2015-08",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${WHATSAPP_NUMBER}`,
      contactType: "customer service",
      availableLanguage: "Spanish",
    },
  };
}
