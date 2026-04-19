import { useState } from 'react'

export default function OSSidebar({ activeView, setActiveView }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'control', icon: <path d="M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z"/>, label: 'CONTROL PANEL' },
    { id: 'tasks', icon: <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z M12 22v-6.5"/>, label: 'TASK MATRIX' },
    { id: 'play', icon: <polygon points="5 3 19 12 5 21 5 3"/>, label: 'PLAY TO EARN' },
    { id: 'staking', icon: <path d="M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>, label: 'STAKING VAULT' },
    { id: 'utility', icon: <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0"/>, label: 'UTILITY MARKET' },
    { id: 'telemetry', icon: <path d="M18 20V10 M12 20V4 M6 20v-6"/>, label: 'TELEMETRY' },
    { id: 'progression', icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>, label: 'PROGRESSION' },
    { id: 'network', icon: <><circle cx="12" cy="12" r="10"/><path d="M12 2v20 M2 12h20 M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></>, label: 'NETWORK GRID' },
    { id: 'referral', icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75"/>, label: 'REFERRAL HUB' },
    { id: 'tokenFlow', icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>, label: 'TOKEN FLOW' },
    { id: 'about', icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8"/>, label: 'ABOUT / DOCS' }
  ]

  const handleNavClick = (id) => {
    setActiveView(id)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <div className="os-sidebar">
        <div className="os-sidebar-brand" title="ZyroX OS Mainframe" style={{ width: 'auto', padding: '0 12px', background: 'transparent', border: 'none', boxShadow: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0, 240, 255, 0.1)', padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--neon-cyan)', boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '2px', color: '#fff' }} className="brand-text">ZYROX</span>
          </div>
        </div>

        <style>{`
          @media (min-width: 769px) {
            .os-sidebar { width: 220px; align-items: stretch; padding: 24px 16px; }
            .os-nav-item { width: 100%; justify-content: flex-start; padding: 0 16px; gap: 12px; }
            .os-nav-item::after { display: none; }
            .os-nav-item::before { left: 0; height: 100%; width: 3px; }
            .os-nav-bottom { align-items: stretch; }
            .os-nav-item svg { min-width: 20px; }
            .os-socials { flex-direction: row !important; justify-content: center; }
            .os-socials .os-nav-item { width: 44px; padding: 0; justify-content: center; }
            
            /* Add label text for desktop expanded sidebar */
            .os-nav-item::before { content: ''; position: absolute; }
            .os-nav-item::after { display: none; }
          }
        `}</style>

        {/* Desktop Navigation */}
        <nav className="os-nav">
          {navItems.map(item => (
            <button 
              key={item.id}
              className={`os-nav-item ${activeView === item.id ? 'active' : ''}`}
              data-tooltip={item.label}
              onClick={() => handleNavClick(item.id)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
              <span className="desktop-nav-label" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '1px' }}>{item.label}</span>
            </button>
          ))}
        </nav>

        <style>{`
          .desktop-nav-label { display: none; white-space: nowrap; }
          @media (min-width: 769px) {
            .desktop-nav-label { display: block; }
          }
        `}</style>

        <div className="os-nav-bottom">
          <button className={`os-nav-item ${activeView === 'support' ? 'active' : ''}`} data-tooltip="SUPPORT" onClick={() => handleNavClick('support')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <span className="desktop-nav-label" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '1px' }}>SUPPORT CENTER</span>
          </button>
          <button className={`os-nav-item ${activeView === 'security' ? 'active' : ''}`} data-tooltip="SECURITY" onClick={() => handleNavClick('security')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span className="desktop-nav-label" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '1px' }}>SECURITY</span>
          </button>
          
          <div className="os-socials" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '16px' }}>
            <a href="https://x.com/ZyroX" target="_blank" rel="noreferrer" className="os-nav-item" data-tooltip="X (TWITTER)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://t.me/ZyroX" target="_blank" rel="noreferrer" className="os-nav-item" data-tooltip="TELEGRAM">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-overlay-header">
          <div className="os-sidebar-brand" style={{ marginBottom: 0, width: 'auto', padding: '10px 16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '2px', color: '#fff' }}>ZYROX</span>
          </div>
          <button className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--neon-orange)" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div className="mobile-nav-grid">
          {navItems.map(item => (
            <button 
              key={item.id}
              className={`mobile-nav-item ${activeView === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
              <span>{item.label}</span>
            </button>
          ))}
          <button className={`mobile-nav-item ${activeView === 'support' ? 'active' : ''}`} onClick={() => handleNavClick('support')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <span>SUPPORT CENTER</span>
          </button>
          <button className={`mobile-nav-item ${activeView === 'security' ? 'active' : ''}`} onClick={() => handleNavClick('security')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span>SECURITY</span>
          </button>
        </div>
        
        <div className="mobile-socials" style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: 'auto', paddingTop: '24px', borderTop: '1px dashed rgba(255,255,255,0.1)' }}>
          <a href="https://x.com/ZyroX" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://t.me/ZyroX" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </a>
        </div>
      </div>
    </>
  )
}
