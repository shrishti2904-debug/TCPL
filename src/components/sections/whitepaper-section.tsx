"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownToLine,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";
import { whitepaperContent } from "@/data/site-content";

export function WhitepaperSection() {
  const previewImages = whitepaperContent.previewImages ?? [];
  const totalPages = previewImages.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const hasPreviews = totalPages > 0;
  const safeActiveIndex = hasPreviews
    ? Math.min(activeIndex, totalPages - 1)
    : 0;
  const activePreview = hasPreviews ? previewImages[safeActiveIndex] : null;
  const viewerMessage = hasPreviews
    ? "Flip through curated highlights or download the PDF for the full playbook."
    : "Download the PDF to explore the full Google Workspace whitepaper.";

  const handlePrev = () => {
    if (totalPages < 2) return;
    setActiveIndex((prev) => {
      const normalized = Math.min(prev, totalPages - 1);
      return (normalized - 1 + totalPages) % totalPages;
    });
  };

  const handleNext = () => {
    if (totalPages < 2) return;
    setActiveIndex((prev) => {
      const normalized = Math.min(prev, totalPages - 1);
      return (normalized + 1) % totalPages;
    });
  };

  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(66,133,244,0.18),_transparent_60%)]" />
      <div className="relative mx-auto w-full px-6">
        <div className="mb-12 text-center">
          <SectionHeading
            eyebrow={whitepaperContent.eyebrow}
            title={whitepaperContent.title}
            description={whitepaperContent.description}
            align="center"
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={whitepaperContent.pdfPath}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-[#0f57d0] px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(15,87,208,0.35)] transition hover:-translate-y-0.5 hover:bg-[#0c47ac]"
            >
              Download PDF
              <ArrowDownToLine size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#d7def0] px-5 py-3 text-sm font-semibold text-[#0f172a] transition hover:border-[#0f57d0] hover:text-[#0f57d0]"
            >
              Talk to an expert
            </Link>
          </div>
        </div>

        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-[40px] bg-gradient-to-br from-[#0f172a] via-[#111936] to-[#1b2440] p-6 shadow-[0_30px_80px_rgba(10,12,45,0.55)]"
          >
            <div className="rounded-[32px] border border-white/10 bg-black/20 p-4">
              {activePreview ? (
                <>
                  <div className="relative h-[70vh] w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-black/60 to-black/30">
                    <Image
                      src={activePreview.src}
                      alt={activePreview.alt}
                      fill
                      priority={safeActiveIndex === 0}
                      sizes="100vw"
                      className="object-contain p-6"
                    />
                    <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 backdrop-blur">
                      <span>Page {safeActiveIndex + 1}</span>
                      <span className="text-white/50">/ {totalPages}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Preview deck
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handlePrev}
                        disabled={totalPages < 2}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white/60 disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label="Previous whitepaper page"
                      >
                        <ChevronLeft size={16} />
                        Prev
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={totalPages < 2}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white/60 disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label="Next whitepaper page"
                      >
                        Next
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3 justify-center">
                    {previewImages.map((page, index) => (
                      <button
                        key={page.src}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={clsx(
                          "rounded-2xl border px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                          index === safeActiveIndex
                            ? "border-white/80 bg-white/10 text-white shadow-[0_15px_35px_rgba(15,23,42,0.35)]"
                            : "border-white/10 bg-white/5 text-white/70 hover:border-white/40 hover:text-white"
                        )}
                        aria-current={index === safeActiveIndex ? "true" : undefined}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                          Page {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                          {page.alt}
                        </p>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex h-[70vh] w-full flex-col items-center justify-center rounded-[28px] bg-white/5 text-center text-white/70">
                  <p className="text-sm font-semibold">
                    Whitepaper preview is coming soon.
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Download the PDF to read the full content right away.
                  </p>
                </div>
              )}
            </div>
            <p className="mt-4 text-center text-xs text-white/70">
              {viewerMessage}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


