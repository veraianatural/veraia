import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Leaf, PackageCheck, Repeat, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { packs } from '@/lib/packs';
import { PackCard } from '@/components/pack-card';

const proof = [
  ['Ingredientes naturales', 'Formulaciones sencillas con aromas botánicos y texturas cuidadas.', Leaf],
  ['Rituales completos', 'No compras un jabón: recibes una experiencia pensada de principio a fin.', Sparkles],
  ['Pago seguro', 'Checkout con Stripe para pagos únicos y suscripciones.', ShieldCheck],
  ['Listo para regalar', 'Presentación premium, detalles botánicos y tarjeta de ritual.', PackageCheck]
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(217,164,65,.22),transparent_32%),linear-gradient(135deg,#fbf5eb_0%,#f4ead8_45%,#eef0e8_100%)]" />
        <div className="container-page grid min-h-[82vh] items-center gap-12 py-14 lg:grid-cols-[1fr_.95fr] lg:py-20">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-moss/10 bg-white/70 px-4 py-2 text-sm font-bold text-sage shadow-sm">
              <Star className="h-4 w-4 fill-honey text-honey" /> Marca premium de bienestar natural
            </div>
            <h1 className="max-w-4xl font-serif text-6xl font-bold leading-[.92] tracking-tight md:text-8xl">
              Rituales naturales para descansar, desconectar y sentirte mejor.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-moss/75 md:text-xl">
              VERAIA transforma el cuidado diario en packs completos de bienestar: jabones artesanales, bálsamos, aromas y una guía sencilla para crear tu momento de pausa.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#rituales" className="btn-primary text-base">Elegir mi ritual <ArrowRight className="ml-2 h-5 w-5" /></a>
              <a href="#suscripcion" className="btn-secondary text-base">Ver Ritual Mensual</a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm text-moss/70">
              <div><b className="block font-serif text-3xl text-moss">5</b>rituales iniciales</div>
              <div><b className="block font-serif text-3xl text-moss">24h</b>preparación cuidada</div>
              <div><b className="block font-serif text-3xl text-moss">100%</b>enfoque regalo</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-honey/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white p-3 shadow-soft">
              <Image src="/images/pack-inspiration.jpg" alt="Caja premium VERAIA con rituales naturales" width={950} height={950} priority className="aspect-[4/5] rounded-[2.4rem] object-cover" />
              <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] bg-cream/90 p-5 shadow-soft backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[.25em] text-sage">VERAIA Natural Soap Collection</p>
                <p className="mt-2 font-serif text-3xl font-semibold">Lo natural que tu piel merece.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="por-que-veraia" className="border-y border-moss/10 bg-white/55 py-14">
        <div className="container-page grid gap-5 md:grid-cols-4">
          {proof.map(([title, text, Icon]: any) => (
            <div key={title} className="rounded-[1.6rem] border border-moss/10 bg-cream p-6 shadow-sm">
              <Icon className="h-7 w-7 text-sage" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-moss/65">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="rituales" className="container-page py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Packs iniciales</p>
          <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-6xl">Elige cómo quieres sentirte hoy.</h2>
          <p className="mt-5 text-lg leading-8 text-moss/70">Cada pack está diseñado para un momento concreto: dormir mejor, calmar la mente, activar la mañana o regalar una pausa premium.</p>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {packs.map((pack) => <PackCard key={pack.slug} pack={pack} />)}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="grid overflow-hidden rounded-[3rem] border border-moss/10 bg-moss text-cream shadow-soft lg:grid-cols-[.9fr_1.1fr]">
          <div className="p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-honey">Marca premium</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight">Una estética natural, elegante y lista para vender.</h2>
            <p className="mt-5 text-lg leading-8 text-cream/75">La web usa el verde profundo, crema y dorado del nuevo logo para transmitir confianza, calma y valor de regalo.</p>
            <div className="mt-8 grid gap-3 text-sm text-cream/80">
              {['Diseño responsive para móvil', 'Imágenes reales de producto', 'CTA claros hacia Stripe', 'Enfoque en packs y suscripciones'].map((item) => <p key={item} className="flex items-center gap-3"><BadgeCheck className="h-5 w-5 text-honey" />{item}</p>)}
            </div>
          </div>
          <Image src="/images/veraia-brand-board.jpg" alt="Identidad visual VERAIA" width={1000} height={1000} className="h-full min-h-[420px] object-cover" />
        </div>
      </section>

      <section id="suscripcion" className="container-page pb-24">
        <div className="grid overflow-hidden rounded-[3rem] border border-moss/10 bg-white shadow-soft lg:grid-cols-2">
          <Image src="/images/soap-trio.jpg" alt="Ritual mensual VERAIA" width={900} height={800} className="h-full min-h-[420px] object-cover" />
          <div className="p-10 lg:p-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sm font-bold text-sage"><Repeat className="h-4 w-4" /> Suscripción flexible</div>
            <h2 className="mt-5 font-serif text-5xl font-bold leading-tight md:text-6xl">Una pausa natural cada mes.</h2>
            <p className="mt-5 text-lg leading-8 text-moss/75">VERAIA Ritual Mensual es una caja sorpresa de temporada con productos artesanales, aromas y una guía breve para crear un momento de bienestar recurrente.</p>
            <div className="mt-8 rounded-[2rem] bg-cream p-6">
              <p className="font-serif text-4xl font-bold">Desde 24€/mes</p>
              <p className="mt-2 text-sm text-moss/65">Sin complicaciones. Ideal para regalar o para mantener tu ritual de autocuidado.</p>
            </div>
            <Link href="/rituales/ritual-mensual" className="btn-primary mt-8 w-full sm:w-auto">Suscribirme ahora <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
