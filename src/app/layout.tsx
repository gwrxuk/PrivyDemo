import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PrivyWrapper from '@/components/PrivyWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DeFi Exchange - Powered by Privy',
  description: 'A modern DeFi exchange with secure wallet integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrivyWrapper>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {children}
          </div>
        </PrivyWrapper>
      </body>
    </html>
  )
}
