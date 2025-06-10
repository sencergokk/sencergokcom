import { Metadata } from 'next';
import ModernProjectsHero from '@/components/sections/ModernProjectsHero';
import ProjectGrid from '@/components/sections/ProjectGrid';

export const metadata: Metadata = {
  title: 'Projelerimiz - Skycer',
  description: 'Skycer tarafından başarıyla tamamlanan projeler. Müşterilerimiz için yarattığımız değeri görün.',
};

export default function ProjectsPage() {
  return (
    <main>
      <ModernProjectsHero />
      <ProjectGrid />
    </main>
  );
} 