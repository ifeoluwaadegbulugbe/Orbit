import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";
import { getAllPosts, CATEGORIES } from "@/lib/content";

const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/product", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/product/booking", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/product/payments", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/product/clients", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/product/automations", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/product/insights", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/for", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/for/nail-technicians", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/for/hairstylists", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/for/photographers", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/for/makeup-artists", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/for/barbers", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/compare/whatsapp-and-spreadsheets", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "daily" as const },
  { path: "/resources", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/resources/invoice-generator", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/resources/pricing-calculator", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/resources/booking-link-preview", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/resources/templates", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/changelog", priority: 0.5, changeFrequency: "weekly" as const },
  { path: "/help", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/cookies", priority: 0.2, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const categoryEntries = CATEGORIES.map((category) => ({
    url: `${siteConfig.url}/blog/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, "-"))}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.4,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.updated ?? post.date).toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...categoryEntries,
  ];
}
