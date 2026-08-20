'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useReducedMotion } from '@/hooks/useIntersectionObserver';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
    variant?: 'primary' | 'outline';
  };
  align?: 'left' | 'center';
  className?: string;
  tag?: 'h2' | 'h3';
  id?: string;
}

const enterTransition = { type: 'spring' as const, duration: 0.55, bounce: 0 };

export function SectionTitle({
  title,
  subtitle,
  description,
  cta,
  align = 'center',
  className,
  tag: Tag = 'h2',
  id,
}: SectionTitleProps) {
  const prefersReducedMotion = useReducedMotion();

  const transition = prefersReducedMotion ? { duration: 0 } : enterTransition;
  const initial = { opacity: 0, y: 20, filter: 'blur(4px)' };
  const animate = { opacity: 1, y: 0, filter: 'blur(0px)' };

  return (
    <div className={cn('relative', align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl', className)}>
      {subtitle && (
        <motion.span
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          transition={transition}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={initial}
        whileInView={animate}
        viewport={{ once: true }}
        transition={transition}
        className={cn('font-display font-bold tracking-tight text-foreground', Tag === 'h2' ? 'text-3xl lg:text-4xl xl:text-5xl' : 'text-2xl lg:text-3xl')}
        id={id}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
          className="mt-4 lg:mt-6 text-lg text-muted-foreground leading-relaxed"
        >
          {description}
        </motion.p>
      )}
      {cta && (
        <motion.div
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
          className="mt-6 lg:mt-8"
        >
          <Button variant={cta.variant || 'primary'} size="lg" asChild>
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </motion.div>
      )}
    </div>
  );
}