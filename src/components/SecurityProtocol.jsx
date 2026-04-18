import { motion } from 'framer-motion'

export default function SecurityProtocol() {
  return (
    <section className="system-node" id="security">
      <div className="node-container">
        
        <div className="security-header">
          <span className="sys-badge" style={{ color: 'var(--neon-green)', borderColor: 'rgba(0, 255, 102, 0.3)', background: 'rgba(0, 255, 102, 0.05)' }}>
            NODE 05 // SECURITY PROTOCOL
          </span>
          <h2 className="sys-title">SYSTEM <span style={{ color: 'var(--neon-purple)' }}>INTEGRITY</span></h2>
        </div>

        <div className="security-layout">
          
          <div className="sec-main holo-panel">
            <div className="sec-icon-large">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3>SMART CONTRACT AUDIT</h3>
            <p>The ZyroX core protocol is undergoing rigorous static analysis and manual review by top-tier Web3 security firms. Multi-signature governance prevents unilateral state changes.</p>
            
            <div className="sec-data-grid">
              <div className="sec-data-item">
                <span className="label">AUDITOR</span>
                <span className="val">CERTIK (PENDING)</span>
              </div>
              <div className="sec-data-item">
                <span className="label">GOVERNANCE</span>
                <span className="val">5/7 MULTISIG</span>
              </div>
              <div className="sec-data-item">
                <span className="label">TIMELOCK</span>
                <span className="val">48 HOURS</span>
              </div>
            </div>
            
            <button className="cyber-btn" style={{ marginTop: '32px' }}>VIEW AUDIT REPORT</button>
          </div>

          <div className="sec-side">
            <div className="holo-panel sec-card">
              <div className="sec-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <div>
                <h4>DECENTRALIZED COMPUTE</h4>
                <p>Task validation occurs across a distributed network of nodes, ensuring zero point of failure.</p>
              </div>
            </div>

            <div className="holo-panel sec-card">
              <div className="sec-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-purple)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              </div>
              <div>
                <h4>TRANSPARENT LEDGER</h4>
                <p>Every yield distribution and task reward is cryptographically verifiable on the BNB Smart Chain.</p>
              </div>
            </div>

            <div className="holo-panel sec-card">
              <div className="sec-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-orange)" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <h4>LIQUIDITY LOCK</h4>
                <p>Initial DEX liquidity is locked within automated smart contracts to prevent rug pulls.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .security-header { text-align: left; margin-bottom: 40px; }

        .security-layout {
          display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
        }

        .sec-main {
          display: flex; flex-direction: column; align-items: flex-start;
          background: linear-gradient(135deg, rgba(0, 255, 102, 0.05), transparent);
          border-color: rgba(0, 255, 102, 0.2);
        }
        
        .sec-main::before {
          background: linear-gradient(90deg, transparent, var(--neon-green), transparent);
        }

        .sec-icon-large {
          width: 80px; height: 80px;
          border-radius: var(--radius-md);
          background: rgba(0, 255, 102, 0.1);
          border: 1px solid rgba(0, 255, 102, 0.3);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
          box-shadow: 0 0 20px rgba(0, 255, 102, 0.1);
        }

        .sec-main h3 { font-size: 1.5rem; color: #fff; margin-bottom: 16px; }
        .sec-main p { color: var(--text-dim); line-height: 1.8; margin-bottom: 32px; font-size: 0.95rem; }

        .sec-data-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; width: 100%;
        }

        .sec-data-item {
          display: flex; flex-direction: column; gap: 8px;
          padding: 16px;
          background: rgba(0,0,0,0.4);
          border: 1px dashed rgba(255,255,255,0.1);
          border-radius: var(--radius-sm);
        }

        .sec-data-item .label { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); }
        .sec-data-item .val { font-family: var(--font-mono); font-size: 0.8rem; color: var(--neon-green); font-weight: bold; }

        .sec-side { display: flex; flex-direction: column; gap: 16px; }
        
        .sec-card {
          display: flex; align-items: flex-start; gap: 20px;
          padding: 24px;
        }

        .sec-card-icon {
          width: 48px; height: 48px;
          border-radius: var(--radius-sm);
          background: rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .sec-card h4 { font-size: 1.1rem; color: #fff; margin-bottom: 8px; }
        .sec-card p { font-size: 0.85rem; color: var(--text-dim); line-height: 1.6; margin: 0; }

        @media (max-width: 1024px) {
          .security-layout { grid-template-columns: 1fr; }
          .sec-data-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
