# DeFi Exchange - Powered by Privy

A modern decentralized exchange (DEX) built with Next.js, featuring secure wallet integration powered by Privy authentication.

## 🚀 Features

- **Secure Authentication**: Email-based login with OTP verification powered by Privy
- **Embedded Wallets**: Automatic wallet creation and management
- **Transaction Support**: Send transactions directly from the embedded wallet
- **Modern UI**: Beautiful, responsive interface with dark theme
- **Token Swapping**: Intuitive token swap interface
- **Market Overview**: Real-time token prices and market data
- **Multi-Chain Support**: Ready for Ethereum, Polygon, Optimism, and Arbitrum
- **Wallet Integration**: Seamless wallet connection and management

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Privy
- **Blockchain**: Ethers.js for Ethereum interaction
- **Icons**: Lucide React
- **UI Components**: Headless UI

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd privy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_PRIVY_APP_ID=cmdihr9g100grkw0jldocmtd8
   PRIVY_APP_SECRET=qfKUmZmmnSyBbB7fo1mphqeeGbhTHUn1RN8iqigDrcmXHsp4ZS4UDkWr35q7H69BivQiCCMRx5FxK89dnmC4Dpz
   NEXT_PUBLIC_PRIVY_ENVIRONMENT=development
   ```

4. **Get Privy credentials**
   - Visit [Privy Console](https://console.privy.io/)
   - Create a new app
   - Copy your App ID and App Secret
   - Update your `.env.local` file

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Privy Setup

1. Go to the [Privy Console](https://console.privy.io/)
2. Create a new application
3. Configure your app settings:
   - **Login Methods**: Enable Email
   - **Default Chain**: Ethereum Mainnet (1)
   - **Supported Chains**: Add Ethereum, Polygon, Optimism, Arbitrum
4. Copy your App ID and App Secret to your environment variables

### Customization

- **Theme**: Modify colors in `src/app/globals.css`
- **Tokens**: Update the `mockTokens` array in `src/components/DeFiExchange.tsx`
- **Chains**: Adjust supported chains in Privy configuration

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Privy wrapper
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── PrivyWrapper.tsx    # Client wrapper for Privy provider
│   ├── PrivyAuth.tsx       # Real Privy authentication component
│   ├── DeFiExchange.tsx    # Main exchange interface
│   ├── WalletInfo.tsx      # Wallet information display
│   ├── TransactionButton.tsx # Transaction sending component
│   └── AuthButton.tsx      # Legacy authentication component
└── lib/
    └── privy.ts            # Privy configuration
```

## 🔐 Security Features

- **Hardware-secured wallets** via Privy
- **SOC 2-compliant** infrastructure
- **TEE (Trusted Execution Environment)** protection
- **Distributed key sharding**
- **End-to-end encryption**

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Privy](https://www.privy.io/) for secure wallet infrastructure
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Support

If you have any questions or need help:
- Check the [Privy Documentation](https://docs.privy.io/)
- Open an issue in this repository
- Join our community discussions

---

Built with ❤️ for the decentralized future
