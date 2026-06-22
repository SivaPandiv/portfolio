import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiUser, FiMessageSquare, FiLoader, FiZap } from 'react-icons/fi';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewport } from '../utils/animations';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [focusedField, setFocusedField] = useState(null);

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
      formData.append("_captcha", "false"); 

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
      value: "github.com/ssivapandi",
      href: "https://github.com/ssivapandi",
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
          <div style={{ position: 'relative' }}>
            {/* Background decoration */}
            <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport} className="response-badge">
                <FiZap /> Response time: Usually within 24h
              </motion.div>

              <motion.h3
                variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}
                className="text-2xl"
                style={{ marginBottom: '0.75rem', color: '#fff', fontWeight: 800, letterSpacing: '-0.5px' }}
              >
                Let's build something <span className="gradient-text">great.</span>
              </motion.h3>
              
              <motion.p
                variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}
                className="text-muted text-sm"
                style={{ marginBottom: '2.5rem', maxWidth: '380px', lineHeight: '1.7', fontSize: '1.05rem' }}
              >
                I am currently looking for new developer or data analyst opportunities.
                Whether you have a project in mind, a question, or just want to connect —
                feel free to reach out!
              </motion.p>

              <motion.div
                variants={staggerContainer(0.12)}
                initial="hidden" whileInView="show" viewport={viewport}
                className="flex flex-col"
                style={{ gap: '1rem' }}
              >
                {contactLinks.map((link, index) => (
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                    variants={fadeLeft}
                    className="contact-card"
                    style={{ 
                      borderRadius: '1.25rem', padding: '1.25rem 1.5rem',
                      background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)',
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = link.color;
                      e.currentTarget.style.background = `linear-gradient(90deg, ${link.color}15, rgba(255,255,255,0.02))`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--glass-border)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    }}
                  >
                    <div className="contact-card-icon" style={{
                      background: `${link.color}15`,
                      borderColor: `${link.color}30`,
                      color: link.color,
                      boxShadow: `inset 0 0 10px ${link.color}20`
                    }}>
                      {link.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>
                        {link.label}
                      </h4>
                      <p style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 700 }}>
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden" whileInView="show" viewport={viewport}
            className="premium-card"
            style={{ 
              padding: '2.5rem', 
              position: 'relative' 
            }}
          >
            {/* Mesh background */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              opacity: 0.5, pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
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
                      minHeight: '380px', textAlign: 'center'
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.15, stiffness: 200 }}
                      style={{
                        width: '72px', height: '72px', borderRadius: '50%',
                        background: 'rgba(52,211,153,0.12)',
                        border: '2px solid rgba(52,211,153,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '2rem', color: '#34d399', marginBottom: '1.5rem',
                        boxShadow: '0 0 30px rgba(52,211,153,0.2)'
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
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      Send me a message <FiSend style={{ color: 'var(--accent-primary)' }} />
                    </h4>

                    {/* Name */}
                    <motion.div variants={fadeUp} className="form-group" style={{ position: 'relative' }}>
                      <label className="form-label flex items-center gap-1" style={{ 
                        position: 'absolute', left: '1rem', top: focusedField === 'name' || formState.name ? '-0.6rem' : '1rem',
                        fontSize: focusedField === 'name' || formState.name ? '0.7rem' : '0.9rem',
                        color: focusedField === 'name' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                        background: 'var(--bg-secondary)', padding: '0 0.4rem', borderRadius: '4px',
                        transition: 'all 0.2s ease', pointerEvents: 'none', zIndex: 1
                      }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={fadeUp} className="form-group" style={{ position: 'relative' }}>
                      <label className="form-label flex items-center gap-1" style={{ 
                        position: 'absolute', left: '1rem', top: focusedField === 'email' || formState.email ? '-0.6rem' : '1rem',
                        fontSize: focusedField === 'email' || formState.email ? '0.7rem' : '0.9rem',
                        color: focusedField === 'email' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                        background: 'var(--bg-secondary)', padding: '0 0.4rem', borderRadius: '4px',
                        transition: 'all 0.2s ease', pointerEvents: 'none', zIndex: 1
                      }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div variants={fadeUp} className="form-group" style={{ position: 'relative', marginBottom: '0.5rem' }}>
                      <label className="form-label flex items-center gap-1" style={{ 
                        position: 'absolute', left: '1rem', top: focusedField === 'message' || formState.message ? '-0.6rem' : '1rem',
                        fontSize: focusedField === 'message' || formState.message ? '0.7rem' : '0.9rem',
                        color: focusedField === 'message' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                        background: 'var(--bg-secondary)', padding: '0 0.4rem', borderRadius: '4px',
                        transition: 'all 0.2s ease', pointerEvents: 'none', zIndex: 1
                      }}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        className="form-input"
                        style={{ minHeight: '120px', resize: 'vertical' }}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        maxLength={500}
                        required
                      />
                    </motion.div>
                    
                    <div className="char-count" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem', fontSize: '0.75rem' }}>
                      <span style={{ color: formState.message.length > 450 ? '#f87171' : 'var(--text-secondary)' }}>
                        {formState.message.length} / 500
                      </span>
                    </div>

                    {/* Error message */}
                    {status === 'error' && (
                      <p style={{ color: '#f87171', fontSize: '0.82rem', marginBottom: '1rem', textAlign: 'center', background: 'rgba(248,113,113,0.1)', padding: '0.5rem', borderRadius: '0.5rem' }}>
                        Something went wrong. Please email me directly.
                      </p>
                    )}

                    {/* Submit */}
                    <motion.div variants={fadeUp}>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn btn-primary flex items-center gap-2 justify-center"
                        style={{
                          width: '100%', padding: '1rem',
                          borderRadius: '1rem', opacity: status === 'loading' ? 0.8 : 1,
                          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                          fontSize: '1.05rem', letterSpacing: '0.5px'
                        }}
                      >
                        {status === 'loading' ? (
                          <>
                            <span>Sending...</span>
                            <FiLoader style={{ animation: 'spin 1s linear infinite' }} />
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <motion.div whileHover={{ x: 5, y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                              <FiSend />
                            </motion.div>
                          </>
                        )}
                      </button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
