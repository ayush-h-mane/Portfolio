import React from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, Layers, Cpu } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';
import { ProjectSandbox } from './ProjectSandbox';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'rgba(8, 6, 7, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '1.25rem',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.35)',
          position: 'relative',
          padding: '0'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #991b1b 100%)',
            padding: '36px 32px 28px 32px',
            borderTopLeftRadius: '1.25rem',
            borderTopRightRadius: '1.25rem',
            position: 'relative'
          }}
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(0, 0, 0, 0.35)',
              border: 'none',
              color: '#ffffff',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <X size={20} />
          </button>

          {project.featured && (
            <span
              style={{
                background: 'rgba(0,0,0,0.35)',
                color: '#ffffff',
                padding: '4px 12px',
                borderRadius: '99px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '12px'
              }}
            >
              <Sparkles size={12} color="#fecaca" /> FEATURED ARCHITECTURE
            </span>
          )}

          <h2 style={{ fontSize: '2.2rem', color: '#ffffff', marginBottom: '6px', fontWeight: 800 }}>{project.title}</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.05rem', fontWeight: 500 }}>
            {project.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '32px' }}>
          {/* Tech Stack Tags */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Technologies & Frameworks
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    background: 'rgba(220, 38, 38, 0.12)',
                    border: '1px solid rgba(220, 38, 38, 0.25)',
                    color: '#ef4444',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Long Description */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '10px', fontWeight: 700 }}>Project Overview</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.7 }}>
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Architectural Highlights if available */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                <Cpu size={18} color="#ef4444" />
                Key Technical Features
              </h4>
              <div style={{ display: 'grid', gap: '10px' }}>
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      color: 'var(--text-muted)',
                      fontSize: '0.925rem'
                    }}
                  >
                    <CheckCircle2 size={18} color="#ef4444" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* System Pipeline */}
          {project.architectureDetails && (
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                <Layers size={18} color="#ef4444" />
                System Pipeline & Architecture
              </h4>
              <div
                style={{
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.825rem',
                  color: 'var(--text-white)',
                  padding: '16px',
                  background: 'var(--bg-card)',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)'
                }}
              >
                {project.architectureDetails}
              </div>
            </div>
          )}

          {/* Live Interactive Project Sandbox */}
          <ProjectSandbox projectTitle={project.title} />

          {/* Footer Action Links */}
          <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid var(--border-color)', paddingTop: '24px', marginTop: '24px' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-red"
                style={{ fontSize: '0.9rem' }}
              >
                <GithubIcon size={16} color="#ffffff" />
                <span>View Source Repository</span>
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark"
                style={{ fontSize: '0.9rem' }}
              >
                <ExternalLink size={16} />
                <span>Launch Live Application</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
