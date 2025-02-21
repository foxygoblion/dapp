'use client'

import { useState } from 'react'
import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi'
import YDDShowABI from '../contracts/YDDShow.json'

// 合约地址
const CONTRACT_ADDRESS = '0xA109Ff0cBF35f3fDf21cD0eEc8a32DE6d6607d2b'

// 主页组件
export default function Home() {
  // 状态管理
  const [age, setAge] = useState<string>('')
  const [currentAge, setCurrentAge] = useState<number | null>(null)
  const [isValidAge, setIsValidAge] = useState(true)

  // 获取钱包账户信息
  const { address, isConnected } = useAccount()

  // 读取合约方法
  const { data: contractAge, refetch } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: YDDShowABI.abi,
    functionName: 'getAge',
  })

  // 写入合约方法
  const { write: writeContract, data: writeData } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: YDDShowABI.abi,
    functionName: 'setAge',
  })

  // 等待交易完成
  const { isLoading: isWritePending } = useWaitForTransaction({
    hash: writeData?.hash,
  })

  // 设置年龄
  const handleSetAge = async () => {
    if (!age) return
    try {
      writeContract({
        args: [parseInt(age)],
      })
      setAge('')
    } catch (error) {
      console.error('Error setting age:', error)
    }
  }

  // 获取年龄
  const handleGetAge = async () => {
    try {
      await refetch()
      const ageValue = Number(contractAge)
      if (isNaN(ageValue) || ageValue <= 0) {
        setIsValidAge(false)
        setCurrentAge(null)
      } else {
        setIsValidAge(true)
        setCurrentAge(ageValue)
      }
    } catch (error) {
      console.error('Error getting age:', error)
      setIsValidAge(false)
      setCurrentAge(null)
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
                  <span className="text-lg text-gray-500">sorry，没有找到该数据= =</span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
