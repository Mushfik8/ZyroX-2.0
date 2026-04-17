import { motion } from 'framer-motion'

export default function Hero({ connectWallet }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <span className="pulse" />
            Pre-Launch on BNB Chain
          </div>

          <h1>
            The Future of<br />
            <span className="highlight">Gaming × DeFi</span>
          </h1>

          <p>
            ZyroX is a next-gen gaming and decentralized finance ecosystem
            built on BNB Chain — designed for players, traders, and builders
            ready to shape the metaverse.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary btn-glow" onClick={connectWallet}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M16 14h.01"/><path d="M2 10h20"/></svg>
              Connect Wallet
            </button>
            <a href="#about" className="btn btn-secondary">
              Explore Ecosystem
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-stat">
            <div className="value">BNB</div>
            <div className="label">Blockchain</div>
          </div>
          <div className="hero-stat">
            <div className="value">100B</div>
            <div className="label">Total Supply</div>
          </div>
          <div className="hero-stat">
            <div className="value">GameFi</div>
            <div className="label">Ecosystem</div>
          </div>
          <div className="hero-stat">
            <div className="value">Pre-Launch</div>
            <div className="label">Status</div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
      </div>
    </section>
  )
}
