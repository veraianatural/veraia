import Link from 'next/link';
import { ArrowRight, BadgeCheck, Gift, Leaf, PackageCheck, Repeat, ShieldCheck, Sparkles, Star, Truck } from 'lucide-react';
import { packs } from '@/lib/packs';
import { PackCard } from '@/components/pack-card';

const proof = [
  ['Rituales completos', 'Packs pensados para momentos reales: dormir, calmarte, activarte o regalar.', Sparkles],
  ['Ingredientes naturales', 'Aromas botánicos, texturas cuidadas y una experiencia sensorial premium.', Leaf],
  ['Listo para regalar', 'Presentación elegante, estética natural y detalle cuidado desde el primer vistazo.', Gift],
  ['Pago seguro', 'Checkout preparado con Stripe para compras únicas y suscripciones.', ShieldCheck]
];

const steps = [
  ['1', 'Elige tu intención', 'Descanso, calma, energía, equilibrio o una caja mensual de temporada.'],
  ['2', 'Recibe tu ritual', 'Preparamos el pack con productos naturales, guía breve y presentación premium.'],
  ['3', 'Crea tu pausa', '10 minutos de autocuidado para desconectar y volver a sentirte bien.']
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-moss/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(217,164,65,.22),transparent_32%),linear-gradient(135deg,#fbf5eb_0%,#f4ead8_45%,#eef0e8_100%)]" />
        <div className="container-page grid min-h-[82vh] items-center gap-12 py-14 lg:grid-cols-[1fr_.95fr] lg:py-20">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-moss/10 bg-white/70 px-4 py-2 text-sm font-bold text-sage shadow-sm">
              <Star className="h-4 w-4 fill-honey text-honey" /> Bienestar natural premium
            </div>
            <h1 className="max-w-4xl font-serif text-6xl font-bold leading-[.92] tracking-tight md:text-8xl">
              Rituales naturales para descansar, desconectar y sentirte mejor.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-moss/75 md:text-xl">
              VERAIA no vende productos sueltos. Crea packs completos de bienestar para convertir tu cuidado diario en una pausa bonita, natural y fácil de repetir.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#rituales" className="btn-primary text-base">Elegir mi ritual <ArrowRight className="ml-2 h-5 w-5" /></a>
              <a href="#suscripcion" className="btn-secondary text-base">Ver suscripción mensual</a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 text-sm text-moss/70">
              <div className="rounded-2xl bg-white/55 p-4"><b className="block font-serif text-3xl text-moss">5</b>packs iniciales</div>
              <div className="rounded-2xl bg-white/55 p-4"><b className="block font-serif text-3xl text-moss">100%</b>enfoque ritual</div>
              <div className="rounded-2xl bg-white/55 p-4"><b className="block font-serif text-3xl text-moss">Premium</b>listo para regalar</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-honey/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white p-3 shadow-soft">
              <img src="/images/pack-inspiration.jpg" alt="Caja premium VERAIA con rituales naturales" className="aspect-[4/5] w-full rounded-[2.4rem] object-cover" />
              <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] bg-cream/90 p-5 shadow-soft backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[.25em] text-sage">VERAIA Natural Soap Collection</p>
                <p className="mt-2 font-serif text-3xl font-semibold">Lo natural que tu piel merece.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-moss/10 bg-moss py-4 text-cream">
        <div className="container-page grid gap-3 text-center text-xs font-bold uppercase tracking-[.25em] sm:grid-cols-3">
          <p>Natural</p><p>Artesanal</p><p>Listo para regalar</p>
        </div>
      </section>

      <section id="por-que-veraia" className="bg-white/55 py-16">
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

      <section className="container-page py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">La promesa VERAIA</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-6xl">Compra una sensación, no solo un jabón.</h2>
            <p className="mt-5 text-lg leading-8 text-moss/70">Cada ritual tiene una intención clara, una combinación de productos y una guía sencilla para que el cliente sepa exactamente cuándo usarlo y por qué lo necesita.</p>
            <div className="mt-8 grid gap-3 text-sm text-moss/75">
              {['Para regalar sin pensarlo demasiado', 'Para transformar una rutina diaria en autocuidado', 'Para aumentar el valor percibido frente a un producto suelto'].map((item) => <p key={item} className="flex items-center gap-3"><BadgeCheck className="h-5 w-5 text-honey" />{item}</p>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/rose-soap.jfif" alt="Jabón VERAIA de rosas" className="h-72 w-full rounded-[2rem] object-cover shadow-soft" />
            <img src="/images/mint-cream.jfif" alt="Crema VERAIA con menta" className="mt-10 h-72 w-full rounded-[2rem] object-cover shadow-soft" />
          </div>
        </div>
      </section>

      <section id="rituales" className="bg-[#f4ead8] py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Packs iniciales</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-6xl">Elige cómo quieres sentirte hoy.</h2>
            <p className="mt-5 text-lg leading-8 text-moss/70">Rituales claros, deseables y fáciles de comprar. Cada pack resuelve una intención emocional concreta.</p>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {packs.map((pack) => <PackCard key={pack.slug} pack={pack} />)}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Cómo funciona</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight">Una compra simple con mucho valor percibido.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map(([number, title, text]) => (
              <div key={number} className="rounded-[2rem] border border-moss/10 bg-white p-7 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-moss font-serif text-2xl font-bold text-cream">{number}</span>
                <h3 className="mt-5 font-serif text-3xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-moss/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="suscripcion" className="container-page pb-24">
        <div className="grid overflow-hidden rounded-[3rem] border border-moss/10 bg-white shadow-soft lg:grid-cols-2">
          <img src="/images/soap-trio.jpg" alt="Ritual mensual VERAIA" className="h-full min-h-[420px] w-full object-cover" />
          <div className="p-10 lg:p-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sm font-bold text-sage"><Repeat className="h-4 w-4" /> Suscripción flexible</div>
            <h2 className="mt-5 font-serif text-5xl font-bold leading-tight md:text-6xl">Una pausa natural cada mes.</h2>
            <p className="mt-5 text-lg leading-8 text-moss/75">VERAIA Ritual Mensual es una caja sorpresa de temporada con productos artesanales, aromas y una guía breve para crear un momento de bienestar recurrente.</p>
            <div className="mt-8 rounded-[2rem] bg-cream p-6">
              <p className="font-serif text-4xl font-bold">Desde 24€/mes</p>
              <p className="mt-2 text-sm text-moss/65">Ideal para regalar o para mantener tu ritual de autocuidado sin decidir cada mes.</p>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-moss/70 sm:grid-cols-2">
              <p className="flex items-center gap-2"><PackageCheck className="h-5 w-5 text-sage" /> Selección de temporada</p>
              <p className="flex items-center gap-2"><Truck className="h-5 w-5 text-sage" /> Preparado con mimo</p>
            </div>
            <Link href="/rituales/ritual-mensual" className="btn-primary mt-8 w-full sm:w-auto">Suscribirme ahora <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
