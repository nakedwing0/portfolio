import { PERSONAL, SOCIAL_LINKS } from "@/lib/constants/personal";
import { SocialLink } from "@/components/ui/SocialLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/20 dark:border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-secondary)]">
          © {year}{" "}
          <span className="font-semibold text-[var(--color-text-primary)]">
            {PERSONAL.name}
          </span>
          . All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink key={link.name} link={link} />
          ))}
        </div>
      </div>
    </footer>
  );
}
