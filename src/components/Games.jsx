import { motion } from 'framer-motion'
import './Games.css'

const games = [
  {
    id: 'zyrox-arena',
    emoji: '⚔️',
    title: 'ZyroX Arena',
    genre: 'Battle Royale',
    desc: 'Fight 100 players in a futuristic metaverse arena. Earn $ZYROX tokens by winning battles and completing missions.',
    reward: '+500 $ZYROX / Win',
    status: 'Beta',
    color: '#00ffea',
    platforms: ['Windows', 'Android'],
    downloadUrl: '#',
  },
  {
    id: 'crypto-racer',
    emoji: '🏎️',
    title: 'Crypto Racer',
    genre: 'Racing NFT',
    desc: 'Race with NFT cars on blockchain tracks. Upgrade your vehicle, race to earn, and trade parts on the marketplace.',
    reward: '+200 $ZYROX / Race',
    status: 'Live',
    color: '#bf00ff',
    platforms: ['Android', 'iOS'],
    downloadUrl: '#',
  },
  {
    id: 'robot-wars',
    emoji: '🤖',
    title: 'Robot Wars',
    genre: 'Strategy RPG',
    desc: 'Build and battle AI robots in a futuristic world. Collect rare robot parts as NFTs and dominate the leaderboard.',
    reward: '+350 $ZYROX / Battle',
    status: 'Coming Soon',
    color: '#ff2d78',
    platforms: ['Windows', 'Mac'],
    downloadUrl: '#',
  },
  {
    id: 'defi-dungeon',
    emoji: '🗡️',
    title: 'DeFi Dungeon',
    genre: 'RPG Adventure',
    desc: 'Explore dungeons, collect crypto loot and stake your rewards. A full RPG experience with DeFi mechanics built-in.',
    reward: '+150 $ZYROX / Quest',
    status: 'Coming Soon',
    color: '#ffcc00',
    platforms: ['Android', 'iOS', 'Windows'],
    downloadUrl: '#',
  },
]

const platformIcons = {
  Windows: '🖥️',
  Android: '📱',
  iOS: '🍎',
  Mac: '💻',
}

export default function Games() {
  return (
    <section className="section games-section" id="games">
      {/* Floating coins background */}
      <div className="coins-bg" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`float-coin coin-${i + 1}`}>
            {i % 3 === 0 ? '₿' : i % 3 === 1 ? '⬡' : '◈'}
          </div>
        ))}
      </div>

      <div className="container">
        <div className="tc">
          <span className="badge">🎮 GameFi</span>
          <h2 className="stitle">Play. Earn. Dominate.</h2>
          <p className="ssub">
            Enter the ZyroX gaming universe — where every match rewards you with real crypto.
            Choose your game and start earning $ZYROX today.
          </p>
        </div>

        <div className="games-grid">
          {games.map((game, i) => (
            <motion.div
              key={game.id}
              className="game-card"
              style={{ '--card-color': game.color }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="game-card-header">
                <div className="game-emoji" style={{ boxShadow: `0 0 30px ${game.color}40` }}>
                  {game.emoji}
                </div>
                <div className="game-meta">
                  <span className="game-genre">{game.genre}</span>
                  <span className={`game-status status-${game.status.toLowerCase().replace(' ', '-')}`}>
                    {game.status === 'Live' ? '● ' : game.status === 'Beta' ? '◐ ' : '○ '}
                    {game.status}
                  </span>
                </div>
              </div>

              <h3 className="game-title" style={{ color: game.color }}>{game.title}</h3>
              <p className="game-desc">{game.desc}</p>

              <div className="game-reward">
                <span className="reward-icon">💰</span>
                <span>{game.reward}</span>
              </div>

              <div className="game-platforms">
                {game.platforms.map(p => (
                  <span key={p} className="platform-badge">{platformIcons[p]} {p}</span>
                ))}
              </div>

              <a
                href={game.downloadUrl}
                className="game-download-btn"
                style={{ '--btn-glow': game.color }}
                aria-label={`Download ${game.title}`}
              >
                {game.status === 'Coming Soon' ? (
                  <>🔔 Notify Me</>
                ) : (
                  <>⬇ Download {game.status === 'Beta' ? '(Beta)' : 'Now'}</>
                )}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Download CTA Banner */}
        <motion.div
          className="download-banner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="download-banner-left">
            <div className="robot-icon">🤖</div>
            <div>
              <h3>ZyroX Game Launcher</h3>
              <p>Install the unified launcher — access all games, manage your NFTs, and track earnings in one place.</p>
            </div>
          </div>
          <div className="download-banner-btns">
            <a href="#" className="dl-btn dl-windows">🖥️ Windows (.exe)</a>
            <a href="#" className="dl-btn dl-android">📱 Android (.apk)</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
