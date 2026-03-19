import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingMap = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function GlassCard({
  children,
  className,
  hover = true,
  padding = "md",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card",
        paddingMap[padding],
        hover && "hover:-translate-y-1 transition-transform duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
