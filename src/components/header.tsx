import Link from 'next/link';
import { Leaf } from 'lucide-react';

export function Header() {
  return <header className="sticky top-0 z-50 border-b border-moss/10 bg-cream/85 backdrop-blur">
    <div className="container-page flex h-20 items-center justify-between">
      <Link href="/" className="flex items-center gap-3 font-serif text-3xl font-bold tracking-[.18em]"><Leaf className="h-6 w-6" />VERAIA</Link>
      <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
        <Link href="/#rituales">Rituales</Link><Link href="/#suscripcion">Suscripción</Link><Link href="/cuenta">Mi cuenta</Link>
      </nav>
      <Link href="/#rituales" className="btn-primary">Comprar ritual</Link>
    </div>
  </header>;
}
