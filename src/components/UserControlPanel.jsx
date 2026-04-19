import { useState } from 'react'
import { motion } from 'framer-motion'

export default function UserControlPanel({ walletAddress, connectWallet, disconnectWallet, setActiveView }) {
  const [xpToConvert, setXpToConvert] = useState(0)
  const [converting, setConverting] = useState(false)

  const handleConvert = () => {
    if (xpToConvert > 0) {
      setConverting(true)
      setTimeout(() => {
        setConverting(false)
        setXpToConvert(0)
      }, 2000)
    }
  }

  return (
    <div className="os-view-container">
      <h2 className="sys-title">USER CONTROL <span style={{ color: 'var(--neon-purple)' }}>PANEL</span></h2>
      
      <div className="control-grid">
        
        {/* Wallet Identity Panel */}
        <div className="os-panel id-panel">
          <div className="panel-header">
            <span className="panel-tag">IDENTITY</span>
            {walletAddress ? <span className="status active">CONNECTED</span> : <span className="status offline">OFFLINE</span>}
          </div>
          
          {walletAddress ? (
            <div className="id-details">
              <div className="avatar-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div className="id-info">
                <div className="wallet-hash">{walletAddress}</div>
                <div className="clearance-level">CLEARANCE: LEVEL 2 (OPERATOR)</div>
              </div>
              <button className="cyber-btn sm warning" onClick={disconnectWallet} style={{ marginLeft: 'auto' }}>TERMINATE LINK</button>
            </div>
          ) : (
            <div className="id-details offline-mode">
              <p>System access restricted. Secure neural link required for network operations.</p>
              <button className="cyber-btn primary" onClick={connectWallet}>ESTABLISH LINK</button>
            </div>
          )}
        </div>

        {/* How ZyroX Works Flow */}
        <div className="os-panel flow-panel">
          <div className="panel-header">
            <span className="panel-tag" style={{ color: 'var(--neon-purple)' }}>HOW ZYROX WORKS</span>
          </div>
          <div className="flow-container">
            <div className="flow-step">
              <div className="step-icon">🎮</div>
              <div className="step-text">PLAY</div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-icon">⚡</div>
              <div className="step-text">EARN XP</div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-icon">🔄</div>
              <div className="step-text">CONVERT</div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-icon">💎</div>
              <div className="step-text">ZRX</div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-icon">🏦</div>
              <div className="step-text">USE / STAKE</div>
            </div>
          </div>
        </div>

        {/* Dual Economy: XP Balance */}
        <div className="os-panel xp-panel">
          <div className="panel-header">
            <span className="panel-tag" style={{ color: 'var(--neon-purple)' }}>OFF-CHAIN ASSETS</span>
          </div>
          <div className="balance-display">
            <div className="balance-val" style={{ color: '#fff' }}>{walletAddress ? '12,450' : '0'}</div>
            <div className="balance-sym" style={{ color: 'var(--neon-purple)' }}>XP</div>
          </div>
          <p className="sys-desc">Earn XP through Tasks and Mini-Games.</p>
        </div>

        {/* Dual Economy: ZRX Balance */}
        <div className="os-panel zrx-panel">
          <div className="panel-header">
            <span className="panel-tag" style={{ color: 'var(--neon-cyan)' }}>ON-CHAIN ASSETS</span>
          </div>
          <div className="balance-display">
            <div className="balance-val" style={{ color: '#fff' }}>{walletAddress ? '1,420.50' : '0.00'}</div>
            <div className="balance-sym" style={{ color: 'var(--neon-cyan)' }}>$ZRX</div>
          </div>
          <div className="balance-actions">
            <button className="cyber-btn sm" disabled={!walletAddress} onClick={() => setActiveView('staking')}>STAKE ZRX</button>
            <button className="cyber-btn sm" disabled={!walletAddress} onClick={() => setActiveView('utility')}>MARKET</button>
          </div>
        </div>

        {/* XP to ZRX Conversion Terminal */}
        <div className="os-panel conversion-panel">
          <div className="panel-header">
            <span className="panel-tag" style={{ color: 'var(--neon-orange)' }}>SYNTHESIS PROTOCOL</span>
            <span className="cooldown-tag">RESET IN: 04:12:00</span>
          </div>
          
          <div className="conversion-ui">
            <div className="conv-input-group">
              <label>CONVERT XP</label>
              <input 
                type="number" 
                className="cyber-input" 
                value={xpToConvert} 
                onChange={(e) => setXpToConvert(e.target.value)} 
                min="0" max="12450" 
                disabled={!walletAddress || converting}
              />
            </div>
            
            <div className="conv-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-orange)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>

            <div className="conv-input-group">
              <label>RECEIVE $ZRX</label>
              <div className="conv-output">{(xpToConvert * 0.1).toFixed(2)}</div>
            </div>
          </div>
          
          <button 
            className={`cyber-btn primary full-width mt-4 ${converting ? 'loading' : ''}`}
            onClick={handleConvert}
            disabled={!walletAddress || converting || xpToConvert <= 0}
          >
            {converting ? 'SYNTHESIZING TOKENS...' : 'EXECUTE SYNTHESIS'}
          </button>
        </div>

      </div>

      <style>{`
        .os-view-container { display: flex; flex-direction: column; height: 100%; max-width: 1200px; margin: 0 auto; }
        
        .control-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .id-panel { grid-column: 1 / -1; }
        .flow-panel { grid-column: 1 / -1; }
        .xp-panel { grid-column: 1 / 2; }
        .zrx-panel { grid-column: 2 / 3; }
        .conversion-panel { grid-column: 1 / -1; }

        .panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .panel-tag { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim); letter-spacing: 2px; }
        .status { font-family: var(--font-mono); font-size: 0.7rem; padding: 4px 8px; border-radius: var(--radius-sm); border: 1px solid; }
        .status.active { color: var(--neon-green); border-color: rgba(0,255,102,0.3); background: rgba(0,255,102,0.1); }
        .status.offline { color: var(--neon-orange); border-color: rgba(255,60,0,0.3); background: rgba(255,60,0,0.1); }
        .cooldown-tag { font-family: var(--font-mono); font-size: 0.7rem; color: var(--neon-orange); border: 1px dashed var(--neon-orange); padding: 4px 8px; border-radius: 4px; }

        .id-details { display: flex; align-items: center; gap: 24px; }
        .avatar-placeholder { width: 64px; height: 64px; border-radius: var(--radius-md); background: rgba(0,240,255,0.1); border: 1px solid rgba(0,240,255,0.3); display: flex; align-items: center; justify-content: center; color: var(--neon-cyan); }
        .id-info { display: flex; flex-direction: column; gap: 4px; }
        .wallet-hash { font-family: var(--font-mono); font-size: 1.2rem; color: #fff; }
        .clearance-level { font-family: var(--font-mono); font-size: 0.75rem; color: var(--neon-purple); letter-spacing: 1px; }

        .offline-mode { flex-direction: column; align-items: flex-start; gap: 16px; }
        .offline-mode p { color: var(--text-dim); }

        .balance-display { display: flex; align-items: baseline; gap: 12px; margin-bottom: 16px; }
        .balance-val { font-family: var(--font-display); font-size: 3rem; font-weight: bold; color: #fff; text-shadow: 0 0 20px rgba(255,255,255,0.1); }
        .balance-sym { font-family: var(--font-mono); font-size: 1.2rem; font-weight: bold; }
        
        .sys-desc { font-size: 0.85rem; color: var(--text-dim); }

        .balance-actions { display: flex; gap: 16px; margin-top: 16px; }
        .cyber-btn.sm { padding: 8px 16px; font-size: 0.75rem; }

        .flow-container { display: flex; align-items: center; justify-content: space-between; height: 100%; padding: 16px 0; }
        .flow-step { display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center; flex: 1; }
        .step-icon { width: 48px; height: 48px; border-radius: 50%; background: rgba(138, 43, 226, 0.1); border: 1px solid var(--neon-purple); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 0 15px rgba(138, 43, 226, 0.2); }
        .step-text { font-size: 0.85rem; font-family: var(--font-mono); color: #fff; font-weight: bold; letter-spacing: 1px; }
        .flow-arrow { color: rgba(255,255,255,0.2); font-size: 1.5rem; margin: 0 8px; }

        .conversion-ui { display: flex; align-items: center; gap: 24px; background: rgba(0,0,0,0.4); padding: 24px; border-radius: var(--radius-md); border: 1px dashed rgba(255,255,255,0.1); }
        .conv-input-group { flex: 1; display: flex; flex-direction: column; gap: 8px; }
        .conv-input-group label { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim); }
        
        .cyber-input { background: rgba(0,0,0,0.5); border: 1px solid var(--panel-border); color: #fff; padding: 12px 16px; font-family: var(--font-mono); font-size: 1.2rem; border-radius: var(--radius-sm); outline: none; transition: var(--tr); }
        .cyber-input:focus { border-color: var(--neon-cyan); box-shadow: 0 0 10px rgba(0,240,255,0.2); }
        .conv-output { background: rgba(0,240,255,0.05); border: 1px solid rgba(0,240,255,0.2); color: var(--neon-cyan); padding: 12px 16px; font-family: var(--font-mono); font-size: 1.2rem; border-radius: var(--radius-sm); }
        
        .full-width { width: 100%; }
        .mt-4 { margin-top: 24px; }
        .cyber-btn.loading { opacity: 0.7; border-color: var(--neon-orange); color: var(--neon-orange); pointer-events: none; animation: pulse 1s infinite; }

        @media (max-width: 900px) {
          .control-grid { grid-template-columns: 1fr; }
          .xp-panel, .zrx-panel { grid-column: 1 / -1; }
          .id-details { flex-direction: column; align-items: flex-start; }
          .cyber-btn.sm.warning { margin-left: 0 !important; margin-top: 16px; }
          .conversion-ui { flex-direction: column; align-items: stretch; }
          .conv-arrow { align-self: center; transform: rotate(90deg); }
          .flow-container { flex-direction: column; gap: 16px; }
          .flow-arrow { transform: rotate(90deg); margin: 8px 0; }
        }
      `}</style>
    </div>
  )
}
