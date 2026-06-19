import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCode, FiLayers, FiCpu, FiDatabase, FiSettings, FiBookOpen,
  FiBriefcase, FiSliders, FiTerminal, FiEye, FiMonitor,
  FiBarChart2, FiGrid, FiTool, FiActivity
} from 'react-icons/fi';
import {
  SiPython, SiCplusplus, SiC,
  SiHtml5, SiCss, SiJavascript, SiFlask, SiBootstrap,
  SiMysql, SiPostgresql, SiMongodb,
  SiTensorflow, SiPytorch,
  SiPycharm, SiEclipseide, SiGit, SiReact,
  SiNumpy, SiPandas, SiScikitlearn, SiPlotly, SiScipy
} from 'react-icons/si';
import { fadeUp, fadeLeft, scaleIn, staggerContainer, viewport } from '../utils/animations';

export default function About() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    { id: 'All',         name: 'All Skills',     icon: <FiLayers /> },
    { id: 'Programming', name: 'Programming',     icon: <FiCode /> },
    { id: 'WebDev',      name: 'Web Dev',         icon: <FiTerminal /> },
    { id: 'Databases',   name: 'Databases',       icon: <FiDatabase /> },
    { id: 'AI_ML',       name: 'AI / ML',         icon: <FiCpu /> },
    { id: 'DataScience', name: 'Data Science',    icon: <FiActivity /> },
    { id: 'Tools',       name: 'Tools & IDEs',    icon: <FiSettings /> },
  ];

  const skillsData = [
    // ── Programming Languages ──────────────────
    { name: 'Python',      category: 'Programming', level: '90%', icon: <SiPython />,      color: '#3776AB' },
    { name: 'Java',        category: 'Programming', level: '85%', icon: <FiCode />,        color: '#ED8B00' },
    { name: 'JavaScript',  category: 'Programming', level: '90%', icon: <SiJavascript />,  color: '#F7DF1E' },
    { name: 'C++',         category: 'Programming', level: '75%', icon: <SiCplusplus />,   color: '#00599C' },
    { name: 'C',           category: 'Programming', level: '80%', icon: <SiC />,           color: '#A8B9CC' },
    { name: 'SQL',         category: 'Programming', level: '85%', icon: <SiMysql />,       color: '#4479A1' },

    // ── Web Development ────────────────────────
    { name: 'HTML5',       category: 'WebDev', level: '95%', icon: <SiHtml5 />,      color: '#E34F26' },
    { name: 'CSS3',        category: 'WebDev', level: '92%', icon: <SiCss />,        color: '#1572B6' },
    { name: 'React',       category: 'WebDev', level: '80%', icon: <SiReact />,      color: '#61DAFB' },
    { name: 'Bootstrap',   category: 'WebDev', level: '85%', icon: <SiBootstrap />,  color: '#7952B3' },
    { name: 'Flask',       category: 'WebDev', level: '80%', icon: <SiFlask />,      color: '#CCCCCC' },
    { name: 'Git',         category: 'WebDev', level: '88%', icon: <SiGit />,        color: '#F05032' },

    // ── Databases ──────────────────────────────
    { name: 'MySQL',      category: 'Databases', level: '85%', icon: <SiMysql />,      color: '#4479A1' },
    { name: 'PostgreSQL', category: 'Databases', level: '80%', icon: <SiPostgresql />, color: '#336791' },
    { name: 'MongoDB',    category: 'Databases', level: '75%', icon: <SiMongodb />,    color: '#47A248' },

    // ── AI / ML ────────────────────────────────
    { name: 'TensorFlow',      category: 'AI_ML', level: '70%', icon: <SiTensorflow />, color: '#FF6F00' },
    { name: 'PyTorch',         category: 'AI_ML', level: '75%', icon: <SiPytorch />,    color: '#EE4C2C' },
    { name: 'LLM Integration', category: 'AI_ML', level: '80%', icon: <FiCpu />,        color: '#a855f7' },
    { name: 'Computer Vision', category: 'AI_ML', level: '80%', icon: <FiEye />,        color: '#ec4899' },

    // ── Data Science ──────────────────────────
    { name: 'NumPy',        category: 'DataScience', level: '88%', icon: <SiNumpy />,       color: '#4DABCF' },
    { name: 'Pandas',       category: 'DataScience', level: '85%', icon: <SiPandas />,      color: '#e08e2c' },
    { name: 'Scikit-Learn', category: 'DataScience', level: '82%', icon: <SiScikitlearn />, color: '#F7931E' },
    { name: 'Matplotlib',   category: 'DataScience', level: '80%', icon: <SiPlotly />,      color: '#11A9BA' },
    { name: 'Seaborn',      category: 'DataScience', level: '78%', icon: <FiActivity />,    color: '#4C72B0' },
    { name: 'SciPy',        category: 'DataScience', level: '75%', icon: <SiScipy />,       color: '#8CAAE6' },
    { name: 'EDA',          category: 'DataScience', level: '85%', icon: <FiBarChart2 />,   color: '#38bdf8' },

    // ── Tools & IDEs ──────────────────────────
    { name: 'VS Code',  category: 'Tools', level: '95%', icon: <FiMonitor />,    color: '#007ACC' },
    { name: 'PyCharm',  category: 'Tools', level: '85%', icon: <SiPycharm />,    color: '#21D789' },
    { name: 'Power BI', category: 'Tools', level: '85%', icon: <FiBarChart2 />,  color: '#F2C811' },
    { name: 'Tableau',  category: 'Tools', level: '80%', icon: <FiGrid />,       color: '#E97627' },
    { name: 'Excel',    category: 'Tools', level: '90%', icon: <FiTool />,       color: '#217346' },
    { name: 'Eclipse',  category: 'Tools', level: '75%', icon: <SiEclipseide />, color: '#2C2255' },
  ];

  const experience = [
    {
      role: "Data Analytics & Python Intern",
      company: "Assure eService, Chennai",
      period: "FEB 2026 – APRIL 2026",
      desc: "Completed a Data Analytics project using Python, Power BI, and Tableau. Performed data cleaning, exploratory data analysis (EDA), and visualization on structured datasets. Developed interactive dashboards and generated actionable insights to support data-driven decision-making."
    },
    {
      role: "Full Stack Java Intern",
      company: "Techvolt Software Solution, Coimbatore",
      period: "JUNE 2025 – JULY 2025",
      desc: "Completed a Full-Stack Development Internship using Java technologies. Worked on web application development, frontend integration, and backend support while collaborating in an agile team environment."
    },
    {
      role: "Web Development Intern",
      company: "Thirumular IT Solutions, Chennai",
      period: "FEB 2025 – MAR 2025",
      desc: "Completed a Web Development Internship at Thirumular IT Solutions, Chennai. Developed responsive web applications and gained experience in frontend development and project collaboration."
    }
  ];

  const education = [
    {
      icon: '🎓',
      level: 'Undergraduate',
      degree: 'B.E — Computer Science & Engineering',
      inst: 'Nadar Saraswathi College of Engineering & Technology',
      year: '2022 – 2026',
      status: 'Graduated',
      grade: '7.79 CGPA',
      color: '#3b82f6'
    },
    {
      icon: '📘',
      level: 'Higher Secondary',
      degree: 'HSC — Class XII',
      inst: 'Seventh Day Adventist Matriculation Higher Secondary School',
      year: '2020 – 2022',
      status: 'Completed',
      grade: '67%',
      color: '#06b6d4'
    },
    {
      icon: '📗',
      level: 'Secondary',
      degree: 'SSC — Class X',
      inst: 'Seventh Day Adventist Matriculation Higher Secondary School',
      year: '2019 – 2020',
      status: 'Completed',
      grade: '65%',
      color: '#818cf8'
    }
  ];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  const uniqueFilteredSkills = activeCategory === 'All'
    ? Array.from(new Map(filteredSkills.map(s => [s.name, s])).values())
    : filteredSkills;

  return (
    <section id="about" className="section">
      <div className="container">

        {/* Section Header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          className="section-header"
        >
          <span className="section-eyebrow">Get to Know Me</span>
          <h2 className="section-title text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginTop: '0.5rem' }}>

          {/* ── Left Column: Experience & Education ── */}
          <div className="flex flex-col gap-8">

            {/* Experience */}
            <div>
              <motion.h3
                variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}
                className="text-2xl flex items-center gap-1"
                style={{ marginBottom: '2rem', color: 'var(--accent-primary)' }}
              >
                <FiBriefcase style={{ fontSize: '1.5rem' }} /> Experience
              </motion.h3>
              <motion.div
                variants={staggerContainer(0.15)}
                initial="hidden" whileInView="show" viewport={viewport}
                className="timeline"
              >
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    variants={fadeLeft}
                    className="timeline-item glass"
                    style={{ padding: '1.5rem', borderRadius: '1.25rem', position: 'relative' }}
                  >
                    <div className="timeline-dot"></div>
                    <h4 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>{exp.role}</h4>
                    <div className="text-muted text-sm" style={{ marginBottom: '0.75rem', fontWeight: 500 }}>
                      {exp.company} &bull; <span className="gradient-text">{exp.period}</span>
                    </div>
                    <p className="text-muted text-sm" style={{ lineHeight: '1.6' }}>{exp.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Education */}
            <div>
              <motion.h3
                variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}
                className="text-2xl flex items-center gap-1"
                style={{ marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}
              >
                <FiBookOpen style={{ fontSize: '1.5rem' }} /> Education
              </motion.h3>
              <motion.div
                variants={staggerContainer(0.12)}
                initial="hidden" whileInView="show" viewport={viewport}
                className="flex flex-col"
                style={{ gap: '1rem' }}
              >
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={fadeLeft}
                    whileHover={{ x: 4 }}
                    className="glass edu-card"
                    style={{
                      padding: '1.25rem 1.5rem',
                      borderRadius: '1rem',
                      borderLeft: `3px solid ${edu.color}`,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Subtle glow bg */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px',
                      background: `linear-gradient(to bottom, ${edu.color}, ${edu.color}44)`,
                      borderRadius: '3px 0 0 3px'
                    }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        {/* Level label */}
                        <div style={{
                          fontSize: '0.68rem', fontWeight: 700, letterSpacing: '1.5px',
                          textTransform: 'uppercase', color: edu.color,
                          marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem'
                        }}>
                          <span>{edu.icon}</span> {edu.level}
                        </div>
                        {/* Degree */}
                        <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem', lineHeight: 1.3 }}>
                          {edu.degree}
                        </h4>
                        {/* Institution */}
                        <p className="text-muted" style={{ fontSize: '0.8rem', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                          {edu.inst}
                        </p>
                        {/* Year range */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                          <span style={{
                            fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-secondary)',
                            background: 'rgba(255,255,255,0.04)', border: '1px solid var(--glass-border)',
                            padding: '0.15rem 0.6rem', borderRadius: '1rem'
                          }}>{edu.year}</span>
                          <span style={{
                            fontSize: '0.72rem', fontWeight: 600, color: '#34d399',
                            background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)',
                            padding: '0.15rem 0.6rem', borderRadius: '1rem'
                          }}>{edu.status}</span>
                        </div>
                      </div>
                      {/* Grade pill */}
                      <div style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        minWidth: '64px', padding: '0.6rem 0.75rem', borderRadius: '0.75rem',
                        background: `${edu.color}10`, border: `1px solid ${edu.color}28`, textAlign: 'center', flexShrink: 0
                      }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: 800, color: edu.color, lineHeight: 1 }}>{edu.grade}</span>
                        <span style={{ fontSize: '0.62rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Score</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>

          {/* ── Right Column: Skills ── */}
          <div>
            <motion.h3
              variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
              className="text-2xl flex items-center gap-1"
              style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}
            >
              <FiSliders style={{ fontSize: '1.5rem' }} /> My Skills
            </motion.h3>

            {/* Category Filter Tabs */}
            <motion.div
              variants={staggerContainer(0.07)}
              initial="hidden" whileInView="show" viewport={viewport}
              className="skills-tabs" style={{ marginBottom: '1.75rem' }}
            >
              {skillCategories.map(cat => (
                <motion.button
                  key={cat.id}
                  variants={scaleIn}
                  className={`tab-btn flex items-center gap-1 ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              layout
              className="grid"
              style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                gap: '0.85rem',
                minHeight: '250px',
                alignContent: 'start'
              }}
            >
              <AnimatePresence mode="popLayout">
                {uniqueFilteredSkills.map((skill, i) => (
                  <motion.div
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    transition={{ duration: 0.3, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.08, y: -6 }}
                    className="glass skill-card flex flex-col items-center justify-center"
                    style={{ padding: '1.1rem 0.75rem', borderRadius: '1rem', textAlign: 'center', cursor: 'default', gap: '0.5rem' }}
                  >
                    <div style={{
                      fontSize: '2rem',
                      color: skill.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      filter: `drop-shadow(0 0 8px ${skill.color}55)`,
                      transition: 'filter 0.3s ease'
                    }}>
                      {skill.icon}
                    </div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                      {skill.name}
                    </div>
                    <div className="progress-track" style={{ width: '85%', marginTop: '0.25rem' }}>
                      <div className="progress-fill" style={{ width: skill.level }}></div>
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {skill.level}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
