import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let raf;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    // Smooth lerp follow
    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);
      glow.style.left = `${currentX}px`;
      glow.style.top  = `${currentY}px`;
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onMouseDown = () => {
      glow.style.transform = 'translate(-50%, -50%) scale(0.6)';
      glow.style.background = 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 60%)';
      setTimeout(() => {
        glow.style.transform = 'translate(-50%, -50%) scale(1)';
        glow.style.background = 'var(--cursor-glow)';
      }, 150);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onMouseDown);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onMouseDown);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
