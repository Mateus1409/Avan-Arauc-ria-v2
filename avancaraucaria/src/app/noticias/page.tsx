import { Metadata } from 'next';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { NewsCard } from '@/components/sections/NewsCard';
import { news, newsCategories, getFeaturedNews, getLatestNews } from '@/data/news';
import { Badge } from '@/components/ui/Badge';
import { Search, Filter, ChevronDown, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Notícias',
  description: 'Acompanhe as últimas notícias do AvançAraucária: plenárias, projetos, sustentabilidade, inovação e reconhecimentos. Mantenha-se informado sobre o desenvolvimento econômico de Araucária.',
  openGraph: {
    title: 'Notícias — AvançAraucária',
    description: 'Últimas notícias, plenárias, projetos e conquistas do Conselho de Desenvolvimento Econômico de Araucária.',
    type: 'website',
  },
};

export default function NoticiasPage() {
  const featuredNews = getFeaturedNews(1);
  const latestNews = getLatestNews(10, true);

  return (
    <>
      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="hero-title">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">Imprensa</Badge>
            <h1 id="hero-title" className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Notícias e <span className="gradient-text">desenvolvimento</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Acompanhe as principais notícias, conquistas e avanços do AvançAraucária e suas Câmaras Técnicas.
            </p>
          </div>
        </div>
      </section>

      {featuredNews.length > 0 && (
        <section className="py-16 lg:py-24" aria-labelledby="featured-title">
          <div className="container-custom">
            <SectionTitle
              id="featured-title"
              title="Destaque da semana"
              align="center"
            />
            <div className="mt-12 lg:mt-16">
              <div className="grid lg:grid-cols-3 gap-6">
                {featuredNews.map((item, index) => (
                  <NewsCard key={item.slug} news={item} index={index} variant="featured" />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="all-news-title">
        <div className="container-custom">
          <SectionTitle
            id="all-news-title"
            title="Todas as notícias"
            subtitle="Imprensa"
            align="center"
          />

          <div className="mt-8 lg:mt-12 flex flex-wrap items-center justify-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <input
                type="search"
                placeholder="Buscar notícias..."
                className="w-64 lg:w-80 pl-10 pr-4 py-2.5 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                aria-label="Buscar notícias"
              />
            </div>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <select className="pl-10 pr-10 py-2.5 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 appearance-none cursor-pointer" aria-label="Filtrar por categoria">
                <option value="todos">Todas as categorias</option>
                {newsCategories.filter(c => c.slug !== 'todos').map((cat) => (
                  <option key={cat.slug} value={cat.slug}>{cat.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <select className="pl-10 pr-10 py-2.5 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 appearance-none cursor-pointer" aria-label="Filtrar por período">
                <option value="todos">Todos os períodos</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
            </div>
          </div>

          <div className="mt-12 lg:mt-16 space-y-8">
            {latestNews.map((item, index) => (
              <article key={item.slug} className="group">
                <a href={`/noticias/${item.slug}`} className="block">
                  <Card variant="outlined" padding="lg" hover className="flex flex-col md:flex-row gap-6 transition-all duration-300">
                    <div className="relative w-full md:w-64 h-40 md:h-auto min-h-[200px] md:min-h-0 rounded-xl overflow-hidden flex-shrink-0">
                      {item.image ? (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-600/10" aria-hidden="true" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20" aria-hidden="true">
                          <Tag className="w-12 h-12 text-muted-foreground/50" />
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="primary" size="sm">{item.category}</Badge>
                          <time className="text-xs text-white/90 flex items-center gap-1" dateTime={item.publishedAt}>
                            <Calendar className="w-3 h-3" aria-hidden="true" />
                            {formatDate(item.publishedAt)}
                          </time>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">{item.excerpt}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        {item.author && <span className="text-muted-foreground">{item.author}</span>}
                        <span className="text-primary-600 dark:text-primary-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Ler notícia
                          <ChevronDown className="w-4 h-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Carregar mais notícias
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="newsletter-title">
        <div className="container-custom">
          <Card variant="gradient" padding="lg" className="text-center">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">Receba nossas notícias</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">Cadastre seu e-mail para receber as principais notícias do AvançAraucária diretamente na sua caixa de entrada.</p>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                aria-label="E-mail para newsletter"
                required
              />
              <Button size="lg" type="submit">
                Cadastrar
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}