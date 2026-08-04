import React from 'react';
import { Award, CheckCircle2, Trophy, BookOpen } from 'lucide-react';
import { CERTIFICATIONS, LEADERSHIP_ACTIVITIES } from '../data/portfolioData';

export const CertificationsAndLeadership: React.FC = () => {
  return (
    <section id="certifications" style={{ position: 'relative', padding: '80px 0', borderBottom: 'var(--border-grid)', background: 'var(--bg-void)' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-label">
            VERIFIED CREDENTIALS
          </div>
          <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', color: 'var(--accent-gold)' }}>
            LICENSES & HONORS
          </span>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}
        >
          {/* Card 1: Verified Professional Certifications */}
          <div className="luxury-grid-box">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: 'var(--border-grid)'
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)'
                }}
              >
                <Award size={18} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                  Industry Certifications
                </h3>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                  Google, Microsoft, IBM & Anaconda
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '14px', maxHeight: '480px', overflowY: 'auto', paddingRight: '4px' }}>
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '14px 16px',
                    border: '1px solid rgba(230, 207, 171, 0.08)',
                    background: 'rgba(7, 9, 14, 0.5)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>{cert.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', marginTop: '2px' }}>
                      {cert.issuer}
                    </div>
                    {cert.skillsCovered && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '6px' }}>
                        {cert.skillsCovered.map((s) => (
                          <span
                            key={s}
                            style={{
                              fontSize: '0.65rem',
                              padding: '2px 6px',
                              border: '1px solid rgba(230, 207, 171, 0.15)',
                              borderRadius: '2px',
                              color: 'var(--text-muted)'
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Campus Leadership & Honors */}
          <div className="luxury-grid-box">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: 'var(--border-grid)'
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)'
                }}
              >
                <Trophy size={18} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                  Campus Leadership & Honors
                </h3>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                  Promotions & National Competitions
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '16px' }}>
              {LEADERSHIP_ACTIVITIES.map((act, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '18px',
                    border: '1px solid rgba(230, 207, 171, 0.08)',
                    background: 'rgba(7, 9, 14, 0.5)',
                    borderRadius: '4px'
                  }}
                >
                  <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <BookOpen size={15} color="var(--accent-gold)" /> {act.role}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px', marginBottom: '8px' }}>
                    {act.organization}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                    {act.achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
