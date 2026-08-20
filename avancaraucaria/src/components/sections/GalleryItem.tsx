'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Image, Search, ChevronLeft, ChevronRight, X, Video, Film } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';
import type { GalleryItem, GalleryImage } from '@/types';

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  return prefersReducedMotion;
}

interface GalleryItemProps {
  gallery: GalleryItem;
  index: number;
}

function renderMedia(image: GalleryImage) {
  if (image.type === 'video') {
    return (
      <video
        src={image.url}
        poster={image.poster}
        className="w-full h-full object-cover"
        playsInline
        muted
        loop
        autoPlay
      />
    );
  }
  return (
    <img
      src={image.url}
      alt={image.alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
  );
}

function renderLightboxMedia(image: GalleryImage) {
  if (image.type === 'video') {
    return (
      <video
        src={image.url}
        poster={image.poster}
        className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
        playsInline
        muted
        loop
        autoPlay
        controls
      />
    );
  }
  return (
    <img
      src={image.url}
      alt={image.alt}
      className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
    />
  );
}

export function GalleryItem({ gallery, index }: GalleryItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const mediaCount = gallery.images.length;
  const videoCount = gallery.images.filter(img => img.type === 'video').length;
  const photoCount = mediaCount - videoCount;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: index * 0.08 }}
    >
      <Link href={`/galeria/${gallery.slug}`} className="block" aria-label={`Ver galeria: ${gallery.title}`}>
        <Card variant="elevated" padding="none" hover className="h-full flex flex-col overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden group">
            {gallery.coverImage ? (
              <>
                {renderMedia({
                  id: 'cover',
                  url: gallery.coverImage,
                  alt: '',
                  width: 1920,
                  height: 1080,
                  type: gallery.coverImage.includes('.mp4') ? 'video' : 'image',
                })}
                {(gallery.coverImage.includes('.mp4')) && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl">
                      <Video className="w-8 h-8 text-primary-600 ml-1" aria-hidden="true" />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20" aria-hidden="true">
                <Image className="w-12 h-12 text-muted-foreground/50" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <Badge variant="outline" className="backdrop-blur-sm">
                  {photoCount > 0 && videoCount > 0
                    ? `${photoCount} fotos ${videoCount > 0 ? `· ${videoCount} vídeos` : ''}`
                    : videoCount > 0
                    ? `${videoCount} vídeos`
                    : `${photoCount} fotos`}
                </Badge>
                <time className="text-sm text-white/90 flex items-center gap-1" dateTime={gallery.date}>
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  {formatDate(gallery.date)}
                </time>
              </div>
              <h3 className="font-display text-lg font-bold text-white leading-tight line-clamp-2">{gallery.title}</h3>
            </div>
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4 line-clamp-2">{gallery.description}</p>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 group">
                Ver galeria completa
                <Search className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
              <span className="text-xs text-muted-foreground">
                {mediaCount} {mediaCount === 1 ? 'item' : 'itens'}
              </span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.article>
  );
}

interface LightboxProps {
  images: GalleryItem['images'];
  initialIndex: number;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [images.length, onClose]);

  const currentImage = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de mídia"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Fechar visualizador"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Mídia anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Próxima mídia"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
        className="max-w-[90vw] max-h-[90vh] px-4"
      >
        {renderLightboxMedia(currentImage)}
        {currentImage.caption && (
          <p className="text-center text-white/80 mt-4 text-sm">{currentImage.caption}</p>
        )}
      </motion.div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                'w-2 h-2 rounded-full transition-all',
                i === currentIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
              )}
              aria-label={`Ir para ${img.type === 'video' ? 'vídeo' : 'imagem'} ${i + 1}`}
              aria-current={i === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}