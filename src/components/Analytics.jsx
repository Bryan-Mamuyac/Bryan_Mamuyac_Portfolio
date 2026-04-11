import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// ─── Data ─────────────────────────────────────────────────────────────────────
const skillGrowthData = [
  { month: 'Jan', fullstack: 55, data: 30 },
  { month: 'Feb', fullstack: 62, data: 38 },
  { month: 'Mar', fullstack: 68, data: 48 },
  { month: 'Apr', fullstack: 72, data: 55 },
  { month: 'May', fullstack: 78, data: 63 },
  { month: 'Jun', fullstack: 83, data: 70 },
  { month: 'Jul', fullstack: 85, data: 75 },
  { month: 'Aug', fullstack: 88, data: 80 },
  { month: 'Sep', fullstack: 90, data: 82 },
  { month: 'Oct', fullstack: 91, data: 85 },
  { month: 'Nov', fullstack: 92, data: 87 },
  { month: 'Dec', fullstack: 93, data: 88 },
];

const projectData = [
  { label: 'INTERNIFY', value: 95, color: '#63b3ed' },
  { label: 'Aqualitics', value: 82, color: '#4dd0e1' },
  { label: 'Power BI', value: 88, color: '#f2c811' },
  { label: 'LUCA Sys', value: 78, color: '#68d391' },
  { label: 'Dungeon Q', value: 74, color: '#fc8181' },
];

const techDistribution = [
  { label: 'Full Stack Dev', value: 45, color: '#63b3ed' },
  { label: 'Data & Analytics', value: 30, color: '#9f7aea' },
  { label: 'IoT & Hardware', value: 15, color: '#4dd0e1' },
  { label: 'Networking', value: 10, color: '#68d391' },
];

const kpiData = [
  { label: 'Projects Built',    value: '5',    sub: 'Full-stack, IoT & game',    color: '#63b3ed' },
  { label: 'Internship Hours',  value: '520',  sub: 'Universal Leaf PH · 2026',  color: '#9f7aea' },
  { label: 'Technologies',      value: '18',   sub: 'Languages, tools & stacks', color: '#4dd0e1' },
  { label: 'Career Tracks',     value: '2',    sub: 'Full Stack + Data Analytics',color: '#68d391' },
];

// ─── Glassmorphism Line Chart ─────────────────────────────────────────────────
const LineChart = ({ data, isVisible }) => {
  const W = 600, H = 200, PL = 40, PR = 20, PT = 20, PB = 36;
  const chartW = W - PL - PR;
  const chartH = H - PT - PB;

  const toX = i => PL + (i / (data.length - 1)) * chartW;
  const toY = v => PT + chartH - (v / 100) * chartH;

  const makePath = key =>
    data.map((d, i) => `${i === 0 ? 'M' : 'L'}${toX(i)},${toY(d[key])}`).join(' ');

  const makeArea = key => {
    const pts = data.map((d, i) => `${toX(i)},${toY(d[key])}`).join(' L');
    return `M${toX(0)},${toY(data[0][key])} L${pts} L${toX(data.length - 1)},${PT + chartH} L${toX(0)},${PT + chartH} Z`;
  };

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let raf, start;
    const animate = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1200, 1);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isVisible]);

  const pathLen = 1200; // approximate path length for stroke animation

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="areaFs" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#63b3ed" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#63b3ed" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="areaDa" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9f7aea" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#9f7aea" stopOpacity="0"/>
        </linearGradient>
        <clipPath id="chartClip">
          <rect x={PL} y={PT} width={chartW * progress} height={chartH}/>
        </clipPath>
      </defs>

      {/* Grid lines */}
      {[0, 25, 50, 75, 100].map(v => (
        <g key={v}>
          <line x1={PL} y1={toY(v)} x2={PL + chartW} y2={toY(v)}
            stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
          <text x={PL - 6} y={toY(v) + 4} textAnchor="end"
            fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="monospace">{v}</text>
        </g>
      ))}

      {/* X labels */}
      {data.map((d, i) => (
        i % 2 === 0 && (
          <text key={i} x={toX(i)} y={H - 6} textAnchor="middle"
            fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">{d.month}</text>
        )
      ))}

      {/* Area fills */}
      <path d={makeArea('fullstack')} fill="url(#areaFs)" clipPath="url(#chartClip)"/>
      <path d={makeArea('data')} fill="url(#areaDa)" clipPath="url(#chartClip)"/>

      {/* Lines */}
      <path d={makePath('fullstack')} fill="none" stroke="#63b3ed" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round" clipPath="url(#chartClip)"/>
      <path d={makePath('data')} fill="none" stroke="#9f7aea" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round" clipPath="url(#chartClip)"/>

      {/* Dots (only at full progress) */}
      {progress > 0.95 && data.map((d, i) => (
        <g key={i}>
          <circle cx={toX(i)} cy={toY(d.fullstack)} r="3.5" fill="#63b3ed"/>
          <circle cx={toX(i)} cy={toY(d.data)} r="3.5" fill="#9f7aea"/>
        </g>
      ))}
    </svg>
  );
};

// ─── Horizontal Bar Chart ─────────────────────────────────────────────────────
const HBarChart = ({ data, isVisible }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let raf, start;
    const animate = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1000, 1);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isVisible]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {data.map((item, i) => (
        <div key={item.label}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              {item.label}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: item.color, fontWeight: 600 }}>
              {Math.round(item.value * progress)}%
            </span>
          </div>
          <div style={{
            height: '10px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${item.value * progress}%`,
              background: `linear-gradient(90deg, ${item.color}cc, ${item.color})`,
              borderRadius: '10px',
              boxShadow: `0 0 10px ${item.color}60`,
              transition: 'width 0.05s linear',
            }}/>
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── Donut Chart ──────────────────────────────────────────────────────────────
const DonutChart = ({ data, isVisible }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let raf, start;
    const animate = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1100, 1);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isVisible]);

  const total = data.reduce((s, d) => s + d.value, 0);
  const R = 70, r = 42, cx = 90, cy = 90;
  let cumulative = 0;

  const toCoords = (angle, radius) => ({
    x: cx + radius * Math.cos((angle - 90) * Math.PI / 180),
    y: cy + radius * Math.sin((angle - 90) * Math.PI / 180),
  });

  const segments = data.map(d => {
    const startAngle = cumulative * 360 / total;
    const endAngle = (cumulative + d.value * progress) * 360 / total;
    cumulative += d.value;
    const large = endAngle - startAngle > 180 ? 1 : 0;
    const s = toCoords(startAngle, R);
    const e = toCoords(endAngle, R);
    const si = toCoords(startAngle, r);
    const ei = toCoords(endAngle, r);
    return { ...d, path: `M${s.x},${s.y} A${R},${R} 0 ${large},1 ${e.x},${e.y} L${ei.x},${ei.y} A${r},${r} 0 ${large},0 ${si.x},${si.y} Z`, startAngle, endAngle };
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
      <svg viewBox="0 0 180 180" style={{ width: '160px', height: '160px', flexShrink: 0 }}>
        <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={R - r}/>
        {segments.map((seg, i) => (
          seg.path && <path key={i} d={seg.path} fill={seg.color} opacity="0.9"
            style={{ filter: `drop-shadow(0 0 6px ${seg.color}60)` }}/>
        ))}
        <circle cx={cx} cy={cy} r={r - 4} fill="rgba(0,0,0,0.3)"/>
        <text x={cx} y={cy - 6} textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="sans-serif">IT</text>
        <text x={cx} y={cy + 12} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">SKILLS MIX</text>
      </svg>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: d.color, flexShrink: 0, boxShadow: `0 0 6px ${d.color}80` }}/>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>{d.label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: d.color, fontWeight: 600 }}>{d.value}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── KPI Card ─────────────────────────────────────────────────────────────────
const KPICard = ({ label, value, sub, color, delay, isVisible }) => {
  const [displayed, setDisplayed] = useState('0');

  useEffect(() => {
    if (!isVisible) return;
    const numVal = parseFloat(value);
    if (isNaN(numVal)) { setTimeout(() => setDisplayed(value), delay); return; }
    const hasPct = value.includes('%');
    const hasPlus = value.includes('+');
    let raf, start;
    const animate = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1000, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = Math.round(numVal * eased);
      setDisplayed(`${cur}${hasPct ? '%' : ''}${hasPlus ? '+' : ''}`);
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    const t = setTimeout(() => { raf = requestAnimationFrame(animate); }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [isVisible, value, delay]);

  return (
    <div className="glass" style={{
      padding: '28px 20px',
      borderTop: `2px solid ${color}`,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle top glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 50% 0%, ${color}10, transparent 65%)`,
        pointerEvents: 'none',
      }}/>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '2.4rem',
        fontWeight: 800,
        color,
        marginBottom: '6px',
        textShadow: `0 0 24px ${color}50`,
        lineHeight: 1,
      }}>{displayed}</div>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.9rem', fontWeight: 700,
        color: 'var(--text-primary)', marginBottom: '4px',
      }}>{label}</div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem', color: 'var(--text-muted)',
      }}>{sub}</div>
    </div>
  );
};

// ─── Main Analytics Component ─────────────────────────────────────────────────
const Analytics = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="analytics" className="section" style={{ background: 'rgba(0,0,0,0.06)' }}>
      <div className="container" ref={ref}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <p className="section-label">Data Analytics</p>
          <h2 className="section-title">
            Insights &{' '}
            <span style={{ color: 'var(--accent-primary)' }}>Metrics</span>
          </h2>
          <p className="section-subtitle">
            A data analyst's view of my own growth — turning personal milestones into actionable visuals.
          </p>
        </div>

        {/* KPI Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginBottom: '32px',
        }} className="kpi-grid">
          {kpiData.map((k, i) => (
            <KPICard key={k.label} {...k} delay={i * 150} isVisible={isVisible} />
          ))}
        </div>

        {/* Main charts grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr',
          gap: '20px',
          marginBottom: '20px',
        }} className="charts-top-grid">

          {/* Line Chart */}
          <div className="glass" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>
                  Skill Growth Over Time
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  Proficiency progression — 2024 to 2025
                </p>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                {[['#63b3ed','Full Stack'],['#9f7aea','Data Analytics']].map(([c, l]) => (
                  <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '24px', height: '3px', background: c, borderRadius: '2px' }}/>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <LineChart data={skillGrowthData} isVisible={isVisible} />
          </div>

          {/* Donut Chart */}
          <div className="glass" style={{ padding: '28px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
              Skills Distribution
            </h3>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Domain focus breakdown
            </p>
            <DonutChart data={techDistribution} isVisible={isVisible} />
          </div>
        </div>

        {/* Bottom: Project bar chart */}
        <div className="glass" style={{ padding: '28px' }}>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>
              Project Completion & Quality Score
            </h3>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              Self-assessed delivery score per project (%)
            </p>
          </div>
          <HBarChart data={projectData} isVisible={isVisible} />
        </div>

        {/* Insight callout */}
        <div style={{
          marginTop: '20px',
          padding: '18px 24px',
          background: 'rgba(99,179,237,0.06)',
          border: '1px solid rgba(99,179,237,0.18)',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '14px',
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: '1.1rem', marginTop: '2px' }}>📊</span>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1 }}>
            <strong style={{ color: 'var(--accent-primary)' }}>Takeaway:</strong>{' '}
            During my 520-hour internship at Universal Leaf Philippines, I grew across two parallel tracks — Full Stack Development
            (INTERNIFY, Power BI Embedded) and Data Analytics (Power BI dashboards, Excel pipelines).
            The goal is a dual-track career that bridges clean backend engineering with actionable data insights.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .charts-top-grid { grid-template-columns: 1fr !important; }
          .kpi-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .kpi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Analytics;
