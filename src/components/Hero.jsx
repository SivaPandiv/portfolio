import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { fadeUp, scaleIn, staggerContainer } from '../utils/animations';
import DeveloperAvatar from './DeveloperAvatar';

const ROLES = ['Software Developer', 'Data Analytics Specialist', 'Data Scientist'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

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

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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

  const stats = [
    { val: '3',    label: 'Internship',  color: '#3b82f6' },
    { val: '7.79', label: 'BE CGPA',     color: '#06b6d4' },
    { val: '20+',  label: 'Tech Skills', color: '#818cf8' },
    { val: '5+',   label: 'Projects',    color: '#34d399' },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '3rem',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background glows */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(56,189,248,0.06) 0%, transparent 80%)',
        zIndex: 0,
      }} />

      {/* ── TWO-COLUMN LAYOUT ── */}
      <div style={{
        position: 'relative', zIndex: 1,
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2.5rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '3rem',
        flexWrap: 'wrap',
      }}>

        {/* ── LEFT: Details ── */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="show"
          style={{
            flex: '1 1 440px',
            maxWidth: '560px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* Availability chip */}
          <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.4rem 1rem', borderRadius: '2rem',
              background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)',
              fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)',
            }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: 'var(--accent-primary)',
                boxShadow: '0 0 10px var(--accent-primary)',
                animation: 'heroPulse 2s ease-in-out infinite',
              }} />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={fadeUp}
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '1rem' }}>
            V. <span className="gradient-text">Siva Pandi</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={fadeUp}
            style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            I'm a <span style={{ color: '#fff' }}>{displayed}</span>
            <span className="typewriter-cursor">|</span>
          </motion.div>

          {/* Bio */}
          <motion.p variants={fadeUp} className="text-muted"
            style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.05rem' }}>
            Transforming complex data into actionable insights and building scalable software solutions.
            Specializing in{' '}
            <span style={{ color: '#fff', fontWeight: 600 }}>Data Analytics, Data Science</span>, and{' '}
            <span style={{ color: '#fff', fontWeight: 600 }}>Premium Software Development</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a href="#projects" className="btn btn-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none', borderRadius: '0.5rem' }}>
              View My Work <FiArrowRight />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none', borderRadius: '0.5rem' }}>
              <FiDownload /> Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { href: 'https://github.com/SivaPandiv',                       icon: <FiGithub size={22} />,   title: 'GitHub',   color: '#ffffff' },
              { href: 'https://www.linkedin.com/in/siva-pandi-v-4b75492a3', icon: <FiLinkedin size={22} />, title: 'LinkedIn', color: '#0a66c2' },
              { href: 'mailto:vsivapandi86@gmail.com',                       icon: <FiMail size={22} />,     title: 'Email',    color: '#38bdf8' },
            ].map((s) => (
              <motion.a key={s.title} href={s.href} target="_blank" rel="noreferrer"
                title={s.title}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.92 }}
                style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: s.color, textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div variants={staggerContainer(0.08, 0)}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {stats.map((s) => (
              <motion.div key={s.label} variants={scaleIn}
                whileHover={{ y: -4 }}
                style={{ padding: '0.9rem 1.3rem', borderRadius: '1rem', background: `${s.color}0a`, border: `1px solid ${s.color}25`, textAlign: 'center', minWidth: '90px', transition: 'background 0.3s' }}>
                <div style={{ fontSize: '1.7rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.8px', marginTop: '0.4rem' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Interactive Avatar ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          style={{
            flex: '1 1 420px',
            maxWidth: '620px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <DeveloperAvatar />
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', zIndex: 10 }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }} />
      </motion.div>

    </section>
  );
}
