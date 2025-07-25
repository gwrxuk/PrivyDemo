'use client';

import PrivyAuth from '@/components/PrivyAuth';
import DeFiExchange from '@/components/DeFiExchange';

export default function Home() {
  const handleLogin = (email: string) => {
    console.log('Logged in:', email);
  };

  const handleLogout = () => {
    console.log('Logged out');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">DeFi Exchange</h1>
                <p className="text-sm text-gray-400">Powered by Privy</p>
              </div>
            </div>
            <PrivyAuth onLogin={handleLogin} onLogout={handleLogout} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Trade with
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Confidence
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of decentralized trading with secure wallet integration and lightning-fast swaps.
            </p>
          </div>

          {/* Exchange Interface */}
          <DeFiExchange />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/5 border-t border-white/20 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">DeFi Exchange</h3>
              <p className="text-gray-400">
                A modern decentralized exchange built with security and user experience in mind.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Secure Wallet Integration</li>
                <li>• Multi-Chain Support</li>
                <li>• Real-time Market Data</li>
                <li>• Lightning-fast Swaps</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Powered by</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  <span className="text-gray-400">Privy Authentication</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  <span className="text-gray-400">Next.js Framework</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                  <span className="text-gray-400">Ethereum Network</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DeFi Exchange. Built with ❤️ for the decentralized future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
