import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_ITEMS = ['About', 'Projects', 'Certifications', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState('');
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV_ITEMS.map(n => document.getElementById(n.toLowerCase()));
      const scrollY  = window.scrollY + 120;
      sections.forEach(sec => {
        if (!sec) return;
        if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight)
          setActive(sec.id);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (item) => {
    setMenuOpen(false);
    setActive(item.toLowerCase());
  };

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-container">

          {/* Logo */}
          <motion.a href="#" className="nav-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.5px' }}>
            V.SP<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </motion.a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {NAV_ITEMS.map((item, i) => (
              <motion.li key={item}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleNavClick(item)}
                  style={{ color: active === item.toLowerCase() ? 'var(--text-primary)' : undefined }}>
                  {item}
                  {active === item.toLowerCase() && (
                    <motion.span layoutId="nav-active"
                      style={{
                        position: 'absolute', bottom: 0, left: 0,
                        width: '100%', height: '2px',
                        background: 'var(--accent-gradient)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(56,189,248,0.7)'
                      }} />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <motion.a href="mailto:vsivapandi86@gmail.com"
              className="btn btn-primary nav-hire-btn"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}>
              Hire Me
            </motion.a>

            {/* Mobile hamburger */}
            <button
              className="nav-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu">
              <AnimatePresence mode="wait">
                {menuOpen
                  ? <motion.span key="x"   initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><FiX size={22} style={{ color: 'var(--text-primary)' }} /></motion.span>
                  : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><FiMenu size={22} style={{ color: 'var(--text-secondary)' }} /></motion.span>
                }
              </AnimatePresence>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 98,
                background: 'rgba(6,13,26,0.7)', backdropFilter: 'blur(6px)'
              }} />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: 'min(300px, 80vw)', zIndex: 99,
                background: 'rgba(8,15,32,0.98)',
                backdropFilter: 'blur(24px)',
                borderLeft: '1px solid var(--glass-border)',
                display: 'flex', flexDirection: 'column',
                padding: '5rem 2rem 2rem'
              }}>
              <nav>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {NAV_ITEMS.map((item, i) => (
                    <motion.li key={item}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={() => handleNavClick(item)}
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: '1rem 1.25rem', borderRadius: '0.85rem',
                          textDecoration: 'none', fontWeight: 700, fontSize: '1.05rem',
                          color: active === item.toLowerCase() ? '#fff' : 'var(--text-secondary)',
                          background: active === item.toLowerCase() ? 'rgba(59,130,246,0.1)' : 'transparent',
                          border: active === item.toLowerCase() ? '1px solid rgba(59,130,246,0.2)' : '1px solid transparent',
                          transition: 'all 0.2s ease'
                        }}>
                        {item}
                        {active === item.toLowerCase() && (
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: '0 0 8px var(--accent-primary)' }} />
                        )}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div style={{ marginTop: 'auto' }}>
                <a href="mailto:vsivapandi86@gmail.com" className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => setMenuOpen(false)}>
                  Hire Me
                </a>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '1.25rem', opacity: 0.6 }}>
                  © {new Date().getFullYear()} V. Siva Pandi
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
