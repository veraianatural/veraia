import Image from 'next/image';
import Link from 'next/link';
import { Pack } from '@/lib/packs';
import { formatMoney } from '@/lib/utils';

export function PackCard({ pack }: { pack: Pack }) {
  return <article className="card overflow-hidden">
    <div className="relative h-72"><Image src={pack.image} alt={pack.name} fill className="object-cover" /></div>
    <div className="p-6">
      <p className="text-xs uppercase tracking-[.25em] text-sage">{pack.mood}</p>
      <h3 className="mt-2 font-serif text-3xl font-semibold">{pack.name}</h3>
      <p className="mt-2 text-sm text-moss/70">{pack.subtitle}</p>
      <p className="mt-4 text-moss/80">{pack.description}</p>
      <div className="mt-6 flex items-center justify-between"><span className="font-serif text-3xl font-bold">{formatMoney(pack.price)}{pack.recurring ? '/mes' : ''}</span><Link className="btn-primary" href={`/rituales/${pack.slug}`}>Ver ritual</Link></div>
    </div>
  </article>;
}
