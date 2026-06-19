import Link from 'next/link';
import { ArrowRight, BadgeCheck, Gift, Sparkles } from 'lucide-react';
import { launchGift } from '@/lib/packs';

export default function RegaloPage() {
  return (
    <main>
      <section className="bg-[linear-gradient(135deg,#f8f1e5,#eef0e8)] py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white p-3 shadow-soft">
            <img src={launchGift.image} alt={launchGift.title} className="aspect-[4/5] w-full rounded-[2.4rem] object-cover" loading="eager" decoding="async" />
            <div className="absolute left-8 top-8 rounded-full bg-honey px-5 py-3 text-sm font-black uppercase tracking-[.2em] text-moss shadow-lg">Primer pedido</div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-sage shadow-sm"><Gift className="h-4 w-4 text-honey" /> Regalo de bienvenida</div>
            <h1 className="mt-5 font-serif text-6xl font-bold leading-none md:text-8xl">Tu primera caja empieza con una sorpresa.</h1>
            <p className="mt-6 text-lg leading-8 text-moss/72">Con tu primer pedido recibes el Kit Descubrimiento VERAIA: una pequeña experiencia para probar aromas, texturas y propiedades distintas.</p>
            <Link href="/rituales" className="btn-primary mt-8">Elegir mi primera caja <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {launchGift.includes.map((item) => (
            <div key={item} className="rounded-[2rem] border border-moss/10 bg-white/75 p-7 shadow-sm">
              <BadgeCheck className="h-7 w-7 text-honey" />
              <p className="mt-5 font-serif text-3xl font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20 lg:pb-28">
        <div className="rounded-[3rem] bg-moss p-8 text-center text-cream shadow-soft md:p-14">
          <Sparkles className="mx-auto h-10 w-10 text-honey" />
          <h2 className="mt-5 font-serif text-5xl font-bold md:text-7xl">Descubre tu aroma favorito.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/75">El kit está pensado para que pruebes diferentes sensaciones y encuentres tu próximo ritual VERAIA.</p>
        </div>
      </section>
    </main>
  );
}
