'use client'

import { useState } from 'react'
import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi'
import YDDShowABI from '../contracts/YDDShow.json'
import { useStatus } from '@/context/StatusContext'

// 合约地址
const CONTRACT_ADDRESS = '0x87a84EBa190912a9015a2e74056c5ceE28D807B0'

// 主页组件
export default function Home() {
  // 状态管理
  const [age, setAge] = useState<string>('')
  const [currentAge, setCurrentAge] = useState<number | null>(null)
  const [isValidAge, setIsValidAge] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { setStatus } = useStatus()

  // 获取钱包账户信息
  const { address, isConnected } = useAccount()

  // 读取合约方法
  const { data: contractAge, refetch } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: YDDShowABI.abi,
    functionName: 'getAge',
    watch: true, // 自动监听变化
  })

  // 写入合约方法
  const { write: writeContract, data: writeData } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: YDDShowABI.abi,
    functionName: 'setAge',
  })

  // 等待交易完成
  const { isLoading: isWritePending, isSuccess } = useWaitForTransaction({
    hash: writeData?.hash,
    onSuccess: () => {
      // 交易成功后刷新年龄显示
      refetch()
      // 清除错误信息
      setError(null)
      // 设置状态为就绪
      setStatus('就绪')
    },
    onError: (error) => {
      setError('交易失败，请重试')
      console.error('Transaction error:', error)
      // 设置状态为就绪
      setStatus('就绪')
    },
  })

  // 设置年龄
  const handleSetAge = async () => {
    setError(null)
    if (!age) {
      setError('*请输入年龄')
      return
    }
    
    const ageNum = parseInt(age)
    if (isNaN(ageNum) || ageNum <= 0 || ageNum >= 150) {
      setError('*请输入普通碳基人类的年龄')
      return
    }

    if (!writeContract) {
      setError('*合约写入方法未初始化，请确保您已连接到 Sepolia 测试网')
      return
    }

    try {
      setStatus('设置中...')
      writeContract({
        args: [ageNum],
      })
      setAge('')
    } catch (error) {
      console.error('Error setting age:', error)
      setError('*设置年龄失败，请确保您已连接到 Sepolia 测试网并拥有足够的测试币')
      setStatus('就绪')
    }
  }

  // 获取年龄
  const handleGetAge = async () => {
    setError(null)
    try {
      setStatus('获取中...')
      await refetch()
      const ageValue = Number(contractAge)
      if (isNaN(ageValue) || ageValue <= 0) {
        setIsValidAge(false)
        setCurrentAge(null)
      } else {
        setIsValidAge(true)
        setCurrentAge(ageValue)
      }
      setStatus('就绪')
    } catch (error) {
      console.error('Error getting age:', error)
      setIsValidAge(false)
      setCurrentAge(null)
      setError('获取年龄失败，请重试')
      setStatus('就绪')
    }
  }

  return (
    <main className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto">
        {/* 钱包信息 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">钱包信息</h2>
          <p>
            <span className="font-semibold">状态：</span>
            {isConnected ? '已连接' : '未连接'}
          </p>
          {address && (
            <p>
              <span className="font-semibold">地址：</span> {address}
            </p>
          )}
        </div>

        {/* 合约交互 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">合约交互</h2>
          
          {/* 错误提示 */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* 成功提示 */}
          {isSuccess && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
              操作成功！
            </div>
          )}
          
          {/* 设置年龄 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">设置年龄</h3>
            <div className="flex gap-2">
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="请输入年龄"
                className="flex-1 p-2 border rounded"
                min="1"
                max="149"
              />
              <button
                onClick={handleSetAge}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                disabled={!isConnected || isWritePending}
              >
                {isWritePending ? '处理中...' : '设置'}
              </button>
            </div>
          </div>

          {/* 获取年龄 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">获取年龄</h3>
            <div className="flex gap-2 items-center">
              <button
                onClick={handleGetAge}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
                disabled={!isConnected}
              >
                获取
              </button>
              {currentAge !== null && isValidAge ? (
                <span className="text-lg">当前年龄：{currentAge}</span>
              ) : (
                currentAge === null && !isValidAge && (
                  <span className="text-lg text-gray-500">sorry，没有找到该数据= =，可能是该合约还没有设置年龄，或者出错了，请联系工作人员，虽然联系了也没用😁</span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
