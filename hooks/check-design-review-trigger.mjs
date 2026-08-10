#!/usr/bin/env node
// UserPromptSubmit hook for the checklist-design plugin.
//
// Why this exists: natural-language auto-invocation is reliable for pure
// requests ("critique this screenshot", "audit this against Login"), but
// loses out to Claude Code's own investigative instincts when the request
// also implies technical legwork ("critique my homepage" -> find the file,
// start the dev server, get past auth). This runs before Claude starts
// reasoning and deterministically flags design-review-shaped requests,
// rather than leaving it entirely to chance.
//
// The skill picks its own mode (audit vs critique), so this only needs to
// point at the skill — it deliberately doesn't try to choose for it.
//
// Fails silently on any error — a bug here should never block the user's
// actual prompt.

let raw = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  raw += chunk;
});
process.stdin.on("end", () => {
  try {
    const input = JSON.parse(raw || "{}");
    const prompt = String(input.prompt || "");

    const isExplicitCommand = /^\s*\//.test(prompt);

    const triggerPattern =
      /\b(critique|audit|design (review|feedback)|review (my|this|the) (page|screen|design|ui|homepage|dashboard|interface|layout|mockup)|feedback on (my|this|the)?\s*(design|page|ui|screen|layout)|how (does|is) (this|my) (look|design)|what('s| is) missing (from|on)|check (this|my|the) .* against|does (this|my|the) .* (cover|have|include))\b/i;

    if (!isExplicitCommand && triggerPattern.test(prompt)) {
      const output = {
        hookSpecificOutput: {
          hookEventName: "UserPromptSubmit",
          additionalContext:
            "This request looks like it wants the checklist-design skill (skills/checklist-design/SKILL.md) — design review grounded in Checklist Design's checklists, with an audit mode and a critique mode. Follow that skill, including its 'what you're looking at' step and its own mode selection, even if the request also involves finding a file or starting a dev server first.",
        },
      };
      process.stdout.write(JSON.stringify(output));
    }
  } catch (err) {
    // Swallow errors — see file header.
  }
  process.exit(0);
});
