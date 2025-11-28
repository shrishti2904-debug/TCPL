"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto w-full max-w-4xl px-6">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Everything you need to know"
          align="left"
        />
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;
            return (
              <div key={faq.question} className="glass-panel rounded-2xl p-5">
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => setActive(isOpen ? -1 : index)}
                >
                  <span className="text-base font-semibold text-[var(--foreground)]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`transition ${isOpen ? "rotate-180 text-[var(--brand-primary)]" : "text-[var(--muted)]"}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.p
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pt-3 text-sm text-[var(--muted)]"
                    >
                      {faq.answer}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

