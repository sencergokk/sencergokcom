import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skycer.com'; // Burayı canlıya çıkınca kendi domaininizle değiştirmeyi unutmayın

  const staticPages = [
    { url: '/', priority: 1.0 },
    { url: '/about', priority: 0.8 },
    { url: '/services', priority: 0.8 },
    { url: '/projects', priority: 0.8 },
    { url: '/contact', priority: 0.5 },
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page.priority,
  }));
} 