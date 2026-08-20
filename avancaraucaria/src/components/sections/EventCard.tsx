'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight, XCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useIntersectionObserver';
import type { Event } from '@/types';

const enterTransition = { type: 'spring' as const, duration: 0.55, bounce: 0 };

export function EventCard({ event, index }: { event: Event; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const isPast = new Date(event.date) < new Date();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={prefersReducedMotion ? { duration: 0 } : enterTransition}
    >
      <Link
        href={`/agenda/${event.slug}`}
        className="block"
        aria-label={`Ver detalhes do evento: ${event.title}`}
      >
        <Card variant="outlined" padding="lg" hover className="transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-900 flex flex-col items-center justify-center text-center">
              <time dateTime={event.date} className="font-display font-bold text-2xl sm:text-3xl text-primary-600 dark:text-primary-400">
                {new Date(event.date).getDate()}
              </time>
              <span className="font-medium text-sm text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                {new Date(event.date).toLocaleDateString('pt-BR', { month: 'short' })}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="outline" size="sm">{event.category}</Badge>
                {event.chamberSlug && (
                  <Badge variant="secondary" size="sm">Câmara: {event.chamberSlug.replace('-', ' ')}</Badge>
                )}
                {isPast && <Badge variant="error" size="sm"><XCircle className="w-3 h-3 mr-1" /> Encerrado</Badge>}
              </div>

              <h3 className="font-display text-lg font-bold text-foreground mb-2">{event.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{event.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  {event.time}{event.endTime && ` - ${event.endTime}`}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  {event.location}
                </span>
                {event.isOnline && (
                  <span className="flex items-center gap-1 text-primary-600 dark:text-primary-400">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    Online
                  </span>
                )}
              </div>
            </div>

            <div className="flex-shrink-0 pt-2 sm:pt-0">
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 group">
                Ver detalhes
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.article>
  );
}