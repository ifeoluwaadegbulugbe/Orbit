import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { CATEGORIES, getPostsByCategory } from "@/lib/content";

type Params = Promise<{ category: string }>;

function findCategory(slug: string) {
  return CATEGORIES.find((c) => c.toLowerCase().replace(/\s+/g, "-") === slug);
}

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.toLowerCase().replace(/\s+/g, "-") }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = findCategory(slug);
  if (!category) return {};
  return buildMetadata({
    title: `${category} | Orbit Blog`,
    description: `Posts in ${category} for service business owners.`,
    path: `/blog/category/${slug}`,
  });
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category: slug } = await params;
  const category = findCategory(slug);
  if (!category) notFound();
  const posts = getPostsByCategory(category);

  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: category, path: `/blog/category/${slug}` }]} />
        </div>
      </div>
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-10">{category}</h1>
          {posts.length === 0 ? (
            <p className="text-ink-muted">No posts in this category yet.</p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
