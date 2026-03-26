'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMove = (e) => {
      mx.current = e.clientX;
      my.current = e.clientY;
    };
    document.addEventListener('mousemove', onMove);

    const interactives = document.querySelectorAll('a, button, .project-card, .stat-card, .skill-card, .ai-card, .contact-row');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });

    let raf;
    function animate() {
      if (dot && ring) {
        dot.style.left = mx.current + 'px';
        dot.style.top = my.current + 'px';
        rx.current += (mx.current - rx.current) * 0.12;
        ry.current += (my.current - ry.current) * 0.12;
        ring.style.left = rx.current + 'px';
        ring.style.top = ry.current + 'px';
      }
      raf = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`
        #cursor { position: fixed; top: 0; left: 0; z-index: 9999; pointer-events: none; }
        #cursor-dot { width: 8px; height: 8px; background: var(--cyan); border-radius: 50%; position: absolute; transform: translate(-50%,-50%); transition: width .2s, height .2s, background .2s; }
        #cursor-ring { width: 36px; height: 36px; border: 1.5px solid rgba(0,200,255,0.5); border-radius: 50%; position: absolute; transform: translate(-50%,-50%); transition: width .3s, height .3s, border-color .3s; }
        body.hovering #cursor-dot { width: 12px; height: 12px; background: var(--orange); }
        body.hovering #cursor-ring { width: 52px; height: 52px; border-color: var(--orange); }
        @media (max-width: 768px) { #cursor { display: none; } body { cursor: auto; } }
      `}</style>
      <div id="cursor">
        <div id="cursor-dot" ref={dotRef}></div>
        <div id="cursor-ring" ref={ringRef}></div>
      </div>
    </>
  );
}
