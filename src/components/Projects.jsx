import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: "Smart Grievance Redressal System",
      desc: "Built an AI-powered Smart Grievance Redressal System using Generative AI and NLP for intelligent complaint analysis, categorization, and automated resolution support.",
      tech: ["Generative AI", "NLP", "Python", "Flask", "Machine Learning"],
      github: "https://github.com/SivaPandiv/Smart-Grievance-Redressal-System",
      link: "#"
    },
    {
      title: "Cyberbullying Detection using ML",
      desc: "Developed a Machine Learning & Natural Language Processing model to identify, classify, and detect abusive or cyberbullying-related texts across social datasets using advanced sentiment analysis.",
      tech: ["Python", "ML", "NLP", "Sentiment Analysis", "Scikit-Learn"],
      github: "https://github.com/SivaPandiv/cyberbullying-detection-ml",
      link: "#"
    },
    {
      title: "Online Shirt Try-On Website",
      desc: "Developed a virtual try-on application using OpenCV, Computer Vision, and Python. Implemented real-time garment visualization and object tracking to provide an accurate and seamless experience.",
      tech: ["Python", "OpenCV", "Computer Vision", "HTML", "CSS", "Bootstrap"],
      github: "http://github.com/ssivapandi/Virtual_shirttracking-main",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid" style={{ marginTop: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 80 }}
              className="glass"
              style={{ 
                padding: '2rem 2.25rem 2.25rem', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%', 
                borderRadius: '1.25rem',
                position: 'relative'
              }}
            >
              {/* Terminal Window Header Decoration */}
              <div className="project-card-header">
                <span className="terminal-dot-marker" style={{ backgroundColor: '#ff5f56' }}></span>
                <span className="terminal-dot-marker" style={{ backgroundColor: '#ffbd2e' }}></span>
                <span className="terminal-dot-marker" style={{ backgroundColor: '#27c93f' }}></span>
              </div>

              {/* Folder Icon / Aesthetic */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', marginTop: '0.5rem' }}>
                <FiFolder style={{ fontSize: '2rem', color: 'var(--accent-primary)', opacity: 0.8 }} />
                <div className="flex gap-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-muted" 
                    style={{ fontSize: '1.25rem', transition: 'color 0.3s' }}
                    title="View Source Code"
                  >
                    <FiGithub style={{ cursor: 'pointer' }} />
                  </a>
                  {project.link !== "#" && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-muted" 
                      style={{ fontSize: '1.25rem', transition: 'color 0.3s' }}
                      title="Live Demo"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl" style={{ marginBottom: '1rem', fontWeight: 700, color: '#fff' }}>
                {project.title}
              </h3>
              
              <p className="text-muted text-sm" style={{ marginBottom: '2rem', flexGrow: 1, lineHeight: '1.6' }}>
                {project.desc}
              </p>
              
              <div className="flex gap-1" style={{ flexWrap: 'wrap', marginTop: 'auto' }}>
                {project.tech.map((tech, i) => (
                  <span key={i} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
