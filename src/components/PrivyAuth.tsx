'use client';

import { useState } from 'react';
import { useLoginWithEmail, usePrivy } from '@privy-io/react-auth';

interface PrivyAuthProps {
  onLogin: (email: string) => void;
  onLogout: () => void;
}

export default function PrivyAuth({ onLogin, onLogout }: PrivyAuthProps) {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { sendCode, loginWithCode } = useLoginWithEmail();
  const { logout, authenticated, user } = usePrivy();

  // Check if Privy is properly configured
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
  const isPrivyConfigured = appId && appId !== 'your-privy-app-id';

  if (!isPrivyConfigured) {
    return (
      <div className="flex items-center gap-4">
        <div className="text-white text-sm">
          <span className="text-yellow-400">⚠️</span> Privy not configured
        </div>
        <a
          href="https://console.privy.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
        >
          Configure Privy
        </a>
      </div>
    );
  }

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    try {
      await sendCode({ email });
      setShowCodeInput(true);
      console.log('OTP sent to:', email);
    } catch (error) {
      console.error('Error sending code:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginWithCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;
    
    setIsLoading(true);
    try {
      await loginWithCode({ code });
      onLogin(email);
      console.log('Successfully logged in with code');
    } catch (error) {
      console.error('Error logging in with code:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      onLogout();
      setEmail('');
      setCode('');
      setShowCodeInput(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // If user is authenticated, show user info and logout button
  if (authenticated && user) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">
              {user.email?.address?.charAt(0).toUpperCase() || 'U'}
            </span>
          </div>
          <span className="text-white text-sm">{user.email?.address}</span>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
        >
          Logout
        </button>
      </div>
    );
  }

  // Show code input if code was sent
  if (showCodeInput) {
    return (
      <form onSubmit={handleLoginWithCode} className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter OTP code"
          className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          required
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Verifying...' : 'Verify Code'}
        </button>
        <button
          type="button"
          onClick={() => setShowCodeInput(false)}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
        >
          Back
        </button>
      </form>
    );
  }

  // Show email input form
  return (
    <form onSubmit={handleSendCode} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
        required
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Sending...' : 'Login with Privy'}
      </button>
    </form>
  );
} 