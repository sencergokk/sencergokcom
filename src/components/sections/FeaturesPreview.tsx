'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Monitor, 
  Search, 
  Headphones, 
  MessageCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function FeaturesPreview() {
  const features = [
    {
      icon: Monitor,
      title: 'Web Tasarım',
      description: 'Modern ve responsive web siteleri',
      color: 'from-blue-500 to-cyan-500',
      delay: '0ms'
    },
    {
      icon: Search,
      title: 'SEO Optimizasyonu',
      description: 'Arama motorlarında üst sıralarda',
      color: 'from-green-500 to-emerald-500',
      delay: '200ms'
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbot',
      description: 'Yapay zeka destekli müşteri hizmeti',
      color: 'from-purple-500 to-pink-500',
      delay: '400ms'
    },
    {
      icon: Headphones,
      title: 'Teknik Destek',
      description: '7/24 profesyonel destek hizmeti',
      color: 'from-orange-500 to-red-500',
      delay: '600ms'
    }
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">Öne Çıkan Hizmetlerimiz</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Teknolojinin 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Gücü
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Her bir hizmetimiz, işletmenizin dijital dönüşümünde devrim yaratacak 
            ileri teknoloji çözümleri sunuyor.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: feature.delay }}
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Daha Fazlasını Keşfetmeye Hazır mısın?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Tüm hizmetlerimizi görüntüle ve size en uygun çözümü bulalım.
            </p>
            
            <Link href="/services">
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-semibold rounded-2xl h-auto border-0 shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Tüm Hizmetleri Gör
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 