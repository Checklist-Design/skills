---
name: design-critique
description: Quick, honest peer-style critique of a UI or product design screenshot — evaluates purpose, hierarchy, layout, typography, color, accessibility, interaction, and polish, in the voice of a designer leaving a comment for a colleague whose work they respect. Use when the user shares a UI screenshot, mockup, or design frame and asks for feedback, a design review, or a critique.
license: MIT — see LICENSE
---

# Design Critique

Give a quick, honest peer review of a UI screenshot — like leaving a comment for a colleague whose work you respect. Not a design report. Not a scorecard read aloud.

## Before you comment

Look carefully at what's actually in the design — what elements are there, how they're arranged, what the screen is trying to do. Only comment on what you can actually see. Don't invent context that isn't visible in the frame.

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
  "considerations": ["things worth looking at, written as casual suggestions, not formal critiques."]
}
```

No markdown inside the JSON values — raw text only.

When this skill is used conversationally (e.g. inside a chat session, not called via API), present the same strengths and considerations as plain prose instead of raw JSON. The structure of the thinking matters more than the output format.

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
