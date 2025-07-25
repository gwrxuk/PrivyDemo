'use client';

import { useState } from 'react';
import { ArrowDownUp, TrendingUp, Zap } from 'lucide-react';
import WalletInfo from './WalletInfo';
import TransactionButton from './TransactionButton';

interface Token {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
}

const mockTokens: Token[] = [
  { symbol: 'ETH', name: 'Ethereum', price: 3245.67, change24h: 2.34 },
  { symbol: 'USDC', name: 'USD Coin', price: 1.00, change24h: 0.01 },
  { symbol: 'USDT', name: 'Tether', price: 1.00, change24h: -0.02 },
  { symbol: 'MATIC', name: 'Polygon', price: 0.89, change24h: 1.45 },
];

export default function DeFiExchange() {
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('USDC');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  const handleSwap = () => {
    // TODO: Implement actual swap logic
    console.log(`Swapping ${fromAmount} ${fromToken} for ${toAmount} ${toToken}`);
  };

  const handleSwitchTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trading Interface */}
        <div className="lg:col-span-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <ArrowDownUp className="w-6 h-6" />
              Swap Tokens
            </h2>
            
            {/* From Token */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                From
              </label>
              <div className="flex gap-3">
                <select
                  value={fromToken}
                  onChange={(e) => setFromToken(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {mockTokens.map((token) => (
                    <option key={token.symbol} value={token.symbol}>
                      {token.symbol}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  placeholder="0.0"
                  className="flex-1 px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Switch Button */}
            <div className="flex justify-center mb-4">
              <button
                onClick={handleSwitchTokens}
                className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
              >
                <ArrowDownUp className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* To Token */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                To
              </label>
              <div className="flex gap-3">
                <select
                  value={toToken}
                  onChange={(e) => setToToken(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {mockTokens.map((token) => (
                    <option key={token.symbol} value={token.symbol}>
                      {token.symbol}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  placeholder="0.0"
                  className="flex-1 px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Swap Button */}
            <button
              onClick={handleSwap}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Swap Tokens
            </button>
          </div>
        </div>

        {/* Market Overview */}
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Market Overview
            </h3>
            <div className="space-y-3">
              {mockTokens.map((token) => (
                <div key={token.symbol} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <div>
                    <div className="font-semibold text-white">{token.symbol}</div>
                    <div className="text-sm text-gray-400">{token.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-white">${token.price.toFixed(2)}</div>
                    <div className={`text-sm ${token.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <WalletInfo />
          
          <TransactionButton />
        </div>
      </div>
    </div>
  );
} 