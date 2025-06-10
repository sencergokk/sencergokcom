import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'İletişim - Skycer',
  description: 'Skycer ile iletişime geçin. Ücretsiz danışmanlık için bizi arayın veya form doldurun.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
} 