(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/0d696_@wagmi_core_dist_esm_87c091._.js", {

"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/reconnect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "reconnect": (()=>reconnect)
});
let isReconnecting = false;
async function reconnect(config, parameters = {}) {
    // If already reconnecting, do nothing
    if (isReconnecting) return [];
    isReconnecting = true;
    config.setState((x)=>({
            ...x,
            status: x.current ? 'reconnecting' : 'connecting'
        }));
    const connectors = [];
    if (parameters.connectors?.length) {
        for (const connector_ of parameters.connectors){
            let connector;
            // "Register" connector if not already created
            if (typeof connector_ === 'function') connector = config._internal.connectors.setup(connector_);
            else connector = connector_;
            connectors.push(connector);
        }
    } else connectors.push(...config.connectors);
    // Try recently-used connectors first
    let recentConnectorId;
    try {
        recentConnectorId = await config.storage?.getItem('recentConnectorId');
    } catch  {}
    const scores = {};
    for (const [, connection] of config.state.connections){
        scores[connection.connector.id] = 1;
    }
    if (recentConnectorId) scores[recentConnectorId] = 0;
    const sorted = Object.keys(scores).length > 0 ? [
        ...connectors
    ].sort((a, b)=>(scores[a.id] ?? 10) - (scores[b.id] ?? 10)) : connectors;
    // Iterate through each connector and try to connect
    let connected = false;
    const connections = [];
    const providers = [];
    for (const connector of sorted){
        const provider = await connector.getProvider().catch(()=>undefined);
        if (!provider) continue;
        // If we already have an instance of this connector's provider,
        // then we have already checked it (ie. injected connectors can
        // share the same `window.ethereum` instance, so we don't want to
        // connect to it again).
        if (providers.some((x)=>x === provider)) continue;
        const isAuthorized = await connector.isAuthorized();
        if (!isAuthorized) continue;
        const data = await connector.connect({
            isReconnecting: true
        }).catch(()=>null);
        if (!data) continue;
        connector.emitter.off('connect', config._internal.events.connect);
        connector.emitter.on('change', config._internal.events.change);
        connector.emitter.on('disconnect', config._internal.events.disconnect);
        config.setState((x)=>{
            const connections = new Map(connected ? x.connections : new Map()).set(connector.uid, {
                accounts: data.accounts,
                chainId: data.chainId,
                connector
            });
            return {
                ...x,
                current: connected ? x.current : connector.uid,
                connections
            };
        });
        connections.push({
            accounts: data.accounts,
            chainId: data.chainId,
            connector
        });
        providers.push(provider);
        connected = true;
    }
    // Prevent overwriting connected status from race condition
    if (config.state.status === 'reconnecting' || config.state.status === 'connecting') {
        // If connecting didn't succeed, set to disconnected
        if (!connected) config.setState((x)=>({
                ...x,
                connections: new Map(),
                current: null,
                status: 'disconnected'
            }));
        else config.setState((x)=>({
                ...x,
                status: 'connected'
            }));
    }
    isReconnecting = false;
    return connections;
} //# sourceMappingURL=reconnect.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/hydrate.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "hydrate": (()=>hydrate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$reconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/reconnect.js [app-client] (ecmascript)");
;
function hydrate(config, parameters) {
    const { initialState, reconnectOnMount } = parameters;
    if (initialState && !config._internal.store.persist.hasHydrated()) config.setState({
        ...initialState,
        chainId: config.chains.some((x)=>x.id === initialState.chainId) ? initialState.chainId : config.chains[0].id,
        connections: reconnectOnMount ? initialState.connections : new Map(),
        status: reconnectOnMount ? 'reconnecting' : 'disconnected'
    });
    return {
        async onMount () {
            if (config._internal.ssr) {
                await config._internal.store.persist.rehydrate();
                if (config._internal.mipd) {
                    config._internal.connectors.setState((connectors)=>{
                        const rdnsSet = new Set();
                        for (const connector of connectors ?? []){
                            if (connector.rdns) {
                                const rdnsValues = Array.isArray(connector.rdns) ? connector.rdns : [
                                    connector.rdns
                                ];
                                for (const rdns of rdnsValues){
                                    rdnsSet.add(rdns);
                                }
                            }
                        }
                        const mipdConnectors = [];
                        const providers = config._internal.mipd?.getProviders() ?? [];
                        for (const provider of providers){
                            if (rdnsSet.has(provider.info.rdns)) continue;
                            const connectorFn = config._internal.connectors.providerDetailToConnector(provider);
                            const connector = config._internal.connectors.setup(connectorFn);
                            mipdConnectors.push(connector);
                        }
                        return [
                            ...connectors,
                            ...mipdConnectors
                        ];
                    });
                }
            }
            if (reconnectOnMount) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$reconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reconnect"])(config);
            else if (config.storage) // Reset connections that may have been hydrated from storage.
            config.setState((x)=>({
                    ...x,
                    connections: new Map()
                }));
        }
    };
} //# sourceMappingURL=hydrate.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/version.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "version": (()=>version)
});
const version = '2.16.4'; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getVersion.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getVersion": (()=>getVersion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/version.js [app-client] (ecmascript)");
;
const getVersion = ()=>`@wagmi/core@${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]}`; //# sourceMappingURL=getVersion.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/base.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BaseError": (()=>BaseError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getVersion.js [app-client] (ecmascript)");
var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BaseError_instances, _BaseError_walk;
;
class BaseError extends Error {
    get docsBaseUrl() {
        return 'https://wagmi.sh/core';
    }
    get version() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersion"])();
    }
    constructor(shortMessage, options = {}){
        super();
        _BaseError_instances.add(this);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiCoreError'
        });
        const details = options.cause instanceof BaseError ? options.cause.details : options.cause?.message ? options.cause.message : options.details;
        const docsPath = options.cause instanceof BaseError ? options.cause.docsPath || options.docsPath : options.docsPath;
        this.message = [
            shortMessage || 'An error occurred.',
            '',
            ...options.metaMessages ? [
                ...options.metaMessages,
                ''
            ] : [],
            ...docsPath ? [
                `Docs: ${this.docsBaseUrl}${docsPath}.html${options.docsSlug ? `#${options.docsSlug}` : ''}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            `Version: ${this.version}`
        ].join('\n');
        if (options.cause) this.cause = options.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = options.metaMessages;
        this.shortMessage = shortMessage;
    }
    walk(fn) {
        return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk).call(this, this, fn);
    }
}
_BaseError_instances = new WeakSet(), _BaseError_walk = function _BaseError_walk(err, fn) {
    if (fn?.(err)) return err;
    if (err.cause) return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk).call(this, err.cause, fn);
    return err;
}; //# sourceMappingURL=base.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/** Forked from https://github.com/epoberezkin/fast-deep-equal */ __turbopack_esm__({
    "deepEqual": (()=>deepEqual)
});
function deepEqual(a, b) {
    if (a === b) return true;
    if (a && b && typeof a === 'object' && typeof b === 'object') {
        if (a.constructor !== b.constructor) return false;
        let length;
        let i;
        if (Array.isArray(a) && Array.isArray(b)) {
            length = a.length;
            if (length !== b.length) return false;
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
    // true if both NaN, false otherwise
    // biome-ignore lint/suspicious/noSelfCompare: <explanation>
    return a !== a && b !== b;
} //# sourceMappingURL=deepEqual.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getAccount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/** https://wagmi.sh/core/api/actions/getAccount */ __turbopack_esm__({
    "getAccount": (()=>getAccount)
});
function getAccount(config) {
    const uid = config.state.current;
    const connection = config.state.connections.get(uid);
    const addresses = connection?.accounts;
    const address = addresses?.[0];
    const chain = config.chains.find((chain)=>chain.id === connection?.chainId);
    const status = config.state.status;
    switch(status){
        case 'connected':
            return {
                address: address,
                addresses: addresses,
                chain,
                chainId: connection?.chainId,
                connector: connection?.connector,
                isConnected: true,
                isConnecting: false,
                isDisconnected: false,
                isReconnecting: false,
                status
            };
        case 'reconnecting':
            return {
                address,
                addresses,
                chain,
                chainId: connection?.chainId,
                connector: connection?.connector,
                isConnected: !!address,
                isConnecting: false,
                isDisconnected: false,
                isReconnecting: true,
                status
            };
        case 'connecting':
            return {
                address,
                addresses,
                chain,
                chainId: connection?.chainId,
                connector: connection?.connector,
                isConnected: false,
                isConnecting: true,
                isDisconnected: false,
                isReconnecting: false,
                status
            };
        case 'disconnected':
            return {
                address: undefined,
                addresses: undefined,
                chain: undefined,
                chainId: undefined,
                connector: undefined,
                isConnected: false,
                isConnecting: false,
                isDisconnected: true,
                isReconnecting: false,
                status
            };
    }
} //# sourceMappingURL=getAccount.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchAccount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "watchAccount": (()=>watchAccount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getAccount.js [app-client] (ecmascript)");
;
;
function watchAccount(config, parameters) {
    const { onChange } = parameters;
    return config.subscribe(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccount"])(config), onChange, {
        equalityFn (a, b) {
            const { connector: aConnector, ...aRest } = a;
            const { connector: bConnector, ...bRest } = b;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(aRest, bRest) && // check connector separately
            aConnector?.id === bConnector?.id && aConnector?.uid === bConnector?.uid;
        }
    });
} //# sourceMappingURL=watchAccount.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createConnector": (()=>createConnector)
});
function createConnector(createConnectorFn) {
    return createConnectorFn;
} //# sourceMappingURL=createConnector.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ProviderNotFoundError": (()=>ProviderNotFoundError),
    "SwitchChainNotSupportedError": (()=>SwitchChainNotSupportedError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/base.js [app-client] (ecmascript)");
;
class ProviderNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Provider not found.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ProviderNotFoundError'
        });
    }
}
class SwitchChainNotSupportedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ connector }){
        super(`"${connector.name}" does not support programmatic chain switching.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SwitchChainNotSupportedError'
        });
    }
} //# sourceMappingURL=connector.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ChainNotConfiguredError": (()=>ChainNotConfiguredError),
    "ConnectorAccountNotFoundError": (()=>ConnectorAccountNotFoundError),
    "ConnectorAlreadyConnectedError": (()=>ConnectorAlreadyConnectedError),
    "ConnectorChainMismatchError": (()=>ConnectorChainMismatchError),
    "ConnectorNotConnectedError": (()=>ConnectorNotConnectedError),
    "ConnectorNotFoundError": (()=>ConnectorNotFoundError),
    "ConnectorUnavailableReconnectingError": (()=>ConnectorUnavailableReconnectingError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/base.js [app-client] (ecmascript)");
;
class ChainNotConfiguredError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Chain not configured.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ChainNotConfiguredError'
        });
    }
}
class ConnectorAlreadyConnectedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Connector already connected.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorAlreadyConnectedError'
        });
    }
}
class ConnectorNotConnectedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Connector not connected.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorNotConnectedError'
        });
    }
}
class ConnectorNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Connector not found.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorNotFoundError'
        });
    }
}
class ConnectorAccountNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ address, connector }){
        super(`Account "${address}" not found for connector "${connector.name}".`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorAccountNotFoundError'
        });
    }
}
class ConnectorChainMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ connectionChainId, connectorChainId }){
        super(`The current chain of the connector (id: ${connectorChainId}) does not match the connection's chain (id: ${connectionChainId}).`, {
            metaMessages: [
                `Current Chain ID:  ${connectorChainId}`,
                `Expected Chain ID: ${connectionChainId}`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorChainMismatchError'
        });
    }
}
class ConnectorUnavailableReconnectingError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ connector }){
        super(`Connector "${connector.name}" unavailable while reconnecting.`, {
            details: [
                'During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`.',
                'All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored.',
                'This error commonly occurs for connectors that asynchronously inject after reconnection has already started.'
            ].join(' ')
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ConnectorUnavailableReconnectingError'
        });
    }
} //# sourceMappingURL=config.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/connectors/injected.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "injected": (()=>injected)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withRetry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
;
;
;
injected.type = 'injected';
function injected(parameters = {}) {
    const { shimDisconnect = true, unstable_shimAsyncInject } = parameters;
    function getTarget() {
        const target = parameters.target;
        if (typeof target === 'function') {
            const result = target();
            if (result) return result;
        }
        if (typeof target === 'object') return target;
        if (typeof target === 'string') return {
            ...targetMap[target] ?? {
                id: target,
                name: `${target[0].toUpperCase()}${target.slice(1)}`,
                provider: `is${target[0].toUpperCase()}${target.slice(1)}`
            }
        };
        return {
            id: 'injected',
            name: 'Injected',
            provider (window1) {
                return window1?.ethereum;
            }
        };
    }
    let accountsChanged;
    let chainChanged;
    let connect;
    let disconnect;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConnector"])((config)=>({
            get icon () {
                return getTarget().icon;
            },
            get id () {
                return getTarget().id;
            },
            get name () {
                return getTarget().name;
            },
            /** @deprecated */ get supportsSimulation () {
                return true;
            },
            type: injected.type,
            async setup () {
                const provider = await this.getProvider();
                // Only start listening for events if `target` is set, otherwise `injected()` will also receive events
                if (provider?.on && parameters.target) {
                    if (!connect) {
                        connect = this.onConnect.bind(this);
                        provider.on('connect', connect);
                    }
                    // We shouldn't need to listen for `'accountsChanged'` here since the `'connect'` event should suffice (and wallet shouldn't be connected yet).
                    // Some wallets, like MetaMask, do not implement the `'connect'` event and overload `'accountsChanged'` instead.
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                }
            },
            async connect ({ chainId, isReconnecting } = {}) {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                let accounts = [];
                if (isReconnecting) accounts = await this.getAccounts().catch(()=>[]);
                else if (shimDisconnect) {
                    // Attempt to show another prompt for selecting account if `shimDisconnect` flag is enabled
                    try {
                        const permissions = await provider.request({
                            method: 'wallet_requestPermissions',
                            params: [
                                {
                                    eth_accounts: {}
                                }
                            ]
                        });
                        accounts = permissions[0]?.caveats?.[0]?.value?.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(x));
                        // `'wallet_requestPermissions'` can return a different order of accounts than `'eth_accounts'`
                        // switch to `'eth_accounts'` ordering if more than one account is connected
                        // https://github.com/wevm/wagmi/issues/4140
                        if (accounts.length > 0) {
                            const sortedAccounts = await this.getAccounts();
                            accounts = sortedAccounts;
                        }
                    } catch (err) {
                        const error = err;
                        // Not all injected providers support `wallet_requestPermissions` (e.g. MetaMask iOS).
                        // Only bubble up error if user rejects request
                        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                        // Or prompt is already open
                        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"].code) throw error;
                    }
                }
                try {
                    if (!accounts?.length && !isReconnecting) {
                        const requestedAccounts = await provider.request({
                            method: 'eth_requestAccounts'
                        });
                        accounts = requestedAccounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(x));
                    }
                    // Manage EIP-1193 event listeners
                    // https://eips.ethereum.org/EIPS/eip-1193#events
                    if (connect) {
                        provider.removeListener('connect', connect);
                        connect = undefined;
                    }
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                    if (!chainChanged) {
                        chainChanged = this.onChainChanged.bind(this);
                        provider.on('chainChanged', chainChanged);
                    }
                    if (!disconnect) {
                        disconnect = this.onDisconnect.bind(this);
                        provider.on('disconnect', disconnect);
                    }
                    // Switch to chain if provided
                    let currentChainId = await this.getChainId();
                    if (chainId && currentChainId !== chainId) {
                        const chain = await this.switchChain({
                            chainId
                        }).catch((error)=>{
                            if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw error;
                            return {
                                id: currentChainId
                            };
                        });
                        currentChainId = chain?.id ?? currentChainId;
                    }
                    // Remove disconnected shim if it exists
                    if (shimDisconnect) await config.storage?.removeItem(`${this.id}.disconnected`);
                    // Add connected shim if no target exists
                    if (!parameters.target) await config.storage?.setItem('injected.connected', true);
                    return {
                        accounts,
                        chainId: currentChainId
                    };
                } catch (err) {
                    const error = err;
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"](error);
                    throw error;
                }
            },
            async disconnect () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                // Manage EIP-1193 event listeners
                if (chainChanged) {
                    provider.removeListener('chainChanged', chainChanged);
                    chainChanged = undefined;
                }
                if (disconnect) {
                    provider.removeListener('disconnect', disconnect);
                    disconnect = undefined;
                }
                if (!connect) {
                    connect = this.onConnect.bind(this);
                    provider.on('connect', connect);
                }
                // Experimental support for MetaMask disconnect
                // https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-2.md
                try {
                    // Adding timeout as not all wallets support this method and can hang
                    // https://github.com/wevm/wagmi/issues/4064
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withTimeout"])(()=>// TODO: Remove explicit type for viem@3
                        provider.request({
                            // `'wallet_revokePermissions'` added in `viem@2.10.3`
                            method: 'wallet_revokePermissions',
                            params: [
                                {
                                    eth_accounts: {}
                                }
                            ]
                        }), {
                        timeout: 100
                    });
                } catch  {}
                // Add shim signalling connector is disconnected
                if (shimDisconnect) {
                    await config.storage?.setItem(`${this.id}.disconnected`, true);
                }
                if (!parameters.target) await config.storage?.removeItem('injected.connected');
            },
            async getAccounts () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                const accounts = await provider.request({
                    method: 'eth_accounts'
                });
                return accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(x));
            },
            async getChainId () {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                const hexChainId = await provider.request({
                    method: 'eth_chainId'
                });
                return Number(hexChainId);
            },
            async getProvider () {
                if (typeof window === 'undefined') return undefined;
                let provider;
                const target = getTarget();
                if (typeof target.provider === 'function') provider = target.provider(window);
                else if (typeof target.provider === 'string') provider = findProvider(window, target.provider);
                else provider = target.provider;
                // Some wallets do not conform to EIP-1193 (e.g. Trust Wallet)
                // https://github.com/wevm/wagmi/issues/3526#issuecomment-1912683002
                if (provider && !provider.removeListener) {
                    // Try using `off` handler if it exists, otherwise noop
                    if ('off' in provider && typeof provider.off === 'function') provider.removeListener = provider.off;
                    else provider.removeListener = ()=>{};
                }
                return provider;
            },
            async isAuthorized () {
                try {
                    const isDisconnected = shimDisconnect && await config.storage?.getItem(`${this.id}.disconnected`);
                    if (isDisconnected) return false;
                    // Don't allow injected connector to connect if no target is set and it hasn't already connected
                    // (e.g. flag in storage is not set). This prevents a targetless injected connector from connecting
                    // automatically whenever there is a targeted connector configured.
                    if (!parameters.target) {
                        const connected = await config.storage?.getItem('injected.connected');
                        if (!connected) return false;
                    }
                    const provider = await this.getProvider();
                    if (!provider) {
                        if (unstable_shimAsyncInject !== undefined && unstable_shimAsyncInject !== false) {
                            // If no provider is found, check for async injection
                            // https://github.com/wevm/references/issues/167
                            // https://github.com/MetaMask/detect-provider
                            const handleEthereum = async ()=>{
                                if (typeof window !== 'undefined') window.removeEventListener('ethereum#initialized', handleEthereum);
                                const provider = await this.getProvider();
                                return !!provider;
                            };
                            const timeout = typeof unstable_shimAsyncInject === 'number' ? unstable_shimAsyncInject : 1_000;
                            const res = await Promise.race([
                                ...typeof window !== 'undefined' ? [
                                    new Promise((resolve)=>window.addEventListener('ethereum#initialized', ()=>resolve(handleEthereum()), {
                                            once: true
                                        }))
                                ] : [],
                                new Promise((resolve)=>setTimeout(()=>resolve(handleEthereum()), timeout))
                            ]);
                            if (res) return true;
                        }
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                    }
                    // Use retry strategy as some injected wallets (e.g. MetaMask) fail to
                    // immediately resolve JSON-RPC requests on page load.
                    const accounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withRetry"])(()=>this.getAccounts());
                    return !!accounts.length;
                } catch  {
                    return false;
                }
            },
            async switchChain ({ addEthereumChainParameter, chainId }) {
                const provider = await this.getProvider();
                if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]();
                const chain = config.chains.find((x)=>x.id === chainId);
                if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchChainError"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]());
                const promise = new Promise((resolve)=>{
                    const listener = (data)=>{
                        if ('chainId' in data && data.chainId === chainId) {
                            config.emitter.off('change', listener);
                            resolve();
                        }
                    };
                    config.emitter.on('change', listener);
                });
                try {
                    await Promise.all([
                        provider.request({
                            method: 'wallet_switchEthereumChain',
                            params: [
                                {
                                    chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chainId)
                                }
                            ]
                        })// During `'wallet_switchEthereumChain'`, MetaMask makes a `'net_version'` RPC call to the target chain.
                        // If this request fails, MetaMask does not emit the `'chainChanged'` event, but will still switch the chain.
                        // To counter this behavior, we request and emit the current chain ID to confirm the chain switch either via
                        // this callback or an externally emitted `'chainChanged'` event.
                        // https://github.com/MetaMask/metamask-extension/issues/24247
                        .then(async ()=>{
                            const currentChainId = await this.getChainId();
                            if (currentChainId === chainId) config.emitter.emit('change', {
                                chainId
                            });
                        }),
                        promise
                    ]);
                    return chain;
                } catch (err) {
                    const error = err;
                    // Indicates chain is not added to provider
                    if (error.code === 4902 || // Unwrapping for MetaMask Mobile
                    // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
                    error?.data?.originalError?.code === 4902) {
                        try {
                            const { default: blockExplorer, ...blockExplorers } = chain.blockExplorers ?? {};
                            let blockExplorerUrls;
                            if (addEthereumChainParameter?.blockExplorerUrls) blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
                            else if (blockExplorer) blockExplorerUrls = [
                                blockExplorer.url,
                                ...Object.values(blockExplorers).map((x)=>x.url)
                            ];
                            let rpcUrls;
                            if (addEthereumChainParameter?.rpcUrls?.length) rpcUrls = addEthereumChainParameter.rpcUrls;
                            else rpcUrls = [
                                chain.rpcUrls.default?.http[0] ?? ''
                            ];
                            const addEthereumChain = {
                                blockExplorerUrls,
                                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
                                chainName: addEthereumChainParameter?.chainName ?? chain.name,
                                iconUrls: addEthereumChainParameter?.iconUrls,
                                nativeCurrency: addEthereumChainParameter?.nativeCurrency ?? chain.nativeCurrency,
                                rpcUrls
                            };
                            await Promise.all([
                                provider.request({
                                    method: 'wallet_addEthereumChain',
                                    params: [
                                        addEthereumChain
                                    ]
                                }).then(async ()=>{
                                    const currentChainId = await this.getChainId();
                                    if (currentChainId === chainId) config.emitter.emit('change', {
                                        chainId
                                    });
                                    else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](new Error('User rejected switch after adding network.'));
                                }),
                                promise
                            ]);
                            return chain;
                        } catch (error) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                        }
                    }
                    if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchChainError"](error);
                }
            },
            async onAccountsChanged (accounts) {
                // Disconnect if there are no accounts
                if (accounts.length === 0) this.onDisconnect();
                else if (config.emitter.listenerCount('connect')) {
                    const chainId = (await this.getChainId()).toString();
                    this.onConnect({
                        chainId
                    });
                    // Remove disconnected shim if it exists
                    if (shimDisconnect) await config.storage?.removeItem(`${this.id}.disconnected`);
                } else config.emitter.emit('change', {
                    accounts: accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(x))
                });
            },
            onChainChanged (chain) {
                const chainId = Number(chain);
                config.emitter.emit('change', {
                    chainId
                });
            },
            async onConnect (connectInfo) {
                const accounts = await this.getAccounts();
                if (accounts.length === 0) return;
                const chainId = Number(connectInfo.chainId);
                config.emitter.emit('connect', {
                    accounts,
                    chainId
                });
                // Manage EIP-1193 event listeners
                const provider = await this.getProvider();
                if (provider) {
                    if (connect) {
                        provider.removeListener('connect', connect);
                        connect = undefined;
                    }
                    if (!accountsChanged) {
                        accountsChanged = this.onAccountsChanged.bind(this);
                        provider.on('accountsChanged', accountsChanged);
                    }
                    if (!chainChanged) {
                        chainChanged = this.onChainChanged.bind(this);
                        provider.on('chainChanged', chainChanged);
                    }
                    if (!disconnect) {
                        disconnect = this.onDisconnect.bind(this);
                        provider.on('disconnect', disconnect);
                    }
                }
            },
            async onDisconnect (error) {
                const provider = await this.getProvider();
                // If MetaMask emits a `code: 1013` error, wait for reconnection before disconnecting
                // https://github.com/MetaMask/providers/pull/120
                if (error && error.code === 1013) {
                    if (provider && !!(await this.getAccounts()).length) return;
                }
                // No need to remove `${this.id}.disconnected` from storage because `onDisconnect` is typically
                // only called when the wallet is disconnected through the wallet's interface, meaning the wallet
                // actually disconnected and we don't need to simulate it.
                config.emitter.emit('disconnect');
                // Manage EIP-1193 event listeners
                if (provider) {
                    if (chainChanged) {
                        provider.removeListener('chainChanged', chainChanged);
                        chainChanged = undefined;
                    }
                    if (disconnect) {
                        provider.removeListener('disconnect', disconnect);
                        disconnect = undefined;
                    }
                    if (!connect) {
                        connect = this.onConnect.bind(this);
                        provider.on('connect', connect);
                    }
                }
            }
        }));
}
const targetMap = {
    coinbaseWallet: {
        id: 'coinbaseWallet',
        name: 'Coinbase Wallet',
        provider (window1) {
            if (window1?.coinbaseWalletExtension) return window1.coinbaseWalletExtension;
            return findProvider(window1, 'isCoinbaseWallet');
        }
    },
    metaMask: {
        id: 'metaMask',
        name: 'MetaMask',
        provider (window1) {
            return findProvider(window1, (provider)=>{
                if (!provider.isMetaMask) return false;
                // Brave tries to make itself look like MetaMask
                // Could also try RPC `web3_clientVersion` if following is unreliable
                if (provider.isBraveWallet && !provider._events && !provider._state) return false;
                // Other wallets that try to look like MetaMask
                const flags = [
                    'isApexWallet',
                    'isAvalanche',
                    'isBitKeep',
                    'isBlockWallet',
                    'isKuCoinWallet',
                    'isMathWallet',
                    'isOkxWallet',
                    'isOKExWallet',
                    'isOneInchIOSWallet',
                    'isOneInchAndroidWallet',
                    'isOpera',
                    'isPhantom',
                    'isPortal',
                    'isRabby',
                    'isTokenPocket',
                    'isTokenary',
                    'isUniswapWallet',
                    'isZerion'
                ];
                for (const flag of flags)if (provider[flag]) return false;
                return true;
            });
        }
    },
    phantom: {
        id: 'phantom',
        name: 'Phantom',
        provider (window1) {
            if (window1?.phantom?.ethereum) return window1.phantom?.ethereum;
            return findProvider(window1, 'isPhantom');
        }
    }
};
function findProvider(window1, select) {
    function isProvider(provider) {
        if (typeof select === 'function') return select(provider);
        if (typeof select === 'string') return provider[select];
        return true;
    }
    const ethereum = window1.ethereum;
    if (ethereum?.providers) return ethereum.providers.find((provider)=>isProvider(provider));
    if (ethereum && isProvider(ethereum)) return ethereum;
    return undefined;
} //# sourceMappingURL=injected.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/extractRpcUrls.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "extractRpcUrls": (()=>extractRpcUrls)
});
function extractRpcUrls(parameters) {
    const { chain } = parameters;
    const fallbackUrl = chain.rpcUrls.default.http[0];
    if (!parameters.transports) return [
        fallbackUrl
    ];
    const transport = parameters.transports?.[chain.id]?.({
        chain
    });
    const transports = transport?.value?.transports || [
        transport
    ];
    return transports.map(({ value })=>value?.url || fallbackUrl);
} //# sourceMappingURL=extractRpcUrls.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getConnectorClient": (()=>getConnectorClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/createClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/transports/custom.js [app-client] (ecmascript)");
;
;
;
async function getConnectorClient(config, parameters = {}) {
    // Get connection
    let connection;
    if (parameters.connector) {
        const { connector } = parameters;
        if (config.state.status === 'reconnecting' && !connector.getAccounts && !connector.getChainId) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUnavailableReconnectingError"]({
            connector
        });
        const [accounts, chainId] = await Promise.all([
            connector.getAccounts(),
            connector.getChainId()
        ]);
        connection = {
            accounts: accounts,
            chainId,
            connector
        };
    } else connection = config.state.connections.get(config.state.current);
    if (!connection) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotConnectedError"]();
    const chainId = parameters.chainId ?? connection.chainId;
    // Check connector using same chainId as connection
    const connectorChainId = await connection.connector.getChainId();
    if (connectorChainId !== connection.chainId) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorChainMismatchError"]({
        connectionChainId: connection.chainId,
        connectorChainId
    });
    const connector = connection.connector;
    if (connector.getClient) return connector.getClient({
        chainId
    });
    // Default using `custom` transport
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(parameters.account ?? connection.accounts[0]);
    account.address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(account.address); // TODO: Checksum address as part of `parseAccount`?
    // If account was provided, check that it exists on the connector
    if (parameters.account && !connection.accounts.some((x)=>x.toLowerCase() === account.address.toLowerCase())) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorAccountNotFoundError"]({
        address: account.address,
        connector
    });
    const chain = config.chains.find((chain)=>chain.id === chainId);
    const provider = await connection.connector.getProvider({
        chainId
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])({
        account,
        chain,
        name: 'Connector Client',
        transport: (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])(provider)({
                ...opts,
                retryCount: 0
            })
    });
} //# sourceMappingURL=getConnectorClient.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Retrieves and returns an action from the client (if exists), and falls
 * back to the tree-shakable action.
 *
 * Useful for extracting overridden actions from a client (ie. if a consumer
 * wants to override the `sendTransaction` implementation).
 */ __turbopack_esm__({
    "getAction": (()=>getAction)
});
function getAction(client, actionFn, // Some minifiers drop `Function.prototype.name`, or replace it with short letters,
// meaning that `actionFn.name` will not always work. For that case, the consumer
// needs to pass the name explicitly.
name) {
    const action_implicit = client[actionFn.name];
    if (typeof action_implicit === 'function') return action_implicit;
    const action_explicit = client[name];
    if (typeof action_explicit === 'function') return action_explicit;
    return (params)=>actionFn(client, params);
} //# sourceMappingURL=getAction.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/signMessage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "signMessage": (()=>signMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/wallet/signMessage.js [app-client] (ecmascript)");
;
;
;
async function signMessage(config, parameters) {
    const { account, connector, ...rest } = parameters;
    let client;
    if (typeof account === 'object' && account.type === 'local') client = config.getClient();
    else client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectorClient"])(config, {
        account,
        connector
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signMessage"], 'signMessage');
    return action({
        ...rest,
        ...account ? {
            account
        } : {}
    });
} //# sourceMappingURL=signMessage.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/signMessage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "signMessageMutationOptions": (()=>signMessageMutationOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/signMessage.js [app-client] (ecmascript)");
;
function signMessageMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signMessage"])(config, variables);
        },
        mutationKey: [
            'signMessage'
        ]
    };
} //# sourceMappingURL=signMessage.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchConnectors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/** https://wagmi.sh/core/api/actions/watchConnectors */ __turbopack_esm__({
    "watchConnectors": (()=>watchConnectors)
});
function watchConnectors(config, parameters) {
    const { onChange } = parameters;
    return config._internal.connectors.subscribe((connectors, prevConnectors)=>{
        onChange(Object.values(connectors), prevConnectors);
    });
} //# sourceMappingURL=watchConnectors.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnectors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getConnectors": (()=>getConnectors)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
;
let previousConnectors = [];
function getConnectors(config) {
    const connectors = config.connectors;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(previousConnectors, connectors)) return previousConnectors;
    previousConnectors = connectors;
    return connectors;
} //# sourceMappingURL=getConnectors.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/switchChain.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "switchChain": (()=>switchChain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-client] (ecmascript)");
;
;
async function switchChain(config, parameters) {
    const { addEthereumChainParameter, chainId } = parameters;
    const connection = config.state.connections.get(parameters.connector?.uid ?? config.state.current);
    if (connection) {
        const connector = connection.connector;
        if (!connector.switchChain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchChainNotSupportedError"]({
            connector
        });
        const chain = await connector.switchChain({
            addEthereumChainParameter,
            chainId
        });
        return chain;
    }
    const chain = config.chains.find((x)=>x.id === chainId);
    if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]();
    config.setState((x)=>({
            ...x,
            chainId
        }));
    return chain;
} //# sourceMappingURL=switchChain.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/switchChain.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "switchChainMutationOptions": (()=>switchChainMutationOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$switchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/switchChain.js [app-client] (ecmascript)");
;
function switchChainMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$switchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["switchChain"])(config, variables);
        },
        mutationKey: [
            'switchChain'
        ]
    };
} //# sourceMappingURL=switchChain.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchChains.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @internal
 * We don't expose this because as far as consumers know, you can't chainge (lol) `config.chains` at runtime.
 * Setting `config.chains` via `config._internal.chains.setState(...)` is an extremely advanced use case that's not worth documenting or supporting in the public API at this time.
 */ __turbopack_esm__({
    "watchChains": (()=>watchChains)
});
function watchChains(config, parameters) {
    const { onChange } = parameters;
    return config._internal.chains.subscribe((chains, prevChains)=>{
        onChange(chains, prevChains);
    });
} //# sourceMappingURL=watchChains.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getChains.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getChains": (()=>getChains)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
;
let previousChains = [];
function getChains(config) {
    const chains = config.chains;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(previousChains, chains)) return previousChains;
    previousChains = chains;
    return chains;
} //# sourceMappingURL=getChains.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/connect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "connect": (()=>connect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
;
async function connect(config, parameters) {
    // "Register" connector if not already created
    let connector;
    if (typeof parameters.connector === 'function') {
        connector = config._internal.connectors.setup(parameters.connector);
    } else connector = parameters.connector;
    // Check if connector is already connected
    if (connector.uid === config.state.current) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorAlreadyConnectedError"]();
    try {
        config.setState((x)=>({
                ...x,
                status: 'connecting'
            }));
        connector.emitter.emit('message', {
            type: 'connecting'
        });
        const { connector: _, ...rest } = parameters;
        const data = await connector.connect(rest);
        const accounts = data.accounts;
        connector.emitter.off('connect', config._internal.events.connect);
        connector.emitter.on('change', config._internal.events.change);
        connector.emitter.on('disconnect', config._internal.events.disconnect);
        await config.storage?.setItem('recentConnectorId', connector.id);
        config.setState((x)=>({
                ...x,
                connections: new Map(x.connections).set(connector.uid, {
                    accounts,
                    chainId: data.chainId,
                    connector: connector
                }),
                current: connector.uid,
                status: 'connected'
            }));
        return {
            accounts,
            chainId: data.chainId
        };
    } catch (error) {
        config.setState((x)=>({
                ...x,
                // Keep existing connector connected in case of error
                status: x.current ? 'connected' : 'disconnected'
            }));
        throw error;
    }
} //# sourceMappingURL=connect.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/connect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "connectMutationOptions": (()=>connectMutationOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/connect.js [app-client] (ecmascript)");
;
function connectMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connect"])(config, variables);
        },
        mutationKey: [
            'connect'
        ]
    };
} //# sourceMappingURL=connect.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/deserialize.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deserialize": (()=>deserialize)
});
function deserialize(value, reviver) {
    return JSON.parse(value, (key, value_)=>{
        let value = value_;
        if (value?.__type === 'bigint') value = BigInt(value.value);
        if (value?.__type === 'Map') value = new Map(value.value);
        return reviver?.(key, value) ?? value;
    });
} //# sourceMappingURL=deserialize.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/serialize.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Get the reference key for the circular value
 *
 * @param keys the keys to build the reference key from
 * @param cutoff the maximum number of keys to include
 * @returns the reference key
 */ __turbopack_esm__({
    "serialize": (()=>serialize)
});
function getReferenceKey(keys, cutoff) {
    return keys.slice(0, cutoff).join('.') || '.';
}
/**
 * Faster `Array.prototype.indexOf` implementation build for slicing / splicing
 *
 * @param array the array to match the value in
 * @param value the value to match
 * @returns the matching index, or -1
 */ function getCutoff(array, value) {
    const { length } = array;
    for(let index = 0; index < length; ++index){
        if (array[index] === value) {
            return index + 1;
        }
    }
    return 0;
}
/**
 * Create a replacer method that handles circular values
 *
 * @param [replacer] a custom replacer to use for non-circular values
 * @param [circularReplacer] a custom replacer to use for circular methods
 * @returns the value to stringify
 */ function createReplacer(replacer, circularReplacer) {
    const hasReplacer = typeof replacer === 'function';
    const hasCircularReplacer = typeof circularReplacer === 'function';
    const cache = [];
    const keys = [];
    return function replace(key, value) {
        if (typeof value === 'object') {
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
        let value = value_;
        if (typeof value === 'bigint') value = {
            __type: 'bigint',
            value: value_.toString()
        };
        if (value instanceof Map) value = {
            __type: 'Map',
            value: Array.from(value_.entries())
        };
        return replacer?.(key, value) ?? value;
    }, circularReplacer), indent ?? undefined);
} //# sourceMappingURL=serialize.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/createStorage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createStorage": (()=>createStorage),
    "getDefaultStorage": (()=>getDefaultStorage),
    "noopStorage": (()=>noopStorage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deserialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/deserialize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$serialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/serialize.js [app-client] (ecmascript)");
;
;
function createStorage(parameters) {
    const { deserialize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deserialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deserialize"], key: prefix = 'wagmi', serialize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$serialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"], storage = noopStorage } = parameters;
    function unwrap(value) {
        if (value instanceof Promise) return value.then((x)=>x).catch(()=>null);
        return value;
    }
    return {
        ...storage,
        key: prefix,
        async getItem (key, defaultValue) {
            const value = storage.getItem(`${prefix}.${key}`);
            const unwrapped = await unwrap(value);
            if (unwrapped) return deserialize(unwrapped) ?? null;
            return defaultValue ?? null;
        },
        async setItem (key, value) {
            const storageKey = `${prefix}.${key}`;
            if (value === null) await unwrap(storage.removeItem(storageKey));
            else await unwrap(storage.setItem(storageKey, serialize(value)));
        },
        async removeItem (key) {
            await unwrap(storage.removeItem(`${prefix}.${key}`));
        }
    };
}
const noopStorage = {
    getItem: ()=>null,
    setItem: ()=>{},
    removeItem: ()=>{}
};
function getDefaultStorage() {
    const storage = (()=>{
        if (typeof window !== 'undefined' && window.localStorage) return window.localStorage;
        return noopStorage;
    })();
    return {
        getItem (key) {
            return storage.getItem(key);
        },
        removeItem (key) {
            storage.removeItem(key);
        },
        setItem (key, value) {
            try {
                storage.setItem(key, value);
            // silence errors by default (QuotaExceededError, SecurityError, etc.)
            } catch  {}
        }
    };
} //# sourceMappingURL=createStorage.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/createEmitter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Emitter": (()=>Emitter),
    "createEmitter": (()=>createEmitter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js [app-client] (ecmascript) <export default as EventEmitter>");
;
class Emitter {
    constructor(uid){
        Object.defineProperty(this, "uid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: uid
        });
        Object.defineProperty(this, "_emitter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__["EventEmitter"]()
        });
    }
    on(eventName, fn) {
        this._emitter.on(eventName, fn);
    }
    once(eventName, fn) {
        this._emitter.once(eventName, fn);
    }
    off(eventName, fn) {
        this._emitter.off(eventName, fn);
    }
    emit(eventName, ...params) {
        const data = params[0];
        this._emitter.emit(eventName, {
            uid: this.uid,
            ...data
        });
    }
    listenerCount(eventName) {
        return this._emitter.listenerCount(eventName);
    }
}
function createEmitter(uid) {
    return new Emitter(uid);
} //# sourceMappingURL=createEmitter.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/uid.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "uid": (()=>uid)
});
const size = 256;
let index = size;
let buffer;
function uid(length = 11) {
    if (!buffer || index + length > size * 2) {
        buffer = '';
        index = 0;
        for(let i = 0; i < size; i++){
            buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
        }
    }
    return buffer.substring(index, index++ + length);
} //# sourceMappingURL=uid.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/createConfig.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createConfig": (()=>createConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/createStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mipd$40$0$2e$0$2e$7_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$mipd$2f$dist$2f$esm$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/mipd@0.0.7_typescript@5.7.3/node_modules/mipd/dist/esm/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zustand@5.0.0_@types+react@19.0.10_react@19.0.0_use-sync-external-store@1.4.0_react@19.0.0_/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createEmitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/createEmitter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$uid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/uid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/connectors/injected.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/createClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zustand@5.0.0_@types+react@19.0.10_react@19.0.0_use-sync-external-store@1.4.0_react@19.0.0_/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function createConfig(parameters) {
    const { multiInjectedProviderDiscovery = true, storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStorage"])({
        storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultStorage"])()
    }), syncConnectedChain = true, ssr = false, ...rest } = parameters;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Set up connectors, clients, etc.
    /////////////////////////////////////////////////////////////////////////////////////////////////
    const mipd = typeof window !== 'undefined' && multiInjectedProviderDiscovery ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$mipd$40$0$2e$0$2e$7_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$mipd$2f$dist$2f$esm$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])() : undefined;
    const chains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(()=>rest.chains);
    const connectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(()=>{
        const collection = [];
        const rdnsSet = new Set();
        for (const connectorFns of rest.connectors ?? []){
            const connector = setup(connectorFns);
            collection.push(connector);
            if (!ssr && connector.rdns) {
                const rdnsValues = typeof connector.rdns === 'string' ? [
                    connector.rdns
                ] : connector.rdns;
                for (const rdns of rdnsValues){
                    rdnsSet.add(rdns);
                }
            }
        }
        if (!ssr && mipd) {
            const providers = mipd.getProviders();
            for (const provider of providers){
                if (rdnsSet.has(provider.info.rdns)) continue;
                collection.push(setup(providerDetailToConnector(provider)));
            }
        }
        return collection;
    });
    function setup(connectorFn) {
        // Set up emitter with uid and add to connector so they are "linked" together.
        const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createEmitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmitter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$uid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uid"])());
        const connector = {
            ...connectorFn({
                emitter,
                chains: chains.getState(),
                storage,
                transports: rest.transports
            }),
            emitter,
            uid: emitter.uid
        };
        // Start listening for `connect` events on connector setup
        // This allows connectors to "connect" themselves without user interaction (e.g. MetaMask's "Manually connect to current site")
        emitter.on('connect', connect);
        connector.setup?.();
        return connector;
    }
    function providerDetailToConnector(providerDetail) {
        const { info } = providerDetail;
        const provider = providerDetail.provider;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injected"])({
            target: {
                ...info,
                id: info.rdns,
                provider
            }
        });
    }
    const clients = new Map();
    function getClient(config = {}) {
        const chainId = config.chainId ?? store.getState().chainId;
        const chain = chains.getState().find((x)=>x.id === chainId);
        // chainId specified and not configured
        if (config.chainId && !chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]();
        {
            const client = clients.get(store.getState().chainId);
            if (client && !chain) return client;
            if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]();
        }
        // If a memoized client exists for a chain id, use that.
        {
            const client = clients.get(chainId);
            if (client) return client;
        }
        let client;
        if (rest.client) client = rest.client({
            chain
        });
        else {
            const chainId = chain.id;
            const chainIds = chains.getState().map((x)=>x.id);
            // Grab all properties off `rest` and resolve for use in `createClient`
            const properties = {};
            const entries = Object.entries(rest);
            for (const [key, value] of entries){
                if (key === 'chains' || key === 'client' || key === 'connectors' || key === 'transports') continue;
                if (typeof value === 'object') {
                    // check if value is chainId-specific since some values can be objects
                    // e.g. { batch: { multicall: { batchSize: 1024 } } }
                    if (chainId in value) properties[key] = value[chainId];
                    else {
                        // check if value is chainId-specific, but does not have value for current chainId
                        const hasChainSpecificValue = chainIds.some((x)=>x in value);
                        if (hasChainSpecificValue) continue;
                        properties[key] = value;
                    }
                } else properties[key] = value;
            }
            client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])({
                ...properties,
                chain,
                batch: properties.batch ?? {
                    multicall: true
                },
                transport: (parameters)=>rest.transports[chainId]({
                        ...parameters,
                        connectors
                    })
            });
        }
        clients.set(chainId, client);
        return client;
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Create store
    /////////////////////////////////////////////////////////////////////////////////////////////////
    function getInitialState() {
        return {
            chainId: chains.getState()[0].id,
            connections: new Map(),
            current: null,
            status: 'disconnected'
        };
    }
    let currentVersion;
    const prefix = '0.0.0-canary-';
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"].startsWith(prefix)) currentVersion = Number.parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"].replace(prefix, ''));
    else currentVersion = Number.parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"].split('.')[0] ?? '0');
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeWithSelector"])(// only use persist middleware if storage exists
    storage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0_$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])(getInitialState, {
        migrate (persistedState, version) {
            if (version === currentVersion) return persistedState;
            const initialState = getInitialState();
            const chainId = validatePersistedChainId(persistedState, initialState.chainId);
            return {
                ...initialState,
                chainId
            };
        },
        name: 'store',
        partialize (state) {
            // Only persist "critical" store properties to preserve storage size.
            return {
                connections: {
                    __type: 'Map',
                    value: Array.from(state.connections.entries()).map(([key, connection])=>{
                        const { id, name, type, uid } = connection.connector;
                        const connector = {
                            id,
                            name,
                            type,
                            uid
                        };
                        return [
                            key,
                            {
                                ...connection,
                                connector
                            }
                        ];
                    })
                },
                chainId: state.chainId,
                current: state.current
            };
        },
        merge (persistedState, currentState) {
            // `status` should not be persisted as it messes with reconnection
            if (typeof persistedState === 'object' && persistedState && 'status' in persistedState) delete persistedState.status;
            // Make sure persisted `chainId` is valid
            const chainId = validatePersistedChainId(persistedState, currentState.chainId);
            return {
                ...currentState,
                ...persistedState,
                chainId
            };
        },
        skipHydration: ssr,
        storage: storage,
        version: currentVersion
    }) : getInitialState));
    store.setState(getInitialState());
    function validatePersistedChainId(persistedState, defaultChainId) {
        return persistedState && typeof persistedState === 'object' && 'chainId' in persistedState && typeof persistedState.chainId === 'number' && chains.getState().some((x)=>x.id === persistedState.chainId) ? persistedState.chainId : defaultChainId;
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Subscribe to changes
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Update default chain when connector chain changes
    if (syncConnectedChain) store.subscribe(({ connections, current })=>current ? connections.get(current)?.chainId : undefined, (chainId)=>{
        // If chain is not configured, then don't switch over to it.
        const isChainConfigured = chains.getState().some((x)=>x.id === chainId);
        if (!isChainConfigured) return;
        return store.setState((x)=>({
                ...x,
                chainId: chainId ?? x.chainId
            }));
    });
    // EIP-6963 subscribe for new wallet providers
    mipd?.subscribe((providerDetails)=>{
        const connectorIdSet = new Set();
        const connectorRdnsSet = new Set();
        for (const connector of connectors.getState()){
            connectorIdSet.add(connector.id);
            if (connector.rdns) {
                const rdnsValues = typeof connector.rdns === 'string' ? [
                    connector.rdns
                ] : connector.rdns;
                for (const rdns of rdnsValues){
                    connectorRdnsSet.add(rdns);
                }
            }
        }
        const newConnectors = [];
        for (const providerDetail of providerDetails){
            if (connectorRdnsSet.has(providerDetail.info.rdns)) continue;
            const connector = setup(providerDetailToConnector(providerDetail));
            if (connectorIdSet.has(connector.id)) continue;
            newConnectors.push(connector);
        }
        if (storage && !store.persist.hasHydrated()) return;
        connectors.setState((x)=>[
                ...x,
                ...newConnectors
            ], true);
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Emitter listeners
    /////////////////////////////////////////////////////////////////////////////////////////////////
    function change(data) {
        store.setState((x)=>{
            const connection = x.connections.get(data.uid);
            if (!connection) return x;
            return {
                ...x,
                connections: new Map(x.connections).set(data.uid, {
                    accounts: data.accounts ?? connection.accounts,
                    chainId: data.chainId ?? connection.chainId,
                    connector: connection.connector
                })
            };
        });
    }
    function connect(data) {
        // Disable handling if reconnecting/connecting
        if (store.getState().status === 'connecting' || store.getState().status === 'reconnecting') return;
        store.setState((x)=>{
            const connector = connectors.getState().find((x)=>x.uid === data.uid);
            if (!connector) return x;
            if (connector.emitter.listenerCount('connect')) connector.emitter.off('connect', change);
            if (!connector.emitter.listenerCount('change')) connector.emitter.on('change', change);
            if (!connector.emitter.listenerCount('disconnect')) connector.emitter.on('disconnect', disconnect);
            return {
                ...x,
                connections: new Map(x.connections).set(data.uid, {
                    accounts: data.accounts,
                    chainId: data.chainId,
                    connector: connector
                }),
                current: data.uid,
                status: 'connected'
            };
        });
    }
    function disconnect(data) {
        store.setState((x)=>{
            const connection = x.connections.get(data.uid);
            if (connection) {
                const connector = connection.connector;
                if (connector.emitter.listenerCount('change')) connection.connector.emitter.off('change', change);
                if (connector.emitter.listenerCount('disconnect')) connection.connector.emitter.off('disconnect', disconnect);
                if (!connector.emitter.listenerCount('connect')) connection.connector.emitter.on('connect', connect);
            }
            x.connections.delete(data.uid);
            if (x.connections.size === 0) return {
                ...x,
                connections: new Map(),
                current: null,
                status: 'disconnected'
            };
            const nextConnection = x.connections.values().next().value;
            return {
                ...x,
                connections: new Map(x.connections),
                current: nextConnection.connector.uid
            };
        });
    }
    return {
        get chains () {
            return chains.getState();
        },
        get connectors () {
            return connectors.getState();
        },
        storage,
        getClient,
        get state () {
            return store.getState();
        },
        setState (value) {
            let newState;
            if (typeof value === 'function') newState = value(store.getState());
            else newState = value;
            // Reset state if it got set to something not matching the base state
            const initialState = getInitialState();
            if (typeof newState !== 'object') newState = initialState;
            const isCorrupt = Object.keys(initialState).some((x)=>!(x in newState));
            if (isCorrupt) newState = initialState;
            store.setState(newState, true);
        },
        subscribe (selector, listener, options) {
            return store.subscribe(selector, listener, options ? {
                ...options,
                fireImmediately: options.emitImmediately
            } : undefined);
        },
        _internal: {
            mipd,
            store,
            ssr: Boolean(ssr),
            syncConnectedChain,
            transports: rest.transports,
            chains: {
                setState (value) {
                    const nextChains = typeof value === 'function' ? value(chains.getState()) : value;
                    if (nextChains.length === 0) return;
                    return chains.setState(nextChains, true);
                },
                subscribe (listener) {
                    return chains.subscribe(listener);
                }
            },
            connectors: {
                providerDetailToConnector,
                setup: setup,
                setState (value) {
                    return connectors.setState(typeof value === 'function' ? value(connectors.getState()) : value, true);
                },
                subscribe (listener) {
                    return connectors.subscribe(listener);
                }
            },
            events: {
                change,
                connect,
                disconnect
            }
        }
    };
} //# sourceMappingURL=createConfig.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchChainId.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/** https://wagmi.sh/core/api/actions/watchChainId */ __turbopack_esm__({
    "watchChainId": (()=>watchChainId)
});
function watchChainId(config, parameters) {
    const { onChange } = parameters;
    return config.subscribe((state)=>state.chainId, onChange);
} //# sourceMappingURL=watchChainId.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getChainId.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/** https://wagmi.sh/core/api/actions/getChainId */ __turbopack_esm__({
    "getChainId": (()=>getChainId)
});
function getChainId(config) {
    return config.state.chainId;
} //# sourceMappingURL=getChainId.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getEnsAddress.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getEnsAddress": (()=>getEnsAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/ens/getEnsAddress.js [app-client] (ecmascript)");
;
;
function getEnsAddress(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsAddress"], 'getEnsAddress');
    return action(rest);
} //# sourceMappingURL=getEnsAddress.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "filterQueryOptions": (()=>filterQueryOptions),
    "hashFn": (()=>hashFn),
    "structuralSharing": (()=>structuralSharing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.66.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
function structuralSharing(oldData, newData) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceEqualDeep"])(oldData, newData);
}
function hashFn(queryKey) {
    return JSON.stringify(queryKey, (_, value)=>{
        if (isPlainObject(value)) return Object.keys(value).sort().reduce((result, key)=>{
            result[key] = value[key];
            return result;
        }, {});
        if (typeof value === 'bigint') return value.toString();
        return value;
    });
}
// biome-ignore lint/complexity/noBannedTypes:
function isPlainObject(value) {
    if (!hasObjectPrototype(value)) {
        return false;
    }
    // If has modified constructor
    const ctor = value.constructor;
    if (typeof ctor === 'undefined') return true;
    // If has modified prototype
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) return false;
    // If constructor does not have an Object-specific method
    // biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
    if (!prot.hasOwnProperty('isPrototypeOf')) return false;
    // Most likely a plain Object
    return true;
}
function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
}
function filterQueryOptions(options) {
    // destructuring is super fast
    // biome-ignore format: no formatting
    const { // import('@tanstack/query-core').QueryOptions
    _defaulted, behavior, gcTime, initialData, initialDataUpdatedAt, maxPages, meta, networkMode, queryFn, queryHash, queryKey, queryKeyHashFn, retry, retryDelay, structuralSharing, // import('@tanstack/query-core').InfiniteQueryObserverOptions
    getPreviousPageParam, getNextPageParam, initialPageParam, // import('@tanstack/react-query').UseQueryOptions
    _optimisticResults, enabled, notifyOnChangeProps, placeholderData, refetchInterval, refetchIntervalInBackground, refetchOnMount, refetchOnReconnect, refetchOnWindowFocus, retryOnMount, select, staleTime, suspense, throwOnError, ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // wagmi
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    config, connector, query, ...rest } = options;
    return rest;
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getEnsAddress.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getEnsAddressQueryKey": (()=>getEnsAddressQueryKey),
    "getEnsAddressQueryOptions": (()=>getEnsAddressQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getEnsAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getEnsAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getEnsAddressQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { name, scopeKey: _, ...parameters } = queryKey[1];
            if (!name) throw new Error('name is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getEnsAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsAddress"])(config, {
                ...parameters,
                name
            });
        },
        queryKey: getEnsAddressQueryKey(options)
    };
}
function getEnsAddressQueryKey(options = {}) {
    return [
        'ensAddress',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getEnsAddress.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getEnsName.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getEnsName": (()=>getEnsName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/ens/getEnsName.js [app-client] (ecmascript)");
;
;
function getEnsName(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsName"], 'getEnsName');
    return action(rest);
} //# sourceMappingURL=getEnsName.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getEnsName.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getEnsNameQueryKey": (()=>getEnsNameQueryKey),
    "getEnsNameQueryOptions": (()=>getEnsNameQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getEnsName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getEnsName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getEnsNameQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { address, scopeKey: _, ...parameters } = queryKey[1];
            if (!address) throw new Error('address is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getEnsName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsName"])(config, {
                ...parameters,
                address
            });
        },
        queryKey: getEnsNameQueryKey(options)
    };
}
function getEnsNameQueryKey(options = {}) {
    return [
        'ensName',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getEnsName.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getEnsAvatar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getEnsAvatar": (()=>getEnsAvatar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/ens/getEnsAvatar.js [app-client] (ecmascript)");
;
;
function getEnsAvatar(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsAvatar"], 'getEnsAvatar');
    return action(rest);
} //# sourceMappingURL=getEnsAvatar.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getEnsAvatar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getEnsAvatarQueryKey": (()=>getEnsAvatarQueryKey),
    "getEnsAvatarQueryOptions": (()=>getEnsAvatarQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getEnsAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getEnsAvatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getEnsAvatarQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { name, scopeKey: _, ...parameters } = queryKey[1];
            if (!name) throw new Error('name is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getEnsAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsAvatar"])(config, {
                ...parameters,
                name
            });
        },
        queryKey: getEnsAvatarQueryKey(options)
    };
}
function getEnsAvatarQueryKey(options = {}) {
    return [
        'ensAvatar',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getEnsAvatar.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/disconnect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/** https://wagmi.sh/core/api/actions/disconnect */ __turbopack_esm__({
    "disconnect": (()=>disconnect)
});
async function disconnect(config, parameters = {}) {
    let connector;
    if (parameters.connector) connector = parameters.connector;
    else {
        const { connections, current } = config.state;
        const connection = connections.get(current);
        connector = connection?.connector;
    }
    const connections = config.state.connections;
    if (connector) {
        await connector.disconnect();
        connector.emitter.off('change', config._internal.events.change);
        connector.emitter.off('disconnect', config._internal.events.disconnect);
        connector.emitter.on('connect', config._internal.events.connect);
        connections.delete(connector.uid);
    }
    config.setState((x)=>{
        // if no connections exist, move to disconnected state
        if (connections.size === 0) return {
            ...x,
            connections: new Map(),
            current: null,
            status: 'disconnected'
        };
        // switch over to another connection
        const nextConnection = connections.values().next().value;
        return {
            ...x,
            connections: new Map(connections),
            current: nextConnection.connector.uid
        };
    });
    // Set recent connector if exists
    {
        const current = config.state.current;
        if (!current) return;
        const connector = config.state.connections.get(current)?.connector;
        if (!connector) return;
        await config.storage?.setItem('recentConnectorId', connector.id);
    }
} //# sourceMappingURL=disconnect.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/disconnect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "disconnectMutationOptions": (()=>disconnectMutationOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$disconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/disconnect.js [app-client] (ecmascript)");
;
function disconnectMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$disconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnect"])(config, variables);
        },
        mutationKey: [
            'disconnect'
        ]
    };
} //# sourceMappingURL=disconnect.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnections.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getConnections": (()=>getConnections)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
;
let previousConnections = [];
function getConnections(config) {
    const connections = [
        ...config.state.connections.values()
    ];
    if (config.state.status === 'reconnecting') return previousConnections;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(previousConnections, connections)) return previousConnections;
    previousConnections = connections;
    return connections;
} //# sourceMappingURL=getConnections.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchConnections.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "watchConnections": (()=>watchConnections)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnections.js [app-client] (ecmascript)");
;
;
function watchConnections(config, parameters) {
    const { onChange } = parameters;
    return config.subscribe(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnections"])(config), onChange, {
        equalityFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"]
    });
} //# sourceMappingURL=watchConnections.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getUnit.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getUnit": (()=>getUnit)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/constants/unit.js [app-client] (ecmascript)");
;
function getUnit(unit) {
    if (typeof unit === 'number') return unit;
    if (unit === 'wei') return 0;
    return Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weiUnits"][unit]);
} //# sourceMappingURL=getUnit.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/multicall.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "multicall": (()=>multicall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$multicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/multicall.js [app-client] (ecmascript)");
;
;
async function multicall(config, parameters) {
    const { allowFailure = true, chainId, contracts, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$multicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall"], 'multicall');
    return action({
        allowFailure,
        contracts,
        ...rest
    });
} //# sourceMappingURL=multicall.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/readContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "readContract": (()=>readContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
;
;
function readContract(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract');
    return action(rest);
} //# sourceMappingURL=readContract.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/readContracts.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "readContracts": (()=>readContracts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$multicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/multicall.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/readContract.js [app-client] (ecmascript)");
;
;
;
async function readContracts(config, parameters) {
    const { allowFailure = true, blockNumber, blockTag, ...rest } = parameters;
    const contracts = parameters.contracts;
    try {
        const contractsByChainId = {};
        for (const [index, contract] of contracts.entries()){
            const chainId = contract.chainId ?? config.state.chainId;
            if (!contractsByChainId[chainId]) contractsByChainId[chainId] = [];
            contractsByChainId[chainId]?.push({
                contract,
                index
            });
        }
        const promises = ()=>Object.entries(contractsByChainId).map(([chainId, contracts])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$multicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall"])(config, {
                    ...rest,
                    allowFailure,
                    blockNumber,
                    blockTag,
                    chainId: Number.parseInt(chainId),
                    contracts: contracts.map(({ contract })=>contract)
                }));
        const multicallResults = (await Promise.all(promises())).flat();
        // Reorder the contract results back to the order they were
        // provided in.
        const resultIndexes = Object.values(contractsByChainId).flatMap((contracts)=>contracts.map(({ index })=>index));
        return multicallResults.reduce((results, result, index)=>{
            if (results) results[resultIndexes[index]] = result;
            return results;
        }, []);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractFunctionExecutionError"]) throw error;
        const promises = ()=>contracts.map((contract)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])(config, {
                    ...contract,
                    blockNumber,
                    blockTag
                }));
        if (allowFailure) return (await Promise.allSettled(promises())).map((result)=>{
            if (result.status === 'fulfilled') return {
                result: result.value,
                status: 'success'
            };
            return {
                error: result.reason,
                result: undefined,
                status: 'failure'
            };
        });
        return await Promise.all(promises());
    }
} //# sourceMappingURL=readContracts.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getBalance.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBalance": (()=>getBalance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/trim.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/getBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/unit/formatUnits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getUnit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getUnit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/readContracts.js [app-client] (ecmascript)");
;
;
;
;
;
async function getBalance(config, parameters) {
    const { address, blockNumber, blockTag, chainId, token: tokenAddress, unit = 'ether' } = parameters;
    if (tokenAddress) {
        try {
            return await getTokenBalance(config, {
                balanceAddress: address,
                chainId,
                symbolType: 'string',
                tokenAddress
            });
        } catch (error) {
            // In the chance that there is an error upon decoding the contract result,
            // it could be likely that the contract data is represented as bytes32 instead
            // of a string.
            if (error.name === 'ContractFunctionExecutionError') {
                const balance = await getTokenBalance(config, {
                    balanceAddress: address,
                    chainId,
                    symbolType: 'bytes32',
                    tokenAddress
                });
                const symbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(balance.symbol, {
                    dir: 'right'
                }));
                return {
                    ...balance,
                    symbol
                };
            }
            throw error;
        }
    }
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBalance"], 'getBalance');
    const value = await action(blockNumber ? {
        address,
        blockNumber
    } : {
        address,
        blockTag
    });
    const chain = config.chains.find((x)=>x.id === chainId) ?? client.chain;
    return {
        decimals: chain.nativeCurrency.decimals,
        formatted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getUnit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(unit)),
        symbol: chain.nativeCurrency.symbol,
        value
    };
}
async function getTokenBalance(config, parameters) {
    const { balanceAddress, chainId, symbolType, tokenAddress, unit } = parameters;
    const contract = {
        abi: [
            {
                type: 'function',
                name: 'balanceOf',
                stateMutability: 'view',
                inputs: [
                    {
                        type: 'address'
                    }
                ],
                outputs: [
                    {
                        type: 'uint256'
                    }
                ]
            },
            {
                type: 'function',
                name: 'decimals',
                stateMutability: 'view',
                inputs: [],
                outputs: [
                    {
                        type: 'uint8'
                    }
                ]
            },
            {
                type: 'function',
                name: 'symbol',
                stateMutability: 'view',
                inputs: [],
                outputs: [
                    {
                        type: symbolType
                    }
                ]
            }
        ],
        address: tokenAddress
    };
    const [value, decimals, symbol] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContracts"])(config, {
        allowFailure: false,
        contracts: [
            {
                ...contract,
                functionName: 'balanceOf',
                args: [
                    balanceAddress
                ],
                chainId
            },
            {
                ...contract,
                functionName: 'decimals',
                chainId
            },
            {
                ...contract,
                functionName: 'symbol',
                chainId
            }
        ]
    });
    const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(value ?? '0', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getUnit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(unit ?? decimals));
    return {
        decimals,
        formatted,
        symbol,
        value
    };
} //# sourceMappingURL=getBalance.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getBalance.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBalanceQueryKey": (()=>getBalanceQueryKey),
    "getBalanceQueryOptions": (()=>getBalanceQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getBalanceQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { address, scopeKey: _, ...parameters } = queryKey[1];
            if (!address) throw new Error('address is required');
            const balance = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBalance"])(config, {
                ...parameters,
                address
            });
            return balance ?? null;
        },
        queryKey: getBalanceQueryKey(options)
    };
}
function getBalanceQueryKey(options = {}) {
    return [
        'balance',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getBalance.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getBlockNumber.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBlockNumber": (()=>getBlockNumber)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/getBlockNumber.js [app-client] (ecmascript)");
;
;
function getBlockNumber(config, parameters = {}) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockNumber"], 'getBlockNumber');
    return action(rest);
} //# sourceMappingURL=getBlockNumber.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getBlockNumber.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBlockNumberQueryKey": (()=>getBlockNumberQueryKey),
    "getBlockNumberQueryOptions": (()=>getBlockNumberQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getBlockNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getBlockNumberQueryOptions(config, options = {}) {
    return {
        gcTime: 0,
        async queryFn ({ queryKey }) {
            const { scopeKey: _, ...parameters } = queryKey[1];
            const blockNumber = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockNumber"])(config, parameters);
            return blockNumber ?? null;
        },
        queryKey: getBlockNumberQueryKey(options)
    };
}
function getBlockNumberQueryKey(options = {}) {
    return [
        'blockNumber',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getBlockNumber.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchBlockNumber.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "watchBlockNumber": (()=>watchBlockNumber)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/watchBlockNumber.js [app-client] (ecmascript)");
;
;
function watchBlockNumber(config, parameters) {
    const { syncConnectedChain = config._internal.syncConnectedChain, ...rest } = parameters;
    let unwatch;
    const listener = (chainId)=>{
        if (unwatch) unwatch();
        const client = config.getClient({
            chainId
        });
        const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchBlockNumber"], 'watchBlockNumber');
        unwatch = action(rest);
        return unwatch;
    };
    // set up listener for block number changes
    const unlisten = listener(parameters.chainId);
    // set up subscriber for connected chain changes
    let unsubscribe;
    if (syncConnectedChain && !parameters.chainId) unsubscribe = config.subscribe(({ chainId })=>chainId, async (chainId)=>listener(chainId));
    return ()=>{
        unlisten?.();
        unsubscribe?.();
    };
} //# sourceMappingURL=watchBlockNumber.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/cookie.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cookieStorage": (()=>cookieStorage),
    "cookieToInitialState": (()=>cookieToInitialState),
    "parseCookie": (()=>parseCookie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deserialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/deserialize.js [app-client] (ecmascript)");
;
const cookieStorage = {
    getItem (key) {
        if (typeof window === 'undefined') return null;
        const value = parseCookie(document.cookie, key);
        return value ?? null;
    },
    setItem (key, value) {
        if (typeof window === 'undefined') return;
        document.cookie = `${key}=${value};path=/;samesite=Lax`;
    },
    removeItem (key) {
        if (typeof window === 'undefined') return;
        document.cookie = `${key}=;max-age=-1;path=/`;
    }
};
function cookieToInitialState(config, cookie) {
    if (!cookie) return undefined;
    const key = `${config.storage?.key}.store`;
    const parsed = parseCookie(cookie, key);
    if (!parsed) return undefined;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deserialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deserialize"])(parsed).state;
}
function parseCookie(cookie, key) {
    const keyValue = cookie.split('; ').find((x)=>x.startsWith(`${key}=`));
    if (!keyValue) return undefined;
    return keyValue.substring(key.length + 1);
} //# sourceMappingURL=cookie.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/transports/fallback.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fallback": (()=>fallback)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/transports/fallback.js [app-client] (ecmascript)");
;
function fallback(transports, config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallback"])(transports, config);
} //# sourceMappingURL=fallback.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/connectors/mock.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "mock": (()=>mock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/rpc/compat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/request.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/hash/keccak256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/transports/custom.js [app-client] (ecmascript)");
;
;
;
;
mock.type = 'mock';
function mock(parameters) {
    const transactionCache = new Map();
    const features = parameters.features ?? {
        defaultConnected: false
    };
    let connected = features.defaultConnected;
    let connectedChainId;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConnector"])((config)=>({
            id: 'mock',
            name: 'Mock Connector',
            type: mock.type,
            async setup () {
                connectedChainId = config.chains[0].id;
            },
            async connect ({ chainId } = {}) {
                if (features.connectError) {
                    if (typeof features.connectError === 'boolean') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](new Error('Failed to connect.'));
                    throw features.connectError;
                }
                const provider = await this.getProvider();
                const accounts = await provider.request({
                    method: 'eth_requestAccounts'
                });
                let currentChainId = await this.getChainId();
                if (chainId && currentChainId !== chainId) {
                    const chain = await this.switchChain({
                        chainId
                    });
                    currentChainId = chain.id;
                }
                connected = true;
                return {
                    accounts: accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(x)),
                    chainId: currentChainId
                };
            },
            async disconnect () {
                connected = false;
            },
            async getAccounts () {
                if (!connected) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotConnectedError"]();
                const provider = await this.getProvider();
                const accounts = await provider.request({
                    method: 'eth_accounts'
                });
                return accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(x));
            },
            async getChainId () {
                const provider = await this.getProvider();
                const hexChainId = await provider.request({
                    method: 'eth_chainId'
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"])(hexChainId, 'number');
            },
            async isAuthorized () {
                if (!features.reconnect) return false;
                if (!connected) return false;
                const accounts = await this.getAccounts();
                return !!accounts.length;
            },
            async switchChain ({ chainId }) {
                const provider = await this.getProvider();
                const chain = config.chains.find((x)=>x.id === chainId);
                if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchChainError"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]());
                await provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [
                        {
                            chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chainId)
                        }
                    ]
                });
                return chain;
            },
            onAccountsChanged (accounts) {
                if (accounts.length === 0) this.onDisconnect();
                else config.emitter.emit('change', {
                    accounts: accounts.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(x))
                });
            },
            onChainChanged (chain) {
                const chainId = Number(chain);
                config.emitter.emit('change', {
                    chainId
                });
            },
            async onDisconnect (_error) {
                config.emitter.emit('disconnect');
                connected = false;
            },
            async getProvider ({ chainId } = {}) {
                const chain = config.chains.find((x)=>x.id === chainId) ?? config.chains[0];
                const url = chain.rpcUrls.default.http[0];
                const request = async ({ method, params })=>{
                    // eth methods
                    if (method === 'eth_chainId') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(connectedChainId);
                    if (method === 'eth_requestAccounts') return parameters.accounts;
                    if (method === 'eth_signTypedData_v4') {
                        if (features.signTypedDataError) {
                            if (typeof features.signTypedDataError === 'boolean') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](new Error('Failed to sign typed data.'));
                            throw features.signTypedDataError;
                        }
                    }
                    // wallet methods
                    if (method === 'wallet_switchEthereumChain') {
                        if (features.switchChainError) {
                            if (typeof features.switchChainError === 'boolean') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](new Error('Failed to switch chain.'));
                            throw features.switchChainError;
                        }
                        connectedChainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromHex"])(params[0].chainId, 'number');
                        this.onChainChanged(connectedChainId.toString());
                        return;
                    }
                    if (method === 'wallet_watchAsset') {
                        if (features.watchAssetError) {
                            if (typeof features.watchAssetError === 'boolean') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](new Error('Failed to switch chain.'));
                            throw features.watchAssetError;
                        }
                        return connected;
                    }
                    if (method === 'wallet_getCapabilities') return {
                        '0x2105': {
                            paymasterService: {
                                supported: params[0] === '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
                            },
                            sessionKeys: {
                                supported: true
                            }
                        },
                        '0x14A34': {
                            paymasterService: {
                                supported: params[0] === '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
                            }
                        }
                    };
                    if (method === 'wallet_sendCalls') {
                        const hashes = [];
                        const calls = params[0].calls;
                        for (const call of calls){
                            const { result, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rpc"].http(url, {
                                body: {
                                    method: 'eth_sendTransaction',
                                    params: [
                                        call
                                    ]
                                }
                            });
                            if (error) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RpcRequestError"]({
                                body: {
                                    method,
                                    params
                                },
                                error,
                                url
                            });
                            hashes.push(result);
                        }
                        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringToHex"])(JSON.stringify(calls)));
                        transactionCache.set(id, hashes);
                        return id;
                    }
                    if (method === 'wallet_getCallsStatus') {
                        const hashes = transactionCache.get(params[0]);
                        if (!hashes) return null;
                        const receipts = await Promise.all(hashes.map(async (hash)=>{
                            const { result, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rpc"].http(url, {
                                body: {
                                    method: 'eth_getTransactionReceipt',
                                    params: [
                                        hash
                                    ],
                                    id: 0
                                }
                            });
                            if (error) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RpcRequestError"]({
                                body: {
                                    method,
                                    params
                                },
                                error,
                                url
                            });
                            if (!result) return null;
                            return {
                                blockHash: result.blockHash,
                                blockNumber: result.blockNumber,
                                gasUsed: result.gasUsed,
                                logs: result.logs,
                                status: result.status,
                                transactionHash: result.transactionHash
                            };
                        }));
                        if (receipts.some((x)=>!x)) return {
                            status: 'PENDING',
                            receipts: []
                        };
                        return {
                            status: 'CONFIRMED',
                            receipts
                        };
                    }
                    if (method === 'wallet_showCallsStatus') return;
                    // other methods
                    if (method === 'personal_sign') {
                        if (features.signMessageError) {
                            if (typeof features.signMessageError === 'boolean') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](new Error('Failed to sign message.'));
                            throw features.signMessageError;
                        }
                        // Change `personal_sign` to `eth_sign` and swap params
                        method = 'eth_sign';
                        params = [
                            params[1],
                            params[0]
                        ];
                    }
                    const body = {
                        method,
                        params
                    };
                    const { error, result } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rpc"].http(url, {
                        body
                    });
                    if (error) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RpcRequestError"]({
                        body,
                        error,
                        url
                    });
                    return result;
                };
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])({
                    request
                })({
                    retryCount: 0
                });
            }
        }));
} //# sourceMappingURL=mock.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/normalizeChainId.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/** @deprecated use `Number` instead */ __turbopack_esm__({
    "normalizeChainId": (()=>normalizeChainId)
});
function normalizeChainId(chainId) {
    if (typeof chainId === 'string') return Number.parseInt(chainId, chainId.trim().substring(0, 2) === '0x' ? 16 : 10);
    if (typeof chainId === 'bigint') return Number(chainId);
    if (typeof chainId === 'number') return chainId;
    throw new Error(`Cannot normalize chainId "${chainId}" of type "${typeof chainId}"`);
} //# sourceMappingURL=normalizeChainId.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/transports/connector.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "unstable_connector": (()=>unstable_connector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withRetry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/promise/withTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/transports/createTransport.js [app-client] (ecmascript)");
;
function unstable_connector(connector, config = {}) {
    const { type } = connector;
    const { key = 'connector', name = 'Connector', retryDelay } = config;
    return (parameters)=>{
        const { chain, connectors } = parameters;
        const retryCount = config.retryCount ?? parameters.retryCount;
        const request = async ({ method, params })=>{
            const connector = connectors?.getState().find((c)=>c.type === type);
            if (!connector) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderDisconnectedError"](new Error(`Could not find connector of type "${type}" in \`connectors\` passed to \`createConfig\`.`));
            const provider = await connector.getProvider({
                chainId: chain?.id
            });
            if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderDisconnectedError"](new Error('Provider is disconnected.'));
            // We are applying a retry & timeout strategy here as some injected wallets (e.g. MetaMask) fail to
            // immediately resolve a JSON-RPC request on page load.
            const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withRetry"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withTimeout"])(()=>provider.request({
                        method: 'eth_chainId'
                    }), {
                    timeout: 100
                })));
            if (chain && chainId !== chain.id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainDisconnectedError"](new Error(`The current chain of the connector (id: ${chainId}) does not match the target chain for the request (id: ${chain.id} – ${chain.name}).`));
            const body = {
                method,
                params
            };
            return provider.request(body);
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTransport"])({
            key,
            name,
            request,
            retryCount,
            retryDelay,
            type: 'connector'
        });
    };
} //# sourceMappingURL=connector.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getBlock.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBlock": (()=>getBlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/getBlock.js [app-client] (ecmascript)");
;
;
async function getBlock(config, parameters = {}) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock');
    const block = await action(rest);
    return {
        ...block,
        chainId: client.chain.id
    };
} //# sourceMappingURL=getBlock.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getBlock.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBlockQueryKey": (()=>getBlockQueryKey),
    "getBlockQueryOptions": (()=>getBlockQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getBlockQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { scopeKey: _, ...parameters } = queryKey[1];
            const block = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"])(config, parameters);
            return block ?? null;
        },
        queryKey: getBlockQueryKey(options)
    };
}
function getBlockQueryKey(options = {}) {
    return [
        'block',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getBlock.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchBlocks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "watchBlocks": (()=>watchBlocks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/watchBlocks.js [app-client] (ecmascript)");
;
;
function watchBlocks(config, parameters) {
    const { syncConnectedChain = config._internal.syncConnectedChain, ...rest } = parameters;
    let unwatch;
    const listener = (chainId)=>{
        if (unwatch) unwatch();
        const client = config.getClient({
            chainId
        });
        const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchBlocks"], 'watchBlocks');
        unwatch = action(rest);
        return unwatch;
    };
    // set up listener for block number changes
    const unlisten = listener(parameters.chainId);
    // set up subscriber for connected chain changes
    let unsubscribe;
    if (syncConnectedChain && !parameters.chainId) unsubscribe = config.subscribe(({ chainId })=>chainId, async (chainId)=>listener(chainId));
    return ()=>{
        unlisten?.();
        unsubscribe?.();
    };
} //# sourceMappingURL=watchBlocks.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getBlockTransactionCount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBlockTransactionCount": (()=>getBlockTransactionCount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/getBlockTransactionCount.js [app-client] (ecmascript)");
;
;
function getBlockTransactionCount(config, parameters = {}) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockTransactionCount"], 'getBlockTransactionCount');
    return action(rest);
} //# sourceMappingURL=getBlockTransactionCount.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getBlockTransactionCount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBlockTransactionCountQueryKey": (()=>getBlockTransactionCountQueryKey),
    "getBlockTransactionCountQueryOptions": (()=>getBlockTransactionCountQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getBlockTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getBlockTransactionCount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getBlockTransactionCountQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { scopeKey: _, ...parameters } = queryKey[1];
            const blockTransactionCount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getBlockTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockTransactionCount"])(config, parameters);
            return blockTransactionCount ?? null;
        },
        queryKey: getBlockTransactionCountQueryKey(options)
    };
}
function getBlockTransactionCountQueryKey(options = {}) {
    return [
        'blockTransactionCount',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getBlockTransactionCount.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getBytecode.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBytecode": (()=>getBytecode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__getCode__as__getBytecode$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/getCode.js [app-client] (ecmascript) <export getCode as getBytecode>");
;
;
async function getBytecode(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__getCode__as__getBytecode$3e$__["getBytecode"], 'getBytecode');
    return action(rest);
} //# sourceMappingURL=getBytecode.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getBytecode.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBytecodeQueryKey": (()=>getBytecodeQueryKey),
    "getBytecodeQueryOptions": (()=>getBytecodeQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getBytecode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getBytecode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getBytecodeQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { address, scopeKey: _, ...parameters } = queryKey[1];
            if (!address) throw new Error('address is required');
            const bytecode = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getBytecode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytecode"])(config, {
                ...parameters,
                address
            });
            return bytecode ?? null;
        },
        queryKey: getBytecodeQueryKey(options)
    };
}
function getBytecodeQueryKey(options) {
    return [
        'getBytecode',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getBytecode.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/call.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "call": (()=>call)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/call.js [app-client] (ecmascript)");
;
;
async function call(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["call"], 'call');
    return action(rest);
} //# sourceMappingURL=call.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/call.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "callQueryKey": (()=>callQueryKey),
    "callQueryOptions": (()=>callQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/call.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function callQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { scopeKey: _, ...parameters } = queryKey[1];
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["call"])(config, {
                ...parameters
            });
            return data ?? null;
        },
        queryKey: callQueryKey(options)
    };
}
function callQueryKey(options) {
    return [
        'call',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=call.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getClient": (()=>getClient)
});
function getClient(config, parameters = {}) {
    let client = undefined;
    try {
        client = config.getClient(parameters);
    } catch  {}
    return client;
} //# sourceMappingURL=getClient.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "watchClient": (()=>watchClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getClient.js [app-client] (ecmascript)");
;
function watchClient(config, parameters) {
    const { onChange } = parameters;
    return config.subscribe(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])(config), onChange, {
        equalityFn (a, b) {
            return a?.uid === b?.uid;
        }
    });
} //# sourceMappingURL=watchClient.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getConnectorClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getConnectorClientQueryKey": (()=>getConnectorClientQueryKey),
    "getConnectorClientQueryOptions": (()=>getConnectorClientQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getConnectorClientQueryOptions(config, options = {}) {
    return {
        gcTime: 0,
        async queryFn ({ queryKey }) {
            const { connector } = options;
            const { connectorUid: _, scopeKey: _s, ...parameters } = queryKey[1];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectorClient"])(config, {
                ...parameters,
                connector
            });
        },
        queryKey: getConnectorClientQueryKey(options)
    };
}
function getConnectorClientQueryKey(options = {}) {
    const { connector, ...parameters } = options;
    return [
        'connectorClient',
        {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(parameters),
            connectorUid: connector?.uid
        }
    ];
} //# sourceMappingURL=getConnectorClient.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/infiniteReadContracts.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "infiniteReadContractsQueryKey": (()=>infiniteReadContractsQueryKey),
    "infiniteReadContractsQueryOptions": (()=>infiniteReadContractsQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/readContracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function infiniteReadContractsQueryOptions(config, options) {
    return {
        ...options.query,
        async queryFn ({ pageParam, queryKey }) {
            const { contracts } = options;
            const { cacheKey: _, scopeKey: _s, ...parameters } = queryKey[1];
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContracts"])(config, {
                ...parameters,
                contracts: contracts(pageParam)
            });
        },
        queryKey: infiniteReadContractsQueryKey(options)
    };
}
function infiniteReadContractsQueryKey(options) {
    const { contracts: _, query: _q, ...parameters } = options;
    return [
        'infiniteReadContracts',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(parameters)
    ];
} //# sourceMappingURL=infiniteReadContracts.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/readContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "readContractQueryKey": (()=>readContractQueryKey),
    "readContractQueryOptions": (()=>readContractQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/readContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function readContractQueryOptions(config, options = {}) {
    return {
        // TODO: Support `signal` once Viem actions allow passthrough
        // https://tkdodo.eu/blog/why-you-want-react-query#bonus-cancellation
        async queryFn ({ queryKey }) {
            const abi = options.abi;
            if (!abi) throw new Error('abi is required');
            const { functionName, scopeKey: _, ...parameters } = queryKey[1];
            const addressOrCodeParams = (()=>{
                const params = queryKey[1];
                if (params.address) return {
                    address: params.address
                };
                if (params.code) return {
                    code: params.code
                };
                throw new Error('address or code is required');
            })();
            if (!functionName) throw new Error('functionName is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])(config, {
                abi,
                functionName,
                args: parameters.args,
                ...addressOrCodeParams,
                ...parameters
            });
        },
        queryKey: readContractQueryKey(options)
    };
}
function readContractQueryKey(options = {}) {
    const { abi: _, ...rest } = options;
    return [
        'readContract',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(rest)
    ];
} //# sourceMappingURL=readContract.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/readContracts.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "readContractsQueryKey": (()=>readContractsQueryKey),
    "readContractsQueryOptions": (()=>readContractsQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/readContracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function readContractsQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const contracts = [];
            const length = queryKey[1].contracts.length;
            for(let i = 0; i < length; i++){
                const contract = queryKey[1].contracts[i];
                const abi = (options.contracts?.[i]).abi;
                contracts.push({
                    ...contract,
                    abi
                });
            }
            const { scopeKey: _, ...parameters } = queryKey[1];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContracts"])(config, {
                ...parameters,
                contracts
            });
        },
        queryKey: readContractsQueryKey(options)
    };
}
function readContractsQueryKey(options = {}) {
    const contracts = [];
    for (const contract of options.contracts ?? []){
        const { abi: _, ...rest } = contract;
        contracts.push({
            ...rest,
            chainId: rest.chainId ?? options.chainId
        });
    }
    return [
        'readContracts',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])({
            ...options,
            contracts
        })
    ];
} //# sourceMappingURL=readContracts.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/writeContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "writeContract": (()=>writeContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/wallet/writeContract.js [app-client] (ecmascript)");
;
;
;
async function writeContract(config, parameters) {
    const { account, chainId, connector, ...request } = parameters;
    let client;
    if (typeof account === 'object' && account?.type === 'local') client = config.getClient({
        chainId
    });
    else client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectorClient"])(config, {
        account: account ?? undefined,
        chainId,
        connector
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeContract"], 'writeContract');
    const hash = await action({
        ...request,
        ...account ? {
            account
        } : {},
        chain: chainId ? {
            id: chainId
        } : null
    });
    return hash;
} //# sourceMappingURL=writeContract.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/writeContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "writeContractMutationOptions": (()=>writeContractMutationOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/writeContract.js [app-client] (ecmascript)");
;
function writeContractMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeContract"])(config, variables);
        },
        mutationKey: [
            'writeContract'
        ]
    };
} //# sourceMappingURL=writeContract.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/deployContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deployContract": (()=>deployContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$deployContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/wallet/deployContract.js [app-client] (ecmascript)");
;
;
;
async function deployContract(config, parameters) {
    const { account, chainId, connector, ...rest } = parameters;
    let client;
    if (typeof account === 'object' && account?.type === 'local') client = config.getClient({
        chainId
    });
    else client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectorClient"])(config, {
        account: account ?? undefined,
        chainId,
        connector
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$deployContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deployContract"], 'deployContract');
    const hash = await action({
        ...rest,
        ...account ? {
            account
        } : {},
        chain: chainId ? {
            id: chainId
        } : null
    });
    return hash;
} //# sourceMappingURL=deployContract.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/deployContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deployContractMutationOptions": (()=>deployContractMutationOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$deployContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/deployContract.js [app-client] (ecmascript)");
;
function deployContractMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$deployContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deployContract"])(config, variables);
        },
        mutationKey: [
            'deployContract'
        ]
    };
} //# sourceMappingURL=deployContract.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getEnsResolver.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getEnsResolver": (()=>getEnsResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/ens/getEnsResolver.js [app-client] (ecmascript)");
;
;
function getEnsResolver(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsResolver"], 'getEnsResolver');
    return action(rest);
} //# sourceMappingURL=getEnsResolver.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getEnsResolver.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getEnsResolverQueryKey": (()=>getEnsResolverQueryKey),
    "getEnsResolverQueryOptions": (()=>getEnsResolverQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getEnsResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getEnsResolver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getEnsResolverQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { name, scopeKey: _, ...parameters } = queryKey[1];
            if (!name) throw new Error('name is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getEnsResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsResolver"])(config, {
                ...parameters,
                name
            });
        },
        queryKey: getEnsResolverQueryKey(options)
    };
}
function getEnsResolverQueryKey(options = {}) {
    return [
        'ensResolver',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getEnsResolver.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getEnsText.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getEnsText": (()=>getEnsText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/ens/getEnsText.js [app-client] (ecmascript)");
;
;
function getEnsText(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsText"], 'getEnsText');
    return action(rest);
} //# sourceMappingURL=getEnsText.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getEnsText.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getEnsTextQueryKey": (()=>getEnsTextQueryKey),
    "getEnsTextQueryOptions": (()=>getEnsTextQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getEnsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getEnsText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getEnsTextQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { key, name, scopeKey: _, ...parameters } = queryKey[1];
            if (!key || !name) throw new Error('key and name are required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getEnsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsText"])(config, {
                ...parameters,
                key,
                name
            });
        },
        queryKey: getEnsTextQueryKey(options)
    };
}
function getEnsTextQueryKey(options = {}) {
    return [
        'ensText',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getEnsText.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/estimateFeesPerGas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "estimateFeesPerGas": (()=>estimateFeesPerGas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/estimateFeesPerGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getUnit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getUnit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/unit/formatUnits.js [app-client] (ecmascript)");
;
;
;
;
async function estimateFeesPerGas(config, parameters = {}) {
    const { chainId, formatUnits: units = 'gwei', ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateFeesPerGas"], 'estimateFeesPerGas');
    const { gasPrice, maxFeePerGas, maxPriorityFeePerGas } = await action({
        ...rest,
        chain: client.chain
    });
    const unit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getUnit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(units);
    const formatted = {
        gasPrice: gasPrice ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(gasPrice, unit) : undefined,
        maxFeePerGas: maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(maxFeePerGas, unit) : undefined,
        maxPriorityFeePerGas: maxPriorityFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(maxPriorityFeePerGas, unit) : undefined
    };
    return {
        formatted,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas
    };
} //# sourceMappingURL=estimateFeesPerGas.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/estimateFeesPerGas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "estimateFeesPerGasQueryKey": (()=>estimateFeesPerGasQueryKey),
    "estimateFeesPerGasQueryOptions": (()=>estimateFeesPerGasQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$estimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/estimateFeesPerGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function estimateFeesPerGasQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { scopeKey: _, ...parameters } = queryKey[1];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$estimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateFeesPerGas"])(config, parameters);
        },
        queryKey: estimateFeesPerGasQueryKey(options)
    };
}
function estimateFeesPerGasQueryKey(options = {}) {
    return [
        'estimateFeesPerGas',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=estimateFeesPerGas.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/estimateGas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "estimateGas": (()=>estimateGas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/estimateGas.js [app-client] (ecmascript)");
;
;
;
async function estimateGas(config, parameters) {
    const { chainId, connector, ...rest } = parameters;
    let account;
    if (parameters.account) account = parameters.account;
    else {
        const connectorClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectorClient"])(config, {
            account: parameters.account,
            chainId,
            connector
        });
        account = connectorClient.account;
    }
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateGas"], 'estimateGas');
    return action({
        ...rest,
        account
    });
} //# sourceMappingURL=estimateGas.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/estimateGas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "estimateGasQueryKey": (()=>estimateGasQueryKey),
    "estimateGasQueryOptions": (()=>estimateGasQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/estimateGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function estimateGasQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { connector } = options;
            const { account, scopeKey: _, ...parameters } = queryKey[1];
            if (!account && !connector) throw new Error('account or connector is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateGas"])(config, {
                account,
                connector,
                ...parameters
            });
        },
        queryKey: estimateGasQueryKey(options)
    };
}
function estimateGasQueryKey(options = {}) {
    const { connector: _, ...rest } = options;
    return [
        'estimateGas',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(rest)
    ];
} //# sourceMappingURL=estimateGas.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/estimateMaxPriorityFeePerGas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "estimateMaxPriorityFeePerGas": (()=>estimateMaxPriorityFeePerGas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js [app-client] (ecmascript)");
;
;
async function estimateMaxPriorityFeePerGas(config, parameters = {}) {
    const { chainId } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateMaxPriorityFeePerGas"], 'estimateMaxPriorityFeePerGas');
    return action({
        chain: client.chain
    });
} //# sourceMappingURL=estimateMaxPriorityFeePerGas.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/estimateMaxPriorityFeePerGas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "estimateMaxPriorityFeePerGasQueryKey": (()=>estimateMaxPriorityFeePerGasQueryKey),
    "estimateMaxPriorityFeePerGasQueryOptions": (()=>estimateMaxPriorityFeePerGasQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$estimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/estimateMaxPriorityFeePerGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function estimateMaxPriorityFeePerGasQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { scopeKey: _, ...parameters } = queryKey[1];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$estimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateMaxPriorityFeePerGas"])(config, parameters);
        },
        queryKey: estimateMaxPriorityFeePerGasQueryKey(options)
    };
}
function estimateMaxPriorityFeePerGasQueryKey(options = {}) {
    return [
        'estimateMaxPriorityFeePerGas',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=estimateMaxPriorityFeePerGas.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getFeeHistory.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getFeeHistory": (()=>getFeeHistory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFeeHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/getFeeHistory.js [app-client] (ecmascript)");
;
;
function getFeeHistory(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFeeHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeeHistory"], 'getFeeHistory');
    return action(rest);
} //# sourceMappingURL=getFeeHistory.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getFeeHistory.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getFeeHistoryQueryKey": (()=>getFeeHistoryQueryKey),
    "getFeeHistoryQueryOptions": (()=>getFeeHistoryQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getFeeHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getFeeHistory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getFeeHistoryQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { blockCount, rewardPercentiles, scopeKey: _, ...parameters } = queryKey[1];
            if (!blockCount) throw new Error('blockCount is required');
            if (!rewardPercentiles) throw new Error('rewardPercentiles is required');
            const feeHistory = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getFeeHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeeHistory"])(config, {
                ...parameters,
                blockCount,
                rewardPercentiles
            });
            return feeHistory ?? null;
        },
        queryKey: getFeeHistoryQueryKey(options)
    };
}
function getFeeHistoryQueryKey(options = {}) {
    return [
        'feeHistory',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getFeeHistory.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getGasPrice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getGasPrice": (()=>getGasPrice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/getGasPrice.js [app-client] (ecmascript)");
;
;
function getGasPrice(config, parameters = {}) {
    const { chainId } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGasPrice"], 'getGasPrice');
    return action({});
} //# sourceMappingURL=getGasPrice.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getGasPrice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getGasPriceQueryKey": (()=>getGasPriceQueryKey),
    "getGasPriceQueryOptions": (()=>getGasPriceQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getGasPrice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getGasPriceQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { scopeKey: _, ...parameters } = queryKey[1];
            const gasPrice = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGasPrice"])(config, parameters);
            return gasPrice ?? null;
        },
        queryKey: getGasPriceQueryKey(options)
    };
}
function getGasPriceQueryKey(options = {}) {
    return [
        'gasPrice',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getGasPrice.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/prepareTransactionRequest.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "prepareTransactionRequest": (()=>prepareTransactionRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)");
;
;
;
async function prepareTransactionRequest(config, parameters) {
    const { account: account_, chainId, ...rest } = parameters;
    const account = account_ ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccount"])(config).address;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareTransactionRequest"], 'prepareTransactionRequest');
    return action({
        ...rest,
        ...account ? {
            account
        } : {}
    });
} //# sourceMappingURL=prepareTransactionRequest.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/prepareTransactionRequest.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "prepareTransactionRequestQueryKey": (()=>prepareTransactionRequestQueryKey),
    "prepareTransactionRequestQueryOptions": (()=>prepareTransactionRequestQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/prepareTransactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function prepareTransactionRequestQueryOptions(config, options = {}) {
    return {
        queryFn ({ queryKey }) {
            const { scopeKey: _, to, ...parameters } = queryKey[1];
            if (!to) throw new Error('to is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareTransactionRequest"])(config, {
                to,
                ...parameters
            });
        },
        queryKey: prepareTransactionRequestQueryKey(options)
    };
}
function prepareTransactionRequestQueryKey(options) {
    return [
        'prepareTransactionRequest',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=prepareTransactionRequest.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getProof.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getProof": (()=>getProof)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getProof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/getProof.js [app-client] (ecmascript)");
;
;
async function getProof(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getProof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProof"], 'getProof');
    return action(rest);
} //# sourceMappingURL=getProof.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getProof.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getProofQueryKey": (()=>getProofQueryKey),
    "getProofQueryOptions": (()=>getProofQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getProof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getProof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getProofQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { address, scopeKey: _, storageKeys, ...parameters } = queryKey[1];
            if (!address || !storageKeys) throw new Error('address and storageKeys are required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getProof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProof"])(config, {
                ...parameters,
                address,
                storageKeys
            });
        },
        queryKey: getProofQueryKey(options)
    };
}
function getProofQueryKey(options) {
    return [
        'getProof',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getProof.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getPublicClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getPublicClient": (()=>getPublicClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/decorators/public.js [app-client] (ecmascript)");
;
;
function getPublicClient(config, parameters = {}) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])(config, parameters);
    return client?.extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicActions"]);
} //# sourceMappingURL=getPublicClient.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchPublicClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "watchPublicClient": (()=>watchPublicClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getPublicClient.js [app-client] (ecmascript)");
;
function watchPublicClient(config, parameters) {
    const { onChange } = parameters;
    return config.subscribe(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublicClient"])(config), onChange, {
        equalityFn (a, b) {
            return a?.uid === b?.uid;
        }
    });
} //# sourceMappingURL=watchPublicClient.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/reconnect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "reconnectMutationOptions": (()=>reconnectMutationOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$reconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/reconnect.js [app-client] (ecmascript)");
;
function reconnectMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$reconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reconnect"])(config, variables);
        },
        mutationKey: [
            'reconnect'
        ]
    };
} //# sourceMappingURL=reconnect.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/sendTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sendTransaction": (()=>sendTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-client] (ecmascript)");
;
;
;
async function sendTransaction(config, parameters) {
    const { account, chainId, connector, ...rest } = parameters;
    let client;
    if (typeof account === 'object' && account?.type === 'local') client = config.getClient({
        chainId
    });
    else client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectorClient"])(config, {
        account: account ?? undefined,
        chainId,
        connector
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"], 'sendTransaction');
    const hash = await action({
        ...rest,
        ...account ? {
            account
        } : {},
        chain: chainId ? {
            id: chainId
        } : null,
        gas: rest.gas ?? undefined
    });
    return hash;
} //# sourceMappingURL=sendTransaction.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/sendTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sendTransactionMutationOptions": (()=>sendTransactionMutationOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/sendTransaction.js [app-client] (ecmascript)");
;
function sendTransactionMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])(config, variables);
        },
        mutationKey: [
            'sendTransaction'
        ]
    };
} //# sourceMappingURL=sendTransaction.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/signTypedData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "signTypedData": (()=>signTypedData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/wallet/signTypedData.js [app-client] (ecmascript)");
;
;
;
async function signTypedData(config, parameters) {
    const { account, connector, ...rest } = parameters;
    let client;
    if (typeof account === 'object' && account.type === 'local') client = config.getClient();
    else client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectorClient"])(config, {
        account,
        connector
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTypedData"], 'signTypedData');
    return action({
        ...rest,
        ...account ? {
            account
        } : {}
    });
} //# sourceMappingURL=signTypedData.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/signTypedData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "signTypedDataMutationOptions": (()=>signTypedDataMutationOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$signTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/signTypedData.js [app-client] (ecmascript)");
;
function signTypedDataMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$signTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTypedData"])(config, variables);
        },
        mutationKey: [
            'signTypedData'
        ]
    };
} //# sourceMappingURL=signTypedData.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/simulateContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "simulateContract": (()=>simulateContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/simulateContract.js [app-client] (ecmascript)");
;
;
;
async function simulateContract(config, parameters) {
    const { abi, chainId, connector, ...rest } = parameters;
    let account;
    if (parameters.account) account = parameters.account;
    else {
        const connectorClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectorClient"])(config, {
            chainId,
            connector
        });
        account = connectorClient.account;
    }
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulateContract"], 'simulateContract');
    const { result, request } = await action({
        ...rest,
        abi,
        account
    });
    return {
        chainId: client.chain.id,
        result,
        request: {
            ...request,
            chainId
        }
    };
} //# sourceMappingURL=simulateContract.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/simulateContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "simulateContractQueryKey": (()=>simulateContractQueryKey),
    "simulateContractQueryOptions": (()=>simulateContractQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$simulateContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/simulateContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function simulateContractQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { abi, connector } = options;
            if (!abi) throw new Error('abi is required');
            const { scopeKey: _, ...parameters } = queryKey[1];
            const { address, functionName } = parameters;
            if (!address) throw new Error('address is required');
            if (!functionName) throw new Error('functionName is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$simulateContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulateContract"])(config, {
                abi,
                connector,
                ...parameters
            });
        },
        queryKey: simulateContractQueryKey(options)
    };
}
function simulateContractQueryKey(options = {}) {
    const { abi: _, connector: _c, ...rest } = options;
    return [
        'simulateContract',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(rest)
    ];
} //# sourceMappingURL=simulateContract.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getStorageAt.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getStorageAt": (()=>getStorageAt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getStorageAt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/getStorageAt.js [app-client] (ecmascript)");
;
;
async function getStorageAt(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getStorageAt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorageAt"], 'getStorageAt');
    return action(rest);
} //# sourceMappingURL=getStorageAt.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getStorageAt.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getStorageAtQueryKey": (()=>getStorageAtQueryKey),
    "getStorageAtQueryOptions": (()=>getStorageAtQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getStorageAt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getStorageAt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getStorageAtQueryOptions(config, options = {}) {
    return {
        queryFn ({ queryKey }) {
            const { address, slot, scopeKey: _, ...parameters } = queryKey[1];
            if (!address || !slot) throw new Error('address and slot are required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getStorageAt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorageAt"])(config, {
                ...parameters,
                address,
                slot
            });
        },
        queryKey: getStorageAtQueryKey(options)
    };
}
function getStorageAtQueryKey(options) {
    return [
        'getStorageAt',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getStorageAt.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/switchAccount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "switchAccount": (()=>switchAccount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
;
async function switchAccount(config, parameters) {
    const { connector } = parameters;
    const connection = config.state.connections.get(connector.uid);
    if (!connection) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotConnectedError"]();
    await config.storage?.setItem('recentConnectorId', connector.id);
    config.setState((x)=>({
            ...x,
            current: connector.uid
        }));
    return {
        accounts: connection.accounts,
        chainId: connection.chainId
    };
} //# sourceMappingURL=switchAccount.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/switchAccount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "switchAccountMutationOptions": (()=>switchAccountMutationOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$switchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/switchAccount.js [app-client] (ecmascript)");
;
function switchAccountMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$switchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["switchAccount"])(config, variables);
        },
        mutationKey: [
            'switchAccount'
        ]
    };
} //# sourceMappingURL=switchAccount.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getToken.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getToken": (()=>getToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/readContracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/errors/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/unit/formatUnits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getUnit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getUnit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/data/trim.js [app-client] (ecmascript)");
;
;
;
async function getToken(config, parameters) {
    const { address, chainId, formatUnits: unit = 18 } = parameters;
    function getAbi(type) {
        return [
            {
                type: 'function',
                name: 'decimals',
                stateMutability: 'view',
                inputs: [],
                outputs: [
                    {
                        type: 'uint8'
                    }
                ]
            },
            {
                type: 'function',
                name: 'name',
                stateMutability: 'view',
                inputs: [],
                outputs: [
                    {
                        type
                    }
                ]
            },
            {
                type: 'function',
                name: 'symbol',
                stateMutability: 'view',
                inputs: [],
                outputs: [
                    {
                        type
                    }
                ]
            },
            {
                type: 'function',
                name: 'totalSupply',
                stateMutability: 'view',
                inputs: [],
                outputs: [
                    {
                        type: 'uint256'
                    }
                ]
            }
        ];
    }
    try {
        const abi = getAbi('string');
        const contractConfig = {
            address,
            abi,
            chainId
        };
        const [decimals, name, symbol, totalSupply] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContracts"])(config, {
            allowFailure: true,
            contracts: [
                {
                    ...contractConfig,
                    functionName: 'decimals'
                },
                {
                    ...contractConfig,
                    functionName: 'name'
                },
                {
                    ...contractConfig,
                    functionName: 'symbol'
                },
                {
                    ...contractConfig,
                    functionName: 'totalSupply'
                }
            ]
        });
        // throw if `name` or `symbol` failed
        if (name.error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractFunctionExecutionError"]) throw name.error;
        if (symbol.error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractFunctionExecutionError"]) throw symbol.error;
        // `decimals` and `totalSupply` are required
        if (decimals.error) throw decimals.error;
        if (totalSupply.error) throw totalSupply.error;
        return {
            address,
            decimals: decimals.result,
            name: name.result,
            symbol: symbol.result,
            totalSupply: {
                formatted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(totalSupply.result, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getUnit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(unit)),
                value: totalSupply.result
            }
        };
    } catch (error) {
        // In the chance that there is an error upon decoding the contract result,
        // it could be likely that the contract data is represented as bytes32 instead
        // of a string.
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractFunctionExecutionError"]) {
            const abi = getAbi('bytes32');
            const contractConfig = {
                address,
                abi,
                chainId
            };
            const [decimals, name, symbol, totalSupply] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContracts"])(config, {
                allowFailure: false,
                contracts: [
                    {
                        ...contractConfig,
                        functionName: 'decimals'
                    },
                    {
                        ...contractConfig,
                        functionName: 'name'
                    },
                    {
                        ...contractConfig,
                        functionName: 'symbol'
                    },
                    {
                        ...contractConfig,
                        functionName: 'totalSupply'
                    }
                ]
            });
            return {
                address,
                decimals,
                name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(name, {
                    dir: 'right'
                })),
                symbol: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(symbol, {
                    dir: 'right'
                })),
                totalSupply: {
                    formatted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(totalSupply, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getUnit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnit"])(unit)),
                    value: totalSupply
                }
            };
        }
        throw error;
    }
} //# sourceMappingURL=getToken.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getToken.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTokenQueryKey": (()=>getTokenQueryKey),
    "getTokenQueryOptions": (()=>getTokenQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getTokenQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { address, scopeKey: _, ...parameters } = queryKey[1];
            if (!address) throw new Error('address is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToken"])(config, {
                ...parameters,
                address
            });
        },
        queryKey: getTokenQueryKey(options)
    };
}
function getTokenQueryKey(options = {}) {
    return [
        'token',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getToken.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTransaction": (()=>getTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/getTransaction.js [app-client] (ecmascript)");
;
;
function getTransaction(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransaction"], 'getTransaction');
    return action(rest);
} //# sourceMappingURL=getTransaction.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTransactionQueryKey": (()=>getTransactionQueryKey),
    "getTransactionQueryOptions": (()=>getTransactionQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getTransactionQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { blockHash, blockNumber, blockTag, hash, index } = queryKey[1];
            if (!blockHash && !blockNumber && !blockTag && !hash) throw new Error('blockHash, blockNumber, blockTag, or hash is required');
            if (!hash && !index) throw new Error('index is required for blockHash, blockNumber, or blockTag');
            const { scopeKey: _, ...rest } = queryKey[1];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransaction"])(config, rest);
        },
        queryKey: getTransactionQueryKey(options)
    };
}
function getTransactionQueryKey(options = {}) {
    return [
        'transaction',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getTransaction.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getTransactionConfirmations.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTransactionConfirmations": (()=>getTransactionConfirmations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionConfirmations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/getTransactionConfirmations.js [app-client] (ecmascript)");
;
;
function getTransactionConfirmations(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionConfirmations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionConfirmations"], 'getTransactionConfirmations');
    return action(rest);
} //# sourceMappingURL=getTransactionConfirmations.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getTransactionConfirmations.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTransactionConfirmationsQueryKey": (()=>getTransactionConfirmationsQueryKey),
    "getTransactionConfirmationsQueryOptions": (()=>getTransactionConfirmationsQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getTransactionConfirmations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getTransactionConfirmations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getTransactionConfirmationsQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { hash, transactionReceipt, scopeKey: _, ...parameters } = queryKey[1];
            if (!hash && !transactionReceipt) throw new Error('hash or transactionReceipt is required');
            const confirmations = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getTransactionConfirmations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionConfirmations"])(config, {
                hash,
                transactionReceipt,
                ...parameters
            });
            return confirmations ?? null;
        },
        queryKey: getTransactionConfirmationsQueryKey(options)
    };
}
function getTransactionConfirmationsQueryKey(options = {}) {
    return [
        'transactionConfirmations',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getTransactionConfirmations.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getTransactionCount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTransactionCount": (()=>getTransactionCount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/getTransactionCount.js [app-client] (ecmascript)");
;
;
async function getTransactionCount(config, parameters) {
    const { address, blockNumber, blockTag, chainId } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionCount"], 'getTransactionCount');
    return action(blockNumber ? {
        address,
        blockNumber
    } : {
        address,
        blockTag
    });
} //# sourceMappingURL=getTransactionCount.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getTransactionCount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTransactionCountQueryKey": (()=>getTransactionCountQueryKey),
    "getTransactionCountQueryOptions": (()=>getTransactionCountQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getTransactionCount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getTransactionCountQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { address, scopeKey: _, ...parameters } = queryKey[1];
            if (!address) throw new Error('address is required');
            const transactionCount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionCount"])(config, {
                ...parameters,
                address
            });
            return transactionCount ?? null;
        },
        queryKey: getTransactionCountQueryKey(options)
    };
}
function getTransactionCountQueryKey(options = {}) {
    return [
        'transactionCount',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getTransactionCount.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getTransactionReceipt.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTransactionReceipt": (()=>getTransactionReceipt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/getTransactionReceipt.js [app-client] (ecmascript)");
;
;
async function getTransactionReceipt(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionReceipt"], 'getTransactionReceipt');
    return action(rest);
} //# sourceMappingURL=getTransactionReceipt.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getTransactionReceipt.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTransactionReceiptQueryKey": (()=>getTransactionReceiptQueryKey),
    "getTransactionReceiptQueryOptions": (()=>getTransactionReceiptQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getTransactionReceiptQueryOptions(config, options = {}) {
    return {
        queryFn ({ queryKey }) {
            const { hash, scopeKey: _, ...parameters } = queryKey[1];
            if (!hash) throw new Error('hash is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionReceipt"])(config, {
                ...parameters,
                hash
            });
        },
        queryKey: getTransactionReceiptQueryKey(options)
    };
}
function getTransactionReceiptQueryKey(options) {
    return [
        'getTransactionReceipt',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=getTransactionReceipt.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/verifyMessage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyMessage": (()=>verifyMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/verifyMessage.js [app-client] (ecmascript)");
;
;
async function verifyMessage(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyMessage"], 'verifyMessage');
    return action(rest);
} //# sourceMappingURL=verifyMessage.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/verifyMessage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyMessageQueryKey": (()=>verifyMessageQueryKey),
    "verifyMessageQueryOptions": (()=>verifyMessageQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$verifyMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/verifyMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function verifyMessageQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { address, message, signature } = queryKey[1];
            if (!address || !message || !signature) throw new Error('address, message, and signature are required');
            const { scopeKey: _, ...parameters } = queryKey[1];
            const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$verifyMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyMessage"])(config, parameters);
            return verified ?? null;
        },
        queryKey: verifyMessageQueryKey(options)
    };
}
function verifyMessageQueryKey(options) {
    return [
        'verifyMessage',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=verifyMessage.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/verifyTypedData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyTypedData": (()=>verifyTypedData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/verifyTypedData.js [app-client] (ecmascript)");
;
;
async function verifyTypedData(config, parameters) {
    const { chainId, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyTypedData"], 'verifyTypedData');
    return action(rest);
} //# sourceMappingURL=verifyTypedData.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/verifyTypedData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyTypedDataQueryKey": (()=>verifyTypedDataQueryKey),
    "verifyTypedDataQueryOptions": (()=>verifyTypedDataQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$verifyTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/verifyTypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function verifyTypedDataQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { address, message, primaryType, signature, types, scopeKey: _, ...parameters } = queryKey[1];
            if (!address) throw new Error('address is required');
            if (!message) throw new Error('message is required');
            if (!primaryType) throw new Error('primaryType is required');
            if (!signature) throw new Error('signature is required');
            if (!types) throw new Error('types is required');
            const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$verifyTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyTypedData"])(config, {
                ...parameters,
                address,
                message,
                primaryType,
                signature,
                types
            });
            return verified ?? null;
        },
        queryKey: verifyTypedDataQueryKey(options)
    };
}
function verifyTypedDataQueryKey(options) {
    return [
        'verifyTypedData',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(options)
    ];
} //# sourceMappingURL=verifyTypedData.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/waitForTransactionReceipt.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "waitForTransactionReceipt": (()=>waitForTransactionReceipt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/getTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/call.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
;
;
;
async function waitForTransactionReceipt(config, parameters) {
    const { chainId, timeout = 0, ...rest } = parameters;
    const client = config.getClient({
        chainId
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForTransactionReceipt"], 'waitForTransactionReceipt');
    const receipt = await action({
        ...rest,
        timeout
    });
    if (receipt.status === 'reverted') {
        const action_getTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransaction"], 'getTransaction');
        const txn = await action_getTransaction({
            hash: receipt.transactionHash
        });
        const action_call = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["call"], 'call');
        const code = await action_call({
            ...txn,
            data: txn.input,
            gasPrice: txn.type !== 'eip1559' ? txn.gasPrice : undefined,
            maxFeePerGas: txn.type === 'eip1559' ? txn.maxFeePerGas : undefined,
            maxPriorityFeePerGas: txn.type === 'eip1559' ? txn.maxPriorityFeePerGas : undefined
        });
        const reason = code?.data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToString"])(`0x${code.data.substring(138)}`) : 'unknown reason';
        throw new Error(reason);
    }
    return {
        ...receipt,
        chainId: client.chain.id
    };
} //# sourceMappingURL=waitForTransactionReceipt.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/waitForTransactionReceipt.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "waitForTransactionReceiptQueryKey": (()=>waitForTransactionReceiptQueryKey),
    "waitForTransactionReceiptQueryOptions": (()=>waitForTransactionReceiptQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/waitForTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function waitForTransactionReceiptQueryOptions(config, options = {}) {
    return {
        async queryFn ({ queryKey }) {
            const { hash, ...parameters } = queryKey[1];
            if (!hash) throw new Error('hash is required');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForTransactionReceipt"])(config, {
                ...parameters,
                onReplaced: options.onReplaced,
                hash
            });
        },
        queryKey: waitForTransactionReceiptQueryKey(options)
    };
}
function waitForTransactionReceiptQueryKey(options = {}) {
    const { onReplaced: _, ...rest } = options;
    return [
        'waitForTransactionReceipt',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(rest)
    ];
} //# sourceMappingURL=waitForTransactionReceipt.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getWalletClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getWalletClient": (()=>getWalletClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/decorators/wallet.js [app-client] (ecmascript)");
;
;
async function getWalletClient(config, parameters = {}) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectorClient"])(config, parameters);
    // @ts-ignore
    return client.extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walletActions"]);
} //# sourceMappingURL=getWalletClient.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getWalletClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getWalletClientQueryKey": (()=>getWalletClientQueryKey),
    "getWalletClientQueryOptions": (()=>getWalletClientQueryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
;
;
function getWalletClientQueryOptions(config, options = {}) {
    return {
        gcTime: 0,
        async queryFn ({ queryKey }) {
            const { connector } = options;
            const { connectorUid: _, scopeKey: _s, ...parameters } = queryKey[1];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWalletClient"])(config, {
                ...parameters,
                connector
            });
        },
        queryKey: getWalletClientQueryKey(options)
    };
}
function getWalletClientQueryKey(options = {}) {
    const { connector, ...parameters } = options;
    return [
        'walletClient',
        {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterQueryOptions"])(parameters),
            connectorUid: connector?.uid
        }
    ];
} //# sourceMappingURL=getWalletClient.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchAsset.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "watchAsset": (()=>watchAsset)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$watchAsset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/wallet/watchAsset.js [app-client] (ecmascript)");
;
;
;
async function watchAsset(config, parameters) {
    const { connector, ...rest } = parameters;
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectorClient"])(config, {
        connector
    });
    const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$watchAsset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchAsset"], 'watchAsset');
    return action(rest);
} //# sourceMappingURL=watchAsset.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/watchAsset.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "watchAssetMutationOptions": (()=>watchAssetMutationOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAsset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchAsset.js [app-client] (ecmascript)");
;
function watchAssetMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAsset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchAsset"])(config, variables);
        },
        mutationKey: [
            'watchAsset'
        ]
    };
} //# sourceMappingURL=watchAsset.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchContractEvent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "watchContractEvent": (()=>watchContractEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/watchContractEvent.js [app-client] (ecmascript)");
;
;
function watchContractEvent(config, parameters) {
    const { syncConnectedChain = config._internal.syncConnectedChain, ...rest } = parameters;
    let unwatch;
    const listener = (chainId)=>{
        if (unwatch) unwatch();
        const client = config.getClient({
            chainId
        });
        const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchContractEvent"], 'watchContractEvent');
        unwatch = action(rest);
        return unwatch;
    };
    // set up listener for transaction changes
    const unlisten = listener(parameters.chainId);
    // set up subscriber for connected chain changes
    let unsubscribe;
    if (syncConnectedChain && !parameters.chainId) unsubscribe = config.subscribe(({ chainId })=>chainId, async (chainId)=>listener(chainId));
    return ()=>{
        unlisten?.();
        unsubscribe?.();
    };
} //# sourceMappingURL=watchContractEvent.js.map
}}),
"[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchPendingTransactions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "watchPendingTransactions": (()=>watchPendingTransactions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchPendingTransactions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/actions/public/watchPendingTransactions.js [app-client] (ecmascript)");
;
;
function watchPendingTransactions(config, parameters) {
    const { syncConnectedChain = config._internal.syncConnectedChain, ...rest } = parameters;
    let unwatch;
    const listener = (chainId)=>{
        if (unwatch) unwatch();
        const client = config.getClient({
            chainId
        });
        const action = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchPendingTransactions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchPendingTransactions"], 'watchPendingTransactions');
        unwatch = action(rest);
        return unwatch;
    };
    // set up listener for transaction changes
    const unlisten = listener(parameters.chainId);
    // set up subscriber for connected chain changes
    let unsubscribe;
    if (syncConnectedChain && !parameters.chainId) unsubscribe = config.subscribe(({ chainId })=>chainId, async (chainId)=>listener(chainId));
    return ()=>{
        unlisten?.();
        unsubscribe?.();
    };
} //# sourceMappingURL=watchPendingTransactions.js.map
}}),
}]);

//# sourceMappingURL=0d696_%40wagmi_core_dist_esm_87c091._.js.map