export type Pack = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  image: string;
  mood: string;
  includes: string[];
  benefits: string[];
  stripeEnv: string;
  recurring?: boolean;
};

export const packs: Pack[] = [
  { slug: 'descanso', name: 'VERAIA Descanso', subtitle: 'Para cerrar el día con calma', description: 'Ritual nocturno con aromas cálidos, jabón artesanal y bálsamo nutritivo.', price: 29, image: '/images/hero-balm.jfif', mood: 'Relajante', includes: ['Jabón Luna Nocturna', 'Bálsamo nutritivo', 'Tarjeta ritual guiada'], benefits: ['Descanso profundo', 'Piel suave', 'Aroma cálido'], stripeEnv: 'STRIPE_PRICE_DESCANSO' },
  { slug: 'calma', name: 'VERAIA Calma', subtitle: 'Para respirar y bajar revoluciones', description: 'Lavanda, aloe y textura suave para un momento de pausa consciente.', price: 32, image: '/images/purple-soap.jfif', mood: 'Floral suave', includes: ['Jabón lavanda', 'Crema de manos', 'Mini guía de respiración'], benefits: ['Desconexión', 'Aroma delicado', 'Cuidado diario'], stripeEnv: 'STRIPE_PRICE_CALMA' },
  { slug: 'energia', name: 'VERAIA Energía', subtitle: 'Para empezar el día con luz', description: 'Cítricos, calendula y menta para un ritual fresco y luminoso.', price: 34, image: '/images/lemon-soap.jfif', mood: 'Cítrico', includes: ['Jabón cítrico', 'Bálsamo calendula', 'Accesorio exfoliante'], benefits: ['Sensación fresca', 'Rutina matinal', 'Piel revitalizada'], stripeEnv: 'STRIPE_PRICE_ENERGIA' },
  { slug: 'equilibrio', name: 'VERAIA Equilibrio', subtitle: 'Para limpiar, nutrir y volver al centro', description: 'Carbón activado, coco y avena en un pack completo de cuidado semanal.', price: 39, image: '/images/charcoal-soap.jfif', mood: 'Purificante', includes: ['Jabón carbón', 'Jabón coco', 'Jabón avena'], benefits: ['Limpieza suave', 'Ritual semanal', 'Equilibrio sensorial'], stripeEnv: 'STRIPE_PRICE_EQUILIBRIO' },
  { slug: 'ritual-mensual', name: 'VERAIA Ritual Mensual', subtitle: 'Tu ritual sorpresa cada mes', description: 'Suscripción premium con selección rotativa de jabones, bálsamos y accesorios.', price: 24, image: '/images/pack-inspiration.jfif', mood: 'Suscripción', includes: ['2 productos de temporada', 'Tarjeta ritual', 'Detalle botánico'], benefits: ['Novedad mensual', 'Precio preferente', 'Pausa recurrente'], stripeEnv: 'STRIPE_PRICE_RITUAL_MENSUAL', recurring: true }
];

export const getPack = (slug: string) => packs.find((p) => p.slug === slug);
