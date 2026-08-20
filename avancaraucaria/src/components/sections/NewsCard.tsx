'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useIntersectionObserver';
import type { NewsItem } from '@/types';

interface NewsCardProps {
  news: NewsItem;
  index: number;
  variant?: 'default' | 'featured';
}

const enterTransition = { type: 'spring' as const, duration: 0.55, bounce: 0 };

export function NewsCard({ news, index, variant = 'default' }: NewsCardProps) {
  const prefersReducedMotion = useReducedMotion();

  if (variant === 'featured') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-50px' }}
        transition={prefersReducedMotion ? { duration: 0 } : enterTransition}
      >
        <Link
          href={`/noticias/${news.slug}`}
          className="block h-full"
          aria-label={`Ler notícia: ${news.title}`}
        >
          <Card variant="elevated" padding="none" hover className="h-full flex flex-col overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
              {news.image ? (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20" aria-hidden="true">
                  <Tag className="w-12 h-12 text-muted-foreground/50" aria-hidden="true" />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <Badge variant="primary" size="sm">{news.category}</Badge>
                  <time className="text-sm text-white/90 flex items-center gap-1" dateTime={news.publishedAt}>
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    {formatDate(news.publishedAt)}
                  </time>
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-bold text-white leading-tight line-clamp-2">{news.title}</h3>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <p className="text-white/80 text-sm leading-relaxed flex-1 mb-4">{news.excerpt}</p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                {news.author && (
                  <span className="text-xs text-white/70">{news.author}</span>
                )}
                <span className="text-sm font-medium text-white flex items-center gap-1 group">
                  Ler notícia
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </div>
          </Card>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={prefersReducedMotion ? { duration: 0 } : enterTransition}
    >
      <Link
        href={`/noticias/${news.slug}`}
        className="block h-full"
        aria-label={`Ler notícia: ${news.title}`}
      >
        <Card variant="elevated" padding="lg" hover className="h-full flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" size="sm">{news.category}</Badge>
            <time className="text-xs text-muted-foreground flex items-center gap-1" dateTime={news.publishedAt}>
              <Calendar className="w-3 h-3" aria-hidden="true" />
              {formatDate(news.publishedAt)}
            </time>
          </div>

          <h3 className="font-display text-lg font-bold text-foreground mb-2 line-clamp-2">{news.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{news.excerpt}</p>

          <div className="pt-4 border-t border-border flex items-center justify-between">
            {news.author && (
              <span className="text-xs text-muted-foreground">{news.author}</span>
            )}
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 group">
              Ler notícia
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </Card>
      </Link>
    </motion.article>
  );
}