# Checklist Design — design review for AI coding agents

Design review grounded in [Checklist Design's](https://checklist.design) 100+ published checklists, for Claude Code, Cursor, Codex, Gemini CLI and around twenty other tools.

One skill, two modes:

- **`audit`** — works through the matching checklist item by item as a table: a status marker per item (present, partially present, missing, not needed, can't tell), the item itself, and why it matters. Scannable, and it pastes into Notion, Linear or Confluence intact.
- **`critique`** — quick, honest peer review of hierarchy, layout, typography, colour, accessibility, interaction and polish. Written like a designer leaving a comment for a colleague, not a design report.

Give it a screenshot and it picks the right mode itself — auditing when a checklist clearly matches, critiquing when none does.

Originally built as the prompt behind the AI quality checker in the Checklist Design Figma plugin, and refined through real usage before being packaged here. Built to the open [Agent Skills](https://agentskills.io/) standard.

## What it needs to work

One thing: a way to see the design. The checklist content is bundled inside the skill — no network access, no API, no setup.

"A way to see it" means either:

- **An image in the conversation** — paste a screenshot and ask.
- **A live URL or local dev server**, captured with a browser tool. Claude Code Desktop has one built in. Claude Code CLI, Codex, or anywhere without a built-in preview needs one added, e.g.:

  ```
  claude mcp add playwright -- npx @playwright/mcp@latest
  ```
  ```
  codex mcp add playwright -- npx @playwright/mcp@latest
  ```

Without either, it'll ask for a screenshot rather than guess at how something renders.

## Installation

### Any Agent Skills-compatible tool (recommended)

From your project root:

```
npx skills add checklist-design/skills
```

Add `-a` to target specific agents — the installer only auto-selects ones it detects, so a tool you have installed can otherwise be skipped. Common identifiers: `claude-code`, `cursor`, `codex`, `gemini`, `github-copilot`, `windsurf`, `cline`, `amp`, `antigravity`. For example:

```
npx skills add checklist-design/skills -a claude-code -a cursor -a codex
```

Verify with `npx skills list`. Cursor, Gemini CLI and Codex need no extra setup — they discover skills automatically.

**First install only:** if this is the first skill you've added to a given tool, restart it once so it picks up the skills directory.

**ChatGPT:** skills are Work-tier only (Business, Enterprise, Edu), invoked with `@`. On a personal account, use Codex CLI instead.

### Claude Code plugin (adds the trigger hook)

The plugin install adds a `UserPromptSubmit` hook that improves how reliably plain-language requests reach the skill (see "Why a hook" below). The `npx` path can't include it — it only installs the `skills/` folder.

Run these in a terminal — `/plugin` commands don't work in Desktop's prompt box:

```
/plugin marketplace add checklist-design/skills
/plugin install checklist-design@checklist-design
```

Once the marketplace is registered it shows up in Desktop too, where you can install from **+ → Plugins → checklist-design**.

### Manual copy

`.agents/skills/` is the neutral path Cursor, Gemini CLI and Codex read by default, so a `git clone` plus a copy works with no build step:

```
cp -r skills/checklist-design your-project/.claude/skills/
```

Or `~/.claude/skills/` to apply it everywhere.

### How to update

- **`npx skills` path (recommended):** run `npx skills update`. Confirm with `npx skills list`.
- **Claude Code plugin:** run `/plugin marketplace update checklist-design` *first*, then `/plugin update checklist-design@checklist-design`. Order matters — the update check compares your install against a **locally cached copy of this marketplace**, which is only refreshed on install or by that first command, never automatically. That's why "check for updates" can report "on latest version" indefinitely while a newer release exists. If it stays stuck, uninstalling and reinstalling also works, because reinstalling re-clones the cache.
- **Manual copy:** re-copy the folder over the old one.

## Usage

Mostly you don't need a command — it activates from plain language:

```
Critique this design
Does this look right?
Roast my landing page
What's missing from this checkout?
Check this against the Login checklist
```

To be explicit, the command is the same everywhere — `npx` install or plugin, both:

```
/checklist-design                    picks the mode itself
/checklist-design audit              force the item-by-item check
/checklist-design critique           force quick feedback
```

With no mode, it decides from what it's looking at: audit when a checklist clearly matches, critique when none does. Either way it says which it chose in the opening line, so one word redirects it.

### Why a hook

Plain-language invocation is reliable for pure requests, but testing found it can lose out to Claude Code's own investigative instincts when a request also implies technical work — "critique my homepage" can send Claude off to find the file and start the dev server without ever loading the skill, so the response comes out in Claude's default voice instead of this skill's tuned one.

The plugin install includes a `UserPromptSubmit` hook that spots design-review-shaped prompts and points Claude at the skill before it starts reasoning. Plugin-only; the `npx` and manual paths install just the `skills/` folder.

If you update the plugin and the hook doesn't seem to fire, run `/reload-plugins` or restart — hook changes need a reload, unlike skill content edits.

## Grounded in Checklist Design's own checklists

All 112 published checklists ship inside the skill as reference files — every checklist, every item. Matching a screen to a checklist and reading its items are local file reads. No API call, no network, no failure mode.

That's deliberate. Claude's web fetch tool [can only retrieve URLs that already appear in the conversation](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool) — a user's message, or earlier search results. A URL living only in a skill's own instructions doesn't qualify, so a skill fetching its own API is blocked by design, not by a bug. Bundling reference data is also the pattern [Anthropic's own skills](https://github.com/anthropics/skills) use.

**Keeping it current:** a scheduled GitHub Action ([`refresh-checklists.yml`](.github/workflows/refresh-checklists.yml)) rebuilds the bundle daily from checklist.design and only commits and releases when the content actually changed. Maintainers can also run `node scripts/build-reference-bundle.mjs` by hand.

## What makes this different

Most AI design feedback reads like a checklist read aloud. Critique mode is deliberately tuned against that: a blocklist of "AI report" words (*effectively, leverages, optimises, streamlined*), a requirement to name at least two genuine strengths, and a rule that considerations without a specific visible cause get dropped rather than padded in.

Audit mode goes the other way on purpose — a completeness check has to actually be complete — but it's built to stay honest rather than to grade. "Partially present" gets its own status so results point at a specific improvement instead of a pass or fail, "not needed here" is a neutral marker rather than a failure colour (a passwordless login shouldn't look like it's failing two-thirds of a password checklist), and there's deliberately no score or percentage.

## License

MIT — see [LICENSE](./LICENSE).

## About Checklist Design

[Checklist Design](https://checklist.design) is a UX resource platform with 100+ checklists for web, mobile, and design system work, plus a Figma plugin with an AI-powered quality checker built on this same approach.
