import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { title: "Programming Languages", desc: "C, Python, Java, SQL" },
    { title: "Software Development", desc: "HTML, CSS, JavaScript, Bootstrap, MySQL, Flask" },
    { title: "Tools & IDEs", desc: "Eclipse, NetBeans, VS Code, PyCharm, Power BI, Excel" },
    { title: "Soft Skills", desc: "Team Collaboration, Adaptability, Time Management, Problem Solving" }
  ];

  const experience = [
    { role: "Data Analytics & Python Intern", company: "Assure Eservice, Chennai", period: "FEB 2026 – Present", desc: "Data analysis and preprocessing using Python, including EDA and visualization to generate actionable insights." },
    { role: "Full Stack Java Intern", company: "Techvolt Software Solution, Coimbatore", period: "Completed", desc: "Contributed to web application modules with front-end integration and backend support using Java-based frameworks." },
    { role: "Web Development Intern", company: "Thirumoolar IT Software Solution, Chennai", period: "Completed", desc: "Developed responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap. Applied SEO fundamentals." }
  ];

  const education = [
    { degree: "B.E Computer Science and Engineering", inst: "Nadar Saraswathi College of Engineering & Technology", year: "2026", details: "7.65 CGPA (up to 5th semester)" },
    { degree: "HSC", inst: "Seventh Day Adventist Matriculation Higher Secondary School", year: "2022", details: "65%" },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
          
          {/* Skills */}
          <div>
            <h3 className="text-2xl" style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>Skills</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass"
                  style={{ padding: '1.5rem', borderRadius: '1rem' }}
                >
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{skill.title}</h4>
                  <p className="text-muted text-sm">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-2xl" style={{ marginTop: '2.5rem', marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Education</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ padding: '1rem 0', borderBottom: index < education.length - 1 ? '1px solid var(--glass-border)' : 'none' }}
                >
                  <h4 style={{ fontSize: '1.1rem' }}>{edu.degree}</h4>
                  <div className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{edu.inst} | {edu.year}</div>
                  <p className="text-accent text-sm" style={{ color: 'var(--accent-primary)' }}>{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl" style={{ marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Experience</h3>
            <div style={{ position: 'relative', borderLeft: '2px solid var(--glass-border)', paddingLeft: '2rem' }}>
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  style={{ marginBottom: '2.5rem', position: 'relative' }}
                >
                  {/* Timeline Dot */}
                  <div style={{
                    position: 'absolute',
                    left: '-2.4rem',
                    top: '0.3rem',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: 'var(--accent-gradient)',
                    border: '2px solid var(--bg-color)'
                  }}></div>
                  
                  <h4 style={{ fontSize: '1.2rem', color: '#fff' }}>{exp.role}</h4>
                  <div className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '0.8rem' }}>{exp.company} | <span style={{ color: 'var(--accent-primary)' }}>{exp.period}</span></div>
                  <p className="text-muted text-sm" style={{ lineHeight: '1.6' }}>{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
