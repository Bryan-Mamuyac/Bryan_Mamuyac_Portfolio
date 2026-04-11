import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { contactInfo, personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const EMAILJS_CONFIG = {
  serviceId:  'service_m1rfm2g',
  templateId: 'template_o6zwc0j',
  publicKey:  'RQ1SlgEYAVgv3rK0h',
};

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.subject || 'Portfolio Inquiry',
          message:    formData.message,
          to_email:   contactInfo.email,
        },
        EMAILJS_CONFIG.publicKey,
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg('Failed to send. Please email directly at ' + contactInfo.email);
    }
  };

  const inputStyle = {
    width: '100%', padding: '14px 18px',
    background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
    borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)', fontSize: '0.95rem', outline: 'none',
    transition: 'var(--transition)', backdropFilter: 'blur(10px)',
  };

  const socials = [
    { label: 'GitHub',    url: contactInfo.github,    icon: 'github'    },
    { label: 'LinkedIn',  url: contactInfo.linkedin,  icon: 'linkedin'  },
    { label: 'Facebook',  url: contactInfo.facebook,  icon: 'facebook'  },
    { label: 'Instagram', url: contactInfo.instagram, icon: 'instagram' },
    { label: 'X',        url: contactInfo.twitter,   icon: 'x'         },
  ];

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

          {/* Left */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 0.7s ease' }}>

            {/* Open to work */}
            <div className="glass" style={{ padding: '24px', marginBottom: '20px', borderColor: 'rgba(104,211,145,0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#68d391', boxShadow: '0 0 10px #68d391' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#68d391' }}>
                  {contactInfo.availability}
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{contactInfo.availabilityNote}</p>
            </div>

            {/* Contact cards */}
            {[
              {
                label: 'Email',
                value: contactInfo.email,
                href: `mailto:${contactInfo.email}`,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
              },
              {
                label: 'Phone',
                value: contactInfo.phone,
                href: `tel:${contactInfo.phone}`,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.51-1.51a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                ),
              },
              {
                label: 'Location',
                value: contactInfo.location,
                href: null,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
              },
            ].map(item => (
              <div key={item.label} className="glass" style={{ padding: '18px 20px', marginBottom: '12px', display: 'flex', gap: '14px', alignItems: 'center' }}>
                <span style={{
                  width: '38px', height: '38px', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(99,179,237,0.1)',
                  border: '1px solid rgba(99,179,237,0.2)',
                  borderRadius: '10px',
                }}>
                  {item.icon}
                </span>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}>{item.value}</a>
                    : <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.value}</p>
                  }
                </div>
              </div>
            ))}

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
              {socials.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}
                  style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '10px', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'var(--transition)', backdropFilter: 'blur(10px)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent-primary)'; e.currentTarget.style.color='var(--accent-primary)'; e.currentTarget.style.transform='translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='var(--glass-border)'; e.currentTarget.style.color='var(--text-secondary)'; e.currentTarget.style.transform='translateY(0)'; }}
                >
                  {s.icon==='github'    && <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>}
                  {s.icon==='linkedin'  && <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                  {s.icon==='facebook'  && <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>}
                  {s.icon==='instagram' && <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>}
                  {s.icon==='x'        && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
                </a>
              ))}
            </div>

            {/* Resume download */}
            <button
              onClick={() => { const l=document.createElement('a'); l.href=personalInfo.resumeUrl; l.download='Mamuyac_Bryan_Resume.pdf'; l.click(); }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '14px' }}
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

              <form ref={formRef} onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor='var(--accent-primary)'}
                      onBlur={e => e.target.style.borderColor='var(--glass-border)'}/>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email Address</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor='var(--accent-primary)'}
                      onBlur={e => e.target.style.borderColor='var(--glass-border)'}/>
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Subject</label>
                  <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Job Opportunity / Project Collaboration"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor='var(--accent-primary)'}
                    onBlur={e => e.target.style.borderColor='var(--glass-border)'}/>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                    placeholder="Hi Bryan, I'd love to discuss..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                    onFocus={e => e.target.style.borderColor='var(--accent-primary)'}
                    onBlur={e => e.target.style.borderColor='var(--glass-border)'}/>
                </div>

                <button type="submit" className="btn-primary"
                  disabled={status === 'sending'}
                  style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}>
                  {status === 'sending' && <span>Sending...</span>}
                  {status === 'success' && <span>Message Sent Successfully!</span>}
                  {status === 'error'   && <span>Failed — try again</span>}
                  {status === 'idle'    && (
                    <>
                      <span>Send Message</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <p style={{ textAlign: 'center', color: '#fc8181', fontSize: '0.8rem', marginTop: '10px' }}>{errorMsg}</p>
                )}

                <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.76rem', marginTop: '14px' }}>
                  Or email directly:{' '}
                  <a href={`mailto:${contactInfo.email}`} style={{ color: 'var(--accent-primary)' }}>{contactInfo.email}</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

export default Contact;