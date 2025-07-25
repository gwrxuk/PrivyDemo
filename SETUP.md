# DeFi Exchange Setup Guide

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Privy Integration Setup

### Step 1: Create Privy Account
1. Visit [https://console.privy.io/](https://console.privy.io/)
2. Sign up for a free account
3. Create a new application

### Step 2: Configure Your App
1. In the Privy console, go to your app settings
2. Configure the following:
   - **App Name**: DeFi Exchange
   - **Login Methods**: Enable Email
   - **Default Chain**: Ethereum Mainnet (1)
   - **Supported Chains**: 
     - Ethereum (1)
     - Polygon (137)
     - Optimism (10)
     - Arbitrum (42161)

### Step 3: Get Credentials
1. Copy your **App ID** from the Privy console
2. Copy your **App Secret** from the Privy console
3. Update your `.env.local` file:

```env
NEXT_PUBLIC_PRIVY_APP_ID=your-actual-app-id-here
PRIVY_APP_SECRET=your-actual-app-secret-here
NEXT_PUBLIC_PRIVY_ENVIRONMENT=development
```

### Step 4: Enable Real Privy Integration
To enable the full Privy integration, replace the `PrivyAuth` component with the real Privy implementation:

1. Update `src/app/layout.tsx` to include the Privy provider
2. Replace the mock authentication with real Privy hooks
3. Test the email login functionality

## Features Overview

### Current Features
- ✅ Modern, responsive UI
- ✅ Email authentication (mock)
- ✅ Token swap interface
- ✅ Market overview
- ✅ Wallet balance display
- ✅ Multi-chain support ready

### Planned Features
- 🔄 Real Privy wallet integration
- 🔄 Actual token swapping
- 🔄 Real-time price feeds
- 🔄 Transaction history
- 🔄 Gas optimization
- 🔄 Advanced trading features

## Customization

### Adding New Tokens
Edit `src/components/DeFiExchange.tsx` and update the `mockTokens` array:

```typescript
const mockTokens: Token[] = [
  { symbol: 'ETH', name: 'Ethereum', price: 3245.67, change24h: 2.34 },
  { symbol: 'USDC', name: 'USD Coin', price: 1.00, change24h: 0.01 },
  // Add your tokens here
];
```

### Changing Theme Colors
Update the gradient colors in `src/app/layout.tsx`:

```typescript
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
```

### Adding New Chains
Update the supported chains in your Privy console and the configuration in `src/lib/privy.ts`.

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   npm run dev -- -p 3001
   ```

2. **Privy not working**
   - Check your environment variables
   - Verify your Privy app configuration
   - Ensure you're using the correct App ID

3. **Build errors**
   ```bash
   npm run build
   npm run lint
   ```

### Getting Help
- Check the [Privy Documentation](https://docs.privy.io/)
- Review the [Next.js Documentation](https://nextjs.org/docs)
- Open an issue in this repository

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Other Platforms
The app works on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean
- AWS Amplify

## Security Notes

- Never commit your `.env.local` file
- Use environment variables for all secrets
- Enable 2FA on your Privy account
- Regularly update dependencies

---

Happy building! 🚀 