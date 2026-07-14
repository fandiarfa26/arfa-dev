import type { L } from '$lib/types';

export type Project = {
  title: string;
  description: L;
  year: string;
  role: string;
  tags: string[];
  image?: string;
  situation: L;
  challenge: L;
  decision: L;
  outcome: L;
  atsHighlights?: { en: string[]; id: string[] };
  links?: {
    demo?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    title: "ArfaPOS",
    description: {
      en: "A point-of-sale application built as a personal side project to explore modern full-stack development, experiment with AI-assisted workflows, and validate a practical POS product concept.",
      id: "Aplikasi point-of-sale yang dibangun sebagai proyek sampingan pribadi untuk mengeksplorasi pengembangan full-stack modern, bereksperimen dengan alur kerja AI-assisted, dan memvalidasi konsep produk POS yang praktis."
    },
    year: "2026",
    role: "Full-stack Developer (AI-assisted development)",
    tags: [
      "SvelteKit",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "shadcn/ui",
      "POS",
      "AI-Assisted Development",
      "Vibe Coding",
      "Side Project",
    ],
    image: '/images/projects/arfa-pos.webp',
    situation: {
      en: "I built ArfaPOS in 2026 as a personal side project to explore new technologies, strengthen my portfolio, and validate a point-of-sale product idea. I led the project end-to-end as a full-stack developer while leveraging AI-assisted workflows through OpenCode to accelerate implementation and experimentation.",
      id: "Saya membangun ArfaPOS pada tahun 2026 sebagai proyek sampingan pribadi untuk mengeksplorasi teknologi baru, memperkuat portofolio saya, dan memvalidasi ide produk point-of-sale. Saya memimpin proyek ini dari awal hingga akhir sebagai full-stack developer sambil memanfaatkan alur kerja AI-assisted melalui OpenCode untuk mempercepat implementasi dan eksperimen."
    },
    challenge: {
      en: "Designing realistic POS transaction flows while keeping an AI-assisted codebase maintainable and consistent.",
      id: "Merancang alur transaksi POS yang realistis sambil menjaga codebase yang dibantu AI tetap dapat dipelihara dan konsisten."
    },
    decision: {
      en: "I adopted an AI-assisted workflow with OpenCode to accelerate development, while reviewing every generated solution and prioritizing an MVP built with SvelteKit.",
      id: "Saya mengadopsi alur kerja AI-assisted dengan OpenCode untuk mempercepat pengembangan, sambil meninjau setiap solusi yang dihasilkan dan memprioritaskan MVP yang dibangun dengan SvelteKit."
    },
    outcome: {
      en: "ArfaPOS was successfully deployed as a working application accessible online and evolved beyond a simple experiment into a functional POS implementation intended for real-world use. The project became both a portfolio piece and a practical demonstration of how AI-assisted development can accelerate delivery while preserving human ownership of technical decisions and product direction.",
      id: "ArfaPOS berhasil di-deploy sebagai aplikasi yang berfungsi dan dapat diakses secara online, berkembang melampaui sekadar eksperimen menjadi implementasi POS yang fungsial untuk penggunaan nyata. Proyek ini menjadi bagian portofolio sekaligus demonstrasi praktis bagaimana pengembangan AI-assisted dapat mempercepat pengiriman sambil mempertahankan kepemilikan manusia atas keputusan teknis dan arah produk."
    },
    atsHighlights: {
      en: [
        'Developed a full-stack point-of-sale application using SvelteKit and Supabase',
        'Designed and implemented POS transaction flows for real-world use'
      ],
      id: [
        'Mengembangkan aplikasi point-of-sale full-stack menggunakan SvelteKit dan Supabase',
        'Merancang dan mengimplementasikan alur transaksi POS untuk penggunaan nyata'
      ]
    },
    links: {
      demo: "https://arfa-pos.vercel.app",
      github: "https://github.com/fandiarfa26/arfa-pos",
    },
  },
  {
    title: 'Brighton Website Migration',
    description: {
      en: 'Migrated Brighton\'s legacy PHP website to Next.js and helped deliver a standalone agent dashboard within a modern frontend architecture.',
      id: 'Migrasi website legacy PHP Brighton ke Next.js dan membantu menghasilkan agent dashboard mandiri dalam arsitektur frontend modern.'
    },
    year: '2025–2026',
    role: 'Frontend Developer',
    tags: [
      'Next.js',
      'TypeScript',
      'React Query',
      'TailwindCSS',
      'shadcn/ui',
      'Claude Code',
      'Migration'
    ],
    image: '/images/projects/brighton.webp',
    situation: {
      en: 'Brighton initiated a migration of its legacy PHP website to a modern Next.js architecture backed by separate API services. During the three-month migration effort, I worked on several key areas including FAQ, Testimonial, Authentication flows, and the Agent Dashboard. I also handled bug fixes and feature enhancements while leveraging Claude Code as part of my development workflow.',
      id: 'Brighton memulai migrasi website legacy PHP mereka ke arsitektur Next.js modern yang didukung oleh layanan API terpisah. Selama upaya migrasi tiga bulan, saya bekerja di beberapa area kunci termasuk alur FAQ, Testimoni, Autentikasi, dan Agent Dashboard. Saya juga menangani perbaikan bug dan peningkatan fitur sambil memanfaatkan Claude Code sebagai bagian dari alur kerja pengembangan saya.'
    },
    challenge: {
      en: 'Migrating legacy features to a new stack without disrupting existing functionality while meeting a tight migration timeline.',
      id: 'Migrasi fitur legacy ke stack baru tanpa mengganggu fungsionalitas yang ada sambil memenuhi jadwal migrasi yang ketat.'
    },
    decision: {
      en: 'The Agent Dashboard was separated into its own application, allowing it to evolve independently from the public-facing website.',
      id: 'Agent Dashboard dipisahkan menjadi aplikasi sendiri, memungkinkannya berkembang secara independen dari website publik.'
    },
    outcome: {
      en: 'The website was successfully migrated to Next.js, and the Agent Dashboard was delivered as a standalone application within the new architecture.',
      id: 'Website berhasil dimigrasi ke Next.js, dan Agent Dashboard dihasilkan sebagai aplikasi mandiri dalam arsitektur baru.'
    },
    atsHighlights: {
      en: [
        'Migrated legacy system to modern web architecture',
        'Built authentication system and dashboard for internal users'
      ],
      id: [
        'Migrasi sistem legacy ke arsitektur web modern',
        'Membangun sistem autentikasi dan dashboard untuk pengguna internal'
      ]
    },
    links: {
      demo: 'https://www.brighton.co.id/',
      github: ''
    }
  },
  {
    title: 'Wedding Invitation',
    description: {
      en: 'A private wedding invitation website with invitation code validation for registered guests.',
      id: 'Website undangan pernikahan pribadi dengan validasi kode undangan untuk tamu yang terdaftar.'
    },
    year: '2022',
    role: 'Frontend Developer',
    tags: ['React', 'Tailwind CSS', 'Wedding Invitation', 'Frontend'],
    image: '/images/projects/winvit.webp',
    situation: {
      en: 'I built this wedding invitation website for my own wedding as a personal side project. Instead of following the common approach where anyone could access an invitation by changing a query parameter, I wanted a more private system that only allowed registered guests to view their invitation.',
      id: 'Saya membangun website undangan pernikahan ini untuk pernikahan saya sendiri sebagai proyek sampingan pribadi. Daripada mengikuti pendekatan umum di mana siapa pun dapat mengakses undangan dengan mengubah query parameter, saya menginginkan sistem yang lebih privat yang hanya memungkinkan tamu yang terdaftar melihat undangan mereka.'
    },
    challenge: {
      en: 'Designing a secure yet simple invitation validation flow while keeping the experience easy for invited guests.',
      id: 'Merancang alur validasi undangan yang aman namun sederhana sambil menjaga pengalaman tetap mudah bagi tamu yang diundang.'
    },
    decision: {
      en: 'I replaced the typical name-based query parameter with a unique invitation code and prioritized a straightforward validation flow before displaying the invitation.',
      id: 'Saya mengganti query parameter berbasis nama yang umum digunakan dengan kode undangan unik dan memprioritaskan alur validasi yang lugas sebelum menampilkan undangan.'
    },
    outcome: {
      en: 'The website was successfully used during my wedding. Registered guests could access their invitations through the validation process, and the project also served as a practical learning experience in building a more privacy-focused invitation system.',
      id: 'Website berhasil digunakan selama pernikahan saya. Tamu yang terdaftar dapat mengakses undangan mereka melalui proses validasi, dan proyek ini juga menjadi pengalaman belajar praktis dalam membangun sistem undangan yang lebih berfokus pada privasi.'
    },
    atsHighlights: {
      en: [
        'Built a private wedding invitation web application using React and Tailwind CSS.',
        'Implemented invitation code validation to ensure only registered guests could access the invitation.'
      ],
      id: [
        'Membangun aplikasi web undangan pernikahan pribadi menggunakan React dan Tailwind CSS.',
        'Mengimplementasikan validasi kode undangan untuk memastikan hanya tamu terdaftar yang dapat mengakses undangan.'
      ]
    },
    links: {
      demo: 'https://mithafandi.vercel.app/to/ab12-Seseorang',
      github: 'https://github.com/fandiarfa26/mithafandi'
    }
  },
  {
    title: 'FoodieMu App',
    description: {
      en: 'A food delivery platform that connected customers, UMKM partners, drivers, and students who promoted local businesses through an affiliate-based ecosystem.',
      id: 'Platform pengiriman makanan yang menghubungkan pelanggan, mitra UMKM, pengemudi, dan mahasiswa yang mempromosikan bisnis lokal melalui ekosistem berbasis afiliasi.'
    },
    year: '2021–2022',
    role: 'Mobile Developer',
    tags: [
      'Flutter',
      'Firebase',
      'Provider',
      'Google Maps',
      'REST API',
      'Mobile App'
    ],
    image: '/images/projects/foodiemu.webp',
    situation: {
      en: 'FoodieMu App was developed by PT. Inovasi Utama Nusantara in collaboration with Universitas Muhammadiyah Kalimantan Timur. The platform connected customers, UMKM partners, drivers, and students in a food delivery ecosystem. Students could promote local businesses through an affiliate-like model while users ordered food through the mobile app.',
      id: 'Aplikasi FoodieMu dikembangkan oleh PT. Inovasi Utama Nusantara bekerja sama dengan Universitas Muhammadiyah Kalimantan Timur. Platform ini menghubungkan pelanggan, mitra UMKM, pengemudi, dan mahasiswa dalam ekosistem pengiriman makanan. Mahasiswa dapat mempromosikan bisnis lokal melalui model mirip afiliasi sementara pengguna memesan makanan melalui aplikasi mobile.'
    },
    challenge: {
      en: 'Building a multi-role food delivery application while learning Flutter for the first time.',
      id: 'Membangun aplikasi pengiriman makanan multi-peran sambil mempelajari Flutter untuk pertama kalinya.'
    },
    decision: {
      en: 'I used Flutter with a modular code structure to manage feature complexity and support Android and iOS from a single codebase.',
      id: 'Saya menggunakan Flutter dengan struktur kode modular untuk mengelola kompleksitas fitur dan mendukung Android dan iOS dari satu codebase.'
    },
    outcome: {
      en: 'The application was released and used by customers, UMKM partners, and drivers to support real-world food ordering and promotion activities.',
      id: 'Aplikasi dirilis dan digunakan oleh pelanggan, mitra UMKM, dan pengemudi untuk mendukung aktivitas pemesanan dan promosi makanan di dunia nyata.'
    },
    atsHighlights: {
      en: [
        'Built a multi-role food delivery platform using Flutter and Firebase',
        'Supported Android and iOS delivery from a single codebase'
      ],
      id: [
        'Membangun platform pengiriman makanan multi-peran menggunakan Flutter dan Firebase',
        'Mendukung pengiriman Android dan iOS dari satu codebase'
      ]
    },
    links: {
      demo: '',
      github: ''
    }
  },
  {
    title: 'Hi Nano',
    description: {
      en: 'Learning platform with a Flutter mobile app and React admin dashboard for educational content, quizzes, and progress tracking.',
      id: 'Platform pembelajaran dengan aplikasi mobile Flutter dan dashboard admin React untuk konten edukasi, kuis, dan pelacakan progress.'
    },
    year: '2021–2022',
    role: 'Mobile & Web Developer',
    tags: [
      'Flutter',
      'React',
      'TailwindCSS',
      'Firebase',
      'Education',
      'Quiz System'
    ],
    image: '/images/projects/hi-nano.webp',
    situation: {
      en: 'I worked on Hi Nano, a learning platform focused on nano-related educational content for a client project. The platform consisted of a Flutter mobile application for learners and a React-based admin dashboard for administrators. Both applications were connected through Firebase to manage learning materials, quizzes, and user progress data.',
      id: 'Saya mengerjakan Hi Nano, platform pembelajaran yang berfokus pada konten edukasi terkait nano untuk proyek klien. Platform ini terdiri dari aplikasi mobile Flutter untuk pelajar dan dashboard admin berbasis React untuk administrator. Kedua aplikasi terhubung melalui Firebase untuk mengelola materi pembelajaran, kuis, dan data progress pengguna.'
    },
    challenge: {
      en: 'Keeping learning data synchronized between the mobile app and admin dashboard while maintaining a consistent Firebase data flow.',
      id: 'Menjaga data pembelajaran tetap tersinkronisasi antara aplikasi mobile dan dashboard admin sambil mempertahankan alur data Firebase yang konsisten.'
    },
    decision: {
      en: 'I used Firebase as the central data source shared by both the Flutter application and the React admin dashboard to simplify data synchronization and monitoring.',
      id: 'Saya menggunakan Firebase sebagai sumber data pusat yang dibagikan oleh aplikasi Flutter dan dashboard admin React untuk menyederhanakan sinkronisasi dan pemantauan data.'
    },
    outcome: {
      en: 'The project was successfully delivered with both the mobile learning app and admin dashboard fully functional, including learning materials, quizzes, and progress tracking features.',
      id: 'Proyek berhasil dihasilkan dengan aplikasi mobile pembelajaran dan dashboard admin berfungsi penuh, termasuk fitur materi pembelajaran, kuis, dan pelacakan progress.'
    },
    atsHighlights: {
      en: [
        'Developed a learning platform with Flutter mobile app and React admin dashboard',
        'Implemented synchronized data flow between mobile app and admin dashboard'
      ],
      id: [
        'Mengembangkan platform pembelajaran dengan aplikasi mobile Flutter dan dashboard admin React',
        'Mengimplementasikan alur data tersinkronisasi antara aplikasi mobile dan dashboard admin'
      ]
    },
    links: {
      demo: '',
      github: ''
    }
  }
];
