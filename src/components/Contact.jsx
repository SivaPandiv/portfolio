import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted"
          style={{ maxWidth: '600px', margin: '0 auto 2rem' }}
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to connect, feel free to reach out via email or connect with me on LinkedIn!
        </motion.p>
        
        <motion.a 
          href="mailto:vsivapandi86@gmail.com" 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="btn btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}
        >
          <FiMail /> vsivapandi86@gmail.com
        </motion.a>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          <a href="https://github.com/ssivapandi" target="_blank" rel="noreferrer" className="text-muted" style={{ fontSize: '2rem', transition: 'color 0.3s' }}><FiGithub /></a>
          <a href="https://www.linkedin.com/in/siva-pandi-v-4b75492a3" target="_blank" rel="noreferrer" className="text-muted" style={{ fontSize: '2rem', transition: 'color 0.3s' }}><FiLinkedin /></a>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-muted text-sm"
          style={{ marginTop: '2rem' }}
        >
          Phone: +91 9360872180
        </motion.p>
      </div>
    </section>
  );
}
