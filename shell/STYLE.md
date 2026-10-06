# somehow.work Design System & Application Shell Specification

This document is the official portable specification for applications across the **somehow.work** family. It defines design tokens, typography, reusable shell components, layout modes, notice variants, and data display conventions.

Paste this document into an AI assistant or use it as a developer guide when building or restyling any app in the network.

---

## 1. Design Principles

- **Understated Competence**: Technical competence shown subtly, never shouted. Clean, calm, purposeful copy. No decorative gradients, marketing language, hero illustrations, mascots, or emoji in UI chrome.
- **Zero-Dependency Modularity**: Built on pure CSS custom properties, self-hosted WOFF2 fonts, and native Web Components (`customElements`). No npm build pipeline required.
- **Accessibility by Default**: Landmarks (`<header>`, `<main>`, `<footer>`), visible focus rings, tabular numbers on all metrics, and contrast ratios strictly exceeding WCAG AA standards (4.5:1+) in both light and dark themes.

---

## 2. Design Tokens (`css/tokens.css`)

### Typography
- **UI Font**: `Geist`, with fallbacks `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
- **Monospace Font**: `Geist Mono`, with fallbacks `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`. Used for codes, identifiers, metrics, quantities, unit prices, and status badges.
- **Self-Hosting**: Always self-host `Geist` and `Geist Mono` under a local `fonts/` directory using modern `.woff2` files.

### Theme & Palette Tokens
- **Accent**: `#3b82f6` (hover `#2563eb`). Consistent primary accent across all network apps.
- **Neutrals (Light Theme)**:
  - Background: `#f8fafc`
  - Surface: `#ffffff` (hover `#f1f5f9`)
  - Border: `#e2e8f0` (subtle `#edf2f7`)
  - Primary Text: `#0f172a`
  - Muted Text: `#64748b` (meets 4.6:1 WCAG AA contrast against white)
- **Neutrals (Dark Theme - `prefers-color-scheme: dark`)**:
  - Background: `#0b1120`
  - Surface: `#131c31` (hover `#1a2744`)
  - Border: `#24324f` (subtle `#1c2840`)
  - Primary Text: `#f8fafc`
  - Muted Text: `#94a3b8` (meets 5.5:1 WCAG AA contrast)
- **Warning / Notice Tokens**:
  - `disclaimer` (Medical / Finance): Muted amber (`#fffbeb` / border `#fde68a` / text `#92400e`). Dark mode: `rgba(245, 158, 11, 0.08)` / text `#fbbf24`.
  - `demo` (Preview / Test deployment): Muted slate (`#f1f5f9` / border `#cbd5e1` / text `#334155`). Dark mode: `rgba(148, 163, 184, 0.08)` / text `#cbd5e1`.
- **Dimensions**:
  - Radii: 4px (`--radius-sm`), 8px (`--radius-md` for inputs/buttons/chips), 12px (`--radius-lg` for cards/tables/notices).
  - Spacing scale: 4px-based (`--space-1`: 4px, `--space-2`: 8px, `--space-3`: 12px, `--space-4`: 16px, `--space-6`: 24px, `--space-8`: 32px, `--space-10`: 40px).

---

## 3. Site Configuration Schema (`site.config.js`)

All application chrome values reside in a single global `SITE_CONFIG` object:

```javascript
window.SITE_CONFIG = {
  // Brand name and wordmark split (plain part + accent part)
  name: "Pixelchemy",
  namePlain: "Pixel",
  nameAccent: "chemy",
  subtitle: "Your private photo and document toolbox",

  // Network link
  networkUrl: "https://somehow.work",
  networkLabel: "somehow.work",

  // Repository links (OPTIONAL)
  // If repoUrl is null or empty string, the GitHub link and middle dot are omitted.
  repoUrl: "https://github.com/somehow-work/pixelchemy",
  issuesUrl: "https://github.com/somehow-work/pixelchemy/issues",

  // Notice / Banner configuration (OPTIONAL)
  // Set to null to omit notices, or choose one of two standard variants:
  notice: {
    // "disclaimer" (medical / financial) OR "demo" (preview / sandbox reset)
    variant: "demo",
    lead: "Demonstration deployment.",
    body: "Sandbox data resets every 24 hours."
  }
};
```

---

## 4. Reusable Shell Web Components (`js/shell.js`)

1. **`<app-header>`**:
   - Left: Wordmark in Geist semibold (`{namePlain}<span class="brand-accent">{nameAccent}</span>`) and subtitle in muted text.
   - Right: Unobtrusive `<status-label>` and a small link to `somehow.work` in Geist Mono.
   - 1px bottom border.
2. **`<status-label>`**:
   - Zero visual footprint when `ready`.
   - Displays unobtrusive status during `connecting` or `error` with a `Retry` action.
3. **`<app-notice>`**:
   - Rendered inside the main content container, immediately below the header.
   - Role: `note`.
   - Sentence case, normal weight, with the lead sentence in semibold (`<strong class="notice-lead">`).
4. **`<app-footer>`**:
   - Viewport-pinned sticky footer (`margin-top: auto`).
   - Left: `© {currentYear} somehow.work. All rights reserved.`
   - Right: Renders `GitHub` and/or `Report an Issue` only when configured in `SITE_CONFIG`. If a project is closed source, GitHub is automatically omitted without formatting glitches.

---

## 5. Layout Modes (`css/shell.css`)

Applications must choose one of three container layout classes on `<main>`:

1. **`.layout-single-column`**:
   - Centered container with max-width (default `1000px`).
   - Best for search tools, single-purpose calculators, conversion forms, and reading views.
2. **`.layout-multi-column`**:
   - Grid layout pairing a fixed/collapsible sidebar (`--sidebar-width: 260px`) with a scrollable main workspace.
   - Automatically collapses into a stacked mobile layout below 768px.
   - Best for multi-step tools, editors, and dashboards with category navigation.
3. **`.layout-full-width`**:
   - Fluid 100% viewport width with standardized edge gutters.
   - Best for image editors, interactive map viewers, canvases, and full-screen tools.

---

## 6. Data Tables & Presentation Conventions (`css/tables.css`)

- **Tabular Figures**: Numeric and monetary columns must use `font-variant-numeric: tabular-nums` and right alignment.
- **Monospace Codes & Metrics**: Codes, identifiers, units, and pack quantities use `Geist Mono` (`.col-code`, `.col-pack`, `.col-price`).
- **Unit Qualifiers**: Display clear contextual unit markers (e.g. `/ tab`, `/ vial`, `/ bottle`, `/ req`).
- **Mobile Responsive Card Transformation ($\le$ 640px)**:
  - Multi-column tables must not scroll horizontally.
  - On screens $\le 640\text{px}$, tables transform into stacked responsive cards where each row (`tr`) becomes a self-contained card with border, padding, prominent title, and mobile field labels via `data-label`.
