import { useEffect, useRef } from 'react';

export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const last = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Center it initially so it's visible before the first move.
    el.style.setProperty('--mx', `${window.innerWidth / 2}px`);
    el.style.setProperty('--my', `${window.innerHeight / 2}px`);
    el.classList.add('is-active');

    const flush = () => {
      el.style.setProperty('--mx', `${last.current.x}px`);
      el.style.setProperty('--my', `${last.current.y}px`);
      frame.current = null;
    };

    const onMove = (e: MouseEvent) => {
      last.current = { x: e.clientX, y: e.clientY };
      if (frame.current === null) {
        frame.current = requestAnimationFrame(flush);
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return <div ref={ref} className="pf-spotlight" aria-hidden="true" />;
}
