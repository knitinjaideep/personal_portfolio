#!/usr/bin/env node
// Generates the downloadable résumé PDF from the live /resume/print route
// using Playwright, so the PDF renders from real HTML/CSS (selectable text,
// ATS-safe) instead of a screenshot. Requires the dev server to already be
// running on PORT (npm run dev — defaults to 3001). See README for the
// one-time Playwright browser install command.
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const PORT = process.env.PORT ?? '3001';
const PRINT_URL = `http://localhost:${PORT}/resume/print`;
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'resume');
const OUTPUT_PATH = path.join(OUTPUT_DIR, 'nitin-kotcherlakota-resume.pdf');

async function main() {
  console.log(`Generating résumé PDF from ${PRINT_URL} ...`);

  const browser = await chromium.launch();
  const page = await browser.newPage();

  let response;
  try {
    response = await page.goto(PRINT_URL, { waitUntil: 'networkidle', timeout: 15_000 });
  } catch (error) {
    await browser.close();
    console.error(
      `\nCould not reach ${PRINT_URL}.\n` +
        `Start the dev server first: npm run dev (must be on port ${PORT}).\n\n` +
        `Underlying error: ${error instanceof Error ? error.message : String(error)}\n`,
    );
    process.exitCode = 1;
    return;
  }

  if (!response || !response.ok()) {
    await browser.close();
    console.error(
      `\n${PRINT_URL} responded with status ${response ? response.status() : 'no response'}.\n` +
        'Make sure the app builds and the print route renders before generating the PDF.\n',
    );
    process.exitCode = 1;
    return;
  }

  // Wait for web fonts to finish loading so the PDF doesn't fall back to
  // system fonts mid-render.
  await page.evaluate(() => document.fonts.ready);

  await mkdir(OUTPUT_DIR, { recursive: true });
  await page.pdf({
    path: OUTPUT_PATH,
    format: 'Letter',
    printBackground: true,
    margin: { top: '0.6in', bottom: '0.6in', left: '0.75in', right: '0.75in' },
  });

  await browser.close();
  console.log(`Résumé PDF written to ${path.relative(process.cwd(), OUTPUT_PATH)}`);
}

main();
