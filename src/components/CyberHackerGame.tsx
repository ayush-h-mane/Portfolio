import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/soundFx';
import { Terminal, ShieldAlert, Award, RotateCcw } from 'lucide-react';

interface CyberHackerGameProps {
  onWin?: () => void;
}

export const CyberHackerGame: React.FC<CyberHackerGameProps> = ({ onWin }) => {
  const [timeLeft, setTimeLeft] = useState<number>(15);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [gameLost, setGameLost] = useState<boolean>(false);
  const [sequenceIndex, setSequenceIndex] = useState<number>(0);

  const targetHexes = ['0x4A', '0x8F', '0xFF', '0x3B', '0x7E'];
  const gridHexes = ['0x12', '0x4A', '0x99', '0x8F', '0xCC', '0xFF', '0x2D', '0x3B', '0xEE', '0x7E', '0x55', '0xAA'];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && timeLeft > 0 && !gameWon && !gameLost) {
      timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0 && isPlaying && !gameWon) {
      soundFx.playGlitch();
      setGameLost(true);
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, timeLeft, gameWon, gameLost]);

  const handleStartGame = () => {
    soundFx.playTerminal();
    setTimeLeft(15);
    setSequenceIndex(0);
    setGameWon(false);
    setGameLost(false);
    setIsPlaying(true);
  };

  const handleHexClick = (hex: string) => {
    if (!isPlaying || gameWon || gameLost) return;

    const expected = targetHexes[sequenceIndex];
    if (hex === expected) {
      soundFx.playHover();
      const nextIdx = sequenceIndex + 1;
      setSequenceIndex(nextIdx);

      if (nextIdx === targetHexes.length) {
        soundFx.playSuccess();
        setGameWon(true);
        setIsPlaying(false);
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        if (onWin) onWin();
      }
    } else {
      soundFx.playGlitch();
    }
  };

  return (
    <div
      style={{
        background: '#09050a',
        border: '1px solid rgba(239, 68, 68, 0.35)',
        borderRadius: '12px',
        padding: '1.25rem',
        marginTop: '0.85rem',
        fontFamily: 'var(--font-code)'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontWeight: 800, fontSize: '0.88rem' }}>
          <Terminal size={18} /> FIREWALL MEMORY DECRYPTION GAME
        </div>

        <div style={{ fontSize: '0.8rem', color: timeLeft <= 5 ? '#ef4444' : '#10b981', fontWeight: 800 }}>
          TIME REMAINING: {timeLeft}s
        </div>
      </div>

      {!isPlaying && !gameWon && !gameLost ? (
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Decrypt the firewall memory by clicking the hex codes in the exact sequence:
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {targetHexes.map((hex) => (
              <span key={hex} style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid #ef4444', color: '#ef4444', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700 }}>
                {hex}
              </span>
            ))}
          </div>
          <button
            onClick={handleStartGame}
            className="btn-primary-red"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.82rem', borderRadius: '8px' }}
          >
            START DECRYPTION
          </button>
        </div>
      ) : (
        <div>
          {/* Target Progress Bar */}
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
              TARGET SEQUENCE PROGRESS: ({sequenceIndex} / {targetHexes.length})
            </span>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {targetHexes.map((hex, idx) => (
                <span
                  key={hex}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '4px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    background: idx < sequenceIndex ? '#10b981' : idx === sequenceIndex ? '#ef4444' : 'rgba(255,255,255,0.05)',
                    color: idx <= sequenceIndex ? '#ffffff' : 'var(--text-muted)'
                  }}
                >
                  {hex}
                </span>
              ))}
            </div>
          </div>

          {/* Hex Selection Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
            {gridHexes.map((hex, idx) => (
              <button
                key={idx}
                onClick={() => handleHexClick(hex)}
                disabled={gameWon || gameLost}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  color: '#ffffff',
                  padding: '0.6rem',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {hex}
              </button>
            ))}
          </div>

          {/* Game End Banners */}
          {gameWon && (
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', padding: '0.85rem', borderRadius: '8px', textAlign: 'center', color: '#10b981', fontWeight: 800 }}>
              🎉 FIREWALL BYPASSED! AYUSH MANE MANIFEST UNLOCKED.
            </div>
          )}

          {gameLost && (
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', padding: '0.85rem', borderRadius: '8px', textAlign: 'center', color: '#ef4444', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <ShieldAlert size={18} /> TIMEOUT! FIREWALL LOCKED.
              <button onClick={handleStartGame} style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '2px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem', marginLeft: '0.5rem' }}>
                RETRY
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
