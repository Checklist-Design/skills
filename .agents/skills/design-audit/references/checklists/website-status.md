# Status — Website

Source: https://www.checklist.design/website/status

## Items

### Component status list
Each major service or component (API, dashboard, integrations, notifications) shown with its current operational state

_Tip: A single 'All systems operational' row on its own is less useful than per-component status, since users experiencing an issue with one part of the product need to know if it is on their end or yours_

### Live incident updates
During an active incident, timestamped updates posted in sequence (identifying the issue, confirming investigation, and reporting resolution)

_Tip: The cadence of updates matters more than their length — a brief 'investigating' post every 30 minutes is far more reassuring than silence followed by an explanation_

### Incident history
An archive of past incidents with dates, duration, affected components, and a brief post-mortem

### Uptime metrics
Historical uptime percentages per component, typically covering a rolling 90-day window

### Scheduled maintenance
Upcoming planned maintenance windows listed in advance with estimated duration and which components will be affected

_Tip: Scheduled maintenance announced at least 72 hours in advance (and communicated via the subscription channel) is far better absorbed than a surprise_

### Subscribe to updates
An email, SMS, or webhook subscription option so users are notified of incidents without having to check the page themselves

### Separate domain
The status page hosted on a domain independent of the main infrastructure, so it remains accessible when the product itself is down

_Tip: A status page that goes offline during an outage is the single most common implementation failure. A separate hosting arrangement is the only reliable solution_
