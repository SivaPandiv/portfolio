import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = ['About', 'Projects', 'Certifications', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = NAV_ITEMS.map(n => document.getElementById(n.toLowerCase()));
      const scrollY   = window.scrollY + 120;
      sections.forEach(sec => {
        if (!sec) return;
        if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
          setActive(sec.id);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-container">

        {/* Logo */}
        <motion.a
          href="#"
          className="nav-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          &lt;VSP /&gt;
        </motion.a>

        {/* Nav Links */}
        <ul className="nav-links">
          {NAV_ITEMS.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                style={{ color: active === item.toLowerCase() ? 'var(--text-primary)' : undefined }}
              >
                {item}
                {active === item.toLowerCase() && (
                  <motion.span
                    layoutId="nav-active"
                    style={{
                      position: 'absolute', bottom: 0, left: 0,
                      width: '100%', height: '2px',
                      background: 'var(--accent-gradient)',
                      borderRadius: '2px',
                      boxShadow: '0 0 8px rgba(56,189,248,0.7)'
                    }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.a
          href="mailto:vsivapandi86@gmail.com"
          className="btn btn-primary"
          style={{ padding: '0.55rem 1.4rem', fontSize: '0.85rem' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
        >
          Hire Me
        </motion.a>

      </div>
    </nav>
  );
}
