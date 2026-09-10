'use client';

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
  Menu,
  Search,
  Sparkles,
  UtensilsCrossed,
  X,
} from 'lucide-react';
import styles from './geminis.module.css';

type Stage = 'device' | 'welcome' | 'catalog';
type Category = 'inicio' | 'bano' | 'cocinas' | 'favoritos';

type Collection = {
  name: string;
  series: 'Exclusive' | 'Premium' | 'Today';
  measures: string;
  image: string;
  note: string;
};

const bathroomCollections: Collection[] = [
  {
    name: 'Eternal',
    series: 'Exclusive',
    measures: '60 · 70 · 80 · 100 · 120 · 140 · 160 cm',
    image: '/geminis/eternal.webp',
    note: 'Madera natural de roble · 2 cajones · Luxe Max',
  },
  {
    name: 'Artemis',
    series: 'Exclusive',
    measures: '60 · 70 · 80 · 100 · 120 · 140 · 160 cm',
    image: '/geminis/artemis.webp',
    note: 'Roble ranurado · uñero J · cajón Luxe Max',
  },
  {
    name: 'Orion',
    series: 'Exclusive',
    measures: '60 · 70 · 80 · 100 · 120 · 140 · 160 cm',
    image: '/geminis/orion.webp',
    note: 'Roble ranurado · 1 cajón · cajón Luxe Max',
  },
  {
    name: 'Phantom',
    series: 'Exclusive',
    measures: '60 · 70 · 80 · 90 · 100 · 120 · 140 · 160 · 180 cm',
    image: '/geminis/phantom.webp',
    note: 'Roble natural · uñero 45º · 2 cajones',
  },
  {
    name: 'Style',
    series: 'Exclusive',
    measures: '60 · 70 · 80 · 90 · 100 · 120 · 140 · 160 · 180 cm',
    image: '/geminis/style.webp',
    note: 'Frontal de cristal acanalado lacado · 2 cajones',
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

export default function GeminisPage() {
  const [stage, setStage] = useState<Stage>('device');
  const [category, setCategory] = useState<Category>('inicio');
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Collection | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const matches = useMemo(() => {
    const clean = query.trim().toLocaleLowerCase('es');
    if (!clean) return allCatalogNames.slice(0, 10);
    return allCatalogNames.filter((name) => name.toLocaleLowerCase('es').includes(clean)).slice(0, 14);
  }, [query]);

  const toggleFavorite = (name: string) => {
    setFavorites((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  };

  if (stage === 'device') {
    return (
      <main className={styles.root}>
        <section className={styles.deviceScreen}>
          <div className={styles.deviceImage} aria-hidden="true" />
          <div className={styles.deviceShade} />
          <div className={styles.devicePanel}>
            <img className={styles.realLogo} src="/geminis/logo-catalogo.png" alt="Geminis, expertos en baños y cocinas" />
            <div className={styles.deviceCopy}>
              <span>Catálogo profesional digital</span>
              <h1>Una nueva forma de descubrir Geminis.</h1>
              <p>Experiencia optimizada para visitas comerciales desde tablet y móvil.</p>
            </div>
            <button className={styles.deviceButton} onClick={() => setStage('welcome')}>
              <span>TABLET / MÓVIL</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </section>
      </main>
    );
  }

  if (stage === 'welcome') {
    return (
      <main className={styles.root}>
        <section className={styles.welcomeScreen}>
          <div className={styles.welcomeVisual}>
            <img src="/geminis/artemis.webp" alt="Colección Artemis de Geminis" />
            <div className={styles.welcomeGradient} />
            <button className={styles.backRound} onClick={() => setStage('device')} aria-label="Volver">
              <ArrowLeft size={20} />
            </button>
            <div className={styles.welcomeBadge}>CATÁLOGO PROFESIONAL</div>
          </div>
          <div className={styles.welcomeContent}>
            <img className={styles.welcomeLogo} src="/geminis/logo-catalogo.png" alt="Geminis" />
            <div>
              <p className={styles.eyebrow}>EXPERTOS EN BAÑOS Y COCINAS</p>
              <h1>Bienvenid@ a Geminis.</h1>
              <h2>Tu experiencia empieza ahora.</h2>
              <p className={styles.welcomeText}>Explora colecciones, encuentra modelos rápidamente y presenta el catálogo de una forma mucho más visual.</p>
            </div>
            <button className={styles.primaryButton} onClick={() => setStage('catalog')}>
              Empezar experiencia <ArrowRight size={20} />
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.root}>
      <div className={styles.appShell}>
        <header className={styles.topbar}>
          <button className={styles.iconButton} aria-label="Menú"><Menu size={21} /></button>
          <button className={styles.brandButton} onClick={() => setCategory('inicio')}>
            <strong>GEMINIS</strong>
            <span>CATÁLOGO PROFESIONAL</span>
          </button>
          <button className={styles.iconButton} onClick={() => setSearchOpen(true)} aria-label="Buscar"><Search size={21} /></button>
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
                  <p>Baños y cocinas para presentar, comparar y descubrir desde cualquier visita.</p>
                  <button onClick={() => setCategory('bano')}>Explorar baño <ChevronRight size={18} /></button>
                </div>
              </section>

              <section className={styles.section}>
                <div className={styles.sectionHeading}>
                  <div><span>ACCESO RÁPIDO</span><h2>¿Qué quieres mostrar?</h2></div>
                  <Sparkles size={22} />
                </div>
                <div className={styles.quickGrid}>
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
                  <button className={`${styles.quickCard} ${styles.utilityCard}`} onClick={() => setSearchOpen(true)}>
                    <Search size={34} />
                    <span className={styles.utilityTitle}>Buscar modelo</span>
                    <span className={styles.utilityText}>Encuentra una colección por nombre.</span>
                  </button>
                  <button className={`${styles.quickCard} ${styles.utilityCard}`} onClick={() => setCategory('bano')}>
                    <BookOpen size={34} />
                    <span className={styles.utilityTitle}>Colecciones</span>
                    <span className={styles.utilityText}>Exclusive · Premium · Today</span>
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
                  <img src="/geminis/cocina-laminada.webp" alt="Cocina laminada Geminis" />
                  <div className={styles.kitchenOverlay} />
                  <div>
                    <span>COCINAS</span>
                    <h2>Cocinas Geminis</h2>
                    <p>Laminadas · Lacadas · PET · Chapadas</p>
                    <button onClick={() => setCategory('cocinas')}>Ver cocinas <ChevronRight size={17} /></button>
                  </div>
                </div>
              </section>
            </>
          )}

          {category === 'bano' && (
            <section className={`${styles.section} ${styles.categorySection}`}>
              <div className={styles.categoryHero}>
                <button onClick={() => setCategory('inicio')}><ArrowLeft size={18} /> Inicio</button>
                <span>CATÁLOGO DE BAÑO</span>
                <h1>Colecciones Geminis</h1>
                <p>Selección visual con información extraída del catálogo profesional.</p>
              </div>
              <div className={styles.fullGrid}>
                {bathroomCollections.map((item) => (
                  <CollectionCard key={item.name} item={item} favorite={favorites.includes(item.name)} onFavorite={() => toggleFavorite(item.name)} onOpen={() => setSelected(item)} />
                ))}
              </div>
              <div className={styles.catalogNote}>
                <BookOpen size={21} />
                <div><strong>El catálogo incluye muchas más colecciones.</strong><span>Usa “Buscar” para localizar rápidamente cualquiera de los modelos del índice.</span></div>
              </div>
            </section>
          )}

          {category === 'favoritos' && (
            <section className={`${styles.section} ${styles.categorySection}`}>
              <div className={styles.categoryHero}>
                <button onClick={() => setCategory('inicio')}><ArrowLeft size={18} /> Inicio</button>
                <span>SELECCIÓN PERSONAL</span>
                <h1>Favoritos</h1>
                <p>Guarda durante la visita las colecciones que quieras volver a enseñar.</p>
              </div>
              {favorites.length > 0 ? (
                <div className={styles.fullGrid}>
                  {bathroomCollections.filter((item) => favorites.includes(item.name)).map((item) => (
                    <CollectionCard key={item.name} item={item} favorite onFavorite={() => toggleFavorite(item.name)} onOpen={() => setSelected(item)} />
                  ))}
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <Heart size={28} />
                  <strong>Todavía no has guardado ninguna colección.</strong>
                  <span>Toca el corazón de una colección para añadirla aquí.</span>
                  <button onClick={() => setCategory('bano')}>Explorar colecciones</button>
                </div>
              )}
            </section>
          )}

          {category === 'cocinas' && (
            <section className={`${styles.section} ${styles.categorySection}`}>
              <div className={`${styles.categoryHero} ${styles.kitchenCategoryHero}`}>
                <button onClick={() => setCategory('inicio')}><ArrowLeft size={18} /> Inicio</button>
                <span>COCINAS</span>
                <h1>Laminadas, lacadas, PET y chapadas</h1>
                <p>La sección actual del catálogo presenta cocinas laminadas, lacadas, PET y chapadas.</p>
              </div>
              <div className={styles.kitchenGrid}>
                {kitchenTypes.map((item) => (
                  <article className={styles.kitchenCard} key={item.name}>
                    <img src={item.image} alt={item.name} />
                    <div><span>COCINAS</span><h3>{item.name}</h3><p>{item.note}</p></div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>

        <nav className={styles.bottomNav}>
          <button className={category === 'inicio' ? styles.activeNav : ''} onClick={() => setCategory('inicio')}><Home size={20} /><span>Inicio</span></button>
          <button onClick={() => setSearchOpen(true)}><Search size={20} /><span>Buscar</span></button>
          <button className={category === 'favoritos' ? styles.activeNav : ''} onClick={() => setCategory('favoritos')}><Heart size={20} /><span>Favoritos</span>{favorites.length > 0 && <b>{favorites.length}</b>}</button>
          <button className={category === 'cocinas' ? styles.activeNav : ''} onClick={() => setCategory('cocinas')}><Layers3 size={20} /><span>Cocinas</span></button>
        </nav>
      </div>

      {searchOpen && (
        <div className={styles.modalBackdrop} onClick={() => setSearchOpen(false)}>
          <section className={styles.searchSheet} onClick={(event) => event.stopPropagation()}>
            <div className={styles.sheetHandle} />
            <div className={styles.searchHeader}>
              <div><span>CATÁLOGO GEMINIS</span><h2>Buscar modelo</h2></div>
              <button className={styles.iconButton} onClick={() => setSearchOpen(false)} aria-label="Cerrar"><X size={20} /></button>
            </div>
            <label className={styles.searchBox}>
              <Search size={20} />
              <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ej. Eternal, Dubai, Artemis…" />
            </label>
            <div className={styles.searchResults}>
              {matches.map((name) => {
                const known = bathroomCollections.find((item) => item.name === name);
                return (
                  <button key={name} onClick={() => {
                    setSearchOpen(false);
                    if (known) setSelected(known);
                    else setCategory('bano');
                  }}>
                    <span><strong>{name}</strong><small>{known ? `${known.series} · ${known.measures}` : 'Modelo incluido en el índice general del catálogo'}</small></span>
                    <ChevronRight size={18} />
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {selected && (
        <div className={styles.modalBackdrop} onClick={() => setSelected(null)}>
          <section className={styles.detailSheet} onClick={(event) => event.stopPropagation()}>
            <button className={styles.detailClose} onClick={() => setSelected(null)} aria-label="Cerrar"><X size={20} /></button>
            <img src={selected.image} alt={`Colección ${selected.name}`} />
            <div className={styles.detailContent}>
              <div className={styles.detailTopline}><span>SERIE {selected.series.toUpperCase()}</span><button onClick={() => toggleFavorite(selected.name)}><Heart size={19} fill={favorites.includes(selected.name) ? 'currentColor' : 'none'} /></button></div>
              <h2>{selected.name}</h2>
              <p>{selected.note}</p>
              <div className={styles.measureBlock}><span>MEDIDAS DISPONIBLES</span><strong>{selected.measures}</strong></div>
              <div className={styles.verified}><Check size={17} /><span>Información y fotografía tomadas del catálogo Geminis proporcionado.</span></div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

function CollectionCard({ item, favorite, onFavorite, onOpen }: { item: Collection; favorite: boolean; onFavorite: () => void; onOpen: () => void }) {
  return (
    <article className={styles.collectionCard}>
      <div className={styles.collectionImage} onClick={onOpen} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') onOpen(); }}>
        <img src={item.image} alt={`Colección ${item.name}`} />
        <span className={styles.seriesBadge}>SERIE {item.series.toUpperCase()}</span>
        <button className={styles.favoriteButton} onClick={(e) => { e.stopPropagation(); onFavorite(); }} aria-label={favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}>
          <Heart size={18} fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <button className={styles.collectionInfo} onClick={onOpen}>
        <span><strong>{item.name}</strong><small>{item.measures}</small></span>
        <span className={styles.roundArrow}><ArrowRight size={17} /></span>
      </button>
    </article>
  );
}
