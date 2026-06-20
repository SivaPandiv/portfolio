import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { fadeUp, viewport } from '../utils/animations';

const projects = [
  {
    title: "Smart Grievance Redressal System",
    category: "Artificial Intelligence",
    categoryIcon: "🤖",
    desc: "Digital complaint management platform ensuring efficient issue tracking and resolution. Integrates Generative AI and NLP for intelligent complaint categorization and automated resolution support.",
    tech: ["Generative AI", "NLP", "Python", "Flask", "Machine Learning"],
    github: "https://github.com/SivaPandiv/Smart-Grievance-Redressal-System",
    link: "#",
    color: "#38bdf8",
    featured: true,
  },
  {
    title: "Cyberbullying Detection ML",
    category: "Machine Learning",
    categoryIcon: "🧠",
    desc: "AI-powered text classification system for detecting and preventing cyberbullying content. Uses NLP and machine learning models to identify, classify, and flag harmful language with high accuracy.",
    tech: ["Python", "ML", "NLP", "Scikit-Learn", "Sentiment Analysis"],
    github: "https://github.com/SivaPandiv/cyberbullying-detection-ml",
    link: "#",
    color: "#818cf8",
    featured: true,
  },
  {
    title: "Google Map Mini",
    category: "Web Development",
    categoryIcon: "🗺️",
    desc: "Interactive location tracking and navigation platform powered by Google Maps APIs. Features real-time route planning, place search, and dynamic map interactions for seamless geographic exploration.",
    tech: ["Google Maps API", "JavaScript", "HTML", "CSS", "Geolocation"],
    github: "https://github.com/SivaPandiv",
    link: "#",
    color: "#34d399",
    featured: false,
  },
  {
    title: "Virtual Shirt Tracking System",
    category: "Computer Vision",
    categoryIcon: "👕",
    desc: "Computer vision-based virtual try-on solution for realistic garment fitting experiences. Uses OpenCV and real-time object tracking to overlay shirts on the user's body in live video.",
    tech: ["Python", "OpenCV", "Computer Vision", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/SivaPandiv/Virtual_shirttracking-main",
    link: "#",
    color: "#ec4899",
    featured: false,
  }
];

const SLIDE_VARIANTS = {
  enter: (dir) => ({
    x: dir > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.3 }
    }
  },
  exit: (dir) => ({
    x: dir < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.3 }
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

  useEffect(() => {
    if (isPaused) {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [isPaused, paginate, filteredProjects.length]);

  const activeProject = filteredProjects[page] || filteredProjects[0];

  return (
    <section id="projects" className="section">
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
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '2rem',
                border: `1px solid ${filter === cat ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)'}`,
                background: filter === cat ? 'rgba(56,189,248,0.15)' : 'rgba(255,255,255,0.03)',
                color: filter === cat ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                if (filter !== cat) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              onMouseLeave={e => {
                if (filter !== cat) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          style={{ maxWidth: '900px', margin: '3rem auto 0', position: 'relative' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={SLIDE_VARIANTS}
                initial="enter"
                animate="center"
                exit="exit"
                className="glass"
                style={{
                  width: '100%',
                  padding: '3.5rem 3rem',
                  borderTop: `4px solid ${activeProject.color}`,
                  boxShadow: `0 20px 40px -10px ${activeProject.color}20`,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div>
                    <span style={{ 
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
                      fontSize: '0.9rem', fontWeight: 700, color: activeProject.color, 
                      background: `${activeProject.color}15`, padding: '0.4rem 1rem', 
                      borderRadius: '2rem', marginBottom: '1.5rem' 
                    }}>
                      {activeProject.categoryIcon} {activeProject.category}
                    </span>
                    <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
                      {activeProject.title}
                    </h3>
                  </div>
                  {activeProject.featured && (
                    <span style={{ 
                      fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', 
                      color: '#f59e0b', background: 'rgba(245,158,11,0.1)', 
                      border: '1px solid rgba(245,158,11,0.2)', padding: '0.4rem 1rem', 
                      borderRadius: '2rem', letterSpacing: '0.5px'
                    }}>
                      ★ Featured
                    </span>
                  )}
                </div>

                <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '750px' }}>
                  {activeProject.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
                  {activeProject.tech.map((t, i) => (
                    <span key={i} style={{ 
                      padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.04)', 
                      border: '1px solid var(--glass-border)', borderRadius: '0.75rem', 
                      color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600 
                    }}>
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
                      padding: '0.8rem 1.5rem', borderRadius: '0.75rem', fontWeight: 700, 
                      textDecoration: 'none', transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${activeProject.color}30`;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = `${activeProject.color}15`;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                    <FiGithub size={20} /> GitHub Repo
                  </a>
                  {activeProject.link !== '#' && (
                    <a href={activeProject.link} target="_blank" rel="noreferrer"
                      style={{ 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', 
                        background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)', 
                        padding: '0.8rem 1.5rem', borderRadius: '0.75rem', fontWeight: 700, 
                        border: '1px solid var(--glass-border)', textDecoration: 'none', 
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}>
                        <FiExternalLink size={20} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={() => paginate(-1)} style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                <FiChevronLeft size={24} />
              </button>
              <button onClick={() => paginate(1)} style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                <FiChevronRight size={24} />
              </button>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {filteredProjects.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }} style={{ width: i === page ? '32px' : '10px', height: '10px', borderRadius: '5px', background: i === page ? activeProject.color : 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} aria-label={`Go to slide ${i + 1}`} />
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
