import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import OSSidebar from './components/OSSidebar'
import UserControlPanel from './components/UserControlPanel'
import TaskMatrix from './components/TaskMatrix'
import DataHub from './components/DataHub'
import SecurityProtocol from './components/SecurityProtocol'
import TokenFlowVisual from './components/TokenFlowVisual'
import ProgressionSystem from './components/ProgressionSystem'
import NetworkGrid from './components/NetworkGrid'
import SystemBoot from './components/SystemBoot'

export default function App() {
  const [booting, setBooting] = useState(true)
  const [activeView, setActiveView] = useState('control')
  const [walletAddress, setWalletAddress] = useState('')

  const connectWallet = () => setWalletAddress('0x4F9...A1B2')
  const disconnectWallet = () => setWalletAddress('')

  if (booting) {
    return <SystemBoot onBootComplete={() => setBooting(false)} />
  }

  // View Router
  const renderView = () => {
    switch (activeView) {
      case 'control': return <UserControlPanel walletAddress={walletAddress} connectWallet={connectWallet} disconnectWallet={disconnectWallet} setActiveView={setActiveView} />
      case 'tasks': return <TaskMatrix />
      case 'telemetry': return <DataHub />
      case 'tokenFlow': return <TokenFlowVisual />
      case 'progression': return <ProgressionSystem />
      case 'network': return <NetworkGrid />
      case 'security': return <SecurityProtocol />
      default: return <UserControlPanel walletAddress={walletAddress} connectWallet={connectWallet} disconnectWallet={disconnectWallet} setActiveView={setActiveView} />
    }
  }

  return (
    <div className="os-layout">
      <div className="os-grid-bg" />
      
      <OSSidebar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="os-main-view">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.2 }}
            style={{ minHeight: '100%' }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
      
    </div>
  )
}
