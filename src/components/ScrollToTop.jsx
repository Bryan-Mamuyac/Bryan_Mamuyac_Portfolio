import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => scroll.scrollToTop({ duration: 600, smooth: true })}
      title="Back to top"
      style={{
        position: 'fixed',
        bottom: '32px', right: '32px',
        zIndex: 999,
        width: '48px', height: '48px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))',
        border: 'none',
        borderRadius: '14px',
        color: '#fff',
        cursor: 'pointer',
        boxShadow: '0 8px 25px var(--accent-glow)',
        transition: 'var(--transition)',
        animation: 'fadeInUp 0.3s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  );
};

export default ScrollToTop;
