import React from 'react';
import { personalInfo, careerPath } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Modern SVG icons for each career track
const IconLaptopCode = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
    <path d="M8 9l2 2-2 2M13 13h3"/>
  </svg>
);

const IconBarChart = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6"  y1="20" x2="6"  y2="14"/>
    <line x1="2"  y1="20" x2="22" y2="20"/>
  </svg>
);

const CAREER_ICONS = {
  primary:   IconLaptopCode,
  secondary: IconBarChart,
};

const stats = [
  { value: '5',      label: 'Projects Built',  sub: 'Full-stack & IoT systems'   },
  { value: 'Jan–Apr',label: 'Internship',      sub: '2026 · Universal Leaf PH'   },
  { value: '2',      label: 'Career Tracks',   sub: 'Full Stack + Data Analytics' },
  { value: '2026',   label: 'BS IT Graduate',  sub: 'DMMMSU-MLUC · La Union'     },
];

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="section">
      <div className="container">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
          className="about-grid"
          ref={ref}
        >
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Degree',   value: 'BS Information Technology · Business Analytics' },
                { label: 'School',   value: 'DMMMSU-MLUC, San Fernando City, La Union' },
                { label: 'Location', value: 'Aringay, La Union, Philippines' },
                { label: 'Email',    value: personalInfo.email },
              ].map(fact => (
                <div key={fact.label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)', minWidth: '80px', paddingTop: '2px' }}>
                    {fact.label}
                  </span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats + Career paths */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.7s ease 0.2s' }}>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
              {stats.map((stat, i) => (
                <div key={i} className="glass" style={{ padding: '22px 20px' }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: stat.value.length > 4 ? '1.3rem' : '2rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text', marginBottom: '4px', lineHeight: 1.1,
                  }}>{stat.value}</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '0.88rem', fontWeight: 600, marginBottom: '2px' }}>{stat.label}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>{stat.sub}</div>
                </div>
              ))}
            </div>

            {/* Career path cards with modern SVG icons */}
            {Object.entries(careerPath).map(([key, path], i) => {
              const Icon = CAREER_ICONS[key];
              return (
                <div key={key} className="glass" style={{ padding: '20px', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <span style={{
                      width: '40px', height: '40px',
                      background: `${path.color}18`,
                      border: `1px solid ${path.color}45`,
                      borderRadius: '12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {Icon && <Icon color={path.color} />}
                    </span>
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
              );
            })}
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