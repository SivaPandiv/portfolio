import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight, FiCode, FiTerminal, FiMonitor } from 'react-icons/fi';
import { fadeUp, viewport } from '../utils/animations';

const projects = [
  {
    title: "Smart Grievance Redressal",
    category: "AI & NLP",
    categoryIcon: "🤖",
    desc: "AI-powered digital complaint management platform. Built using Generative AI and NLP for intelligent complaint categorization and automated resolution support — ensuring efficient issue tracking and fast resolution.",
    tech: ["Python", "Flask", "GenAI", "NLP", "Machine Learning"],
    github: "https://github.com/SivaPandiv/Smart-Grievance-Redressal-System",
    link: "#",
    color: "#38bdf8",
    featured: true,
    codeSnippet: `def analyze_complaint(text):
    # NLP pipeline for grievance
    doc = nlp(text)
    sentiment = analyze_sentiment(doc)
    category = clf.predict([text])[0]
    return {"category": category, "priority": sentiment}`
  },
  {
    title: "Cyberbullying Detection",
    category: "Machine Learning",
    categoryIcon: "🧠",
    desc: "ML & NLP-based cyberbullying detection model that uses sentiment analysis to classify and detect abusive text with high accuracy. Helps identify and flag harmful language in real time.",
    tech: ["Python", "Scikit-Learn", "NLP", "Sentiment Analysis"],
    github: "https://github.com/SivaPandiv/cyberbullying-detection-ml",
    link: "#",
    color: "#818cf8",
    featured: true,
    codeSnippet: `model = RandomForestClassifier()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100}%")`
  },
  {
    title: "Virtual Shirt Try-On",
    category: "Computer Vision",
    categoryIcon: "👕",
    desc: "Developed a virtual try-on application using OpenCV, Computer Vision, and Python. Implemented real-time garment visualization and object tracking to provide an accurate and seamless user experience.",
    tech: ["Python", "OpenCV", "CVZone", "MediaPipe", "Computer Vision"],
    github: "https://github.com/ssivapandi/Virtual_shirttracking-main",
    link: "#",
    color: "#34d399",
    featured: false,
    codeSnippet: `cap = cv2.VideoCapture(0)
detector = PoseDetector()
while True:
    success, img = cap.read()
    img = detector.findPose(img)
    lmList, bboxInfo = detector.findPosition(img)
    # Overlay shirt on detected pose...`
  },
];

const SLIDE_VARIANTS = {
  enter: (dir) => ({
    x: dir > 0 ? 800 : -800,
    opacity: 0,
    scale: 0.9,
    rotateY: dir > 0 ? 15 : -15
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      x: { type: "spring", stiffness: 350, damping: 35 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.4 },
      rotateY: { duration: 0.4 }
    }
  },
  exit: (dir) => ({
    x: dir < 0 ? 800 : -800,
    opacity: 0,
    scale: 0.9,
    rotateY: dir < 0 ? 15 : -15,
    transition: {
      x: { type: "spring", stiffness: 350, damping: 35 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.4 }
    }
  })
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setPage((prevPage) => {
      let next = prevPage + newDirection;
      if (next < 0) next = filteredProjects.length - 1;
      if (next >= filteredProjects.length) next = 0;
      return next;
    });
  }, [filteredProjects.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  useEffect(() => {
    if (isPaused) {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, [isPaused, paginate, filteredProjects.length]);

  const activeProject = filteredProjects[page] || filteredProjects[0];

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          className="section-header"
        >
          <span className="section-eyebrow">What I've Built</span>
          <h2 className="section-title text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Category Pills */}
        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}
        >
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              onClick={() => { setFilter(cat); setPage(0); }}
              className={filter === cat ? 'active' : ''}
              style={{
                padding: '0.6rem 1.4rem', borderRadius: '2rem',
                border: `1px solid ${filter === cat ? 'var(--accent-primary)' : 'var(--glass-border)'}`,
                background: filter === cat ? 'rgba(56,189,248,0.15)' : 'rgba(255,255,255,0.02)',
                color: filter === cat ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: 600, fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                cursor: 'pointer', transition: 'all 0.3s ease',
                boxShadow: filter === cat ? '0 0 20px rgba(56,189,248,0.2)' : 'none'
              }}
              onMouseEnter={e => {
                if (filter !== cat) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }
              }}
              onMouseLeave={e => {
                if (filter !== cat) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          style={{ maxWidth: '1080px', margin: '4rem auto 0', position: 'relative', perspective: '1000px' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Outer glow halo for the active project */}
          <div style={{
            position: 'absolute', inset: '-20px', borderRadius: 'var(--radius-lg)',
            background: `radial-gradient(ellipse at center, ${activeProject.color}30 0%, transparent 70%)`,
            filter: 'blur(40px)', zIndex: 0, opacity: 0.6,
            transition: 'background 0.5s ease'
          }} />

          {/* Carousel Viewport */}
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)', minHeight: '520px', zIndex: 1, border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-secondary)', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
            
            {/* Ghost Number Background */}
            <div style={{
              position: 'absolute', top: '-10%', right: '-5%',
              fontFamily: 'var(--font-mono)', fontSize: '20rem', fontWeight: 900,
              color: 'rgba(255,255,255,0.02)', lineHeight: 1, zIndex: 0, pointerEvents: 'none',
              userSelect: 'none'
            }}>
              {String(page + 1).padStart(2, '0')}
            </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={SLIDE_VARIANTS}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  width: '100%', height: '100%', minHeight: '520px',
                  display: 'grid', gridTemplateColumns: '1.2fr 1fr',
                  position: 'relative', zIndex: 1
                }}
              >
                {/* ── Left Content Panel ── */}
                <div style={{ padding: '3.5rem 3.5rem 3.5rem 4rem', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <span style={{ 
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
                      fontSize: '0.85rem', fontWeight: 700, color: activeProject.color, 
                      background: `${activeProject.color}15`, padding: '0.4rem 1rem', 
                      borderRadius: '2rem', letterSpacing: '0.5px', textTransform: 'uppercase'
                    }}>
                      {activeProject.categoryIcon} {activeProject.category}
                    </span>
                    {activeProject.featured && (
                      <span style={{ 
                        fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', 
                        color: '#f59e0b', background: 'rgba(245,158,11,0.1)', 
                        border: '1px solid rgba(245,158,11,0.2)', padding: '0.4rem 1rem', 
                        borderRadius: '2rem', letterSpacing: '1px'
                      }}>
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                    {activeProject.title}
                  </h3>

                  <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                    {activeProject.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
                    {activeProject.tech.map((t, i) => (
                      <span key={i} className="badge" style={{ 
                        borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)',
                        color: 'var(--text-secondary)'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = activeProject.color;
                        e.currentTarget.style.color = activeProject.color;
                        e.currentTarget.style.background = `${activeProject.color}15`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1.25rem', marginTop: 'auto' }}>
                    <a href={activeProject.github} target="_blank" rel="noreferrer"
                      className="btn"
                      style={{ 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', 
                        background: `${activeProject.color}15`, color: activeProject.color, 
                        padding: '0.8rem 1.75rem', borderRadius: '0.75rem', fontWeight: 700, 
                        textDecoration: 'none', transition: 'all 0.2s', border: `1px solid ${activeProject.color}30`
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = activeProject.color;
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = `0 10px 20px ${activeProject.color}40`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = `${activeProject.color}15`;
                        e.currentTarget.style.color = activeProject.color;
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}>
                      <FiGithub size={20} /> Source Code
                    </a>
                    {activeProject.link !== '#' && (
                      <a href={activeProject.link} target="_blank" rel="noreferrer"
                        className="btn-outline"
                        style={{ 
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', 
                          padding: '0.8rem 1.75rem', borderRadius: '0.75rem', fontWeight: 700, 
                          textDecoration: 'none', transition: 'all 0.2s'
                        }}>
                          <FiExternalLink size={20} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* ── Right Content Panel: Visuals & Code ── */}
                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03), transparent)',
                  borderLeft: '1px solid rgba(255,255,255,0.05)',
                  padding: '3.5rem 3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
                  position: 'relative', overflow: 'hidden'
                }}>
                  {/* Decorative abstract shape */}
                  <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '300px', height: '300px', background: `radial-gradient(circle, ${activeProject.color}20, transparent 70%)`, filter: 'blur(50px)', pointerEvents: 'none' }} />

                  {/* Thumbnail Image Placeholder (CRT Effect) */}
                  <div className="crt-screen" style={{
                    width: '100%', height: '220px',
                    background: `linear-gradient(135deg, rgba(0,0,0,0.9), ${activeProject.color}15)`,
                  }}>
                    <div className="crt-scanline"></div>
                    <div className="crt-content">
                      <FiMonitor size={64} style={{ 
                        color: activeProject.color, 
                        filter: `drop-shadow(0 0 15px ${activeProject.color}80)` 
                      }} />
                      
                      {/* Technical CRT Text */}
                      <div style={{ 
                        position: 'absolute', top: '15px', left: '15px', 
                        fontFamily: 'var(--font-mono)', fontSize: '0.6rem', 
                        color: activeProject.color, opacity: 0.8,
                        textShadow: `0 0 5px ${activeProject.color}`
                      }}>
                        REC <span style={{ color: '#ef4444', marginLeft: '4px', animation: 'crtFlicker 1s infinite' }}>●</span>
                      </div>
                      <div style={{ 
                        position: 'absolute', bottom: '15px', right: '15px', 
                        fontFamily: 'var(--font-mono)', fontSize: '0.65rem', 
                        color: activeProject.color, opacity: 0.8,
                        textShadow: `0 0 5px ${activeProject.color}`
                      }}>
                        SYS.OP // {activeProject.category}
                      </div>
                    </div>
                  </div>

                  {/* Code Snippet Box */}
                  <div className="code-preview" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
                      <FiTerminal style={{ color: activeProject.color }} />
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '1px' }}>CORE_LOGIC.PY</span>
                    </div>
                    <pre style={{ margin: 0, color: 'var(--text-primary)', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                      {activeProject.codeSnippet.split('\n').map((line, idx) => (
                        <div key={idx} className="code-line">
                          <span className="code-ln">{idx + 1}</span>
                          <span style={{ 
                            color: line.includes('def') || line.includes('function') ? '#818cf8' : 
                                   line.includes('return') ? '#f472b6' :
                                   line.includes('#') ? 'var(--text-secondary)' : '#eef2ff'
                          }}>
                            {line}
                          </span>
                        </div>
                      ))}
                    </pre>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2.5rem', padding: '0 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <button className="slide-nav-btn" onClick={() => paginate(-1)} style={{ position: 'static', transform: 'none' }}>
                <FiChevronLeft size={24} />
              </button>
              <button className="slide-nav-btn" onClick={() => paginate(1)} style={{ position: 'static', transform: 'none' }}>
                <FiChevronRight size={24} />
              </button>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', marginLeft: '1rem', opacity: 0.7 }}>
                Keyboard Support [ ←  → ]
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {filteredProjects.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }} 
                  style={{ 
                    width: i === page ? '36px' : '10px', height: '10px', borderRadius: '5px', 
                    background: i === page ? activeProject.color : 'rgba(255,255,255,0.15)', 
                    border: 'none', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', padding: 0 
                  }} 
                  aria-label={`Go to slide ${i + 1}`} 
                />
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
