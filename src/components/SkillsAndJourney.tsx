import React from 'react';
import { SKILL_CATEGORIES_PROGRESS, JOURNEY_MILESTONES } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const SkillsAndJourney: React.FC = () => {
  return (
    <section id="skills" className="section-container" style={{ position: 'relative' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '2.5rem',
          alignItems: 'start'
        }}
        className="skills-journey-grid"
      >
        {/* Left Side: MY SKILLS (With Progress Bars) */}
        <ScrollReveal direction="right">
          <div>
            {/* Header */}
            <div className="section-header">
              <span className="bullet-dot" />
              <h2>MY SKILLS</h2>
            </div>

            <div
              className="glass-card pop-card"
              style={{
                padding: '1.75rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem'
              }}
            >
              {SKILL_CATEGORIES_PROGRESS.map((cat, catIdx) => (
                <div key={catIdx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {cat.title}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    {cat.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '0.82rem'
                          }}
                        >
                          <span style={{ color: 'var(--text-white)', fontWeight: 600 }}>{skill.name}</span>
                          <span style={{ color: '#ef4444', fontWeight: 700 }}>{skill.percentage}%</span>
                        </div>

                        {/* Progress Bar Track */}
                        <div
                          style={{
                            width: '100%',
                            height: '6px',
                            borderRadius: '3px',
                            background: 'rgba(220, 38, 38, 0.12)',
                            overflow: 'hidden',
                            position: 'relative'
                          }}
                        >
                          <div
                            style={{
                              width: `${skill.percentage}%`,
                              height: '100%',
                              borderRadius: '3px',
                              background: 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)',
                              boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
                              transition: 'width 1s ease-in-out'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right Side: MY JOURNEY */}
        <ScrollReveal direction="left" delay={150}>
          <div>
            {/* Header */}
            <div className="section-header">
              <span className="bullet-dot" />
              <h2>MY JOURNEY</h2>
            </div>

            <div
              className="glass-card pop-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem'
              }}
            >
              {/* Timeline Horizontal Line / Node Connection */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '0.5rem',
                  position: 'relative',
                  marginBottom: '1rem'
                }}
              >
                {/* Horizontal Line behind icons */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '10%',
                    right: '10%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)',
                    zIndex: 0
                  }}
                />

                {JOURNEY_MILESTONES.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'var(--bg-card)',
                        border: '2px solid #ef4444',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ef4444',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        boxShadow: '0 0 12px rgba(239, 68, 68, 0.35)'
                      }}
                    >
                      🚀
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-white)' }}>
                      {m.year}
                    </span>
                  </div>
                ))}
              </div>

              {/* Descriptions Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {JOURNEY_MILESTONES.map((m, idx) => (
                  <div
                    key={idx}
                    className="pop-card"
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        color: '#ef4444',
                        minWidth: '50px'
                      }}
                    >
                      {m.year}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      {m.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-journey-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
