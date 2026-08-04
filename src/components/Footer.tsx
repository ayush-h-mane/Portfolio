import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(139, 92, 246, 0.12)',
        background: 'rgba(9, 8, 20, 0.95)',
        padding: '1.75rem 1.5rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        {/* Left Copyright */}
        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-dim)',
            fontWeight: 500
          }}
        >
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>

        {/* Right Attribution */}
        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-dim)',
            fontWeight: 500
          }}
        >
          Designed & Built with <span style={{ color: '#ef4444' }}>❤️</span> by {PERSONAL_INFO.headlineName}
        </p>
      </div>
    </footer>
  );
};