import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const serif = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['500','600','700'] });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'VERAIA | Rituales naturales de bienestar',
  description: 'Packs y suscripciones premium para descansar, desconectar y sentirte mejor cada día.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es" className={`${serif.variable} ${sans.variable}`}><body><Header />{children}<Footer /></body></html>;
}
