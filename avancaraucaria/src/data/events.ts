import type { Event } from '@/types';

export const events: Event[] = [
  {
    id: '1',
    title: '15ª Plenária Ordinária do AvançAraucária',
    description: 'Reunião plenária ordinária para deliberação sobre pautas estratégicas do Conselho, apresentação de relatórios das Câmaras Técnicas e votação de resoluções.',
    date: '2025-09-15',
    time: '14:00',
    endTime: '17:30',
    location: 'Auditório da FIEP',
    address: 'Av. Comendador Franco, 1341 - Jardim Botânico, Curitiba - PR',
    category: 'Plenária',
    isOnline: false,
    registrationLink: 'https://forms.avancaraucaria.com.br/plenaria-15',
    slug: '15a-plenaria-ordinaria',
  },
  {
    id: '2',
    title: 'Workshop: Mercado de Carbono para Empresas Locais',
    description: 'Capacitação voltada para empresários e gestores sobre oportunidades no mercado regulado de carbono, metodologias de certificação e casos de sucesso.',
    date: '2025-09-22',
    time: '09:00',
    endTime: '12:00',
    location: 'Parque Tecnológico de Araucária',
    address: 'Rodovia do Xisto, km 12 - Araucária - PR',
    category: 'Capacitação',
    chamberSlug: 'sustentabilidade-socioambiental',
    isOnline: false,
    registrationLink: 'https://forms.avancaraucaria.com.br/workshop-carbono',
    slug: 'workshop-mercado-carbono-empresas',
  },
  {
    id: '3',
    title: 'Reunião da Câmara Técnica de Inovação e Biotecnologia',
    description: 'Encontro mensal da câmara para acompanhamento do Parque Tecnológico e Biotech Center, definição de editais de inovação e parcerias com ICTs.',
    date: '2025-09-25',
    time: '10:00',
    endTime: '12:00',
    location: 'Tecpar - Sede',
    address: 'Rua Prof. Algacyr Munhoz Mader, 3775 - Cidade Industrial, Curitiba - PR',
    category: 'Câmara Técnica',
    chamberSlug: 'inovacao-biotecnologia',
    isOnline: true,
    meetingLink: 'https://meet.avancaraucaria.com.br/camara-inovacao',
    slug: 'reuniao-camara-inovacao-biotecnologia-setembro',
  },
  {
    id: '4',
    title: 'Fórum de Mobilidade Urbana Sustentável',
    description: 'Evento aberto à comunidade para discussão do Plano de Mobilidade Urbana, transporte ativo, corredor de ônibus e integração metropolitana.',
    date: '2025-10-08',
    time: '08:30',
    endTime: '17:00',
    location: 'Centro de Convenções de Araucária',
    address: 'Rua Vicente Machado, 100 - Centro, Araucária - PR',
    category: 'Fórum',
    chamberSlug: 'mobilidade-integracao-ordenamento-territorial',
    isOnline: false,
    registrationLink: 'https://forms.avancaraucaria.com.br/forum-mobilidade',
    slug: 'forum-mobilidade-urbana-sustentavel',
  },
  {
    id: '5',
    title: 'Reunião da Câmara Técnica de Educação e Empreendedorismo',
    description: 'Acompanhamento de programas de empreendedorismo nas escolas, parcerias com instituições de ensino e planejamento da Feira de Inovação Estudantil.',
    date: '2025-10-15',
    time: '14:00',
    endTime: '16:00',
    location: 'Unifacear - Campus Araucária',
    address: 'Av. das Araucárias, 2000 - Araucária - PR',
    category: 'Câmara Técnica',
    chamberSlug: 'educacao-empreendedorismo',
    isOnline: true,
    meetingLink: 'https://meet.avancaraucaria.com.br/camara-educacao',
    slug: 'reuniao-camara-educacao-empreendedorismo-outubro',
  },
  {
    id: '6',
    title: 'Semana de Inovação e Biotecnologia de Araucária',
    description: 'Evento de uma semana com palestras, hackathons, visitas técnicas e rodadas de negócios focadas em biotecnologia, saúde e agritech.',
    date: '2025-11-10',
    time: '09:00',
    endTime: '18:00',
    location: 'Parque Tecnológico de Araucária / Múltiplos locais',
    address: 'Rodovia do Xisto, km 12 - Araucária - PR',
    category: 'Evento Especial',
    chamberSlug: 'inovacao-biotecnologia',
    isOnline: false,
    registrationLink: 'https://semana-inovacao.araucaria.pr.gov.br',
    slug: 'semana-inovacao-biotecnologia-araucaria',
  },
  {
    id: '7',
    title: 'Reunião da Câmara Técnica de Diversificação e Potencialização da Economia',
    description: 'Análise de vocações econômicas, atração de investimentos, apoio a startups e desenvolvimento de distritos industriais.',
    date: '2025-11-19',
    time: '09:00',
    endTime: '11:00',
    location: 'ACIAA - Sede',
    address: 'Rua João Pessoa, 500 - Centro, Araucária - PR',
    category: 'Câmara Técnica',
    chamberSlug: 'diversificacao-potencializacao-economia',
    isOnline: true,
    meetingLink: 'https://meet.avancaraucaria.com.br/camara-diversificacao',
    slug: 'reuniao-camara-diversificacao-economia-novembro',
  },
  {
    id: '8',
    title: 'Encontro Anual de Associados AvançAraucária 2025',
    description: 'Evento de integração, prestação de contas, apresentação de resultados do ano e networking entre associados, parceiros e conselheiros.',
    date: '2025-12-05',
    time: '18:30',
    endTime: '22:00',
    location: 'Acqua Park Araucária',
    address: 'Rodovia do Xisto, km 14 - Araucária - PR',
    category: 'Evento Institucional',
    isOnline: false,
    registrationLink: 'https://forms.avancaraucaria.com.br/encontro-associados-2025',
    slug: 'encontro-anual-associados-2025',
  },
];

export function getUpcomingEvents(limit?: number): Event[] {
  const now = new Date();
  const upcoming = events
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function getPastEvents(limit?: number): Event[] {
  const now = new Date();
  const past = events
    .filter((e) => new Date(e.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return limit ? past.slice(0, limit) : past;
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}

export function getAllEventSlugs(): string[] {
  return events.map((e) => e.slug);
}

export function getEventsByChamber(chamberSlug: string): Event[] {
  return events.filter((e) => e.chamberSlug === chamberSlug);
}