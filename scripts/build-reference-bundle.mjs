#!/usr/bin/env node
// Regenerates the bundled checklist reference files that both skills read.
//
// Why bundled rather than fetched at runtime: the skills originally fetched
// checklist.design's API on every invocation. That made the core matching
// step depend on a network call succeeding inside whatever environment the
// skill happened to be running in — and in practice it did not reliably
// succeed (repeated "Failed to fetch" in claude.ai's own chat interface,
// against endpoints that were provably up and serving correctly). The whole
// dataset is ~130KB, so there was never a good reason to fetch it.
//
// Run this after publishing new checklists on checklist.design, then commit
// the result and cut a release:
//
//   node scripts/build-reference-bundle.mjs
//
// Both skills get identical copies (each skill folder must be self-contained
// — `npx skills add` copies them independently), and .agents/skills/ mirrors
// are refreshed too.

import { readFile, writeFile, mkdir, rm, cp } from 'node:fs/promises'
import { join } from 'node:path'

const BASE = 'https://www.checklist.design'
const SKILLS = ['design-critique', 'design-audit']

async function getJSON(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`)
  // Endpoints serve valid JSON as text/plain, so parse the text ourselves
  // rather than relying on res.json()'s content-type expectations.
  return JSON.parse(await res.text())
}

// Small concurrency cap — this hits ~110 endpoints, no reason to stampede.
async function mapLimit(items, limit, fn) {
  const out = []
  let i = 0
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (i < items.length) {
        const idx = i++
        out[idx] = await fn(items[idx])
      }
    })
  )
  return out
}

function fileNameFor(c) {
  return `${c.categorySlug}-${c.slug}.md`
}

function renderChecklist(c, items) {
  const lines = [
    `# ${c.name} — ${c.category}`,
    '',
    c.description ? `${c.description}` : '',
    '',
    `Source: ${BASE}/${c.categorySlug}/${c.slug}`,
    '',
    '## Items',
    '',
  ]
  for (const it of items) {
    lines.push(`### ${it.title}`)
    if (it.description) lines.push(it.description)
    if (it.suggestion) lines.push(`\n_Tip: ${it.suggestion}_`)
    lines.push('')
  }
  return lines.join('\n').replace(/\n{3,}/g, '\n\n')
}

function renderIndex(entries) {
  const byCategory = new Map()
  for (const { checklist } of entries) {
    if (!byCategory.has(checklist.category)) byCategory.set(checklist.category, [])
    byCategory.get(checklist.category).push(checklist)
  }

  // Deliberately no generated-on date: this output must be byte-identical
  // when the content hasn't changed, or the automated refresh workflow sees
  // a diff every run and cuts an empty release every day. Release history
  // is where "when was this generated" actually lives.
  const lines = [
    '# Checklist Design — checklist index',
    '',
    `${entries.length} checklists, from ${BASE}.`,
    '',
    'Find the checklist(s) matching the screen under review, then read the matching',
    'file in `references/checklists/` for its full items. The file name is given in',
    'backticks after each name.',
    '',
  ]

  for (const [category, checklists] of [...byCategory].sort()) {
    lines.push(`## ${category}`, '')
    for (const c of checklists) {
      const desc = (c.description || '').trim()
      lines.push(`- **${c.name}** \`${fileNameFor(c)}\`${desc ? ` — ${desc}` : ''}`)
    }
    lines.push('')
  }

  return lines.join('\n')
}

const catalog = await getJSON(`${BASE}/api/checklists/catalog`)
console.log(`Catalog: ${catalog.checklists.length} checklists`)

const fetched = await mapLimit(catalog.checklists, 8, async (c) => {
  const url = `${BASE}/api/checklists/detail?slug=${encodeURIComponent(c.slug)}&category=${encodeURIComponent(c.categorySlug)}`
  const detail = await getJSON(url)
  return { checklist: c, items: detail.items || [] }
})

// A checklist with no items yet can't be audited and would only pollute
// matching, so keep it out of the bundle entirely.
const entries = fetched.filter((e) => e.items.length > 0)
const skipped = fetched.length - entries.length
console.log(`Bundling ${entries.length} checklists (${skipped} skipped: no items yet)`)

const index = renderIndex(entries)

// scripts/bump-version.mjs appends a "_Bundled content: vX, date._" stamp to
// index.md, and only runs when content genuinely changed. Carry any existing
// stamp through untouched — otherwise regenerating would strip it, the
// refresh workflow would read that as a change, and it would cut an empty
// release every single day.
async function existingStamp(path) {
  try {
    const match = (await readFile(path, 'utf8')).match(/\n(_Bundled content: .*_)\n/)
    return match ? `\n${match[1]}\n` : ''
  } catch {
    return '' // no bundle yet — first run
  }
}

for (const skill of SKILLS) {
  const refDir = join('skills', skill, 'references')
  const indexPath = join(refDir, 'index.md')
  const stamp = await existingStamp(indexPath)

  await rm(refDir, { recursive: true, force: true })
  await mkdir(join(refDir, 'checklists'), { recursive: true })

  await writeFile(indexPath, stamp ? `${index.trimEnd()}\n${stamp}` : index)
  for (const { checklist, items } of entries) {
    await writeFile(join(refDir, 'checklists', fileNameFor(checklist)), renderChecklist(checklist, items))
  }

  // Refresh the .agents/skills mirror so the two never drift.
  const mirror = join('.agents', 'skills', skill)
  await rm(join(mirror, 'references'), { recursive: true, force: true })
  await cp(refDir, join(mirror, 'references'), { recursive: true })
  await cp(join('skills', skill, 'SKILL.md'), join(mirror, 'SKILL.md'))

  console.log(`  ${skill}: index.md + ${entries.length} checklist files (+ mirror)`)
}

console.log('Done. Commit the result and cut a release — claude.ai plugin installs only update on a published GitHub release.')
