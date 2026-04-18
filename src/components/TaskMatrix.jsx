import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const mockTasks = [
  { id: 'T-091', title: 'Connect Twitter Neural Node', desc: 'Link your Twitter identity to the ZyroX network to begin social mining.', rewardXP: 500, type: 'Social', difficulty: 'EASY', status: 'active' },
  { id: 'T-092', title: 'Daily Market Prediction', desc: 'Forecast BTC price movement for the next 24 hours. Correct predictions yield bonus XP.', rewardXP: 150, type: 'Game', difficulty: 'MEDIUM', status: 'active' },
  { id: 'T-093', title: 'Deploy Testnet Contract', desc: 'Execute and verify a basic smart contract on the BSC testnet.', rewardXP: 2500, type: 'Developer', difficulty: 'HARD', status: 'active' },
  { id: 'T-084', title: 'Wallet Verification', desc: 'Cryptographic signature validation complete.', rewardXP: 100, type: 'Security', difficulty: 'EASY', status: 'completed' },
]

export default function TaskMatrix() {
  const [filter, setFilter] = useState('active')
  const [loadingTaskId, setLoadingTaskId] = useState(null)

  const filteredTasks = mockTasks.filter(t => t.status === filter)

  const handleExecute = (id) => {
    setLoadingTaskId(id)
    setTimeout(() => {
      setLoadingTaskId(null)
    }, 2000)
  }

  const getDifficultyColor = (diff) => {
    switch(diff) {
      case 'EASY': return 'var(--neon-green)';
      case 'MEDIUM': return 'var(--neon-orange)';
      case 'HARD': return 'var(--neon-purple)';
      default: return 'var(--text-dim)';
    }
  }

  return (
    <div className="os-view-container">
      
      <div className="matrix-header">
        <h2 className="sys-title">TASK <span style={{ color: 'var(--neon-cyan)' }}>MATRIX</span></h2>
        <p className="sys-desc">Execute system operations to accumulate Off-Chain XP.</p>
        
        <div className="matrix-filters">
          <button className={`filter-btn ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>
            ACTIVE THREADS
          </button>
          <button className={`filter-btn ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>
            ARCHIVED
          </button>
        </div>
      </div>

      <div className="task-grid">
        <AnimatePresence mode="popLayout">
          {filteredTasks.length === 0 ? (
            <motion.div 
              key="empty"
              className="empty-state"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            >
              [ NO OPERATIONS FOUND IN CURRENT MATRIX ]
            </motion.div>
          ) : (
            filteredTasks.map((task) => (
              <motion.div 
                key={task.id} 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`os-panel task-card ${task.status === 'completed' ? 'completed-card' : ''}`}
              >
                <div className="task-header">
                  <span className="task-id">{task.id}</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span className="task-diff" style={{ borderColor: getDifficultyColor(task.difficulty), color: getDifficultyColor(task.difficulty) }}>
                      {task.difficulty}
                    </span>
                    <span className="task-type">{task.type}</span>
                  </div>
                </div>
                
                <h3 className="task-title">{task.title}</h3>
                <p className="task-desc">{task.desc}</p>
                
                <div className="task-footer">
                  <div className="task-reward">
                    <span className="reward-val">+{task.rewardXP}</span>
                    <span className="reward-sym">XP</span>
                  </div>
                  
                  {task.status === 'active' ? (
                    <button 
                      className={`cyber-btn sm ${loadingTaskId === task.id ? 'loading' : ''}`}
                      onClick={() => handleExecute(task.id)}
                      disabled={loadingTaskId === task.id}
                    >
                      {loadingTaskId === task.id ? 'PROCESSING...' : 'EXECUTE'}
                    </button>
                  ) : (
                    <div className="status-verified">✓ VERIFIED</div>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .os-view-container { display: flex; flex-direction: column; height: 100%; max-width: 1200px; margin: 0 auto; }
        
        .matrix-header { display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 32px; }
        .sys-desc { color: var(--text-dim); font-size: 0.9rem; margin-top: -16px; margin-bottom: 16px; }
        .matrix-filters {
          display: flex; gap: 16px; margin-top: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          width: 100%; padding-bottom: 16px;
        }
        .filter-btn {
          background: none; color: var(--text-dim);
          font-family: var(--font-mono); font-size: 0.85rem;
          position: relative; transition: var(--tr);
        }
        .filter-btn:hover { color: #fff; }
        .filter-btn.active { color: var(--neon-cyan); }
        .filter-btn.active::after {
          content: ''; position: absolute; bottom: -17px; left: 0; width: 100%; height: 2px;
          background: var(--neon-cyan); box-shadow: 0 0 10px var(--neon-cyan);
        }

        .task-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px; padding-bottom: 40px; }
        
        .task-card {
          padding: 24px;
          display: flex; flex-direction: column;
          transition: var(--tr);
        }
        .task-card:hover {
          border-color: rgba(0, 240, 255, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 240, 255, 0.05);
        }

        .task-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .task-id { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim); }
        .task-type, .task-diff { font-size: 0.65rem; font-family: var(--font-mono); text-transform: uppercase; padding: 2px 8px; border: 1px solid var(--text-dim); border-radius: 4px; color: var(--text-dim); }
        
        .task-title { font-size: 1.15rem; margin-bottom: 8px; color: #fff; }
        .task-desc { font-size: 0.85rem; color: var(--text-dim); margin-bottom: 24px; flex: 1; line-height: 1.5; }
        
        .task-footer { display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 16px; }
        .task-reward { display: flex; flex-direction: column; }
        .reward-val { font-family: var(--font-mono); font-size: 1.2rem; color: var(--neon-purple); font-weight: bold; }
        .reward-sym { font-size: 0.7rem; color: var(--text-dim); }

        .cyber-btn.sm { padding: 8px 16px; font-size: 0.75rem; }
        .cyber-btn.loading { border-color: var(--neon-cyan); color: var(--neon-cyan); animation: pulse 1.5s infinite; pointer-events: none; }
        
        .completed-card { opacity: 0.6; border-color: rgba(255,255,255,0.05); }
        .completed-card:hover { transform: none; border-color: rgba(255,255,255,0.1); box-shadow: none; }
        .status-verified { font-family: var(--font-mono); color: var(--neon-green); font-size: 0.8rem; letter-spacing: 1px; }

        .empty-state { grid-column: 1 / -1; text-align: center; padding: 60px; font-family: var(--font-mono); color: var(--text-dim); letter-spacing: 2px; border: 1px dashed rgba(255,255,255,0.1); border-radius: var(--radius-md); }

        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      `}</style>
    </div>
  )
}
