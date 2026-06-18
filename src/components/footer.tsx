import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-moss py-14 text-cream">
      <div className="container-page grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <img
            src="/images/veraia-logo-main.jpg"
            alt="VERAIA"
            className="h-24 w-auto rounded-2xl bg-cream/95 object-contain"
            loading="lazy"
            decoding="async"
          />
          <p className="mt-5 max-w-sm text-sm leading-6 text-cream/70">
            Rituales naturales para ayudarte a descansar, desconectar y sentirte mejor cada día.
          </p>
        </div>
        <div className="text-sm text-cream/75">
          <p className="mb-3 font-bold uppercase tracking-[.25em] text-honey">Rituales</p>
          <Link className="block py-1 hover:text-white" href="/#rituales">Packs VERAIA</Link>
          <Link className="block py-1 hover:text-white" href="/#suscripcion">Ritual mensual</Link>
          <Link className="block py-1 hover:text-white" href="/cuenta">Mi cuenta</Link>
        </div>
        <div className="text-sm text-cream/75 md:text-right">
          <p className="mb-3 font-bold uppercase tracking-[.25em] text-honey">Contacto</p>
          <p>hola@veraia.com</p>
          <p className="mt-2">Cruelty free · Vegano · Eco friendly</p>
          <p className="mt-6">© {new Date().getFullYear()} VERAIA</p>
        </div>
      </div>
    </footer>
  );
}
