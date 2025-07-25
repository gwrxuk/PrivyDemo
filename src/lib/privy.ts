import { PrivyProvider } from '@privy-io/react-auth';
import { ReactNode } from 'react';

export const privyConfig = {
  appId: process.env.NEXT_PUBLIC_PRIVY_APP_ID!,
  config: {
    loginMethods: ['email'],
    appearance: {
      theme: 'light',
      accentColor: '#6366f1',
      showWalletLoginFirst: false,
    },
    defaultChain: 1,
    supportedChains: [1, 137, 10, 42161],
  },
};

export function PrivyClientProvider({ children }: { children: ReactNode }) {
  return (
    <PrivyProvider
      appId={privyConfig.appId}
      config={privyConfig.config}
    >
      {children}
    </PrivyProvider>
  );
} 