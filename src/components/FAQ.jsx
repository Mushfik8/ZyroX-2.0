import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  { q:'What is ZyroX?', a:'ZyroX is a pre-launch gaming and DeFi ecosystem built on BNB Chain (BSC). It merges play-to-earn gaming mechanics with powerful DeFi tools like staking, farming, and governance.' },
  { q:'When will the token launch?', a:'The $ZYROX token is currently in the pre-launch phase. The BSC smart contract is under development and will be deployed after completing a security audit. Follow our socials for launch announcements.' },
  { q:'Which blockchain is ZyroX built on?', a:'ZyroX is primarily built on BNB Smart Chain (BSC) for fast, low-cost transactions. Cross-chain bridging to other networks is planned in Phase 4 of our roadmap.' },
  { q:'How can I participate in the pre-launch?', a:'Join our community on Telegram and Twitter to stay updated. Early community members may be eligible for airdrops, whitelist spots, and exclusive benefits.' },
  { q:'Is the smart contract audited?', a:'The smart contract is currently under development. A full security audit by a reputable firm (CertiK) is planned before the token generation event and contract deployment.' },
  { q:'What is the total token supply?', a:'The total supply of $ZYROX is 100 billion tokens, distributed across liquidity, play-to-earn rewards, development, marketing, team allocation, and community airdrops.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="tc">
          <span className="badge">❓ FAQ</span>
          <h2 className="stitle">Frequently Asked Questions</h2>
          <p className="ssub">Everything you need to know about ZyroX, the token, and the ecosystem.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <motion.div key={i} className={`faq-item ${open === i ? 'open' : ''}`} initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.05 }}>
              <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                <span>{faq.q}</span>
                <span className="icon">+</span>
              </button>
              <div className="faq-answer"><p>{faq.a}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
