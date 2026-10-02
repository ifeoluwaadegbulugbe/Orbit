import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Callout } from "@/components/ui/Callout";
import { TableOfContents, extractHeadings } from "@/components/blog/TableOfContents";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { ReadTracker } from "@/components/blog/ReadTracker";
import { MidArticleCta } from "@/components/blog/MidArticleCta";
import { NewsletterPrompt } from "@/components/blog/NewsletterPrompt";
import { CtaBand } from "@/components/marketing/CtaBand";
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from "@/lib/content";
import { articleJsonLd, jsonLdGraph } from "@/lib/jsonld";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return buildMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
      ogImage: `/api/og?title=${encodeURIComponent(post.title)}`,
    });
  } catch {
    return {};
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

const mdxComponents = {
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => {
    const text = typeof props.children === "string" ? props.children : "";
    return <h2 id={slugify(text)} {...props} />;
  },
  MidArticleCta,
  Callout,
};

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(post);

  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]} />
        </div>
      </div>

      <article className="px-6 pb-20">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1fr_260px]">
          <div>
            <header className="mb-10 max-w-2xl">
              <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink leading-[1.1] mb-4">{post.title}</h1>
              <div className="flex items-center gap-3 text-sm text-ink-muted">
                <span>{post.author}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </time>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime}</span>
              </div>
            </header>

            <div className="prose-article">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            <AuthorBox author={post.author} />
            <ShareButtons title={post.title} slug={post.slug} />
            <RelatedPosts posts={related} />
          </div>

          <aside>
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </article>

      <CtaBand location={`blog_${post.slug}`} />
      <NewsletterPrompt />
      <ReadTracker slug={post.slug} />

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdGraph(articleJsonLd(post)),
        }}
      />
    </>
  );
}
