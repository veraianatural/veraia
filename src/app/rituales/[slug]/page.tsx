import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import { getPack, packs } from '@/lib/packs';
import { formatMoney } from '@/lib/utils';

export function generateStaticParams() { return packs.map((p) => ({ slug: p.slug })); }

export default async function PackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pack = getPack(slug);
  if (!pack) notFound();
  return <main className="container-page py-14"><div className="grid gap-12 lg:grid-cols-2">
    <Image src={pack.image} alt={pack.name} width={900} height={900} className="rounded-[3rem] shadow-soft" />
    <div className="lg:pt-8"><p className="text-sm uppercase tracking-[.3em] text-sage">{pack.mood}</p><h1 className="mt-3 font-serif text-6xl font-bold">{pack.name}</h1><p className="mt-4 text-xl text-moss/70">{pack.subtitle}</p><p className="mt-6 text-lg text-moss/80">{pack.description}</p><p className="mt-8 font-serif text-5xl font-bold">{formatMoney(pack.price)}{pack.recurring ? '/mes' : ''}</p>
    <form action="/api/stripe/checkout" method="POST" className="mt-8"><input type="hidden" name="slug" value={pack.slug} /><button className="btn-primary w-full sm:w-auto" type="submit">Comprar con Stripe</button></form>
    <div className="mt-10 grid gap-6 sm:grid-cols-2"><div><h2 className="font-serif text-2xl font-semibold">Incluye</h2><ul className="mt-3 space-y-2">{pack.includes.map(i => <li key={i} className="flex gap-2"><Check className="h-5 w-5 text-sage" />{i}</li>)}</ul></div><div><h2 className="font-serif text-2xl font-semibold">Beneficios</h2><ul className="mt-3 space-y-2">{pack.benefits.map(i => <li key={i} className="flex gap-2"><Check className="h-5 w-5 text-sage" />{i}</li>)}</ul></div></div></div>
  </div></main>;
}
