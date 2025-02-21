(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/301e3_@wagmi_connectors_dist_0b6d7b._.js", {

"[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-W65LBPLT.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Connector": (()=>Connector),
    "__privateAdd": (()=>__privateAdd),
    "__privateGet": (()=>__privateGet),
    "__privateMethod": (()=>__privateMethod),
    "__privateSet": (()=>__privateSet)
});
// src/base.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$4$2e$0$2e$7$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/eventemitter3@4.0.7/node_modules/eventemitter3/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$goerli$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/chains/definitions/goerli.js [app-client] (ecmascript)");
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
;
var Connector = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$4$2e$0$2e$7$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor({ chains = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$goerli$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goerli"]
    ], options }){
        super();
        this.chains = chains;
        this.options = options;
    }
    getBlockExplorerUrls(chain) {
        const { default: blockExplorer, ...blockExplorers } = chain.blockExplorers ?? {};
        if (blockExplorer) return [
            blockExplorer.url,
            ...Object.values(blockExplorers).map((x)=>x.url)
        ];
    }
    isChainUnsupported(chainId) {
        return !this.chains.some((x)=>x.id === chainId);
    }
    setStorage(storage) {
        this.storage = storage;
    }
};
;
}}),
"[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-OQILYQDO.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/utils/normalizeChainId.ts
__turbopack_esm__({
    "normalizeChainId": (()=>normalizeChainId)
});
function normalizeChainId(chainId) {
    if (typeof chainId === "string") return Number.parseInt(chainId, chainId.trim().substring(0, 2) === "0x" ? 16 : 10);
    if (typeof chainId === "bigint") return Number(chainId);
    return chainId;
}
;
}}),
"[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-UGBGYVBH.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/errors.ts
__turbopack_esm__({
    "ChainNotConfiguredForConnectorError": (()=>ChainNotConfiguredForConnectorError),
    "ConnectorNotFoundError": (()=>ConnectorNotFoundError)
});
var ChainNotConfiguredForConnectorError = class extends Error {
    constructor({ chainId, connectorId }){
        super(`Chain "${chainId}" not configured for connector "${connectorId}".`);
        this.name = "ChainNotConfiguredForConnectorError";
    }
};
var ConnectorNotFoundError = class extends Error {
    constructor(){
        super(...arguments);
        this.name = "ConnectorNotFoundError";
        this.message = "Connector not found";
    }
};
;
}}),
"[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-P4NRLOY7.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InjectedConnector": (()=>InjectedConnector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-W65LBPLT.js [app-client] (ecmascript)");
// src/injected.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$OQILYQDO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-OQILYQDO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-UGBGYVBH.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/clients/createWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/clients/transports/custom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
;
;
;
// src/utils/getInjectedName.ts
function getInjectedName(ethereum) {
    if (!ethereum) return "Injected";
    const getName = (provider)=>{
        if (provider.isApexWallet) return "Apex Wallet";
        if (provider.isAvalanche) return "Core Wallet";
        if (provider.isBackpack) return "Backpack";
        if (provider.isBifrost) return "Bifrost Wallet";
        if (provider.isBitKeep) return "BitKeep";
        if (provider.isBitski) return "Bitski";
        if (provider.isBlockWallet) return "BlockWallet";
        if (provider.isBraveWallet) return "Brave Wallet";
        if (provider.isCoin98) return "Coin98 Wallet";
        if (provider.isCoinbaseWallet) return "Coinbase Wallet";
        if (provider.isDawn) return "Dawn Wallet";
        if (provider.isDefiant) return "Defiant";
        if (provider.isDesig) return "Desig Wallet";
        if (provider.isEnkrypt) return "Enkrypt";
        if (provider.isExodus) return "Exodus";
        if (provider.isFordefi) return "Fordefi";
        if (provider.isFrame) return "Frame";
        if (provider.isFrontier) return "Frontier Wallet";
        if (provider.isGamestop) return "GameStop Wallet";
        if (provider.isHaqqWallet) return "HAQQ Wallet";
        if (provider.isHyperPay) return "HyperPay Wallet";
        if (provider.isImToken) return "ImToken";
        if (provider.isHaloWallet) return "Halo Wallet";
        if (provider.isKuCoinWallet) return "KuCoin Wallet";
        if (provider.isMathWallet) return "MathWallet";
        if (provider.isNovaWallet) return "Nova Wallet";
        if (provider.isOkxWallet || provider.isOKExWallet) return "OKX Wallet";
        if (provider.isOktoWallet) return "Okto Wallet";
        if (provider.isOneInchIOSWallet || provider.isOneInchAndroidWallet) return "1inch Wallet";
        if (provider.isOneKey) return "OneKey Wallet";
        if (provider.isOpera) return "Opera";
        if (provider.isPhantom) return "Phantom";
        if (provider.isPortal) return "Ripio Portal";
        if (provider.isRabby) return "Rabby Wallet";
        if (provider.isRainbow) return "Rainbow";
        if (provider.isSafePal) return "SafePal Wallet";
        if (provider.isStatus) return "Status";
        if (provider.isSubWallet) return "SubWallet";
        if (provider.isTalisman) return "Talisman";
        if (provider.isTally) return "Taho";
        if (provider.isTokenPocket) return "TokenPocket";
        if (provider.isTokenary) return "Tokenary";
        if (provider.isTrust || provider.isTrustWallet) return "Trust Wallet";
        if (provider.isTTWallet) return "TTWallet";
        if (provider.isXDEFI) return "XDEFI Wallet";
        if (provider.isZeal) return "Zeal";
        if (provider.isZerion) return "Zerion";
        if (provider.isMetaMask) return "MetaMask";
    };
    if (ethereum.providers?.length) {
        const nameSet = /* @__PURE__ */ new Set();
        let unknownCount = 1;
        for (const provider of ethereum.providers){
            let name = getName(provider);
            if (!name) {
                name = `Unknown Wallet #${unknownCount}`;
                unknownCount += 1;
            }
            nameSet.add(name);
        }
        const names = [
            ...nameSet
        ];
        if (names.length) return names;
        return names[0] ?? "Injected";
    }
    return getName(ethereum) ?? "Injected";
}
// src/injected.ts
var _provider;
var InjectedConnector = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connector"] {
    constructor({ chains, options: options_ } = {}){
        const options = {
            shimDisconnect: true,
            getProvider () {
                if (typeof window === "undefined") return;
                const ethereum = window.ethereum;
                if (ethereum?.providers && ethereum.providers.length > 0) return ethereum.providers[0];
                return ethereum;
            },
            ...options_
        };
        super({
            chains,
            options
        });
        this.id = "injected";
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _provider, void 0);
        this.shimDisconnectKey = `${this.id}.shimDisconnect`;
        this.onAccountsChanged = (accounts)=>{
            if (accounts.length === 0) this.emit("disconnect");
            else this.emit("change", {
                account: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0])
            });
        };
        this.onChainChanged = (chainId)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$OQILYQDO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(chainId);
            const unsupported = this.isChainUnsupported(id);
            this.emit("change", {
                chain: {
                    id,
                    unsupported
                }
            });
        };
        this.onDisconnect = async (error)=>{
            if (error.code === 1013) {
                const provider = await this.getProvider();
                if (provider) {
                    const isAuthorized = await this.getAccount();
                    if (isAuthorized) return;
                }
            }
            this.emit("disconnect");
            if (this.options.shimDisconnect) this.storage?.removeItem(this.shimDisconnectKey);
        };
        const provider = options.getProvider();
        if (typeof options.name === "string") this.name = options.name;
        else if (provider) {
            const detectedName = getInjectedName(provider);
            if (options.name) this.name = options.name(detectedName);
            else {
                if (typeof detectedName === "string") this.name = detectedName;
                else this.name = detectedName[0];
            }
        } else this.name = "Injected";
        this.ready = !!provider;
    }
    async connect({ chainId } = {}) {
        try {
            const provider = await this.getProvider();
            if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
            if (provider.on) {
                provider.on("accountsChanged", this.onAccountsChanged);
                provider.on("chainChanged", this.onChainChanged);
                provider.on("disconnect", this.onDisconnect);
            }
            this.emit("message", {
                type: "connecting"
            });
            const accounts = await provider.request({
                method: "eth_requestAccounts"
            });
            const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]);
            let id = await this.getChainId();
            let unsupported = this.isChainUnsupported(id);
            if (chainId && id !== chainId) {
                const chain = await this.switchChain(chainId);
                id = chain.id;
                unsupported = this.isChainUnsupported(id);
            }
            if (this.options.shimDisconnect) this.storage?.setItem(this.shimDisconnectKey, true);
            return {
                account,
                chain: {
                    id,
                    unsupported
                }
            };
        } catch (error) {
            if (this.isUserRejectedRequestError(error)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
            if (error.code === -32002) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"](error);
            throw error;
        }
    }
    async disconnect() {
        const provider = await this.getProvider();
        if (!provider?.removeListener) return;
        provider.removeListener("accountsChanged", this.onAccountsChanged);
        provider.removeListener("chainChanged", this.onChainChanged);
        provider.removeListener("disconnect", this.onDisconnect);
        if (this.options.shimDisconnect) this.storage?.removeItem(this.shimDisconnectKey);
    }
    async getAccount() {
        const provider = await this.getProvider();
        if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
        const accounts = await provider.request({
            method: "eth_accounts"
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]);
    }
    async getChainId() {
        const provider = await this.getProvider();
        if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
        return provider.request({
            method: "eth_chainId"
        }).then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$OQILYQDO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"]);
    }
    async getProvider() {
        const provider = this.options.getProvider();
        if (provider) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _provider, provider);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider);
    }
    async getWalletClient({ chainId } = {}) {
        const [provider, account] = await Promise.all([
            this.getProvider(),
            this.getAccount()
        ]);
        const chain = this.chains.find((x)=>x.id === chainId);
        if (!provider) throw new Error("provider is required.");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletClient"])({
            account,
            chain,
            transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])(provider)
        });
    }
    async isAuthorized() {
        try {
            if (this.options.shimDisconnect && !this.storage?.getItem(this.shimDisconnectKey)) return false;
            const provider = await this.getProvider();
            if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
            const account = await this.getAccount();
            return !!account;
        } catch  {
            return false;
        }
    }
    async switchChain(chainId) {
        const provider = await this.getProvider();
        if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chainId);
        try {
            await Promise.all([
                provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                        {
                            chainId: id
                        }
                    ]
                }),
                new Promise((res)=>this.on("change", ({ chain })=>{
                        if (chain?.id === chainId) res();
                    }))
            ]);
            return this.chains.find((x)=>x.id === chainId) ?? {
                id: chainId,
                name: `Chain ${id}`,
                network: `${id}`,
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
        } catch (error) {
            const chain = this.chains.find((x)=>x.id === chainId);
            if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainNotConfiguredForConnectorError"]({
                chainId,
                connectorId: this.id
            });
            if (error.code === 4902 || error?.data?.originalError?.code === 4902) {
                try {
                    await provider.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainId: id,
                                chainName: chain.name,
                                nativeCurrency: chain.nativeCurrency,
                                rpcUrls: [
                                    chain.rpcUrls.public?.http[0] ?? ""
                                ],
                                blockExplorerUrls: this.getBlockExplorerUrls(chain)
                            }
                        ]
                    });
                    const currentChainId = await this.getChainId();
                    if (currentChainId !== chainId) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](new Error("User rejected switch after adding network."));
                    return chain;
                } catch (error2) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error2);
                }
            }
            if (this.isUserRejectedRequestError(error)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchChainError"](error);
        }
    }
    async watchAsset({ address, decimals = 18, image, symbol }) {
        const provider = await this.getProvider();
        if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
        return provider.request({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20",
                options: {
                    address,
                    decimals,
                    image,
                    symbol
                }
            }
        });
    }
    isUserRejectedRequestError(error) {
        return error.code === 4001;
    }
};
_provider = new WeakMap();
;
}}),
"[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/safe.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SafeConnector": (()=>SafeConnector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-W65LBPLT.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$safe$2d$global$2b$safe$2d$apps$2d$sdk$40$8$2e$1$2e$0_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$safe$2d$global$2f$safe$2d$apps$2d$sdk$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@safe-global+safe-apps-sdk@8.1.0_typescript@5.7.3/node_modules/@safe-global/safe-apps-sdk/dist/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-UGBGYVBH.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$OQILYQDO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-OQILYQDO.js [app-client] (ecmascript)");
// src/safe.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$safe$2d$global$2b$safe$2d$apps$2d$provider$40$0$2e$18$2e$5_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$safe$2d$global$2f$safe$2d$apps$2d$provider$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@safe-global+safe-apps-provider@0.18.5_typescript@5.7.3/node_modules/@safe-global/safe-apps-provider/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/clients/createWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/clients/transports/custom.js [app-client] (ecmascript)");
;
;
;
;
;
;
var _provider, _sdk;
var SafeConnector = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connector"] {
    constructor({ chains, options: options_ }){
        const options = {
            shimDisconnect: false,
            ...options_
        };
        super({
            chains,
            options
        });
        this.id = "safe";
        this.name = "Safe";
        this.ready = !(typeof window === "undefined") && window?.parent !== window;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _provider, void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _sdk, void 0);
        this.shimDisconnectKey = `${this.id}.shimDisconnect`;
        let SDK = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$safe$2d$global$2b$safe$2d$apps$2d$sdk$40$8$2e$1$2e$0_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$safe$2d$global$2f$safe$2d$apps$2d$sdk$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$safe$2d$global$2b$safe$2d$apps$2d$sdk$40$8$2e$1$2e$0_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$safe$2d$global$2f$safe$2d$apps$2d$sdk$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "function" && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$safe$2d$global$2b$safe$2d$apps$2d$sdk$40$8$2e$1$2e$0_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$safe$2d$global$2f$safe$2d$apps$2d$sdk$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].default === "function") SDK = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$safe$2d$global$2b$safe$2d$apps$2d$sdk$40$8$2e$1$2e$0_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$safe$2d$global$2f$safe$2d$apps$2d$sdk$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].default;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _sdk, new SDK(options));
    }
    async connect() {
        const provider = await this.getProvider();
        if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
        if (provider.on) {
            provider.on("accountsChanged", this.onAccountsChanged);
            provider.on("chainChanged", this.onChainChanged);
            provider.on("disconnect", this.onDisconnect);
        }
        this.emit("message", {
            type: "connecting"
        });
        const account = await this.getAccount();
        const id = await this.getChainId();
        if (this.options.shimDisconnect) this.storage?.setItem(this.shimDisconnectKey, true);
        return {
            account,
            chain: {
                id,
                unsupported: this.isChainUnsupported(id)
            }
        };
    }
    async disconnect() {
        const provider = await this.getProvider();
        if (!provider?.removeListener) return;
        provider.removeListener("accountsChanged", this.onAccountsChanged);
        provider.removeListener("chainChanged", this.onChainChanged);
        provider.removeListener("disconnect", this.onDisconnect);
        if (this.options.shimDisconnect) this.storage?.removeItem(this.shimDisconnectKey);
    }
    async getAccount() {
        const provider = await this.getProvider();
        if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
        const accounts = await provider.request({
            method: "eth_accounts"
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]);
    }
    async getChainId() {
        const provider = await this.getProvider();
        if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$OQILYQDO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(provider.chainId);
    }
    async getProvider() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider)) {
            const safe = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _sdk).safe.getInfo();
            if (!safe) throw new Error("Could not load Safe information");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _provider, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$safe$2d$global$2b$safe$2d$apps$2d$provider$40$0$2e$18$2e$5_typescript$40$5$2e$7$2e$3$2f$node_modules$2f40$safe$2d$global$2f$safe$2d$apps$2d$provider$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeAppProvider"](safe, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _sdk)));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider);
    }
    async getWalletClient({ chainId } = {}) {
        const provider = await this.getProvider();
        const account = await this.getAccount();
        const chain = this.chains.find((x)=>x.id === chainId);
        if (!provider) throw new Error("provider is required.");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletClient"])({
            account,
            chain,
            transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])(provider)
        });
    }
    async isAuthorized() {
        try {
            if (this.options.shimDisconnect && !this.storage?.getItem(this.shimDisconnectKey)) return false;
            const account = await this.getAccount();
            return !!account;
        } catch  {
            return false;
        }
    }
    onAccountsChanged(_accounts) {}
    onChainChanged(_chainId) {}
    onDisconnect() {
        this.emit("disconnect");
    }
};
_provider = new WeakMap();
_sdk = new WeakMap();
;
}}),
"[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/metaMask.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MetaMaskConnector": (()=>MetaMaskConnector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-W65LBPLT.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-UGBGYVBH.js [app-client] (ecmascript)");
// src/metaMask.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$P4NRLOY7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-P4NRLOY7.js [app-client] (ecmascript)");
;
;
;
;
;
var _UNSTABLE_shimOnConnectSelectAccount;
var MetaMaskConnector = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$P4NRLOY7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InjectedConnector"] {
    constructor({ chains, options: options_ } = {}){
        const options = {
            name: "MetaMask",
            shimDisconnect: true,
            getProvider () {
                function getReady(ethereum2) {
                    const isMetaMask = !!ethereum2?.isMetaMask;
                    if (!isMetaMask) return;
                    if (ethereum2.isBraveWallet && !ethereum2._events && !ethereum2._state) return;
                    if (ethereum2.isApexWallet) return;
                    if (ethereum2.isAvalanche) return;
                    if (ethereum2.isBitKeep) return;
                    if (ethereum2.isBlockWallet) return;
                    if (ethereum2.isCoin98) return;
                    if (ethereum2.isFordefi) return;
                    if (ethereum2.isMathWallet) return;
                    if (ethereum2.isOkxWallet || ethereum2.isOKExWallet) return;
                    if (ethereum2.isOneInchIOSWallet || ethereum2.isOneInchAndroidWallet) return;
                    if (ethereum2.isOpera) return;
                    if (ethereum2.isPortal) return;
                    if (ethereum2.isRabby) return;
                    if (ethereum2.isDefiant) return;
                    if (ethereum2.isTokenPocket) return;
                    if (ethereum2.isTokenary) return;
                    if (ethereum2.isZeal) return;
                    if (ethereum2.isZerion) return;
                    return ethereum2;
                }
                if (typeof window === "undefined") return;
                const ethereum = window.ethereum;
                if (ethereum?.providers) return ethereum.providers.find(getReady);
                return getReady(ethereum);
            },
            ...options_
        };
        super({
            chains,
            options
        });
        this.id = "metaMask";
        this.shimDisconnectKey = `${this.id}.shimDisconnect`;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _UNSTABLE_shimOnConnectSelectAccount, void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _UNSTABLE_shimOnConnectSelectAccount, options.UNSTABLE_shimOnConnectSelectAccount);
    }
    async connect({ chainId } = {}) {
        try {
            const provider = await this.getProvider();
            if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]();
            if (provider.on) {
                provider.on("accountsChanged", this.onAccountsChanged);
                provider.on("chainChanged", this.onChainChanged);
                provider.on("disconnect", this.onDisconnect);
            }
            this.emit("message", {
                type: "connecting"
            });
            let account = null;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _UNSTABLE_shimOnConnectSelectAccount) && this.options?.shimDisconnect && !this.storage?.getItem(this.shimDisconnectKey)) {
                account = await this.getAccount().catch(()=>null);
                const isConnected = !!account;
                if (isConnected) try {
                    await provider.request({
                        method: "wallet_requestPermissions",
                        params: [
                            {
                                eth_accounts: {}
                            }
                        ]
                    });
                    account = await this.getAccount();
                } catch (error) {
                    if (this.isUserRejectedRequestError(error)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
                    if (error.code === new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"](error).code) throw error;
                }
            }
            if (!account) {
                const accounts = await provider.request({
                    method: "eth_requestAccounts"
                });
                account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]);
            }
            let id = await this.getChainId();
            let unsupported = this.isChainUnsupported(id);
            if (chainId && id !== chainId) {
                const chain = await this.switchChain(chainId);
                id = chain.id;
                unsupported = this.isChainUnsupported(id);
            }
            if (this.options?.shimDisconnect) this.storage?.setItem(this.shimDisconnectKey, true);
            return {
                account,
                chain: {
                    id,
                    unsupported
                },
                provider
            };
        } catch (error) {
            if (this.isUserRejectedRequestError(error)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
            if (error.code === -32002) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"](error);
            throw error;
        }
    }
};
_UNSTABLE_shimOnConnectSelectAccount = new WeakMap();
;
}}),
"[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/coinbaseWallet.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CoinbaseWalletConnector": (()=>CoinbaseWalletConnector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-W65LBPLT.js [app-client] (ecmascript)");
// src/coinbaseWallet.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$OQILYQDO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-OQILYQDO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/clients/createWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/clients/transports/custom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-UGBGYVBH.js [app-client] (ecmascript)");
;
;
;
;
var _client, _provider;
var CoinbaseWalletConnector = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connector"] {
    constructor({ chains, options }){
        super({
            chains,
            options: {
                reloadOnDisconnect: false,
                ...options
            }
        });
        this.id = "coinbaseWallet";
        this.name = "Coinbase Wallet";
        this.ready = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _client, void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _provider, void 0);
        this.onAccountsChanged = (accounts)=>{
            if (accounts.length === 0) this.emit("disconnect");
            else this.emit("change", {
                account: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0])
            });
        };
        this.onChainChanged = (chainId)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$OQILYQDO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(chainId);
            const unsupported = this.isChainUnsupported(id);
            this.emit("change", {
                chain: {
                    id,
                    unsupported
                }
            });
        };
        this.onDisconnect = ()=>{
            this.emit("disconnect");
        };
    }
    async connect({ chainId } = {}) {
        try {
            const provider = await this.getProvider();
            provider.on("accountsChanged", this.onAccountsChanged);
            provider.on("chainChanged", this.onChainChanged);
            provider.on("disconnect", this.onDisconnect);
            this.emit("message", {
                type: "connecting"
            });
            const accounts = await provider.enable();
            const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]);
            let id = await this.getChainId();
            let unsupported = this.isChainUnsupported(id);
            if (chainId && id !== chainId) {
                const chain = await this.switchChain(chainId);
                id = chain.id;
                unsupported = this.isChainUnsupported(id);
            }
            return {
                account,
                chain: {
                    id,
                    unsupported
                }
            };
        } catch (error) {
            if (/(user closed modal|accounts received is empty)/i.test(error.message)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
            throw error;
        }
    }
    async disconnect() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider)) return;
        const provider = await this.getProvider();
        provider.removeListener("accountsChanged", this.onAccountsChanged);
        provider.removeListener("chainChanged", this.onChainChanged);
        provider.removeListener("disconnect", this.onDisconnect);
        provider.disconnect();
        provider.close();
    }
    async getAccount() {
        const provider = await this.getProvider();
        const accounts = await provider.request({
            method: "eth_accounts"
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]);
    }
    async getChainId() {
        const provider = await this.getProvider();
        const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$OQILYQDO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(provider.chainId);
        return chainId;
    }
    async getProvider() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider)) {
            let CoinbaseWalletSDK = (await __turbopack_require__("[project]/node_modules/.pnpm/@coinbase+wallet-sdk@3.9.3/node_modules/@coinbase/wallet-sdk/dist/index.js [app-client] (ecmascript, async loader)")(__turbopack_import__)).default;
            if (typeof CoinbaseWalletSDK !== "function" && typeof CoinbaseWalletSDK.default === "function") CoinbaseWalletSDK = CoinbaseWalletSDK.default;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _client, new CoinbaseWalletSDK(this.options));
            class WalletProvider {
            }
            class Client {
            }
            const walletExtensionChainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _client).walletExtension?.getChainId();
            const chain = this.chains.find((chain2)=>this.options.chainId ? chain2.id === this.options.chainId : chain2.id === walletExtensionChainId) || this.chains[0];
            const chainId = this.options.chainId || chain?.id;
            const jsonRpcUrl = this.options.jsonRpcUrl || chain?.rpcUrls.default.http[0];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _provider, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _client).makeWeb3Provider(jsonRpcUrl, chainId));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider);
    }
    async getWalletClient({ chainId } = {}) {
        const [provider, account] = await Promise.all([
            this.getProvider(),
            this.getAccount()
        ]);
        const chain = this.chains.find((x)=>x.id === chainId);
        if (!provider) throw new Error("provider is required.");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletClient"])({
            account,
            chain,
            transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])(provider)
        });
    }
    async isAuthorized() {
        try {
            const account = await this.getAccount();
            return !!account;
        } catch  {
            return false;
        }
    }
    async switchChain(chainId) {
        const provider = await this.getProvider();
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chainId);
        try {
            await provider.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: id
                    }
                ]
            });
            return this.chains.find((x)=>x.id === chainId) ?? {
                id: chainId,
                name: `Chain ${id}`,
                network: `${id}`,
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
        } catch (error) {
            const chain = this.chains.find((x)=>x.id === chainId);
            if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$UGBGYVBH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainNotConfiguredForConnectorError"]({
                chainId,
                connectorId: this.id
            });
            if (error.code === 4902) {
                try {
                    await provider.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainId: id,
                                chainName: chain.name,
                                nativeCurrency: chain.nativeCurrency,
                                rpcUrls: [
                                    chain.rpcUrls.public?.http[0] ?? ""
                                ],
                                blockExplorerUrls: this.getBlockExplorerUrls(chain)
                            }
                        ]
                    });
                    return chain;
                } catch (error2) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error2);
                }
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchChainError"](error);
        }
    }
    async watchAsset({ address, decimals = 18, image, symbol }) {
        const provider = await this.getProvider();
        return provider.request({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20",
                options: {
                    address,
                    decimals,
                    image,
                    symbol
                }
            }
        });
    }
};
_client = new WeakMap();
_provider = new WeakMap();
;
}}),
"[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/walletConnectLegacy.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WalletConnectLegacyConnector": (()=>WalletConnectLegacyConnector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-W65LBPLT.js [app-client] (ecmascript)");
// src/walletConnectLegacy.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$OQILYQDO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-OQILYQDO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/clients/createWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/clients/transports/custom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
;
;
var switchChainAllowedRegex = /(imtoken|metamask|rainbow|trust wallet|uniswap wallet|ledger)/i;
var _provider, _switchChain, switchChain_fn;
var WalletConnectLegacyConnector = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connector"] {
    constructor(){
        super(...arguments);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _switchChain);
        this.id = "walletConnectLegacy";
        this.name = "WalletConnectLegacy";
        this.ready = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _provider, void 0);
        this.onAccountsChanged = (accounts)=>{
            if (accounts.length === 0) this.emit("disconnect");
            else this.emit("change", {
                account: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0])
            });
        };
        this.onChainChanged = (chainId)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$OQILYQDO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(chainId);
            const unsupported = this.isChainUnsupported(id);
            this.emit("change", {
                chain: {
                    id,
                    unsupported
                }
            });
        };
        this.onDisconnect = ()=>{
            this.emit("disconnect");
        };
    }
    async connect({ chainId } = {}) {
        try {
            let targetChainId = chainId;
            if (!targetChainId) {
                const store = this.storage?.getItem("store");
                const lastUsedChainId = store?.state?.data?.chain?.id;
                if (lastUsedChainId && !this.isChainUnsupported(lastUsedChainId)) targetChainId = lastUsedChainId;
            }
            const provider = await this.getProvider({
                chainId: targetChainId,
                create: true
            });
            provider.on("accountsChanged", this.onAccountsChanged);
            provider.on("chainChanged", this.onChainChanged);
            provider.on("disconnect", this.onDisconnect);
            setTimeout(()=>this.emit("message", {
                    type: "connecting"
                }), 0);
            const accounts = await provider.enable();
            const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]);
            const id = await this.getChainId();
            const unsupported = this.isChainUnsupported(id);
            const walletName = provider.connector?.peerMeta?.name ?? "";
            if (switchChainAllowedRegex.test(walletName)) this.switchChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _switchChain, switchChain_fn);
            return {
                account,
                chain: {
                    id,
                    unsupported
                }
            };
        } catch (error) {
            if (/user closed modal/i.test(error.message)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
            throw error;
        }
    }
    async disconnect() {
        const provider = await this.getProvider();
        await provider.disconnect();
        provider.removeListener("accountsChanged", this.onAccountsChanged);
        provider.removeListener("chainChanged", this.onChainChanged);
        provider.removeListener("disconnect", this.onDisconnect);
        typeof localStorage !== "undefined" && localStorage.removeItem("walletconnect");
    }
    async getAccount() {
        const provider = await this.getProvider();
        const accounts = provider.accounts;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]);
    }
    async getChainId() {
        const provider = await this.getProvider();
        const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$OQILYQDO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"])(provider.chainId);
        return chainId;
    }
    async getProvider({ chainId, create } = {}) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider) || chainId || create) {
            const rpc = !this.options?.infuraId ? this.chains.reduce((rpc2, chain)=>({
                    ...rpc2,
                    [chain.id]: chain.rpcUrls.default.http[0]
                }), {}) : {};
            const WalletConnectProvider = (await __turbopack_require__("[project]/node_modules/.pnpm/@walletconnect+legacy-provider@2.0.0/node_modules/@walletconnect/legacy-provider/dist/esm/index.js [app-client] (ecmascript, async loader)")(__turbopack_import__)).default;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _provider, new WalletConnectProvider({
                ...this.options,
                chainId,
                rpc: {
                    ...rpc,
                    ...this.options?.rpc
                }
            }));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).http = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).setHttpProvider(chainId);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider);
    }
    async getWalletClient({ chainId } = {}) {
        const [provider, account] = await Promise.all([
            this.getProvider({
                chainId
            }),
            this.getAccount()
        ]);
        const chain = this.chains.find((x)=>x.id === chainId);
        if (!provider) throw new Error("provider is required.");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletClient"])({
            account,
            chain,
            transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])(provider)
        });
    }
    async isAuthorized() {
        try {
            const account = await this.getAccount();
            return !!account;
        } catch  {
            return false;
        }
    }
};
_provider = new WeakMap();
_switchChain = new WeakSet();
switchChain_fn = async function(chainId) {
    const provider = await this.getProvider();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chainId);
    try {
        await Promise.race([
            provider.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: id
                    }
                ]
            }),
            new Promise((res)=>this.on("change", ({ chain })=>{
                    if (chain?.id === chainId) res(chainId);
                }))
        ]);
        return this.chains.find((x)=>x.id === chainId) ?? {
            id: chainId,
            name: `Chain ${id}`,
            network: `${id}`,
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
    } catch (error) {
        const message = typeof error === "string" ? error : error?.message;
        if (/user rejected request/i.test(message)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchChainError"](error);
    }
};
;
}}),
"[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/walletConnect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WalletConnectConnector": (()=>WalletConnectConnector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+connectors@3.1.10_@types+react@19.0.10_react@19.0.0_typescript@5.7.3_viem@1.21.4_typescript@5.7.3_/node_modules/@wagmi/connectors/dist/chunk-W65LBPLT.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/clients/createWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/clients/transports/custom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
// src/walletConnect.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$2$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+utils@2.10.2/node_modules/@walletconnect/utils/dist/index.es.js [app-client] (ecmascript)");
;
;
;
var NAMESPACE = "eip155";
var STORE_KEY = "store";
var REQUESTED_CHAINS_KEY = "requestedChains";
var ADD_ETH_CHAIN_METHOD = "wallet_addEthereumChain";
var _provider, _initProviderPromise, _createProvider, createProvider_fn, _initProvider, initProvider_fn, _isChainsStale, isChainsStale_fn, _setupListeners, setupListeners_fn, _removeListeners, removeListeners_fn, _setRequestedChainsIds, setRequestedChainsIds_fn, _getRequestedChainsIds, getRequestedChainsIds_fn, _getNamespaceChainsIds, getNamespaceChainsIds_fn, _getNamespaceMethods, getNamespaceMethods_fn;
var WalletConnectConnector = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connector"] {
    constructor(config){
        super({
            ...config,
            options: {
                isNewChainsStale: true,
                ...config.options
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _createProvider);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _initProvider);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _isChainsStale);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _setupListeners);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _removeListeners);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _setRequestedChainsIds);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _getRequestedChainsIds);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _getNamespaceChainsIds);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _getNamespaceMethods);
        this.id = "walletConnect";
        this.name = "WalletConnect";
        this.ready = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _provider, void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _initProviderPromise, void 0);
        this.onAccountsChanged = (accounts)=>{
            if (accounts.length === 0) this.emit("disconnect");
            else this.emit("change", {
                account: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0])
            });
        };
        this.onChainChanged = (chainId)=>{
            const id = Number(chainId);
            const unsupported = this.isChainUnsupported(id);
            this.emit("change", {
                chain: {
                    id,
                    unsupported
                }
            });
        };
        this.onDisconnect = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, []);
            this.emit("disconnect");
        };
        this.onDisplayUri = (uri)=>{
            this.emit("message", {
                type: "display_uri",
                data: uri
            });
        };
        this.onConnect = ()=>{
            this.emit("connect", {});
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _createProvider, createProvider_fn).call(this);
    }
    async connect({ chainId, pairingTopic } = {}) {
        try {
            let targetChainId = chainId;
            if (!targetChainId) {
                const store = this.storage?.getItem(STORE_KEY);
                const lastUsedChainId = store?.state?.data?.chain?.id;
                if (lastUsedChainId && !this.isChainUnsupported(lastUsedChainId)) targetChainId = lastUsedChainId;
                else targetChainId = this.chains[0]?.id;
            }
            if (!targetChainId) throw new Error("No chains found on connector.");
            const provider = await this.getProvider();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _setupListeners, setupListeners_fn).call(this);
            const isChainsStale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _isChainsStale, isChainsStale_fn).call(this);
            if (provider.session && isChainsStale) await provider.disconnect();
            if (!provider.session || isChainsStale) {
                const optionalChains = this.chains.filter((chain)=>chain.id !== targetChainId).map((optionalChain)=>optionalChain.id);
                this.emit("message", {
                    type: "connecting"
                });
                await provider.connect({
                    pairingTopic,
                    optionalChains: [
                        targetChainId,
                        ...optionalChains
                    ]
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, this.chains.map(({ id: id2 })=>id2));
            }
            const accounts = await provider.enable();
            const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]);
            const id = await this.getChainId();
            const unsupported = this.isChainUnsupported(id);
            return {
                account,
                chain: {
                    id,
                    unsupported
                }
            };
        } catch (error) {
            if (/user rejected/i.test(error?.message)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
            }
            throw error;
        }
    }
    async disconnect() {
        const provider = await this.getProvider();
        try {
            await provider.disconnect();
        } catch (error) {
            if (!/No matching key/i.test(error.message)) throw error;
        } finally{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _removeListeners, removeListeners_fn).call(this);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, []);
        }
    }
    async getAccount() {
        const { accounts } = await this.getProvider();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(accounts[0]);
    }
    async getChainId() {
        const { chainId } = await this.getProvider();
        return chainId;
    }
    async getProvider({ chainId } = {}) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider)) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _createProvider, createProvider_fn).call(this);
        if (chainId) await this.switchChain(chainId);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider);
    }
    async getWalletClient({ chainId } = {}) {
        const [provider, account] = await Promise.all([
            this.getProvider({
                chainId
            }),
            this.getAccount()
        ]);
        const chain = this.chains.find((x)=>x.id === chainId);
        if (!provider) throw new Error("provider is required.");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletClient"])({
            account,
            chain,
            transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"])(provider)
        });
    }
    async isAuthorized() {
        try {
            const [account, provider] = await Promise.all([
                this.getAccount(),
                this.getProvider()
            ]);
            const isChainsStale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _isChainsStale, isChainsStale_fn).call(this);
            if (!account) return false;
            if (isChainsStale && provider.session) {
                try {
                    await provider.disconnect();
                } catch  {}
                return false;
            }
            return true;
        } catch  {
            return false;
        }
    }
    async switchChain(chainId) {
        const chain = this.chains.find((chain2)=>chain2.id === chainId);
        if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchChainError"](new Error("chain not found on connector."));
        try {
            const provider = await this.getProvider();
            const namespaceChains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _getNamespaceChainsIds, getNamespaceChainsIds_fn).call(this);
            const namespaceMethods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _getNamespaceMethods, getNamespaceMethods_fn).call(this);
            const isChainApproved = namespaceChains.includes(chainId);
            if (!isChainApproved && namespaceMethods.includes(ADD_ETH_CHAIN_METHOD)) {
                await provider.request({
                    method: ADD_ETH_CHAIN_METHOD,
                    params: [
                        {
                            chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chain.id),
                            blockExplorerUrls: [
                                chain.blockExplorers?.default?.url
                            ],
                            chainName: chain.name,
                            nativeCurrency: chain.nativeCurrency,
                            rpcUrls: [
                                ...chain.rpcUrls.default.http
                            ]
                        }
                    ]
                });
                const requestedChains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _getRequestedChainsIds, getRequestedChainsIds_fn).call(this);
                requestedChains.push(chainId);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, requestedChains);
            }
            await provider.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chainId)
                    }
                ]
            });
            return chain;
        } catch (error) {
            const message = typeof error === "string" ? error : error?.message;
            if (/user rejected request/i.test(message)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](error);
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchChainError"](error);
        }
    }
};
_provider = new WeakMap();
_initProviderPromise = new WeakMap();
_createProvider = new WeakSet();
createProvider_fn = async function() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _initProviderPromise) && typeof window !== "undefined") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _initProviderPromise, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _initProvider, initProvider_fn).call(this));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _initProviderPromise);
};
_initProvider = new WeakSet();
initProvider_fn = async function() {
    const { EthereumProvider } = await __turbopack_require__("[project]/node_modules/.pnpm/@walletconnect+ethereum-provider@2.10.6_@types+react@19.0.10_react@19.0.0/node_modules/@walletconnect/ethereum-provider/dist/index.es.js [app-client] (ecmascript, async loader)")(__turbopack_import__);
    const optionalChains = this.chains.map(({ id })=>id);
    if (optionalChains.length) {
        const { projectId, showQrModal = true, qrModalOptions, metadata, relayUrl } = this.options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateSet"])(this, _provider, await EthereumProvider.init({
            showQrModal,
            qrModalOptions,
            projectId,
            optionalChains,
            rpcMap: Object.fromEntries(this.chains.map((chain)=>[
                    chain.id,
                    chain.rpcUrls.default.http[0]
                ])),
            metadata,
            relayUrl
        }));
    }
};
_isChainsStale = new WeakSet();
isChainsStale_fn = function() {
    const namespaceMethods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _getNamespaceMethods, getNamespaceMethods_fn).call(this);
    if (namespaceMethods.includes(ADD_ETH_CHAIN_METHOD)) return false;
    if (!this.options.isNewChainsStale) return false;
    const requestedChains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _getRequestedChainsIds, getRequestedChainsIds_fn).call(this);
    const connectorChains = this.chains.map(({ id })=>id);
    const namespaceChains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _getNamespaceChainsIds, getNamespaceChainsIds_fn).call(this);
    if (namespaceChains.length && !namespaceChains.some((id)=>connectorChains.includes(id))) return false;
    return !connectorChains.every((id)=>requestedChains.includes(id));
};
_setupListeners = new WeakSet();
setupListeners_fn = function() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider)) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _removeListeners, removeListeners_fn).call(this);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).on("accountsChanged", this.onAccountsChanged);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).on("chainChanged", this.onChainChanged);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).on("disconnect", this.onDisconnect);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).on("session_delete", this.onDisconnect);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).on("display_uri", this.onDisplayUri);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).on("connect", this.onConnect);
};
_removeListeners = new WeakSet();
removeListeners_fn = function() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider)) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).removeListener("accountsChanged", this.onAccountsChanged);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).removeListener("chainChanged", this.onChainChanged);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).removeListener("disconnect", this.onDisconnect);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).removeListener("session_delete", this.onDisconnect);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).removeListener("display_uri", this.onDisplayUri);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).removeListener("connect", this.onConnect);
};
_setRequestedChainsIds = new WeakSet();
setRequestedChainsIds_fn = function(chains) {
    this.storage?.setItem(REQUESTED_CHAINS_KEY, chains);
};
_getRequestedChainsIds = new WeakSet();
getRequestedChainsIds_fn = function() {
    return this.storage?.getItem(REQUESTED_CHAINS_KEY) ?? [];
};
_getNamespaceChainsIds = new WeakSet();
getNamespaceChainsIds_fn = function() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider)) return [];
    const namespaces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).session?.namespaces;
    if (!namespaces) return [];
    const normalizedNamespaces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$2$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNamespaces"])(namespaces);
    const chainIds = normalizedNamespaces[NAMESPACE]?.chains?.map((chain)=>parseInt(chain.split(":")[1] || ""));
    return chainIds ?? [];
};
_getNamespaceMethods = new WeakSet();
getNamespaceMethods_fn = function() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider)) return [];
    const namespaces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$connectors$40$3$2e$1$2e$10_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$3_viem$40$1$2e$21$2e$4_typescript$40$5$2e$7$2e$3_$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$chunk$2d$W65LBPLT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__privateGet"])(this, _provider).session?.namespaces;
    if (!namespaces) return [];
    const normalizedNamespaces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$2$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeNamespaces"])(namespaces);
    const methods = normalizedNamespaces[NAMESPACE]?.methods;
    return methods ?? [];
};
;
}}),
}]);

//# sourceMappingURL=301e3_%40wagmi_connectors_dist_0b6d7b._.js.map