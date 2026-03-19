"use client";

import Link from "next/link";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { NAV_ITEMS } from "@/lib/constants/navigation";
import { PERSONAL } from "@/lib/constants/personal";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrolled } = useScrollProgress(50);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 glass-card rounded-none border-x-0 border-t-0"
          : "py-5 bg-transparent border-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-black text-xl text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
        >
          {PERSONAL.firstName}
          <span className="text-[var(--color-accent)]">.</span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              {item.href.startsWith("/") ? (
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium",
                    "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
                    "hover:bg-white/40 dark:hover:bg-white/10",
                    "transition-all duration-200"
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium",
                    "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
                    "hover:bg-white/40 dark:hover:bg-white/10",
                    "transition-all duration-200"
                  )}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className={cn(
              "hidden sm:flex items-center px-4 py-2 rounded-xl text-sm font-semibold",
              "bg-[var(--color-accent)] text-white",
              "hover:bg-[var(--color-accent-hover)] hover:shadow-lg hover:shadow-blue-500/25",
              "transition-all duration-200 active:scale-[0.97]"
            )}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
