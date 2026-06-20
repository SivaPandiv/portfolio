import { useEffect, useRef } from 'react';

export default function ClickEffect() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Create outer ripple ring
      const ring = document.createElement('div');
      ring.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 8px;
        height: 8px;
        transform: translate(-50%, -50%) scale(1);
        border-radius: 50%;
        border: 2px solid rgba(56, 189, 248, 0.9);
        pointer-events: none;
        z-index: 9999;
        animation: click-ring 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      `;

      // Create inner dot burst
      const dot = document.createElement('div');
      dot.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 10px;
        height: 10px;
        transform: translate(-50%, -50%) scale(1);
        border-radius: 50%;
        background: radial-gradient(circle, rgba(56, 189, 248, 1) 0%, rgba(59, 130, 246, 0.8) 50%, transparent 80%);
        pointer-events: none;
        z-index: 9999;
        animation: click-dot 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      `;

      // Create particles
      const colors = ['#38bdf8', '#3b82f6', '#818cf8', '#06b6d4', '#a855f7'];
      for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        const angle = (i / 6) * 360;
        const distance = 30 + Math.random() * 20;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.cssText = `
          position: fixed;
          left: ${x}px;
          top: ${y}px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: ${color};
          pointer-events: none;
          z-index: 9999;
          animation: click-particle-${i} 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          --dx: ${Math.cos((angle * Math.PI) / 180) * distance}px;
          --dy: ${Math.sin((angle * Math.PI) / 180) * distance}px;
        `;
        particle.style.setProperty('--dx', `${Math.cos((angle * Math.PI) / 180) * distance}px`);
        particle.style.setProperty('--dy', `${Math.sin((angle * Math.PI) / 180) * distance}px`);
        particle.style.animation = 'none';
        particle.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease';

        document.body.appendChild(particle);
        requestAnimationFrame(() => {
          particle.style.transform = `translate(calc(-50% + ${Math.cos((angle * Math.PI) / 180) * distance}px), calc(-50% + ${Math.sin((angle * Math.PI) / 180) * distance}px)) scale(0)`;
          particle.style.opacity = '0';
        });
        setTimeout(() => particle.remove(), 700);
      }

      document.body.appendChild(ring);
      document.body.appendChild(dot);
      setTimeout(() => { ring.remove(); dot.remove(); }, 700);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div ref={containerRef} aria-hidden="true">
      <style>{`
        @keyframes click-ring {
          0%   { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(6); opacity: 0; }
        }
        @keyframes click-dot {
          0%   { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50%  { transform: translate(-50%, -50%) scale(1.8); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
