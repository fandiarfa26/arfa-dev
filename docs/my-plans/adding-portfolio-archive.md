# Feature Plan: Portfolio Archive

## Overview

Tambahkan fitur **Portfolio Archive** pada website portfolio terbaru.

Fitur ini bertujuan untuk menampilkan versi-versi portfolio sebelumnya sebagai dokumentasi perjalanan developer dan evolusi skill dari waktu ke waktu.

Portfolio lama tetap berada pada hosting dan domain masing-masing. Website terbaru hanya berfungsi sebagai portal arsip.

---

# Goals

* Menampilkan perjalanan perkembangan portfolio.
* Menunjukkan evolusi skill dan teknologi.
* Menjadi dokumentasi personal branding.
* Tidak mengganggu fokus utama portfolio terbaru.
* Tidak mengintegrasikan source code portfolio lama.

---

# User Flow

1. User membuka website portfolio terbaru.
2. User scroll ke footer.
3. User menemukan link:

   * Portfolio Archive
4. User membuka halaman:

   * `/archive`
5. User melihat daftar portfolio lama.
6. User dapat membuka masing-masing portfolio pada tab baru.

---

# Footer

Tambahkan link pada footer:

```html
Portfolio Archive →
```

Link:

```text
/archive
```

---

# Route

Create:

```text
src/routes/archive/
```

Page:

```text
/ archive
```

---

# Page Content

## Header

Title:

```text
Portfolio Archive
```

Subtitle:

```text
Explore previous versions of my portfolio and see how my skills, design preferences, and technologies evolved over the years.
```

---

# Archive Card Structure

Each archive item contains:

* Version
* Year
* Title
* Short description
* Technology stack
* Current status
* External URL

Example:

```text
Portfolio V1
2021

Built during college while learning web development.

Tech:
HTML
CSS
Bootstrap

Status:
Student

[Visit Website ↗]
```

---

# Data Structure

Create:

```text
src/lib/data/archive.ts
```

Example:

```ts
export const archives = [
  {
    version: "V1",
    year: 2021,
    title: "First Portfolio",
    description:
      "Built during college while learning web development.",
    tech: ["HTML", "CSS", "Bootstrap"],
    status: "Student",
    url: "https://example.com"
  }
];
```

---

# External Link Behavior

Requirements:

* Open in new tab.
* Use:

```html
target="_blank"
rel="noopener noreferrer"
```

* Display external icon.

Example:

```text
Visit Website ↗
```

---

# UI Suggestions

Layout:

* Responsive card grid.
* 1 column on mobile.
* 2 or 3 columns on desktop.

Each card should contain:

* Year badge.
* Version label.
* Description.
* Technology badges.
* Visit button.

---

# Optional Enhancements

## Timeline

```text
2021 ─── 2023 ─── 2025
 V1       V2       V3
```

---

## Screenshot Preview

Each card may include:

* Homepage screenshot.
* Thumbnail image.

---

## Current Version Badge

For the latest portfolio:

```text
Current Version
```

---

# Design Principles

* Minimal.
* Clean.
* Professional.
* Consistent with current portfolio theme.
* Archive should feel like documentation, not a project showcase.

---

# Accessibility

* External links should indicate they open a new tab.
* Buttons must have accessible labels.
* Keyboard navigation supported.
* Sufficient color contrast.

---

# SEO

Page metadata:

Title:

```text
Portfolio Archive | Fandi Arfabuma
```

Description:

```text
Explore previous versions of my portfolio and see how my skills evolved over the years.
```

---

# Non Goals

Do NOT:

* Import old portfolio source code.
* Deploy old portfolios inside the new application.
* Use iframes.
* Proxy old websites.
* Create subdomains.
* Duplicate old content.

The archive page only acts as a curated collection of previous portfolio versions.

---

# Acceptance Criteria

* Footer contains Portfolio Archive link.
* `/archive` route exists.
* Archive items rendered from data.
* External links open in new tabs.
* Responsive layout.
* Accessible navigation.
* Matches existing design system.
* No dependency on old portfolio source code.

```
```
