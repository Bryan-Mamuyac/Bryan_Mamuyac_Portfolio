import React, { useState } from 'react';
import { skills as allSkills } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// ─── SVG Icon Library ─────────────────────────────────────────────────────────
const ICONS = {
  // ── Full Stack ──
  'ASP.NET':    { color: '#7b5cf0', svg: <svg viewBox="0 0 128 128" width="52" height="52"><circle cx="64" cy="64" r="64" fill="#512BD4"/><text x="50%" y="56%" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="900" dy=".3em" fontFamily="Arial Black, Arial">.NET</text></svg> },
  'C#':         { color: '#953dac', svg: <svg viewBox="0 0 128 128" width="52" height="52"><path fill="#953DAC" d="M64 4L10 35v58l54 31 54-31V35z"/><text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="46" fontWeight="900" dy=".15em" fontFamily="Arial Black, Arial">C#</text></svg> },
  'SQL Server': { color: '#e8382d', svg: <svg viewBox="0 0 128 128" width="52" height="52"><ellipse cx="64" cy="24" rx="52" ry="20" fill="#e8382d"/><path fill="#c0392b" d="M12 24v22c0 11 23 20 52 20s52-9 52-20V24c0 11-23 20-52 20S12 35 12 24z"/><path fill="#a93226" d="M12 46v22c0 11 23 20 52 20s52-9 52-20V46c0 11-23 20-52 20S12 57 12 46z"/><path fill="#7b241c" d="M12 68v18c0 11 23 20 52 20s52-9 52-20V68c0 11-23 20-52 20S12 79 12 68z"/></svg> },
  'JavaScript': { color: '#f7df1e', svg: <svg viewBox="0 0 128 128" width="52" height="52"><rect width="128" height="128" rx="12" fill="#f7df1e"/><text x="50%" y="65%" textAnchor="middle" fill="#000" fontSize="62" fontWeight="900" dy=".05em" fontFamily="Arial Black, Arial">JS</text></svg> },
  'HTML5':      { color: '#e34f26', svg: <svg viewBox="0 0 128 128" width="52" height="52"><path fill="#e34f26" d="M14 4l10 116 40 12 40-12 10-116z"/><path fill="#ef652a" d="M64 116l32-9 6-63H64z"/><path fill="#ebebeb" d="M64 52H43l-1-16h22V21H26l3 39h35zm0 37-17-5-1-12H30l2 25 32 9z"/><path fill="#fff" d="M64 52v15h19l-2 20-17 5v15l27-8 3-47zm0-31v15h34l1-8 1-7z"/></svg> },
  'CSS3':       { color: '#1572b6', svg: <svg viewBox="0 0 128 128" width="52" height="52"><path fill="#1572B6" d="M14 4l10 116 40 12 40-12 10-116z"/><path fill="#33A9DC" d="M64 116l32-9 6-63H64z"/><path fill="#fff" d="M64 52H43l-1-16h22V21H26l3 39h35zm0 37-17-5-1-12H30l2 25 32 9z"/><path fill="#ebebeb" d="M64 52v15h19l-2 20-17 5v15l27-8 3-47zm0-31v15h34l1-8 1-7z"/></svg> },
  'PHP':        { color: '#8892be', svg: <svg viewBox="0 0 128 128" width="52" height="52"><ellipse cx="64" cy="64" rx="62" ry="30" fill="#8892BE"/><text x="50%" y="60%" textAnchor="middle" fill="#232531" fontSize="36" fontWeight="900" dy=".15em" fontFamily="Arial Black, Arial">php</text></svg> },
  'MySQL':      { color: '#00758f', svg: <svg viewBox="0 0 128 128" width="52" height="52"><rect width="128" height="128" rx="14" fill="#00758F"/><text x="50%" y="40%" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="900" dy=".3em" fontFamily="Arial Black">MySQL</text><path d="M30 72 Q64 58 98 72" fill="none" stroke="#fff" strokeWidth="5" opacity=".6"/><path d="M30 86 Q64 72 98 86" fill="none" stroke="#fff" strokeWidth="5" opacity=".4"/></svg> },
  'Laravel':    { color: '#ff2d20', svg: <svg viewBox="0 0 128 128" width="52" height="52"><rect width="128" height="128" rx="14" fill="#FF2D20"/><path fill="#fff" d="M106 38l-6 1-21-12H76L55 39l-6-1L27 51v27l22 13 6-1 4 3v24l22 12 22-12V90l4-3 6 1 22-13V51zm-44 65L42 91V69l20 11zm2-28L44 63l20-12 20 12zm22 16L66 103V81l20-11z"/></svg> },
  'Git':        { color: '#f05032', svg: <svg viewBox="0 0 128 128" width="52" height="52"><circle cx="64" cy="64" r="64" fill="#f05032"/><path fill="#fff" d="M108 57L71 20a9 9 0 00-13 0L46 32l16 16a11 11 0 0114 14l15 15a11 11 0 11-6 6L70 68v30a11 11 0 11-9 0V67a11 11 0 01-6-14L38 36 20 54a9 9 0 000 13l44 44a9 9 0 0013 0l31-31a9 9 0 000-13z"/></svg> },
  'React':      { color: '#61dafb', svg: <svg viewBox="0 0 128 128" width="52" height="52"><rect width="128" height="128" rx="14" fill="#20232a"/><circle cx="64" cy="64" r="11" fill="#61DAFB"/><g fill="none" stroke="#61DAFB" strokeWidth="4.5"><ellipse rx="56" ry="21" cx="64" cy="64"/><ellipse rx="56" ry="21" cx="64" cy="64" transform="rotate(60 64 64)"/><ellipse rx="56" ry="21" cx="64" cy="64" transform="rotate(120 64 64)"/></g></svg> },
  'Python':     { color: '#ffd43b', svg: <svg viewBox="0 0 128 128" width="52" height="52"><path fill="#3776AB" d="M63 5C35 5 37 18 37 18l0 13h27v4H24S5 32 5 61c0 29 16 28 16 28h10V76s-1-16 16-16h27s15 0 15-15V20S91 5 63 5zm-15 9a5 5 0 110 10 5 5 0 010-10z"/><path fill="#FFD43B" d="M65 123c28 0 27-13 27-13V97H64v-4h40s19 0 19-29-16-28-16-28H97v13s1 16-16 16H54s-15 0-15 15v25s-2 25 26 25zm15-9a5 5 0 110-10 5 5 0 010 10z"/></svg> },

  // ── Data & Analytics ──
  'Power BI':   { color: '#f2c811', svg: <svg viewBox="0 0 128 128" width="52" height="52"><rect width="128" height="128" rx="14" fill="#F2C811"/><rect x="16" y="56" width="26" height="58" rx="6" fill="#1a1a1a"/><rect x="51" y="26" width="26" height="88" rx="6" fill="#1a1a1a"/><rect x="86" y="40" width="26" height="74" rx="6" fill="#1a1a1a"/></svg> },
  'Tableau':    { color: '#e97627', svg: <svg viewBox="0 0 128 128" width="52" height="52"><rect width="128" height="128" rx="14" fill="#fff"/><g fill="#E97627"><rect x="56" y="8" width="16" height="112"/><rect x="8" y="56" width="112" height="16"/><rect x="28" y="28" width="10" height="72"/><rect x="90" y="28" width="10" height="72"/><rect x="28" y="28" width="72" height="10"/><rect x="28" y="90" width="72" height="10"/></g></svg> },
  'Pandas':     { color: '#e70488', svg: <svg viewBox="0 0 128 128" width="52" height="52"><rect width="128" height="128" rx="14" fill="#150458"/><rect x="26" y="16" width="20" height="96" rx="8" fill="#e70488"/><rect x="82" y="16" width="20" height="96" rx="8" fill="#e70488"/><rect x="26" y="48" width="76" height="20" rx="6" fill="#e70488" opacity=".45"/></svg> },
  'NumPy':      { color: '#4dabcf', svg: <svg viewBox="0 0 128 128" width="52" height="52"><rect width="128" height="128" rx="14" fill="#013243"/><text x="50%" y="58%" textAnchor="middle" fill="#4DABCF" fontSize="30" fontWeight="900" dy=".2em" fontFamily="Arial Black">NumPy</text></svg> },
  'Excel':      { color: '#217346', svg: <svg viewBox="0 0 128 128" width="52" height="52"><rect width="128" height="128" rx="14" fill="#217346"/><path fill="#fff" opacity=".9" d="M22 30h44v18H22zm0 20h44v18H22zm0 20h44v18H22zm46-40h40v18H68zm0 20h40v18H68zm0 20h40v18H68z"/><path fill="#a8d5b5" d="M30 90l14 20h16L46 90 60 70H44L37 83 30 70H14l14 20z"/></svg> },
  'SQL':        { color: '#f29111', svg: <svg viewBox="0 0 128 128" width="52" height="52"><rect width="128" height="128" rx="14" fill="#f29111"/><text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="42" fontWeight="900" dy=".15em" fontFamily="Arial Black">SQL</text></svg> },
};

// ─── Row data ─────────────────────────────────────────────────────────────────
const FULLSTACK_ROW = ['ASP.NET','C#','SQL Server','JavaScript','HTML5','CSS3','PHP','MySQL','Laravel','Git','React','Python'];
const DATA_ROW      = ['Power BI','Tableau','Pandas','NumPy','Excel','SQL'];

// ─── Single icon card ─────────────────────────────────────────────────────────
const TechCard = ({ name }) => {
  const info = ICONS[name] || { color: '#63b3ed', svg: null };
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={name}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        width: '110px',
        height: '120px',
        margin: '0 8px',
        borderRadius: '18px',
        background: hovered ? `${info.color}18` : 'rgba(255,255,255,0.05)',
        border: `1px solid ${hovered ? info.color + '66' : 'rgba(255,255,255,0.1)'}`,
        backdropFilter: 'blur(12px)',
        transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-6px) scale(1.07)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? `0 12px 32px ${info.color}40` : 'none',
        cursor: 'default',
        flexShrink: 0,
      }}
    >
      <div style={{ width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', filter: hovered ? 'drop-shadow(0 0 8px ' + info.color + '80)' : 'none', transition: 'filter 0.25s ease' }}>
        {info.svg}
      </div>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        color: hovered ? info.color : 'var(--text-secondary)',
        fontWeight: hovered ? 700 : 400,
        textAlign: 'center',
        lineHeight: 1.2,
        transition: 'color 0.2s ease',
        maxWidth: '96px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>{name}</span>
    </div>
  );
};

// ─── Static scrollable icon row (no marquee jitter) ───────────────────────────
const IconRow = ({ items }) => (
  <div style={{
    display: 'flex',
    overflowX: 'auto',
    paddingBottom: '8px',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  }}>
    <style>{`.icon-row::-webkit-scrollbar { display: none; }`}</style>
    <div className="marquee-wrapper" style={{ width: '100%' }}>
      <div className="marquee-track" style={{ animationDuration: `${items.length * 3}s` }}>
        {[...items, ...items].map((name, i) => (
          <TechCard key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  </div>
);

// ─── Skill bar ────────────────────────────────────────────────────────────────
const SkillBar = ({ name, level, icon, tag, delay, isVisible }) => (
  <div style={{ marginBottom: '18px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '1rem' }}>{icon}</span>
        <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>{name}</span>
        {tag && (
          <span style={{
            padding: '2px 8px',
            background: 'rgba(159,122,234,0.15)',
            border: '1px solid rgba(159,122,234,0.3)',
            borderRadius: '50px',
            fontSize: '0.62rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-purple)',
          }}>{tag}</span>
        )}
      </div>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-primary)' }}>
        {level}%
      </span>
    </div>
    <div className="skill-bar">
      <div className="skill-bar-fill" style={{
        transform: isVisible ? `scaleX(${level / 100})` : 'scaleX(0)',
        transitionDelay: `${delay}ms`,
      }} />
    </div>
  </div>
);

const tabs = [
  { key: 'fullstack',     label: '⚡ Full Stack Dev'   },
  { key: 'dataAnalytics', label: '📊 Data & Analytics' },
  { key: 'other',         label: '🛠️ Other Tools'      },
];

// ─── Section label pill ───────────────────────────────────────────────────────
const RowLabel = ({ icon, title, color }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    padding: '6px 16px',
    background: `${color}15`,
    border: `1px solid ${color}35`,
    borderRadius: '50px',
    marginBottom: '16px',
    marginLeft: '4px',
  }}>
    <span style={{ fontSize: '1rem' }}>{icon}</span>
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
      {title}
    </span>
  </div>
);

// ─── Main Skills Component ────────────────────────────────────────────────────
const Skills = () => {
  const [activeTab, setActiveTab] = useState('fullstack');
  const [ref, isVisible] = useScrollAnimation();

  const currentSkills = allSkills[activeTab] || [];
  const half = Math.ceil(currentSkills.length / 2);

  return (
    <section id="skills" className="section" style={{ background: 'rgba(0,0,0,0.08)' }}>
      <div className="container" ref={ref}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <p className="section-label">Skills & Tools</p>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">
            A curated stack built through real-world projects and hands-on internship experience.
          </p>
        </div>

        {/* ── Full Stack Marquee ── */}
        <div className="glass" style={{ padding: '24px 0 18px', marginBottom: '20px', overflow: 'hidden', borderRadius: '20px' }}>
          <div style={{ paddingLeft: '24px', marginBottom: '12px' }}>
            <RowLabel icon="⚡" title="Full Stack Development" color="var(--accent-primary)" />
          </div>
          <div className="marquee-wrapper">
            <div className="marquee-track" style={{ animationDuration: '36s' }}>
              {[...FULLSTACK_ROW, ...FULLSTACK_ROW].map((name, i) => (
                <TechCard key={`fs-${name}-${i}`} name={name} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Data & Analytics Marquee ── */}
        <div className="glass" style={{ padding: '24px 0 18px', marginBottom: '40px', overflow: 'hidden', borderRadius: '20px' }}>
          <div style={{ paddingLeft: '24px', marginBottom: '12px' }}>
            <RowLabel icon="📊" title="Data & Analytics" color="var(--accent-purple)" />
          </div>
          <div className="marquee-wrapper">
            <div className="marquee-track" style={{ animationDuration: '20s' }}>
              {[...DATA_ROW, ...DATA_ROW, ...DATA_ROW].map((name, i) => (
                <TechCard key={`da-${name}-${i}`} name={name} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Proficiency Bars ── */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
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
                fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 500,
                cursor: 'pointer', backdropFilter: 'blur(10px)',
                transition: 'var(--transition)',
              }}
            >{tab.label}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="skills-grid">
          <div className="glass" style={{ padding: '28px' }}>
            {currentSkills.slice(0, half).map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 80} isVisible={isVisible} />
            ))}
          </div>
          <div className="glass" style={{ padding: '28px' }}>
            {currentSkills.slice(half).map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={(i + half) * 80} isVisible={isVisible} />
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
