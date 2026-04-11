import React, { useState } from 'react';
import { experience, education, seminars, activities } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}
          className="exp-grid">

          {/* Left: Experience */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--accent-primary)' }} />
              Work Experience
            </h3>

            {experience.map((exp, i) => (
              <div key={exp.id} className="glass" style={{ padding: '28px', marginBottom: '20px' }}>
                {/* Top */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '2px' }}>
                      {exp.role}
                    </h4>
                    <p style={{ color: 'var(--accent-primary)', fontSize: '0.88rem', fontWeight: 500 }}>
                      {exp.subtitle}
                    </p>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '4px' }}>
                  🏢 {exp.company}
                </p>
                <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '4px' }}>
                  📍 {exp.location} · {exp.period}
                </p>
                <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '16px' }}>
                  Completed {exp.hours} of hands-on IT deployment
                </p>

                {/* Expandable highlights */}
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

          {/* Right: Education + Seminars + Activities */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease 0.2s' }}>
            {/* Education */}
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--accent-purple)' }} />
              Education
            </h3>

            {education.map((edu, i) => (
              <div key={i} className="glass" style={{ padding: '28px', marginBottom: '24px' }}>
                <div style={{
                  width: '44px', height: '44px',
                  background: 'rgba(159,122,234,0.1)',
                  border: '1px solid rgba(159,122,234,0.25)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', marginBottom: '16px',
                }}>🎓</div>
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
                <span style={{ fontSize: '1.5rem' }}>{a.icon}</span>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.92rem', marginBottom: '2px' }}>
                    {a.title}
                  </p>
                  <p style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', marginBottom: '6px' }}>{a.subtitle}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{a.description}</p>
                </div>
              </div>
            ))}

            {/* Seminars */}
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--text-primary)', margin: '32px 0 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '30px', height: '2px', background: 'var(--accent-cyan)' }} />
              Seminars & Trainings
            </h3>

            <div className="glass" style={{ padding: '24px' }}>
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

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
