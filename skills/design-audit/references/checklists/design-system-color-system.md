# Color System — Design system

The color layer of a design system — defining a palette that is purposeful, accessible, themeable, and expressed as tokens rather than raw values.

Source: https://www.checklist.design/design-system/color-system

## Items

### Primitive palette
A base set of named color ramps (blue-100 through blue-900, neutral-0 through neutral-1000) that serves as the raw material for all semantic decisions

_Tip: Systems where components reference primitive values directly are significantly harder to theme — a color change requires updating each component individually rather than a single token definition_

### Semantic color tokens
Named tokens that describe purpose rather than appearance so the system can be reskinned without touching components e.g. color-background-primary, color-text-danger, color-border-interactive

_Tip: The semantic layer is what makes a design system actually themeable by defining purpose for colors_

### Interactive state colors
Defined color values for default, hover, pressed, focused, disabled, and selected states applied consistently across all interactive elements

### Feedback colors
A consistent set of colors for success, warning, error, and informational states — used across alerts, form validation, badges, and status indicators.

_Tip: Feedback colors that pass contrast in light mode frequently fail in dark mode — testing each token pair against every surface in both themes is where most gaps tend to surface._

### Contrast ratios (accessibility)
A breakdown of text and interactive element color combinations verified to meet WCAG AA contrast minimums — 4.5:1 for normal text, 3:1 for large text and UI components

_Tip: Not all colors will pair together nicely so defining this for all usage is helpful_

### Dark and light mode definition
A complete parallel set of semantic token values for the opposite mode

_Tip: It is not as simple as inverting colors of one mode to the other, they require their own system (still using the same primitive colors though)_

### Brand color integration
Brand colors mapped into the semantic system in a way that maintains accessibility 

_Tip: Where brand values fall below contrast thresholds, they are restricted to decorative contexts, with accessible token values carrying the text and interactive roles._

### Color blindness considerations
The palette tested against common color vision deficiencies for when color is used to convey state

_Tip: It's worthwhile considering relative items to the color if vision is a concern, meaning an icon or text can help further convey a state incase the color is not successfully visible_
