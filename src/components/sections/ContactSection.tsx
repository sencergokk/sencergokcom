'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 5000);
  };

  const contactInfo = [
    { icon: Mail, title: 'E-posta', value: CONTACT_INFO.email, description: 'Size 24 saat içinde geri dönüş yapıyoruz' },
    { icon: Phone, title: 'Telefon', value: CONTACT_INFO.phone, description: 'Pazartesi - Cumartesi: 09:00 - 19:00' },
    { icon: MapPin, title: 'Adres', value: CONTACT_INFO.address, description: 'Ofis ziyaretleri için randevu alın' }
  ];

  const services = ['Web Sitesi Tasarımı', 'SEO Optimizasyonu', 'Teknik Destek', 'Chatbot Çözümleri', 'Diğer'];

  return (
    <section id="contact" className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8">
            <MessageSquare className="w-5 h-5 mr-3 text-green-400" />
            <span className="text-sm font-medium">Bizimle İletişime Geçin</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
            <span className="block">Projenize</span>
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Başlayalım
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dijital dönüşüm yolculuğunuzda size rehberlik etmek için buradayız. 
            Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-8 lg:p-12 space-y-8 bg-black/10">
              <h2 className="text-3xl font-bold text-white">
                İletişim Bilgileri
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {info.title}
                      </h4>
                      <p className="text-base text-gray-200 font-medium break-all">
                        {info.value}
                      </p>
                      <p className="text-sm text-gray-400">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-base text-white">
                    <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
                    Neden Skycer?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-300 text-sm">
                  <p>✓ 100% Müşteri Memnuniyeti</p>
                  <p>✓ 7/24 Teknik Destek</p>
                  <p>✓ Alanında Uzman Ekip</p>
                  <p>✓ Şeffaf Fiyatlandırma</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="p-8 lg:p-12">
              {isSubmitted ? (
                <div className="text-center flex flex-col justify-center items-center h-full">
                  <CheckCircle className="h-20 w-20 text-green-400 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Mesajınız Gönderildi!
                  </h3>
                  <p className="text-gray-300 text-lg">
                    En kısa sürede size geri dönüş yapacağız. Teşekkürler!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                   <h2 className="text-3xl font-bold text-white mb-6">
                    Ücretsiz Teklif Formu
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Ad Soyad *" required className="h-12 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/10 rounded-lg" />
                    <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="E-posta *" required className="h-12 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/10 rounded-lg" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Telefon" className="h-12 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/10 rounded-lg" />
                    <Input name="company" value={formData.company} onChange={handleInputChange} placeholder="Şirket" className="h-12 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/10 rounded-lg" />
                  </div>
                  <select name="service" value={formData.service} onChange={handleInputChange} className="w-full h-12 px-3 bg-white/5 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option className="bg-slate-800" value="">Hizmet seçiniz...</option>
                    {services.map((service) => (
                      <option className="bg-slate-800" key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Mesajınız *" required rows={5} className="resize-none bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/10 rounded-lg" />
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-14 text-lg rounded-xl transition-all duration-300">
                    {isSubmitting ? 'Gönderiliyor...' : (<>Teklif Gönder <Send className="ml-2 h-5 w-5" /></>)}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 