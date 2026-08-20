import { Metadata } from 'next';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { EventCard } from '@/components/sections/EventCard';
import { events, getUpcomingEvents, getPastEvents } from '@/data/events';
import { Badge } from '@/components/ui/Badge';
import { Calendar, Clock, MapPin, Filter, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Agenda de Eventos',
  description: 'Calendário de eventos do AvançAraucária: plenárias, reuniões de Câmaras Técnicas, workshops, fóruns e encontros institucionais. Participe do desenvolvimento de Araucária.',
  openGraph: {
    title: 'Agenda de Eventos — AvançAraucária',
    description: 'Próximos eventos, plenárias, workshops e reuniões das Câmaras Técnicas do Conselho de Desenvolvimento Econômico de Araucária.',
    type: 'website',
  },
};

const categories = ['Todos', 'Plenária', 'Câmara Técnica', 'Capacitação', 'Fórum', 'Evento Especial', 'Evento Institucional'];

export default function AgendaPage() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents(6);

  return (
    <>
      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="hero-title">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">Agenda</Badge>
            <h1 id="hero-title" className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
              Próximos <span className="gradient-text">eventos</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Participe das plenárias, reuniões de Câmaras Técnicas, workshops e fóruns que constroem o futuro de Araucária.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="upcoming-title">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
            <SectionTitle
              id="upcoming-title"
              title="Eventos futuros"
              subtitle="Agenda"
              align="left"
            />
            <div className="flex flex-wrap items-center justify-end gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Buscar eventos..."
                  className="w-64 pl-10 pr-4 py-2.5 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                  aria-label="Buscar eventos"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
                <select className="pl-10 pr-10 py-2.5 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 appearance-none cursor-pointer" aria-label="Filtrar por categoria">
                  {categories.map((cat) => (
                    <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
              </div>
            </div>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.slug} event={event} index={index} />
              ))}
            </div>
          ) : (
            <Card variant="outlined" padding="lg" className="text-center">
              <Calendar className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" aria-hidden="true" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Nenhum evento agendado</h3>
              <p className="text-muted-foreground">Novos eventos serão publicados em breve. Volte sempre para conferir a agenda atualizada.</p>
            </Card>
          )}
        </div>
      </section>

      {pastEvents.length > 0 && (
        <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50" aria-labelledby="past-title">
          <div className="container-custom">
            <SectionTitle
              id="past-title"
              title="Eventos realizados"
              subtitle="Histórico"
              align="center"
            />
            <div className="mt-12 lg:mt-16 space-y-4">
              {pastEvents.map((event, index) => (
                <article key={event.slug}>
                  <Link href={`/agenda/${event.slug}`} className="block">
                    <Card variant="outlined" padding="lg" hover className="flex flex-col md:flex-row md:items-center gap-6 transition-all duration-300">
                      <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-border flex flex-col items-center justify-center text-center">
                        <time dateTime={event.date} className="font-display font-bold text-2xl text-muted-foreground">
                          {new Date(event.date).getDate()}
                        </time>
                        <span className="font-medium text-xs text-muted-foreground uppercase tracking-wide">
                          {new Date(event.date).toLocaleDateString('pt-BR', { month: 'short' })}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant="outline" size="sm">{event.category}</Badge>
                          {event.chamberSlug && <Badge variant="secondary" size="sm">Câmara: {event.chamberSlug.replace(/-/g, ' ')}</Badge>}
                          <Badge variant="error" size="sm">Encerrado</Badge>
                        </div>
                        <h3 className="font-display text-lg font-bold text-foreground mb-2">{event.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">{event.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1"><Clock className="w-4 h-4" aria-hidden="true" /> {event.time}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" aria-hidden="true" /> {event.location}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="text-sm font-medium text-muted-foreground">Ver detalhes</span>
                      </div>
                    </Card>
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">Ver todos os eventos anteriores</Button>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-24" aria-labelledby="cta-title">
        <div className="container-custom text-center">
          <h2 id="cta-title" className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Não perca nenhum evento
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Cadastre-se para receber avisos sobre novos eventos, plenárias e reuniões das Câmaras Técnicas diretamente no seu e-mail.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-surface-light dark:bg-surface-dark text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
              aria-label="E-mail para avisos de eventos"
              required
            />
            <Button size="lg" type="submit">Receber avisos</Button>
          </form>
        </div>
      </section>
    </>
  );
}