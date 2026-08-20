import { Metadata } from 'next';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { Stats } from '@/components/sections/Stats';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Building2, Users, Target, Lightbulb, Leaf, CheckCircle, Award, Calendar, Flag } from 'lucide-react';
import { impactStats, aboutStats } from '@/data/stats';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre o AvançAraucária',
  description: 'Conheça a história, missão, visão e valores do Conselho de Desenvolvimento Econômico de Araucária. Instituído pela Lei nº 3.484/2019, atua no planejamento estratégico e desenvolvimento econômico sustentável.',
  openGraph: {
    title: 'Sobre o AvançAraucária — Conselho de Desenvolvimento Econômico',
    description: 'Conheça a história, missão, visão e valores do Conselho de Desenvolvimento Econômico de Araucária.',
    type: 'website',
  },
};

const history = [
  {
    year: '2018',
    title: 'Mobilização inicial',
    description: 'Prefeitura, Câmara Municipal, ACIAA, AECIAR e Sebrae iniciam trabalho de mobilização para criação do Conselho.',
    icon: Users,
  },
  {
    year: '2019',
    title: 'Criação oficial',
    description: 'Lei nº 3.484, de 13 de junho de 2019, institui o Conselho de Desenvolvimento Econômico de Araucária.',
    icon: Flag,
  },
  {
    year: '2019',
    title: 'Posse da primeira plenária',
    description: 'Cerimônia com mais de 400 participantes e 350+ empresas representadas. Início das atividades formais.',
    icon: Award,
  },
  {
    year: '2020-2022',
    title: 'Consolidação e pandemia',
    description: 'Atuação durante a pandemia, adaptação para reuniões virtuais, continuidade do planejamento estratégico.',
    icon: Target,
  },
  {
    year: '2023',
    title: 'Parque Tecnológico e Biotech',
    description: 'Início das articulações para implantação do Parque Tecnológico de Araucária e Biotech Center.',
    icon: Lightbulb,
  },
  {
    year: '2024-2025',
    title: 'Expansão e reconhecimento',
    description: 'Corredor Energético, Mercado de Carbono, reconhecimento como case de sucesso no Paraná.',
    icon: CheckCircle,
  },
];

const missionVisionValues = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Elaborar e monitorar o planejamento estratégico, formular e fazer executar políticas, programas e projetos voltados ao desenvolvimento econômico sustentável do Município.',
  },
  {
    icon: Lightbulb,
    title: 'Visão de Futuro 2040',
    description: 'Araucária símbolo de qualidade de vida, desenvolvimento sustentável e modernidade, excelência em educação, inovação e biotecnologia, desperta aos desafios do mundo.',
  },
  {
    icon: Leaf,
    title: 'Valores',
    description: 'Sustentabilidade, Inovação, Colaboração, Transparência, Excelência, Responsabilidade Social, Visão de Longo Prazo.',
  },
];

export default function SobrePage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="hero-title">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">Institucional</Badge>
            <h1 id="hero-title" className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Sobre o <span className="gradient-text">AvançAraucária</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Conselho de Desenvolvimento Econômico de Araucária — Conectando pessoas, empresas, instituições e poder público para impulsionar o desenvolvimento econômico sustentável.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="history-title">
        <div className="container-custom">
          <SectionTitle
            id="history-title"
            title="Nossa história"
            subtitle="Linha do tempo"
            description="Acompanhe os principais marcos da construção do AvançAraucária, desde a mobilização inicial até as conquistas recentes."
            align="center"
          />
          <div className="mt-12 lg:mt-16 relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-secondary-400 -translate-x-1/2" aria-hidden="true" />
            <div className="space-y-12 lg:space-y-16">
              {history.map((item, index) => (
                <article key={item.year} className="relative lg:w-1/2" data-index={index}>
                  <div className={index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:ml-auto'}>
                    <div className="relative">
                      <div className="absolute lg:right-0 lg:top-4 w-4 h-4 rounded-full bg-primary-500 border-4 border-surface-light dark:border-surface-dark z-10" style={{ left: index % 2 === 0 ? 'calc(100% + 8px)' : '-12px' }} aria-hidden="true" />
                      <Card variant="elevated" padding="lg" className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="primary">{item.year}</Badge>
                          <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                          </div>
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </Card>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="mission-title">
        <div className="container-custom">
          <SectionTitle
            id="mission-title"
            title="Missão, Visão e Valores"
            subtitle="Identidade institucional"
            description="Os pilares que orientam todas as ações e decisões do Conselho de Desenvolvimento Econômico."
            align="center"
          />
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionVisionValues.map((item, index) => (
              <Card key={item.title} variant="elevated" padding="lg" className="text-center" index={index}>
                <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="legal-title">
        <div className="container-custom">
          <SectionTitle
            id="legal-title"
            title="Base Legal e Atuação"
            subtitle="Marco regulatório"
            description="O Conselho atua com base na legislação municipal, com caráter deliberativo e consultivo."
            align="center"
          />
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated" padding="lg">
              <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                Base Legal
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" aria-hidden="true" /> Lei nº 3.484, de 13 de junho de 2019 — Criação do Conselho</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" aria-hidden="true" /> Lei nº 4.552/2025 — Altera dispositivos da Lei 3.484/2019</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" aria-hidden="true" /> Regimento Interno do Conselho</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" aria-hidden="true" /> Resoluções do Comitê Gestor e Plenária</li>
              </ul>
            </Card>
            <Card variant="elevated" padding="lg">
              <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                Atribuições
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" aria-hidden="true" /> Elaborar e monitorar o planejamento estratégico</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" aria-hidden="true" /> Formular políticas de desenvolvimento econômico</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" aria-hidden="true" /> Acompanhar execução de programas e projetos</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" aria-hidden="true" /> Articular parcerias público-privadas</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" aria-hidden="true" /> Promover inovação e sustentabilidade</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="numbers-title">
        <div className="container-custom">
          <SectionTitle
            id="numbers-title"
            title="Nossa atuação em números"
            subtitle="Impacto"
            description="Resultados concretos da mobilização e atuação do Conselho ao longo dos anos."
            align="center"
          />
          <div className="mt-12 lg:mt-16">
            <Stats stats={impactStats} layout="grid" />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary-600 dark:bg-primary-700" aria-labelledby="cta-title">
        <div className="container-custom text-center">
          <h2 id="cta-title" className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
            Quer conhecer mais de perto?
            </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Acesse nossa página de governança para conhecer a estrutura completa, conselheiros, Câmaras Técnicas e a secretaria executiva.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" variant="secondary" asChild className="group">
              <Link href="/governanca">
                Ver estrutura de governança
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="xl" variant="ghost" className="text-white border-white/30 hover:bg-white/10" asChild>
              <Link href="/camaras-tecnicas">Conhecer as Câmaras Técnicas</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}