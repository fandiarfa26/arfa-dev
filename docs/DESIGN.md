---

name: Editorial Tech Portfolio
version: 1.1
theme: Editorial Noir
---------------------

# Design Document (DESIGN.md)

## Design Philosophy

### Editorial-tech with warmth.

The portfolio should feel like a thoughtful digital home rather than a corporate brochure or a flashy agency website.

It should balance:

* The intellectual rigor of editorial publications
* The precision of modern technology products
* The warmth of human connection

The emotional outcome should be:

> "This person seems thoughtful, capable, and genuinely pleasant to work with."

The goal is trust.

Not spectacle.

Not novelty.

Not trends.

---

# Visual Direction

## Editorial Noir

The visual language embraces darkness without becoming cold.

Think:

* Premium independent publications
* Carefully crafted portfolios
* Quiet confidence
* Mature craftsmanship

The interface should feel:

* Calm
* Focused
* Intentional
* Human
* Timeless

Avoid:

* Cyberpunk aesthetics
* Startup dashboard visuals
* Overly futuristic interfaces
* High-energy creative agency styles

---

# Color System

```yaml
colors:
  background: "#131313"
  on-background: "#FFFFFF"

  surface: "#1C1C1C"
  surface-container-lowest: "#1A1A1A"
  surface-container: "#242424"
  surface-container-high: "#2A2A2A"
  surface-container-highest: "#333333"

  on-surface: "#FFFFFF"
  on-surface-variant: "#A3A3A3"

  primary: "#FFFFFF"
  on-primary: "#131313"

  secondary: "#10B981"
  on-secondary: "#FFFFFF"

  outline-variant: "#333333"

  secondary-container: "#064E3B"
  tertiary-container: "#064E3B"
  on-tertiary-container: "#10B981"
```

---

## Color Intent

### Background

Deep charcoal.

Creates focus without the harshness of pure black.

---

### Primary

Pure white.

Used for:

* Headlines
* Primary emphasis
* High-importance actions

---

### Secondary

Emerald green.

Used sparingly for:

* Availability indicators
* Positive signals
* Small accents
* Metadata emphasis

---

### Surface Layers

Different tonal layers create hierarchy without relying heavily on shadows.

The effect should resemble:

> Ink on dark paper.

---

# Typography

The typography bridges editorial elegance with technical clarity.

---

## Headlines

### Font

EB Garamond

Purpose:

* Sophistication
* Editorial personality
* Calm confidence

Use for:

* Hero headlines
* Section titles
* Large statements

---

## Body

### Font

Hanken Grotesk

Purpose:

* Clarity
* Precision
* Readability

Use for:

* Supporting copy
* Project narratives
* Blog content
* Metadata descriptions

---

## Labels

Hanken Grotesk

Uppercase with tracking.

Use for:

* Tags
* Dates
* Categories
* Availability status

---

# Typography Scale

```yaml
display:
  fontFamily: EB Garamond
  fontSize: 64px
  fontWeight: 500
  lineHeight: 1.1
  letterSpacing: -0.02em

headline-lg:
  fontFamily: EB Garamond
  fontSize: 48px
  fontWeight: 500
  lineHeight: 1.2

headline-lg-mobile:
  fontFamily: EB Garamond
  fontSize: 32px
  fontWeight: 500
  lineHeight: 1.2

headline-md:
  fontFamily: EB Garamond
  fontSize: 32px
  fontWeight: 500
  lineHeight: 1.3

body-lg:
  fontFamily: Hanken Grotesk
  fontSize: 20px
  fontWeight: 400
  lineHeight: 1.6

body-md:
  fontFamily: Hanken Grotesk
  fontSize: 16px
  fontWeight: 400
  lineHeight: 1.6

label-md:
  fontFamily: Hanken Grotesk
  fontSize: 14px
  fontWeight: 600
  letterSpacing: 0.05em

label-sm:
  fontFamily: Hanken Grotesk
  fontSize: 12px
  fontWeight: 500
```

---

# Layout Principles

The layout should resemble a carefully curated publication.

Whitespace is intentional.

Density is avoided.

---

## Grid

Desktop:

* 12-column grid

Tablet:

* Reduced asymmetry

Mobile:

* Single-column narrative flow

---

## Spacing

```yaml
spacing:
  container-max: 1200px
  margin-desktop: 64px
  margin-mobile: 24px
  gutter: 24px
  section-gap: 96px
  unit: 4px
```

---

## Negative Space

Do not fear empty columns.

Allow content to breathe.

Use asymmetry intentionally.

The absence of content can be as important as the content itself.

---

# Elevation & Depth

Depth should be subtle.

Avoid plastic interfaces.

---

## Use

* Tonal layers
* Low-contrast outlines
* Minimal shadows

---

## Hover State

Use soft elevation.

The effect should suggest:

> Slight emphasis.

Not physical lifting.

---

# Shapes

Roundedness should feel modern but restrained.

```yaml
radius:
  sm: 2px
  default: 4px
  md: 6px
  lg: 8px
  xl: 12px
  full: 9999px
```

Avoid excessive softness.

---

# Photography Direction

Use authentic portrait photography.

The portrait should feel approachable and natural.

Avoid:

* AI-generated avatars
* Corporate headshots
* Cartoon illustrations
* Dramatic edits
* Lifestyle influencer aesthetics

The goal is familiarity.

Visitors should feel they are meeting a person.

Not evaluating a brand.

---

# Motion Language

Motion should support understanding.

Never distract.

The feeling should resemble:

> A printed page gently coming to life.

---

## Use

* Soft fade transitions
* Small translate offsets (8–24px)
* Gentle stagger animations
* Availability pulse
* Hover refinement
* Subtle image transitions

---

## Timing

```yaml
duration:
  fast: 200ms
  normal: 300ms
  slow: 600ms
```

---

## Easing

Prefer:

* ease-out
* gentle deceleration

Avoid:

* Bounce
* Elastic
* Overshoot
* Aggressive acceleration

---

## Avoid

* Scroll-jacking
* Long storytelling timelines
* Continuous floating effects
* Excessive ScrollTrigger usage
* Motion without purpose

---

# Responsive Behavior

## Desktop

* Preserve editorial composition
* Use asymmetry
* Allow whitespace

---

## Tablet

* Simplify layouts
* Reduce asymmetry
* Maintain hierarchy

---

## Mobile

* Prioritize readability
* Collapse into narrative flow
* Preserve spacing rhythm
* Maintain typographic hierarchy

---

# Components

## Buttons

Primary:

* Emerald fill
* White text

Secondary:

* Ghost style
* Border only

Avoid:

* Loud gradients
* Multiple accent colors

---

## Cards

Use:

* Tonal surfaces
* Thin outlines
* Editorial spacing

Avoid:

* Heavy shadows
* Dashboard aesthetics

---

## Chips

Use:

* Secondary color
* Low-opacity fills

Avoid:

* Bright solid badges

---

## Inputs

If introduced in the future:

* Minimal styling
* Thin borders
* Clear focus states

---

# shadcn-svelte Usage Guidelines

shadcn-svelte should act as a foundation layer.

Not a visual identity.

---

## Use shadcn for

* Buttons
* Dialogs
* Sheets
* Dropdown menus
* Toasts

---

## Avoid using shadcn defaults for

* Hero sections
* Project showcases
* Experience layouts
* Blog lists
* Editorial compositions

These components should remain custom.

---

# Accessibility

Must support:

* Semantic structure
* Keyboard navigation
* Visible focus states
* Reduced motion preferences
* Sufficient color contrast
* Meaningful alt text

Target:

> WCAG 2.2 AA where practical.

---

# Design Success Criteria

The design is successful when visitors think:

> "This feels thoughtful."

Then:

> "This person understands both people and products."

And finally:

> "I would genuinely enjoy working with someone like this."

If they remember the interface itself more than the person behind it,

the design has failed.
