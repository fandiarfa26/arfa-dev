import { experiences } from '$lib/content/experiences';
import { projects } from '$lib/content/projects';
import type { L } from '$lib/types';

export const personalInfo = {
  name: 'M. Fandi Arfabuma',
  location: {
    en: 'Bangkalan, East Java, Indonesia',
    id: 'Bangkalan, Jawa Timur, Indonesia'
  } satisfies L,
  email: 'arfabuma.987@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arfabuma/',
  website: 'https://www.arfabuma.web.id'
};

export const summary: L = {
  en: "I'm a Frontend Software Engineer with 5+ years of experience building web and mobile applications using Next.js, React, Svelte, and Flutter. I've worked across multiple industries, delivering scalable and user-focused solutions while collaborating closely with design and backend teams. I hold a Bachelor's degree in Informatics Engineering from Universitas Negeri Malang (GPA: 3.71) and have a strong interest in continuous learning and emerging technologies.",
  id: "Saya adalah Frontend Software Engineer dengan pengalaman lebih dari 5 tahun membangun aplikasi web dan mobile menggunakan Next.js, React, Svelte, dan Flutter. Saya telah bekerja di berbagai industri, menghasilkan solusi yang skalabel dan berfokus pada pengguna sambil berkolaborasi erat dengan tim desain dan backend. Saya memegang gelar Sarjana Teknik Informatika dari Universitas Negeri Malang (IPK: 3.71) dan memiliki ketertarikan kuat pada pembelajaran berkelanjutan dan teknologi terkini."
};

export const skills = [
  { category: 'Programming', items: ['JavaScript', 'TypeScript', 'Dart', 'Python'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Svelte', 'Flutter'] },
  { category: 'Styling', items: ['Tailwind CSS', 'Bootstrap'] },
  { category: 'Tools & Platforms', items: ['Git', 'Firebase', 'Vercel', 'Figma', 'Claude Code', 'ChatGPT'] }
];

export const education = [
  { degree: { en: 'Bachelor of Engineering - Informatics Engineering', id: 'Sarjana Teknik - Teknik Informatika' } satisfies L, university: 'Universitas Negeri Malang', period: '2016 – 2021', gpa: '3.71' },
  { degree: { en: 'Computer Software Engineering', id: 'Rekayasa Perangkat Lunak' } satisfies L, university: 'SMK Negeri 5 Malang', period: '2013 – 2016' }
];

export const languages = {
  en: ['Indonesian', 'English'],
  id: ['Indonesia', 'Inggris']
};

export { experiences, projects };
