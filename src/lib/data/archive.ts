export type ArchiveItem = {
  version: string;
  year: number;
  title: string;
  description: string;
  tech: string[];
  status: string;
  url: string;
};

export const archives: ArchiveItem[] = [
  {
    version: "V1",
    year: 2021,
    title: "First Portfolio",
    description:
      "Built during college while learning web development. My first attempt at creating a personal portfolio to showcase projects and experiments.",
    tech: ["HTML", "CSS", "Bootstrap"],
    status: "Student",
    url: "https://fandiarfa26.github.io/portfolio-v1",
  },
  {
    version: "V2",
    year: 2023,
    title: "Mid-Career Refresh",
    description:
      "Rebuilt from scratch with modern tooling and a cleaner, more intentional design to reflect growing frontend experience.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "Early Career",
    url: "https://fandiarfa26.github.io",
  },
  {
    version: "V3",
    year: 2025,
    title: "Previous Portfolio",
    description:
      "The immediate predecessor to the current site. Refined visual language with an emphasis on typography and minimalism.",
    tech: ["SvelteKit", "TypeScript", "Tailwind CSS", "mdsvex"],
    status: "Previous Version",
    url: "https://v3.arfa.dev",
  },
];
