import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-container" style={{ position: 'relative' }}>
      {/* Header */}
      <ScrollReveal direction="down">
        <div className="section-header">
          <span className="bullet-dot" />
          <h2>LET'S WORK TOGETHER</h2>
        </div>
      </ScrollReveal>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start'
        }}
      >
        {/* Left Side Form */}
        <ScrollReveal direction="right" delay={100}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            {/* Name Field */}
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '0.85rem 1.1rem',
                borderRadius: '10px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-white)',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => (e.target.style.borderColor = '#ef4444')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
            />

            {/* Email Field */}
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '0.85rem 1.1rem',
                borderRadius: '10px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-white)',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => (e.target.style.borderColor = '#ef4444')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
            />

            {/* Message Field */}
            <textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '0.85rem 1.1rem',
                borderRadius: '10px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-white)',
                fontSize: '0.95rem',
                outline: 'none',
                resize: 'vertical',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => (e.target.style.borderColor = '#ef4444')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary-red"
              style={{
                justifyContent: 'center',
                width: '100%',
                padding: '0.9rem 1.5rem'
              }}
            >
              {submitted ? (
                <>
                  <CheckCircle2 size={18} />
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </ScrollReveal>

        {/* Right Side Contact Details */}
        <ScrollReveal direction="left" delay={150}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(220, 38, 38, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ef4444',
                    flexShrink: 0
                  }}
                >
                  <Mail size={18} />
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-white)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(220, 38, 38, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ef4444',
                    flexShrink: 0
                  }}
                >
                  <Phone size={18} />
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-white)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(220, 38, 38, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ef4444',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={18} />
                </div>
                <span
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-white)',
                    fontWeight: 500
                  }}
                >
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Social Row */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  fontWeight: 700
                }}
              >
                FIND ME ON
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {[
                  { icon: GithubIcon, href: PERSONAL_INFO.github, label: 'GitHub' },
                  { icon: LinkedinIcon, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
                  { icon: TwitterIcon, href: PERSONAL_INFO.twitter, label: 'Twitter' },
                  { icon: InstagramIcon, href: PERSONAL_INFO.instagram, label: 'Instagram' }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                      e.currentTarget.style.color = '#ef4444';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bg-card)';
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.color = 'var(--text-white)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <item.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
