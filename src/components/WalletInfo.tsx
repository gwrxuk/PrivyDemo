'use client';

import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useState } from 'react';
import { Copy, ExternalLink } from 'lucide-react';

export default function WalletInfo() {
  const { user, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const wallet = wallets[0]; // Get the first wallet
  const [copied, setCopied] = useState(false);

  // Check if Privy is properly configured
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
  const isPrivyConfigured = appId && appId !== 'your-privy-app-id';

  if (!isPrivyConfigured) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">Your Wallet</h3>
        <div className="text-center text-gray-400">
          <p>Configure Privy to see your wallet information</p>
        </div>
      </div>
    );
  }

  if (!authenticated || !user || !wallet) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">Your Wallet</h3>
        <div className="text-center text-gray-400">
          <p>Login to see your wallet information</p>
        </div>
      </div>
    );
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <h3 className="text-xl font-bold text-white mb-4">Your Wallet</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Address:</span>
          <div className="flex items-center gap-2">
            <span className="text-white font-mono text-sm">
              {formatAddress(wallet.address)}
            </span>
            <button
              onClick={() => copyToClipboard(wallet.address)}
              className="p-1 hover:bg-white/10 rounded transition-colors"
              title="Copy address"
            >
              <Copy className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-300">Network:</span>
          <span className="text-white text-sm">{wallet.chainId}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-300">Type:</span>
          <span className="text-white text-sm">Embedded Wallet</span>
        </div>

        {copied && (
          <div className="text-green-400 text-sm text-center">
            Address copied to clipboard!
          </div>
        )}

        <div className="pt-4 border-t border-white/10">
          <a
            href={`https://etherscan.io/address/${wallet.address}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            View on Etherscan
          </a>
        </div>
      </div>
    </div>
  );
} 