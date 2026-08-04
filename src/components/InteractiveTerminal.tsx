import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, PROJECTS, REAL_CERTIFICATIONS, JOURNEY_MILESTONES } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface OutputLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'success';
  content: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<OutputLine[]>([
    {
      id: 'welcome',
      type: 'output',
      content: (
        <div>
          <span style={{ color: '#ef4444', fontWeight: 'bold' }}>Ayush Mane CLI Shell [v3.5.0-crimson-os]</span>
          <br />
          Type <span style={{ color: '#ef4444', fontWeight: 'bold' }}>'help'</span> for commands, <span style={{ color: 'var(--text-white)', fontWeight: 'bold' }}>'education'</span> for schooling, <span style={{ color: '#ef4444', fontWeight: 'bold' }}>'journey'</span> for milestones, or <span style={{ color: '#ef4444', fontWeight: 'bold' }}>'certifications'</span> for all 13 credentials.
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory: OutputLine[] = [
      ...history,
      { id: Math.random().toString(), type: 'input', content: `ayush@portfolio:~$ ${inputVal}` }
    ];

    switch (cmd) {
      case 'help':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div style={{ display: 'grid', gap: '6px', margin: '4px 0', fontFamily: 'var(--font-code)' }}>
              <div><strong style={{ color: '#ef4444' }}>whoami</strong> — Print Ayush H Mane's bio & background</div>
              <div><strong style={{ color: '#ef4444' }}>education</strong> — View B.E. (CGPA 7.0), PUC (82.32%) & SSLC (88.32%)</div>
              <div><strong style={{ color: '#ef4444' }}>experience</strong> — View AI internship at GlowLogics (Sep 2025 - Dec 2025)</div>
              <div><strong style={{ color: '#ef4444' }}>journey</strong> — Display full timeline & 2024 Theatre milestone</div>
              <div><strong style={{ color: '#ef4444' }}>skills</strong> — Display technical stack & proficiency matrix</div>
              <div><strong style={{ color: '#ef4444' }}>projects</strong> — List featured software monorepos (VTON, Toxicity, Threat ML)</div>
              <div><strong style={{ color: '#ef4444' }}>certifications</strong> — Display all 13 Coursera & LinkedIn Learning certificates</div>
              <div><strong style={{ color: '#ef4444' }}>leadership</strong> — View campus leadership & Utkarsh Theatre awards</div>
              <div><strong style={{ color: '#ef4444' }}>socials</strong> — Instagram, WhatsApp, LinkedIn & GitHub links</div>
              <div><strong style={{ color: '#ef4444' }}>contact</strong> — Show email, phone & location</div>
              <div><strong style={{ color: '#ef4444' }}>resume</strong> — Download official resume PDF</div>
              <div><strong style={{ color: '#ef4444' }}>hire</strong> — Run automated hiring script 🎉</div>
              <div><strong style={{ color: '#ef4444' }}>confetti</strong> — Deploy celebratory particles</div>
              <div><strong style={{ color: '#ef4444' }}>clear</strong> — Clear terminal screen</div>
            </div>
          )
        });
        break;

      case 'whoami':
      case 'about':
      case 'bio':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div>
              <p style={{ color: 'var(--text-white)', fontWeight: 700 }}>{PERSONAL_INFO.name} — Full-Stack Developer & AI Engineer</p>
              <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>{PERSONAL_INFO.aboutBio.join(' ')}</p>
              <p style={{ color: '#ef4444', marginTop: '6px', fontSize: '0.825rem', fontFamily: 'var(--font-code)' }}>
                College: {PERSONAL_INFO.education.institution} | B.E. CGPA: {PERSONAL_INFO.education.cgpa}
              </p>
            </div>
          )
        });
        break;

      case 'education':
      case 'edu':
      case 'schooling':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem', display: 'grid', gap: '8px' }}>
              <div>
                <span style={{ color: '#ef4444', fontWeight: 'bold' }}>🎓 1. Undergraduate Degree (B.E.):</span> Acharya Institute of Technology, Bengaluru (2023 – 2027)
                <br />
                <span style={{ color: 'var(--text-white)' }}>B.E. in Artificial Intelligence & Machine Learning | CGPA: {PERSONAL_INFO.education.cgpa}</span>
              </div>
              <div>
                <span style={{ color: '#ef4444', fontWeight: 'bold' }}>🏫 2. Senior Secondary (PUC 12th Grade):</span> S.A.V Composite PU College (2021 – 2023)
                <br />
                <span style={{ color: 'var(--text-white)' }}>PCMB Science Stream | Score: 82.32%</span>
              </div>
              <div>
                <span style={{ color: '#ef4444', fontWeight: 'bold' }}>🏫 3. Secondary School (SSLC 10th Grade):</span> St. Dominic's High School (2020 – 2021)
                <br />
                <span style={{ color: 'var(--text-white)' }}>SSLC High Schooling | Score: 88.32%</span>
              </div>
            </div>
          )
        });
        break;

      case 'experience':
      case 'exp':
      case 'internship':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
              <div style={{ color: '#ef4444', fontWeight: 'bold' }}>💼 GlowLogics Solutions Pvt. Ltd. — AI Intern</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Bengaluru, Karnataka, India (Sep 2025 – Dec 2025)</div>
              <div style={{ marginTop: '4px' }}>• Developed AI/ML solutions using Python-based machine learning frameworks.</div>
              <div>• Performed data preprocessing, feature engineering, model evaluation, and hyperparameter optimization.</div>
              <div>• Collaborated on real-world AI software integration and backend REST API data workflows.</div>
            </div>
          )
        });
        break;

      case 'journey':
      case 'milestones':
      case 'timeline':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem', display: 'grid', gap: '6px' }}>
              {JOURNEY_MILESTONES.map((m, idx) => (
                <div key={idx}>
                  <span style={{ color: '#ef4444', fontWeight: 'bold' }}>[{m.year}]</span> — {m.description}
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'leadership':
      case 'activities':
      case 'theatre':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
              <div style={{ color: '#ef4444', marginBottom: '4px' }}>• <strong>Utkarsh-Abhinaya Theatre Club (Joined 2024):</strong> National & State-Level Winner</div>
              <div style={{ color: 'var(--text-white)', marginBottom: '4px' }}>• <strong>Acharya Kannada Vedike:</strong> Head of Promotions & Content</div>
              <div style={{ color: '#ef4444' }}>• <strong>Srishti 2026 Innovation Exchange:</strong> Events Coordinator</div>
            </div>
          )
        });
        break;

      case 'socials':
      case 'social':
        newHistory.push({
          id: Math.random().toString(),
          type: 'success',
          content: (
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
              <div>📷 Instagram: <a href={PERSONAL_INFO.instagram} target="_blank" rel="noreferrer" style={{ color: '#ef4444' }}>@ayush_h_mane</a></div>
              <div>💬 WhatsApp: <a href={PERSONAL_INFO.whatsapp} target="_blank" rel="noreferrer" style={{ color: '#ef4444' }}>{PERSONAL_INFO.phone}</a></div>
              <div>💼 LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" style={{ color: '#ef4444' }}>linkedin.com/in/ayush-h-mane</a></div>
              <div>🐙 GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" style={{ color: '#ef4444' }}>github.com/ayush-h-mane</a></div>
            </div>
          )
        });
        break;

      case 'resume':
      case 'cv':
        newHistory.push({
          id: Math.random().toString(),
          type: 'success',
          content: (
            <div style={{ fontFamily: 'var(--font-code)' }}>
              📄 Opening official Resume... <a href="/Ayush_H_Mane_Resume.pdf" download target="_blank" style={{ color: '#ef4444', textDecoration: 'underline' }}>Download Ayush_H_Mane_Resume.pdf</a>
            </div>
          )
        });
        window.open('/Ayush_H_Mane_Resume.pdf', '_blank');
        break;

      case 'hire':
      case 'sudo hire':
        triggerConfetti();
        newHistory.push({
          id: Math.random().toString(),
          type: 'success',
          content: (
            <div style={{ fontFamily: 'var(--font-code)' }}>
              🚀 [SUCCESS] Executed `hire_developer.sh`!
              <br />
              Candidate: <strong>Ayush H Mane</strong> (AI/ML & Full-Stack Engineer)
              <br />
              Status: <span style={{ color: '#ef4444', fontWeight: 'bold' }}>OFFER EXTENDED & ACCEPTED! 🎉</span>
            </div>
          )
        });
        break;

      case 'skills':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
              <div style={{ color: '#ef4444' }}>[Languages] Python, JavaScript (ES6+), SQL, C</div>
              <div style={{ color: 'var(--text-white)' }}>[Frontend] React.js, Next.js, HTML5, CSS3, Bootstrap</div>
              <div style={{ color: '#ef4444' }}>[Backend] FastAPI, Node.js, Express.js, REST APIs</div>
              <div style={{ color: 'var(--text-white)' }}>[AI/ML/Vision] PyTorch, TensorFlow, Scikit-learn, OpenCV, MediaPipe, Pandas, NumPy</div>
              <div style={{ color: '#ef4444' }}>[DevOps & Tools] Docker, Git, GitHub, VS Code, Vercel, Tableau, Power BI</div>
            </div>
          )
        });
        break;

      case 'projects':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div>
              {PROJECTS.map((p) => (
                <div key={p.id} style={{ marginBottom: '10px', fontFamily: 'var(--font-code)' }}>
                  <span style={{ color: '#ef4444', fontWeight: 'bold' }}>• {p.title}</span> — {p.subtitle}
                  <br />
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Tech: {p.technologies.join(', ')}</span>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'certifications':
      case 'certs':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          content: (
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.825rem', display: 'grid', gap: '4px' }}>
              <div style={{ color: '#ef4444', fontWeight: 'bold', marginBottom: '4px' }}>🏆 13 Verified Professional Credentials:</div>
              {REAL_CERTIFICATIONS.map((c, idx) => (
                <div key={idx}>
                  {idx + 1}. 📜 <strong>{c.title}</strong> — <span style={{ color: 'var(--text-muted)' }}>{c.issuer}</span>
                </div>
              ))}
            </div>
          )
        });
        break;

      case 'contact':
        newHistory.push({
          id: Math.random().toString(),
          type: 'success',
          content: (
            <div style={{ fontFamily: 'var(--font-code)' }}>
              <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} style={{ color: '#ef4444' }}>{PERSONAL_INFO.email}</a></div>
              <div>Phone: <span style={{ color: 'var(--text-white)' }}>{PERSONAL_INFO.phone}</span></div>
              <div>WhatsApp: <a href={PERSONAL_INFO.whatsapp} target="_blank" rel="noreferrer" style={{ color: '#ef4444' }}>{PERSONAL_INFO.phone}</a></div>
              <div>Instagram: <a href={PERSONAL_INFO.instagram} target="_blank" rel="noreferrer" style={{ color: '#ef4444' }}>@ayush_h_mane</a></div>
              <div>Location: <span style={{ color: 'var(--text-white)' }}>{PERSONAL_INFO.location}</span></div>
              <div>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" style={{ color: '#ef4444' }}>{PERSONAL_INFO.github}</a></div>
              <div>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" style={{ color: '#ef4444' }}>{PERSONAL_INFO.linkedin}</a></div>
            </div>
          )
        });
        break;

      case 'confetti':
        triggerConfetti();
        newHistory.push({
          id: Math.random().toString(),
          type: 'success',
          content: '🎉 Confetti deployed successfully!'
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          id: Math.random().toString(),
          type: 'error',
          content: `Command not found: '${inputVal}'. Type 'help' for available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(8, 6, 7, 0.75)',
        backdropFilter: 'blur(20px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '780px',
          height: '540px',
          maxHeight: 'calc(100vh - 32px)',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '1rem',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div
          style={{
            background: 'rgba(220, 38, 38, 0.08)',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TerminalIcon size={18} color="#ef4444" />
            <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem', color: '#ef4444', fontWeight: 700 }}>
              ayush@portfolio ~ terminal
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={triggerConfetti}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ef4444',
                cursor: 'pointer',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontFamily: 'var(--font-code)',
                fontWeight: 600
              }}
            >
              <Sparkles size={14} /> Confetti
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Output Screen */}
        <div
          style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            background: 'var(--bg-dark)',
            fontFamily: 'var(--font-code)',
            fontSize: '0.875rem'
          }}
        >
          {history.map((line) => (
            <div key={line.id}>
              {line.type === 'input' && <div style={{ color: '#ef4444', fontWeight: 700 }}>{line.content}</div>}
              {line.type === 'output' && <div style={{ color: 'var(--text-primary)' }}>{line.content}</div>}
              {line.type === 'error' && <div style={{ color: '#ef4444' }}>{line.content}</div>}
              {line.type === 'success' && <div style={{ color: '#16a34a' }}>{line.content}</div>}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt Bar */}
        <form
          onSubmit={handleCommandSubmit}
          style={{
            padding: '12px 20px',
            background: 'var(--bg-card)',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span style={{ color: '#ef4444', fontFamily: 'var(--font-code)', fontWeight: 'bold' }}>
            ayush@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'education', 'journey', 'experience', 'certifications', 'hire'..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: 'var(--text-white)',
              outline: 'none',
              fontFamily: 'var(--font-code)',
              fontSize: '0.875rem'
            }}
          />
        </form>
      </div>
    </div>
  );
};
