import { useState, useEffect } from 'react'

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
  return (
    <div className="os-view-container">
      
      <div className="data-header">
        <h2 className="sys-title">GLOBAL <span style={{ color: 'var(--neon-green)' }}>TELEMETRY</span></h2>
      </div>

      <div className="telemetry-grid">
        <div className="telemetry-main os-panel">
          <div className="panel-label">TOTAL VALUE LOCKED (TVL)</div>
          <div className="main-stat">
            <AnimatedCounter value={12450890} prefix="$" />
          </div>
          
          <div className="graph-container">
            <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="live-graph">
              <path 
                d="M0,100 L0,50 Q20,40 40,60 T80,40 T120,70 T160,30 T200,50 T240,20 T280,60 T320,10 T360,40 L400,20 L400,100 Z" 
                fill="url(#gradient)" stroke="var(--neon-green)" strokeWidth="2"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(0, 255, 102, 0.3)" />
                  <stop offset="100%" stopColor="rgba(0, 255, 102, 0)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="graph-pulse" />
          </div>
        </div>

        <div className="telemetry-side">
          <div className="os-panel stat-box">
            <div className="panel-label">ACTIVE WALLETS</div>
            <div className="sub-stat">
              <AnimatedCounter value={42891} />
            </div>
            <div className="stat-trend positive">↑ 12.4% THIS EPOCH</div>
          </div>
          
          <div className="os-panel stat-box">
            <div className="panel-label">TOKENS DISTRIBUTED</div>
            <div className="sub-stat" style={{ color: 'var(--neon-purple)' }}>
              <AnimatedCounter value={8920000} suffix=" ZYROX" />
            </div>
            <div className="stat-trend">VERIFIED ON BSC</div>
          </div>
          
          <div className="os-panel stat-box">
            <div className="panel-label">SYSTEM UPTIME</div>
            <div className="sub-stat" style={{ color: 'var(--neon-cyan)' }}>
              99.99%
            </div>
            <div className="stat-trend positive">SECURE</div>
          </div>
        </div>
      </div>

      <style>{`
        .os-view-container { display: flex; flex-direction: column; height: 100%; max-width: 1200px; margin: 0 auto; }
        
        .data-header { margin-bottom: 32px; }
        
        .telemetry-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .panel-label {
          font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim); letter-spacing: 2px; margin-bottom: 12px;
        }

        .telemetry-main { display: flex; flex-direction: column; }

        .main-stat {
          font-family: var(--font-display); font-size: clamp(3rem, 6vw, 5rem); font-weight: 700;
          color: #fff; line-height: 1; margin-bottom: 32px;
          text-shadow: 0 0 30px rgba(0, 255, 102, 0.3);
        }

        .graph-container {
          flex: 1; min-height: 200px; position: relative;
          border-top: 1px dashed rgba(255,255,255,0.1); border-bottom: 1px dashed rgba(255,255,255,0.1);
          overflow: hidden;
        }

        .live-graph { width: 100%; height: 100%; filter: drop-shadow(0 0 10px rgba(0, 255, 102, 0.5)); }

        .graph-pulse {
          position: absolute; right: 0; top: 20px; width: 8px; height: 8px;
          background: var(--neon-green); border-radius: 50%; box-shadow: 0 0 10px var(--neon-green);
          animation: pulseGreen 2s infinite;
        }

        @keyframes pulseGreen {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(2); opacity: 0.4; box-shadow: 0 0 20px var(--neon-green); }
        }

        .telemetry-side { display: flex; flex-direction: column; gap: 24px; }
        .stat-box { display: flex; flex-direction: column; justify-content: center; flex: 1; }
        .sub-stat { font-family: var(--font-display); font-size: 2.2rem; font-weight: 700; color: #fff; margin-bottom: 8px; }

        .stat-trend { font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); }
        .stat-trend.positive { color: var(--neon-green); }

        @media (max-width: 1024px) {
          .telemetry-grid { grid-template-columns: 1fr; }
          .telemetry-side { flex-direction: row; flex-wrap: wrap; }
          .stat-box { min-width: 250px; }
        }
      `}</style>
    </div>
  )
}
