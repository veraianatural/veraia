import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catálogo interactivo | Geminis',
  description: 'Catálogo profesional interactivo de Geminis en formato libro para tablet y móvil.',
};

export default function CatalogoInteractivoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
