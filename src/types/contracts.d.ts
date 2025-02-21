declare module '*/YDDShow.json' {
  const value: {
    contractName: string
    abi: {
      inputs: { internalType: string; name: string; type: string }[]
      name: string
      outputs?: { internalType: string; name: string; type: string }[]
      stateMutability: string
      type: string
    }[]
    metadata: string
    bytecode: string
    deployedBytecode: string
    immutableReferences: Record<string, { length: number; start: number }[]>
    generatedSources: {
      ast: object
      contents: string
      id: number
      language: string
      name: string
    }[]
    deployedGeneratedSources: {
      ast: object
      contents: string
      id: number
      language: string
      name: string
    }[]
    sourceMap: string
    deployedSourceMap: string
    source: string
    sourcePath: string
    ast: {
      absolutePath: string
      exportedSymbols: Record<string, number[]>
      id: number
      nodeType: string
      nodes: object[]
      src: string
    }
    compiler: {
      name: string
      version: string
    }
    networks: Record<string, {
      events: Record<string, { type: string; name: string; inputs: object[] }>
      links: Record<string, string>
      address: string
      transactionHash: string
    }>
    schemaVersion: string
    updatedAt: string
    networkType: string
    devdoc: {
      kind: string
      methods: Record<string, { details?: string; params?: Record<string, string>; returns?: Record<string, string> }>
      version: number
    }
    userdoc: {
      kind: string
      methods: Record<string, { notice?: string }>
      version: number
    }
  }
  export default value
} 