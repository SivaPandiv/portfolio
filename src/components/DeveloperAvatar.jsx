import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function DeveloperAvatar() {
  const [isTypingFast, setIsTypingFast] = useState(false);

  const handleAvatarClick = () => {
    if (isTypingFast) return;
    setIsTypingFast(true);
    setTimeout(() => setIsTypingFast(false), 3000);
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics
  const springX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 22 });

  // Pupil tracking (eyes follow mouse)
  const pupilX = useTransform(springX, [-1, 1], [-6, 6]);
  const pupilY = useTransform(springY, [-1, 1], [-5, 5]);

  // Head tilt and movement - refined for a professional, natural look
  const headRotate = useTransform(springX, [-1, 1], [-5, 5]);
  const headX = useTransform(springX, [-1, 1], [-12, 12]);
  const headY = useTransform(springY, [-1, 1], [-8, 8]);

  // Subtle body sway
  const bodyRotateY = useTransform(springX, [-1, 1], [-4, 4]);
  const bodyX      = useTransform(springX, [-1, 1], [-6, 6]);
  const bodyY      = useTransform(springY, [-1, 1], [-3, 3]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth)  * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div style={{
      width: '100%', maxWidth: '800px', height: 'auto',
      position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',
      marginLeft: 'auto',
      perspective: '900px',          // ← enables 3D perspective for the whole scene
    }}>
      {/* Outer wrapper that tilts the WHOLE avatar in 3D */}
      <motion.div
        onClick={handleAvatarClick}
        style={{
          width: '100%',
          transformStyle: 'preserve-3d',
          rotateY: bodyRotateY,
          x: bodyX,
          y: bodyY,
          cursor: 'pointer',
        }}
      >
        <svg viewBox="0 0 800 520" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
          <defs>
            {/* Skin gradient */}
            <radialGradient id="skinGrad" cx="40%" cy="35%" r="65%">
              <stop offset="0%"   stopColor="#fce0d0" />
              <stop offset="70%"  stopColor="#f5c4ae" />
              <stop offset="100%" stopColor="#e5a890" />
            </radialGradient>
            {/* Chair gradient */}
            <linearGradient id="chairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#c2cfe0" />
              <stop offset="100%" stopColor="#8fa0bc" />
            </linearGradient>
            {/* Desk gradient */}
            <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="#b8c6db" />
              <stop offset="100%" stopColor="#8fa0bc" />
            </linearGradient>
            {/* Laptop gradient */}
            <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#c2cfe0" />
              <stop offset="100%" stopColor="#8fa0bc" />
            </linearGradient>
            {/* Screen glow */}
            <radialGradient id="laptopScreen" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#6ee7f7" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0"    />
            </radialGradient>
            {/* Backdrop glow */}
            <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#38bdf8" stopOpacity="0.12" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            {/* Hair */}
            <radialGradient id="hairGrad" cx="50%" cy="30%" r="70%">
              <stop offset="0%"   stopColor="#1e2d3d" />
              <stop offset="100%" stopColor="#0a1420" />
            </radialGradient>
            {/* Mug */}
            <linearGradient id="mugGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#c2cfe0" />
              <stop offset="100%" stopColor="#8fa0bc" />
            </linearGradient>
            {/* Filters */}
            <filter id="bodyShad">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.25" />
            </filter>
            <filter id="logoGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="softShad">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* ── BACKGROUND GLOW ── */}
          <ellipse cx="400" cy="280" rx="380" ry="220" fill="url(#bgGlow)" />

          {/* ── CHAIR BACK ── */}
          <rect x="255" y="85" width="290" height="380" rx="40" fill="url(#chairGrad)" filter="url(#bodyShad)" />
          <rect x="270" y="98" width="130" height="18" rx="9" fill="rgba(255,255,255,0.18)" />
          <line x1="400" y1="110" x2="400" y2="440" stroke="rgba(0,0,0,0.07)" strokeWidth="3" />

          {/* ── SHIRT / BODY ── */}
          <path d="M 215 512 Q 300 260 400 255 Q 500 260 585 512 Z" fill="#1a2130" filter="url(#softShad)" />
          {/* Shirt collar */}
          <path d="M 368 256 L 400 280 L 432 256 Z" fill="#d6e1f0" />

          {/* ── HEAD GROUP — 3D mouse-tracking ── */}
          {/*
              perspective is set on the outer <div>.
              originX/originY must be in SVG units (px),
              centred on the face pivot point.
          */}
          <motion.g
            style={{
              originX: '400px',
              originY: '190px',
              rotate: headRotate,
              x: headX,
              y: headY,
            }}
          >
            {/* Neck */}
            <path d="M 378 240 L 422 240 L 416 195 Q 400 192 384 195 Z" fill="url(#skinGrad)" />

            {/* Ear left */}
            <ellipse cx="305" cy="158" rx="18" ry="22" fill="url(#skinGrad)" />
            <ellipse cx="310" cy="158" rx="8"  ry="13" fill="#e5a890" opacity="0.5" />

            {/* Ear right */}
            <ellipse cx="495" cy="158" rx="18" ry="22" fill="url(#skinGrad)" />
            <ellipse cx="490" cy="158" rx="8"  ry="13" fill="#e5a890" opacity="0.5" />

            {/* Face base */}
            <ellipse cx="400" cy="160" rx="95" ry="105" fill="url(#skinGrad)" />

            {/* Face shading */}
            <ellipse cx="400" cy="190" rx="70" ry="60" fill="rgba(200,110,80,0.05)" />

            {/* Cheeks */}
            <circle cx="345" cy="190" r="22" fill="#e9a090" opacity="0.35" />
            <circle cx="455" cy="190" r="22" fill="#e9a090" opacity="0.35" />

            {/* ── HAIR ── */}
            <ellipse cx="400" cy="90" rx="100" ry="65" fill="url(#hairGrad)" />
            <path d="M 305 130 Q 300 80 340 65 Q 400 40 460 65 Q 500 80 495 130 Q 490 80 400 65 Q 310 80 305 130 Z" fill="url(#hairGrad)" />
            <path d="M 310 120 Q 340 58 400 72 Q 450 65 480 80 Q 500 95 496 125 Q 470 88 430 88 Q 395 82 358 100 Q 332 112 310 120 Z" fill="#0e1a26" />
            <path d="M 355 70 Q 390 56 415 68 Q 395 58 355 70 Z" fill="rgba(100,150,200,0.2)" />

            {/* ── EYEBROWS ── */}
            <path d="M 343 132 Q 361 122 379 130" fill="transparent" stroke="#0e1a26" strokeWidth="6.5" strokeLinecap="round" />
            <path d="M 421 130 Q 439 122 457 132" fill="transparent" stroke="#0e1a26" strokeWidth="6.5" strokeLinecap="round" />

            {/* ── EYES ── */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
              style={{ originY: '154px' }}
            >
              {/* Sclera */}
              <circle cx="362" cy="154" r="14" fill="#fff" />
              <circle cx="438" cy="154" r="14" fill="#fff" />
              {/* Iris — tracks mouse */}
              <motion.circle cx="362" cy="154" r="8"   fill="#1a2d40" style={{ x: pupilX, y: pupilY }} />
              <motion.circle cx="438" cy="154" r="8"   fill="#1a2d40" style={{ x: pupilX, y: pupilY }} />
              {/* Pupil */}
              <motion.circle cx="362" cy="154" r="4.5" fill="#050e18" style={{ x: pupilX, y: pupilY }} />
              <motion.circle cx="438" cy="154" r="4.5" fill="#050e18" style={{ x: pupilX, y: pupilY }} />
              {/* Sparkles */}
              <motion.circle cx="358" cy="149" r="3"   fill="rgba(255,255,255,0.95)" style={{ x: pupilX, y: pupilY }} />
              <motion.circle cx="434" cy="149" r="3"   fill="rgba(255,255,255,0.95)" style={{ x: pupilX, y: pupilY }} />
              <motion.circle cx="366" cy="157" r="1.5" fill="rgba(255,255,255,0.6)"  style={{ x: pupilX, y: pupilY }} />
              <motion.circle cx="442" cy="157" r="1.5" fill="rgba(255,255,255,0.6)"  style={{ x: pupilX, y: pupilY }} />
            </motion.g>

            {/* ── NOSE ── */}
            <path d="M 400 168 Q 398 190 390 196 Q 400 200 410 196 Q 402 190 400 168 Z" fill="rgba(200,110,80,0.25)" />

            {/* ── MOUTH ── */}
            <path d="M 382 216 Q 400 232 418 216" fill="transparent" stroke="#c07060" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 388 216 Q 400 220 412 216" fill="transparent" stroke="#a05545" strokeWidth="2"   strokeLinecap="round" />
          </motion.g>

          {/* ── DESK SURFACE ── */}
          <rect x="30"  y="445" width="740" height="22" rx="5" fill="#9aadc4" />
          <path d="M 20 467 L 780 467 L 800 510 L 0 510 Z" fill="url(#deskGrad)" />
          <rect x="0"   y="506" width="800" height="14" rx="4" fill="#7f93ae" />

          {/* ── LAPTOP ── */}
          <path d="M 270 447 L 530 447 L 508 235 Q 507 226 498 226 L 302 226 Q 293 226 292 235 Z" fill="url(#laptopGrad)" filter="url(#softShad)" />
          <path d="M 286 442 L 514 442 L 494 240 Q 493 234 486 234 L 314 234 Q 307 234 306 240 Z" fill="#0e1a26" />
          <path d="M 286 442 L 514 442 L 494 240 Q 493 234 486 234 L 314 234 Q 307 234 306 240 Z" fill="url(#laptopScreen)" />
          {/* Animated code lines */}
          <motion.g 
            animate={{ opacity: [0.6, 1, 0.6] }} 
            transition={{ duration: isTypingFast ? 0.4 : 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <rect x="322" y="260" width="80"  height="5" rx="2.5" fill="#38bdf8" opacity="0.8" />
            <rect x="322" y="275" width="130" height="5" rx="2.5" fill="#34d399" opacity="0.8" />
            <rect x="322" y="290" width="100" height="5" rx="2.5" fill="#f472b6" opacity="0.8" />
            <rect x="322" y="305" width="90"  height="5" rx="2.5" fill="#818cf8" opacity="0.8" />
            <rect x="322" y="320" width="60"  height="5" rx="2.5" fill="#38bdf8" opacity="0.6" />
            <rect x="322" y="335" width="110" height="5" rx="2.5" fill="#34d399" opacity="0.6" />
            <rect x="322" y="350" width="80"  height="5" rx="2.5" fill="#f59e0b" opacity="0.6" />
            <rect x="322" y="365" width="140" height="5" rx="2.5" fill="#818cf8" opacity="0.6" />
            <rect x="322" y="380" width="70"  height="5" rx="2.5" fill="#38bdf8" opacity="0.4" />
            <rect x="322" y="395" width="120" height="5" rx="2.5" fill="#34d399" opacity="0.4" />
            <rect x="322" y="410" width="90"  height="5" rx="2.5" fill="#f472b6" opacity="0.4" />
          </motion.g>
          <circle cx="400" cy="430" r="12" fill="#d6e1f0" filter="url(#logoGlow)" />
          <path d="M 258 447 L 542 447 L 558 467 L 242 467 Z" fill="#9aadc4" />
          <rect x="360" y="453" width="80" height="8" rx="3" fill="#8096b0" />

          {/* ── LEFT SIDE: PEN HOLDER + BOOKS ── */}
          <rect x="80"  y="425" width="130" height="22" rx="5" fill="#1a2130" />
          <rect x="90"  y="403" width="110" height="22" rx="4" fill="#c2cfe0" />
          <rect x="100" y="383" width="90"  height="20" rx="3" fill="#8fa0bc" />
          <line x1="100" y1="403" x2="100" y2="425" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
          <line x1="135" y1="383" x2="135" y2="403" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
          <rect x="140" y="325" width="50"  height="100" rx="8" fill="#8fa0bc" />
          <rect x="140" y="325" width="50"  height="12"  rx="6" fill="#7f93ae" />
          <line x1="152" y1="325" x2="140" y2="255" stroke="#f5f5f5" strokeWidth="5" strokeLinecap="round" />
          <line x1="163" y1="325" x2="163" y2="248" stroke="#f5f5f5" strokeWidth="5" strokeLinecap="round" />
          <line x1="174" y1="325" x2="186" y2="260" stroke="#f5f5f5" strokeWidth="5" strokeLinecap="round" />
          <circle cx="140" cy="255" r="3" fill="#f59e0b" />
          <circle cx="163" cy="248" r="3" fill="#38bdf8" />
          <circle cx="186" cy="260" r="3" fill="#f472b6" />

          {/* ── RIGHT SIDE: CAMERA + MUG ── */}
          <g transform="translate(580,385)">
            <rect x="0"  y="12" width="70" height="45" rx="6" fill="#1a2130" />
            <circle cx="28" cy="35" r="18" fill="#0a1420" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="28" cy="35" r="12" fill="#0d1a28" />
            <circle cx="28" cy="35" r="7"  fill="#050e18" />
            <circle cx="25" cy="32" r="2.5" fill="rgba(255,255,255,0.25)" />
            <rect x="54" y="14"  width="12" height="8"  rx="2" fill="#8fa0bc" />
            <rect x="65" y="20"  width="22" height="30" rx="3" fill="#2e3d50" />
            <rect x="87" y="14"  width="12" height="42" rx="2" fill="#8fa0bc" />
          </g>

          {/* Coffee Mug */}
          <rect x="690" y="355" width="58" height="80" rx="8" fill="url(#mugGrad)" />
          <path d="M 748 375 Q 782 375 782 395 Q 782 415 748 415" fill="transparent" stroke="#9aadc4" strokeWidth="10" strokeLinecap="round" />
          <rect x="690" y="350" width="58" height="12" rx="6" fill="#c2cfe0" />
          <ellipse cx="719" cy="356" rx="25" ry="5" fill="#7a5234" opacity="0.7" />
          {/* Steam */}
          <motion.g
            animate={{ 
              y: [0, isTypingFast ? -25 : -8, 0], 
              opacity: [0.4, isTypingFast ? 1 : 0.8, 0.4] 
            }}
            transition={{ duration: isTypingFast ? 0.8 : 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M 710 342 Q 713 330 710 318" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 720 338 Q 724 325 720 312" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 730 342 Q 733 330 730 318" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
          </motion.g>

        </svg>
      </motion.div>
    </div>
  );
}
