"use client";

import { motion, useReducedMotion } from "motion/react";
import { Mail, MapPin, Phone, Copy, CheckCheck } from "lucide-react";
import { useState } from "react";
import { PERSONAL, SOCIAL_LINKS } from "@/lib/constants/personal";
import { GlassCard } from "@/components/ui/GlassCard";
import { SocialLink } from "@/components/ui/SocialLink";
import { ContactForm } from "@/components/ui/ContactForm";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

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

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PERSONAL.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-[var(--color-accent)] font-semibold text-sm tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2
            className="font-black text-[var(--color-text-primary)]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Get in Touch
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-4 max-w-xl mx-auto">
            Whether it&apos;s a collaboration proposal, speaking request, or investment inquiry, feel free to send a message.
            I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact info */}
          <motion.div {...fadeUp(0.1)} className="space-y-5">
            <GlassCard>
              <h3 className="font-bold text-[var(--color-text-primary)] mb-5">
                Contact Info
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-secondary)]">Email</p>
                      <p className="text-sm font-medium text-[var(--color-text-primary)]">
                        {PERSONAL.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className={cn(
                      "p-2 rounded-xl transition-all duration-200",
                      "hover:bg-white/60 dark:hover:bg-white/10",
                      "text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
                    )}
                  >
                    {copied ? <CheckCheck className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-secondary)]">Phone</p>
                    <a
                      href={`tel:${PERSONAL.phone}`}
                      className="text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      {PERSONAL.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-violet-500" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-secondary)]">Location</p>
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">
                      {PERSONAL.location}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Social links */}
            <GlassCard>
              <h3 className="font-bold text-[var(--color-text-primary)] mb-4">
                Online
              </h3>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <SocialLink key={link.name} link={link} showLabel className="w-full justify-start px-4" />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Form */}
          <motion.div {...fadeUp(0.2)}>
            <GlassCard>
              <h3 className="font-bold text-[var(--color-text-primary)] mb-6">
                Send a Message
              </h3>
              <ContactForm />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
