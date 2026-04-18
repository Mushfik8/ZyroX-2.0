import { motion } from 'framer-motion'

export default function SecurityProtocol() {
  return (
    <div className="os-view-container">
      <div className="security-header">
        <h2 className="sys-title">SYSTEM <span style={{ color: 'var(--neon-green)' }}>INTEGRITY</span></h2>
        <p className="sys-subtitle">Real-time cryptographic verification and audit logging protocol.</p>
      </div>

      <div className="security-layout">
        
        <div className="sec-main os-panel">
          <div className="sec-icon-large">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3>SMART CONTRACT AUDIT</h3>
          <p>The ZyroX core protocol is undergoing rigorous static analysis and manual review by top-tier Web3 security firms. Multi-signature governance prevents unilateral state changes.</p>
          
          <div className="sec-data-grid">
            <div className="sec-data-item">
              <span className="label">AUDITOR</span>
              <span className="val">CERTIK</span>
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
        </div>

        <div className="sec-side">
          <div className="os-panel log-panel">
            <div className="log-header">
              <span className="log-pulse" /> LIVE SECURITY LOGS
            </div>
            <div className="log-list">
              <div className="log-entry">
                <span className="log-time">14:02:45</span>
                <span className="log-msg">[BSC] Validated yield distribution block #492811</span>
              </div>
              <div className="log-entry">
                <span className="log-time">14:02:40</span>
                <span className="log-msg">[ORACLE] Neural network sync successful</span>
              </div>
              <div className="log-entry warning">
                <span className="log-time">14:02:22</span>
                <span className="log-msg">[WARN] Invalid signature rejected from Node 7A</span>
              </div>
              <div className="log-entry">
                <span className="log-time">14:01:55</span>
                <span className="log-msg">[CORE] Liquidity pool rebalance executed</span>
              </div>
              <div className="log-entry">
                <span className="log-time">14:01:10</span>
                <span className="log-msg">[BSC] Smart contract health check: OK</span>
              </div>
            </div>
          </div>

          <div className="os-panel sec-card">
            <h4>DECENTRALIZED COMPUTE</h4>
            <p>Task validation occurs across a distributed network of nodes, ensuring zero point of failure.</p>
          </div>
        </div>

      </div>

      <style>{`
        .os-view-container { display: flex; flex-direction: column; height: 100%; max-width: 1200px; margin: 0 auto; }
        .security-header { margin-bottom: 32px; }

        .security-layout {
          display: grid; grid-template-columns: 1fr 1fr; gap: 24px; padding-bottom: 40px;
        }

        .sec-main {
          display: flex; flex-direction: column; align-items: flex-start;
          background: linear-gradient(135deg, rgba(0, 255, 102, 0.05), transparent);
          border-color: rgba(0, 255, 102, 0.2);
        }

        .sec-icon-large {
          width: 64px; height: 64px;
          border-radius: var(--radius-md);
          background: rgba(0, 255, 102, 0.1);
          border: 1px solid rgba(0, 255, 102, 0.3);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px; box-shadow: 0 0 20px rgba(0, 255, 102, 0.1);
        }

        .sec-main h3 { font-size: 1.5rem; color: #fff; margin-bottom: 16px; }
        .sec-main p { color: var(--text-dim); line-height: 1.8; margin-bottom: 32px; font-size: 0.95rem; }

        .sec-data-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; width: 100%;
        }
        .sec-data-item {
          display: flex; flex-direction: column; gap: 8px; padding: 16px;
          background: rgba(0,0,0,0.4); border: 1px dashed rgba(255,255,255,0.1); border-radius: var(--radius-sm);
        }
        .sec-data-item .label { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); }
        .sec-data-item .val { font-family: var(--font-mono); font-size: 0.8rem; color: var(--neon-green); font-weight: bold; }

        .sec-side { display: flex; flex-direction: column; gap: 24px; }
        
        .log-panel { flex: 1; display: flex; flex-direction: column; border-color: rgba(0,240,255,0.2); }
        .log-header { font-family: var(--font-mono); font-size: 0.8rem; color: var(--neon-cyan); margin-bottom: 16px; display: flex; align-items: center; gap: 8px; border-bottom: 1px dashed rgba(0,240,255,0.2); padding-bottom: 12px; }
        .log-pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--neon-cyan); box-shadow: 0 0 8px var(--neon-cyan); animation: pulse 2s infinite; }
        
        .log-list { display: flex; flex-direction: column; gap: 12px; font-family: var(--font-mono); font-size: 0.75rem; }
        .log-entry { display: flex; gap: 12px; color: var(--text-dim); }
        .log-entry.warning { color: var(--neon-orange); }
        .log-time { color: var(--text-muted); }
        .log-msg { flex: 1; }

        .sec-card { padding: 24px; }
        .sec-card h4 { font-size: 1.1rem; color: #fff; margin-bottom: 8px; }
        .sec-card p { font-size: 0.85rem; color: var(--text-dim); line-height: 1.6; margin: 0; }

        @media (max-width: 1024px) {
          .security-layout { grid-template-columns: 1fr; }
          .sec-data-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
