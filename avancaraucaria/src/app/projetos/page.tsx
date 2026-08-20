import { Metadata } from 'next';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { projects, getFeaturedProjects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Filter, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Projetos e Iniciativas',
  description: 'Conheça os projetos estratégicos do AvançAraucária: Parque Tecnológico, Biotech Center, Corredor Energético, Mercado de Carbono e outras iniciativas de desenvolvimento sustentável.',
  openGraph: {
    title: 'Projetos e Iniciativas — AvançAraucária',
    description: 'Projetos que movimentam Araucária: inovação, biotecnologia, sustentabilidade, mobilidade e desenvolvimento econômico.',
    type: 'website',
  },
};

const categories = ['Todos', 'Inovação e Tecnologia', 'Biotecnologia e Saúde', 'Energia e Mobilidade', 'Sustentabilidade e Meio Ambiente', 'Educação e Mobilidade', 'Legislação e Mobilidade'];

export default function ProjetosPage() {
  const featuredProjects = getFeaturedProjects(6);

  return (
    <>
      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="hero-title">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">Projetos</Badge>
            <h1 id="hero-title" className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Projetos que <span className="gradient-text">movimentam Araucária</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Iniciativas estratégicas que conectam inovação, sustentabilidade e desenvolvimento econômico para transformar o futuro do município.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="projects-list-title">
        <div className="container-custom">
          <SectionTitle
            id="projects-list-title"
            title="Todos os projetos"
            subtitle="Portfólio de inovação"
            description="Filtre por categoria ou status para encontrar os projetos de seu interesse."
            align="center"
          />
          
          <div className="mt-8 lg:mt-12 flex flex-wrap items-center justify-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <input
                type="search"
                placeholder="Buscar projetos..."
                className="w-64 lg:w-80 pl-10 pr-4 py-2.5 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                aria-label="Buscar projetos"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <select className="pl-10 pr-10 py-2.5 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 appearance-none cursor-pointer" aria-label="Filtrar por categoria">
                {categories.map((cat) => (
                  <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" aria-hidden="true" />
              Mais filtros
            </Button>
          </div>

          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Carregar mais projetos
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary-600 dark:bg-primary-700" aria-labelledby="cta-title">
        <div className="container-custom text-center">
          <h2 id="cta-title" className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
            Tem uma ideia de projeto?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            O AvançAraucária está sempre aberto a novas propostas e parcerias. Se você tem um projeto alinhado com nossas Câmaras Técnicas, entre em contato.
          </p>
          <a href="/contato" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors">
            Propor projeto
            <ChevronDown className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}