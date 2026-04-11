import React, { useState } from 'react';
import { skills as allSkills } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// ─── Official-accurate SVG icons ──────────────────────────────────────────────
const ICONS = {
  // ── Full Stack Dev ──
  'ASP.NET':    { color: '#7b5cf0', svg: <svg viewBox="0 0 128 128" width="44" height="44"><circle cx="64" cy="64" r="64" fill="#512BD4"/><text x="50%" y="56%" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="900" dy=".3em" fontFamily="Arial Black, Arial">.NET</text></svg> },
  'C#':         { color: '#953dac', svg: <svg viewBox="0 0 128 128" width="44" height="44"><path fill="#953DAC" d="M64 4L10 35v58l54 31 54-31V35z"/><text x="50%" y="58%" textAnchor="middle" fill="#fff" fontSize="46" fontWeight="900" dy=".15em" fontFamily="Arial Black">C#</text></svg> },
  'SQL Server': { color: '#e8382d', svg: <svg viewBox="0 0 128 128" width="44" height="44"><ellipse cx="64" cy="24" rx="52" ry="20" fill="#CC2927"/><path fill="#B52E2C" d="M12 24v22c0 11 23 20 52 20s52-9 52-20V24c0 11-23 20-52 20S12 35 12 24z"/><path fill="#A32928" d="M12 46v22c0 11 23 20 52 20s52-9 52-20V46c0 11-23 20-52 20S12 57 12 46z"/><path fill="#922827" d="M12 68v18c0 11 23 20 52 20s52-9 52-20V68c0 11-23 20-52 20S12 79 12 68z"/></svg> },
  'JavaScript': { color: '#f7df1e', svg: <svg viewBox="0 0 128 128" width="44" height="44"><rect width="128" height="128" rx="10" fill="#f7df1e"/><text x="50%" y="65%" textAnchor="middle" fill="#000" fontSize="62" fontWeight="900" dy=".05em" fontFamily="Arial Black">JS</text></svg> },
  'HTML5':      { color: '#e34f26', svg: <svg viewBox="0 0 128 128" width="44" height="44"><path fill="#e34f26" d="M14 4l10 116 40 12 40-12 10-116z"/><path fill="#ef652a" d="M64 116l32-9 6-63H64z"/><path fill="#ebebeb" d="M64 52H43l-1-16h22V21H26l3 39h35zm0 37-17-5-1-12H30l2 25 32 9z"/><path fill="#fff" d="M64 52v15h19l-2 20-17 5v15l27-8 3-47zm0-31v15h34l1-8 1-7z"/></svg> },
  'CSS3':       { color: '#1572b6', svg: <svg viewBox="0 0 128 128" width="44" height="44"><path fill="#1572B6" d="M14 4l10 116 40 12 40-12 10-116z"/><path fill="#33A9DC" d="M64 116l32-9 6-63H64z"/><path fill="#fff" d="M64 52H43l-1-16h22V21H26l3 39h35zm0 37-17-5-1-12H30l2 25 32 9z"/><path fill="#ebebeb" d="M64 52v15h19l-2 20-17 5v15l27-8 3-47zm0-31v15h34l1-8 1-7z"/></svg> },
  'PHP':        { color: '#8892be', svg: <svg viewBox="0 0 128 128" width="44" height="44"><ellipse cx="64" cy="64" rx="62" ry="30" fill="#8892BE"/><text x="50%" y="60%" textAnchor="middle" fill="#232531" fontSize="36" fontWeight="900" dy=".15em" fontFamily="Arial Black">php</text></svg> },
  'MySQL':      { color: '#4479a1', svg: <svg viewBox="0 0 128 128" width="44" height="44"><rect width="128" height="128" rx="12" fill="#00618A"/><path fill="#fff" d="M20 86c0-14 5-28 15-38l6 6c-8 8-12 20-12 32H20zm88 0c0-12-4-24-12-32l6-6c10 10 15 24 15 38h-9zm-44 22c-12 0-24-4-32-12l6-6c7 7 16 10 26 10v8zm0-88v8c-10 0-19 3-26 10l-6-6c8-8 20-12 32-12zm0 64c-8 0-14-6-14-14s6-14 14-14 14 6 14 14-6 14-14 14z"/></svg> },
  'Laravel':    { color: '#ff2d20', svg: <svg viewBox="0 0 128 128" width="44" height="44"><rect width="128" height="128" rx="12" fill="#FF2D20"/><path fill="#fff" opacity=".9" d="M106 38l-6 1-21-12H76L55 39l-6-1L27 51v27l22 13 6-1 4 3v24l22 12 22-12V90l4-3 6 1 22-13V51zm-44 65L42 91V69l20 11zm2-28L44 63l20-12 20 12zm22 16L66 103V81l20-11z"/></svg> },
  'Git':        { color: '#f05032', svg: <svg viewBox="0 0 128 128" width="44" height="44"><circle cx="64" cy="64" r="64" fill="#f05032"/><path fill="#fff" d="M108 57L71 20a9 9 0 00-13 0L46 32l16 16a11 11 0 0114 14l15 15a11 11 0 11-6 6L70 68v30a11 11 0 11-9 0V67a11 11 0 01-6-14L38 36 20 54a9 9 0 000 13l44 44a9 9 0 0013 0l31-31a9 9 0 000-13z"/></svg> },
  'React':      { color: '#61dafb', svg: <svg viewBox="0 0 128 128" width="44" height="44"><rect width="128" height="128" rx="12" fill="#20232a"/><circle cx="64" cy="64" r="11" fill="#61DAFB"/><g fill="none" stroke="#61DAFB" strokeWidth="4"><ellipse rx="56" ry="21" cx="64" cy="64"/><ellipse rx="56" ry="21" cx="64" cy="64" transform="rotate(60 64 64)"/><ellipse rx="56" ry="21" cx="64" cy="64" transform="rotate(120 64 64)"/></g></svg> },
  'Python':     { color: '#ffd43b', svg: <svg viewBox="0 0 128 128" width="44" height="44"><path fill="#3776AB" d="M63 5C35 5 37 18 37 18l0 13h27v4H24S5 32 5 61c0 29 16 28 16 28h10V76s-1-16 16-16h27s15 0 15-15V20S91 5 63 5zm-15 9a5 5 0 110 10 5 5 0 010-10z"/><path fill="#FFD43B" d="M65 123c28 0 27-13 27-13V97H64v-4h40s19 0 19-29-16-28-16-28H97v13s1 16-16 16H54s-15 0-15 15v25s-2 25 26 25zm15-9a5 5 0 110-10 5 5 0 010 10z"/></svg> },

  // ── Data & Analytics — REAL official-accurate logos ──
  'Power BI':  { color: '#f2c811', svg:
    <svg viewBox="0 0 128 128" width="44" height="44">
      <rect width="128" height="128" rx="14" fill="#F2C811"/>
      {/* Microsoft Power BI bar chart shape */}
      <rect x="14" y="54" width="28" height="60" rx="4" fill="#1e1e1e"/>
      <rect x="50" y="24" width="28" height="90" rx="4" fill="#1e1e1e"/>
      <rect x="86" y="38" width="28" height="76" rx="4" fill="#1e1e1e"/>
    </svg> },

  'Tableau':   { color: '#1f6eb4', svg:
    <svg viewBox="0 0 128 128" width="44" height="44">
      <rect width="128" height="128" rx="14" fill="#fff"/>
      {/* Official Tableau asterisk / cross pattern */}
      <rect x="58" y="6"  width="12" height="50" rx="3" fill="#1F6EB4"/>
      <rect x="58" y="72" width="12" height="50" rx="3" fill="#1F6EB4"/>
      <rect x="6"  y="58" width="50" height="12" rx="3" fill="#1F6EB4"/>
      <rect x="72" y="58" width="50" height="12" rx="3" fill="#1F6EB4"/>
      <rect x="26" y="26" width="10" height="34" rx="3" fill="#E8762C" transform="rotate(45 31 43)"/>
      <rect x="82" y="62" width="10" height="34" rx="3" fill="#E8762C" transform="rotate(45 87 79)"/>
      <rect x="26" y="62" width="34" height="10" rx="3" fill="#E8762C" transform="rotate(45 43 67)"/>
      <rect x="62" y="26" width="34" height="10" rx="3" fill="#E8762C" transform="rotate(45 79 31)"/>
    </svg> },

  'Pandas':    { color: '#e70488', svg:
    <svg viewBox="0 0 128 128" width="44" height="44">
      <rect width="128" height="128" rx="14" fill="#150458"/>
      {/* Pandas logo — two vertical bars with bridge */}
      <rect x="24" y="14" width="22" height="100" rx="8" fill="#e70488"/>
      <rect x="82" y="14" width="22" height="100" rx="8" fill="#e70488"/>
      <rect x="24" y="46" width="80" height="22" rx="6" fill="#e70488" opacity=".4"/>
    </svg> },

  'NumPy':     { color: '#4dabcf', svg:
    <svg viewBox="0 0 128 128" width="44" height="44">
      <rect width="128" height="128" rx="14" fill="#013243"/>
      {/* NumPy cube logo approximation */}
      <polygon points="64,12 108,36 108,80 64,56" fill="#4DABCF" opacity=".9"/>
      <polygon points="64,12 20,36 20,80 64,56" fill="#4DABCF" opacity=".6"/>
      <polygon points="20,80 64,104 108,80 64,56" fill="#4DABCF" opacity=".75"/>
    </svg> },

  'Excel':     { color: '#217346', svg:
    <svg viewBox="0 0 128 128" width="44" height="44">
      <rect width="128" height="128" rx="14" fill="#217346"/>
      {/* Official Microsoft Excel X logo */}
      <rect x="8" y="8" width="68" height="88" rx="6" fill="#185C37"/>
      <text x="42" y="68" textAnchor="middle" fill="#fff" fontSize="52" fontWeight="900" fontFamily="Arial Black">X</text>
      <rect x="72" y="8" width="48" height="14" rx="3" fill="#fff" opacity=".85"/>
      <rect x="72" y="30" width="48" height="14" rx="3" fill="#fff" opacity=".65"/>
      <rect x="72" y="52" width="48" height="14" rx="3" fill="#fff" opacity=".85"/>
      <rect x="72" y="74" width="48" height="14" rx="3" fill="#fff" opacity=".65"/>
    </svg> },

  'SQL':       { color: '#f29111', svg:
    <svg viewBox="0 0 128 128" width="44" height="44">
      <rect width="128" height="128" rx="14" fill="#E48B00"/>
      <ellipse cx="64" cy="30" rx="44" ry="16" fill="#fff" opacity=".9"/>
      <path d="M20 30v20c0 9 20 16 44 16s44-7 44-16V30c0 9-20 16-44 16S20 39 20 30z" fill="#fff" opacity=".7"/>
      <path d="M20 50v20c0 9 20 16 44 16s44-7 44-16V50c0 9-20 16-44 16S20 59 20 50z" fill="#fff" opacity=".5"/>
      <path d="M20 70v18c0 9 20 16 44 16s44-7 44-16V70c0 9-20 16-44 16S20 79 20 70z" fill="#fff" opacity=".3"/>
    </svg> },
};

// ─── Row data ─────────────────────────────────────────────────────────────────
const FULLSTACK_ROW = ['ASP.NET','C#','SQL Server','JavaScript','HTML5','CSS3','PHP','MySQL','Laravel','Git','React','Python'];
const DATA_ROW      = ['Power BI','Tableau','Pandas','NumPy','Excel','SQL'];

// ─── Tech card — overflow fixed with padding + clipping on parent ─────────────
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
        width: '108px',
        height: '116px',
        margin: '0 6px',
        borderRadius: '16px',
        background: hovered ? `${info.color}20` : 'rgba(255,255,255,0.05)',
        border: `1px solid ${hovered ? info.color + '70' : 'rgba(255,255,255,0.09)'}`,
        backdropFilter: 'blur(12px)',
        transition: 'background 0.2s ease, border 0.2s ease, box-shadow 0.2s ease',
        // No scale/translateY — avoids clipping at container edges
        boxShadow: hovered ? `0 8px 28px ${info.color}40` : 'none',
        cursor: 'default',
        flexShrink: 0,
        position: 'relative',
      }}
    >
      <div style={{
        width: '50px', height: '50px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        filter: hovered ? `drop-shadow(0 0 8px ${info.color}90)` : 'none',
        transition: 'filter 0.2s ease',
      }}>
        {info.svg}
      </div>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.66rem',
        color: hovered ? info.color : 'rgba(255,255,255,0.55)',
        fontWeight: hovered ? 700 : 400,
        textAlign: 'center',
        lineHeight: 1.2,
        transition: 'color 0.2s ease',
        maxWidth: '94px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>{name}</span>
    </div>
  );
};

// ─── Marquee row — extra vertical padding so glow isn't clipped ───────────────
const MarqueeRow = ({ items, reverse = false, speed = 30 }) => (
  <div className="marquee-wrapper" style={{ padding: '10px 0' }}>
    <div
      className={reverse ? 'marquee-track-reverse' : 'marquee-track'}
      style={{ animationDuration: `${speed}s` }}
    >
      {[...items, ...items].map((name, i) => (
        <TechCard key={`${name}-${i}`} name={name} />
      ))}
    </div>
  </div>
);

// ─── SVG icon map for skill bars ─────────────────────────────────────────────
const SKILL_ICONS = {
  aspnet:   <svg viewBox="0 0 24 24" fill="none" stroke="#7b5cf0" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M8 9l2 2-2 2M13 13h3"/></svg>,
  database: <svg viewBox="0 0 24 24" fill="none" stroke="#e8382d" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  code:     <svg viewBox="0 0 24 24" fill="none" stroke="#f7df1e" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  php:      <svg viewBox="0 0 24 24" fill="none" stroke="#8892be" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="10" ry="5"/><path d="M9 10h2a1.5 1.5 0 010 3H9v2m7-5h-2v5"/></svg>,
  mysql:    <svg viewBox="0 0 24 24" fill="none" stroke="#4479a1" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3C7 3 4 5 4 8v8c0 3 3 5 8 5s8-2 8-5V8c0-3-3-5-8-5z"/><path d="M4 8c0 3 3 5 8 5s8-2 8-5"/></svg>,
  signal:   <svg viewBox="0 0 24 24" fill="none" stroke="#63b3ed" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1" fill="#63b3ed"/></svg>,
  react:    <svg viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" fill="#61dafb"/><ellipse rx="10" ry="4" cx="12" cy="12"/><ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(60 12 12)"/><ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(120 12 12)"/></svg>,
  powerbi:  <svg viewBox="0 0 24 24" fill="none" stroke="#f2c811" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="12" width="4" height="9" rx="1"/><rect x="9" y="6" width="4" height="15" rx="1"/><rect x="16" y="9" width="4" height="12" rx="1"/></svg>,
  tableau:  <svg viewBox="0 0 24 24" fill="none" stroke="#e97627" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>,
  python:   <svg viewBox="0 0 24 24" fill="none" stroke="#3776ab" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 2 6 4 6 7v2h6v1H5C3 10 2 12 2 14s1 4 3 4h2v-3c0-2 2-3 5-3s5 1 5 3v3h2c2 0 3-2 3-4s-1-4-3-4h-6V9h6V7c0-3-2-5-6-5z"/><circle cx="9" cy="7" r="1" fill="#3776ab"/><circle cx="15" cy="17" r="1" fill="#ffd43b" stroke="#ffd43b"/></svg>,
  sql:      <svg viewBox="0 0 24 24" fill="none" stroke="#f29111" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v4c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 9v4c0 1.66 4 3 9 3s9-1.34 9-3V9"/><path d="M3 13v4c0 1.66 4 3 9 3s9-1.34 9-3v-4"/></svg>,
  excel:    <svg viewBox="0 0 24 24" fill="none" stroke="#217346" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 3v18M16 3v18M2 9h20M2 15h20"/><path d="M5 6l3 3-3 3" strokeWidth="1.4"/></svg>,
  chart:    <svg viewBox="0 0 24 24" fill="none" stroke="#9f7aea" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  iot:      <svg viewBox="0 0 24 24" fill="none" stroke="#00979d" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7" strokeDasharray="3 2"/><circle cx="12" cy="12" r="11" strokeDasharray="2 3" opacity=".4"/></svg>,
  network:  <svg viewBox="0 0 24 24" fill="none" stroke="#1ba0d8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="4" rx="1"/><rect x="2" y="18" width="6" height="4" rx="1"/><rect x="16" y="18" width="6" height="4" rx="1"/><path d="M12 6v4M12 10H5v4M12 10h7v4"/></svg>,
  git:      <svg viewBox="0 0 24 24" fill="none" stroke="#f05032" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6M9 6h4.5a3 3 0 010 6H12"/></svg>,
  premiere: <svg viewBox="0 0 24 24" fill="none" stroke="#9999ff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M8 16V8l4 8 4-8v8"/></svg>,
  canva:    <svg viewBox="0 0 24 24" fill="none" stroke="#00c4cc" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12a4 4 0 108 0M12 8v8"/></svg>,
};

// ─── Skill bar ────────────────────────────────────────────────────────────────
const SkillBar = ({ name, level, icon, tag, delay, isVisible }) => (
  <div style={{ marginBottom: '18px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {SKILL_ICONS[icon]
            ? React.cloneElement(SKILL_ICONS[icon], { width: 18, height: 18 })
            : <span style={{ fontSize: '1rem' }}>{icon}</span>
          }
        </span>
        <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>{name}</span>
        {tag && (
          <span style={{
            padding: '2px 8px',
            background: 'rgba(159,122,234,0.15)', border: '1px solid rgba(159,122,234,0.3)',
            borderRadius: '50px', fontSize: '0.62rem', fontFamily: 'var(--font-mono)',
            color: 'var(--accent-purple)',
          }}>{tag}</span>
        )}
      </div>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-primary)' }}>{level}%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-bar-fill" style={{
        transform: isVisible ? `scaleX(${level / 100})` : 'scaleX(0)',
        transitionDelay: `${delay}ms`,
      }} />
    </div>
  </div>
);

// ─── Shared SVG icons (same ones used in About.jsx career cards) ─────────────
const IconLaptop = ({ color = 'currentColor', size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
    <path d="M8 9l2 2-2 2M13 13h3"/>
  </svg>
);

const IconBarChart = ({ color = 'currentColor', size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6"  y1="20" x2="6"  y2="14"/>
    <line x1="2"  y1="20" x2="22" y2="20"/>
  </svg>
);

const IconWrench = ({ color = 'currentColor', size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>
);

const tabs = [
  { key: 'fullstack',     label: 'Full Stack Dev',   Icon: IconLaptop,   color: 'var(--accent-primary)' },
  { key: 'dataAnalytics', label: 'Data & Analytics', Icon: IconBarChart, color: 'var(--accent-purple)'  },
  { key: 'other',         label: 'Other Tools',      Icon: IconWrench,   color: 'var(--text-secondary)' },
];

const RowLabel = ({ Icon, title, color }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    padding: '5px 14px',
    background: `${color}15`, border: `1px solid ${color}30`,
    borderRadius: '50px', marginBottom: '12px', marginLeft: '20px',
  }}>
    <Icon color={color} size={14} />
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
      {title}
    </span>
  </div>
);

// ─── Main ─────────────────────────────────────────────────────────────────────
const Skills = () => {
  const [activeTab, setActiveTab] = useState('fullstack');
  const [ref, isVisible] = useScrollAnimation();
  const currentSkills = allSkills[activeTab] || [];
  const half = Math.ceil(currentSkills.length / 2);

  return (
    <section id="skills" className="section" style={{ background: 'rgba(0,0,0,0.08)' }}>
      <div className="container" ref={ref}>

        <div style={{ marginBottom: '56px' }}>
          <p className="section-label">Skills & Tools</p>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">
            A curated stack built through real-world projects and internship experience.
          </p>
        </div>

        {/* Full Stack marquee */}
        <div className="glass" style={{
          paddingTop: '20px', paddingBottom: '20px',
          marginBottom: '16px',
          overflow: 'hidden',        /* clips the scrolling track */
          borderRadius: '20px',
        }}>
          <RowLabel Icon={IconLaptop}   title="Full Stack Development" color="var(--accent-primary)" />
          <MarqueeRow items={FULLSTACK_ROW} reverse={false} speed={36} />
        </div>

        {/* Data & Analytics marquee */}
        <div className="glass" style={{
          paddingTop: '20px', paddingBottom: '20px',
          marginBottom: '40px',
          overflow: 'hidden',
          borderRadius: '20px',
        }}>
          <RowLabel Icon={IconBarChart} title="Data & Analytics" color="var(--accent-purple)" />
          <MarqueeRow items={DATA_ROW} reverse={true} speed={18} />
        </div>

        {/* Proficiency tabs */}
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
            >
              <tab.Icon color={activeTab === tab.key ? 'var(--accent-primary)' : 'var(--text-secondary)'} size={15} />
              {tab.label}
            </button>
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