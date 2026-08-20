'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, Building2, ChevronDown, Building, Users, FileText, Calendar, Image, Download, Handshake, Mail, Phone, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';

const navItems = [
  { label: 'Início', href: '/' },
  {
    label: 'O AvançAraucária',
    href: '/sobre',
    children: [
      { label: 'Institucional', href: '/sobre' },
      { label: 'Projetos e Ações', href: '/projetos' },
      { label: 'Governança', href: '/governanca' },
      { label: 'Parceiros', href: '/parceiros' },
    ],
  },
  { label: 'Câmaras Técnicas', href: '/camaras-tecnicas' },
  { label: 'Projetos', href: '/projetos' },
  {
    label: 'Imprensa',
    href: '/noticias',
    children: [
      { label: 'Notícias', href: '/noticias' },
      { label: 'Galeria de Fotos', href: '/galeria' },
      { label: 'Agenda', href: '/agenda' },
    ],
  },
  {
    label: 'Mais',
    href: '#',
    children: [
      { label: 'Associados', href: '/associados' },
      { label: 'Galeria', href: '/galeria' },
      { label: 'Downloads', href: '/downloads' },
      { label: 'Parceiros', href: '/parceiros' },
    ],
  },
];

const contactInfo = {
  phone: '(41) 99277-8568',
  whatsapp: '5541992778568',
  email: 'contato@avancaraucaria.com.br',
  address: 'Rua João Pessoa, 145 - Centro - Araucária/PR',
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(null);
    setMobileDropdownOpen(null);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="container-custom" aria-label="Navegação principal">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="AvançAraucária - Página inicial">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center">
              <Building2 className="w-6 h-6 lg:w-7 lg:h-7 text-white" aria-hidden="true" />
            </div>
            <span className="hidden lg:block font-display font-bold text-xl lg:text-2xl text-foreground">
              AvançAraucária
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                isActive={Boolean((pathname ?? '') === item.href || (item.children && (pathname ?? '').startsWith(item.href)))}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
                pathname={pathname}
              />
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label={resolvedTheme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}>
              {resolvedTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="primary" size="md" asChild>
              <Link href="/contato" className="flex items-center gap-2">
                <Plus className="w-4 h-4" aria-hidden="true" />
                Quero ser associado
              </Link>
            </Button>
          </div>

          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-border animate-slide-down">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.href}
                  item={item}
                  isActive={pathname === item.href}
                  dropdownOpen={mobileDropdownOpen}
                  setDropdownOpen={setMobileDropdownOpen}
                  pathname={pathname}
                />
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Tema</span>
                  <Button variant="outline" size="sm" onClick={toggleTheme}>
                    {resolvedTheme === 'dark' ? (
                      <>
                        <Sun className="w-4 h-4 mr-2" /> Claro
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4 mr-2" /> Escuro
                      </>
                    )}
                  </Button>
                </div>
                <Button variant="primary" size="md" asChild className="w-full">
                  <Link href="/contato" className="flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" />
                    Quero ser associado
                  </Link>
                </Button>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                    <Phone className="w-4 h-4" /> {contactInfo.phone}
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                    <Mail className="w-4 h-4" /> {contactInfo.email}
                  </a>
                  <span className="flex items-center gap-2">
                    <Building className="w-4 h-4" /> {contactInfo.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

interface NavItemProps {
  item: (typeof navItems)[0];
  isActive: boolean;
  dropdownOpen: string | null;
  setDropdownOpen: (value: string | null) => void;
  pathname?: string;
}

function NavItem({ item, isActive, dropdownOpen, setDropdownOpen, pathname }: NavItemProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isOpen = dropdownOpen === item.href;

  if (hasChildren) {
    return (
      <div className="relative" onMouseEnter={() => setDropdownOpen(item.href)} onMouseLeave={() => setDropdownOpen(null)}>
        <Link
          href={item.href}
          className={cn(
            'px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5',
            isActive
              ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
              : 'text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800'
          )}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {item.label}
          <ChevronDown className={cn('w-4 h-4 transition-transform', isOpen && 'rotate-180')} aria-hidden="true" />
        </Link>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl border border-border py-2 animate-scale-in" role="menu">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  'block px-4 py-2.5 text-sm transition-colors',
                  pathname === child.href
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800'
                )}
                role="menuitem"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
        isActive
          ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
          : 'text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800'
      )}
    >
      {item.label}
    </Link>
  );
}

function MobileNavItem({ item, isActive, dropdownOpen, setDropdownOpen, pathname }: NavItemProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isOpen = dropdownOpen === item.href;

  if (hasChildren) {
    return (
      <div>
        <button
          className={cn(
            'w-full px-4 py-3 rounded-xl text-left text-base font-medium transition-all duration-200 flex items-center justify-between',
            isActive
              ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
              : 'text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800'
          )}
          onClick={() => setDropdownOpen(isOpen ? null : item.href)}
          aria-expanded={isOpen}
        >
          {item.label}
          <ChevronDown className={cn('w-5 h-5 transition-transform', isOpen && 'rotate-180')} aria-hidden="true" />
        </button>
        {isOpen && (
          <div className="ml-4 mt-2 space-y-1 animate-slide-down">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  'block px-4 py-2.5 text-sm rounded-lg transition-colors',
                  pathname === child.href
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800'
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200',
        isActive
          ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
          : 'text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800'
      )}
    >
      {item.label}
    </Link>
  );
}