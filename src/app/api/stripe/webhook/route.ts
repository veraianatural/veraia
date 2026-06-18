import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { createAdminClient } from '@/lib/supabase/server';
import { getStripe } from '@/lib/stripe';

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: 'Falta configuración de webhook de Stripe' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: 'Webhook inválido' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const supabase = createAdminClient();
    const email = session.customer_details?.email ?? session.customer_email ?? '';

    await supabase.from('orders').upsert(
      {
        email,
        pack_slug: session.metadata?.pack_slug ?? 'unknown',
        pack_name: session.metadata?.pack_name ?? 'VERAIA Ritual',
        amount_total: session.amount_total,
        currency: session.currency,
        stripe_checkout_session_id: session.id,
        stripe_customer_id: String(session.customer ?? ''),
        stripe_subscription_id: String(session.subscription ?? ''),
        status: 'paid',
      },
      { onConflict: 'stripe_checkout_session_id' }
    );

    if (email && process.env.RESEND_API_KEY && process.env.RESEND_FROM) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: process.env.RESEND_FROM,
        to: email,
        bcc: process.env.ADMIN_EMAIL,
        subject: 'Tu ritual VERAIA está confirmado',
        html: `<h1>Gracias por tu pedido</h1><p>Hemos recibido tu compra de <strong>${session.metadata?.pack_name}</strong>. Prepararemos tu ritual con mimo.</p>`,
      });
    }
  }

  return NextResponse.json({ received: true });
}
