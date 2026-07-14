import type { L } from '$lib/types';

export type Experience = {
  role: string;
  period: string;
  company: string;
  highlights: { en: string[]; id: string[] };
  atsHighlights?: { en: string[]; id: string[] };
  reflection: L;
};

export const experiences: Experience[] = [
  {
    role: 'IT Staff Frontend Developer',
    period: 'Oct 2025 — Jul 2026',
    company: 'Brighton Real Estate',
    highlights: {
      en: [
        'Migrated more than five legacy PHP pages to Next.js within a 3-month delivery window alongside a cross-functional team of 3 frontend and 2 backend engineers, preserving complex business logic while achieving green Lighthouse and Core Web Vitals assessments across the migrated experiences.',
        'Collaborated with the team to separate the Agent Dashboard into an independent application, reducing complexity in the primary codebase and establishing clearer boundaries for future development and ownership.'
      ],
      id: [
        'Migrasi lebih dari lima halaman legacy PHP ke Next.js dalam jangka waktu 3 bulan bersama tim cross-functional 3 engineer frontend dan 2 engineer backend, mempertahankan logika bisnis kompleks sekaligus mencapai penilaian Lighthouse dan Core Web Vitals yang baik di seluruh halaman yang dimigrasi.',
        'Berkolaborasi dengan tim untuk memisahkan Agent Dashboard menjadi aplikasi independen, mengurangi kompleksitas pada codebase utama dan menetapkan batasan yang lebih jelas untuk pengembangan dan kepemilikan di masa mendatang.'
      ]
    },
    atsHighlights: {
      en: [
        'Migrated legacy PHP platform to Next.js, improving maintainability and scalability',
        'Built key user-facing pages (Articles, FAQ, Testimonials) with responsive design',
        'Implemented authentication features (login, registration, password reset)',
        'Developed a separate Agent Dashboard application using Next.js',
        'Improved development efficiency and code quality using AI-assisted tools (Claude Code)'
      ],
      id: [
        'Migrasi platform legacy PHP ke Next.js, meningkatkan maintainability dan scalability',
        'Membangun halaman user-facing utama (Artikel, FAQ, Testimoni) dengan responsive design',
        'Mengimplementasikan fitur autentikasi (login, registrasi, reset password)',
        'Mengembangkan aplikasi Agent Dashboard terpisah menggunakan Next.js',
        'Meningkatkan efisiensi pengembangan dan kualitas kode menggunakan tools AI-assisted (Claude Code)'
      ]
    },
    reflection: {
      en: 'Working on this migration reinforced my belief that AI-assisted workflows, particularly with tools like Claude Code, are most effective when paired with strong engineering judgment. The biggest gains came from accelerating exploration and iteration while keeping architectural decisions firmly human-driven.',
      id: 'Bekerja pada migrasi ini memperkuat keyakinan saya bahwa alur kerja yang dibantu AI, terutama dengan tools seperti Claude Code, paling efektif ketika dipadukan dengan penilaian teknis yang kuat. Keuntungan terbesar datang dari mempercepat eksplorasi dan iterasi sambil mempertahankan keputusan arsitektur sepenuhnya berada di tangan manusia.'
    }
  },
  {
    role: 'Frontend Staff Developer',
    period: 'Aug 2023 — Aug 2025',
    company: 'PT. Ada Ide Langsung Jalan',
    highlights: {
      en: [
        'Collaborated within a cross-functional team of 11–20 members to deliver three long-running web and mobile products using React and Flutter, adapting quickly to shifting priorities and diverse stakeholder needs.',
        'Contributed to improving project management SOPs through active feedback and process discussions, helping establish clearer ownership and more consistent delivery practices while becoming a go-to person for frontend-related questions within the team.'
      ],
      id: [
        'Berkolaborasi dalam tim cross-functional beranggotakan 11–20 orang untuk menghasilkan tiga produk web dan mobile jangka panjang menggunakan React dan Flutter, beradaptasi cepat dengan perubahan prioritas dan kebutuhan stakeholder yang beragam.',
        'Berkontribusi dalam perbaikan SOP manajemen proyek melalui feedback aktif dan diskusi proses, membantu menetapkan kepemilikan yang lebih jelas dan praktik pengiriman yang lebih konsisten sekaligus menjadi rujukan untuk pertanyaan terkait frontend di tim.'
      ]
    },
    atsHighlights: {
      en: [
        'Built and delivered multiple web and mobile applications using React and Flutter',
        'Collaborated within a large cross-functional team (design, backend, product)',
        'Contributed to internal SOP improvements to enhance development workflow efficiency'
      ],
      id: [
        'Membangun dan menghasilkan beberapa aplikasi web dan mobile menggunakan React dan Flutter',
        'Berkolaborasi dalam tim cross-functional besar (desain, backend, produk)',
        'Berkontribusi dalam perbaikan SOP internal untuk meningkatkan efisiensi alur kerja pengembangan'
      ]
    },
    reflection: {
      en: 'This experience taught me that great products emerge from strong collaboration. Technical skills matter, but shared context, trust, and clear execution processes are what enable teams to consistently deliver meaningful outcomes.',
      id: 'Pengalaman ini mengajarkan saya bahwa produk yang hebat lahir dari kolaborasi yang kuat. Kemampuan teknis itu penting, tetapi konteks bersama, kepercayaan, dan proses eksekusi yang jelas adalah yang memungkinkan tim secara konsisten menghasilkan outcome yang bermakna.'
    }
  },
  {
    role: 'Frontend Developer',
    period: 'Jul 2020 — Aug 2023',
    company: 'PT. Inovasi Utama Nusantara',
    highlights: {
      en: [
        'Delivered 5–6 customer-facing products across domains including food ordering, e-learning, e-commerce, health education, and digital publishing, building responsive experiences with React, Vue.js, and Flutter while adapting quickly to diverse business requirements.',
        'Progressively took ownership of frontend initiatives by contributing to technical solution discussions, serving as the frontend point of contact on selected projects, and bridging communication between UI/UX designers and backend engineers to align product expectations and implementation.'
      ],
      id: [
        'Menghasilkan 5–6 produk customer-facing di berbagai domain termasuk pemesanan makanan, e-learning, e-commerce, edukasi kesehatan, dan penerbitan digital, membangun pengalaman responsif dengan React, Vue.js, dan Flutter sambil beradaptasi cepat dengan beragam kebutuhan bisnis.',
        'Secara bertahap mengambil inisiatif frontend dengan berkontribusi dalam diskusi solusi teknis, menjadi titik kontak frontend pada proyek-proyek tertentu, dan menjembatani komunikasi antara desainer UI/UX dan engineer backend untuk menyelaraskan ekspektasi produk dan implementasi.'
      ]
    },
    atsHighlights: {
      en: [
        'Developed and maintained web and mobile applications across e-commerce, education, and food-ordering domains',
        'Built responsive and user-friendly interfaces using React, Vue, and Flutter',
        'Worked closely with UI/UX designers and backend engineers to deliver end-to-end features'
      ],
      id: [
        'Mengembangkan dan memelihara aplikasi web dan mobile di domain e-commerce, edukasi, dan pemesanan makanan',
        'Membangun antarmuka responsif dan ramah pengguna menggunakan React, Vue, dan Flutter',
        'Bekerja sama dengan desainer UI/UX dan engineer backend untuk menghasilkan fitur end-to-end'
      ]
    },
    reflection: {
      en: 'This period taught me that technologies evolve faster than careers. The most valuable skill I developed was learning how to learn—adapting quickly to new tools, domains, and challenges while focusing on delivering meaningful products.',
      id: 'Periode ini mengajarkan saya bahwa teknologi berkembang lebih cepat dari karir. Kemampuan paling berharga yang saya kembangkan adalah belajar cara belajar—beradaptasi cepat dengan tools, domain, dan tantangan baru sambil fokus menghasilkan produk yang bermakna.'
    }
  },
  {
    role: 'IT Support Intern',
    period: 'Jul 2019 — Jul 2020',
    company: 'PUIPT DLI UM',
    highlights: {
      en: [
        'Served as one of the primary contributors to the development of journal conference platforms and institutional websites using CodeIgniter, Bootstrap, HTML, CSS, and JavaScript, gaining early experience delivering solutions for real organizational needs.',
        'Represented the institution at a technology exhibition in Bali by supporting booth operations, demonstrating technology to external audiences, and communicating technical concepts to diverse stakeholders.'
      ],
      id: [
        'Menjadi salah satu kontributor utama dalam pengembangan platform konferensi jurnal dan website institusional menggunakan CodeIgniter, Bootstrap, HTML, CSS, dan JavaScript, mendapatkan pengalaman awal dalam memberikan solusi untuk kebutuhan organisasi nyata.',
        'Mewakili institusi dalam pameran teknologi di Bali dengan mendukung operasi booth, mendemonstrasikan teknologi kepada audiens eksternal, dan mengkomunikasikan konsep teknis kepada beragam stakeholder.'
      ]
    },
    atsHighlights: {
      en: [
        'Assisted in developing company profile and conference websites',
        'Provided technical support for institutional events',
        'Represented the organization at a technology exhibition in Bali'
      ],
      id: [
        'Membantu mengembangkan website profil perusahaan dan konferensi',
        'Memberikan dukungan teknis untuk acara institusional',
        'Mewakili organisasi dalam pameran teknologi di Bali'
      ]
    },
    reflection: {
      en: 'This internship taught me that the fastest way to grow is through direct experience. Working closely with users, stakeholders, and real-world constraints accelerated my learning far beyond what theory alone could provide.',
      id: 'Magang ini mengajarkan saya bahwa cara tercepat untuk berkembang adalah melalui pengalaman langsung. Bekerja sama dengan pengguna, stakeholder, dan kendala nyata dunia mempercepat pembelajaran saya jauh melampaui apa yang hanya teori saja bisa berikan.'
    }
  },
  {
    role: 'Web Developer Intern',
    period: 'Jan 2015 — Jun 2015',
    company: 'CV. Girisa Teknologi',
    highlights: {
      en: [
        'Independently developed a hotel data management module using Bootstrap and jQuery, gaining hands-on experience with CRUD workflows, debugging, and translating requirements into working features.',
        'Collaborated closely with fellow interns to solve unfamiliar technical challenges, building confidence through iterative learning and shared problem-solving.'
      ],
      id: [
        'Mengembangkan modul manajemen data hotel secara mandiri menggunakan Bootstrap dan jQuery, mendapatkan pengalaman langsung dengan alur kerja CRUD, debugging, dan menerjemahkan kebutuhan menjadi fitur yang berfungsi.',
        'Bekerja sama dengan sesama magang untuk mengatasi tantangan teknis yang belum dikenal, membangun kepercayaan diri melalui pembelajaran iteratif dan pemecahan masalah bersama.'
      ]
    },
    atsHighlights: {
      en: [
        'Built a hotel data management feature using Bootstrap and jQuery',
        'Implemented CRUD functionality and handled basic debugging tasks',
        'Collaborated with team members to deliver project requirements',
        'Gained hands-on experience in web development fundamentals'
      ],
      id: [
        'Membangun fitur manajemen data hotel menggunakan Bootstrap dan jQuery',
        'Mengimplementasikan fungsionalitas CRUD dan menangani tugas debugging dasar',
        'Berkolaborasi dengan anggota tim untuk memenuhi kebutuhan proyek',
        'Mendapatkan pengalaman langsung dalam fundamental pengembangan web'
      ]
    },
    reflection: {
      en: 'This experience taught me that practical experience accelerates growth. Building real features, making mistakes, and learning through experimentation proved far more valuable than waiting until I felt fully prepared.',
      id: 'Pengalaman ini mengajarkan saya bahwa pengalaman praktis mempercepat pertumbuhan. Membangun fitur nyata, membuat kesalahan, dan belajar melalui eksperimen terbukti jauh lebih berharga daripada menunggu sampai saya merasa sepenuhnya siap.'
    }
  }
];
