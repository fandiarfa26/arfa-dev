import { experiences } from '$lib/content/experiences';
import { projects } from '$lib/content/projects';

export const personalInfo = {
  name: 'M. Fandi Arfabuma',
  location: 'Bangkalan, East Java, Indonesia',
  email: 'arfabuma.987@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arfabuma/',
  website: 'https://www.arfabuma.web.id'
};

export const summary =
  "I'm a Frontend Software Engineer with 5+ years of experience building web and mobile applications using Next.js, React, Svelte, and Flutter. I've worked across multiple industries, delivering scalable and user-focused solutions while collaborating closely with design and backend teams. I hold a Bachelor's degree in Informatics Engineering from Universitas Negeri Malang (GPA: 3.71) and have a strong interest in continuous learning and emerging technologies.";

export const skills = [
  { category: 'Programming', items: ['JavaScript', 'TypeScript', 'Dart', 'Python'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Svelte', 'Flutter'] },
  { category: 'Styling', items: ['Tailwind CSS', 'Bootstrap'] },
  { category: 'Tools & Platforms', items: ['Git', 'Firebase', 'Vercel', 'Figma', 'Claude Code', 'ChatGPT'] }
];

export const education = [
  { degree: 'Bachelor of Engineering - Informatics Engineering', university: 'Universitas Negeri Malang', period: '2016 – 2021', gpa: '3.71' },
  { degree: 'Computer Software Engineering', university: 'SMK Negeri 5 Malang', period: '2013 – 2016' }
];

export const languages = ['Indonesian', 'English'];

export { experiences, projects };
