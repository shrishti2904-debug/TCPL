"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Clock, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  "What We Do",
  "Industries",
  "Who We Are",
  "Careers",
  "Insights",
  "Contact Us",
];

type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  challenges: string[];
  solutions: string[];
  results: Array<{ label: string; value: string }>;
};

type CaseStudyClientProps = {
  study: CaseStudy;
};

const iconMap: Record<string, React.ReactNode> = {
  "Users Migrated Successfully": <Users className="text-[#4285F4]" size={24} />,
  "Project Completed in": <Clock className="text-[#34A853]" size={24} />,
  "Adoption": <TrendingUp className="text-[#FBBC05]" size={24} />,
  "Users Migrated": <Users className="text-[#4285F4]" size={24} />,
  "Data Secured": <CheckCircle2 className="text-[#34A853]" size={24} />,
  "Migration Completed In": <Clock className="text-[#EA4335]" size={24} />,
};

export function CaseStudyClient({ study }: CaseStudyClientProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#03050d] via-[#050914] to-[#03050d] text-white">
      {/* Navigation Header */}
      <header className="absolute inset-x-0 top-0 z-50 border-b border-black/5 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.12)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-4">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold leading-tight">
            <span className="text-[#18a999]">team</span>
            <span className="text-[#0b57d0]">computers</span>
          </Link>
          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-semibold text-black lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                type="button"
                className="group inline-flex items-center gap-1 text-sm font-semibold text-black transition hover:text-[#0b57d0]"
              >
                {link}
                <ChevronDown
                  size={14}
                  className="text-black/50 transition group-hover:text-[#0b57d0]"
                />
              </button>
            ))}
          </nav>
          <div className="hidden text-xs font-semibold uppercase tracking-[0.3em] text-black/50 lg:block">
            Google Workspace Partner
          </div>
        </div>
      </header>

      {/* Hero Image Section */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden pt-20">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={study.image}
            alt={study.imageAlt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </motion.div>

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-end px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-white backdrop-blur">
              Case Study
            </p>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              {study.title}
            </h1>
            <p className="text-lg text-white/80">{study.subtitle}</p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/#case-studies"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition group-hover:-translate-x-1"
            />
            Back to Case Studies
          </Link>
        </motion.div>

        {/* Challenges & Solutions Grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-[#fbbc05]/30 hover:bg-white/10"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-[#fbbc05]/20 p-3">
                <div className="h-2 w-2 rounded-full bg-[#fbbc05]" />
              </div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#fbbc05]">
                Challenges
              </h2>
            </div>
            <ul className="space-y-4 text-sm text-white/80">
              {study.challenges.map((challenge, index) => (
                <motion.li
                  key={challenge}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-3"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#fbbc05]" />
                  <span>{challenge}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-[#34a853]/30 hover:bg-white/10"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-[#34a853]/20 p-3">
                <CheckCircle2 className="h-4 w-4 text-[#34a853]" />
              </div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#34a853]">
                Solution
              </h2>
            </div>
            <ul className="space-y-4 text-sm text-white/80">
              {study.solutions.map((solution, index) => (
                <motion.li
                  key={solution}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-3"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#34a853]" />
                  <span>{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Results Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur"
        >
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
            Results Generated
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {study.results.map((result, index) => (
              <motion.div
                key={`${study.id}-${result.label}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur transition hover:border-white/40 hover:bg-black/60"
              >
                <div className="absolute -right-4 -top-4 opacity-20 transition group-hover:opacity-40">
                  {iconMap[result.label] || <CheckCircle2 size={48} />}
                </div>
                <div className="relative z-10">
                  <p className="mb-2 text-3xl font-bold text-white">
                    {result.value}
                  </p>
                  <p className="text-xs font-medium text-white/70">
                    {result.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0b57d0] via-[#4285F4] to-[#34a853] p-8 shadow-2xl"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              Ready to replicate these results?
            </p>
            <p className="text-xl font-semibold text-white">
              Partner with Team Computers for your Google Workspace journey.
            </p>
          </div>
          <Link
            href="https://teamcomputers.com/contact-us/"
            className="group rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0b57d0] shadow-lg transition hover:scale-105 hover:shadow-xl"
          >
            <span className="inline-flex items-center gap-2">
              Talk to Us
              <ArrowLeft
                size={16}
                className="rotate-180 transition group-hover:translate-x-1"
              />
            </span>
          </Link>
        </motion.footer>
      </div>
    </main>
  );
}

