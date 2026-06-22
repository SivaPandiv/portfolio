import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload, FiCode } from 'react-icons/fi';
import { fadeUp, scaleIn, staggerContainer } from '../utils/animations';
import DeveloperAvatar from './DeveloperAvatar';

const ROLES = ['Software Developer', 'Data Analyst', 'Full Stack Developer'];

const STATUS_MESSAGES = [
  '> building premium portfolio...',
  '> running data pipelines...',
  '> training ML models...',
  '> deploying to production...',
  '> analyzing datasets...',
];

export default function Hero() {
  const [roleIndex, setRoleIndex]     = useState(0);
  const [displayed, setDisplayed]     = useState('');
  const [isDeleting, setIsDeleting]   = useState(false);
  const [statusIdx, setStatusIdx]     = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(springY, [-1, 1], [8, -8]);
  const rotateY = useTransform(springX, [-1, 1], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  // Typewriter
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!isDeleting && displayed.length < current.length)
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    else if (!isDeleting && displayed.length === current.length)
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    else if (isDeleting && displayed.length > 0)
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Cycle status messages
  useEffect(() => {
    const t = setInterval(() => setStatusIdx(i => (i + 1) % STATUS_MESSAGES.length), 3000);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { val: '3',    label: 'Internships',  color: '#3b82f6' },
    { val: '7.79', label: 'CGPA',         color: '#06b6d4' },
    { val: '20+',  label: 'Tech Skills',  color: '#818cf8' },
    { val: '5+',   label: 'Projects',     color: '#34d399' },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        minHeight: '100vh', paddingTop: '80px', paddingBottom: '3rem',
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center',
      }}
    >
      {/* Background glows */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(59,130,246,0.07) 0%, transparent 80%)',
        zIndex: 0,
      }} />

      {/* Main two-column layout */}
      <div style={{
        position: 'relative', zIndex: 1, width: '100%',
        maxWidth: '1280px', margin: '0 auto', padding: '0 2.5rem',
        display: 'flex', flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap',
      }}>

        {/* ── LEFT: Content ── */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden" animate="show"
          style={{ flex: '1 1 440px', maxWidth: '560px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
        >
          {/* Greeting line */}
          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 500,
            color: 'var(--accent-secondary)', letterSpacing: '2px',
            marginBottom: '0.75rem', opacity: 0.9,
          }}>
            &gt; Hello, World! I'm
          </motion.p>

          {/* Name */}
          <motion.h1 variants={fadeUp}
            style={{ fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 900, letterSpacing: '-2.5px', lineHeight: 1, marginBottom: '0.5rem',
              textShadow: '0 0 80px rgba(59,130,246,0.15)' }}
          >
            V.{' '}
            <span className="gradient-text" style={{ animation: 'text-glow 4s ease-in-out infinite' }}>
              Siva Pandi
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={fadeUp}
            style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <FiCode size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
            <span style={{ color: '#fff' }}>{displayed}</span>
            <span className="typewriter-cursor">|</span>
          </motion.div>

          {/* Bio */}
          <motion.p variants={fadeUp} style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1rem' }}>
            Results-driven Full Stack Developer skilled in{' '}
            <span style={{ color: '#fff', fontWeight: 600 }}>Python, Java, SQL & JavaScript</span>.
            Experienced in RESTful APIs, Git, and deployment workflows — building{' '}
            <span style={{ color: '#fff', fontWeight: 600 }}>scalable, high-performance web applications</span>{' '}
            and turning raw data into actionable business insights.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}
          >
            <a href="#projects" className="btn btn-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', borderRadius: '0.6rem' }}>
              View My Work <FiArrowRight />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', borderRadius: '0.6rem' }}>
              <FiDownload /> View Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '0.85rem', marginBottom: '2rem' }}>
            {[
              { href: 'https://github.com/ssivapandi',                        icon: <FiGithub size={20} />,   title: 'GitHub',   color: '#ffffff' },
              { href: 'https://www.linkedin.com/in/siva-pandi-v-4b75492a3',  icon: <FiLinkedin size={20} />, title: 'LinkedIn', color: '#0a66c2' },
              { href: 'mailto:vsivapandi86@gmail.com',                        icon: <FiMail size={20} />,     title: 'Email',    color: '#38bdf8' },
            ].map((s) => (
              <motion.a key={s.title} href={s.href} target="_blank" rel="noreferrer"
                title={s.title}
                whileHover={{ scale: 1.18, y: -4 }}
                whileTap={{ scale: 0.92 }}
                style={{
                  width: '46px', height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '50%', background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--glass-border)', color: s.color,
                  textDecoration: 'none', transition: 'all 0.3s ease',
                  boxShadow: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${s.color}15`;
                  e.currentTarget.style.borderColor = `${s.color}60`;
                  e.currentTarget.style.boxShadow = `0 0 20px ${s.color}30`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Availability chip */}
          <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
            <span className="hero-available-chip">
              <span className="hero-pulse-dot" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div variants={staggerContainer(0.08, 0)} style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            {stats.map((s) => (
              <motion.div key={s.label} variants={scaleIn} whileHover={{ y: -5, scale: 1.05 }}
                className="stat-card"
                style={{
                  background: `${s.color}0a`, border: `1px solid ${s.color}22`,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${s.color}55`;
                  e.currentTarget.style.boxShadow = `0 8px 30px ${s.color}25`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `${s.color}22`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.3rem' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Live status bar */}
          <motion.div variants={fadeUp}>
            <div className="status-bar">
              <div className="status-bar-dot" />
              <span className="status-bar-text">
                <motion.span
                  key={statusIdx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4 }}
                >
                  {STATUS_MESSAGES[statusIdx]}
                </motion.span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Avatar ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          style={{ flex: '1 1 420px', maxWidth: '620px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <DeveloperAvatar />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 10 }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-secondary)', letterSpacing: '3px', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ width: '1.5px', height: '36px', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)', borderRadius: '2px' }}
        />
      </motion.div>
    </section>
  );
}
