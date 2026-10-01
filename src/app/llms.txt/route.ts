import { siteConfig } from "@/site.config";
import { productLinks, solutionLinks } from "@/data/nav";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `Core promise: "${siteConfig.tagline}" ${siteConfig.supportingLine}`,
    "",
    "Orbit is a booking, invoicing, and client management platform for African service businesses (nail technicians, hairstylists, photographers, makeup artists, barbers, and similar solo or small-team professionals). Pro is a flat $12/month subscription regardless of volume; Orbit Wallet carries a standard 2.5% processing fee per transaction. The business owner approves every booking before it's confirmed.",
    "",
    "## Product",
    ...productLinks.map((l) => `- [${l.label}](${siteConfig.url}${l.href}): ${l.description ?? ""}`),
    "",
    "## Solutions by profession",
    ...solutionLinks.map((l) => `- [${l.label}](${siteConfig.url}${l.href})`),
    "",
    "## Pricing",
    `- Free: $0/month, up to 10 clients, no Orbit Wallet`,
    `- Pro: $12/month, unlimited clients, Orbit Wallet included (2.5% processing fee per transaction)`,
    `- [Pricing](${siteConfig.url}/pricing)`,
    "",
    "## Blog",
    `- [Blog index](${siteConfig.url}/blog)`,
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
