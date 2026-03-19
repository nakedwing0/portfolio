"use client";

import { motion, useReducedMotion } from "motion/react";
import { MapPin, Briefcase, GraduationCap, Award } from "lucide-react";
import { PERSONAL, CAREER, EDUCATION, CREDENTIALS } from "@/lib/constants/personal";
import { GlassCard } from "@/components/ui/GlassCard";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInLeft = shouldReduceMotion
    ? {}
    : { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 } };

  const fadeInRight = shouldReduceMotion
    ? {}
    : { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 } };

  const fadeUp = shouldReduceMotion
    ? {}
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } };

  const viewport = { once: true, margin: "-80px" };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--color-accent)] font-semibold text-sm tracking-widest uppercase mb-3">
            Profile
          </p>
          <h2
            className="font-black text-[var(--color-text-primary)]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            About
          </h2>
        </motion.div>

        {/* Bio */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Avatar card */}
          <motion.div
            {...fadeInLeft}
            viewport={viewport}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <GlassCard padding="none" className="overflow-hidden aspect-[4/5] max-w-sm mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-900/30 dark:to-violet-900/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 mx-auto mb-4 flex items-center justify-center text-white text-5xl font-black shadow-xl">
                    {PERSONAL.firstName[0]}
                  </div>
                  <p className="font-bold text-[var(--color-text-primary)] text-lg">{PERSONAL.nameEn}</p>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">{PERSONAL.name}</p>
                  <p className="text-xs text-[var(--color-accent)] mt-2 font-semibold">{PERSONAL.title}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Bio card */}
          <motion.div
            {...fadeInRight}
            viewport={viewport}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="space-y-4"
          >
            <GlassCard>
              <h3 className="font-bold text-xl text-[var(--color-text-primary)] mb-4">
                Hello, I&apos;m {PERSONAL.nameEn}.
              </h3>
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed text-sm">
                {PERSONAL.bio.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </GlassCard>

            {/* Quick info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: MapPin, label: "Location", value: PERSONAL.location },
                { icon: Briefcase, label: "Affiliation", value: "Korea Accelerator Association (K-AIA)" },
              ].map(({ icon: Icon, label, value }) => (
                <GlassCard key={label} padding="sm" className="text-center">
                  <Icon className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--color-text-secondary)]">{label}</p>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)] leading-snug">{value}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Career & Education row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Career timeline */}
          <motion.div {...fadeUp} viewport={viewport} transition={{ duration: 0.6, delay: 0.1 }}>
            <GlassCard>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-bold text-lg text-[var(--color-text-primary)]">Career</h3>
              </div>
              <ol className="relative border-l border-[var(--color-glass-border)] space-y-6 ml-2">
                {CAREER.map((item) => (
                  <li key={item.org + item.role} className="ml-5">
                    <span className="absolute -left-[7px] w-3.5 h-3.5 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg-primary)]" />
                    <p className="text-xs text-[var(--color-text-secondary)] mb-0.5 flex items-center gap-2">
                      {item.period}
                      {item.current && (
                        <span className="px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-500">Current</span>
                      )}
                    </p>
                    <p className="font-semibold text-sm text-[var(--color-text-primary)]">{item.org}</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">{item.role}</p>
                  </li>
                ))}
              </ol>
            </GlassCard>
          </motion.div>

          {/* Education */}
          <div className="flex flex-col gap-8">
            <motion.div {...fadeUp} viewport={viewport} transition={{ duration: 0.6, delay: 0.15 }}>
              <GlassCard>
                <div className="flex items-center gap-2 mb-5">
                  <GraduationCap className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="font-bold text-lg text-[var(--color-text-primary)]">Education</h3>
                </div>
                <ol className="relative border-l border-[var(--color-glass-border)] space-y-5 ml-2">
                  {EDUCATION.map((edu) => (
                    <li key={edu.school} className="ml-5">
                      <span className="absolute -left-[7px] w-3.5 h-3.5 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg-primary)]" />
                      <p className="text-xs text-[var(--color-text-secondary)] mb-0.5">{edu.period}</p>
                      <p className="font-semibold text-sm text-[var(--color-text-primary)]">{edu.school}</p>
                      <p className="text-xs text-[var(--color-text-secondary)]">{edu.degree}</p>
                    </li>
                  ))}
                </ol>
              </GlassCard>
            </motion.div>

            {/* Credentials */}
            <motion.div {...fadeUp} viewport={viewport} transition={{ duration: 0.6, delay: 0.2 }}>
              <GlassCard>
                <div className="flex items-center gap-2 mb-5">
                  <Award className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="font-bold text-lg text-[var(--color-text-primary)]">Credentials &amp; Awards</h3>
                </div>
                <ul className="space-y-2.5">
                  {CREDENTIALS.map((c) => (
                    <li key={c.label} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                      <span className="text-sm text-[var(--color-text-secondary)] leading-snug">
                        <span className="font-semibold text-[var(--color-text-primary)]">{c.year}</span>
                        {"  "}{c.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
