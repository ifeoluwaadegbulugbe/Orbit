import { BlogCard } from "./BlogCard";
import type { Post } from "@/lib/content";

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="mt-16">
      <h2 className="text-xl font-semibold text-ink mb-6">Related reading</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
