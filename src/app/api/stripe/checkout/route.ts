import { NextResponse } from 'next/server';
import { getPack } from '@/lib/packs';
import { getStripe } from '@/lib/stripe';

export async function POST(request: Request) {
  const formData = await request.formData();
  const slug = String(formData.get('slug'));
  const pack = getPack(slug);

  if (!pack) {
    return NextResponse.json({ error: 'Pack no encontrado' }, { status: 404 });
  }

  const price = process.env[pack.stripeEnv] ?? process.env.STRIPE_PRICE_DEFAULT;

  if (!price) {
    return NextResponse.json({ error: `Falta variable ${pack.stripeEnv} o STRIPE_PRICE_DEFAULT` }, { status: 500 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: pack.recurring ? 'subscription' : 'payment',
      line_items: [{ price, quantity: 1 }],
      success_url: `${siteUrl}/gracias?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/rituales/${pack.slug}`,
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['ES', 'PT', 'FR', 'IT', 'DE'],
      },
      metadata: {
        pack_slug: pack.slug,
        pack_name: pack.name,
        intention: pack.intention,
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: 'Stripe no devolvió URL de checkout' }, { status: 500 });
    }

    return NextResponse.redirect(session.url, { status: 303 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error creando checkout';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
