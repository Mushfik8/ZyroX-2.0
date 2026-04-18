import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function SystemBoot({ onBootComplete }) {
  const [lines, setLines] = useState([])
  const [progress, setProgress] = useState(0)

  const bootSequence = [
    "INITIALIZING ZYROX PROTOCOL V3...",
    "ESTABLISHING SECURE NEURAL LINK...",
    "DECRYPTING SMART CONTRACTS... OK",
    "LOADING TASK MATRIX... OK",
    "SYNCING LIVE DATA HUB... OK",
    "SYSTEM READY."
  ]

  useEffect(() => {
    let currentLine = 0
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]])
        setProgress(Math.floor(((currentLine + 1) / bootSequence.length) * 100))
        currentLine++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          onBootComplete()
        }, 800)
      }
    }, 400)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="system-boot">
      <div className="boot-terminal">
        {lines.map((line, i) => (
          <motion.div 
            key={i} 
            className="boot-line"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="prompt">{'>'}</span> {line}
          </motion.div>
        ))}
        {progress < 100 && <div className="cursor-blink" />}
      </div>
      
      <div className="boot-progress-container">
        <div className="boot-progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="boot-pct">{progress}%</div>
      
      <style>{`
        .system-boot {
          position: fixed; inset: 0;
          background: var(--bg-void);
          z-index: 9999;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          font-family: var(--font-mono);
          color: var(--neon-cyan);
        }
        .boot-terminal {
          width: 100%; max-width: 600px;
          min-height: 200px;
          padding: 24px;
          border: 1px solid rgba(0, 240, 255, 0.2);
          background: rgba(0, 10, 20, 0.5);
          border-radius: var(--radius-sm);
          box-shadow: 0 0 30px rgba(0, 240, 255, 0.05);
          position: relative;
        }
        .boot-line {
          margin-bottom: 8px;
          font-size: 0.9rem;
          letter-spacing: 1px;
        }
        .prompt { color: var(--neon-purple); margin-right: 8px; }
        .cursor-blink {
          display: inline-block;
          width: 10px; height: 16px;
          background: var(--neon-cyan);
          animation: blink 1s step-end infinite;
          margin-top: 8px;
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .boot-progress-container {
          width: 100%; max-width: 600px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          margin-top: 32px;
          position: relative;
        }
        .boot-progress-bar {
          height: 100%;
          background: var(--neon-cyan);
          transition: width 0.3s ease;
          box-shadow: 0 0 10px var(--neon-cyan);
        }
        .boot-pct {
          margin-top: 12px;
          font-size: 0.8rem;
          letter-spacing: 2px;
          color: var(--text-dim);
        }
      `}</style>
    </div>
  )
}
