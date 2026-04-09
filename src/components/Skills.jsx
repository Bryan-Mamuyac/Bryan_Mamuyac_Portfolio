import React, { useState } from 'react';
import { skills, techBadges } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const tabs = [
  { key: 'fullstack', label: 'Full Stack Dev', icon: '⚡' },
  { key: 'dataAnalytics', label: 'Data & Analytics', icon: '📊' },
  { key: 'other', label: 'Other Tools', icon: '🛠️' },
];

const SkillBar = ({ name, level, icon, tag, delay, isVisible }) => (
  <div style={{ marginBottom: '20px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>{icon}</span>
        <span style={{ color: 'var(--text-primary)', fontSize: '0.92rem', fontWeight: 500 }}>{name}</span>
        {tag && (
          <span style={{
            padding: '2px 8px',
            background: 'rgba(159,122,234,0.15)',
            border: '1px solid rgba(159,122,234,0.3)',
            borderRadius: '50px',
            fontSize: '0.65rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-purple)',
          }}>{tag}</span>
        )}
      </div>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)' }}>
        {level}%
      </span>
    </div>
    <div className="skill-bar">
      <div
        className="skill-bar-fill"
        style={{
          transform: isVisible ? `scaleX(${level / 100})` : 'scaleX(0)',
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  </div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState('fullstack');
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="skills" className="section" style={{ background: 'rgba(0,0,0,0.1)' }}>
      <div className="container" ref={ref}>
        <div style={{ marginBottom: '60px' }}>
          <p className="section-label">Skills & Tools</p>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">
            A curated stack built through real-world projects and hands-on internship experience.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '10px 20px',
                border: `1px solid ${activeTab === tab.key ? 'var(--accent-primary)' : 'var(--glass-border)'}`,
                borderRadius: '50px',
                background: activeTab === tab.key ? 'var(--glass-bg-hover)' : 'var(--glass-bg)',
                color: activeTab === tab.key ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'var(--transition)',
              }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="skills-grid">
          <div className="glass" style={{ padding: '32px' }}>
            {skills[activeTab].slice(0, Math.ceil(skills[activeTab].length / 2)).map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 100} isVisible={isVisible} />
            ))}
          </div>
          <div className="glass" style={{ padding: '32px' }}>
            {skills[activeTab].slice(Math.ceil(skills[activeTab].length / 2)).map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={(i + 3) * 100} isVisible={isVisible} />
            ))}
          </div>
        </div>

        {/* Tech Badges */}
        <div style={{ marginTop: '60px' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
            color: 'var(--text-muted)', textAlign: 'center', marginBottom: '20px',
            letterSpacing: '0.15em', textTransform: 'uppercase',
          }}>All Technologies I've Worked With</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {techBadges.map(badge => (
              <span key={badge} className="badge">{badge}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
