import { SITE } from "./site";
import type { FAQ } from "./faqs";

/** @id canónico del negocio. Todo schema que necesite "provider" o "worksFor" debe apuntar aquí en vez de re-declarar LocalBusiness. */
export const BUSINESS_ID = `${SITE.url}/#business`;
export const CRISTIAN_ID = `${SITE.url}/#cristian-andrada`;
export const REYNA_ID = `${SITE.url}/#reyna`;

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
    provider: { "@id": BUSINESS_ID },
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
