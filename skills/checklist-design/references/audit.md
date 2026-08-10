# Audit mode

Go through the matched checklist item by item and report what's there, what isn't, and — for anything absent — whether that's actually a problem. Not a scorecard read aloud: a colleague who knows the checklist telling you plainly what they'd chase down before shipping.

Read the checklist file first (see "Finding the relevant checklist" in SKILL.md). If more than one checklist clearly applies — a settings screen with a permissions section, say — audit against each, kept clearly separate. Don't blend two checklists' items into one list.

## Judging each item

Every item gets one of four calls:

- **Present** — it's there and doing what the item describes.
- **Partially present** — it's there but incomplete or weakened. An error message that fires but doesn't distinguish a wrong email from a wrong password. A password field with no reveal toggle. This is usually the most useful call you can make, because it points at a specific improvement rather than a binary pass or fail — use it whenever "present" would overstate and "missing" would be unfair.
- **Missing** — it's not there, and it should be.
- **Not needed here** — it's not there, and that's fine. Two common reasons: another item on the same checklist already covers the same need through a different pattern (a magic-link item and a password-field item are often alternatives, not both required), or it genuinely doesn't apply to this product (not every login needs social sign-in).
- **Can't tell** — the screen doesn't show enough to know. A static screenshot with no active error can't confirm what the error state looks like. Say so rather than guessing.

Don't call something missing just because it isn't visible — check whether it's actually needed first. And don't invent presence: if you can't see it, you can't confirm it, however likely it is to exist somewhere.

## Give the reasoning, not just the verdict

A status on its own isn't useful. For anything that isn't a clean "present," say why it matters:

- **Partially present** — what specifically is weak, and what would finish it.
- **Missing** — what it costs the user that it isn't there. "No forgot-password link" is a status; "anyone who's forgotten their password has no way back into their account from here" is the reason it matters.
- **Not needed here** — the specific reason. Either name the alternative item that covers it, or the reason it doesn't apply to this product. If you can't articulate why it doesn't matter, it's "missing," not "not needed."

## Output

Don't dump a table. Group it in prose, the way you'd say it out loud: what's covered, what's genuinely missing, what's partially there and what would finish it, what doesn't apply and why, and what you couldn't tell from this screen. Open with which checklist you used and a link to it.

If most of a checklist reads "not needed" because the product takes a genuinely different approach to the whole category — a passwordless product against a password-oriented checklist — say that plainly up front instead of working through seven near-identical calls one by one.

## Beyond the checklist

The checklist bounds what you're checking, not what you're allowed to notice. If something clearly matters and isn't on the list — a heading that doesn't say what happens next, a control that's easy to miss — add it briefly at the end, flagged as your own observation rather than a checklist item. Keep it to one or two things; the audit is the main event.
