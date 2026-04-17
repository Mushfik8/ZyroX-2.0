import { useState } from 'react'
import { motion } from 'framer-motion'
import './Support.css'

const contactCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    color: '#00f5d4',
    title: 'Telegram',
    desc: 'Join our community',
    link: 'https://t.me/ZyroX',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    color: '#f72585',
    title: 'Email',
    desc: 'support@zyrox.io',
    link: 'mailto:support@zyrox.io',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    color: '#a29bfe',
    title: 'Whitepaper',
    desc: 'Read our documentation',
    link: '#',
  },
]

export default function Support() {
  const [form, setForm] = useState({ name: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', subject: '', message: '' })
  }

  return (
    <section className="section support-section" id="support">
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="text-center">
          <span className="section-badge">📩 Support</span>
          <h2 className="support-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have questions or need help? Reach out to us and we'll get back to you within 24 hours.
          </p>
        </div>

        <motion.div
          className="support-layout"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left — Contact Cards */}
          <div className="support-cards">
            {contactCards.map((card, i) => (
              <motion.a
                key={i}
                href={card.link}
                target={card.link.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="support-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div className="support-card-icon" style={{ color: card.color, borderColor: card.color + '40' }}>
                  {card.icon}
                </div>
                <div className="support-card-info">
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
                <svg className="support-card-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.a>
            ))}
          </div>

          {/* Right — Contact Form */}
          <div className="support-form-wrapper glass-card">
            <h3>Send us a message</h3>
            <p className="support-form-sub">We'll get back to you within 24 hours</p>

            <form className="support-form" onSubmit={handleSubmit}>
              <div className="support-input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="support-input-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="support-input-group">
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="support-submit-btn" disabled={sent}>
                {sent ? (
                  <>✓ Message Sent</>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send Message
                  </>
                )}
              </button>
            </form>

            <p className="support-powered">Powered by ZyroX — 24/7 support</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
