'use client'

import Link from 'next/link'

// 404 页面组件
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mb-8">页面未找到</p>
        <div className="animate-bounce">
          <span className="text-4xl">🤔</span>
        </div>
        <p className="text-gray-500 mb-8">
          抱歉！您访问的页面不存在。
        </p>
        <Link
          href="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          返回主页
        </Link>
      </div>
    </div>
  )
} 