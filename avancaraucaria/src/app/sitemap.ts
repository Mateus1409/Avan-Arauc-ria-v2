import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://avancaraucaria.com.br';
  
  const staticPages = [
    '',
    '/sobre',
    '/camaras-tecnicas',
    '/projetos',
    '/noticias',
    '/agenda',
    '/governanca',
    '/associados',
    '/galeria',
    '/downloads',
    '/parceiros',
    '/contato',
  ];

  const chambers = [
    'educacao-empreendedorismo',
    'diversificacao-potencializacao-economia',
    'inovacao-biotecnologia',
    'sustentabilidade-socioambiental',
    'mobilidade-integracao-ordenamento-territorial',
  ];

  const projects = [
    'parque-tecnologico-araucaria',
    'araucaria-biotech-center',
    'corredor-energetico-tecnologico',
    'mercado-regulado-carbono',
    'escola-publica-transito',
    'lei-maio-amarelo-municipal',
  ];

  const news = [
    'oab-recebeu-14a-plenaria-avancaraucaria',
    'corredor-energetico-tecnologico-ganha-forca',
    'avancaraucaria-case-sucesso-parana',
    'camara-sustentabilidade-futuro-verde-araucaria',
    'desenvolvimento-sustentavel-inovacao-plenaria-acqua-park',
    'desenvolvimento-sustentavel-araucaria-camara-propoe-iniciativas',
    'desenvolvimento-urbano-inovacao-sustentabilidade-plenaria',
    'candidatos-prefeitura-compromisso-sociedade-civil',
  ];

  const allPages = [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...chambers.map((slug) => ({
      url: `${baseUrl}/camaras-tecnicas/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...projects.map((slug) => ({
      url: `${baseUrl}/projetos/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...news.map((slug) => ({
      url: `${baseUrl}/noticias/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];

  return allPages;
}