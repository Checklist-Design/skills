#!/usr/bin/env node
// UserPromptSubmit hook for the checklist-design plugin.
//
// Why this exists: natural-language auto-invocation is reliable for pure
// requests ("critique this screenshot", "audit this against Login"), but
// loses out to Claude Code's own investigative instincts when the request
// also implies technical legwork ("critique my homepage" -> find the file,
// start the dev server, get past auth). This hook runs before Claude starts
// reasoning and deterministically flags critique- or audit-shaped requests,
// rather than leaving it entirely to chance.
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

    // Checked first — "audit" and its phrasing are specific enough that a
    // match here should win over the broader critique pattern below.
    const auditPattern =
      /\b(audit|check (this|my|the) .* against|compare (this|my|the) .* (to|against)|what('s| is) missing (from|on)|does (this|my|the) .* (have|include)|checklist compliance|coverage (check|against))\b/i;

    const critiquePattern =
      /\b(critique|design (review|feedback)|review (my|this|the) (page|screen|design|ui|homepage|dashboard|interface|layout|mockup)|feedback on (my|this|the)?\s*(design|page|ui|screen|layout)|how (does|is) (this|my) (look|design))\b/i;

    let additionalContext = null;

    if (!isExplicitCommand && auditPattern.test(prompt)) {
      additionalContext =
        "This request looks like it wants the checklist-design:design-audit skill (skills/design-audit/SKILL.md) — a systematic, item-by-item check against one of Checklist Design's checklists. Use that skill's approach, even if the request also involves finding a file or starting a dev server first.";
    } else if (!isExplicitCommand && critiquePattern.test(prompt)) {
      additionalContext =
        "This request looks like it wants the checklist-design:design-critique skill (skills/design-critique/SKILL.md) — a quick, honest peer-style UI/UX critique. Use that skill's approach, including its 'what you're looking at' step, even if the request also involves finding a file or starting a dev server first.";
    }

    if (additionalContext) {
      const output = {
        hookSpecificOutput: {
          hookEventName: "UserPromptSubmit",
          additionalContext,
        },
      };
      process.stdout.write(JSON.stringify(output));
    }
  } catch (err) {
    // Swallow errors — see file header.
  }
  process.exit(0);
});
