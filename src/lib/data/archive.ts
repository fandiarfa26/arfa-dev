export type ArchiveItem = {
  version: string;
  year: number;
  title: string;
  description: string;
  tech: string[];
  url: string;
  image?: string;
};

export const archives: ArchiveItem[] = [
  {
    version: "V1",
    year: 2021,
    title: "Starting the Journey",
    description:
      "My first personal portfolio created shortly after graduation. It was built to establish my online presence and begin my journey as a frontend developer.",
    tech: ["VueJS", "TailwindCSS"],
    url: "https://fandiarfa26.github.io",
    image: "/images/archive/v1.webp",
  },
  {
    version: "V2",
    year: 2023,
    title: "Growing as a Developer",
    description:
      "Rebuilt after gaining several years of professional experience. This version introduced React and reflected my growth as a frontend developer.",
    tech: ["React", "TailwindCSS"],
    url: "https://personal-web-22.vercel.app",
    image: "/images/archive/v2.webp",
  },
  {
    version: "V3",
    year: 2025,
    title: "Crafting the Experience",
    description:
      "Focused on personal branding with a cleaner design and interactive animations. This version explored how motion and visual details could improve the user experience.",
    tech: ["TailwindCSS", "NuxtJS", "TypeScript"],
    url: "https://fandiarfa26.vercel.app",
    image: "/images/archive/v3.webp",
  },
];
