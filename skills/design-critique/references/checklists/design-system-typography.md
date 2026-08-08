# Typography — Design system

The type layer of a design system that defines a scale, hierarchy, and set of text styles that is consistent, accessible, and expressive across the full range of product contexts

Source: https://www.checklist.design/design-system/typography

## Items

### Type scale
A defined set of font sizes with a consistent ratio between them, covering everything from captions to display headings

_Tip: A modular scale (1.25, 1.333, 1.5 ratio) produces a more harmonious hierarchy than arbitrary size choices_

### Semantic text styles
Named styles that describe role rather than size so usage is driven by meaning, not pixel values e.g. display-large, body-default, label-small, caption

_Tip: Style names chosen by size — 24px, 18px, 14px — consistently result in designers selecting styles by measurement rather than role, which makes the system harder to evolve when the scale changes._

### Typeface selection and loading
The chosen typefaces detailing style and weight e.g. Inclusive Sans Medium

### Line height per style
Line height defined explicitly for every text style since tightly spaced headings and readable body text require different values

_Tip: Similar style groups follow a consistent line height e.g. 1.5 for body text, 1.2 for heading and 1.1 for display_

### Letter spacing per style
Letter spacing defined per style where needed

_Tip: Similar to line height, where style groups often following a consistent pattern_

### Responsive type behaviour
How text styles respond to viewport size, whether through fluid type scaling, breakpoint-based overrides, or fixed sizes with responsive layout compensation

### Minimum readable size
The smallest text size in use across the system, and how readability at that size is validated in the actual rendering environment

_Tip: Consider minimum size between desktop and mobile differently_

### Accessibility responsiveness
How text styles behave at 200% browser zoom, and whether any style communicates meaning through colour variation alone
