import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const tokenData = [
  { label:'Liquidity Pool', pct:30, color:'#00d4ff', amount:'30,000,000,000' },
  { label:'Play-to-Earn Rewards', pct:25, color:'#7b2fff', amount:'25,000,000,000' },
  { label:'Development', pct:15, color:'#ff6b35', amount:'15,000,000,000' },
  { label:'Marketing', pct:10, color:'#4361ee', amount:'10,000,000,000' },
  { label:'Team & Advisors', pct:10, color:'#ffc300', amount:'10,000,000,000' },
  { label:'Community Airdrops', pct:10, color:'#a78bfa', amount:'10,000,000,000' },
]

function DonutChart() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const size = 300
    canvas.width = size * 2
    canvas.height = size * 2
    ctx.scale(2, 2)
    const cx = size / 2, cy = size / 2, r = 108, lw = 26
    let start = -Math.PI / 2
    tokenData.forEach(item => {
      const slice = (item.pct / 100) * 2 * Math.PI
      ctx.beginPath()
      ctx.arc(cx, cy, r, start, start + slice)
      ctx.strokeStyle = item.color
      ctx.lineWidth = lw
      ctx.lineCap = 'round'
      ctx.shadowColor = item.color
      ctx.shadowBlur = 12
      ctx.stroke()
      start += slice + 0.045
    })
  }, [])
  return (
    <div className="token-chart">
      <canvas ref={canvasRef} style={{ width:300, height:300 }} />
      <div className="token-center">
        <div className="supply">100B</div>
        <div className="label">Total Supply</div>
      </div>
    </div>
  )
}

export default function Tokenomics() {
  return (
    <section className="section" id="tokenomics">
      <div className="container">
        <div className="tc">
          <span className="badge">💎 Tokenomics</span>
          <h2 className="stitle">Token Distribution</h2>
          <p className="ssub">$ZYROX has a total supply of 100 billion tokens, strategically allocated to ensure long-term ecosystem sustainability.</p>
        </div>
        <motion.div className="tokenomics-layout" initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <DonutChart />
          <div className="token-items">
            {tokenData.map((item, i) => (
              <motion.div key={i} className="token-item" initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}>
                <div className="token-dot" style={{ background:item.color, boxShadow:`0 0 8px ${item.color}` }} />
                <div className="token-item-info">
                  <div className="name">{item.label}</div>
                  <div className="pct">{item.pct}%</div>
                </div>
                <div className="amount">{item.amount}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
