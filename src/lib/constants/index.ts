import { Service, TeamMember, Testimonial, ContactInfo } from '../types';

export const COMPANY_INFO = {
  name: 'Skycer',
  tagline: 'Dijital Dönüşümünüzün Güvenilir Ortağı',
  description: 'Mobil ve web tabanlı dijital çözümler sunuyoruz. Swift ile iOS geliştirmeden, modern web teknolojilerine kadar geniş bir yelpazede hizmet veriyoruz.',
  founded: '2025',
  mission: 'Teknoloji ile işletmelerin dijital dünyada başarılı olmalarını sağlamak.',
};

export const SERVICES: Service[] = [
  {
    id: 'ios-development',
    title: 'iOS Uygulama Geliştirme',
    description: 'Swift ile en son teknolojileri kullanarak, performanslı ve kullanıcı odaklı native iOS uygulamaları geliştiriyoruz.',
    icon: 'Monitor',
    features: [
      'Native Swift Geliştirme',
      'App Store Yayınlama',
      'UI/UX Tasarım',
      'API Entegrasyonları',
      'Uygulama Bakımı',
      'Push Bildirimleri'
    ],
    pricing: {
      basic: 2500,
      premium: 5000,
      enterprise: 10000
    }
  },
  {
    id: 'web-design',
    title: 'Web Sitesi Tasarımı',
    description: 'Modern, responsive ve kullanıcı dostu web siteleri tasarlıyoruz.',
    icon: 'Search',
    features: [
      'Responsive Tasarım',
      'SEO Optimizasyonu',
      'Hızlı Yükleme',
      'Modern UI/UX',
      'CMS Entegrasyonu',
      'Mobil Uyumlu'
    ],
    pricing: {
      basic: 1500,
      premium: 3000,
      enterprise: 6000
    }
  },
  {
    id: 'chatbot',
    title: 'Chatbot Çözümleri',
    description: 'Yapay zeka destekli chatbotlar ile müşteri deneyimini geliştirin.',
    icon: 'MessageCircle',
    features: [
      'AI Destekli Chatbot',
      'Çoklu Platform Desteği',
      'Özelleştirilebilir',
      'Analitik Raporlar',
      '24/7 Müşteri Hizmeti',
      'Kolay Entegrasyon'
    ],
    pricing: {
      basic: 1000,
      premium: 2500,
      enterprise: 5000
    }
  },
  {
    id: 'support',
    title: 'Teknik Destek',
    description: '7/24 teknik destek ile her zaman yanınızdayız.',
    icon: 'Headphones',
    features: [
      '7/24 Destek',
      'Hızlı Çözüm',
      'Uzaktan Erişim',
      'Sistem Bakımı',
      'Güvenlik Güncellemeleri',
      'Yedekleme Hizmetleri'
    ],
    pricing: {
      basic: 500,
      premium: 1000,
      enterprise: 2000
    }
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'founder',
    name: 'Sencer Gök',
    role: 'Kurucu & iOS Geliştirici',
    image: '/team/sencer.jpg', // Geçici bir resim yolu, daha sonra güncellenmeli
    bio: '2002 Ankara doğumlu. Başkent Üniversitesi Yönetim Bilişim Sistemleri mezunu. Swift ile native iOS uygulamaları geliştirme konusunda uzman.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sencergok',
      twitter: 'https://x.com/sencerdev',
      github: 'https://github.com/sencergok'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Zeynep Aktaş',
    company: 'Aktaş Restoran',
    role: 'İşletme Sahibi',
    content: 'Skycer sayesinde online siparişlerimiz %300 arttı. Harika bir ekip!',
    rating: 5,
    image: '/testimonials/zeynep.jpg'
  },
  {
    id: '2',
    name: 'Can Demir',
    company: 'Demir Hukuk',
    role: 'Avukat',
    content: 'Profesyonel web sitemiz sayesinde müvekkil sayımız önemli ölçüde arttı.',
    rating: 5,
    image: '/testimonials/can.jpg'
  },
  {
    id: '3',
    name: 'Ayşe Yıldız',
    company: 'Yıldız Güzellik',
    role: 'Salon Sahibi',
    content: 'SEO çalışmaları sonucunda Google\'da ilk sıralarda yer alıyoruz.',
    rating: 5,
    image: '/testimonials/ayse.jpg'
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: 'skycerappstudio@gmail.com',
  phone: '0545 810 7460',
  address: 'Ankara, Türkiye',
  social: {
    linkedin: 'https://www.linkedin.com/in/sencergok',
    twitter: 'https://x.com/sencerdev',
    github: 'https://github.com/sencergok',
    facebook: '#',
    instagram: '#'
  }
};

export const NAVIGATION_ITEMS = [
  { name: 'Anasayfa', href: '/' },
  { name: 'Hizmetler', href: '/services' },
  { name: 'Hakkımızda', href: '/about' },
  { name: 'Projeler', href: '/projects' },
  { name: 'İletişim', href: '/contact' }
]; 