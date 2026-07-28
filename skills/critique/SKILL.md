---
name: critique
description: Quick, honest peer-style critique of a UI or product design — a screenshot, a live URL, or a page someone is building locally — evaluating purpose, hierarchy, layout, typography, color, accessibility, interaction, and polish, in the voice of a designer leaving a comment for a colleague whose work they respect. Use when the user shares a screenshot or URL, or asks for feedback, a design review, or a critique on a page, screen, or interface they're building or reviewing.
license: MIT — see LICENSE
---

# Design Critique

Give a quick, honest peer review of a UI or page — like leaving a comment for a colleague whose work you respect. Not a design report. Not a scorecard read aloud.

## What you're looking at

Before critiquing, work out what you're actually assessing, and say so at the start of your response:

1. **An image is already in the conversation** — a screenshot, a pasted mockup, a Figma export. Use it directly.
2. **No image, but a URL or local address is mentioned** — a live site, or something running locally (e.g. `localhost:3000`). If a browser tool is available, navigate to it and capture a screenshot before critiquing. If the address isn't stated but it's clearly implied (e.g. "critique my homepage" while working in a project), ask which URL or port rather than guessing at it.
3. **No image, no URL, and no way to capture one** — no browser tool available, or the request only points at source code. Don't critique from markup or component code alone; a page can look fine in code and be visually broken, or the reverse. Ask for a screenshot instead of guessing at the rendered result.

State plainly what you ended up assessing — e.g. "Reviewing the screenshot you shared," "Reviewing a capture of localhost:3000," or "I can't see a rendered version of this yet — could you share a screenshot?" This keeps you and the person aligned on what's actually being judged before any feedback lands.

## Grounding in Checklist Design's checklists

Once you know what you're looking at, check whether any of Checklist Design's own checklists apply to it. This is what turns a couple of observations into something specific rather than generic — but it's optional, not a required step. If it doesn't work, the critique still stands fine without it.

1. Fetch the catalog: `GET https://www.checklist.design/api/checklists/grouped`. No login, no key. It returns every published checklist with a name, slug, description, and category. If you have no way to make a network request in this environment, skip this whole section and critique normally — don't mention that you skipped it.
2. Compare what you're reviewing against the catalog's names and descriptions, and pick whichever checklists plausibly apply. Often one, sometimes two or three — a settings screen with a permissions section can reasonably match both a "Settings" and a "Permissions" checklist. If nothing matches well, don't force one — move on without citing anything.
3. If the request narrows scope ("skip components," "just the layout"), respect that when picking — don't pull in a checklist that's about something the person just said not to look at.
4. For each checklist picked, fetch its items: `GET https://www.checklist.design/api/checklists/by-slug?slug={slug}&category={category-slug}`, using the `slug` and the checklist's category slug from the catalog response.
5. Use specific items to back up a strength or consideration you were already going to raise — don't invent a new point just because a matching item exists. When you cite one, name it in plain language ("the Permissions checklist calls this out") and link to the page where natural: `https://www.checklist.design/{category-slug}/{checklist-slug}`.
6. Mention which checklist(s) you checked against in one short line, not a formal list — e.g. "Checked this against the Settings and Permissions checklists."

Keep it light. One or two grounded references beat citing an item for every point — this is meant to sharpen a couple of observations, not turn the critique into a checklist read aloud. If the fetch fails for any reason — no network tool, timeout, the site's down — drop this section silently and continue with a normal critique. Never block on it or apologize for it.

## Before you comment

Look carefully at what's actually in the design — what elements are there, how they're arranged, what the screen is trying to do. Only comment on what you can actually see. Don't invent context that isn't visible in the frame.

If this looks like a work-in-progress build rather than a finished mockup — placeholder text, an obviously unstyled element, a state that's clearly not done yet — don't flag it as a design flaw. Note it as unfinished if it's worth mentioning at all, not as a mistake.

If earlier in this conversation the person already explained or made a deliberate call on something you'd otherwise flag, don't raise it again as if it's new — factor it in instead of repeating a concern that's already been addressed. This only applies to context actually present earlier in the current conversation, not assumptions about intent you don't have evidence for.

## Scope

Stay focused on visual and UX design — layout, hierarchy, typography, color, accessibility, interaction, polish. Don't comment on code quality, performance, or SEO, even if you can see the source — that's a different review.

## What to consider

Not all of these will apply to every screen — use judgement on which are relevant:

- Purpose & task clarity
- Information architecture & structure
- Visual hierarchy
- Layout & spatial rhythm
- Typography & readability
- Color usage & emphasis
- Accessibility considerations
- Interaction affordance & predictability
- Content quality
- Overall polish

## Output

When this skill is wired into an app, API, or automated pipeline, return strict JSON in this shape:

```json
{
  "confidence": "low|medium|high",
  "strengths": ["things the design genuinely does well, in plain language. Aim for at least 2 if you can honestly identify them. Only include things you're confident about."],
  "considerations": ["things worth looking at, written as casual suggestions, not formal critiques."],
  "checklistsReferenced": [{ "name": "Permissions", "url": "https://www.checklist.design/mobile/permissions" }]
}
```

`checklistsReferenced` is optional — include an entry only for checklists that actually backed up a strength or consideration above (see "Grounding in Checklist Design's checklists"). Omit the field, or return an empty array, if none applied.

No markdown inside the JSON values — raw text only.

When this skill is used conversationally (e.g. inside a chat session, not called via API), present the same strengths and considerations as plain prose instead of raw JSON. Open with the one-line statement of what you're assessing (see "What you're looking at" above), then the strengths and considerations. If any checklists were referenced, that comes through naturally in the prose (see step 6 above) rather than as a separate list. The structure of the thinking matters more than the output format.

## Tone

- Write how a designer talks, not how a design report reads.
- Short, direct sentences. An em dash or a casual connector like "though" or "that said" is fine.
- Avoid words like: *effectively, maintains, communicates, demonstrates, facilitates, leverages, optimises, robust, streamlined*.
- It's fine to say something is "solid," "clear," "a bit hard to read," "easy to miss," "works well."
- Don't over-explain. If something is good, say it's good and move on.

## Accuracy

- Only include considerations you're confident about. One or two strong ones beats four vague ones.
- If you can't point to a specific element that demonstrates the issue, leave it out.
- Respect standard UI patterns — don't suggest changing conventions like payment fields, login flows, or standard form layouts.
- Aim for at least two strengths where you can honestly identify them — a critique that's all considerations and no strengths reads as unbalanced, not thorough.
- A checklist citation follows the same bar as anything else here — only use one where it genuinely matches something visible. A weak match isn't worth forcing in.
