import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2, School } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-container" style={{ position: 'relative' }}>
      {/* Header */}
      <ScrollReveal direction="down">
        <div className="section-header">
          <span className="bullet-dot" />
          <h2>EDUCATION & SCHOOLING HISTORY</h2>
        </div>
      </ScrollReveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {/* Main BE Degree Card */}
        <ScrollReveal direction="right" delay={100}>
          <div
            className="glass-card pop-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top Badge Accent */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '99px',
                  background: 'rgba(220, 38, 38, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  color: '#ef4444',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em'
                }}
              >
                <GraduationCap size={15} />
                BACHELOR OF ENGINEERING (UNDERGRADUATE)
              </span>

              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={14} color="#ef4444" />
                {PERSONAL_INFO.education.period}
              </span>
            </div>

            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-white)', lineHeight: 1.25 }}>
                {PERSONAL_INFO.education.degree}
              </h3>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ef4444', marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={15} />
                {PERSONAL_INFO.education.institution}
              </div>
            </div>

            {/* CGPA Box */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.85rem 1.25rem',
                borderRadius: '12px',
                background: 'rgba(220, 38, 38, 0.08)',
                border: '1px solid rgba(220, 38, 38, 0.2)',
                width: 'fit-content'
              }}
            >
              <Award size={22} color="#ef4444" />
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  ACADEMIC PERFORMANCE
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--text-white)' }}>
                  CGPA: <span style={{ color: '#ef4444' }}>{PERSONAL_INFO.education.cgpa}</span>
                </div>
              </div>
            </div>

            {/* Core Specialization Focus Areas */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.5rem' }}>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-white)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <BookOpen size={16} color="#ef4444" />
                Core Academic Specializations:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem' }}>
                {[
                  'Artificial Intelligence & ML Algorithms',
                  'Computer Vision & MediaPipe Pose Engine',
                  'NLP & DeBERTa Transformer Models',
                  'Data Structures & Algorithm Design',
                  'SQL & Database Systems (MySQL, MongoDB)',
                  'Full-Stack Web Engineering (React, FastAPI)'
                ].map((area, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <CheckCircle2 size={14} color="#ef4444" style={{ flexShrink: 0 }} />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Pre-University & Schooling History Column */}
        <ScrollReveal direction="left" delay={150}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-white)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <School size={20} color="#ef4444" />
              <span>Schooling & Pre-University Credentials</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {PERSONAL_INFO.education.history.slice(1).map((item, idx) => (
                <ScrollReveal key={idx} delay={200 + idx * 100} direction="up">
                  <div
                    className="glass-card pop-card"
                    style={{
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#ef4444',
                          padding: '2px 10px',
                          borderRadius: '99px',
                          background: 'rgba(220, 38, 38, 0.1)',
                          border: '1px solid rgba(220, 38, 38, 0.2)',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {item.type === 'puc' ? 'SENIOR SECONDARY (PUC)' : 'SECONDARY SCHOOL (SSLC)'}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        {item.period}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-white)' }}>
                      {item.degree}
                    </h4>

                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ef4444' }}>
                      {item.institution} — <span style={{ color: 'var(--text-white)', fontWeight: 800 }}>Grade: {item.grade}</span>
                    </div>

                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {item.details}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
