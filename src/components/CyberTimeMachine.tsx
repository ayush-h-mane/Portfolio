import React, { useState } from 'react';
import { soundFx } from '../utils/soundFx';
import { Clock, Zap, Award, Code, CheckCircle } from 'lucide-react';

interface TimeEra {
  year: number;
  title: string;
  role: string;
  location: string;
  description: string;
  achievements: string[];
  stats: {
    projects: number;
    skills: number;
    codeLines: string;
    awards: number;
  };
}

export const CyberTimeMachine: React.FC = () => {
  const eras: TimeEra[] = [
    {
      year: 2021,
      title: 'Secondary Schooling Excellence (SSLC)',
      role: 'SSLC Graduate (88.32%)',
      location: "St. Dominic's High School",
      description: 'Graduated 10th grade with distinction, mastering foundational Mathematics, Science, and English.',
      achievements: ['88.32% SSLC Distinction', 'Mathematics & Science Excellence', 'Top Academic Record'],
      stats: { projects: 1, skills: 4, codeLines: '5K+', awards: 1 }
    },
    {
      year: 2023,
      title: 'Pre-University Science Stream (PUC)',
      role: 'PUC PCMB Graduate (82.32%)',
      location: 'S.A.V Composite PU College',
      description: 'Completed Senior Secondary Education in Science (PCMB) with analytical focus and distinction.',
      achievements: ['82.32% PCMB Science Distinction', 'Enrolled in B.E. Artificial Intelligence & Machine Learning', 'Joined Acharya Institute of Technology, Bengaluru'],
      stats: { projects: 2, skills: 8, codeLines: '15K+', awards: 2 }
    },
    {
      year: 2024,
      title: 'Theatre Arts & Leadership Distinction',
      role: 'Head of Content & Theatre Champion',
      location: 'Utkarsh-Abhinaya & Acharya Kannada Vedike',
      description: 'Secured National & State Theatre awards certified by NSD and led Acharya Kannada Vedike content strategy.',
      achievements: ['Certified by National School of Drama (NSD)', 'State & National Level 1st Rank Theatre Winner', 'Head of Promotions & Marketing Strategy'],
      stats: { projects: 2, skills: 12, codeLines: '30K+', awards: 5 }
    },
    {
      year: 2025,
      title: 'AI Internship & Microservices Engineering',
      role: 'AI Developer Intern',
      location: 'GlowLogics Solutions Pvt. Ltd.',
      description: 'Engineered Python AI/ML models, OpenCV virtual fitting algorithms, and RESTful API integrations.',
      achievements: ['Engineered VTON Virtual Try-On Engine', 'Trained DeBERTa Multilingual Toxicity Classifiers', 'Built ML Cybersecurity Suspicious URL Detectors'],
      stats: { projects: 3, skills: 15, codeLines: '60K+', awards: 9 }
    },
    {
      year: 2026,
      title: 'B.E. AI & ML Degree & Production AI Systems',
      role: 'Full-Stack AI Software Engineer',
      location: 'Acharya Institute of Technology, Bengaluru',
      description: 'Specializing in B.E. AI & ML at Acharya Institute of Technology (7.0 CGPA) with 13+ verified professional certifications.',
      achievements: ['Maintained 7.0 CGPA B.E. AI & ML Distinction', 'Earned 13+ Verified Google, IBM, & Microsoft Certificates', '3 Real Production Repos: VTON, Toxicity, & Cyber Threat ML'],
      stats: { projects: 3, skills: 15, codeLines: '100K+', awards: 13 }
    }
  ];

  const [activeEraIndex, setActiveEraIndex] = useState<number>(4); // Default 2026 current era
  const currentEra = eras[activeEraIndex];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idx = parseInt(e.target.value, 10);
    if (idx !== activeEraIndex) {
      soundFx.playGlitch();
      setActiveEraIndex(idx);
    }
  };

  return (
    <div
      className="glass-card pop-card"
      style={{
        padding: '1.75rem',
        borderRadius: '16px',
        background: 'rgba(14, 8, 15, 0.9)',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Clock color="#ef4444" size={20} />
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '0.04em' }}>
            CYBERPUNK CAREER TIME MACHINE
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(239, 68, 68, 0.12)', padding: '0.35rem 0.85rem', borderRadius: '20px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
          <span style={{ fontSize: '0.72rem', color: '#f87171', fontWeight: 600 }}>ACTIVE ERA:</span>
          <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff' }}>{currentEra.year}</span>
        </div>
      </div>

      {/* Interactive Year Scrub Slider */}
      <div style={{ marginBottom: '2rem', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
          {eras.map((era, idx) => (
            <button
              key={era.year}
              onClick={() => {
                soundFx.playClick();
                setActiveEraIndex(idx);
              }}
              style={{
                background: idx === activeEraIndex ? '#ef4444' : 'transparent',
                color: idx === activeEraIndex ? '#ffffff' : 'var(--text-muted)',
                border: `1px solid ${idx === activeEraIndex ? '#ef4444' : 'rgba(255,255,255,0.15)'}`,
                borderRadius: '6px',
                padding: '0.25rem 0.6rem',
                fontSize: '0.76rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: idx === activeEraIndex ? '0 0 10px rgba(239, 68, 68, 0.5)' : 'none'
              }}
            >
              {era.year}
            </button>
          ))}
        </div>

        <input
          type="range"
          min={0}
          max={eras.length - 1}
          value={activeEraIndex}
          onChange={handleSliderChange}
          style={{
            width: '100%',
            accentColor: '#ef4444',
            cursor: 'pointer',
            height: '6px',
            borderRadius: '3px'
          }}
        />
      </div>

      {/* Dynamic Animated Stats Ribbon for Selected Era */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '1rem',
          marginBottom: '1.75rem'
        }}
      >
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(239,68,68,0.2)', padding: '0.85rem', borderRadius: '10px', textAlign: 'center' }}>
          <Code color="#ef4444" size={18} style={{ margin: '0 auto 0.25rem auto', display: 'block' }} />
          <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)' }}>Projects Built</span>
          <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>{currentEra.stats.projects}+</span>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(168,85,247,0.2)', padding: '0.85rem', borderRadius: '10px', textAlign: 'center' }}>
          <Zap color="#a855f7" size={18} style={{ margin: '0 auto 0.25rem auto', display: 'block' }} />
          <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)' }}>Tech Stack Mastery</span>
          <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>{currentEra.stats.skills} Techs</span>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(59,130,246,0.2)', padding: '0.85rem', borderRadius: '10px', textAlign: 'center' }}>
          <Award color="#3b82f6" size={18} style={{ margin: '0 auto 0.25rem auto', display: 'block' }} />
          <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)' }}>Lines of Code</span>
          <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>{currentEra.stats.codeLines}</span>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(16,185,129,0.2)', padding: '0.85rem', borderRadius: '10px', textAlign: 'center' }}>
          <CheckCircle color="#10b981" size={18} style={{ margin: '0 auto 0.25rem auto', display: 'block' }} />
          <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)' }}>Milestones</span>
          <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>{currentEra.stats.awards} Major</span>
        </div>
      </div>

      {/* Detailed Era Spotlight Card */}
      <div
        style={{
          background: 'rgba(5, 3, 7, 0.75)',
          border: '1px solid rgba(239, 68, 68, 0.25)',
          borderRadius: '12px',
          padding: '1.25rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
            {currentEra.title}
          </h4>
          <span style={{ fontSize: '0.78rem', color: '#ef4444', fontWeight: 700 }}>
            {currentEra.role} • {currentEra.location}
          </span>
        </div>

        <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: '0 0 1rem 0' }}>
          {currentEra.description}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {currentEra.achievements.map((ach, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)' }}>
              <span style={{ color: '#ef4444' }}>⚡</span>
              <span>{ach}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
