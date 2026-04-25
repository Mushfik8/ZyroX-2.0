import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'

export default function LoginModal({ isOpen, onClose }) {
  const { loginWithGoogle } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = async () => {
    setIsLoading(true)
    setError(null)
    try {
      await loginWithGoogle()
      onClose?.()
    } catch (err) {
      setError('Authentication failed. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="login-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && onClose?.()}
        >
          <motion.div
            className="login-modal-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="login-modal-glow" />

            <div className="login-modal-header">
              <div className="login-modal-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3>AUTHENTICATION REQUIRED</h3>
              <p>Establish neural link to access this protocol</p>
            </div>

            <div className="login-modal-status">
              <span className="lm-status-dot" />
              <span>SECURITY PROTOCOL ACTIVE</span>
            </div>

            <button
              className={`login-google-btn ${isLoading ? 'loading' : ''}`}
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="login-spinner" />
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              )}
              <span>{isLoading ? 'ESTABLISHING LINK...' : 'CONTINUE WITH GOOGLE'}</span>
            </button>

            {error && (
              <motion.div className="login-error" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                {error}
              </motion.div>
            )}

            <button className="login-close-btn" onClick={onClose}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <p className="login-modal-footer">Secured by Firebase Authentication</p>
          </motion.div>

          <style>{`
            .login-modal-overlay {
              position: fixed; inset: 0; z-index: 10000;
              display: flex; align-items: center; justify-content: center;
              background: rgba(0,0,0,0.75);
              backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
              padding: 24px;
            }
            .login-modal-card {
              position: relative; width: 100%; max-width: 420px;
              background: rgba(8,4,18,0.92);
              border: 1px solid rgba(0,240,255,0.2);
              border-radius: 16px; padding: 48px 36px 36px;
              display: flex; flex-direction: column; align-items: center; gap: 24px;
              box-shadow: 0 0 60px rgba(0,240,255,0.08), 0 0 120px rgba(138,43,226,0.06), 0 24px 80px rgba(0,0,0,0.6);
            }
            .login-modal-glow {
              position: absolute; top: 0; left: 0; right: 0; height: 2px;
              background: linear-gradient(90deg, transparent, var(--neon-cyan), var(--neon-purple), transparent);
              border-radius: 16px 16px 0 0;
            }
            .login-modal-header {
              display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center;
            }
            .login-modal-icon {
              width: 64px; height: 64px; border-radius: 16px;
              background: rgba(0,240,255,0.08); border: 1px solid rgba(0,240,255,0.25);
              display: flex; align-items: center; justify-content: center;
              color: var(--neon-cyan); box-shadow: 0 0 25px rgba(0,240,255,0.15);
            }
            .login-modal-header h3 {
              font-family: var(--font-display); font-size: 1.4rem; color: #fff; letter-spacing: 2px; margin: 0;
            }
            .login-modal-header p {
              font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim); letter-spacing: 1px; margin: 0;
            }
            .login-modal-status {
              display: flex; align-items: center; gap: 8px;
              padding: 6px 14px; background: rgba(0,255,102,0.06);
              border: 1px solid rgba(0,255,102,0.2); border-radius: 20px;
            }
            .lm-status-dot {
              width: 6px; height: 6px; border-radius: 50%;
              background: var(--neon-green); box-shadow: 0 0 8px var(--neon-green);
              animation: lmPulse 2s infinite;
            }
            .login-modal-status span:last-child {
              font-family: var(--font-mono); font-size: 0.65rem; color: var(--neon-green); letter-spacing: 1.5px;
            }
            .login-google-btn {
              display: flex; align-items: center; justify-content: center; gap: 12px;
              width: 100%; padding: 14px 24px;
              background: rgba(0,240,255,0.06); border: 1px solid rgba(0,240,255,0.35);
              border-radius: 10px; color: var(--neon-cyan);
              font-family: var(--font-display); font-size: 0.95rem; font-weight: 600;
              letter-spacing: 2px; cursor: pointer;
              transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
            }
            .login-google-btn:hover:not(:disabled) {
              background: rgba(0,240,255,0.15); border-color: var(--neon-cyan);
              box-shadow: 0 0 25px rgba(0,240,255,0.2), inset 0 0 20px rgba(0,240,255,0.05);
              transform: translateY(-1px);
            }
            .login-google-btn:disabled { opacity: 0.6; cursor: not-allowed; }
            .login-google-btn.loading { border-color: var(--neon-purple); color: var(--neon-purple); }
            .login-spinner {
              width: 20px; height: 20px;
              border: 2px solid rgba(138,43,226,0.2); border-top-color: var(--neon-purple);
              border-radius: 50%; animation: lmSpin 0.8s linear infinite;
            }
            .login-error {
              font-family: var(--font-mono); font-size: 0.75rem; color: var(--neon-orange);
              text-align: center; padding: 8px 16px;
              background: rgba(255,60,0,0.08); border: 1px solid rgba(255,60,0,0.2);
              border-radius: 6px; width: 100%;
            }
            .login-close-btn {
              position: absolute; top: 16px; right: 16px;
              width: 32px; height: 32px; border-radius: 8px;
              background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
              color: var(--text-dim); display: flex; align-items: center; justify-content: center;
              cursor: pointer; transition: all 0.2s ease;
            }
            .login-close-btn:hover {
              color: var(--neon-orange); border-color: rgba(255,60,0,0.3); background: rgba(255,60,0,0.08);
            }
            .login-modal-footer {
              font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); letter-spacing: 1px; margin: 0;
            }
            @keyframes lmPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
            @keyframes lmSpin { 100% { transform: rotate(360deg); } }
            @media (max-width: 480px) {
              .login-modal-card { padding: 40px 24px 28px; }
              .login-modal-header h3 { font-size: 1.15rem; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
