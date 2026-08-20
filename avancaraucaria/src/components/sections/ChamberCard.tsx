'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Briefcase, FlaskConical, Leaf, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useReducedMotion } from '@/hooks/useIntersectionObserver';
import type { Chamber } from '@/types';

const chamberIcons = {
  'educacao-empreendedorismo': GraduationCap,
  'diversificacao-potencializacao-economia': Briefcase,
  'inovacao-biotecnologia': FlaskConical,
  'sustentabilidade-socioambiental': Leaf,
  'mobilidade-integracao-ordenamento-territorial': MapPin,
};

const chamberColors = {
  primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-800',
  secondary: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 border-secondary-200 dark:border-secondary-800',
  accent: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 border-accent-200 dark:border-accent-800',
};

interface ChamberCardProps {
  chamber: Chamber;
  index: number;
}

const enterTransition = { type: 'spring' as const, duration: 0.55, bounce: 0 };

export function ChamberCard({ chamber, index }: ChamberCardProps) {
  const Icon = chamberIcons[chamber.slug as keyof typeof chamberIcons] || GraduationCap;
  const colorClass = chamberColors[chamber.color as keyof typeof chamberColors] || chamberColors.primary;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={prefersReducedMotion ? { duration: 0 } : enterTransition}
    >
      <Link
        href={`/camaras-tecnicas/${chamber.slug}`}
        className="block h-full"
        aria-label={`Conhecer a ${chamber.name}`}
      >
        <Card variant="elevated" padding="lg" hover className="h-full flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center shrink-0', colorClass)}>
              <Icon className="w-6 h-6" aria-hidden="true" />
            </div>
            <Badge variant="outline" size="sm" className="shrink-0 mt-1">
              {chamber.number}
            </Badge>
          </div>

          <h3 className="font-display text-xl font-bold text-foreground mb-2">{chamber.name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{chamber.description}</p>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 group">
              Conhecer
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
            <span className="text-xs text-muted-foreground">{chamber.members.length} membros</span>
          </div>
        </Card>
      </Link>
    </motion.article>
  );
}