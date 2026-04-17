import { useState, useEffect } from 'react'
import logoIcon from '../assets/logo-icon.png'

export default function Navbar({ walletAddress, connectWallet, disconnectWallet }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Support', href: '#support' },
  ]

  const shortAddr = walletAddress
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : null

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo">
            <img src={logoIcon} alt="ZyroX Logo" className="logo-img" />
            <span>ZyroX</span>
          </a>

          <div className="navbar-links">
            {links.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>

          <div className="navbar-actions">
            {walletAddress ? (
              <button className="wallet-btn" onClick={disconnectWallet} title="Disconnect">
                <span className="wallet-btn-inner">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M16 14h.01"/><path d="M2 10h20"/></svg>
                  {shortAddr}
                </span>
              </button>
            ) : (
              <button className="btn btn-primary btn-sm" onClick={connectWallet}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M16 14h.01"/><path d="M2 10h20"/></svg>
                Connect Wallet
              </button>
            )}

            <button className="mobile-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        {walletAddress ? (
          <span className="wallet-connected">🟢 {shortAddr}</span>
        ) : (
          <button className="btn btn-primary" onClick={() => { connectWallet(); setMenuOpen(false) }}>Connect Wallet</button>
        )}
      </div>
    </>
  )
}
