import React, { useState } from 'react';
import { contactInfo, personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    // Opens default mail client as fallback (no backend needed)
    const mailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 500);
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    background: 'var(--glass-bg)',
    border: '1px solid var(--glass-border)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'var(--transition)',
    backdropFilter: 'blur(10px)',
  };

  return (
    <section id="contact" className="section">
      <div className="container" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Let's Connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Open to full-stack developer and data analyst opportunities. Let's build something great together.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '40px', alignItems: 'start' }}
          className="contact-grid">

          {/* Left: Info */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 0.7s ease' }}>

            {/* Availability badge */}
            <div className="glass" style={{ padding: '24px', marginBottom: '20px', borderColor: 'rgba(104,211,145,0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: '#68d391', boxShadow: '0 0 10px #68d391',
                  animation: 'pulse-glow 2s infinite',
                }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#68d391' }}>
                  {contactInfo.availability}
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{contactInfo.availabilityNote}</p>
            </div>

            {/* Contact Cards */}
            {[
              { icon: '📧', label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: '📱', label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
              { icon: '📍', label: 'Location', value: contactInfo.location, href: null },
            ].map(item => (
              <div key={item.label} className="glass" style={{ padding: '18px 20px', marginBottom: '12px', display: 'flex', gap: '14px', alignItems: 'center' }}>
                <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {[
                { label: 'GitHub', url: contactInfo.github, color: '#fff' },
                { label: 'LinkedIn', url: contactInfo.linkedin, color: '#0a66c2' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = personalInfo.resumeUrl;
                link.download = 'Mamuyac_Bryan_JR_Resume.pdf';
                link.click();
              }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              <span>Download My Resume</span>
            </button>
          </div>

          {/* Right: Form */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.7s ease 0.2s' }}>
            <div className="glass" style={{ padding: '36px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '24px' }}>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Your Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Project Collaboration"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hi Bryan, I'd love to discuss..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === 'sending'}
                  style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  {status === 'sending' ? (
                    <span>Opening mail client...</span>
                  ) : status === 'success' ? (
                    <span>✓ Message Ready!</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>

                <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '12px' }}>
                  This will open your email client. Alternatively, email directly at{' '}
                  <a href={`mailto:${contactInfo.email}`} style={{ color: 'var(--accent-primary)' }}>
                    {contactInfo.email}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
