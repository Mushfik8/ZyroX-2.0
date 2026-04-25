import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AuthProvider, useAuth } from './contexts/AuthContext'
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
import AboutDocs from './components/AboutDocs'
import CampaignHub from './components/CampaignHub'
import LoginModal from './components/LoginModal'

function AppContent() {
  const [booting, setBooting] = useState(true)
  const [activeView, setActiveView] = useState('control')
  const [walletAddress, setWalletAddress] = useState('')
  const [showLogin, setShowLogin] = useState(false)

  const { user } = useAuth()

  const connectWallet = () => setWalletAddress('0x4F9...A1B2')
  const disconnectWallet = () => setWalletAddress('')

  if (booting) {
    return <SystemBoot onBootComplete={() => setBooting(false)} />
  }

  // Auth-gated views — if user tries to access without login, show modal
  const gatedViews = ['tasks', 'play']

  const handleViewChange = (view) => {
    if (gatedViews.includes(view) && !user) {
      setShowLogin(true)
      return
    }
    setActiveView(view)
  }

  // View Router
  const renderView = () => {
    // Double-check gating for direct renders
    if (gatedViews.includes(activeView) && !user) {
      setShowLogin(true)
      return <UserControlPanel walletAddress={walletAddress} connectWallet={connectWallet} disconnectWallet={disconnectWallet} setActiveView={handleViewChange} />
    }

    switch (activeView) {
      case 'control': return <UserControlPanel walletAddress={walletAddress} connectWallet={connectWallet} disconnectWallet={disconnectWallet} setActiveView={handleViewChange} />
      case 'campaigns': return <CampaignHub setActiveView={handleViewChange} />
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
      case 'about': return <AboutDocs />
      default: return <UserControlPanel walletAddress={walletAddress} connectWallet={connectWallet} disconnectWallet={disconnectWallet} setActiveView={handleViewChange} />
    }
  }

  return (
    <div className="os-layout">
      <div className="os-grid-bg" />
      
      <OSSidebar activeView={activeView} setActiveView={handleViewChange} />
      
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

      {/* Login Modal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}
