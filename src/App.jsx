import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import SystemBoot from './components/SystemBoot'
import CommandCenter from './components/CommandCenter'
import TaskMatrix from './components/TaskMatrix'
import DataHub from './components/DataHub'
import NeuralGrid from './components/NeuralGrid'
import SecurityProtocol from './components/SecurityProtocol'
import Footer from './components/Footer'
import MouseGlow from './components/MouseGlow'

export default function App() {
  const [booting, setBooting] = useState(true)
  const [walletAddress, setWalletAddress] = useState('')

  const connectWallet = () => {
    setWalletAddress('0x4F9...A1B2')
  }

  const disconnectWallet = () => {
    setWalletAddress('')
  }

  if (booting) {
    return <SystemBoot onBootComplete={() => setBooting(false)} />
  }

  return (
    <div className="v3-layout">
      <div className="cyber-grid-bg" />
      <MouseGlow />
      <Navbar walletAddress={walletAddress} connectWallet={connectWallet} disconnectWallet={disconnectWallet} />
      
      <main>
        <CommandCenter connectWallet={connectWallet} walletAddress={walletAddress} />
        <TaskMatrix />
        <DataHub />
        <NeuralGrid />
        <SecurityProtocol />
      </main>

      <Footer />
    </div>
  )
}
