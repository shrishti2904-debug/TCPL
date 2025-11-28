"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-gradient)] py-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-white/80"
        >
          Tools to Power Your Business Growth
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link
            href="#contact"
            className="glass-panel inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/90 transition hover:-translate-y-0.5"
          >
            Load More
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

