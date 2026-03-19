export interface Skill {
  name: string;
  icon: string;
  level: "expert" | "advanced" | "intermediate" | "learning";
  color?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
  size?: "sm" | "md" | "lg";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  readTime: number;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  source: string;
  sourceUrl: string;
  summary: string;
  category: string;
}
