import React, { useEffect, useRef, useState } from 'react';
import { SKILL_CATEGORIES_PROGRESS } from '../data/portfolioData';
import { soundFx } from '../utils/soundFx';
import { Sparkles, Cpu, Layers } from 'lucide-react';

interface SkillNode {
  name: string;
  category: string;
  percentage: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  color: string;
}

export const NeuralSkillNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedNode, setSelectedNode] = useState<SkillNode | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const nodesRef = useRef<SkillNode[]>([]);
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ rx: 0, ry: 0 });

  const categoryColors: Record<string, string> = {
    'Programming & Languages': '#ef4444',
    'Frontend Development': '#f59e0b',
    'Backend & APIs': '#3b82f6',
    'AI / ML & Data Science': '#a855f7',
    'Databases & Tools': '#10b981',
    'ALL': '#ef4444'
  };

  const categories = ['ALL', ...SKILL_CATEGORIES_PROGRESS.map((c) => c.title)];

  useEffect(() => {
    // Generate skill nodes in 3D sphere space
    const allNodes: SkillNode[] = [];
    let idCounter = 0;

    SKILL_CATEGORIES_PROGRESS.forEach((cat) => {
      const catColor = categoryColors[cat.title] || '#ef4444';
      cat.skills.forEach((skill) => {
        idCounter++;
        // Fibonacci sphere point distribution
        const phi = Math.acos(-1 + (2 * idCounter) / 25);
        const theta = Math.sqrt(25 * Math.PI) * phi;
        const radius = 180;

        allNodes.push({
          name: skill.name,
          category: cat.title,
          percentage: skill.percentage,
          x: radius * Math.cos(theta) * Math.sin(phi),
          y: radius * Math.sin(theta) * Math.sin(phi),
          z: radius * Math.cos(phi),
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          vz: (Math.random() - 0.5) * 0.2,
          color: catColor
        });
      });
    });

    nodesRef.current = allNodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      const width = (canvas.width = canvas.parentElement?.clientWidth || 700);
      const height = (canvas.height = 420);
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Auto slow rotation if not dragging
      if (!isDraggingRef.current) {
        rotationRef.current.ry += 0.003;
        rotationRef.current.rx += 0.001;
      }

      const rx = rotationRef.current.rx;
      const ry = rotationRef.current.ry;

      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);

      // Project 3D nodes to 2D
      const projectedNodes = nodesRef.current.map((node) => {
        // Rotate Y
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;

        // Rotate X
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.y * sinX;

        // Perspective projection
        const fov = 400;
        const scale = fov / (fov + z2 + 250);
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;

        const isFilteredOut = activeCategory !== 'ALL' && node.category !== activeCategory;

        return {
          node,
          projX,
          projY,
          scale,
          z2,
          isFilteredOut
        };
      });

      // Sort by depth (z2) so further nodes render behind
      projectedNodes.sort((a, b) => b.z2 - a.z2);

      // Draw connecting lines between nodes in proximity
      for (let i = 0; i < projectedNodes.length; i++) {
        const p1 = projectedNodes[i];
        if (p1.isFilteredOut) continue;

        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p2 = projectedNodes[j];
          if (p2.isFilteredOut) continue;

          const dx = p1.projX - p2.projX;
          const dy = p1.projY - p2.projY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.projX, p1.projY);
            ctx.lineTo(p2.projX, p2.projY);
            ctx.strokeStyle = p1.node.color;
            ctx.globalAlpha = (1 - dist / 110) * 0.25 * p1.scale;
            ctx.lineWidth = 1 * p1.scale;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      projectedNodes.forEach(({ node, projX, projY, scale, isFilteredOut }) => {
        if (isFilteredOut) return;

        const isSelected = selectedNode?.name === node.name;
        const radius = Math.max(3, (node.percentage / 18) * scale + (isSelected ? 4 : 0));

        // Outer glow aura
        ctx.beginPath();
        ctx.arc(projX, projY, radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = isSelected ? 0.35 : 0.12 * scale;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(projX, projY, radius, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#ffffff' : node.color;
        ctx.globalAlpha = scale * (isSelected ? 1 : 0.85);
        ctx.fill();

        // Node text label
        if (scale > 0.75 || isSelected) {
          ctx.font = `${isSelected ? '700' : '600'} ${Math.max(10, 11 * scale)}px Inter, sans-serif`;
          ctx.fillStyle = isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.9)';
          ctx.globalAlpha = isSelected ? 1 : Math.min(1, scale * 0.9);
          ctx.fillText(node.name, projX + radius + 5, projY + 4);
        }
      });

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [activeCategory, selectedNode]);

  // Mouse interaction handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;

    rotationRef.current.ry += dx * 0.005;
    rotationRef.current.rx += dy * 0.005;

    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    const rx = rotationRef.current.rx;
    const ry = rotationRef.current.ry;
    const cosX = Math.cos(rx);
    const sinX = Math.sin(rx);
    const cosY = Math.cos(ry);
    const sinY = Math.sin(ry);

    let clicked: SkillNode | null = null;
    let closestDist = Infinity;

    nodesRef.current.forEach((node) => {
      const x1 = node.x * cosY - node.z * sinY;
      const z1 = node.z * cosY + node.x * sinY;
      const y2 = node.y * cosX - z1 * sinX;
      const z2 = z1 * cosX + node.y * sinX;

      const fov = 400;
      const scale = fov / (fov + z2 + 250);
      const projX = centerX + x1 * scale;
      const projY = centerY + y2 * scale;

      const dist = Math.sqrt((mouseX - projX) ** 2 + (mouseY - projY) ** 2);
      if (dist < 22 && dist < closestDist) {
        closestDist = dist;
        clicked = node;
      }
    });

    if (clicked) {
      soundFx.playClick();
      setSelectedNode(clicked);
    }
  };

  return (
    <div
      className="glass-card pop-card"
      style={{
        padding: '1.5rem',
        borderRadius: '16px',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(239, 68, 68, 0.25)',
        background: 'rgba(15, 10, 16, 0.85)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
      }}
    >
      {/* Top Header & Category Filter Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '1rem',
          zIndex: 2,
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Sparkles color="#ef4444" size={18} />
          <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-white)', margin: 0, letterSpacing: '0.04em' }}>
            3D NEURAL SKILL CONSTELLATION
          </h3>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playHover();
                setActiveCategory(cat);
              }}
              style={{
                background: activeCategory === cat ? 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)' : 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${activeCategory === cat ? '#ef4444' : 'rgba(255, 255, 255, 0.1)'}`,
                color: activeCategory === cat ? '#ffffff' : 'var(--text-muted)',
                borderRadius: '6px',
                padding: '0.25rem 0.65rem',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat === 'ALL' ? 'ALL SKILLS' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Canvas */}
      <div style={{ position: 'relative', cursor: isDraggingRef.current ? 'grabbing' : 'grab' }}>
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={handleCanvasClick}
          style={{ width: '100%', height: '420px', display: 'block', borderRadius: '12px' }}
        />

        {/* Selected Skill Quick Detail Badge */}
        {selectedNode ? (
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              right: '12px',
              background: 'rgba(20, 12, 18, 0.95)',
              border: `1px solid ${selectedNode.color}`,
              borderRadius: '10px',
              padding: '0.85rem 1.15rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              boxShadow: `0 0 20px ${selectedNode.color}40`,
              backdropFilter: 'blur(10px)',
              animation: 'fadeIn 0.25s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: selectedNode.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                <Cpu size={20} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, color: '#fff' }}>{selectedNode.name}</h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{selectedNode.category}</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-muted)' }}>Proficiency</span>
                <span style={{ fontSize: '1rem', fontWeight: 800, color: selectedNode.color }}>{selectedNode.percentage}%</span>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '1.1rem'
                }}
              >
                ✕
              </button>
            </div>
          </div>
        ) : (
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0,0,0,0.6)',
              padding: '0.35rem 0.85rem',
              borderRadius: '20px',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              border: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            <Layers size={13} color="#ef4444" /> Click nodes to inspect stats • Drag to rotate 3D sphere
          </div>
        )}
      </div>
    </div>
  );
};
