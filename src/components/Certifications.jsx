import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiStar, FiCheckCircle, FiTrendingUp, FiChevronDown, FiCode, FiExternalLink } from 'react-icons/fi';
import { fadeUp, viewport } from '../utils/animations';

export default function Certifications() {
  const [expandedId, setExpandedId] = useState(null);

  const credentials = [
    {
      id: 1,
      type: "Achievement",
      title: "NSCET Hackathon",
      issuer: "NSCET",
      date: "2023",
      desc: "Participated in the NSCET Hackathon, collaborating in a team-based competitive environment to develop innovative software solutions under tight deadlines. Showcased strong problem-solving and collaboration skills.",
      icon: <FiStar style={{ fontSize: '1.25rem' }} />,
      color: "#f59e0b",
      verify: "#"
    },
    {
      id: 2,
      type: "Certification",
      title: "Python Programming",
      issuer: "Infosys Springboard",
      date: "2023",
      desc: "Comprehensive training in Python programming covering advanced data structures, algorithmic problem-solving, object-oriented programming, and software development best practices.",
      icon: <FiCode style={{ fontSize: '1.25rem' }} />,
      color: "#3b82f6",
      verify: "#"
    },
    {
      id: 3,
      type: "Certification",
      title: "Advanced Java Programming",
      issuer: "Infosys Springboard",
      date: "2023",
      desc: "In-depth coverage of advanced Java concepts including OOP principles, enterprise backend methodologies, Java application architecture, and best practices for scalable software development.",
      icon: <FiCheckCircle style={{ fontSize: '1.25rem' }} />,
      color: "#818cf8",
      verify: "#"
    },
    {
      id: 4,
      type: "Certification",
      title: "Advanced Data Science",
      issuer: "Cisco",
      date: "2024",
      desc: "Comprehensive training in statistical analysis, machine learning algorithms, data-driven insights, and real-world data science problem solving techniques using industry-standard tools.",
      icon: <FiTrendingUp style={{ fontSize: '1.25rem' }} />,
      color: "#38bdf8",
      verify: "#"
    },
  ];

  return (
    <section id="certifications" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0 }} />

      <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>

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
          style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          {credentials.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="glass cert-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: `4px solid ${item.color}`,
                  cursor: 'pointer',
                  background: isExpanded ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                  borderColor: isExpanded ? 'rgba(255,255,255,0.15)' : 'var(--glass-border)',
                  boxShadow: isExpanded ? `0 15px 35px -10px ${item.color}30` : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  
                  {/* Left: Icon & Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
                    <div style={{ 
                      position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      width: '54px', height: '54px', background: `${item.color}15`, borderRadius: '1rem', 
                      flexShrink: 0, color: item.color, border: `1px solid ${item.color}40`,
                      boxShadow: `inset 0 0 15px ${item.color}20`
                    }}>
                      {/* Number Badge overlay */}
                      <div style={{ position: 'absolute', top: '-8px', right: '-8px', width: '22px', height: '22px', borderRadius: '50%', background: item.color, color: '#fff', fontSize: '0.65rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 10px ${item.color}60` }}>
                        {index + 1}
                      </div>
                      {item.icon}
                    </div>
                    
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.5px' }}>{item.title}</h3>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: item.color, background: `${item.color}15`, border: `1px solid ${item.color}30`, padding: '0.2rem 0.6rem', borderRadius: '2rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          {item.type}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>
                        <span>{item.issuer}</span>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                        <span style={{ color: '#fff', opacity: 0.8 }}>{item.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Chevron */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0, background: isExpanded ? `${item.color}20` : 'rgba(255,255,255,0.05)', color: isExpanded ? item.color : 'var(--text-secondary)' }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <FiChevronDown size={20} />
                  </motion.div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: '1.5rem' }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ paddingLeft: '4.85rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <p className="text-muted" style={{ fontSize: '1rem', lineHeight: 1.7, margin: 0, maxWidth: '650px' }}>
                          {item.desc}
                        </p>
                        
                        <div>
                          <a href={item.verify} target="_blank" rel="noreferrer" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', padding: '0.5rem 1.25rem', borderRadius: '2rem', color: '#fff' }} onClick={e => e.stopPropagation()}>
                            <FiExternalLink /> Verify Credential
                          </a>
                        </div>
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
