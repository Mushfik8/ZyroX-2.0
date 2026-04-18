import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const mockTasks = [
  { id: 'T-091', title: 'Connect Twitter Neural Node', desc: 'Link your Twitter identity to the ZyroX network to begin social mining.', reward: 500, type: 'Social', status: 'active' },
  { id: 'T-092', title: 'Initialize Telegram Uplink', desc: 'Join the main transmission channel to receive real-time protocol updates.', reward: 300, type: 'Community', status: 'active' },
  { id: 'T-093', title: 'Execute First Swap', desc: 'Perform a token swap on the testnet to validate transaction throughput.', reward: 1200, type: 'DeFi', status: 'active' },
  { id: 'T-084', title: 'Wallet Verification', desc: 'Cryptographic signature validation complete.', reward: 100, type: 'Security', status: 'completed' },
]

export default function TaskMatrix() {
  const [filter, setFilter] = useState('active')
  const [loadingTaskId, setLoadingTaskId] = useState(null)

  const filteredTasks = mockTasks.filter(t => t.status === filter)

  const handleExecute = (id) => {
    setLoadingTaskId(id)
    setTimeout(() => {
      setLoadingTaskId(null)
      // In a real app, this would trigger a modal or Web3 transaction
    }, 2000)
  }

  return (
    <section className="system-node" id="tasks">
      <div className="node-container">
        
        <div className="matrix-header">
          <span className="sys-badge">NODE 02 // TASK MATRIX</span>
          <h2 className="sys-title">AVAILABLE <span style={{ color: 'var(--neon-cyan)' }}>OPERATIONS</span></h2>
          
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
                  className={`task-card ${task.status === 'completed' ? 'completed-card' : ''}`}
                >
                  <div className="task-header">
                    <span className="task-id">{task.id}</span>
                    <span className="task-type">{task.type}</span>
                  </div>
                  
                  <h3 className="task-title">{task.title}</h3>
                  <p className="task-desc">{task.desc}</p>
                  
                  <div className="task-footer">
                    <div className="task-reward">
                      <span className="reward-val">+{task.reward}</span>
                      <span className="reward-sym">$ZYROX</span>
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
                  
                  {/* Decorative background grid for the card */}
                  <div className="card-grid-bg" />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

      </div>

      <style>{`
        .matrix-header { display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 40px; }
        .matrix-filters {
          display: flex; gap: 16px; margin-top: 24px;
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

        .task-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px; }
        
        .task-card {
          background: rgba(0, 10, 20, 0.4);
          border: 1px solid rgba(0, 240, 255, 0.15);
          border-radius: var(--radius-md);
          padding: 24px;
          position: relative; overflow: hidden;
          transition: var(--tr);
          display: flex; flex-direction: column;
        }
        .task-card:hover {
          border-color: rgba(0, 240, 255, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 240, 255, 0.05);
        }
        .card-grid-bg {
          position: absolute; inset: 0; z-index: 0; opacity: 0.05; pointer-events: none;
          background-image: linear-gradient(rgba(0, 240, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .task-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; position: relative; z-index: 1; }
        .task-id { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim); }
        .task-type { font-size: 0.7rem; text-transform: uppercase; padding: 2px 8px; border: 1px solid var(--text-dim); border-radius: 4px; color: var(--text-dim); }
        
        .task-title { font-size: 1.15rem; margin-bottom: 8px; color: #fff; position: relative; z-index: 1; }
        .task-desc { font-size: 0.85rem; color: var(--text-dim); margin-bottom: 24px; flex: 1; position: relative; z-index: 1; }
        
        .task-footer { display: flex; justify-content: space-between; align-items: flex-end; position: relative; z-index: 1; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 16px; }
        .task-reward { display: flex; flex-direction: column; }
        .reward-val { font-family: var(--font-mono); font-size: 1.2rem; color: var(--neon-orange); font-weight: bold; }
        .reward-sym { font-size: 0.7rem; color: var(--text-dim); }

        .cyber-btn.sm { padding: 8px 16px; font-size: 0.75rem; }
        .cyber-btn.loading { border-color: var(--neon-purple); color: var(--neon-purple); animation: pulse 1.5s infinite; pointer-events: none; }
        
        .completed-card { opacity: 0.6; border-color: rgba(255,255,255,0.05); }
        .completed-card:hover { transform: none; border-color: rgba(255,255,255,0.1); box-shadow: none; }
        .status-verified { font-family: var(--font-mono); color: var(--neon-green); font-size: 0.8rem; letter-spacing: 1px; }

        .empty-state { grid-column: 1 / -1; text-align: center; padding: 60px; font-family: var(--font-mono); color: var(--text-dim); letter-spacing: 2px; border: 1px dashed rgba(255,255,255,0.1); border-radius: var(--radius-md); }

        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      `}</style>
    </section>
  )
}
