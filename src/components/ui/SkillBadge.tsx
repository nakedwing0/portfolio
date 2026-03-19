import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

const levelColors = {
  expert: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  advanced: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  intermediate: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  learning: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
};

const levelLabels = {
  expert: "전문",
  advanced: "고급",
  intermediate: "중급",
  learning: "학습 중",
};

interface SkillBadgeProps {
  skill: Skill;
  showLevel?: boolean;
  className?: string;
}

export function SkillBadge({ skill, showLevel = false, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-xl",
        "bg-white/50 dark:bg-white/5 border border-white/60 dark:border-white/10",
        "transition-all duration-200 hover:scale-105 hover:bg-white/80 dark:hover:bg-white/10",
        className
      )}
    >
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: skill.color ?? "#3B82F6" }}
        aria-hidden="true"
      />
      <span className="text-sm font-medium text-[var(--color-text-primary)]">
        {skill.name}
      </span>
      {showLevel && (
        <span className={cn("text-xs px-1.5 py-0.5 rounded-md font-medium ml-auto", levelColors[skill.level])}>
          {levelLabels[skill.level]}
        </span>
      )}
    </div>
  );
}
