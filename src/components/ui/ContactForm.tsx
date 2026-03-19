"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ContactFormData } from "@/types";

const schema = z.object({
  name: z.string().min(2, "Please enter at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please enter at least 10 characters"),
});

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: ContactFormData) {
    setFormState("loading");

    try {
      // Replace FORMSPREE_ID with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState("success");
        reset();
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 5000);
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
  }

  const inputClass = cn(
    "w-full px-4 py-3 rounded-xl text-sm",
    "bg-white/50 dark:bg-white/5",
    "border border-white/70 dark:border-white/10",
    "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)]",
    "focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)]",
    "transition-all duration-200"
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          autoComplete="name"
          {...register("name")}
          className={cn(inputClass, errors.name && "border-red-400 focus:ring-red-400/40")}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          autoComplete="email"
          {...register("email")}
          className={cn(inputClass, errors.email && "border-red-400 focus:ring-red-400/40")}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Enter your message"
          {...register("message")}
          className={cn(inputClass, "resize-none", errors.message && "border-red-400 focus:ring-red-400/40")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "loading" || formState === "success"}
        className={cn(
          "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl",
          "font-semibold text-sm text-white",
          "bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]",
          "disabled:opacity-60 disabled:cursor-not-allowed",
          "transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25",
          "active:scale-[0.98]"
        )}
      >
        {formState === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
        {formState === "success" && <CheckCircle className="w-4 h-4" />}
        {formState === "error" && <AlertCircle className="w-4 h-4" />}
        {formState === "idle" && <Send className="w-4 h-4" />}
        {formState === "idle" && "Send"}
        {formState === "loading" && "Sending..."}
        {formState === "success" && "Sent!"}
        {formState === "error" && "Failed — Try Again"}
      </button>
    </form>
  );
}
