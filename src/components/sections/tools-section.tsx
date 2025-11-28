"use client";
import { toolset } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";

export function ToolsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <SectionHeading title={toolset.title} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-12 grid gap-3 md:grid-cols-5"
        >
          {toolset.tools.map((tool, index) => (
            <div
              key={tool}
              className="glass-panel rounded-full border-none px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-1 hover:bg-white"
              style={{
                animation: `floaty 6s ease-in-out ${index * 0.3}s infinite`,
              }}
            >
              {tool}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

