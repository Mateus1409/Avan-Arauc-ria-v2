export interface SEOData {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  structuredData?: Record<string, unknown>;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  highlight?: boolean;
}

export interface Chamber {
  id: string;
  number: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  icon: string;
  image?: string;
  color: string;
  members: ChamberMember[];
  activities: ChamberActivity[];
  news: NewsItem[];
  slug: string;
}

export interface ChamberMember {
  id: string;
  name: string;
  role: 'Titular' | 'Suplente';
  organization: string;
  organizationSlug: string;
  photo?: string;
}

export interface ChamberActivity {
  id: string;
  title: string;
  date: string;
  description: string;
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  status: 'Em andamento' | 'Concluído' | 'Planejado' | 'Em análise';
  image?: string;
  gallery?: string[];
  startDate: string;
  endDate?: string;
  chamberSlugs: string[];
  partners: string[];
  metrics?: ProjectMetric[];
  slug: string;
}

export interface ProjectMetric {
  label: string;
  value: string | number;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  author?: string;
  tags?: string[];
  featured?: boolean;
  chamberSlug?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  endTime?: string;
  location: string;
  address?: string;
  category: string;
  chamberSlug?: string;
  isOnline: boolean;
  meetingLink?: string;
  registrationLink?: string;
  slug: string;
}

export interface Associate {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  logo?: string;
  whatsapp?: string;
  featured?: boolean;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
  category: 'Institucional' | 'Empresarial' | 'Ensino' | 'Governo' | 'Terceiro Setor' | 'Ciência e Tecnologia';
  description?: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  date: string;
  eventSlug?: string;
  images: GalleryImage[];
  coverImage: string;
  slug: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  type?: 'image' | 'video';
  poster?: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  year: string;
  fileType: 'PDF' | 'DOC' | 'XLS' | 'ZIP' | 'PPT' | 'Outro';
  fileSize: string;
  fileUrl: string;
  publishedAt: string;
  downloads?: number;
  featured?: boolean;
}

export interface GovernanceMember {
  id: string;
  name: string;
  role: string;
  organization: string;
  organizationSlug?: string;
  photo?: string;
  bio?: string;
  order: number;
  group: 'Presidente de Honra' | 'Comitê Gestor' | 'Câmaras Técnicas' | 'Secretaria Executiva';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  phone: string[];
  whatsapp: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  hours: string;
}

export interface StatItem {
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
  description?: string;
  isDemo?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageProps {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export interface LayoutProps {
  children: React.ReactNode;
  params?: Promise<Record<string, string>>;
}