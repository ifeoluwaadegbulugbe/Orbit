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
    "Orbit is a booking, invoicing, and client management platform for African service businesses (nail technicians, hairstylists, photographers, makeup artists, barbers, and similar solo or small-team professionals). Pro is a flat subscription regardless of volume. Orbit Pay, available in Nigeria, lets clients pay by card or bank transfer through Paystack, with payments settling straight into the owner's bank account. The business owner approves every booking before it's confirmed.",
    "",
    "## Product",
    ...productLinks.map((l) => `- [${l.label}](${siteConfig.url}${l.href}): ${l.description ?? ""}`),
    "",
    "## Solutions by profession",
    ...solutionLinks.map((l) => `- [${l.label}](${siteConfig.url}${l.href})`),
    "",
    "## Pricing",
    `- Free: up to 10 clients. Orbit Pay fee: 2.5% + ₦100 per payment, capped at ₦3,500 (Nigeria only)`,
    `- Pro (Nigeria): ₦7,500/month or ₦75,000/year, unlimited clients. Orbit Pay fee: 2% + ₦100 per payment, capped at ₦2,500`,
    `- Prices for other countries are on the pricing page`,
    `- [Pricing](${siteConfig.url}/pricing)`,
    "",
    "## Blog",
    `- [Blog index](${siteConfig.url}/blog)`,
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
