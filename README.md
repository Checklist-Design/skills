# Checklist Design — Claude Code Tools

[![skills.sh](https://skills.sh/b/checklist-design/design-critique)](https://skills.sh/checklist-design/design-critique)

Checklist Design's tools for AI coding agents: `critique` — a quick, honest peer review of a UI screenshot, live page, or local build, written in the voice of a designer leaving a comment for a colleague, not a design report — and `audit` — a systematic, item-by-item check of a screen against one of Checklist Design's published checklists, for when you want to know specifically what's covered and what isn't.

Originally built as the prompt behind the AI quality checker in the [Checklist Design](https://checklist.design) Figma plugin, and refined through real usage before being packaged here.

Packaged as both a Claude Code plugin and a standalone [Agent Skill](https://agentskills.io/), so it works whichever way your tool supports.

## Installation

### For Claude Code (recommended)

**One-time setup — run in a terminal**, even if you plan to use Desktop day-to-day. `/plugin marketplace add` and `/plugin install` are CLI-terminal commands; typing them into Desktop's prompt box doesn't work (Desktop replies that plugin commands only work in the terminal). Registering the marketplace this way makes it visible everywhere afterward, including Desktop, so this is a one-time step regardless of where you'll actually use it:

```
claude
```

Then, inside that terminal session:

```
/plugin marketplace add checklist-design/design-critique
/plugin install checklist-design@checklist-design
```

This installs the full plugin — both skills, the `/checklist-design:critique` and `/checklist-design:audit` commands, and a hook that helps Claude reach for the right one reliably (see "Why a hook" below).

**Using Claude Code Desktop?** Once the marketplace is registered (from the terminal step above), it'll show up in Desktop too. If it shows as available but not installed, finish the install from Desktop's own panel instead of typing the command: click the **+** button next to the prompt box → **Plugins** → find `checklist-design` → **Install**. That GUI click works where the typed slash command doesn't.

**Already have it installed under the old name?** Earlier versions of this plugin were named `design-critique`. Run `/plugin remove design-critique` (or `design-critique@checklist-design`) first, then install as above.

### For Cursor, Codex, or other Agent Skills-compatible tools

From your project root, in a terminal:

```
npx skills add checklist-design/design-critique -a claude-code
```

The `-a claude-code` flag matters if you're also installing for Claude Code this way instead of using the plugin method above — the installer only auto-selects agents it detects as already configured on your machine, so without it, Claude Code can silently get skipped even if it's installed. Swap or add other agent names as needed, e.g. `-a cursor -a codex`.

Installed this way, the commands are `/critique` and `/audit` (not namespaced) — the generic Agent Skills tooling doesn't apply the plugin-style `checklist-design:` prefix. Same skills either way, just different command names depending on install path.

After installing, verify it actually landed where you expect:

```
npx skills list
```

**First install only:** if this is the first skill you've ever added to your tool, you may need to restart it once so it picks up the new skills directory. After that, updates apply without restarting.

### Manual copy

Copy the skill folder(s) you want into your tool's skills directory — `critique`, `audit`, or both:

**Claude Code (project-specific):**
```
cp -r skills/critique skills/audit your-project/.claude/skills/
```

**Claude Code (global — applies to all projects):**
```
cp -r skills/critique skills/audit ~/.claude/skills/
```

Other tools that support the Agent Skills format (Cursor, OpenCode, etc.) read from their own equivalent `skills/` directory — check your tool's docs for the exact path.

## Usage

Once installed, both skills activate on their own — no command to remember. Claude reads each skill's description in the background and loads whichever one matches your request, so you can just share a screenshot and ask in plain language:

```
Critique this design
Review this UI screenshot
What's wrong with this screen?
```

If you'd rather trigger it explicitly:

```
/checklist-design:critique     (plugin install, CLI terminal)
/critique                      (npx skills add / manual copy)
```

**In Claude Code Desktop**, typing `/checklist-design:critique` may not autocomplete reliably — this is a known Desktop-specific gap in discovering plugin-sourced commands. Two more reliable options there: just ask in plain language (it worked in testing even without any slash command), or use **+ → Plugins → Checklist design → critique** to invoke it directly from the menu.

Either way, it'll walk through purpose, hierarchy, layout, typography, color, accessibility, interaction, and polish — but only where relevant, and only calling out what it can actually point to in the frame.

## Auditing against a specific checklist

`critique` is a general opinion. `audit` is different — it picks (or takes) one of Checklist Design's checklists and goes through it item by item: what's there, what's missing, and whether a missing item is actually a problem or just doesn't apply here.

```
Audit this against the Login checklist
Check this screen against Checklist Design's Permissions checklist
What's missing from this cart page?
```

If you don't name a checklist, it'll find the one that best matches what you're showing it — or tell you plainly if nothing matches well, rather than forcing one. Trigger it explicitly with `/checklist-design:audit` (plugin install) or `/audit` (`npx skills add` / manual copy).

### Why a hook

Natural-language auto-invocation is reliable for pure feedback requests ("critique this screenshot"), but testing found it can lose out to Claude Code's own investigative instincts when a request also implies technical work — "critique my homepage" can send Claude straight into finding the file and starting the dev server without ever loading the skill, which means the response comes out in Claude's default voice instead of this skill's tuned one.

The plugin install includes a `UserPromptSubmit` hook that checks incoming prompts for critique- or audit-shaped language and nudges Claude toward the right skill before it starts reasoning, rather than leaving it entirely to chance. It's a plugin-only feature — the `npx skills add` and manual-copy paths don't get it, since those only install the `skills/` folder, not the plugin's hooks.

If you update the plugin and the hook doesn't seem to be firing, run `/reload-plugins` (or restart Claude Code) — hook and command changes need a reload to take effect, unlike skill content edits which apply live.

## Reviewing live pages and local dev servers

By default, the skill works from screenshots you share — paste one in and ask for feedback.

If you'd rather it capture a live URL or your own local dev server directly (e.g. "critique my homepage" while `localhost:3000` is running), it needs some way to render and screenshot a page:

- **Claude Code Desktop** ships a built-in preview browser for exactly this — you likely already have it, no setup needed.
- **Claude Code CLI, Codex, or anywhere else without a built-in preview** needs a browser tool added, e.g. the standard Playwright MCP server:

  ```
  claude mcp add playwright -- npx @playwright/mcp@latest
  ```
  ```
  codex mcp add playwright -- npx @playwright/mcp@latest
  ```

This is a one-time setup, optional, and not specific to this skill — if you've already got a browser tool configured for other things, there's nothing extra to do. Without any of the above, the skill will ask you for a screenshot instead of guessing at how a page renders.

## Grounded in Checklist Design's own checklists

Both skills pull from [Checklist Design's](https://checklist.design) 100+ published checklists, live, rather than having them baked in — so new checklists become available the moment they're published on the site, with nothing to update here.

For `critique`, this is an enhancement: when a screen clearly matches a checklist, it checks itself against that checklist's specific items and links back to it, instead of relying only on general design heuristics. If nothing matches well, it just runs as a normal critique.

For `audit`, this is the whole mechanism — there's no generic fallback, since the point is checking against a specific checklist.

Either way, it needs outbound network access to `checklist.design` (a fetch or browser tool) to do this.

## What makes this different

Most AI design feedback reads like a checklist read aloud. This skill is deliberately tuned against that: a small blocklist of "AI report" words (*effectively, leverages, optimises, streamlined*, and similar), a requirement to name at least two genuine strengths, and a rule that considerations without a specific visible cause get dropped rather than padded in.

## License

MIT — see [LICENSE](./LICENSE).

## About Checklist Design

[Checklist Design](https://checklist.design) is a UX resource platform with 100+ checklists for web, mobile, and design system work, plus a Figma plugin with an AI-powered quality checker built on this same critique approach.
