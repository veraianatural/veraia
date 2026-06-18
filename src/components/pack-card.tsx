import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Pack } from '@/lib/packs';
import { formatMoney } from '@/lib/utils';

export function PackCard({ pack }: { pack: Pack }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-moss/10 bg-white shadow-[0_18px_50px_rgba(47,58,45,.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(47,58,45,.16)]">
      <Link href={`/rituales/${pack.slug}`} className="block">
        <div className="relative h-80 overflow-hidden bg-sand/30">
          <img src={pack.image} alt={pack.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-moss/45 via-transparent to-transparent" />
          {pack.badge && <span className="absolute left-5 top-5 rounded-full bg-cream px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-moss shadow-sm">{pack.badge}</span>}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-xs font-bold uppercase tracking-[.25em] text-sage">{pack.mood}</p>
        <div className="mt-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-4xl font-semibold leading-none">{pack.shortName}</h3>
            <p className="mt-2 text-sm font-medium text-moss/60">{pack.subtitle}</p>
          </div>
          <span className="whitespace-nowrap font-serif text-3xl font-bold text-moss">{formatMoney(pack.price)}{pack.recurring ? '/mes' : ''}</span>
        </div>
        <p className="mt-5 text-[15px] leading-7 text-moss/75">{pack.description}</p>
        <ul className="mt-5 space-y-2 text-sm text-moss/75">
          {pack.benefits.slice(0, 3).map((benefit) => <li key={benefit} className="flex items-center gap-2"><Check className="h-4 w-4 shrink-0 text-honey" />{benefit}</li>)}
        </ul>
        <Link className="btn-secondary mt-auto w-full justify-between" href={`/rituales/${pack.slug}`}>Ver ritual <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </article>
  );
}
