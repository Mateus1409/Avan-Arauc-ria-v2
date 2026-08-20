import type { Chamber } from '@/types';

export const chambers: Chamber[] = [
  {
    id: 'educacao-empreendedorismo',
    number: '01',
    name: 'Educação & Empreendedorismo',
    shortName: 'Educação e Empreendedorismo',
    description: 'Fomenta a conexão entre educação, inovação e mercado de trabalho para desenvolver talentos e novos negócios em Araucária.',
    longDescription: 'A Câmara Técnica de Educação e Empreendedorismo é um instrumento de planejamento que congrega especialistas para analisar desafios específicos do desenvolvimento econômico de Araucária, fornecendo subsídios ao AVANÇARAUCÁRIA. Além disso, apoia a execução das estratégias do Conselho e busca representar a maior diversidade de áreas e desafios.',
    icon: 'graduation-cap',
    color: 'primary',
    members: [
      { id: '1', name: 'Jéssica Corsino', role: 'Titular', organization: 'Unifacear', organizationSlug: 'unifacear' },
      { id: '2', name: 'Bibiana Aparecida Rodrigues Gaspar', role: 'Titular', organization: 'FIEP', organizationSlug: 'fiep' },
      { id: '3', name: 'Estefano Ulandowski', role: 'Titular', organization: 'AECIAR', organizationSlug: 'aeciar' },
      { id: '4', name: 'Fernanda Lopata', role: 'Titular', organization: 'Sebrae', organizationSlug: 'sebrae' },
      { id: '5', name: 'Claudio Roberto B. da Fonseca', role: 'Suplente', organization: 'Unifacear', organizationSlug: 'unifacear' },
      { id: '6', name: 'Jair Rodrigues Dias Junior', role: 'Titular', organization: 'Poder Público', organizationSlug: 'poder-publico' },
      { id: '7', name: 'Lenice Cassiane Alberton', role: 'Titular', organization: 'Uninter', organizationSlug: 'uninter' },
      { id: '8', name: 'Karina Francieli Verhagen', role: 'Titular', organization: 'Associação de Moradores do Bairro Thomaz Coelho', organizationSlug: 'associacao-moradores-thomaz-coelho' },
      { id: '9', name: 'Samuel Treicik', role: 'Titular', organization: 'Unicesumar', organizationSlug: 'unicesumar' },
      { id: '10', name: 'Fernando César Zimmermann', role: 'Titular', organization: 'Poder Público', organizationSlug: 'poder-publico' },
      { id: '11', name: 'Silvinha Teixeira', role: 'Titular', organization: 'CIEE', organizationSlug: 'ciee' },
      { id: '12', name: 'Luiz Antônio Biscaia', role: 'Titular', organization: 'Colégio Estadual Prof. Júlio Szymanski', organizationSlug: 'colegio-julio-szymanski' },
      { id: '13', name: 'Fernando Misato', role: 'Titular', organization: 'SUCESU PARANÁ', organizationSlug: 'sucesu-parana' },
    ],
    activities: [
      { id: '1', title: '7ª Reunião Câmara Técnica Educação e Empreendedorismo', date: '2025-02-26', description: 'Discussão sobre programas de capacitação e empreendedorismo nas escolas', link: '/agenda/7a-reuniao-camara-educacao-empreendedorismo' },
    ],
    news: [],
    slug: 'educacao-empreendedorismo',
  },
  {
    id: 'diversificacao-economia',
    number: '02',
    name: 'Diversificação & Potencialização da Economia',
    shortName: 'Diversificação da Economia',
    description: 'Promove a diversificação da matriz econômica e o fortalecimento de setores estratégicos para gerar emprego e renda.',
    longDescription: 'Esta câmara atua na identificação de vocações econômicas do município, atração de investimentos, apoio ao empreendedorismo e desenvolvimento de cadeias produtivas locais, visando reduzir a dependência de poucos setores e criar uma economia mais resiliente.',
    icon: 'briefcase',
    color: 'secondary',
    members: [],
    activities: [],
    news: [],
    slug: 'diversificacao-potencializacao-economia',
  },
  {
    id: 'inovacao-biotecnologia',
    number: '03',
    name: 'Inovação & Biotecnologia',
    shortName: 'Inovação e Biotecnologia',
    description: 'Impulsiona a inovação tecnológica e o desenvolvimento do setor de biotecnologia como vetores de desenvolvimento sustentável.',
    longDescription: 'Focada na construção do Parque Tecnológico de Araucária e do Biotech Center, esta câmara articula universidades, empresas e governo para transformar Araucária em referência nacional em inovação e biotecnologia.',
    icon: 'flask-conical',
    color: 'accent',
    members: [],
    activities: [],
    news: [],
    slug: 'inovacao-biotecnologia',
  },
  {
    id: 'sustentabilidade-socioambiental',
    number: '04',
    name: 'Sustentabilidade Socioambiental',
    shortName: 'Sustentabilidade Socioambiental',
    description: 'Desenvolve estratégias para conciliar crescimento econômico com preservação ambiental e responsabilidade social.',
    longDescription: 'Atua na agenda climática, mercado de carbono, gestão de resíduos, conservação da biodiversidade e desenvolvimento sustentável, alinhando o desenvolvimento econômico aos Objetivos de Desenvolvimento Sustentável da ONU.',
    icon: 'leaf',
    color: 'primary',
    members: [],
    activities: [],
    news: [],
    slug: 'sustentabilidade-socioambiental',
  },
  {
    id: 'mobilidade-ordenamento-territorial',
    number: '05',
    name: 'Mobilidade, Integração & Ordenamento Territorial',
    shortName: 'Mobilidade e Ordenamento',
    description: 'Planeja a mobilidade urbana integrada e o ordenamento territorial para qualidade de vida e competitividade.',
    longDescription: 'Trabalha no planejamento de corredores logísticos, transporte público eficiente, infraestrutura viária, zoneamento urbano e integração metropolitana, garantindo que o crescimento da cidade seja ordenado e sustentável.',
    icon: 'map-pin',
    color: 'secondary',
    members: [],
    activities: [],
    news: [],
    slug: 'mobilidade-integracao-ordenamento-territorial',
  },
];

export function getChamberBySlug(slug: string): Chamber | undefined {
  return chambers.find((c) => c.slug === slug);
}

export function getAllChamberSlugs(): string[] {
  return chambers.map((c) => c.slug);
}