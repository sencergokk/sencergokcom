import { Metadata } from 'next';
import AboutSection from '@/components/sections/AboutSection';

export const metadata: Metadata = {
  title: 'Hakkımızda - Skycer',
  description: 'Skycer\'ın hikayesi, ekibi ve değerleri. Dijital dönüşümde güvenilir ortağınız.',
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
    </main>
  );
} 