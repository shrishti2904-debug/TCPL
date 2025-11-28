## 2025-11-28-mobile-navbar

- added responsive mobile navigation to `HeroSection` with a hamburger menu button that toggles a slide-down mobile menu.
- mobile menu displays all navigation links in a vertical list with hover states and includes the "Google Workspace Partner" badge at the bottom.
- desktop navigation remains unchanged (horizontal layout with dropdown indicators), while mobile shows a clean, touch-friendly menu interface.
- menu state is managed with `useState` and uses Framer Motion for smooth open/close animations.

## 2025-11-28-sticky-navbar

- changed the hero header to use a fixed positioning so the navigation stays visible while scrolling the entire page.
- increased the hero content top padding to prevent the fixed header from overlapping the headline on initial load.

## 2025-11-28-whitepaper-image-viewer

- exported every page of `public/docs/gws-white-paper.pdf` into optimized JPGs (`public/docs/gws-white-paper/pages/page-*.jpg`) via a new repeatable script at `temp/export-whitepaper-images.mjs`.
- extended `whitepaperContent` with `previewImages` metadata so UI components can load responsive images without parsing PDFs.
- rebuilt `WhitepaperSection` to render the JPG highlights with navigation controls, keeping the PDF download CTA as-is for the full document.
- removed the unused PDF.js flipbook stack (react-pdf, react-pageflip, pdf worker asset) and cleaned up ESLint ignores/dependency graph.

## 2025-11-28-build-fixes

- fixed TypeScript build errors by adding all required props to `HTMLFlipBook` component (minWidth, maxWidth, minHeight, maxHeight, usePortrait, startZIndex, autoSize, and other required IProps).
- resolved SSR build error "DOMMatrix is not defined" by dynamically importing `WhitepaperSection` in `page.tsx` with `ssr: false`, preventing react-pageflip from being evaluated during server-side rendering.
- fixed ESLint error about calling setState in useEffect by removing unnecessary `isClient` state check (component is already client-only via dynamic import).
- build now completes successfully with all pages properly pre-rendered or marked as dynamic.

## 2025-11-28-pdf-landscape-worker-fix

- installed `pdfjs-dist` package to resolve module resolution errors when configuring the PDF.js worker.
- fixed PDF.js worker configuration by using `react-pdf`'s built-in `pdfjs` export instead of dynamically importing `pdfjs-dist`, configuring the worker at module scope to ensure it's ready before components render.
- changed PDF flipbook from portrait to landscape orientation by removing `usePortrait` prop, updating dimensions from 520x680 to 900x600, and adjusting PDFPage width from 480 to 850 to match landscape proportions.
- removed unnecessary `useEffect` hook and `workerReady` state since worker configuration now happens at module level.
- forced `pdfjs` to always load its worker from the CDN (even if a default is already set) so dev/preview builds stop requesting the missing `/pdf.worker.mjs` file.
- copied `pdf.worker.min.mjs` from `pdfjs-dist` into `public/pdf.worker.mjs` and added it to the eslint ignore list so the default worker path resolves even if CDN loading fails during local development.

## 2025-11-28-case-studies-navbar

- added the site navigation header to case study detail pages so users can navigate back to the homepage or access other sections without using the browser back button.
- navbar matches the hero section design with glassmorphism styling, dropdown indicators, and the "Google Workspace Partner" badge.

## 2025-11-28-case-studies-interactive

- downloaded relevant Unsplash images for each case study (power utilities infrastructure and insurance business settings) and added image metadata to the case studies data structure.
- refreshed the case study cards to feature the imagery as the hero element with text moved below, keeping cards clean while still surfacing key metrics.
- rebuilt the case study detail pages as an interactive client component with a full-bleed hero image, staggered Framer Motion animations, hover effects on challenge/solution cards, and animated result tiles with contextual icons.
- enhanced visual appeal with glassmorphism panels, gradient CTAs, and smooth scroll-triggered reveals throughout the page.

## 2025-11-28-case-studies-simplify

- simplified case study cards to show only title, subtitle, top 2 key results, and a "Read full case study" CTA, removing the detailed challenges/solutions lists to keep cards concise and scannable.
- full details remain available on the dedicated case study detail pages when users click through.

## 2025-11-28-hero-pagination-removal

- removed the pagination controls (prev/next buttons and dot indicators) from the hero section so the background slider auto-advances without manual navigation.
- cleaned up unused imports (`ChevronLeft`, `ChevronRight`, `clsx`) and removed the `scrollPrev`/`scrollNext` callbacks since manual controls are no longer needed.

## 2025-11-28-hero-backgrounds

- downloaded three royalty-free Unsplash images into `public/images` (collaboration, executive meeting, and secure teamwork scenes) and credited each photographer.
- restructured `heroContent` back to a single static copy block and introduced `heroBackgrounds` metadata for referencing the new photos.
- rebuilt the hero slider to keep content static while cycling the background imagery, including gradient overlays, photographer credits, and a persistent CTA/stats layout.

## 2025-11-28-hero-nav-dots

- fixed a runtime crash in `HeroSection` by iterating dot controls over `heroBackgrounds` instead of the non-existent `heroContent.slides`.

## 2025-11-28-hero-nav-header

- rebuilt the hero navigation to match the reference design: white bar with dropdown indicators, brand mark, and a dedicated “Start Free Trial” CTA row anchored to the header.
- increased the hero slide top padding to keep content clear of the fixed nav.

## 2025-11-28-hero-nav-refresh

- removed the temporary “Great Place To Work” text tag and the Start Free Trial CTA from the hero nav so the layout mirrors the provided design with only the logo and menu links.
- updated the right-aligned label to a neutral “Google Workspace Partner” caption.

## 2025-11-28-compare-contrast

- reworked the SMB compare card palette to use a bright glass gradient, dark typography, and solid list chips so the content remains legible on light backgrounds.
- added variant-aware styling hooks (badges, bullets, CTA) in `WorkspaceCompareSection` so enterprise cards stay dark while SMB cards get high-contrast text.

## 2025-11-28-whitepaper-flipbook

- copied the official “GWS white Paper.pdf” into `public/docs` and exposed metadata under `whitepaperContent` in `src/data/site-content.ts`.
- installed `react-pageflip` and `react-pdf`, then built a `WhitepaperSection` that renders the PDF via a flip-book experience with download + contact CTAs.
- inserted the section on the home page after the security highlights to keep the narrative flow.

## 2025-11-28-whitepaper-fixes

- switched the PDF.js worker to the official CDN bundle and dynamically imported `react-pdf` to avoid DOM globals during SSR/Turbopack compilation.
- added graceful error messaging so the section falls back to a download prompt if the flipbook cannot load.
- fixed PDF.js worker initialization by configuring it in a `useEffect` hook that runs before the PDFDocument component renders, preventing the "Failed to resolve module specifier 'pdf.worker.mjs'" error.
- added a `workerReady` state to ensure the PDF viewer only renders after the worker is properly configured.

## 2025-11-28-whitepaper-contrast

- wrapped the whitepaper copy in a bright glass card, updated quote/stat tiles, and refreshed the CTAs so text stays legible against the light gradient background.

## 2025-11-28-hero-static-overlay

- anchored the hero copy, CTA, and stat grid outside of the Embla slider so only the photographic backgrounds transition while the messaging stays fixed.
- reduced the top padding on the hero content block to keep it closer to the new fixed navigation bar.
- surfaced the active slide’s badge and credit independently of the carousel DOM to avoid re-renders during transitions.

## 2025-11-28-case-studies

- captured the government power and insurance case study copy in `caseStudies` within `src/data/site-content.ts`, including challenges, solutions, and quantitative results.
- shipped a new `CaseStudiesSection` that renders each story in a dark, glassmorphic card with challenge/solution bullets, results tiles, and a contact CTA.
- wired the section near the bottom of `app/page.tsx` so visitors can review real-world outcomes before hitting the final CTA.

## 2025-11-28-case-studies-routing

- made every case study card clickable by wrapping them in `Link` components and adding subtle hover states.
- introduced `app/case-studies/[id]/page.tsx` to display the full narrative (challenges, solutions, metrics) for each story, including a CTA and back link.
- invalid case-slugs now trigger Next.js’s `notFound` boundary for a clean failure state.

## 2025-11-28-case-studies-route-fix

- converted the dynamic case study detail page to a server component (removed `"use client"`), ensuring `params.id` is available synchronously and avoiding the runtime error about accessing a Promise.
- updated the component signature to `async` and awaited `params` (Next.js 16 dynamic route behavior) so the ID is consistently resolved before querying `caseStudies`.

## 2025-11-28-workspace-compare

- added structured `workspaceCompare` copy in `src/data/site-content.ts` with SMB vs Enterprise plan bullets, CTAs, and footnotes.
- built a new `WorkspaceCompareSection` glassmorphism layout to render dual comparison cards with gradients, badges, and motion-ready styling.
- wired the section into `src/app/page.tsx` so it appears below the hero and keeps the landing narrative cohesive.

## 2025-11-28-hero-slider

- replaced the static hero with a full-width `Embla Carousel` slider that cycles through 3 key themes: Migration, Gemini AI, and Security.
- added a `SlideBackground` component that renders unique SVG patterns (grid, gradient curves, hex mesh) for each slide ID to visually distinguish the topics.
- updated `src/data/site-content.ts` to support an array of slides with distinct headlines, descriptions, CTAs, and stat blocks.
- integrated the existing `GoogleWorkspaceBanner` into the slider layout so it persists (or can be made dynamic) while the text content transitions.

## 2025-11-28-google-color-pass

- replaced the design tokens with the official Google palette (#4285F4, #34A853, #FBBC05, #EA4335) and updated gradients/typography to match modern Workspace branding.
- ensured every interactive surface now uses the shared glassmorphism helpers (hero nav, stat blocks, highlight cards, tools rail, FAQ accordions, CTA chip, footer shell) for a cohesive translucent aesthetic.
- refreshed the footer and CTA backgrounds with Google-colored light trails plus new dark-glass variants for the social buttons.

## 2025-11-28-google-workspace-landing

- scaffolded a fresh Next.js 16 + Tailwind 4 project with pnpm and configured custom fonts, metadata, and design tokens that mirror the Google Workspace brand.
- recreated every section of https://teamcomputers.com/google-workspace with reusable section components, structured data, and responsive layouts (hero, choice grid, trust cards, tools list, security highlights, FAQ, CTA, footer).
- implemented Framer Motion interactions, glassmorphism panels, and CTA gradients for the modernized UI plus FAQ accordion logic.
