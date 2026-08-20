import { Metadata } from 'next';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { AssociateCard } from '@/components/sections/AssociateCard';
import { associates, associateCategories, getFeaturedAssociates, getAssociatesByCategory } from '@/data/associates';
import { Badge } from '@/components/ui/Badge';
import { Search, Filter, ChevronDown, Building2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Associados',
  description: 'Conheça os associados do AvançAraucária: empresas, instituições de ensino, associações e entidades que fazem parte do Conselho de Desenvolvimento Econômico de Araucária.',
  openGraph: {
    title: 'Associados — AvançAraucária',
    description: 'Mais de 350 empresas e instituições associadas ao Conselho de Desenvolvimento Econômico de Araucária.',
    type: 'website',
  },
};

export default function AssociadosPage() {
  const featuredAssociates = getFeaturedAssociates(6);

  return (
    <>
      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="hero-title">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">Rede de Associados</Badge>
            <h1 id="hero-title" className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Nossos <span className="gradient-text">associados</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Mais de 350 empresas, instituições de ensino, associações e entidades que colaboram para o desenvolvimento econômico sustentável de Araucária.
            </p>
            <Button size="lg" variant="primary" asChild className="group">
              <a href="/contato">
                Quero ser associado
                <Plus className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="featured-associates-title">
        <div className="container-custom">
          <SectionTitle
            id="featured-associates-title"
            title="Associados em destaque"
            subtitle="Parceiros estratégicos"
            align="center"
          />
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAssociates.map((associate, index) => (
              <AssociateCard key={associate.slug} associate={associate} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="all-associates-title">
        <div className="container-custom">
          <SectionTitle
            id="all-associates-title"
            title="Todos os associados"
            subtitle="Diretório completo"
            align="center"
          />

          <div className="mt-8 lg:mt-12 flex flex-wrap items-center justify-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <input
                type="search"
                placeholder="Buscar associado..."
                className="w-64 lg:w-80 pl-10 pr-4 py-2.5 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                aria-label="Buscar associado"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <select className="pl-10 pr-10 py-2.5 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 appearance-none cursor-pointer" aria-label="Filtrar por categoria">
                {associateCategories.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>{cat.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
            </div>
          </div>

          <div className="mt-12 lg:mt-16 space-y-8">
            {associateCategories.filter(c => c.slug !== 'todos').map((category) => {
              const categoryAssociates = getAssociatesByCategory(category.slug);
              if (categoryAssociates.length === 0) return null;
              
              return (
                <div key={category.slug}>
                  <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    {category.label}
                    <span className="text-sm text-muted-foreground font-normal">({categoryAssociates.length})</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryAssociates.map((associate, index) => (
                      <AssociateCard key={associate.slug} associate={associate} index={index} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="cta-title">
        <div className="container-custom text-center">
          <Card variant="gradient" padding="lg">
            <h2 id="cta-title" className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Faça parte desta rede
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se a mais de 350 empresas e instituições que estão construindo o futuro de Araucária. Como associado, você participa das Câmaras Técnicas, acessa networking qualificado e contribui para o desenvolvimento sustentável.
            </p>
            <Button size="lg" variant="primary" asChild>
              <a href="/contato">Quero ser associado</a>
            </Button>
          </Card>
        </div>
      </section>
    </>
  );
}