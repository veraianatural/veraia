import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geminis | Catálogo profesional interactivo',
  description: 'Catálogo profesional interactivo de Geminis para baño y cocina.',
};

export default function GeminisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
