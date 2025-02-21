declare module '*/YDDShow.json' {
  const value: {
    contractName: string
    abi: any[]
    metadata: string
    bytecode: string
    deployedBytecode: string
    immutableReferences: Record<string, any>
    generatedSources: any[]
    deployedGeneratedSources: any[]
    sourceMap: string
    deployedSourceMap: string
    source: string
    sourcePath: string
    ast: any
    compiler: {
      name: string
      version: string
    }
    networks: Record<string, {
      events: Record<string, any>
      links: Record<string, any>
      address: string
      transactionHash: string
    }>
    schemaVersion: string
    updatedAt: string
    networkType: string
    devdoc: {
      kind: string
      methods: Record<string, any>
      version: number
    }
    userdoc: {
      kind: string
      methods: Record<string, any>
      version: number
    }
  }
  export default value
} 