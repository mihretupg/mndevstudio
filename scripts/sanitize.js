const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'demo-sanitized')

const EXCLUDE = new Set(['node_modules', '.git', 'dist', 'demo-sanitized'])

async function copyRecursive(src, dest) {
  const stat = await fs.promises.stat(src)
  if (stat.isDirectory()) {
    await fs.promises.mkdir(dest, { recursive: true })
    const items = await fs.promises.readdir(src)
    for (const name of items) {
      if (EXCLUDE.has(name)) continue
      const s = path.join(src, name)
      const d = path.join(dest, name)
      await copyRecursive(s, d)
    }
  } else if (stat.isFile()) {
    // Skip binary files by simple heuristic (images/icons) — copy others
    const ext = path.extname(src).toLowerCase()
    if (['.png', '.jpg', '.jpeg', '.gif', '.ico', '.webp', '.zip'].includes(ext)) {
      // copy images as-is
      await fs.promises.copyFile(src, dest)
    } else {
      let content = await fs.promises.readFile(src, 'utf8')
      content = sanitizeContent(content)
      await fs.promises.mkdir(path.dirname(d), { recursive: true }).catch(()=>{})
      await fs.promises.writeFile(dest, content, 'utf8')
    }
  }
}

function sanitizeContent(s) {
  if (!s) return s
  // Replace emails
  s = s.replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g, '[REDACTED_EMAIL]')
  // Replace common API keys (very generic heuristics)
  s = s.replace(/(?<=['\"])(?:[A-Za-z0-9_\-]{16,})(?=['\"])/g, '[REDACTED_KEY]')
  // Replace URLs that may point to private hosts
  s = s.replace(/https?:\/\/[^\s"']+/g, '[REDACTED_URL]')
  // Replace obvious env var patterns
  s = s.replace(/\b[A-Z0-9_]+_?API_KEY\b/g, '[REDACTED_ENV]')
  // Replace GitHub links to your profiles with placeholders (retain public handles if desired)
  s = s.replace(/https:\/\/github\.com\/[^\/\s'"<>]*/g, '[REDACTED_GITHUB]')
  // Replace client/company names marker: you can extend this list inside sanitizer config
  const clientNames = ['ClientName', 'ACME', 'Confidential', 'Acme Corp']
  for (const name of clientNames) {
    const re = new RegExp(name, 'gi')
    s = s.replace(re, 'Client')
  }
  return s
}

async function run() {
  console.log('Creating sanitized demo in', outDir)
  await fs.promises.rm(outDir, { recursive: true, force: true })
  await copyRecursive(root, outDir)
  // Remove any .env files if copied by mistake
  try { await fs.promises.rm(path.join(outDir, '.env'), { force: true }) } catch(e){}
  // Write a short README inside demo
  const demoReadme = `This is a sanitized demo copy created by scripts/sanitize.js\n\nFiles have been redacted/sanitized for public sharing.\nRemove [REDACTED] placeholders and replace with safe, dummy data where appropriate.\n\nTo run:\n1. cd demo-sanitized\n2. npm install\n3. npm run dev\n`;
  await fs.promises.writeFile(path.join(outDir, 'SANITIZED_README.md'), demoReadme, 'utf8')
  console.log('Sanitized demo created. Review', path.join(outDir, 'SANITIZED_README.md'))
}

run().catch(err=>{ console.error(err); process.exit(1) })
