# Spacing / Grid — Design system

The spatial layer of a design system, defining a consistent scale for spacing, a grid for layout, and the rules that make both feel deliberate and coherent across all surfaces.

Source: https://www.checklist.design/design-system/spacing-and-grid

## Items

### Spacing scale
A defined set of spacing values (typically base-4 or base-8, covering 4, 8, 12, 16, 24, 32, 48, 64, 96) used for all margin, padding, and gap decisions

_Tip: A base-8 scale is the most commonly adopted because it divides evenly across common device pixel ratios and helps avoid exceptions being made_

### Semantic spacing tokens
Named tokens for spacing that describe purpose (space-component-padding-sm, space-layout-section-gap) so spacing decisions are intentional, not arbitrary

_Tip: Raw spacing values appearing as hardcoded numbers in components make global spacing changes significantly harder, since each instance requires a separate update rather than a single token edit_

### Column grid
A defined column grid for each major breakpoint (typically 4 columns mobile, 8 tablet, 12 desktop) with gutter and margin values specified

### Breakpoints
A named set of breakpoints (sm, md, lg, xl) that are shared between design and code, so responsive behaviour is described in consistent terms across both disciplines

_Tip: Breakpoint names tied to device types (phone, tablet, desktop) tend to age poorly as screen sizes shift. Content-based naming (narrow, mid, wide) describes viewport behaviour rather than hardware categories_

### Component vs layout spacing
A clear distinction between spacing used inside components and spacing used to compose layouts, since different scales often apply to each

_Tip: Buttons that use the same spacing tokens as page-level section gaps, and vice versa, tend to produce compositions where internal padding and layout rhythm feel mismatched_

### Density variants
Where applicable, defined compact and comfortable density modes, common in data-heavy products where users need to choose between information density and breathing room

### Baseline grid alignment
Text baselines and component heights designed to align to the base unit, so stacking elements produces predictable, harmonious vertical rhythm
