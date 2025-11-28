"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

type GlowCardProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function GlowCard({ children, delay = 0, className }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={clsx(
        "glass-panel relative rounded-3xl border border-white/40 bg-white/90 p-6 shadow-xl",
        "before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-gradient-to-br before:from-[rgba(10,91,255,0.08)] before:to-[rgba(0,176,165,0.05)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

