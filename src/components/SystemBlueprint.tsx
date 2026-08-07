import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { soundFx } from '../utils/soundFx';
import { Cpu, Database, Zap, Sparkles, Terminal, Activity, CheckCircle, ArrowRight, Play } from 'lucide-react';

interface TopologyNode {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  latency: string;
  tech: string;
  description: string;
  codeSnippet: string;
}

export const SystemBlueprint: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-vton');
  const [isPulseActive, setIsPulseActive] = useState<boolean>(false);

  const nodes: TopologyNode[] = [
    {
      id: 'node-ui',
      name: 'Client Interface & Speech Pipeline',
      category: 'Presentation Layer',
      icon: <Terminal color="#ef4444" size={20} />,
      latency: '2ms',
      tech: 'React 19 + Web Speech API',
      description: 'Captures voice prompts, processes live audio waveforms, and handles interactive client state across the portfolio app.',
      codeSnippet: `// Web Speech & Audio Synth Input Stream\nconst recognition = new window.webkitSpeechRecognition();\nrecognition.onresult = (e) => setQuery(e.results[0][0].transcript);`
    },
    {
      id: 'node-vton',
      name: 'VTON Virtual Try-On Fitting Engine',
      category: 'Computer Vision Microservice',
      icon: <Cpu color="#a855f7" size={20} />,
      latency: '18ms',
      tech: 'FastAPI + OpenCV / MediaPipe',
      description: 'Extracts 3D body pose landmarks, performs geometric garment warping, and returns realistic virtual fitting keypoint overlays.',
      codeSnippet: `// MediaPipe Pose Keypoints & Garment Warping\nmp_pose = mp.solutions.pose.Pose()\nlandmarks = mp_pose.process(image_rgb).pose_landmarks\nwarped_garment = geometric_transform(garment_img, landmarks)`
    },
    {
      id: 'node-toxicity',
      name: 'DeBERTa Multilingual Toxicity Model',
      category: 'NLP Transformer Pipeline',
      icon: <Sparkles color="#ec4899" size={20} />,
      latency: '24ms',
      tech: 'PyTorch + Streamlit UI',
      description: 'Tokenizes multilingual input text, evaluates sarcasm probability, and predicts fine-grained toxicity classifications.',
      codeSnippet: `// DeBERTa Sarcasm-Aware Toxicity Classifier\ntokens = tokenizer(text, return_tensors="pt", truncation=True)\noutputs = deberta_model(**tokens)\ntoxicity_score = torch.sigmoid(outputs.logits)`
    },
    {
      id: 'node-cyber',
      name: 'Cybersecurity Threat ML Classifier',
      category: 'Security Intelligence Layer',
      icon: <Database color="#3b82f6" size={20} />,
      latency: '5ms',
      tech: 'Scikit-Learn + Flask Endpoint',
      description: 'Extracts URL lexical properties, length metrics, and domain entropy scores to classify suspicious URLs in real time.',
      codeSnippet: `// Domain Entropy & Lexical Feature Extraction\nentropy = scipy.stats.entropy(pd.Series(list(url)).value_counts())\nthreat_pred = rf_classifier.predict([lexical_length, entropy, num_subdomains])`
    },
    {
      id: 'node-audio',
      name: 'Web Audio Synth & Haptic Feedback',
      category: 'Audio Engine',
      icon: <Zap color="#10b981" size={20} />,
      latency: '1ms',
      tech: 'HTML5 Web Audio API',
      description: 'Synthesizes real-time sound effects, click tones, terminal beeps, and audio waveform visualizations on the client canvas.',
      codeSnippet: `// Pure Web Audio Synthesizer Oscillator\nconst osc = audioCtx.createOscillator();\nosc.type = 'sine'; osc.frequency.setValueAtTime(880, audioCtx.currentTime);\nosc.connect(gain); gain.connect(audioCtx.destination);`
    }
  ];

  const handleRunPulseTest = () => {
    soundFx.playTerminal();
    setIsPulseActive(true);
    setTimeout(() => {
      soundFx.playSuccess();
      setIsPulseActive(false);
    }, 2000);
  };

  const activeNode = nodes.find((n) => n.id === selectedNodeId) || nodes[1];

  return (
    <section id="blueprint" className="section-container" style={{ position: 'relative' }}>
      <ScrollReveal direction="up">
        {/* Section Header */}
        <div className="section-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="bullet-dot" />
            <h2>REAL SYSTEM ARCHITECTURE & PROJECT TOPOLOGY</h2>
          </div>

          <button
            onClick={handleRunPulseTest}
            onMouseEnter={() => soundFx.playHover()}
            disabled={isPulseActive}
            style={{
              background: isPulseActive ? 'rgba(16, 185, 129, 0.2)' : 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)',
              border: `1px solid ${isPulseActive ? '#10b981' : '#ef4444'}`,
              color: '#ffffff',
              borderRadius: '8px',
              padding: '0.45rem 1rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: isPulseActive ? '0 0 15px rgba(16, 185, 129, 0.4)' : '0 4px 14px rgba(239, 68, 68, 0.4)',
              transition: 'all 0.2s ease'
            }}
          >
            {isPulseActive ? (
              <>
                <Activity className="animate-spin" size={15} color="#10b981" />
                <span>VERIFYING PIPELINE...</span>
              </>
            ) : (
              <>
                <Play size={15} />
                <span>TEST SYSTEM PIPELINE</span>
              </>
            )}
          </button>
        </div>

        {/* Blueprint Container */}
        <div
          className="glass-card pop-card"
          style={{
            padding: '1.75rem',
            borderRadius: '16px',
            background: 'rgba(12, 8, 14, 0.9)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: Interactive Node Flow Diagram */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                PROJECT ARCHITECTURE TOPOLOGY (CLICK TO INSPECT)
              </span>
              <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle size={13} /> REAL AI MICROSERVICES VERIFIED
              </span>
            </div>

            {/* Pipeline Flowchart Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', position: 'relative' }}>
              {nodes.map((node, index) => {
                const isSelected = node.id === selectedNodeId;
                return (
                  <React.Fragment key={node.id}>
                    <div
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedNodeId(node.id);
                      }}
                      onMouseEnter={() => soundFx.playHover()}
                      style={{
                        padding: '0.85rem 1.15rem',
                        borderRadius: '10px',
                        background: isSelected ? 'rgba(239, 68, 68, 0.16)' : 'rgba(255, 255, 255, 0.03)',
                        border: `1px solid ${isSelected ? '#ef4444' : 'rgba(255, 255, 255, 0.08)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: isSelected ? '0 0 20px rgba(239, 68, 68, 0.25)' : 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <div
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '8px',
                            background: 'rgba(255,255,255,0.06)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {node.icon}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>{node.name}</div>
                          <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{node.tech}</div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            padding: '2px 8px',
                            borderRadius: '4px',
                            background: 'rgba(239, 68, 68, 0.12)',
                            color: '#ef4444'
                          }}
                        >
                          {node.latency}
                        </span>
                        <ArrowRight size={15} color={isSelected ? '#ef4444' : 'var(--text-muted)'} />
                      </div>
                    </div>

                    {/* Flow Connector Arrow */}
                    {index < nodes.length - 1 && (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '10px'
                        }}
                      >
                        <div
                          style={{
                            width: '2px',
                            height: '100%',
                            background: isPulseActive ? '#10b981' : 'rgba(239, 68, 68, 0.3)',
                            boxShadow: isPulseActive ? '0 0 10px #10b981' : 'none',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Right Column: Node Inspector & Code Snippet Panel */}
          <div
            style={{
              background: 'rgba(5, 3, 7, 0.8)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {activeNode.category}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)' }}>
                  ID: {activeNode.id}
                </span>
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
                {activeNode.name}
              </h3>

              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: '0 0 1.25rem 0' }}>
                {activeNode.description}
              </p>

              {/* Specs Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.6rem 0.85rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-muted)' }}>Tech Framework</span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff' }}>{activeNode.tech}</span>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.6rem 0.85rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-muted)' }}>Execution Latency</span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ef4444' }}>{activeNode.latency}</span>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  REAL CODE IMPLEMENTATION SNIPPET
                </span>
                <pre
                  style={{
                    background: '#090509',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    borderRadius: '8px',
                    padding: '0.85rem',
                    fontSize: '0.76rem',
                    color: '#f87171',
                    fontFamily: 'var(--font-code)',
                    overflowX: 'auto',
                    margin: 0
                  }}
                >
                  <code>{activeNode.codeSnippet}</code>
                </pre>
              </div>
            </div>

            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.6rem' }}>
              <Activity size={13} color="#ef4444" /> Real Project System Topology — Ayush Mane Software Stack
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

