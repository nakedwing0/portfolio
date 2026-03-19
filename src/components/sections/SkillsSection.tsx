"use client";

import { motion, useReducedMotion } from "motion/react";
import { SKILL_CATEGORIES, CURRENTLY_LEARNING } from "@/lib/constants/skills";
import { GlassCard } from "@/components/ui/GlassCard";
import { SkillBadge } from "@/components/ui/SkillBadge";

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  const viewport = { once: true, margin: "-80px" };

  const fadeUp = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport,
          transition: { duration: 0.6, delay, ease: "easeOut" },
        };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-[var(--color-accent)] font-semibold text-sm tracking-widest uppercase mb-3">
            Expertise
          </p>
          <h2
            className="font-black text-[var(--color-text-primary)]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Expertise
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
          {/* Header card — spans full width */}
          <motion.div {...fadeUp(0)} className="lg:col-span-3">
            <GlassCard className="text-center py-8">
              <p className="text-4xl mb-3">💡</p>
              <h3 className="font-black text-2xl text-[var(--color-text-primary)]">Core Competencies</h3>
              <p className="text-[var(--color-text-secondary)] text-sm mt-2 max-w-xl mx-auto">
                Nearly 20 years of field-centered expertise in technology commercialization, venture investment, and startup incubation.
              </p>
            </GlassCard>
          </motion.div>

          {/* Skill category cards */}
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.id}
              {...fadeUp(0.1 + i * 0.08)}
              className={
                category.size === "lg"
                  ? "lg:col-span-2"
                  : category.size === "sm"
                  ? "lg:col-span-1"
                  : "lg:col-span-1"
              }
            >
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-bold text-[var(--color-text-primary)]">{category.title}</h3>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {category.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={shouldReduceMotion ? undefined : { opacity: 0, x: -10 }}
                      whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.4, delay: 0.2 + si * 0.05 }}
                    >
                      <SkillBadge skill={skill} showLevel />
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}

          {/* Currently learning card */}
          <motion.div {...fadeUp(0.5)}>
            <GlassCard className="h-full bg-gradient-to-br from-blue-50/80 to-violet-50/80 dark:from-blue-950/40 dark:to-violet-950/40">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🌱</span>
                <h3 className="font-bold text-[var(--color-text-primary)]">Currently Exploring</h3>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] mb-4">Areas of interest:</p>
              <div className="flex flex-wrap gap-2">
                {CURRENTLY_LEARNING.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
