import { createContext, useContext, useState, ReactNode } from 'react'

type Status = '就绪' | '设置中...' | '获取中...' | '切换网络中...'

interface StatusContextType {
  status: Status
  setStatus: (status: Status) => void
}

const StatusContext = createContext<StatusContextType | undefined>(undefined)

export function StatusProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<Status>('就绪')

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  )
}

export function useStatus() {
  const context = useContext(StatusContext)
  if (context === undefined) {
    throw new Error('useStatus must be used within a StatusProvider')
  }
  return context
} 