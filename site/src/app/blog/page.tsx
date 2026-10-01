import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { EmailCapture } from "@/components/marketing/EmailCapture";
import { getAllPosts, CATEGORIES } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Orbit Blog: Guides for Running a Service Business",
  description: "Practical guides on bookings, invoicing, deposits, and client follow-ups for African service businesses.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
        </div>
      </div>
      <section className="px-6 pb-12 text-center">
        <div className="mx-auto max-w-2xl space-y-5">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink">The Orbit blog</h1>
          <p className="text-lg text-ink-muted">Practical guides for running a service business, without the jargon.</p>
        </div>
      </section>
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-6xl flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm text-ink-muted hover:border-primary-300"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl grid gap-5 sm:grid-cols-2">
          {featured && <BlogCard post={featured} featured />}
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-xl rounded-2xl border border-border bg-white p-8 text-center">
          <h2 className="font-semibold text-ink mb-2">Get one email a week</h2>
          <p className="text-sm text-ink-muted mb-5">Practical tips, no spam.</p>
          <EmailCapture source="blog_index" title="" />
        </div>
      </section>
    </>
  );
}
