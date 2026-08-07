import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { soundFx } from '../utils/soundFx';
import { Target, CheckCircle2, Download, Sparkles, Cpu, Code, Layers, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface RoleProfile {
  id: string;
  title: string;
  matchScore: number;
  icon: React.ReactNode;
  highlights: string[];
  recommendedProjects: string[];
  keySkills: string[];
  tailoredPitch: string;
}

export const TailoredResumeBuilder: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>('Innovative Tech Team');
  const [selectedRole, setSelectedRole] = useState<string>('role-ai');

  const profiles: Record<string, RoleProfile> = {
    'role-ai': {
      id: 'role-ai',
      title: 'AI / GenAI & RAG Engineer',
      matchScore: 98,
      icon: <Sparkles color="#ef4444" size={20} />,
      highlights: [
        'Built production Gemini 2.5 Flash RAG vector retrieval pipelines with < 45ms latency.',
        'Engineered Virtual Try-On (VTON) neural networks using PyTorch & OpenCV.',
        'Deep expertise in Prompt Engineering, Embedding Search, and Multi-modal LLM integrations.'
      ],
      recommendedProjects: ['VTON Virtual Try-On Engine', 'Toxicity Analysis Pipeline', 'Mane AI Chatbot'],
      keySkills: ['Gemini API', 'PyTorch', 'Vector RAG', 'Python', 'OpenCV', 'TensorFlow'],
      tailoredPitch: `Ayush Mane possesses strong hands-on expertise in building production GenAI applications, vector similarity search systems, and deep learning models tailored for high-growth AI teams.`
    },
    'role-fullstack': {
      id: 'role-fullstack',
      title: 'Full-Stack Software Engineer',
      matchScore: 96,
      icon: <Code color="#3b82f6" size={20} />,
      highlights: [
        'Architected end-to-end web monorepos using React 19, TypeScript, Node.js, and Vite.',
        'Designed modular RESTful APIs with express validation and clean state management.',
        'Delivered 60+ projects featuring dark mode glassmorphism, responsive UX, and optimized bundle sizes.'
      ],
      recommendedProjects: ['Interactive Portfolio Engine', 'Modern Full-Stack Dashboard', 'CLI Developer Toolkit'],
      keySkills: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Tailwind/CSS3', 'REST APIs'],
      tailoredPitch: `Ayush Mane brings comprehensive end-to-end full-stack capabilities, bridging frontend user experiences with performant backend services.`
    },
    'role-systems': {
      id: 'role-systems',
      title: 'Systems & Backend Engineer',
      matchScore: 94,
      icon: <Cpu color="#a855f7" size={20} />,
      highlights: [
        'Strong algorithmic foundation in Python, C++, Data Structures, & Machine Learning Classifiers.',
        'Engineered real-world AI microservices & FastAPI data pipelines during GlowLogics internship.',
        'Maintained 7.0 CGPA distinction in B.E. Artificial Intelligence & Machine Learning at Acharya Institute of Technology.'
      ],
      recommendedProjects: ['ML-Enhanced Suspicious URL Detection', 'In-Memory Cosine RAG Engine', 'VTON Virtual Try-On Engine'],
      keySkills: ['Python', 'FastAPI', 'B.E. AI & ML', 'Scikit-Learn', 'Git/CI', 'REST APIs'],
      tailoredPitch: `Ayush Mane demonstrates disciplined algorithmic reasoning, clean system design practices, and backend optimization skills.`
    }
  };

  const activeProfile = profiles[selectedRole] || profiles['role-ai'];

  return (
    <section id="tailored-resume" className="section-container" style={{ position: 'relative' }}>
      <ScrollReveal direction="up">
        {/* Section Header */}
        <div className="section-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="bullet-dot" />
            <h2>RECRUITER MATCH & TAILORED PROFILE ENGINE</h2>
          </div>

          <span style={{ fontSize: '0.76rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <UserCheck size={15} /> REAL-TIME FIT ANALYZER
          </span>
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
          {/* Top Inputs: Target Role & Target Company */}
          <div className="resume-inputs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                1. SELECT TARGET ENGINEERING ROLE
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {Object.values(profiles).map((prof) => (
                  <button
                    key={prof.id}
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedRole(prof.id);
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    style={{
                      background: selectedRole === prof.id ? 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${selectedRole === prof.id ? '#ef4444' : 'rgba(255,255,255,0.1)'}`,
                      color: selectedRole === prof.id ? '#ffffff' : 'var(--text-muted)',
                      borderRadius: '8px',
                      padding: '0.45rem 0.85rem',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {prof.icon}
                    <span>{prof.title.split('&')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                2. ENTER YOUR COMPANY / TEAM NAME
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. OpenAI, Google, Scaler, Meta..."
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(239,68,68,0.3)',
                  borderRadius: '8px',
                  padding: '0.55rem 0.85rem',
                  color: '#ffffff',
                  fontSize: '0.86rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Results Summary Box */}
          <div
            className="resume-results-grid"
            style={{
              background: 'rgba(5, 3, 7, 0.85)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '1.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Tailored Summary */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  MATCH SUMMARY FOR {companyName.toUpperCase()}
                </span>
                <span
                  style={{
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid #10b981',
                    color: '#10b981',
                    padding: '2px 10px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 900
                  }}
                >
                  {activeProfile.matchScore}% MATCH
                </span>
              </div>

              <p style={{ fontSize: '0.9rem', color: '#ffffff', lineHeight: 1.6, margin: '0 0 1rem 0', fontWeight: 500 }}>
                {activeProfile.tailoredPitch}
              </p>

              {/* Highlights Bullet List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.25rem' }}>
                {activeProfile.highlights.map((hl, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <CheckCircle2 size={15} color="#ef4444" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="btn-primary-red"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.25rem',
                  fontSize: '0.82rem',
                  borderRadius: '8px'
                }}
              >
                <Download size={15} />
                <span>DOWNLOAD {companyName.toUpperCase()} TAILORED CV</span>
              </a>
            </div>

            {/* Right Column: Key Skills & Recommended Projects */}
            <div
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '10px',
                padding: '1.15rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.15rem'
              }}
            >
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  ALIGNED TECH STACK
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {activeProfile.keySkills.map((sk) => (
                    <span
                      key={sk}
                      style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.25)',
                        color: '#ef4444',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '0.74rem',
                        fontWeight: 600
                      }}
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  RECOMMENDED FEATURED REPOS
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {activeProfile.recommendedProjects.map((rp) => (
                    <div
                      key={rp}
                      style={{
                        fontSize: '0.8rem',
                        color: '#ffffff',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <Target size={13} color="#3b82f6" />
                      <span>{rp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
