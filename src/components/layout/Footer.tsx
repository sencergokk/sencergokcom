import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Linkedin, Twitter, Facebook, Instagram, Send, Github } from 'lucide-react';
import { COMPANY_INFO, CONTACT_INFO, NAVIGATION_ITEMS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Top Section with Newsletter */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 pb-16 border-b border-white/10">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Gelişmelerden Haberdar Olun
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto lg:mx-0">
              En son dijital trendler ve hizmetlerimiz hakkında bilgi almak için bültenimize abone olun.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto lg:mx-0">
            <Input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/10 flex-grow rounded-xl" 
            />
            <Button 
              type="submit" 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-14 rounded-xl px-6"
            >
              <Send className="w-5 h-5 sm:hidden" />
              <span className="hidden sm:inline">Abone Ol</span>
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {/* Company Info */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">{COMPANY_INFO.name}</span>
            </Link>
            <p className="text-gray-400 leading-relaxed pr-4">
              {COMPANY_INFO.description}
            </p>
            <div className="flex space-x-4">
              <Link href={CONTACT_INFO.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin className="h-6 w-6" /></Link>
              <Link href={CONTACT_INFO.social.twitter} className="text-gray-400 hover:text-sky-400 transition-colors"><Twitter className="h-6 w-6" /></Link>
              {CONTACT_INFO.social.github && (
                <Link href={CONTACT_INFO.social.github} className="text-gray-400 hover:text-white transition-colors"><Github className="h-6 w-6" /></Link>
              )}
              <Link href={CONTACT_INFO.social.facebook} className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook className="h-6 w-6" /></Link>
              <Link href={CONTACT_INFO.social.instagram} className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram className="h-6 w-6" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider uppercase text-gray-400">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider uppercase text-gray-400">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              <li><Link href="/services#web" className="text-gray-300 hover:text-white transition-colors">Web Sitesi Tasarımı</Link></li>
              <li><Link href="/services#seo" className="text-gray-300 hover:text-white transition-colors">SEO Optimizasyonu</Link></li>
              <li><Link href="/services#support" className="text-gray-300 hover:text-white transition-colors">Teknik Destek</Link></li>
              <li><Link href="/services#chatbot" className="text-gray-300 hover:text-white transition-colors">Chatbot Çözümleri</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider uppercase text-gray-400">İletişim</h3>
            <address className="space-y-4 not-italic">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 hover:text-white transition-colors break-all">{CONTACT_INFO.email}</a>
              </div>
              <div className="flex items-start space-x-3">
                <p className="text-gray-300">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </address>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {currentYear} {COMPANY_INFO.name}. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-500 text-sm">
            Türkiye&apos;de ❤️ ile tasarlandı.
          </p>
        </div>
      </div>
    </footer>
  );
} 