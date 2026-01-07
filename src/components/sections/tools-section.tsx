"use client";
import { toolset } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";

export function ToolsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <h3 className="mb-12 text-center text-2xl font-semibold text-[#3c4043]">
          {toolset.title}
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {toolset.tools.map((tool, index) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-3 transition hover:-translate-y-1"
            >
              <div className="relative flex h-14 w-14 items-center justify-center p-1 transition-transform group-hover:scale-110">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xs font-medium text-[#5f6368] transition group-hover:text-[#202124]">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

