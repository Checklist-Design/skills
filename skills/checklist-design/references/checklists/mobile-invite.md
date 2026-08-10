# Invite — Mobile app

The flow for adding collaborators or members to a shared space with role assignment and pending invite management.

Source: https://www.checklist.design/mobile/invite

## Items

### Email invite
The primary method of inviting someone by entering their email address directly

### Role or permission selection
A control for setting what the invited person will be able to see and do once they accept

_Tip: Show what each role can and cannot do before the invite is sent, since this prevents over-permissioning and the back-and-forth of revoking access later. Keep roles to three or fewer where possible_

### Contact picker
Access to the device's contacts list for finding people to invite without typing a full address

_Tip: On iOS this requires explicit permission. Prime the user with a custom screen before the system prompt, since 'Find people you already know' performs better than asking cold_

### Bulk invite
A way to add multiple people at once, by entering several addresses or pasting a list

_Tip: Support comma-separated and line-break-separated input, since users are likely to paste from spreadsheets or threads_

### Pending invites + actions
A list of sent invitations that have not yet been accepted, with the option to resend or revoke each one

_Tip: Show when each invite was sent and when it expires for context on most recent invite sent_

### Shareable invite link
A link that grants access to anyone who opens it, with a configurable permission level

_Tip: Include an expiry option and a usage limit on the link for security_

### Seat or member limit
A visible count of remaining available seats, surfaced before the user reaches the plan's member cap

### Access scope summary
A clear statement of what the invited person will be able to see and do, shown to the sender before confirming
