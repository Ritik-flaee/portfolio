'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Magnetic({ children }) {
  const magneticRef = useRef(null);

  useEffect(() => {
    const el = magneticRef.current;
    if (!el) return;

    const onMM = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = el.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      gsap.to(el, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 1,
        ease: "power2.out"
      });
    };

    const onML = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)"
      });
    };

    el.addEventListener("mousemove", onMM);
    el.addEventListener("mouseleave", onML);

    return () => {
      el.removeEventListener("mousemove", onMM);
      el.removeEventListener("mouseleave", onML);
    };
  }, []);

  return <div ref={magneticRef} style={{ display: 'inline-block' }}>{children}</div>;
}
