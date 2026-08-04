import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ServicesSection } from './components/ServicesSection';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { AchievementsSection } from './components/AchievementsSection';
import { SkillsAndJourney } from './components/SkillsAndJourney';
import { TechnologiesStrip } from './components/TechnologiesStrip';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { AIChatBot } from './components/AIChatBot';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-dark)', color: 'var(--text-primary)', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
      {/* Top Navbar Header with Theme Switcher */}
      <Header
        onOpenTerminal={() => setTerminalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Full-Width Content Container */}
      <div className="main-content-wrapper" style={{ marginLeft: 0, width: '100%' }}>
        <main style={{ width: '100%', maxWidth: '1380px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '5.5rem' }}>
          <Hero onOpenTerminal={() => setTerminalOpen(true)} />
          <AboutSection />
          <EducationSection />
          <ServicesSection />
          <Projects />
          <Experience />
          <AchievementsSection />
          <SkillsAndJourney />
          <TechnologiesStrip />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* AI Assistant Floating Widget */}
      <AIChatBot />

      {/* Interactive CLI Shell Modal */}
      <InteractiveTerminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
}

export default App;
