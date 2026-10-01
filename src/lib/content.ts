import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { z } from "zod";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export const postFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string().max(160),
  slug: z.string(),
  date: z.string(),
  updated: z.string().optional(),
  author: z.string(),
  category: z.enum(["Guides", "Business tips", "Product updates", "Money and invoicing"]),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  faq: z
    .array(z.object({ question: z.string(), answer: z.string() }))
    .optional(),
});

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>;

export interface Post extends PostFrontmatter {
  content: string;
  readingTime: string;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = postFrontmatterSchema.parse(data);
  return {
    ...frontmatter,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllPosts(): Post[] {
  return getAllPostSlugs()
    .map(getPostBySlug)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((p) => p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));
}

export function getRelatedPosts(current: Post, max = 3): Post[] {
  return getAllPosts()
    .filter((p) => p.slug !== current.slug)
    .filter((p) => p.category === current.category || p.tags.some((t) => current.tags.includes(t)))
    .slice(0, max);
}

export const CATEGORIES = ["Guides", "Business tips", "Product updates", "Money and invoicing"] as const;
