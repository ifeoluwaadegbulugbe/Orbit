import { siteConfig } from "@/site.config";
import { absoluteUrl } from "@/lib/metadata";
import type { PricingContext } from "@/data/regions";

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/logo.svg"),
    sameAs: [siteConfig.social.x, siteConfig.social.linkedin, siteConfig.social.tiktok],
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    url: siteConfig.url,
  };
}

/** Pricing-page software node with the Free and Pro offers in the visitor's currency. */
export function pricingJsonLd(ctx: PricingContext) {
  const currency = ctx.price.currency;
  const url = absoluteUrl("/pricing");
  return {
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    url: siteConfig.url,
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        url,
        price: "0",
        priceCurrency: currency,
        priceSpecification: { "@type": "UnitPriceSpecification", price: "0", priceCurrency: currency, billingDuration: "P1M" },
      },
      {
        "@type": "Offer",
        name: "Pro",
        url,
        price: String(ctx.price.proMonthly),
        priceCurrency: currency,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: String(ctx.price.proMonthly),
          priceCurrency: currency,
          billingDuration: "P1M",
        },
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleJsonLd(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  author: string;
  cover?: string;
}) {
  return {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    image: post.cover ? absoluteUrl(post.cover) : undefined,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

/** Wraps one or more JSON-LD nodes in a @graph for a single script tag. */
export function jsonLdGraph(...nodes: object[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes });
}
