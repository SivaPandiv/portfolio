import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    categoryIcon: "💼",
    desc: "Modern developer portfolio showcasing projects, skills, and professional achievements. Built with React, Framer Motion animations, glassmorphism design, and fully responsive layout.",
    tech: ["React", "Framer Motion", "CSS", "Vite", "JavaScript"],
    github: "https://github.com/SivaPandiv/portfolio",
    link: "#",
    color: "#f59e0b",
    featured: false,
  },
  {
    title: "NM2025TMID08725",
    category: "Automation & AI",
    categoryIcon: "⚙️",
    desc: "Innovative software solution focused on automation, scalability, and user-centric design. Engineered with modern technologies to deliver robust performance and seamless user experiences.",
    tech: ["Python", "Automation", "Scalability", "API Integration", "ML"],
    github: "https://github.com/SivaPandiv",
    link: "#",
    color: "#a855f7",
    featured: false,
  },
];

const SLIDE_VARIANTS = {
  enter: (dir) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    x: dir > 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const goTo = useCallback((idx, dir) => {
    setDirection(dir);
    setCurrent((idx + projects.length) % projects.length);
  }, []);

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    if (paused) { clearInterval(intervalRef.current); return; }
    intervalRef.current = setInterval(next, 4500);
    return () => clearInterval(intervalRef.current);
  }, [paused, next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const project = projects[current];

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

        {/* Slideshow */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ position: 'relative', maxWidth: '820px', margin: '0 auto' }}
        >

          {/* Slide window */}
          <div style={{
            position: 'relative', overflow: 'hidden',
            borderRadius: 'var(--radius-lg)',
            minHeight: '420px',
          }}>
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={current}
                custom={direction}
                variants={SLIDE_VARIANTS}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  position: 'relative',
                  background: `radial-gradient(ellipse 80% 60% at 60% 30%, ${project.color}18 0%, transparent 65%), var(--glass-bg)`,
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid var(--glass-border)',
                  borderTop: `2px solid ${project.color}`,
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.5rem 2.75rem',
                  boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 60px ${project.color}14`,
                  overflow: 'hidden',
                }}
              >
                {/* Top glow line */}
                <div style={{
                  position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
                  background: `linear-gradient(to right, transparent, ${project.color}99, transparent)`,
                }} />

                {/* Card content */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start' }}>

                  {/* Left: text */}
                  <div>
                    {/* Number + category */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'monospace', fontSize: '0.72rem', color: project.color, opacity: 0.55, fontWeight: 800, letterSpacing: '1px' }}>
                        #{String(current + 1).padStart(2, '0')}
                      </span>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                        fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.5px',
                        color: project.color, background: `${project.color}0e`,
                        border: `1px solid ${project.color}28`,
                        padding: '0.2rem 0.7rem', borderRadius: '1rem'
                      }}>
                        {project.categoryIcon} {project.category}
                      </span>
                      {project.featured && (
                        <span style={{
                          fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1px',
                          textTransform: 'uppercase', color: '#f59e0b',
                          background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)',
                          padding: '0.15rem 0.55rem', borderRadius: '1rem'
                        }}>★ Featured</span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '1.55rem', fontWeight: 800, color: '#fff',
                      marginBottom: '1rem', lineHeight: 1.2, letterSpacing: '-0.5px'
                    }}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.75', marginBottom: '1.5rem', maxWidth: '480px' }}>
                      {project.desc}
                    </p>

                    {/* Tech stack */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2rem' }}>
                      {project.tech.map((tech, i) => (
                        <span key={i} style={{
                          padding: '0.22rem 0.7rem',
                          background: `${project.color}0a`, border: `1px solid ${project.color}28`,
                          borderRadius: '1rem', color: project.color,
                          fontSize: '0.72rem', fontWeight: 700
                        }}>{tech}</span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <a href={project.github} target="_blank" rel="noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                          padding: '0.55rem 1.2rem', borderRadius: '0.75rem',
                          background: `${project.color}15`, border: `1px solid ${project.color}35`,
                          color: project.color, textDecoration: 'none',
                          fontSize: '0.82rem', fontWeight: 700,
                          transition: 'all 0.25s ease'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = `${project.color}28`; e.currentTarget.style.boxShadow = `0 0 20px ${project.color}30`; }}
                        onMouseLeave={e => { e.currentTarget.style.background = `${project.color}15`; e.currentTarget.style.boxShadow = 'none'; }}>
                        <FiGithub /> View Source <FiArrowUpRight />
                      </a>
                      {project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noreferrer"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                            padding: '0.55rem 1.2rem', borderRadius: '0.75rem',
                            background: 'rgba(255,255,255,0.04)', border: '1px solid var(--glass-border)',
                            color: 'var(--text-secondary)', textDecoration: 'none',
                            fontSize: '0.82rem', fontWeight: 700, transition: 'all 0.25s ease'
                          }}>
                          <FiExternalLink /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: large number decoration */}
                  <div style={{
                    fontSize: '8rem', fontWeight: 900, lineHeight: 1,
                    color: project.color, opacity: 0.06,
                    fontFamily: 'monospace', userSelect: 'none',
                    alignSelf: 'center'
                  }}>
                    {String(current + 1).padStart(2, '0')}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button onClick={prev} className="slide-nav-btn slide-nav-left" aria-label="Previous project">
            <FiChevronLeft />
          </button>
          <button onClick={next} className="slide-nav-btn slide-nav-right" aria-label="Next project">
            <FiChevronRight />
          </button>

          {/* Bottom controls row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', padding: '0 0.25rem' }}>

            {/* Dot indicators */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  aria-label={`Go to project ${i + 1}`}
                  style={{
                    width: i === current ? '24px' : '7px',
                    height: '7px',
                    borderRadius: '4px',
                    background: i === current ? project.color : 'rgba(255,255,255,0.15)',
                    border: 'none', cursor: 'pointer', padding: 0,
                    transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
                    boxShadow: i === current ? `0 0 8px ${project.color}80` : 'none'
                  }}
                />
              ))}
            </div>

            {/* Counter + auto-play status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, fontFamily: 'monospace' }}>
                {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <button
                onClick={() => setPaused(p => !p)}
                style={{
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.5px',
                  color: paused ? '#f59e0b' : '#34d399',
                  background: paused ? 'rgba(245,158,11,0.08)' : 'rgba(52,211,153,0.08)',
                  border: `1px solid ${paused ? 'rgba(245,158,11,0.25)' : 'rgba(52,211,153,0.25)'}`,
                  padding: '0.2rem 0.6rem', borderRadius: '1rem',
                  cursor: 'pointer', fontFamily: 'var(--font-main)',
                  transition: 'all 0.3s ease'
                }}>
                {paused ? '⏸ Paused' : '▶ Auto'}
              </button>
            </div>
          </div>

          {/* Progress bar */}
          {!paused && (
            <div style={{ marginTop: '0.75rem', height: '2px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
              <motion.div
                key={current}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 4.5, ease: 'linear' }}
                style={{ height: '100%', background: project.color, borderRadius: '2px', boxShadow: `0 0 8px ${project.color}80` }}
              />
            </div>
          )}

        </motion.div>

        {/* Mini project thumbnails */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}
        >
          {projects.map((p, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.4rem 0.9rem', borderRadius: '0.65rem',
                background: i === current ? `${p.color}15` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${i === current ? p.color + '45' : 'var(--glass-border)'}`,
                color: i === current ? p.color : 'var(--text-secondary)',
                fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer',
                fontFamily: 'var(--font-main)',
                transition: 'all 0.25s ease',
                display: 'flex', alignItems: 'center', gap: '0.3rem'
              }}>
              <span>{p.categoryIcon}</span>
              <span style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</span>
            </motion.button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
