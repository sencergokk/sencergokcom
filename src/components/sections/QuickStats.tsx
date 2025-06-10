'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Users, Zap, Globe } from 'lucide-react';

export default function QuickStats() {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Mutlu Müşteri',
      description: 'Her biri başarı hikayesi',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Trophy,
      value: '1000+',
      label: 'Başarılı Proje',
      description: 'Tamamlanmış ve canlıya alınmış',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      value: '%150',
      label: 'Yıllık Büyüme',
      description: 'Sürekli gelişim ve inovasyon',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      value: '24/7',
      label: 'Kesintisiz Hizmet',
      description: 'Her zaman yanınızdayız',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Value */}
                <div className="text-4xl lg:text-5xl font-black text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                
                {/* Label */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm">
                  {stat.description}
                </p>
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 