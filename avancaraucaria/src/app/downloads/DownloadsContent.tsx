'use client';

import { SectionTitle } from '@/components/sections/SectionTitle';
import { DownloadCard } from '@/components/sections/DownloadCard';
import { downloads, downloadCategories, downloadYears, getFeaturedDownloads, searchDownloads } from '@/data/downloads';
import { Badge } from '@/components/ui/Badge';
import { Search, Filter, ChevronDown, Calendar, FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { formatDate } from '@/lib/utils';
import { useState, useMemo } from 'react';

export function DownloadsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedYear, setSelectedYear] = useState('todos');

  const filteredDownloads = useMemo(() => {
    let result = downloads;

    if (searchQuery) {
      result = searchDownloads(searchQuery);
    }

    if (selectedCategory !== 'todos') {
      result = result.filter(d => d.categorySlug === selectedCategory);
    }

    if (selectedYear !== 'todos') {
      result = result.filter(d => d.year === selectedYear);
    }

    return result;
  }, [searchQuery, selectedCategory, selectedYear]);

  const featuredDownloads = getFeaturedDownloads(3);

  return (
    <>
      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="hero-title">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">Utilitários</Badge>
            <h1 id="hero-title" className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Central de <span className="gradient-text">Downloads</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Acesse atas de plenárias, resoluções, editais, legislação e documentos oficiais do Conselho de Desenvolvimento Econômico.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="featured-title">
        <div className="container-custom">
          <SectionTitle
            id="featured-title"
            title="Documentos em destaque"
            subtitle="Mais acessados"
            align="center"
          />
          <div className="mt-12 lg:mt-16 space-y-4">
            {featuredDownloads.map((item, index) => (
              <DownloadCard key={item.id} download={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="all-downloads-title">
        <div className="container-custom">
          <SectionTitle
            id="all-downloads-title"
            title="Todos os documentos"
            subtitle="Acervo completo"
            align="center"
          />

          <div className="mt-8 lg:mt-12 flex flex-wrap items-center justify-center gap-4">
            <div className="relative flex-1 min-w-[280px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <input
                type="search"
                placeholder="Buscar documentos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                aria-label="Buscar documentos"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-10 py-2.5 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 appearance-none cursor-pointer min-w-[200px]"
                aria-label="Filtrar por categoria"
              >
                {downloadCategories.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>{cat.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="pl-10 pr-10 py-2.5 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 appearance-none cursor-pointer min-w-[140px]"
                aria-label="Filtrar por ano"
              >
                <option value="todos">Todos os anos</option>
                {downloadYears.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
            </div>
            <Button variant="outline" size="sm" onClick={() => { setSearchQuery(''); setSelectedCategory('todos'); setSelectedYear('todos'); }}>
              <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
              Limpar
            </Button>
          </div>

          <div className="mt-8 lg:mt-12">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
              <span>{filteredDownloads.length} documento{filteredDownloads.length !== 1 ? 's' : ''} encontrado{filteredDownloads.length !== 1 ? 's' : ''}</span>
              <span>Ordenado por data (mais recente)</span>
            </div>

            {filteredDownloads.length > 0 ? (
              <div className="space-y-4">
                {filteredDownloads.map((item, index) => (
                  <DownloadCard key={item.id} download={item} index={index} />
                ))}
              </div>
            ) : (
              <Card variant="outlined" padding="lg" className="text-center">
                <FileText className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Nenhum documento encontrado</h3>
                <p className="text-muted-foreground">Tente ajustar os filtros ou buscar por outro termo.</p>
              </Card>
            )}

            <div className="mt-8 flex justify-center gap-2">
              <Button variant="outline" size="sm" disabled>Anterior</Button>
              <Button variant="primary" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Próxima</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="categories-title">
        <div className="container-custom">
          <SectionTitle
            id="categories-title"
            title="Categorias de documentos"
            subtitle="Organização"
            description="Os documentos estão organizados por categoria para facilitar sua busca."
            align="center"
          />
          <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {downloadCategories.filter(c => c.slug !== 'todos').map((category) => {
              const count = downloads.filter(d => d.categorySlug === category.slug).length;
              return (
                <Card key={category.slug} variant="outlined" padding="lg" hover className="text-center group cursor-pointer">
                  <FileText className="w-10 h-10 mx-auto mb-4 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <h4 className="font-medium text-foreground mb-1">{category.label}</h4>
                  <p className="text-sm text-muted-foreground">{count} documento{count !== 1 ? 's' : ''}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}