import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function RobotCursor() {
  const robotRef = useRef(null);
  const [eyeAngle, setEyeAngle] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [mood, setMood] = useState('neutral'); // neutral | happy | thinking

  const rawX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const rawY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  // Smooth spring following — robot lags slightly behind cursor
  const x = useSpring(rawX, { stiffness: 80, damping: 20, mass: 1.2 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20, mass: 1.2 });

  useEffect(() => {
    let idleTimer;
    let blinkInterval;

    const onMove = (e) => {
      rawX.set(e.clientX - 36); // offset so robot is beside cursor
      rawY.set(e.clientY - 80);
      setIsIdle(false);
      clearTimeout(idleTimer);

      // Calculate angle for eye direction (from robot center to cursor)
      if (robotRef.current) {
        const rect = robotRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
        setEyeAngle(angle);
      }

      // Mood based on cursor speed
      setMood('happy');
      idleTimer = setTimeout(() => {
        setIsIdle(true);
        setMood('thinking');
      }, 2000);
    };

    // Random blink
    blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 2500 + Math.random() * 2000);

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      clearInterval(blinkInterval);
      clearTimeout(idleTimer);
    };
  }, [rawX, rawY]);

  // Eye pupil offset based on angle (clamped to small radius)
  const pupilR = 3;
  const pupilX = pupilR * Math.cos((eyeAngle * Math.PI) / 180);
  const pupilY = pupilR * Math.sin((eyeAngle * Math.PI) / 180);

  return (
    <motion.div
      ref={robotRef}
      style={{ x, y, position: 'fixed', top: 0, left: 0, zIndex: 9000, pointerEvents: 'none', width: 72, height: 88 }}
    >
      {/* Idle float when no movement */}
      <motion.div
        animate={isIdle ? { y: [0, -6, 0] } : { y: 0 }}
        transition={{ duration: 2, repeat: isIdle ? Infinity : 0, ease: 'easeInOut' }}
      >
        <svg width="72" height="88" viewBox="0 0 72 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="robotBody" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="100%" stopColor="#0a1628" />
            </radialGradient>
            <radialGradient id="robotHead" cx="45%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#1e3a5f" />
              <stop offset="100%" stopColor="#0d1f38" />
            </radialGradient>
            <filter id="robotGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <linearGradient id="antennaGrd" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Shadow */}
          <ellipse cx="36" cy="86" rx="18" ry="4" fill="rgba(0,0,0,0.3)" />

          {/* Legs */}
          <rect x="20" y="68" width="10" height="14" rx="4" fill="#0d1f38" />
          <rect x="42" y="68" width="10" height="14" rx="4" fill="#0d1f38" />
          {/* Foot glow */}
          <rect x="19" y="78" width="12" height="4" rx="2" fill="rgba(56,189,248,0.3)" />
          <rect x="41" y="78" width="12" height="4" rx="2" fill="rgba(56,189,248,0.3)" />

          {/* Body */}
          <rect x="14" y="40" width="44" height="32" rx="8" fill="url(#robotBody)" />
          <rect x="14" y="40" width="44" height="32" rx="8" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
          {/* Body panel lines */}
          <line x1="26" y1="46" x2="26" y2="66" stroke="rgba(56,189,248,0.12)" strokeWidth="1" />
          <line x1="46" y1="46" x2="46" y2="66" stroke="rgba(56,189,248,0.12)" strokeWidth="1" />
          {/* Chest light */}
          <motion.rect
            x="30" y="52" width="12" height="8" rx="3"
            fill={mood === 'happy' ? '#34d399' : mood === 'thinking' ? '#f59e0b' : '#38bdf8'}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: `drop-shadow(0 0 4px ${mood === 'happy' ? '#34d399' : mood === 'thinking' ? '#f59e0b' : '#38bdf8'})` }}
          />
          {/* Body glow rim */}
          <rect x="14" y="40" width="44" height="6" rx="8" fill="rgba(56,189,248,0.08)" />

          {/* Arms */}
          <rect x="2" y="44" width="10" height="20" rx="5" fill="#0d1f38" />
          <rect x="60" y="44" width="10" height="20" rx="5" fill="#0d1f38" />
          {/* Arm joints */}
          <circle cx="7" cy="44" r="4" fill="#0a1628" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
          <circle cx="65" cy="44" r="4" fill="#0a1628" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />

          {/* Neck */}
          <rect x="30" y="34" width="12" height="8" rx="3" fill="#0d1f38" />

          {/* Head */}
          <rect x="10" y="8" width="52" height="28" rx="10" fill="url(#robotHead)" />
          <rect x="10" y="8" width="52" height="28" rx="10"
            stroke="rgba(56,189,248,0.5)" strokeWidth="1.5" />
          {/* Head glow top edge */}
          <rect x="10" y="8" width="52" height="6" rx="10" fill="rgba(56,189,248,0.08)" />

          {/* Antenna */}
          <line x1="36" y1="8" x2="36" y2="2" stroke="url(#antennaGrd)" strokeWidth="2" strokeLinecap="round" />
          <motion.circle
            cx="36" cy="2" r="3"
            fill="#38bdf8"
            animate={{ r: [2.5, 4, 2.5], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 0 5px #38bdf8)' }}
          />

          {/* LEFT EYE */}
          <rect x="16" y="14" width="16" height="14" rx="5"
            fill="rgba(5,10,25,0.9)" stroke="rgba(56,189,248,0.6)" strokeWidth="1.2" />
          {/* Eye scan line */}
          <motion.rect
            x="16" y={isBlinking ? '14' : '21'} width="16" height={isBlinking ? '14' : '2'}
            rx="1" fill={isBlinking ? 'rgba(56,189,248,0.4)' : 'transparent'}
            animate={isBlinking ? {} : {}}
          />
          {!isBlinking && (
            <>
              <circle cx={24 + pupilX} cy={21 + pupilY} r="4" fill="#38bdf8"
                style={{ filter: 'drop-shadow(0 0 4px #38bdf8)' }} />
              <circle cx={24 + pupilX} cy={21 + pupilY} r="2" fill="#fff" opacity="0.9" />
              <circle cx={25.5 + pupilX} cy={19.5 + pupilY} r="1" fill="rgba(255,255,255,0.7)" />
            </>
          )}

          {/* RIGHT EYE */}
          <rect x="40" y="14" width="16" height="14" rx="5"
            fill="rgba(5,10,25,0.9)" stroke="rgba(56,189,248,0.6)" strokeWidth="1.2" />
          {!isBlinking && (
            <>
              <circle cx={48 + pupilX} cy={21 + pupilY} r="4" fill="#38bdf8"
                style={{ filter: 'drop-shadow(0 0 4px #38bdf8)' }} />
              <circle cx={48 + pupilX} cy={21 + pupilY} r="2" fill="#fff" opacity="0.9" />
              <circle cx={49.5 + pupilX} cy={19.5 + pupilY} r="1" fill="rgba(255,255,255,0.7)" />
            </>
          )}

          {/* Mouth / expression */}
          {mood === 'happy' ? (
            <path d="M 26 33 Q 36 38 46 33" stroke="#34d399" strokeWidth="1.8" fill="none"
              strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 3px #34d399)' }} />
          ) : mood === 'thinking' ? (
            <line x1="27" y1="35" x2="45" y2="35" stroke="#f59e0b" strokeWidth="1.8"
              strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 3px #f59e0b)' }} />
          ) : (
            <path d="M 27 35 Q 36 33 45 35" stroke="#38bdf8" strokeWidth="1.8" fill="none"
              strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 3px #38bdf8)' }} />
          )}

          {/* Side ear ports */}
          <circle cx="10" cy="22" r="3" fill="#0a1628" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
          <circle cx="62" cy="22" r="3" fill="#0a1628" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
        </svg>

        {/* Speech bubble when idle */}
        {isIdle && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            style={{
              position: 'absolute', top: '-36px', left: '50%', transform: 'translateX(-20%)',
              background: 'rgba(10,20,40,0.95)', border: '1px solid rgba(56,189,248,0.4)',
              borderRadius: '8px', padding: '4px 10px',
              fontSize: '11px', color: '#38bdf8', fontFamily: 'monospace', fontWeight: 700,
              whiteSpace: 'nowrap', pointerEvents: 'none',
            }}
          >
            Coding... 🤖
            <div style={{ position: 'absolute', bottom: '-6px', left: '16px', width: '10px', height: '6px', borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '6px solid rgba(56,189,248,0.4)' }} />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
