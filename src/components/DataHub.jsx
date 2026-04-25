import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

function AnimatedCounter({ value, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [value])

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>
}

export default function DataHub() {
  const { user, userData } = useAuth()
  const [checkedIn, setCheckedIn] = useState(false)
  const [claiming, setClaiming] = useState(false)
  const [copied, setCopied] = useState(false)

  // Mock data
  const totalXP = 12450
  const rank = 842
  const xpNeeded = 550
  const pendingXP = 120
  const isEligible = totalXP >= 10000
  const streakDays = 3
  const referrals = userData?.total_referrals || 23
  const referralXP = referrals * 50

  const referralLink = 'https://zyrox.finance/ref/0x4F9...A1B2'

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
      
      <div className="data-header">
        <h2 className="sys-title">XP <span style={{ color: 'var(--neon-purple)' }}>DASHBOARD</span></h2>
      </div>

      <div className="telemetry-grid">
        {/* LEFT PANEL: XP Stats */}
        <div className="telemetry-main os-panel">
          <div className="panel-label">TOTAL EXPERIENCE POINTS</div>
          <div className="main-stat dh-xp-glow">
            <AnimatedCounter value={totalXP} />
            <span className="dh-xp-suffix">XP</span>
          </div>
          
          <div className="dh-stats-list">
            <div className="dh-stat-row">
              <span className="dh-stat-label">USER RANK</span>
              <span className="dh-stat-val">#<AnimatedCounter value={rank} /></span>
            </div>
            <div className="dh-stat-row">
              <span className="dh-stat-label">WHITELIST STATUS</span>
              <span className={`dh-badge ${isEligible ? 'eligible' : 'not-eligible'}`}>
                {isEligible ? '✓ ELIGIBLE' : '✗ NOT ELIGIBLE'}
              </span>
            </div>
            <div className="dh-stat-row">
              <span className="dh-stat-label">XP NEEDED</span>
              <span className="dh-stat-val" style={{ color: isEligible ? 'var(--neon-green)' : 'var(--neon-cyan)' }}>
                {isEligible ? 'QUALIFIED' : `+${xpNeeded} XP to unlock`}
              </span>
            </div>
            <div className="dh-stat-row">
              <span className="dh-stat-label">PENDING XP</span>
              <span className="dh-stat-val" style={{ color: 'var(--neon-purple)', textShadow: '0 0 10px rgba(138,43,226,0.3)' }}>
                +{pendingXP} XP
              </span>
            </div>
          </div>

          <button
            className={`cyber-btn dh-claim-btn ${claiming ? 'dh-loading' : ''}`}
            onClick={handleClaim}
            disabled={claiming}
          >
            {claiming ? 'PROCESSING...' : 'CLAIM XP'}
          </button>
        </div>

        {/* RIGHT PANEL: Check-in + Earn */}
        <div className="telemetry-side">
          {/* Daily Check-in */}
          <div className="os-panel stat-box">
            <div className="panel-label">DAILY CHECK-IN</div>
            <p className="dh-section-desc">Check in daily to earn XP and build your streak.</p>
            
            <div className="dh-streak-display">
              <span className="dh-streak-fire">🔥</span>
              <span className="dh-streak-text">Day {streakDays}</span>
            </div>

            <div className="dh-checkin-reward">
              <span>REWARD</span>
              <span style={{ color: 'var(--neon-cyan)', fontWeight: 'bold' }}>+10 XP</span>
            </div>

            <button
              className={`cyber-btn dh-checkin-btn ${checkedIn ? 'dh-checked' : ''}`}
              onClick={() => setCheckedIn(true)}
              disabled={checkedIn}
            >
              {checkedIn ? '✓ CHECKED IN TODAY' : 'CHECK-IN (+10 XP)'}
            </button>
          </div>
          
          {/* Earn XP */}
          <div className="os-panel stat-box">
            <div className="panel-label">EARN XP</div>

            {/* Referral */}
            <div className="dh-earn-section">
              <p className="dh-section-desc">Invite friends and earn XP</p>
              <div className="dh-ref-row">
                <div className="dh-ref-item">
                  <span className="dh-ref-num">{referrals}</span>
                  <span className="dh-ref-lbl">REFERRALS</span>
                </div>
                <div className="dh-ref-item">
                  <span className="dh-ref-num" style={{ color: 'var(--neon-purple)', textShadow: '0 0 10px rgba(138,43,226,0.3)' }}>{referralXP.toLocaleString()}</span>
                  <span className="dh-ref-lbl">XP EARNED</span>
                </div>
              </div>
              <button className={`cyber-btn sm dh-copy-btn ${copied ? 'dh-copied' : ''}`} onClick={handleCopy}>
                {copied ? '✓ COPIED' : 'COPY REFERRAL LINK'}
              </button>
            </div>

            {/* Tasks */}
            <div className="dh-earn-divider" />
            <p className="dh-section-desc" style={{ marginBottom: 0 }}>Complete tasks and play games to earn XP.</p>
          </div>
        </div>
      </div>

      <style>{`
        .os-view-container { display: flex; flex-direction: column; height: 100%; max-width: 1200px; margin: 0 auto; }
        .data-header { margin-bottom: 32px; }
        .telemetry-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }
        .panel-label { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim); letter-spacing: 2px; margin-bottom: 12px; }
        .telemetry-main { display: flex; flex-direction: column; }

        .main-stat {
          font-family: var(--font-display); font-size: clamp(3rem, 6vw, 5rem); font-weight: 700;
          color: #fff; line-height: 1; margin-bottom: 32px;
        }
        .dh-xp-glow {
          background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          text-shadow: none;
          filter: drop-shadow(0 0 20px rgba(138,43,226,0.3));
        }
        .dh-xp-suffix {
          font-size: 1.5rem; margin-left: 12px; letter-spacing: 3px;
          background: none; -webkit-text-fill-color: var(--neon-purple);
        }

        .dh-stats-list { display: flex; flex-direction: column; gap: 0; flex: 1; }
        .dh-stat-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 14px 0; border-bottom: 1px dashed rgba(255,255,255,0.06);
        }
        .dh-stat-row:last-child { border-bottom: none; }
        .dh-stat-label { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); letter-spacing: 1px; }
        .dh-stat-val { font-family: var(--font-mono); font-size: 1rem; color: #fff; font-weight: 600; }

        .dh-badge {
          font-family: var(--font-mono); font-size: 0.7rem; font-weight: 600;
          padding: 3px 10px; border-radius: 4px; letter-spacing: 1px;
        }
        .dh-badge.eligible { color: var(--neon-green); background: rgba(0,255,102,0.08); border: 1px solid rgba(0,255,102,0.25); }
        .dh-badge.not-eligible { color: var(--neon-orange); background: rgba(255,60,0,0.08); border: 1px solid rgba(255,60,0,0.2); }

        .dh-claim-btn {
          width: 100%; margin-top: 20px; padding: 14px;
          background: rgba(138,43,226,0.08); border: 1px solid rgba(138,43,226,0.35);
          color: var(--neon-purple); font-size: 0.85rem; border-radius: var(--radius-md);
        }
        .dh-claim-btn:hover:not(:disabled) { background: rgba(138,43,226,0.2); box-shadow: 0 0 20px rgba(138,43,226,0.2); }
        .dh-loading { opacity: 0.5; pointer-events: none; animation: dhPulse 1.5s infinite; }

        .telemetry-side { display: flex; flex-direction: column; gap: 24px; }
        .stat-box { display: flex; flex-direction: column; justify-content: center; flex: 1; }

        .dh-section-desc { font-size: 0.82rem; color: var(--text-dim); margin-bottom: 16px; line-height: 1.4; }

        .dh-streak-display {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 16px; background: rgba(255,60,0,0.04);
          border: 1px solid rgba(255,60,0,0.12); border-radius: var(--radius-sm);
          margin-bottom: 16px;
        }
        .dh-streak-fire { font-size: 1.5rem; }
        .dh-streak-text { font-family: var(--font-display); font-size: 1.2rem; color: #fff; font-weight: 700; letter-spacing: 1px; }

        .dh-checkin-reward {
          display: flex; justify-content: space-between;
          font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim);
          padding: 10px 14px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm);
          border: 1px dashed rgba(255,255,255,0.06); margin-bottom: 16px;
        }

        .dh-checkin-btn {
          width: 100%; padding: 12px;
          background: rgba(0,240,255,0.08); border: 1px solid rgba(0,240,255,0.3);
          color: var(--neon-cyan); font-size: 0.82rem; border-radius: var(--radius-md);
        }
        .dh-checkin-btn:hover:not(:disabled) { background: rgba(0,240,255,0.18); box-shadow: 0 0 15px rgba(0,240,255,0.15); }
        .dh-checked { background: rgba(0,255,102,0.06); border-color: rgba(0,255,102,0.25); color: var(--neon-green); opacity: 0.8; cursor: default; }

        .dh-earn-section { margin-bottom: 12px; }
        .dh-ref-row { display: flex; gap: 12px; margin-bottom: 14px; }
        .dh-ref-item {
          flex: 1; text-align: center; padding: 12px;
          background: rgba(0,0,0,0.4); border-radius: var(--radius-sm);
          border: 1px dashed rgba(0,240,255,0.1);
        }
        .dh-ref-num {
          display: block; font-family: var(--font-display); font-size: 1.5rem; font-weight: 700;
          color: var(--neon-cyan); text-shadow: 0 0 10px rgba(0,240,255,0.3);
        }
        .dh-ref-lbl { font-family: var(--font-mono); font-size: 0.55rem; color: var(--text-dim); letter-spacing: 1.5px; display: block; margin-top: 4px; }

        .dh-copy-btn {
          width: 100%; padding: 10px; font-size: 0.72rem;
          background: rgba(0,240,255,0.06); border: 1px solid rgba(0,240,255,0.2);
          color: var(--neon-cyan); border-radius: var(--radius-sm);
        }
        .dh-copy-btn:hover:not(:disabled) { background: rgba(0,240,255,0.15); }
        .dh-copied { border-color: var(--neon-green); color: var(--neon-green); background: rgba(0,255,102,0.08); }

        .dh-earn-divider { height: 1px; background: rgba(255,255,255,0.06); margin: 12px 0 16px; }

        @keyframes dhPulse { 0%,100% { opacity: 0.5; } 50% { opacity: 0.2; } }

        @media (max-width: 1024px) {
          .telemetry-grid { grid-template-columns: 1fr; }
          .telemetry-side { flex-direction: column; }
        }
      `}</style>
    </div>
  )
}
