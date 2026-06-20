import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiUser, FiMessageSquare, FiLoader } from 'react-icons/fi';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewport } from '../utils/animations';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('loading');
    
    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("message", formState.message);
      formData.append("_subject", `Portfolio Contact from ${formState.name}`);
      formData.append("_captcha", "false"); // Disables captcha for AJAX

      const response = await fetch("https://formsubmit.co/ajax/vsivapandi86@gmail.com", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          setFormState({ name: '', email: '', message: '' });
        }, 5000);
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contactLinks = [
    {
      label: "Email Me",
      value: "vsivapandi86@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=vsivapandi86@gmail.com",
      icon: <FiMail />,
      color: '#38bdf8'
    },
    {
      label: "LinkedIn Profile",
      value: "linkedin.com/in/siva-pandi-v",
      href: "https://www.linkedin.com/in/siva-pandi-v-4b75492a3",
      icon: <FiLinkedin />,
      color: '#818cf8'
    },
    {
      label: "GitHub Repositories",
      value: "github.com/SivaPandiv",
      href: "https://github.com/SivaPandiv",
      icon: <FiGithub />,
      color: '#34d399'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">

        {/* Section Header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          className="section-header"
        >
          <span className="section-eyebrow">Let's Connect</span>
          <h2 className="section-title text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="contact-grid">

          {/* Left Column: Contact Info */}
          <div>
            <motion.h3
              variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}
              className="text-2xl"
              style={{ marginBottom: '0.75rem', color: 'var(--accent-primary)', fontWeight: 700 }}
            >
              Let's build something great.
            </motion.h3>
            <motion.p
              variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}
              className="text-muted text-sm"
              style={{ marginBottom: '2rem', maxWidth: '380px', lineHeight: '1.7' }}
            >
              I am currently looking for new developer or data scientist opportunities.
              Whether you have a project in mind, a question, or just want to connect —
              feel free to reach out!
            </motion.p>

            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden" whileInView="show" viewport={viewport}
              className="flex flex-col"
              style={{ gap: '0.85rem' }}
            >
              {contactLinks.map((link, index) => (
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  variants={fadeLeft}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="glass contact-card"
                  style={{ marginBottom: 0, borderRadius: '1rem', padding: '1.1rem 1.4rem' }}
                >
                  <div className="contact-card-icon" style={{
                    background: `${link.color}12`,
                    borderColor: `${link.color}30`,
                    color: link.color
                  }}>
                    {link.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {link.label}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 700, marginTop: '0.2rem' }}>
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Message Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden" whileInView="show" viewport={viewport}
            className="glass"
            style={{ padding: '2.25rem', borderRadius: '1.5rem', position: 'relative' }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.88, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    minHeight: '340px', textAlign: 'center'
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.15, stiffness: 200 }}
                    style={{
                      width: '64px', height: '64px', borderRadius: '50%',
                      background: 'rgba(52,211,153,0.12)',
                      border: '1px solid rgba(52,211,153,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.75rem', color: '#34d399', marginBottom: '1.5rem'
                    }}
                  >
                    ✓
                  </motion.div>
                  <h3 className="text-2xl" style={{ marginBottom: '0.75rem', fontWeight: 800 }}>Message Sent!</h3>
                  <p className="text-muted text-sm" style={{ maxWidth: '280px', lineHeight: '1.6' }}>
                    Thank you for reaching out. I'll get back to you as soon as possible!
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  variants={staggerContainer(0.1, 0.1)}
                  animate="show"
                >
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
                    Send me a message
                  </h4>

                  {/* Name */}
                  <motion.div variants={fadeUp} className="form-group">
                    <label className="form-label flex items-center gap-1">
                      <FiUser style={{ color: 'var(--accent-primary)' }} /> Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Siva Pandi"
                      className="form-input"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={fadeUp} className="form-group">
                    <label className="form-label flex items-center gap-1">
                      <FiMail style={{ color: 'var(--accent-primary)' }} /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="form-input"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={fadeUp} className="form-group">
                    <label className="form-label flex items-center gap-1">
                      <FiMessageSquare style={{ color: 'var(--accent-primary)' }} /> Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project or just say hello!"
                      className="form-input"
                      style={{ minHeight: '110px', resize: 'vertical' }}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                    />
                  </motion.div>

                  {/* Error message */}
                  {status === 'error' && (
                    <p style={{ color: '#f87171', fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                      Something went wrong. Please email me directly at vsivapandi86@gmail.com
                    </p>
                  )}

                  {/* Submit */}
                  <motion.div variants={fadeUp}>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn btn-primary flex items-center gap-1"
                      style={{
                        width: '100%', padding: '0.9rem', marginTop: '0.5rem',
                        borderRadius: '0.85rem', opacity: status === 'loading' ? 0.75 : 1,
                        cursor: status === 'loading' ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {status === 'loading' ? (
                        <>
                          <span>Sending…</span>
                          <FiLoader style={{ animation: 'spin 1s linear infinite' }} />
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FiSend />
                        </>
                      )}
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
