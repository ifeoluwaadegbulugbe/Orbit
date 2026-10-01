import type { Metadata } from "next";
import { siteConfig } from "@/site.config";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

/** Builds consistent Metadata (title, description, canonical, OG, Twitter) for a page. */
export function buildMetadata({ title, description, path, ogImage, noIndex }: PageMetaInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const image = ogImage ?? `/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}
