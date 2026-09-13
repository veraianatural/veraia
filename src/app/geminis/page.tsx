'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BookOpen,
  Check,
  ChevronRight,
  Heart,
  Home,
  Layers3,
  Lightbulb,
  Menu,
  Palette,
  RotateCcw,
  Ruler,
  Search,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Tablet,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  Mail,
  Copy,
  UtensilsCrossed,
  X,
} from 'lucide-react';
import styles from './geminis.module.css';

type Stage = 'device' | 'welcome' | 'catalog';
type DeviceMode = 'tablet' | 'mobile';
type Category = 'inicio' | 'bano' | 'cocinas' | 'configurador' | 'pedido' | 'favoritos';
type DesignChoice = 'all' | 'madera' | 'ranurado' | 'cristal';
type FinishChoice = 'sin-definir' | 'Pure' | 'Miel' | 'Avellana' | 'Brown' | 'catalogo';

type Collection = {
  name: string;
  series: 'Exclusive' | 'Premium' | 'Today';
  measures: string;
  widths: number[];
  depth39Until?: number;
  image: string;
  note: string;
  design: Exclude<DesignChoice, 'all'>;
  finishes: string[];
  basePrices?: Record<string, number>;
  drawers: number;
};

type OrderItem = {
  id: string;
  collection: string;
  series: Collection['series'];
  width: number;
  depth: 39 | 46;
  finish: FinishChoice;
  drawerLight: boolean;
  quantity: number;
  image: string;
  baseUnitPrice?: number;
};

const bathroomCollections: Collection[] = [
  {
    name: 'Eternal',
    series: 'Exclusive',
    measures: '60 · 70 · 80 · 100 · 120 · 140 · 160 cm',
    widths: [60, 70, 80, 100, 120, 140, 160],
    depth39Until: 100,
    image: '/geminis/eternal.webp',
    note: 'Madera natural de roble · 2 cajones · Luxe Max',
    drawers: 2,
    design: 'madera',
    finishes: ['Pure', 'Miel', 'Avellana', 'Brown'],
    basePrices: {
      '60-46': 1149, '70-46': 1198, '80-46': 1249, '100-46': 1498,
      '60-39': 1169, '70-39': 1219, '80-39': 1269, '100-39': 1529,
    },
  },
  {
    name: 'Artemis',
    series: 'Exclusive',
    measures: '60 · 70 · 80 · 100 · 120 · 140 · 160 cm',
    widths: [60, 70, 80, 100, 120, 140, 160],
    depth39Until: 100,
    image: '/geminis/artemis.webp',
    note: 'Roble ranurado · uñero J · cajón Luxe Max',
    drawers: 2,
    design: 'ranurado',
    finishes: ['Pure', 'Miel', 'Avellana', 'Brown'],
    basePrices: {
      '60-46': 1289, '70-46': 1359, '80-46': 1439, '100-46': 1598,
      '60-39': 1309, '70-39': 1379, '80-39': 1459, '100-39': 1629,
    },
  },
  {
    name: 'Orion',
    series: 'Exclusive',
    measures: '60 · 70 · 80 · 100 · 120 · 140 · 160 cm',
    widths: [60, 70, 80, 100, 120, 140, 160],
    depth39Until: 100,
    image: '/geminis/orion.webp',
    note: 'Roble ranurado · 1 cajón · cajón Luxe Max',
    drawers: 1,
    design: 'ranurado',
    finishes: ['Pure', 'Miel', 'Avellana', 'Brown'],
    basePrices: {
      '60-46': 959, '70-46': 1009, '80-46': 1069, '100-46': 1198,
      '60-39': 979, '70-39': 1029, '80-39': 1089, '100-39': 1219,
    },
  },
  {
    name: 'Phantom',
    series: 'Exclusive',
    measures: '60 · 70 · 80 · 90 · 100 · 120 · 140 · 160 · 180 cm',
    widths: [60, 70, 80, 90, 100, 120, 140, 160, 180],
    depth39Until: 100,
    image: '/geminis/phantom.webp',
    note: 'Roble natural · uñero 45º · 2 cajones',
    drawers: 2,
    design: 'madera',
    finishes: ['Pure', 'Miel', 'Avellana', 'Brown'],
    basePrices: {
      '60-46': 929, '70-46': 979, '80-46': 989, '90-46': 1109, '100-46': 1159,
      '60-39': 949, '70-39': 998, '80-39': 1009, '90-39': 1119, '100-39': 1169,
    },
  },
  {
    name: 'Style',
    series: 'Exclusive',
    measures: '60 · 70 · 80 · 90 · 100 · 120 · 140 · 160 · 180 cm',
    widths: [60, 70, 80, 90, 100, 120, 140, 160, 180],
    depth39Until: 100,
    image: '/geminis/style.webp',
    note: 'Frontal de cristal acanalado lacado · 2 cajones',
    drawers: 2,
    design: 'cristal',
    finishes: [],
    basePrices: {
      '60-46': 929, '70-46': 979, '80-46': 989, '90-46': 1109, '100-46': 1159,
      '60-39': 949, '70-39': 998, '80-39': 1009, '90-39': 1119, '100-39': 1169,
    },
  },
];

const allCatalogNames = [
  'Amsterdam', 'Artemis', 'Ártico', 'Asimetric', 'Cabaret', 'Cairo + Dakar', 'Chicago',
  'Chic Black', 'Chic White', 'Cupido', 'Dallas', 'Delta + Alfa', 'Duommo + Infinity',
  'Dubai', 'Eternal', 'Florencia', 'Free', 'Galaxy / Galaxy Black', 'Galery / Benur', 'Glam',
  'Imagine', 'Kansas', 'Keto', 'Lisboa', 'Louis', 'Maison', 'Manhattan', 'Marta', 'Materia',
  'Miami', 'Milano / Verona', 'Module', 'Nepal', 'Niágara', 'Núcleo', 'Oporto', 'Orion',
  'Persiana', 'Phantom', 'Royal', 'Sansón', 'Small', 'Spirit', 'Strong', 'Supermini', 'Style',
  'Texas', 'Thick', 'Thor', 'Unik', 'Ulises', 'Zocall',
];

const kitchenTypes = [
  { name: 'Cocinas laminadas', image: '/geminis/cocina-laminada.webp', note: 'Ejemplo del catálogo: acabado Nogal con uñero Gola azul.' },
  { name: 'Cocinas lacadas', image: '/geminis/cocina-lacada.webp', note: 'Ejemplo del catálogo: laca Cachemire con tirador en Oro.' },
  { name: 'Cocinas PET', image: '/geminis/cocina-pet.webp', note: 'Ejemplo del catálogo: PET antracita con uñero J.' },
  { name: 'Cocinas chapadas', image: '/geminis/cocina-chapada.webp', note: 'Ejemplo del catálogo: chapa Roble Natural enmarcada maciza con uñero empotrado.' },
];

const widths = [60, 70, 80, 90, 100, 120, 140, 160, 180];
const finishOptions: FinishChoice[] = ['Pure', 'Miel', 'Avellana', 'Brown'];

function supportsDepth(collection: Collection, width: number, depth: 39 | 46) {
  if (!collection.widths.includes(width)) return false;
  if (depth === 46) return true;
  return typeof collection.depth39Until === 'number' && width <= collection.depth39Until;
}

function priceFor(collection: Collection, width: number | null, depth: 39 | 46 | null) {
  if (!width || !depth || !collection.basePrices) return undefined;
  return collection.basePrices[`${width}-${depth}`];
}

export default function GeminisPage() {
  const [stage, setStage] = useState<Stage>('device');
  const [deviceMode, setDeviceMode] = useState<DeviceMode | null>(null);
  const [category, setCategory] = useState<Category>('inicio');
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Collection | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const [configStep, setConfigStep] = useState(0);
  const [selectedWidth, setSelectedWidth] = useState<number | null>(null);
  const [selectedDepth, setSelectedDepth] = useState<39 | 46 | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<DesignChoice>('all');
  const [selectedFinish, setSelectedFinish] = useState<FinishChoice>('sin-definir');
  const [drawerLight, setDrawerLight] = useState(false);
  const [configQuantity, setConfigQuantity] = useState(1);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [orderConfirmOpen, setOrderConfirmOpen] = useState(false);
  const [orderCopied, setOrderCopied] = useState(false);

  const matches = useMemo(() => {
    const clean = query.trim().toLocaleLowerCase('es');
    if (!clean) return allCatalogNames.slice(0, 10);
    return allCatalogNames.filter((name) => name.toLocaleLowerCase('es').includes(clean)).slice(0, 14);
  }, [query]);

  const availableDepths = useMemo(() => {
    if (!selectedWidth) return [39, 46] as const;
    const has39 = bathroomCollections.some((item) => supportsDepth(item, selectedWidth, 39));
    return has39 ? ([39, 46] as const) : ([46] as const);
  }, [selectedWidth]);

  const configurationResults = useMemo(() => {
    if (!selectedWidth || !selectedDepth) return [];
    return bathroomCollections.filter((item) => {
      if (!supportsDepth(item, selectedWidth, selectedDepth)) return false;
      if (selectedDesign !== 'all' && item.design !== selectedDesign) return false;
      if (!['sin-definir', 'catalogo'].includes(selectedFinish) && !item.finishes.includes(selectedFinish)) return false;
      return true;
    });
  }, [selectedWidth, selectedDepth, selectedDesign, selectedFinish]);

  const toggleFavorite = (name: string) => {
    setFavorites((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  };

  const chooseDevice = (mode: DeviceMode) => {
    setDeviceMode(mode);
    setStage('welcome');
  };

  const resetConfigurator = () => {
    setConfigStep(0);
    setSelectedWidth(null);
    setSelectedDepth(null);
    setSelectedDesign('all');
    setSelectedFinish('sin-definir');
    setDrawerLight(false);
    setConfigQuantity(1);
  };

  const goToConfigurator = () => {
    setCategory('configurador');
    resetConfigurator();
  };

  const addToOrder = (collection: Collection, width: number, depth: 39 | 46, finish: FinishChoice, drawerLight: boolean, quantity: number) => {
    const normalizedQuantity = Math.max(1, Math.min(99, quantity));
    const id = [collection.name, width, depth, finish, drawerLight ? 'luz' : 'sin-luz'].join('|');
    const baseUnitPrice = priceFor(collection, width, depth);

    setOrderItems((current) => {
      const existing = current.find((item) => item.id === id);
      if (existing) {
        return current.map((item) => item.id === id ? { ...item, quantity: Math.min(99, item.quantity + normalizedQuantity) } : item);
      }
      return [...current, {
        id,
        collection: collection.name,
        series: collection.series,
        width,
        depth,
        finish,
        drawerLight,
        quantity: normalizedQuantity,
        image: collection.image,
        baseUnitPrice,
      }];
    });
  };

  const orderCount = orderItems.reduce((total, item) => total + item.quantity, 0);
  const knownOrderTotal = orderItems.reduce((total, item) => total + ((item.baseUnitPrice || 0) * item.quantity), 0);
  const hasUnpricedItems = orderItems.some((item) => !item.baseUnitPrice);

  const updateOrderQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setOrderItems((current) => current.filter((item) => item.id !== id));
      return;
    }
    setOrderItems((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.min(99, quantity) } : item));
  };

  const removeOrderItem = (id: string) => setOrderItems((current) => current.filter((item) => item.id !== id));

  const buildOrderText = () => {
    const lines = [
      'PEDIDO GEMINIS',
      '',
      ...orderItems.flatMap((item, index) => {
        const finishText = item.finish === 'sin-definir' ? 'Sin definir' : item.finish === 'catalogo' ? 'Según catálogo' : item.finish;
        const priceText = item.baseUnitPrice ? `${item.baseUnitPrice.toLocaleString('es-ES')} € P.V.R. / ud. (IVA no incluido)` : 'Precio pendiente de concretar según composición';
        return [
          `${index + 1}. ${item.collection} · Serie ${item.series}`,
          `   Medida: ${item.width} x ${item.depth} cm`,
          `   Acabado: ${finishText}`,
          `   Cajón iluminado: ${item.drawerLight ? 'Sí, solicitar según condiciones de catálogo' : 'No'}`,
          `   Cantidad: ${item.quantity}`,
          `   Precio base: ${priceText}`,
          '',
        ];
      }),
      `TOTAL BASE CON PRECIO CONOCIDO: ${knownOrderTotal.toLocaleString('es-ES')} € P.V.R. (IVA no incluido)`,
      hasUnpricedItems ? 'Hay artículos cuyo precio final depende de la composición seleccionada y debe confirmarse antes de cursar el pedido.' : '',
      '',
      'Por favor, confirmar referencias, disponibilidad y condiciones antes de tramitar el pedido.',
    ].filter(Boolean);
    return lines.join('\n');
  };

  const sendOrderByEmail = () => {
    if (!orderItems.length) return;
    const subject = encodeURIComponent(`Pedido Geminis · ${orderCount} ${orderCount === 1 ? 'unidad' : 'unidades'}`);
    const body = encodeURIComponent(buildOrderText());
    window.location.href = `mailto:comercial@mueblesgeminis.com?subject=${subject}&body=${body}`;
  };

  const copyOrder = async () => {
    try {
      await navigator.clipboard.writeText(buildOrderText());
      setOrderCopied(true);
      window.setTimeout(() => setOrderCopied(false), 1800);
    } catch {
      setOrderCopied(false);
    }
  };

  const deviceClass = deviceMode === 'mobile' ? styles.mobileMode : styles.tabletMode;

  if (stage === 'device') {
    return (
      <main className={styles.root}>
        <section className={styles.deviceScreen}>
          <div className={styles.deviceImage} aria-hidden="true" />
          <div className={styles.deviceShade} />
          <div className={styles.devicePanel}>
            <img className={styles.realLogo} src="/geminis/logo-catalogo.png" alt="Geminis, expertos en baños y cocinas" />
            <div className={styles.deviceCopy}>
              <span>CATÁLOGO PROFESIONAL DIGITAL</span>
              <h1>¿Cómo vas a descubrir Geminis?</h1>
              <p>Elige el dispositivo. La experiencia se reorganizará para aprovecharlo mejor.</p>
            </div>
            <div className={styles.deviceChoiceGrid}>
              <button className={styles.deviceChoice} onClick={() => chooseDevice('tablet')}>
                <span className={styles.deviceIcon}><Tablet size={29} /></span>
                <span><strong>TABLET</strong><small>Vista amplia para presentar y comparar</small></span>
                <ArrowRight size={19} />
              </button>
              <button className={styles.deviceChoice} onClick={() => chooseDevice('mobile')}>
                <span className={styles.deviceIcon}><Smartphone size={27} /></span>
                <span><strong>MÓVIL</strong><small>Navegación compacta y táctil</small></span>
                <ArrowRight size={19} />
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (stage === 'welcome') {
    return (
      <main className={`${styles.root} ${deviceClass}`}>
        <section className={styles.welcomeScreen}>
          <div className={styles.welcomeVisual}>
            <img src="/geminis/artemis.webp" alt="Colección Artemis de Geminis" />
            <div className={styles.welcomeGradient} />
            <button className={styles.backRound} onClick={() => setStage('device')} aria-label="Cambiar dispositivo">
              <ArrowLeft size={20} />
            </button>
            <div className={styles.welcomeBadge}>{deviceMode === 'mobile' ? 'MODO MÓVIL' : 'MODO TABLET'}</div>
          </div>
          <div className={styles.welcomeContent}>
            <img className={styles.welcomeLogo} src="/geminis/logo-catalogo.png" alt="Geminis" />
            <div>
              <p className={styles.eyebrow}>EXPERTOS EN BAÑOS Y COCINAS</p>
              <h1>Bienvenid@ a Geminis.</h1>
              <h2>Tu experiencia empieza ahora.</h2>
              <p className={styles.welcomeText}>Descubre el catálogo profesional, encuentra modelos y configura una selección de baño a partir de medidas y acabados reales del catálogo.</p>
            </div>
            <div className={styles.welcomeActions}>
              <button className={styles.primaryButton} onClick={() => { setStage('catalog'); setCategory('configurador'); }}>
                Configurar un mueble <SlidersHorizontal size={19} />
              </button>
              <Link className={styles.interactiveCatalogButton} href={`/geminis/catalogo?modo=${deviceMode === 'mobile' ? 'mobile' : 'tablet'}`}>
                Catálogo interactivo <BookOpen size={19} />
              </Link>
              <button className={styles.welcomeSecondary} onClick={() => { setStage('catalog'); setCategory('inicio'); }}>
                Explorar catálogo <ArrowRight size={19} />
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={`${styles.root} ${deviceClass}`}>
      <div className={styles.appShell}>
        <header className={styles.topbar}>
          <button className={styles.iconButton} aria-label="Menú"><Menu size={21} /></button>
          <button className={styles.brandButton} onClick={() => setCategory('inicio')}>
            <strong>GEMINIS</strong>
            <span>CATÁLOGO PROFESIONAL</span>
          </button>
          <div className={styles.topbarActions}>
            <button className={styles.modePill} onClick={() => setStage('device')}>
              {deviceMode === 'mobile' ? <Smartphone size={14} /> : <Tablet size={15} />}
              <span>{deviceMode === 'mobile' ? 'Móvil' : 'Tablet'}</span>
            </button>
            <button className={styles.iconButton} onClick={() => setSearchOpen(true)} aria-label="Buscar"><Search size={21} /></button>
          </div>
        </header>

        <div className={styles.scrollArea}>
          {category === 'inicio' && (
            <>
              <section className={styles.hero}>
                <img src="/geminis/eternal.webp" alt="Colección Eternal de Geminis" />
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                  <span>CATÁLOGO PROFESIONAL</span>
                  <h1>Todo Geminis,<br />más visual y más cerca.</h1>
                  <p>Baños y cocinas para presentar, descubrir y configurar durante cada visita.</p>
                  <div className={styles.heroActions}>
                    <button onClick={goToConfigurator}>Configurar baño <SlidersHorizontal size={17} /></button>
                    <button className={styles.heroGhostButton} onClick={() => setCategory('bano')}>Ver catálogo <ChevronRight size={18} /></button>
                  </div>
                </div>
              </section>

              <section className={styles.section}>
                <div className={styles.sectionHeading}>
                  <div><span>ACCESO RÁPIDO</span><h2>¿Qué quieres mostrar?</h2></div>
                  <Sparkles size={22} />
                </div>
                <div className={styles.quickGrid}>
                  <button className={`${styles.quickCard} ${styles.configuratorQuick}`} onClick={goToConfigurator}>
                    <span className={styles.configIcon}><SlidersHorizontal size={31} /></span>
                    <span className={styles.utilityTitle}>Configurar baño</span>
                    <span className={styles.utilityText}>Medida, fondo, diseño, acabado y extras.</span>
                    <ChevronRight className={styles.quickArrow} size={20} />
                  </button>
                  <button className={styles.quickCard} onClick={() => setCategory('bano')}>
                    <img src="/geminis/phantom.webp" alt="Mueble de baño Geminis" />
                    <span className={styles.cardShade} />
                    <span className={styles.quickLabel}><Bath size={21} />Baño</span>
                    <ChevronRight className={styles.quickArrow} size={20} />
                  </button>
                  <button className={styles.quickCard} onClick={() => setCategory('cocinas')}>
                    <img src="/geminis/cocina-chapada.webp" alt="Cocina Geminis del catálogo" />
                    <span className={styles.cardShade} />
                    <span className={styles.quickLabel}><UtensilsCrossed size={21} />Cocinas</span>
                    <ChevronRight className={styles.quickArrow} size={20} />
                  </button>
                  <button className={`${styles.quickCard} ${styles.orderQuick}`} onClick={() => setCategory('pedido')}>
                    <span className={styles.configIcon}><ShoppingBag size={31} /></span>
                    <span className={styles.utilityTitle}>Hacer pedido</span>
                    <span className={styles.utilityText}>{orderCount ? `${orderCount} ${orderCount === 1 ? 'unidad preparada' : 'unidades preparadas'}` : 'Configura muebles, cantidades y prepara el pedido.'}</span>
                    <ChevronRight className={styles.quickArrow} size={20} />
                  </button>
                  <Link className={`${styles.quickCard} ${styles.catalogBookQuick}`} href={`/geminis/catalogo?modo=${deviceMode === 'mobile' ? 'mobile' : 'tablet'}`}>
                    <span className={styles.configIcon}><BookOpen size={31} /></span>
                    <span className={styles.utilityTitle}>Catálogo interactivo</span>
                    <span className={styles.utilityText}>Abre el catálogo real y pásalo página a página como un libro.</span>
                    <ChevronRight className={styles.quickArrow} size={20} />
                  </Link>
                  <button className={`${styles.quickCard} ${styles.utilityCard}`} onClick={() => setSearchOpen(true)}>
                    <Search size={34} />
                    <span className={styles.utilityTitle}>Buscar modelo</span>
                    <span className={styles.utilityText}>Encuentra una colección por nombre.</span>
                  </button>
                </div>
              </section>

              <section className={styles.section}>
                <div className={styles.sectionHeading}>
                  <div><span>BAÑO</span><h2>Colecciones destacadas</h2></div>
                  <button className={styles.textButton} onClick={() => setCategory('bano')}>Ver todas <ArrowRight size={16} /></button>
                </div>
                <div className={styles.collectionRail}>
                  {bathroomCollections.slice(0, 4).map((item) => (
                    <CollectionCard key={item.name} item={item} favorite={favorites.includes(item.name)} onFavorite={() => toggleFavorite(item.name)} onOpen={() => setSelected(item)} />
                  ))}
                </div>
              </section>

              <section className={styles.section}>
                <div className={styles.kitchenBanner}>
                  <img src="/geminis/cocina-lacada.webp" alt="Cocina lacada de Geminis" />
                  <div className={styles.kitchenOverlay} />
                  <div>
                    <span>NUEVA LÍNEA</span>
                    <h2>Cocinas Geminis</h2>
                    <p>Laminadas · Lacadas · PET · Chapadas</p>
                    <button className={styles.primaryLightButton} onClick={() => setCategory('cocinas')}>Ver cocinas <ArrowRight size={17} /></button>
                  </div>
                </div>
              </section>
              <div className={styles.pageBottomSpace} />
            </>
          )}

          {category === 'configurador' && (
            <Configurator
              step={configStep}
              setStep={setConfigStep}
              width={selectedWidth}
              setWidth={(value) => {
                setSelectedWidth(value);
                if (selectedDepth === 39 && !bathroomCollections.some((item) => supportsDepth(item, value, 39))) setSelectedDepth(null);
              }}
              depth={selectedDepth}
              setDepth={setSelectedDepth}
              availableDepths={availableDepths}
              design={selectedDesign}
              setDesign={setSelectedDesign}
              finish={selectedFinish}
              setFinish={setSelectedFinish}
              drawerLight={drawerLight}
              setDrawerLight={setDrawerLight}
              quantity={configQuantity}
              setQuantity={setConfigQuantity}
              results={configurationResults}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              openCollection={setSelected}
              addToOrder={addToOrder}
              goToOrder={() => setCategory('pedido')}
              onBack={() => setCategory('inicio')}
              onReset={resetConfigurator}
            />
          )}

          {category === 'bano' && (
            <section className={`${styles.section} ${styles.categorySection}`}>
              <div className={styles.categoryHero}>
                <button onClick={() => setCategory('inicio')}><ArrowLeft size={17} /> Inicio</button>
                <span>CATÁLOGO PROFESIONAL</span>
                <h1>Muebles de baño</h1>
                <p>Colecciones verificadas con datos e imágenes del catálogo Geminis.</p>
              </div>
              <div className={styles.categoryToolbar}>
                <button className={styles.configuratorCta} onClick={goToConfigurator}><SlidersHorizontal size={18} /> Configurar por medida</button>
                <button className={styles.secondaryCta} onClick={() => setSearchOpen(true)}><Search size={18} /> Buscar modelo</button>
              </div>
              <div className={styles.fullGrid}>
                {bathroomCollections.map((item) => (
                  <CollectionCard key={item.name} item={item} favorite={favorites.includes(item.name)} onFavorite={() => toggleFavorite(item.name)} onOpen={() => setSelected(item)} />
                ))}
              </div>
              <div className={styles.catalogNote}>
                <Check size={18} />
                <div><strong>Datos extraídos del catálogo</strong><span>Las medidas, características, acabados mostrados y precios del configurador corresponden a la información disponible en el catálogo facilitado.</span></div>
              </div>
            </section>
          )}

          {category === 'cocinas' && (
            <section className={`${styles.section} ${styles.categorySection}`}>
              <div className={`${styles.categoryHero} ${styles.kitchenCategoryHero}`}>
                <button onClick={() => setCategory('inicio')}><ArrowLeft size={17} /> Inicio</button>
                <span>CATÁLOGO PROFESIONAL</span>
                <h1>Cocinas</h1>
                <p>Las cuatro familias que aparecen en el catálogo actual de Geminis.</p>
              </div>
              <div className={styles.kitchenGrid}>
                {kitchenTypes.map((item) => (
                  <article className={styles.kitchenCard} key={item.name}>
                    <img src={item.image} alt={item.name} />
                    <div><span>GEMINIS</span><h3>{item.name}</h3><p>{item.note}</p></div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {category === 'pedido' && (
            <OrderPage
              items={orderItems}
              orderCount={orderCount}
              knownTotal={knownOrderTotal}
              hasUnpricedItems={hasUnpricedItems}
              onBack={() => setCategory('inicio')}
              onConfigure={goToConfigurator}
              onQuantity={updateOrderQuantity}
              onRemove={removeOrderItem}
              onOrder={() => setOrderConfirmOpen(true)}
            />
          )}

          {category === 'favoritos' && (
            <section className={`${styles.section} ${styles.categorySection}`}>
              <div className={styles.categoryHero}>
                <button onClick={() => setCategory('inicio')}><ArrowLeft size={17} /> Inicio</button>
                <span>SELECCIÓN</span>
                <h1>Favoritos</h1>
                <p>Modelos guardados durante la visita.</p>
              </div>
              {favorites.length ? (
                <div className={styles.fullGrid}>
                  {bathroomCollections.filter((item) => favorites.includes(item.name)).map((item) => (
                    <CollectionCard key={item.name} item={item} favorite onFavorite={() => toggleFavorite(item.name)} onOpen={() => setSelected(item)} />
                  ))}
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <Heart size={30} />
                  <strong>Aún no has guardado modelos.</strong>
                  <span>Toca el corazón de una colección para añadirla a esta selección.</span>
                  <button onClick={() => setCategory('bano')}>Explorar baño</button>
                </div>
              )}
            </section>
          )}
        </div>

        <nav className={styles.bottomNav}>
          <button className={category === 'inicio' ? styles.activeNav : ''} onClick={() => setCategory('inicio')}><Home size={20} /><span>Inicio</span></button>
          <button className={category === 'bano' ? styles.activeNav : ''} onClick={() => setCategory('bano')}><BookOpen size={20} /><span>Catálogo</span></button>
          <button className={`${styles.configNav} ${category === 'configurador' ? styles.activeNav : ''}`} onClick={goToConfigurator}><SlidersHorizontal size={21} /><span>Configurar</span></button>
          <button className={category === 'pedido' ? styles.activeNav : ''} onClick={() => setCategory('pedido')}><ShoppingBag size={20} /><span>Pedido</span>{orderCount > 0 && <b>{orderCount}</b>}</button>
          <button className={category === 'favoritos' ? styles.activeNav : ''} onClick={() => setCategory('favoritos')}><Heart size={20} /><span>Favoritos</span>{favorites.length > 0 && <b>{favorites.length}</b>}</button>
        </nav>
      </div>

      {searchOpen && (
        <div className={styles.modalBackdrop} onMouseDown={() => setSearchOpen(false)}>
          <section className={styles.searchSheet} onMouseDown={(e) => e.stopPropagation()}>
            <div className={styles.sheetHandle} />
            <div className={styles.searchHeader}>
              <div><span>CATÁLOGO</span><h2>Buscar modelo</h2></div>
              <button className={styles.iconButton} onClick={() => setSearchOpen(false)} aria-label="Cerrar"><X size={20} /></button>
            </div>
            <label className={styles.searchBox}><Search size={18} /><input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ej. Artemis, Eternal, Dubai..." /></label>
            <div className={styles.searchResults}>
              {matches.map((name) => {
                const collection = bathroomCollections.find((item) => item.name === name);
                return (
                  <button key={name} onClick={() => {
                    if (collection) setSelected(collection);
                    else setQuery(name);
                  }}>
                    <span><strong>{name}</strong><small>{collection ? `${collection.series} · ficha interactiva disponible` : 'Modelo incluido en el índice del catálogo'}</small></span>
                    <ChevronRight size={18} />
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {orderConfirmOpen && (
        <div className={styles.modalBackdrop} onMouseDown={() => setOrderConfirmOpen(false)}>
          <section className={styles.orderConfirmSheet} onMouseDown={(e) => e.stopPropagation()}>
            <div className={styles.sheetHandle} />
            <div className={styles.searchHeader}>
              <div><span>PEDIDO PROFESIONAL</span><h2>Pedido preparado</h2></div>
              <button className={styles.iconButton} onClick={() => setOrderConfirmOpen(false)} aria-label="Cerrar"><X size={20} /></button>
            </div>
            <div className={styles.orderConfirmBody}>
              <div className={styles.orderConfirmSummary}>
                <ShoppingBag size={24} />
                <div><strong>{orderCount} {orderCount === 1 ? 'unidad' : 'unidades'}</strong><span>{hasUnpricedItems ? `Base conocida: ${knownOrderTotal.toLocaleString('es-ES')} € · hay composiciones a confirmar` : `Total base: ${knownOrderTotal.toLocaleString('es-ES')} € P.V.R. · IVA no incluido`}</span></div>
              </div>
              <p>El catálogo indica que los pedidos se cursan por email a comercial@mueblesgeminis.com. Este botón prepara el pedido con las selecciones realizadas para enviarlo desde el correo del dispositivo.</p>
              <div className={styles.confirmActions}>
                <button className={styles.copyOrderButton} onClick={copyOrder}><Copy size={17} /> {orderCopied ? 'Pedido copiado' : 'Copiar pedido'}</button>
                <button className={styles.sendOrderButton} onClick={sendOrderByEmail}><Mail size={18} /> Hacer pedido</button>
              </div>
              <small>Antes de enviarlo, revisa referencias, disponibilidad y cualquier composición cuyo precio no esté cerrado en esta versión interactiva.</small>
            </div>
          </section>
        </div>
      )}

      {selected && (
        <div className={styles.modalBackdrop} onMouseDown={() => setSelected(null)}>
          <section className={styles.detailSheet} onMouseDown={(e) => e.stopPropagation()}>
            <img src={selected.image} alt={`Colección ${selected.name} Geminis`} />
            <button className={`${styles.iconButton} ${styles.detailClose}`} onClick={() => setSelected(null)} aria-label="Cerrar"><X size={20} /></button>
            <div className={styles.detailContent}>
              <div className={styles.detailTopline}><span>SERIE {selected.series.toUpperCase()}</span><button onClick={() => toggleFavorite(selected.name)}><Heart size={21} fill={favorites.includes(selected.name) ? 'currentColor' : 'none'} /></button></div>
              <h2>{selected.name}</h2>
              <p>{selected.note}</p>
              <div className={styles.measureBlock}><span>MEDIDAS DISPONIBLES</span><strong>{selected.measures}</strong></div>
              {selected.finishes.length > 0 && <div className={styles.measureBlock}><span>ACABADOS DE MADERA NATURAL</span><strong>{selected.finishes.join(' · ')}</strong></div>}
              <div className={styles.detailActions}>
                <button onClick={() => { setSelected(null); setCategory('configurador'); resetConfigurator(); }}><SlidersHorizontal size={17} /> Configurar para pedido</button>
                <button className={styles.detailOrderButton} onClick={() => { setSelected(null); setCategory('pedido'); }}><ShoppingBag size={17} /> Ver pedido ({orderCount})</button>
              </div>
              <div className={styles.verified}><Check size={16} /> Información basada en la ficha del catálogo facilitado.</div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

function Configurator({
  step,
  setStep,
  width,
  setWidth,
  depth,
  setDepth,
  availableDepths,
  design,
  setDesign,
  finish,
  setFinish,
  drawerLight,
  setDrawerLight,
  quantity,
  setQuantity,
  results,
  favorites,
  toggleFavorite,
  openCollection,
  addToOrder,
  goToOrder,
  onBack,
  onReset,
}: {
  step: number;
  setStep: (step: number) => void;
  width: number | null;
  setWidth: (width: number) => void;
  depth: 39 | 46 | null;
  setDepth: (depth: 39 | 46) => void;
  availableDepths: readonly (39 | 46)[];
  design: DesignChoice;
  setDesign: (design: DesignChoice) => void;
  finish: FinishChoice;
  setFinish: (finish: FinishChoice) => void;
  drawerLight: boolean;
  setDrawerLight: (value: boolean) => void;
  quantity: number;
  setQuantity: (value: number) => void;
  results: Collection[];
  favorites: string[];
  toggleFavorite: (name: string) => void;
  openCollection: (collection: Collection) => void;
  addToOrder: (collection: Collection, width: number, depth: 39 | 46, finish: FinishChoice, drawerLight: boolean, quantity: number) => void;
  goToOrder: () => void;
  onBack: () => void;
  onReset: () => void;
}) {
  const isResult = step >= 6;
  const canContinue = [Boolean(width), Boolean(depth), true, true, true, quantity > 0][Math.min(step, 5)];
  const finishChoices = design === 'cristal'
    ? [{ value: 'catalogo' as FinishChoice, label: 'Ver acabados en catálogo', hint: 'El catálogo remite a su resumen de acabados.' }]
    : design === 'all'
      ? [{ value: 'sin-definir' as FinishChoice, label: 'Decidir después', hint: 'Ver primero todos los modelos compatibles.' }]
      : [
          ...finishOptions.map((value) => ({ value, label: value, hint: 'Madera natural de roble' })),
          { value: 'sin-definir' as FinishChoice, label: 'Decidir después', hint: 'Mantener abiertas todas las opciones.' },
        ];

  const next = () => {
    if (!canContinue) return;
    setStep(Math.min(step + 1, 6));
  };

  return (
    <section className={`${styles.section} ${styles.configuratorSection}`}>
      <div className={styles.configuratorHero}>
        <button onClick={onBack}><ArrowLeft size={17} /> Inicio</button>
        <div className={styles.configuratorHeroText}>
          <span>CONFIGURADOR PROFESIONAL</span>
          <h1>Encuentra el mueble que encaja.</h1>
          <p>Configura el mueble paso a paso con datos del catálogo real y añádelo directamente a un pedido profesional.</p>
        </div>
        <button className={styles.resetButton} onClick={onReset}><RotateCcw size={16} /> Reiniciar</button>
      </div>

      <div className={styles.configuratorLayout}>
        <div className={styles.configMain}>
          {!isResult && (
            <>
              <div className={styles.progressWrap}>
                <div className={styles.progressTop}><span>Paso {step + 1} de 6</span><strong>{Math.round(((step + 1) / 6) * 100)}%</strong></div>
                <div className={styles.progressTrack}><span style={{ width: `${((step + 1) / 6) * 100}%` }} /></div>
              </div>

              {step === 0 && (
                <ConfigStep icon={<Ruler size={25} />} eyebrow="MEDIDA" title="¿Qué anchura necesitas?" text="Selecciona el ancho del mueble. Solo usamos medidas publicadas para estas colecciones.">
                  <div className={styles.choiceGrid}>
                    {widths.map((value) => (
                      <button key={value} className={`${styles.choiceButton} ${width === value ? styles.choiceSelected : ''}`} onClick={() => setWidth(value)}>
                        <strong>{value}</strong><span>cm</span>{width === value && <Check size={17} />}
                      </button>
                    ))}
                  </div>
                </ConfigStep>
              )}

              {step === 1 && (
                <ConfigStep icon={<Layers3 size={25} />} eyebrow="FONDO" title="¿Qué profundidad encaja?" text={width && width >= 120 ? 'Para esta anchura, las colecciones cargadas en el configurador trabajan con fondo 46 cm.' : 'El catálogo contempla fondo 39 y 46 cm en las medidas compatibles.'}>
                  <div className={styles.largeChoiceGrid}>
                    {availableDepths.map((value) => (
                      <button key={value} className={`${styles.largeChoice} ${depth === value ? styles.choiceSelected : ''}`} onClick={() => setDepth(value)}>
                        <span>FONDO</span><strong>{value} cm</strong><small>{value === 39 ? 'Opción compacta' : 'Fondo estándar de la colección'}</small>{depth === value && <Check size={18} />}
                      </button>
                    ))}
                  </div>
                </ConfigStep>
              )}

              {step === 2 && (
                <ConfigStep icon={<Palette size={25} />} eyebrow="DISEÑO" title="¿Qué estética buscas?" text="Cada opción corresponde a la construcción descrita en las fichas reales de las colecciones cargadas.">
                  <div className={styles.designGrid}>
                    {[
                      { value: 'madera' as DesignChoice, title: 'Madera natural', text: 'Eternal / Phantom', image: '/geminis/eternal.webp' },
                      { value: 'ranurado' as DesignChoice, title: 'Roble ranurado', text: 'Artemis / Orion', image: '/geminis/artemis.webp' },
                      { value: 'cristal' as DesignChoice, title: 'Cristal acanalado', text: 'Style', image: '/geminis/style.webp' },
                      { value: 'all' as DesignChoice, title: 'Ver todas', text: 'Sin filtrar por diseño', image: '/geminis/phantom.webp' },
                    ].map((item) => (
                      <button key={item.value} className={`${styles.designChoice} ${design === item.value ? styles.designSelected : ''}`} onClick={() => {
                        setDesign(item.value);
                        if (item.value === 'cristal') setFinish('catalogo');
                        else if (item.value === 'all') setFinish('sin-definir');
                        else if (finish === 'catalogo') setFinish('sin-definir');
                      }}>
                        <img src={item.image} alt="" aria-hidden="true" />
                        <span className={styles.designShade} />
                        <span className={styles.designText}><strong>{item.title}</strong><small>{item.text}</small></span>
                        {design === item.value && <span className={styles.designCheck}><Check size={16} /></span>}
                      </button>
                    ))}
                  </div>
                </ConfigStep>
              )}

              {step === 3 && (
                <ConfigStep icon={<Palette size={25} />} eyebrow="ACABADO" title="Elige el acabado" text={design === 'cristal' ? 'Para Style no asignamos colores que no estén vinculados de forma inequívoca a su ficha; podrás consultarlos desde el catálogo.' : design === 'all' ? 'Como has elegido ver todos los diseños, dejamos el acabado abierto para no descartar modelos.' : 'Pure, Miel, Avellana y Brown son los acabados de madera natural indicados en estas colecciones.'}>
                  <div className={styles.finishGrid}>
                    {finishChoices.map((item) => (
                      <button key={item.value} className={`${styles.finishChoice} ${finish === item.value ? styles.choiceSelected : ''}`} onClick={() => setFinish(item.value)}>
                        {['Pure', 'Miel', 'Avellana', 'Brown'].includes(item.label) && <span className={`${styles.finishSwatch} ${styles[`finish${item.label}` as keyof typeof styles]}`} />}
                        <span><strong>{item.label}</strong><small>{item.hint}</small></span>
                        {finish === item.value && <Check size={18} />}
                      </button>
                    ))}
                  </div>
                </ConfigStep>
              )}

              {step === 4 && (
                <ConfigStep icon={<Lightbulb size={25} />} eyebrow="EXTRA" title="¿Quieres cajón iluminado?" text="En las colecciones configuradas aparece como opcional por +160 € por cajón y solo en fondo 46 cm.">
                  <div className={styles.largeChoiceGrid}>
                    <button className={`${styles.largeChoice} ${!drawerLight ? styles.choiceSelected : ''}`} onClick={() => setDrawerLight(false)}>
                      <span>CONFIGURACIÓN</span><strong>Sin iluminación</strong><small>Mantener la configuración base.</small>{!drawerLight && <Check size={18} />}
                    </button>
                    <button disabled={depth !== 46} className={`${styles.largeChoice} ${drawerLight ? styles.choiceSelected : ''} ${depth !== 46 ? styles.choiceDisabled : ''}`} onClick={() => depth === 46 && setDrawerLight(true)}>
                      <span>OPCIONAL</span><strong>Cajón iluminado</strong><small>{depth === 46 ? '+160 € por cajón' : 'Disponible únicamente en fondo 46 cm'}</small>{drawerLight && <Check size={18} />}
                    </button>
                  </div>
                </ConfigStep>
              )}

              {step === 5 && (
                <ConfigStep icon={<ShoppingBag size={25} />} eyebrow="CANTIDAD" title="¿Cuántas unidades quieres añadir?" text="La cantidad se aplicará al mueble que elijas en los resultados. Después podrás mezclar varios modelos en el mismo pedido.">
                  <div className={styles.quantityPickerLarge}>
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Restar unidad"><Minus size={22} /></button>
                    <div><strong>{quantity}</strong><span>{quantity === 1 ? 'unidad' : 'unidades'}</span></div>
                    <button onClick={() => setQuantity(Math.min(99, quantity + 1))} aria-label="Añadir unidad"><Plus size={22} /></button>
                  </div>
                </ConfigStep>
              )}

              <div className={styles.configNavButtons}>
                <button className={styles.backStepButton} onClick={() => step > 0 ? setStep(step - 1) : onBack()}><ArrowLeft size={17} /> {step > 0 ? 'Anterior' : 'Salir'}</button>
                <button className={styles.nextStepButton} disabled={!canContinue} onClick={next}>{step === 5 ? 'Ver resultados' : 'Continuar'} <ArrowRight size={17} /></button>
              </div>
            </>
          )}

          {isResult && (
            <div className={styles.resultsPanel}>
              <div className={styles.resultHeading}>
                <div><span>RESULTADO</span><h2>{results.length ? `${results.length} ${results.length === 1 ? 'colección compatible' : 'colecciones compatibles'}` : 'Sin coincidencias exactas'}</h2></div>
                <button onClick={() => setStep(0)}><SlidersHorizontal size={17} /> Modificar</button>
              </div>

              {results.length ? (
                <div className={styles.resultGrid}>
                  {results.map((item) => {
                    const basePrice = priceFor(item, width, depth);
                    return (
                      <article className={styles.resultCard} key={item.name}>
                        <button className={styles.resultImage} onClick={() => openCollection(item)}><img src={item.image} alt={`Colección ${item.name}`} /></button>
                        <div className={styles.resultBody}>
                          <div className={styles.resultTop}><span>SERIE {item.series.toUpperCase()}</span><button onClick={() => toggleFavorite(item.name)}><Heart size={19} fill={favorites.includes(item.name) ? 'currentColor' : 'none'} /></button></div>
                          <h3>{item.name}</h3>
                          <p>{item.note}</p>
                          <div className={styles.resultSpecs}>
                            <span><Ruler size={15} /> {width} × {depth} cm</span>
                            {finish !== 'sin-definir' && finish !== 'catalogo' && <span><Palette size={15} /> {finish}</span>}
                            {drawerLight && <span><Lightbulb size={15} /> Cajón iluminado +160 €/cajón</span>}
                          </div>
                          <div className={styles.resultPrice}>
                            {basePrice ? <><span>Con lavabo porcelana Calpe blanco brillo</span><strong>{basePrice.toLocaleString('es-ES')} € <small>P.V.R.</small></strong><em>IVA no incluido</em></> : <><span>Esta medida tiene varias composiciones de lavabo / encimera</span><strong>Ver tabla de la colección</strong></>}
                          </div>
                          <div className={styles.resultActions}>
                            <button className={styles.openResultButton} onClick={() => openCollection(item)}>Ver ficha <ArrowRight size={16} /></button>
                            <button className={styles.addOrderButton} onClick={() => {
                              if (!width || !depth) return;
                              addToOrder(item, width, depth, finish, drawerLight, quantity);
                              goToOrder();
                            }}><ShoppingBag size={16} /> Añadir {quantity > 1 ? `${quantity} uds.` : 'al pedido'}</button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className={styles.noResults}>
                  <Sparkles size={30} />
                  <strong>No encontramos una colección cargada que coincida con todo.</strong>
                  <span>Prueba a dejar el diseño o el acabado sin definir. El catálogo completo contiene más modelos que iremos incorporando al configurador.</span>
                  <button onClick={() => setStep(2)}>Cambiar diseño</button>
                </div>
              )}
              <div className={styles.resultDisclaimer}><Check size={16} /> Los precios base que se muestran son los de la combinación con lavabo porcelana Calpe cuando la tabla permite identificarla sin ambigüedad. Si una medida admite varias composiciones, el pedido la marca como pendiente de concretar para no inventar un precio.</div>
            </div>
          )}
        </div>

        <aside className={styles.configSummary}>
          <span>TU CONFIGURACIÓN</span>
          <h3>{width ? `${width} cm` : 'Empieza por la medida'}</h3>
          <div className={styles.summaryRows}>
            <SummaryRow label="Anchura" value={width ? `${width} cm` : 'Sin elegir'} active={Boolean(width)} />
            <SummaryRow label="Fondo" value={depth ? `${depth} cm` : 'Sin elegir'} active={Boolean(depth)} />
            <SummaryRow label="Diseño" value={{ all: 'Todos', madera: 'Madera natural', ranurado: 'Roble ranurado', cristal: 'Cristal acanalado' }[design]} active={step >= 2} />
            <SummaryRow label="Acabado" value={finish === 'sin-definir' ? 'Sin definir' : finish === 'catalogo' ? 'Según catálogo' : finish} active={step >= 3} />
            <SummaryRow label="Iluminación" value={drawerLight ? '+160 €/cajón' : 'No'} active={step >= 4} />
            <SummaryRow label="Cantidad" value={`${quantity} ${quantity === 1 ? 'ud.' : 'uds.'}`} active={step >= 5} />
          </div>
          {width && depth && <div className={styles.summaryMatch}><Sparkles size={18} /><span><strong>{results.length || bathroomCollections.filter((item) => supportsDepth(item, width, depth)).length}</strong> opciones compatibles en esta selección</span></div>}
          <p>El configurador no crea combinaciones fuera del catálogo cargado.</p>
        </aside>
      </div>
    </section>
  );
}

function OrderPage({
  items,
  orderCount,
  knownTotal,
  hasUnpricedItems,
  onBack,
  onConfigure,
  onQuantity,
  onRemove,
  onOrder,
}: {
  items: OrderItem[];
  orderCount: number;
  knownTotal: number;
  hasUnpricedItems: boolean;
  onBack: () => void;
  onConfigure: () => void;
  onQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onOrder: () => void;
}) {
  return (
    <section className={`${styles.section} ${styles.orderSection}`}>
      <div className={styles.orderHero}>
        <button onClick={onBack}><ArrowLeft size={17} /> Inicio</button>
        <span>PEDIDO PROFESIONAL</span>
        <h1>Prepara el pedido durante la visita.</h1>
        <p>Combina distintos muebles, medidas y cantidades. No se inventan referencias ni precios que no estén cerrados en los datos cargados del catálogo.</p>
      </div>

      {!items.length ? (
        <div className={styles.emptyOrder}>
          <span className={styles.emptyOrderIcon}><ShoppingBag size={32} /></span>
          <h2>Tu pedido está vacío</h2>
          <p>Empieza con el configurador. Elige medida, fondo, diseño, acabado y cantidad; después selecciona el modelo compatible.</p>
          <button onClick={onConfigure}><SlidersHorizontal size={18} /> Configurar un mueble</button>
        </div>
      ) : (
        <div className={styles.orderLayout}>
          <div className={styles.orderList}>
            <div className={styles.orderListHeading}>
              <div><span>SELECCIÓN ACTUAL</span><h2>{orderCount} {orderCount === 1 ? 'unidad' : 'unidades'}</h2></div>
              <button onClick={onConfigure}><Plus size={17} /> Añadir otro mueble</button>
            </div>
            {items.map((item) => (
              <article className={styles.orderItem} key={item.id}>
                <img src={item.image} alt={`Colección ${item.collection}`} />
                <div className={styles.orderItemMain}>
                  <span>SERIE {item.series.toUpperCase()}</span>
                  <h3>{item.collection}</h3>
                  <div className={styles.orderSpecs}>
                    <strong>{item.width} × {item.depth} cm</strong>
                    <span>{item.finish === 'sin-definir' ? 'Acabado sin definir' : item.finish === 'catalogo' ? 'Acabado según catálogo' : `Acabado ${item.finish}`}</span>
                    {item.drawerLight && <span>Cajón iluminado solicitado · +160 €/cajón según catálogo</span>}
                  </div>
                  <div className={styles.orderPriceLine}>
                    {item.baseUnitPrice ? (
                      <><strong>{item.baseUnitPrice.toLocaleString('es-ES')} € <small>P.V.R. / ud.</small></strong><span>IVA no incluido</span></>
                    ) : (
                      <><strong>Precio a concretar</strong><span>La medida admite varias composiciones en la tabla del catálogo.</span></>
                    )}
                  </div>
                </div>
                <div className={styles.orderItemControls}>
                  <div className={styles.quantityControl}>
                    <button onClick={() => onQuantity(item.id, item.quantity - 1)} aria-label="Restar"><Minus size={16} /></button>
                    <strong>{item.quantity}</strong>
                    <button onClick={() => onQuantity(item.id, item.quantity + 1)} aria-label="Sumar"><Plus size={16} /></button>
                  </div>
                  <button className={styles.removeOrderButton} onClick={() => onRemove(item.id)} aria-label="Eliminar del pedido"><Trash2 size={17} /></button>
                </div>
              </article>
            ))}
          </div>

          <aside className={styles.orderSummaryCard}>
            <span>RESUMEN DEL PEDIDO</span>
            <h2>{orderCount} {orderCount === 1 ? 'unidad' : 'unidades'}</h2>
            <div className={styles.orderSummaryRows}>
              <div><span>Modelos distintos</span><strong>{items.length}</strong></div>
              <div><span>Base con precio conocido</span><strong>{knownTotal.toLocaleString('es-ES')} €</strong></div>
              <div><span>IVA</span><strong>No incluido</strong></div>
            </div>
            {hasUnpricedItems && <div className={styles.orderWarning}><Check size={16} /><span>Hay medidas que requieren concretar la composición antes de cerrar el precio.</span></div>}
            <button className={styles.makeOrderButton} onClick={onOrder}><ShoppingBag size={19} /> Hacer pedido</button>
            <p>Se prepara un email dirigido al departamento comercial de Geminis con el detalle del pedido.</p>
          </aside>
        </div>
      )}
    </section>
  );
}

function ConfigStep({ icon, eyebrow, title, text, children }: { icon: React.ReactNode; eyebrow: string; title: string; text: string; children: React.ReactNode }) {
  return (
    <div className={styles.configStepCard}>
      <div className={styles.stepIcon}>{icon}</div>
      <span className={styles.stepEyebrow}>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className={styles.stepChoices}>{children}</div>
    </div>
  );
}

function SummaryRow({ label, value, active }: { label: string; value: string; active: boolean }) {
  return <div className={`${styles.summaryRow} ${active ? styles.summaryActive : ''}`}><span>{label}</span><strong>{value}</strong>{active && <Check size={14} />}</div>;
}

function CollectionCard({ item, favorite, onFavorite, onOpen }: { item: Collection; favorite: boolean; onFavorite: () => void; onOpen: () => void }) {
  return (
    <article className={styles.collectionCard}>
      <div className={styles.collectionImage} onClick={onOpen} role="button" tabIndex={0}>
        <img src={item.image} alt={`Colección ${item.name} de Geminis`} />
        <span className={styles.seriesBadge}>SERIE {item.series.toUpperCase()}</span>
        <button className={styles.favoriteButton} onClick={(e) => { e.stopPropagation(); onFavorite(); }} aria-label={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}><Heart size={18} fill={favorite ? 'currentColor' : 'none'} /></button>
      </div>
      <button className={styles.collectionInfo} onClick={onOpen}>
        <span><strong>{item.name}</strong><small>{item.note}</small></span>
        <span className={styles.roundArrow}><ArrowRight size={16} /></span>
      </button>
    </article>
  );
}
