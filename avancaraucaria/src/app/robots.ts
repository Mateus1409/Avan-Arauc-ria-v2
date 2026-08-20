import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/', '/_next/', '/static/'],
    },
    sitemap: 'https://avancaraucaria.com.br/sitemap.xml',
    host: 'https://avancaraucaria.com.br',
  };
}