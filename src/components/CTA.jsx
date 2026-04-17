import { motion } from 'framer-motion'

export default function CTA({ connectWallet }) {
  return (
    <section className="section cta-section">
      <div className="container">
        <motion.div className="cta-box" initial={{ opacity:0, scale:0.96 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <h2>Ready to Join the Revolution?</h2>
          <p>Connect your wallet and become an early member of the ZyroX ecosystem. Don't miss the pre-launch opportunity.</p>
          <div style={{ display:'flex', justifyContent:'center', gap:'14px', flexWrap:'wrap' }}>
            <button className="btn btn-p btn-glow" onClick={connectWallet}>Connect Wallet</button>
            <a href="https://t.me/zyroxtoken" target="_blank" rel="noopener noreferrer" className="btn btn-s">Join Telegram</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
