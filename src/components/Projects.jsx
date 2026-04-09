import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'iot', label: 'IoT' },
  { key: 'game', label: 'Game Dev' },
];

const ProjectCard = ({ project, featured }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="glass"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'var(--transition)',
        cursor: 'default',
      }}
    >
      {/* Color top accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '3px',
        background: `linear-gradient(90deg, ${project.color}, transparent)`,
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
              color: project.color,
              padding: '3px 10px',
              background: `${project.color}15`,
              border: `1px solid ${project.color}30`,
              borderRadius: '50px',
            }}>{project.type}</span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
              color: 'var(--text-muted)',
            }}>{project.year}</span>
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem', fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '2px',
          }}>{project.title}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{project.subtitle}</p>
        </div>

        {/* GitHub link */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '38px', height: '38px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '10px',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = project.color;
              e.currentTarget.style.color = project.color;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
        )}
      </div>

      {/* Project image placeholder */}
      <div style={{
        width: '100%', height: '140px',
        background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
        border: `1px solid ${project.color}20`,
        borderRadius: '10px',
        marginBottom: '16px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={e => { e.target.style.display = 'none'; }}
          />
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '6px', opacity: 0.6 }}>
              {project.category === 'fullstack' ? '⚡' : project.category === 'iot' ? '🤖' : project.category === 'game' ? '🎮' : '📊'}
            </div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
              color: 'var(--text-muted)',
            }}>Add screenshot to<br/>/public/assets/projects/</p>
          </div>
        )}
      </div>

      {/* Description */}
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '0.88rem',
        lineHeight: 1.65,
        marginBottom: '16px',
        flexGrow: 1,
      }}>{project.description}</p>

      {/* Highlight */}
      <div style={{
        padding: '8px 12px',
        background: `${project.color}10`,
        border: `1px solid ${project.color}25`,
        borderRadius: '8px',
        marginBottom: '16px',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: project.color }}>
          ✦ {project.highlight}
        </span>
      </div>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.tech.map(tech => (
          <span key={tech} className="badge">{tech}</span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, isVisible] = useScrollAnimation();

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container" ref={ref}>
        <div style={{ marginBottom: '50px' }}>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of real-world systems, capstone work, and passion projects I've built.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '36px', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              style={{
                padding: '8px 20px',
                border: `1px solid ${activeFilter === f.key ? 'var(--accent-primary)' : 'var(--glass-border)'}`,
                borderRadius: '50px',
                background: activeFilter === f.key ? 'var(--glass-bg-hover)' : 'var(--glass-bg)',
                color: activeFilter === f.key ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                fontWeight: 500,
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'var(--transition)',
              }}
            >{f.label}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <a
            href="https://github.com/Bryan-Mamuyac?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            View All Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
