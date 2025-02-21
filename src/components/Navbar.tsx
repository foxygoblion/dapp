// 导航栏组件
'use client'

import Link from 'next/link'
import { ConnectKitButton } from 'connectkit'
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'
import { useStatus } from '@/context/StatusContext'

// 导航栏组件
export default function Navbar() {
  // 获取当前网络信息
  const { chain } = useNetwork()
  // 获取切换网络方法
  const { chains, switchNetwork } = useSwitchNetwork({
    onSuccess: () => {
      // 网络切换成功后设置状态为就绪
      setStatus('就绪')
    },
    onError: () => {
      // 网络切换失败后设置状态为就绪
      setStatus('就绪')
    }
  })
  // 获取钱包连接状态
  const { isConnected } = useAccount()
  // 获取状态
  const { status, setStatus } = useStatus()

  // 处理网络切换
  const handleNetworkSwitch = (chainId: number) => {
    setStatus('切换网络中...')
    switchNetwork?.(chainId)
  }

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* 左侧导航链接 */}
        <div className="flex gap-4">
          <Link href="/" className="hover:text-gray-300">
            主页
          </Link>
          <Link href="/not_found" className="hover:text-gray-300">
            未找到
          </Link>
        </div>

        {/* 右侧网络选择和钱包连接按钮 */}
        <div className="flex items-center gap-4">
          {/* 网络选择下拉菜单 */}
          {isConnected && (
            <div className="relative group">
              <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                {chain?.name || '未知网络'}
              </button>
              {/* 下拉菜单 */}
              <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {chains.map((x) => (
                  <button
                    key={x.id}
                    onClick={() => handleNetworkSwitch(x.id)}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-600 first:rounded-t-lg last:rounded-b-lg ${
                      chain?.id === x.id ? 'bg-gray-600' : ''
                    }`}
                  >
                    {x.name}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* 钱包连接按钮 */}
          <ConnectKitButton />

          {/* 状态显示 */}
          <div className="bg-gray-700 px-4 py-2 rounded-lg">
            <span className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${status === '就绪' ? 'bg-green-400' : 'bg-yellow-400 animate-pulse'}`}></span>
              {status}
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
} 