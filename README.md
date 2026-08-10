# Checklist Design — Claude Code Tools

[![skills.sh](https://skills.sh/b/checklist-design/design-critique)](https://skills.sh/checklist-design/design-critique)

Checklist Design's tools for AI coding agents: `design-critique` — a quick, honest peer review of a UI screenshot, live page, or local build, written in the voice of a designer leaving a comment for a colleague, not a design report — and `design-audit` — a systematic, item-by-item check of a screen against one of Checklist Design's published checklists, for when you want to know specifically what's covered and what isn't.

Originally built as the prompt behind the AI quality checker in the [Checklist Design](https://checklist.design) Figma plugin, and refined through real usage before being packaged here.

Built to the open [Agent Skills](https://agentskills.io/) standard, so it works the same way across roughly 20 supported tools, and is also packaged as a Claude Code plugin for people who want the extra reliability hook described below.

## What these need to work

Both skills need one thing: a way to actually see the design being reviewed. The checklist content itself is bundled inside the skills — no network access, no API, no setup.

"A way to see it" means one of:
- **An image already in the conversation** — paste a screenshot in and ask.
- **A live URL or local dev server**, captured via a browser tool. Claude Code Desktop ships a built-in preview browser for this — nothing to set up. Claude Code CLI, Codex, or anywhere else without a built-in preview needs one added, e.g. the standard Playwright MCP server:

  ```
  claude mcp add playwright -- npx @playwright/mcp@latest
  ```
  ```
  codex mcp add playwright -- npx @playwright/mcp@latest
  ```

  One-time, optional setup — if you've already got a browser tool configured for other things, there's nothing extra to do.

Without either, both skills will ask you for a screenshot rather than guess at how something renders.

## Installation

### For Cursor, Codex, Gemini CLI, or any other Agent Skills-compatible tool (recommended)

From your project root, in a terminal:

```
npx skills add checklist-design/design-critique -a claude-code
```

This installs both skills — `design-critique` and `design-audit`. The `-a` flag targets specific agents; the installer only auto-selects ones it detects as already configured on your machine, so without it, a tool you have installed can silently get skipped. Common identifiers: `claude-code`, `cursor`, `codex`, `gemini`, `github-copilot`, `windsurf`, `cline`, `amp`, `antigravity` — pass as many as you need, e.g. `-a cursor -a codex -a gemini`. Skills.sh supports roughly 20 of these directly; the broader Agent Skills standard is compatible with around 44 tools total, so check [skills.sh](https://skills.sh/checklist-design/design-critique) if yours isn't listed above.

Installed this way, the commands are `/design-critique` and `/design-audit` (not namespaced) — the generic Agent Skills tooling doesn't apply the plugin-style `checklist-design:` prefix used below. Cursor, Gemini CLI, and Codex all need no extra setup or beta flags to pick these up — they discover skills automatically from their own skills directories.

After installing, verify it landed where you expect:

```
npx skills list
```

**First install only:** if this is the first skill you've ever added to a given tool, you may need to restart it once so it picks up the new skills directory. After that, updates apply without restarting.

**ChatGPT:** skills are supported only on Work tiers (Business, Enterprise, Edu) — not on Plus or Free, and invoked with `@`. On a personal account, Codex CLI is the route in instead.

### For Claude Code, if you want the reliability hook too

The plugin install adds a `UserPromptSubmit` hook that improves how reliably natural-language requests reach the right skill (see "Why a hook" below) — something the plain Agent Skills path above can't include, since it only installs the `skills/` folder.

**One-time setup — run in a terminal**, even if you plan to use Desktop day-to-day. `/plugin marketplace add` and `/plugin install` are CLI-terminal commands; typing them into Desktop's prompt box doesn't work (Desktop replies that plugin commands only work in the terminal). Registering the marketplace this way makes it visible everywhere afterward, including Desktop, so this is a one-time step regardless of where you'll actually use it:

```
claude
```

Then, inside that terminal session:

```
/plugin marketplace add checklist-design/design-critique
/plugin install checklist-design@checklist-design
```

This installs the full plugin — both skills, the `/checklist-design:design-critique` and `/checklist-design:design-audit` commands, and the hook.

**Using Claude Code Desktop?** Once the marketplace is registered (from the terminal step above), it'll show up in Desktop too. If it shows as available but not installed, finish the install from Desktop's own panel instead of typing the command: click the **+** button next to the prompt box → **Plugins** → find `checklist-design` → **Install**. That GUI click works where the typed slash command doesn't.

**Already have this installed under an old name?** The skills inside this plugin were originally named `critique` and `audit`; they're now `design-critique` and `design-audit` to avoid colliding with other tools' skills of the same generic name. If your commands stopped resolving after an update, that's why — see "How to update" below.

### Manual copy

Copy the skill folder(s) you want into your tool's skills directory — `design-critique`, `design-audit`, or both. `.agents/skills/` in this repo is the neutral path Cursor, Gemini CLI, and Codex all read by default, so a plain `git clone` plus a copy from there works with no build step:

**Claude Code (project-specific):**
```
cp -r skills/design-critique skills/design-audit your-project/.claude/skills/
```

**Claude Code (global — applies to all projects):**
```
cp -r skills/design-critique skills/design-audit ~/.claude/skills/
```

Other tools that support the Agent Skills format read from their own equivalent `skills/` directory — check your tool's docs for the exact path, or use `.agents/skills/` directly if it's supported.

### How to update

- **`npx skills add` path (recommended):** run `npx skills update`. That's a first-class command — it updates installed skills to their latest versions, and `npx skills list` confirms what you have. This is the most reliable update path of the three.
- **Claude Code plugin path:** run `/plugin marketplace update checklist-design` *first*, then `/plugin update checklist-design@checklist-design`. Order matters. The update check compares your install against a **locally cached copy of this marketplace**, which is only refreshed on install or by that first command — never automatically. That's why "check for updates" can report "on latest version" indefinitely while a newer release exists. If it stays stuck, uninstalling and reinstalling also works, because reinstalling re-clones the cache.
- **Manual copy:** there's no update mechanism — re-copy the folder(s) over the old ones.

## Usage

Once installed, both skills activate on their own — no command to remember. Claude reads each skill's description in the background and loads whichever one matches your request, so you can just share a screenshot and ask in plain language:

```
Critique this design
Does this look right?
Roast my landing page
Review this UI screenshot
What's wrong with this screen?
```

If you'd rather trigger it explicitly:

```
/checklist-design:design-critique     (plugin install, CLI terminal)
/design-critique                      (npx skills add / manual copy)
```

**In Claude Code Desktop**, typing `/checklist-design:design-critique` may not autocomplete reliably — this is a known Desktop-specific gap in discovering plugin-sourced commands. Two more reliable options there: just ask in plain language (it worked in testing even without any slash command), or use **+ → Plugins → Checklist design → design-critique** to invoke it directly from the menu.

Either way, it'll walk through purpose, hierarchy, layout, typography, color, accessibility, interaction, and polish — but only where relevant, and only calling out what it can actually point to in the frame.

## Auditing against a specific checklist

`design-critique` is a general opinion. `design-audit` is different — it picks (or takes) one of Checklist Design's checklists and goes through it item by item: what's there, what's missing, and whether a missing item is actually a problem or just doesn't apply here.

```
Audit this against the Login checklist
Check this screen against Checklist Design's Permissions checklist
What's missing from this checkout?
Does this cover everything it needs to?
```

If you don't name a checklist, it'll find the one that best matches what you're showing it — or tell you plainly if nothing matches well, rather than forcing one. Trigger it explicitly with `/checklist-design:design-audit` (plugin install) or `/design-audit` (`npx skills add` / manual copy).

### Why a hook

Natural-language auto-invocation is reliable for pure feedback or audit requests, but testing found it can lose out to Claude Code's own investigative instincts when a request also implies technical work — "critique my homepage" can send Claude straight into finding the file and starting the dev server without ever loading the skill, which means the response comes out in Claude's default voice instead of this skill's tuned one.

The plugin install includes a `UserPromptSubmit` hook that checks incoming prompts for critique- or audit-shaped language and nudges Claude toward the right skill before it starts reasoning, rather than leaving it entirely to chance. It's a plugin-only feature — the `npx skills add` and manual-copy paths don't get it, since those only install the `skills/` folder, not the plugin's hooks.

If you update the plugin and the hook doesn't seem to be firing, run `/reload-plugins` (or restart Claude Code) — hook and command changes need a reload to take effect, unlike skill content edits which apply live.

## Grounded in Checklist Design's own checklists

Both skills ship with all of [Checklist Design's](https://checklist.design) published checklists bundled inside them as reference files — every checklist, every item, about 130KB.

Matching a screen to a checklist and reading its items are both local file reads. No API call, no network, no failure mode.

This is deliberate, and it's the reason an earlier fetch-based version was abandoned: Claude's web fetch tool [can only retrieve URLs that already appear in the conversation](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool) — a user's message, or earlier search results. A URL living only in a skill's own instructions doesn't qualify, so a skill fetching its own API is blocked by design, not by a bug. Bundling reference data is also the pattern [Anthropic's own skills](https://github.com/anthropics/skills) use.

For `design-critique`, this grounding is an enhancement: when a screen clearly matches a checklist, it checks itself against that checklist's specific items and links back to it, instead of relying only on general design heuristics. If nothing matches well, it just runs as a normal critique.

For `design-audit`, it's the whole mechanism — the point is checking against a specific checklist, item by item.

**Keeping the bundle current:** the bundled copies are the safety net, so they still need to track the site. That's automated — a scheduled GitHub Action ([`refresh-checklists.yml`](.github/workflows/refresh-checklists.yml)) rebuilds the bundle daily, and only commits and releases when the live content has actually changed. It can also be triggered on demand from the Actions tab, or by the website when a checklist is published.

Maintainers can also run it by hand: `node scripts/build-reference-bundle.mjs`, then commit and release.

## What makes this different

Most AI design feedback reads like a checklist read aloud. `design-critique` is deliberately tuned against that: a small blocklist of "AI report" words (*effectively, leverages, optimises, streamlined*, and similar), a requirement to name at least two genuine strengths, and a rule that considerations without a specific visible cause get dropped rather than padded in. `design-audit` takes the opposite, more literal approach on purpose — a completeness check needs to actually be complete — but keeps the same plain, direct voice rather than reading like a compliance report.

## License

MIT — see [LICENSE](./LICENSE).

## About Checklist Design

[Checklist Design](https://checklist.design) is a UX resource platform with 100+ checklists for web, mobile, and design system work, plus a Figma plugin with an AI-powered quality checker built on this same critique approach.
