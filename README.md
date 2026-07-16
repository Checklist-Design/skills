# Design Critique

A skill for AI coding agents: a quick, honest peer review of a UI screenshot — written in the voice of a designer leaving a comment for a colleague, not a design report.

Originally built as the prompt behind the AI quality checker in the [Checklist Design](https://checklist.design) Figma plugin, and refined through real usage before being packaged here as a standalone skill.

Skills follow the [Agent Skills](https://agentskills.io/) format, so this works with any harness that supports it (Claude Code, Cursor, and others).

## Installation

### Option 1: skills.sh installer (recommended)

From your project root:

```
npx skills add <your-username>/design-critique
```

### Option 2: Manual copy

Copy the skill folder into your tool's skills directory:

**Claude Code (project-specific):**
```
cp -r skills/design-critique your-project/.claude/skills/
```

**Claude Code (global — applies to all projects):**
```
cp -r skills/design-critique ~/.claude/skills/
```

Other tools that support the Agent Skills format (Cursor, OpenCode, etc.) read from their own equivalent `skills/` directory — check your tool's docs for the exact path.

## Usage

Once installed, the skill activates automatically when you share a UI screenshot, mockup, or design frame and ask for feedback:

```
Critique this design
Review this UI screenshot
What's wrong with this screen?
```

It'll walk through purpose, hierarchy, layout, typography, color, accessibility, interaction, and polish — but only where relevant, and only calling out what it can actually point to in the frame.

## What makes this different

Most AI design feedback reads like a checklist read aloud. This skill is deliberately tuned against that: a small blocklist of "AI report" words (*effectively, leverages, optimises, streamlined*, and similar), a requirement to name at least two genuine strengths, and a rule that considerations without a specific visible cause get dropped rather than padded in.

## License

MIT — see [LICENSE](./LICENSE).

## About Checklist Design

[Checklist Design](https://checklist.design) is a UX resource platform with 100+ checklists for web, mobile, and design system work, plus a Figma plugin with an AI-powered quality checker built on this same critique approach.
