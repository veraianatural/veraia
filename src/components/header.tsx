import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-moss/10 bg-cream/92 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="VERAIA inicio">
          <img src="/images/veraia-logo-main.jpg" alt="VERAIA" className="h-14 w-auto mix-blend-multiply" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold tracking-wide text-moss/80 md:flex">
          <Link className="hover:text-moss" href="/#rituales">Rituales</Link>
          <Link className="hover:text-moss" href="/#como-funciona">Cómo funciona</Link>
          <Link className="hover:text-moss" href="/#suscripcion">Suscripción</Link>
          <Link className="hover:text-moss" href="/cuenta">Mi cuenta</Link>
        </nav>
        <Link href="/#rituales" className="btn-primary hidden sm:inline-flex">Comprar ritual</Link>
      </div>
    </header>
  );
}
