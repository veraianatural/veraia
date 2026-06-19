'use client';

import { useEffect, useRef, useState } from 'react';
import { Music2, Pause, Play } from 'lucide-react';

export function AmbientExperience() {
  const [playing, setPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ stop: () => void } | null>(null);

  useEffect(() => {
    return () => nodesRef.current?.stop();
  }, []);

  const start = async () => {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = audioContextRef.current ?? new AudioCtx();
    audioContextRef.current = ctx;
    await ctx.resume();

    const master = ctx.createGain();
    master.gain.value = 0.018;
    master.connect(ctx.destination);

    const makeTone = (frequency: number, gainValue: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = frequency;
      gain.gain.value = gainValue;
      osc.connect(gain);
      gain.connect(master);
      osc.start();
      return osc;
    };

    const tones = [makeTone(174, 0.7), makeTone(220, 0.25), makeTone(261.63, 0.18)];
    nodesRef.current = {
      stop: () => {
        tones.forEach((tone) => {
          try { tone.stop(); } catch {}
          tone.disconnect();
        });
        master.disconnect();
      }
    };
    setPlaying(true);
  };

  const stop = () => {
    nodesRef.current?.stop();
    nodesRef.current = null;
    setPlaying(false);
  };

  return (
    <button
      type="button"
      onClick={playing ? stop : start}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-white/50 bg-cream/90 px-4 py-3 text-xs font-bold uppercase tracking-[.18em] text-moss shadow-[0_18px_45px_rgba(47,58,45,.18)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
      aria-label={playing ? 'Pausar música relajante' : 'Activar música relajante'}
    >
      <Music2 className="h-4 w-4 text-honey" />
      <span className="hidden sm:inline">Ambiente</span>
      {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
    </button>
  );
}
