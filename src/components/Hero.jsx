import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiDatabase, FiCpu } from 'react-icons/fi';
import profileImg from '../assets/sivax.jpeg';

export default function Hero() {
  return (
    <section className="section flex items-center justify-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Content */}
        <div style={{ textAlign: 'left' }}>
          <motion.h4 
            initial={{ opacity:0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
            className="text-xl text-muted"
            style={{ marginBottom: '1rem' }}
          >
            Hello, world! I am
          </motion.h4>
          
          <motion.h1 
            initial={{ opacity:0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl"
            style={{ marginBottom: '1.5rem', fontWeight: 800 }}
          >
            V. <span className="gradient-text">Siva Pandi</span>
          </motion.h1>
          
          <motion.h3
            initial={{ opacity:0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl"
            style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}
          >
            Software Developer <span style={{ color: 'var(--accent-primary)', opacity: 0.8 }}>||</span> Data Analyst
          </motion.h3>

          <motion.p 
            initial={{ opacity:0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted"
            style={{ marginBottom: '2.5rem', maxWidth: '600px', lineHeight: '1.7' }}
          >
            Results-driven Full Stack Developer skilled in <strong>HTML, CSS, JavaScript, Python, relational databases</strong>, and also focused on <strong>Data Analytics</strong>. Experienced in RESTful APIs, Git, and deployment workflows, building scalable and high-performance web applications. Ready to deliver clean code and impactful solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity:0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-2"
          >
            <a href="#projects" className="btn btn-primary flex items-center gap-1">
              View My Work <FiArrowRight />
            </a>
            <a href="https://www.linkedin.com/in/siva-pandi-v-4b75492a3" target="_blank" rel="noreferrer" className="btn btn-outline">
              View Resume
            </a>
          </motion.div>
        </div>

        {/* Right Photo (Dynamic Scanner) */}
        <motion.div
           initial={{ opacity:0, scale: 0.9 }}
           animate={{ opacity:1, scale: 1 }}
           transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
           style={{ display: 'flex', justifyContent: 'center', position: 'relative', top: '35px' }}
        >
          <div className="scanner-container">
            {/* Dashed outer scanner ring */}
            <div className="scanner-ring-dashed"></div>
            
            {/* Solid glowing scanner ring */}
            <div className="scanner-ring-solid"></div>
            
            {/* Scanner corners */}
            <div className="scanner-corners">
              <div className="scanner-corner scanner-corner-tl"></div>
              <div className="scanner-corner scanner-corner-tr"></div>
              <div className="scanner-corner scanner-corner-bl"></div>
              <div className="scanner-corner scanner-corner-br"></div>
            </div>

            {/* Orbit Floating Badge 1 - Python */}
            <motion.div 
              className="floating-badge"
              style={{ top: '10%', left: '-15%' }}
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <FiCode style={{ color: 'var(--accent-primary)' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Python</span>
            </motion.div>

            {/* Orbit Floating Badge 2 - SQL/DB */}
            <motion.div 
              className="floating-badge"
              style={{ bottom: '15%', right: '-15%' }}
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            >
              <FiDatabase style={{ color: 'var(--accent-secondary)' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>SQL & DB</span>
            </motion.div>

            {/* Orbit Floating Badge 3 - Data Analytics */}
            <motion.div 
              className="floating-badge"
              style={{ bottom: '-5%', left: '10%' }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            >
              <FiCpu style={{ color: 'var(--accent-primary)' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Data Analyst</span>
            </motion.div>

            {/* Image Container with Hover zoom */}
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '30%',
              padding: '6px',
              background: 'var(--accent-gradient)',
              boxShadow: '0 0 50px rgba(56, 189, 248, 0.25)',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 2
            }}>
              <motion.img 
                src={profileImg} 
                alt="V. Siva Pandi" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  objectPosition: 'center top',
                  borderRadius: '30%',
                  border: '5px solid var(--bg-color)',
                  cursor: 'pointer'
                }} 
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
