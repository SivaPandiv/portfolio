import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCode, FiLayers, FiCpu, FiDatabase, FiSettings, FiBookOpen,
  FiBriefcase, FiTerminal, FiBarChart2, FiGrid, FiMonitor, FiActivity,
  FiMapPin, FiCalendar, FiAward, FiCloud
} from 'react-icons/fi';
import {
  SiPython, SiJavascript, SiFlask, SiBootstrap, SiHtml5, SiCss,
  SiMysql, SiPostgresql, SiMongodb,
  SiTensorflow, SiPytorch,
  SiGit, SiReact, SiOpencv,
  SiPandas, SiScikitlearn,
  SiTypescript, SiTailwindcss, SiDocker, SiPostman, SiFastapi
} from 'react-icons/si';
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, viewport } from '../utils/animations';

export default function About() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    { id: 'All',         name: 'All',          icon: <FiLayers /> },
    { id: 'Programming', name: 'Programming',  icon: <FiCode /> },
    { id: 'WebDev',      name: 'Web Dev',      icon: <FiTerminal /> },
    { id: 'Databases',   name: 'Databases',    icon: <FiDatabase /> },
    { id: 'AI_ML',       name: 'AI / ML',      icon: <FiCpu /> },
    { id: 'DataScience', name: 'Data Science', icon: <FiActivity /> },
    { id: 'Tools',       name: 'Tools & Cloud', icon: <FiSettings /> },
  ];

  const skillsData = [
    // Programming Languages
    { name: 'Python',      category: 'Programming', level: 95, icon: <SiPython />,      color: '#3776AB' },
    { name: 'TypeScript',  category: 'Programming', level: 85, icon: <SiTypescript />,  color: '#3178C6' },
    { name: 'JavaScript',  category: 'Programming', level: 90, icon: <SiJavascript />,  color: '#F7DF1E' },
    { name: 'Java',        category: 'Programming', level: 85, icon: <FiCode />,        color: '#ED8B00' },
    { name: 'C++',         category: 'Programming', level: 80, icon: <FiCode />,        color: '#00599C' },
    { name: 'SQL',         category: 'Programming', level: 90, icon: <SiMysql />,       color: '#4479A1' },
    // Web Dev
    { name: 'React',       category: 'WebDev',      level: 85, icon: <SiReact />,       color: '#61DAFB' },
    { name: 'Tailwind CSS',category: 'WebDev',      level: 88, icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'FastAPI',     category: 'WebDev',      level: 82, icon: <SiFastapi />,     color: '#009688' },
    { name: 'Flask',       category: 'WebDev',      level: 80, icon: <SiFlask />,       color: '#CCCCCC' },
    { name: 'Bootstrap',   category: 'WebDev',      level: 82, icon: <SiBootstrap />,   color: '#7952B3' },
    { name: 'Git',         category: 'WebDev',      level: 88, icon: <SiGit />,         color: '#F05032' },
    // Databases
    { name: 'PostgreSQL',  category: 'Databases',   level: 85, icon: <SiPostgresql />,  color: '#336791' },
    { name: 'MongoDB',     category: 'Databases',   level: 80, icon: <SiMongodb />,     color: '#47A248' },
    { name: 'MySQL',       category: 'Databases',   level: 90, icon: <SiMysql />,       color: '#4479A1' },
    // AI / ML
    { name: 'PyTorch',     category: 'AI_ML',       level: 80, icon: <SiPytorch />,     color: '#EE4C2C' },
    { name: 'TensorFlow',  category: 'AI_ML',       level: 80, icon: <SiTensorflow />,  color: '#FF6F00' },
    { name: 'LLMs / GenAI',category: 'AI_ML',       level: 85, icon: <FiCpu />,         color: '#a855f7' },
    { name: 'Comp. Vision',category: 'AI_ML',       level: 78, icon: <SiOpencv />,      color: '#5C3EE8' },
    // Data Science
    { name: 'Pandas',      category: 'DataScience', level: 90, icon: <SiPandas />,      color: '#e08e2c' },
    { name: 'Scikit-Learn',category: 'DataScience', level: 85, icon: <SiScikitlearn />, color: '#F7931E' },
    { name: 'Data Viz.',   category: 'DataScience', level: 85, icon: <FiBarChart2 />,   color: '#38bdf8' },
    // Tools & Cloud
    { name: 'Docker',      category: 'Tools',       level: 80, icon: <SiDocker />,      color: '#2496ED' },
    { name: 'AWS',         category: 'Tools',       level: 75, icon: <FiCloud />,       color: '#FF9900' },
    { name: 'Postman',     category: 'Tools',       level: 85, icon: <SiPostman />,     color: '#FF6C37' },
    { name: 'Power BI',    category: 'Tools',       level: 85, icon: <FiBarChart2 />,   color: '#F2C811' },
    { name: 'Tableau',     category: 'Tools',       level: 80, icon: <FiGrid />,        color: '#E97627' },
    { name: 'VS Code',     category: 'Tools',       level: 95, icon: <FiMonitor />,     color: '#007ACC' },
  ];

  const experience = [
    {
      role: 'Data Analytics & Python Intern',
      company: 'Assure eService',
      location: 'Chennai, India',
      period: 'Feb 2026 – Apr 2026',
      color: '#3b82f6',
      tags: ['Python', 'Power BI', 'Tableau', 'EDA'],
      desc: 'Completed a Data Analytics project using Python, Power BI, and Tableau. Performed data cleaning, exploratory data analysis (EDA), and visualization on structured datasets. Developed interactive dashboards and generated actionable insights to support data-driven decision-making.',
    },
    {
      role: 'Full Stack Java Intern',
      company: 'Techvolt Software Solution',
      location: 'Coimbatore, India',
      period: 'Jun 2025 – Jul 2025',
      color: '#06b6d4',
      tags: ['Java', 'Full Stack', 'REST APIs', 'Agile'],
      desc: 'Completed a Full-Stack Development Internship using Java technologies. Worked on web application development, frontend integration, and backend support while collaborating in an agile team environment.',
    },
    {
      role: 'Web Development Intern',
      company: 'Thirumular IT Solutions',
      location: 'Chennai, India',
      period: 'Feb 2025 – Mar 2025',
      color: '#818cf8',
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
      desc: 'Completed a Web Development Internship at Thirumular IT Solutions, Chennai. Developed responsive web applications and gained experience in frontend development and project collaboration.',
    },
  ];

  const education = [
    {
      abbr: 'B.E',
      level: 'Undergraduate',
      degree: 'B.E — Computer Science & Engineering',
      inst: 'Nadar Saraswathi College of Engineering & Technology',
      year: '2022 – 2026',
      status: 'Graduated',
      grade: '7.79 CGPA',
      color: '#3b82f6',
    },
    {
      abbr: 'XII',
      level: 'Higher Secondary',
      degree: 'HSC — Class XII',
      inst: 'Seventh Day Adventist Matric. Hr. Sec. School',
      year: '2020 – 2022',
      status: 'Completed',
      grade: '67%',
      color: '#06b6d4',
    },
    {
      abbr: 'X',
      level: 'Secondary',
      degree: 'SSC — Class X',
      inst: 'Seventh Day Adventist Matric. Hr. Sec. School',
      year: '2019 – 2020',
      status: 'Completed',
      grade: '65%',
      color: '#818cf8',
    },
  ];

  const filteredSkills = activeCategory === 'All'
    ? Array.from(new Map(skillsData.map(s => [s.name, s])).values())
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="about" className="section">
      <div className="container">

        {/* ── Section Header ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="section-header">
          <span className="section-eyebrow">Get to Know Me</span>
          <h2 className="section-title text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* ── Quick Stats Bar ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="quick-facts">
          {[
            { val: '3+', label: 'Years Coding' },
            { val: '20+', label: 'Tech Stack' },
            { val: '10+', label: 'Projects Done' },
            { val: '3', label: 'Internships' },
          ].map((fact, i) => (
            <div key={i} className="quick-fact-item">
              <div className="quick-fact-value">{fact.val}</div>
              <div className="quick-fact-label">{fact.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ═══════════════════════════════════════════════════════
            SKILLS — Full Width
        ═══════════════════════════════════════════════════════ */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          style={{ marginTop: '3rem' }}>

          {/* Skills Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(129,140,248,0.2), rgba(59,130,246,0.2))',
              border: '1px solid rgba(129,140,248,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem', color: 'var(--accent-tertiary)',
            }}>
              <FiLayers />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '0.1rem' }}>Technical Skills</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                // click to filter by category
              </p>
            </div>
          </div>

          {/* Filter Tabs */}
          <motion.div
            variants={staggerContainer(0.05)}
            initial="hidden" whileInView="show" viewport={viewport}
            className="skills-tabs" style={{ marginBottom: '1.75rem' }}
          >
            {skillCategories.map(cat => (
              <motion.button
                key={cat.id} variants={scaleIn}
                className={`tab-btn flex items-center gap-1 ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                style={{ position: 'relative' }}
              >
                {activeCategory === cat.id && (
                  <motion.div layoutId="skill-tab-bg"
                    style={{ position: 'absolute', inset: 0, borderRadius: '2rem', background: 'var(--accent-gradient)', zIndex: -1 }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.35rem', color: activeCategory === cat.id ? '#fff' : 'inherit' }}>
                  {cat.icon} <span>{cat.name}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div layout style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '1rem',
          }}>
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, i) => (
                <motion.div
                  layout key={skill.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.3, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, scale: 1.07 }}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid rgba(255,255,255,0.07)`,
                    borderRadius: '16px',
                    padding: '1.25rem 0.75rem',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: '0.7rem', textAlign: 'center', cursor: 'default',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    position: 'relative', overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${skill.color}55`;
                    e.currentTarget.style.boxShadow = `0 12px 35px -8px ${skill.color}35, inset 0 0 30px ${skill.color}05`;
                    e.currentTarget.style.background = `${skill.color}08`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  }}
                >
                  {/* Glow spot */}
                  <div style={{
                    position: 'absolute', top: '-10px', right: '-10px',
                    width: '50px', height: '50px', borderRadius: '50%',
                    background: `${skill.color}15`, filter: 'blur(12px)',
                    pointerEvents: 'none',
                  }} />

                  {/* Icon */}
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '14px',
                    background: `${skill.color}15`,
                    border: `1px solid ${skill.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.7rem', color: skill.color,
                    boxShadow: `0 4px 16px ${skill.color}20`,
                  }}>
                    {skill.icon}
                  </div>

                  {/* Name */}
                  <span style={{
                    fontSize: '0.78rem', fontWeight: 700,
                    color: 'var(--text-primary)', lineHeight: 1.2,
                  }}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════
            EXPERIENCE + EDUCATION — Side by Side
        ═══════════════════════════════════════════════════════ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          marginTop: '4rem',
        }}>

          {/* ── EXPERIENCE TIMELINE ── */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))',
                border: '1px solid rgba(59,130,246,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', color: 'var(--accent-primary)',
              }}>
                <FiBriefcase />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.1rem' }}>Experience</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  // professional journey
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div style={{ position: 'relative' }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute', left: '19px', top: '0', bottom: '0',
                width: '2px',
                background: 'linear-gradient(to bottom, rgba(59,130,246,0.6), rgba(129,140,248,0.3), transparent)',
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    variants={fadeLeft}
                    initial="hidden" whileInView="show" viewport={viewport}
                    transition={{ delay: i * 0.1 }}
                    style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                  >
                    {/* Node */}
                    <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                      <motion.div
                        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1, type: 'spring' }}
                        style={{
                          width: '40px', height: '40px', borderRadius: '50%',
                          background: `linear-gradient(135deg, ${exp.color}, ${exp.color}88)`,
                          border: `2px solid ${exp.color}60`,
                          boxShadow: `0 0 20px ${exp.color}50`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff', fontSize: '0.9rem',
                        }}
                      >
                        <FiBriefcase />
                      </motion.div>
                    </div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      style={{
                        flex: 1,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '16px',
                        padding: '1.25rem 1.5rem',
                        position: 'relative', overflow: 'hidden',
                        transition: 'border-color 0.3s, box-shadow 0.3s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = `${exp.color}40`;
                        e.currentTarget.style.boxShadow = `0 8px 30px ${exp.color}15`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {/* Top accent */}
                      <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                        background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                      }} />

                      {/* Role + Period */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
                          {exp.role}
                        </h4>
                        <span style={{
                          fontSize: '0.68rem', fontWeight: 600, padding: '0.25rem 0.65rem',
                          borderRadius: '2rem', background: `${exp.color}15`,
                          border: `1px solid ${exp.color}30`, color: exp.color,
                          whiteSpace: 'nowrap', flexShrink: 0, fontFamily: 'var(--font-mono)',
                        }}>
                          {exp.period}
                        </span>
                      </div>

                      {/* Company + Location */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: exp.color }}>
                          {exp.company}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                          <FiMapPin size={11} /> {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
                        {exp.desc}
                      </p>

                      {/* Tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {exp.tags.map(tag => (
                          <span key={tag} style={{
                            fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.55rem',
                            borderRadius: '4px', background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)',
                            textTransform: 'uppercase', letterSpacing: '0.5px',
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── EDUCATION TIMELINE ── */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(129,140,248,0.2))',
                border: '1px solid rgba(6,182,212,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', color: 'var(--accent-secondary)',
              }}>
                <FiBookOpen />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.1rem' }}>Education</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                  // academic background
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div style={{ position: 'relative' }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute', left: '19px', top: '0', bottom: '0',
                width: '2px',
                background: 'linear-gradient(to bottom, rgba(6,182,212,0.6), rgba(129,140,248,0.3), transparent)',
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={fadeRight}
                    initial="hidden" whileInView="show" viewport={viewport}
                    transition={{ delay: i * 0.12 }}
                    style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                  >
                    {/* Node */}
                    <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                      <motion.div
                        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.12, type: 'spring' }}
                        style={{
                          width: '40px', height: '40px', borderRadius: '50%',
                          background: `linear-gradient(135deg, ${edu.color}, ${edu.color}88)`,
                          border: `2px solid ${edu.color}60`,
                          boxShadow: `0 0 20px ${edu.color}50`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff', fontSize: '0.7rem', fontWeight: 900,
                          fontFamily: 'var(--font-main)',
                        }}
                      >
                        {edu.abbr}
                      </motion.div>
                    </div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      style={{
                        flex: 1,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '16px',
                        padding: '1.25rem 1.5rem',
                        position: 'relative', overflow: 'hidden',
                        transition: 'border-color 0.3s, box-shadow 0.3s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = `${edu.color}40`;
                        e.currentTarget.style.boxShadow = `0 8px 30px ${edu.color}15`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {/* Top accent */}
                      <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                        background: `linear-gradient(90deg, ${edu.color}, transparent)`,
                      }} />

                      {/* Level badge */}
                      <div style={{ marginBottom: '0.4rem' }}>
                        <span style={{
                          fontSize: '0.62rem', fontWeight: 700, padding: '0.2rem 0.6rem',
                          borderRadius: '4px', background: `${edu.color}15`,
                          border: `1px solid ${edu.color}30`, color: edu.color,
                          textTransform: 'uppercase', letterSpacing: '1px',
                          fontFamily: 'var(--font-mono)',
                        }}>
                          {edu.level}
                        </span>
                      </div>

                      {/* Degree */}
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', lineHeight: 1.35, marginBottom: '0.4rem' }}>
                        {edu.degree}
                      </h4>

                      {/* Institution */}
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.85rem' }}>
                        {edu.inst}
                      </p>

                      {/* Footer: Year, Status, Grade */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                          <FiCalendar size={11} /> {edu.year}
                        </span>
                        <span style={{
                          fontSize: '0.68rem', fontWeight: 700, padding: '0.18rem 0.5rem',
                          borderRadius: '4px', background: 'rgba(52,211,153,0.1)',
                          border: '1px solid rgba(52,211,153,0.25)', color: '#34d399',
                        }}>
                          ✓ {edu.status}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', fontWeight: 700, color: edu.color, marginLeft: 'auto' }}>
                          <FiAward size={12} /> {edu.grade}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
