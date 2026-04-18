import { motion } from 'framer-motion'

export default function ProgressionSystem() {
  const levels = [
    { level: 1, title: 'INITIATE', xp: '0 - 1,000 XP', unlocks: 'Basic Task Access, Standard Yields', status: 'active' },
    { level: 2, title: 'OPERATOR', xp: '1,000 - 5,000 XP', unlocks: 'Priority Matrix, 1.2x Yield Multiplier', status: 'locked' },
    { level: 3, title: 'VALIDATOR', xp: '5,000 - 20,000 XP', unlocks: 'Governance Voting, Node Deployment', status: 'locked' },
    { level: 4, title: 'PRIME NODE', xp: '20,000+ XP', unlocks: 'Profit Sharing, Direct Protocol Access', status: 'locked' }
  ]

  return (
    <div className="os-view-container">
      <div className="progression-header">
        <h2 className="sys-title">SYSTEM <span style={{ color: 'var(--neon-purple)' }}>EVOLUTION</span></h2>
        <div className="xp-bar-container">
          <div className="xp-info">
            <span>CURRENT XP: <strong style={{ color: 'var(--neon-cyan)' }}>340</strong></span>
            <span>NEXT THRESHOLD: <strong>1,000</strong></span>
          </div>
          <div className="xp-bar-bg">
            <motion.div className="xp-bar-fill" initial={{ width: 0 }} animate={{ width: '34%' }} transition={{ duration: 1, delay: 0.2 }} />
          </div>
        </div>
      </div>

      <div className="levels-grid">
        {levels.map((lvl, i) => (
          <motion.div 
            key={lvl.level}
            className={`os-panel level-card ${lvl.status}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="level-num">LVL 0{lvl.level}</div>
            <div className="level-content">
              <h3>{lvl.title}</h3>
              <div className="xp-req">{lvl.xp}</div>
              <div className="unlocks">
                <span className="unlock-label">SYSTEM UNLOCKS:</span>
                <p>{lvl.unlocks}</p>
              </div>
            </div>
            {lvl.status === 'active' ? (
              <div className="status-badge active">CURRENT TIER</div>
            ) : (
              <div className="status-badge locked">LOCKED</div>
            )}
          </motion.div>
        ))}
      </div>

      <style>{`
        .os-view-container { display: flex; flex-direction: column; height: 100%; max-width: 1200px; margin: 0 auto; }
        
        .progression-header { margin-bottom: 40px; }
        
        .xp-bar-container { max-width: 600px; margin-top: 24px; padding: 16px; background: rgba(0,240,255,0.05); border: 1px solid rgba(0,240,255,0.2); border-radius: var(--radius-sm); }
        .xp-info { display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-main); margin-bottom: 8px; }
        .xp-bar-bg { width: 100%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden; }
        .xp-bar-fill { height: 100%; background: var(--neon-cyan); box-shadow: 0 0 10px var(--neon-cyan); }

        .levels-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; padding-bottom: 40px; }
        
        .level-card { display: flex; flex-direction: column; position: relative; overflow: hidden; }
        .level-card.locked { opacity: 0.5; filter: grayscale(80%); }
        .level-card.active { border-color: var(--neon-purple); box-shadow: 0 0 20px rgba(138,43,226,0.15); }
        .level-card.active::before { background: linear-gradient(90deg, transparent, var(--neon-purple), transparent); }

        .level-num { font-family: var(--font-display); font-size: 4rem; font-weight: 700; color: rgba(255,255,255,0.05); position: absolute; right: 10px; top: -10px; line-height: 1; pointer-events: none; }
        
        .level-content { position: relative; z-index: 1; flex: 1; }
        .level-content h3 { font-size: 1.5rem; color: #fff; margin-bottom: 4px; letter-spacing: 2px; }
        .xp-req { font-family: var(--font-mono); font-size: 0.8rem; color: var(--neon-cyan); margin-bottom: 24px; }
        
        .unlocks { margin-top: auto; }
        .unlock-label { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); display: block; margin-bottom: 4px; }
        .unlocks p { font-size: 0.9rem; color: var(--text-dim); line-height: 1.5; }

        .status-badge { align-self: flex-start; margin-top: 24px; font-family: var(--font-mono); font-size: 0.7rem; padding: 4px 8px; border-radius: var(--radius-sm); border: 1px solid; }
        .status-badge.active { color: var(--neon-purple); border-color: rgba(138,43,226,0.5); background: rgba(138,43,226,0.1); }
        .status-badge.locked { color: var(--text-muted); border-color: rgba(255,255,255,0.1); background: rgba(0,0,0,0.5); }
      `}</style>
    </div>
  )
}
