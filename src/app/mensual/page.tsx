import Link from 'next/link';
import { ArrowRight, CalendarHeart, Gift, PackageCheck, Sparkles } from 'lucide-react';
import { packs } from '@/lib/packs';
import { formatMoney } from '@/lib/utils';

const monthly = packs[packs.length - 1];

export default function MensualPage() {
  return (
    <main>
      <section className="bg-[linear-gradient(135deg,#fbf5eb,#eef0e8)] py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">VERAIA Ritual Mensual</p>
            <h1 className="mt-4 font-serif text-6xl font-bold leading-none md:text-8xl">Una caja nueva para cuidarte cada mes.</h1>
            <p className="mt-6 text-lg leading-8 text-moss/72">Recibe una experiencia exclusiva con productos limitados, ritual guiado, regalo sorpresa y contenido QR para convertir el autocuidado en hábito.</p>
            <div className="mt-8 rounded-[2rem] bg-white/70 p-6 shadow-sm">
              <p className="font-serif text-5xl font-bold">Desde {formatMoney(monthly.price)}/mes</p>
              <p className="mt-2 text-sm text-moss/65">Pausa mensual, aromas nuevos y rituales de temporada.</p>
            </div>
            <Link href="/rituales/ritual-mensual" className="btn-primary mt-8">Ver suscripción <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
          <div className="overflow-hidden rounded-[3rem] border border-white/70 bg-white p-3 shadow-soft">
            <img src={monthly.image} alt="VERAIA Ritual Mensual" className="aspect-[4/5] w-full rounded-[2.4rem] object-cover" loading="eager" decoding="async" />
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Caja exclusiva', 'Cada mes una experiencia distinta.', PackageCheck],
            ['Ritual nuevo', 'Guía sencilla para vivir el momento.', CalendarHeart],
            ['Sorpresa mensual', 'Un detalle especial en cada envío.', Gift]
          ].map(([title, text, Icon]: any) => (
            <div key={title} className="rounded-[2rem] border border-moss/10 bg-white/75 p-8 shadow-sm">
              <Icon className="h-8 w-8 text-honey" />
              <h2 className="mt-6 font-serif text-4xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-moss/65">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20 lg:pb-28">
        <div className="rounded-[3rem] bg-moss p-8 text-center text-cream shadow-soft md:p-14">
          <Sparkles className="mx-auto h-10 w-10 text-honey" />
          <h2 className="mt-5 font-serif text-5xl font-bold md:text-7xl">Tu ritual llega cuando más lo necesitas.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/75">Un recordatorio mensual para parar, respirar y volver a ti.</p>
        </div>
      </section>
    </main>
  );
}
