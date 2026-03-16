#!/usr/bin/env node

import { execSync } from "node:child_process";
import { cpSync, readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const name = process.argv[2];

if (!name) {
  console.error("\n  Usage: pnpm new-landing <name>\n");
  console.error("  Example: pnpm new-landing premium\n");
  process.exit(1);
}

const slug = name.toLowerCase().replace(/[^a-z0-9-]/g, "-");
const srcDir = resolve(ROOT, "apps/landing-starter");
const destDir = resolve(ROOT, `apps/landing-${slug}`);

console.log(`\n  📦 Creating landing: landing-${slug}\n`);

// 1. Copy template
cpSync(srcDir, destDir, { recursive: true });

// 2. Remove .next and node_modules if copied
const rmDirs = [".next", "node_modules"];
for (const dir of rmDirs) {
  try {
    execSync(`rm -rf ${resolve(destDir, dir)}`);
  } catch {
    // ignore
  }
}

// 3. Update package.json
const pkgPath = resolve(destDir, "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
pkg.name = `@m-fabric/landing-${slug}`;

// Assign unique port (3001 is starter, new ones start from 3002)
const port = 3001 + Math.floor(Math.random() * 100) + 1;
pkg.scripts.dev = `next dev --port ${port}`;

writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

// 4. Update layout metadata
const layoutPath = resolve(destDir, "src/app/layout.tsx");
let layout = readFileSync(layoutPath, "utf-8");
layout = layout.replace(
  /title: ".*?"/,
  `title: "Landing ${slug.charAt(0).toUpperCase() + slug.slice(1)} | M-Fabric"`
);
layout = layout.replace(
  /description: ".*?"/,
  `description: "Лендинг ${slug} — M-Fabric"`
);
writeFileSync(layoutPath, layout);

// 5. Install deps
console.log("  📥 Installing dependencies...\n");
execSync("pnpm install", { cwd: ROOT, stdio: "inherit" });

console.log(`
  ✅ landing-${slug} создан!

  Команды:
    pnpm dev --filter @m-fabric/landing-${slug}   — запуск dev-сервера (порт ${port})
    pnpm build --filter @m-fabric/landing-${slug}  — сборка

  Vercel-деплой:
    Root Directory → apps/landing-${slug}
`);
