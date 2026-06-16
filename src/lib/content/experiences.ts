export type Experience = {
  role: string;
  period: string;
  company: string;
  highlights: string[];
  reflection: string;
};

export const experiences: Experience[] = [
  {
    role: 'IT Staff Frontend Developer',
    period: 'Oct 2025 — Jul 2026',
    company: 'Brighton Real Estate',
    highlights: [
      'Migrated more than five legacy PHP pages to Next.js within a 3-month delivery window alongside a cross-functional team of 3 frontend and 2 backend engineers, preserving complex business logic while achieving green Lighthouse and Core Web Vitals assessments across the migrated experiences.',
      'Collaborated with the team to separate the Agent Dashboard into an independent application, reducing complexity in the primary codebase and establishing clearer boundaries for future development and ownership.'
    ],
    reflection: 'Working on this migration reinforced my belief that AI-assisted workflows, particularly with tools like Claude Code, are most effective when paired with strong engineering judgment. The biggest gains came from accelerating exploration and iteration while keeping architectural decisions firmly human-driven.'
  },
  {
    role: 'Frontend Staff Developer',
    period: 'Aug 2023 — Aug 2025',
    company: 'PT. Ada Ide Langsung Jalan',
    highlights: [
      'Collaborated within a cross-functional team of 11–20 members to deliver three long-running web and mobile products using React and Flutter, adapting quickly to shifting priorities and diverse stakeholder needs.',
      'Contributed to improving project management SOPs through active feedback and process discussions, helping establish clearer ownership and more consistent delivery practices while becoming a go-to person for frontend-related questions within the team.'
    ],
    reflection: 'This experience taught me that great products emerge from strong collaboration. Technical skills matter, but shared context, trust, and clear execution processes are what enable teams to consistently deliver meaningful outcomes.'
  },
  {
    role: 'Frontend Developer',
    period: 'Jul 2020 — Aug 2023',
    company: 'PT. Inovasi Utama Nusantara',
    highlights: [
      'Delivered 5–6 customer-facing products across domains including food ordering, e-learning, e-commerce, health education, and digital publishing, building responsive experiences with React, Vue.js, and Flutter while adapting quickly to diverse business requirements.',
      'Progressively took ownership of frontend initiatives by contributing to technical solution discussions, serving as the frontend point of contact on selected projects, and bridging communication between UI/UX designers and backend engineers to align product expectations and implementation.'
    ],
    reflection: 'This period taught me that technologies evolve faster than careers. The most valuable skill I developed was learning how to learn—adapting quickly to new tools, domains, and challenges while focusing on delivering meaningful products.'
  },
  {
    role: 'IT Support Intern',
    period: 'Jul 2019 — Jul 2020',
    company: 'PUIPT DLI UM',
    highlights: [
      'Served as one of the primary contributors to the development of journal conference platforms and institutional websites using CodeIgniter, Bootstrap, HTML, CSS, and JavaScript, gaining early experience delivering solutions for real organizational needs.',
      'Represented the institution at a technology exhibition in Bali by supporting booth operations, demonstrating technology to external audiences, and communicating technical concepts to diverse stakeholders.'
    ],
    reflection: 'This internship taught me that the fastest way to grow is through direct experience. Working closely with users, stakeholders, and real-world constraints accelerated my learning far beyond what theory alone could provide.'
  },
  {
    role: 'Web Developer Intern',
    period: 'Jan 2015 — Jun 2015',
    company: 'CV. Girisa Teknologi',
    highlights: [
      'Independently developed a hotel data management module using Bootstrap and jQuery, gaining hands-on experience with CRUD workflows, debugging, and translating requirements into working features.',
      'Collaborated closely with fellow interns to solve unfamiliar technical challenges, building confidence through iterative learning and shared problem-solving.'
    ],
    reflection: 'This experience taught me that practical experience accelerates growth. Building real features, making mistakes, and learning through experimentation proved far more valuable than waiting until I felt fully prepared.'
  }
];
