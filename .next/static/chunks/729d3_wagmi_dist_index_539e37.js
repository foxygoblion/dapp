(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/729d3_wagmi_dist_index_539e37.js", {

"[project]/node_modules/.pnpm/wagmi@1.4.12_@types+react@19.0.10_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescrip_d50d069e9baedf4da7c130a4aef7aa62/node_modules/wagmi/dist/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Context": (()=>Context),
    "WagmiConfig": (()=>WagmiConfig),
    "createConfig": (()=>createConfig),
    "paginatedIndexesConfig": (()=>paginatedIndexesConfig),
    "useAccount": (()=>useAccount),
    "useBalance": (()=>useBalance),
    "useBlockNumber": (()=>useBlockNumber),
    "useChainId": (()=>useChainId),
    "useConfig": (()=>useConfig),
    "useConnect": (()=>useConnect),
    "useContractEvent": (()=>useContractEvent),
    "useContractInfiniteReads": (()=>useContractInfiniteReads),
    "useContractRead": (()=>useContractRead),
    "useContractReads": (()=>useContractReads),
    "useContractWrite": (()=>useContractWrite),
    "useDisconnect": (()=>useDisconnect),
    "useEnsAddress": (()=>useEnsAddress),
    "useEnsAvatar": (()=>useEnsAvatar),
    "useEnsName": (()=>useEnsName),
    "useEnsResolver": (()=>useEnsResolver),
    "useFeeData": (()=>useFeeData),
    "useInfiniteQuery": (()=>useInfiniteQuery),
    "useMutation": (()=>useMutation),
    "useNetwork": (()=>useNetwork),
    "usePrepareContractWrite": (()=>usePrepareContractWrite),
    "usePrepareSendTransaction": (()=>usePrepareSendTransaction),
    "usePublicClient": (()=>usePublicClient),
    "useQuery": (()=>useQuery),
    "useQueryClient": (()=>useQueryClient2),
    "useSendTransaction": (()=>useSendTransaction),
    "useSignMessage": (()=>useSignMessage),
    "useSignTypedData": (()=>useSignTypedData),
    "useSwitchNetwork": (()=>useSwitchNetwork),
    "useToken": (()=>useToken),
    "useTransaction": (()=>useTransaction),
    "useWaitForTransaction": (()=>useWaitForTransaction),
    "useWalletClient": (()=>useWalletClient),
    "useWatchPendingTransactions": (()=>useWatchPendingTransactions),
    "useWebSocketPublicClient": (()=>useWebSocketPublicClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$queryClient$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@4.36.1/node_modules/@tanstack/query-core/build/lib/queryClient.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@1.4.12_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/core/dist/chunk-TSH6VVF4.js [app-client] (ecmascript) <locals>");
// src/config.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$sync$2d$storage$2d$persister$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$sync$2d$storage$2d$persister$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-sync-storage-persister@4.36.1/node_modules/@tanstack/query-sync-storage-persister/build/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$persist$2d$client$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$persist$2d$client$2d$core$2f$build$2f$lib$2f$persist$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-persist-client-core@4.36.1/node_modules/@tanstack/query-persist-client-core/build/lib/persist.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/context.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$4$2e$36$2e$1_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$lib$2f$QueryClientProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@4.36.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs [app-client] (ecmascript)");
// src/hooks/utils/useSyncExternalStore.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.0.0/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)");
// src/hooks/utils/query/useBaseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$4$2e$36$2e$1_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$lib$2f$isRestoring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@4.36.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@tanstack/react-query/build/lib/isRestoring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$4$2e$36$2e$1_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$lib$2f$QueryErrorResetBoundary$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@4.36.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@tanstack/react-query/build/lib/QueryErrorResetBoundary.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$notifyManager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@4.36.1/node_modules/@tanstack/query-core/build/lib/notifyManager.mjs [app-client] (ecmascript)");
// src/hooks/utils/query/useInfiniteQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$infiniteQueryObserver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@4.36.1/node_modules/@tanstack/query-core/build/lib/infiniteQueryObserver.mjs [app-client] (ecmascript)");
// src/hooks/utils/query/useMutation.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@4.36.1/node_modules/@tanstack/query-core/build/lib/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$4$2e$36$2e$1_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$lib$2f$useMutation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@4.36.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@tanstack/react-query/build/lib/useMutation.mjs [app-client] (ecmascript)");
// src/hooks/utils/query/useQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$queryObserver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@4.36.1/node_modules/@tanstack/query-core/build/lib/queryObserver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.0.0/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function createConfig({ queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$queryClient$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            cacheTime: 1e3 * 60 * 60 * 24,
            networkMode: "offlineFirst",
            refetchOnWindowFocus: false,
            retry: 0
        },
        mutations: {
            networkMode: "offlineFirst"
        }
    }
}), storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createStorage"])({
    storage: typeof window !== "undefined" && window.localStorage ? window.localStorage : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["noopStorage"]
}), persister = typeof window !== "undefined" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$sync$2d$storage$2d$persister$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$sync$2d$storage$2d$persister$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSyncStoragePersister"])({
    key: "cache",
    storage,
    serialize: (x)=>x,
    deserialize: (x)=>x
}) : void 0, ...args }) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createConfig"])({
        ...args,
        storage
    });
    if (persister) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$persist$2d$client$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$persist$2d$client$2d$core$2f$build$2f$lib$2f$persist$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persistQueryClient"])({
        queryClient,
        persister,
        dehydrateOptions: {
            shouldDehydrateQuery: (query)=>query.cacheTime !== 0 && query.queryKey[0].persist !== false
        }
    });
    return Object.assign(config, {
        queryClient
    });
}
;
;
var Context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
var queryClientContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
function WagmiConfig({ children, config }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(Context.Provider, {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$4$2e$36$2e$1_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$lib$2f$QueryClientProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            children,
            client: config.queryClient,
            context: queryClientContext
        }),
        value: config
    });
}
function useConfig() {
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(Context);
    if (!config) throw new Error([
        "`useConfig` must be used within `WagmiConfig`.\n",
        "Read more: https://wagmi.sh/react/WagmiConfig"
    ].join("\n"));
    return config;
}
;
;
;
;
;
var useSyncExternalStore2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useSyncExternalStore;
// src/hooks/utils/query/utils.ts
function isQueryKey(value) {
    return Array.isArray(value);
}
function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
        return false;
    }
    const ctor = o.constructor;
    if (typeof ctor === "undefined") {
        return true;
    }
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
        return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
        return false;
    }
    return true;
}
function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function parseQueryArgs(arg1, arg2, arg3) {
    if (!isQueryKey(arg1)) {
        return arg1;
    }
    if (typeof arg2 === "function") {
        return {
            ...arg3,
            queryKey: arg1,
            queryFn: arg2
        };
    }
    return {
        ...arg2,
        queryKey: arg1
    };
}
function queryKeyHashFn(queryKey17) {
    return JSON.stringify(queryKey17, (_, val)=>isPlainObject(val) ? Object.keys(val).sort().reduce((result, key)=>{
            result[key] = val[key];
            return result;
        }, {}) : typeof val === "bigint" ? val.toString() : val);
}
function shouldThrowError(_useErrorBoundary, params) {
    if (typeof _useErrorBoundary === "function") {
        return _useErrorBoundary(...params);
    }
    return !!_useErrorBoundary;
}
function trackResult(result, observer) {
    const trackedResult = {};
    Object.keys(result).forEach((key)=>{
        Object.defineProperty(trackedResult, key, {
            configurable: false,
            enumerable: true,
            get: ()=>{
                observer.trackedProps.add(key);
                return result[key];
            }
        });
    });
    return trackedResult;
}
// src/hooks/utils/query/useBaseQuery.ts
function useBaseQuery(options, Observer) {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$4$2e$36$2e$1_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$lib$2f$QueryClientProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])({
        context: options.context
    });
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$4$2e$36$2e$1_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$lib$2f$isRestoring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$4$2e$36$2e$1_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$lib$2f$QueryErrorResetBoundary$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const defaultedOptions = queryClient.defaultQueryOptions({
        ...options,
        queryKeyHashFn
    });
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    if (defaultedOptions.onError) {
        defaultedOptions.onError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$notifyManager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(defaultedOptions.onError);
    }
    if (defaultedOptions.onSuccess) {
        defaultedOptions.onSuccess = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$notifyManager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(defaultedOptions.onSuccess);
    }
    if (defaultedOptions.onSettled) {
        defaultedOptions.onSettled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$notifyManager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(defaultedOptions.onSettled);
    }
    if (defaultedOptions.suspense) {
        if (typeof defaultedOptions.staleTime !== "number") {
            defaultedOptions.staleTime = 1e3;
        }
    }
    if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
        if (!errorResetBoundary.isReset()) {
            defaultedOptions.retryOnMount = false;
        }
    }
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "useBaseQuery.useState": ()=>new Observer(queryClient, defaultedOptions)
    }["useBaseQuery.useState"]);
    const result = observer.getOptimisticResult(defaultedOptions);
    useSyncExternalStore2(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useBaseQuery.useSyncExternalStore2.useCallback": (onStoreChange)=>isRestoring ? ({
                "useBaseQuery.useSyncExternalStore2.useCallback": ()=>void 0
            })["useBaseQuery.useSyncExternalStore2.useCallback"] : observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$notifyManager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange))
    }["useBaseQuery.useSyncExternalStore2.useCallback"], [
        observer,
        isRestoring
    ]), {
        "useBaseQuery.useSyncExternalStore2": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore2"], {
        "useBaseQuery.useSyncExternalStore2": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore2"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useBaseQuery.useEffect": ()=>{
            errorResetBoundary.clearReset();
        }
    }["useBaseQuery.useEffect"], [
        errorResetBoundary
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useBaseQuery.useEffect": ()=>{
            observer.setOptions(defaultedOptions, {
                listeners: false
            });
        }
    }["useBaseQuery.useEffect"], [
        defaultedOptions,
        observer
    ]);
    if (defaultedOptions.suspense && result.isLoading && result.isFetching && !isRestoring) {
        throw observer.fetchOptimistic(defaultedOptions).then(({ data })=>{
            defaultedOptions.onSuccess?.(data);
            defaultedOptions.onSettled?.(data, null);
        }).catch((error)=>{
            errorResetBoundary.clearReset();
            defaultedOptions.onError?.(error);
            defaultedOptions.onSettled?.(void 0, error);
        });
    }
    if (result.isError && !errorResetBoundary.isReset() && !result.isFetching && shouldThrowError(defaultedOptions.useErrorBoundary, [
        result.error,
        observer.getCurrentQuery()
    ])) {
        throw result.error;
    }
    const status = result.status === "loading" && result.fetchStatus === "idle" ? "idle" : result.status;
    const isIdle = status === "idle";
    const isLoading = status === "loading" && result.fetchStatus === "fetching";
    return {
        ...result,
        defaultedOptions,
        isIdle,
        isLoading,
        observer,
        status
    };
}
;
function useInfiniteQuery(arg1, arg2, arg3) {
    const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    const baseQuery = useBaseQuery({
        context: queryClientContext,
        ...parsedOptions
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$infiniteQueryObserver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfiniteQueryObserver"]);
    const result = {
        data: baseQuery.data,
        error: baseQuery.error,
        fetchNextPage: baseQuery.fetchNextPage,
        fetchStatus: baseQuery.fetchStatus,
        hasNextPage: baseQuery.hasNextPage,
        isError: baseQuery.isError,
        isFetched: baseQuery.isFetched,
        isFetchedAfterMount: baseQuery.isFetchedAfterMount,
        isFetching: baseQuery.isFetching,
        isFetchingNextPage: baseQuery.isFetchingNextPage,
        isIdle: baseQuery.isIdle,
        isLoading: baseQuery.isLoading,
        isRefetching: baseQuery.isRefetching,
        isSuccess: baseQuery.isSuccess,
        refetch: baseQuery.refetch,
        status: baseQuery.status,
        internal: {
            dataUpdatedAt: baseQuery.dataUpdatedAt,
            errorUpdatedAt: baseQuery.errorUpdatedAt,
            failureCount: baseQuery.failureCount,
            isFetchedAfterMount: baseQuery.isFetchedAfterMount,
            isLoadingError: baseQuery.isLoadingError,
            isPaused: baseQuery.isPaused,
            isPlaceholderData: baseQuery.isPlaceholderData,
            isPreviousData: baseQuery.isPreviousData,
            isRefetchError: baseQuery.isRefetchError,
            isStale: baseQuery.isStale,
            remove: baseQuery.remove
        }
    };
    return !baseQuery.defaultedOptions.notifyOnChangeProps ? trackResult(result, baseQuery.observer) : result;
}
;
function useMutation(arg1, arg2, arg3) {
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMutationArgs"])(arg1, arg2, arg3);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$4$2e$36$2e$1_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$lib$2f$useMutation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        context: queryClientContext,
        ...options
    });
}
;
function useQuery(arg1, arg2, arg3) {
    const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    const baseQuery = useBaseQuery({
        context: queryClientContext,
        ...parsedOptions
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$queryObserver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryObserver"]);
    const result = {
        data: baseQuery.data,
        error: baseQuery.error,
        fetchStatus: baseQuery.fetchStatus,
        isError: baseQuery.isError,
        isFetched: baseQuery.isFetched,
        isFetchedAfterMount: baseQuery.isFetchedAfterMount,
        isFetching: baseQuery.isFetching,
        isIdle: baseQuery.isIdle,
        isLoading: baseQuery.isLoading,
        isRefetching: baseQuery.isRefetching,
        isSuccess: baseQuery.isSuccess,
        refetch: baseQuery.refetch,
        status: baseQuery.status,
        internal: {
            dataUpdatedAt: baseQuery.dataUpdatedAt,
            errorUpdatedAt: baseQuery.errorUpdatedAt,
            failureCount: baseQuery.failureCount,
            isFetchedAfterMount: baseQuery.isFetchedAfterMount,
            isLoadingError: baseQuery.isLoadingError,
            isPaused: baseQuery.isPaused,
            isPlaceholderData: baseQuery.isPlaceholderData,
            isPreviousData: baseQuery.isPreviousData,
            isRefetchError: baseQuery.isRefetchError,
            isStale: baseQuery.isStale,
            remove: baseQuery.remove
        }
    };
    return !baseQuery.defaultedOptions.notifyOnChangeProps ? trackResult(result, baseQuery.observer) : result;
}
;
var useQueryClient2 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$4$2e$36$2e$1_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$lib$2f$QueryClientProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])({
        context: queryClientContext
    });
;
;
function usePublicClient({ chainId } = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])({
        "usePublicClient.useSyncExternalStoreWithSelector": (cb)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["watchPublicClient"])({
                chainId
            }, cb)
    }["usePublicClient.useSyncExternalStoreWithSelector"], {
        "usePublicClient.useSyncExternalStoreWithSelector": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPublicClient"])({
                chainId
            })
    }["usePublicClient.useSyncExternalStoreWithSelector"], {
        "usePublicClient.useSyncExternalStoreWithSelector": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPublicClient"])({
                chainId
            })
    }["usePublicClient.useSyncExternalStoreWithSelector"], {
        "usePublicClient.useSyncExternalStoreWithSelector": (x)=>x
    }["usePublicClient.useSyncExternalStoreWithSelector"], {
        "usePublicClient.useSyncExternalStoreWithSelector": (a, b)=>a.uid === b.uid
    }["usePublicClient.useSyncExternalStoreWithSelector"]);
}
;
;
function queryKey({ chainId }) {
    return [
        {
            entity: "walletClient",
            chainId,
            persist: false
        }
    ];
}
function queryFn({ queryKey: [{ chainId }] }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getWalletClient"])({
        chainId
    });
}
function useWalletClient({ chainId: chainId_, suspense, onError, onSettled, onSuccess } = {}) {
    const { connector } = useAccount();
    const chainId = useChainId({
        chainId: chainId_
    });
    const walletClientQuery = useQuery(queryKey({
        chainId
    }), queryFn, {
        cacheTime: 0,
        enabled: Boolean(connector),
        staleTime: Infinity,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
    const queryClient = useQueryClient2();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useWalletClient.useEffect": ()=>{
            const unwatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["watchWalletClient"])({
                chainId
            }, {
                "useWalletClient.useEffect.unwatch": (walletClient)=>{
                    if (walletClient) queryClient.invalidateQueries(queryKey({
                        chainId
                    }));
                    else queryClient.removeQueries(queryKey({
                        chainId
                    }));
                }
            }["useWalletClient.useEffect.unwatch"]);
            return unwatch;
        }
    }["useWalletClient.useEffect"], [
        queryClient,
        chainId
    ]);
    return walletClientQuery;
}
;
;
function useWebSocketPublicClient({ chainId } = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])({
        "useWebSocketPublicClient.useSyncExternalStoreWithSelector2": (cb)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["watchWebSocketPublicClient"])({
                chainId
            }, cb)
    }["useWebSocketPublicClient.useSyncExternalStoreWithSelector2"], {
        "useWebSocketPublicClient.useSyncExternalStoreWithSelector2": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getWebSocketPublicClient"])({
                chainId
            })
    }["useWebSocketPublicClient.useSyncExternalStoreWithSelector2"], {
        "useWebSocketPublicClient.useSyncExternalStoreWithSelector2": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getWebSocketPublicClient"])({
                chainId
            })
    }["useWebSocketPublicClient.useSyncExternalStoreWithSelector2"], {
        "useWebSocketPublicClient.useSyncExternalStoreWithSelector2": (x)=>x
    }["useWebSocketPublicClient.useSyncExternalStoreWithSelector2"], {
        "useWebSocketPublicClient.useSyncExternalStoreWithSelector2": (a, b)=>a?.uid === b?.uid
    }["useWebSocketPublicClient.useSyncExternalStoreWithSelector2"]);
}
// src/hooks/utils/useChainId.ts
function useChainId({ chainId } = {}) {
    const publicClient = usePublicClient({
        chainId
    });
    return publicClient.chain.id;
}
;
function useForceUpdate() {
    const [, forceUpdate] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useReducer({
        "useForceUpdate.useReducer": (x)=>x + 1
    }["useForceUpdate.useReducer"], 0);
    return forceUpdate;
}
;
;
;
function queryKey2({ chainId, scopeKey }) {
    return [
        {
            entity: "blockNumber",
            chainId,
            scopeKey
        }
    ];
}
function queryFn2({ queryKey: [{ chainId }] }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetchBlockNumber"])({
        chainId
    });
}
function useBlockNumber({ cacheTime = 0, chainId: chainId_, enabled = true, scopeKey, staleTime, suspense, watch = false, onBlock, onError, onSettled, onSuccess } = {}) {
    const chainId = useChainId({
        chainId: chainId_
    });
    const publicClient = usePublicClient({
        chainId
    });
    const webSocketPublicClient = useWebSocketPublicClient({
        chainId
    });
    const queryClient = useQueryClient2();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useBlockNumber.useEffect": ()=>{
            if (!enabled) return;
            if (!watch && !onBlock) return;
            const publicClient_ = webSocketPublicClient ?? publicClient;
            const unwatch = publicClient_.watchBlockNumber({
                onBlockNumber: {
                    "useBlockNumber.useEffect.unwatch": (blockNumber)=>{
                        if (watch) queryClient.setQueryData(queryKey2({
                            chainId,
                            scopeKey
                        }), blockNumber);
                        if (onBlock) onBlock(blockNumber);
                    }
                }["useBlockNumber.useEffect.unwatch"],
                emitOnBegin: true
            });
            return unwatch;
        }
    }["useBlockNumber.useEffect"], [
        chainId,
        scopeKey,
        onBlock,
        publicClient,
        queryClient,
        watch,
        webSocketPublicClient,
        enabled
    ]);
    return useQuery(queryKey2({
        scopeKey,
        chainId
    }), queryFn2, {
        cacheTime,
        enabled,
        staleTime,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
}
;
;
function queryKey3({ chainId, formatUnits, scopeKey }) {
    return [
        {
            entity: "feeData",
            chainId,
            formatUnits,
            scopeKey
        }
    ];
}
function queryFn3({ queryKey: [{ chainId, formatUnits }] }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetchFeeData"])({
        chainId,
        formatUnits
    });
}
function useFeeData({ cacheTime, chainId: chainId_, enabled = true, formatUnits = "gwei", scopeKey, staleTime, suspense, watch, onError, onSettled, onSuccess } = {}) {
    const chainId = useChainId({
        chainId: chainId_
    });
    const queryKey_ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useFeeData.useMemo[queryKey_]": ()=>queryKey3({
                chainId,
                formatUnits,
                scopeKey
            })
    }["useFeeData.useMemo[queryKey_]"], [
        chainId,
        formatUnits,
        scopeKey
    ]);
    const feeDataQuery = useQuery(queryKey_, queryFn3, {
        cacheTime,
        enabled,
        staleTime,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
    useInvalidateOnBlock({
        chainId,
        enabled: Boolean(enabled && watch),
        queryKey: queryKey_
    });
    return feeDataQuery;
}
// src/hooks/utils/useInvalidateOnBlock.ts
function useInvalidateOnBlock({ chainId, enabled, queryKey: queryKey17 }) {
    const queryClient = useQueryClient2();
    const onBlock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useInvalidateOnBlock.useCallback[onBlock]": ()=>queryClient.invalidateQueries({
                queryKey: queryKey17
            }, {
                cancelRefetch: false
            })
    }["useInvalidateOnBlock.useCallback[onBlock]"], [
        queryClient,
        queryKey17
    ]);
    useBlockNumber({
        chainId,
        enabled,
        onBlock: enabled ? onBlock : void 0,
        scopeKey: enabled ? void 0 : "idle"
    });
}
;
;
;
var isPlainObject2 = (obj)=>typeof obj === "object" && !Array.isArray(obj);
function useSyncExternalStoreWithTracked(subscribe, getSnapshot, getServerSnapshot = getSnapshot, isEqual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deepEqual"]) {
    const trackedKeys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef([]);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])(subscribe, getSnapshot, getServerSnapshot, {
        "useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector3[result]": (x)=>x
    }["useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector3[result]"], {
        "useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector3[result]": (a, b)=>{
            if (isPlainObject2(a) && isPlainObject2(b) && trackedKeys.current.length) {
                for (const key of trackedKeys.current){
                    const equal = isEqual(a[key], b[key]);
                    if (!equal) return false;
                }
                return true;
            }
            return isEqual(a, b);
        }
    }["useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector3[result]"]);
    if (isPlainObject2(result)) {
        const trackedResult = {
            ...result
        };
        Object.defineProperties(trackedResult, Object.entries(trackedResult).reduce((res, [key, value])=>{
            return {
                ...res,
                [key]: {
                    configurable: false,
                    enumerable: true,
                    get: ()=>{
                        if (!trackedKeys.current.includes(key)) {
                            trackedKeys.current.push(key);
                        }
                        return value;
                    }
                }
            };
        }, {}));
        return trackedResult;
    }
    return result;
}
// src/hooks/accounts/useAccount.ts
function useAccount({ onConnect, onDisconnect } = {}) {
    const config = useConfig();
    const watchAccount_ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useAccount.useCallback[watchAccount_]": (callback)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["watchAccount"])(callback)
    }["useAccount.useCallback[watchAccount_]"], [
        config
    ]);
    const account = useSyncExternalStoreWithTracked(watchAccount_, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAccount"]);
    const previousAccountRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    const previousAccount = previousAccountRef.current;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useAccount.useEffect": ()=>{
            if (previousAccount?.status !== "connected" && account.status === "connected") {
                onConnect?.({
                    address: account.address,
                    connector: account.connector,
                    isReconnected: previousAccount?.status === "reconnecting" || previousAccount?.status === void 0
                });
            }
            if (previousAccount?.status === "connected" && account.status === "disconnected") {
                onDisconnect?.();
            }
            previousAccountRef.current = account;
        }
    }["useAccount.useEffect"], [
        onConnect,
        onDisconnect,
        previousAccount,
        account
    ]);
    return account;
}
;
;
function queryKey4({ address, chainId, formatUnits, scopeKey, token }) {
    return [
        {
            entity: "balance",
            address,
            chainId,
            formatUnits,
            scopeKey,
            token
        }
    ];
}
function queryFn4({ queryKey: [{ address, chainId, formatUnits, token }] }) {
    if (!address) throw new Error("address is required");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetchBalance"])({
        address,
        chainId,
        formatUnits,
        token
    });
}
function useBalance({ address, cacheTime, chainId: chainId_, enabled = true, formatUnits, scopeKey, staleTime, suspense, token, watch, onError, onSettled, onSuccess } = {}) {
    const chainId = useChainId({
        chainId: chainId_
    });
    const queryKey_ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useBalance.useMemo[queryKey_]": ()=>queryKey4({
                address,
                chainId,
                formatUnits,
                scopeKey,
                token
            })
    }["useBalance.useMemo[queryKey_]"], [
        address,
        chainId,
        formatUnits,
        scopeKey,
        token
    ]);
    const balanceQuery = useQuery(queryKey_, queryFn4, {
        cacheTime,
        enabled: Boolean(enabled && address),
        staleTime,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
    useInvalidateOnBlock({
        chainId,
        enabled: Boolean(enabled && watch && address),
        queryKey: queryKey_
    });
    return balanceQuery;
}
;
;
var mutationKey = (args)=>[
        {
            entity: "connect",
            ...args
        }
    ];
var mutationFn = (args)=>{
    const { connector, chainId } = args;
    if (!connector) throw new Error("connector is required");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["connect"])({
        connector,
        chainId
    });
};
function useConnect({ chainId, connector, onError, onMutate, onSettled, onSuccess } = {}) {
    const config = useConfig();
    const { data, error, isError, isIdle, isLoading, isSuccess, mutate, mutateAsync, reset, status, variables } = useMutation(mutationKey({
        connector,
        chainId
    }), mutationFn, {
        onError,
        onMutate,
        onSettled,
        onSuccess
    });
    const connect2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useConnect.useCallback[connect2]": (args)=>{
            return mutate({
                chainId: args?.chainId ?? chainId,
                connector: args?.connector ?? connector
            });
        }
    }["useConnect.useCallback[connect2]"], [
        chainId,
        connector,
        mutate
    ]);
    const connectAsync = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useConnect.useCallback[connectAsync]": (args)=>{
            return mutateAsync({
                chainId: args?.chainId ?? chainId,
                connector: args?.connector ?? connector
            });
        }
    }["useConnect.useCallback[connectAsync]"], [
        chainId,
        connector,
        mutateAsync
    ]);
    return {
        connect: connect2,
        connectAsync,
        connectors: config.connectors,
        data,
        error,
        isError,
        isIdle,
        isLoading,
        isSuccess,
        pendingConnector: variables?.connector,
        reset,
        status,
        variables
    };
}
;
var mutationKey2 = [
    {
        entity: "disconnect"
    }
];
var mutationFn2 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["disconnect"])();
function useDisconnect({ onError, onMutate, onSettled, onSuccess } = {}) {
    const { error, isError, isIdle, isLoading, isSuccess, mutate: disconnect2, mutateAsync: disconnectAsync, reset, status } = useMutation(mutationKey2, mutationFn2, {
        ...onError ? {
            onError (error2, _variables, context) {
                onError(error2, context);
            }
        } : {},
        onMutate,
        ...onSettled ? {
            onSettled (_data, error2, _variables, context) {
                onSettled(error2, context);
            }
        } : {},
        ...onSuccess ? {
            onSuccess (_data, _variables, context) {
                onSuccess(context);
            }
        } : {}
    });
    return {
        disconnect: disconnect2,
        disconnectAsync,
        error,
        isError,
        isIdle,
        isLoading,
        isSuccess,
        reset,
        status
    };
}
;
;
function useNetwork() {
    const config = useConfig();
    const watchNetwork_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNetwork.useCallback5[watchNetwork_]": (callback)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["watchNetwork"])(callback)
    }["useNetwork.useCallback5[watchNetwork_]"], [
        config
    ]);
    return useSyncExternalStoreWithTracked(watchNetwork_, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getNetwork"]);
}
;
;
var mutationKey3 = (args)=>[
        {
            entity: "signMessage",
            ...args
        }
    ];
var mutationFn3 = (args)=>{
    const { message } = args;
    if (!message) throw new Error("message is required");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["signMessage"])({
        message
    });
};
function useSignMessage({ message, onError, onMutate, onSettled, onSuccess } = {}) {
    const { data, error, isError, isIdle, isLoading, isSuccess, mutate, mutateAsync, reset, status, variables } = useMutation(mutationKey3({
        message
    }), mutationFn3, {
        onError,
        onMutate,
        onSettled,
        onSuccess
    });
    const signMessage2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useSignMessage.useCallback[signMessage2]": (args)=>mutate(args || {
                message
            })
    }["useSignMessage.useCallback[signMessage2]"], [
        message,
        mutate
    ]);
    const signMessageAsync = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useSignMessage.useCallback[signMessageAsync]": (args)=>mutateAsync(args || {
                message
            })
    }["useSignMessage.useCallback[signMessageAsync]"], [
        message,
        mutateAsync
    ]);
    return {
        data,
        error,
        isError,
        isIdle,
        isLoading,
        isSuccess,
        reset,
        signMessage: signMessage2,
        signMessageAsync,
        status,
        variables
    };
}
;
;
function mutationKey4({ domain, types, message, primaryType }) {
    return [
        {
            entity: "signTypedData",
            domain,
            types,
            message,
            primaryType
        }
    ];
}
function mutationFn4(args) {
    const { domain, types, primaryType, message } = args;
    if (!domain) throw new Error("domain is required");
    if (!types) throw new Error("types is required");
    if (!primaryType) throw new Error("primaryType is required");
    if (!message) throw new Error("message is required");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["signTypedData"])({
        domain,
        message,
        primaryType,
        types
    });
}
function useSignTypedData({ domain, types, message, primaryType, onError, onMutate, onSettled, onSuccess } = {}) {
    const { data, error, isError, isIdle, isLoading, isSuccess, mutate, mutateAsync, reset, status, variables } = useMutation(mutationKey4({
        domain,
        message,
        primaryType,
        types
    }), mutationFn4, {
        onError,
        onMutate,
        onSettled,
        onSuccess
    });
    const signTypedData2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useSignTypedData.useCallback[signTypedData2]": (args)=>mutate({
                domain: args?.domain ?? domain,
                types: args?.types ?? types,
                message: args?.message ?? message,
                primaryType: args?.primaryType ?? primaryType
            })
    }["useSignTypedData.useCallback[signTypedData2]"], [
        domain,
        types,
        primaryType,
        message,
        mutate
    ]);
    const signTypedDataAsync = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useSignTypedData.useCallback[signTypedDataAsync]": (args)=>mutateAsync({
                domain: args?.domain ?? domain,
                types: args?.types ?? types,
                message: args?.message ?? message,
                primaryType: args?.primaryType ?? primaryType
            })
    }["useSignTypedData.useCallback[signTypedDataAsync]"], [
        domain,
        types,
        primaryType,
        message,
        mutateAsync
    ]);
    return {
        data,
        error,
        isError,
        isIdle,
        isLoading,
        isSuccess,
        reset,
        signTypedData: signTypedData2,
        signTypedDataAsync,
        status,
        variables
    };
}
;
;
var mutationKey5 = (args)=>[
        {
            entity: "switchNetwork",
            ...args
        }
    ];
var mutationFn5 = (args)=>{
    const { chainId } = args;
    if (!chainId) throw new Error("chainId is required");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["switchNetwork"])({
        chainId
    });
};
function useSwitchNetwork({ chainId, throwForSwitchChainNotSupported, onError, onMutate, onSettled, onSuccess } = {}) {
    const config = useConfig();
    const forceUpdate = useForceUpdate();
    const { data, error, isError, isIdle, isLoading, isSuccess, mutate, mutateAsync, reset, status, variables } = useMutation(mutationKey5({
        chainId
    }), mutationFn5, {
        onError,
        onMutate,
        onSettled,
        onSuccess
    });
    const switchNetwork_ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useSwitchNetwork.useCallback[switchNetwork_]": (chainId_)=>mutate({
                chainId: chainId_ ?? chainId
            })
    }["useSwitchNetwork.useCallback[switchNetwork_]"], [
        chainId,
        mutate
    ]);
    const switchNetworkAsync_ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useSwitchNetwork.useCallback[switchNetworkAsync_]": (chainId_)=>mutateAsync({
                chainId: chainId_ ?? chainId
            })
    }["useSwitchNetwork.useCallback[switchNetworkAsync_]"], [
        chainId,
        mutateAsync
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useSwitchNetwork.useEffect": ()=>{
            const unwatch = config.subscribe({
                "useSwitchNetwork.useEffect.unwatch": ({ chains, connector })=>({
                        chains,
                        connector
                    })
            }["useSwitchNetwork.useEffect.unwatch"], forceUpdate);
            return unwatch;
        }
    }["useSwitchNetwork.useEffect"], [
        config,
        forceUpdate
    ]);
    let switchNetwork2;
    let switchNetworkAsync;
    const supportsSwitchChain = !!config.connector?.switchChain;
    if (throwForSwitchChainNotSupported || supportsSwitchChain) {
        switchNetwork2 = switchNetwork_;
        switchNetworkAsync = switchNetworkAsync_;
    }
    return {
        chains: config.chains ?? [],
        data,
        error,
        isError,
        isIdle,
        isLoading,
        isSuccess,
        pendingChainId: variables?.chainId,
        reset,
        status,
        switchNetwork: switchNetwork2,
        switchNetworkAsync,
        variables
    };
}
;
function useContractEvent({ address, chainId, abi, listener, eventName } = {}) {
    const publicClient = usePublicClient({
        chainId
    });
    const webSocketPublicClient = useWebSocketPublicClient({
        chainId
    });
    const unwatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useContractEvent.useEffect": ()=>{
            if (!abi || !address || !eventName) return;
            const publicClient_ = webSocketPublicClient || publicClient;
            unwatch.current = publicClient_.watchContractEvent({
                abi,
                address,
                eventName,
                onLogs: listener
            });
            return unwatch.current;
        }
    }["useContractEvent.useEffect"], [
        abi,
        address,
        eventName,
        publicClient.uid,
        webSocketPublicClient?.uid
    ]);
    return unwatch.current;
}
;
;
;
function queryKey5({ allowFailure, blockNumber, blockTag, cacheKey, scopeKey }) {
    return [
        {
            entity: "readContractsInfinite",
            allowFailure,
            blockNumber,
            blockTag,
            cacheKey,
            scopeKey
        }
    ];
}
function queryFn5({ contracts }) {
    return ({ queryKey: [{ allowFailure, blockNumber, blockTag }], pageParam })=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["readContracts"])({
            allowFailure,
            blockNumber,
            blockTag,
            contracts: contracts(pageParam || void 0)
        });
    };
}
function useContractInfiniteReads({ allowFailure, blockNumber, blockTag, cacheKey, cacheTime, contracts, enabled: enabled_ = true, getNextPageParam, isDataEqual, keepPreviousData, onError, onSettled, onSuccess, scopeKey, select, staleTime, structuralSharing = (oldData, newData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deepEqual"])(oldData, newData) ? oldData : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceEqualDeep"])(oldData, newData), suspense }) {
    const queryKey_ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useContractInfiniteReads.useMemo[queryKey_]": ()=>queryKey5({
                allowFailure,
                blockNumber,
                blockTag,
                cacheKey,
                scopeKey
            })
    }["useContractInfiniteReads.useMemo[queryKey_]"], [
        allowFailure,
        blockNumber,
        blockTag,
        cacheKey,
        scopeKey
    ]);
    const enabled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useContractInfiniteReads.useMemo[enabled]": ()=>{
            const enabled2 = Boolean(enabled_ && contracts);
            return enabled2;
        }
    }["useContractInfiniteReads.useMemo[enabled]"], [
        contracts,
        enabled_
    ]);
    return useInfiniteQuery(queryKey_, queryFn5({
        contracts
    }), {
        cacheTime,
        enabled,
        getNextPageParam,
        isDataEqual,
        keepPreviousData,
        select,
        staleTime,
        structuralSharing,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
}
function paginatedIndexesConfig(fn, { perPage, start, direction }) {
    const contracts = (page = 0)=>[
            ...Array(perPage).keys()
        ].map((index)=>{
            return direction === "increment" ? start + index + page * perPage : start - index - page * perPage;
        }).filter((index)=>index >= 0).flatMap(fn);
    return {
        contracts,
        getNextPageParam (lastPage, pages) {
            return lastPage?.length === perPage ? pages.length : void 0;
        }
    };
}
;
;
;
function queryKey6({ account, address, args, blockNumber, blockTag, chainId, functionName, scopeKey }) {
    return [
        {
            entity: "readContract",
            account,
            address,
            args,
            blockNumber,
            blockTag,
            chainId,
            functionName,
            scopeKey
        }
    ];
}
function queryFn6({ abi }) {
    return async ({ queryKey: [{ account, address, args, blockNumber, blockTag, chainId, functionName }] })=>{
        if (!abi) throw new Error("abi is required");
        if (!address) throw new Error("address is required");
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["readContract"])({
            account,
            address,
            args,
            blockNumber,
            blockTag,
            chainId,
            abi,
            functionName
        }) ?? null;
    };
}
function useContractRead({ abi, address, account, args, blockNumber: blockNumberOverride, blockTag, cacheOnBlock = false, cacheTime, chainId: chainId_, enabled: enabled_ = true, functionName, isDataEqual, keepPreviousData, onError, onSettled, onSuccess, scopeKey, select, staleTime, structuralSharing = (oldData, newData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deepEqual"])(oldData, newData) ? oldData : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceEqualDeep"])(oldData, newData), suspense, watch } = {}) {
    const chainId = useChainId({
        chainId: chainId_
    });
    const { data: blockNumber_ } = useBlockNumber({
        chainId,
        enabled: watch || cacheOnBlock,
        scopeKey: watch || cacheOnBlock ? void 0 : "idle",
        watch
    });
    const blockNumber = blockNumberOverride ?? blockNumber_;
    const queryKey_ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useContractRead.useMemo[queryKey_]": ()=>queryKey6({
                account,
                address,
                args,
                blockNumber: cacheOnBlock ? blockNumber : void 0,
                blockTag,
                chainId,
                functionName,
                scopeKey
            })
    }["useContractRead.useMemo[queryKey_]"], [
        account,
        address,
        args,
        blockNumber,
        blockTag,
        cacheOnBlock,
        chainId,
        functionName,
        scopeKey
    ]);
    const enabled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useContractRead.useMemo[enabled]": ()=>{
            let enabled2 = Boolean(enabled_ && abi && address && functionName);
            if (cacheOnBlock) enabled2 = Boolean(enabled2 && blockNumber);
            return enabled2;
        }
    }["useContractRead.useMemo[enabled]"], [
        abi,
        address,
        blockNumber,
        cacheOnBlock,
        enabled_,
        functionName
    ]);
    useInvalidateOnBlock({
        chainId,
        enabled: Boolean(enabled && watch && !cacheOnBlock),
        queryKey: queryKey_
    });
    return useQuery(queryKey_, queryFn6({
        abi
    }), {
        cacheTime,
        enabled,
        isDataEqual,
        keepPreviousData,
        select,
        staleTime,
        structuralSharing,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
}
;
;
;
function queryKey7({ allowFailure, blockNumber, blockTag, chainId, contracts, scopeKey }) {
    return [
        {
            entity: "readContracts",
            allowFailure,
            blockNumber,
            blockTag,
            chainId,
            scopeKey,
            contracts: (contracts ?? []).map(({ address, args, chainId: chainId2, functionName })=>({
                    address,
                    args,
                    chainId: chainId2,
                    functionName
                }))
        }
    ];
}
function queryFn7({ abis }) {
    return ({ queryKey: [{ allowFailure, blockNumber, blockTag, contracts: contracts_ }] })=>{
        const contracts = contracts_.map((contract, i)=>({
                ...contract,
                abi: abis[i]
            }));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["readContracts"])({
            allowFailure,
            contracts,
            blockNumber,
            blockTag
        });
    };
}
function useContractReads({ allowFailure: allowFailure_, blockNumber: blockNumberOverride, blockTag, cacheOnBlock = false, cacheTime, contracts, enabled: enabled_ = true, isDataEqual, keepPreviousData, onError, onSettled, onSuccess, scopeKey, select, staleTime, structuralSharing = (oldData, newData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deepEqual"])(oldData, newData) ? oldData : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$36$2e$1$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceEqualDeep"])(oldData, newData), suspense, watch } = {}) {
    const allowFailure = allowFailure_ ?? true;
    const { data: blockNumber_ } = useBlockNumber({
        enabled: watch || cacheOnBlock,
        watch
    });
    const chainId = useChainId();
    const blockNumber = blockNumberOverride ?? blockNumber_;
    const queryKey_ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useContractReads.useMemo[queryKey_]": ()=>queryKey7({
                allowFailure,
                blockNumber: cacheOnBlock ? blockNumber : void 0,
                blockTag,
                chainId,
                contracts,
                scopeKey
            })
    }["useContractReads.useMemo[queryKey_]"], [
        allowFailure,
        blockNumber,
        blockTag,
        cacheOnBlock,
        chainId,
        scopeKey,
        contracts
    ]);
    const enabled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useContractReads.useMemo[enabled]": ()=>{
            let enabled2 = Boolean(enabled_ && contracts?.every({
                "useContractReads.useMemo[enabled].enabled2": (x)=>x.abi && x.address && x.functionName
            }["useContractReads.useMemo[enabled].enabled2"]));
            if (cacheOnBlock) enabled2 = Boolean(enabled2 && blockNumber);
            return enabled2;
        }
    }["useContractReads.useMemo[enabled]"], [
        blockNumber,
        cacheOnBlock,
        contracts,
        enabled_
    ]);
    useInvalidateOnBlock({
        enabled: Boolean(enabled && watch && !cacheOnBlock),
        queryKey: queryKey_
    });
    const abis = (contracts ?? []).map(({ abi })=>abi);
    return useQuery(queryKey_, queryFn7({
        abis
    }), {
        cacheTime,
        enabled,
        isDataEqual,
        keepPreviousData,
        staleTime,
        select,
        structuralSharing,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
}
;
;
;
function mutationKey6({ address, abi, functionName, ...config }) {
    const { args, accessList, account, dataSuffix, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, request, value } = config;
    return [
        {
            entity: "writeContract",
            address,
            args,
            abi,
            accessList,
            account,
            dataSuffix,
            functionName,
            gas,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            request,
            value
        }
    ];
}
function mutationFn6(config) {
    if (config.mode === "prepared") {
        if (!config.request) throw new Error("request is required");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writeContract"])({
            mode: "prepared",
            request: config.request
        });
    }
    if (!config.address) throw new Error("address is required");
    if (!config.abi) throw new Error("abi is required");
    if (!config.functionName) throw new Error("functionName is required");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writeContract"])({
        address: config.address,
        args: config.args,
        chainId: config.chainId,
        abi: config.abi,
        functionName: config.functionName,
        accessList: config.accessList,
        account: config.account,
        dataSuffix: config.dataSuffix,
        gas: config.gas,
        gasPrice: config.gasPrice,
        maxFeePerGas: config.maxFeePerGas,
        maxPriorityFeePerGas: config.maxPriorityFeePerGas,
        nonce: config.nonce,
        value: config.value
    });
}
function useContractWrite(config) {
    const { address, abi, args, chainId, functionName, mode, request, dataSuffix } = config;
    const { accessList, account, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, value } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSendTransactionParameters"])(config);
    const { data, error, isError, isIdle, isLoading, isSuccess, mutate, mutateAsync, reset, status, variables } = useMutation(mutationKey6({
        address,
        abi,
        functionName,
        chainId,
        mode,
        args,
        accessList,
        account,
        dataSuffix,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        request,
        value
    }), mutationFn6, {
        onError: config.onError,
        onMutate: config.onMutate,
        onSettled: config.onSettled,
        onSuccess: config.onSuccess
    });
    const write = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useContractWrite.useMemo[write]": ()=>{
            if (config.mode === "prepared") {
                if (!request) return void 0;
                return ({
                    "useContractWrite.useMemo[write]": ()=>mutate({
                            mode: "prepared",
                            request: config.request,
                            chainId: config.chainId
                        })
                })["useContractWrite.useMemo[write]"];
            }
            return ({
                "useContractWrite.useMemo[write]": (overrideConfig)=>mutate({
                        address,
                        args,
                        abi,
                        functionName,
                        chainId,
                        accessList,
                        account,
                        dataSuffix,
                        gas,
                        gasPrice,
                        maxFeePerGas,
                        maxPriorityFeePerGas,
                        nonce,
                        value,
                        ...overrideConfig
                    })
            })["useContractWrite.useMemo[write]"];
        }
    }["useContractWrite.useMemo[write]"], [
        accessList,
        account,
        abi,
        address,
        args,
        chainId,
        config.chainId,
        config.mode,
        config.request,
        dataSuffix,
        functionName,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        mutate,
        nonce,
        request,
        value
    ]);
    const writeAsync = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useContractWrite.useMemo[writeAsync]": ()=>{
            if (config.mode === "prepared") {
                if (!request) return void 0;
                return ({
                    "useContractWrite.useMemo[writeAsync]": ()=>mutateAsync({
                            mode: "prepared",
                            request: config.request
                        })
                })["useContractWrite.useMemo[writeAsync]"];
            }
            return ({
                "useContractWrite.useMemo[writeAsync]": (overrideConfig)=>mutateAsync({
                        address,
                        args,
                        abi,
                        chainId,
                        functionName,
                        accessList,
                        account,
                        dataSuffix,
                        gas,
                        gasPrice,
                        maxFeePerGas,
                        maxPriorityFeePerGas,
                        nonce,
                        value,
                        ...overrideConfig
                    })
            })["useContractWrite.useMemo[writeAsync]"];
        }
    }["useContractWrite.useMemo[writeAsync]"], [
        accessList,
        account,
        abi,
        address,
        args,
        chainId,
        config.mode,
        config.request,
        dataSuffix,
        functionName,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        mutateAsync,
        nonce,
        request,
        value
    ]);
    return {
        data,
        error,
        isError,
        isIdle,
        isLoading,
        isSuccess,
        reset,
        status,
        variables,
        write,
        writeAsync
    };
}
;
;
function queryKey8({ accessList, account, activeChainId, args, address, blockNumber, blockTag, chainId, dataSuffix, functionName, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, scopeKey, walletClientAddress, value }) {
    return [
        {
            entity: "prepareContractTransaction",
            accessList,
            account,
            activeChainId,
            address,
            args,
            blockNumber,
            blockTag,
            chainId,
            dataSuffix,
            functionName,
            gas,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            scopeKey,
            walletClientAddress,
            value
        }
    ];
}
function queryFn8({ abi, walletClient }) {
    return ({ queryKey: [{ accessList, account, args, address, blockNumber, blockTag, chainId, dataSuffix, functionName, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, value }] })=>{
        if (!abi) throw new Error("abi is required");
        if (!address) throw new Error("address is required");
        if (!functionName) throw new Error("functionName is required");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareWriteContract"])({
            abi,
            accessList,
            account,
            args,
            address,
            blockNumber,
            blockTag,
            chainId,
            dataSuffix,
            functionName,
            gas,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            walletClient,
            value
        });
    };
}
function usePrepareContractWrite({ address, abi, functionName, chainId, args, cacheTime, dataSuffix, enabled = true, scopeKey, staleTime, suspense, onError, onSettled, onSuccess, ...config } = {}) {
    const { chain: activeChain } = useNetwork();
    const { data: walletClient } = useWalletClient({
        chainId
    });
    const { accessList, account, blockNumber, blockTag, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, value } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCallParameters"])(config);
    const prepareContractWriteQuery = useQuery(queryKey8({
        accessList,
        account,
        activeChainId: activeChain?.id,
        address,
        args,
        blockNumber,
        blockTag,
        chainId,
        dataSuffix,
        functionName,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        scopeKey,
        walletClientAddress: walletClient?.account.address,
        value
    }), queryFn8({
        abi,
        walletClient
    }), {
        cacheTime,
        enabled: Boolean(enabled && abi && address && functionName && walletClient),
        staleTime,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
    return Object.assign(prepareContractWriteQuery, {
        config: {
            chainId,
            mode: "prepared",
            request: void 0,
            ...prepareContractWriteQuery.data
        }
    });
}
;
function queryKey9({ address, chainId, formatUnits, scopeKey }) {
    return [
        {
            entity: "token",
            address,
            chainId,
            formatUnits,
            scopeKey
        }
    ];
}
function queryFn9({ queryKey: [{ address, chainId, formatUnits }] }) {
    if (!address) throw new Error("address is required");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetchToken"])({
        address,
        chainId,
        formatUnits
    });
}
function useToken({ address, chainId: chainId_, formatUnits = "ether", cacheTime, enabled = true, scopeKey, staleTime = 1e3 * 60 * 60 * 24, suspense, onError, onSettled, onSuccess } = {}) {
    const chainId = useChainId({
        chainId: chainId_
    });
    return useQuery(queryKey9({
        address,
        chainId,
        formatUnits,
        scopeKey
    }), queryFn9, {
        cacheTime,
        enabled: Boolean(enabled && address),
        staleTime,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
}
;
function queryKey10({ chainId, name, scopeKey }) {
    return [
        {
            entity: "ensAddress",
            chainId,
            name,
            scopeKey
        }
    ];
}
function queryFn10({ queryKey: [{ chainId, name }] }) {
    if (!name) throw new Error("name is required");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetchEnsAddress"])({
        chainId,
        name
    });
}
function useEnsAddress({ cacheTime, chainId: chainId_, enabled = true, name, scopeKey, staleTime = 1e3 * 60 * 60 * 24, suspense, onError, onSettled, onSuccess } = {}) {
    const chainId = useChainId({
        chainId: chainId_
    });
    return useQuery(queryKey10({
        chainId,
        name,
        scopeKey
    }), queryFn10, {
        cacheTime,
        enabled: Boolean(enabled && chainId && name),
        staleTime,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
}
;
function queryKey11({ name, chainId, scopeKey }) {
    return [
        {
            entity: "ensAvatar",
            name,
            chainId,
            scopeKey
        }
    ];
}
function queryFn11({ queryKey: [{ name, chainId }] }) {
    if (!name) throw new Error("name is required");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetchEnsAvatar"])({
        name,
        chainId
    });
}
function useEnsAvatar({ cacheTime, chainId: chainId_, enabled = true, name, scopeKey, staleTime = 1e3 * 60 * 60 * 24, suspense, onError, onSettled, onSuccess } = {}) {
    const chainId = useChainId({
        chainId: chainId_
    });
    return useQuery(queryKey11({
        name,
        chainId,
        scopeKey
    }), queryFn11, {
        cacheTime,
        enabled: Boolean(enabled && name && chainId),
        staleTime,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
}
;
function queryKey12({ address, chainId, scopeKey }) {
    return [
        {
            entity: "ensName",
            address,
            chainId,
            scopeKey
        }
    ];
}
function queryFn12({ queryKey: [{ address, chainId }] }) {
    if (!address) throw new Error("address is required");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetchEnsName"])({
        address,
        chainId
    });
}
function useEnsName({ address, cacheTime, chainId: chainId_, enabled = true, scopeKey, staleTime = 1e3 * 60 * 60 * 24, suspense, onError, onSettled, onSuccess } = {}) {
    const chainId = useChainId({
        chainId: chainId_
    });
    return useQuery(queryKey12({
        address,
        chainId,
        scopeKey
    }), queryFn12, {
        cacheTime,
        enabled: Boolean(enabled && address && chainId),
        staleTime,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
}
;
function queryKey13({ chainId, name, scopeKey }) {
    return [
        {
            entity: "ensResolver",
            chainId,
            name,
            scopeKey,
            persist: false
        }
    ];
}
function queryFn13({ queryKey: [{ chainId, name }] }) {
    if (!name) throw new Error("name is required");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetchEnsResolver"])({
        chainId,
        name
    });
}
function useEnsResolver({ chainId: chainId_, name, enabled = true, scopeKey, suspense, onError, onSettled, onSuccess } = {}) {
    const chainId = useChainId({
        chainId: chainId_
    });
    return useQuery(queryKey13({
        chainId,
        name,
        scopeKey
    }), queryFn13, {
        cacheTime: 0,
        enabled: Boolean(enabled && chainId && name),
        suspense,
        onError,
        onSettled,
        onSuccess
    });
}
;
function queryKey14({ accessList, account, activeChainId, chainId, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, scopeKey, walletClientAddress }) {
    return [
        {
            entity: "prepareSendTransaction",
            activeChainId,
            accessList,
            account,
            chainId,
            data,
            gas,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value,
            scopeKey,
            walletClientAddress
        }
    ];
}
function queryFn14({ walletClient }) {
    return ({ queryKey: [{ accessList, account, chainId, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }] })=>{
        if (!to) throw new Error("to is required");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareSendTransaction"])({
            accessList,
            account,
            chainId,
            data,
            gas,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value,
            walletClient
        });
    };
}
function usePrepareSendTransaction({ accessList, account, chainId, cacheTime, data, enabled = true, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, scopeKey, staleTime, suspense, to, value, onError, onSettled, onSuccess } = {}) {
    const { chain: activeChain } = useNetwork();
    const { data: walletClient } = useWalletClient({
        chainId
    });
    const prepareSendTransactionQuery = useQuery(queryKey14({
        accessList,
        activeChainId: activeChain?.id,
        account,
        chainId,
        data,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        scopeKey,
        to,
        value,
        walletClientAddress: walletClient?.account.address
    }), queryFn14({
        walletClient
    }), {
        cacheTime,
        enabled: Boolean(enabled && walletClient && to),
        staleTime,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
    return Object.assign(prepareSendTransactionQuery, {
        config: {
            mode: "prepared",
            ...prepareSendTransactionQuery.isSuccess ? prepareSendTransactionQuery.data : void 0
        }
    });
}
;
;
var mutationKey7 = (args)=>[
        {
            entity: "sendTransaction",
            ...args
        }
    ];
var mutationFn7 = ({ accessList, account, chainId, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, mode, nonce, to, value })=>{
    if (!to) throw new Error("to is required.");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendTransaction"])({
        accessList,
        account,
        chainId,
        data,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        mode,
        nonce,
        to,
        value
    });
};
function useSendTransaction({ accessList, account, chainId, data: data_, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, mode, nonce, to, value, onError, onMutate, onSettled, onSuccess } = {}) {
    const { data, error, isError, isIdle, isLoading, isSuccess, mutate, mutateAsync, reset, status, variables } = useMutation(mutationKey7({
        accessList,
        account,
        chainId,
        data: data_,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        mode,
        nonce,
        to,
        value
    }), mutationFn7, {
        onError,
        onMutate,
        onSettled,
        onSuccess
    });
    const sendTransaction2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useSendTransaction.useCallback[sendTransaction2]": (args)=>mutate({
                chainId,
                mode,
                ...args || {
                    accessList,
                    account,
                    chainId,
                    data: data_,
                    gas,
                    gasPrice,
                    maxFeePerGas,
                    maxPriorityFeePerGas,
                    mode,
                    nonce,
                    value,
                    to
                }
            })
    }["useSendTransaction.useCallback[sendTransaction2]"], [
        accessList,
        account,
        chainId,
        data_,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        mode,
        mutate,
        nonce,
        to,
        value
    ]);
    const sendTransactionAsync = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useSendTransaction.useCallback[sendTransactionAsync]": (args)=>mutateAsync({
                chainId,
                mode,
                ...args || {
                    accessList,
                    account,
                    chainId,
                    data: data_,
                    gas,
                    gasPrice,
                    maxFeePerGas,
                    maxPriorityFeePerGas,
                    mode,
                    nonce,
                    value,
                    to
                }
            })
    }["useSendTransaction.useCallback[sendTransactionAsync]"], [
        accessList,
        account,
        chainId,
        data_,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        mode,
        mutateAsync,
        nonce,
        to,
        value
    ]);
    return {
        data,
        error,
        isError,
        isIdle,
        isLoading,
        isSuccess,
        reset,
        sendTransaction: mode === "prepared" && !to ? void 0 : sendTransaction2,
        sendTransactionAsync: mode === "prepared" && !to ? void 0 : sendTransactionAsync,
        status,
        variables
    };
}
;
function queryKey15({ chainId, hash, scopeKey }) {
    return [
        {
            entity: "transaction",
            chainId,
            hash,
            scopeKey
        }
    ];
}
function queryFn15({ queryKey: [{ chainId, hash }] }) {
    if (!hash) throw new Error("hash is required");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetchTransaction"])({
        chainId,
        hash
    });
}
function useTransaction({ cacheTime = 0, chainId: chainId_, enabled = true, hash, scopeKey, staleTime, suspense, onError, onSettled, onSuccess } = {}) {
    const chainId = useChainId({
        chainId: chainId_
    });
    return useQuery(queryKey15({
        chainId,
        hash,
        scopeKey
    }), queryFn15, {
        cacheTime,
        enabled: Boolean(enabled && hash),
        staleTime,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
}
;
function queryKey16({ confirmations, chainId, hash, scopeKey, timeout }) {
    return [
        {
            entity: "waitForTransaction",
            confirmations,
            chainId,
            hash,
            scopeKey,
            timeout
        }
    ];
}
function queryFn16({ onReplaced }) {
    return ({ queryKey: [{ chainId, confirmations, hash, timeout }] })=>{
        if (!hash) throw new Error("hash is required");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["waitForTransaction"])({
            chainId,
            confirmations,
            hash,
            onReplaced,
            timeout
        });
    };
}
function useWaitForTransaction({ chainId: chainId_, confirmations, hash, timeout, cacheTime, enabled = true, scopeKey, staleTime, suspense, onError, onReplaced, onSettled, onSuccess } = {}) {
    const chainId = useChainId({
        chainId: chainId_
    });
    return useQuery(queryKey16({
        chainId,
        confirmations,
        hash,
        scopeKey,
        timeout
    }), queryFn16({
        onReplaced
    }), {
        cacheTime,
        enabled: Boolean(enabled && hash),
        staleTime,
        suspense,
        onError,
        onSettled,
        onSuccess
    });
}
;
function useWatchPendingTransactions({ chainId: chainId_, enabled = true, listener }) {
    const chainId = useChainId({
        chainId: chainId_
    });
    const publicClient = usePublicClient({
        chainId
    });
    const webSocketPublicClient = useWebSocketPublicClient({
        chainId
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useWatchPendingTransactions.useEffect": ()=>{
            if (!enabled) return;
            const publicClient_ = webSocketPublicClient ?? publicClient;
            return publicClient_.watchPendingTransactions({
                onTransactions: listener
            });
        }
    }["useWatchPendingTransactions.useEffect"], [
        enabled,
        listener,
        publicClient,
        webSocketPublicClient
    ]);
}
;
;
;
}}),
"[project]/node_modules/.pnpm/wagmi@1.4.12_@types+react@19.0.10_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescrip_d50d069e9baedf4da7c130a4aef7aa62/node_modules/wagmi/dist/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ChainMismatchError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ChainMismatchError"]),
    "ChainNotConfiguredError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ChainNotConfiguredError"]),
    "ConfigChainsNotFound": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConfigChainsNotFound"]),
    "Connector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connector"]),
    "ConnectorAlreadyConnectedError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConnectorAlreadyConnectedError"]),
    "ConnectorNotFoundError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]),
    "Context": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Context"]),
    "SwitchChainNotSupportedError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SwitchChainNotSupportedError"]),
    "WagmiConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WagmiConfig"]),
    "configureChains": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureChains"]),
    "createConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createConfig"]),
    "createStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createStorage"]),
    "deepEqual": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deepEqual"]),
    "deserialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deserialize"]),
    "erc20ABI": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["erc20ABI"]),
    "erc4626ABI": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["erc4626ABI"]),
    "erc721ABI": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["erc721ABI"]),
    "mainnet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"]),
    "paginatedIndexesConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["paginatedIndexesConfig"]),
    "readContracts": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["readContracts"]),
    "sepolia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"]),
    "serialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["serialize"]),
    "useAccount": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAccount"]),
    "useBalance": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useBalance"]),
    "useBlockNumber": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useBlockNumber"]),
    "useChainId": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useChainId"]),
    "useConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useConfig"]),
    "useConnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useConnect"]),
    "useContractEvent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useContractEvent"]),
    "useContractInfiniteReads": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useContractInfiniteReads"]),
    "useContractRead": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useContractRead"]),
    "useContractReads": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useContractReads"]),
    "useContractWrite": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useContractWrite"]),
    "useDisconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDisconnect"]),
    "useEnsAddress": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEnsAddress"]),
    "useEnsAvatar": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEnsAvatar"]),
    "useEnsName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEnsName"]),
    "useEnsResolver": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEnsResolver"]),
    "useFeeData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFeeData"]),
    "useInfiniteQuery": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useInfiniteQuery"]),
    "useMutation": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMutation"]),
    "useNetwork": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNetwork"]),
    "usePrepareContractWrite": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrepareContractWrite"]),
    "usePrepareSendTransaction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrepareSendTransaction"]),
    "usePublicClient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePublicClient"]),
    "useQuery": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"]),
    "useQueryClient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQueryClient"]),
    "useSendTransaction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSendTransaction"]),
    "useSignMessage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSignMessage"]),
    "useSignTypedData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSignTypedData"]),
    "useSwitchNetwork": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSwitchNetwork"]),
    "useToken": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useToken"]),
    "useTransaction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTransaction"]),
    "useWaitForTransaction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWaitForTransaction"]),
    "useWalletClient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWalletClient"]),
    "useWatchPendingTransactions": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWatchPendingTransactions"]),
    "useWebSocketPublicClient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWebSocketPublicClient"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$chunk$2d$TSH6VVF4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@1.4.12_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/core/dist/chunk-TSH6VVF4.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-W65LBPLT.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-UGBGYVBH.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/chains/definitions/sepolia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$1$2e$4$2e$12_$40$types$2b$react$40$19$2e$0$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescrip_d50d069e9baedf4da7c130a4aef7aa62$2f$node_modules$2f$wagmi$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@1.4.12_@types+react@19.0.10_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescrip_d50d069e9baedf4da7c130a4aef7aa62/node_modules/wagmi/dist/index.js [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=729d3_wagmi_dist_index_539e37.js.map