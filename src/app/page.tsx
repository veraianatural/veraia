import Image from 'next/image';
import { ArrowRight, Sparkles, Truck, ShieldCheck, Repeat } from 'lucide-react';
import { packs } from '@/lib/packs';
import { PackCard } from '@/components/pack-card';

export default function Home() {
  return <main>
    <section className="container-page grid min-h-[78vh] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
      <div>
        <p className="mb-4 inline-flex rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-sage">Bienestar natural en packs premium</p>
        <h1 className="font-serif text-6xl font-bold leading-[.95] md:text-8xl">Rituales naturales para sentirte mejor cada día.</h1>
        <p className="mt-6 max-w-xl text-lg text-moss/75">VERAIA crea rituales naturales para ayudarte a descansar, desconectar y cuidar tu piel sin complicarte.</p>
        <div className="mt-8 flex flex-wrap gap-4"><a href="#rituales" className="btn-primary">Elegir mi ritual <ArrowRight className="ml-2 h-4 w-4" /></a><a href="#suscripcion" className="btn-secondary">Ritual mensual</a></div>
      </div>
      <div className="relative"><div className="absolute -inset-6 rounded-[3rem] bg-sand/50 blur-3xl" /><Image src="/images/pack-inspiration.jfif" alt="Pack VERAIA" width={900} height={900} priority className="relative rounded-[3rem] shadow-soft" /></div>
    </section>

    <section className="bg-white/45 py-14"><div className="container-page grid gap-4 md:grid-cols-4">{[
      ['Ingredientes naturales', Sparkles], ['Envío preparado con mimo', Truck], ['Pago seguro con Stripe', ShieldCheck], ['Suscripción flexible', Repeat]
    ].map(([text, Icon]: any) => <div key={text} className="rounded-3xl border border-moss/10 bg-cream p-6"><Icon className="h-6 w-6 text-sage" /><p className="mt-4 font-semibold">{text}</p></div>)}</div></section>

    <section id="rituales" className="container-page py-20"><div className="max-w-2xl"><p className="text-sm uppercase tracking-[.3em] text-sage">Packs iniciales</p><h2 className="mt-3 font-serif text-5xl font-bold">No vendemos productos sueltos. Creamos rituales completos.</h2></div><div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">{packs.map((pack) => <PackCard key={pack.slug} pack={pack} />)}</div></section>

    <section id="suscripcion" className="container-page pb-24"><div className="card grid overflow-hidden lg:grid-cols-2"><Image src="/images/soap-trio.jfif" alt="Suscripción mensual" width={900} height={700} className="h-full object-cover" /><div className="p-10 lg:p-14"><p className="text-sm uppercase tracking-[.3em] text-sage">Ritual mensual</p><h2 className="mt-3 font-serif text-5xl font-bold">Una pausa natural recurrente.</h2><p className="mt-5 text-moss/75">Cada mes recibes una selección rotativa de temporada con productos artesanales, aromas y una guía breve de ritual.</p><a href="/rituales/ritual-mensual" className="btn-primary mt-8">Suscribirme</a></div></div></section>
  </main>;
}
