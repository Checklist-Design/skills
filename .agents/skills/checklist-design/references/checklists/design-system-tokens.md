# Tokens — Design system

The layer of a design system where defined variables are outlined across the platform to enable consistency, theming and alignment with code.

Source: https://www.checklist.design/design-system/tokens

## Items

### Three-tier token architecture
Tokens organised into primitive, semantic, and component tiers — primitives store raw values, semantic tokens describe purpose, component tokens scope decisions to a specific element

_Tip: It's okay to start with just primitives and component tokens first, and only utilise semantic for theming_

### Naming convention
A consistent, predictable naming pattern so any token name communicates its purpose without needing documentation.

_Tip: A token named blue-500 tells you the value, but a token named color-interactive-primary-default tells you when and where to use it, making that system the scalable one_

### Token documentation
Each semantic token documented with its intended use, example contexts, and what it can and cannot be used for

### Token governance
A clear rule for what constitutes a token versus a hardcoded value, and a process for reviewing and approving new tokens before they are added to the system

_Tip: New tokens should always be suggested, but have clear reasoning of purpose and scalable use to be genuinely considered_

### Design tool sync
Tokens maintained in your design tool of choice as variables

_Tip: Aim to find a way to connect your tokens to what is in code — naming convention being 1:1 is ideal for ongoing maintenance_

### Versioning and changelog
Token changes versioned and communicated in a way that teams consuming the token system can know when values change and what the impact will be on their surfaces
