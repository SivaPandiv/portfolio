import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: "Motion Detection System",
      desc: "A real-time motion detection application using Python and OpenCV to detect and track movement via webcam for surveillance purposes.",
      tech: ["Python", "OpenCV"],
      link: "#",
      github: "#"
    },
    {
      title: "Online Shirt Try-On Website",
      desc: "A responsive virtual try-on platform enabling real-time shirt preview via webcam with optimized UI/UX design.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "#",
      github: "http://github.com/ssivapandi/Virtual_shirttracking-main"
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

        <div className="grid grid-cols-2 gap-4" style={{ marginTop: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {projects.map((project, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '1rem' }}
            >
              <h3 className="text-xl" style={{ marginBottom: '1rem' }}>{project.title}</h3>
              <p className="text-muted" style={{ marginBottom: '1.5rem', flexGrow: 1 }}>{project.desc}</p>
              
              <div className="flex gap-1" style={{ flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-sm" style={{ padding: '0.4rem 1rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '2rem', color: 'var(--accent-primary)' }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'color 0.3s' }}>
                  <FiGithub /> Code
                </a>
                {project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'color 0.3s' }}>
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
