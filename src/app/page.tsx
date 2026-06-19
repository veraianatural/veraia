import Link from 'next/link';
import { ArrowRight, BadgeCheck, Gift, Heart, Leaf, PackageCheck, PlayCircle, Repeat, ShieldCheck, Sparkles, Star, Wand2 } from 'lucide-react';
import { launchGift, packs, upsells } from '@/lib/packs';
import { PackCard } from '@/components/pack-card';
import { AmbientExperience } from '@/components/ambient-experience';

const heroPacks = packs.slice(0, 3);
const morePacks = packs.slice(3, -1);
const monthlyPack = packs[packs.length - 1];

const promises = [
  ['No es un jabón', 'Es una experiencia completa alrededor de una intención: descanso, amor, energía, abundancia o equilibrio.'],
  ['Apertura memorable', 'Caja cuidada, aromas terapéuticos, guía ritual y regalo sorpresa para que abrirla ya sea parte del ritual.'],
  ['Compra fácil', 'El cliente no elige por catálogo: elige cómo quiere sentirse. Eso aumenta deseo, claridad y conversión.']
];

const chakras = ['Raíz', 'Sacro', 'Plexo Solar', 'Corazón', 'Garganta', 'Tercer Ojo', 'Corona'];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <AmbientExperience />

      <section className="relative min-h-[88vh] overflow-hidden border-b border-moss/10">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#fbf5eb_0%,#f6eddf_42%,#e8eee2_100%)]" />
        <div className="ambient-orb left-[8%] top-[12%] bg-honey/30" />
        <div className="ambient-orb right-[8%] top-[18%] bg-sage/20 animation-delay-1000" />
        <div className="ambient-orb bottom-[5%] left-[35%] bg-white/60 animation-delay-2000" />

        <div className="container-page grid min-h-[88vh] items-center gap-12 py-14 lg:grid-cols-[1fr_.9fr] lg:py-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-moss/10 bg-white/65 px-4 py-2 text-sm font-bold text-sage shadow-sm backdrop-blur">
              <Star className="h-4 w-4 fill-honey text-honey" /> Experiencias de bienestar en forma de caja
            </div>
            <h1 className="max-w-5xl font-serif text-6xl font-bold leading-[.9] tracking-tight md:text-8xl">
              Entra en VERAIA. Sal de la rutina.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-moss/75 md:text-xl">
              VERAIA crea rituales naturales para ayudarte a descansar, desconectar y sentirte mejor cada día. No vendemos productos sueltos: diseñamos momentos completos de autocuidado, aroma e intención.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#rituales" className="btn-primary text-base">Elegir mi experiencia <ArrowRight className="ml-2 h-5 w-5" /></a>
              <a href="#experiencia" className="btn-secondary text-base"><PlayCircle className="mr-2 h-5 w-5" /> Ver concepto</a>
            </div>
            <div className="mt-10 grid max-w-2xl gap-4 text-sm text-moss/70 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/55 p-4 backdrop-blur"><b className="block font-serif text-3xl text-moss">14</b>rituales por intención</div>
              <div className="rounded-2xl bg-white/55 p-4 backdrop-blur"><b className="block font-serif text-3xl text-moss">+ regalo</b>primer pedido</div>
              <div className="rounded-2xl bg-white/55 p-4 backdrop-blur"><b className="block font-serif text-3xl text-moss">QR</b>música y meditaciones</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[4rem] bg-honey/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white p-3 shadow-soft">
              <img src="/images/veraia-hero-experience.jpg" alt="Experiencia premium VERAIA" className="aspect-[4/5] w-full rounded-[2.4rem] object-cover" loading="eager" decoding="async" />
              <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] bg-cream/90 p-5 shadow-soft backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[.25em] text-sage">VERAIA Natural Rituals</p>
                <p className="mt-2 font-serif text-3xl font-semibold">Lo natural que tu piel merece.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">El concepto</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-7xl">VERAIA no vende jabones. Vende momentos de transformación.</h2>
            <p className="mt-6 text-lg leading-8 text-moss/72">Cada caja está pensada alrededor de una intención específica: descanso, amor, abundancia, energía, equilibrio emocional o conexión espiritual. Dentro, el cliente recibe productos artesanales, aromas terapéuticos, instrucciones sencillas y un regalo sorpresa.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {promises.map(([title, text]) => (
              <div key={title} className="rounded-[2rem] border border-moss/10 bg-white/75 p-7 shadow-sm backdrop-blur">
                <Sparkles className="h-7 w-7 text-honey" />
                <h3 className="mt-5 font-serif text-3xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-moss/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rituales" className="bg-white/70 py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Experiencias VERAIA</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-7xl">El cliente elige cómo quiere sentirse.</h2>
            <p className="mt-5 text-lg leading-8 text-moss/70">Ordenado por intención, fácil de entender y preparado para comprar: descanso, amor, chakras, abundancia, energía y más.</p>
          </div>
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {heroPacks.map((pack, index) => <PackCard key={pack.slug} pack={pack} featured={index === 2} />)}
          </div>
          <div className="mt-7 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {morePacks.map((pack) => <PackCard key={pack.slug} pack={pack} />)}
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="grid overflow-hidden rounded-[3rem] border border-moss/10 bg-moss text-cream shadow-soft lg:grid-cols-[.95fr_1.05fr]">
          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-honey">Pack estrella</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-6xl">7 Chakras: siete días, siete jabones, una experiencia completa.</h2>
            <p className="mt-5 text-lg leading-8 text-cream/75">La experiencia premium espiritual de VERAIA: guía paso a paso, meditaciones mediante QR, bolsa especial y regalo sorpresa.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {chakras.map((chakra) => <span key={chakra} className="rounded-full border border-cream/15 bg-cream/10 px-4 py-2 text-center text-sm font-semibold">{chakra}</span>)}
            </div>
            <Link href="/rituales/7-chakras" className="btn-gold mt-9">Ver Pack 7 Chakras <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
          <img src="/images/experience-7-chakras.jpg" alt="Pack VERAIA 7 Chakras" className="h-full min-h-[460px] w-full object-cover" loading="lazy" decoding="async" />
        </div>
      </section>

      <section id="regalo" className="bg-[linear-gradient(135deg,#f8f1e5,#eef0e8)] py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white p-3 shadow-soft">
            <img src={launchGift.image} alt={launchGift.title} className="aspect-[4/5] w-full rounded-[2.4rem] object-cover" loading="lazy" decoding="async" />
            <div className="absolute left-8 top-8 rounded-full bg-honey px-5 py-3 text-sm font-black uppercase tracking-[.2em] text-moss shadow-lg">Gratis</div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-sage shadow-sm"><Gift className="h-4 w-4 text-honey" /> Oferta gancho de lanzamiento</div>
            <h2 className="mt-5 font-serif text-5xl font-bold leading-tight md:text-7xl">Regalo en el primer pedido: Kit Descubrimiento VERAIA.</h2>
            <p className="mt-5 text-lg leading-8 text-moss/72">Todos los nuevos clientes reciben una bolsa de malla reutilizable con mini jabones y aromas distintos. Es una prueba sensorial que ayuda a descubrir otros rituales y favorece la recompra.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {launchGift.includes.map((item) => <p key={item} className="flex gap-3 rounded-2xl bg-white/70 p-4 text-sm font-semibold text-moss/75"><BadgeCheck className="h-5 w-5 shrink-0 text-honey" />{item}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="suscripcion" className="container-page py-20 lg:py-28">
        <div className="grid overflow-hidden rounded-[3rem] border border-moss/10 bg-white shadow-soft lg:grid-cols-2">
          <img src={monthlyPack.image} alt="VERAIA Ritual Mensual" className="h-full min-h-[430px] w-full object-cover" loading="lazy" decoding="async" />
          <div className="p-8 md:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sm font-bold text-sage"><Repeat className="h-4 w-4" /> Ingresos recurrentes</div>
            <h2 className="mt-5 font-serif text-5xl font-bold leading-tight md:text-6xl">Ritual Mensual: una caja exclusiva cada mes.</h2>
            <p className="mt-5 text-lg leading-8 text-moss/75">Productos limitados, ritual nuevo, regalo sorpresa mensual y acceso QR a música relajante, meditaciones y ejercicios energéticos.</p>
            <div className="mt-8 rounded-[2rem] bg-cream p-6">
              <p className="font-serif text-5xl font-bold">Desde 29€/mes</p>
              <p className="mt-2 text-sm text-moss/65">Perfecto para fidelizar, regalar y aumentar el valor de vida del cliente.</p>
            </div>
            <Link href="/rituales/ritual-mensual" className="btn-primary mt-8 w-full sm:w-auto">Suscribirme <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </section>

      <section id="premium" className="bg-white/70 py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Aumentar valor medio</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-7xl">Upsells y extras que convierten una compra en experiencia premium.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {upsells.map(([title, text], index) => (
              <div key={title} className="rounded-[2rem] border border-moss/10 bg-cream p-7 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-moss font-serif text-2xl font-bold text-cream">{index + 1}</span>
                <h3 className="mt-6 font-serif text-3xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-moss/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="relative overflow-hidden rounded-[3rem] border border-moss/10 bg-moss p-8 text-center text-cream shadow-soft md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,143,58,.24),transparent_42%)]" />
          <div className="relative mx-auto max-w-4xl">
            <Wand2 className="mx-auto h-11 w-11 text-honey" />
            <h2 className="mt-5 font-serif text-5xl font-bold leading-tight md:text-7xl">VERAIA vende rituales, bienestar y pequeños momentos mágicos.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/75">Ese es el concepto que convierte un producto artesanal en una experiencia de 39€, 49€ o 69€ percibida como algo mucho más valioso.</p>
            <a href="#rituales" className="btn-gold mt-9">Comprar una experiencia <ArrowRight className="ml-2 h-5 w-5" /></a>
          </div>
        </div>
      </section>

      <section className="border-t border-moss/10 bg-cream py-10">
        <div className="container-page grid gap-5 md:grid-cols-4">
          {[
            ['Natural y artesanal', Leaf],
            ['Pago seguro', ShieldCheck],
            ['Listo para regalar', PackageCheck],
            ['Creado con intención', Heart]
          ].map(([title, Icon]: any) => (
            <div key={title} className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 font-bold text-moss/75"><Icon className="h-5 w-5 text-honey" />{title}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
