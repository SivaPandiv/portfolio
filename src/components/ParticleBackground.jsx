import { useEffect, useRef } from 'react';

const COLORS = [
  [59,  130, 246],   // blue
  [6,   182, 212],   // cyan
  [129, 140, 248],   // indigo
  [168, 85,  247],   // purple
  [56,  189, 248],   // sky
];
const randColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

class Particle {
  constructor(width, height) { this.reset(width, height, true); }
  reset(width, height, initial = false) {
    this.x      = Math.random() * width;
    this.y      = initial ? Math.random() * height : height + 10;
    this.vx     = (Math.random() - 0.5) * 0.3;
    this.vy     = -(Math.random() * 0.4 + 0.1);
    this.radius = Math.random() * 2 + 0.5;
    this.alpha  = Math.random() * 0.5 + 0.1;
    this.rgb    = randColor();
    this.life   = 0;
    this.maxLife = Math.random() * 400 + 200;
  }
  update(width, height, mouse) {
    this.life++;
    if (this.life > this.maxLife) { this.reset(width, height); return; }
    if (mouse.x !== null) {
      const dx = mouse.x - this.x, dy = mouse.y - this.y;
      const d  = Math.sqrt(dx*dx + dy*dy);
      if (d < mouse.radius) {
        const f = (mouse.radius - d) / mouse.radius;
        this.x -= (dx / d) * f * 1.2;
        this.y -= (dy / d) * f * 1.2;
      }
    }
    if (this.x < 0 || this.x > width)  this.vx *= -1;
    if (this.y < 0 || this.y > height)  this.reset(width, height);
    this.x += this.vx;
    this.y += this.vy;
  }
  draw(ctx) {
    const lifeRatio = this.life / this.maxLife;
    const a = this.alpha * Math.sin(Math.PI * lifeRatio);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.rgb[0]},${this.rgb[1]},${this.rgb[2]},${a})`;
    ctx.fill();
  }
}

class Meteor {
  constructor(width, height) { this.spawn(width, height); }
  spawn(width, height) {
    this.x     = Math.random() * width * 1.5 - width * 0.25;
    this.y     = Math.random() * -height * 0.3;
    this.len   = Math.random() * 120 + 60;
    this.speed = Math.random() * 6 + 4;
    this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.6 + 0.3;
    this.rgb   = randColor();
    this.done  = false;
  }
  update(height) {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.alpha -= 0.005;
    if (this.alpha <= 0 || this.y > height + 20) this.done = true;
  }
  draw(ctx) {
    const tailX = this.x - Math.cos(this.angle) * this.len;
    const tailY = this.y - Math.sin(this.angle) * this.len;
    const grad  = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
    grad.addColorStop(0, `rgba(${this.rgb[0]},${this.rgb[1]},${this.rgb[2]},0)`);
    grad.addColorStop(1, `rgba(${this.rgb[0]},${this.rgb[1]},${this.rgb[2]},${this.alpha})`);
    ctx.beginPath();
    ctx.moveTo(tailX, tailY);
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle = grad;
    ctx.lineWidth   = 1.5;
    ctx.stroke();
    const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, 4);
    grd.addColorStop(0, `rgba(${this.rgb[0]},${this.rgb[1]},${this.rgb[2]},${this.alpha})`);
    grd.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.fill();
  }
}

class Orb {
  constructor(width, height) {
    this.x      = Math.random() * width;
    this.y      = Math.random() * height;
    this.r      = Math.random() * 120 + 60;
    this.rgb    = randColor();
    this.phase  = Math.random() * Math.PI * 2;
    this.speed  = 0.002 + Math.random() * 0.003;
    this.driftX = (Math.random() - 0.5) * 0.2;
    this.driftY = (Math.random() - 0.5) * 0.2;
  }
  update(width, height) {
    this.phase += this.speed;
    this.x    += this.driftX;
    this.y    += this.driftY;
    if (this.x < -this.r) this.x = width + this.r;
    if (this.x > width + this.r) this.x = -this.r;
    if (this.y < -this.r) this.y = height + this.r;
    if (this.y > height + this.r) this.y = -this.r;
  }
  draw(ctx) {
    const pulse = 0.5 + 0.5 * Math.sin(this.phase);
    const alpha = 0.04 + pulse * 0.05;
    const grd   = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * (1 + pulse * 0.3));
    grd.addColorStop(0, `rgba(${this.rgb[0]},${this.rgb[1]},${this.rgb[2]},${alpha})`);
    grd.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r * (1 + pulse * 0.3), 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.fill();
  }
}

class Ring {
  constructor(width, height) {
    this.x     = Math.random() * width;
    this.y     = Math.random() * height;
    this.r     = Math.random() * 30 + 10;
    this.rgb   = randColor();
    this.phase = Math.random() * Math.PI * 2;
    this.speed = 0.003 + Math.random() * 0.005;
    this.rotSpeed = (Math.random() - 0.5) * 0.01;
    this.rot   = Math.random() * Math.PI * 2;
    this.driftX = (Math.random() - 0.5) * 0.15;
    this.driftY = (Math.random() - 0.5) * 0.15;
    this.sides = [3, 4, 6][Math.floor(Math.random() * 3)];
  }
  update(width, height) {
    this.phase += this.speed;
    this.rot   += this.rotSpeed;
    this.x     += this.driftX;
    this.y     += this.driftY;
    if (this.x < -50) this.x = width + 50;
    if (this.x > width + 50) this.x = -50;
    if (this.y < -50) this.y = height + 50;
    if (this.y > height + 50) this.y = -50;
  }
  draw(ctx) {
    const pulse = 0.5 + 0.5 * Math.sin(this.phase);
    const alpha = 0.04 + pulse * 0.08;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.beginPath();
    for (let i = 0; i < this.sides; i++) {
      const a = (i / this.sides) * Math.PI * 2;
      const r = this.r * (1 + pulse * 0.2);
      i === 0 ? ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r)
              : ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.strokeStyle = `rgba(${this.rgb[0]},${this.rgb[1]},${this.rgb[2]},${alpha})`;
    ctx.lineWidth   = 1;
    ctx.stroke();
    ctx.restore();
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width  = (canvas.width  = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let time   = 0;

    const mouse = { x: null, y: null, radius: 180 };

    const PARTICLE_COUNT = Math.min(60, Math.floor((width * height) / 18000));
    const METEOR_MAX = 4;
    const ORB_COUNT = 5;
    const RING_COUNT = 6;
    
    const sparks = [];
    const handleMouseSpark = (e) => {
      for (let i = 0; i < 2; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 0.5;
        sparks.push({
          x: e.clientX, y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 0.8, radius: Math.random() * 2 + 0.5,
          rgb: randColor()
        });
      }
    };
    window.addEventListener('mousemove', handleMouseSpark);

    const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle(width, height));
    const meteors   = [];
    let meteorTimer = 0;
    const orbs      = Array.from({ length: ORB_COUNT }, () => new Orb(width, height));
    const rings     = Array.from({ length: RING_COUNT }, () => new Ring(width, height));

    const handleResize = () => {
      if (!canvas) return;
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };

    window.addEventListener('resize',     handleResize);
    window.addEventListener('mousemove',  handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const CONNECT_DIST = 140;
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i], p2 = particles[j];
          const dx = p1.x - p2.x, dy = p1.y - p2.y;
          const d  = Math.sqrt(dx*dx + dy*dy);
          if (d < CONNECT_DIST) {
            const a = (1 - d / CONNECT_DIST) * 0.12;
            const c = COLORS[Math.floor((time / 120 + i) % COLORS.length)];
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${c[0]},${c[1]},${c[2]},${a})`;
            ctx.lineWidth   = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      orbs.forEach(o => { o.update(width, height); o.draw(ctx); });
      rings.forEach(r => { r.update(width, height); r.draw(ctx); });
      particles.forEach(p => { p.update(width, height, mouse); p.draw(ctx); });
      drawConnections();

      meteorTimer++;
      if (meteorTimer > 180 && meteors.length < METEOR_MAX) {
        meteors.push(new Meteor(width, height));
        meteorTimer = 0;
      }
      for (let i = meteors.length - 1; i >= 0; i--) {
        meteors[i].update(height);
        meteors[i].draw(ctx);
        if (meteors[i].done) meteors.splice(i, 1);
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x    += s.vx;
        s.y    += s.vy;
        s.vy   += 0.05;
        s.alpha -= 0.025;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.rgb[0]},${s.rgb[1]},${s.rgb[2]},${s.alpha})`;
        ctx.fill();
        if (s.alpha <= 0) sparks.splice(i, 1);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize',      handleResize);
      window.removeEventListener('mousemove',   handleMouseMove);
      window.removeEventListener('mousemove',   handleMouseSpark);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        display: 'block'
      }}
    />
  );
}
