import type { NewsItem } from '@/types';

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'OAB recebeu a 14ª Plenária do AvançAraucária',
    slug: 'oab-recebeu-14a-plenaria-avancaraucaria',
    excerpt: 'A Ordem dos Advogados do Brasil - Seccional Paraná sediou a 14ª Plenária do Conselho de Desenvolvimento Econômico, reunindo lideranças para debater o futuro de Araucária.',
    content: 'A 14ª Plenária do AvançAraucária foi realizada nas dependências da OAB/PR, reunindo conselheiros, representantes das Câmaras Técnicas e convidados especiais. O encontro debateu temas estratégicos para o desenvolvimento econômico sustentável do município, incluindo a atualização do planejamento estratégico, novos projetos de inovação e a governança do Conselho para o biênio 2026/2028.',
    category: 'Plenária',
    categorySlug: 'plenaria',
    publishedAt: '2025-05-02',
    image: '/images/news/oab-plenaria.jpg',
    author: 'Assessoria de Comunicação',
    tags: ['plenária', 'governança', 'OAB', 'planejamento estratégico'],
    featured: true,
  },
  {
    id: '2',
    title: 'Corredor Energético e Tecnológico ganha força com adesão de São Mateus do Sul e parcerias estratégicas',
    slug: 'corredor-energetico-tecnologico-ganha-forca',
    excerpt: 'Projeto intermunicipal avança com novos parceiros e estruturação de fundo de desenvolvimento para a região.',
    content: 'O Corredor Energético e Tecnológico, projeto estratégico para integração regional, ganhou novo impulso com a adesão formal do município de São Mateus do Sul. A iniciativa, que conecta Araucária a municípios vizinhos através de infraestrutura energética, logística e tecnológica, agora conta com estruturação de fundo de desenvolvimento regional e parcerias com a Copel e o Governo do Estado.',
    category: 'Projetos',
    categorySlug: 'projetos',
    publishedAt: '2024-12-13',
    image: '/images/news/corredor-energetico.jpg',
    author: 'Assessoria de Comunicação',
    tags: ['corredor energético', 'integração regional', 'energia', 'inovação'],
    featured: true,
    chamberSlug: 'mobilidade-integracao-ordenamento-territorial',
  },
  {
    id: '3',
    title: 'AvançAraucária é reconhecido como case de sucesso no Paraná',
    slug: 'avancaraucaria-case-sucesso-parana',
    excerpt: 'Conselho de Desenvolvimento Econômico é destaque em premiação estadual de boas práticas de governança.',
    content: 'O AvançAraucária foi reconhecido como case de sucesso no Prêmio Boas Práticas de Governança do Tribunal de Contas do Estado do Paraná. A premiação destaca a atuação do Conselho na articulação entre setor público, privado, academia e sociedade civil para o desenvolvimento econômico sustentável.',
    category: 'Reconhecimento',
    categorySlug: 'reconhecimento',
    publishedAt: '2024-11-25',
    image: '/images/news/case-sucesso.jpg',
    author: 'Assessoria de Comunicação',
    tags: ['premiação', 'governança', 'case de sucesso', 'TCE-PR'],
    featured: true,
  },
  {
    id: '4',
    title: 'Câmara Técnica de Sustentabilidade discute futuro verde para Araucária',
    slug: 'camara-sustentabilidade-futuro-verde-araucaria',
    excerpt: 'Reunião debate iniciativas ambientais, impactos da poluição do Rio Iguaçu e avanços para modelo de sustentabilidade.',
    content: 'A Câmara Técnica de Sustentabilidade Socioambiental realizou reunião extraordinária para debater o futuro ambiental de Araucária. Entre os temas discutidos: despoluição do Rio Iguaçu, estruturação do mercado de carbono municipal, plano de arborização urbana e metas de neutralidade de carbono para 2040.',
    category: 'Sustentabilidade',
    categorySlug: 'sustentabilidade',
    publishedAt: '2024-11-11',
    image: '/images/news/camara-sustentabilidade.jpg',
    author: 'Câmara Técnica de Sustentabilidade',
    tags: ['sustentabilidade', 'Rio Iguaçu', 'mercado de carbono', 'meio ambiente'],
    featured: true,
    chamberSlug: 'sustentabilidade-socioambiental',
  },
  {
    id: '5',
    title: 'Desenvolvimento sustentável e inovação marcam reunião Plenária no Acqua Park',
    slug: 'desenvolvimento-sustentavel-inovacao-plenaria-acqua-park',
    excerpt: 'AvançAraucária reforça iniciativas econômicas e ambientais para o futuro de Araucária em encontro no Acqua Park.',
    content: 'A Plenária de outubro foi realizada no Acqua Park, reunindo mais de 200 lideranças. O encontro destacou os avanços no Parque Tecnológico, Biotech Center, Corredor Energético e novas iniciativas de sustentabilidade. Foi apresentado também o balanço das atividades das cinco Câmaras Técnicas.',
    category: 'Plenária',
    categorySlug: 'plenaria',
    publishedAt: '2024-10-29',
    image: '/images/news/plenaria-acqua-park.jpg',
    author: 'Assessoria de Comunicação',
    tags: ['plenária', 'Acqua Park', 'Parque Tecnológico', 'Biotech Center'],
    featured: false,
  },
  {
    id: '6',
    title: 'Desenvolvimento sustentável em Araucária: Câmara Técnica propõe novas iniciativas ambientais',
    slug: 'desenvolvimento-sustentavel-araucaria-camara-propoe-iniciativas',
    excerpt: 'Câmara Técnica de Sustentabilidade apresenta propostas para gestão de resíduos, energia renovável e áreas verdes.',
    content: 'A Câmara Técnica de Sustentabilidade Socioambiental apresentou um pacote de propostas para tornar Araucária referência em sustentabilidade. As iniciativas incluem: programa de coleta seletiva ampliada, incentivos para energia solar em empresas, criação de corredores ecológicos urbanos e certificação ambiental para indústrias.',
    category: 'Sustentabilidade',
    categorySlug: 'sustentabilidade',
    publishedAt: '2024-10-14',
    image: '/images/news/iniciativas-ambientais.jpg',
    author: 'Câmara Técnica de Sustentabilidade',
    tags: ['sustentabilidade', 'resíduos', 'energia solar', 'corredores ecológicos'],
    featured: false,
    chamberSlug: 'sustentabilidade-socioambiental',
  },
  {
    id: '7',
    title: 'Desenvolvimento urbano, inovação e sustentabilidade pautam a plenária do AvançAraucária',
    slug: 'desenvolvimento-urbano-inovacao-sustentabilidade-plenaria',
    excerpt: 'Plenária de setembro debate planejamento urbano integrado, smart cities e atração de investimentos.',
    content: 'A Plenária de setembro focou no desenvolvimento urbano inteligente, com apresentações sobre cidades inteligentes, zoneamento moderno, mobilidade ativa e atração de investimentos em tecnologia. Participaram especialistas em planejamento urbano e representantes do Governo do Estado.',
    category: 'Plenária',
    categorySlug: 'plenaria',
    publishedAt: '2024-09-30',
    image: '/images/news/plenaria-setembro.jpg',
    author: 'Assessoria de Comunicação',
    tags: ['desenvolvimento urbano', 'smart cities', 'planejamento', 'investimentos'],
    featured: false,
  },
  {
    id: '8',
    title: 'Candidatos à prefeitura de Araucária firmam compromisso com demandas da sociedade civil em reunião do AvançAraucária',
    slug: 'candidatos-prefeitura-compromisso-sociedade-civil',
    excerpt: 'Encontro histórico reúne candidatos e sociedade civil para assinatura de carta-compromisso com o desenvolvimento sustentável.',
    content: 'Em iniciativa inédita, o AvançAraucária promoveu encontro com todos os candidatos à prefeitura de Araucária para assinatura de carta-compromisso com as demandas da sociedade civil organizada. O documento contempla 20 propostas estruturadas pelas Câmaras Técnicas.',
    category: 'Institucional',
    categorySlug: 'institucional',
    publishedAt: '2024-09-23',
    image: '/images/news/candidatos-compromisso.jpg',
    author: 'Assessoria de Comunicação',
    tags: ['eleições', 'carta-compromisso', 'sociedade civil', 'demandas'],
    featured: false,
  },
];

export const newsCategories = [
  { slug: 'todos', label: 'Todas' },
  { slug: 'plenaria', label: 'Plenárias' },
  { slug: 'projetos', label: 'Projetos' },
  { slug: 'sustentabilidade', label: 'Sustentabilidade' },
  { slug: 'institucional', label: 'Institucional' },
  { slug: 'reconhecimento', label: 'Reconhecimento' },
  { slug: 'educacao', label: 'Educação' },
  { slug: 'inovacao', label: 'Inovação' },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}

export function getAllNewsSlugs(): string[] {
  return news.map((n) => n.slug);
}

export function getFeaturedNews(limit = 4): NewsItem[] {
  return news.filter((n) => n.featured).slice(0, limit);
}

export function getLatestNews(limit = 10, excludeFeatured = false): NewsItem[] {
  const filtered = excludeFeatured ? news.filter((n) => !n.featured) : news;
  return filtered
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getNewsByCategory(categorySlug: string, limit?: number): NewsItem[] {
  const filtered = news.filter((n) => n.categorySlug === categorySlug);
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getNewsByChamber(chamberSlug: string, limit?: number): NewsItem[] {
  const filtered = news.filter((n) => n.chamberSlug === chamberSlug);
  return limit ? filtered.slice(0, limit) : filtered;
}