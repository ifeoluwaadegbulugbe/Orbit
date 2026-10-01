import Link from "next/link";
import type { Post } from "@/lib/content";

export function BlogCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex flex-col rounded-2xl border border-border bg-white p-6 hover:border-primary-300 hover:shadow-[var(--shadow-md)] transition-all ${
        featured ? "md:col-span-2 md:p-10" : ""
      }`}
    >
      <span className="inline-block w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 mb-4">
        {post.category}
      </span>
      <h3 className={`font-semibold text-ink mb-2 ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}>{post.title}</h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-4">{post.description}</p>
      <div className="mt-auto flex items-center gap-3 text-xs text-ink-muted">
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingTime}</span>
      </div>
    </Link>
  );
}
