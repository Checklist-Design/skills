# Audit Log — Web app

A screen that provides a chronological record of significant actions taken within a product, who did what, and when.

Source: https://www.checklist.design/web-app/audit-log

## Items

### Event list
A table of logged events showing the action performed, the user who performed it, and a timestamp

_Tip: Admins investigating an issue almost always start from the present and work backwards, so recent-first is the natural default_

### Actor identification
The name and identifier of the user who triggered each event, including system-generated actions

_Tip: Display names change over time, so logging the user ID alongside the name keeps the record accurate when users update their profiles_

### Event type
A categorised label for what kind of action was taken (login, permission change, deletion, export)

### Affected resource
The specific record, file, or setting that was changed and what had been changed

_Tip: Linking to the affected resource from the log entry lets admins investigate in context rather than hunting for the record separately_

### Date range filter
The ability to narrow the log to a specific time period.

### Search and filter
The ability to filter by user, event type, or affected resource to narrow down

### Export
The ability to download the audit log as a CSV for compliance reporting or external review
