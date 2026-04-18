import { motion } from 'framer-motion'

const items = [
  { id: 'u1', title: 'XP MULTIPLIER (1.5x)', desc: 'Boost all off-chain XP generation by 50% for 24 hours.', cost: 500, type: 'BOOST' },
  { id: 'u2', title: 'PREMIUM GAME KEY', desc: 'Unlock access to high-yield exclusive mini-games.', cost: 1200, type: 'ACCESS' },
  { id: 'u3', title: 'COOLDOWN REDUCTION', desc: 'Reduce the Synthesis Protocol cooldown timer by 50%.', cost: 800, type: 'UPGRADE' },
  { id: 'u4', title: 'CUSTOM NEURAL AVATAR', desc: 'Mint an exclusive NFT avatar for your Identity panel.', cost: 5000, type: 'COSMETIC' },
]

export default function UtilityMarket() {
  return (
    <div className="os-view-container">
      
      <div className="market-header">
        <h2 className="sys-title">UTILITY <span style={{ color: 'var(--neon-orange)' }}>MARKETPLACE</span></h2>
        <div className="balance-tag">AVAILABLE: <strong style={{ color: 'var(--neon-cyan)' }}>1,420.50 $ZRX</strong></div>
      </div>

      <div className="market-grid">
        {items.map(item => (
          <motion.div key={item.id} className="os-panel market-item" whileHover={{ scale: 1.02 }}>
            <div className="item-type">{item.type}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="item-footer">
              <div className="item-cost">
                <span className="cost-val">{item.cost.toLocaleString()}</span>
                <span className="cost-sym">$ZRX</span>
              </div>
              <button className="cyber-btn sm">ACQUIRE</button>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .os-view-container { display: flex; flex-direction: column; height: 100%; max-width: 1200px; margin: 0 auto; }
        
        .market-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 16px; }
        .balance-tag { font-family: var(--font-mono); font-size: 0.9rem; color: var(--text-main); background: rgba(0,240,255,0.05); padding: 8px 16px; border: 1px solid rgba(0,240,255,0.2); border-radius: var(--radius-sm); }

        .market-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; padding-bottom: 40px; }

        .market-item { display: flex; flex-direction: column; padding: 24px; border-color: rgba(255,60,0,0.2); transition: var(--tr); }
        .market-item:hover { border-color: var(--neon-orange); box-shadow: 0 0 20px rgba(255,60,0,0.15); }

        .item-type { align-self: flex-start; font-family: var(--font-mono); font-size: 0.65rem; color: var(--neon-orange); padding: 2px 8px; border: 1px solid rgba(255,60,0,0.3); border-radius: 4px; margin-bottom: 16px; }
        
        .market-item h3 { font-size: 1.2rem; color: #fff; margin-bottom: 8px; }
        .market-item p { font-size: 0.85rem; color: var(--text-dim); line-height: 1.5; margin-bottom: 24px; flex: 1; }

        .item-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 16px; }
        .item-cost { display: flex; align-items: baseline; gap: 4px; }
        .cost-val { font-family: var(--font-mono); font-size: 1.2rem; font-weight: bold; color: var(--text-main); }
        .cost-sym { font-family: var(--font-mono); font-size: 0.7rem; color: var(--neon-cyan); }

        @media (max-width: 768px) {
          .market-header { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>
    </div>
  )
}
