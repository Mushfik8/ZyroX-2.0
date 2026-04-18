import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const games = [
  { id: 'g1', title: 'NEURAL REACTION', desc: 'Test your reflex limits. Click the node when it turns neon green.', xpPool: '50 - 200 XP', icon: '⚡' },
  { id: 'g2', title: 'CLICK VELOCITY', desc: 'Achieve maximum APM (Actions Per Minute) within 10 seconds.', xpPool: '100 - 300 XP', icon: '🖱️' },
  { id: 'g3', title: 'MARKET ORACLE', desc: 'Predict the 1-minute price direction of major crypto assets.', xpPool: '500 XP', icon: '📈' }
]

export default function PlayToEarn() {
  const [activeGame, setActiveGame] = useState(null)
  const [gameState, setGameState] = useState('idle') // idle, playing, complete

  const handlePlay = (id) => {
    setActiveGame(id)
    setGameState('playing')
    // Simulate a 3 second game for demo purposes
    setTimeout(() => {
      setGameState('complete')
    }, 3000)
  }

  const closeGame = () => {
    setActiveGame(null)
    setGameState('idle')
  }

  return (
    <div className="os-view-container">
      
      <div className="pte-header">
        <h2 className="sys-title">PLAY-TO-<span style={{ color: 'var(--neon-purple)' }}>EARN</span></h2>
        <p className="sys-desc">Execute gamified protocols to generate off-chain XP.</p>
        <div className="cooldown-tag">DAILY ENERGY: 100/100</div>
      </div>

      {!activeGame ? (
        <div className="games-grid">
          {games.map(game => (
            <motion.div key={game.id} className="os-panel game-card" whileHover={{ y: -5 }}>
              <div className="game-icon">{game.icon}</div>
              <h3>{game.title}</h3>
              <p>{game.desc}</p>
              <div className="game-reward">
                <span className="label">REWARD POOL</span>
                <span className="val">{game.xpPool}</span>
              </div>
              <button className="cyber-btn primary full-width" onClick={() => handlePlay(game.id)}>INITIALIZE</button>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div className="os-panel active-game-interface" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="game-overlay-header">
            <h3>{games.find(g => g.id === activeGame)?.title}</h3>
            <button className="cyber-btn sm warning" onClick={closeGame}>ABORT</button>
          </div>
          
          <div className="game-screen">
            <AnimatePresence mode="wait">
              {gameState === 'playing' ? (
                <motion.div key="playing" className="game-sim playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="spinner" />
                  <p>EXECUTING PROTOCOL...</p>
                </motion.div>
              ) : (
                <motion.div key="complete" className="game-sim complete" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="success-icon">✓</div>
                  <h4>PROTOCOL COMPLETE</h4>
                  <p className="xp-earned">+ 150 XP</p>
                  <button className="cyber-btn" onClick={closeGame}>RETURN TO HUB</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      <style>{`
        .os-view-container { display: flex; flex-direction: column; height: 100%; max-width: 1200px; margin: 0 auto; }
        
        .pte-header { display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 40px; }
        .sys-desc { color: var(--text-dim); margin-bottom: 16px; }
        .cooldown-tag { font-family: var(--font-mono); font-size: 0.8rem; color: var(--neon-green); border: 1px dashed var(--neon-green); padding: 4px 12px; border-radius: 4px; }

        .games-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; padding-bottom: 40px; }
        
        .game-card { display: flex; flex-direction: column; align-items: flex-start; padding: 32px; border-color: rgba(138,43,226,0.2); }
        .game-card:hover { border-color: var(--neon-purple); box-shadow: 0 0 20px rgba(138,43,226,0.15); }
        
        .game-icon { font-size: 3rem; margin-bottom: 24px; }
        .game-card h3 { font-size: 1.4rem; color: #fff; margin-bottom: 12px; }
        .game-card p { font-size: 0.9rem; color: var(--text-dim); line-height: 1.5; margin-bottom: 24px; flex: 1; }
        
        .game-reward { display: flex; flex-direction: column; margin-bottom: 24px; width: 100%; padding: 12px; background: rgba(0,0,0,0.5); border-radius: var(--radius-sm); border: 1px dashed rgba(255,255,255,0.1); }
        .game-reward .label { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); }
        .game-reward .val { font-family: var(--font-mono); font-size: 1rem; color: var(--neon-purple); font-weight: bold; }

        .full-width { width: 100%; }

        .active-game-interface { flex: 1; display: flex; flex-direction: column; margin-bottom: 40px; border-color: var(--neon-cyan); }
        .game-overlay-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 16px; border-bottom: 1px dashed rgba(255,255,255,0.1); margin-bottom: 24px; }
        .game-overlay-header h3 { color: #fff; font-size: 1.5rem; }

        .game-screen { flex: 1; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.6); border-radius: var(--radius-md); border: 1px solid rgba(0,240,255,0.1); min-height: 400px; }
        
        .game-sim { display: flex; flex-direction: column; align-items: center; gap: 24px; }
        .game-sim.playing p { font-family: var(--font-mono); color: var(--neon-cyan); letter-spacing: 2px; animation: pulse 1s infinite; }
        
        .spinner { width: 50px; height: 50px; border: 4px solid rgba(0,240,255,0.1); border-top-color: var(--neon-cyan); border-radius: 50%; animation: spin 1s linear infinite; }
        
        .success-icon { width: 64px; height: 64px; border-radius: 50%; background: rgba(0,255,102,0.1); border: 2px solid var(--neon-green); color: var(--neon-green); display: flex; align-items: center; justify-content: center; font-size: 2rem; }
        .game-sim.complete h4 { color: #fff; font-size: 1.5rem; letter-spacing: 2px; }
        .xp-earned { font-family: var(--font-mono); font-size: 2rem; color: var(--neon-purple); font-weight: bold; text-shadow: 0 0 15px rgba(138,43,226,0.5); }

        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      `}</style>
    </div>
  )
}
