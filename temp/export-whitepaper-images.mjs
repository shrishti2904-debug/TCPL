#!/usr/bin/env node
/**
 * Export each page of the whitepaper PDF into optimized JPG files.
 * Run with: `node temp/export-whitepaper-images.mjs`
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "node:url";

import { createCanvas, ImageData } from "@napi-rs/canvas";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SOURCE_PDF = resolve(__dirname, "../public/docs/gws-white-paper.pdf");
const OUTPUT_DIR = resolve(__dirname, "../public/docs/gws-white-paper/pages");
const SCALE = Number(process.env.PAGE_SCALE ?? 1.5);
const QUALITY = Number(process.env.JPG_QUALITY ?? 0.88);

class CanvasFactory {
  create(width, height) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");
    return { canvas, context };
  }

  reset(canvasAndContext, width, height) {
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  }

  destroy(canvasAndContext) {
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
    canvasAndContext.context = null;
    canvasAndContext.canvas = null;
  }
}

class NodeImageFactory {
  create(width, height, data) {
    return new ImageData(Uint8ClampedArray.from(data), width, height);
  }
}

async function ensureOutputDir() {
  await mkdir(OUTPUT_DIR, { recursive: true });
}

function outputPath(pageNumber) {
  return join(
    OUTPUT_DIR,
    `page-${String(pageNumber).padStart(2, "0")}.jpg`
  );
}

async function renderPage(pageNumber, pdfDocument) {
  const page = await pdfDocument.getPage(pageNumber);
  const viewport = page.getViewport({ scale: SCALE });
  const canvasFactory = new CanvasFactory();
  const canvasAndContext = canvasFactory.create(
    viewport.width,
    viewport.height
  );

  const renderContext = {
    canvasContext: canvasAndContext.context,
    viewport,
    canvasFactory,
    imageFactory: new NodeImageFactory(),
  };

  await page.render(renderContext).promise;
  const buffer = canvasAndContext.canvas.toBuffer("image/jpeg", {
    quality: QUALITY,
    chromaSubsampling: true,
  });
  await writeFile(outputPath(pageNumber), buffer);
  canvasFactory.destroy(canvasAndContext);
}

async function main() {
  await ensureOutputDir();
  const pdfBytes = new Uint8Array(await readFile(SOURCE_PDF));
  const loadingTask = pdfjsLib.getDocument({
    data: pdfBytes,
    useSystemFonts: true,
    isEvalSupported: false,
  });

  const pdfDocument = await loadingTask.promise;
  console.log(
    `Exporting ${pdfDocument.numPages} pages from ${SOURCE_PDF} to ${OUTPUT_DIR}`
  );

  for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber++) {
    const start = performance.now();
    await renderPage(pageNumber, pdfDocument);
    const duration = ((performance.now() - start) / 1000).toFixed(2);
    console.log(
      `Rendered page ${pageNumber}/${pdfDocument.numPages} in ${duration}s`
    );
  }

  console.log("Done.");
}

main().catch((error) => {
  console.error("Failed to export whitepaper images:", error);
  process.exitCode = 1;
});

