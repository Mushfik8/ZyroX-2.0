import { useState } from 'react'

export default function StakingVault() {
  const [stakeAmount, setStakeAmount] = useState('')
  const [activeTab, setActiveTab] = useState('stake') // stake, unstake

  return (
    <div className="os-view-container">
      
      <div className="vault-header">
        <h2 className="sys-title">STAKING <span style={{ color: 'var(--neon-green)' }}>VAULT</span></h2>
        <p className="sys-desc">Lock $ZRX to secure the network and generate yield.</p>
      </div>

      <div className="vault-grid">
        
        {/* Stats Panel */}
        <div className="os-panel stats-panel">
          <div className="stat-row">
            <span className="stat-label">CURRENT APY</span>
            <span className="stat-val highlight">145.2%</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">TOTAL VALUE LOCKED</span>
            <span className="stat-val">$12,450,890</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">YOUR STAKED ZRX</span>
            <span className="stat-val">5,000.00</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">PENDING REWARDS</span>
            <span className="stat-val highlight-purple">+124.50 ZRX</span>
          </div>
          <button className="cyber-btn sm full-width mt-4">CLAIM REWARDS</button>
        </div>

        {/* Interaction Panel */}
        <div className="os-panel action-panel">
          <div className="action-tabs">
            <button className={`tab-btn ${activeTab === 'stake' ? 'active' : ''}`} onClick={() => setActiveTab('stake')}>LOCK ZRX</button>
            <button className={`tab-btn ${activeTab === 'unstake' ? 'active' : ''}`} onClick={() => setActiveTab('unstake')}>UNLOCK ZRX</button>
          </div>

          <div className="action-body">
            <div className="input-header">
              <span>AMOUNT</span>
              <span>BALANCE: {activeTab === 'stake' ? '1,420.50' : '5,000.00'} ZRX</span>
            </div>
            
            <div className="input-wrapper">
              <input 
                type="number" 
                className="vault-input" 
                placeholder="0.00" 
                value={stakeAmount} 
                onChange={(e) => setStakeAmount(e.target.value)} 
              />
              <button className="max-btn" onClick={() => setStakeAmount(activeTab === 'stake' ? '1420.50' : '5000')}>MAX</button>
            </div>

            {activeTab === 'stake' ? (
              <div className="lock-info">
                <span>LOCK PERIOD</span>
                <span className="lock-time">14 DAYS</span>
              </div>
            ) : (
              <div className="lock-info warning">
                <span>EARLY UNLOCK PENALTY</span>
                <span className="lock-time">10% FEE</span>
              </div>
            )}

            <button className={`cyber-btn primary full-width mt-4 ${activeTab === 'unstake' ? 'warning' : ''}`}>
              {activeTab === 'stake' ? 'AUTHORIZE LOCK' : 'INITIATE WITHDRAWAL'}
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .os-view-container { display: flex; flex-direction: column; height: 100%; max-width: 1000px; margin: 0 auto; }
        
        .vault-header { margin-bottom: 40px; }
        .sys-desc { color: var(--text-dim); }

        .vault-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 24px; }

        .stats-panel { display: flex; flex-direction: column; gap: 24px; border-color: rgba(0,255,102,0.2); }
        .stat-row { display: flex; flex-direction: column; gap: 4px; padding-bottom: 16px; border-bottom: 1px dashed rgba(255,255,255,0.1); }
        .stat-row:last-of-type { border-bottom: none; padding-bottom: 0; }
        
        .stat-label { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); }
        .stat-val { font-family: var(--font-mono); font-size: 1.5rem; color: #fff; font-weight: bold; }
        .stat-val.highlight { color: var(--neon-green); text-shadow: 0 0 10px rgba(0,255,102,0.3); }
        .stat-val.highlight-purple { color: var(--neon-purple); text-shadow: 0 0 10px rgba(138,43,226,0.3); }

        .action-panel { display: flex; flex-direction: column; }
        .action-tabs { display: flex; margin-bottom: 32px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .tab-btn { flex: 1; background: none; color: var(--text-dim); padding: 16px; transition: var(--tr); font-size: 0.9rem; position: relative; }
        .tab-btn:hover { color: #fff; background: rgba(255,255,255,0.02); }
        .tab-btn.active { color: var(--neon-green); }
        .tab-btn.active::after { content: ''; position: absolute; bottom: -1px; left: 0; width: 100%; height: 2px; background: var(--neon-green); box-shadow: 0 0 10px var(--neon-green); }

        .action-body { flex: 1; display: flex; flex-direction: column; }
        .input-header { display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim); margin-bottom: 8px; }
        
        .input-wrapper { position: relative; margin-bottom: 24px; }
        .vault-input { width: 100%; background: rgba(0,0,0,0.5); border: 1px solid var(--panel-border); border-radius: var(--radius-sm); padding: 16px; padding-right: 80px; color: #fff; font-family: var(--font-mono); font-size: 1.5rem; outline: none; transition: var(--tr); }
        .vault-input:focus { border-color: var(--neon-green); box-shadow: 0 0 10px rgba(0,255,102,0.1); }
        .max-btn { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: rgba(0,255,102,0.1); color: var(--neon-green); border: 1px solid rgba(0,255,102,0.3); padding: 4px 12px; border-radius: 4px; font-size: 0.7rem; }
        .max-btn:hover { background: rgba(0,255,102,0.2); }

        .lock-info { display: flex; justify-content: space-between; padding: 16px; background: rgba(255,255,255,0.02); border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-dim); }
        .lock-info.warning { background: rgba(255,60,0,0.05); color: var(--neon-orange); border: 1px dashed rgba(255,60,0,0.2); }
        .lock-time { color: #fff; font-weight: bold; }

        .full-width { width: 100%; }
        .mt-4 { margin-top: 32px; }

        @media (max-width: 900px) {
          .vault-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
