export type Pack = {
  slug: string;
  name: string;
  shortName: string;
  subtitle: string;
  description: string;
  price: number;
  image: string;
  mood: string;
  ritual: string;
  includes: string[];
  benefits: string[];
  stripeEnv: string;
  recurring?: boolean;
  badge?: string;
};

export const packs: Pack[] = [
  {
    slug: 'descanso',
    name: 'VERAIA Descanso',
    shortName: 'Descanso',
    subtitle: 'Para cerrar el día con calma',
    description: 'Un ritual nocturno con vainilla, canela y bálsamo nutritivo para convertir la ducha en una pausa cálida antes de dormir.',
    price: 29,
    image: '/images/hero-balm.jpg',
    mood: 'Noche · Relajante',
    ritual: 'Úsalo al final del día, baja la luz y dedica 10 minutos a respirar mientras nutres la piel.',
    includes: ['Jabón Luna Nocturna', 'Bálsamo nutritivo de caléndula', 'Tarjeta ritual guiada'],
    benefits: ['Sensación de calma', 'Piel suave y nutrida', 'Aroma cálido y envolvente'],
    stripeEnv: 'STRIPE_PRICE_DESCANSO',
    badge: 'Más vendido'
  },
  {
    slug: 'calma',
    name: 'VERAIA Calma',
    shortName: 'Calma',
    subtitle: 'Para respirar y bajar revoluciones',
    description: 'Lavanda, aloe y texturas suaves para una rutina de desconexión cuando necesitas parar y volver a ti.',
    price: 32,
    image: '/images/purple-soap.jpg',
    mood: 'Lavanda · Pausa',
    ritual: 'Ideal para tardes intensas: ducha templada, aroma floral y crema ligera en manos y cuello.',
    includes: ['Jabón artesanal de lavanda', 'Crema de manos natural', 'Mini guía de respiración'],
    benefits: ['Desconexión mental', 'Aroma delicado', 'Cuidado diario sin complicaciones'],
    stripeEnv: 'STRIPE_PRICE_CALMA'
  },
  {
    slug: 'energia',
    name: 'VERAIA Energía',
    shortName: 'Energía',
    subtitle: 'Para empezar el día con luz',
    description: 'Cítricos, caléndula y menta para activar el cuerpo con una sensación fresca, limpia y luminosa.',
    price: 34,
    image: '/images/lemon-soap.jpg',
    mood: 'Cítrico · Vitalidad',
    ritual: 'Perfecto por la mañana: agua fresca, aroma cítrico y un gesto breve para empezar con intención.',
    includes: ['Jabón cítrico artesanal', 'Bálsamo de caléndula', 'Accesorio exfoliante vegetal'],
    benefits: ['Sensación fresca', 'Rutina matinal', 'Piel revitalizada'],
    stripeEnv: 'STRIPE_PRICE_ENERGIA'
  },
  {
    slug: 'equilibrio',
    name: 'VERAIA Equilibrio',
    shortName: 'Equilibrio',
    subtitle: 'Para limpiar, nutrir y volver al centro',
    description: 'Carbón activado, coco y avena en un pack completo para una limpieza semanal más consciente.',
    price: 39,
    image: '/images/charcoal-soap.jpg',
    mood: 'Purificante · Semanal',
    ritual: 'Reserva un día de la semana para resetear: limpieza, exfoliación suave y nutrición.',
    includes: ['Jabón de carbón activado', 'Jabón de coco', 'Jabón de avena'],
    benefits: ['Limpieza suave', 'Ritual semanal', 'Equilibrio sensorial'],
    stripeEnv: 'STRIPE_PRICE_EQUILIBRIO'
  },
  {
    slug: 'ritual-mensual',
    name: 'VERAIA Ritual Mensual',
    shortName: 'Ritual Mensual',
    subtitle: 'Tu ritual sorpresa cada mes',
    description: 'Suscripción premium con una selección rotativa de temporada: jabones, bálsamos, aromas y detalles botánicos.',
    price: 24,
    image: '/images/pack-inspiration.jpg',
    mood: 'Suscripción · Temporada',
    ritual: 'Cada mes recibes una pausa distinta para descubrir aromas nuevos sin pensar qué comprar.',
    includes: ['2 productos de temporada', 'Tarjeta ritual', 'Detalle botánico'],
    benefits: ['Novedad mensual', 'Precio preferente', 'Pausa recurrente'],
    stripeEnv: 'STRIPE_PRICE_RITUAL_MENSUAL',
    recurring: true,
    badge: 'Suscripción'
  }
];

export const getPack = (slug: string) => packs.find((p) => p.slug === slug);
