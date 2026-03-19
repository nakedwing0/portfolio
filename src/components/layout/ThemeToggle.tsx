"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl bg-white/30 dark:bg-white/5 border border-white/50 dark:border-white/10 animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "w-9 h-9 flex items-center justify-center rounded-xl",
        "bg-white/30 dark:bg-white/5 border border-white/50 dark:border-white/10",
        "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]",
        "hover:bg-white/60 dark:hover:bg-white/10",
        "transition-all duration-200 hover:scale-110"
      )}
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
