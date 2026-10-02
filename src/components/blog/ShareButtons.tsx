import { siteConfig } from "@/site.config";

export function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `${siteConfig.url}/blog/${slug}`;
  const links = [
    { label: "Share on X", href: `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}` },
    { label: "Share on WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}` },
    { label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
  ];

  return (
    <div className="flex flex-wrap gap-3 text-sm">
      {links.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-brand underline">
          {link.label}
        </a>
      ))}
    </div>
  );
}
