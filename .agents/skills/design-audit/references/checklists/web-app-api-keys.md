# API Keys — Web app

A screen where users generate and manage API keys and other developer-facing credentials needed to integrate the product programmatically.

Source: https://www.checklist.design/web-app/api-keys

## Items

### Key list
A table of all existing API keys showing name, creation date, last used date, and permissions

_Tip: Only show the last few characters after creation for identification without risk of revealing entire key_

### Generate key
A clear way to create a new API key, with the option to give it a name and set its scope or permissions

_Tip: Unnamed keys become impossible to manage as the list grows, so requiring a name before generation is useful_

### Copy key on creation
The full key revealed exactly once immediately after creation, with a prominent copy button

_Tip: Users need to be explicitly told this is the only time the key will be shown in full, following this it will be impossible to copy again_

### Key permissions or scopes
The ability to limit what each key can access (read-only, specific resources, or full access)

_Tip: Least-privilege access is a security best practice, and when fine-grained scopes are easier to set than full-access, more users choose them_

### Revoke key
A clear way to immediately invalidate a key, with a confirmation step before proceeding.

_Tip: Revocation is instant and irreversible, so the confirmation message needs to communicate this clearly, since there is no undo_

### Documentation link
A direct link to API documentation so developers can get started without having to search for it
