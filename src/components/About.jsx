import { motion } from 'framer-motion'

const features = [
  { icon:'🎮', title:'Play-to-Earn Gaming', desc:'Compete in blockchain-powered games and earn real rewards. Our gaming ecosystem rewards skill, strategy, and dedication.' },
  { icon:'💰', title:'DeFi Integration', desc:'Stake, farm, and earn yield with integrated DeFi protocols. Maximize your returns within the MetaNovaFi ecosystem.' },
  { icon:'🛡️', title:'Secure & Transparent', desc:'Built on BNB Chain with audited smart contracts. Full transparency through on-chain governance and open-source code.' },
  { icon:'🌐', title:'Cross-Chain Ready', desc:'Designed for multi-chain interoperability. Bridge assets seamlessly across supported blockchains.' },
  { icon:'🏛️', title:'DAO Governance', desc:'Token holders govern the ecosystem. Vote on proposals, fund development, and shape the future of ZyroX.' },
  { icon:'🚀', title:'NFT Marketplace', desc:'Trade in-game assets, collectibles, and unique NFTs. Own your digital identity in the ZyroX metaverse.' }
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container tc">
        <span className="badge">✦ About Us</span>
        <h2 className="stitle">Why ZyroX?</h2>
        <p className="ssub">A next-generation ecosystem that merges the thrill of gaming with the power of decentralized finance — all on BNB Chain.</p>
        <div className="features-grid">
          {features.map((f,i) => (
            <motion.div key={i} className="gc feature-card" initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-40px' }} transition={{ duration:0.5, delay:i*0.09 }}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
