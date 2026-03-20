import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
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
            V. <span className="gradient-text">Sivapandi</span>
          </motion.h1>
          
          <motion.h3
            initial={{ opacity:0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl"
            style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}
          >
            Results-driven Full Stack Developer & Data Analyst
          </motion.h3>

          <motion.p 
            initial={{ opacity:0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted"
            style={{ marginBottom: '2.5rem', maxWidth: '500px' }}
          >
            Skilled in HTML, CSS, JavaScript, Python, and relational databases. Experienced in RESTful APIs, Git, and deployment workflows, building scalable and high-performance applications.
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
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Photo */}
        <motion.div
           initial={{ opacity:0, scale: 0.8 }}
           animate={{ opacity:1, scale: 1 }}
           transition={{ delay: 0.5, type: "spring" }}
           style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
           <div style={{
             width: '100%',
             maxWidth: '350px',
             aspectRatio: '1/1',
             borderRadius: '50%',
             padding: '8px',
             background: 'var(--accent-gradient)',
             boxShadow: '0 0 40px rgba(56, 189, 248, 0.4)'
           }}>
             <img 
               src={profileImg} 
               alt="V. Sivapandi" 
               style={{ 
                 width: '100%', 
                 height: '100%', 
                 objectFit: 'cover', 
                 borderRadius: '50%',
                 border: '6px solid var(--bg-color)'
               }} 
             />
           </div>
        </motion.div>

      </div>
    </section>
  );
}
