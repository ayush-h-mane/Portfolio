import React from 'react';
import { ArrowRight, MessageSquare, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '2rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.18) 0%, rgba(153, 27, 27, 0.05) 50%, transparent 70%)',
          filter: 'blur(70px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div
        className="hero-grid-container"
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Left Column Text Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Top Capsule Badge */}
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: '99px',
                background: 'rgba(220, 38, 38, 0.12)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#ef4444',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
              {PERSONAL_INFO.badge}
            </span>
          </div>

          {/* Headline Name */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <span className="hero-intro-font">
              <Sparkles size={16} color="#ef4444" />
              <span>{PERSONAL_INFO.headlineIntro}</span>
            </span>

            <h1 className="hero-title-font text-gradient-red" style={{ filter: 'drop-shadow(0 0 25px rgba(239, 68, 68, 0.25))' }}>
              {PERSONAL_INFO.headlineName}
            </h1>
          </div>

          {/* Subheading */}
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '540px'
            }}
          >
            {PERSONAL_INFO.subheading}
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            <a href="#projects" className="btn-primary-red">
              <span>View My Work</span>
              <ArrowRight size={16} />
            </a>

            <a href="#contact" className="btn-outline-dark">
              <span>Let's Connect</span>
              <MessageSquare size={15} />
            </a>

            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="btn-outline-dark"
                style={{ borderColor: 'rgba(239, 68, 68, 0.3)', color: '#ef4444' }}
              >
                <Terminal size={15} />
                <span>CLI Shell</span>
              </button>
            )}
          </div>

          {/* Code Snippet Box */}
          <div
            className="pop-card"
            style={{
              marginTop: '1rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              fontFamily: 'var(--font-code)',
              fontSize: '0.8rem',
              color: 'var(--text-white)',
              boxShadow: 'var(--card-shadow)'
            }}
          >
            <div style={{ display: 'flex', gap: '6px', marginBottom: '0.6rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
            </div>
            <div>
              <span style={{ color: '#ef4444' }}>const</span> <span style={{ color: 'var(--text-white)' }}>developer</span> = &#123;<br />
              &nbsp;&nbsp;<span style={{ color: 'var(--text-muted)' }}>name:</span> <span style={{ color: '#ef4444' }}>'Ayush H Mane'</span>,<br />
              &nbsp;&nbsp;<span style={{ color: 'var(--text-muted)' }}>role:</span> <span style={{ color: '#ef4444' }}>'Full-Stack Developer'</span>,<br />
              &nbsp;&nbsp;<span style={{ color: 'var(--text-muted)' }}>education:</span> <span style={{ color: '#ef4444' }}>'B.E. in AI & ML'</span>,<br />
              &nbsp;&nbsp;<span style={{ color: 'var(--text-muted)' }}>code:</span> <span style={{ color: '#16a34a' }}>'Clean • Scalable • Efficient'</span><br />
              &#125;;
            </div>
          </div>
        </div>

        {/* Center Column - Portrait Container */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          {/* Backdrop Glow */}
          <div
            style={{
              position: 'absolute',
              width: '90%',
              height: '90%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, rgba(185, 28, 28, 0.08) 60%, transparent 80%)',
              filter: 'blur(35px)',
              zIndex: 0
            }}
          />

          {/* Portrait Container Box */}
          <div
            className="pop-image hero-portrait-card"
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '380px',
              height: '520px',
              borderRadius: '1.75rem',
              overflow: 'hidden',
              border: '2px solid rgba(239, 68, 68, 0.35)',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.15), 0 0 40px rgba(220, 38, 38, 0.18)',
              background: 'var(--bg-card)'
            }}
          >
            <img
              src={PERSONAL_INFO.avatarImage}
              alt={PERSONAL_INFO.name}
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'center 82%',
                transform: 'scale(1.68)',
                transformOrigin: 'center 80%'
              }}
            />
          </div>

          {/* Floating </> Red Badge */}
          <div
            className="animate-float hero-floating-badge"
            style={{
              position: 'absolute',
              bottom: '6%',
              left: '-2%',
              zIndex: 2,
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #991b1b 100%)',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1.15rem',
              padding: '0.65rem 1.1rem',
              borderRadius: '14px',
              boxShadow: '0 10px 25px rgba(220, 38, 38, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            &lt;/&gt;
          </div>
        </div>

        {/* Right Column Real Stats Ribbon */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {PERSONAL_INFO.heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card pop-card"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                transition: 'all 0.3s ease'
              }}
            >
              <div
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 900,
                  color: '#ef4444',
                  lineHeight: 1
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500, lineHeight: 1.3 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
