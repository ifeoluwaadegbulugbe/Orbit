import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts, getPostsByTag } from "@/lib/content";

type Params = Promise<{ tag: string }>;

export function generateStaticParams() {
  const tags = new Set<string>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) tags.add(tag);
  }
  return [...tags].map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { tag } = await params;
  return buildMetadata({
    title: `#${tag} | Orbit Blog`,
    description: `Posts tagged ${tag} for service business owners.`,
    path: `/blog/tag/${tag}`,
    noIndex: true,
  });
}

export default async function TagPage({ params }: { params: Params }) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  if (posts.length === 0) notFound();

  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: `#${tag}`, path: `/blog/tag/${tag}` }]} />
        </div>
      </div>
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-10">Tagged: {tag}</h1>
          <div className="grid gap-5 sm:grid-cols-2">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
