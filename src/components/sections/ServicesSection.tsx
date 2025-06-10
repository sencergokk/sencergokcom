'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Monitor, 
  Search, 
  Headphones, 
  MessageCircle, 
  ArrowRight, 
  Check,
  Star
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';

const iconMap = {
  Monitor,
  Search,
  Headphones,
  MessageCircle
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Profesyonel Hizmetlerimiz
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Size Özel 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Dijital Çözümler
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            İşletmenizin ihtiyaçlarına göre özelleştirilmiş hizmetlerimizle 
            dijital dünyada fark yaratın ve rekabette öne geçin.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <Card 
                key={service.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${
                  selectedService.id === service.id 
                    ? 'border-blue-500 shadow-xl' 
                    : 'border-gray-100 hover:border-blue-300'
                }`}
                onClick={() => setSelectedService(service)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                    selectedService.id === service.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600'
                  }`}>
                    <IconComponent 
                      className={`h-8 w-8 transition-colors duration-300 ${
                        selectedService.id === service.id
                          ? 'text-white'
                          : 'text-gray-600 group-hover:text-white'
                      }`}
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      ₺{service.pricing?.basic.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">başlangıç fiyatı</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Selected Service Details */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Service Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedService.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {selectedService.description} Uzman ekibimiz, en son teknolojileri 
                  kullanarak size özel çözümler geliştirir.
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Bu Hizmete Dahil Olanlar:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg h-auto group"
              >
                Ücretsiz Teklif Al
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Pricing Cards */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-900 text-center">
                Paket Seçenekleri
              </h4>
              
              <div className="space-y-4">
                {/* Basic Package */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900">Temel Paket</h5>
                      <p className="text-sm text-gray-600">Küçük işletmeler için</p>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      En Popüler
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    ₺{selectedService.pricing?.basic.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600">tek seferlik ödeme</p>
                </div>

                {/* Premium Package */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h5 className="text-lg font-semibold">Premium Paket</h5>
                      <p className="text-sm text-blue-100">Büyüyen işletmeler için</p>
                    </div>
                    <Badge className="bg-yellow-400 text-yellow-900 border-0">
                      Önerilen
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold mb-2">
                    ₺{selectedService.pricing?.premium.toLocaleString()}
                  </div>
                  <p className="text-sm text-blue-100">tek seferlik ödeme</p>
                </div>

                {/* Enterprise Package */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <div className="mb-4">
                    <h5 className="text-lg font-semibold text-gray-900">Kurumsal Paket</h5>
                    <p className="text-sm text-gray-600">Büyük işletmeler için</p>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    ₺{selectedService.pricing?.enterprise.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600">tek seferlik ödeme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 