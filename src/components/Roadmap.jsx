import { motion } from 'framer-motion'

const phases = [
  { phase:'Phase 1 — Foundation', title:'Concept & Development', active:true, progress:85, items:[
    { text:'Core team assembly', done:true },{ text:'Whitepaper & tokenomics design', done:true },
    { text:'Website launch', done:true },{ text:'Community building', done:false },
  ]},
  { phase:'Phase 2 — Pre-Launch', title:'Smart Contract & Audit', active:true, progress:40, items:[
    { text:'Smart contract development (BSC)', done:true },{ text:'Security audit by CertiK', done:false },
    { text:'Private sale & partnerships', done:false },{ text:'Marketing campaign launch', done:false },
  ]},
  { phase:'Phase 3 — Launch', title:'Token Generation Event', active:false, progress:0, items:[
    { text:'BSC contract deployment', done:false },{ text:'DEX listing (PancakeSwap)', done:false },
    { text:'CEX listing applications', done:false },{ text:'Staking platform launch', done:false },
  ]},
  { phase:'Phase 4 — Expansion', title:'Gaming Ecosystem', active:false, progress:0, items:[
    { text:'Play-to-earn game beta', done:false },{ text:'NFT marketplace launch', done:false },
    { text:'Cross-chain bridge deployment', done:false },{ text:'DAO governance activation', done:false },
  ]}
]

export default function Roadmap() {
  return (
    <section className="section" id="roadmap">
      <div className="container">
        <div className="tc">
          <span className="badge">🗺️ Roadmap</span>
          <h2 className="stitle">Development Roadmap</h2>
          <p className="ssub">Our strategic plan to build, launch, and scale the ZyroX ecosystem across four key phases.</p>
        </div>
        <div className="roadmap-timeline">
          <div className="roadmap-line" />
          {phases.map((p, i) => (
            <motion.div key={i} className="roadmap-item" initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:'-40px' }} transition={{ duration:0.5, delay:i*0.14 }}>
              <div className={`roadmap-dot ${p.active ? 'active' : ''}`} />
              <div className="roadmap-phase">{p.phase}</div>
              <h3>{p.title}</h3>
              <ul className="roadmap-list">
                {p.items.map((item, j) => (
                  <li key={j}><span className={item.done ? 'check' : 'pending'}>{item.done ? '✓' : '○'}</span>{item.text}</li>
                ))}
              </ul>
              <div className="roadmap-progress">
                <motion.div className="roadmap-progress-bar" initial={{ width:0 }} whileInView={{ width:`${p.progress}%` }} viewport={{ once:true }} transition={{ duration:1, delay:0.3 }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
