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
    { id: 'tokenFlow', icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>, label: 'TOKEN FLOW' }
  ]

  const handleNavClick = (id) => {
    setActiveView(id)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <div className="os-sidebar">
        <div className="os-sidebar-brand" title="ZyroX OS Mainframe">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>

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
            </button>
          ))}
        </nav>

        <div className="os-nav-bottom">
          <button className={`os-nav-item ${activeView === 'support' ? 'active' : ''}`} data-tooltip="SUPPORT" onClick={() => handleNavClick('support')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </button>
          <button className={`os-nav-item ${activeView === 'security' ? 'active' : ''}`} data-tooltip="SECURITY" onClick={() => handleNavClick('security')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </button>
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
          <div className="os-sidebar-brand" style={{ marginBottom: 0 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
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
      </div>
    </>
  )
}
