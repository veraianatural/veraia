import Link from 'next/link';
import { ArrowRight, Box, Flower2, Music2, Sparkles } from 'lucide-react';
import { AmbientExperience } from '@/components/ambient-experience';

const steps = [
  ['1', 'Elige una intención', 'Descanso, amor, abundancia, energía, equilibrio emocional o conexión espiritual.'],
  ['2', 'Recibe tu caja', 'Productos artesanales, aromas terapéuticos, guía ritual y un detalle sorpresa.'],
  ['3', 'Crea tu momento', 'Enciende la vela, usa los productos y acompaña el ritual con contenido QR.']
];

export default function ExperienciaPage() {
  return (
    <main className="overflow-hidden">
      <AmbientExperience />
      <section className="relative overflow-hidden border-b border-moss/10 py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#fbf5eb,#edf1e8)]" />
        <div className="ambient-orb left-[6%] top-[10%] bg-honey/25" />
        <div className="container-page grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">La experiencia VERAIA</p>
            <h1 className="mt-4 font-serif text-6xl font-bold leading-none md:text-8xl">Un ritual completo dentro de una caja.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-moss/75">VERAIA no vende productos sueltos. Crea experiencias sensoriales diseñadas para acompañarte en momentos concretos de tu vida: descansar, reconectar, regalar amor o empezar de nuevo.</p>
            <Link href="/rituales" className="btn-primary mt-8">Elegir mi ritual <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
          <div className="ritual-visual relative overflow-hidden rounded-[3rem] bg-moss p-8 text-cream shadow-soft md:p-12">
            <div className="relative mx-auto flex aspect-square max-w-[460px] items-center justify-center rounded-full border border-cream/10 bg-cream/5">
              <div className="breath-circle flex h-60 w-60 items-center justify-center rounded-full border border-honey/45 bg-cream/10 text-center">
                <div>
                  <Flower2 className="mx-auto h-10 w-10 text-honey" />
                  <p className="mt-4 text-xs font-bold uppercase tracking-[.35em] text-honey">Momento VERAIA</p>
                  <p className="mt-3 font-serif text-5xl font-semibold">Respira</p>
                </div>
              </div>
            </div>
            <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
              {steps.map(([num, title, text]) => (
                <div key={title} className="rounded-2xl border border-cream/10 bg-cream/10 p-5 backdrop-blur">
                  <span className="font-serif text-3xl text-honey">{num}</span>
                  <h2 className="mt-2 font-serif text-2xl font-semibold">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-cream/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Aromas naturales', 'Lavanda, rosa, cítricos, romero, coco, canela y botánicos seleccionados para cada intención.', Sparkles],
            ['Ritual guiado', 'Cada caja incluye una guía sencilla para que sepas exactamente cómo vivir la experiencia.', Box],
            ['Ambiente QR', 'Música relajante, meditaciones y pequeñas prácticas para completar el momento VERAIA.', Music2]
          ].map(([title, text, Icon]: any) => (
            <div key={title} className="rounded-[2rem] border border-moss/10 bg-white/70 p-8 shadow-sm">
              <Icon className="h-8 w-8 text-honey" />
              <h2 className="mt-6 font-serif text-4xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-moss/65">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
