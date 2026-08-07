import React, { useState } from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { GithubIcon } from './Icons';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ScrollReveal } from './ScrollReveal';
import { HoloCard } from './HoloCard';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'AI / ML' | 'Full Stack' | 'NLP'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI / ML', 'Full Stack', 'NLP'] as const;

  const filteredProjects = FEATURED_PROJECTS.filter((project: Project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="section-container" style={{ position: 'relative' }}>
      {/* Header Row */}
      <ScrollReveal direction="down">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="bullet-dot" />
            <h2>FEATURED PROJECTS</h2>
          </div>

          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#ef4444',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 700,
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#ef4444')}
          >
            <span>View All Projects</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </ScrollReveal>

      {/* Filter Tabs */}
      <ScrollReveal direction="up" delay={100}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.45rem 1.15rem',
                  borderRadius: '8px',
                  border: isActive ? 'none' : '1px solid var(--border-color)',
                  background: isActive
                    ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #991b1b 100%)'
                    : 'var(--bg-card)',
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  fontWeight: isActive ? 700 : 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s ease',
                  boxShadow: isActive ? '0 4px 15px rgba(220, 38, 38, 0.45)' : 'none'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Real Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}
      >
        {filteredProjects.map((project, idx) => (
          <ScrollReveal key={project.id} delay={idx * 150} direction="up">
            <HoloCard style={{ height: '100%', borderRadius: '1.25rem' }}>
              <div
                className="glass-card pop-card"
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: 'pointer',
                  borderRadius: '1.25rem'
                }}
                onClick={() => setSelectedProject(project)}
              >
              {/* Card Banner Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '210px',
                  overflow: 'hidden',
                  background: '#12080a'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              {/* Content Details */}
              <div
                style={{
                  padding: '1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  gap: '0.85rem'
                }}
              >
                {/* Title & Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem'
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: 'var(--text-white)'
                    }}
                  >
                    {project.title}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      background: 'rgba(220, 38, 38, 0.15)',
                      color: '#ef4444',
                      fontWeight: 700
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    flexGrow: 1
                  }}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '5px',
                        background: 'rgba(220, 38, 38, 0.08)',
                        border: '1px solid rgba(220, 38, 38, 0.15)',
                        color: 'var(--text-white)',
                        fontWeight: 600
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '0.5rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-color)'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: '#ef4444',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: 700
                    }}
                  >
                    <Info size={14} />
                    <span>Architecture Details</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href={project.githubUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    style={{
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    <GithubIcon size={17} />
                  </a>
                </div>
              </div>
            </div>
          </HoloCard>
        </ScrollReveal>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
