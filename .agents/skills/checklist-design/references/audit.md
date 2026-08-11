# Audit mode

Go through the matched checklist item by item and report what's there, what isn't, and — for anything absent — whether that's actually a problem. Not a scorecard read aloud: a colleague who knows the checklist telling you plainly what they'd chase down before shipping.

Read the checklist file first (see "Finding the relevant checklist" in SKILL.md). If more than one checklist clearly applies — a settings screen with a permissions section, say — audit against each, kept clearly separate. Don't blend two checklists' items into one list.

## What you can work from

A screenshot, a live page, a source file, or any mix of them. Source plus a picture is strongest — the source shows the whole page including what sits below the fold, and the picture shows what actually renders.

**Before writing anything, work out what your input can actually answer.** Go through the checklist and sort the items:

- **What's on the page** — "is there an origin story", "is there a forgot-password link", "is there a team section". Source answers these well, often better than a screenshot, since a screenshot only shows one screenful and misses everything further down.
- **How it looks and behaves** — "is the contrast strong enough", "is the button easy to spot", "does the hover state read". Source can show a rule exists but not whether it works on screen. These need a picture.

If several items fall in the second group and all you have is source, say so above the table, on its own line, before anything else:

> ⚠️ Four of these seven are about how the page looks rather than what's on it. I can see the code is there, but not whether it works on screen — a screenshot would let me look properly and give you a straight answer on those.

Say it plainly, put it where they'll see it, and don't apologise for it. You're telling them what you can and can't see, which is useful information.

**If almost nothing can be answered** — a component checklist that's mostly about appearance, and all you have is a `.tsx` file — don't produce a table of question marks. Say that most of this checklist is about how the thing looks, and ask for a screenshot before going further. A table full of shrugs is worse than asking.

## Judging each item

Every item gets one of five markers (listed under "Output" below). Getting these right is most of the work:

- **Partially present** is usually the most useful thing you can say. Use it whenever "present" would overstate and "missing" would be unfair — an error message that fires but doesn't distinguish a wrong email from a wrong password, a password field with no reveal toggle. It points at a specific improvement rather than a pass or a fail.
- **Not needed here** needs a real reason, not just an absence you'd rather not flag. Either another item on the same checklist already covers the need through a different pattern (a magic-link item and a password-field item are often alternatives, not both required), or it genuinely doesn't apply to this product (not every login needs social sign-in). If you can't articulate why it doesn't matter, it's missing, not not-needed.
- **Can't tell** is an honest answer, not a cop-out — but say *why*, because there are two different reasons and only one of them is fixable. Either you couldn't see it from what you were given (a screenshot or the source file would settle it), or the design genuinely doesn't show it here (a static screenshot with no error showing can't tell you what the error state looks like, and another screenshot wouldn't help). Those need different wording.

Don't call something missing just because it isn't visible — check whether it's actually needed first. And don't invent presence: if you can't see it, you can't confirm it, however likely it is to exist somewhere.

## Output

Open with one line naming the checklist and linking to it. If the product takes a genuinely different approach to the whole category — a passwordless product against a password-oriented checklist — add a second line saying so, so the ⚪ rows below read as deliberate choices rather than as failures.

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
| ❔ | Can't tell | what you were given doesn't show enough to know |

Rules that keep the table honest and readable:

- **One row per checklist item, in the checklist's order.** Never merge, split, reorder or skip items. If an item is composite ("Email and password fields") and the product has one part but not the other, that's exactly what 🟡 is for — say which part is missing in the Why column.
- **Keep item names and descriptions faithful to the checklist.** Don't paraphrase or trim them for width. Abbreviating hides what's actually being checked, which is the one thing an audit can't afford. If a description is long, it's long.
- **Every row needs a Why, including 🟢 ones** — a bare status is not useful. Keep it to a sentence; this column is where table width problems come from. Say what's weak and what would finish it (🟡), the specific reason it doesn't apply (⚪), or for 🔴 what it costs the user — "no forgot-password link" is a status, "anyone who's forgotten their password has no way back into their account from here" is the reason it matters.
- **❔ rows say whether more would help.** "I can't see this in the code — a screenshot would show me" is worth acting on. "There's no error showing here" isn't, and a screenshot wouldn't change it. Make clear which one it is.
- **Don't add a score, a count, or a percentage.** "4 of 7 present" invites treating ⚪ rows as failures and turns a design review into a grade.

If any rows came out ❔ only because of what you could see, close with one line naming them and what would settle it — "a screenshot of the hover state would sort the last two." Make the next step obvious rather than leaving them to work it out.

## Beyond the checklist

The checklist bounds what you're checking, not what you're allowed to notice. If something clearly matters and isn't on the list — a heading that doesn't say what happens next, a control that's easy to miss — add it briefly at the end, flagged as your own observation rather than a checklist item. Keep it to one or two things; the audit is the main event.
