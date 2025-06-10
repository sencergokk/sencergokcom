'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Code, Palette, Brain } from 'lucide-react';

export default function ModernServicesHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingIcons = [
    { icon: Code, position: 'top-20 left-10', delay: '0s' },
    { icon: Palette, position: 'top-32 right-20', delay: '0.5s' },
    { icon: Brain, position: 'bottom-32 left-16', delay: '1s' },
    { icon: Sparkles, position: 'bottom-20 right-10', delay: '1.5s' },
  ];

  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${15 + mousePosition.x * 0.05}%`,
            top: `${10 + mousePosition.y * 0.05}%`,
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${15 + mousePosition.x * 0.03}%`,
            bottom: `${15 + mousePosition.y * 0.03}%`,
            animationDelay: '1s'
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} w-16 h-16 text-white/10 animate-float`}
            style={{ animationDelay: item.delay }}
          >
            <item.icon className="w-full h-full" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-[80vh] flex items-center pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8">
            <Sparkles className="w-5 h-5 mr-3 text-yellow-400" />
            <span className="text-sm font-medium">Profesyonel Dijital Hizmetler</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8">
            <span className="block">Hizmet</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portföyümüz
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            İşletmenizin dijital dönüşümü için ihtiyaç duyduğu 
            <span className="text-white font-semibold"> her şey </span>
            tek bir çatı altında. Modern teknolojiler ile geleceği şekillendiriyoruz.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-8 text-xl font-bold rounded-2xl h-auto border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              Hemen Başlayalım
              <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>

          {/* Service Count */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-2">4</div>
              <div className="text-sm text-gray-400">Ana Hizmet</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-2">50+</div>
              <div className="text-sm text-gray-400">Alt Kategoriler</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-2">100%</div>
              <div className="text-sm text-gray-400">Özelleştirilebilir</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400">Destek</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 