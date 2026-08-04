import React from 'react';
import { Sparkles, FolderGit2, GraduationCap, MapPin, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const StatsRibbon: React.FC = () => {
  return (
    <section style={{ padding: '0', background: 'var(--bg-void)' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Bordered Bento Grid Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1.3fr 1fr',
            border: 'var(--border-grid)',
            background: 'var(--bg-surface)'
          }}
          className="identity-stats-grid"
        >
          {/* Left Cell: Name & Title */}
          <div
            style={{
              padding: '36px 32px',
              borderRight: 'var(--border-grid)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
            className="grid-cell-left"
          >
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1.05,
                letterSpacing: '0.02em',
                textTransform: 'uppercase'
              }}
            >
              {PERSONAL_INFO.name}
            </h2>
            <div
              style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginTop: '12px'
              }}
            >
              WEB DESIGNER & AI DEVELOPER
            </div>
            <div
              style={{
                width: '40px',
                height: '1px',
                background: 'var(--accent-gold)',
                marginTop: '20px'
              }}
            />
          </div>

          {/* Center Cell: Bio Summary & Location */}
          <div
            style={{
              padding: '36px 32px',
              borderRight: 'var(--border-grid)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px'
            }}
            className="grid-cell-center"
          >
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-body)',
                lineHeight: 1.65,
                fontFamily: 'var(--font-body)'
              }}
            >
              I help ambitious brands and organizations stand out online with strategic AI design, clean code, and seamless full-stack user experiences.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)'
                }}
              >
                <MapPin size={13} color="var(--accent-gold)" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-gold)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)'
                }}
              >
                <Globe size={12} />
                <span>AVAILABLE WORLDWIDE</span>
              </div>
            </div>
          </div>

          {/* Right Cell: 3 Stacked Stat Rows */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
            className="grid-cell-right"
          >
            {/* Stat Row 1 */}
            <div
              style={{
                flex: 1,
                padding: '16px 24px',
                borderBottom: 'var(--border-grid)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
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
                  color: 'var(--accent-gold)',
                  flexShrink: 0
                }}
              >
                <Sparkles size={16} />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--accent-gold)', marginRight: '8px' }}>
                  4+
                </span>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  YEARS DEV EXPERIENCE
                </span>
              </div>
            </div>

            {/* Stat Row 2 */}
            <div
              style={{
                flex: 1,
                padding: '16px 24px',
                borderBottom: 'var(--border-grid)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
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
                  color: 'var(--accent-gold)',
                  flexShrink: 0
                }}
              >
                <FolderGit2 size={16} />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--accent-gold)', marginRight: '8px' }}>
                  10+
                </span>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  PROJECTS COMPLETED
                </span>
              </div>
            </div>

            {/* Stat Row 3 */}
            <div
              style={{
                flex: 1,
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
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
                  color: 'var(--accent-gold)',
                  flexShrink: 0
                }}
              >
                <GraduationCap size={16} />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--accent-gold)', marginRight: '8px' }}>
                  7.0
                </span>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  CGPA / B.E. IN AI & ML
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .identity-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .grid-cell-left, .grid-cell-center {
            border-right: none !important;
            border-bottom: var(--border-grid) !important;
          }
        }
      `}</style>
    </section>
  );
};
