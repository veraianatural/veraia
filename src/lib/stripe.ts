import Stripe from 'stripe';

let stripeClient: Stripe | null = null;

export function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error('Falta la variable de entorno STRIPE_SECRET_KEY');
  }

  if (!stripeClient) {
    stripeClient = new Stripe(secretKey, {
      apiVersion: '2025-02-24.acacia',
    });
  }

  return stripeClient;
}
