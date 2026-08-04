import React from 'react';
import { Zap } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'FastAPI Microservices',
    'VTON 3D Pose Warping',
    'React 19 & TypeScript',
    'DeBERTa NLP Pipeline',
    'Acharya Institute of Tech',
    'GlowLogics AI Intern',
    '7.0 Academic CGPA',
    'OpenCV Keypoint Mapping',
    'Docker Containerization',
    'Google & Microsoft Certified'
  ];

  return (
    <div
      style={{
        overflow: 'hidden',
        background: 'rgba(11, 19, 41, 0.6)',
        borderTop: '1px solid var(--bg-glass-border)',
        borderBottom: '1px solid var(--bg-glass-border)',
        padding: '16px 0',
        margin: '0 0 20px 0'
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '32px',
          whiteSpace: 'nowrap',
          animation: 'scroll-marquee 25s linear infinite'
        }}
      >
        {items.concat(items).map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--text-body)',
              fontFamily: 'var(--font-code)',
              fontSize: '0.85rem'
            }}
          >
            <Zap size={14} color="var(--accent-purple)" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
