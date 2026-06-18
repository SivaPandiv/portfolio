import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: "Smart Grievance Redressal System",
      desc: "Built an AI-powered Smart Grievance Redressal System using Generative AI and NLP for intelligent complaint analysis, categorization, and automated resolution support.",
      tech: ["Generative AI", "NLP", "Python", "Flask", "Machine Learning"],
      github: "https://github.com/SivaPandiv/Smart-Grievance-Redressal-System",
      link: "#",
      color: "#38bdf8"
    },
    {
      title: "Cyberbullying Detection using ML",
      desc: "Developed a Machine Learning & Natural Language Processing model to identify, classify, and detect abusive or cyberbullying-related texts using advanced sentiment analysis.",
      tech: ["Python", "ML", "NLP", "Sentiment Analysis", "Scikit-Learn"],
      github: "https://github.com/SivaPandiv/cyberbullying-detection-ml",
      link: "#",
      color: "#818cf8"
    },
    {
      title: "Online Shirt Try-On Website",
      desc: "Developed a virtual try-on application using OpenCV, Computer Vision, and Python. Implemented real-time garment visualization and object tracking for a seamless experience.",
      tech: ["Python", "OpenCV", "Computer Vision", "HTML", "CSS", "Bootstrap"],
      github: "http://github.com/ssivapandi/Virtual_shirttracking-main",
      link: "#",
      color: "#34d399"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <div className="section-divider"></div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <GlowCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GlowCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.removeProperty('--mouse-x');
    card.style.removeProperty('--mouse-y');
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring', stiffness: 80 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--glow-color': project.color,
        background: `
          radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            ${project.color}14 0%,
            transparent 55%
          ),
          var(--glass-bg)
        `,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-md)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease, border-color 0.3s ease',
        padding: '2rem 2.25rem 2.25rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'default'
      }}
      whileHover={{
        y: -8,
        boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 40px ${project.color}22`
      }}
    >
      {/* Terminal Window Dots */}
      <div className="project-card-header">
        <span className="terminal-dot-marker" style={{ backgroundColor: '#ff5f56' }}></span>
        <span className="terminal-dot-marker" style={{ backgroundColor: '#ffbd2e' }}></span>
        <span className="terminal-dot-marker" style={{ backgroundColor: '#27c93f' }}></span>
        <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
          project_{index + 1}.py
        </span>
      </div>

      {/* Folder Icon + Links */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', marginTop: '0.25rem' }}>
        <FiFolder style={{ fontSize: '2rem', color: project.color, opacity: 0.85 }} />
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank" rel="noreferrer"
            className="text-muted"
            style={{ fontSize: '1.25rem', transition: 'color 0.3s' }}
            title="View Source Code"
            onClick={e => e.stopPropagation()}
          >
            <FiGithub />
          </a>
          {project.link !== '#' && (
            <a
              href={project.link}
              target="_blank" rel="noreferrer"
              className="text-muted"
              style={{ fontSize: '1.25rem', transition: 'color 0.3s' }}
              title="Live Demo"
              onClick={e => e.stopPropagation()}
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.85rem', color: '#fff' }}>
        {project.title}
      </h3>
      <p className="text-muted text-sm" style={{ marginBottom: '1.75rem', flexGrow: 1, lineHeight: '1.65' }}>
        {project.desc}
      </p>

      <div className="flex gap-1" style={{ flexWrap: 'wrap', marginTop: 'auto' }}>
        {project.tech.map((tech, i) => (
          <span
            key={i}
            style={{
              padding: '0.25rem 0.75rem',
              background: `${project.color}12`,
              border: `1px solid ${project.color}30`,
              borderRadius: '2rem',
              color: project.color,
              fontSize: '0.75rem',
              fontWeight: 700
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
