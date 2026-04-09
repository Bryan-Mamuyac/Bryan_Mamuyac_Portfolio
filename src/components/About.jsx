import React from 'react';
import { personalInfo, careerPath } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: '520', label: 'OJT Hours', icon: '⏱️' },
  { value: '5+', label: 'Projects Built', icon: '🚀' },
  { value: '2', label: 'Tech Domains', icon: '🎯' },
  { value: '2026', label: 'BS IT Graduate', icon: '🎓' },
];

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
          className="about-grid" ref={ref}>

          {/* Left: Text */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 0.7s ease' }}>
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Where Code Meets{' '}
              <span style={{ color: 'var(--accent-primary)' }}>Data</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px', fontSize: '1.02rem' }}>
              {personalInfo.bio}
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '36px', fontSize: '1.02rem' }}>
              {personalInfo.bio2}
            </p>

            {/* Quick facts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Degree', value: 'BS Information Technology · Business Analytics' },
                { label: 'School', value: 'DMMMSU-MLUC, San Fernando City, La Union' },
                { label: 'Location', value: 'Aringay, La Union, Philippines' },
                { label: 'Email', value: personalInfo.email },
              ].map(fact => (
                <div key={fact.label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                    color: 'var(--accent-primary)', minWidth: '80px', paddingTop: '2px',
                  }}>{fact.label}</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats + Career paths */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.7s ease 0.2s' }}>
            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              {stats.map((stat, i) => (
                <div key={i} className="glass" style={{ padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{stat.icon}</div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem', fontWeight: 800,
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>{stat.value}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '4px' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Career paths */}
            {Object.values(careerPath).map((path, i) => (
              <div key={i} className="glass" style={{ padding: '20px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <span style={{
                    width: '36px', height: '36px',
                    background: `${path.color}20`,
                    border: `1px solid ${path.color}50`,
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem',
                  }}>{path.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {path.title}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: path.color }}>Career Path</div>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '12px' }}>
                  {path.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {path.current.slice(0, 4).map(tech => (
                    <span key={tech} className="badge">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
