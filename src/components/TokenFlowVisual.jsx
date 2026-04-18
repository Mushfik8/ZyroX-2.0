import { motion } from 'framer-motion'

export default function TokenFlowVisual() {
  return (
    <div className="os-view-container">
      <div className="flow-header">
        <h2 className="sys-title">TOKEN <span style={{ color: 'var(--neon-orange)' }}>FLOW DYNAMICS</span></h2>
        <p className="sys-subtitle">Visual representation of the $ZYROX utility loop and smart contract settlement.</p>
      </div>

      <div className="flow-diagram os-panel">
        <svg viewBox="0 0 800 400" className="flow-svg">
          {/* Paths */}
          <path d="M 100 200 L 300 100 L 500 100 L 700 200" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M 100 200 L 300 300 L 500 300 L 700 200" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M 500 100 L 500 300" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />

          {/* Animated Particles */}
          <circle r="4" fill="var(--neon-cyan)">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 100 200 L 300 100 L 500 100 L 700 200" />
          </circle>
          <circle r="4" fill="var(--neon-purple)">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 100 200 L 300 300 L 500 300 L 700 200" begin="2s" />
          </circle>
          <circle r="4" fill="var(--neon-orange)">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 500 100 L 500 300" />
          </circle>

          {/* Nodes */}
          <g transform="translate(100, 200)">
            <circle r="30" fill="rgba(0,240,255,0.1)" stroke="var(--neon-cyan)" strokeWidth="2" />
            <text x="0" y="50" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontFamily="var(--font-mono)">USER WALLET</text>
            <text x="0" y="5" textAnchor="middle" fill="var(--neon-cyan)" fontSize="16">ID</text>
          </g>

          <g transform="translate(300, 100)">
            <rect x="-40" y="-30" width="80" height="60" rx="8" fill="rgba(138,43,226,0.1)" stroke="var(--neon-purple)" strokeWidth="2" />
            <text x="0" y="50" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontFamily="var(--font-mono)">TASK EXECUTION</text>
            <text x="0" y="5" textAnchor="middle" fill="var(--neon-purple)" fontSize="16">⌘</text>
          </g>

          <g transform="translate(300, 300)">
            <rect x="-40" y="-30" width="80" height="60" rx="8" fill="rgba(255,60,0,0.1)" stroke="var(--neon-orange)" strokeWidth="2" />
            <text x="0" y="50" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontFamily="var(--font-mono)">STAKING POOL</text>
            <text x="0" y="5" textAnchor="middle" fill="var(--neon-orange)" fontSize="16">▲</text>
          </g>

          <g transform="translate(500, 100)">
            <circle r="40" fill="rgba(0,255,102,0.1)" stroke="var(--neon-green)" strokeWidth="2" />
            <text x="0" y="-55" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontFamily="var(--font-mono)">SMART CONTRACT</text>
            <text x="0" y="5" textAnchor="middle" fill="var(--neon-green)" fontSize="14" fontFamily="var(--font-mono)">VERIFY</text>
          </g>

          <g transform="translate(500, 300)">
            <circle r="30" fill="rgba(0,255,102,0.1)" stroke="var(--neon-green)" strokeWidth="2" />
            <text x="0" y="50" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontFamily="var(--font-mono)">YIELD GEN</text>
            <text x="0" y="5" textAnchor="middle" fill="var(--neon-green)" fontSize="16">%</text>
          </g>

          <g transform="translate(700, 200)">
            <polygon points="0,-30 30,0 0,30 -30,0" fill="rgba(0,240,255,0.1)" stroke="var(--neon-cyan)" strokeWidth="2" />
            <text x="0" y="50" textAnchor="middle" fill="var(--text-main)" fontSize="12" fontFamily="var(--font-mono)">REWARD PAYOUT</text>
            <text x="0" y="5" textAnchor="middle" fill="var(--neon-cyan)" fontSize="12" fontFamily="var(--font-mono)">$ZYROX</text>
          </g>
        </svg>
      </div>

      <style>{`
        .os-view-container { display: flex; flex-direction: column; height: 100%; max-width: 1200px; margin: 0 auto; }
        .flow-header { margin-bottom: 32px; }
        .sys-subtitle { color: var(--text-dim); font-size: 0.9rem; }
        .flow-diagram { 
          flex: 1; min-height: 400px; 
          display: flex; align-items: center; justify-content: center;
          background-image: radial-gradient(circle at center, rgba(138,43,226,0.1) 0%, transparent 70%);
        }
        .flow-svg { width: 100%; height: 100%; max-height: 500px; }
      `}</style>
    </div>
  )
}
