"use client";

import { useState } from "react";
import { NEWS_ITEMS, NEWS_CATEGORIES } from "@/lib/constants/news";
import { Calendar, ExternalLink, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsClient() {
  const [activeCategory, setActiveCategory] = useState("전체");

  const filtered =
    activeCategory === "전체"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((n) => n.category === activeCategory);

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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
            Industry Updates
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            뉴스
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl">
            벤처투자·스타트업 생태계의 주요 소식과 정책 변화를 모아 전달합니다.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {NEWS_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200",
                activeCategory === cat
                  ? "bg-[var(--color-accent)] text-white"
                  : "glass-card text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News list */}
        <div className="grid gap-5">
          {sorted.map((item) => (
            <article
              key={item.id}
              className="glass-card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className={cn(
                    "text-xs font-semibold px-3 py-1 rounded-full",
                    item.category === "정책"
                      ? "bg-purple-500/10 text-purple-500 dark:text-purple-400"
                      : item.category === "투자 동향"
                      ? "bg-blue-500/10 text-blue-500 dark:text-blue-400"
                      : item.category === "글로벌"
                      ? "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400"
                      : "bg-orange-500/10 text-orange-500 dark:text-orange-400"
                  )}
                >
                  {item.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)]">
                  <Calendar size={12} />
                  {new Date(item.date).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)]">
                  <Tag size={12} />
                  {item.source}
                </span>
              </div>

              <h2 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-3 leading-snug">
                {item.title}
              </h2>

              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-5">
                {item.summary}
              </p>

              {item.sourceUrl !== "#" && (
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-200"
                >
                  원문 보기 <ExternalLink size={12} />
                </a>
              )}
            </article>
          ))}
        </div>

        {sorted.length === 0 && (
          <div className="text-center py-20 text-[var(--color-text-secondary)]">
            해당 카테고리의 뉴스가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
