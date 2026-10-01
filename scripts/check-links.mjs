#!/usr/bin/env node
/**
 * Crawls the built site and fails the build on any broken internal link,
 * empty href, or "#" href. Assumes `next build` has already produced a
 * .next directory; starts `next start` on a scratch port, crawls, then
 * shuts the server down.
 */
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

const PORT = 4310;
const BASE_URL = `http://localhost:${PORT}`;
const ROOT = process.cwd();

function log(...args) {
  console.log(...args);
}

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status < 500) return true;
    } catch {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not become ready at ${url} within ${timeoutMs}ms`);
}

function extractLinks(html) {
  const links = [];
  const hrefRegex = /<a\b[^>]*\bhref\s*=\s*(["'])(.*?)\1/gi;
  let match;
  while ((match = hrefRegex.exec(html))) {
    links.push(match[2]);
  }
  return links;
}

async function main() {
  if (!existsSync(path.join(ROOT, ".next"))) {
    log("No .next build found. Run `npm run build` first.");
    process.exit(1);
  }

  log(`Starting server on port ${PORT}...`);
  const nextBin = path.join(ROOT, "node_modules", ".bin", process.platform === "win32" ? "next.cmd" : "next");
  const server = spawn(nextBin, ["start", "-p", String(PORT)], {
    cwd: ROOT,
    stdio: "ignore",
    shell: process.platform === "win32",
  });

  const failures = [];
  const visited = new Set();
  const queue = ["/"];

  try {
    await waitForServer(BASE_URL + "/");

    while (queue.length > 0) {
      const path_ = queue.shift();
      if (visited.has(path_)) continue;
      visited.add(path_);

      const res = await fetch(BASE_URL + path_);
      if (res.status >= 400) {
        failures.push(`${path_} -> HTTP ${res.status}`);
        continue;
      }

      const contentType = res.headers.get("content-type") ?? "";
      if (!contentType.includes("text/html")) continue;

      const html = await res.text();
      const links = extractLinks(html);

      for (const href of links) {
        if (href === "#" || href.trim() === "" || href.startsWith("javascript:")) {
          failures.push(`${path_} contains a placeholder link: "${href}"`);
          continue;
        }
        if (href.startsWith("/") && !href.startsWith("//")) {
          const clean = href.split("#")[0].split("?")[0];
          if (clean && !visited.has(clean) && !queue.includes(clean)) {
            queue.push(clean);
          }
        }
      }
    }
  } finally {
    server.kill();
  }

  log(`Checked ${visited.size} pages.`);

  if (failures.length > 0) {
    log("\nLink check FAILED:\n");
    for (const f of failures) log(" - " + f);
    process.exit(1);
  }

  log("Link check passed: no broken, empty, or placeholder links found.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
