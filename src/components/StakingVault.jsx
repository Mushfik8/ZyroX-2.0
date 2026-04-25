import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'

function AnimatedNum({ target, duration = 1500 }) {
  const [val, setVal] = useState(0)
  const started = useRef(false)
  useEffect(() => {
    if (started.current) return
    started.current = true
    const t0 = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - t0) / duration, 1)
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration])
  return <>{val.toLocaleString()}</>
}

export default function StakingVault() {
  const { user, userData } = useAuth()
  const [activeTab, setActiveTab] = useState('checkin')
  const [checkedIn, setCheckedIn] = useState(false)
  const [claiming, setClaiming] = useState(false)
  const [copied, setCopied] = useState(false)

  // Demo data
  const totalXP = 12450
  const rank = 842
  const xpNeeded = 550
  const pendingXP = 320
  const isEligible = totalXP >= 10000
  const streakDays = 7
  const referrals = userData?.total_referrals || 23
  const referralXP = referrals * 50

  const referralLink = 'https://zyrox.finance/ref/0x4F9...A1B2'

  const handleCheckIn = () => {
    setCheckedIn(true)
  }

  const handleClaim = () => {
    setClaiming(true)
    setTimeout(() => setClaiming(false), 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="os-view-container">
      <div className="vault-header">
        <h2 className="sys-title">XP <span style={{ color: 'var(--neon-purple)' }}>WHITELIST</span></h2>
        <p className="sv-desc">Accumulate XP to qualify for whitelist allocation and early access rewards.</p>
      </div>

      <div className="vault-grid">

        {/* LEFT: XP Dashboard */}
        <div className="os-panel sv-stats-panel">
          {/* Total XP */}
          <div className="sv-xp-hero">
            <span className="sv-xp-label">TOTAL XP</span>
            <div className="sv-xp-value">
              <AnimatedNum target={totalXP} />
            </div>
          </div>

          <div className="sv-stat-row">
            <span className="sv-stat-label">USER RANK</span>
            <span className="sv-stat-val">#<AnimatedNum target={rank} duration={1200} /></span>
          </div>

          <div className="sv-stat-row">
            <span className="sv-stat-label">WHITELIST STATUS</span>
            <span className={`sv-status-badge ${isEligible ? 'eligible' : 'not-eligible'}`}>
              {isEligible ? '✓ ELIGIBLE' : '✗ NOT ELIGIBLE'}
            </span>
          </div>

          <div className="sv-stat-row">
            <span className="sv-stat-label">XP TO WHITELIST</span>
            <span className="sv-stat-val sv-cyan">{isEligible ? 'QUALIFIED' : xpNeeded.toLocaleString() + ' XP'}</span>
          </div>

          <div className="sv-stat-row">
            <span className="sv-stat-label">PENDING XP REWARDS</span>
            <span className="sv-stat-val sv-purple">+{pendingXP} XP</span>
          </div>

          <button
            className={`cyber-btn sv-claim-btn ${claiming ? 'loading' : ''}`}
            onClick={handleClaim}
            disabled={claiming}
          >
            {claiming ? 'PROCESSING...' : 'CLAIM XP'}
          </button>
        </div>

        {/* RIGHT: Tabs Panel */}
        <div className="os-panel sv-action-panel">
          <div className="sv-tabs">
            <button className={`sv-tab-btn ${activeTab === 'checkin' ? 'active' : ''}`} onClick={() => setActiveTab('checkin')}>
              DAILY CHECK-IN
            </button>
            <button className={`sv-tab-btn ${activeTab === 'earn' ? 'active' : ''}`} onClick={() => setActiveTab('earn')}>
              EARN XP
            </button>
          </div>

          <div className="sv-tab-body">
            {activeTab === 'checkin' ? (
              <div className="sv-checkin-content">
                {/* Streak Display */}
                <div className="sv-streak-section">
                  <div className="sv-streak-icon">🔥</div>
                  <div className="sv-streak-info">
                    <span className="sv-streak-count">{streakDays}-DAY STREAK</span>
                    <span className="sv-streak-sub">Consecutive daily check-ins</span>
                  </div>
                </div>

                {/* Streak Dots */}
                <div className="sv-streak-dots">
                  {[1,2,3,4,5,6,7].map(d => (
                    <div key={d} className={`sv-dot ${d <= streakDays ? 'filled' : ''} ${d === streakDays ? 'current' : ''}`}>
                      <span className="sv-dot-day">D{d}</span>
                    </div>
                  ))}
                </div>

                {/* Reward info */}
                <div className="sv-checkin-reward">
                  <div className="sv-reward-row">
                    <span>BASE REWARD</span>
                    <span className="sv-reward-val">+10 XP</span>
                  </div>
                  <div className="sv-reward-row">
                    <span>STREAK BONUS (x{Math.min(streakDays, 7)})</span>
                    <span className="sv-reward-val sv-purple">+{Math.min(streakDays, 7) * 5} XP</span>
                  </div>
                </div>

                <button
                  className={`cyber-btn sv-checkin-btn ${checkedIn ? 'sv-disabled' : ''}`}
                  onClick={handleCheckIn}
                  disabled={checkedIn}
                >
                  {checkedIn ? '✓ CHECKED IN TODAY' : 'CHECK-IN (+10 XP)'}
                </button>
              </div>
            ) : (
              <div className="sv-earn-content">
                {/* Referral Section */}
                <div className="sv-earn-block">
                  <div className="sv-earn-block-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <span>REFERRAL REWARDS</span>
                  </div>

                  <div className="sv-ref-stats">
                    <div className="sv-ref-stat-box">
                      <span className="sv-ref-num">{referrals}</span>
                      <span className="sv-ref-label">REFERRALS</span>
                    </div>
                    <div className="sv-ref-stat-box">
                      <span className="sv-ref-num sv-purple">{referralXP.toLocaleString()}</span>
                      <span className="sv-ref-label">XP EARNED</span>
                    </div>
                  </div>

                  <p className="sv-earn-desc">Invite friends and earn <strong>50 XP</strong> per successful referral.</p>

                  <div className="sv-ref-link-box">
                    <span className="sv-ref-link-text">{referralLink.length > 38 ? referralLink.slice(0, 38) + '...' : referralLink}</span>
                    <button className={`sv-ref-copy ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                      {copied ? '✓' : 'COPY'}
                    </button>
                  </div>
                </div>

                {/* Tasks & Games Section */}
                <div className="sv-earn-block">
                  <div className="sv-earn-block-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neon-purple)" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    <span>TASKS & GAMES</span>
                  </div>
                  <p className="sv-earn-desc">Complete tasks and play games to earn XP. Active protocols award bonus multipliers.</p>

                  <div className="sv-earn-quick-stats">
                    <div className="sv-quick-item">
                      <span className="sv-quick-icon">🎯</span>
                      <span>Tasks: <strong>50-2500 XP</strong></span>
                    </div>
                    <div className="sv-quick-item">
                      <span className="sv-quick-icon">🎮</span>
                      <span>Games: <strong>50-500 XP</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .sv-desc { color: var(--text-dim); }
        .vault-header { margin-bottom: 40px; }
        .vault-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 24px; }

        /* LEFT PANEL */
        .sv-stats-panel {
          display: flex; flex-direction: column; gap: 0;
          border-color: rgba(138, 43, 226, 0.25);
        }

        .sv-xp-hero {
          text-align: center; padding: 24px 0 28px;
          border-bottom: 1px dashed rgba(255,255,255,0.08);
          margin-bottom: 20px;
        }
        .sv-xp-label {
          font-family: var(--font-mono); font-size: 0.7rem;
          color: var(--text-dim); letter-spacing: 2px; display: block; margin-bottom: 8px;
        }
        .sv-xp-value {
          font-family: var(--font-display); font-size: 3.2rem; font-weight: 700;
          color: #fff;
          text-shadow: 0 0 30px rgba(138, 43, 226, 0.4), 0 0 60px rgba(0, 240, 255, 0.15);
          background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sv-stat-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 14px 0;
          border-bottom: 1px dashed rgba(255,255,255,0.06);
        }
        .sv-stat-row:last-of-type { border-bottom: none; }
        .sv-stat-label { font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); letter-spacing: 1px; }
        .sv-stat-val { font-family: var(--font-mono); font-size: 1.1rem; color: #fff; font-weight: 600; }
        .sv-stat-val.sv-cyan { color: var(--neon-cyan); text-shadow: 0 0 10px rgba(0,240,255,0.3); }
        .sv-stat-val.sv-purple { color: var(--neon-purple); text-shadow: 0 0 10px rgba(138,43,226,0.3); }

        .sv-status-badge {
          font-family: var(--font-mono); font-size: 0.72rem; font-weight: 600;
          padding: 4px 10px; border-radius: 4px; letter-spacing: 1px;
        }
        .sv-status-badge.eligible { color: var(--neon-green); background: rgba(0,255,102,0.08); border: 1px solid rgba(0,255,102,0.25); }
        .sv-status-badge.not-eligible { color: var(--neon-orange); background: rgba(255,60,0,0.08); border: 1px solid rgba(255,60,0,0.2); }

        .sv-claim-btn {
          width: 100%; margin-top: 24px; padding: 14px;
          background: rgba(138,43,226,0.08); border: 1px solid rgba(138,43,226,0.35);
          color: var(--neon-purple); font-size: 0.85rem;
          border-radius: var(--radius-md);
        }
        .sv-claim-btn:hover:not(:disabled) {
          background: rgba(138,43,226,0.2);
          box-shadow: 0 0 20px rgba(138,43,226,0.2);
        }
        .sv-claim-btn.loading { opacity: 0.6; pointer-events: none; animation: svPulse 1.5s infinite; }

        /* RIGHT PANEL */
        .sv-action-panel { display: flex; flex-direction: column; }

        .sv-tabs {
          display: flex; border-bottom: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 28px;
        }
        .sv-tab-btn {
          flex: 1; background: none; color: var(--text-dim);
          padding: 14px; font-size: 0.85rem; transition: var(--tr);
          position: relative; font-family: var(--font-display); letter-spacing: 1.5px;
        }
        .sv-tab-btn:hover { color: #fff; background: rgba(255,255,255,0.02); }
        .sv-tab-btn.active { color: var(--neon-cyan); }
        .sv-tab-btn.active::after {
          content: ''; position: absolute; bottom: -1px; left: 0; width: 100%; height: 2px;
          background: var(--neon-cyan); box-shadow: 0 0 10px var(--neon-cyan);
        }

        .sv-tab-body { flex: 1; }

        /* CHECK-IN TAB */
        .sv-checkin-content { display: flex; flex-direction: column; gap: 24px; }

        .sv-streak-section {
          display: flex; align-items: center; gap: 16px;
          padding: 20px; background: rgba(255,60,0,0.04);
          border: 1px solid rgba(255,60,0,0.12); border-radius: var(--radius-md);
        }
        .sv-streak-icon { font-size: 2.5rem; }
        .sv-streak-count {
          font-family: var(--font-display); font-size: 1.4rem; color: #fff;
          font-weight: 700; letter-spacing: 1px; display: block;
        }
        .sv-streak-sub { font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-dim); }

        .sv-streak-dots {
          display: flex; gap: 8px; justify-content: space-between;
        }
        .sv-dot {
          flex: 1; text-align: center; padding: 10px 0;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-sm);
          transition: all 0.3s ease;
        }
        .sv-dot.filled {
          background: rgba(0, 240, 255, 0.06);
          border-color: rgba(0, 240, 255, 0.25);
        }
        .sv-dot.current {
          background: rgba(0, 240, 255, 0.12);
          border-color: var(--neon-cyan);
          box-shadow: 0 0 12px rgba(0,240,255,0.15);
        }
        .sv-dot-day {
          font-family: var(--font-mono); font-size: 0.65rem;
          color: var(--text-dim); letter-spacing: 1px;
        }
        .sv-dot.filled .sv-dot-day { color: var(--neon-cyan); }

        .sv-checkin-reward {
          background: rgba(0,0,0,0.3); padding: 16px;
          border-radius: var(--radius-sm); border: 1px dashed rgba(255,255,255,0.06);
        }
        .sv-reward-row {
          display: flex; justify-content: space-between;
          font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim);
          padding: 6px 0;
        }
        .sv-reward-val { color: var(--neon-cyan); font-weight: 600; }
        .sv-reward-val.sv-purple { color: var(--neon-purple); }

        .sv-checkin-btn {
          width: 100%; padding: 14px;
          background: rgba(0,240,255,0.08); border: 1px solid rgba(0,240,255,0.35);
          color: var(--neon-cyan); font-size: 0.9rem;
          border-radius: var(--radius-md);
        }
        .sv-checkin-btn:hover:not(:disabled) {
          background: rgba(0,240,255,0.18);
          box-shadow: 0 0 20px rgba(0,240,255,0.2);
        }
        .sv-checkin-btn.sv-disabled {
          background: rgba(0,255,102,0.06); border-color: rgba(0,255,102,0.25);
          color: var(--neon-green); opacity: 0.8; cursor: default;
        }

        /* EARN XP TAB */
        .sv-earn-content { display: flex; flex-direction: column; gap: 24px; }

        .sv-earn-block {
          padding: 20px; background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-md);
        }
        .sv-earn-block-header {
          display: flex; align-items: center; gap: 10px;
          font-family: var(--font-display); font-size: 1rem; color: #fff;
          letter-spacing: 1.5px; margin-bottom: 16px; font-weight: 600;
        }

        .sv-ref-stats {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;
        }
        .sv-ref-stat-box {
          text-align: center; padding: 14px;
          background: rgba(0,0,0,0.4); border-radius: var(--radius-sm);
          border: 1px dashed rgba(0,240,255,0.1);
        }
        .sv-ref-num {
          display: block; font-family: var(--font-display);
          font-size: 1.8rem; font-weight: 700; color: var(--neon-cyan);
          text-shadow: 0 0 12px rgba(0,240,255,0.3);
        }
        .sv-ref-num.sv-purple { color: var(--neon-purple); text-shadow: 0 0 12px rgba(138,43,226,0.3); }
        .sv-ref-label {
          font-family: var(--font-mono); font-size: 0.6rem; color: var(--text-dim);
          letter-spacing: 1.5px; margin-top: 4px; display: block;
        }

        .sv-earn-desc {
          font-size: 0.82rem; color: var(--text-dim); line-height: 1.5; margin-bottom: 16px;
        }
        .sv-earn-desc strong { color: var(--neon-cyan); }

        .sv-ref-link-box {
          display: flex; align-items: center; gap: 8px;
          background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-sm); padding: 10px 12px;
        }
        .sv-ref-link-text {
          flex: 1; font-family: var(--font-mono); font-size: 0.7rem;
          color: var(--neon-cyan); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .sv-ref-copy {
          background: rgba(0,240,255,0.08); border: 1px solid rgba(0,240,255,0.2);
          border-radius: 4px; color: var(--neon-cyan); padding: 6px 12px;
          font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 1px;
          cursor: pointer; transition: all 0.2s ease; white-space: nowrap;
        }
        .sv-ref-copy:hover { background: rgba(0,240,255,0.2); }
        .sv-ref-copy.copied { border-color: var(--neon-green); color: var(--neon-green); background: rgba(0,255,102,0.1); }

        .sv-earn-quick-stats { display: flex; flex-direction: column; gap: 10px; }
        .sv-quick-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px; background: rgba(255,255,255,0.02);
          border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.04);
          font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-dim);
        }
        .sv-quick-item strong { color: var(--neon-purple); }
        .sv-quick-icon { font-size: 1.2rem; }

        @keyframes svPulse { 0%,100% { opacity: 0.6; } 50% { opacity: 0.3; } }

        @media (max-width: 900px) {
          .vault-grid { grid-template-columns: 1fr; }
          .sv-xp-value { font-size: 2.5rem; }
          .sv-streak-dots { gap: 4px; }
        }
      `}</style>
    </div>
  )
}
