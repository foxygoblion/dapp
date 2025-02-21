'use client'

import { Inter } from 'next/font/google'
import { WagmiConfig } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConnectKitProvider } from 'connectkit'
import { config } from '@/config/wagmi'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// 创建查询客户端
const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiConfig config={config}>
          <QueryClientProvider client={queryClient}>
            <ConnectKitProvider>
              <Navbar />
              {children}
            </ConnectKitProvider>
          </QueryClientProvider>
        </WagmiConfig>
      </body>
    </html>
  )
} 