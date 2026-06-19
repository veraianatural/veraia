import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Pack } from '@/lib/packs';
import { formatMoney } from '@/lib/utils';

export function PackCard({ pack, featured = false }: { pack: Pack; featured?: boolean }) {
  return (
    <article className={`group overflow-hidden rounded-[2.2rem] border border-moss/10 bg-white shadow-[0_18px_50px_rgba(47,58,45,.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(47,58,45,.18)] ${featured ? 'lg:col-span-2' : ''}`}>
      <Link href={`/rituales/${pack.slug}`} className={`grid h-full ${featured ? 'lg:grid-cols-[.95fr_1.05fr]' : ''}`}>
        <div className="relative min-h-80 overflow-hidden bg-sand/30">
          <img src={pack.image} alt={pack.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-moss/55 via-moss/5 to-transparent" />
          <span className="absolute left-5 top-5 rounded-full bg-cream/95 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-moss shadow-sm">{pack.badge ?? pack.intention}</span>
          <span className="absolute bottom-5 left-5 rounded-full bg-moss/85 px-4 py-2 text-xs font-bold text-cream backdrop-blur">{pack.mood}</span>
        </div>
        <div className="flex flex-col p-7 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-sage">Experiencia VERAIA</p>
              <h3 className="mt-3 font-serif text-4xl font-semibold leading-none md:text-5xl">{pack.shortName}</h3>
              <p className="mt-3 text-sm font-semibold text-moss/60">{pack.subtitle}</p>
            </div>
            <span className="shrink-0 rounded-2xl bg-cream px-4 py-3 text-right font-serif text-3xl font-bold text-moss">{formatMoney(pack.price)}{pack.recurring ? '/mes' : ''}</span>
          </div>
          <p className="mt-5 text-[15px] leading-7 text-moss/75">{pack.description}</p>
          <ul className="mt-5 space-y-2 text-sm text-moss/75">
            {pack.includes.slice(0, 3).map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-honey" />{item}</li>)}
          </ul>
          <div className="mt-auto pt-7">
            <span className="btn-secondary w-full justify-between">Ver experiencia <ArrowRight className="h-4 w-4" /></span>
          </div>
          {pack.premium && <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-honey"><Sparkles className="h-4 w-4" /> Ritual premium espiritual</div>}
        </div>
      </Link>
    </article>
  );
}
