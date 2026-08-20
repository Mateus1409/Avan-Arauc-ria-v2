import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { news, getNewsBySlug, getAllNewsSlugs, getLatestNews } from '@/data/news';
import { formatDate } from '@/lib/utils';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { NewsCard } from '@/components/sections/NewsCard';
import { SocialShare } from '@/components/sections/SocialShare';

export async function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    return { title: 'Notícia não encontrada' };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: article.author ? [article.author] : ['AvançAraucária'],
      tags: article.tags,
      images: article.image ? [{ url: article.image, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : [],
    },
  };
}

export default async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedNews = getLatestNews(3).filter(n => n.slug !== slug);

  return (
    <article>
      <section className="py-16 lg:py-24" aria-labelledby="news-title">
        <div className="container-custom">
          <Link href="/noticias" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Voltar às notícias
          </Link>

          <header className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <Badge variant="primary">{article.category}</Badge>
              <time className="text-sm text-muted-foreground flex items-center gap-1" dateTime={article.publishedAt}>
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                {formatDate(article.publishedAt)}
              </time>
            </div>

            <h1 id="news-title" className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground mb-6">
              {article.title}
            </h1>

            {article.author && (
              <p className="text-muted-foreground mb-6">Por {article.author}</p>
            )}

            <SocialShare title={article.title} excerpt={article.excerpt} />
          </header>

          {article.image && (
            <div className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden">
              <img
                src={article.image}
                alt=""
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          )}

          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              <p className="text-xl font-medium text-foreground mb-6">{article.excerpt}</p>
              <div className="space-y-6 text-base">
                {article.content.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center gap-2">
                <Tag className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" size="sm">{tag}</Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {relatedNews.length > 0 && (
        <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="related-title">
          <div className="container-custom">
            <SectionTitle
              id="related-title"
              title="Outras notícias"
              subtitle="Relacionadas"
              align="center"
            />
            <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((item, index) => (
                <NewsCard key={item.slug} news={item} index={index} variant="default" />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}