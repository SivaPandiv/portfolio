import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiCode, FiHeart } from 'react-icons/fi';
import { SiReact, SiFramer, SiVite } from 'react-icons/si';

const NAV_LINKS = [
  { label: 'About Me',       href: '#about' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

const RESOURCE_LINKS = [
  { label: 'View Resume',    href: '/resume.pdf',                                          external: true },
  { label: 'GitHub Profile', href: 'https://github.com/ssivapandi',                       external: true },
  { label: 'LinkedIn',       href: 'https://www.linkedin.com/in/siva-pandi-v-4b75492a3', external: true },
];

const SOCIALS = [
  { icon: <FiGithub size={18} />,   href: 'https://github.com/ssivapandi',                       label: 'GitHub',   color: '#e2e8f0' },
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/siva-pandi-v-4b75492a3', label: 'LinkedIn', color: '#0a66c2' },
  { icon: <FiMail size={18} />,     href: 'mailto:vsivapandi86@gmail.com',                       label: 'Email',    color: '#38bdf8' },
];

const TECH_STACK = [
  { icon: <SiReact size={14} />,  label: 'React',         color: '#61DAFB' },
  { icon: <SiFramer size={14} />, label: 'Framer Motion', color: '#a855f7' },
  { icon: <SiVite size={14} />,   label: 'Vite',          color: '#646cff' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ position: 'relative', background: 'var(--bg-secondary)', overflow: 'hidden' }}>

      {/* ── Top gradient divider ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.6), rgba(129,140,248,0.6), transparent)',
      }} />

      {/* ── Giant ghost watermark ── */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(5rem, 13vw, 14rem)', fontWeight: 900,
        fontFamily: 'var(--font-main)', color: 'rgba(255,255,255,0.018)',
        whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none', zIndex: 0,
        letterSpacing: '-4px',
      }}>
        V. SIVA PANDI
      </div>

      {/* ── Background glow blobs ── */}
      <div style={{
        position: 'absolute', bottom: '-40px', left: '10%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', top: '-40px', right: '10%',
        width: '250px', height: '250px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '2rem' }}>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: 'center', marginBottom: '4rem', padding: '3rem 2rem',
            background: 'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(129,140,248,0.06))',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.06)',
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Glow */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-secondary)',
            letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem',
          }}>
            Available for opportunities
          </p>
          <h3 style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 900, color: '#fff',
            marginBottom: '0.75rem', lineHeight: 1.2,
          }}>
            Let's Build Something{' '}
            <span className="gradient-text">Amazing Together</span>
          </h3>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2rem',
            lineHeight: 1.7,
          }}>
            I'm open to full-time roles, freelance projects, and exciting collaborations.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="mailto:vsivapandi86@gmail.com"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', padding: '0.85rem 2rem' }}
            >
              <FiMail size={16} /> Get In Touch
            </motion.a>
            <motion.a
              href="/resume.pdf" target="_blank" rel="noreferrer"
              className="btn btn-outline"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', padding: '0.85rem 2rem' }}
            >
              <FiCode size={16} /> View Resume
            </motion.a>
          </div>
        </motion.div>

        {/* ── Main Footer Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ gridColumn: 'span 1' }}
          >
            <a href="#" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-main)', fontSize: '1.6rem', fontWeight: 900, color: '#fff' }}>V. </span>
              <span className="gradient-text" style={{ fontFamily: 'var(--font-main)', fontSize: '1.6rem', fontWeight: 900 }}>Siva</span>
              <span style={{ fontFamily: 'var(--font-main)', fontSize: '1.6rem', fontWeight: 900, color: '#fff' }}> Pandi</span>
              <span style={{ fontFamily: 'var(--font-main)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--accent-primary)' }}>.</span>
            </a>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '260px' }}>
              Crafting scalable software & turning raw data into powerful insights. Based in Tamil Nadu, India.
            </p>

            {/* Availability pill */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.35rem 0.85rem', borderRadius: '2rem',
              background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.25)',
              marginBottom: '1.5rem',
            }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#34d399', boxShadow: '0 0 8px #34d399',
                animation: 'pulse-glow 2s infinite',
              }} />
              <span style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                Open to Work
              </span>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  title={s.label}
                  whileHover={{ y: -4, scale: 1.12 }}
                  whileTap={{ scale: 0.92 }}
                  style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-secondary)', textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${s.color}15`;
                    e.currentTarget.style.borderColor = `${s.color}45`;
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.boxShadow = `0 8px 24px ${s.color}25`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 style={{
              fontSize: '0.7rem', fontWeight: 800, letterSpacing: '2.5px',
              textTransform: 'uppercase', color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)', marginBottom: '1.25rem',
            }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.label} href={link.href}
                  whileHover={{ x: 6 }}
                  style={{
                    fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none',
                    transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', gap: '0.5rem',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <span style={{ width: '14px', height: '1px', background: 'var(--accent-primary)', display: 'inline-block', opacity: 0.6 }} />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 style={{
              fontSize: '0.7rem', fontWeight: 800, letterSpacing: '2.5px',
              textTransform: 'uppercase', color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)', marginBottom: '1.25rem',
            }}>
              Resources
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {RESOURCE_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  whileHover={{ x: 6 }}
                  style={{
                    fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none',
                    transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', gap: '0.5rem',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <span style={{ width: '14px', height: '1px', background: 'var(--accent-secondary)', display: 'inline-block', opacity: 0.6 }} />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 style={{
              fontSize: '0.7rem', fontWeight: 800, letterSpacing: '2.5px',
              textTransform: 'uppercase', color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)', marginBottom: '1.25rem',
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { label: 'Email', value: 'vsivapandi86@gmail.com', href: 'mailto:vsivapandi86@gmail.com' },
                { label: 'Location', value: 'Tamil Nadu, India', href: null },
                { label: 'Status', value: '✓ Available to hire', href: null, highlight: '#34d399' },
              ].map((item) => (
                <div key={item.label}>
                  <p style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', letterSpacing: '1px', marginBottom: '0.2rem', textTransform: 'uppercase' }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} style={{
                      fontSize: '0.82rem', color: 'var(--accent-primary)',
                      textDecoration: 'none', fontWeight: 600,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--accent-primary)'; }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: '0.82rem', color: item.highlight || '#fff', fontWeight: 600 }}>
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── Bottom Bar ── */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} V. Siva Pandi. All rights reserved.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Built with</span>
            <FiHeart size={12} style={{ color: '#f43f5e' }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>using</span>
            {TECH_STACK.map((t, i) => (
              <span key={t.label} style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                {i > 0 && <span style={{ color: 'var(--text-secondary)', opacity: 0.4 }}>+</span>}
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: t.color, fontWeight: 600 }}>
                  {t.icon} {t.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Back to Top ── */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.15, y: -4 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem',
          width: '48px', height: '48px', borderRadius: '50%',
          background: 'var(--accent-gradient)',
          color: '#fff', border: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 100,
          boxShadow: '0 8px 30px rgba(59,130,246,0.4)',
        }}
        title="Back to Top"
      >
        <FiArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
