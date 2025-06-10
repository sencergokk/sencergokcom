'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles } from 'lucide-react';

export default function PricingSection() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: 2500,
      description: 'Küçük işletmeler için ideal başlangıç paketi',
      features: [
        '5 sayfalık web sitesi',
        'Responsive tasarım',
        'Temel SEO',
        '1 ay ücretsiz destek',
        'Sosyal medya entegrasyonu'
      ],
      badge: null,
      color: 'from-gray-600 to-gray-700'
    },
    {
      name: 'Professional',
      price: 5000,
      description: 'Büyüyen işletmeler için profesyonel çözümler',
      features: [
        '10 sayfalık web sitesi',
        'Premium tasarım',
        'Gelişmiş SEO',
        '3 ay ücretsiz destek',
        'AI Chatbot entegrasyonu',
        'Analitik raporları',
        'E-ticaret modülü'
      ],
      badge: 'En Popüler',
      color: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Enterprise',
      price: 10000,
      description: 'Büyük işletmeler için kapsamlı çözümler',
      features: [
        'Sınırsız sayfa',
        'Özel tasarım',
        'Premium SEO paketi',
        '6 ay ücretsiz destek',
        'Gelişmiş AI Chatbot',
        'Özel entegrasyonlar',
        'Performans optimizasyonu',
        'Özel dashboard'
      ],
      badge: 'En Gelişmiş',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">Şeffaf Fiyatlandırma</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Size Uygun 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Paketi
            </span>
            <br />
            Seçin
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tüm paketlerimiz gizli ücret içermez. İhtiyacınıza uygun paketi seçin, 
            dilediğiniz zaman yükseltebilirsiniz.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                plan.badge ? 'scale-105 border-blue-500/50 shadow-blue-500/25 shadow-2xl' : ''
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className={`bg-gradient-to-r ${plan.color} text-white border-0 px-4 py-1`}>
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </CardTitle>
                <div className="text-5xl font-black text-white mb-4">
                  ₺{plan.price.toLocaleString()}
                </div>
                <p className="text-gray-300">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-6 text-lg font-semibold rounded-2xl h-auto transition-all duration-300 ${
                    plan.badge 
                      ? `bg-gradient-to-r ${plan.color} hover:shadow-lg hover:shadow-blue-500/25` 
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                  }`}
                >
                  Bu Paketi Seç
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Hangi Paket Size Uygun Emin Değil misiniz?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Uzmanlarımızla konuşun, size en uygun çözümü bulalım.
            </p>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-semibold rounded-2xl h-auto border-0 shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              Ücretsiz Danışmanlık Al
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 