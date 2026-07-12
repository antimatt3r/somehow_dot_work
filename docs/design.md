# somehow.work — Design Brief

## Purpose

**somehow.work** is the public home for a collection of software projects built by an independent software engineer.

It is not intended to be a startup landing page, a consultancy website, a personal blog, or a portfolio seeking clients. Instead, it serves as a catalog of thoughtfully engineered software, ranging from open source projects to hosted applications and technical experiments.

The site should leave visitors with the impression that the software is built by someone who enjoys solving interesting technical problems across a variety of domains.

---

# Design Philosophy

The design should be understated, calm and confident.

Visual design exists to support the content rather than compete with it. Typography, spacing and hierarchy should carry the majority of the visual weight. Every element on the page should have a clear purpose.

The goal is longevity rather than novelty. The site should feel just as appropriate several years from now as it does on launch day.

---

# Information Architecture

The site consists of a single page.

Sections, in order:

1. Sticky header
2. Hero
3. Project catalog
4. About
5. Footer

Navigation simply scrolls to the relevant section. No additional pages are required at this stage.

---

# Visual Language

The overall aesthetic should be restrained and editorial rather than promotional.

Guiding principles:

* Excellent typography over decorative elements.
* Generous whitespace.
* Minimal colour palette.
* Clear visual hierarchy.
* Subtle interactions.
* Fast loading.
* Accessible.
* Responsive.

The site should feel closer to a well-designed technical publication than a marketing website.

---

# Typography

Typography is the primary design element.

The font should be modern, highly legible and suitable for technical content.

Headings should establish hierarchy without dominating the page.

Body text should prioritize comfortable reading.

Line lengths should remain comfortable on large displays.

---

# Layout

The content should be presented in a single reading column with a constrained maximum width.

The layout should naturally adapt from desktop to mobile without changing the overall reading experience.

The header remains visible while scrolling.

The hero introduces the site briefly before transitioning directly into the project catalog.

No explicit "Projects" or "Work" heading is required; the projects begin naturally after the introduction.

---

# Project Catalog

Projects are the primary focus of the site.

Each project should contain:

* Project name
* One-line tagline
* Short description
* Relevant links

Projects are displayed as editorial entries separated by whitespace and subtle dividers rather than cards.

The order of projects is intentional and defined by the data source. Projects should never be automatically sorted.

The presence of links communicates the nature of a project:

* GitHub implies source code is available.
* Website indicates a hosted application.
* Demo indicates a publicly accessible demonstration.
* Documentation links to technical documentation.

Projects may expose any combination of links. The design should not attempt to classify projects using badges or labels such as "Open Source" or "Closed Source."

---

# Content Guidelines

Writing should be concise, direct and technically literate.

Avoid marketing language, exaggerated claims or unnecessary adjectives.

Describe what the project is and why it exists rather than attempting to persuade visitors to use it.

The software should speak for itself.

---

# Colour Palette

The palette should remain intentionally minimal.

Prefer:

* Light background
* Dark primary text
* Muted secondary text
* Single accent colour for links and interactive elements
* Subtle divider colour

Colour should support hierarchy rather than create it.

---

# Responsive Behaviour

The reading experience should remain consistent across devices.

Desktop provides additional whitespace rather than additional complexity.

Mobile should preserve the same visual hierarchy using a single-column layout.

No horizontal scrolling should ever occur.

---

# Performance

Performance is a feature.

The site should remain lightweight and load quickly.

Use as little JavaScript as practical.

Static generation is preferred wherever possible.

---

# Accessibility

The site should be usable without requiring animation, hover interactions or JavaScript.

Semantic HTML, keyboard navigation and sufficient colour contrast should be considered first-class requirements.

---

# Future Evolution

The design should accommodate future additions without requiring structural redesign.

Possible future additions include:

* Additional software projects
* Technical writing
* Photography
* Talks
* Research notes

These should integrate naturally into the existing design rather than changing its overall philosophy.

---

# Things We Explicitly Avoid

The following do not align with the character of the site:

* Marketing-style hero sections
* Large illustrations
* Decorative animations
* Excessive gradients
* Dashboard-style layouts
* Card-heavy interfaces
* Technology logos
* Download counters
* GitHub star counts
* Testimonials
* Pricing sections
* Call-to-action banners
* Popups
* Carousels
* Unnecessary JavaScript

---

# Guiding Principle

When faced with a design decision, prefer the option that makes the content clearer, the page simpler and the software itself more prominent.

If an element does not improve understanding, it probably does not belong on the page.

