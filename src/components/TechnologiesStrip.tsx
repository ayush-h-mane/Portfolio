import React from 'react';
import { TECH_STRIP_SKILLS } from '../data/portfolioData';

export const TechnologiesStrip: React.FC = () => {
  const techIconConfig: Record<string, { label: string; color: string; bg: string }> = {
    python: { label: '🐍', color: '#3776ab', bg: 'rgba(55, 118, 171, 0.15)' },
    react: { label: '⚛', color: '#0284c7', bg: 'rgba(2, 132, 199, 0.15)' },
    nextjs: { label: 'N', color: '#0f172a', bg: 'rgba(15, 23, 42, 0.12)' },
    fastapi: { label: '⚡', color: '#059669', bg: 'rgba(5, 150, 105, 0.15)' },
    nodejs: { label: 'JS', color: '#16a34a', bg: 'rgba(22, 163, 74, 0.15)' },
    express: { label: 'ex', color: '#475569', bg: 'rgba(71, 85, 105, 0.15)' },
    pytorch: { label: '🔥', color: '#ee4c2c', bg: 'rgba(238, 76, 44, 0.15)' },
    opencv: { label: '👁', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.15)' },
    sql: { label: 'SQL', color: '#d97706', bg: 'rgba(217, 119, 6, 0.15)' },
    mysql: { label: '🐬', color: '#0284c7', bg: 'rgba(2, 132, 199, 0.15)' },
    mongodb: { label: '🍃', color: '#16a34a', bg: 'rgba(22, 163, 74, 0.15)' },
    git: { label: 'Git', color: '#ea580c', bg: 'rgba(234, 88, 12, 0.15)' }
  };

  return (
    <section className="section-container" style={{ position: 'relative', paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="section-header" style={{ marginBottom: '1.5rem' }}>
        <span className="bullet-dot" />
        <h2>TECHNOLOGIES I WORK WITH</h2>
      </div>

      <div
        className="glass-card"
        style={{
          padding: '1.5rem 1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.25rem',
          alignItems: 'center'
        }}
      >
        {TECH_STRIP_SKILLS.map((tech, idx) => {
          const cfg = techIconConfig[tech.iconKey] || { label: '•', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.15)' };
          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.5rem 0.85rem',
                borderRadius: '10px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.2s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  background: cfg.bg,
                  color: cfg.color,
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {cfg.label}
              </span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-white)', fontWeight: 600 }}>
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
