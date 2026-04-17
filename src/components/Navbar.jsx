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
    { label: 'About', href: '#about' },
    { label: 'Games', href: '#games' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Support', href: '#support' },
  ]
  const short = walletAddress ? `${walletAddress.slice(0,6)}...${walletAddress.slice(-4)}` : null

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          <a href="#" className="navbar-logo">
            <div className="logo-icon">Z</div>
            <span>ZyroX</span>
          </a>
          <div className="navbar-links">
            {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>
          <div className="navbar-actions">
            {walletAddress ? (
              <button className="wallet-btn" onClick={disconnectWallet} title="Disconnect">
                <span className="wallet-btn-inner">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M16 14h.01"/><path d="M2 10h20"/></svg>
                  {short}
                </span>
              </button>
            ) : (
              <button className="btn btn-p btn-sm" onClick={connectWallet}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M16 14h.01"/><path d="M2 10h20"/></svg>
                Connect Wallet
              </button>
            )}
            <button className="mobile-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {links.map(l => <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>)}
        {walletAddress ? (
          <span className="wallet-connected">◉ {short}</span>
        ) : (
          <button className="btn btn-p" onClick={() => { connectWallet(); setMenuOpen(false) }}>Connect Wallet</button>
        )}
      </div>
    </>
  )
}
