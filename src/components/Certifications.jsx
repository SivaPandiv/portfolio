import { motion } from 'framer-motion';
import { FiAward, FiStar, FiCheckCircle } from 'react-icons/fi';

export default function Certifications() {
  const certifications = [
    {
      title: "Advanced Data Science",
      issuer: "Cisco",
      desc: "Comprehensive training in statistical analysis, machine learning algorithms, and data insights.",
      icon: <FiAward style={{ fontSize: '1.75rem', color: 'var(--accent-primary)' }} />
    },
    {
      title: "Python Programming",
      issuer: "Infosys Springboard",
      desc: "Advanced software development principles, data structures, and algorithmic implementation in Python.",
      icon: <FiCheckCircle style={{ fontSize: '1.75rem', color: 'var(--accent-secondary)' }} />
    },
    {
      title: "Advanced Java Programming",
      issuer: "Infosys Springboard",
      desc: "In-depth OOP practices, enterprise backend methodologies, and Java application architecture.",
      icon: <FiCheckCircle style={{ fontSize: '1.75rem', color: 'var(--accent-secondary)' }} />
    }
  ];

  const achievements = [
    {
      title: "NSCET Hackathon",
      detail: "Collaborated in a team-based competitive hackathon environment, implementing rapid prototyping and innovative computational designs.",
      icon: <FiStar style={{ fontSize: '2.5rem', color: 'var(--accent-primary)' }} />
    }
  ];

  return (
    <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container">
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Certifications &amp; <span className="gradient-text">Achievements</span>
        </motion.h2>
        <div className="section-divider"></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginTop: '1rem' }}>
          
          {/* Certifications List */}
          <div>
            <h3 className="text-2xl" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <FiAward style={{ color: 'var(--accent-primary)' }} /> Certifications
            </h3>
            
            <div className="flex flex-col gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, x: 6 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass cert-card"
                  style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
                >
                  <div style={{ marginTop: '0.2rem' }}>
                    {cert.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{cert.title}</h4>
                    <span className="badge" style={{ margin: '0.35rem 0 0.5rem 0' }}>{cert.issuer}</span>
                    <p className="text-muted text-sm" style={{ lineHeight: '1.5' }}>{cert.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements List */}
          <div>
            <h3 className="text-2xl" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <FiStar style={{ color: 'var(--accent-secondary)' }} /> Key Achievements
            </h3>
            
            <div className="flex flex-col gap-4">
              {achievements.map((ach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.04, y: -6 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="glass"
                  style={{ 
                    padding: '2.5rem 2rem', 
                    textAlign: 'center', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '1rem',
                    minHeight: '280px',
                    borderColor: 'rgba(129, 140, 248, 0.15)'
                  }}
                >
                  <div style={{
                    padding: '1rem',
                    borderRadius: '50%',
                    background: 'rgba(56, 189, 248, 0.05)',
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {ach.icon}
                  </div>
                  <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>{ach.title}</h4>
                  <p className="text-muted text-sm" style={{ lineHeight: '1.6', maxWidth: '300px' }}>
                    {ach.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
