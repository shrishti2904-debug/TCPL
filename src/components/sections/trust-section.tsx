"use client";
import { trustReasons } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/ui/glow-card";
import { motion } from "framer-motion";

export function TrustSection() {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          title={trustReasons.title}
          description={trustReasons.description}
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {trustReasons.cards.map((card, index) => (
            <GlowCard key={card.title} delay={index * 0.07}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 140, delay: 0.2 }}
                className="mb-5 h-14 w-14 rounded-2xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white shadow-lg"
              />
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {card.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

