import Link from 'next/link';
import { ArrowRight, BadgeCheck, CheckCircle2, Gift, Heart, Leaf, PackageCheck, Repeat, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { packs } from '@/lib/packs';
import { PackCard } from '@/components/pack-card';
import { ProductImage } from '@/components/product-image';

const proof = [
  ['Pack completo', 'Recibes una experiencia lista para usar o regalar, no productos sueltos.', PackageCheck],
  ['Natural y artesanal', 'Jabones, bálsamos y aromas botánicos con una estética premium.', Leaf],
  ['Compra segura', 'Pago único o suscripción mensual mediante Stripe Checkout.', ShieldCheck],
  ['Hecho para regalar', 'Presentación cuidada, ritual guiado y sensación de detalle especial.', Gift]
];

const steps = [
  ['1', 'Elige tu estado', 'Descanso, Calma, Energía, Equilibrio o Ritual Mensual.'],
  ['2', 'Recibe tu caja', 'Preparamos una selección natural, bonita y lista para regalar.'],
  ['3', 'Haz tu ritual', 'Una guía breve te ayuda a convertirlo en un momento real de pausa.']
];

const ingredients = [
  ['Caléndula', '/images/calendula-soap.jfif'],
  ['Cítricos', '/images/lemon-soap.jpg'],
  ['Coco', '/images/coconut-soap.jfif'],
  ['Carbón activo', '/images/charcoal-soap.jpg']
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative border-b border-moss/10 bg-[linear-gradient(135deg,#fbf5eb_0%,#f3eadb_48%,#e9ede3_100%)]">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-honey/20 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-sage/15 blur-3xl" />
        <div className="container-page relative grid min-h-[86vh] items-center gap-12 py-12 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-moss/10 bg-white/70 px-4 py-2 text-sm font-bold text-sage shadow-sm">
              <Star className="h-4 w-4 fill-honey text-honey" /> Bienestar natural premium
            </div>
            <h1 className="max-w-4xl font-serif text-6xl font-bold leading-[.9] tracking-tight md:text-8xl">
              Rituales naturales que se sienten como un regalo.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-moss/75 md:text-xl">
              VERAIA crea packs completos para ayudarte a descansar, desconectar y sentirte mejor cada día. Jabones artesanales, bálsamos y aromas botánicos en una experiencia lista para disfrutar.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#rituales" className="btn-primary text-base">Comprar mi ritual <ArrowRight className="ml-2 h-5 w-5" /></a>
              <a href="#como-funciona" className="btn-secondary text-base">Cómo funciona</a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-sm text-moss/70">
              <div className="rounded-2xl bg-white/60 p-4"><b className="block font-serif text-3xl text-moss">5</b>rituales iniciales</div>
              <div className="rounded-2xl bg-white/60 p-4"><b className="block font-serif text-3xl text-moss">24€</b>suscripción desde</div>
              <div className="rounded-2xl bg-white/60 p-4"><b className="block font-serif text-3xl text-moss">100%</b>listo para regalar</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-honey/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white p-3 shadow-soft">
              <ProductImage src="/images/veraia-brand-board.jpg" alt="Identidad premium VERAIA" priority className="aspect-[4/5] w-full rounded-[2.4rem] object-cover" />
              <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] bg-cream/92 p-5 shadow-soft backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[.25em] text-sage">VERAIA Natural Soap Collection</p>
                <p className="mt-2 font-serif text-3xl font-semibold">Lo natural que tu piel merece.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-moss py-4 text-cream">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center text-xs font-bold uppercase tracking-[.25em] text-cream/75">
          <span>Natural</span><span>Artesanal</span><span>Premium</span><span>Regalable</span><span>Pago seguro</span>
        </div>
      </section>

      <section id="por-que-veraia" className="border-y border-moss/10 bg-white/55 py-16">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Por qué VERAIA</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-6xl">No vendemos jabones. Vendemos momentos de pausa.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {proof.map(([title, text, Icon]: any) => (
              <div key={title} className="rounded-[1.6rem] border border-moss/10 bg-cream p-6 shadow-sm">
                <Icon className="h-7 w-7 text-sage" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-moss/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rituales" className="container-page py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Packs iniciales</p>
          <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-6xl">Elige cómo quieres sentirte hoy.</h2>
          <p className="mt-5 text-lg leading-8 text-moss/70">Cada ritual está pensado para un momento concreto: dormir mejor, bajar revoluciones, activar la mañana o mantener una pausa mensual.</p>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {packs.map((pack) => <PackCard key={pack.slug} pack={pack} />)}
        </div>
      </section>

      <section id="como-funciona" className="bg-white py-20 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Proceso sencillo</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-6xl">De la web a tu ritual en tres pasos.</h2>
            <p className="mt-5 text-lg leading-8 text-moss/70">Una experiencia ordenada, clara y pensada para que el cliente compre sin dudas.</p>
            <a href="#rituales" className="btn-primary mt-8">Quiero elegir mi pack <ArrowRight className="ml-2 h-5 w-5" /></a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map(([number, title, text]) => (
              <div key={title} className="rounded-[2rem] border border-moss/10 bg-cream p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-moss font-serif text-2xl font-bold text-cream">{number}</div>
                <h3 className="mt-6 font-serif text-3xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-moss/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid overflow-hidden rounded-[3rem] border border-moss/10 bg-moss text-cream shadow-soft lg:grid-cols-[.9fr_1.1fr]">
          <div className="p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-honey">Botánica sensorial</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight">Aromas que ayudan a decidir.</h2>
            <p className="mt-5 text-lg leading-8 text-cream/75">El cliente no compra por catálogo: compra por sensación. Por eso cada pack comunica un resultado emocional claro.</p>
            <div className="mt-8 grid gap-3 text-sm text-cream/80">
              {['Descanso: cálido y nocturno', 'Calma: floral y suave', 'Energía: cítrico y luminoso', 'Equilibrio: limpieza consciente'].map((item) => <p key={item} className="flex items-center gap-3"><BadgeCheck className="h-5 w-5 text-honey" />{item}</p>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 bg-cream p-3">
            {ingredients.map(([name, src]) => (
              <div key={name} className="relative overflow-hidden rounded-[1.8rem]">
                <ProductImage src={src} alt={name} className="h-64 w-full object-cover lg:h-full" />
                <span className="absolute bottom-4 left-4 rounded-full bg-cream/90 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-moss">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="suscripcion" className="container-page pb-24">
        <div className="grid overflow-hidden rounded-[3rem] border border-moss/10 bg-white shadow-soft lg:grid-cols-2">
          <ProductImage src="/images/soap-trio.jpg" alt="Ritual mensual VERAIA" className="h-full min-h-[420px] w-full object-cover" />
          <div className="p-10 lg:p-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sm font-bold text-sage"><Repeat className="h-4 w-4" /> Suscripción flexible</div>
            <h2 className="mt-5 font-serif text-5xl font-bold leading-tight md:text-6xl">Una pausa natural cada mes.</h2>
            <p className="mt-5 text-lg leading-8 text-moss/75">VERAIA Ritual Mensual es una caja sorpresa de temporada con productos artesanales, aromas y una guía breve para crear un momento de bienestar recurrente.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['Novedad mensual', 'Precio preferente', 'Ideal regalo'].map((item) => <div key={item} className="rounded-2xl bg-cream p-4 text-sm font-bold text-moss"><CheckCircle2 className="mb-2 h-5 w-5 text-sage" />{item}</div>)}
            </div>
            <div className="mt-8 rounded-[2rem] bg-cream p-6">
              <p className="font-serif text-4xl font-bold">Desde 24€/mes</p>
              <p className="mt-2 text-sm text-moss/65">Sin complicaciones. Para ti o para regalar una experiencia constante.</p>
            </div>
            <Link href="/rituales/ritual-mensual" className="btn-primary mt-8 w-full sm:w-auto">Suscribirme ahora <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-24">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-moss/10 bg-white p-8 shadow-sm lg:col-span-1">
            <Heart className="h-8 w-8 text-honey" />
            <h2 className="mt-5 font-serif text-4xl font-bold">Pensado para comprar sin pensarlo demasiado.</h2>
            <p className="mt-4 leading-7 text-moss/70">Secciones claras, beneficios visibles y llamadas a la acción constantes para llevar al usuario al pack adecuado.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:col-span-2">
            {['Regalo bonito para alguien especial', 'Autocuidado para noches de descanso', 'Rutina fresca para empezar el día', 'Caja mensual para repetir la experiencia'].map((text) => (
              <div key={text} className="rounded-[2rem] border border-moss/10 bg-white p-8 shadow-sm">
                <Sparkles className="h-6 w-6 text-sage" />
                <p className="mt-5 font-serif text-3xl font-semibold leading-tight">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
