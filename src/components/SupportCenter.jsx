import { useState } from 'react'

export default function SupportCenter() {
  const [ticketSubject, setTicketSubject] = useState('')
  const [ticketBody, setTicketBody] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (ticketSubject && ticketBody) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setTicketSubject('')
        setTicketBody('')
      }, 3000)
    }
  }

  return (
    <div className="os-view-container">
      
      <div className="support-header">
        <h2 className="sys-title">SUPPORT <span style={{ color: 'var(--neon-cyan)' }}>CENTER</span></h2>
        <p className="sys-desc">Establish a direct neural link with ZyroX core operators.</p>
      </div>

      <div className="support-grid">
        
        {/* Support Ticket Form */}
        <div className="os-panel ticket-panel">
          <h3>SUBMIT PROTOCOL INQUIRY</h3>
          
          {submitted ? (
            <div className="success-msg">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <h4>TICKET TRANSMITTED</h4>
              <p>An operator will review your inquiry shortly. Status updates will appear in your console logs.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="ticket-form">
              <div className="input-group">
                <label>INQUIRY TYPE / SUBJECT</label>
                <input type="text" className="cyber-input" value={ticketSubject} onChange={(e) => setTicketSubject(e.target.value)} placeholder="e.g. Synthesis Protocol Error" required />
              </div>
              <div className="input-group">
                <label>DETAILED LOG (DESCRIPTION)</label>
                <textarea className="cyber-input" value={ticketBody} onChange={(e) => setTicketBody(e.target.value)} rows="5" placeholder="Provide complete transaction hashes or error codes..." required />
              </div>
              <button type="submit" className="cyber-btn primary">TRANSMIT TICKET</button>
            </form>
          )}
        </div>

        {/* Quick Links & Discord */}
        <div className="side-panel">
          
          <div className="os-panel discord-panel">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" color="#5865F2"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
            <div>
              <h4 style={{ color: '#fff', marginBottom: '4px' }}>DISCORD COMMUNITY</h4>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginBottom: '16px' }}>Join 30,000+ operators for real-time support and intel.</p>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="cyber-btn sm" style={{ borderColor: '#5865F2', color: '#5865F2', display: 'inline-block' }}>JOIN SERVER</a>
            </div>
          </div>
          
          <div className="os-panel social-links-panel" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderColor: 'rgba(255,255,255,0.1)' }}>
            <a href="https://x.com/zyro_x_gaming" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--text-dim)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>FOLLOW US</span>
            </a>
            <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)' }}></div>
            <a href="https://t.me/zyroxtoken" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'var(--text-dim)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>JOIN TELEGRAM</span>
            </a>
          </div>

          <div className="os-panel faq-panel">
            <h4>COMMON QUERIES</h4>
            <div className="faq-list">
              <a href="#">How to execute synthesis?</a>
              <a href="#">Understanding APY lock-ups</a>
              <a href="#">Smart contract audit results</a>
              <a href="#">Troubleshooting neural links</a>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .os-view-container { display: flex; flex-direction: column; height: 100%; max-width: 1000px; margin: 0 auto; }
        
        .support-header { margin-bottom: 40px; }
        .sys-desc { color: var(--text-dim); }

        .support-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; padding-bottom: 40px; }
        
        .ticket-panel h3 { font-size: 1.2rem; color: #fff; margin-bottom: 24px; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 16px; }
        
        .ticket-form { display: flex; flex-direction: column; gap: 20px; }
        .input-group { display: flex; flex-direction: column; gap: 8px; }
        .input-group label { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); }
        .cyber-input { background: rgba(0,0,0,0.5); border: 1px solid var(--panel-border); color: #fff; padding: 12px; font-family: var(--font-mono); font-size: 0.9rem; border-radius: var(--radius-sm); outline: none; transition: var(--tr); resize: vertical; }
        .cyber-input:focus { border-color: var(--neon-cyan); box-shadow: 0 0 10px rgba(0,240,255,0.1); }
        
        .success-msg { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 300px; text-align: center; }
        .success-msg svg { margin-bottom: 16px; }
        .success-msg h4 { font-size: 1.5rem; color: #fff; margin-bottom: 8px; }
        .success-msg p { color: var(--text-dim); font-size: 0.9rem; max-width: 300px; line-height: 1.5; }

        .side-panel { display: flex; flex-direction: column; gap: 24px; }
        
        .discord-panel { display: flex; align-items: flex-start; gap: 16px; border-color: rgba(88,101,242,0.3); background: linear-gradient(135deg, rgba(88,101,242,0.05), transparent); }
        
        .faq-panel h4 { font-size: 1rem; color: #fff; margin-bottom: 16px; }
        .faq-list { display: flex; flex-direction: column; gap: 12px; }
        .faq-list a { font-family: var(--font-mono); font-size: 0.8rem; color: var(--neon-cyan); padding-bottom: 8px; border-bottom: 1px dashed rgba(0,240,255,0.2); }
        .faq-list a:last-of-type { border-bottom: none; }
        .faq-list a:hover { color: #fff; }

        @media (max-width: 768px) {
          .support-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
