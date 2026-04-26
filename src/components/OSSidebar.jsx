import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function OSSidebar({ activeView, setActiveView }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, loginWithGoogle, logout } = useAuth()

  const navItems = [
    { id: 'control', icon: <path d="M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z"/>, label: 'CONTROL PANEL' },
    { id: 'campaigns', icon: <><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 9 8 12 8s5-4 7.5-4a2.5 2.5 0 0 1 0 5H18"/><path d="M18 9v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/><path d="M12 8v13"/></>, label: 'CAMPAIGNS' },
    { id: 'tasks', icon: <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z M12 22v-6.5"/>, label: 'TASK MATRIX' },
    { id: 'play', icon: <polygon points="5 3 19 12 5 21 5 3"/>, label: 'PLAY TO EARN' },
    { id: 'staking', icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>, label: 'XP WHITELIST' },
    { id: 'utility', icon: <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0"/>, label: 'UTILITY MARKET' },
    { id: 'telemetry', icon: <path d="M18 20V10 M12 20V4 M6 20v-6"/>, label: 'XP DASHBOARD' },
    { id: 'progression', icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>, label: 'PROGRESSION' },
    { id: 'network', icon: <><circle cx="12" cy="12" r="10"/><path d="M12 2v20 M2 12h20 M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></>, label: 'NETWORK GRID' },
    { id: 'referral', icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75"/>, label: 'REFERRAL HUB' },
    { id: 'tokenFlow', icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>, label: 'TOKEN FLOW' },
    { id: 'about', icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8"/>, label: 'ABOUT / DOCS' }
  ]

  const handleNavClick = (id) => {
    setActiveView(id)
    setMobileMenuOpen(false)
  }

  const handleLogin = async () => {
    try { await loginWithGoogle() } catch(e) { console.error(e) }
  }

  const handleLogout = async () => {
    setShowUserMenu(false)
    try { await logout() } catch(e) { console.error(e) }
  }

  // Auth button for desktop sidebar
  const AuthButton = () => (
    <div className="sidebar-auth-section">
      {user ? (
        <div className="sidebar-user-wrap" style={{ position: 'relative' }}>
          <button className="sidebar-user-btn" onClick={() => setShowUserMenu(!showUserMenu)}>
            {user.photoURL ? (
              <img src={user.photoURL} alt="" className="sidebar-avatar" referrerPolicy="no-referrer" />
            ) : (
              <div className="sidebar-avatar-fallback">
                {(user.displayName || user.email || 'U')[0].toUpperCase()}
              </div>
            )}
            <span className="sidebar-user-name">{user.displayName || 'Operator'}</span>
          </button>
          {showUserMenu && (
            <div className="sidebar-user-dropdown">
              <div className="sud-email">{user.email}</div>
              <button className="sud-logout" onClick={handleLogout}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                DISCONNECT
              </button>
            </div>
          )}
        </div>
      ) : (
        <button className="sidebar-login-btn" onClick={handleLogin}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          <span className="sidebar-login-text">LOGIN</span>
        </button>
      )}
    </div>
  )

  // Auth button for mobile header
  const MobileAuthButton = () => (
    <>
      {user ? (
        <button className="mobile-auth-btn" onClick={() => setShowUserMenu(!showUserMenu)} style={{ position: 'relative' }}>
          {user.photoURL ? (
            <img src={user.photoURL} alt="" className="sidebar-avatar" style={{ width: 32, height: 32 }} referrerPolicy="no-referrer" />
          ) : (
            <div className="sidebar-avatar-fallback" style={{ width: 32, height: 32, fontSize: '0.8rem' }}>
              {(user.displayName || 'U')[0].toUpperCase()}
            </div>
          )}
          {showUserMenu && (
            <div className="mobile-user-dropdown">
              <div className="sud-email">{user.email}</div>
              <button className="sud-logout" onClick={handleLogout}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                DISCONNECT
              </button>
            </div>
          )}
        </button>
      ) : (
        <button className="mobile-login-btn" onClick={handleLogin}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
        </button>
      )}
    </>
  )

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
          .mobile-overlay { display: none; }
          .mobile-overlay.open { display: flex; }
          @media (min-width: 769px) {
            .mobile-overlay { display: none !important; }
            .os-sidebar { width: 220px; align-items: stretch; padding: 24px 16px; }
            .os-nav-item { width: 100%; height: 50px; justify-content: flex-start; padding: 0 16px; gap: 16px; margin-bottom: 8px; }
            .os-nav-item::after { display: none; }
            .os-nav-item::before { left: -16px; height: 100%; width: 4px; border-radius: 0 4px 4px 0; }
            .os-nav-bottom { align-items: stretch; }
            .os-nav-item svg { width: 22px; height: 22px; min-width: 22px; }
            .os-socials { flex-direction: row !important; justify-content: center; padding: 16px 8px !important; }
            .os-socials .os-nav-item { width: 44px; height: 44px; padding: 0; justify-content: center; margin-bottom: 0; }
            .os-nav { overflow-y: auto; overflow-x: hidden; padding-right: 4px; }
            .os-nav::-webkit-scrollbar { width: 4px; }
            .os-nav::-webkit-scrollbar-thumb { background: rgba(0, 240, 255, 0.2); border-radius: 2px; }
            .os-nav::-webkit-scrollbar-thumb:hover { background: var(--neon-cyan); }
            .brand-text { display: block !important; }
          }

          /* Auth Styles */
          .sidebar-auth-section { margin-top: 8px; padding-top: 12px; border-top: 1px dashed rgba(255,255,255,0.08); }
          .sidebar-login-btn {
            display: flex; align-items: center; justify-content: center; gap: 10px;
            width: 100%; padding: 10px 16px;
            background: rgba(0,240,255,0.06); border: 1px solid rgba(0,240,255,0.25);
            border-radius: var(--radius-md); color: var(--neon-cyan);
            font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 1.5px;
            cursor: pointer; transition: all 0.2s ease;
          }
          .sidebar-login-btn:hover { background: rgba(0,240,255,0.15); box-shadow: 0 0 15px rgba(0,240,255,0.15); }
          .sidebar-login-text { display: none; }
          @media (min-width: 769px) { .sidebar-login-text { display: inline; } }

          .sidebar-user-btn {
            display: flex; align-items: center; gap: 10px; width: 100%;
            padding: 8px 10px; background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md);
            cursor: pointer; transition: all 0.2s ease; color: var(--text-main);
          }
          .sidebar-user-btn:hover { background: rgba(255,255,255,0.06); border-color: rgba(0,240,255,0.2); }

          .sidebar-avatar {
            width: 28px; height: 28px; border-radius: 50%;
            border: 1.5px solid rgba(0,240,255,0.4); object-fit: cover; flex-shrink: 0;
          }
          .sidebar-avatar-fallback {
            width: 28px; height: 28px; border-radius: 50%;
            background: rgba(138,43,226,0.15); border: 1.5px solid rgba(138,43,226,0.4);
            display: flex; align-items: center; justify-content: center;
            font-family: var(--font-display); font-size: 0.75rem; font-weight: 700;
            color: var(--neon-purple); flex-shrink: 0;
          }
          .sidebar-user-name {
            font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-main);
            overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: none;
          }
          @media (min-width: 769px) { .sidebar-user-name { display: block; } }

          .sidebar-user-dropdown, .mobile-user-dropdown {
            position: absolute; bottom: calc(100% + 8px); left: 0; right: 0;
            background: rgba(8,4,18,0.95); border: 1px solid rgba(0,240,255,0.2);
            border-radius: var(--radius-md); padding: 12px;
            box-shadow: 0 -8px 30px rgba(0,0,0,0.6); z-index: 200;
            min-width: 180px;
          }
          .mobile-user-dropdown { bottom: auto; top: calc(100% + 8px); right: 0; left: auto; }
          .sud-email {
            font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-dim);
            padding: 0 0 10px; margin-bottom: 10px; border-bottom: 1px dashed rgba(255,255,255,0.08);
            overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
          }
          .sud-logout {
            display: flex; align-items: center; gap: 8px; width: 100%;
            padding: 8px 10px; background: rgba(255,60,0,0.06);
            border: 1px solid rgba(255,60,0,0.15); border-radius: var(--radius-sm);
            color: var(--neon-orange); font-family: var(--font-mono); font-size: 0.7rem;
            letter-spacing: 1px; cursor: pointer; transition: all 0.2s ease;
          }
          .sud-logout:hover { background: rgba(255,60,0,0.15); }

          .mobile-auth-btn {
            background: none; border: none; cursor: pointer; padding: 4px;
            display: flex; align-items: center; position: relative;
          }
          .mobile-login-btn {
            background: rgba(0,240,255,0.08); border: 1px solid rgba(0,240,255,0.25);
            border-radius: 8px; padding: 6px 10px; cursor: pointer;
            display: flex; align-items: center;
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
          @media (min-width: 769px) { .desktop-nav-label { display: block; } }
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
            <a href="https://x.com/zyrox_finance" target="_blank" rel="noreferrer" className="os-nav-item" data-tooltip="X (TWITTER)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://t.me/zyroxtoken" target="_blank" rel="noreferrer" className="os-nav-item" data-tooltip="TELEGRAM">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </a>
          </div>

          {/* Desktop Auth Button */}
          <AuthButton />
        </div>

        {/* Mobile Header Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="mobile-header-actions">
          <MobileAuthButton />
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        <style>{`
          .mobile-header-actions { display: none; }
          @media (max-width: 768px) { .mobile-header-actions { display: flex; } }
        `}</style>
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

          {/* Mobile Auth in overlay */}
          {user ? (
            <button className="mobile-nav-item" onClick={handleLogout} style={{ borderColor: 'rgba(255,60,0,0.2)', color: 'var(--neon-orange)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              <span>DISCONNECT ({user.displayName || 'User'})</span>
            </button>
          ) : (
            <button className="mobile-nav-item" onClick={handleLogin} style={{ borderColor: 'rgba(0,240,255,0.3)', color: 'var(--neon-cyan)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
              <span>LOGIN WITH GOOGLE</span>
            </button>
          )}
        </div>
        
        <div className="mobile-socials" style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: 'auto', paddingTop: '24px', borderTop: '1px dashed rgba(255,255,255,0.1)' }}>
          <a href="https://x.com/zyrox_finance" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://t.me/zyroxtoken" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </a>
        </div>
      </div>
    </>
  )
}
