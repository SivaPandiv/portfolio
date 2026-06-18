import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  const contactLinks = [
    {
      label: "Email Me",
      value: "vsivapandi86@gmail.com",
      href: "mailto:vsivapandi86@gmail.com",
      icon: <FiMail />
    },
    {
      label: "LinkedIn Profile",
      value: "linkedin.com/in/siva-pandi-v-4b75492a3",
      href: "https://www.linkedin.com/in/siva-pandi-v-4b75492a3",
      icon: <FiLinkedin />
    },
    {
      label: "GitHub Repositories",
      value: "github.com/ssivapandi",
      href: "https://github.com/ssivapandi",
      icon: <FiGithub />
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        
        {/* Section Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        <div className="section-divider"></div>

        <div className="contact-grid">
          
          {/* Left Column: Contact Cards */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl"
              style={{ marginBottom: '1rem', color: 'var(--accent-primary)', fontWeight: 700 }}
            >
              Let's build something great.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted text-sm"
              style={{ marginBottom: '2.5rem', maxWidth: '400px', lineHeight: '1.6' }}
            >
              I am currently looking for new developer or analyst opportunities. Whether you have a project in mind, a question, or just want to connect, feel free to reach out!
            </motion.p>

            <div className="flex flex-col">
              {contactLinks.map((link, index) => (
                <motion.a 
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="glass contact-card"
                >
                  <div className="contact-card-icon">
                    {link.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {link.label}
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 700, marginTop: '0.2rem' }}>
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: Glassmorphic Message Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass"
            style={{ padding: '2.5rem', borderRadius: '1.5rem', position: 'relative' }}
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name Input */}
                  <div className="form-group">
                    <label className="form-label flex items-center gap-1">
                      <FiUser style={{ color: 'var(--accent-primary)' }} /> Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Your name" 
                      className="form-input"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="form-group">
                    <label className="form-label flex items-center gap-1">
                      <FiMail style={{ color: 'var(--accent-primary)' }} /> Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="you@example.com" 
                      className="form-input"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div className="form-group">
                    <label className="form-label flex items-center gap-1">
                      <FiMessageSquare style={{ color: 'var(--accent-primary)' }} /> Message
                    </label>
                    <textarea 
                      placeholder="Write your message here..." 
                      className="form-input"
                      style={{ minHeight: '120px', resize: 'vertical' }}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="btn btn-primary flex items-center gap-1"
                    style={{ width: '100%', padding: '1rem', marginTop: '1rem', borderRadius: '0.75rem' }}
                  >
                    <span>Send Message</span>
                    <FiSend style={{ transition: 'transform 0.3s' }} />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    minHeight: '340px',
                    textAlign: 'center' 
                  }}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.1 }}
                    style={{ 
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '50%', 
                      background: 'rgba(56, 189, 248, 0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '2rem',
                      color: 'var(--accent-primary)',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <FiSend />
                  </motion.div>
                  <h3 className="text-2xl" style={{ marginBottom: '0.75rem', fontWeight: 800 }}>Message Sent!</h3>
                  <p className="text-muted text-sm" style={{ maxWidth: '280px', lineHeight: '1.6' }}>
                    Thank you for reaching out, {formState.name}. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
