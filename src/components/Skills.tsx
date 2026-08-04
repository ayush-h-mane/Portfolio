import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const skillIconConfig: Record<string, { label: string; color: string; bg: string }> = {
    html5: { label: '5', color: '#e34f26', bg: 'rgba(227, 79, 38, 0.15)' },
    css3: { label: '3', color: '#1572b6', bg: 'rgba(21, 114, 182, 0.15)' },
    javascript: { label: 'JS', color: '#f7df1e', bg: 'rgba(247, 223, 30, 0.15)' },
    react: { label: '⚛', color: '#61dafb', bg: 'rgba(97, 218, 251, 0.15)' },
    nextjs: { label: 'N', color: '#f8fafc', bg: 'rgba(248, 250, 252, 0.15)' },
    bootstrap: { label: 'B', color: '#7952b3', bg: 'rgba(121, 82, 179, 0.15)' },
    fastapi: { label: '⚡', color: '#059669', bg: 'rgba(5, 150, 105, 0.15)' },
    nodejs: { label: 'JS', color: '#4ade80', bg: 'rgba(74, 222, 128, 0.15)' },
    express: { label: 'ex', color: '#e2e8f0', bg: 'rgba(226, 232, 240, 0.15)' },
    restapi: { label: 'API', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)' },
    python: { label: '🐍', color: '#3776ab', bg: 'rgba(55, 118, 171, 0.15)' },
    sql: { label: 'SQL', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' },
    pytorch: { label: '🔥', color: '#ee4c2c', bg: 'rgba(238, 76, 44, 0.15)' },
    opencv: { label: '👁', color: '#5c3ee8', bg: 'rgba(92, 62, 232, 0.15)' },
    scikitlearn: { label: 'SK', color: '#f7931e', bg: 'rgba(247, 147, 30, 0.15)' },
    mongodb: { label: '🍃', color: '#47a248', bg: 'rgba(71, 162, 72, 0.15)' },
    git: { label: 'Git', color: '#f05032', bg: 'rgba(240, 80, 50, 0.15)' },
    vscode: { label: 'VS', color: '#007acc', bg: 'rgba(0, 122, 204, 0.15)' }
  };

  return (
    <section id="skills" className="section-container" style={{ position: 'relative' }}>
      {/* Header */}
      <div className="section-header">
        <span className="bullet-dot" />
        <h2>Skills</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {SKILL_GROUPS.map((group, groupIdx) => (
          <div key={groupIdx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                letterSpacing: '0.05em'
              }}
            >
              {group.category}
            </h3>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                alignItems: 'center'
              }}
            >
              {group.skills.map((skill, skillIdx) => {
                const config = skillIconConfig[skill.iconKey] || {
                  label: '•',
                  color: '#818cf8',
                  bg: 'rgba(129, 140, 248, 0.15)'
                };

                return (
                  <div
                    key={skillIdx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        background: config.bg,
                        border: `1px solid ${config.color}33`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: config.color,
                        fontWeight: 800,
                        fontSize: '1rem',
                        transition: 'all 0.25s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.borderColor = config.color;
                        e.currentTarget.style.boxShadow = `0 8px 20px ${config.color}33`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = `${config.color}33`;
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {config.label}
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--text-muted)',
                        fontWeight: 500
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
