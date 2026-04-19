import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AboutDocs() {
  return (
    <div className="os-view-container about-docs-view">
      <h2 className="sys-title">SYSTEM <span style={{ color: 'var(--neon-purple)' }}>DOCUMENTATION</span></h2>
      
      <div className="docs-grid">
        
        {/* A. Project Overview & Branding */}
        <div className="os-panel hero-panel">
          <div className="hero-brand">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-cyan)' }}>
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <h1 className="brand-title">ZYROX <span className="brand-os">OS</span></h1>
          </div>
          <div className="hero-desc">
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', marginBottom: '8px' }}>ZyroX — Web3 Engagement Operating System</p>
            <p style={{ color: 'var(--neon-purple)', letterSpacing: '2px', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>PLAY. EARN. CONVERT. PARTICIPATE.</p>
            <p>ZyroX transforms user activity into a tokenized ecosystem where users play games, complete tasks, and earn rewards. Built for seamless interaction, asset management, and gamified progression.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            <button className="cyber-btn primary">START PLATFORM</button>
            <button className="cyber-btn">EXPLORE ECOSYSTEM</button>
          </div>
        </div>

        {/* B. Quick Info Panel */}
        <div className="os-panel info-panel">
          <div className="panel-header">
            <span className="panel-tag" style={{ color: 'var(--neon-cyan)' }}>NETWORK PARAMETERS</span>
          </div>
          <div className="info-matrix">
            <div className="info-item">
              <span className="info-label">TOKEN TICKER</span>
              <span className="info-value glow-text">$ZRX</span>
            </div>
            <div className="info-item">
              <span className="info-label">ASSET TYPE</span>
              <span className="info-value">UTILITY & GOVERNANCE</span>
            </div>
            <div className="info-item">
              <span className="info-label">BLOCKCHAIN</span>
              <span className="info-value">ETHEREUM / L2 (TBA)</span>
            </div>
            <div className="info-item">
              <span className="info-label">PROTOCOL STATUS</span>
              <span className="info-value status-active">IN DEVELOPMENT</span>
            </div>
          </div>
        </div>

        {/* C. How It Works Flow Section */}
        <div className="os-panel flow-panel">
          <div className="panel-header">
            <span className="panel-tag" style={{ color: 'var(--neon-purple)' }}>CORE ARCHITECTURE FLOW</span>
          </div>
          <div className="flow-container">
            <div className="flow-step">
              <div className="step-icon">1</div>
              <div className="step-text">CONNECT WALLET & ESTABLISH NEURAL LINK</div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-icon">2</div>
              <div className="step-text">EARN XP VIA TASKS & PROTOCOLS</div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-icon">3</div>
              <div className="step-text">SYNTHESIZE XP INTO $ZRX TOKENS</div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-icon">4</div>
              <div className="step-text">STAKE & TRADE IN THE UTILITY MARKET</div>
            </div>
          </div>
        </div>

        {/* D. Tokenomics Preview */}
        <div className="os-panel tokenomics-panel">
          <div className="panel-header">
            <span className="panel-tag" style={{ color: 'var(--neon-orange)' }}>TOKEN DISTRIBUTION</span>
          </div>
          <div className="tokenomics-content">
            <div className="chart-placeholder">
              <div className="circle-chart">
                <div className="inner-circle">TOTAL SUPPLY<br/><span style={{ color: '#fff', fontSize: '1.2rem' }}>1,000,000,000</span></div>
              </div>
            </div>
            <div className="dist-list">
              <div className="dist-item"><div className="dist-color" style={{ background: 'var(--neon-cyan)' }}></div><span>40% - COMMUNITY REWARDS & P2E</span></div>
              <div className="dist-item"><div className="dist-color" style={{ background: 'var(--neon-purple)' }}></div><span>20% - LIQUIDITY & EXCHANGES</span></div>
              <div className="dist-item"><div className="dist-color" style={{ background: 'var(--neon-green)' }}></div><span>15% - DEVELOPMENT & ECOSYSTEM</span></div>
              <div className="dist-item"><div className="dist-color" style={{ background: 'var(--neon-orange)' }}></div><span>15% - TEAM & ADVISORS</span></div>
              <div className="dist-item"><div className="dist-color" style={{ background: '#FFD700' }}></div><span>10% - MARKETING & PARTNERSHIPS</span></div>
            </div>
          </div>
        </div>

        {/* E. Structured Document Cards */}
        <div className="os-panel docs-panel">
          <div className="panel-header">
            <span className="panel-tag">OFFICIAL PROTOCOL DOCUMENTS</span>
          </div>
          <div className="doc-cards">
            <div className="doc-card">
              <div className="doc-icon">📄</div>
              <div className="doc-info">
                <h4>WHITEPAPER V1.2</h4>
                <p>Comprehensive protocol architecture, game mechanics, and vision.</p>
                <div className="doc-meta"><span>PDF</span><span>4.2 MB</span></div>
              </div>
              <button className="cyber-btn sm">DOWNLOAD</button>
            </div>
            <div className="doc-card">
              <div className="doc-icon">📊</div>
              <div className="doc-info">
                <h4>PITCH DECK</h4>
                <p>Investor overview, market analysis, and growth strategy.</p>
                <div className="doc-meta"><span>PDF</span><span>8.5 MB</span></div>
              </div>
              <button className="cyber-btn sm">DOWNLOAD</button>
            </div>
            <div className="doc-card">
              <div className="doc-icon">🔐</div>
              <div className="doc-info">
                <h4>AUDIT REPORT</h4>
                <p>Smart contract security analysis by CertiK.</p>
                <div className="doc-meta" style={{ color: 'var(--neon-orange)' }}><span>PENDING</span></div>
              </div>
              <button className="cyber-btn sm" disabled>UNAVAILABLE</button>
            </div>
          </div>
        </div>

        {/* F. Social & Transparency */}
        <div className="social-transparency-container">
          <div className="os-panel social-panel">
            <div className="panel-header">
              <span className="panel-tag">TRANSMISSION CHANNELS</span>
            </div>
            <div className="social-grid">
              <a href="https://x.com/ZyroX" target="_blank" rel="noreferrer" className="social-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>X (TWITTER)</span>
              </a>
              <a href="https://t.me/ZyroX" target="_blank" rel="noreferrer" className="social-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                <span>TELEGRAM</span>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="social-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <span>GITHUB</span>
              </a>
              <a href="mailto:contact@zyrox.io" className="social-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>EMAIL SUPPORT</span>
              </a>
            </div>
          </div>

          <div className="os-panel transparency-panel">
             <div className="panel-header">
              <span className="panel-tag" style={{ color: 'var(--neon-green)' }}>SYSTEM STATUS</span>
            </div>
            <div className="status-list">
              <div className="status-item">
                <span className="status-indicator active"></span>
                <span>CORE PROTOCOL ONLINE</span>
              </div>
              <div className="status-item">
                <span className="status-indicator active"></span>
                <span>DATA HUB SYNCED</span>
              </div>
              <div className="status-item">
                <span className="status-indicator pending"></span>
                <span>MAINNET DEPLOYMENT (ETA Q4)</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .about-docs-view { max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; height: 100%; }
        
        .docs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          padding-bottom: 40px;
        }

        .hero-panel { grid-column: 1 / -1; display: flex; flex-direction: column; gap: 16px; justify-content: center; align-items: center; text-align: center; padding: 40px 24px; background: linear-gradient(180deg, rgba(0, 240, 255, 0.05) 0%, rgba(10, 5, 20, 0.8) 100%); }
        .hero-brand { display: flex; align-items: center; gap: 16px; margin-bottom: 8px; }
        .brand-title { font-size: 3.5rem; letter-spacing: 4px; color: #fff; text-shadow: 0 0 20px rgba(0,240,255,0.4); }
        .brand-os { color: var(--neon-purple); font-weight: 400; }
        .hero-desc { max-width: 800px; color: var(--text-dim); font-size: 1.1rem; line-height: 1.6; }

        .info-panel { grid-column: 1 / 2; }
        .info-matrix { display: flex; flex-direction: column; gap: 16px; }
        .info-item { display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; border-bottom: 1px dashed rgba(255,255,255,0.1); }
        .info-item:last-child { border-bottom: none; padding-bottom: 0; }
        .info-label { font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); letter-spacing: 1px; }
        .info-value { font-family: var(--font-mono); font-size: 0.9rem; color: #fff; font-weight: bold; }
        .glow-text { color: var(--neon-cyan); text-shadow: 0 0 10px rgba(0,240,255,0.5); }
        .status-active { color: var(--neon-green); }

        .flow-panel { grid-column: 2 / 3; }
        .flow-container { display: flex; align-items: center; justify-content: space-between; height: 100%; padding: 16px 0; }
        .flow-step { display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center; flex: 1; }
        .step-icon { width: 40px; height: 40px; border-radius: 50%; background: rgba(138, 43, 226, 0.1); border: 1px solid var(--neon-purple); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 1.2rem; font-weight: bold; color: var(--neon-purple); box-shadow: 0 0 15px rgba(138, 43, 226, 0.2); }
        .step-text { font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-dim); max-width: 120px; line-height: 1.4; }
        .flow-arrow { color: rgba(255,255,255,0.2); font-size: 1.5rem; margin: 0 8px; }

        .tokenomics-panel { grid-column: 1 / -1; }
        .tokenomics-content { display: flex; align-items: center; gap: 40px; }
        .chart-placeholder { flex: 0 0 200px; display: flex; justify-content: center; }
        .circle-chart { width: 160px; height: 160px; border-radius: 50%; background: conic-gradient(var(--neon-cyan) 0% 40%, var(--neon-purple) 40% 60%, var(--neon-green) 60% 75%, var(--neon-orange) 75% 90%, #FFD700 90% 100%); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(0,0,0,0.5); }
        .inner-circle { width: 120px; height: 120px; border-radius: 50%; background: var(--bg-surface); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); }
        .dist-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; flex: 1; }
        .dist-item { display: flex; align-items: center; gap: 12px; font-family: var(--font-mono); font-size: 0.85rem; color: #fff; }
        .dist-color { width: 12px; height: 12px; border-radius: 2px; }

        .docs-panel { grid-column: 1 / -1; }
        .doc-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .doc-card { background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-md); padding: 20px; display: flex; flex-direction: column; gap: 12px; transition: var(--tr); }
        .doc-card:hover { border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.02); transform: translateY(-2px); }
        .doc-icon { font-size: 2rem; margin-bottom: 8px; }
        .doc-info h4 { font-size: 1.1rem; color: #fff; margin-bottom: 4px; }
        .doc-info p { font-size: 0.8rem; color: var(--text-dim); line-height: 1.4; margin-bottom: 12px; min-height: 36px; }
        .doc-meta { display: flex; gap: 12px; font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); margin-bottom: 16px; }
        .doc-meta span { background: rgba(255,255,255,0.05); padding: 2px 6px; border-radius: 4px; }

        .social-transparency-container { grid-column: 1 / -1; display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }
        
        .social-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .social-btn { display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); padding: 12px 16px; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 0.85rem; color: #fff; transition: var(--tr); }
        .social-btn:hover { background: rgba(0, 240, 255, 0.1); border-color: var(--neon-cyan); color: var(--neon-cyan); }

        .status-list { display: flex; flex-direction: column; gap: 16px; }
        .status-item { display: flex; align-items: center; gap: 12px; font-family: var(--font-mono); font-size: 0.85rem; color: #fff; }
        .status-indicator { width: 8px; height: 8px; border-radius: 50%; }
        .status-indicator.active { background: var(--neon-green); box-shadow: 0 0 10px var(--neon-green); }
        .status-indicator.pending { background: var(--neon-orange); box-shadow: 0 0 10px var(--neon-orange); animation: pulse 2s infinite; }

        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }

        @media (max-width: 1024px) {
          .tokenomics-content { flex-direction: column; }
          .dist-list { width: 100%; }
          .doc-cards { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .docs-grid { grid-template-columns: 1fr; }
          .info-panel, .flow-panel, .tokenomics-panel, .docs-panel { grid-column: 1 / -1; }
          .flow-container { flex-direction: column; gap: 16px; }
          .flow-arrow { transform: rotate(90deg); margin: 8px 0; }
          .dist-list { grid-template-columns: 1fr; }
          .doc-cards { grid-template-columns: 1fr; }
          .social-transparency-container { grid-template-columns: 1fr; }
          .social-grid { grid-template-columns: 1fr; }
          .brand-title { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  )
}
