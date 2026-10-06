# somehow.work Application Shell & Design System

The unified application shell, design tokens, typography, and reusable components for web applications in the **somehow.work** family.

> **Note on Deployment**: This directory is isolated from the `somehow.work` Hugo website. It is listed in `.dockerignore` and is never included in the public website build or accessible via `https://somehow.work`.

---

## Directory Overview

```
shell/
├── README.md               # Quick start & integration guide
├── STYLE.md                # Portable design system specification
├── site.config.example.js  # Documented configuration template
├── css/
│   ├── tokens.css          # Design tokens (colors, type scale, spacing, light/dark themes)
│   ├── shell.css           # Header, notice, footer, status-label, and layout classes
│   └── tables.css          # Tabular numbers, monetary alignment, mobile card styling
├── js/
│   └── shell.js            # Self-contained Web Components (<app-header>, <app-notice>, etc.)
├── fonts/                  # Self-hosted WOFF2 font files
│   ├── Geist-Regular.woff2
│   ├── Geist-Medium.woff2
│   ├── Geist-SemiBold.woff2
│   ├── GeistMono-Regular.woff2
│   └── GeistMono-Medium.woff2
└── examples/
    ├── single-column.html  # Working demo of single-column app (e.g. Aushadh)
    ├── multi-column.html   # Working demo of sidebar + workspace app
    └── full-width.html     # Working demo of 100% fluid tool/canvas app
```

---

## Quick Integration Guide

### 1. Copy Assets
Copy `css/`, `js/`, and `fonts/` into your application's public/static directory (e.g., `app/static/` or `public/`).

### 2. Configure Your App (`site.config.js`)
Create a `site.config.js` with your brand identity and options:

```javascript
window.SITE_CONFIG = {
  name: "MyTool",
  namePlain: "My",
  nameAccent: "Tool",
  subtitle: "Understated, competent tool for specific workflows",
  networkUrl: "https://somehow.work",
  networkLabel: "somehow.work",
  repoUrl: "https://github.com/somehow-work/my-tool", // Optional: leave empty if closed-source
  issuesUrl: "https://github.com/somehow-work/my-tool/issues",
  notice: null // Optional: or { variant: "disclaimer"|"demo", lead: "...", body: "..." }
};
```

### 3. Add Markup
In your HTML page, link the stylesheets, define your layout mode, and include the components:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MyTool — somehow.work</title>
  <link rel="stylesheet" href="/static/css/tokens.css">
  <link rel="stylesheet" href="/static/css/shell.css">
  <link rel="stylesheet" href="/static/css/tables.css">
</head>
<body>

  <!-- Universal Header -->
  <app-header></app-header>

  <!-- Choose Layout Mode: layout-single-column | layout-multi-column | layout-full-width -->
  <main class="layout-single-column">
    <app-notice></app-notice>

    <!-- App Content Here -->
  </main>

  <!-- Universal Footer -->
  <app-footer></app-footer>

  <script src="/static/site.config.js"></script>
  <script src="/static/js/shell.js"></script>
</body>
</html>
```

---

## Layout Modes

- **Single-Column (`.layout-single-column`)**: Centered max-width (1000px). Best for search tools (Aushadh), single-purpose utilities, forms, and calculators.
- **Multi-Column (`.layout-multi-column`)**: Sidebar (260px) + Main Content grid. Responsive below 768px.
- **Full-Width (`.layout-full-width`)**: 100% fluid viewport. Best for canvas tools (Pixelchemy), editors, and interactive dashboards.

---

## Features & Conventions

- **Flexible Footer**: If `repoUrl` is omitted or empty, the `GitHub` link and middle dot delimiter are omitted automatically.
- **Contextual Notices**: Supports `disclaimer` (medical/financial amber) and `demo` (preview mode slate) variants.
- **Zero-Flicker Status**: `<status-label>` remains invisible when healthy, surfacing only on network or backend errors.
- **Mobile Card Conversion**: Add `.col-code`, `.col-primary`, and `data-label` to table rows to automatically transform wide tables into responsive stacked cards on screens $\le 640\text{px}$.
