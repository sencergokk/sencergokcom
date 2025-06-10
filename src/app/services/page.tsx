import { Metadata } from 'next';
import ModernServicesHero from '@/components/sections/ModernServicesHero';
import ServiceCards from '@/components/sections/ServiceCards';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz - Skycer',
  description: 'Skycer\'ın sunduğu dijital hizmetler: Web Geliştirme, SEO, İçerik Pazarlaması ve daha fazlası.',
};

export default function ServicesPage() {
  return (
    <main>
      <ModernServicesHero />
      <ServiceCards />
    </main>
  );
} 