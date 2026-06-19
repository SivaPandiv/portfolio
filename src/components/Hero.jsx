import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCode, FiDatabase, FiCpu, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import profileImg from '../assets/coder_boy_avatar.png';
import { fadeUp, fadeLeft, scaleIn, staggerContainer } from '../utils/animations';

const ROLES = ['Software Developer', 'Data Scientist', 'Full Stack Developer'];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('avatar');
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const stats = [
    { val: '3+',   label: 'Internships',  color: '#3b82f6' },
    { val: '7.79', label: 'BE CGPA',      color: '#06b6d4' },
    { val: '20+',  label: 'Tech Skills',  color: '#818cf8' },
    { val: '6+',   label: 'Projects',     color: '#34d399' },
  ];

  return (
    <section className="section flex items-center justify-center"
      style={{ minHeight: '100vh', paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1
      }}>

        {/* ── Left Content ── */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden" animate="show"
          style={{ textAlign: 'left' }}
        >
          {/* Availability chip */}
          <motion.div variants={fadeUp} style={{ marginBottom: '1.25rem' }}>
            <span className="hero-available-chip">
              <span className="hero-pulse-dot" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={fadeUp} className="text-5xl"
            style={{ marginBottom: '0.75rem', fontWeight: 800, letterSpacing: '-1.5px' }}>
            V. <span className="gradient-text">Siva Pandi</span>
          </motion.h1>

          {/* Typewriter role line */}
          <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem', minHeight: '2.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>I'm a</span>
            <span className="typewriter-text">
              {displayed}
              <span className="typewriter-cursor">|</span>
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p variants={fadeUp} className="text-muted"
            style={{ marginBottom: '2rem', maxWidth: '520px', lineHeight: '1.8', fontSize: '0.97rem' }}>
            Results-driven developer skilled in{' '}
            <span className="hero-highlight">HTML, CSS, JavaScript, Python</span> and relational databases.
            Passionate about <span className="hero-highlight">Data Science & ML</span>, building
            scalable web apps and delivering clean, impactful solutions.
          </motion.p>

          {/* Stats row */}
          <motion.div variants={staggerContainer(0.1, 0)}
            style={{ display: 'flex', gap: '1rem', marginBottom: '2.25rem', flexWrap: 'wrap' }}>
            {stats.map((s) => (
              <motion.div key={s.label} variants={scaleIn}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: '0.6rem 1.1rem', borderRadius: '0.85rem',
                  background: `${s.color}0d`,
                  border: `1px solid ${s.color}25`,
                  minWidth: '80px', textAlign: 'center'
                }}>
                <span style={{ fontSize: '1.45rem', fontWeight: 800, color: s.color, lineHeight: 1.1 }}>{s.val}</span>
                <span style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.6px', marginTop: '0.2rem' }}>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 items-center">
            <div className="flex gap-2 flex-wrap items-center">
              <a href="#projects" className="btn btn-primary flex items-center gap-1">
                View My Work <FiArrowRight />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline flex items-center gap-1">
                <FiDownload /> Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-2 items-center" style={{ paddingLeft: '0.25rem' }}>
              {[
                { href: 'https://github.com/SivaPandiv', icon: <FiGithub />, title: 'GitHub', color: '#ffffff' },
                { href: 'https://www.linkedin.com/in/siva-pandi-v-4b75492a3', icon: <FiLinkedin />, title: 'LinkedIn', color: '#0a66c2' },
                { href: 'mailto:vsivapandi86@gmail.com', icon: <FiMail />, title: 'Email', color: '#38bdf8' },
              ].map((s) => (
                <motion.a key={s.title} href={s.href} target="_blank" rel="noreferrer"
                  title={s.title}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  className="hero-social-btn">
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: Avatar ── */}
        <motion.div
          variants={scaleIn} initial="hidden" animate="show"
          transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%', maxWidth: '360px' }}>
            <div className="scanner-container">
              {activeTab === 'avatar' && (
                <>
                  <div className="scanner-ring-dashed" />
                  <div className="scanner-ring-solid" />
                  <div className="scanner-corners">
                    <div className="scanner-corner scanner-corner-tl" />
                    <div className="scanner-corner scanner-corner-tr" />
                    <div className="scanner-corner scanner-corner-bl" />
                    <div className="scanner-corner scanner-corner-br" />
                  </div>

                  <motion.div className="floating-badge" style={{ top: '5%', left: '-12%' }}
                    animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}>
                    <FiCode style={{ color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Python</span>
                  </motion.div>

                  <motion.div className="floating-badge" style={{ bottom: '15%', right: '-12%' }}
                    animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}>
                    <FiDatabase style={{ color: 'var(--accent-secondary)' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>SQL & DB</span>
                  </motion.div>

                  <motion.div className="floating-badge" style={{ bottom: '-5%', left: '10%' }}
                    animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}>
                    <FiCpu style={{ color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Data Scientist</span>
                  </motion.div>

                  <motion.div className="floating-badge" style={{ top: '22%', right: '-15%' }}
                    animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.7 }}>
                    <FiCode style={{ color: 'var(--accent-rose)' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>React & JS</span>
                  </motion.div>
                </>
              )}

              <div style={{
                width: '100%', height: '100%', borderRadius: '30%', padding: '6px',
                background: 'var(--accent-gradient)',
                boxShadow: '0 0 60px rgba(59,130,246,0.3), 0 0 120px rgba(6,182,212,0.15)',
                overflow: 'hidden', position: 'relative', zIndex: 2
              }}>
                <motion.img
                  src={profileImg} alt="V. Siva Pandi — Developer Avatar"
                  whileHover={{ scale: 1.05 }} transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '30%', border: '5px solid var(--bg-color)', cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }} />
      </motion.div>

    </section>
  );
}
