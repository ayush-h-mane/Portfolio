import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { soundFx } from '../utils/soundFx';
import { GitCommit, Flame, Zap, GitBranch, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const GitTelemetryRibbon: React.FC = () => {
  const [gitStats, setGitStats] = useState({
    publicRepos: 3,
    followers: 0,
    following: 0,
    loaded: false
  });

  useEffect(() => {
    fetch('https://api.github.com/users/ayush-h-mane')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.public_repos !== undefined) {
          setGitStats({
            publicRepos: data.public_repos,
            followers: data.followers || 0,
            following: data.following || 0,
            loaded: true
          });
        }
      })
      .catch(() => {
        // Fallback to portfolioData constants
      });
  }, []);

  return (
    <section id="git-telemetry" className="section-container" style={{ position: 'relative' }}>
      <ScrollReveal direction="up">
        {/* Section Header */}
        <div className="section-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="bullet-dot" />
            <h2>REAL GITHUB CONTRIBUTION GRAPH & TELEMETRY</h2>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(239, 68, 68, 0.12)',
              padding: '0.35rem 0.85rem',
              borderRadius: '20px',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#ef4444',
              textDecoration: 'none',
              fontSize: '0.78rem',
              fontWeight: 700
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
            <span>@ayush-h-mane ON GITHUB</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Outer Card */}
        <div
          className="glass-card pop-card"
          style={{
            padding: '1.75rem',
            borderRadius: '16px',
            background: 'rgba(12, 8, 14, 0.9)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.5)'
          }}
        >
          {/* Top Telemetry Stats Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem',
              marginBottom: '1.75rem'
            }}
          >
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(239,68,68,0.25)', padding: '1rem', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <GitCommit color="#ef4444" size={18} />
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Public Repositories</span>
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff' }}>{gitStats.publicRepos} Repos</span>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(245,158,11,0.25)', padding: '1rem', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <Flame color="#f59e0b" size={18} />
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Certifications</span>
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff' }}>13 Verified 📜</span>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(59,130,246,0.25)', padding: '1rem', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <Zap color="#3b82f6" size={18} />
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>B.E. AI & ML</span>
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff' }}>7.0 CGPA</span>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(16,185,129,0.25)', padding: '1rem', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <GitBranch color="#10b981" size={18} />
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Featured AI Repos</span>
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff' }}>3 Core Repos</span>
            </div>
          </div>

          {/* REAL GitHub Activity Heatmap Chart (Direct GitHub Stream) */}
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
              <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-white)', letterSpacing: '0.05em' }}>
                REAL LIVE GITHUB CONTRIBUTION GRAPH (@ayush-h-mane)
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.72rem', color: '#ef4444', textDecoration: 'none', fontWeight: 600 }}
              >
                View on GitHub ↗
              </a>
            </div>

            {/* Live SVG Graph Container */}
            <div
              style={{
                background: '#090509',
                borderRadius: '12px',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                padding: '1.25rem',
                overflowX: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)'
              }}
            >
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%' }}>
                <img
                  src="https://ghchart.rshah.org/ef4444/ayush-h-mane"
                  alt="Ayush H Mane's Real GitHub Contribution Chart"
                  style={{
                    width: '100%',
                    minWidth: '650px',
                    height: 'auto',
                    filter: 'drop-shadow(0 0 8px rgba(239,68,68,0.3))',
                    display: 'block'
                  }}
                  onError={(e) => {
                    // Fallback to static text if offline
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
