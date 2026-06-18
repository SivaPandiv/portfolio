import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiDatabase, FiCpu, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profileImg from '../assets/coder_boy_avatar.png';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('avatar'); // 'avatar', 'robot', 'setup'

  return (
    <section className="section flex items-center justify-center" style={{ minHeight: '100vh', paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow blobs */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        
        {/* Left Content */}
        <div style={{ textAlign: 'left' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1"
            style={{ marginBottom: '1rem' }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'inline-block', boxShadow: '0 0 8px var(--accent-primary)' }}></span>
            <h4 className="text-xl text-muted" style={{ margin: 0, fontWeight: 500, letterSpacing: '0.5px' }}>
              Hello, world! I am
            </h4>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl"
            style={{ marginBottom: '1.25rem', fontWeight: 800, letterSpacing: '-1.5px' }}
          >
            V. <span className="gradient-text">Siva Pandi</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-1 items-center"
            style={{ marginBottom: '1.75rem' }}
          >
            <span className="badge" style={{ fontSize: '0.85rem', padding: '0.35rem 0.95rem' }}>Software Developer</span>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.75rem' }}>•</span>
            <span className="badge" style={{ fontSize: '0.85rem', padding: '0.35rem 0.95rem', background: 'rgba(236,72,153,0.08)', borderColor: 'rgba(236,72,153,0.22)', color: 'var(--accent-secondary)' }}>Data Analyst</span>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.75rem' }}>•</span>
            <span className="badge" style={{ fontSize: '0.85rem', padding: '0.35rem 0.95rem', background: 'rgba(245,158,11,0.08)', borderColor: 'rgba(245,158,11,0.22)', color: 'var(--accent-tertiary)' }}>B.E CSE Graduate</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg text-muted"
            style={{ marginBottom: '2rem', maxWidth: '600px', lineHeight: '1.7', fontSize: '1.05rem' }}
          >
            Results-driven Full Stack Developer skilled in <strong>HTML, CSS, JavaScript, Python, relational databases</strong>, and also focused on <strong>Data Analytics</strong>. Experienced in RESTful APIs, Git, and deployment workflows, building scalable and high-performance web applications. Ready to deliver clean code and impactful solutions.
          </motion.p>

          {/* Quick Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid"
            style={{ 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '1rem', 
              marginBottom: '2.5rem', 
              maxWidth: '500px' 
            }}
          >
            <div className="glass" style={{ padding: '0.75rem 1rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 800 }}>3+</div>
              <div className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Internships</div>
            </div>
            <div className="glass" style={{ padding: '0.75rem 1rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 800 }}>8.00</div>
              <div className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>BE CGPA</div>
            </div>
            <div className="glass" style={{ padding: '0.75rem 1rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 800 }}>20+</div>
              <div className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Tech Skills</div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-3 items-center"
            style={{ width: '100%' }}
          >
            <div className="flex gap-2 flex-wrap items-center">
              <a href="#projects" className="btn btn-primary flex items-center gap-1">
                View My Work <FiArrowRight />
              </a>
              <a href="https://www.linkedin.com/in/siva-pandi-v-4b75492a3" target="_blank" rel="noreferrer" className="btn btn-outline">
                View Resume
              </a>
            </div>

            {/* Quick Social Icons Row */}
            <div className="flex gap-2 items-center" style={{ paddingLeft: '0.25rem' }}>
              <a 
                href="https://github.com/ssivapandi" 
                target="_blank" 
                rel="noreferrer"
                className="contact-card-icon" 
                style={{ width: '40px', height: '40px', fontSize: '1.15rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', margin: 0 }}
                title="GitHub Profile"
              >
                <FiGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/siva-pandi-v-4b75492a3" 
                target="_blank" 
                rel="noreferrer"
                className="contact-card-icon" 
                style={{ width: '40px', height: '40px', fontSize: '1.15rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', margin: 0 }}
                title="LinkedIn Profile"
              >
                <FiLinkedin />
              </a>
              <a 
                href="mailto:vsivapandi86@gmail.com"
                className="contact-card-icon" 
                style={{ width: '40px', height: '40px', fontSize: '1.15rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', margin: 0 }}
                title="Email Me"
              >
                <FiMail />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Content Area (Image + Sketchfab Selector) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Dynamic Graphic Container */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
             style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%', maxWidth: '360px' }}
          >
            <div className="scanner-container">
              {/* Outer rings & scanner corners (only display for AI avatar mode for visual simplicity) */}
              {activeTab === 'avatar' && (
                <>
                  <div className="scanner-ring-dashed"></div>
                  <div className="scanner-ring-solid"></div>
                  <div className="scanner-corners">
                    <div className="scanner-corner scanner-corner-tl"></div>
                    <div className="scanner-corner scanner-corner-tr"></div>
                    <div className="scanner-corner scanner-corner-bl"></div>
                    <div className="scanner-corner scanner-corner-br"></div>
                  </div>

                  {/* Orbit Floating Badges */}
                  <motion.div 
                    className="floating-badge"
                    style={{ top: '5%', left: '-12%' }}
                    animate={{ y: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  >
                    <FiCode style={{ color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Python</span>
                  </motion.div>

                  <motion.div 
                    className="floating-badge"
                    style={{ bottom: '15%', right: '-12%' }}
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                  >
                    <FiDatabase style={{ color: 'var(--accent-secondary)' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>SQL & DB</span>
                  </motion.div>

                  <motion.div 
                    className="floating-badge"
                    style={{ bottom: '-5%', left: '10%' }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                  >
                    <FiCpu style={{ color: 'var(--accent-primary)' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Data Analyst</span>
                  </motion.div>

                  <motion.div 
                    className="floating-badge"
                    style={{ top: '22%', right: '-15%' }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.7 }}
                  >
                    <FiCode style={{ color: 'var(--accent-rose)' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>React & JS</span>
                  </motion.div>
                </>
              )}

              {/* Graphic Renderer */}
              {activeTab === 'avatar' ? (
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '30%',
                  padding: '6px',
                  background: 'var(--accent-gradient)',
                  boxShadow: '0 0 50px rgba(168, 85, 247, 0.25)',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <motion.img 
                    src={profileImg} 
                    alt="Developer Avatar" 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      objectPosition: 'center',
                      borderRadius: '30%',
                      border: '5px solid var(--bg-color)',
                      cursor: 'pointer'
                    }} 
                  />
                </div>
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '30%',
                  padding: '6px',
                  background: 'var(--accent-gradient)',
                  boxShadow: '0 0 50px rgba(168, 85, 247, 0.25)',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 2,
                  aspectRatio: '1/1'
                }}>
                  <iframe 
                    title={activeTab === 'robot' ? "PAC4 - GameBoy Cartridge Robot" : "Technology Isometric Room"} 
                    frameBorder="0" 
                    allowFullScreen 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    src={activeTab === 'robot' 
                      ? "https://sketchfab.com/models/343be1ea22e542ecb7ec4bf088eb49ba/embed?autostart=1&autospin=0.2&preload=1&ui_controls=0&ui_infos=0&ui_watermark=0" 
                      : "https://sketchfab.com/models/e6fb368759fb49f1a0e8890787e79391/embed?autostart=1&autospin=0.2&preload=1&ui_controls=0&ui_infos=0&ui_watermark=0"
                    }
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      borderRadius: '30%',
                      border: '5px solid var(--bg-color)',
                      background: 'var(--bg-secondary)'
                    }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
