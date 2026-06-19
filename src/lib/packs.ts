export type Pack = {
  slug: string;
  name: string;
  shortName: string;
  subtitle: string;
  description: string;
  price: number;
  image: string;
  mood: string;
  intention: string;
  ritual: string;
  includes: string[];
  benefits: string[];
  stripeEnv: string;
  recurring?: boolean;
  badge?: string;
  color?: string;
  premium?: boolean;
};

export const packs: Pack[] = [
  {
    slug: 'sueno-profundo',
    name: 'VERAIA Sueño Profundo',
    shortName: 'Sueño Profundo',
    subtitle: 'Para relajar cuerpo y mente antes de dormir',
    description: 'Una experiencia nocturna cálida y envolvente para bajar el ritmo, preparar la piel y crear una transición real hacia el descanso.',
    price: 39,
    image: '/images/experience-sueno-profundo.jpg',
    mood: '🌙 Descanso · Lavanda · Manzanilla',
    intention: 'Descansar mejor',
    ritual: 'Apaga luces fuertes, enciende la vela, usa el jabón con agua templada y termina aplicando la crema con respiraciones lentas durante 5 minutos.',
    includes: ['Jabón natural relajante con lavanda y manzanilla', 'Vela artesanal para la relajación', 'Crema corporal relajante para antes de dormir', 'Ritual guiado de 5 minutos para el descanso', 'Regalo sorpresa'],
    benefits: ['Ayuda a crear rutina de noche', 'Sensación de calma corporal', 'Aroma suave y envolvente'],
    stripeEnv: 'STRIPE_PRICE_SUENO_PROFUNDO',
    badge: 'Más vendido',
    color: 'from-indigo-100 to-amber-50'
  },
  {
    slug: 'amor',
    name: 'VERAIA Amor',
    shortName: 'Amor',
    subtitle: 'Para amor propio, armonía y relaciones',
    description: 'Un ritual floral y dulce pensado para reconectar con la ternura, cuidar la piel y dedicarte un momento íntimo de intención.',
    price: 42,
    image: '/images/experience-amor.jpg',
    mood: '❤️ Rosas · Dulce · Intención',
    intention: 'Sentirme querida',
    ritual: 'Antes de usarlo, escribe una intención breve. Usa el jabón lentamente y aplica la crema de rosas repitiendo una afirmación personal.',
    includes: ['Jabón natural con esencias dulces y florales', 'Vela energética para el amor', 'Crema corporal aroma rosas', 'Carta ritual de intención', 'Regalo sorpresa'],
    benefits: ['Eleva el autocuidado', 'Aroma floral premium', 'Ideal para regalar'],
    stripeEnv: 'STRIPE_PRICE_AMOR',
    color: 'from-rose-100 to-amber-50'
  },
  {
    slug: '7-chakras',
    name: 'VERAIA 7 Chakras',
    shortName: '7 Chakras',
    subtitle: 'La experiencia espiritual premium de VERAIA',
    description: 'Siete jabones, siete días y una guía completa para convertir el cuidado corporal en un ritual de equilibrio energético.',
    price: 69,
    image: '/images/experience-7-chakras.jpg',
    mood: '🌈 Energía · Meditación · Premium',
    intention: 'Equilibrar mi energía',
    ritual: 'Durante 7 días usa un jabón distinto siguiendo la guía: raíz, sacro, plexo solar, corazón, garganta, tercer ojo y corona.',
    includes: ['7 jabones energéticos, uno para cada chakra', 'Guía detallada de uso paso a paso', 'Ritual de equilibrio energético de 7 días', 'Meditaciones guiadas mediante QR', 'Bolsa especial para conservar los jabones', 'Regalo sorpresa'],
    benefits: ['Experiencia premium completa', 'Perfecto para ritual espiritual', 'Alta percepción de valor'],
    stripeEnv: 'STRIPE_PRICE_7_CHAKRAS',
    badge: 'Premium',
    premium: true,
    color: 'from-purple-100 via-rose-50 to-yellow-50'
  },
  {
    slug: 'abundancia',
    name: 'VERAIA Abundancia',
    shortName: 'Abundancia',
    subtitle: 'Para prosperidad y mentalidad de crecimiento',
    description: 'Canela, naranja y luz cálida para activar una intención de avance, foco y apertura a nuevas oportunidades.',
    price: 44,
    image: '/images/experience-abundancia.jpg',
    mood: '💰 Canela · Naranja · Manifestación',
    intention: 'Atraer prosperidad',
    ritual: 'Enciende la vela, escribe una meta concreta y usa el jabón de canela y naranja como símbolo de inicio antes de tu planificación semanal.',
    includes: ['Jabón de canela y naranja', 'Vela energética de abundancia', 'Crema revitalizante', 'Ritual de manifestación', 'Regalo sorpresa'],
    benefits: ['Activa intención y foco', 'Aroma cálido y energético', 'Perfecto para nuevos comienzos'],
    stripeEnv: 'STRIPE_PRICE_ABUNDANCIA',
    color: 'from-yellow-100 to-orange-50'
  },
  {
    slug: 'energia-vital',
    name: 'VERAIA Energía Vital',
    shortName: 'Energía Vital',
    subtitle: 'Para recuperar fuerza física y mental',
    description: 'Una experiencia cítrica y fresca para empezar el día con claridad, movimiento y sensación de limpieza.',
    price: 39,
    image: '/images/experience-energia-vital.jpg',
    mood: '⚡ Cítricos · Menta · Mañana',
    intention: 'Activarme',
    ritual: 'Úsalo por la mañana con agua fresca, respira el aroma cítrico y termina con la guía de activación para empezar con intención.',
    includes: ['Jabón cítrico revitalizante', 'Vela energizante', 'Crema refrescante', 'Guía de activación matutina', 'Regalo sorpresa'],
    benefits: ['Sensación fresca inmediata', 'Ritual de mañana', 'Aroma luminoso'],
    stripeEnv: 'STRIPE_PRICE_ENERGIA_VITAL',
    color: 'from-lime-100 to-yellow-50'
  },
  {
    slug: 'equilibrio',
    name: 'VERAIA Equilibrio',
    shortName: 'Equilibrio',
    subtitle: 'Para reducir estrés y recuperar armonía',
    description: 'Eucalipto, respiración y una textura suave para volver al centro después de días intensos.',
    price: 43,
    image: '/images/experience-equilibrio.jpg',
    mood: '🧘 Eucalipto · Zen · Respiración',
    intention: 'Volver a mi centro',
    ritual: 'Usa el jabón de eucalipto en ducha templada, aplica el aceite lentamente y sigue el ritual de respiración durante tres minutos.',
    includes: ['Jabón de eucalipto', 'Vela zen', 'Aceite relajante', 'Ritual de respiración', 'Regalo sorpresa'],
    benefits: ['Reduce sensación de saturación', 'Aroma limpio y calmante', 'Ritual simple y repetible'],
    stripeEnv: 'STRIPE_PRICE_EQUILIBRIO',
    color: 'from-emerald-100 to-stone-50'
  },
  {
    slug: 'detox',
    name: 'VERAIA Detox',
    shortName: 'Detox',
    subtitle: 'Limpieza física y energética',
    description: 'Carbón activado, exfoliación y una guía de 7 días para sentir ligereza y renovar el ambiente personal.',
    price: 45,
    image: '/images/experience-detox.jpg',
    mood: '🌿 Carbón · Purificación · 7 días',
    intention: 'Limpiar y renovar',
    ritual: 'Reserva siete minutos al día durante una semana para usar el jabón, exfoliar suavemente y cerrar con una intención de limpieza.',
    includes: ['Jabón de carbón activado', 'Vela purificadora', 'Exfoliante natural', 'Ritual detox de 7 días', 'Regalo sorpresa'],
    benefits: ['Sensación de limpieza profunda', 'Ritual semanal potente', 'Estética premium y elegante'],
    stripeEnv: 'STRIPE_PRICE_DETOX',
    color: 'from-stone-200 to-zinc-50'
  },
  {
    slug: 'pasion',
    name: 'VERAIA Pasión',
    shortName: 'Pasión',
    subtitle: 'Para despertar motivación y deseo',
    description: 'Un ritual especiado, cálido y sensorial para reconectar con la motivación, el cuerpo y la energía emocional.',
    price: 46,
    image: '/images/experience-pasion.jpg',
    mood: '🔥 Especias · Sensual · Motivación',
    intention: 'Despertar mi energía',
    ritual: 'Enciende la vela, usa el jabón especiado y termina con la crema aromática dedicando unos minutos a visualizar lo que deseas activar.',
    includes: ['Jabón especiado', 'Vela sensual', 'Crema aromática', 'Ritual de conexión emocional', 'Regalo sorpresa'],
    benefits: ['Aroma intenso y memorable', 'Ritual emocional', 'Ideal para experiencias de pareja o amor propio'],
    stripeEnv: 'STRIPE_PRICE_PASION',
    color: 'from-orange-100 to-rose-50'
  },
  {
    slug: 'positividad',
    name: 'VERAIA Positividad',
    shortName: 'Positividad',
    subtitle: 'Para mejorar el estado de ánimo',
    description: 'Cítricos, luz y afirmaciones para crear un ritual sencillo que cambie la energía del día.',
    price: 39,
    image: '/images/experience-positividad.jpg',
    mood: '☀️ Solar · Cítrico · Afirmaciones',
    intention: 'Subir mi ánimo',
    ritual: 'Elige una tarjeta de afirmación, usa el jabón cítrico y deja la vela solar encendida mientras preparas tu espacio.',
    includes: ['Jabón cítrico', 'Vela solar', 'Crema energizante', 'Tarjetas de afirmaciones positivas', 'Regalo sorpresa'],
    benefits: ['Aroma alegre', 'Ritual rápido', 'Perfecto para mañanas difíciles'],
    stripeEnv: 'STRIPE_PRICE_POSITIVIDAD',
    color: 'from-yellow-100 to-amber-50'
  },
  {
    slug: 'luna',
    name: 'VERAIA Luna',
    shortName: 'Luna',
    subtitle: 'Intuición, energía femenina y pausa interior',
    description: 'Una caja suave, floral y espiritual para rituales de luna nueva, luna llena y momentos de introspección.',
    price: 49,
    image: '/images/experience-luna.jpg',
    mood: '🌙 Floral · Intuición · Cristal',
    intention: 'Conectar conmigo',
    ritual: 'Úsalo en luna nueva o luna llena: limpia tus manos con el jabón floral, sostén el cristal y escribe lo que quieres soltar o atraer.',
    includes: ['Jabón floral', 'Vela lunar', 'Cristal seleccionado', 'Ritual de luna nueva y luna llena', 'Regalo sorpresa'],
    benefits: ['Experiencia espiritual cuidada', 'Perfecto para noches lentas', 'Incluye elemento coleccionable'],
    stripeEnv: 'STRIPE_PRICE_LUNA',
    color: 'from-slate-100 to-violet-50'
  },
  {
    slug: 'proteccion',
    name: 'VERAIA Protección',
    shortName: 'Protección',
    subtitle: 'Para limpieza energética y hogar en calma',
    description: 'Romero, vela protectora y spray energético para crear una sensación de refugio y claridad en tu espacio.',
    price: 47,
    image: '/images/experience-proteccion.jpg',
    mood: '🛡️ Romero · Hogar · Limpieza',
    intention: 'Proteger mi espacio',
    ritual: 'Abre una ventana, usa el jabón de romero y rocía el spray energético siguiendo la guía de limpieza del hogar.',
    includes: ['Jabón de romero', 'Vela protectora', 'Spray energético', 'Ritual de limpieza del hogar', 'Regalo sorpresa'],
    benefits: ['Ritual para casa y cuerpo', 'Aroma herbal', 'Sensación de refugio'],
    stripeEnv: 'STRIPE_PRICE_PROTECCION',
    color: 'from-green-100 to-stone-50'
  },
  {
    slug: 'amor-propio',
    name: 'VERAIA Amor Propio',
    shortName: 'Amor Propio',
    subtitle: 'Autoestima, nutrición y cuidado personal',
    description: 'Una experiencia premium para mirarte con más suavidad, nutrir tu piel y crear una rutina de afirmación personal.',
    price: 52,
    image: '/images/experience-amor-propio.jpg',
    mood: '💎 Autoestima · Premium · Afirmaciones',
    intention: 'Cuidarme más',
    ritual: 'Dedica media hora sin móvil: ducha consciente, crema nutritiva y una página del cuaderno de afirmaciones.',
    includes: ['Jabón artesanal premium', 'Vela aromática', 'Crema nutritiva', 'Cuaderno de afirmaciones', 'Regalo sorpresa'],
    benefits: ['Alto valor percibido', 'Ideal regalo premium', 'Rutina emocional y corporal'],
    stripeEnv: 'STRIPE_PRICE_AMOR_PROPIO',
    badge: 'Regalo ideal',
    color: 'from-pink-100 to-stone-50'
  },
  {
    slug: 'renacimiento',
    name: 'VERAIA Renacimiento',
    shortName: 'Renacimiento',
    subtitle: 'Para nuevos comienzos y cambios de vida',
    description: 'Flores, transformación y cuidado regenerador para acompañar etapas de cambio con una sensación de inicio limpio.',
    price: 48,
    image: '/images/experience-renacimiento.jpg',
    mood: '🌸 Cambio · Flores · Nuevos comienzos',
    intention: 'Empezar de nuevo',
    ritual: 'Escribe qué etapa cierras, usa el jabón floral renovador y enciende la vela mientras defines un primer paso pequeño.',
    includes: ['Jabón floral renovador', 'Vela transformación', 'Crema regeneradora', 'Ritual de nuevos comienzos', 'Regalo sorpresa'],
    benefits: ['Acompaña cambios importantes', 'Aroma floral renovador', 'Ritual emocional sencillo'],
    stripeEnv: 'STRIPE_PRICE_RENACIMIENTO',
    color: 'from-pink-100 to-emerald-50'
  },
  {
    slug: 'naturaleza',
    name: 'VERAIA Conexión con la Naturaleza',
    shortName: 'Naturaleza',
    subtitle: 'Para volver a lo esencial',
    description: 'Botánicos, bosque y aceite natural para reconectar con la tierra, la calma y el ritmo lento.',
    price: 44,
    image: '/images/experience-naturaleza.jpg',
    mood: '🌳 Botánico · Bosque · Tierra',
    intention: 'Volver a lo esencial',
    ritual: 'Usa el jabón botánico lentamente, aplica el aceite natural y realiza el ritual de conexión con la tierra durante una pausa sin pantallas.',
    includes: ['Jabón botánico', 'Vela de bosque', 'Aceite natural', 'Ritual de conexión con la tierra', 'Regalo sorpresa'],
    benefits: ['Calma natural', 'Aroma verde y limpio', 'Perfecto para desconectar'],
    stripeEnv: 'STRIPE_PRICE_NATURALEZA',
    color: 'from-lime-100 to-stone-50'
  },
  {
    slug: 'ritual-mensual',
    name: 'VERAIA Ritual Mensual',
    shortName: 'Ritual Mensual',
    subtitle: 'Cada mes una experiencia nueva',
    description: 'Suscripción premium con una caja exclusiva, productos limitados, ritual nuevo y regalo sorpresa mensual.',
    price: 29,
    image: '/images/experience-ritual-mensual.jpg',
    mood: '📦 Suscripción · Temporada · Sorpresa',
    intention: 'Recibir bienestar cada mes',
    ritual: 'Cada mes llega una experiencia distinta para descubrir aromas, rituales y productos limitados sin tener que elegir.',
    includes: ['Caja exclusiva mensual', 'Productos limitados', 'Ritual nuevo', 'Regalo sorpresa mensual', 'Acceso QR a contenido relajante'],
    benefits: ['Novedad mensual', 'Rituales exclusivos', 'Precio preferente'],
    stripeEnv: 'STRIPE_PRICE_RITUAL_MENSUAL',
    recurring: true,
    badge: 'Suscripción',
    color: 'from-amber-100 to-emerald-50'
  }
];

export const launchGift = {
  title: 'Kit Descubrimiento VERAIA',
  image: '/images/experience-kit-descubrimiento.jpg',
  includes: ['Bolsa de malla reutilizable de color aleatorio', '7 mini jabones artesanales', '7 aromas distintos', '7 propiedades diferentes', 'Tarjeta explicativa de cada esencia', 'Código descuento para la siguiente compra']
};

export const upsells = [
  ['Suscripción mensual VERAIA', 'Cada mes una experiencia nueva con productos limitados, ritual guiado y regalo sorpresa.'],
  ['Cristal Energético Premium (+9€)', 'Cristal seleccionado según la energía del pack para completar la intención del ritual.'],
  ['Carta personalizada', 'Mensaje impreso con el nombre del cliente y una intención personalizada.'],
  ['Ritual QR exclusivo', 'Meditaciones guiadas, música relajante, rituales y ejercicios energéticos.'],
  ['Caja regalo premium', 'Presentación de lujo, tarjeta personalizada, envoltorio especial y productos extra.'],
  ['Colección de temporada', 'Ediciones limitadas de equinoccio, solsticio, Navidad, San Valentín o luna llena.'],
  ['Sistema de colección', 'Los clientes completan chakras, estaciones, meses o elementos y desbloquean una experiencia gratuita.']
];

export const getPack = (slug: string) => packs.find((p) => p.slug === slug);
