import React, { useState, useEffect } from 'react';
import { soundFx } from '../utils/soundFx';
import { askGeminiAI } from '../utils/ragEngine';
import { Play, RotateCcw, Zap, Sparkles, Database, CheckCircle } from 'lucide-react';

interface ProjectSandboxProps {
  projectTitle: string;
}

export const ProjectSandbox: React.FC<ProjectSandboxProps> = ({ projectTitle }) => {
  // Sandbox type selector based on project
  const isAI = projectTitle.toLowerCase().includes('vton') || projectTitle.toLowerCase().includes('ai') || projectTitle.toLowerCase().includes('rag');
  const isAlgo = projectTitle.toLowerCase().includes('algorithm') || projectTitle.toLowerCase().includes('structure') || projectTitle.toLowerCase().includes('visualizer');

  // --- AI RAG Sandbox State ---
  const [prompt, setPrompt] = useState("Explain how Virtual Try-On neural network processes clothing overlays");
  const [aiOutput, setAiOutput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // --- Algorithm Visualizer State ---
  const [arr, setArr] = useState<number[]>([40, 75, 20, 90, 50, 15, 80, 60, 30, 95]);
  const [sorting, setSorting] = useState(false);
  const [activeBar, setActiveBar] = useState<number | null>(null);

  // --- API Latency Simulator State ---
  const [benchmarks, setBenchmarks] = useState<{ name: string; latency: number; status: string }[]>([]);
  const [benchmarking, setBenchmarking] = useState(false);

  const handleRunAI = async () => {
    soundFx.playTerminal();
    setIsProcessing(true);
    setAiOutput("Initializing RAG Vector Search & Vector Similarity Match...");
    try {
      const res = await askGeminiAI(prompt);
      setAiOutput(res);
      soundFx.playSuccess();
    } catch {
      setAiOutput("Failed to fetch response. Check Gemini API connection.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSort = async () => {
    soundFx.playTerminal();
    setSorting(true);
    const copy = [...arr];

    for (let i = 0; i < copy.length; i++) {
      for (let j = 0; j < copy.length - i - 1; j++) {
        setActiveBar(j);
        if (copy[j] > copy[j + 1]) {
          const temp = copy[j];
          copy[j] = copy[j + 1];
          copy[j + 1] = temp;
          setArr([...copy]);
          soundFx.playHover();
          await new Promise((r) => setTimeout(r, 120));
        }
      }
    }
    setActiveBar(null);
    setSorting(false);
    soundFx.playSuccess();
  };

  const handleRunBenchmark = async () => {
    soundFx.playTerminal();
    setBenchmarking(true);
    setBenchmarks([]);

    const tests = [
      { name: 'Standard Relational Database Query', base: 140 },
      { name: 'Redis In-Memory Cache Lookup', base: 18 },
      { name: 'Vector RAG Embedding Search', base: 32 },
      { name: 'Gemini 2.5 Streaming LLM Output', base: 85 }
    ];

    for (const t of tests) {
      await new Promise((r) => setTimeout(r, 400));
      soundFx.playHover();
      const actual = t.base + Math.floor(Math.random() * 8);
      setBenchmarks((prev) => [...prev, { name: t.name, latency: actual, status: '200 OK' }]);
    }
    soundFx.playSuccess();
    setBenchmarking(false);
  };

  return (
    <div
      style={{
        background: 'rgba(10, 6, 11, 0.9)',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        borderRadius: '12px',
        padding: '1.25rem',
        marginTop: '1rem'
      }}
    >
      {/* AI Prompt Sandbox */}
      {isAI ? (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontWeight: 700, fontSize: '0.88rem' }}>
              <Sparkles size={16} /> LIVE AI RAG PROMPT SANDBOX
            </div>
            <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>STATUS: READY</span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter prompt to run through live RAG pipeline..."
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: '8px',
                padding: '0.6rem 0.85rem',
                color: '#fff',
                fontSize: '0.84rem',
                outline: 'none'
              }}
            />
            <button
              onClick={handleRunAI}
              disabled={isProcessing}
              style={{
                background: 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
                padding: '0.6rem 1rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Play size={14} /> {isProcessing ? 'Processing...' : 'Run RAG'}
            </button>
          </div>

          <div
            style={{
              background: '#090509',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px',
              padding: '0.85rem',
              fontSize: '0.8rem',
              color: 'var(--text-white)',
              minHeight: '80px',
              maxHeight: '180px',
              overflowY: 'auto',
              lineHeight: 1.5,
              whiteSpace: 'pre-wrap'
            }}
          >
            {aiOutput || 'Click "Run RAG" to execute prompt against live portfolio vector engine.'}
          </div>
        </div>
      ) : isAlgo ? (
        /* Algorithm Visualizer Sandbox */
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a855f7', fontWeight: 700, fontSize: '0.88rem' }}>
              <Zap size={16} /> INTERACTIVE ALGORITHM VISUALIZER
            </div>
            <button
              onClick={handleSort}
              disabled={sorting}
              style={{
                background: 'rgba(168, 85, 247, 0.2)',
                border: '1px solid #a855f7',
                color: '#ffffff',
                borderRadius: '6px',
                padding: '0.35rem 0.75rem',
                fontSize: '0.76rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <Play size={13} /> {sorting ? 'Sorting...' : 'Start Bubble Sort'}
            </button>
          </div>

          <div
            style={{
              height: '110px',
              display: 'flex',
              alignItems: 'flex-end',
              gap: '6px',
              background: '#090509',
              padding: '10px',
              borderRadius: '8px'
            }}
          >
            {arr.map((val, idx) => (
              <div
                key={idx}
                style={{
                  flex: 1,
                  height: `${val}%`,
                  background: activeBar === idx ? '#ef4444' : 'linear-gradient(180deg, #a855f7 0%, #3b82f6 100%)',
                  borderRadius: '4px 4px 0 0',
                  transition: 'height 0.1s ease',
                  boxShadow: activeBar === idx ? '0 0 10px #ef4444' : 'none'
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Benchmark Latency Simulator Sandbox */
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#3b82f6', fontWeight: 700, fontSize: '0.88rem' }}>
              <Database size={16} /> API LATENCY & BENCHMARK SIMULATOR
            </div>
            <button
              onClick={handleRunBenchmark}
              disabled={benchmarking}
              style={{
                background: 'rgba(59, 130, 246, 0.2)',
                border: '1px solid #3b82f6',
                color: '#ffffff',
                borderRadius: '6px',
                padding: '0.35rem 0.75rem',
                fontSize: '0.76rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <Zap size={13} /> {benchmarking ? 'Testing...' : 'Run Benchmark'}
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {benchmarks.length === 0 ? (
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', padding: '1rem' }}>
                Click "Run Benchmark" to test latency across storage & RAG layers.
              </div>
            ) : (
              benchmarks.map((bm, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '0.5rem 0.85rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem'
                  }}
                >
                  <span style={{ color: '#fff', fontWeight: 600 }}>{bm.name}</span>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ color: '#10b981', fontWeight: 700 }}>{bm.status}</span>
                    <span style={{ color: '#ef4444', fontWeight: 800 }}>{bm.latency}ms</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
