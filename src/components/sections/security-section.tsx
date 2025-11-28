"use client";
import { securityHighlights } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/ui/glow-card";

export function SecuritySection() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-muted)] py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading title={securityHighlights.title} />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {securityHighlights.items.map((item, index) => (
            <GlowCard key={item.title} delay={index * 0.08}>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-secondary)]">
                Security {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {item.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

