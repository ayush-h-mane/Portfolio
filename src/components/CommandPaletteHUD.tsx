import React, { useState, useEffect, useRef } from 'react';
import { Search, Terminal, Download, Volume2, Cpu, Code, Briefcase, Mail, Sparkles, X, Activity, ArrowRight } from 'lucide-react';
import { PROJECTS, EXPERIENCE_ITEMS, SKILL_CATEGORIES_PROGRESS, PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/soundFx';

interface CommandItem {
  id: string;
  category: 'Section' | 'Project' | 'Skill' | 'Action' | 'Experience';
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
}

interface CommandPaletteHUDProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal?: () => void;
}

export const CommandPaletteHUD: React.FC<CommandPaletteHUDProps> = ({ isOpen, onClose, onOpenTerminal }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      soundFx.playSwoosh();
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Build command search registry
  const allCommands: CommandItem[] = [
    // Actions
    {
      id: 'act-cv',
      category: 'Action',
      title: 'Download Curriculum Vitae (CV)',
      subtitle: 'Open Ayush\'s latest CV PDF',
      icon: <Download size={16} color="#ef4444" />,
      action: () => {
        window.open(PERSONAL_INFO.cvUrl, '_blank');
        onClose();
      }
    },
    {
      id: 'act-terminal',
      category: 'Action',
      title: 'Launch Interactive CLI Terminal',
      subtitle: 'Execute shell commands in custom portfolio CLI',
      icon: <Terminal size={16} color="#ef4444" />,
      action: () => {
        onClose();
        if (onOpenTerminal) onOpenTerminal();
      }
    },
    {
      id: 'act-sound',
      category: 'Action',
      title: 'Toggle Sci-Fi Synthesizer Sound FX',
      subtitle: 'Enable or mute interactive sound effects',
      icon: <Volume2 size={16} color="#ef4444" />,
      action: () => {
        soundFx.toggleSound();
        onClose();
      }
    },

    // Navigation Sections
    {
      id: 'sec-home',
      category: 'Section',
      title: 'Jump to Hero Overview',
      subtitle: 'Section #home',
      icon: <Sparkles size={16} color="#3b82f6" />,
      action: () => {
        window.location.hash = '#home';
        onClose();
      }
    },
    {
      id: 'sec-skills',
      category: 'Section',
      title: 'Jump to 3D Neural Skills',
      subtitle: 'Section #skills',
      icon: <Cpu size={16} color="#a855f7" />,
      action: () => {
        window.location.hash = '#skills';
        onClose();
      }
    },
    {
      id: 'sec-blueprint',
      category: 'Section',
      title: 'Jump to System Topology & RAG Blueprint',
      subtitle: 'Section #blueprint',
      icon: <Activity size={16} color="#10b981" />,
      action: () => {
        window.location.hash = '#blueprint';
        onClose();
      }
    },
    {
      id: 'sec-projects',
      category: 'Section',
      title: 'Jump to Featured Projects',
      subtitle: 'Section #projects',
      icon: <Code size={16} color="#f59e0b" />,
      action: () => {
        window.location.hash = '#projects';
        onClose();
      }
    },
    {
      id: 'sec-experience',
      category: 'Section',
      title: 'Jump to Experience & Time Machine',
      subtitle: 'Section #experience',
      icon: <Briefcase size={16} color="#ec4899" />,
      action: () => {
        window.location.hash = '#experience';
        onClose();
      }
    },
    {
      id: 'sec-contact',
      category: 'Section',
      title: 'Jump to Contact & Inquiries',
      subtitle: 'Section #contact',
      icon: <Mail size={16} color="#ef4444" />,
      action: () => {
        window.location.hash = '#contact';
        onClose();
      }
    },

    // Projects
    ...PROJECTS.map((proj) => ({
      id: `proj-${proj.id}`,
      category: 'Project' as const,
      title: proj.title,
      subtitle: proj.description,
      icon: <Code size={16} color="#ef4444" />,
      action: () => {
        window.location.hash = '#projects';
        onClose();
      }
    })),

    // Experience
    ...EXPERIENCE_ITEMS.map((exp) => ({
      id: `exp-${exp.id}`,
      category: 'Experience' as const,
      title: `${exp.role} @ ${exp.company}`,
      subtitle: exp.period,
      icon: <Briefcase size={16} color="#a855f7" />,
      action: () => {
        window.location.hash = '#experience';
        onClose();
      }
    })),

    // Skills
    ...SKILL_CATEGORIES_PROGRESS.flatMap((cat) =>
      cat.skills.map((skill) => ({
        id: `skill-${skill.name}`,
        category: 'Skill' as const,
        title: skill.name,
        subtitle: `${cat.title} • ${skill.percentage}% Proficiency`,
        icon: <Cpu size={16} color="#3b82f6" />,
        action: () => {
          window.location.hash = '#skills';
          onClose();
        }
      }))
    )
  ];

  // Filter commands by query
  const filtered = allCommands.filter((cmd) => {
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      (cmd.subtitle && cmd.subtitle.toLowerCase().includes(q)) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      soundFx.playHover();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      soundFx.playHover();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      e.preventDefault();
      soundFx.playClick();
      filtered[selectedIndex].action();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        background: 'rgba(5, 3, 7, 0.85)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '12vh',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        animation: 'fadeIn 0.2s ease'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '680px',
          background: 'rgba(15, 9, 16, 0.96)',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          borderRadius: '16px',
          boxShadow: '0 0 50px rgba(239, 68, 68, 0.25), 0 20px 40px rgba(0,0,0,0.8)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Top Search Input Box */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            padding: '1rem 1.25rem',
            borderBottom: '1px solid rgba(239, 68, 68, 0.2)',
            background: 'rgba(255, 255, 255, 0.02)'
          }}
        >
          <Search size={20} color="#ef4444" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, project, skill, or section (e.g. RAG, Python, CV, Terminal)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 500
            }}
          />
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: 'none',
              color: 'var(--text-muted)',
              borderRadius: '6px',
              padding: '0.25rem 0.5rem',
              fontSize: '0.75rem',
              cursor: 'pointer'
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* System Telemetry Banner */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.45rem 1.25rem',
            background: 'rgba(239, 68, 68, 0.08)',
            borderBottom: '1px solid rgba(239, 68, 68, 0.15)',
            fontSize: '0.72rem',
            color: '#f87171',
            fontWeight: 600,
            letterSpacing: '0.04em'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
            <span>HUD SYSTEM: ONLINE</span>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', color: 'var(--text-muted)' }}>
            <span>3 AI PROJECTS</span>
            <span>13 CERTIFICATES</span>
            <span>7.0 CGPA</span>
          </div>
        </div>

        {/* Results List */}
        <div
          style={{
            maxHeight: '380px',
            overflowY: 'auto',
            padding: '0.5rem'
          }}
        >
          {filtered.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              No HUD commands matching "{query}"
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={() => {
                    soundFx.playClick();
                    cmd.action();
                  }}
                  onMouseEnter={() => {
                    soundFx.playHover();
                    setSelectedIndex(idx);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    marginBottom: '2px',
                    background: isSelected ? 'rgba(239, 68, 68, 0.18)' : 'transparent',
                    border: `1px solid ${isSelected ? 'rgba(239, 68, 68, 0.4)' : 'transparent'}`,
                    cursor: 'pointer',
                    transition: 'background 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {cmd.icon}
                    </div>
                    <div>
                      <div style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: 600 }}>{cmd.title}</div>
                      {cmd.subtitle && (
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '1px' }}>
                          {cmd.subtitle}
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        background: 'rgba(255,255,255,0.06)',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase'
                      }}
                    >
                      {cmd.category}
                    </span>
                    {isSelected && <ArrowRight size={14} color="#ef4444" />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Legend */}
        <div
          style={{
            padding: '0.6rem 1.25rem',
            background: 'rgba(0,0,0,0.5)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.74rem',
            color: 'var(--text-muted)'
          }}
        >
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span><kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 5px', borderRadius: '4px' }}>↑↓</kbd> Navigate</span>
            <span><kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 5px', borderRadius: '4px' }}>↵</kbd> Select</span>
            <span><kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 5px', borderRadius: '4px' }}>ESC</kbd> Close</span>
          </div>
          <span>AYUSH MANE HUD v2.5</span>
        </div>
      </div>
    </div>
  );
};
