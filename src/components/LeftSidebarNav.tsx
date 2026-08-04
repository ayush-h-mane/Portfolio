import React, { useState } from 'react';
import { Home, User, Zap, Briefcase, Clock, Wrench, Award, MessageSquare, Download, Terminal, Moon } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface LeftSidebarNavProps {
  onOpenTerminal?: () => void;
}

export const LeftSidebarNav: React.FC<LeftSidebarNavProps> = ({ onOpenTerminal }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Zap },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Experience', href: '#experience', icon: Clock },
    { name: 'Services', href: '#services', icon: Wrench },
    { name: 'Achievements', href: '#achievements', icon: Award },
    { name: 'Contact', href: '#contact', icon: MessageSquare }
  ];

  return (
    <aside
      className="left-sidebar-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: '260px',
        background: 'var(--bg-sidebar)',
        borderRight: '1px solid rgba(220, 38, 38, 0.18)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.75rem 1.25rem',
        overflowY: 'auto'
      }}
    >
      {/* Top Brand Logo - Identical to Header */}
      <div>
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'var(--text-white)',
            marginBottom: '2rem'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #991b1b 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1.05rem',
              letterSpacing: '-0.02em',
              boxShadow: '0 4px 14px rgba(220, 38, 38, 0.45)'
            }}
          >
            {PERSONAL_INFO.logoEmblem}
          </div>
          <div>
            <div
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                letterSpacing: '0.03em',
                color: '#ffffff',
                lineHeight: 1.1
              }}
            >
              {PERSONAL_INFO.name}
            </div>
            <span
              style={{
                fontSize: '0.68rem',
                color: '#f87171',
                fontWeight: 600,
                letterSpacing: '0.04em'
              }}
            >
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Vertical Navigation Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.65rem 1rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  background: isActive ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.22) 0%, rgba(153, 27, 27, 0.2) 100%)' : 'transparent',
                  border: isActive ? '1px solid rgba(239, 68, 68, 0.35)' : '1px solid transparent',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <IconComponent size={17} color={isActive ? '#ef4444' : '#94a3b8'} />
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions & Socials */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
        {/* CLI Button */}
        {onOpenTerminal && (
          <button
            onClick={onOpenTerminal}
            className="btn-outline-dark"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '0.55rem 1rem',
              fontSize: '0.82rem',
              borderRadius: '8px',
              color: '#f87171',
              borderColor: 'rgba(239, 68, 68, 0.3)'
            }}
          >
            <Terminal size={14} />
            <span>Interactive CLI</span>
          </button>
        )}

        {/* Download CV */}
        <a
          href={PERSONAL_INFO.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-dark"
          style={{
            width: '100%',
            justifyContent: 'center',
            padding: '0.6rem 1rem',
            fontSize: '0.84rem',
            borderRadius: '8px'
          }}
        >
          <span>Download CV</span>
          <Download size={14} />
        </a>

        {/* Theme Toggle & Social Links */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {[
              { icon: GithubIcon, href: PERSONAL_INFO.github, label: 'GitHub' },
              { icon: LinkedinIcon, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
              { icon: TwitterIcon, href: PERSONAL_INFO.twitter, label: 'Twitter' }
            ].map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'var(--text-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                  e.currentTarget.style.color = '#ef4444';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'var(--text-white)';
                }}
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>

          <button
            title="Dark Theme Active"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#94a3b8',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <Moon size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
};
