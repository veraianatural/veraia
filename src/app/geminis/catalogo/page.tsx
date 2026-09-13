'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  Maximize2,
  Minimize2,
  Smartphone,
  Tablet,
  X,
} from 'lucide-react';
import styles from './catalogo.module.css';

const TOTAL_SOURCE_PAGES = 167;
const TOTAL_MOBILE_VIEWS = 332;

type Mode = 'tablet' | 'mobile';
type Side = 'full' | 'left' | 'right';
type Direction = 'next' | 'prev' | null;

const pageSrc = (page: number) => `/geminis/catalogo/pages/page-${String(page).padStart(3, '0')}.webp`;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, Math.round(value)));
}

function printedLabel(sourcePage: number, side: Side, mode: Mode) {
  if (sourcePage === 1) return 'Portada';
  if (sourcePage === TOTAL_SOURCE_PAGES) return 'Contraportada';
  const left = sourcePage * 2 - 2;
  if (mode === 'tablet') return `${left}-${left + 1}`;
  return side === 'right' ? String(left + 1) : String(left);
}

function mobileViewIndex(sourcePage: number, side: Side) {
  if (sourcePage === 1) return 1;
  if (sourcePage === TOTAL_SOURCE_PAGES) return TOTAL_MOBILE_VIEWS;
  return 2 + (sourcePage - 2) * 2 + (side === 'right' ? 1 : 0);
}

export default function CatalogoInteractivoPage() {
  const [mode, setMode] = useState<Mode>('tablet');
  const [sourcePage, setSourcePage] = useState(1);
  const [side, setSide] = useState<Side>('full');
  const [direction, setDirection] = useState<Direction>(null);
  const [thumbsOpen, setThumbsOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [jumpValue, setJumpValue] = useState('1');
  const pointerStartX = useRef<number | null>(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const requested = query.get('modo');
    if (requested === 'mobile' || requested === 'tablet') {
      setMode(requested);
    } else if (window.innerWidth < 720) {
      setMode('mobile');
    }
  }, []);

  useEffect(() => {
    if (sourcePage === 1 || sourcePage === TOTAL_SOURCE_PAGES) {
      setSide('full');
    } else if (mode === 'mobile' && side === 'full') {
      setSide('left');
    }
  }, [mode, side, sourcePage]);

  const currentView = mode === 'tablet' ? sourcePage : mobileViewIndex(sourcePage, side);
  const totalViews = mode === 'tablet' ? TOTAL_SOURCE_PAGES : TOTAL_MOBILE_VIEWS;
  const currentPrintedLabel = printedLabel(sourcePage, side, mode);

  useEffect(() => {
    setJumpValue(String(currentView));
  }, [currentView]);

  const moveTo = useCallback((nextSource: number, nextSide: Side, nextDirection: Exclude<Direction, null>) => {
    const safeSource = clamp(nextSource, 1, TOTAL_SOURCE_PAGES);
    if (safeSource === sourcePage && nextSide === side) return;
    setDirection(nextDirection);
    window.setTimeout(() => {
      setSourcePage(safeSource);
      setSide(safeSource === 1 || safeSource === TOTAL_SOURCE_PAGES ? 'full' : nextSide);
      window.setTimeout(() => setDirection(null), 230);
    }, 80);
  }, [side, sourcePage]);

  const next = useCallback(() => {
    if (mode === 'tablet') {
      if (sourcePage < TOTAL_SOURCE_PAGES) moveTo(sourcePage + 1, 'full', 'next');
      return;
    }
    if (sourcePage === 1) {
      moveTo(2, 'left', 'next');
      return;
    }
    if (sourcePage === TOTAL_SOURCE_PAGES) return;
    if (side === 'left') {
      moveTo(sourcePage, 'right', 'next');
      return;
    }
    if (sourcePage < TOTAL_SOURCE_PAGES - 1) moveTo(sourcePage + 1, 'left', 'next');
    else moveTo(TOTAL_SOURCE_PAGES, 'full', 'next');
  }, [mode, moveTo, side, sourcePage]);

  const previous = useCallback(() => {
    if (mode === 'tablet') {
      if (sourcePage > 1) moveTo(sourcePage - 1, 'full', 'prev');
      return;
    }
    if (sourcePage === 1) return;
    if (sourcePage === TOTAL_SOURCE_PAGES) {
      moveTo(TOTAL_SOURCE_PAGES - 1, 'right', 'prev');
      return;
    }
    if (side === 'right') {
      moveTo(sourcePage, 'left', 'prev');
      return;
    }
    if (sourcePage > 2) moveTo(sourcePage - 1, 'right', 'prev');
    else moveTo(1, 'full', 'prev');
  }, [mode, moveTo, side, sourcePage]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') previous();
      if (event.key === 'Escape') setThumbsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, previous]);

  useEffect(() => {
    for (let offset = -2; offset <= 3; offset += 1) {
      const candidate = sourcePage + offset;
      if (candidate < 1 || candidate > TOTAL_SOURCE_PAGES) continue;
      const image = new Image();
      image.src = pageSrc(candidate);
    }
  }, [sourcePage]);

  useEffect(() => {
    const onFullscreenChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
      else await document.exitFullscreen();
    } catch {
      // El visor continúa funcionando en navegadores móviles sin Fullscreen API.
    }
  };

  const jumpToView = (view: number) => {
    const max = mode === 'tablet' ? TOTAL_SOURCE_PAGES : TOTAL_MOBILE_VIEWS;
    const safe = clamp(view, 1, max);
    const nextDirection: Exclude<Direction, null> = safe >= currentView ? 'next' : 'prev';

    if (mode === 'tablet') {
      moveTo(safe, 'full', nextDirection);
      setJumpValue(String(safe));
      return;
    }

    if (safe === 1) {
      moveTo(1, 'full', nextDirection);
    } else if (safe === TOTAL_MOBILE_VIEWS) {
      moveTo(TOTAL_SOURCE_PAGES, 'full', nextDirection);
    } else {
      const zeroBased = safe - 2;
      const mappedSource = 2 + Math.floor(zeroBased / 2);
      const mappedSide: Side = zeroBased % 2 === 0 ? 'left' : 'right';
      moveTo(mappedSource, mappedSide, nextDirection);
    }
    setJumpValue(String(safe));
  };

  const jumpToSource = (targetSource: number) => {
    const safe = clamp(targetSource, 1, TOTAL_SOURCE_PAGES);
    const nextDirection: Exclude<Direction, null> = safe >= sourcePage ? 'next' : 'prev';
    moveTo(safe, safe === 1 || safe === TOTAL_SOURCE_PAGES ? 'full' : mode === 'mobile' ? 'left' : 'full', nextDirection);
    setThumbsOpen(false);
  };

  const submitJump = (event: React.FormEvent) => {
    event.preventDefault();
    const parsed = Number(jumpValue);
    if (Number.isFinite(parsed)) jumpToView(parsed);
  };

  const pointerDown = (event: React.PointerEvent) => {
    pointerStartX.current = event.clientX;
  };

  const pointerUp = (event: React.PointerEvent) => {
    if (pointerStartX.current === null) return;
    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(delta) < 55) return;
    if (delta < 0) next();
    else previous();
  };

  const atBeginning = currentView <= 1;
  const atEnd = currentView >= totalViews;
  const pageClass = useMemo(() => {
    if (sourcePage === 1 || sourcePage === TOTAL_SOURCE_PAGES) return styles.coverPage;
    if (mode === 'mobile') return side === 'right' ? styles.mobileRightPage : styles.mobileLeftPage;
    return styles.spreadPage;
  }, [mode, side, sourcePage]);

  const thumbnailLabel = (item: number) => {
    if (item === 1) return 'Portada';
    if (item === TOTAL_SOURCE_PAGES) return 'Contra';
    const left = item * 2 - 2;
    return `${left}-${left + 1}`;
  };

  return (
    <main className={`${styles.root} ${mode === 'mobile' ? styles.mobileMode : styles.tabletMode}`}>
      <header className={styles.header}>
        <Link href="/geminis" className={styles.backButton} aria-label="Volver a Geminis">
          <ArrowLeft size={18} />
          <span>Geminis</span>
        </Link>

        <div className={styles.brand}>
          <img src="/geminis/logo-catalogo.png" alt="Geminis" />
          <div>
            <strong>CATÁLOGO INTERACTIVO</strong>
            <span>El catálogo profesional original, convertido en experiencia táctil</span>
          </div>
        </div>

        <div className={styles.headerActions}>
          <button className={styles.modeButton} onClick={() => setMode((current) => current === 'mobile' ? 'tablet' : 'mobile')}>
            {mode === 'mobile' ? <Smartphone size={16} /> : <Tablet size={17} />}
            <span>{mode === 'mobile' ? 'Móvil' : 'Tablet'}</span>
          </button>
          <button className={styles.iconButton} onClick={() => setThumbsOpen(true)} aria-label="Ver miniaturas">
            <Grid3X3 size={19} />
          </button>
          <button className={styles.iconButton} onClick={toggleFullscreen} aria-label="Pantalla completa">
            {fullscreen ? <Minimize2 size={19} /> : <Maximize2 size={19} />}
          </button>
        </div>
      </header>

      <section className={styles.reader} onPointerDown={pointerDown} onPointerUp={pointerUp}>
        <div className={styles.readerIntro}>
          <BookOpen size={16} />
          <span>{mode === 'mobile' ? 'Desliza para pasar página' : 'Desliza o usa las flechas para pasar pliego'}</span>
        </div>

        <button className={`${styles.sideArrow} ${styles.leftArrow}`} onClick={previous} disabled={atBeginning} aria-label="Página anterior">
          <ChevronLeft size={31} />
        </button>

        <div className={`${styles.bookStage} ${direction === 'next' ? styles.turnNext : ''} ${direction === 'prev' ? styles.turnPrev : ''}`}>
          <figure key={`${sourcePage}-${side}-${mode}`} className={`${styles.pageFrame} ${pageClass}`}>
            <div className={styles.pageViewport}>
              <img src={pageSrc(sourcePage)} alt={`Catálogo Geminis - ${currentPrintedLabel}`} draggable={false} />
            </div>
          </figure>
        </div>

        <button className={`${styles.sideArrow} ${styles.rightArrow}`} onClick={next} disabled={atEnd} aria-label="Página siguiente">
          <ChevronRight size={31} />
        </button>
      </section>

      <footer className={styles.controls}>
        <button className={styles.navButton} onClick={previous} disabled={atBeginning}>
          <ArrowLeft size={18} /> <span>Anterior</span>
        </button>

        <div className={styles.pageControls}>
          <div className={styles.pageStatus}>
            <span>{mode === 'mobile' ? 'PÁGINA' : 'PÁGINAS'}</span>
            <strong>{currentPrintedLabel}</strong>
            <small>{currentView}/{totalViews}</small>
          </div>
          <input
            className={styles.range}
            type="range"
            min="1"
            max={totalViews}
            value={currentView}
            onChange={(event) => jumpToView(Number(event.target.value))}
            aria-label="Ir a página"
          />
          <form className={styles.jumpForm} onSubmit={submitJump}>
            <span>Ir a vista</span>
            <input
              inputMode="numeric"
              value={jumpValue}
              onChange={(event) => setJumpValue(event.target.value.replace(/[^0-9]/g, '').slice(0, 3))}
              aria-label="Número de vista"
            />
            <button type="submit">OK</button>
          </form>
        </div>

        <button className={styles.navButton} onClick={next} disabled={atEnd}>
          <span>Siguiente</span> <ArrowRight size={18} />
        </button>
      </footer>

      {thumbsOpen && (
        <div className={styles.drawerBackdrop} role="presentation" onClick={() => setThumbsOpen(false)}>
          <aside className={styles.thumbDrawer} role="dialog" aria-modal="true" aria-label="Miniaturas del catálogo" onClick={(event) => event.stopPropagation()}>
            <div className={styles.drawerHeader}>
              <div>
                <span>CATÁLOGO GEMINIS</span>
                <h2>Ir directamente</h2>
              </div>
              <button onClick={() => setThumbsOpen(false)} aria-label="Cerrar"><X size={21} /></button>
            </div>
            <div className={styles.thumbGrid}>
              {Array.from({ length: TOTAL_SOURCE_PAGES }, (_, index) => index + 1).map((item) => (
                <button key={item} className={sourcePage === item ? styles.thumbActive : ''} onClick={() => jumpToSource(item)}>
                  <img src={pageSrc(item)} alt={`Miniatura ${thumbnailLabel(item)}`} loading="lazy" />
                  <span>{thumbnailLabel(item)}</span>
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
