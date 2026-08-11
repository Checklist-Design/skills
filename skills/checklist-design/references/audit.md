# Audit mode

Go through the matched checklist item by item and report what's there, what isn't, and — for anything absent — whether that's actually a problem. Not a scorecard read aloud: a colleague who knows the checklist telling you plainly what they'd chase down before shipping.

Read the checklist file first (see "Finding the relevant checklist" in SKILL.md). If more than one checklist clearly applies — a settings screen with a permissions section, say — audit against each, kept clearly separate. Don't blend two checklists' items into one list.

## Judging each item

Every item gets one of five calls (the markers are in "Output" below). Getting these right is most of the work:

- **Partially present** is usually the most useful call available. Use it whenever "present" would overstate and "missing" would be unfair — an error message that fires but doesn't distinguish a wrong email from a wrong password, a password field with no reveal toggle. It points at a specific improvement rather than a pass or a fail.
- **Not needed here** needs a real reason, not just an absence you'd rather not flag. Either another item on the same checklist already covers the need through a different pattern (a magic-link item and a password-field item are often alternatives, not both required), or it genuinely doesn't apply to this product (not every login needs social sign-in). If you can't articulate why it doesn't matter, it's missing, not not-needed.
- **Can't tell** is an honest answer, not a cop-out. A static screenshot with no active error can't confirm what the error state looks like. Say so rather than guessing either way.

Don't call something missing just because it isn't visible — check whether it's actually needed first. And don't invent presence: if you can't see it, you can't confirm it, however likely it is to exist somewhere.

## Output

Open with one line naming the checklist and linking to it. If the product takes a genuinely different approach to the whole category — a passwordless product against a password-oriented checklist — add a second line saying so, so the greys below read as deliberate rather than as failures.

Then a table, one row per checklist item, in the checklist's own order:

| | Item | Why |
|---|---|---|
| 🟢 | **Item name** — its description | Short reason |

**Status markers:**

| Marker | Status | |
|---|---|---|
| 🟢 | Present | it's there, doing what the item describes |
| 🟡 | Partially present | there but incomplete or weakened |
| 🔴 | Missing | not there, and it should be |
| ⚪ | Not needed here | not there, and that's fine — deliberately not a failure colour |
| ❔ | Can't tell | the screen doesn't show enough to know |

Rules that keep the table honest and readable:

- **One row per checklist item, in the checklist's order.** Never merge, split, reorder or skip items. If an item is composite ("Email and password fields") and the product has one part but not the other, that's exactly what 🟡 is for — say which part is missing in the Why column.
- **Keep item names and descriptions faithful to the checklist.** Don't paraphrase or trim them for width. Abbreviating hides what's actually being checked, which is the one thing an audit can't afford. If a description is long, it's long.
- **Every row needs a Why, including 🟢 ones** — a bare status is not useful. Keep it to a sentence; this column is where table width problems come from. Say what's weak and what would finish it (🟡), the specific reason it doesn't apply (⚪), or for 🔴 what it costs the user — "no forgot-password link" is a status, "anyone who's forgotten their password has no way back into their account from here" is the reason it matters.
- **Don't add a score, a count, or a percentage.** "4 of 7 present" invites treating ⚪ rows as failures and turns a design review into a grade.

## Beyond the checklist

The checklist bounds what you're checking, not what you're allowed to notice. If something clearly matters and isn't on the list — a heading that doesn't say what happens next, a control that's easy to miss — add it briefly at the end, flagged as your own observation rather than a checklist item. Keep it to one or two things; the audit is the main event.
