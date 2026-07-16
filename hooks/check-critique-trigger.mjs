#!/usr/bin/env node
// UserPromptSubmit hook for the checklist-design plugin.
//
// Why this exists: the critique skill's natural-language auto-invocation
// is reliable for pure feedback requests ("critique this screenshot"), but
// loses out to Claude Code's own investigative instincts when the request
// also implies technical legwork ("critique my homepage" -> find the file,
// start the dev server, get past auth). This hook runs before Claude starts
// reasoning and deterministically flags critique-shaped requests, rather
// than leaving it entirely to chance.
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
      /\b(critique|design (review|feedback)|review (my|this|the) (page|screen|design|ui|homepage|dashboard|interface|layout|mockup)|feedback on (my|this|the)?\s*(design|page|ui|screen|layout)|how (does|is) (this|my) (look|design))\b/i;

    if (!isExplicitCommand && triggerPattern.test(prompt)) {
      const output = {
        hookSpecificOutput: {
          hookEventName: "UserPromptSubmit",
          additionalContext:
            "This request looks like it wants the checklist-design:critique skill (skills/critique/SKILL.md) — a quick, honest peer-style UI/UX critique. Use that skill's approach, including its 'what you're looking at' step, even if the request also involves finding a file or starting a dev server first.",
        },
      };
      process.stdout.write(JSON.stringify(output));
    }
  } catch (err) {
    // Swallow errors — see file header.
  }
  process.exit(0);
});
