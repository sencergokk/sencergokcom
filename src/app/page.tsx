import ModernHeroSection from '@/components/sections/ModernHeroSection';
import FeaturesPreview from '@/components/sections/FeaturesPreview';
import QuickStats from '@/components/sections/QuickStats';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ModernHeroSection />
      <FeaturesPreview />
      <QuickStats />
    </main>
  );
}
