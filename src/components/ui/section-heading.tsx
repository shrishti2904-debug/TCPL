"use client";
import { motion } from "framer-motion";
import { clsx } from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[var(--brand-secondary)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-[var(--foreground)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-[var(--muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

