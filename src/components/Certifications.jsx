import { motion } from 'framer-motion';
import { FiAward, FiStar, FiCheckCircle } from 'react-icons/fi';
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, viewport } from '../utils/animations';

export default function Certifications() {
  const certifications = [
    {
      title: "Advanced Data Science",
      issuer: "Cisco",
      desc: "Comprehensive training in statistical analysis, machine learning algorithms, and data insights.",
      icon: <FiAward style={{ fontSize: '1.75rem', color: 'var(--accent-primary)' }} />
    },
    {
      title: "Computer Networking",
      issuer: "Cisco",
      desc: "Foundational and advanced concepts in network protocols, IP addressing, routing, switching, and network security essentials.",
      icon: <FiAward style={{ fontSize: '1.75rem', color: '#34d399' }} />
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
      title: "🏆 First Prize — NSCET Hackathon",
      detail: "Secured First Prize at the NSCET Hackathon by presenting an innovative project solution and demonstrating strong technical problem-solving skills.",
      icon: <span style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 18px #f59e0b)' }}>🏆</span>
    }
  ];

  return (
    <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container">

        {/* Section Header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          className="section-header"
        >
          <span className="section-eyebrow">Credentials & Wins</span>
          <h2 className="section-title text-center">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginTop: '0.5rem' }}>

          {/* Certifications List */}
          <div>
            <motion.h3
              variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}
              className="text-2xl"
              style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <FiAward style={{ color: 'var(--accent-primary)' }} /> Certifications
            </motion.h3>

            <motion.div
              variants={staggerContainer(0.15)}
              initial="hidden" whileInView="show" viewport={viewport}
              className="flex flex-col gap-4"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeLeft}
                  whileHover={{ scale: 1.02, x: 6 }}
                  className="glass cert-card"
                  style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
                >
                  <div style={{ marginTop: '0.2rem' }}>{cert.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{cert.title}</h4>
                    <span className="badge" style={{ margin: '0.35rem 0 0.5rem 0' }}>{cert.issuer}</span>
                    <p className="text-muted text-sm" style={{ lineHeight: '1.5' }}>{cert.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Achievements List */}
          <div>
            <motion.h3
              variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}
              className="text-2xl"
              style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <FiStar style={{ color: 'var(--accent-secondary)' }} /> Key Achievements
            </motion.h3>

            <motion.div
              variants={staggerContainer(0.15)}
              initial="hidden" whileInView="show" viewport={viewport}
              className="flex flex-col gap-4"
            >
              {achievements.map((ach, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.04, y: -6 }}
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
                    borderColor: 'rgba(245, 158, 11, 0.25)',
                    boxShadow: '0 0 32px rgba(245, 158, 11, 0.06)'
                  }}
                >
                  <div style={{
                    padding: '1rem', borderRadius: '50%',
                    background: 'rgba(56, 189, 248, 0.05)',
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {ach.icon}
                  </div>
                  <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>{ach.title}</h4>
                  <p className="text-muted text-sm" style={{ lineHeight: '1.6', maxWidth: '300px' }}>{ach.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
