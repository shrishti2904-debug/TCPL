"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";
import { heroBackgrounds, heroContent } from "@/data/site-content";
import { GoogleWorkspaceBanner } from "@/components/ui/google-workspace-banner";

const NAV_LINKS = [
  "What We Do",
  "Industries",
  "Who We Are",
  "Careers",
  "Insights",
  "Contact Us",
];

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeBackground = heroBackgrounds[selectedIndex] ?? heroBackgrounds[0];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Header Overlay */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.12)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <div className="flex items-center gap-3 text-lg font-semibold leading-tight">
            <span className="text-[#18a999]">team</span>
            <span className="text-[#0b57d0]">computers</span>
          </div>
          
          {/* Desktop Navigation */}
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
          
          {/* Desktop Partner Badge */}
          <div className="hidden text-xs font-semibold uppercase tracking-[0.3em] text-black/50 lg:block">
            Google Workspace Partner
          </div>
          
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-black transition hover:bg-black/5 lg:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-black" />
            ) : (
              <Menu size={24} className="text-black" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-black/5 bg-white/98 lg:hidden"
          >
            <nav className="mx-auto w-full max-w-6xl px-6 py-4">
              <ul className="space-y-1">
                {NAV_LINKS.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="group flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-black transition hover:bg-black/5 hover:text-[#0b57d0]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{link}</span>
                      <ChevronDown
                        size={16}
                        className="text-black/50 transition group-hover:text-[#0b57d0]"
                      />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-black/5 pt-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
                  Google Workspace Partner
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </header>

      <div className="relative h-full">
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full touch-pan-y">
            {heroBackgrounds.map((background) => (
              <div
                key={background.id}
                className="relative flex h-full min-w-0 flex-[0_0_100%]"
              >
                <Image
                  src={background.image}
                  alt={background.alt}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pt-32 pb-16 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
          <div className="space-y-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur">
                {heroContent.eyebrow}
                <span className="pulse-dot h-2 w-2 rounded-full bg-[var(--brand-secondary)]" />
              </p> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                {heroContent.title}
              </h1>
              <p className="text-lg text-white/80">{heroContent.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                <ShieldCheck className="text-[var(--brand-primary)]" size={20} />
                {heroContent.caption}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                {heroContent.cta}
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {heroContent.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/30 bg-white/10 p-4 text-left text-white backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs text-white/80">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <GoogleWorkspaceBanner />
            {activeBackground ? (
              <div className="absolute -top-6 right-6 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--brand-primary)] shadow-lg backdrop-blur">
                {activeBackground.badge}
              </div>
            ) : null}
          </motion.div>
        </div>

        {activeBackground ? (
          <div className="pointer-events-none absolute bottom-6 left-6 z-10 text-xs text-white/70">
            <a
              href={activeBackground.credit.url}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-white/30 underline-offset-2"
            >
              {activeBackground.credit.label}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
