import { OG_SIZE, renderOg } from "@/lib/ogImage";

export const alt = "Orbit: Run your business. Not the admin.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    title: "Run your business.",
    accent: "Not the admin.",
    eyebrow: "Booking & invoicing software",
  });
}
