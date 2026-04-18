export default function OSSidebar({ activeView, setActiveView }) {
  const navItems = [
    { id: 'control', icon: <path d="M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z"/>, label: 'CONTROL PANEL' },
    { id: 'tasks', icon: <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z M12 22v-6.5"/>, label: 'TASK MATRIX' },
    { id: 'telemetry', icon: <path d="M18 20V10 M12 20V4 M6 20v-6"/>, label: 'TELEMETRY' },
    { id: 'progression', icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>, label: 'PROGRESSION' },
    { id: 'network', icon: <circle cx="12" cy="12" r="10"/><path d="M12 2v20 M2 12h20 M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>, label: 'NETWORK GRID' },
    { id: 'tokenFlow', icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>, label: 'TOKEN FLOW' }
  ]

  return (
    <div className="os-sidebar">
      
      <div className="os-sidebar-brand" title="ZyroX OS Mainframe">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>

      <nav className="os-nav">
        {navItems.map(item => (
          <button 
            key={item.id}
            className={`os-nav-item ${activeView === item.id ? 'active' : ''}`}
            data-tooltip={item.label}
            onClick={() => setActiveView(item.id)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {item.icon}
            </svg>
          </button>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <button className="os-nav-item" data-tooltip="SECURITY" onClick={() => setActiveView('security')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </button>
      </div>

    </div>
  )
}
