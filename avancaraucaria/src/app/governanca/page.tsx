import { Metadata } from 'next';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { governance, getGovernanceByGroup, governanceGroups } from '@/data/governance';
import { Building2, Users, GraduationCap, Briefcase, FlaskConical, Leaf, MapPin, Gavel, Shield, Building, Award, Calendar } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Governança',
  description: 'Conheça a estrutura de governança do AvançAraucária: Presidente de Honra, Comitê Gestor, Câmaras Técnicas e Secretaria Executiva. Transparência e participação no desenvolvimento de Araucária.',
  openGraph: {
    title: 'Governança — AvançAraucária',
    description: 'Estrutura de governança do Conselho de Desenvolvimento Econômico: Presidente de Honra, Comitê Gestor, Câmaras Técnicas e Secretaria Executiva.',
    type: 'website',
  },
}

const groupIcons = {
  'Presidente de Honra': Award,
  'Comitê Gestor': Gavel,
  'Câmaras Técnicas': Building,
  'Secretaria Executiva': Shield,
};

const groupDescriptions = {
  'Presidente de Honra': 'O Prefeito Municipal exerce a Presidência de Honra, representando a máxima autoridade do município no Conselho.',
  'Comitê Gestor': 'Órgão de direção superior, responsável pela gestão estratégica, coordenação das Câmaras Técnicas e execução das deliberações da Plenária.',
  'Câmaras Técnicas': 'Cinco frentes temáticas que congregam especialistas para analisar desafios específicos e assessorar o Conselho na definição de diretrizes.',
  'Secretaria Executiva': 'Equipe técnica responsável pelo suporte administrativo, operacional e de articulação das atividades do Conselho.',
};

export default function GovernancaPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="hero-title">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">Institucional</Badge>
            <h1 id="hero-title" className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Estrutura de <span className="gradient-text">governança</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Conheça a composição e o funcionamento dos órgãos que dirigem o Conselho de Desenvolvimento Econômico de Araucária.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="structure-title">
        <div className="container-custom">
          <SectionTitle
            id="structure-title"
            title="Organograma da Governança"
            subtitle="Estrutura hierárquica"
            description="A governança do AvançAraucária é organizada em quatro níveis, garantindo representatividade, agilidade na tomada de decisões e execução eficaz das estratégias."
            align="center"
          />

          <div className="mt-12 lg:mt-16 relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-secondary-400 -translate-x-1/2" aria-hidden="true" />
            
            <div className="space-y-8 lg:space-y-12">
              {governanceGroups.map((group, groupIndex) => {
                const Icon = groupIcons[group as keyof typeof groupIcons] || Building;
                const members = getGovernanceByGroup(group);
                
                return (
                  <div key={group} className="relative lg:w-1/2" data-index={groupIndex}>
                    <div className={groupIndex % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:ml-auto'}>
                      <div className="relative">
                        <div className="absolute lg:right-0 lg:top-8 w-5 h-5 rounded-full bg-primary-500 border-4 border-surface-light dark:border-surface-dark z-10 flex items-center justify-center" style={{ left: groupIndex % 2 === 0 ? 'calc(100% + 12px)' : '-16px' }} aria-hidden="true">
                          <Icon className="w-3 h-3 text-white" />
                        </div>
                        <Card variant="elevated" padding="lg" className="relative">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                            </div>
                            <div className={groupIndex % 2 === 0 ? 'text-right' : ''}>
                              <h3 className="font-display text-xl font-bold text-foreground">{group}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{groupDescriptions[group as keyof typeof groupDescriptions]}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {members.map((member, index) => (
                              <Link key={member.id} href={`/governanca#${member.id}`} className="group">
                                <Card variant="outlined" padding="md" hover className="text-center h-full transition-all duration-300">
                                  <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-3 text-xl font-bold text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                  </div>
                                  <h4 className="font-medium text-foreground mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{member.name}</h4>
                                  <Badge variant="outline" size="sm" className="mb-2">{member.role}</Badge>
                                  <p className="text-sm text-muted-foreground">{member.organization}</p>
                                </Card>
                              </Link>
                            ))}
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="plenaria-title">
        <div className="container-custom">
          <SectionTitle
            id="plenaria-title"
            title="A Plenária"
            subtitle="Órgão máximo"
            description="A Plenária é o órgão máximo de deliberação do Conselho, composta por todos os conselheiros titulares. Reúne-se ordinariamente a cada dois meses e extraordinariamente quando convocada."
            align="center"
          />
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="elevated" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Composição</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Building2 className="w-4 h-4 text-primary-500" aria-hidden="true" /> Representantes do poder público</li>
                <li className="flex items-center gap-2"><Building2 className="w-4 h-4 text-primary-500" aria-hidden="true" /> Entidades empresariais</li>
                <li className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-primary-500" aria-hidden="true" /> Instituições de ensino</li>
                <li className="flex items-center gap-2"><Users className="w-4 h-4 text-primary-500" aria-hidden="true" /> Sociedade civil organizada</li>
              </ul>
            </Card>
            <Card variant="elevated" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-secondary-600 dark:text-secondary-400" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Periodicidade</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Reuniões ordinárias: bimestrais</li>
                <li>Reuniões extraordinárias: por convocação</li>
                <li>Quórum: maioria absoluta</li>
                <li>Decisões: maioria simples</li>
              </ul>
            </Card>
            <Card variant="elevated" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mb-4">
                <Gavel className="w-6 h-6 text-accent-600 dark:text-accent-400" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Competências</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Aprovar planejamento estratégico</li>
                <li>Deliberar sobre políticas públicas</li>
                <li>Aprovar orçamento e contas</li>
                <li>Eleger Comitê Gestor</li>
                <li>Criar/extinguir Câmaras Técnicas</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="cta-title">
        <div className="container-custom text-center">
          <h2 id="cta-title" className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Quer participar da governança?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            As eleições para o Comitê Gestor e Câmaras Técnicas ocorrem a cada biênio. Entidades associadas podem indicar representantes. Entre em contato para saber mais.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" variant="primary" asChild>
              <Link href="/contato">Entrar em contato</Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="/associados">Ser associado</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}