import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Support from './components/Support'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Particles from './components/Particles'
import MouseGlow from './components/MouseGlow'

export default function App() {
  const [walletAddress, setWalletAddress] = useState(null)

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setWalletAddress(accounts[0])
      } catch (err) {
        console.error('Wallet connection failed:', err)
      }
    } else {
      alert('Please install MetaMask or a Web3 wallet to connect.')
    }
  }

  const disconnectWallet = () => setWalletAddress(null)

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts) => {
        setWalletAddress(accounts[0] || null)
      })
    }
  }, [])

  return (
    <>
      <MouseGlow />
      <Particles />
      <Navbar walletAddress={walletAddress} connectWallet={connectWallet} disconnectWallet={disconnectWallet} />
      <main>
        <Hero connectWallet={connectWallet} />
        <About />
        <Tokenomics />
        <Roadmap />
        <Team />
        <FAQ />
        <Support />
        <CTA connectWallet={connectWallet} />
      </main>
      <Footer />
    </>
  )
}
