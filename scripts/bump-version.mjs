#!/usr/bin/env node
// Bumps the version everywhere it appears, so a release can't ship with the
// pieces disagreeing. Used by the automated bundle-refresh workflow, and
// safe to run by hand.
//
//   node scripts/bump-version.mjs           # patch bump (2.1.0 -> 2.1.1)
//   node scripts/bump-version.mjs 3.0.0     # explicit version

import { readFile, writeFile } from 'node:fs/promises'

const SKILLS = ['design-critique', 'design-audit']

const pluginPath = '.claude-plugin/plugin.json'
const marketplacePath = '.claude-plugin/marketplace.json'

const plugin = JSON.parse(await readFile(pluginPath, 'utf8'))
const current = plugin.version

let next = process.argv[2]
if (!next) {
  const [major, minor, patch] = current.split('.').map(Number)
  if ([major, minor, patch].some(Number.isNaN)) {
    throw new Error(`Can't patch-bump a non-semver version: ${current}`)
  }
  next = `${major}.${minor}.${patch + 1}`
}

if (!/^\d+\.\d+\.\d+$/.test(next)) {
  throw new Error(`Not a valid semver version: ${next}`)
}

plugin.version = next
await writeFile(pluginPath, `${JSON.stringify(plugin, null, 2)}\n`)

const marketplace = JSON.parse(await readFile(marketplacePath, 'utf8'))
for (const entry of marketplace.plugins) entry.version = next
await writeFile(marketplacePath, `${JSON.stringify(marketplace, null, 2)}\n`)

// Each SKILL.md carries its own metadata.version, and the .agents mirrors
// must match — a mismatch is how someone ends up debugging a version that
// doesn't exist.
for (const skill of SKILLS) {
  for (const dir of [`skills/${skill}`, `.agents/skills/${skill}`]) {
    const path = `${dir}/SKILL.md`
    const text = await readFile(path, 'utf8')
    const updated = text.replace(/^(\s*version:\s*)"[^"]*"/m, `$1"${next}"`)
    if (updated === text) throw new Error(`No metadata.version found to bump in ${path}`)
    await writeFile(path, updated)
  }
}

// Stamp freshness into the bundled index here rather than in the build
// script. The build script's output has to be byte-identical when nothing
// changed, or the refresh workflow sees a diff every run and cuts an empty
// release daily. This script only runs when content actually changed, so
// the stamp moves exactly when it should.
const stamp = `_Bundled content: v${next}, ${new Date().toISOString().slice(0, 10)}._`
for (const skill of SKILLS) {
  for (const dir of [`skills/${skill}`, `.agents/skills/${skill}`]) {
    const path = `${dir}/references/index.md`
    const text = await readFile(path, 'utf8')
    const withoutOldStamp = text.replace(/\n_Bundled content: .*_\n/, '\n')
    await writeFile(path, `${withoutOldStamp.trimEnd()}\n\n${stamp}\n`)
  }
}

console.log(next)
