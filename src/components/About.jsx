import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiLayers, FiCpu, FiDatabase, FiSettings, FiBookOpen, FiBriefcase, FiSliders, FiTerminal } from 'react-icons/fi';

export default function About() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    { id: 'All', name: 'All Skills', icon: <FiLayers /> },
    { id: 'Programming', name: 'Programming Languages', icon: <FiCode /> },
    { id: 'WebDev', name: 'Software Development', icon: <FiTerminal /> },
    { id: 'Databases', name: 'Databases', icon: <FiDatabase /> },
    { id: 'AI_ML', name: 'AI / Machine Learning', icon: <FiCpu /> },
    { id: 'Tools', name: 'Tools & IDEs', icon: <FiSettings /> }
  ];

  const skillsData = [
    // Programming Languages
    { name: 'Python', category: 'Programming', level: '90%' },
    { name: 'Java', category: 'Programming', level: '85%' },
    { name: 'C++', category: 'Programming', level: '75%' },
    { name: 'C', category: 'Programming', level: '80%' },
    { name: 'SQL', category: 'Programming', level: '85%' },
    
    // Software Development
    { name: 'HTML5 & CSS3', category: 'WebDev', level: '95%' },
    { name: 'JavaScript', category: 'WebDev', level: '90%' },
    { name: 'Flask', category: 'WebDev', level: '80%' },
    { name: 'Bootstrap', category: 'WebDev', level: '85%' },
    { name: 'MySQL', category: 'WebDev', level: '85%' },

    // Tools
    { name: 'Power BI', category: 'Tools', level: '85%' },
    { name: 'Tableau', category: 'Tools', level: '80%' },
    { name: 'Excel', category: 'Tools', level: '90%' },
    { name: 'VS Code', category: 'Tools', level: '95%' },
    { name: 'PyCharm', category: 'Tools', level: '85%' },
    { name: 'Eclipse', category: 'Tools', level: '75%' },
    { name: 'NetBeans', category: 'Tools', level: '70%' },

    // AI & ML
    { name: 'PyTorch', category: 'AI_ML', level: '75%' },
    { name: 'TensorFlow', category: 'AI_ML', level: '70%' },
    { name: 'LLM Integration', category: 'AI_ML', level: '80%' },
    { name: 'Computer Vision', category: 'AI_ML', level: '80%' },

    // Databases
    { name: 'MySQL', category: 'Databases', level: '85%' },
    { name: 'PostgreSQL', category: 'Databases', level: '80%' },
    { name: 'MongoDB', category: 'Databases', level: '75%' }
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
    : skillsData.filter(skill => skill.category === activeCategory);

  // Eliminate duplicates when showing 'All' list
  const uniqueFilteredSkills = activeCategory === 'All'
    ? Array.from(new Map(filteredSkills.map(item => [item.name, item])).values())
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
          
          {/* Left Column: Education & Experience */}
          <div className="flex flex-col gap-8">
            
            {/* Experience */}
            <div>
              <h3 className="text-2xl flex items-center gap-1" style={{ marginBottom: '2rem', color: 'var(--accent-primary)' }}>
                <FiBriefcase style={{ fontSize: '1.5rem' }} /> Experience
              </h3>
              <div className="timeline">
                {experience.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="timeline-item glass"
                    style={{ padding: '1.5rem', borderRadius: '1.25rem', position: 'relative' }}
                  >
                    <div className="timeline-dot"></div>
                    <h4 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>{exp.role}</h4>
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
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass"
                    style={{ padding: '1.5rem', borderRadius: '1rem' }}
                  >
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{edu.degree}</h4>
                    <div className="text-muted text-sm" style={{ margin: '0.25rem 0 0.5rem' }}>{edu.inst} &bull; {edu.year}</div>
                    <span className="badge">{edu.details}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Skills */}
          <div>
            <h3 className="text-2xl flex items-center gap-1" style={{ marginBottom: '2rem', color: 'var(--accent-primary)' }}>
              <FiSliders style={{ fontSize: '1.5rem' }} /> My Skills
            </h3>
            
            {/* Interactive Category Selector */}
            <div className="skills-tabs">
              {skillCategories.map(category => (
                <button
                  key={category.id}
                  className={`tab-btn flex items-center gap-1 ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <motion.div 
              layout
              className="grid"
              style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: '1rem',
                minHeight: '250px',
                alignContent: 'start'
              }}
            >
              <AnimatePresence mode="popLayout">
                {uniqueFilteredSkills.map(skill => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.06, y: -5 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    key={skill.name}
                    className="glass skill-card flex flex-col items-center justify-center"
                    style={{ padding: '1.25rem', borderRadius: '1rem', textAlign: 'center', cursor: 'default' }}
                  >
                    <div className="gradient-text" style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                      {skill.name}
                    </div>
                    <div className="text-muted text-sm" style={{ fontSize: '0.72rem', marginBottom: '0.5rem' }}>
                      {skill.category === 'AI_ML' ? 'AI / ML' : skill.category}
                    </div>
                    <div className="progress-track" style={{ width: '80%' }}>
                      <div className="progress-fill" style={{ width: skill.level }}></div>
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
