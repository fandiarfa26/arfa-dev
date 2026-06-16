# Architecture Document (ARCHITECTURE.md)

## Project

**Personal Portfolio Website – Fandi Arfa**

---

# 1. Architecture Goals

Arsitektur ini dirancang untuk mendukung tujuan utama portfolio:

* Menjadi digital home yang autentik.
* Menampilkan kualitas berpikir, bukan sekadar hasil akhir.
* Mudah dipelihara oleh solo developer.
* Cepat dikembangkan menggunakan AI-assisted development.
* Menghindari kompleksitas yang tidak diperlukan.

Prinsip utama:

> Build simple things that age well.

---

# 2. Architectural Principles

## Static First

Seluruh website diprioritaskan sebagai static site.

Gunakan server hanya jika benar-benar diperlukan.

## Content Driven

Konten adalah inti dari portfolio.

Pisahkan antara:

* Structured content
* Narrative content

## Minimal Dependencies

Hindari menambah teknologi yang tidak memberikan manfaat nyata.

## Progressive Enhancement

Website harus tetap dapat digunakan tanpa JavaScript untuk kebutuhan inti seperti membaca konten dan navigasi.

## Performance by Default

Keputusan teknis harus mempertimbangkan:

* ukuran bundle,
* Core Web Vitals,
* aksesibilitas.

---

# 3. Technology Stack

## Framework

* SvelteKit

Alasan:

* ringan,
* SEO-friendly,
* static-first,
* cocok untuk portfolio.

## UI Components

* shadcn-svelte

Digunakan hanya sebagai UI primitive.

Contoh:

* Button
* Sheet
* Dialog
* Dropdown
* Toast (opsional)

Bukan sebagai fondasi visual utama.

## Styling

* Tailwind CSS

Seluruh design token mengikuti DESIGN.md.

## Animation

* GSAP

Digunakan secara minimal dan terarah.

## Icons

* Lucide Icons

## Content

* TypeScript
* MDX

## Deployment

* Vercel

Alternatif:

* Cloudflare Pages

## Analytics (Optional)

* Plausible
* Umami

---

# 4. Application Structure

```
src/
├─ routes/
│
├─ lib/
│
├─ app.html
├─ app.css
└─ hooks.server.ts
```

---

# 5. Routing Structure

```
/
├─ Home
│
├─ /projects
│
├─ /blog
│
└─ /blog/[slug]
```

Tidak ada:

```
/projects/[slug]
```

untuk versi V1.

---

# 6. Homepage Architecture

## Sections

```
Hero
↓
Who I Am
↓
Selected Work
↓
Experience
↓
Thoughts
↓
Contact
↓
Footer
```

Setiap section dibuat sebagai komponen independen.

Contoh:

```
lib/components/sections/
├─ Hero.svelte
├─ WhoIAm.svelte
├─ SelectedWork.svelte
├─ Experience.svelte
├─ Thoughts.svelte
├─ Contact.svelte
└─ Footer.svelte
```

---

# 7. Component Architecture

## Shared Components

```
shared/
├─ Container.svelte
├─ SectionHeader.svelte
├─ AvailabilityIndicator.svelte
├─ SocialLinks.svelte
└─ LocalTime.svelte
```

## UI Components

```
ui/
├─ button/
├─ sheet/
├─ dialog/
├─ dropdown-menu/
└─ toast/
```

## Section Components

```
sections/
├─ Hero.svelte
├─ WhoIAm.svelte
├─ SelectedWork.svelte
├─ Experience.svelte
├─ Thoughts.svelte
├─ Contact.svelte
└─ Footer.svelte
```

---

# 8. Content Strategy

## Projects

Projects menggunakan TypeScript.

Lokasi:

```
src/lib/content/projects.ts
```

Contoh struktur:

```ts
export type Project = {
  title: string;
  description: string;
  year: string;
  role: string;
  tags: string[];

  situation: string;
  challenge: string;
  decision: string;
  outcome: string;

  links?: {
    demo?: string;
    github?: string;
  };
};
```

Alasan:

* sederhana,
* mudah diubah,
* tidak membutuhkan parsing.

---

## Blog

Blog menggunakan MDX.

Lokasi:

```
src/lib/content/blog/
```

Contoh:

```
blog/
├─ turning-designs-into-products.mdx
├─ good-collaboration.mdx
└─ small-details-users-notice.mdx
```

Frontmatter:

```yaml
---
title:
description:
publishedAt:
excerpt:
tags:
published:
---
```

---

# 9. Data Flow

## Homepage

```
projects.ts
        ↓
SelectedWork Section
```

## Blog List

```
MDX Files
      ↓
Blog Loader
      ↓
/blog
```

## Blog Detail

```
MDX Files
      ↓
Slug Resolver
      ↓
/blog/[slug]
```

Tidak ada database.

Tidak ada CMS.

Git repository adalah source of truth.

---

# 10. Motion Architecture

Prinsip:

> Motion should support understanding.

## Allowed

* Hero entrance
* Fade reveal
* Small stagger animations
* Availability pulse
* Subtle image interactions

## Avoid

* Scroll-jacking
* Long GSAP timelines
* Decorative animations
* Pinning entire sections
* Motion without UX purpose

---

# 11. Animation Organization

```
lib/animations/
├─ hero.ts
├─ reveal.ts
├─ stagger.ts
└─ pulse.ts
```

Setiap file hanya bertanggung jawab terhadap satu jenis motion.

---

# 12. Styling Architecture

Tailwind menjadi single source untuk implementasi design token.

```
tailwind.config
```

Mengadopsi token dari DESIGN.md:

* Colors
* Typography
* Spacing
* Border Radius
* Container Width

Tujuan:

> Menghindari design drift antara dokumen dan implementasi.

---

# 13. Contact Architecture

Tidak menggunakan backend.

## Email

Menggunakan:

```
mailto:
```

## WhatsApp

Menggunakan:

```
https://wa.me/
```

dengan predefined message.

Contoh:

> Hi Fandi, I found your portfolio and would love to connect.

Tidak ada:

* contact form,
* database,
* email service,
* server actions.

---

# 14. Accessibility Requirements

Minimum requirements:

* Semantic HTML
* Proper heading hierarchy
* Keyboard navigability
* Visible focus states
* Accessible labels
* Meaningful alt text
* Sufficient color contrast
* Reduced motion support

Target:

> WCAG 2.2 AA where practical.

---

# 15. Performance Requirements

Target:

* Lighthouse Performance ≥ 90
* Lighthouse Accessibility ≥ 95
* Lighthouse Best Practices ≥ 95
* Lighthouse SEO ≥ 95

Priorities:

* Minimize JavaScript
* Optimize images
* Static prerendering
* Lazy-load non-critical assets

---

# 16. SEO Strategy

Each page should provide:

* title
* meta description
* canonical URL
* Open Graph tags
* Twitter cards

Blog posts additionally include:

* published date
* tags
* structured metadata

---

# 17. Deployment Strategy

Primary:

```
Vercel
```

Workflow:

```
Git Push
    ↓
Vercel Build
    ↓
Deploy
```

Environment variables are not required for V1.

---

# 18. Future Evolution (Out of Scope)

Potential future enhancements:

* Dark/light theme toggle
* Project detail pages
* Search for blog
* RSS feed
* Reading list
* Newsletter
* Guestbook
* Multi-language support
* CMS integration

Future additions should preserve the principles of:

* simplicity,
* maintainability,
* authenticity.

---

# 19. Definition of Architectural Success

The architecture is considered successful if:

* The portfolio remains easy to maintain years from now.
* New content can be added in minutes.
* Performance remains consistently high.
* The implementation stays aligned with the design intent.
* The technology never overshadows the story being told.

If future visitors remember one thing, it should be the person behind the portfolio—not the framework used to build it.
