# VERAIA — MVP Next.js 15

Tienda premium de packs y suscripciones para rituales naturales de bienestar.

## Instalación
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Configuración
1. Crea un proyecto en Supabase y ejecuta `supabase/schema.sql` en SQL Editor.
2. Crea productos/precios en Stripe y pega los Price IDs en `.env.local`.
3. En Stripe Webhooks añade `https://tu-dominio.com/api/stripe/webhook`.
4. Configura Resend y el dominio de envío.
5. Sube a Vercel y añade las mismas variables de entorno.

## Incluye
- Landing responsive con fotos reales en `public/images`.
- 5 packs iniciales, no ecommerce genérico.
- Checkout Stripe para pago único y suscripción mensual.
- Auth con Supabase por magic link.
- Área de cuenta con pedidos.
- Webhook para guardar pedidos y enviar emails.
