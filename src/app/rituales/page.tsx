import Link from 'next/link';
import { ArrowRight, Crown } from 'lucide-react';
import { PackCard } from '@/components/pack-card';
import { packs } from '@/lib/packs';

const main = packs.slice(0, 3);
const collection = packs.slice(3, -1);
const monthly = packs[packs.length - 1];
const chakras = ['Raíz', 'Sacro', 'Plexo Solar', 'Corazón', 'Garganta', 'Tercer Ojo', 'Corona'];

export default function RitualesPage() {
  return (
    <main>
      <section className="bg-[linear-gradient(135deg,#fbf5eb,#eef0e8)] py-20 lg:py-28">
        <div className="container-page mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Experiencias VERAIA</p>
          <h1 className="mt-4 font-serif text-6xl font-bold leading-none md:text-8xl">Elige la caja que acompaña tu momento.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-moss/72">Cada pack está diseñado alrededor de una intención concreta y reúne productos artesanales, aromas, guía ritual y sorpresa.</p>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Para empezar</p>
          <h2 className="mt-3 font-serif text-5xl font-bold md:text-7xl">Rituales principales</h2>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          {main.map((pack, index) => <PackCard key={pack.slug} pack={pack} featured={index === 2} />)}
        </div>
      </section>

      <section className="container-page py-6 lg:py-12">
        <div className="grid overflow-hidden rounded-[3rem] border border-moss/10 bg-moss text-cream shadow-soft lg:grid-cols-[.95fr_1.05fr]">
          <div className="p-8 md:p-12 lg:p-16">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[.35em] text-honey"><Crown className="h-4 w-4" /> Ritual premium</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-6xl">7 Chakras: siete días para equilibrar tu energía.</h2>
            <p className="mt-5 text-lg leading-8 text-cream/75">Incluye 7 jabones energéticos, guía paso a paso, meditaciones mediante QR, bolsa especial y regalo sorpresa.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {chakras.map((chakra) => <span key={chakra} className="rounded-full border border-cream/15 bg-cream/10 px-4 py-2 text-center text-sm font-semibold">{chakra}</span>)}
            </div>
            <Link href="/rituales/7-chakras" className="btn-gold mt-9">Ver Pack 7 Chakras <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
          <img src="/images/experience-7-chakras.jpg" alt="Pack VERAIA 7 Chakras" className="h-full min-h-[460px] w-full object-cover" loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="bg-white/70 py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Colección completa</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-7xl">Más experiencias para cada etapa.</h2>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {collection.map((pack) => <PackCard key={pack.slug} pack={pack} />)}
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="grid overflow-hidden rounded-[3rem] border border-moss/10 bg-white shadow-soft lg:grid-cols-2">
          <img src={monthly.image} alt="VERAIA Ritual Mensual" className="h-full min-h-[430px] w-full object-cover" loading="lazy" decoding="async" />
          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Ritual mensual</p>
            <h2 className="mt-5 font-serif text-5xl font-bold leading-tight md:text-6xl">Una experiencia nueva cada mes.</h2>
            <p className="mt-5 text-lg leading-8 text-moss/75">Productos limitados, ritual guiado, regalo sorpresa mensual y acceso QR a música relajante y meditaciones.</p>
            <Link href="/mensual" className="btn-primary mt-8">Descubrir suscripción <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
