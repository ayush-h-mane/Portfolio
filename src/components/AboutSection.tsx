import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container" style={{ position: 'relative' }}>
      <ScrollReveal direction="down">
        <div className="section-header">
          <span className="bullet-dot" />
          <h2>ABOUT ME</h2>
        </div>
      </ScrollReveal>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}
      >
        {/* Left Column Bio & Highlight Grid */}
        <ScrollReveal direction="right">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {PERSONAL_INFO.aboutBio.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '1.025rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  fontWeight: 400
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Highlight Strengths Badges */}
            {PERSONAL_INFO.aboutHighlights && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '0.85rem',
                  marginTop: '0.5rem',
                  marginBottom: '0.5rem'
                }}
              >
                {PERSONAL_INFO.aboutHighlights.map((hl, idx) => (
                  <ScrollReveal key={idx} delay={idx * 100} direction="scale">
                    <div
                      className="glass-card pop-card"
                      style={{
                        padding: '0.85rem 1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem'
                      }}
                    >
                      <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-white)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <CheckCircle2 size={15} color="#ef4444" />
                        <span>{hl.label}</span>
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#ef4444', fontWeight: 600 }}>
                        {hl.detail}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}

            <div>
              <a href="#services" className="btn-outline-dark" style={{ marginTop: '0.5rem' }}>
                <span>Explore My Services & Capabilities</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column Workspace Image */}
        <ScrollReveal direction="left" delay={150}>
          <div style={{ position: 'relative' }}>
            <div
              className="pop-image"
              style={{
                position: 'relative',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.25), 0 0 35px rgba(220, 38, 38, 0.2)',
                background: 'var(--bg-card)'
              }}
            >
              <img
                src={PERSONAL_INFO.aboutWorkspaceImage}
                alt="Ayush H Mane Developer Setup"
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
    </section>
  );
};
