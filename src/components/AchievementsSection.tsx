import React, { useRef, useState } from 'react';
import { Award, ExternalLink, ShieldCheck, ChevronUp, ChevronDown, Trophy, Star } from 'lucide-react';
import { REAL_CERTIFICATIONS, REAL_HONORS_ACHIEVEMENTS } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const AchievementsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Certifications' | 'Achievements'>('All');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'up' | 'down') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'up' ? -280 : 280;
      scrollRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  };

  // Combine items according to filter
  const certificationsFormatted = REAL_CERTIFICATIONS.map(c => ({
    type: 'certification' as const,
    title: c.title,
    issuer: c.issuer,
    date: c.date,
    fileUrl: c.fileUrl,
    category: c.category
  }));

  const achievementsFormatted = REAL_HONORS_ACHIEVEMENTS.map(a => ({
    type: 'achievement' as const,
    title: a.title,
    issuer: a.organization,
    date: a.year,
    category: a.category,
    description: a.description
  }));

  let items = [];
  if (activeFilter === 'All') {
    items = [...achievementsFormatted, ...certificationsFormatted];
  } else if (activeFilter === 'Certifications') {
    items = certificationsFormatted;
  } else {
    items = achievementsFormatted;
  }

  return (
    <section id="achievements" className="section-container" style={{ position: 'relative' }}>
      {/* Top Header Row with Vertical Scroll Controls */}
      <ScrollReveal direction="down">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="bullet-dot" />
            <h2>ACHIEVEMENTS & CERTIFICATIONS</h2>
          </div>

          {/* Vertical Scroll Control Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              onClick={() => scroll('up')}
              title="Scroll Up"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)';
                e.currentTarget.style.color = '#ef4444';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.color = 'var(--text-white)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronUp size={20} />
            </button>

            <button
              onClick={() => scroll('down')}
              title="Scroll Down"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #991b1b 100%)',
                border: 'none',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(239, 68, 68, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.4)';
              }}
            >
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Filter Tabs & Scroll Hint */}
      <ScrollReveal direction="up" delay={80}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '1.75rem'
          }}
        >
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {[
              { id: 'All', label: `All (${certificationsFormatted.length + achievementsFormatted.length})` },
              { id: 'Certifications', label: `Certifications (${certificationsFormatted.length})` },
              { id: 'Achievements', label: `Achievements & Honors (${achievementsFormatted.length})` }
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  style={{
                    padding: '0.45rem 1.1rem',
                    borderRadius: '8px',
                    border: isActive ? 'none' : '1px solid var(--border-color)',
                    background: isActive
                      ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #991b1b 100%)'
                      : 'var(--bg-card)',
                    color: isActive ? '#ffffff' : 'var(--text-muted)',
                    fontWeight: isActive ? 700 : 600,
                    fontSize: '0.84rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Scroll vertically inside container</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </ScrollReveal>

      {/* Vertical Scroll Track Container */}
      <div
        ref={scrollRef}
        style={{
          maxHeight: '560px',
          overflowY: 'auto',
          scrollBehavior: 'smooth',
          paddingRight: '0.75rem',
          paddingBottom: '0.5rem',
          paddingTop: '0.25rem'
        }}
        className="vertical-scroll-track"
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="glass-card pop-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
                position: 'relative'
              }}
            >
              <div>
                {/* Header Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.28rem 0.7rem',
                      borderRadius: '99px',
                      background: item.type === 'achievement'
                        ? 'rgba(234, 179, 8, 0.15)'
                        : item.issuer.includes('Coursera')
                        ? 'rgba(37, 99, 235, 0.12)'
                        : 'rgba(220, 38, 38, 0.12)',
                      border: item.type === 'achievement'
                        ? '1px solid rgba(234, 179, 8, 0.35)'
                        : item.issuer.includes('Coursera')
                        ? '1px solid rgba(59, 130, 246, 0.3)'
                        : '1px solid rgba(239, 68, 68, 0.3)',
                      color: item.type === 'achievement'
                        ? '#eab308'
                        : item.issuer.includes('Coursera')
                        ? '#3b82f6'
                        : '#ef4444',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}
                  >
                    {item.type === 'achievement' ? <Trophy size={13} /> : <Award size={13} />}
                    {item.issuer}
                  </span>

                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 600 }}>
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.08rem',
                    fontWeight: 800,
                    color: 'var(--text-white)',
                    lineHeight: 1.35,
                    marginBottom: '0.6rem'
                  }}
                >
                  {item.title}
                </h3>

                {/* Description or Sub-tag */}
                {item.type === 'achievement' ? (
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    {item.description}
                  </p>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                    <ShieldCheck size={14} color="#ef4444" />
                    <span>Verified Credential ({item.category})</span>
                  </div>
                )}
              </div>

              {/* Footer Action / Category */}
              <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {item.type === 'certification' && item.fileUrl ? (
                  <a
                    href={item.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#ef4444',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#ef4444')}
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#eab308', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Star size={13} />
                    <span>{item.category}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .vertical-scroll-track::-webkit-scrollbar {
          width: 7px;
        }
        .vertical-scroll-track::-webkit-scrollbar-track {
          background: rgba(220, 38, 38, 0.08);
          border-radius: 4px;
        }
        .vertical-scroll-track::-webkit-scrollbar-thumb {
          background: rgba(239, 68, 68, 0.45);
          border-radius: 4px;
        }
        .vertical-scroll-track::-webkit-scrollbar-thumb:hover {
          background: rgba(239, 68, 68, 0.75);
        }
      `}</style>
    </section>
  );
};
