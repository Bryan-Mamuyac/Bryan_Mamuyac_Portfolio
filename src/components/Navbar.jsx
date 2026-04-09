import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import { navLinks, personalInfo } from '../data/portfolio';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: '0 24px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'var(--nav-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '38px', height: '38px',
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))',
          borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)',
          fontWeight: 800, fontSize: '1rem',
          color: '#fff',
          boxShadow: '0 4px 15px var(--accent-glow)',
        }}>BM</div>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.1rem',
          color: 'var(--text-primary)',
        }}>Bryan Mamuyac</span>
      </div>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            onSetActive={() => setActiveSection(link.to)}
            style={{
              padding: '8px 16px',
              borderRadius: '50px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              fontWeight: '500',
              cursor: 'pointer',
              color: activeSection === link.to ? 'var(--accent-primary)' : 'var(--text-secondary)',
              background: activeSection === link.to ? 'var(--glass-bg)' : 'transparent',
              border: activeSection === link.to ? '1px solid var(--glass-border)' : '1px solid transparent',
              transition: 'var(--transition)',
              userSelect: 'none',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right side controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          style={{
            width: '44px', height: '24px',
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #1a3a5c, #2d5986)'
              : 'linear-gradient(135deg, #bfdbfe, #93c5fd)',
            border: '1px solid var(--glass-border)',
            borderRadius: '50px',
            cursor: 'pointer',
            position: 'relative',
            transition: 'var(--transition)',
          }}
        >
          <div style={{
            width: '18px', height: '18px',
            background: theme === 'dark' ? '#f6d860' : '#fff',
            borderRadius: '50%',
            position: 'absolute',
            top: '2px',
            left: theme === 'dark' ? '22px' : '2px',
            transition: 'left 0.3s ease',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '10px',
          }}>
            {theme === 'dark' ? '🌙' : '☀️'}
          </div>
        </button>

        {/* Hire Me Button */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="btn-primary"
          style={{ padding: '8px 20px', fontSize: '0.85rem' }}
        >
          <span>Hire Me</span>
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(m => !m)}
          className="hamburger"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'none', flexDirection: 'column', gap: '5px', padding: '4px',
          }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '24px', height: '2px',
              background: 'var(--text-primary)',
              borderRadius: '2px',
              transition: 'var(--transition)',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translate(5px, -5px)'
                : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '70px', left: 0, right: 0,
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--glass-border)',
          padding: '16px 24px',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                transition: 'var(--transition)',
              }}
            >{link.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
