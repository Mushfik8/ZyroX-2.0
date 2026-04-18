export default function Footer() {
  return (
    <footer className="cyber-footer">
      <div className="node-container">
        
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <span>ZYROX</span>
            </div>
            <p>The neural infrastructure for Web3 earning. Execute tasks, validate operations, and extract yield through decentralized protocols.</p>
          </div>
          
          <div className="footer-links">
            <div className="link-col">
              <h4>SYSTEM</h4>
              <a href="#command">Command Center</a>
              <a href="#tasks">Task Matrix</a>
              <a href="#data">Telemetry</a>
              <a href="#roadmap">Neural Grid</a>
            </div>
            <div className="link-col">
              <h4>PROTOCOL</h4>
              <a href="#">Whitepaper</a>
              <a href="#security">Security Audit</a>
              <a href="#">Tokenomics</a>
              <a href="#">Governance</a>
            </div>
            <div className="link-col">
              <h4>NETWORK</h4>
              <a href="#">Twitter Node</a>
              <a href="#">Discord Server</a>
              <a href="#">Telegram Comm</a>
              <a href="#">Github Repo</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="sys-status">
            <span className="status-dot" /> SYSTEM ONLINE // ALL PROTOCOLS NOMINAL
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} ZYROX DAO. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>

      <style>{`
        .cyber-footer {
          border-top: 1px solid rgba(0, 240, 255, 0.15);
          padding: 80px 0 40px;
          background: rgba(0, 5, 10, 0.8);
          position: relative;
          overflow: hidden;
        }
        .cyber-footer::before {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(circle at 50% 100%, rgba(0, 240, 255, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .footer-grid {
          display: flex; justify-content: space-between; gap: 60px;
          margin-bottom: 60px;
        }

        .footer-brand { max-width: 400px; }
        .footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; font-family: var(--font-display); font-size: 1.8rem; font-weight: bold; letter-spacing: 2px; color: #fff; }
        .footer-brand p { color: var(--text-dim); font-size: 0.9rem; line-height: 1.8; }

        .footer-links { display: flex; gap: 60px; }
        .link-col { display: flex; flex-direction: column; gap: 16px; }
        .link-col h4 { font-size: 0.8rem; color: var(--neon-cyan); letter-spacing: 2px; margin-bottom: 8px; }
        .link-col a { font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); }
        .link-col a:hover { color: #fff; }

        .footer-bottom {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 32px; border-top: 1px dashed rgba(255,255,255,0.1);
        }

        .sys-status {
          display: flex; align-items: center; gap: 8px;
          font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-dim); letter-spacing: 1px;
        }
        .status-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--neon-green); box-shadow: 0 0 10px var(--neon-green); animation: blink 2s infinite; }

        .copyright { font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); }

        @media (max-width: 900px) {
          .footer-grid { flex-direction: column; gap: 40px; }
          .footer-links { flex-wrap: wrap; gap: 40px; }
          .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
