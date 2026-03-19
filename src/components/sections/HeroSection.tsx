"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { PERSONAL, SOCIAL_LINKS } from "@/lib/constants/personal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SocialLink } from "@/components/ui/SocialLink";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg pt-20"
    >
      {/* Blobs */}
      <div aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass-card mb-8">
            <span className={cn("w-2 h-2 rounded-full bg-emerald-400", !shouldReduceMotion && "animate-pulse")} />
            {PERSONAL.available ? "Open to collaborations & inquiries" : "Currently unavailable"}
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-black leading-none tracking-tight text-[var(--color-text-primary)] mb-4"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          {PERSONAL.nameEn}
        </motion.h1>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
          style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
        >
          <span className="text-[var(--color-text-secondary)] font-medium">
            I&apos;m a{" "}
          </span>
          <AnimatedText
            texts={PERSONAL.titles}
            className="font-bold text-[var(--color-accent)]"
          />
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-[var(--color-text-secondary)] text-lg leading-relaxed mb-10"
        >
          Secretary General of the Korea Accelerator Association (K-AIA) · Expert in Technology Commercialization and Venture Investment.
          Leading the core operations of a nonprofit that represents Korea&apos;s startup investment ecosystem.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className={cn(
              "flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white",
              "bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]",
              "shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40",
              "transition-all duration-200 hover:scale-105 active:scale-[0.97]"
            )}
          >
            <Mail className="w-4 h-4" />
            Contact
          </a>
          <a
            href={PERSONAL.resumeUrl}
            className={cn(
              "flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold",
              "glass-card text-[var(--color-text-primary)]",
              "hover:bg-white/80 dark:hover:bg-white/10",
              "transition-all duration-200 hover:scale-105 active:scale-[0.97]"
            )}
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          {SOCIAL_LINKS.map((link) => (
            <SocialLink key={link.name} link={link} showLabel />
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[var(--color-text-secondary)]"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll down</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
