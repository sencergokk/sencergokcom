'use client';

import { Card } from '@/components/ui/card';
import { 
  Code, 
  Palette,
  Megaphone,
  Bot
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Sitesi & E-ticaret',
    description: 'Modern, hızlı ve mobil uyumlu web siteleri ve e-ticaret platformları tasarlıyoruz.',
    href: '#',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'UI/UX & Grafik Tasarım',
    description: 'Kullanıcı odaklı, estetik ve işlevsel arayüzler ile markanızın kimliğini yansıtıyoruz.',
    href: '#',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Megaphone,
    title: 'SEO & Dijital Pazarlama',
    description: 'Arama motorlarında üst sıralara çıkarak hedef kitlenize ulaşmanızı sağlıyoruz.',
    href: '#',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Bot,
    title: 'Yapay Zeka & Chatbot',
    description: 'İş süreçlerinizi otomatize eden akıllı chatbotlar ve yapay zeka çözümleri sunuyoruz.',
    href: '#',
    color: 'from-green-500 to-teal-500',
  }
];

export default function ServiceCards() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-center p-8 flex flex-col">
              <div className="flex-grow">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${service.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 