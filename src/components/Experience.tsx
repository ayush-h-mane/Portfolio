import React, { useState } from 'react';
import { EXPERIENCE_ITEMS, PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { CyberTimeMachine } from './CyberTimeMachine';
import { soundFx } from '../utils/soundFx';
import { Clock, List } from 'lucide-react';

export const Experience: React.FC = () => {
  const [mode, setMode] = useState<'timemachine' | 'standard'>('timemachine');

  return (
    <section id="experience" className="section-container" style={{ position: 'relative' }}>
      {/* Header with Mode Switcher */}
      <ScrollReveal direction="down">
        <div className="section-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="bullet-dot" />
            <h2>EXPERIENCE & CAREER</h2>
          </div>

          <div style={{ display: 'flex', background: 'rgba(0,0,0,0.4)', borderRadius: '8px', padding: '3px', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
            <button
              onClick={() => {
                soundFx.playClick();
                setMode('timemachine');
              }}
              onMouseEnter={() => soundFx.playHover()}
              style={{
                background: mode === 'timemachine' ? 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)' : 'transparent',
                color: mode === 'timemachine' ? '#fff' : 'var(--text-muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '0.35rem 0.85rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Clock size={14} /> Time Machine
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setMode('standard');
              }}
              onMouseEnter={() => soundFx.playHover()}
              style={{
                background: mode === 'standard' ? 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)' : 'transparent',
                color: mode === 'standard' ? '#fff' : 'var(--text-muted)',
                border: 'none',
                borderRadius: '6px',
                padding: '0.35rem 0.85rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.2s ease'
              }}
            >
              <List size={14} /> Timeline View
            </button>
          </div>
        </div>
      </ScrollReveal>

      {mode === 'timemachine' ? (
        <CyberTimeMachine />
      ) : ( 

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}
      >
        {/* Left Column Timeline */}
        <ScrollReveal direction="right" delay={100}>
          <div style={{ position: 'relative', paddingLeft: '1.75rem' }}>
            {/* Connecting Vertical Line */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                bottom: '12px',
                left: '5px',
                width: '2px',
                background: 'linear-gradient(180deg, #ef4444 0%, #dc2626 100%)',
                borderRadius: '2px'
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
              {EXPERIENCE_ITEMS.map((item, idx) => (
                <ScrollReveal key={item.id} delay={150 + idx * 100} direction="up">
                  <div style={{ position: 'relative' }}>
                    {/* Glowing Node Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-1.75rem',
                        top: '4px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: '#ef4444',
                        boxShadow: '0 0 10px #ef4444',
                        border: '2px solid var(--bg-dark)'
                      }}
                    />

                    {/* Role Title & Date */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}
                    >
                      <h3
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: 'var(--text-white)'
                        }}
                      >
                        {item.role}
                      </h3>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--text-dim)',
                          fontWeight: 600
                        }}
                      >
                        {item.period}
                      </span>
                    </div>

                    {/* Company Name */}
                    <div
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: '#ef4444',
                        marginTop: '0.2rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {item.company}
                    </div>

                    {/* Bullets or Description */}
                    {item.bullets && item.bullets.length > 0 ? (
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingLeft: '1.1rem' }}>
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        style={{
                          fontSize: '0.9rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.6
                        }}
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column Graphic */}
        <ScrollReveal direction="left" delay={200}>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              className="pop-image"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                border: '1px solid rgba(220, 38, 38, 0.25)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), 0 0 30px rgba(220, 38, 38, 0.18)'
              }}
            >
              <img
                src={PERSONAL_INFO.experienceGraphic}
                alt="Developer coding in room with neon logo"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
      )}
    </section>
  );
};
