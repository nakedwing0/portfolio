import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BentoGridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 3 | 4 | 6 | 12;
}

export function BentoGrid({ children, className, cols = 12, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        cols === 12 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        cols === 6 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        cols === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        cols === 3 && "grid-cols-1 sm:grid-cols-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
