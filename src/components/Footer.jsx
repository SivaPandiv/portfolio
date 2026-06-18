import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socials = [
  { href: 'https://github.com/ssivapandi',    icon: <FiGithub />,   label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/siva-pandi-v-4b75492a3', icon: <FiLinkedin />, label: 'LinkedIn' },
  { href: 'mailto:vsivapandi86@gmail.com',     icon: <FiMail />,     label: 'Email' }
];

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '42px', height: '42px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-secondary)',
                fontSize: '1.2rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(56,189,248,0.5)';
                e.currentTarget.style.color = 'var(--accent-primary)';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(56,189,248,0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* Credit */}
        <p className="text-muted text-sm" style={{ textAlign: 'center', lineHeight: '1.7' }}>
          Designed & Built with{' '}
          <span className="gradient-text" style={{ fontWeight: 700 }}>React</span> &{' '}
          <span className="gradient-text" style={{ fontWeight: 700 }}>Framer Motion</span>
          <br />
          <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>
            © {new Date().getFullYear()} V. Siva Pandi · All rights reserved.
          </span>
        </p>

      </div>
    </footer>
  );
}
