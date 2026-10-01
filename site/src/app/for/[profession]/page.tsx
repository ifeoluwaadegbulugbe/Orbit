import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { SolutionPageTemplate } from "@/components/templates/SolutionPageTemplate";
import { professions } from "@/data/professions";

type Params = Promise<{ profession: string }>;

export function generateStaticParams() {
  return professions.map((p) => ({ profession: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { profession: slug } = await params;
  const profession = professions.find((p) => p.slug === slug);
  if (!profession) return {};
  return buildMetadata({
    title: profession.metaTitle,
    description: profession.metaDescription,
    path: `/for/${profession.slug}`,
  });
}

export default async function SolutionPage({ params }: { params: Params }) {
  const { profession: slug } = await params;
  const profession = professions.find((p) => p.slug === slug);
  if (!profession) notFound();
  return <SolutionPageTemplate profession={profession} />;
}
