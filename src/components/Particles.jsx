import { useEffect } from 'react'

export default function Particles() {
  useEffect(() => {
    const container = document.getElementById('particles-bg')
    if (!container) return
    const count = 40
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      p.style.left = Math.random() * 100 + '%'
      p.style.animationDuration = (3 + Math.random() * 5) + 's'
      p.style.animationDelay = Math.random() * 5 + 's'
      p.style.width = p.style.height = (1 + Math.random() * 2) + 'px'
      container.appendChild(p)
    }
    return () => { container.innerHTML = '' }
  }, [])

  return <div className="particles" id="particles-bg" />
}
