import Link from 'next/link';
import { ArrowRight, BadgeCheck, Gift, Heart, Leaf, Moon, PackageCheck, ShieldCheck, Sparkles, Star, Sun } from 'lucide-react';
import { launchGift, packs } from '@/lib/packs';
import { PackCard } from '@/components/pack-card';
import { AmbientExperience } from '@/components/ambient-experience';

const featuredPacks = packs.slice(0, 3);
const intentions = [
  ['Descansar', 'Sueño Profundo', 'Para cerrar el día con calma.', '/rituales/sueno-profundo', Moon],
  ['Cuidarme', 'Amor Propio', 'Para nutrir la piel y la autoestima.', '/rituales/amor-propio', Heart],
  ['Activarme', 'Energía Vital', 'Para empezar con fuerza y claridad.', '/rituales/energia-vital', Sun],
  ['Reconectar', 'Naturaleza', 'Para volver a lo esencial.', '/rituales/naturaleza', Leaf]
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <AmbientExperience />

      <section className="relative min-h-[92vh] overflow-hidden border-b border-moss/10">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#fbf5eb_0%,#f6eddf_42%,#e8eee2_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-80 [background:radial-gradient(circle_at_18%_18%,rgba(196,143,58,.24),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(82,105,79,.18),transparent_26%),radial-gradient(circle_at_55%_92%,rgba(255,255,255,.72),transparent_35%)]" />
        <div className="ambient-orb left-[8%] top-[12%] bg-honey/30" />
        <div className="ambient-orb right-[8%] top-[18%] bg-sage/20 animation-delay-1000" />
        <div className="floating-petal left-[12%] top-[64%]" />
        <div className="floating-petal right-[16%] top-[28%] animation-delay-2000" />

        <div className="container-page grid min-h-[92vh] items-center gap-12 py-14 lg:grid-cols-[1fr_.92fr] lg:py-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-moss/10 bg-white/65 px-4 py-2 text-sm font-bold text-sage shadow-sm backdrop-blur">
              <Star className="h-4 w-4 fill-honey text-honey" /> Experiencias de bienestar en forma de caja
            </div>
            <h1 className="max-w-5xl font-serif text-6xl font-bold leading-[.9] tracking-tight md:text-8xl">
              Ritualiza tu calma. Elige cómo quieres sentirte hoy.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-moss/75 md:text-xl">
              VERAIA crea cajas sensoriales con jabones artesanales, aromas naturales, guía ritual, música relajante mediante QR y un detalle sorpresa para convertir tu autocuidado en un momento especial.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/rituales" className="btn-primary text-base">Elegir mi ritual <ArrowRight className="ml-2 h-5 w-5" /></Link>
              <Link href="/experiencia" className="btn-secondary text-base">Vivir la experiencia</Link>
            </div>
            <div className="mt-10 grid max-w-2xl gap-4 text-sm text-moss/70 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/55 p-4 backdrop-blur"><b className="block font-serif text-3xl text-moss">Ritual</b>guía paso a paso</div>
              <div className="rounded-2xl bg-white/55 p-4 backdrop-blur"><b className="block font-serif text-3xl text-moss">Regalo</b>en primer pedido</div>
              <div className="rounded-2xl bg-white/55 p-4 backdrop-blur"><b className="block font-serif text-3xl text-moss">QR</b>música y meditación</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[4rem] bg-honey/15 blur-3xl" />
            <div className="experience-frame relative overflow-hidden rounded-[3rem] border border-white/70 bg-white p-3 shadow-soft">
              <img src="/images/veraia-hero-experience.jpg" alt="Experiencia premium VERAIA" className="aspect-[4/5] w-full rounded-[2.4rem] object-cover" loading="eager" decoding="async" />
              <div className="absolute inset-3 rounded-[2.4rem] bg-gradient-to-t from-moss/55 via-transparent to-cream/10" />
              <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] bg-cream/90 p-5 shadow-soft backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[.25em] text-sage">VERAIA Natural Rituals</p>
                <p className="mt-2 font-serif text-3xl font-semibold">Lo natural que tu piel merece.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Una pausa para ti</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-7xl">Abre la caja. Enciende la vela. Respira.</h2>
            <p className="mt-6 text-lg leading-8 text-moss/72">Cada experiencia está creada alrededor de una intención: descanso, amor, energía, equilibrio, abundancia o conexión espiritual.</p>
            <Link href="/experiencia" className="btn-secondary mt-8">Descubrir cómo funciona <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
          <div className="ritual-visual relative overflow-hidden rounded-[3rem] border border-moss/10 bg-moss p-8 text-cream shadow-soft md:p-12">
            <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_50%_35%,rgba(245,225,183,.65),transparent_26%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,.20),transparent_20%)]" />
            <div className="relative mx-auto flex aspect-square max-w-[440px] items-center justify-center rounded-full border border-cream/10 bg-cream/5">
              <div className="breath-circle flex h-56 w-56 items-center justify-center rounded-full border border-honey/45 bg-cream/10 text-center shadow-[0_0_80px_rgba(196,143,58,.22)]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.35em] text-honey">Respira</p>
                  <p className="mt-3 font-serif text-5xl font-semibold">4 · 7 · 8</p>
                  <p className="mt-3 text-sm text-cream/70">inhala · pausa · suelta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Elige por emoción</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-7xl">No busques productos. Elige lo que necesitas sentir.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {intentions.map(([need, pack, text, href, Icon]: any) => (
              <Link key={need} href={href} className="group rounded-[2rem] border border-moss/10 bg-cream p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                <Icon className="h-8 w-8 text-honey" />
                <p className="mt-6 text-sm font-bold uppercase tracking-[.25em] text-sage">Quiero</p>
                <h3 className="mt-2 font-serif text-4xl font-semibold">{need}</h3>
                <p className="mt-3 text-sm leading-6 text-moss/65">{text}</p>
                <p className="mt-6 inline-flex items-center text-sm font-bold text-moss">Ver {pack} <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Experiencias principales</p>
          <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-7xl">Tres rituales para empezar.</h2>
          <p className="mt-5 text-lg leading-8 text-moss/70">Sueño Profundo, Amor y 7 Chakras: cajas completas para regalarte un momento con intención.</p>
        </div>
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {featuredPacks.map((pack, index) => <PackCard key={pack.slug} pack={pack} featured={index === 2} />)}
        </div>
        <div className="mt-12 text-center">
          <Link href="/rituales" className="btn-primary">Ver todas las experiencias <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#f8f1e5,#eef0e8)] py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white p-3 shadow-soft">
            <img src={launchGift.image} alt={launchGift.title} className="aspect-[4/5] w-full rounded-[2.4rem] object-cover" loading="lazy" decoding="async" />
            <div className="absolute left-8 top-8 rounded-full bg-honey px-5 py-3 text-sm font-black uppercase tracking-[.2em] text-moss shadow-lg">Gratis</div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-sage shadow-sm"><Gift className="h-4 w-4 text-honey" /> Regalo de bienvenida</div>
            <h2 className="mt-5 font-serif text-5xl font-bold leading-tight md:text-7xl">En tu primer pedido recibes el Kit Descubrimiento.</h2>
            <p className="mt-5 text-lg leading-8 text-moss/72">Una bolsa de malla reutilizable con mini jabones, aromas distintos y una tarjeta explicativa para descubrir nuevas sensaciones desde el primer día.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {launchGift.includes.slice(0, 4).map((item) => <p key={item} className="flex gap-3 rounded-2xl bg-white/70 p-4 text-sm font-semibold text-moss/75"><BadgeCheck className="h-5 w-5 shrink-0 text-honey" />{item}</p>)}
            </div>
            <Link href="/regalo" className="btn-secondary mt-8">Ver regalo de bienvenida</Link>
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
