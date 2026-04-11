import React, { useState } from 'react';
import { experience, education, seminars, activities } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// SVG icons for contact-style cards
const IconBuilding = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="18" rx="1"/><path d="M9 3v18M15 3v18M2 9h20M2 15h20"/>
  </svg>
);

const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconGrad = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="section" style={{ background: 'rgba(0,0,0,0.08)' }}>
      <div className="container" ref={ref}>
        <div style={{ marginBottom: '60px' }}>
          <p className="section-label">Background</p>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'stretch' }}
          className="exp-grid">

          {/* Left: Experience — stretches to match right column */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--accent-primary)' }} />
              Work Experience
            </h3>

            {experience.map((exp, i) => (
              <div key={exp.id} className="glass" style={{ padding: '28px', marginBottom: '20px', flex: 1 }}>
                {/* Role + subtitle */}
                <div style={{ marginBottom: '14px' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {exp.role}
                  </h4>
                  <p style={{ color: 'var(--accent-primary)', fontSize: '0.83rem', fontWeight: 500, lineHeight: 1.4 }}>
                    {exp.subtitle}
                  </p>
                </div>

                {/* Company */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--accent-primary)', flexShrink: 0 }}><IconBuilding /></span>
                  {exp.company}
                </div>

                {/* Location & period */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.73rem', marginBottom: '4px' }}>
                  <span style={{ flexShrink: 0 }}><IconPin /></span>
                  {exp.location} · {exp.period}
                </div>

                {/* Hours plain text */}
                <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.73rem', marginBottom: '18px', paddingLeft: '20px' }}>
                  Completed {exp.hours} of hands-on IT deployment
                </p>

                {/* Expand toggle */}
                <button
                  onClick={() => setExpanded(expanded === i ? -1 : i)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--accent-primary)', fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem', padding: 0,
                    display: 'flex', alignItems: 'center', gap: '6px',
                    marginBottom: expanded === i ? '16px' : '0',
                  }}
                >
                  {expanded === i ? '▼' : '▶'} {expanded === i ? 'Hide' : 'Show'} Key Contributions
                </button>

                {expanded === i && (
                  <ul style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem', marginTop: '3px', flexShrink: 0 }}>▸</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Right: Education + Activities + Seminars */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease 0.2s', display: 'flex', flexDirection: 'column' }}>

            {/* Education */}
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--accent-purple)' }} />
              Education
            </h3>

            {education.map((edu, i) => (
              <div key={i} className="glass" style={{ padding: '28px', marginBottom: '24px' }}>
                <div style={{
                  width: '44px', height: '44px',
                  background: 'rgba(159,122,234,0.12)',
                  border: '1px solid rgba(159,122,234,0.28)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-purple)',
                  marginBottom: '16px',
                }}>
                  <IconGrad />
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {edu.degree}
                </h4>
                <p style={{ color: 'var(--accent-purple)', fontSize: '0.85rem', marginBottom: '8px' }}>
                  Major in {edu.major}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{edu.school}</p>
                <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginTop: '4px' }}>
                  {edu.location} · {edu.period}
                </p>
              </div>
            ))}

            {/* Activities */}
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--text-primary)', margin: '32px 0 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--accent-green)' }} />
              Leadership & Activities
            </h3>

            {activities.map((a, i) => (
              <div key={i} className="glass" style={{ padding: '20px', marginBottom: '16px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                {/* Trophy SVG instead of emoji */}
                <span style={{
                  width: '36px', height: '36px', flexShrink: 0,
                  background: 'rgba(237,182,70,0.15)',
                  border: '1px solid rgba(237,182,70,0.3)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#edb246" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H3V4h3M18 9h3V4h-3"/><path d="M9 21h6M12 17v4"/><path d="M6 4h12v8a6 6 0 01-12 0V4z"/>
                  </svg>
                </span>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.92rem', marginBottom: '2px' }}>
                    {a.title}
                  </p>
                  <p style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', marginBottom: '6px' }}>{a.subtitle}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{a.description}</p>
                </div>
              </div>
            ))}

            {/* Seminars — fills remaining height to balance left column */}
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--text-primary)', margin: '32px 0 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '30px', height: '2px', background: 'var(--accent-cyan)' }} />
                Seminars & Trainings
              </h3>

              <div className="glass" style={{ padding: '24px', flex: 1 }}>
                {seminars.map((s, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '10px', alignItems: 'flex-start',
                    paddingBottom: i < seminars.length - 1 ? '12px' : 0,
                    marginBottom: i < seminars.length - 1 ? '12px' : 0,
                    borderBottom: i < seminars.length - 1 ? '1px solid var(--glass-border)' : 'none',
                  }}>
                    <span style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem', marginTop: '2px', flexShrink: 0 }}>◈</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.83rem', lineHeight: 1.5 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;