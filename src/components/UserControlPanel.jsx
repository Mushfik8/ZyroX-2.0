import { motion } from 'framer-motion'

export default function UserControlPanel({ walletAddress, connectWallet, disconnectWallet, setActiveView }) {
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
                <div className="clearance-level">CLEARANCE: LEVEL 1</div>
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

        {/* Balance Panel */}
        <div className="os-panel balance-panel">
          <div className="panel-header">
            <span className="panel-tag">ASSET REPOSITORY</span>
          </div>
          <div className="balance-display">
            <div className="balance-val">
              {walletAddress ? '1,420.50' : '0.00'}
            </div>
            <div className="balance-sym">$ZYROX</div>
          </div>
          <div className="balance-actions">
            <button className="cyber-btn sm" disabled={!walletAddress}>WITHDRAW</button>
            <button className="cyber-btn sm" disabled={!walletAddress}>STAKE</button>
          </div>
        </div>

        {/* Quick Actions / System Status */}
        <div className="os-panel quick-actions-panel">
          <div className="panel-header">
            <span className="panel-tag">QUICK OPERATIONS</span>
          </div>
          <div className="action-list">
            <button className="action-btn" onClick={() => setActiveView('tasks')}>
              <span className="action-icon" style={{ color: 'var(--neon-cyan)' }}>■</span>
              ACCESS TASK MATRIX
            </button>
            <button className="action-btn" onClick={() => setActiveView('telemetry')}>
              <span className="action-icon" style={{ color: 'var(--neon-green)' }}>▲</span>
              VIEW LIVE TELEMETRY
            </button>
            <button className="action-btn" onClick={() => setActiveView('tokenFlow')}>
              <span className="action-icon" style={{ color: 'var(--neon-orange)' }}>●</span>
              ANALYZE TOKEN FLOW
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .os-view-container { display: flex; flex-direction: column; height: 100%; max-width: 1200px; margin: 0 auto; }
        
        .control-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: auto auto;
          gap: 24px;
        }

        .id-panel { grid-column: 1 / -1; }
        .balance-panel { grid-column: 1 / 2; }
        .quick-actions-panel { grid-column: 2 / 3; }

        .panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .panel-tag { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim); letter-spacing: 2px; }
        .status { font-family: var(--font-mono); font-size: 0.7rem; padding: 4px 8px; border-radius: var(--radius-sm); border: 1px solid; }
        .status.active { color: var(--neon-green); border-color: rgba(0,255,102,0.3); background: rgba(0,255,102,0.1); }
        .status.offline { color: var(--neon-orange); border-color: rgba(255,60,0,0.3); background: rgba(255,60,0,0.1); }

        .id-details { display: flex; align-items: center; gap: 24px; }
        .avatar-placeholder { width: 64px; height: 64px; border-radius: var(--radius-md); background: rgba(0,240,255,0.1); border: 1px solid rgba(0,240,255,0.3); display: flex; align-items: center; justify-content: center; color: var(--neon-cyan); }
        .id-info { display: flex; flex-direction: column; gap: 4px; }
        .wallet-hash { font-family: var(--font-mono); font-size: 1.2rem; color: #fff; }
        .clearance-level { font-family: var(--font-mono); font-size: 0.75rem; color: var(--neon-purple); letter-spacing: 1px; }

        .offline-mode { flex-direction: column; align-items: flex-start; gap: 16px; }
        .offline-mode p { color: var(--text-dim); }

        .balance-display { display: flex; align-items: baseline; gap: 12px; margin-bottom: 32px; }
        .balance-val { font-family: var(--font-display); font-size: 3.5rem; font-weight: bold; color: #fff; text-shadow: 0 0 20px rgba(255,255,255,0.2); }
        .balance-sym { font-family: var(--font-mono); color: var(--neon-cyan); font-size: 1.2rem; }

        .balance-actions { display: flex; gap: 16px; }
        .cyber-btn.sm { padding: 8px 16px; font-size: 0.75rem; }

        .action-list { display: flex; flex-direction: column; gap: 12px; }
        .action-btn { 
          display: flex; align-items: center; gap: 16px; 
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); 
          padding: 16px; border-radius: var(--radius-md); 
          color: var(--text-main); transition: var(--tr);
          font-family: var(--font-mono); font-size: 0.85rem; letter-spacing: 1px; text-align: left;
        }
        .action-btn:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1); transform: translateX(4px); }
        .action-icon { font-size: 1.2rem; }

        @media (max-width: 900px) {
          .control-grid { grid-template-columns: 1fr; }
          .balance-panel, .quick-actions-panel { grid-column: 1 / -1; }
          .id-details { flex-direction: column; align-items: flex-start; }
          .cyber-btn.sm.warning { margin-left: 0 !important; margin-top: 16px; }
        }
      `}</style>
    </div>
  )
}
