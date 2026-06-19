import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { fadeUp, scaleIn, staggerContainer, viewport } from '../utils/animations';

const socials = [
  { href: 'https://github.com/SivaPandiv',                       icon: <FiGithub />,   label: 'GitHub',   color: '#e2e8f0' },
  { href: 'https://www.linkedin.com/in/siva-pandi-v-4b75492a3', icon: <FiLinkedin />, label: 'LinkedIn', color: '#0a66c2' },
  { href: 'mailto:vsivapandi86@gmail.com',                       icon: <FiMail />,     label: 'Email',    color: '#38bdf8' },
];

const quickLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer-wrapper">
      <div className="container">

        {/* Top row */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden" whileInView="show" viewport={viewport}
          className="footer-top"
        >
          {/* Brand + tagline */}
          <motion.div variants={fadeUp} className="footer-brand">
            <a href="#" className="nav-logo" style={{ fontSize: '1.6rem' }}>&lt;V.SP&gt;</a>
            <p className="text-muted" style={{ fontSize: '0.88rem', lineHeight: '1.7', maxWidth: '260px', marginTop: '0.75rem' }}>
              Building elegant software solutions at the intersection of{' '}
              <span className="gradient-text" style={{ fontWeight: 700 }}>development</span> and{' '}
              <span className="gradient-text" style={{ fontWeight: 700 }}>data science</span>.
            </p>
            {/* Status chip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px #34d399', animation: 'glow-pulse 2s ease-in-out infinite' }} />
              <span style={{ fontSize: '0.78rem', color: '#34d399', fontWeight: 600 }}>Open to Work</span>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp}>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="footer-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div variants={fadeUp}>
            <h4 className="footer-col-title">Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href="mailto:vsivapandi86@gmail.com" className="footer-link" style={{ fontSize: '0.85rem' }}>
                vsivapandi86@gmail.com
              </a>
              <a href="https://github.com/SivaPandiv" target="_blank" rel="noreferrer" className="footer-link" style={{ fontSize: '0.85rem' }}>
                github.com/SivaPandiv
              </a>
              <span className="text-muted" style={{ fontSize: '0.82rem' }}>Coimbatore, Tamil Nadu 🇮🇳</span>
            </div>

            {/* Social icons */}
            <motion.div variants={staggerContainer(0.1)} style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              {socials.map((s) => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  aria-label={s.label}
                  variants={scaleIn}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '38px', height: '38px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem', textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${s.color}60`;
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.boxShadow = `0 0 16px ${s.color}30`;
                    e.currentTarget.style.background = `${s.color}0d`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  }}>
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--glass-border)', margin: '2rem 0' }} />

        {/* Bottom row */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0 }}>
            © {new Date().getFullYear()} V. Siva Pandi · Designed & built with{' '}
            <span className="gradient-text" style={{ fontWeight: 700 }}>React</span> &{' '}
            <span className="gradient-text" style={{ fontWeight: 700 }}>Framer Motion</span>
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.92 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: '2rem', padding: '0.4rem 0.9rem',
              color: 'var(--accent-primary)', fontSize: '0.78rem', fontWeight: 700,
              cursor: 'pointer', fontFamily: 'var(--font-main)', transition: 'all 0.3s ease'
            }}>
            <FiArrowUp size={13} /> Back to top
          </motion.button>
        </motion.div>

      </div>
    </footer>
  );
}
