import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <div className="section-container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div
        style={{
          position: 'relative',
          borderRadius: '1.25rem',
          background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #6366f1 100%)',
          padding: '2.5rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)',
          overflow: 'hidden'
        }}
      >
        {/* Ambient Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        {/* Left Side Content & Icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2563eb',
              flexShrink: 0,
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            <Mail size={26} />
          </div>

          <div>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.2
              }}
            >
              Let's work together
            </h3>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#e0e7ff',
                marginTop: '0.3rem',
                fontWeight: 500
              }}
            >
              I'm currently open to new opportunities and exciting projects.
            </p>
          </div>
        </div>

        {/* Right CTA Button */}
        <a
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '0.92rem',
            padding: '0.75rem 1.6rem',
            borderRadius: '9999px',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.color = '#2563eb';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span>Contact Me</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};
