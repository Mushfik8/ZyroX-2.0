import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'

function AnimatedCounter({ target, duration = 2000, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true
    const startTime = Date.now()
    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

export default function CampaignHub({ setActiveView }) {
  const { user, userData } = useAuth()
  const [copied, setCopied] = useState(false)

  const leaderboardCount = 543
  const maxSpots = 1000
  const spotsLeft = maxSpots - leaderboardCount
  const fillPercent = (leaderboardCount / maxSpots) * 100

  const globalReferrals = 13321
  const userReferrals = userData?.total_referrals || 0

  const referralLink = 'https://zyrox.finance/ref/0x4F9...A1B2'

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="os-view-container">
      <div className="campaign-header">
        <h2 className="sys-title">ACTIVE <span style={{ color: 'var(--neon-purple)' }}>CAMPAIGNS</span></h2>
        <p className="campaign-subtitle">Participate in live ecosystem campaigns to earn rewards and climb the leaderboard.</p>
      </div>

      {/* Campaign Stats Bar */}
      <div className="campaign-stats-bar">
        <div className="campaign-stat-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <span className="stat-value"><AnimatedCounter target={leaderboardCount + globalReferrals} /></span>
          <span className="stat-label">TOTAL PARTICIPANTS</span>
        </div>
        <div className="campaign-stat-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          <span className="stat-value">2</span>
          <span className="stat-label">LIVE CAMPAIGNS</span>
        </div>
        <div className="campaign-stat-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neon-purple)" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span className="stat-value" style={{ color: 'var(--neon-purple)' }}>{spotsLeft}</span>
          <span className="stat-label">SPOTS REMAINING</span>
        </div>
      </div>

      {/* Campaign Cards Grid */}
      <div className="campaign-cards-grid">

        {/* Card 1: Play & Be Top 1000 */}
        <motion.div className="os-panel campaign-card" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 400, damping: 30 }}>
          <div className="campaign-card-badge play-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            PLAY TO EARN
          </div>

          <div className="campaign-card-icon play-icon-wrapper">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3l1 10"/><path d="M2 9h20"/><path d="M6.5 3L11 9"/><path d="M17.5 3L13 9"/>
            </svg>
          </div>

          <h3 className="campaign-card-title">PLAY & BE TOP 1000</h3>
          <p className="campaign-card-desc">Compete in gamified protocols. Top 1,000 operators on the leaderboard will receive exclusive ecosystem rewards.</p>

          {/* Progress Section */}
          <div className="campaign-progress-section">
            <div className="progress-header">
              <span className="progress-label">LEADERBOARD CAPACITY</span>
              <span className="progress-value"><AnimatedCounter target={leaderboardCount} /> / {maxSpots.toLocaleString()}</span>
            </div>
            <div className="progress-bar-bg">
              <motion.div
                className="progress-bar-fill play-fill"
                initial={{ width: 0 }}
                animate={{ width: `${fillPercent}%` }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              />
            </div>
            <div className="progress-footer">
              <span className="spots-tag"><AnimatedCounter target={spotsLeft} /> spots remaining</span>
              <span className="fill-pct">{fillPercent.toFixed(1)}% filled</span>
            </div>
          </div>

          <button className="cyber-btn campaign-cta play-cta" onClick={() => setActiveView('play')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            START PLAYING
          </button>
        </motion.div>

        {/* Card 2: Refer & Earn */}
        <motion.div className="os-panel campaign-card" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 400, damping: 30 }}>
          <div className="campaign-card-badge refer-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            REFER & EARN
          </div>

          <div className="campaign-card-icon refer-icon-wrapper">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
            </svg>
          </div>

          <h3 className="campaign-card-title">REFER & EARN</h3>
          <p className="campaign-card-desc">Expand the network by inviting operators. Earn 10% passive XP yield from every referred user's activity.</p>

          {/* Referral Stats */}
          <div className="referral-stats-grid">
            <div className="referral-stat-box">
              <span className="referral-stat-num"><AnimatedCounter target={globalReferrals} /></span>
              <span className="referral-stat-label">NETWORK REFERRALS</span>
            </div>
            <div className="referral-stat-box user-stat-box">
              <span className="referral-stat-num user-num">{userReferrals}</span>
              <span className="referral-stat-label">YOUR REFERRALS</span>
            </div>
          </div>

          {/* Referral Link Copy */}
          <div className="referral-link-section">
            <div className="ref-link-display">
              <span className="ref-link-text">{referralLink.length > 42 ? referralLink.slice(0, 42) + '...' : referralLink}</span>
              <button className={`ref-copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                {copied ? '✓' : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                )}
              </button>
            </div>
          </div>

          <button className="cyber-btn campaign-cta refer-cta" onClick={() => setActiveView('referral')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            INVITE FRIENDS
          </button>
        </motion.div>
      </div>

      <style>{`
        .campaign-header { margin-bottom: 32px; }
        .campaign-subtitle { font-size: 0.9rem; color: var(--text-dim); margin-top: -16px; font-family: var(--font-body); }

        .campaign-stats-bar {
          display: flex; gap: 24px; margin-bottom: 32px;
          padding: 16px 24px;
          background: rgba(0, 240, 255, 0.03);
          border: 1px solid rgba(0, 240, 255, 0.1);
          border-radius: var(--radius-lg);
        }
        .campaign-stat-item {
          display: flex; align-items: center; gap: 10px; flex: 1;
        }
        .stat-value {
          font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; color: #fff;
        }
        .stat-label {
          font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-dim); letter-spacing: 1.5px;
        }

        .campaign-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          padding-bottom: 40px;
        }

        .campaign-card {
          display: flex; flex-direction: column;
          padding: 32px;
          border-color: rgba(138, 43, 226, 0.15);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .campaign-card::after {
          content: '';
          position: absolute; top: 0; right: 0;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(0, 240, 255, 0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .campaign-card:hover {
          border-color: rgba(0, 240, 255, 0.3);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 240, 255, 0.06);
        }

        .campaign-card-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 2px;
          padding: 4px 12px; border-radius: 20px;
          width: fit-content; margin-bottom: 20px;
        }
        .play-badge { color: var(--neon-cyan); background: rgba(0,240,255,0.08); border: 1px solid rgba(0,240,255,0.25); }
        .refer-badge { color: var(--neon-green); background: rgba(0,255,102,0.08); border: 1px solid rgba(0,255,102,0.25); }

        .campaign-card-icon {
          width: 72px; height: 72px;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
        .play-icon-wrapper {
          background: rgba(0, 240, 255, 0.06);
          border: 1px solid rgba(0, 240, 255, 0.2);
          color: var(--neon-cyan);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.1);
        }
        .refer-icon-wrapper {
          background: rgba(0, 255, 102, 0.06);
          border: 1px solid rgba(0, 255, 102, 0.2);
          color: var(--neon-green);
          box-shadow: 0 0 20px rgba(0, 255, 102, 0.1);
        }

        .campaign-card-title {
          font-family: var(--font-display);
          font-size: 1.5rem; color: #fff;
          margin-bottom: 10px; letter-spacing: 1px;
        }
        .campaign-card-desc {
          font-size: 0.85rem; color: var(--text-dim); line-height: 1.6;
          margin-bottom: 24px; flex: 1;
        }

        /* Progress Bar */
        .campaign-progress-section {
          background: rgba(0, 0, 0, 0.4);
          padding: 16px 20px;
          border-radius: var(--radius-md);
          border: 1px dashed rgba(0, 240, 255, 0.12);
          margin-bottom: 24px;
        }
        .progress-header {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 10px;
        }
        .progress-label { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-dim); letter-spacing: 1.5px; }
        .progress-value { font-family: var(--font-mono); font-size: 0.8rem; color: var(--neon-cyan); font-weight: bold; }
        .progress-bar-bg {
          width: 100%; height: 10px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 6px; overflow: hidden;
          position: relative;
        }
        .progress-bar-fill {
          height: 100%; border-radius: 6px;
          position: relative;
        }
        .play-fill {
          background: linear-gradient(90deg, var(--neon-cyan), var(--neon-purple));
          box-shadow: 0 0 12px rgba(0, 240, 255, 0.4);
        }
        .progress-bar-fill::after {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 2s infinite;
        }
        .progress-footer {
          display: flex; justify-content: space-between; margin-top: 8px;
        }
        .spots-tag { font-family: var(--font-mono); font-size: 0.7rem; color: var(--neon-green); }
        .fill-pct { font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-dim); }

        /* Referral Stats */
        .referral-stats-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
          margin-bottom: 20px;
        }
        .referral-stat-box {
          background: rgba(0, 0, 0, 0.4);
          padding: 16px;
          border-radius: var(--radius-md);
          border: 1px dashed rgba(0, 255, 102, 0.12);
          text-align: center;
        }
        .user-stat-box { border-color: rgba(138, 43, 226, 0.2); }
        .referral-stat-num {
          display: block;
          font-family: var(--font-display);
          font-size: 2rem; font-weight: 700;
          color: var(--neon-green);
          text-shadow: 0 0 15px rgba(0, 255, 102, 0.3);
        }
        .user-num { color: var(--neon-purple); text-shadow: 0 0 15px rgba(138,43,226,0.3); }
        .referral-stat-label {
          font-family: var(--font-mono); font-size: 0.6rem;
          color: var(--text-dim); letter-spacing: 1.5px; margin-top: 4px; display: block;
        }

        /* Referral Link */
        .referral-link-section { margin-bottom: 24px; }
        .ref-link-display {
          display: flex; align-items: center; gap: 8px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-sm);
          padding: 10px 12px;
        }
        .ref-link-text {
          flex: 1;
          font-family: var(--font-mono); font-size: 0.72rem;
          color: var(--neon-cyan); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .ref-copy-btn {
          width: 32px; height: 32px;
          background: rgba(0, 240, 255, 0.08);
          border: 1px solid rgba(0, 240, 255, 0.2);
          border-radius: 6px;
          color: var(--neon-cyan);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .ref-copy-btn:hover { background: rgba(0, 240, 255, 0.2); }
        .ref-copy-btn.copied { border-color: var(--neon-green); color: var(--neon-green); background: rgba(0, 255, 102, 0.1); }

        /* CTA Buttons */
        .campaign-cta {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          width: 100%; padding: 14px 20px;
          font-size: 0.85rem; font-weight: 600;
          border-radius: var(--radius-md);
        }
        .play-cta {
          background: rgba(0, 240, 255, 0.08);
          border-color: rgba(0, 240, 255, 0.35);
          color: var(--neon-cyan);
        }
        .play-cta:hover {
          background: rgba(0, 240, 255, 0.2);
          box-shadow: 0 0 25px rgba(0, 240, 255, 0.2);
        }
        .refer-cta {
          background: rgba(0, 255, 102, 0.08);
          border-color: rgba(0, 255, 102, 0.35);
          color: var(--neon-green);
        }
        .refer-cta:hover {
          background: rgba(0, 255, 102, 0.2);
          box-shadow: 0 0 25px rgba(0, 255, 102, 0.2);
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 900px) {
          .campaign-cards-grid { grid-template-columns: 1fr; }
          .campaign-stats-bar { flex-direction: column; gap: 16px; }
        }

        @media (max-width: 480px) {
          .campaign-card { padding: 24px; }
          .referral-stats-grid { grid-template-columns: 1fr; }
          .campaign-card-title { font-size: 1.25rem; }
        }
      `}</style>
    </div>
  )
}
