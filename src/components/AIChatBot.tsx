import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Copy, Trash2, Key, Sparkles, Volume2, ThumbsUp, ThumbsDown, ArrowRight } from 'lucide-react';
import { askGeminiAI } from '../utils/ragEngine';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ActionItem {
  label: string;
  type: 'download_resume' | 'scroll_section' | 'open_url' | 'ask_question';
  payload?: string;
  icon?: string;
}

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  liked?: boolean;
  disliked?: boolean;
  actions?: ActionItem[];
}

export const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string>('');
  const [showKeyInput, setShowKeyInput] = useState<boolean>(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const initialWelcomeActions: ActionItem[] = [
    { label: 'VTON Try-On', type: 'ask_question', payload: 'Tell me about VTON Virtual Try-On project' },
    { label: 'Instagram', type: 'open_url', payload: PERSONAL_INFO.instagram },
    { label: 'WhatsApp', type: 'open_url', payload: PERSONAL_INFO.whatsapp },
    { label: 'Academics & CGPA', type: 'ask_question', payload: 'What is your CGPA & College details?' },
    { label: 'AI Internship', type: 'ask_question', payload: 'Where did you intern?' },
    { label: 'Resume PDF', type: 'download_resume' }
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-mane-ai',
      sender: 'bot',
      text: "Greetings! 👋 I'm Mane AI, powered by Gemini 2.5 Flash.\n\nAsk me anything about Ayush's projects, Instagram handle, skills, academic record, or internship!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actions: initialWelcomeActions
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickPrompts = [
    'Tell me about VTON project',
    'What is your Instagram handle?',
    'How to chat on WhatsApp?',
    'What is your tech stack?',
    'What is your CGPA & College?',
    'Where did you intern?',
    'How can I contact Ayush?'
  ];

  const getContextualActions = (query: string): ActionItem[] => {
    const q = query.toLowerCase();
    if (q.includes('vton') || q.includes('project') || q.includes('code')) {
      return [
        { label: '🚀 Scroll to Projects', type: 'scroll_section', payload: 'projects' },
        { label: '📄 Download Resume', type: 'download_resume' },
        { label: '💬 Contact on WhatsApp', type: 'open_url', payload: PERSONAL_INFO.whatsapp }
      ];
    }
    if (q.includes('instagram') || q.includes('contact') || q.includes('reach') || q.includes('whatsapp') || q.includes('social')) {
      return [
        { label: '📷 Open Instagram', type: 'open_url', payload: PERSONAL_INFO.instagram },
        { label: '💬 WhatsApp Chat', type: 'open_url', payload: PERSONAL_INFO.whatsapp },
        { label: '💼 Open LinkedIn', type: 'open_url', payload: PERSONAL_INFO.linkedin },
        { label: '📄 Download Resume', type: 'download_resume' }
      ];
    }
    if (q.includes('education') || q.includes('college') || q.includes('cgpa') || q.includes('intern') || q.includes('experience')) {
      return [
        { label: '📄 Download Resume PDF', type: 'download_resume' },
        { label: '🚀 View Experience Section', type: 'scroll_section', payload: 'experience' },
        { label: '🛠️ View Technical Skills', type: 'ask_question', payload: 'What is your tech stack?' }
      ];
    }
    return [
      { label: '📄 Download Resume', type: 'download_resume' },
      { label: '📷 Instagram (@ayush_h_mane)', type: 'open_url', payload: PERSONAL_INFO.instagram },
      { label: '💬 WhatsApp Chat', type: 'open_url', payload: PERSONAL_INFO.whatsapp }
    ];
  };

  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (match) {
        return (
          <a
            key={i}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ef4444', textDecoration: 'underline', fontWeight: 600 }}
          >
            {match[1]}
          </a>
        );
      }

      const boldParts = part.split(/(\*\*.*?\*\*)/g);
      return (
        <React.Fragment key={i}>
          {boldParts.map((sub, j) => {
            if (sub.startsWith('**') && sub.endsWith('**')) {
              return <strong key={j} style={{ color: 'var(--text-white)', fontWeight: 700 }}>{sub.slice(2, -2)}</strong>;
            }
            return sub;
          })}
        </React.Fragment>
      );
    });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev: Message[]) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    try {
      const reply = await askGeminiAI(text, apiKey);
      const botMsg: Message = {
        id: Math.random().toString(),
        sender: 'bot',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: getContextualActions(text)
      };
      setMessages((prev: Message[]) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  const handleActionClick = (action: ActionItem) => {
    switch (action.type) {
      case 'download_resume':
        window.open('/Ayush_H_Mane_Resume.pdf', '_blank');
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: 'bot',
            text: "📄 **Downloading Ayush H Mane's official resume PDF...**",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        break;

      case 'scroll_section':
        if (action.payload) {
          const el = document.getElementById(action.payload);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setMessages((prev) => [
              ...prev,
              {
                id: Math.random().toString(),
                sender: 'bot',
                text: `🚀 **Navigating page to ${action.payload.toUpperCase()} section...**`,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              }
            ]);
          }
        }
        break;

      case 'open_url':
        if (action.payload) {
          window.open(action.payload, '_blank');
        }
        break;

      case 'ask_question':
        if (action.payload) {
          handleSendMessage(action.payload);
        }
        break;
    }
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFeedback = (id: string, isLike: boolean) => {
    setMessages((prev) =>
      prev.map((msg) => {
        if (msg.id === id) {
          return {
            ...msg,
            liked: isLike ? !msg.liked : false,
            disliked: !isLike ? !msg.disliked : false
          };
        }
        return msg;
      })
    );
  };

  const handleSpeak = (id: string, text: string) => {
    if ('speechSynthesis' in window) {
      if (speakingId === id) {
        window.speechSynthesis.cancel();
        setSpeakingId(null);
        return;
      }
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[*#_`\[\]()]/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.0;
      utterance.onend = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: Math.random().toString(),
        sender: 'bot',
        text: "Conversation reset! 👋 What would you like to explore next?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: initialWelcomeActions
      }
    ]);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 300 }}>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            border: 'none',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 32px rgba(220, 38, 38, 0.45)',
            position: 'relative',
            transition: 'all 0.3s ease'
          }}
          title="Open Mane AI Chatbot"
        >
          <Bot size={28} />
          <span
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#16a34a',
              border: '2px solid var(--bg-dark)'
            }}
          />
        </button>
      )}

      {/* Floating Gemini Chat Window */}
      {isOpen && (
        <div
          style={{
            width: '430px',
            height: '610px',
            maxWidth: 'calc(100vw - 32px)',
            maxHeight: 'calc(100vh - 48px)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.35)',
            borderRadius: '1.25rem',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-card)'
          }}
        >
          {/* Top Header Bar */}
          <div
            style={{
              background: 'rgba(220, 38, 38, 0.08)',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--border-color)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <Bot size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
                  MANE AI <span style={{ fontSize: '0.62rem', padding: '2px 8px', borderRadius: '99px', border: '1px solid rgba(220, 38, 38, 0.3)', color: '#ef4444', fontWeight: 700, fontFamily: 'var(--font-code)' }}>Gemini Bot</span>
                </h4>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16a34a' }}></span> Google Gemini Active
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                onClick={() => setShowKeyInput(!showKeyInput)}
                style={{ background: 'transparent', border: 'none', color: apiKey ? '#16a34a' : 'var(--text-muted)', cursor: 'pointer', padding: '6px' }}
                title="Configure Gemini API Key"
              >
                <Key size={16} />
              </button>
              <button
                onClick={handleClearHistory}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '6px' }}
                title="Clear Chat History"
              >
                <Trash2 size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '6px' }}
                title="Close Chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Optional Custom API Key Drawer */}
          {showKeyInput && (
            <div
              style={{
                padding: '12px 18px',
                background: 'var(--bg-dark)',
                borderBottom: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter custom Gemini / OpenAI API Key..."
                style={{
                  flex: 1,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '99px',
                  padding: '8px 14px',
                  color: 'var(--text-white)',
                  fontSize: '0.8rem',
                  outline: 'none'
                }}
              />
              <button
                onClick={() => setShowKeyInput(false)}
                className="btn-primary-red"
                style={{ padding: '6px 14px', fontSize: '0.75rem' }}
              >
                Save
              </button>
            </div>
          )}

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              padding: '18px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              background: 'var(--bg-dark)'
            }}
          >
            {messages.map((msg: Message) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  position: 'relative'
                }}
              >
                {/* Chat Bubble */}
                <div
                  style={{
                    maxWidth: '90%',
                    padding: '12px 16px',
                    borderRadius: '16px',
                    borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                    borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                    background:
                      msg.sender === 'user'
                        ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
                        : 'var(--bg-card)',
                    border: msg.sender === 'user' ? 'none' : '1px solid var(--border-color)',
                    color: msg.sender === 'user' ? '#ffffff' : 'var(--text-white)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    letterSpacing: '0.01em',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    boxShadow: msg.sender === 'user' ? '0 4px 15px rgba(220, 38, 38, 0.35)' : 'var(--card-shadow)'
                  }}
                >
                  {renderFormattedText(msg.text)}

                  {/* Interactive Action Buttons inside Bot Bubble */}
                  {msg.sender === 'bot' && msg.actions && msg.actions.length > 0 && (
                    <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '10px', borderTop: '1px solid var(--border-color)' }}>
                      {msg.actions.map((act, aIdx) => (
                        <button
                          key={aIdx}
                          onClick={() => handleActionClick(act)}
                          style={{
                            background: 'rgba(220, 38, 38, 0.12)',
                            border: '1px solid rgba(220, 38, 38, 0.25)',
                            color: '#ef4444',
                            padding: '5px 12px',
                            borderRadius: '99px',
                            fontSize: '0.74rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <span>{act.label}</span>
                          <ArrowRight size={11} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Message Timestamp & Interactive Bot Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px', padding: '0 4px' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)' }}>
                    {msg.timestamp}
                  </span>

                  {msg.sender === 'bot' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        onClick={() => handleCopyMessage(msg.id, msg.text)}
                        style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '2px' }}
                        title="Copy message"
                      >
                        {copiedId === msg.id ? <Sparkles size={13} color="#ef4444" /> : <Copy size={13} />}
                      </button>

                      <button
                        onClick={() => handleSpeak(msg.id, msg.text)}
                        style={{ background: 'transparent', border: 'none', color: speakingId === msg.id ? '#ef4444' : 'var(--text-muted)', cursor: 'pointer', padding: '2px' }}
                        title="Read aloud"
                      >
                        <Volume2 size={13} />
                      </button>

                      <button
                        onClick={() => handleFeedback(msg.id, true)}
                        style={{ background: 'transparent', border: 'none', color: msg.liked ? '#ef4444' : 'var(--text-muted)', cursor: 'pointer', padding: '2px' }}
                        title="Helpful"
                      >
                        <ThumbsUp size={13} />
                      </button>

                      <button
                        onClick={() => handleFeedback(msg.id, false)}
                        style={{ background: 'transparent', border: 'none', color: msg.disliked ? '#ef4444' : 'var(--text-muted)', cursor: 'pointer', padding: '2px' }}
                        title="Not helpful"
                      >
                        <ThumbsDown size={13} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontSize: '0.8rem', fontFamily: 'var(--font-code)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }}></span> Mane AI is composing response...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Bar */}
          <div
            style={{
              padding: '10px 14px',
              background: 'var(--bg-card)',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              gap: '6px',
              overflowX: 'auto'
            }}
          >
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(qp)}
                style={{
                  whiteSpace: 'nowrap',
                  background: 'rgba(220, 38, 38, 0.1)',
                  border: '1px solid rgba(220, 38, 38, 0.25)',
                  color: '#ef4444',
                  padding: '6px 12px',
                  borderRadius: '99px',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 0.1)';
                }}
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            style={{
              padding: '14px 18px',
              background: 'var(--bg-card)',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              gap: '10px'
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask Gemini anything about Ayush..."
              style={{
                flex: 1,
                background: 'var(--bg-dark)',
                border: '1px solid var(--border-color)',
                borderRadius: '99px',
                padding: '10px 18px',
                color: 'var(--text-white)',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              className="btn-primary-red"
              style={{ padding: '10px 18px', fontSize: '0.75rem', borderRadius: '99px' }}
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
