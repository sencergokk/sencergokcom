'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ModernProjectsHero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full blur-3xl top-20 left-10 dark:animate-pulse" />
        <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl bottom-20 right-10 dark:animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900/10 dark:bg-white/10 backdrop-blur-md border border-gray-900/20 dark:border-white/20 text-gray-800 dark:text-white mb-8">
            <Sparkles className="w-5 h-5 mr-3 text-yellow-400" />
            <span className="text-sm font-medium">500+ Başarılı Proje</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-8">
            <span className="block">Başarı</span>
            <span className="block bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Hikayeleri
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Her proje bir başarı hikayesi. Müşterilerimizin hayallerini 
            <span className="text-gray-800 dark:text-white font-semibold"> gerçeğe </span>
            dönüştürdüğümüz anları keşfedin.
          </p>

          {/* CTA Button */}
          <Link href="#projects-grid">
            <Button 
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-10 md:px-12 py-6 md:py-8 text-lg md:text-xl font-bold rounded-2xl h-auto border-0 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10 flex items-center">
                Projeleri İncele
                <ArrowRight className="ml-3 h-6 w-6 md:h-7 md:w-7 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">500+</div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">15+</div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Sektör Deneyimi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">98%</div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Zamanında Teslimat</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">100%</div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 