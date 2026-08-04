import React, { useState } from 'react';
import { Download, Moon, Sun, Menu, X, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenTerminal?: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTerminal, theme = 'dark', onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: theme === 'dark' ? 'rgba(10, 7, 9, 0.92)' : 'rgba(250, 245, 246, 0.92)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(220, 38, 38, 0.18)',
        padding: '0.85rem 2rem',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left Crimson AH Emblem Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'var(--text-white)'
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
                color: 'var(--text-white)',
                lineHeight: 1.1
              }}
            >
              {PERSONAL_INFO.name}
            </div>
            <span
              style={{
                fontSize: '0.68rem',
                color: '#ef4444',
                fontWeight: 600,
                letterSpacing: '0.04em'
              }}
            >
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                style={{
                  position: 'relative',
                  color: isActive ? 'var(--text-white)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 500,
                  transition: 'color 0.2s ease',
                  padding: '0.4rem 0'
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '0',
                      right: '0',
                      height: '2px',
                      background: 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)',
                      borderRadius: '2px',
                      boxShadow: '0 0 10px #ef4444'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {/* CLI button if handler provided */}
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              title="Open Interactive CLI Terminal"
              style={{
                background: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#ef4444',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Terminal size={16} />
            </button>
          )}

          {/* Download CV Button */}
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark"
            style={{
              padding: '0.48rem 1.15rem',
              fontSize: '0.84rem',
              borderRadius: '8px',
              borderColor: 'rgba(220, 38, 38, 0.3)',
              gap: '0.4rem'
            }}
          >
            <span>Download CV</span>
            <Download size={14} />
          </a>

          {/* Theme Toggle (Sun/Moon Icon) */}
          <button
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              background: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(220, 38, 38, 0.12)',
              border: '1px solid rgba(220, 38, 38, 0.3)',
              color: theme === 'dark' ? '#f87171' : '#dc2626',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {theme === 'dark' ? <Sun size={17} color="#f87171" /> : <Moon size={17} color="#dc2626" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-white)',
              cursor: 'pointer',
              display: 'none',
              padding: '0.4rem'
            }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: theme === 'dark' ? 'rgba(10, 7, 9, 0.98)' : 'rgba(250, 245, 246, 0.98)',
            borderBottom: '1px solid rgba(220, 38, 38, 0.25)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name);
                setMobileMenuOpen(false);
              }}
              style={{
                color: 'var(--text-white)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 868px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};
