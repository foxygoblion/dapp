module.exports = {

"[project]/node_modules/.pnpm/@wagmi+core@1.4.12_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/core/dist/chunk-MQXBDTVK.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "__privateAdd": (()=>__privateAdd),
    "__privateGet": (()=>__privateGet),
    "__privateMethod": (()=>__privateMethod),
    "__privateSet": (()=>__privateSet)
});
var __accessCheck = (obj, member, msg)=>{
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter)=>{
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value)=>{
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter)=>{
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
var __privateMethod = (obj, member, method)=>{
    __accessCheck(obj, member, "access private method");
    return method;
};
;
}}),
"[project]/node_modules/.pnpm/@wagmi+core@1.4.12_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/core/dist/chunk-TSH6VVF4.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ChainMismatchError": (()=>ChainMismatchError),
    "ChainNotConfiguredError": (()=>ChainNotConfiguredError),
    "Config": (()=>Config),
    "ConfigChainsNotFound": (()=>ConfigChainsNotFound),
    "ConnectorAlreadyConnectedError": (()=>ConnectorAlreadyConnectedError),
    "SwitchChainNotSupportedError": (()=>SwitchChainNotSupportedError),
    "configureChains": (()=>configureChains),
    "connect": (()=>connect),
    "createConfig": (()=>createConfig),
    "createStorage": (()=>createStorage),
    "deepEqual": (()=>deepEqual),
    "deserialize": (()=>deserialize),
    "disconnect": (()=>disconnect),
    "erc20ABI": (()=>erc20ABI),
    "erc4626ABI": (()=>erc4626ABI),
    "erc721ABI": (()=>erc721ABI),
    "fetchBalance": (()=>fetchBalance),
    "fetchBlockNumber": (()=>fetchBlockNumber),
    "fetchEnsAddress": (()=>fetchEnsAddress),
    "fetchEnsAvatar": (()=>fetchEnsAvatar),
    "fetchEnsName": (()=>fetchEnsName),
    "fetchEnsResolver": (()=>fetchEnsResolver),
    "fetchFeeData": (()=>fetchFeeData),
    "fetchToken": (()=>fetchToken),
    "fetchTransaction": (()=>fetchTransaction),
    "getAccount": (()=>getAccount),
    "getCallParameters": (()=>getCallParameters),
    "getConfig": (()=>getConfig),
    "getContract": (()=>getContract),
    "getNetwork": (()=>getNetwork),
    "getPublicClient": (()=>getPublicClient),
    "getSendTransactionParameters": (()=>getSendTransactionParameters),
    "getUnit": (()=>getUnit),
    "getWalletClient": (()=>getWalletClient),
    "getWebSocketPublicClient": (()=>getWebSocketPublicClient),
    "multicall": (()=>multicall),
    "noopStorage": (()=>noopStorage),
    "prepareSendTransaction": (()=>prepareSendTransaction),
    "prepareWriteContract": (()=>prepareWriteContract),
    "readContract": (()=>readContract),
    "readContracts": (()=>readContracts),
    "sendTransaction": (()=>sendTransaction),
    "serialize": (()=>serialize),
    "signMessage": (()=>signMessage),
    "signTypedData": (()=>signTypedData),
    "switchNetwork": (()=>switchNetwork),
    "waitForTransaction": (()=>waitForTransaction),
    "watchAccount": (()=>watchAccount),
    "watchBlockNumber": (()=>watchBlockNumber),
    "watchContractEvent": (()=>watchContractEvent),
    "watchMulticall": (()=>watchMulticall),
    "watchNetwork": (()=>watchNetwork),
    "watchPendingTransactions": (()=>watchPendingTransactions),
    "watchPublicClient": (()=>watchPublicClient),
    "watchReadContract": (()=>watchReadContract),
    "watchReadContracts": (()=>watchReadContracts),
    "watchWalletClient": (()=>watchWalletClient),
    "watchWebSocketPublicClient": (()=>watchWebSocketPublicClient),
    "writeContract": (()=>writeContract)
});
// src/utils/configureChains.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/clients/createPublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/clients/transports/fallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/clients/transports/http.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$webSocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/clients/transports/webSocket.js [app-ssr] (ecmascript)");
// src/utils/getUnit.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/constants/unit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$P4NRLOY7$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-P4NRLOY7.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$MQXBDTVK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@1.4.12_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/core/dist/chunk-MQXBDTVK.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zustand@4.5.6_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
// src/config.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zustand@4.5.6_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
// src/actions/contracts/fetchToken.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/errors/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/data/trim.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/unit/formatUnits.js [app-ssr] (ecmascript)");
// src/actions/viem/watchWalletClient.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zustand@4.5.6_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/shallow.mjs [app-ssr] (ecmascript)");
// src/errors.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-UGBGYVBH.js [app-ssr] (ecmascript)");
// src/actions/contracts/getContract.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$getContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/actions/getContract.js [app-ssr] (ecmascript)");
// src/actions/ens/fetchEnsAddress.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
// src/actions/network-status/fetchFeeData.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseGwei$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/unit/parseGwei.js [app-ssr] (ecmascript)");
// src/actions/transactions/prepareSendTransaction.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
;
;
;
function configureChains(defaultChains, providers, { batch = {
    multicall: {
        wait: 32
    }
}, pollingInterval = 4e3, rank, retryCount, retryDelay, stallTimeout } = {}) {
    if (!defaultChains.length) throw new Error("must have at least one chain");
    let chains = [];
    const httpUrls = {};
    const wsUrls = {};
    for (const chain of defaultChains){
        let configExists = false;
        for (const provider of providers){
            const apiConfig = provider(chain);
            if (!apiConfig) continue;
            configExists = true;
            if (!chains.some(({ id })=>id === chain.id)) {
                chains = [
                    ...chains,
                    apiConfig.chain
                ];
            }
            httpUrls[chain.id] = [
                ...httpUrls[chain.id] || [],
                ...apiConfig.rpcUrls.http
            ];
            if (apiConfig.rpcUrls.webSocket) {
                wsUrls[chain.id] = [
                    ...wsUrls[chain.id] || [],
                    ...apiConfig.rpcUrls.webSocket
                ];
            }
        }
        if (!configExists) {
            throw new Error([
                `Could not find valid provider configuration for chain "${chain.name}".
`,
                "You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.",
                "Read more: https://wagmi.sh/core/providers/jsonRpc"
            ].join("\n"));
        }
    }
    return {
        chains,
        publicClient: ({ chainId })=>{
            const activeChain = chains.find((x)=>x.id === chainId) ?? defaultChains[0];
            const chainHttpUrls = httpUrls[activeChain.id];
            if (!chainHttpUrls || !chainHttpUrls[0]) throw new Error(`No providers configured for chain "${activeChain.id}"`);
            const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPublicClient"])({
                batch,
                chain: activeChain,
                transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fallback"])(chainHttpUrls.map((url)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(url, {
                        timeout: stallTimeout
                    })), {
                    rank,
                    retryCount,
                    retryDelay
                }),
                pollingInterval
            });
            return Object.assign(publicClient, {
                chains
            });
        },
        webSocketPublicClient: ({ chainId })=>{
            const activeChain = chains.find((x)=>x.id === chainId) ?? defaultChains[0];
            const chainWsUrls = wsUrls[activeChain.id];
            if (!chainWsUrls || !chainWsUrls[0]) return void 0;
            const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPublicClient"])({
                batch,
                chain: activeChain,
                transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fallback"])(chainWsUrls.map((url)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$webSocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["webSocket"])(url, {
                        timeout: stallTimeout
                    })), {
                    rank,
                    retryCount,
                    retryDelay
                }),
                pollingInterval
            });
            return Object.assign(publicClient, {
                chains
            });
        }
    };
}
;
var ChainMismatchError = class extends Error {
    constructor({ activeChain, targetChain }){
        super(`Chain mismatch: Expected "${targetChain}", received "${activeChain}".`);
        this.name = "ChainMismatchError";
    }
};
var ChainNotConfiguredError = class extends Error {
    constructor({ chainId, connectorId }){
        super(`Chain "${chainId}" not configured${connectorId ? ` for connector "${connectorId}"` : ""}.`);
        this.name = "ChainNotConfigured";
    }
};
var ConnectorAlreadyConnectedError = class extends Error {
    constructor(){
        super(...arguments);
        this.name = "ConnectorAlreadyConnectedError";
        this.message = "Connector already connected";
    }
};
var ConfigChainsNotFound = class extends Error {
    constructor(){
        super(...arguments);
        this.name = "ConfigChainsNotFound";
        this.message = "No chains were found on the wagmi config. Some functions that require a chain may not work.";
    }
};
var SwitchChainNotSupportedError = class extends Error {
    constructor({ connector }){
        super(`"${connector.name}" does not support programmatic chain switching.`);
        this.name = "SwitchChainNotSupportedError";
    }
};
// src/utils/deepEqual.ts
function deepEqual(a, b) {
    if (a === b) return true;
    if (a && b && typeof a === "object" && typeof b === "object") {
        if (a.constructor !== b.constructor) return false;
        let length;
        let i;
        if (Array.isArray(a) && Array.isArray(b)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!deepEqual(a[i], b[i])) return false;
            return true;
        }
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        const keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            const key = keys[i];
            if (key && !deepEqual(a[key], b[key])) return false;
        }
        return true;
    }
    return a !== a && b !== b;
}
// src/utils/deserialize.ts
var findAndReplace = (cacheRef, { find, replace })=>{
    if (cacheRef && find(cacheRef)) {
        return replace(cacheRef);
    }
    if (typeof cacheRef !== "object") {
        return cacheRef;
    }
    if (Array.isArray(cacheRef)) {
        return cacheRef.map((item)=>findAndReplace(item, {
                find,
                replace
            }));
    }
    if (cacheRef instanceof Object) {
        return Object.entries(cacheRef).reduce((curr, [key, value])=>({
                ...curr,
                [key]: findAndReplace(value, {
                    find,
                    replace
                })
            }), {});
    }
    return cacheRef;
};
function deserialize(cachedString) {
    const cache = JSON.parse(cachedString);
    const deserializedCacheWithBigInts = findAndReplace(cache, {
        find: (data)=>typeof data === "string" && data.startsWith("#bigint."),
        replace: (data)=>BigInt(data.replace("#bigint.", ""))
    });
    return deserializedCacheWithBigInts;
}
// src/utils/getParameters.ts
function getCallParameters(args) {
    return {
        accessList: args.accessList,
        account: args.account,
        blockNumber: args.blockNumber,
        blockTag: args.blockTag,
        data: args.data,
        gas: args.gas,
        gasPrice: args.gasPrice,
        maxFeePerGas: args.maxFeePerGas,
        maxPriorityFeePerGas: args.maxPriorityFeePerGas,
        nonce: args.nonce,
        to: args.to,
        value: args.value
    };
}
function getSendTransactionParameters(args) {
    return {
        accessList: args.accessList,
        account: args.account,
        data: args.data,
        gas: args.gas,
        gasPrice: args.gasPrice,
        maxFeePerGas: args.maxFeePerGas,
        maxPriorityFeePerGas: args.maxPriorityFeePerGas,
        nonce: args.nonce,
        to: args.to,
        value: args.value
    };
}
;
function getUnit(unit) {
    if (typeof unit === "number") return unit;
    if (unit === "wei") return 0;
    return Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weiUnits"][unit]);
}
// src/utils/serialize.ts
function getReferenceKey(keys, cutoff) {
    return keys.slice(0, cutoff).join(".") || ".";
}
function getCutoff(array, value) {
    const { length } = array;
    for(let index = 0; index < length; ++index){
        if (array[index] === value) {
            return index + 1;
        }
    }
    return 0;
}
function createReplacer(replacer, circularReplacer) {
    const hasReplacer = typeof replacer === "function";
    const hasCircularReplacer = typeof circularReplacer === "function";
    const cache = [];
    const keys = [];
    return function replace(key, value) {
        if (typeof value === "object") {
            if (cache.length) {
                const thisCutoff = getCutoff(cache, this);
                if (thisCutoff === 0) {
                    cache[cache.length] = this;
                } else {
                    cache.splice(thisCutoff);
                    keys.splice(thisCutoff);
                }
                keys[keys.length] = key;
                const valueCutoff = getCutoff(cache, value);
                if (valueCutoff !== 0) {
                    return hasCircularReplacer ? circularReplacer.call(this, key, value, getReferenceKey(keys, valueCutoff)) : `[ref=${getReferenceKey(keys, valueCutoff)}]`;
                }
            } else {
                cache[0] = value;
                keys[0] = key;
            }
        }
        return hasReplacer ? replacer.call(this, key, value) : value;
    };
}
function serialize(value, replacer, indent, circularReplacer) {
    return JSON.stringify(value, createReplacer((key, value_)=>{
        const value2 = typeof value_ === "bigint" ? `#bigint.${value_.toString()}` : value_;
        return replacer?.(key, value2) || value2;
    }, circularReplacer), indent ?? void 0);
}
;
;
// src/storage.ts
var noopStorage = {
    getItem: (_key)=>"",
    setItem: (_key, _value)=>null,
    removeItem: (_key)=>null
};
function createStorage({ deserialize: deserialize2 = deserialize, key: prefix = "wagmi", serialize: serialize2 = serialize, storage }) {
    return {
        ...storage,
        getItem: (key, defaultState = null)=>{
            const value = storage.getItem(`${prefix}.${key}`);
            try {
                return value ? deserialize2(value) : defaultState;
            } catch (error) {
                console.warn(error);
                return defaultState;
            }
        },
        setItem: (key, value)=>{
            if (value === null) {
                storage.removeItem(`${prefix}.${key}`);
            } else {
                try {
                    storage.setItem(`${prefix}.${key}`, serialize2(value));
                } catch (err) {
                    console.error(err);
                }
            }
        },
        removeItem: (key)=>storage.removeItem(`${prefix}.${key}`)
    };
}
// src/config.ts
var storeKey = "store";
var _isAutoConnecting, _lastUsedConnector, _addEffects, addEffects_fn;
var Config = class {
    constructor({ autoConnect = false, connectors = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$P4NRLOY7$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectedConnector"]()
    ], publicClient, storage = createStorage({
        storage: typeof window !== "undefined" ? window.localStorage : noopStorage
    }), logger = {
        warn: console.warn
    }, webSocketPublicClient }){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$MQXBDTVK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _addEffects);
        this.publicClients = /* @__PURE__ */ new Map();
        this.webSocketPublicClients = /* @__PURE__ */ new Map();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$MQXBDTVK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _isAutoConnecting, void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$MQXBDTVK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _lastUsedConnector, void 0);
        this.args = {
            autoConnect,
            connectors,
            logger,
            publicClient,
            storage,
            webSocketPublicClient
        };
        let status = "disconnected";
        let chainId;
        if (autoConnect) {
            try {
                const rawState = storage.getItem(storeKey);
                const data = rawState?.state?.data;
                status = data?.account ? "reconnecting" : "connecting";
                chainId = data?.chain?.id;
            } catch (_error) {}
        }
        const connectors_ = typeof connectors === "function" ? connectors() : connectors;
        connectors_.forEach((connector)=>connector.setStorage(storage));
        this.store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeWithSelector"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])(()=>({
                connectors: connectors_,
                publicClient: this.getPublicClient({
                    chainId
                }),
                status,
                webSocketPublicClient: this.getWebSocketPublicClient({
                    chainId
                })
            }), {
            name: storeKey,
            storage,
            partialize: (state)=>({
                    ...autoConnect && {
                        data: {
                            account: state?.data?.account,
                            chain: state?.data?.chain
                        }
                    },
                    chains: state?.chains
                }),
            version: 2
        })));
        this.storage = storage;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$MQXBDTVK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateSet"])(this, _lastUsedConnector, storage?.getItem("wallet"));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$MQXBDTVK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _addEffects, addEffects_fn).call(this);
        if (autoConnect && typeof window !== "undefined") setTimeout(async ()=>await this.autoConnect(), 0);
    }
    get chains() {
        return this.store.getState().chains;
    }
    get connectors() {
        return this.store.getState().connectors;
    }
    get connector() {
        return this.store.getState().connector;
    }
    get data() {
        return this.store.getState().data;
    }
    get error() {
        return this.store.getState().error;
    }
    get lastUsedChainId() {
        return this.data?.chain?.id;
    }
    get publicClient() {
        return this.store.getState().publicClient;
    }
    get status() {
        return this.store.getState().status;
    }
    get subscribe() {
        return this.store.subscribe;
    }
    get webSocketPublicClient() {
        return this.store.getState().webSocketPublicClient;
    }
    setState(updater) {
        const newState = typeof updater === "function" ? updater(this.store.getState()) : updater;
        this.store.setState(newState, true);
    }
    clearState() {
        this.setState((x)=>({
                ...x,
                chains: void 0,
                connector: void 0,
                data: void 0,
                error: void 0,
                status: "disconnected"
            }));
    }
    async destroy() {
        if (this.connector) await this.connector.disconnect?.();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$MQXBDTVK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateSet"])(this, _isAutoConnecting, false);
        this.clearState();
        this.store.destroy();
    }
    async autoConnect() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$MQXBDTVK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _isAutoConnecting)) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$MQXBDTVK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateSet"])(this, _isAutoConnecting, true);
        this.setState((x)=>({
                ...x,
                status: x.data?.account ? "reconnecting" : "connecting"
            }));
        const sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$MQXBDTVK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _lastUsedConnector) ? [
            ...this.connectors
        ].sort((x)=>x.id === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$MQXBDTVK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _lastUsedConnector) ? -1 : 1) : this.connectors;
        let connected = false;
        for (const connector of sorted){
            if (!connector.ready || !connector.isAuthorized) continue;
            const isAuthorized = await connector.isAuthorized();
            if (!isAuthorized) continue;
            const data = await connector.connect();
            this.setState((x)=>({
                    ...x,
                    connector,
                    chains: connector?.chains,
                    data,
                    status: "connected"
                }));
            connected = true;
            break;
        }
        if (!connected) this.setState((x)=>({
                ...x,
                data: void 0,
                status: "disconnected"
            }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$MQXBDTVK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateSet"])(this, _isAutoConnecting, false);
        return this.data;
    }
    setConnectors(connectors) {
        this.args = {
            ...this.args,
            connectors
        };
        const connectors_ = typeof connectors === "function" ? connectors() : connectors;
        connectors_.forEach((connector)=>connector.setStorage(this.args.storage));
        this.setState((x)=>({
                ...x,
                connectors: connectors_
            }));
    }
    getPublicClient({ chainId } = {}) {
        let publicClient_ = this.publicClients.get(-1);
        if (publicClient_ && publicClient_?.chain.id === chainId) return publicClient_;
        publicClient_ = this.publicClients.get(chainId ?? -1);
        if (publicClient_) return publicClient_;
        const { publicClient } = this.args;
        publicClient_ = typeof publicClient === "function" ? publicClient({
            chainId
        }) : publicClient;
        this.publicClients.set(chainId ?? -1, publicClient_);
        return publicClient_;
    }
    setPublicClient(publicClient) {
        const chainId = this.data?.chain?.id;
        this.args = {
            ...this.args,
            publicClient
        };
        this.publicClients.clear();
        this.setState((x)=>({
                ...x,
                publicClient: this.getPublicClient({
                    chainId
                })
            }));
    }
    getWebSocketPublicClient({ chainId } = {}) {
        let webSocketPublicClient_ = this.webSocketPublicClients.get(-1);
        if (webSocketPublicClient_ && webSocketPublicClient_?.chain.id === chainId) return webSocketPublicClient_;
        webSocketPublicClient_ = this.webSocketPublicClients.get(chainId ?? -1);
        if (webSocketPublicClient_) return webSocketPublicClient_;
        const { webSocketPublicClient } = this.args;
        webSocketPublicClient_ = typeof webSocketPublicClient === "function" ? webSocketPublicClient({
            chainId
        }) : webSocketPublicClient;
        if (webSocketPublicClient_) this.webSocketPublicClients.set(chainId ?? -1, webSocketPublicClient_);
        return webSocketPublicClient_;
    }
    setWebSocketPublicClient(webSocketPublicClient) {
        const chainId = this.data?.chain?.id;
        this.args = {
            ...this.args,
            webSocketPublicClient
        };
        this.webSocketPublicClients.clear();
        this.setState((x)=>({
                ...x,
                webSocketPublicClient: this.getWebSocketPublicClient({
                    chainId
                })
            }));
    }
    setLastUsedConnector(lastUsedConnector = null) {
        this.storage?.setItem("wallet", lastUsedConnector);
    }
};
_isAutoConnecting = new WeakMap();
_lastUsedConnector = new WeakMap();
_addEffects = new WeakSet();
addEffects_fn = function() {
    const onChange = (data)=>{
        this.setState((x)=>({
                ...x,
                data: {
                    ...x.data,
                    ...data
                }
            }));
    };
    const onDisconnect = ()=>{
        this.clearState();
    };
    const onError = (error)=>{
        this.setState((x)=>({
                ...x,
                error
            }));
    };
    this.store.subscribe(({ connector })=>connector, (connector, prevConnector)=>{
        prevConnector?.off?.("change", onChange);
        prevConnector?.off?.("disconnect", onDisconnect);
        prevConnector?.off?.("error", onError);
        if (!connector) return;
        connector.on?.("change", onChange);
        connector.on?.("disconnect", onDisconnect);
        connector.on?.("error", onError);
    });
    const { publicClient, webSocketPublicClient } = this.args;
    const subscribePublicClient = typeof publicClient === "function";
    const subscribeWebSocketPublicClient = typeof webSocketPublicClient === "function";
    if (subscribePublicClient || subscribeWebSocketPublicClient) this.store.subscribe(({ data })=>data?.chain?.id, (chainId)=>{
        this.setState((x)=>({
                ...x,
                publicClient: this.getPublicClient({
                    chainId
                }),
                webSocketPublicClient: this.getWebSocketPublicClient({
                    chainId
                })
            }));
    });
};
var config;
function createConfig(args) {
    const config_ = new Config(args);
    config = config_;
    return config_;
}
function getConfig() {
    if (!config) {
        throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");
    }
    return config;
}
// src/actions/accounts/connect.ts
async function connect({ chainId, connector }) {
    const config2 = getConfig();
    const activeConnector = config2.connector;
    if (activeConnector && connector.id === activeConnector.id) throw new ConnectorAlreadyConnectedError();
    try {
        config2.setState((x)=>({
                ...x,
                status: "connecting"
            }));
        const data = await connector.connect({
            chainId
        });
        config2.setLastUsedConnector(connector.id);
        config2.setState((x)=>({
                ...x,
                connector,
                chains: connector?.chains,
                data,
                status: "connected"
            }));
        config2.storage.setItem("connected", true);
        return {
            ...data,
            connector
        };
    } catch (err) {
        config2.setState((x)=>{
            return {
                ...x,
                status: x.connector ? "connected" : "disconnected"
            };
        });
        throw err;
    }
}
// src/actions/accounts/disconnect.ts
async function disconnect() {
    const config2 = getConfig();
    if (config2.connector) await config2.connector.disconnect();
    config2.clearState();
    config2.storage.removeItem("connected");
}
;
// src/constants/abis.ts
var erc20ABI = [
    {
        type: "event",
        name: "Approval",
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ]
    },
    {
        type: "event",
        name: "Transfer",
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "allowance",
        stateMutability: "view",
        inputs: [
            {
                name: "owner",
                type: "address"
            },
            {
                name: "spender",
                type: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "approve",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "spender",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ]
    },
    {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [
            {
                name: "account",
                type: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "decimals",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint8"
            }
        ]
    },
    {
        type: "function",
        name: "name",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string"
            }
        ]
    },
    {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string"
            }
        ]
    },
    {
        type: "function",
        name: "totalSupply",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "transfer",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "recipient",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ]
    },
    {
        type: "function",
        name: "transferFrom",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "sender",
                type: "address"
            },
            {
                name: "recipient",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ]
    }
];
var erc20ABI_bytes32 = [
    {
        type: "event",
        name: "Approval",
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ]
    },
    {
        type: "event",
        name: "Transfer",
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "allowance",
        stateMutability: "view",
        inputs: [
            {
                name: "owner",
                type: "address"
            },
            {
                name: "spender",
                type: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "approve",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "spender",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ]
    },
    {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [
            {
                name: "account",
                type: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "decimals",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint8"
            }
        ]
    },
    {
        type: "function",
        name: "name",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32"
            }
        ]
    },
    {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32"
            }
        ]
    },
    {
        type: "function",
        name: "totalSupply",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "transfer",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "recipient",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ]
    },
    {
        type: "function",
        name: "transferFrom",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "sender",
                type: "address"
            },
            {
                name: "recipient",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ]
    }
];
var erc721ABI = [
    {
        type: "event",
        name: "Approval",
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                name: "spender",
                type: "address"
            },
            {
                indexed: true,
                name: "tokenId",
                type: "uint256"
            }
        ]
    },
    {
        type: "event",
        name: "ApprovalForAll",
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                name: "operator",
                type: "address"
            },
            {
                indexed: false,
                name: "approved",
                type: "bool"
            }
        ]
    },
    {
        type: "event",
        name: "Transfer",
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                name: "to",
                type: "address"
            },
            {
                indexed: true,
                name: "tokenId",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "approve",
        stateMutability: "payable",
        inputs: [
            {
                name: "spender",
                type: "address"
            },
            {
                name: "tokenId",
                type: "uint256"
            }
        ],
        outputs: []
    },
    {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [
            {
                name: "account",
                type: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "getApproved",
        stateMutability: "view",
        inputs: [
            {
                name: "tokenId",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "address"
            }
        ]
    },
    {
        type: "function",
        name: "isApprovedForAll",
        stateMutability: "view",
        inputs: [
            {
                name: "owner",
                type: "address"
            },
            {
                name: "operator",
                type: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ]
    },
    {
        type: "function",
        name: "name",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string"
            }
        ]
    },
    {
        type: "function",
        name: "ownerOf",
        stateMutability: "view",
        inputs: [
            {
                name: "tokenId",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "owner",
                type: "address"
            }
        ]
    },
    {
        type: "function",
        name: "safeTransferFrom",
        stateMutability: "payable",
        inputs: [
            {
                name: "from",
                type: "address"
            },
            {
                name: "to",
                type: "address"
            },
            {
                name: "tokenId",
                type: "uint256"
            }
        ],
        outputs: []
    },
    {
        type: "function",
        name: "safeTransferFrom",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "from",
                type: "address"
            },
            {
                name: "to",
                type: "address"
            },
            {
                name: "id",
                type: "uint256"
            },
            {
                name: "data",
                type: "bytes"
            }
        ],
        outputs: []
    },
    {
        type: "function",
        name: "setApprovalForAll",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "operator",
                type: "address"
            },
            {
                name: "approved",
                type: "bool"
            }
        ],
        outputs: []
    },
    {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string"
            }
        ]
    },
    {
        type: "function",
        name: "tokenByIndex",
        stateMutability: "view",
        inputs: [
            {
                name: "index",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "tokenByIndex",
        stateMutability: "view",
        inputs: [
            {
                name: "owner",
                type: "address"
            },
            {
                name: "index",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "tokenId",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "tokenURI",
        stateMutability: "view",
        inputs: [
            {
                name: "tokenId",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "string"
            }
        ]
    },
    {
        type: "function",
        name: "totalSupply",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "transferFrom",
        stateMutability: "payable",
        inputs: [
            {
                name: "sender",
                type: "address"
            },
            {
                name: "recipient",
                type: "address"
            },
            {
                name: "tokeId",
                type: "uint256"
            }
        ],
        outputs: []
    }
];
var erc4626ABI = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "sender",
                type: "address"
            },
            {
                indexed: true,
                name: "receiver",
                type: "address"
            },
            {
                indexed: false,
                name: "assets",
                type: "uint256"
            },
            {
                indexed: false,
                name: "shares",
                type: "uint256"
            }
        ],
        name: "Deposit",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                name: "value",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "sender",
                type: "address"
            },
            {
                indexed: true,
                name: "receiver",
                type: "address"
            },
            {
                indexed: true,
                name: "owner",
                type: "address"
            },
            {
                indexed: false,
                name: "assets",
                type: "uint256"
            },
            {
                indexed: false,
                name: "shares",
                type: "uint256"
            }
        ],
        name: "Withdraw",
        type: "event"
    },
    {
        inputs: [
            {
                name: "owner",
                type: "address"
            },
            {
                name: "spender",
                type: "address"
            }
        ],
        name: "allowance",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "spender",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "asset",
        outputs: [
            {
                name: "assetTokenAddress",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "account",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        name: "convertToAssets",
        outputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        name: "convertToShares",
        outputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "assets",
                type: "uint256"
            },
            {
                name: "receiver",
                type: "address"
            }
        ],
        name: "deposit",
        outputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                name: "caller",
                type: "address"
            }
        ],
        name: "maxDeposit",
        outputs: [
            {
                name: "maxAssets",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "caller",
                type: "address"
            }
        ],
        name: "maxMint",
        outputs: [
            {
                name: "maxShares",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "owner",
                type: "address"
            }
        ],
        name: "maxRedeem",
        outputs: [
            {
                name: "maxShares",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "owner",
                type: "address"
            }
        ],
        name: "maxWithdraw",
        outputs: [
            {
                name: "maxAssets",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "shares",
                type: "uint256"
            },
            {
                name: "receiver",
                type: "address"
            }
        ],
        name: "mint",
        outputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        name: "previewDeposit",
        outputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        name: "previewMint",
        outputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        name: "previewRedeem",
        outputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        name: "previewWithdraw",
        outputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "shares",
                type: "uint256"
            },
            {
                name: "receiver",
                type: "address"
            },
            {
                name: "owner",
                type: "address"
            }
        ],
        name: "redeem",
        outputs: [
            {
                name: "assets",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "totalAssets",
        outputs: [
            {
                name: "totalManagedAssets",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                name: "to",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        name: "transfer",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                name: "from",
                type: "address"
            },
            {
                name: "to",
                type: "address"
            },
            {
                name: "amount",
                type: "uint256"
            }
        ],
        name: "transferFrom",
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                name: "assets",
                type: "uint256"
            },
            {
                name: "receiver",
                type: "address"
            },
            {
                name: "owner",
                type: "address"
            }
        ],
        name: "withdraw",
        outputs: [
            {
                name: "shares",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }
];
;
async function fetchToken({ address, chainId, formatUnits: unit = 18 }) {
    async function fetchToken_({ abi }) {
        const erc20Config = {
            address,
            abi,
            chainId
        };
        const [decimals, name, symbol, totalSupply] = await readContracts({
            allowFailure: false,
            contracts: [
                {
                    ...erc20Config,
                    functionName: "decimals"
                },
                {
                    ...erc20Config,
                    functionName: "name"
                },
                {
                    ...erc20Config,
                    functionName: "symbol"
                },
                {
                    ...erc20Config,
                    functionName: "totalSupply"
                }
            ]
        });
        return {
            address,
            decimals,
            name,
            symbol,
            totalSupply: {
                formatted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(totalSupply, getUnit(unit)),
                value: totalSupply
            }
        };
    }
    try {
        return await fetchToken_({
            abi: erc20ABI
        });
    } catch (err) {
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFunctionExecutionError"]) {
            const { name, symbol, ...rest } = await fetchToken_({
                abi: erc20ABI_bytes32
            });
            return {
                name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(name, {
                    dir: "right"
                })),
                symbol: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(symbol, {
                    dir: "right"
                })),
                ...rest
            };
        }
        throw err;
    }
}
// src/actions/viem/getPublicClient.ts
function getPublicClient({ chainId } = {}) {
    const config2 = getConfig();
    if (chainId) return config2.getPublicClient({
        chainId
    }) || config2.publicClient;
    return config2.publicClient;
}
// src/actions/viem/getWalletClient.ts
async function getWalletClient({ chainId } = {}) {
    const config2 = getConfig();
    const walletClient = await config2.connector?.getWalletClient?.({
        chainId
    }) || null;
    return walletClient;
}
// src/actions/viem/getWebSocketPublicClient.ts
function getWebSocketPublicClient({ chainId } = {}) {
    const config2 = getConfig();
    if (chainId) return config2.getWebSocketPublicClient({
        chainId
    }) || config2.webSocketPublicClient;
    return config2.webSocketPublicClient;
}
// src/actions/viem/watchPublicClient.ts
function watchPublicClient(args, callback) {
    const config2 = getConfig();
    const handleChange = async ()=>callback(getPublicClient(args));
    const unsubscribe = config2.subscribe(({ publicClient })=>publicClient, handleChange);
    return unsubscribe;
}
;
function watchWalletClient({ chainId }, callback) {
    const config2 = getConfig();
    const handleChange = async ({ chainId: chainId_ })=>{
        if (chainId && chainId_ && chainId !== chainId_) return;
        const walletClient = await getWalletClient({
            chainId
        });
        if (!getConfig().connector) return callback(null);
        return callback(walletClient);
    };
    const unsubscribe = config2.subscribe(({ data, connector })=>({
            account: data?.account,
            chainId: data?.chain?.id,
            connector
        }), handleChange, {
        equalityFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallow"]
    });
    return unsubscribe;
}
// src/actions/viem/watchWebSocketPublicClient.ts
function watchWebSocketPublicClient(args, callback) {
    const config2 = getConfig();
    const handleChange = async ()=>callback(getWebSocketPublicClient(args));
    const unsubscribe = config2.subscribe(({ webSocketPublicClient })=>webSocketPublicClient, handleChange);
    return unsubscribe;
}
// src/actions/contracts/prepareWriteContract.ts
async function prepareWriteContract({ abi, address, args, chainId, dataSuffix, functionName, walletClient: walletClient_, ...config2 }) {
    const publicClient = getPublicClient({
        chainId
    });
    const walletClient = walletClient_ ?? await getWalletClient({
        chainId
    });
    if (!walletClient) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
    if (chainId) assertActiveChain({
        chainId
    });
    const { account, accessList, blockNumber, blockTag, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, value } = getCallParameters(config2);
    const { result, request } = await publicClient.simulateContract({
        abi,
        address,
        functionName,
        args,
        account: account || walletClient.account,
        accessList,
        blockNumber,
        blockTag,
        dataSuffix,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        value
    });
    const minimizedAbi = abi.filter((abiItem)=>"name" in abiItem && abiItem.name === functionName);
    return {
        mode: "prepared",
        request: {
            ...request,
            abi: minimizedAbi,
            chainId
        },
        result
    };
}
;
function getContract({ address, abi, chainId, walletClient }) {
    const publicClient = getPublicClient({
        chainId
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$getContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContract"])({
        address,
        abi,
        publicClient,
        walletClient
    });
}
// src/actions/contracts/multicall.ts
async function multicall({ chainId, contracts, blockNumber, blockTag, ...args }) {
    const publicClient = getPublicClient({
        chainId
    });
    if (!publicClient.chains) throw new ConfigChainsNotFound();
    if (chainId && publicClient.chain.id !== chainId) throw new ChainNotConfiguredError({
        chainId
    });
    return publicClient.multicall({
        allowFailure: args.allowFailure ?? true,
        blockNumber,
        blockTag,
        contracts
    });
}
// src/actions/contracts/readContract.ts
async function readContract({ address, account, chainId, abi, args, functionName, blockNumber, blockTag }) {
    const publicClient = getPublicClient({
        chainId
    });
    return publicClient.readContract({
        abi,
        address,
        account,
        functionName,
        args,
        blockNumber,
        blockTag
    });
}
;
async function readContracts({ contracts, blockNumber, blockTag, ...args }) {
    const { allowFailure = true } = args;
    try {
        const publicClient = getPublicClient();
        const contractsByChainId = contracts.reduce((contracts2, contract, index)=>{
            const chainId = contract.chainId ?? publicClient.chain.id;
            return {
                ...contracts2,
                [chainId]: [
                    ...contracts2[chainId] || [],
                    {
                        contract,
                        index
                    }
                ]
            };
        }, {});
        const promises = ()=>Object.entries(contractsByChainId).map(([chainId, contracts2])=>multicall({
                    allowFailure,
                    chainId: parseInt(chainId),
                    contracts: contracts2.map(({ contract })=>contract),
                    blockNumber,
                    blockTag
                }));
        const multicallResults = (await Promise.all(promises())).flat();
        const resultIndexes = Object.values(contractsByChainId).flatMap((contracts2)=>contracts2.map(({ index })=>index));
        return multicallResults.reduce((results, result, index)=>{
            if (results) results[resultIndexes[index]] = result;
            return results;
        }, []);
    } catch (err) {
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFunctionExecutionError"]) throw err;
        const promises = ()=>contracts.map((contract)=>readContract({
                    ...contract,
                    blockNumber,
                    blockTag
                }));
        if (allowFailure) return (await Promise.allSettled(promises())).map((result)=>{
            if (result.status === "fulfilled") return {
                result: result.value,
                status: "success"
            };
            return {
                error: result.reason,
                result: void 0,
                status: "failure"
            };
        });
        return await Promise.all(promises());
    }
}
;
function watchContractEvent({ address, abi, chainId, eventName }, callback) {
    let unwatch;
    const watchEvent = async ()=>{
        if (unwatch) unwatch();
        const publicClient = getWebSocketPublicClient({
            chainId
        }) || getPublicClient({
            chainId
        });
        unwatch = publicClient.watchContractEvent({
            address,
            abi,
            eventName,
            onLogs: callback
        });
    };
    watchEvent();
    const config2 = getConfig();
    const unsubscribe = config2.subscribe(({ publicClient, webSocketPublicClient })=>({
            publicClient,
            webSocketPublicClient
        }), watchEvent, {
        equalityFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallow"]
    });
    return ()=>{
        unwatch?.();
        unsubscribe();
    };
}
;
function watchBlockNumber(args, callback) {
    let unwatch;
    const createListener = (publicClient)=>{
        if (unwatch) unwatch();
        unwatch = publicClient.watchBlockNumber({
            onBlockNumber: callback,
            emitOnBegin: true,
            poll: true
        });
    };
    const publicClient_ = getWebSocketPublicClient({
        chainId: args.chainId
    }) ?? getPublicClient({
        chainId: args.chainId
    });
    if (args.listen) createListener(publicClient_);
    const config2 = getConfig();
    const unsubscribe = config2.subscribe(({ publicClient, webSocketPublicClient })=>({
            publicClient,
            webSocketPublicClient
        }), async ({ publicClient, webSocketPublicClient })=>{
        const publicClient_2 = webSocketPublicClient ?? publicClient;
        if (args.listen && !args.chainId && publicClient_2) {
            createListener(publicClient_2);
        }
    }, {
        equalityFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallow"]
    });
    return ()=>{
        unsubscribe();
        unwatch?.();
    };
}
// src/actions/contracts/watchMulticall.ts
function watchMulticall(args, callback) {
    const config2 = getConfig();
    const handleChange = async ()=>callback(await multicall(args));
    const unwatch = args.listenToBlock ? watchBlockNumber({
        listen: true
    }, handleChange) : void 0;
    const unsubscribe = config2.subscribe(({ publicClient })=>publicClient, handleChange);
    return ()=>{
        unsubscribe();
        unwatch?.();
    };
}
// src/actions/contracts/watchReadContract.ts
function watchReadContract(args, callback) {
    const config2 = getConfig();
    const handleChange = async ()=>callback(await readContract(args));
    const unwatch = args.listenToBlock ? watchBlockNumber({
        listen: true
    }, handleChange) : void 0;
    const unsubscribe = config2.subscribe(({ publicClient })=>publicClient, handleChange);
    return ()=>{
        unsubscribe();
        unwatch?.();
    };
}
// src/actions/contracts/watchReadContracts.ts
function watchReadContracts(args, callback) {
    const config2 = getConfig();
    const handleChange = async ()=>callback(await readContracts(args));
    const unwatch = args.listenToBlock ? watchBlockNumber({
        listen: true
    }, handleChange) : void 0;
    const unsubscribe = config2.subscribe(({ publicClient })=>publicClient, handleChange);
    return ()=>{
        unsubscribe();
        unwatch?.();
    };
}
// src/actions/contracts/writeContract.ts
async function writeContract(config2) {
    const walletClient = await getWalletClient({
        chainId: config2.chainId
    });
    if (!walletClient) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
    if (config2.chainId) assertActiveChain({
        chainId: config2.chainId
    });
    let request;
    if (config2.mode === "prepared") {
        request = config2.request;
    } else {
        const { chainId: _, mode: __, ...args } = config2;
        const res = await prepareWriteContract(args);
        request = res.request;
    }
    const hash = await walletClient.writeContract({
        ...request,
        chain: config2.chainId ? {
            id: config2.chainId
        } : null
    });
    return {
        hash
    };
}
// src/actions/accounts/fetchBalance.ts
async function fetchBalance({ address, chainId, formatUnits: unit, token }) {
    const config2 = getConfig();
    const publicClient = getPublicClient({
        chainId
    });
    if (token) {
        const fetchContractBalance = async ({ abi })=>{
            const erc20Config = {
                abi,
                address: token,
                chainId
            };
            const [value2, decimals, symbol] = await readContracts({
                allowFailure: false,
                contracts: [
                    {
                        ...erc20Config,
                        functionName: "balanceOf",
                        args: [
                            address
                        ]
                    },
                    {
                        ...erc20Config,
                        functionName: "decimals"
                    },
                    {
                        ...erc20Config,
                        functionName: "symbol"
                    }
                ]
            });
            return {
                decimals,
                formatted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(value2 ?? "0", getUnit(unit ?? decimals)),
                symbol,
                value: value2
            };
        };
        try {
            return await fetchContractBalance({
                abi: erc20ABI
            });
        } catch (err) {
            if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFunctionExecutionError"]) {
                const { symbol, ...rest } = await fetchContractBalance({
                    abi: erc20ABI_bytes32
                });
                return {
                    symbol: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(symbol, {
                        dir: "right"
                    })),
                    ...rest
                };
            }
            throw err;
        }
    }
    const chains = [
        ...config2.publicClient.chains || [],
        ...config2.chains ?? []
    ];
    const value = await publicClient.getBalance({
        address
    });
    const chain = chains.find((x)=>x.id === publicClient.chain.id);
    return {
        decimals: chain?.nativeCurrency.decimals ?? 18,
        formatted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(value ?? "0", getUnit(unit ?? 18)),
        symbol: chain?.nativeCurrency.symbol ?? "ETH",
        value
    };
}
// src/actions/accounts/getAccount.ts
function getAccount() {
    const { data, connector, status } = getConfig();
    switch(status){
        case "connected":
            return {
                address: data?.account,
                connector,
                isConnected: true,
                isConnecting: false,
                isDisconnected: false,
                isReconnecting: false,
                status
            };
        case "reconnecting":
            return {
                address: data?.account,
                connector,
                isConnected: !!data?.account,
                isConnecting: false,
                isDisconnected: false,
                isReconnecting: true,
                status
            };
        case "connecting":
            return {
                address: data?.account,
                connector,
                isConnected: false,
                isConnecting: true,
                isDisconnected: false,
                isReconnecting: false,
                status
            };
        case "disconnected":
            return {
                address: void 0,
                connector: void 0,
                isConnected: false,
                isConnecting: false,
                isDisconnected: true,
                isReconnecting: false,
                status
            };
    }
}
// src/actions/accounts/getNetwork.ts
function getNetwork() {
    const config2 = getConfig();
    const chainId = config2.data?.chain?.id;
    const activeChains = config2.chains ?? [];
    const activeChain = [
        ...config2.publicClient?.chains || [],
        ...activeChains
    ].find((x)=>x.id === chainId) ?? {
        id: chainId,
        name: `Chain ${chainId}`,
        network: `${chainId}`,
        nativeCurrency: {
            name: "Ether",
            decimals: 18,
            symbol: "ETH"
        },
        rpcUrls: {
            default: {
                http: [
                    ""
                ]
            },
            public: {
                http: [
                    ""
                ]
            }
        }
    };
    return {
        chain: chainId ? {
            ...activeChain,
            ...config2.data?.chain,
            id: chainId
        } : void 0,
        chains: activeChains
    };
}
// src/actions/accounts/signMessage.ts
async function signMessage(args) {
    const walletClient = await getWalletClient();
    if (!walletClient) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
    return await walletClient.signMessage({
        message: args.message
    });
}
// src/actions/accounts/signTypedData.ts
async function signTypedData({ domain, message, primaryType, types }) {
    const walletClient = await getWalletClient();
    if (!walletClient) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
    const { chainId } = domain;
    if (chainId) assertActiveChain({
        chainId
    });
    return walletClient.signTypedData({
        message,
        primaryType,
        types,
        domain
    });
}
// src/actions/accounts/switchNetwork.ts
async function switchNetwork({ chainId }) {
    const { connector } = getConfig();
    if (!connector) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
    if (!connector.switchChain) throw new SwitchChainNotSupportedError({
        connector
    });
    return connector.switchChain(chainId);
}
;
function watchAccount(callback, { selector = (x)=>x } = {}) {
    const config2 = getConfig();
    const handleChange = ()=>callback(getAccount());
    const unsubscribe = config2.subscribe(({ data, connector, status })=>selector({
            address: data?.account,
            connector,
            status
        }), handleChange, {
        equalityFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallow"]
    });
    return unsubscribe;
}
;
function watchNetwork(callback, { selector = (x)=>x } = {}) {
    const config2 = getConfig();
    const handleChange = ()=>callback(getNetwork());
    const unsubscribe = config2.subscribe(({ data, chains })=>selector({
            chainId: data?.chain?.id,
            chains
        }), handleChange, {
        equalityFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallow"]
    });
    return unsubscribe;
}
;
async function fetchEnsAddress({ chainId, name }) {
    const { normalize } = await __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/ens/index.js [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    const publicClient = getPublicClient({
        chainId
    });
    const address = await publicClient.getEnsAddress({
        name: normalize(name)
    });
    try {
        if (address === "0x0000000000000000000000000000000000000000") return null;
        return address ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(address) : null;
    } catch (_error) {
        return null;
    }
}
// src/actions/ens/fetchEnsAvatar.ts
async function fetchEnsAvatar({ name, chainId }) {
    const { normalize } = await __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/ens/index.js [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    const publicClient = getPublicClient({
        chainId
    });
    const avatar = await publicClient.getEnsAvatar({
        name: normalize(name)
    });
    return avatar;
}
;
async function fetchEnsName({ address, chainId }) {
    const publicClient = getPublicClient({
        chainId
    });
    return publicClient.getEnsName({
        address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(address)
    });
}
// src/actions/ens/fetchEnsResolver.ts
async function fetchEnsResolver({ chainId, name }) {
    const { normalize } = await __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/ens/index.js [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
    const publicClient = getPublicClient({
        chainId
    });
    const resolver = await publicClient.getEnsResolver({
        name: normalize(name)
    });
    return resolver;
}
// src/actions/network-status/fetchBlockNumber.ts
async function fetchBlockNumber({ chainId } = {}) {
    const publicClient = getPublicClient({
        chainId
    });
    const blockNumber = await publicClient.getBlockNumber();
    return blockNumber;
}
;
async function fetchFeeData({ chainId, formatUnits: units = "gwei" } = {}) {
    const publicClient = getPublicClient({
        chainId
    });
    const block = await publicClient.getBlock();
    let gasPrice = null;
    try {
        gasPrice = await publicClient.getGasPrice();
    } catch  {}
    let lastBaseFeePerGas = null;
    let maxFeePerGas = null;
    let maxPriorityFeePerGas = null;
    if (block?.baseFeePerGas) {
        lastBaseFeePerGas = block.baseFeePerGas;
        maxPriorityFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseGwei$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseGwei"])("1");
        maxFeePerGas = block.baseFeePerGas * 2n + maxPriorityFeePerGas;
    }
    const unit = getUnit(units);
    const formatted = {
        gasPrice: gasPrice ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(gasPrice, unit) : null,
        maxFeePerGas: maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(maxFeePerGas, unit) : null,
        maxPriorityFeePerGas: maxPriorityFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(maxPriorityFeePerGas, unit) : null
    };
    return {
        lastBaseFeePerGas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        formatted
    };
}
// src/actions/transactions/fetchTransaction.ts
async function fetchTransaction({ chainId, hash }) {
    const publicClient = getPublicClient({
        chainId
    });
    return publicClient.getTransaction({
        hash
    });
}
;
async function prepareSendTransaction({ accessList, account, chainId, data, gas: gas_, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to: to_, value, walletClient: walletClient_ }) {
    const publicClient = getPublicClient({
        chainId
    });
    const walletClient = walletClient_ ?? await getWalletClient({
        chainId
    });
    if (!walletClient) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
    if (chainId) assertActiveChain({
        chainId
    });
    const to = (to_ && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to_) ? await fetchEnsAddress({
        name: to_
    }) : to_) || void 0;
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new Error("Invalid address");
    const gas = typeof gas_ === "undefined" ? await publicClient.estimateGas({
        accessList,
        account: walletClient.account,
        data,
        gas: gas_ ?? void 0,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        to,
        value
    }) : gas_ || void 0;
    return {
        accessList,
        account,
        data,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        mode: "prepared",
        nonce,
        to,
        value,
        ...chainId ? {
            chainId
        } : {}
    };
}
// src/actions/transactions/sendTransaction.ts
async function sendTransaction({ accessList, account, chainId, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, mode, nonce, to, value }) {
    const walletClient = await getWalletClient({
        chainId
    });
    if (!walletClient) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
    if (chainId) assertActiveChain({
        chainId
    });
    let args;
    if (mode === "prepared") {
        args = {
            account,
            accessList,
            chain: null,
            data,
            gas,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value
        };
    } else {
        args = await prepareSendTransaction({
            accessList,
            account,
            chainId,
            data,
            gas: gas || null,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value
        });
    }
    const hash = await walletClient.sendTransaction({
        ...args,
        chain: chainId ? {
            id: chainId
        } : null
    });
    return {
        hash
    };
}
;
async function waitForTransaction({ chainId, confirmations = 1, hash, onReplaced, timeout = 0 }) {
    const publicClient = getPublicClient({
        chainId
    });
    const receipt = await publicClient.waitForTransactionReceipt({
        hash,
        confirmations,
        onReplaced,
        timeout
    });
    if (receipt.status === "reverted") {
        const txn = await publicClient.getTransaction({
            hash: receipt.transactionHash
        });
        const code = await publicClient.call({
            ...txn,
            gasPrice: txn.type !== "eip1559" ? txn.gasPrice : void 0,
            maxFeePerGas: txn.type === "eip1559" ? txn.maxFeePerGas : void 0,
            maxPriorityFeePerGas: txn.type === "eip1559" ? txn.maxPriorityFeePerGas : void 0
        });
        const reason = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToString"])(`0x${code.substring(138)}`);
        throw new Error(reason);
    }
    return receipt;
}
;
function watchPendingTransactions(args, callback) {
    let unwatch;
    const createListener = (publicClient)=>{
        if (unwatch) unwatch();
        unwatch = publicClient.watchPendingTransactions({
            onTransactions: callback,
            poll: true
        });
    };
    const publicClient_ = getWebSocketPublicClient({
        chainId: args.chainId
    }) ?? getPublicClient({
        chainId: args.chainId
    });
    createListener(publicClient_);
    const config2 = getConfig();
    const unsubscribe = config2.subscribe(({ publicClient, webSocketPublicClient })=>({
            publicClient,
            webSocketPublicClient
        }), async ({ publicClient, webSocketPublicClient })=>{
        const publicClient_2 = webSocketPublicClient ?? publicClient;
        if (!args.chainId && publicClient_2) {
            createListener(publicClient_2);
        }
    }, {
        equalityFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallow"]
    });
    return ()=>{
        unsubscribe();
        unwatch?.();
    };
}
// src/utils/assertActiveChain.ts
function assertActiveChain({ chainId }) {
    const { chain: activeChain, chains } = getNetwork();
    const activeChainId = activeChain?.id;
    if (activeChainId && chainId !== activeChainId) {
        throw new ChainMismatchError({
            activeChain: chains.find((x)=>x.id === activeChainId)?.name ?? `Chain ${activeChainId}`,
            targetChain: chains.find((x)=>x.id === chainId)?.name ?? `Chain ${chainId}`
        });
    }
}
;
}}),
"[project]/node_modules/.pnpm/@wagmi+core@1.4.12_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/core/dist/providers/alchemy.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "alchemyProvider": (()=>alchemyProvider)
});
;
// src/providers/alchemy.ts
function alchemyProvider({ apiKey }) {
    return function(chain) {
        const baseHttpUrl = chain.rpcUrls.alchemy?.http[0];
        const baseWsUrl = chain.rpcUrls.alchemy?.webSocket?.[0];
        if (!baseHttpUrl) return null;
        return {
            chain: {
                ...chain,
                rpcUrls: {
                    ...chain.rpcUrls,
                    default: {
                        http: [
                            `${baseHttpUrl}/${apiKey}`
                        ]
                    }
                }
            },
            rpcUrls: {
                http: [
                    `${baseHttpUrl}/${apiKey}`
                ],
                webSocket: [
                    `${baseWsUrl}/${apiKey}`
                ]
            }
        };
    };
}
;
}}),
"[project]/node_modules/.pnpm/@wagmi+core@1.4.12_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/core/dist/providers/infura.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "infuraProvider": (()=>infuraProvider)
});
;
// src/providers/infura.ts
function infuraProvider({ apiKey }) {
    return function(chain) {
        const baseHttpUrl = chain.rpcUrls.infura?.http[0];
        const baseWsUrl = chain.rpcUrls.infura?.webSocket?.[0];
        if (!baseHttpUrl) return null;
        return {
            chain: {
                ...chain,
                rpcUrls: {
                    ...chain.rpcUrls,
                    default: {
                        http: [
                            `${baseHttpUrl}/${apiKey}`
                        ]
                    }
                }
            },
            rpcUrls: {
                http: [
                    `${baseHttpUrl}/${apiKey}`
                ],
                webSocket: [
                    `${baseWsUrl}/${apiKey}`
                ]
            }
        };
    };
}
;
}}),
"[project]/node_modules/.pnpm/@wagmi+core@1.4.12_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/core/dist/providers/jsonRpc.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "jsonRpcProvider": (()=>jsonRpcProvider)
});
;
// src/providers/jsonRpc.ts
function jsonRpcProvider({ rpc }) {
    return function(chain) {
        const rpcConfig = rpc(chain);
        if (!rpcConfig || rpcConfig.http === "") return null;
        return {
            chain: {
                ...chain,
                rpcUrls: {
                    ...chain.rpcUrls,
                    default: {
                        http: [
                            rpcConfig.http
                        ]
                    }
                }
            },
            rpcUrls: {
                http: [
                    rpcConfig.http
                ],
                webSocket: rpcConfig.webSocket ? [
                    rpcConfig.webSocket
                ] : void 0
            }
        };
    };
}
;
}}),
"[project]/node_modules/.pnpm/@wagmi+core@1.4.12_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/core/dist/providers/public.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "publicProvider": (()=>publicProvider)
});
;
// src/providers/public.ts
function publicProvider() {
    return function(chain) {
        if (!chain.rpcUrls.public.http[0]) return null;
        return {
            chain,
            rpcUrls: chain.rpcUrls.public
        };
    };
}
;
}}),

};

//# sourceMappingURL=1fd38_%40wagmi_core_dist_c69d53._.js.map