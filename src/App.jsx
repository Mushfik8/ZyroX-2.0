import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import OSSidebar from './components/OSSidebar'
import UserControlPanel from './components/UserControlPanel'
import TaskMatrix from './components/TaskMatrix'
import PlayToEarn from './components/PlayToEarn'
import StakingVault from './components/StakingVault'
import UtilityMarket from './components/UtilityMarket'
import DataHub from './components/DataHub'
import ProgressionSystem from './components/ProgressionSystem'
import NetworkGrid from './components/NetworkGrid'
import ReferralHub from './components/ReferralHub'
import TokenFlowVisual from './components/TokenFlowVisual'
import SecurityProtocol from './components/SecurityProtocol'
import SupportCenter from './components/SupportCenter'
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
      case 'play': return <PlayToEarn />
      case 'staking': return <StakingVault />
      case 'utility': return <UtilityMarket />
      case 'telemetry': return <DataHub />
      case 'progression': return <ProgressionSystem />
      case 'network': return <NetworkGrid />
      case 'referral': return <ReferralHub />
      case 'tokenFlow': return <TokenFlowVisual />
      case 'security': return <SecurityProtocol />
      case 'support': return <SupportCenter />
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
