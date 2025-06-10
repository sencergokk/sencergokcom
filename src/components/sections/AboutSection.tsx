import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Linkedin, 
  Twitter, 
  Github,
  Quote,
  Sparkles,
  Lightbulb,
  Heart,
  Rocket
} from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS } from '@/lib/constants';

export default function AboutSection() {
  const stats = [
    { icon: Users, label: 'Mutlu Müşteri', value: '500+', color: 'from-blue-400 to-cyan-400' },
    { icon: Award, label: 'Başarılı Proje', value: '1000+', color: 'from-green-400 to-emerald-400' },
    { icon: TrendingUp, label: 'Yıllık Büyüme', value: '%150', color: 'from-purple-400 to-pink-400' },
    { icon: Target, label: 'Müşteri Memnuniyeti', value: '%98', color: 'from-orange-400 to-red-400' }
  ];

  const values = [
    {
      title: 'İnovasyon',
      description: 'En son teknolojileri takip ederek sürekli yenilik yapıyoruz.',
      icon: Rocket,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Kalite',
      description: 'Her projede en yüksek kalite standartlarını hedefliyoruz.',
      icon: Award,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Güvenilirlik',
      description: 'Müşterilerimizle uzun vadeli güven ilişkileri kuruyoruz.',
      icon: Heart,
      color: 'from-pink-500 to-red-500'
    },
    {
      title: 'Yaratıcılık',
      description: 'Sıradanlıktan uzak, yaratıcı çözümler üretiyoruz.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8">
            <Sparkles className="w-5 h-5 mr-3 text-yellow-400" />
            <span className="text-sm font-medium">Biz Kimiz?</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
            <span className="block">Dijital Dünyanın</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mimarları
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {COMPANY_INFO.mission} Deneyimli ekibimiz ve modern teknolojilerimizle 
            her projede mükemmelliği hedefliyoruz.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <Card key={index} className="group relative overflow-hidden text-center p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 bg-gradient-to-br ${stat.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-base md:text-lg">{stat.label}</div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`} />
            </Card>
          ))}
        </div>

        {/* Company Story & Values */}
        <div className="grid lg:grid-cols-5 gap-16 mb-24 items-center">
          {/* Story */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="text-5xl font-black text-white mb-8">
                Hikayemiz
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  {COMPANY_INFO.founded} yılında Ankara&apos;da kurulan Skycer, mobil öncelikli
                  dijital çözümler üreten yenilikçi bir teknoloji stüdyosudur.
                  Sencer Gök liderliğinde, native iOS geliştirmeden modern web teknolojilerine
                  uzanan geniş bir yelpazede hizmet sunuyoruz.
                </p>
                <p>
                  Müşterilerimizin dijital varlıklarını güçlendirmek, online 
                  görünürlüklerini artırmak ve teknoloji sayesinde işlerini 
                  büyütmelerine yardımcı olmak temel amacımızdır.
                </p>
                <p>
                  Bugün 500+ başarılı proje ve mutlu müşteri portföyümüzle 
                  Türkiye&apos;nin en güvenilir dijital ajanslarından biri haline geldik.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <Quote className="h-8 w-8 text-blue-400 mb-4" />
              <p className="text-xl text-gray-200 italic mb-4">
                &ldquo;Teknoloji, işletmelerin potansiyelini ortaya çıkaran en güçlü araçtır. 
                Biz de bu gücü müşterilerimizin başarısı için kullanıyoruz.&rdquo;
              </p>
              <div className="text-sm text-blue-400 font-medium">
                — Skycer Kurucu Ekibi
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="lg:col-span-2 space-y-6">
            {values.map((value, index) => (
              <div key={index} className={`group relative flex items-start space-x-6 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${value.color} shadow-lg`}>
                    <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`} />
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Uzman Ekibimiz
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Alanında uzman profesyonellerden oluşan ekibimizle 
              projelerinizi en iyi şekilde hayata geçiriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <Card key={member.id} className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-center p-8">
                <CardContent className="p-0">
                  <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-white/10 group-hover:ring-blue-400/50 transition-all duration-300">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h4>
                  
                  <Badge 
                    variant="outline" 
                    className="mb-4 text-blue-400 border-blue-400 bg-blue-500/10"
                  >
                    {member.role}
                  </Badge>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-sky-400 transition-colors"
                      >
                        <Twitter className="h-6 w-6" />
                      </a>
                    )}
                    {member.social.github && (
                      <a 
                        href={member.social.github}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 