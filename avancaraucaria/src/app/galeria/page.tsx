import { Metadata } from 'next';
import { GaleriaContent } from './GaleriaContent';

export const metadata: Metadata = {
  title: 'Galeria de Fotos',
  description: 'Galeria de fotos dos eventos, plenárias, visitas técnicas e encontros do AvançAraucária. Registros visuais do desenvolvimento econômico de Araucária.',
  openGraph: {
    title: 'Galeria de Fotos — AvançAraucária',
    description: 'Fotos de plenárias, visitas técnicas, reuniões e eventos do Conselho de Desenvolvimento Econômico de Araucária.',
    type: 'website',
  },
};

export default function GaleriaPage() {
  return <GaleriaContent />;
}