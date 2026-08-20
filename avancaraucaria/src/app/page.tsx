import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { ChamberCard } from '@/components/sections/ChamberCard';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { NewsCard } from '@/components/sections/NewsCard';
import { EventCard } from '@/components/sections/EventCard';
import { impactStats, aboutStats } from '@/data/stats';
import { chambers } from '@/data/chambers';
import { projects } from '@/data/projects';
import { news, getFeaturedNews } from '@/data/news';
import { events, getUpcomingEvents } from '@/data/events';
import Link from 'next/link';
import { ArrowRight, Building2, Users, Lightbulb, Leaf, Target, CheckCircle, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function Home() {
  const featuredNews = getFeaturedNews(3);
  const upcomingEvents = getUpcomingEvents(3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="impact-title">
        <div className="container-custom">
          <SectionTitle
            id="impact-title"
            title="Nosso impacto em números"
            subtitle="Resultados concretos"
            description="Indicadores que demonstram a força da colaboração entre setor público, privado, academia e sociedade civil na construção do futuro de Araucária."
            align="center"
          />
          <div className="mt-12 lg:mt-16">
            <Stats stats={impactStats} layout="grid" />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="about-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionTitle
                id="about-title"
                title="O que é o AvançAraucária?"
                subtitle="Institucional"
                description="O AvançAraucária é o Conselho de Desenvolvimento Econômico de Araucária, instituído pela Lei nº 3.484, de 13 de junho de 2019. Possui caráter deliberativo e consultivo, atuando no planejamento estratégico e no desenvolvimento econômico sustentável do município."
                align="left"
                cta={{ label: 'Leia nossa história', href: '/sobre', variant: 'primary' }}
              />
              <div className="mt-8 grid grid-cols-2 gap-4">
                {aboutStats.map((stat, index) => (
                  <Card key={stat.label} variant="outlined" padding="lg" className="text-center" index={index}>
                    <div className="font-display text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                      {typeof stat.value === 'number' ? stat.value.toLocaleString('pt-BR') : stat.value}{stat.suffix || ''}
                    </div>
                    <div className="text-sm font-medium text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                      <Building2 className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">Visão de Futuro Araucária 2040</h3>
                    <p className="text-muted-foreground text-lg">"Araucária símbolo de qualidade de vida, desenvolvimento sustentável e modernidade, excelência em educação, inovação e biotecnologia, desperta aos desafios do mundo."</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-light dark:from-surface-dark to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-6 -left-6 -right-6 flex flex-wrap justify-center gap-4 px-4">
                <StatBadge icon={Users} label="350+ empresas" description="representadas" />
                <StatBadge icon={CheckCircle} label="40+ reuniões" description="de mobilização" />
                <StatBadge icon={Target} label="70+ entrevistas" description="com a sociedade" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="chambers-title">
        <div className="container-custom">
          <SectionTitle
            id="chambers-title"
            title="Cinco frentes para transformar o futuro"
            subtitle="Câmaras Técnicas"
            description="As Câmaras Técnicas são instrumentos de planejamento que congregam especialistas para analisar desafios específicos, fornecer subsídios ao Conselho e apoiar a execução das estratégias de desenvolvimento."
            align="center"
            cta={{ label: 'Ver todas as Câmaras', href: '/camaras-tecnicas', variant: 'outline' }}
          />
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chambers.map((chamber, index) => (
              <ChamberCard key={chamber.slug} chamber={chamber} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="projects-title">
        <div className="container-custom">
          <SectionTitle
            id="projects-title"
            title="Projetos que movimentam Araucária"
            subtitle="Iniciativas estratégicas"
            description="Conheça os projetos estruturantes que estão transformando a economia e a qualidade de vida em Araucária, conectando inovação, sustentabilidade e desenvolvimento."
            align="center"
            cta={{ label: 'Ver todos os projetos', href: '/projetos', variant: 'outline' }}
          />
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="news-title">
        <div className="container-custom">
          <SectionTitle
            id="news-title"
            title="Notícias e desenvolvimento"
            subtitle="Imprensa"
            description="Acompanhe as principais notícias, conquistas e avanços do AvançAraucária e suas Câmaras Técnicas."
            align="center"
            cta={{ label: 'Ver todas as notícias', href: '/noticias', variant: 'outline' }}
          />
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNews.map((item, index) => (
              <NewsCard key={item.slug} news={item} index={index} variant="default" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="agenda-title">
        <div className="container-custom">
          <SectionTitle
            id="agenda-title"
            title="Próximos eventos"
            subtitle="Agenda"
            description="Participe dos eventos, reuniões plenárias, workshops e fóruns promovidos pelo AvançAraucária e suas Câmaras Técnicas."
            align="center"
            cta={{ label: 'Ver agenda completa', href: '/agenda', variant: 'outline' }}
          />
          <div className="mt-12 lg:mt-16">
            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={event.slug} event={event} index={index} />
                ))}
              </div>
            ) : (
              <Card variant="outlined" padding="lg" className="text-center">
                <Calendar className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Nenhum evento agendado</h3>
                <p className="text-muted-foreground">Novos eventos serão publicados em breve.</p>
              </Card>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary-600 dark:bg-primary-700" aria-labelledby="cta-title">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 id="cta-title" className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
              Quer fazer parte desta transformação?
            </h2>
            <p className="text-primary-100 text-lg mb-8">
              Junte-se a mais de 350 empresas e instituições que estão construindo o futuro de Araucária. Seja um associado e participe ativamente do desenvolvimento econômico sustentável.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" variant="secondary" asChild className="group">
                <Link href="/contato">
                  Quero ser associado
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="xl" variant="ghost" className="text-white border-white/30 hover:bg-white/10" asChild>
                <Link href="/associados">Conheça nossos associados</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="partners-title">
        <div className="container-custom">
          <SectionTitle
            id="partners-title"
            title="Uma rede que constrói junto"
            subtitle="Parceiros"
            description="Instituições, empresas e órgãos públicos que colaboram com o AvançAraucária para o desenvolvimento de Araucária."
            align="center"
            cta={{ label: 'Ver todos os parceiros', href: '/parceiros', variant: 'outline' }}
          />
          <div className="mt-12 lg:mt-16">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-muted-foreground font-medium">ACIAA</span>
              <span className="text-muted-foreground font-medium">AECIAR</span>
              <span className="text-muted-foreground font-medium">Prefeitura de Araucária</span>
              <span className="text-muted-foreground font-medium">SEBRAE/PR</span>
              <span className="text-muted-foreground font-medium">FIEP</span>
              <span className="text-muted-foreground font-medium">FECOMÉRCIO/PR</span>
              <span className="text-muted-foreground font-medium">FAEP</span>
              <span className="text-muted-foreground font-medium">IFPR</span>
              <span className="text-muted-foreground font-medium">TECPAR</span>
              <span className="text-muted-foreground font-medium">UFPR</span>
              <span className="text-muted-foreground font-medium">OAB/PR</span>
              <span className="text-muted-foreground font-medium">Unifacear</span>
              <span className="text-muted-foreground font-medium">Unicesumar</span>
              <span className="text-muted-foreground font-medium">Uninter</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StatBadge({ icon: Icon, label, description }: { icon: React.ComponentType<{ className?: string }>; label: string; description: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm rounded-xl border border-border shadow-lg">
      <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
      </div>
      <div>
        <div className="font-display font-bold text-lg text-foreground">{label}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}