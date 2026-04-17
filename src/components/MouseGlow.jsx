import { useState, useEffect } from 'react'

export default function MouseGlow() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Use clientX and clientY for viewport-relative tracking with position: fixed
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      className="global-mouse-glow" 
      style={{ 
        left: mousePos.x, 
        top: mousePos.y,
        opacity: mousePos.x === -1000 ? 0 : 1 
      }}
    />
  )
}
