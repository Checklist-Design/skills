# Activity Feed — Mobile app

A chronological stream of actions taken by users and the system — a browsable record of what has happened, distinct from notifications that demand attention.

Source: https://www.checklist.design/mobile/activity-feed

## Items

### Feed item anatomy
The consistent structure of each entry: who did what, to which object, and when

_Tip: When actor, action, and object occupy the same position across all item types, users can scan the feed without reading every word_

### Relative timestamps
Times shown in human-readable relative format ('just now', '2 minutes ago', 'yesterday') for recent activity

_Tip: Switch to absolute dates for items older than 7 days. '3 weeks ago' stops being useful when a user needs to pinpoint when something happened_

### Avatar and attribution
A visual identifier (avatar or icon) for the person or system responsible for each activity item

_Tip: System-generated events need a distinct visual treatment so users can tell human activity from automated actions without reading the description_

### Object link
Each feed item linking directly to the resource it describes (the document, task, or message that was acted upon)

_Tip: The feed is most useful when it doubles as a navigation shortcut. A user who taps an activity item should arrive at exactly the thing that changed, not a category view_

### Activity grouping
Related actions from the same actor or on the same object consolidated into a single item rather than listed individually.

_Tip: 'Sarah edited 6 items' is far less noisy than six separate edit events. Group aggressively — uncollapsed feeds in active workspaces become unreadable quickly._

### Filter controls
A way to narrow the feed by actor, action type, or time period.

_Tip: When the feed spans a large team or a long period, filtering is the difference between a useful audit trail and a wall of noise._

### Empty state
Helpful content when the feed has no items — for new users who have not yet generated activity, and for filtered views that return nothing.

_Tip: A new user's empty feed is a prompt, not a gap — use it to suggest the first action that will generate activity._

### Load more
A mechanism for viewing older activity beyond the initial page load.

_Tip: Infinite scroll works against users who treat the feed as a reference — a 'Load more' button preserves scroll position so they can return to where they were._
