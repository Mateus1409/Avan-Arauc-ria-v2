'use client';

import { SectionTitle } from '@/components/sections/SectionTitle';
import { GalleryItem, Lightbox } from '@/components/sections/GalleryItem';
import { gallery, getLatestGallery, getAllGallerySlugs } from '@/data/gallery';
import { Badge } from '@/components/ui/Badge';
import { Search, Filter, ChevronDown, Calendar, Image as ImageIcon, Grid } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { formatDate } from '@/lib/utils';
import { useState } from 'react';

export function GaleriaContent() {
  const latestGallery = getLatestGallery(6);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState(gallery[0]?.images || []);

  const openLightbox = (galleryItem: typeof gallery[0], imageIndex: number) => {
    setLightboxImages(galleryItem.images);
    setLightboxIndex(imageIndex);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="hero-title">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">Imprensa</Badge>
            <h1 id="hero-title" className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Galeria de <span className="gradient-text">fotos</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Registros visuais dos eventos, plenárias, visitas técnicas e encontros que constroem o desenvolvimento de Araucária.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="gallery-title">
        <div className="container-custom">
          <SectionTitle
            id="gallery-title"
            title="Álbuns recentes"
            subtitle="Eventos"
            align="center"
          />

          <div className="mt-8 lg:mt-12 flex flex-wrap items-center justify-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <input
                type="search"
                placeholder="Buscar álbuns..."
                className="w-64 lg:w-80 pl-10 pr-4 py-2.5 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                aria-label="Buscar álbuns"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <select className="pl-10 pr-10 py-2.5 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 appearance-none cursor-pointer" aria-label="Filtrar por ano">
                <option value="todos">Todos os anos</option>
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

          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <GalleryItem key={item.slug} gallery={item} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">Carregar mais álbuns</Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="stats-title">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">{gallery.length}+</div>
              <div className="text-muted-foreground">Álbuns publicados</div>
            </div>
            <div className="p-6">
              <div className="font-display text-4xl lg:text-5xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">
                {gallery.reduce((acc, g) => acc + g.images.length, 0)}+
              </div>
              <div className="text-muted-foreground">Fotos no acervo</div>
            </div>
            <div className="p-6">
              <div className="font-display text-4xl lg:text-5xl font-bold text-accent-600 dark:text-accent-400 mb-2">2024</div>
              <div className="text-muted-foreground">Ano mais recente</div>
            </div>
            <div className="p-6">
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">6</div>
              <div className="text-muted-foreground">Categorias de eventos</div>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}