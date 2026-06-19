import Link from 'next/link';
import { ArrowRight, BadgeCheck, Check, Gift, Heart, Leaf, Moon, Music2, PackageCheck, PlayCircle, Repeat, ShieldCheck, Sparkles, Star, Sun, Wand2 } from 'lucide-react';
import { launchGift, packs } from '@/lib/packs';
import { PackCard } from '@/components/pack-card';
import { AmbientExperience } from '@/components/ambient-experience';

const essentialPacks = packs.slice(0, 3);
const morePacks = packs.slice(3, -1);
const monthlyPack = packs[packs.length - 1];

const ritualSteps = [
  ['1', 'Elige una intención', 'Descansar, atraer amor, recuperar energía, equilibrarte o reconectar contigo.'],
  ['2', 'Abre la caja', 'Aromas naturales, texturas artesanales, guía ritual y un detalle sorpresa.'],
  ['3', 'Vive el momento', 'Sigue el ritual, activa la música QR y convierte unos minutos en una pausa especial.']
];

const intentions = [
  ['Descansar', 'Sueño Profundo', 'Para cerrar el día con calma.', '/rituales/sueno-profundo', Moon],
  ['Sentirme querida', 'Amor Propio', 'Para cuidar tu piel y tu diálogo interior.', '/rituales/amor-propio', Heart],
  ['Activarme', 'Energía Vital', 'Para empezar el día con fuerza.', '/rituales/energia-vital', Sun],
  ['Soltar carga', 'Detox', 'Para limpiar cuerpo, mente y espacio.', '/rituales/detox', Leaf]
];

const chakras = ['Raíz', 'Sacro', 'Plexo Solar', 'Corazón', 'Garganta', 'Tercer Ojo', 'Corona'];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <AmbientExperience />

      <section className="relative min-h-[92vh] overflow-hidden border-b border-moss/10">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#fbf5eb_0%,#f6eddf_42%,#e8eee2_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_20%_20%,rgba(196,143,58,.24),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(82,105,79,.18),transparent_25%),radial-gradient(circle_at_55%_92%,rgba(255,255,255,.72),transparent_34%)]" />
        <div className="ambient-orb left-[8%] top-[12%] bg-honey/30" />
        <div className="ambient-orb right-[8%] top-[18%] bg-sage/20 animation-delay-1000" />

        <div className="container-page grid min-h-[92vh] items-center gap-12 py-14 lg:grid-cols-[1fr_.92fr] lg:py-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-moss/10 bg-white/65 px-4 py-2 text-sm font-bold text-sage shadow-sm backdrop-blur">
              <Star className="h-4 w-4 fill-honey text-honey" /> Experiencias de bienestar en forma de caja
            </div>
            <h1 className="max-w-5xl font-serif text-6xl font-bold leading-[.9] tracking-tight md:text-8xl">
              Entra en VERAIA. Respira. Elige cómo quieres sentirte.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-moss/75 md:text-xl">
              VERAIA crea rituales naturales para ayudarte a descansar, desconectar y sentirte mejor cada día. Cada caja reúne productos artesanales, aromas terapéuticos, guía ritual y un detalle sorpresa.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#elige" className="btn-primary text-base">Encontrar mi ritual <ArrowRight className="ml-2 h-5 w-5" /></a>
              <a href="#vivir" className="btn-secondary text-base"><PlayCircle className="mr-2 h-5 w-5" /> Vivir la experiencia</a>
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

      <section id="vivir" className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Una entrada sensorial</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-7xl">Antes de comprar, la página ya debe sentirse como un ritual.</h2>
            <p className="mt-6 text-lg leading-8 text-moss/72">Activa el ambiente, observa la respiración guiada y descubre la experiencia VERAIA: una pausa visual, suave y ordenada para entrar en modo autocuidado.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-moss/10 bg-white/70 p-6 shadow-sm"><Music2 className="h-6 w-6 text-honey" /><h3 className="mt-4 font-serif text-3xl font-semibold">Ambiente relajante</h3><p className="mt-2 text-sm leading-6 text-moss/65">Botón flotante para activar un sonido suave de fondo.</p></div>
              <div className="rounded-[2rem] border border-moss/10 bg-white/70 p-6 shadow-sm"><Sparkles className="h-6 w-6 text-honey" /><h3 className="mt-4 font-serif text-3xl font-semibold">Respiración visual</h3><p className="mt-2 text-sm leading-6 text-moss/65">Una animación lenta invita a bajar el ritmo.</p></div>
            </div>
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
            <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
              {ritualSteps.map(([num, title, text]) => (
                <div key={title} className="rounded-2xl border border-cream/10 bg-cream/10 p-5 backdrop-blur">
                  <span className="font-serif text-3xl text-honey">{num}</span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="elige" className="bg-white/70 py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Elige por emoción</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-7xl">No busques productos. Elige lo que necesitas sentir hoy.</h2>
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

      <section id="rituales" className="container-page py-20 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Experiencias principales</p>
          <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-7xl">Tres rituales para empezar.</h2>
          <p className="mt-5 text-lg leading-8 text-moss/70">Sueño Profundo, Amor y 7 Chakras: las cajas más claras para entender el universo VERAIA desde el primer vistazo.</p>
        </div>
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {essentialPacks.map((pack, index) => <PackCard key={pack.slug} pack={pack} featured={index === 2} />)}
        </div>
      </section>

      <section className="container-page py-6 lg:py-12">
        <div className="grid overflow-hidden rounded-[3rem] border border-moss/10 bg-moss text-cream shadow-soft lg:grid-cols-[.95fr_1.05fr]">
          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-honey">Experiencia premium</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-6xl">7 Chakras: siete días, siete jabones, una guía completa.</h2>
            <p className="mt-5 text-lg leading-8 text-cream/75">Un ritual espiritual con jabones asociados a cada chakra, guía paso a paso, meditaciones mediante QR, bolsa especial y regalo sorpresa.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {chakras.map((chakra) => <span key={chakra} className="rounded-full border border-cream/15 bg-cream/10 px-4 py-2 text-center text-sm font-semibold">{chakra}</span>)}
            </div>
            <Link href="/rituales/7-chakras" className="btn-gold mt-9">Ver Pack 7 Chakras <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
          <img src="/images/experience-7-chakras.jpg" alt="Pack VERAIA 7 Chakras" className="h-full min-h-[460px] w-full object-cover" loading="lazy" decoding="async" />
        </div>
      </section>

      <section id="coleccion" className="bg-white/70 py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Colección VERAIA</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-7xl">Más experiencias para cada momento de vida.</h2>
            <p className="mt-5 text-lg leading-8 text-moss/70">Abundancia, energía, equilibrio, detox, luna, protección y más rituales diseñados alrededor de una intención concreta.</p>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {morePacks.map((pack) => <PackCard key={pack.slug} pack={pack} />)}
          </div>
        </div>
      </section>

      <section id="regalo" className="bg-[linear-gradient(135deg,#f8f1e5,#eef0e8)] py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white p-3 shadow-soft">
            <img src={launchGift.image} alt={launchGift.title} className="aspect-[4/5] w-full rounded-[2.4rem] object-cover" loading="lazy" decoding="async" />
            <div className="absolute left-8 top-8 rounded-full bg-honey px-5 py-3 text-sm font-black uppercase tracking-[.2em] text-moss shadow-lg">Gratis</div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-sage shadow-sm"><Gift className="h-4 w-4 text-honey" /> Regalo de bienvenida</div>
            <h2 className="mt-5 font-serif text-5xl font-bold leading-tight md:text-7xl">En tu primer pedido recibes el Kit Descubrimiento VERAIA.</h2>
            <p className="mt-5 text-lg leading-8 text-moss/72">Una bolsa de malla reutilizable con mini jabones, aromas distintos y una tarjeta explicativa para descubrir nuevas sensaciones desde el primer día.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {launchGift.includes.map((item) => <p key={item} className="flex gap-3 rounded-2xl bg-white/70 p-4 text-sm font-semibold text-moss/75"><BadgeCheck className="h-5 w-5 shrink-0 text-honey" />{item}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="mensual" className="container-page py-20 lg:py-28">
        <div className="grid overflow-hidden rounded-[3rem] border border-moss/10 bg-white shadow-soft lg:grid-cols-2">
          <img src={monthlyPack.image} alt="VERAIA Ritual Mensual" className="h-full min-h-[430px] w-full object-cover" loading="lazy" decoding="async" />
          <div className="p-8 md:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sm font-bold text-sage"><Repeat className="h-4 w-4" /> Ritual mensual</div>
            <h2 className="mt-5 font-serif text-5xl font-bold leading-tight md:text-6xl">Una experiencia nueva cada mes.</h2>
            <p className="mt-5 text-lg leading-8 text-moss/75">Productos limitados, ritual guiado, regalo sorpresa mensual y acceso QR a música relajante, meditaciones y ejercicios energéticos.</p>
            <div className="mt-8 rounded-[2rem] bg-cream p-6">
              <p className="font-serif text-5xl font-bold">Desde 29€/mes</p>
              <p className="mt-2 text-sm text-moss/65">Para quienes quieren convertir el autocuidado en un hábito bonito y fácil de mantener.</p>
            </div>
            <Link href="/rituales/ritual-mensual" className="btn-primary mt-8 w-full sm:w-auto">Descubrir Ritual Mensual <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </section>

      <section id="regalar" className="bg-white/70 py-20 lg:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">Hazlo más especial</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight md:text-7xl">Detalles que convierten la caja en un regalo inolvidable.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Cristal energético', 'Un cristal seleccionado según la intención del ritual.'],
              ['Carta personalizada', 'Una nota impresa con el nombre y una intención especial.'],
              ['Ritual QR exclusivo', 'Meditaciones, música relajante y ejercicios guiados.'],
              ['Caja regalo premium', 'Presentación cuidada, tarjeta y envoltorio especial.'],
              ['Ediciones de temporada', 'Rituales para luna llena, solsticio, primavera o San Valentín.'],
              ['Colecciones VERAIA', 'Chakras, estaciones, elementos y experiencias mensuales.']
            ].map(([title, text]) => (
              <div key={title} className="rounded-[2rem] border border-moss/10 bg-cream p-7 shadow-sm">
                <Sparkles className="h-7 w-7 text-honey" />
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
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/75">Una caja para desconectar, reconectar contigo y transformar una rutina diaria en un momento con intención.</p>
            <a href="#elige" className="btn-gold mt-9">Elegir mi experiencia <ArrowRight className="ml-2 h-5 w-5" /></a>
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
