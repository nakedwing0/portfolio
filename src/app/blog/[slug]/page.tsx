import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost } from "@/lib/constants/blog";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const paragraphs = post.content
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden pt-28 pb-20">
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={14} />
          블로그 목록으로
        </Link>

        {/* Article header */}
        <div className="glass-card p-8 md:p-10 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-[var(--color-accent)] bg-blue-500/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)]">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)]">
              <Clock size={12} />
              {post.readTime}분 읽기
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-[var(--color-text-primary)] mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 pt-5 border-t border-[var(--color-glass-border)]">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)] glass-card px-3 py-1"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article body */}
        <div className="glass-card p-8 md:p-10 prose-custom">
          <div className="space-y-5 text-[var(--color-text-secondary)] leading-loose text-base">
            {paragraphs.map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <h3
                    key={i}
                    className="text-lg font-bold text-[var(--color-text-primary)] mt-8 first:mt-0"
                  >
                    {para.slice(2, -2)}
                  </h3>
                );
              }
              return <p key={i}>{para}</p>;
            })}
          </div>
        </div>

        {/* Back button bottom */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            다른 글 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
