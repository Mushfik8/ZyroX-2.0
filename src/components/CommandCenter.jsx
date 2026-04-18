import { motion } from 'framer-motion'

export default function CommandCenter({ connectWallet, walletAddress }) {
  return (
    <section className="system-node" id="command">
      <div className="node-container">
        
        <div className="command-header">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="sys-badge">NODE 01 // COMMAND CENTER</span>
            <h1 className="sys-title">DECENTRALIZED <br/><span style={{ color: 'var(--neon-purple)' }}>YIELD PROTOCOL</span></h1>
            <p className="sys-subtitle">
              Execute neural tasks, power the network, and extract $ZYROX yields. 
              The most advanced Web3 earning infrastructure is online.
            </p>
          </motion.div>
        </div>

        <div className="core-loop-grid">
          <motion.div className="holo-panel loop-node" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
            <div className="node-icon">01</div>
            <h3>INITIALIZE LINK</h3>
            <p>Connect your Web3 neural wallet to the ZyroX mainframe to secure your identity.</p>
            {walletAddress ? (
              <div className="status-indicator active">LINK ESTABLISHED</div>
            ) : (
              <button className="cyber-btn primary" onClick={connectWallet}>CONNECT WALLET</button>
            )}
          </motion.div>

          <div className="loop-connector" />

          <motion.div className="holo-panel loop-node" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <div className="node-icon" style={{ borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)' }}>02</div>
            <h3>EXECUTE PROTOCOLS</h3>
            <p>Process network tasks in the Task Matrix. Validated operations generate system value.</p>
            <a href="#tasks" className="cyber-btn">ACCESS MATRIX</a>
          </motion.div>

          <div className="loop-connector" />

          <motion.div className="holo-panel loop-node" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
            <div className="node-icon" style={{ borderColor: 'var(--neon-orange)', color: 'var(--neon-orange)' }}>03</div>
            <h3>EXTRACT YIELD</h3>
            <p>Convert your processing power into $ZYROX tokens. Instant settlement via BSC smart contracts.</p>
            <div className="yield-display">
              <span className="label">CURRENT APY</span>
              <span className="value">245.8%</span>
            </div>
          </motion.div>
        </div>

      </div>

      <style>{`
        .command-header { text-align: center; margin-bottom: 60px; display: flex; flex-direction: column; align-items: center; }
        .core-loop-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
        .loop-node {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-height: 280px;
        }
        .node-icon {
          width: 48px; height: 48px;
          border-radius: 50%;
          border: 1px solid var(--neon-cyan);
          color: var(--neon-cyan);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-mono);
          font-weight: bold;
          font-size: 1.2rem;
          margin-bottom: 24px;
          box-shadow: inset 0 0 10px rgba(255,255,255,0.05);
        }
        .loop-node h3 { font-size: 1.25rem; margin-bottom: 12px; color: #fff; }
        .loop-node p { font-size: 0.9rem; color: var(--text-dim); margin-bottom: 32px; flex: 1; }
        
        .loop-connector {
          width: 40px; height: 2px;
          background: linear-gradient(90deg, var(--neon-cyan), var(--neon-purple));
          margin: 0 20px;
          opacity: 0.5;
        }

        .status-indicator {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          padding: 8px 16px;
          border: 1px solid var(--neon-green);
          color: var(--neon-green);
          background: rgba(0, 255, 102, 0.1);
          border-radius: var(--radius-sm);
        }

        .yield-display {
          display: flex; flex-direction: column; gap: 4px;
          padding: 12px 20px;
          background: rgba(255, 60, 0, 0.05);
          border: 1px solid rgba(255, 60, 0, 0.2);
          border-radius: var(--radius-sm);
        }
        .yield-display .label { font-size: 0.7rem; color: var(--text-dim); font-family: var(--font-mono); }
        .yield-display .value { font-size: 1.5rem; color: var(--neon-orange); font-family: var(--font-display); font-weight: bold; }

        @media (max-width: 1024px) {
          .core-loop-grid { flex-direction: column; gap: 40px; }
          .loop-connector { width: 2px; height: 40px; margin: 0; background: linear-gradient(180deg, var(--neon-cyan), var(--neon-purple)); }
          .loop-node { width: 100%; min-height: auto; align-items: center; text-align: center; }
        }
      `}</style>
    </section>
  )
}
