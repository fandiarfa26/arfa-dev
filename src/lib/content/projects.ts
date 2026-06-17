export type Project = {
  title: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  image?: string;
  situation: string;
  challenge: string;
  decision: string;
  outcome: string;
  links?: {
    demo?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    title: "ArfaPOS",
    description:
      "A point-of-sale application built as a personal side project to explore modern full-stack development, experiment with AI-assisted workflows, and validate a practical POS product concept.",
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
    situation:
      "I built ArfaPOS in 2026 as a personal side project to explore new technologies, strengthen my portfolio, and validate a point-of-sale product idea. I led the project end-to-end as a full-stack developer while leveraging AI-assisted workflows through OpenCode to accelerate implementation and experimentation.",
    challenge:
      "Designing realistic POS transaction flows while keeping an AI-assisted codebase maintainable and consistent.",
    decision:
      "I adopted an AI-assisted workflow with OpenCode to accelerate development, while reviewing every generated solution and prioritizing an MVP built with SvelteKit.",
    outcome:
      "ArfaPOS was successfully deployed as a working application accessible online and evolved beyond a simple experiment into a functional POS implementation intended for real-world use. The project became both a portfolio piece and a practical demonstration of how AI-assisted development can accelerate delivery while preserving human ownership of technical decisions and product direction.",
    links: {
      demo: "https://arfa-pos.vercel.app",
      github: "https://github.com/fandiarfa26/arfa-pos",
    },
  },
  {
    title: 'Brighton Website Migration',
    description: 'Migrated Brighton’s legacy PHP website to Next.js and helped deliver a standalone agent dashboard within a modern frontend architecture.',
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
    situation:
      'Brighton initiated a migration of its legacy PHP website to a modern Next.js architecture backed by separate API services. During the three-month migration effort, I worked on several key areas including FAQ, Testimonial, Authentication flows, and the Agent Dashboard. I also handled bug fixes and feature enhancements while leveraging Claude Code as part of my development workflow.',
    challenge:
      'Migrating legacy features to a new stack without disrupting existing functionality while meeting a tight migration timeline.',
    decision:
      'The Agent Dashboard was separated into its own application, allowing it to evolve independently from the public-facing website.',
    outcome:
      'The website was successfully migrated to Next.js, and the Agent Dashboard was delivered as a standalone application within the new architecture.',
    links: {
      demo: 'https://www.brighton.co.id/',
      github: ''
    }
  },
  {
    title: 'FoodieMu App',
    description: 'A food delivery platform that connected customers, UMKM partners, drivers, and students who promoted local businesses through an affiliate-based ecosystem.',
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
    situation: 'FoodieMu App was developed by PT. Inovasi Utama Nusantara in collaboration with Universitas Muhammadiyah Kalimantan Timur. The platform connected customers, UMKM partners, drivers, and students in a food delivery ecosystem. Students could promote local businesses through an affiliate-like model while users ordered food through the mobile app.',
    challenge: 'Building a multi-role food delivery application while learning Flutter for the first time.',
    decision: 'I used Flutter with a modular code structure to manage feature complexity and support Android and iOS from a single codebase.',
    outcome: 'The application was released and used by customers, UMKM partners, and drivers to support real-world food ordering and promotion activities.',
    links: {
      demo: '',
      github: ''
    }
  },
  {
    title: 'Hi Nano',
    description: 'Learning platform with a Flutter mobile app and React admin dashboard for educational content, quizzes, and progress tracking.',
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
    situation:
      'I worked on Hi Nano, a learning platform focused on nano-related educational content for a client project. The platform consisted of a Flutter mobile application for learners and a React-based admin dashboard for administrators. Both applications were connected through Firebase to manage learning materials, quizzes, and user progress data.',
    challenge:
      'Keeping learning data synchronized between the mobile app and admin dashboard while maintaining a consistent Firebase data flow.',
    decision:
      'I used Firebase as the central data source shared by both the Flutter application and the React admin dashboard to simplify data synchronization and monitoring.',
    outcome:
      'The project was successfully delivered with both the mobile learning app and admin dashboard fully functional, including learning materials, quizzes, and progress tracking features.',
    links: {
      demo: '',
      github: ''
    }
  }
];
