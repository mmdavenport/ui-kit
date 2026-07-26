import { chromium, type Page, type ConsoleMessage } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE = "https://ui-kit-lime-tau.vercel.app";
const FAILURES_DIR = path.resolve(__dirname, "../audit-failures");
const REPORT_PATH = path.resolve(__dirname, "../audit-report.md");

interface EntryResult {
  id: string;
  title: string;
  name: string;
  type: string;
  pass: boolean;
  reasons: string[];
  consoleErrors: string[];
  failedRequests: string[];
  a11y: { critical: number; serious: number; moderate: number; minor: number };
}

async function main() {
  // 1. Fetch index.json
  const res = await fetch(`${BASE}/index.json`);
  const data = await res.json();
  const entries: Record<string, any> = data.entries || {};
  const ids = Object.keys(entries);
  console.log(`Found ${ids.length} entries in index.json`);

  // Clean failures dir
  if (fs.existsSync(FAILURES_DIR)) {
    for (const f of fs.readdirSync(FAILURES_DIR)) fs.unlinkSync(path.join(FAILURES_DIR, f));
  } else {
    fs.mkdirSync(FAILURES_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const results: EntryResult[] = [];

  // 2. Test each entry
  for (const id of ids) {
    const entry = entries[id];
    const entryType = entry.type === "docs" ? "docs" : "story";
    const viewMode = entryType === "docs" ? "docs" : "story";
    const url = `${BASE}/iframe.html?id=${id}&viewMode=${viewMode}`;

    const result: EntryResult = {
      id,
      title: entry.title || "",
      name: entry.name || "",
      type: entryType,
      pass: true,
      reasons: [],
      consoleErrors: [],
      failedRequests: [],
      a11y: { critical: 0, serious: 0, moderate: 0, minor: 0 },
    };

    const context = await browser.newContext();
    const page = await context.newPage();

    // Capture console errors
    page.on("console", (msg: ConsoleMessage) => {
      if (msg.type() === "error") {
        result.consoleErrors.push(msg.text());
      }
    });

    // Capture page errors
    page.on("pageerror", (err) => {
      result.pass = false;
      result.reasons.push(`Page error: ${err.message}`);
    });

    // Capture failed network requests
    page.on("response", (response) => {
      if (response.status() >= 400) {
        const reqUrl = response.url();
        // Ignore external doc links that 404 (storybook.js.org references)
        if (!reqUrl.includes("storybook.js.org")) {
          result.failedRequests.push(`${response.status()} ${reqUrl}`);
        }
      }
    });

    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });

      // Check render root exists with children
      if (entryType === "docs") {
        const docsRoot = await page.$("#storybook-docs");
        if (!docsRoot) {
          result.pass = false;
          result.reasons.push("#storybook-docs not found");
        } else {
          const childCount = await docsRoot.evaluate((el) => el.childElementCount);
          if (childCount === 0) {
            result.pass = false;
            result.reasons.push("#storybook-docs has 0 children");
          }
        }
      } else {
        const storyRoot = await page.$("#storybook-root");
        if (!storyRoot) {
          result.pass = false;
          result.reasons.push("#storybook-root not found");
        } else {
          const childCount = await storyRoot.evaluate((el) => el.childElementCount);
          if (childCount === 0) {
            result.pass = false;
            result.reasons.push("#storybook-root has 0 children");
          }
        }
      }

      // Check body text length
      const bodyText = await page.evaluate(() => document.body.innerText.trim());
      if (bodyText.length === 0) {
        result.pass = false;
        result.reasons.push(`Body text too short (${bodyText.length} chars)`);
      }

      // Failed requests check
      if (result.failedRequests.length > 0) {
        result.pass = false;
        result.reasons.push(`${result.failedRequests.length} failed request(s)`);
      }

      // 4. axe-core a11y scan
      try {
        const axeResults = await new AxeBuilder({ page }).analyze();
        for (const v of axeResults.violations) {
          const impact = (v.impact || "minor") as keyof typeof result.a11y;
          if (impact in result.a11y) {
            result.a11y[impact] += v.nodes.length;
          }
        }
      } catch (axeErr: any) {
        result.reasons.push(`axe error: ${axeErr.message?.slice(0, 100)}`);
      }

      // 6. Screenshot failures
      if (!result.pass) {
        const safeName = id.replace(/[^a-z0-9-]/g, "_");
        await page.screenshot({ path: path.join(FAILURES_DIR, `${safeName}.png`), fullPage: true });
      }
    } catch (err: any) {
      result.pass = false;
      result.reasons.push(`Navigation error: ${err.message?.slice(0, 150)}`);
    }

    await context.close();
    results.push(result);

    const status = result.pass ? "PASS" : "FAIL";
    process.stdout.write(`  ${status}  ${id}\n`);
  }

  // 3. Test manager shell
  console.log("\nTesting manager shell...");
  const mgrContext = await browser.newContext();
  const mgrPage = await mgrContext.newPage();
  let managerPass = true;
  const managerReasons: string[] = [];

  try {
    await mgrPage.goto(BASE, { waitUntil: "networkidle", timeout: 30000 });

    // Check sidebar renders
    const sidebar = await mgrPage.$('[role="navigation"], #storybook-explorer-tree, [data-testid="sidebar"]');
    if (!sidebar) {
      // Try broader selector
      const anyNav = await mgrPage.$$("nav");
      if (anyNav.length === 0) {
        managerPass = false;
        managerReasons.push("No sidebar/navigation element found");
      }
    }

    // Check brand title
    const bodyText = await mgrPage.evaluate(() => document.body.innerText);
    if (!bodyText.includes("Margarita")) {
      managerPass = false;
      managerReasons.push("Brand title not found in page text");
    }
  } catch (err: any) {
    managerPass = false;
    managerReasons.push(`Manager error: ${err.message?.slice(0, 150)}`);
  }
  await mgrContext.close();
  console.log(`  Manager shell: ${managerPass ? "PASS" : "FAIL"} ${managerReasons.join("; ")}`);

  await browser.close();

  // 5. Write report
  const totalPass = results.filter((r) => r.pass).length;
  const totalFail = results.filter((r) => !r.pass).length;
  const allConsoleErrors = results.flatMap((r) => r.consoleErrors.map((e) => `${r.id}: ${e}`));
  const allFailedReqs = results.flatMap((r) => r.failedRequests.map((f) => `${r.id}: ${f}`));
  const a11yTotals = { critical: 0, serious: 0, moderate: 0, minor: 0 };
  for (const r of results) {
    a11yTotals.critical += r.a11y.critical;
    a11yTotals.serious += r.a11y.serious;
    a11yTotals.moderate += r.a11y.moderate;
    a11yTotals.minor += r.a11y.minor;
  }

  let md = `# Storybook Audit Report\n\n`;
  md += `**Date:** ${new Date().toISOString().split("T")[0]}\n`;
  md += `**Site:** ${BASE}\n`;
  md += `**Entries:** ${ids.length}\n`;
  md += `**Manager shell:** ${managerPass ? "PASS" : "FAIL"}${managerReasons.length ? " — " + managerReasons.join("; ") : ""}\n\n`;
  md += `## Summary\n\n`;
  md += `| Metric | Count |\n|---|---|\n`;
  md += `| Pass | ${totalPass} |\n`;
  md += `| Fail | ${totalFail} |\n`;
  md += `| Console errors | ${allConsoleErrors.length} |\n`;
  md += `| Failed requests | ${allFailedReqs.length} |\n`;
  md += `| a11y critical | ${a11yTotals.critical} |\n`;
  md += `| a11y serious | ${a11yTotals.serious} |\n`;
  md += `| a11y moderate | ${a11yTotals.moderate} |\n`;
  md += `| a11y minor | ${a11yTotals.minor} |\n\n`;

  md += `## Entry Results\n\n`;
  md += `| Entry | Type | Result | Reason | a11y (C/S/M/m) |\n|---|---|---|---|---|\n`;
  for (const r of results) {
    const reason = r.pass ? "" : r.reasons.join("; ");
    const a11y = `${r.a11y.critical}/${r.a11y.serious}/${r.a11y.moderate}/${r.a11y.minor}`;
    md += `| ${r.id} | ${r.type} | ${r.pass ? "PASS" : "**FAIL**"} | ${reason} | ${a11y} |\n`;
  }

  if (allConsoleErrors.length > 0) {
    md += `\n## Console Errors\n\n`;
    md += "```\n" + allConsoleErrors.join("\n") + "\n```\n";
  }

  if (allFailedReqs.length > 0) {
    md += `\n## Failed Requests\n\n`;
    md += "```\n" + allFailedReqs.join("\n") + "\n```\n";
  }

  if (a11yTotals.critical + a11yTotals.serious + a11yTotals.moderate + a11yTotals.minor > 0) {
    md += `\n## a11y Violations by Entry\n\n`;
    md += `| Entry | Critical | Serious | Moderate | Minor |\n|---|---|---|---|---|\n`;
    for (const r of results) {
      const total = r.a11y.critical + r.a11y.serious + r.a11y.moderate + r.a11y.minor;
      if (total > 0) {
        md += `| ${r.id} | ${r.a11y.critical} | ${r.a11y.serious} | ${r.a11y.moderate} | ${r.a11y.minor} |\n`;
      }
    }
  }

  fs.writeFileSync(REPORT_PATH, md);
  console.log(`\nReport written to ${REPORT_PATH}`);
  console.log(`Failures: ${totalFail}/${ids.length}`);
  console.log(`a11y: ${a11yTotals.critical}C ${a11yTotals.serious}S ${a11yTotals.moderate}M ${a11yTotals.minor}m`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
