import Link from "next/link";
import { footerContent } from "@/data/site-content";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const socialIconMap = {
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
} as const;

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden px-6 py-16 text-white md:px-10"
      style={{
        background:
          "linear-gradient(135deg, rgba(11,16,34,0.95) 0%, rgba(66,133,244,0.35) 45%, rgba(15,17,43,0.98) 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-[rgba(66,133,244,0.4)] blur-[140px]" />
        <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-[rgba(234,67,53,0.3)] blur-[130px]" />
      </div>
      <div className="mx-auto w-full max-w-6xl">
        <div className="glass-panel-dark relative grid gap-10 rounded-[32px] p-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-5">
          <div className="flex items-center gap-3 text-lg font-semibold">
            <span className="text-[var(--brand-secondary)]">team</span>
            <span className="text-[var(--brand-primary)]">computers</span>
          </div>
          <h3 className="text-2xl font-semibold">{footerContent.title}</h3>
          <p className="text-sm text-white/70">{footerContent.description}</p>
          <Link
            href="https://teamcomputers.com/contact-us/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-secondary)]"
          >
            Start a conversation
          </Link>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {footerContent.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[var(--brand-secondary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Stay in touch
            </h4>
            <div className="mt-4 flex gap-3">
              {footerContent.socials.map((social) => {
                const Icon =
                  socialIconMap[social.icon as keyof typeof socialIconMap];
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="glass-panel-dark rounded-full border border-white/20 p-3 text-white transition hover:border-[var(--brand-secondary)] hover:text-[var(--brand-secondary)]"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-white/60">
        © 2025 Team Computers. All Rights Reserved.
      </p>
    </footer>
  );
}

