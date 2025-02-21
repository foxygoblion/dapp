// wagmi 配置文件
import { configureChains, createConfig } from 'wagmi'
import { mainnet, sepolia, goerli } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'

// 配置链和提供者
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia, goerli],
  [publicProvider()]
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
  webSocketPublicClient,
}) 