import { useState, useEffect } from 'react'

export default function NetworkGrid() {
  const [nodes, setNodes] = useState([])

  // Generate random community nodes
  useEffect(() => {
    const generated = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      pulseDelay: Math.random() * 3,
      type: Math.random() > 0.8 ? 'super' : 'standard'
    }))
    setNodes(generated)
  }, [])

  return (
    <div className="os-view-container">
      <div className="network-header">
        <h2 className="sys-title">DECENTRALIZED <span style={{ color: 'var(--neon-cyan)' }}>NETWORK</span></h2>
        <div className="network-stats">
          <div className="stat-pill">
            <span className="dot online" /> 42,891 ACTIVE NODES
          </div>
          <div className="stat-pill">
            <span className="dot twitter" /> 12,045 TWITTER LINKS
          </div>
          <div className="stat-pill">
            <span className="dot discord" /> 30,846 DISCORD UPLINKS
          </div>
        </div>
      </div>

      <div className="network-map-container os-panel">
        <div className="map-overlay-grid" />
        
        {nodes.map(node => (
          <div 
            key={node.id} 
            className={`network-node ${node.type}`}
            style={{ 
              left: `${node.x}%`, 
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              animationDelay: `${node.pulseDelay}s`
            }}
          />
        ))}

        {/* Decorative scanning line */}
        <div className="scanner-line" />
      </div>

      <style>{`
        .os-view-container { display: flex; flex-direction: column; height: 100%; max-width: 1200px; margin: 0 auto; }
        .network-header { margin-bottom: 32px; display: flex; flex-direction: column; align-items: flex-start; }
        
        .network-stats { display: flex; gap: 16px; margin-top: 16px; flex-wrap: wrap; }
        .stat-pill { 
          display: flex; align-items: center; gap: 8px;
          background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1);
          padding: 6px 12px; border-radius: 20px;
          font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim);
        }
        .stat-pill .dot { width: 8px; height: 8px; border-radius: 50%; }
        .dot.online { background: var(--neon-green); box-shadow: 0 0 8px var(--neon-green); }
        .dot.twitter { background: #1DA1F2; box-shadow: 0 0 8px #1DA1F2; }
        .dot.discord { background: #5865F2; box-shadow: 0 0 8px #5865F2; }

        .network-map-container {
          flex: 1; min-height: 500px;
          position: relative; overflow: hidden;
          background: radial-gradient(circle at center, rgba(0,240,255,0.05) 0%, transparent 80%);
          border-color: rgba(0,240,255,0.2);
        }

        .map-overlay-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(0,240,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.3; pointer-events: none;
        }

        .network-node {
          position: absolute; border-radius: 50%;
          background: var(--neon-cyan);
          box-shadow: 0 0 10px var(--neon-cyan);
          transform: translate(-50%, -50%);
          animation: nodePulse 3s infinite;
        }
        .network-node.super {
          background: var(--neon-purple); box-shadow: 0 0 15px var(--neon-purple);
          width: 8px !important; height: 8px !important;
          animation: superNodePulse 2s infinite;
        }

        @keyframes nodePulse {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.5); }
        }
        @keyframes superNodePulse {
          0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(2); box-shadow: 0 0 30px var(--neon-purple); }
        }

        .scanner-line {
          position: absolute; left: 0; width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,240,255,0.8), transparent);
          box-shadow: 0 0 20px rgba(0,240,255,0.5);
          animation: scan 6s linear infinite;
        }

        @keyframes scan {
          0% { top: -10px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  )
}
