# Product Requirements Document (PRD)

**Project:** Personal Portfolio Website – Fandi Arfa
**Version:** 1.1
**Status:** Approved for Implementation
**Owner:** Fandi Arfa
**Product Type:** Personal Portfolio / Digital Home

---

# 1. Product Overview

## Product Vision

Portfolio ini bukan sekadar tempat memajang proyek.

Portfolio ini merepresentasikan seorang frontend engineer yang menikmati proses mengubah ide menjadi produk nyata, dengan perhatian besar terhadap pengalaman pengguna, kualitas implementasi, dan kolaborasi.

Tujuan utamanya bukan membuat orang berkata:

> "Wah, animasinya keren."

Tetapi membuat mereka berpikir:

> "Orang ini terlihat menyenangkan diajak bekerja sama, peduli pada detail, dan benar-benar memahami proses membangun produk."

---

# 2. Product Goals

## Primary Goals

### Build Personal Brand

Membangun persepsi yang konsisten tentang siapa Fandi sebagai profesional.

Pengunjung memahami bahwa Fandi adalah:

* Frontend engineer
* Berorientasi pada produk
* Peduli terhadap detail
* Kolaboratif
* Pragmatis dalam mengambil keputusan

### Become a Digital Home

Menjadi representasi jangka panjang dari perjalanan profesional Fandi.

Portfolio harus terasa:

* Personal
* Jujur
* Tidak mengikuti tren secara membabi buta
* Tetap relevan meskipun proyek atau pekerjaan berubah

---

## Secondary Goals

* Membuka peluang kerja secara organik
* Mendorong koneksi profesional
* Menjadi repositori pemikiran dan refleksi

---

# 3. Success Metrics

## Qualitative Metrics

Pengunjung merasa:

* Mengenal siapa Fandi
* Memahami bagaimana cara kerjanya
* Percaya terhadap kualitas berpikirnya
* Nyaman untuk menghubungi

---

## Behavioral Metrics

Target indikator:

* Pengunjung membaca lebih dari satu section
* Pengunjung membuka halaman Projects
* Pengunjung mengunjungi halaman Blog
* Pengunjung membaca minimal satu artikel
* Pengunjung mengklik salah satu kanal kontak

---

# 4. Primary Users

## Priority 1 — Recruiters & Hiring Managers

Ingin mengetahui:

* Apakah kandidat ini kompeten?
* Apakah mudah diajak bekerja sama?
* Apakah memiliki product thinking?

Yang harus dijawab portfolio:

> "Ya, orang ini terlihat matang dan dapat dipercaya."

---

## Priority 2 — Prospective Clients

Ingin mengetahui:

* Apakah Fandi memahami kebutuhan mereka?
* Apakah komunikasinya baik?
* Apakah bisa menghasilkan solusi praktis?

Yang harus dirasakan:

> "Saya merasa aman bekerja dengannya."

---

## Priority 3 — Founders / Startups

Ingin mengetahui:

* Apakah Fandi memahami trade-off?
* Apakah dapat bekerja dalam keterbatasan?
* Apakah fokus pada hasil?

---

## Priority 4 — Engineers & Designers

Ingin mengetahui:

* Bagaimana gaya kolaborasinya?
* Apakah menghargai feedback?
* Apakah peduli pada maintainability dan design intent?

---

# 5. Problem Statement

Banyak portfolio frontend hanya menunjukkan apa yang dibangun, tetapi gagal menunjukkan:

* Bagaimana seseorang berpikir
* Bagaimana ia berkolaborasi
* Bagaimana keputusan dibuat
* Bagaimana ia menghadapi keterbatasan

Akibatnya, pengunjung sulit membangun kepercayaan.

Portfolio Fandi hadir untuk menjembatani kesenjangan tersebut.

---

# 6. Core Positioning

## Personal Branding Statement

> Fandi adalah frontend engineer yang menikmati proses mengubah ide menjadi produk yang benar-benar dinikmati penggunanya.

> Ia menghargai kolaborasi, implementasi yang matang, dan solusi praktis yang membuat pengguna maupun tim bekerja lebih nyaman.

> Ia bukan orang paling berisik di ruangan.

> Ia adalah seseorang yang dapat dipercaya untuk membangun sesuatu bersama.

---

# 7. Desired User Journey

```text
Curious
↓
Comfortable
↓
Trust
↓
Respect
↓
Reach Out
```

---

# 8. Information Architecture

## Sitemap

* Home

  * Hero
  * Who I Am
  * Selected Work
  * Experience
  * Thoughts
  * Let's Work Together
  * Footer

* Projects

* Blog

* Blog Detail

---

# 9. Homepage Requirements

---

## SECTION 01 — HERO

### Objective

Menjawab dalam 5 detik:

* Siapa Fandi?
* Apa yang dilakukan?
* Mengapa perlu melanjutkan scroll?

### Layout

* Eyebrow
* Headline
* Supporting Copy
* CTA

### Copy

#### Eyebrow

East Java, Indonesia • Available for selected collaborations

#### Headline

Hi, I'm Fandi.

I build interfaces that turn ideas into products people enjoy using.

#### Supporting Copy

I'm a frontend engineer who enjoys bridging design and development—crafting experiences that feel intuitive, thoughtful, and practical for real users.

I care about the small details that make products easier to use and teams easier to work with.

### CTA

Primary:

* View Selected Work

Secondary:

* Let's Talk

### Interaction

Use:

* Typographic entrance
* Soft fade
* Subtle availability pulse
* Reduced motion support

Avoid:

* Dramatic reveals
* Excessive animations

---

## SECTION 02 — WHO I AM

### Objective

Membuat pengunjung berpikir:

> "Saya tahu seperti apa bekerja dengan orang ini."

### Layout

Simple Bento Grid

### Card 1 — About

I enjoy turning concepts into experiences people can actually use.

What excites me most isn't just shipping interfaces—it's collaborating with people, understanding constraints, and finding practical solutions that move products forward.

### Card 2 — How I Work

I prefer clarity over complexity.

I ask questions early, communicate openly, and focus on building things that solve problems without unnecessary abstraction.

### Card 3 — Outside of Work

Outside of coding, I enjoy exploring new tools, refining my workflow, and continuously improving how I approach both design and engineering.

### Card 4 — Local Time

Current time in East Java, Indonesia.

Because great collaboration often starts with knowing when to say hello.

---

## SECTION 03 — SELECTED WORK

### Objective

Menunjukkan kualitas berpikir melalui proyek.

Bukan galeri.

Bukan kartu pajangan.

### Intro

A few projects that challenged how I think, collaborate, and build.

Each one taught me something different about balancing user needs, technical constraints, and product goals.

### Project Format

#### Project Title

One-line description.

#### The Situation

What problem were we trying to solve?

#### My Role

What was I responsible for?

#### Challenges

What made this difficult?

#### Decisions

* Why did I choose this approach?
* What alternatives were considered?
* What trade-offs existed?

#### Outcome

* What improved?
* What did I learn?

#### Links

* Live Demo
* GitHub

Optional:

* Engineering Notes (future enhancement)

### Project CTA

Want to explore more projects and the decisions behind them?

Visit the Projects page.

---

## SECTION 04 — EXPERIENCE

### Objective

Membangun kredibilitas.

Bukan daftar pekerjaan.

### Intro

Experiences that shaped how I approach products and teamwork.

### Experience Format

#### Company Name

Role • Duration

#### Focus

* Built...
* Collaborated...
* Improved...

#### Impact

Gunakan format Google XYZ.

Contoh:

* Improved onboarding completion by redesigning critical flows and simplifying interactions.
* Reduced repetitive manual steps by introducing reusable components and clearer UX patterns.

#### Reflection

I learned that successful products often come from small improvements applied consistently.

---

## SECTION 05 — THOUGHTS

### Objective

Membangun personal branding tanpa tekanan harus menjadi blogger aktif.

### Intro

Occasionally, I write about things I'm learning, questioning, or improving.

Not tutorials.

Just honest reflections from building products.

### Publishing Strategy

Thoughts dipublikasikan sebagai artikel MDX melalui halaman Blog.

Tujuannya bukan mengejar frekuensi publikasi, tetapi mendokumentasikan pembelajaran yang layak dibagikan.

### Suggested Topics

#### Turning Designs Into Real Products

Lessons from bridging design intent and implementation constraints.

#### What Good Collaboration Looks Like

Why communication matters as much as code.

#### The Small Details Users Notice

Micro decisions that shape everyday experiences.

### Empty State

There are no articles yet.

I'm taking notes, learning, and waiting until I have something worth sharing.

Quality matters more than publishing frequency.

---

## SECTION 06 — LET'S WORK TOGETHER

### Objective

Mengubah kepercayaan menjadi tindakan.

### Headline

Let's build something meaningful together.

### Supporting Copy

Whether you're exploring an idea, improving an existing product, or simply want to connect, I'd love to hear from you.

### Contact Options

Primary:

* Email (mailto)

Secondary:

* WhatsApp (pre-filled message)

Additional:

* LinkedIn
* GitHub
* Tiktok

### WhatsApp Default Message

> Hi Fandi, I found your portfolio and would love to connect.

---

# 10. Additional Pages

## Projects

### Objective

Memberikan ruang untuk menampilkan seluruh proyek tanpa menambah kompleksitas case study individual.

### Requirements

* Menampilkan seluruh proyek dalam format yang konsisten.
* Menyoroti konteks, keputusan, dan outcome.
* Memungkinkan penambahan proyek baru dengan mudah.
* Tidak memerlukan halaman detail per proyek pada V1.

---

## Blog

### Objective

Menjadi repositori pemikiran dan refleksi profesional.

### Requirements

* Menampilkan daftar artikel.
* Mendukung halaman detail artikel.
* Menggunakan MDX sebagai source of truth.
* Tidak membutuhkan CMS pada V1.

---

# 11. Footer

Built with curiosity, collaboration, and plenty of iteration.

© Fandi Arfa

---

# 12. Design Principles

## Design Direction

Editorial-tech with warmth.

The site should feel:

* Thoughtful
* Human
* Calm
* Mature
* Approachable

Avoid:

* Cold corporate aesthetics
* Startup clichés
* Over-designed visuals
* Trying too hard to impress

The goal is trust.

---

# 13. Motion Principles

Motion should support understanding.

Never distract.

Use:

* Subtle transitions
* Intentional emphasis
* Gentle hover states
* Respect reduced motion preferences

Avoid:

* Scroll-jacking
* Excessive GSAP timelines
* Constant floating effects
* Decorative animation without purpose

---

# 14. Accessibility Requirements

Must have:

* Semantic HTML
* Keyboard navigability
* Visible focus states
* Proper heading hierarchy
* Sufficient color contrast
* Reduced motion support
* Accessible form labels where applicable
* Alt text for meaningful imagery

Target:

> WCAG 2.2 AA compliance where practical.

---

# 15. Technical Recommendations

Framework:

* SvelteKit

Language:

* TypeScript

UI Components:

* shadcn-svelte

Styling:

* Tailwind CSS

Animation:

* GSAP (minimal usage)

Icons:

* Lucide Icons

Content:

* TypeScript (Projects)
* MDX (Blog)

Deployment:

* Vercel

Analytics:

* Plausible atau Umami (optional)

Contact:

* mailto
* WhatsApp (wa.me)

---

# 16. Tone of Voice

Write like:

* A thoughtful collaborator
* A curious builder
* Someone confident without arrogance

Avoid sounding:

* Salesy
* Overly self-promotional
* Excessively humble
* Corporate and generic

---

# 17. Key Message

Jika seseorang hanya mengingat satu hal setelah meninggalkan portfolio ini:

> "Fandi mengubah ide menjadi produk dengan perhatian pada detail."

Jika mereka mengingat satu hal lagi:

> "Dia terlihat seperti seseorang yang akan menyenangkan untuk diajak membangun sesuatu bersama."

---

# 18. Future Opportunities (Out of Scope for V1)

* Dark/light theme toggle
* Search untuk Blog
* RSS feed
* Reading list
* Newsletter
* Speaking section
* Uses page
* Guestbook
* Multi-language support
* Project detail pages
* CMS integration

---

# 19. Definition of Success

Portfolio ini berhasil apabila:

* Orang merasa mengenal Fandi, bukan hanya melihat hasil kerjanya.
* Proyek dipahami sebagai cerita tentang keputusan dan pembelajaran.
* Pengunjung membangun rasa percaya sebelum melakukan kontak.
* Portfolio tetap terasa autentik beberapa tahun dari sekarang.
* Fandi merasa,

> "Ya, ini benar-benar merepresentasikan diriku."
