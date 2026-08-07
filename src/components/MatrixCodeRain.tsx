import React, { useEffect, useRef } from 'react';

interface MatrixCodeRainProps {
  isActive: boolean;
  onClose?: () => void;
}

export const MatrixCodeRain: React.FC<MatrixCodeRainProps> = ({ isActive, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Pure Tech Code Character Set: Binary + Hex + Syntax Operators + Project Tech Tags + Math/AI Symbols
    const chars = '0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100x7F0xFF0x4A0x900xDE0xAD0xBEEF_AYUSH_MANE_VTON_AI_DEBERTA_FASTAPI_PYTORCH_OPENCV_REACT19_TYPESCRIPT_CYBER_ML_{}[]<>()=>==!=&&||++--+=-=*&^%$#@!?:;/\|~ΣΔλπ∞≈≠±∇';
    const fontSize = 15;
    const columns = Math.floor(width / fontSize);

    // Column drops with slow floating speeds, length, and horizontal drift phase
    const drops = Array.from({ length: columns }, (_, i) => ({
      y: Math.floor(Math.random() * -100),
      speed: 0.12 + Math.random() * 0.25, // Slow floating speed
      length: 14 + Math.floor(Math.random() * 18),
      color: Math.random() > 0.4 ? '#ef4444' : '#f87171',
      driftPhase: i * 0.5
    }));

    let time = 0;

    const render = () => {
      time += 0.02;
      // Ethereal slow trail fade
      ctx.fillStyle = 'rgba(6, 3, 7, 0.06)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `700 ${fontSize}px monospace`;

      const mouseX = mousePosRef.current.x;
      const mouseY = mousePosRef.current.y;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        // Floating horizontal sine wave drift
        const floatX = i * fontSize + Math.sin(time + drop.driftPhase) * 6;
        const y = drop.y * fontSize;

        // Proximity check to mouse cursor
        const distToMouse = Math.hypot(floatX - mouseX, y - mouseY);
        const isNearMouse = distToMouse < 140;

        const char = chars.charAt(Math.floor(Math.random() * chars.length));

        // Lead glowing floating head particle
        ctx.shadowBlur = isNearMouse ? 18 : 10;
        ctx.shadowColor = '#ef4444';
        ctx.fillStyle = isNearMouse ? '#ffffff' : '#ffe4e4';
        ctx.fillText(char, floatX, y);

        // Floating trailing characters
        ctx.shadowBlur = 0;
        for (let j = 1; j < drop.length; j++) {
          const trailY = y - j * fontSize;
          if (trailY > 0) {
            const alpha = (1 - j / drop.length) * 0.75;
            ctx.fillStyle = j === 1 ? drop.color : `rgba(239, 68, 68, ${alpha})`;
            ctx.fillText(chars.charAt(Math.floor(Math.random() * chars.length)), floatX, trailY);
          }
        }

        // Reset drop when off screen
        if (y > height + drop.length * fontSize) {
          drops[i].y = Math.floor(Math.random() * -30);
          drops[i].speed = 0.12 + Math.random() * 0.25;
        }

        drop.y += drop.speed;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        pointerEvents: 'none',
        opacity: 0.85,
        transition: 'opacity 0.5s ease'
      }}
    >
      <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh', display: 'block' }} />

      {/* Floating Dismiss Button */}
      {onClose && (
        <button
          onClick={onClose}
          style={{
            position: 'fixed',
            top: '80px',
            right: '24px',
            pointerEvents: 'auto',
            background: 'rgba(239, 68, 68, 0.25)',
            border: '1px solid #ef4444',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '0.45rem 1rem',
            fontSize: '0.76rem',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.6)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s ease'
          }}
        >
          ✕ DISABLE MATRIX RAIN
        </button>
      )}
    </div>
  );
};

