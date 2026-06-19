import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, Gift, Leaf, LockKeyhole, Music2, Sparkles, Truck } from 'lucide-react';
import { getPack, launchGift, packs } from '@/lib/packs';
import { formatMoney } from '@/lib/utils';

export function generateStaticParams() {
  return packs.map((p) => ({ slug: p.slug }));
}

export default async function PackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pack = getPack(slug);
  if (!pack) notFound();

  return (
    <main className="bg-[linear-gradient(180deg,#fbf5eb_0%,#f8f1e5_55%,#fff_100%)]">
      <section className="container-page py-10 lg:py-16">
        <Link href="/#rituales" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-moss/70 hover:text-moss"><ArrowLeft className="h-4 w-4" /> Volver a experiencias</Link>
        <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
          <div className="sticky top-28 space-y-5">
            <div className="overflow-hidden rounded-[3rem] border border-moss/10 bg-white p-3 shadow-soft">
              <img src={pack.image} alt={pack.name} className="aspect-[4/5] w-full rounded-[2.4rem] object-cover" loading="eager" decoding="async" />
            </div>
            <div className="rounded-[2rem] border border-honey/25 bg-white p-5 shadow-sm">
              <p className="flex items-center gap-2 text-sm font-bold text-moss"><Gift className="h-5 w-5 text-honey" /> En tu primer pedido recibes gratis:</p>
              <p className="mt-2 text-sm leading-6 text-moss/65">{launchGift.title}: bolsa de malla, 7 mini jabones, tarjeta de esencias y descuento para la siguiente compra.</p>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-sm font-bold uppercase tracking-[.35em] text-sage">{pack.mood}</p>
            <h1 className="mt-4 font-serif text-6xl font-bold leading-none md:text-7xl">{pack.name}</h1>
            <p className="mt-5 text-2xl font-medium text-moss/65">{pack.subtitle}</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-moss/75">{pack.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pack.benefits.map((benefit) => <div key={benefit} className="rounded-2xl bg-white p-4 text-sm font-semibold leading-6 text-moss/70 shadow-sm"><Sparkles className="mb-3 h-5 w-5 text-honey" />{benefit}</div>)}
            </div>

            <div className="mt-8 rounded-[2rem] border border-moss/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[.25em] text-sage">Ritual guiado</p>
              <p className="mt-3 text-lg leading-8 text-moss/75">{pack.ritual}</p>
            </div>

            <div className="mt-8 flex flex-col gap-5 rounded-[2rem] bg-moss p-7 text-cream shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[.25em] text-cream/60">Precio de la experiencia</p>
                <p className="font-serif text-5xl font-bold">{formatMoney(pack.price)}{pack.recurring ? '/mes' : ''}</p>
              </div>
              <form action="/api/stripe/checkout" method="POST">
                <input type="hidden" name="slug" value={pack.slug} />
                <button className="btn-gold w-full sm:w-auto" type="submit">Comprar ahora</button>
              </form>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-moss/10 bg-white p-7">
                <h2 className="font-serif text-3xl font-semibold">Qué incluye la caja</h2>
                <ul className="mt-4 space-y-3 text-moss/75">{pack.includes.map(i => <li key={i} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-honey" />{i}</li>)}</ul>
              </div>
              <div className="rounded-[2rem] border border-moss/10 bg-white p-7">
                <h2 className="font-serif text-3xl font-semibold">Extras de experiencia</h2>
                <ul className="mt-4 space-y-3 text-moss/75">
                  <li className="flex gap-3"><Music2 className="mt-0.5 h-5 w-5 shrink-0 text-honey" />Acceso QR a música relajante y contenido ritual</li>
                  <li className="flex gap-3"><Gift className="mt-0.5 h-5 w-5 shrink-0 text-honey" />Opción de carta personalizada para regalo</li>
                  <li className="flex gap-3"><Leaf className="mt-0.5 h-5 w-5 shrink-0 text-honey" />Presentación natural y premium</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 grid gap-4 text-sm text-moss/70 sm:grid-cols-3">
              <p className="flex items-center gap-2"><LockKeyhole className="h-5 w-5 text-sage" /> Pago seguro</p>
              <p className="flex items-center gap-2"><Truck className="h-5 w-5 text-sage" /> Preparado con mimo</p>
              <p className="flex items-center gap-2"><Leaf className="h-5 w-5 text-sage" /> Natural y artesanal</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
