"use client";

import { caseStudies } from "@/data/site-content";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CaseStudiesSection() {
  return (
    <section className="bg-[#050914] py-20 text-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Proven Outcomes
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Case Studies From Regulated Industries
          </h2>
          <p className="text-base text-white/70 md:text-lg">
            Real migrations delivered by Team Computers across utilities, insurance, and
            high-compliance environments.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/case-studies/${study.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_25px_70px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-white/30"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                </div>

                <div className="flex flex-1 flex-col gap-6 p-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold leading-tight text-white md:text-2xl">
                      {study.title}
                    </h3>
                    <p className="text-sm text-white/70">{study.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    {study.results.slice(0, 2).map((result) => (
                      <div
                        key={`${study.id}-${result.label}`}
                        className="flex flex-col"
                      >
                        <span className="text-2xl font-semibold text-white">{result.value}</span>
                        <span className="text-xs text-white/70">{result.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-6 text-white">
                    <span className="text-sm text-white/70">Read full case study</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold transition group-hover:gap-2">
                      View Details
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

