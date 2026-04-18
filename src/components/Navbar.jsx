import { useState, useEffect } from 'react'

export default function Navbar({ walletAddress, connectWallet, disconnectWallet }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'COMMAND', href: '#command' },
    { label: 'TASKS', href: '#tasks' },
    { label: 'TELEMETRY', href: '#data' },
    { label: 'NEURAL GRID', href: '#roadmap' },
    { label: 'SECURITY', href: '#security' },
  ]
  const short = walletAddress ? `${walletAddress.slice(0,6)}...${walletAddress.slice(-4)}` : null

  return (
    <>
      <nav className={`cyber-nav ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            <span>ZYROX</span>
          </a>
          
          <div className="nav-links">
            {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>
          
          <div className="nav-actions">
            {walletAddress ? (
              <button className="cyber-btn" onClick={disconnectWallet}>
                {short} [DISCONNECT]
              </button>
            ) : (
              <button className="cyber-btn primary" onClick={connectWallet}>
                CONNECT NODE
              </button>
            )}
            <button className="mobile-toggle" onClick={() => setMenuOpen(true)}>
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </nav>

      <div className={`cyber-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        <div className="mobile-links">
          {links.map(l => <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>)}
        </div>
        {walletAddress ? (
          <div style={{ color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>NODE LINKED: {short}</div>
        ) : (
          <button className="cyber-btn primary" onClick={() => { connectWallet(); setMenuOpen(false) }}>CONNECT NODE</button>
        )}
      </div>

      <style>{`
        .cyber-nav {
          position: fixed; top: 0; left: 0; width: 100%;
          z-index: 1000;
          transition: var(--tr);
          border-bottom: 1px solid transparent;
        }
        .cyber-nav.scrolled {
          background: rgba(2, 0, 5, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 240, 255, 0.15);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }
        .nav-inner {
          max-width: 1280px; margin: 0 auto; padding: 16px 32px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .nav-logo {
          display: flex; align-items: center; gap: 12px;
          font-family: var(--font-display); font-size: 1.5rem; font-weight: 700;
          color: #fff; letter-spacing: 2px;
        }
        .nav-links { display: flex; gap: 32px; }
        .nav-links a {
          font-family: var(--font-mono); font-size: 0.8rem;
          color: var(--text-dim); text-transform: uppercase;
          transition: var(--tr);
        }
        .nav-links a:hover { color: var(--neon-cyan); text-shadow: 0 0 10px var(--neon-cyan); }
        
        .nav-actions { display: flex; align-items: center; gap: 16px; }
        
        .mobile-toggle { display: none; flex-direction: column; gap: 5px; background: none; padding: 8px; }
        .mobile-toggle span { width: 24px; height: 2px; background: var(--neon-cyan); transition: var(--tr); }

        .cyber-mobile-menu {
          position: fixed; inset: 0;
          background: rgba(2, 0, 5, 0.98);
          z-index: 1001;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 40px;
          opacity: 0; pointer-events: none; transition: opacity 0.3s;
        }
        .cyber-mobile-menu.open { opacity: 1; pointer-events: auto; }
        .mobile-close {
          position: absolute; top: 24px; right: 24px;
          background: none; color: var(--neon-cyan); font-size: 2rem;
        }
        .mobile-links { display: flex; flex-direction: column; align-items: center; gap: 24px; }
        .mobile-links a { font-family: var(--font-display); font-size: 2rem; color: var(--text-dim); letter-spacing: 2px; }
        .mobile-links a:hover { color: var(--neon-cyan); }

        @media (max-width: 900px) {
          .nav-inner { padding: 16px 20px; }
          .nav-links { display: none; }
          .nav-actions .cyber-btn { display: none; }
          .mobile-toggle { display: flex; }
        }
      `}</style>
    </>
  )
}
