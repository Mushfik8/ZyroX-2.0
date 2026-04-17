import { motion } from 'framer-motion'

const team = [
  { initials:'AK', name:'Alex K.', role:'Founder & CEO', desc:'Blockchain architect with 8+ years in DeFi and gaming ecosystems.', twitter:'#', linkedin:'#' },
  { initials:'SM', name:'Sarah M.', role:'CTO', desc:'Smart contract expert. Previously led engineering at a top-10 DeFi protocol.', twitter:'#', linkedin:'#' },
  { initials:'JD', name:'James D.', role:'Head of Gaming', desc:'Game designer with AAA studio experience bringing Web3 to mainstream gaming.', twitter:'#', linkedin:'#' },
  { initials:'LW', name:'Lisa W.', role:'Marketing Lead', desc:'Growth strategist specializing in crypto communities and brand building.', twitter:'#', linkedin:'#' },
]

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <div className="tc">
          <span className="badge">👥 Team</span>
          <h2 className="stitle">Meet The Team</h2>
          <p className="ssub">A passionate team of blockchain veterans, game developers, and DeFi strategists building the future of ZyroX.</p>
        </div>
        <div className="team-grid">
          {team.map((m, i) => (
            <motion.div key={i} className="gc team-card" initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}>
              <div className="team-avatar">{m.initials}</div>
              <h3>{m.name}</h3>
              <div className="role">{m.role}</div>
              <p>{m.desc}</p>
              <div className="team-socials">
                <a href={m.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href={m.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
