import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { chambers, getChamberBySlug, getAllChamberSlugs } from '@/data/chambers';
import { GraduationCap, Briefcase, FlaskConical, Leaf, MapPin, Users, Building2, Lightbulb, Calendar, CheckCircle, ArrowRight, Mail, MapPin as MapPinIcon, Phone, Building2 as BuildingIcon } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';

export async function generateStaticParams() {
  return getAllChamberSlugs().map((slug) => ({ slug }));
}

const chamberIcons = {
  'educacao-empreendedorismo': { icon: GraduationCap, color: 'primary' },
  'diversificacao-potencializacao-economia': { icon: Briefcase, color: 'secondary' },
  'inovacao-biotecnologia': { icon: FlaskConical, color: 'accent' },
  'sustentabilidade-socioambiental': { icon: Leaf, color: 'primary' },
  'mobilidade-integracao-ordenamento-territorial': { icon: MapPin, color: 'secondary' },
};

const chamberIconComponents = {
  'educacao-empreendedorismo': Users,
  'diversificacao-potencializacao-economia': Building2,
  'inovacao-biotecnologia': Lightbulb,
  'sustentabilidade-socioambiental': Leaf,
  'mobilidade-integracao-ordenamento-territorial': MapPin,
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const chamber = getChamberBySlug(slug);
  
  if (!chamber) {
    return { title: 'Câmara não encontrada' };
  }

  return {
    title: chamber.name,
    description: chamber.description,
    openGraph: {
      title: `${chamber.name} — AvançAraucária`,
      description: chamber.description,
      type: 'website',
    },
  };
}

export default async function ChamberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chamber = getChamberBySlug(slug);

  if (!chamber) {
    notFound();
  }

  const { icon: Icon, color } = (chamberIcons[slug as keyof typeof chamberIcons] || { icon: GraduationCap, color: 'primary' }) as { icon: typeof GraduationCap; color: 'primary' | 'secondary' | 'accent' };
  const HeaderIcon = chamberIconComponents[slug as keyof typeof chamberIconComponents] || Users;

  const colorClasses = {
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-800',
    secondary: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 border-secondary-200 dark:border-secondary-800',
    accent: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 border-accent-200 dark:border-accent-800',
  };

  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;

  return (
    <>
      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="chamber-title">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center', colorClass)}>
                <Icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <div>
                <Badge variant={color} className="mb-2">{chamber.number}</Badge>
                <h1 id="chamber-title" className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                  {chamber.name}
                </h1>
              </div>
            </div>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">{chamber.longDescription}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="about-chamber-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <SectionTitle
                id="about-chamber-title"
                title="Sobre esta Câmara"
                align="left"
              />
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">{chamber.longDescription}</p>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Principais objetivos</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    'Facilitar a articulação entre entidades públicas e privadas para o desenvolvimento econômico do município.',
                    'Propor soluções para desafios econômicos sustentáveis, alinhadas às necessidades da população.',
                    'Assessorar o AVANÇARAUCÁRIA em estudos, análises e projetos.',
                    'Monitorar o crescimento econômico e a sustentabilidade do município.',
                    'Buscar fontes de financiamento para projetos locais.',
                    'Atrair investimentos estaduais, nacionais e internacionais.',
                    'Fortalecer a imagem positiva de Araucária e defender os interesses do Conselho.',
                    'Organizar eventos e capacitações estratégicas.',
                    'Estabelecer parcerias com entidades que possam contribuir para o desenvolvimento econômico.',
                    'Integrar diferentes organizações para fomentar a colaboração e a atuação em rede.',
                  ].map((objective, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <Card variant="elevated" padding="lg">
                <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <HeaderIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                  Informações
                </h3>
                <dl className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <dt className="text-muted-foreground">Criada em</dt>
                      <dd className="font-medium text-foreground">2019 (Lei 3.484/2019)</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <dt className="text-muted-foreground">Membros</dt>
                      <dd className="font-medium text-foreground">{chamber.members.length} ({chamber.members.filter(m => m.role === 'Titular').length} titulares, {chamber.members.filter(m => m.role === 'Suplente').length} suplentes)</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BuildingIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <dt className="text-muted-foreground">Entidades representadas</dt>
                      <dd className="font-medium text-foreground">
                        {Array.from(new Set(chamber.members.map(m => m.organization))).length}
                      </dd>
                    </div>
                  </div>
                </dl>
              </Card>

              {chamber.activities.length > 0 && (
                <Card variant="elevated" padding="lg">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    Atividades Recentes
                  </h3>
                  <ul className="space-y-4">
                    {chamber.activities.slice(0, 3).map((activity) => (
                      <li key={activity.id} className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/50">
                        <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground">{activity.title}</h4>
                          <p className="text-sm text-muted-foreground">{formatDate(activity.date)}</p>
                          {activity.description && <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>}
                          {activity.link && (
                            <a href={activity.link} className="text-sm text-primary-600 dark:text-primary-400 hover:underline mt-1 inline-block">Ver detalhes</a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              <Card variant="outlined" padding="lg" className="text-center">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Quer participar?</h3>
                <p className="text-muted-foreground text-sm mb-4">Entre em contato para saber como sua organização pode contribuir com esta Câmara Técnica.</p>
                <Button variant="primary" asChild>
                  <Link href="/contato">Entrar em contato</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {chamber.members.length > 0 && (
        <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="members-title">
          <div className="container-custom">
            <SectionTitle
              id="members-title"
              title="Membros da Câmara"
              subtitle="Composição atual"
              description="Representantes de entidades públicas, privadas, acadêmicas e da sociedade civil."
              align="center"
            />
            <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chamber.members.map((member, index) => (
                <Card key={member.id} variant="elevated" padding="lg" className="text-center" index={index}>
                  <div className="w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <h4 className="font-medium text-foreground mb-1">{member.name}</h4>
                  <Badge variant="outline" size="sm" className="mb-2">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground">{member.organization}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-24" aria-labelledby="other-chambers-title">
        <div className="container-custom">
          <SectionTitle
            id="other-chambers-title"
            title="Outras Câmaras Técnicas"
            subtitle="Conheça todas"
            align="center"
          />
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {chambers.filter(c => c.slug !== slug).map((otherChamber, index) => {
              const OtherChamberIcon = chamberIconComponents[otherChamber.slug as keyof typeof chamberIconComponents] || Users;
              return (
                <Link key={otherChamber.slug} href={`/camaras-tecnicas/${otherChamber.slug}`} className="group">
                  <Card variant="outlined" padding="md" hover className="text-center h-full">
                    <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4', colorClasses[otherChamber.color as keyof typeof colorClasses] || colorClasses.primary)}>
                      <OtherChamberIcon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <Badge variant="outline" size="sm" className="mb-2">{otherChamber.number}</Badge>
                    <h4 className="font-medium text-foreground group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{otherChamber.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{otherChamber.shortName}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}