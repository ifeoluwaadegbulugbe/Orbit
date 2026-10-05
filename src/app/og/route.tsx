import { renderOg } from "@/lib/ogImage";

/** Per-page social preview. Lives outside /api so crawlers that obey robots.txt can fetch it. */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const clean = (v: string | null, max: number) => (v ?? "").slice(0, max).trim() || undefined;
  const title = clean(searchParams.get("title"), 110) ?? "Orbit";
  return renderOg({
    title,
    accent: clean(searchParams.get("accent"), 40),
    eyebrow: clean(searchParams.get("eyebrow"), 60),
  });
}
