'use client';

import { motion } from 'framer-motion';
import { useCountUpOnView } from '@/hooks/useCountUp';
import { useReducedMotion } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import type { StatItem } from '@/types';

interface StatItemComponentProps {
  stat: StatItem;
  index: number;
  layout: 'grid' | 'horizontal';
}

const enterTransition = { type: 'spring' as const, duration: 0.55, bounce: 0 };

function StatItemComponent({ stat, index, layout }: StatItemComponentProps) {
  const prefersReducedMotion = useReducedMotion();
  const targetValue = typeof stat.value === 'number' ? stat.value : parseInt(String(stat.value).replace(/\D/g, '')) || 0;

  const { ref, count } = useCountUpOnView(targetValue, {
    duration: 2000,
    delay: index * 100,
    formatter: (value) => {
      const suffix = stat.suffix || '';
      const prefix = stat.prefix || '';
      return `${prefix}${value.toLocaleString('pt-BR')}${suffix}`;
    },
  });

  return (
    <motion.div
      key={stat.label}
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={prefersReducedMotion ? { duration: 0 } : enterTransition}
      className={cn(
        'relative',
        layout === 'grid' ? 'text-center p-4 lg:p-6' : 'text-center'
      )}
      role="listitem"
    >
      <div className="relative">
        <div className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-foreground leading-none mb-2">
          {count}
        </div>
        {stat.isDemo && (
          <span className="absolute -top-2 right-0 text-[10px] bg-accent-500 text-white px-1.5 py-0.5 rounded">DEMO</span>
        )}
      </div>
      <div className="text-sm lg:text-base font-medium text-foreground mt-1">{stat.label}</div>
      {stat.description && (
        <div className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">{stat.description}</div>
      )}
    </motion.div>
  );
}

interface StatsProps {
  stats: StatItem[];
  className?: string;
  layout?: 'grid' | 'horizontal';
}

export function Stats({ stats, className, layout = 'grid' }: StatsProps) {
  return (
    <div
      className={cn(
        'relative',
        layout === 'grid'
          ? 'grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6'
          : 'flex flex-wrap items-center justify-center gap-8 lg:gap-12',
        className
      )}
      role="list"
      aria-label="Indicadores de impacto"
    >
      {stats.map((stat, index) => (
        <StatItemComponent key={stat.label} stat={stat} index={index} layout={layout} />
      ))}
    </div>
  );
}