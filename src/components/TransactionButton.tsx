'use client';

import { useSendTransaction, usePrivy } from '@privy-io/react-auth';
import { useState } from 'react';
import { Zap } from 'lucide-react';

export default function TransactionButton() {
  const { sendTransaction } = useSendTransaction();
  const { authenticated } = usePrivy();
  const [isLoading, setIsLoading] = useState(false);

  // Check if Privy is properly configured
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
  const isPrivyConfigured = appId && appId !== 'your-privy-app-id';

  if (!isPrivyConfigured) {
    return (
      <div className="text-center text-gray-400 text-sm">
        Configure Privy to enable transactions
      </div>
    );
  }

  const handleSendTransaction = async () => {
    if (!authenticated) {
      alert('Please login first');
      return;
    }

    setIsLoading(true);
    try {
      // Example transaction - sending 0.001 ETH to a test address
      await sendTransaction({
        to: '0xE3070d3e4309afA3bC9a6b057685743CF42da77C',
        value: '1000000000000000', // 0.001 ETH in wei
      });
      console.log('Transaction sent successfully!');
    } catch (error) {
      console.error('Error sending transaction:', error);
      alert('Failed to send transaction. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!authenticated) {
    return (
      <div className="text-center text-gray-400 text-sm">
        Login to enable transactions
      </div>
    );
  }

  return (
    <button
      onClick={handleSendTransaction}
      disabled={isLoading}
      className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Zap className="w-5 h-5" />
      {isLoading ? 'Sending Transaction...' : 'Send Test Transaction'}
    </button>
  );
} 