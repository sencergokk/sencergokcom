'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star } from 'lucide-react';

export default function ProjectGrid() {
  const projects = [
    {
      id: 1,
      title: 'Aktaş Restoran',
      category: 'E-ticaret',
      description: 'Modern restaurant web sitesi ve online sipariş sistemi',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'Payment Gateway'],
      results: '+300% online sipariş artışı',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      title: 'Demir Hukuk',
      category: 'Kurumsal',
      description: 'Profesyonel hukuk firması web sitesi ve müvekkil portali',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'CRM Integration', 'SEO'],
      results: '+250% müvekkil sayısı artışı',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Yıldız Güzellik',
      category: 'E-ticaret',
      description: 'Güzellik salonu web sitesi ve randevu sistemi',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop',
      technologies: ['WordPress', 'Booking System', 'Social Media'],
      results: 'Google\'da #1 sırada',
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 4,
      title: 'TechStart AI',
      category: 'Startup',
      description: 'AI startup için modern landing page ve dashboard',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      technologies: ['React', 'AI Integration', 'Analytics'],
      results: '$2M yatırım aldı',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 5,
      title: 'Doktor Cemil',
      category: 'Sağlık',
      description: 'Doktor web sitesi ve hasta yönetim sistemi',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      technologies: ['HIPAA Compliant', 'Appointment System', 'Telemedicine'],
      results: '+180% hasta artışı',
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 6,
      title: 'Eco Energia',
      category: 'Enerji',
      description: 'Yenilenebilir enerji firması kurumsal web sitesi',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'IoT Dashboard', 'Data Visualization'],
      results: '+400% müşteri portföyü',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="group overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className={`bg-gradient-to-r ${project.color} text-white border-0`}>
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-green-400 font-medium">
                      {project.results}
                    </span>
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="text-blue-400 hover:text-blue-300 p-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 