import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants/blog";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "블로그",
  description: "벤처투자, 액셀러레이터, 스타트업 생태계에 관한 인사이트를 공유합니다.",
};

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const categories = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden pt-28 pb-20">
      {/* Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-3">
            Knowledge Sharing
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            블로그
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl">
            벤처투자, 액셀러레이터, 스타트업 생태계에 관한 인사이트와 경험을 직접 씁니다.
          </p>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 rounded-full text-xs font-semibold glass-card text-[var(--color-accent)]"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Post list */}
        <div className="flex flex-col gap-6">
          {sorted.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="glass-card p-6 md:p-8 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
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

                <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200">
                  {post.title}
                </h2>

                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)]"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-2 transition-all duration-200">
                    읽기 <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
