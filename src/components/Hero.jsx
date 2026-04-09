import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { personalInfo } from '../data/portfolio';

const roles = ["Full Stack Developer", "Data Analyst", "Problem Solver", "IT Graduate"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 60 : 110;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex(i => (i + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Mamuyac_Bryan_JR_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1,
      padding: '100px 24px 60px',
    }}>
      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>

        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '8px 20px',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '50px',
          backdropFilter: 'blur(10px)',
          marginBottom: '32px',
          animation: 'fadeInUp 0.5s ease forwards',
        }}>
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#68d391',
            boxShadow: '0 0 8px #68d391',
            animation: 'pulse-glow 2s infinite',
          }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Open to Work · La Union, Philippines
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          lineHeight: 1.05,
          color: 'var(--text-primary)',
          marginBottom: '16px',
          animation: 'fadeInUp 0.6s ease 0.1s both',
        }}>
          Bryan{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-cyan), var(--accent-purple))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Mamuyac</span>
          <br />
          <span style={{ fontSize: '0.65em', fontWeight: 600, color: 'var(--text-secondary)' }}>JR.</span>
        </h1>

        {/* Typewriter */}
        <div style={{
          minHeight: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          animation: 'fadeInUp 0.6s ease 0.2s both',
        }}>
          <span style={{
            fontSize: 'clamp(1.3rem, 3vw, 2rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            color: 'var(--accent-primary)',
          }}>
            {displayText}
            <span style={{ animation: 'blink 1s infinite', color: 'var(--accent-cyan)' }}>|</span>
          </span>
        </div>

        {/* Bio */}
        <p style={{
          maxWidth: '620px',
          margin: '0 auto 40px',
          color: 'var(--text-secondary)',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          animation: 'fadeInUp 0.6s ease 0.3s both',
        }}>
          Building systems that think and dashboards that speak. Bridging full-stack development and data analytics to build solutions that don't just run — they <em style={{ color: 'var(--accent-primary)', fontStyle: 'normal' }}>reveal</em>.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: '60px',
          animation: 'fadeInUp 0.6s ease 0.4s both',
        }}>
          <Link to="projects" smooth={true} offset={-70} duration={600}>
            <button className="btn-primary">
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </Link>
          <button className="btn-ghost" onClick={handleDownloadResume}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download Resume
          </button>
        </div>

        {/* Social Links */}
        <div style={{
          display: 'flex', gap: '16px', justifyContent: 'center',
          animation: 'fadeInUp 0.6s ease 0.5s both',
        }}>
          {[
            { label: 'GitHub', url: personalInfo.github, icon: 'github' },
            { label: 'LinkedIn', url: personalInfo.linkedin, icon: 'linkedin' },
            { label: 'Email', url: `mailto:${personalInfo.email}`, icon: 'email' },
          ].map(social => (
            <a
              key={social.label}
              href={social.url}
              target={social.icon !== 'email' ? '_blank' : '_self'}
              rel="noopener noreferrer"
              style={{
                width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '1.2rem',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.color = 'var(--accent-primary)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 25px var(--accent-glow)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              title={social.label}
            >
              {social.icon === 'github' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              )}
              {social.icon === 'linkedin' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              )}
              {social.icon === 'email' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          animation: 'fadeIn 1s ease 1s both',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>
            SCROLL
          </span>
          <div style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, var(--accent-primary), transparent)',
            animation: 'fadeInUp 1.5s ease infinite',
          }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
