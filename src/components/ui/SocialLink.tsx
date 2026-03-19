import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import type { SocialLink as SocialLinkType } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

interface SocialLinkProps {
  link: SocialLinkType;
  className?: string;
  showLabel?: boolean;
}

export function SocialLink({ link, className, showLabel = false }: SocialLinkProps) {
  const Icon = iconMap[link.icon] ?? ExternalLink;

  const isExternal = !link.url.startsWith("mailto:");

  return (
    <a
      href={link.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={link.name}
      className={cn(
        "flex items-center gap-2 p-2 rounded-xl",
        "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]",
        "bg-white/30 dark:bg-white/5 border border-white/50 dark:border-white/10",
        "hover:bg-white/60 dark:hover:bg-white/10",
        "transition-all duration-200 hover:scale-110",
        className
      )}
    >
      <Icon className="w-5 h-5" />
      {showLabel && <span className="text-sm font-medium">{link.name}</span>}
    </a>
  );
}
