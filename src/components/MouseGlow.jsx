import { useState, useEffect } from 'react'

export default function MouseGlow() {
  const [pos, setPos] = useState({ x:-1000, y:-1000 })
  useEffect(() => {
    const fn = e => setPos({ x:e.clientX, y:e.clientY })
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])
  return (
    <div className="global-mouse-glow" style={{ left:pos.x, top:pos.y, opacity:pos.x===-1000?0:1 }} />
  )
}
