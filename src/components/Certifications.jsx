import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiStar, FiCheckCircle, FiShield, FiTrendingUp, FiChevronDown, FiCode } from 'react-icons/fi';
import { fadeUp, viewport } from '../utils/animations';

export default function Certifications() {
  const [expandedId, setExpandedId] = useState(null);

  const credentials = [
    {
      id: 1,
      type: "Achievement",
      title: "First Prize — NSCET Hackathon",
      issuer: "NSCET",
      date: "2023",
      desc: "Secured First Prize by presenting an innovative project solution and demonstrating strong technical problem-solving skills under pressure.",
      icon: <FiStar style={{ fontSize: '1.25rem', color: '#f59e0b' }} />,
      color: "#f59e0b"
    },
    {
      id: 2,
      type: "Certification",
      title: "Advanced Data Science",
      issuer: "Cisco",
      date: "2024",
      desc: "Comprehensive training in statistical analysis, machine learning algorithms, data insights, and real-world data problem solving.",
      icon: <FiTrendingUp style={{ fontSize: '1.25rem', color: '#38bdf8' }} />,
      color: "#38bdf8"
    },
    {
      id: 3,
      type: "Certification",
      title: "Computer Networking",
      issuer: "Cisco",
      date: "2024",
      desc: "Foundational and advanced concepts in network protocols, IP addressing, routing, switching, and network security essentials.",
      icon: <FiShield style={{ fontSize: '1.25rem', color: '#34d399' }} />,
      color: "#34d399"
    },
    {
      id: 4,
      type: "Certification",
      title: "Python Programming",
      issuer: "Infosys Springboard",
      date: "2023",
      desc: "Advanced software development principles, data structures, and algorithmic implementation in Python.",
      icon: <FiCode style={{ fontSize: '1.25rem', color: '#818cf8' }} />,
      color: "#818cf8"
    },
    {
      id: 5,
      type: "Certification",
      title: "Advanced Java Programming",
      issuer: "Infosys Springboard",
      date: "2023",
      desc: "In-depth OOP practices, enterprise backend methodologies, and Java application architecture.",
      icon: <FiCheckCircle style={{ fontSize: '1.25rem', color: '#a855f7' }} />,
      color: "#a855f7"
    }
  ];

  return (
    <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>

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

        {/* Sleek Row List */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {credentials.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="glass"
                style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: `4px solid ${item.color}`,
                  cursor: 'pointer',
                  transition: 'background 0.3s ease',
                  background: isExpanded ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                  overflow: 'hidden'
                }}
                whileHover={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  
                  {/* Left: Icon & Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', background: `${item.color}15`, borderRadius: '50%', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', margin: 0 }}>{item.title}</h3>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, color: item.color, background: `${item.color}10`, padding: '0.15rem 0.5rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          {item.type}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>
                        <span>{item.issuer}</span>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Chevron */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}
                  >
                    <FiChevronDown size={18} />
                  </motion.div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: '1.25rem' }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ paddingLeft: '4.25rem' }}>
                        <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6, margin: 0, maxWidth: '600px' }}>
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
