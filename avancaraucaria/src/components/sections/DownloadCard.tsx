'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, FileType, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';
import type { DownloadItem } from '@/types';

const fileTypeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  PDF: FileText,
  DOC: FileType,
  XLS: FileType,
  ZIP: FileType,
  PPT: FileType,
};

const fileTypeColors: Record<string, string> = {
  PDF: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
  DOC: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  XLS: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  ZIP: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
  PPT: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
  Outro: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300',
};

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

interface DownloadCardProps {
  download: DownloadItem;
  index: number;
}

export function DownloadCard({ download, index }: DownloadCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const FileIcon = fileTypeIcons[download.fileType] || FileText;
  const fileTypeColor = fileTypeColors[download.fileType] || fileTypeColors.Outro;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: index * 0.08 }}
    >
      <Card variant="outlined" padding="lg" hover className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className={cn(
          'w-14 h-14 rounded-xl flex items-center justify-center shrink-0',
          fileTypeColor
        )} aria-hidden="true">
          <FileIcon className="w-7 h-7" />
        </div>

        <div className="flex-1 min-w-0 text-center sm:text-left">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge variant="outline" size="sm">{download.category}</Badge>
            <Badge variant="secondary" size="sm">{download.year}</Badge>
          </div>

          <h3 className="font-medium text-foreground mb-1 line-clamp-1">{download.title}</h3>
          {download.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{download.description}</p>
          )}

          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" aria-hidden="true" />
              {formatDate(download.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <FileType className="w-3 h-3" aria-hidden="true" />
              {download.fileType}
            </span>
            <span className="flex items-center gap-1">
              <Download className="w-3 h-3" aria-hidden="true" />
              {download.fileSize}
            </span>
            {download.downloads !== undefined && (
              <span className="flex items-center gap-1">
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
                {download.downloads} downloads
              </span>
            )}
          </div>
        </div>

        <div className="flex-shrink-0">
          <Button
            variant="primary"
            size="sm"
            className="w-full sm:w-auto"
            onClick={(e) => {
              e.preventDefault();
              window.open(download.fileUrl, '_blank');
            }}
          >
            <Download className="w-4 h-4 mr-2" aria-hidden="true" />
            Baixar
          </Button>
        </div>
      </Card>
    </motion.article>
  );
}