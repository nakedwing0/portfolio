import type { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "investment",
    title: "Venture Investment & Tech Finance",
    icon: "💼",
    size: "lg",
    skills: [
      { name: "Venture Investment Review", icon: "briefcase", level: "expert", color: "#6366F1" },
      { name: "Business & Technology Valuation", icon: "calculator", level: "expert", color: "#8B5CF6" },
      { name: "Investment Network Management", icon: "chart", level: "expert", color: "#A78BFA" },
      { name: "Angel & VC Investment Linkage", icon: "trending", level: "expert", color: "#7C3AED" },
      { name: "Portfolio Management", icon: "clipboard", level: "advanced", color: "#5B21B6" },
    ],
  },
  {
    id: "techcommercialization",
    title: "Technology Commercialization",
    icon: "🔬",
    size: "md",
    skills: [
      { name: "TLO Strategic Planning", icon: "document", level: "expert", color: "#F59E0B" },
      { name: "Technology Transfer", icon: "lightbulb", level: "expert", color: "#D97706" },
      { name: "R&D Commercialization Planning", icon: "map", level: "expert", color: "#B45309" },
      { name: "Global Commercialization", icon: "globe", level: "advanced", color: "#92400E" },
    ],
  },
  {
    id: "startup",
    title: "Startup & Incubation",
    icon: "🚀",
    size: "md",
    skills: [
      { name: "Startup Scouting & Development", icon: "search", level: "expert", color: "#10B981" },
      { name: "Accelerating Programs", icon: "star", level: "expert", color: "#059669" },
      { name: "Business Plan Coaching", icon: "users", level: "expert", color: "#047857" },
      { name: "AI & Deep Tech Startups", icon: "mic", level: "advanced", color: "#065F46" },
    ],
  },
  {
    id: "ecosystem",
    title: "Ecosystem & Policy",
    icon: "🌐",
    size: "sm",
    skills: [
      { name: "Association Operations", icon: "compass", level: "expert", color: "#3B82F6" },
      { name: "Policy Response & Legislation", icon: "scale", level: "advanced", color: "#2563EB" },
    ],
  },
];

export const CURRENTLY_LEARNING = [
  "AI-driven Investment Analysis",
  "Deep Tech Startup Evaluation",
  "Global Ecosystem Networking",
  "Impact Investing",
];
