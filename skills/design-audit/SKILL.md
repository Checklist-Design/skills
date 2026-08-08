---
name: design-audit
description: Systematic audit of a UI or product design against one of Checklist Design's published checklists — goes through every item on the checklist, marks it present, missing, not needed, or unclear from what's shown, and explains which gaps actually matter. This is a completeness check, not a general design opinion. Use when the user asks to audit a screen, check it against a checklist, verify coverage, find out what's missing, or asks things like "what's missing from this checkout," "does this cover everything it needs to," or "check this against the Login checklist." For open-ended feedback or a general design review instead of a systematic check, use the design-critique skill.
license: MIT — see LICENSE
compatibility: Needs no network access — all checklist content is bundled in references/. Needs a way to see the design under review: an image already in the conversation, or a browser tool for a live URL or local dev server. Works in any Agent Skills-compatible tool; Claude Code's plugin install adds a bundled hook for reliable triggering.
metadata:
  version: "2.1.0"
  author: "Checklist Design"
---

# Checklist Audit

Go through a UI or page against one of Checklist Design's checklists, item by item, and report what's there, what's missing, and — for anything missing — whether that's actually a problem. Not a scorecard read aloud: a colleague who knows the checklist telling you plainly what they'd actually chase down before shipping.

## What you're looking at

Before auditing, work out what you're actually assessing, and say so at the start of your response:

1. **An image is already in the conversation** — a screenshot, a pasted mockup, a Figma export. Use it directly.
2. **No image, but a URL or local address is mentioned** — a live site, or something running locally (e.g. `localhost:3000`). If a browser tool is available, navigate to it and capture a screenshot before auditing. If the address isn't stated but it's clearly implied, ask which URL or port rather than guessing at it.
3. **No image, no URL, and no way to capture one** — don't audit from markup or component code alone; a page can look fine in code and be visually broken, or the reverse. Ask for a screenshot instead of guessing at the rendered result.

## Picking the checklist

An audit needs a checklist to audit against — unlike a general critique, there's no generic fallback here.

Every checklist ships inside this skill as a file. There is nothing to fetch and no network involved — read the files.

1. Read `references/index.md` (alongside this SKILL.md). It lists all Checklist Design checklists by category, each with a description and its reference file name.
2. **If the person names a checklist** ("audit this against Login," "check it against Permissions"), find it in the index. Note that some names appear in more than one category — a "Login" exists for Website, Web app, and Mobile app, and their items differ. Pick the category matching what you're actually looking at, and say which one you used.
3. **If they didn't name one**, compare what you're looking at against the index's names and descriptions, the same way the design-critique skill does. Pick the checklist that plausibly applies.
4. **If more than one clearly applies** (a settings screen with a permissions section, say), audit against each, kept clearly separate — don't blend two checklists' items into one list.
5. **If nothing matches well and nothing was named**, say so plainly and name the closest candidates from the index instead of forcing a weak match or picking one silently.
6. Once you've picked, read its file: `references/checklists/{file-name}.md`, using the file name given in the index. Each file carries the checklist's full items and its page URL.

Never fetch checklist content from the web, and never web-search for it. The bundled files are the authoritative source and they are always present. If you genuinely can't read them, say that plainly rather than substituting checklist content from anywhere else — an audit against the wrong source is worse than no audit.

## Judging each item

Go through every item on the checklist. For each one, decide:

- **Present** — it's visibly there and doing what the item describes.
- **Missing** — it's not there, and there's no reason it shouldn't be.
- **Not needed here** — it's not there, but that's fine. Two common reasons: another item on the same checklist already covers the same need through a different pattern (a magic-link item and a password-field item are often alternatives to the same problem, not both required at once), or the item just doesn't apply to this product's context (not every login needs social sign-in; not every cart needs gift wrapping).
- **Can't tell** — the screen doesn't show enough to know. A static screenshot with no active error can't confirm what the error state looks like. Say so rather than guessing either way.

Don't call something missing just because it isn't visible — check whether it's actually needed before deciding that's a real gap. And don't invent presence: if you can't see it, you can't confirm it, regardless of how likely it is to exist somewhere else in the product.

## Output

When this skill is wired into an app, API, or automated pipeline, return strict JSON in this shape:

```json
{
  "checklist": { "name": "Login", "url": "https://www.checklist.design/mobile/login" },
  "items": [
    { "title": "Passwordless sign-in (magic link)", "status": "present" },
    { "title": "Password field", "status": "not needed", "reason": "Magic link already covers this — not both required." },
    { "title": "Error states", "status": "cant_tell", "reason": "No error state is shown in this screenshot." },
    { "title": "Social sign-in", "status": "missing", "reason": "No alternative sign-in method is offered." }
  ],
  "summary": "One or two plain-language sentences on the overall state."
}
```

`status` is one of `present`, `missing`, `not_needed`, `cant_tell`. Include a short `reason` for anything that isn't `present` — a bare status without one isn't useful. No markdown inside the JSON values — raw text only.

When used conversationally, don't dump a table. Group it in prose the way you'd actually say it out loud: what's covered, what's genuinely missing, what's missing but doesn't matter and why, and what you couldn't tell from this screen. Open with which checklist you're using and a link to it.

## Tone

- Write how a designer talks, not how a compliance report reads. State the call plainly — "that's covered," "that one's actually missing," "you don't need that one" — rather than hedging with "might," "could potentially," or "it's possible that."
- Short, direct sentences. An em dash or a casual connector like "though" or "that said" is fine.
- Avoid words like: *effectively, maintains, communicates, demonstrates, facilitates, leverages, optimises, robust, streamlined*.
- Don't over-explain a clean "present" — say it's there and move to the next one.

## Accuracy

- A "not needed" call needs a real reason, not just an absence you'd rather not flag — either a specific alternative item that covers it, or a specific reason it doesn't apply to this product. If you can't articulate why it doesn't matter, it's "missing," not "not needed."
- Respect standard UI patterns as a factor in "not needed" calls the same way the design-critique skill does — don't invent a gap around something that's a deliberate, conventional choice.
- If most of a checklist reads "not needed" because the product takes a genuinely different approach to the whole category (like a passwordless product against a password-oriented checklist), say that plainly up front instead of working through seven near-identical "not needed" calls one by one.
