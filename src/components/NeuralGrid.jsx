import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const roadmapNodes = [
  { id: 'n1', title: 'CORE PROTOCOL', desc: 'Smart contract deployment on BSC. Initial security audits and testnet launch.', status: 'completed', x: 20, y: 30 },
  { id: 'n2', title: 'YIELD ENGINE V1', desc: 'Activation of the base task-reward algorithm. Early adopters can begin earning $ZYROX.', status: 'active', x: 50, y: 15 },
  { id: 'n3', title: 'CROSS-CHAIN BRIDGE', desc: 'Expanding the neural network to Ethereum and Polygon for multi-chain liquidity.', status: 'locked', x: 80, y: 30 },
  { id: 'n4', title: 'AI TASK ORACLE', desc: 'Integration of machine learning algorithms to automatically verify off-chain task completion.', status: 'locked', x: 35, y: 60 },
  { id: 'n5', title: 'METAVERSE INTEGRATION', desc: '3D avatars and virtual environments powered by the ZyroX ecosystem.', status: 'locked', x: 70, y: 70 },
]

export default function NeuralGrid() {
  const [activeNode, setActiveNode] = useState(roadmapNodes[1])

  return (
    <section className="system-node" id="roadmap">
      <div className="node-container">
        
        <div className="grid-header">
          <span className="sys-badge">NODE 04 // DEVELOPMENT VECTOR</span>
          <h2 className="sys-title">NEURAL <span style={{ color: 'var(--neon-orange)' }}>GRID</span></h2>
          <p className="sys-subtitle">
            Traditional roadmaps are linear. ZyroX expands multidimensionally. 
            Select a neural node to view expansion parameters.
          </p>
        </div>

        <div className="neural-layout">
          
          <div className="grid-map holo-panel">
            {/* SVG Lines connecting nodes */}
            <svg className="connecting-lines" width="100%" height="100%">
              <line x1="20%" y1="30%" x2="50%" y2="15%" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="50%" y1="15%" x2="80%" y2="30%" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="50%" y1="15%" x2="35%" y2="60%" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="35%" y1="60%" x2="70%" y2="70%" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" strokeDasharray="5,5" />
            </svg>

            {roadmapNodes.map((node) => (
              <div 
                key={node.id}
                className={`map-node ${node.status} ${activeNode.id === node.id ? 'selected' : ''}`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onClick={() => setActiveNode(node)}
              >
                <div className="node-core" />
                <div className="node-pulse" />
                <div className="node-label">{node.title}</div>
              </div>
            ))}
          </div>

          <div className="node-details holo-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="detail-content"
              >
                <div className="detail-status">
                  STATUS: <span className={activeNode.status}>{activeNode.status.toUpperCase()}</span>
                </div>
                <h3>{activeNode.title}</h3>
                <p>{activeNode.desc}</p>
                
                <div className="detail-meta">
                  <div className="meta-block">
                    <span className="meta-label">NODE ID</span>
                    <span className="meta-val">{activeNode.id.toUpperCase()}</span>
                  </div>
                  <div className="meta-block">
                    <span className="meta-label">ENCRYPTION</span>
                    <span className="meta-val">AES-256</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

      <style>{`
        .grid-header { text-align: center; margin-bottom: 60px; display: flex; flex-direction: column; align-items: center; }
        
        .neural-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
          height: 500px;
        }

        .grid-map {
          position: relative;
          background-image: 
            linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: center center;
        }

        .connecting-lines {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
        }

        .map-node {
          position: absolute;
          z-index: 2;
          transform: translate(-50%, -50%);
          cursor: pointer;
          display: flex; flex-direction: column; align-items: center; gap: 8px;
        }

        .node-core {
          width: 16px; height: 16px;
          border-radius: 50%;
          background: var(--text-muted);
          border: 2px solid var(--bg-surface);
          position: relative; z-index: 2;
          transition: var(--tr);
        }

        .node-pulse {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 16px; height: 16px;
          border-radius: 50%;
          background: transparent;
          z-index: 1;
        }

        .map-node.completed .node-core { background: var(--neon-cyan); box-shadow: 0 0 10px var(--neon-cyan); }
        .map-node.active .node-core { background: var(--neon-orange); box-shadow: 0 0 10px var(--neon-orange); }
        .map-node.active .node-pulse { background: var(--neon-orange); animation: pulseOrange 2s infinite; }
        
        .map-node:hover .node-core { transform: scale(1.5); }
        .map-node.selected .node-core { border-color: #fff; transform: scale(1.5); box-shadow: 0 0 20px #fff; }

        .node-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-dim);
          text-align: center;
          background: rgba(0,0,0,0.8);
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.1);
          white-space: nowrap;
          pointer-events: none;
          transition: var(--tr);
        }
        
        .map-node.selected .node-label { color: #fff; border-color: rgba(255,255,255,0.3); }

        @keyframes pulseOrange {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
        }

        .node-details {
          display: flex; flex-direction: column; justify-content: center;
        }

        .detail-status {
          font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim);
          margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px dashed rgba(255,255,255,0.1);
        }
        .detail-status span.completed { color: var(--neon-cyan); }
        .detail-status span.active { color: var(--neon-orange); }
        .detail-status span.locked { color: var(--text-muted); }

        .detail-content h3 { font-size: 1.5rem; margin-bottom: 16px; color: #fff; }
        .detail-content p { color: var(--text-dim); line-height: 1.7; margin-bottom: 32px; font-size: 0.95rem; }

        .detail-meta { display: flex; gap: 24px; }
        .meta-block { display: flex; flex-direction: column; gap: 4px; }
        .meta-label { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); }
        .meta-val { font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-main); }

        @media (max-width: 1024px) {
          .neural-layout { grid-template-columns: 1fr; height: auto; }
          .grid-map { height: 350px; }
        }
        @media (max-width: 480px) {
          .map-node { transform: translate(-50%, -50%) scale(0.8); }
          .node-label { display: none; }
        }
      `}</style>
    </section>
  )
}
