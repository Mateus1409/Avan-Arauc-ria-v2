'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Clock, CheckCircle, Hourglass, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useReducedMotion } from '@/hooks/useIntersectionObserver';
import type { Project } from '@/types';

const statusConfig = {
  'Em andamento': { icon: Hourglass, color: 'primary' as const, bg: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300' },
  'Concluído': { icon: CheckCircle, color: 'success' as const, bg: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' },
  'Planejado': { icon: AlertCircle, color: 'warning' as const, bg: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' },
  'Em análise': { icon: Hourglass, color: 'secondary' as const, bg: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300' },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const enterTransition = { type: 'spring' as const, duration: 0.55, bounce: 0 };

export function ProjectCard({ project, index }: ProjectCardProps) {
  const status = statusConfig[project.status] || statusConfig['Em andamento'];
  const StatusIcon = status.icon;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={prefersReducedMotion ? { duration: 0 } : enterTransition}
    >
      <Link
        href={`/projetos/${project.slug}`}
        className="block h-full"
        aria-label={`Conhecer o projeto ${project.title}`}
      >
        <Card variant="elevated" padding="none" hover className="h-full flex flex-col overflow-hidden">
          <div className="relative aspect-video overflow-hidden">
            {project.image ? (
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-600/10" aria-hidden="true" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20" aria-hidden="true">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
              </div>
            )}
            <div className="absolute top-4 left-4 right-4 flex justify-between">
              <Badge variant="outline" className="backdrop-blur-sm">
                {project.category}
              </Badge>
              <Badge variant={status.color} className="backdrop-blur-sm">
                <StatusIcon className="w-3 h-3 mr-1" aria-hidden="true" />
                {project.status}
              </Badge>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <h3 className="font-display text-xl font-bold text-foreground mb-2 line-clamp-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{project.shortDescription}</p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" aria-hidden="true" />
                Início: {new Date(project.startDate).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}
              </span>
              {project.endDate && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  Fim: {new Date(project.endDate).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}
                </span>
              )}
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 group">
                Conhecer projeto
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
              {project.metrics && project.metrics.length > 0 && (
                <span className="text-xs text-muted-foreground">{project.metrics.length} indicadores</span>
              )}
            </div>
          </div>
        </Card>
      </Link>
    </motion.article>
  );
}