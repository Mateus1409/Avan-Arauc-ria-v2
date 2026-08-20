import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'parque-tecnologico',
    title: 'Parque Tecnológico de Araucária',
    shortDescription: 'Hub de inovação que conecta empresas, universidades e governo para desenvolvimento tecnológico.',
    longDescription: 'O Parque Tecnológico de Araucária é um projeto estratégico para transformar o município em referência nacional em inovação. O espaço abrigará empresas de base tecnológica, laboratórios de pesquisa, incubadoras e aceleradoras, criando um ecossistema completo de inovação.',
    category: 'Inovação e Tecnologia',
    status: 'Em andamento',
    image: '/images/projects/parque-tecnologico.jpg',
    gallery: [
      '/images/projects/parque-tecnologico-1.jpg',
      '/images/projects/parque-tecnologico-2.jpg',
      '/images/projects/parque-tecnologico-3.jpg',
    ],
    startDate: '2023-01-01',
    chamberSlugs: ['inovacao-biotecnologia', 'educacao-empreendedorismo'],
    partners: ['Tecpar', 'UFPR', 'Unifacear', 'Sebrae', 'FIEP', 'Prefeitura de Araucária'],
    metrics: [
      { label: 'Área total', value: '500.000 m²' },
      { label: 'Investimento previsto', value: 'R$ 150 milhões' },
      { label: 'Empresas incubadas (meta)', value: '100+' },
      { label: 'Empregos diretos (meta)', value: '2.000+' },
    ],
    slug: 'parque-tecnologico-araucaria',
  },
  {
    id: 'biotech-center',
    title: 'Araucária Biotech Center',
    shortDescription: 'Centro de excelência em biotecnologia para pesquisa, desenvolvimento e inovação em saúde e agronegócio.',
    longDescription: 'O Biotech Center visa posicionar Araucária como polo nacional de biotecnologia, integrando pesquisa acadêmica, desenvolvimento industrial e formação de capital humano especializado.',
    category: 'Biotecnologia e Saúde',
    status: 'Em andamento',
    image: '/images/projects/biotech-center.jpg',
    gallery: [],
    startDate: '2023-06-01',
    chamberSlugs: ['inovacao-biotecnologia'],
    partners: ['Tecpar', 'UFPR', 'Fiocruz', 'Ministério da Ciência e Tecnologia'],
    metrics: [
      { label: 'Laboratórios planejados', value: '15' },
      { label: 'Área de pesquisa', value: '15.000 m²' },
      { label: 'Pesquisadores (meta)', value: '200+' },
    ],
    slug: 'araucaria-biotech-center',
  },
  {
    id: 'corredor-energetico',
    title: 'Corredor Energético e Tecnológico',
    shortDescription: 'Integração regional para desenvolvimento de energia limpa, logística e inovação tecnológica.',
    longDescription: 'Projeto intermunicipal que conecta Araucária a municípios vizinhos através de infraestrutura energética, logística e tecnológica, criando um corredor de desenvolvimento sustentável.',
    category: 'Energia e Mobilidade',
    status: 'Em andamento',
    image: '/images/projects/corredor-energetico.jpg',
    gallery: [],
    startDate: '2024-01-01',
    chamberSlugs: ['mobilidade-integracao-ordenamento-territorial', 'sustentabilidade-socioambiental', 'diversificacao-potencializacao-economia'],
    partners: ['Prefeitura de São Mateus do Sul', 'Copel', 'Governo do Paraná'],
    metrics: [
      { label: 'Municípios integrados', value: '5+' },
      { label: 'Extensão do corredor', value: '120 km' },
      { label: 'Investimento em infraestrutura', value: 'R$ 300 milhões' },
    ],
    slug: 'corredor-energetico-tecnologico',
  },
  {
    id: 'mercado-carbono',
    title: 'Mercado Regulado de Carbono',
    shortDescription: 'Estruturação do mercado de carbono municipal como instrumento de desenvolvimento sustentável.',
    longDescription: 'Iniciativa pioneira para criar um mercado regulado de créditos de carbono em nível municipal, incentivando práticas sustentáveis e gerando nova fonte de receita para projetos ambientais.',
    category: 'Sustentabilidade e Meio Ambiente',
    status: 'Em análise',
    image: '/images/projects/mercado-carbono.jpg',
    gallery: [],
    startDate: '2024-08-01',
    chamberSlugs: ['sustentabilidade-socioambiental'],
    partners: ['SEMA-PR', 'ICMBio', 'Universidades'],
    metrics: [
      { label: 'Área de conservação', value: '50.000 ha' },
      { label: 'Potencial de créditos/ano', value: '100.000 tCO2e' },
    ],
    slug: 'mercado-regulado-carbono',
  },
  {
    id: 'escola-publica-transito',
    title: 'Escola Pública de Trânsito',
    shortDescription: 'Programa educacional para formação de condutores conscientes e redução de acidentes.',
    longDescription: 'Criação de uma escola pública de trânsito modelo, com foco em educação continuada, simuladores, pista de treinamento e programas para escolas e empresas.',
    category: 'Educação e Mobilidade',
    status: 'Planejado',
    image: '/images/projects/escola-transito.jpg',
    gallery: [],
    startDate: '2025-03-01',
    chamberSlugs: ['educacao-empreendedorismo', 'mobilidade-integracao-ordenamento-territorial'],
    partners: ['Detran-PR', 'Polícia Militar', 'Secretaria de Educação'],
    metrics: [
      { label: 'Alunos/ano (meta)', value: '5.000+' },
      { label: 'Redução de acidentes (meta)', value: '30%' },
    ],
    slug: 'escola-publica-transito',
  },
  {
    id: 'lei-maio-amarelo',
    title: 'Lei Maio Amarelo Municipal',
    shortDescription: 'Institucionalização da campanha Maio Amarelo como política pública permanente de segurança viária.',
    longDescription: 'Transformação da campanha anual em lei municipal, garantindo orçamento e ações contínuas de educação para o trânsito seguro.',
    category: 'Legislação e Mobilidade',
    status: 'Concluído',
    image: '/images/projects/lei-maio-amarelo.jpg',
    gallery: [],
    startDate: '2024-05-01',
    endDate: '2024-12-30',
    chamberSlugs: ['mobilidade-integracao-ordenamento-territorial', 'educacao-empreendedorismo'],
    partners: ['Câmara Municipal', 'Observatório Nacional de Segurança Viária'],
    metrics: [
      { label: 'Ações realizadas', value: '20+' },
      { label: 'Pessoas impactadas', value: '10.000+' },
    ],
    slug: 'lei-maio-amarelo-municipal',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectsByChamber(chamberSlug: string): Project[] {
  return projects.filter((p) => p.chamberSlugs.includes(chamberSlug));
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.slice(0, limit);
}