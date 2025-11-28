"use client";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero-section";
import { SmarterChoiceSection } from "@/components/sections/smarter-choice-section";
import { TrustSection } from "@/components/sections/trust-section";
import { ToolsSection } from "@/components/sections/tools-section";
import { SecuritySection } from "@/components/sections/security-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";
import { WorkspaceCompareSection } from "@/components/sections/workspace-compare-section";

const WhitepaperSection = dynamic(
  () => import("@/components/sections/whitepaper-section").then((mod) => mod.WhitepaperSection),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="bg-[var(--background)]">
      <HeroSection />
      <WorkspaceCompareSection />
      <SmarterChoiceSection />
      <TrustSection />
      <ToolsSection />
      <SecuritySection />
      <WhitepaperSection />
      <FaqSection />
      <CaseStudiesSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
