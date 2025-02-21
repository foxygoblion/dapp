// wagmi 配置文件
import { configureChains, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'

// 配置链和提供者
const { chains, publicClient } = configureChains(
  [sepolia, mainnet], // 将 Sepolia 放在第一位，使其成为默认网络
  [
    infuraProvider({ apiKey: '55d47ed603074ad8b85722d5a4223111' }), // 使用 Infura 提供者
    publicProvider(), // 保留公共提供者作为备用
  ]
)

// 创建 wagmi 配置
export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: 'YOUR_PROJECT_ID', // 如果需要 WalletConnect，请替换为您的项目 ID
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'YDD Show',
      },
    }),
  ],
  publicClient,
}) 