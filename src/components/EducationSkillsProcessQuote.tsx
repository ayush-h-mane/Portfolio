import React from 'react';
import { Search, Lightbulb, Cpu, Code, Rocket, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const EducationSkillsProcessQuote: React.FC = () => {
  const educationList = PERSONAL_INFO.education.history.map(item => ({
    degree: item.degree,
    institution: item.institution,
    period: item.period
  }));

  const skillPills = [
    'PYTHON',
    'FASTAPI',
    'REACT.JS',
    'OPENCV',
    'DOCKER',
    'DEBERTA',
    'TYPESCRIPT',
    'SQL',
    'PYTORCH',
    'HTML / CSS',
    'SCIKIT-LEARN',
    'REST APIS'
  ];

  const workProcessSteps = [
    {
      number: '01',
      title: 'DISCOVER',
      description: 'Understanding problem statements, datasets & architectural goals.',
      icon: Search
    },
    {
      number: '02',
      title: 'IDEATE',
      description: 'Designing ML model pipelines, API gateways & UI wireframes.',
      icon: Lightbulb
    },
    {
      number: '03',
      title: 'ENGINEER',
      description: 'Training models, building async backends & frontend components.',
      icon: Cpu
    },
    {
      number: '04',
      title: 'OPTIMIZE',
      description: 'Containerizing services with Docker & tuning inference speed.',
      icon: Code
    },
    {
      number: '05',
      title: 'DEPLOY',
      description: 'Packaging monorepos & testing end-to-end integration.',
      icon: Rocket
    }
  ];

  return (
    <section
      id="education-skills"
      style={{
        position: 'relative',
        padding: '80px 32px',
        maxWidth: '1360px',
        margin: '0 auto'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1.2fr 1fr',
          gap: '36px',
          alignItems: 'stretch'
        }}
        className="three-col-layout"
      >
        {/* COLUMN 1: EDUCATION & SKILLS */}
        <div
          style={{
            background: '#0E090B',
            border: '1px solid rgba(220, 38, 38, 0.18)',
            borderRadius: 'var(--radius-md)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '0.06em'
            }}
          >
            EDUCATION & SKILLS
          </h2>

          {/* Education Subsection */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-red-bright)'
              }}
            >
              EDUCATION
            </span>

            {educationList.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      textTransform: 'none',
                      letterSpacing: '0'
                    }}
                  >
                    {item.degree}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {item.institution}
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    color: 'var(--accent-red-bright)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {item.period}
                </span>
              </div>
            ))}
          </div>

          <div style={{ height: '1px', background: 'rgba(220, 38, 38, 0.15)' }} />

          {/* Skills Subsection */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-red-bright)'
              }}
            >
              SKILLS
            </span>

            {/* Pill Badges Grid */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              {skillPills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(230, 0, 0, 0.05)',
                    border: '1px solid rgba(220, 38, 38, 0.25)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--text-body)',
                    transition: 'var(--transition-fast)'
                  }}
                  className="skill-pill"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* COLUMN 2: ENGINEERING PROCESS */}
        <div
          id="process"
          style={{
            background: '#0E090B',
            border: '1px solid rgba(220, 38, 38, 0.18)',
            borderRadius: 'var(--radius-md)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px'
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '0.06em'
            }}
          >
            ENGINEERING PROCESS
          </h2>

          {/* Step Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
            {/* Connecting Line */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                bottom: '20px',
                left: '20px',
                width: '1px',
                background: 'rgba(220, 38, 38, 0.25)',
                zIndex: 1
              }}
            />

            {workProcessSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.number}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  {/* Icon Circle */}
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#130D10',
                      border: '1px solid rgba(230, 0, 0, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-red-bright)',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.6)'
                    }}
                  >
                    <IconComp size={18} />
                  </div>

                  {/* Details */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          color: 'var(--accent-red-bright)'
                        }}
                      >
                        {step.number}
                      </span>
                      <h4
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          letterSpacing: '0.06em'
                        }}
                      >
                        {step.title}
                      </h4>
                    </div>
                    <p
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--text-body)',
                        lineHeight: 1.45
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* COLUMN 3: FEATURED CRIMSON QUOTE CARD */}
        <div
          className="crimson-quote-card"
          style={{
            borderRadius: 'var(--radius-md)',
            padding: '40px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '32px'
          }}
        >
          {/* Top Quote Mark */}
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '5rem',
              color: 'rgba(255, 255, 255, 0.35)',
              lineHeight: 0.8,
              userSelect: 'none'
            }}
          >
            “
          </div>

          {/* Quote Body */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.2rem',
              fontWeight: 500,
              color: '#FFFFFF',
              lineHeight: 1.5,
              letterSpacing: '-0.01em'
            }}
          >
            Good software engineering is not just training algorithms, but building fast, clean tools that solve real human problems.
          </p>

          {/* Signature & Subtext */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              className="script-accent"
              style={{
                fontSize: '2.5rem',
                color: '#FFFFFF',
                opacity: 0.95
              }}
            >
              Ayush
            </div>

            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                paddingTop: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Sparkles size={14} color="#FFFFFF" />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.85)'
                }}
              >
                LET'S BUILD SOMETHING INNOVATIVE TOGETHER.
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skill-pill:hover {
          background: rgba(230, 0, 0, 0.2) !important;
          border-color: var(--accent-red-bright) !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
