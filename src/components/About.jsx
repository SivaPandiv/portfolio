import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCode, FiLayers, FiCpu, FiDatabase, FiSettings, FiBookOpen,
  FiBriefcase, FiSliders, FiTerminal, FiEye, FiMonitor,
  FiBarChart2, FiGrid, FiTool
} from 'react-icons/fi';
import {
  SiPython, SiCplusplus, SiC,
  SiHtml5, SiCss, SiJavascript, SiFlask, SiBootstrap,
  SiMysql, SiPostgresql, SiMongodb,
  SiTensorflow, SiPytorch,
  SiPycharm, SiEclipseide, SiGit, SiReact
} from 'react-icons/si';

export default function About() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    { id: 'All',         name: 'All Skills',           icon: <FiLayers /> },
    { id: 'Programming', name: 'Programming',           icon: <FiCode /> },
    { id: 'WebDev',      name: 'Web Development',       icon: <FiTerminal /> },
    { id: 'Databases',   name: 'Databases',             icon: <FiDatabase /> },
    { id: 'AI_ML',       name: 'AI / ML',               icon: <FiCpu /> },
    { id: 'Tools',       name: 'Tools & IDEs',          icon: <FiSettings /> },
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

    // ── Tools & IDEs ───────────────────────────
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
      degree: "B.E - Computer Science & Engineering",
      inst: "Nadar Saraswathi College of Engineering & Technology",
      year: "2022 – 2026 (Graduated)",
      details: "8.00 CGPA (Up to 8th semester)"
    },
    {
      degree: "HSC",
      inst: "Seventh Day Adventist Matriculation Higher Secondary School",
      year: "2022",
      details: "65% Marks"
    },
    {
      degree: "SSC",
      inst: "Seventh Day Adventist Matriculation Higher Secondary School",
      year: "2020",
      details: "65% Marks"
    }
  ];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  // Deduplicate when showing All
  const uniqueFilteredSkills = activeCategory === 'All'
    ? Array.from(new Map(filteredSkills.map(s => [s.name, s])).values())
    : filteredSkills;

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        <div className="section-divider"></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', marginTop: '1rem' }}>

          {/* ── Left Column: Experience & Education ── */}
          <div className="flex flex-col gap-8">

            {/* Experience */}
            <div>
              <h3 className="text-2xl flex items-center gap-1" style={{ marginBottom: '2rem', color: 'var(--accent-primary)' }}>
                <FiBriefcase style={{ fontSize: '1.5rem' }} /> Experience
              </h3>
              <div className="timeline">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
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
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl flex items-center gap-1" style={{ marginBottom: '2rem', color: 'var(--accent-secondary)' }}>
                <FiBookOpen style={{ fontSize: '1.5rem' }} /> Education
              </h3>
              <div className="flex flex-col gap-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass"
                    style={{ padding: '1.5rem', borderRadius: '1rem' }}
                  >
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{edu.degree}</h4>
                    <div className="text-muted text-sm" style={{ margin: '0.25rem 0 0.5rem' }}>
                      {edu.inst} &bull; {edu.year}
                    </div>
                    <span className="badge">{edu.details}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Right Column: Skills ── */}
          <div>
            <h3 className="text-2xl flex items-center gap-1" style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
              <FiSliders style={{ fontSize: '1.5rem' }} /> My Skills
            </h3>

            {/* Category Filter Tabs */}
            <div className="skills-tabs" style={{ marginBottom: '1.75rem' }}>
              {skillCategories.map(cat => (
                <button
                  key={cat.id}
                  className={`tab-btn flex items-center gap-1 ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Skills Grid with Brand Icons */}
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
                {uniqueFilteredSkills.map(skill => (
                  <motion.div
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    whileHover={{ scale: 1.08, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="glass skill-card flex flex-col items-center justify-center"
                    style={{ padding: '1.1rem 0.75rem', borderRadius: '1rem', textAlign: 'center', cursor: 'default', gap: '0.5rem' }}
                  >
                    {/* Brand Icon */}
                    <div style={{
                      fontSize: '2rem',
                      color: skill.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      filter: `drop-shadow(0 0 8px ${skill.color}55)`,
                      transition: 'filter 0.3s ease'
                    }}>
                      {skill.icon}
                    </div>

                    {/* Skill Name */}
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                      {skill.name}
                    </div>

                    {/* Progress Bar */}
                    <div className="progress-track" style={{ width: '85%', marginTop: '0.25rem' }}>
                      <div className="progress-fill" style={{ width: skill.level }}></div>
                    </div>

                    {/* Level % */}
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
