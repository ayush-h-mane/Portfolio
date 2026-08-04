import React from 'react';
import { Code, Cpu, Sparkles, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const ServicesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code size={22} color="#ef4444" />,
    Cpu: <Cpu size={22} color="#ef4444" />,
    Sparkles: <Sparkles size={22} color="#dc2626" />,
    Layers: <Layers size={22} color="#ef4444" />
  };

  return (
    <section id="services" className="section-container" style={{ position: 'relative' }}>
      {/* Header */}
      <ScrollReveal direction="down">
        <div className="section-header">
          <span className="bullet-dot" />
          <h2>WHAT I DO</h2>
        </div>
      </ScrollReveal>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {PERSONAL_INFO.services.map((service, idx) => (
          <ScrollReveal key={idx} delay={idx * 120} direction="up">
            <div
              className="glass-card pop-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                height: '100%'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(220, 38, 38, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {iconMap[service.icon] || <Code size={22} color="#ef4444" />}
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-white)'
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.4rem',
                    lineHeight: 1.6
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
