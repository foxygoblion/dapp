(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/8dbe7_wagmi_dist_esm_b3d7c9._.js", {

"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hydrate.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Hydrate": (()=>Hydrate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/hydrate.js [app-client] (ecmascript)");
'use client';
;
;
function Hydrate(parameters) {
    const { children, config, initialState, reconnectOnMount = true } = parameters;
    const { onMount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrate"])(config, {
        initialState,
        reconnectOnMount
    });
    // Hydrate for non-SSR
    if (!config._internal.ssr) onMount();
    // Hydrate for SSR
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    // biome-ignore lint/correctness/useExhaustiveDependencies: `queryKey` not required
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hydrate.useEffect": ()=>{
            if (!active.current) return;
            if (!config._internal.ssr) return;
            onMount();
            return ({
                "Hydrate.useEffect": ()=>{
                    active.current = false;
                }
            })["Hydrate.useEffect"];
        }
    }["Hydrate.useEffect"], []);
    return children;
} //# sourceMappingURL=hydrate.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/context.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WagmiContext": (()=>WagmiContext),
    "WagmiProvider": (()=>WagmiProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hydrate.js [app-client] (ecmascript)");
'use client';
;
;
const WagmiContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function WagmiProvider(parameters) {
    const { children, config } = parameters;
    const props = {
        value: config
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hydrate"], parameters, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(WagmiContext.Provider, props, children));
} //# sourceMappingURL=context.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/version.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "version": (()=>version)
});
const version = '2.14.11'; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/getVersion.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getVersion": (()=>getVersion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/version.js [app-client] (ecmascript)");
;
const getVersion = ()=>`wagmi@${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]}`; //# sourceMappingURL=getVersion.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/errors/base.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BaseError": (()=>BaseError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/getVersion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/base.js [app-client] (ecmascript)");
;
;
class BaseError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiError'
        });
    }
    get docsBaseUrl() {
        return 'https://wagmi.sh/react';
    }
    get version() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersion"])();
    }
} //# sourceMappingURL=base.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/errors/context.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WagmiProviderNotFoundError": (()=>WagmiProviderNotFoundError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/errors/base.js [app-client] (ecmascript)");
;
class WagmiProviderNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('`useConfig` must be used within `WagmiProvider`.', {
            docsPath: '/api/WagmiProvider'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiProviderNotFoundError'
        });
    }
} //# sourceMappingURL=context.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useConfig": (()=>useConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/errors/context.js [app-client] (ecmascript)");
'use client';
;
;
;
function useConfig(parameters = {}) {
    const config = parameters.config ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiContext"]);
    if (!config) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiProviderNotFoundError"]();
    return config;
} //# sourceMappingURL=useConfig.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useSyncExternalStoreWithTracked": (()=>useSyncExternalStoreWithTracked)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.0.0/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
'use client';
;
;
;
const isPlainObject = (obj)=>typeof obj === 'object' && !Array.isArray(obj);
function useSyncExternalStoreWithTracked(subscribe, getSnapshot, getServerSnapshot = getSnapshot, isEqual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"]) {
    const trackedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])(subscribe, getSnapshot, getServerSnapshot, {
        "useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]": (x)=>x
    }["useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]"], {
        "useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]": (a, b)=>{
            if (isPlainObject(a) && isPlainObject(b) && trackedKeys.current.length) {
                for (const key of trackedKeys.current){
                    const equal = isEqual(a[key], b[key]);
                    if (!equal) return false;
                }
                return true;
            }
            return isEqual(a, b);
        }
    }["useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSyncExternalStoreWithTracked.useMemo": ()=>{
            if (isPlainObject(result)) {
                const trackedResult = {
                    ...result
                };
                let properties = {};
                for (const [key, value] of Object.entries(trackedResult)){
                    properties = {
                        ...properties,
                        [key]: {
                            configurable: false,
                            enumerable: true,
                            get: ({
                                "useSyncExternalStoreWithTracked.useMemo": ()=>{
                                    if (!trackedKeys.current.includes(key)) {
                                        trackedKeys.current.push(key);
                                    }
                                    return value;
                                }
                            })["useSyncExternalStoreWithTracked.useMemo"]
                        }
                    };
                }
                Object.defineProperties(trackedResult, properties);
                return trackedResult;
            }
            return result;
        }
    }["useSyncExternalStoreWithTracked.useMemo"], [
        result
    ]);
} //# sourceMappingURL=useSyncExternalStoreWithTracked.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useAccount": (()=>useAccount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSyncExternalStoreWithTracked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getAccount.js [app-client] (ecmascript)");
'use client';
;
;
;
function useAccount(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSyncExternalStoreWithTracked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithTracked"])({
        "useAccount.useSyncExternalStoreWithTracked": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchAccount"])(config, {
                onChange
            })
    }["useAccount.useSyncExternalStoreWithTracked"], {
        "useAccount.useSyncExternalStoreWithTracked": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccount"])(config)
    }["useAccount.useSyncExternalStoreWithTracked"]);
} //# sourceMappingURL=useAccount.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useAccountEffect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useAccountEffect": (()=>useAccountEffect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchAccount.js [app-client] (ecmascript)");
'use client';
;
;
;
function useAccountEffect(parameters = {}) {
    const { onConnect, onDisconnect } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAccountEffect.useEffect": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchAccount"])(config, {
                onChange (data, prevData) {
                    if ((prevData.status === 'reconnecting' || prevData.status === 'connecting' && prevData.address === undefined) && data.status === 'connected') {
                        const { address, addresses, chain, chainId, connector } = data;
                        const isReconnected = prevData.status === 'reconnecting' || // if `previousAccount.status` is `undefined`, the connector connected immediately.
                        prevData.status === undefined;
                        onConnect?.({
                            address,
                            addresses,
                            chain,
                            chainId,
                            connector,
                            isReconnected
                        });
                    } else if (prevData.status === 'connected' && data.status === 'disconnected') onDisconnect?.();
                }
            });
        }
    }["useAccountEffect.useEffect"], [
        config,
        onConnect,
        onDisconnect
    ]);
} //# sourceMappingURL=useAccountEffect.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useSignMessage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useSignMessage": (()=>useSignMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/signMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
'use client';
;
;
;
function useSignMessage(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signMessageMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        signMessage: mutate,
        signMessageAsync: mutateAsync
    };
} //# sourceMappingURL=useSignMessage.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConnectors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useConnectors": (()=>useConnectors)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchConnectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnectors.js [app-client] (ecmascript)");
'use client';
;
;
;
function useConnectors(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useConnectors.useSyncExternalStore": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchConnectors"])(config, {
                onChange
            })
    }["useConnectors.useSyncExternalStore"], {
        "useConnectors.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectors"])(config)
    }["useConnectors.useSyncExternalStore"], {
        "useConnectors.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectors"])(config)
    }["useConnectors.useSyncExternalStore"]);
} //# sourceMappingURL=useConnectors.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChains.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useChains": (()=>useChains)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchChains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getChains.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useChains(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useChains.useSyncExternalStore": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchChains"])(config, {
                onChange
            })
    }["useChains.useSyncExternalStore"], {
        "useChains.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChains"])(config)
    }["useChains.useSyncExternalStore"], {
        "useChains.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChains"])(config)
    }["useChains.useSyncExternalStore"]);
} //# sourceMappingURL=useChains.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useSwitchChain": (()=>useSwitchChain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$switchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/switchChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChains.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useSwitchChain(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$switchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["switchChainMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        chains: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChains"])({
            config
        }),
        switchChain: mutate,
        switchChainAsync: mutateAsync
    };
} //# sourceMappingURL=useSwitchChain.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConnect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useConnect": (()=>useConnect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/connect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConnectors.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function useConnect(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    // Reset mutation back to an idle state when the connector disconnects.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useConnect.useEffect": ()=>{
            return config.subscribe({
                "useConnect.useEffect": ({ status })=>status
            }["useConnect.useEffect"], {
                "useConnect.useEffect": (status, previousStatus)=>{
                    if (previousStatus === 'connected' && status === 'disconnected') result.reset();
                }
            }["useConnect.useEffect"]);
        }
    }["useConnect.useEffect"], [
        config,
        result.reset
    ]);
    return {
        ...result,
        connect: mutate,
        connectAsync: mutateAsync,
        connectors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectors"])({
            config
        })
    };
} //# sourceMappingURL=useConnect.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useChainId": (()=>useChainId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getChainId.js [app-client] (ecmascript)");
'use client';
;
;
;
function useChainId(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useChainId.useSyncExternalStore": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchChainId"])(config, {
                onChange
            })
    }["useChainId.useSyncExternalStore"], {
        "useChainId.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"])(config)
    }["useChainId.useSyncExternalStore"], {
        "useChainId.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"])(config)
    }["useChainId.useSyncExternalStore"]);
} //# sourceMappingURL=useChainId.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useInfiniteQuery": (()=>useInfiniteQuery),
    "useQuery": (()=>useQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
;
;
;
function useQuery(parameters) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        ...parameters,
        queryKeyHashFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashFn"]
    });
    result.queryKey = parameters.queryKey;
    return result;
}
function useInfiniteQuery(parameters) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        ...parameters,
        queryKeyHashFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashFn"]
    });
    result.queryKey = parameters.queryKey;
    return result;
} //# sourceMappingURL=query.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEnsAddress.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useEnsAddress": (()=>useEnsAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getEnsAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useEnsAddress(parameters = {}) {
    const { name, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsAddressQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(name && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useEnsAddress.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEnsName.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useEnsName": (()=>useEnsName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getEnsName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useEnsName(parameters = {}) {
    const { address, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsNameQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(address && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useEnsName.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEnsAvatar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useEnsAvatar": (()=>useEnsAvatar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getEnsAvatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useEnsAvatar(parameters = {}) {
    const { name, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsAvatarQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(name && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useEnsAvatar.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConnections.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useConnections": (()=>useConnections)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchConnections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getConnections.js [app-client] (ecmascript)");
'use client';
;
;
;
function useConnections(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useConnections.useSyncExternalStore": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchConnections"])(config, {
                onChange
            })
    }["useConnections.useSyncExternalStore"], {
        "useConnections.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnections"])(config)
    }["useConnections.useSyncExternalStore"], {
        "useConnections.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnections"])(config)
    }["useConnections.useSyncExternalStore"]);
} //# sourceMappingURL=useConnections.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useDisconnect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useDisconnect": (()=>useDisconnect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$disconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/disconnect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConnections.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useDisconnect(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$disconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnectMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        connectors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnections"])({
            config
        }).map((connection)=>connection.connector),
        disconnect: mutate,
        disconnectAsync: mutateAsync
    };
} //# sourceMappingURL=useDisconnect.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useBalance.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useBalance": (()=>useBalance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useBalance(parameters = {}) {
    const { address, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBalanceQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(address && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useBalance.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWatchBlockNumber.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useWatchBlockNumber": (()=>useWatchBlockNumber)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchBlockNumber.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useWatchBlockNumber(parameters = {}) {
    const { enabled = true, onBlockNumber, config: _, ...rest } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const configChainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const chainId = parameters.chainId ?? configChainId;
    // TODO(react@19): cleanup
    // biome-ignore lint/correctness/useExhaustiveDependencies: `rest` changes every render so only including properties in dependency array
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWatchBlockNumber.useEffect": ()=>{
            if (!enabled) return;
            if (!onBlockNumber) return;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchBlockNumber"])(config, {
                ...rest,
                chainId,
                onBlockNumber
            });
        }
    }["useWatchBlockNumber.useEffect"], [
        chainId,
        config,
        enabled,
        onBlockNumber,
        ///
        rest.onError,
        rest.emitMissed,
        rest.emitOnBegin,
        rest.poll,
        rest.pollingInterval,
        rest.syncConnectedChain
    ]);
} //# sourceMappingURL=useWatchBlockNumber.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useBlockNumber.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useBlockNumber": (()=>useBlockNumber)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getBlockNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWatchBlockNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
;
;
function useBlockNumber(parameters = {}) {
    const { query = {}, watch } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const configChainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const chainId = parameters.chainId ?? configChainId;
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockNumberQueryOptions"])(config, {
        ...parameters,
        chainId
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchBlockNumber"])({
        ...{
            config: parameters.config,
            chainId: parameters.chainId,
            ...typeof watch === 'object' ? watch : {}
        },
        enabled: Boolean((query.enabled ?? true) && (typeof watch === 'object' ? watch.enabled : watch)),
        onBlockNumber (blockNumber) {
            queryClient.setQueryData(options.queryKey, blockNumber);
        }
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options
    });
} //# sourceMappingURL=useBlockNumber.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWatchBlocks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useWatchBlocks": (()=>useWatchBlocks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchBlocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchBlocks.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useWatchBlocks(parameters = {}) {
    const { enabled = true, onBlock, config: _, ...rest } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const configChainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const chainId = parameters.chainId ?? configChainId;
    // TODO(react@19): cleanup
    // biome-ignore lint/correctness/useExhaustiveDependencies: `rest` changes every render so only including properties in dependency array
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWatchBlocks.useEffect": ()=>{
            if (!enabled) return;
            if (!onBlock) return;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchBlocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchBlocks"])(config, {
                ...rest,
                chainId,
                onBlock
            });
        }
    }["useWatchBlocks.useEffect"], [
        chainId,
        config,
        enabled,
        onBlock,
        ///
        rest.blockTag,
        rest.emitMissed,
        rest.emitOnBegin,
        rest.includeTransactions,
        rest.onError,
        rest.poll,
        rest.pollingInterval,
        rest.syncConnectedChain
    ]);
} //# sourceMappingURL=useWatchBlocks.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useBlock.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useBlock": (()=>useBlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchBlocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWatchBlocks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
;
;
function useBlock(parameters = {}) {
    const { query = {}, watch } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const configChainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const chainId = parameters.chainId ?? configChainId;
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockQueryOptions"])(config, {
        ...parameters,
        chainId
    });
    const enabled = Boolean(query.enabled ?? true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchBlocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchBlocks"])({
        ...{
            config: parameters.config,
            chainId: parameters.chainId,
            ...typeof watch === 'object' ? watch : {}
        },
        enabled: Boolean(enabled && (typeof watch === 'object' ? watch.enabled : watch)),
        onBlock (block) {
            queryClient.setQueryData(options.queryKey, block);
        }
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useBlock.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useBlockTransactionCount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useBlockTransactionCount": (()=>useBlockTransactionCount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBlockTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getBlockTransactionCount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useBlockTransactionCount(parameters = {}) {
    const { query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const configChainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const chainId = parameters.chainId ?? configChainId;
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBlockTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockTransactionCountQueryOptions"])(config, {
        ...parameters,
        chainId
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options
    });
} //# sourceMappingURL=useBlockTransactionCount.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useBytecode.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useBytecode": (()=>useBytecode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBytecode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getBytecode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useBytecode(parameters = {}) {
    const { address, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getBytecode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytecodeQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(address && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useBytecode.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useCall.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useCall": (()=>useCall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/call.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useCall(parameters = {}) {
    const { query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options
    });
} //# sourceMappingURL=useCall.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useClient": (()=>useClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.0.0/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getClient.js [app-client] (ecmascript)");
'use client';
;
;
;
function useClient(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])({
        "useClient.useSyncExternalStoreWithSelector": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchClient"])(config, {
                onChange
            })
    }["useClient.useSyncExternalStoreWithSelector"], {
        "useClient.useSyncExternalStoreWithSelector": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])(config, parameters)
    }["useClient.useSyncExternalStoreWithSelector"], {
        "useClient.useSyncExternalStoreWithSelector": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])(config, parameters)
    }["useClient.useSyncExternalStoreWithSelector"], {
        "useClient.useSyncExternalStoreWithSelector": (x)=>x
    }["useClient.useSyncExternalStoreWithSelector"], {
        "useClient.useSyncExternalStoreWithSelector": (a, b)=>a?.uid === b?.uid
    }["useClient.useSyncExternalStoreWithSelector"]);
} //# sourceMappingURL=useClient.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConnectorClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useConnectorClient": (()=>useConnectorClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getConnectorClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
;
;
;
function useConnectorClient(parameters = {}) {
    const { query = {}, ...rest } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(rest);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { address, connector, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])({
        config
    });
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const activeConnector = parameters.connector ?? connector;
    const { queryKey, ...options } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectorClientQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId,
        connector: activeConnector
    });
    const enabled = Boolean((status === 'connected' || status === 'reconnecting' && activeConnector?.getProvider) && (query.enabled ?? true));
    const addressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(address);
    // biome-ignore lint/correctness/useExhaustiveDependencies: `queryKey` not required
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useConnectorClient.useEffect": ()=>{
            const previousAddress = addressRef.current;
            if (!address && previousAddress) {
                // remove when account is disconnected
                queryClient.removeQueries({
                    queryKey
                });
                addressRef.current = undefined;
            } else if (address !== previousAddress) {
                // invalidate when address changes
                queryClient.invalidateQueries({
                    queryKey
                });
                addressRef.current = address;
            }
        }
    }["useConnectorClient.useEffect"], [
        address,
        queryClient
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        queryKey,
        enabled,
        staleTime: Number.POSITIVE_INFINITY
    });
} //# sourceMappingURL=useConnectorClient.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useInfiniteReadContracts.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useInfiniteReadContracts": (()=>useInfiniteReadContracts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$infiniteReadContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/infiniteReadContracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useInfiniteReadContracts(parameters) {
    const { contracts = [], query } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$infiniteReadContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infiniteReadContractsQueryOptions"])(config, {
        ...parameters,
        chainId,
        contracts: contracts,
        query: query
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useInfiniteQuery"])({
        ...query,
        ...options,
        initialPageParam: options.initialPageParam,
        structuralSharing: query.structuralSharing ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralSharing"]
    });
} //# sourceMappingURL=useInfiniteReadContracts.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useReadContract": (()=>useReadContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/readContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useReadContract(parameters = {}) {
    const { abi, address, functionName, query = {} } = parameters;
    // @ts-ignore
    const code = parameters.code;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContractQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean((address || code) && abi && functionName && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled,
        structuralSharing: query.structuralSharing ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralSharing"]
    });
} //# sourceMappingURL=useReadContract.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useReadContracts.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useReadContracts": (()=>useReadContracts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/readContracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/utils.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function useReadContracts(parameters = {}) {
    const { contracts = [], query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$readContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContractsQueryOptions"])(config, {
        ...parameters,
        chainId
    });
    const enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useReadContracts.useMemo[enabled]": ()=>{
            let isContractsValid = false;
            for (const contract of contracts){
                const { abi, address, functionName } = contract;
                if (!abi || !address || !functionName) {
                    isContractsValid = false;
                    break;
                }
                isContractsValid = true;
            }
            return Boolean(isContractsValid && (query.enabled ?? true));
        }
    }["useReadContracts.useMemo[enabled]"], [
        contracts,
        query.enabled
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...options,
        ...query,
        enabled,
        structuralSharing: query.structuralSharing ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structuralSharing"]
    });
} //# sourceMappingURL=useReadContracts.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useWriteContract": (()=>useWriteContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/writeContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
'use client';
;
;
;
function useWriteContract(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$writeContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeContractMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        writeContract: mutate,
        writeContractAsync: mutateAsync
    };
} //# sourceMappingURL=useWriteContract.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useDeployContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useDeployContract": (()=>useDeployContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$deployContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/deployContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
'use client';
;
;
;
function useDeployContract(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$deployContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deployContractMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        deployContract: mutate,
        deployContractAsync: mutateAsync
    };
} //# sourceMappingURL=useDeployContract.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEnsResolver.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useEnsResolver": (()=>useEnsResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getEnsResolver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useEnsResolver(parameters = {}) {
    const { name, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsResolverQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(name && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useEnsResolver.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEnsText.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useEnsText": (()=>useEnsText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getEnsText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useEnsText(parameters = {}) {
    const { key, name, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getEnsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsTextQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(key && name && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useEnsText.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEstimateFeesPerGas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useEstimateFeesPerGas": (()=>useEstimateFeesPerGas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$estimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/estimateFeesPerGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useEstimateFeesPerGas(parameters = {}) {
    const { query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$estimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateFeesPerGasQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options
    });
} //# sourceMappingURL=useEstimateFeesPerGas.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEstimateGas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useEstimateGas": (()=>useEstimateGas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConnectorClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/estimateGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
;
function useEstimateGas(parameters = {}) {
    const { connector, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const { data: connectorClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectorClient"])({
        config,
        connector,
        query: {
            enabled: parameters.account === undefined
        }
    });
    const account = parameters.account ?? connectorClient?.account;
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateGasQueryOptions"])(config, {
        ...parameters,
        account,
        chainId: parameters.chainId ?? chainId,
        connector
    });
    const enabled = Boolean((account || connector) && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useEstimateGas.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEstimateMaxPriorityFeePerGas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useEstimateMaxPriorityFeePerGas": (()=>useEstimateMaxPriorityFeePerGas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$estimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/estimateMaxPriorityFeePerGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useEstimateMaxPriorityFeePerGas(parameters = {}) {
    const { query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$estimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateMaxPriorityFeePerGasQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options
    });
} //# sourceMappingURL=useEstimateMaxPriorityFeePerGas.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useFeeHistory.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useFeeHistory": (()=>useFeeHistory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getFeeHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getFeeHistory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useFeeHistory(parameters = {}) {
    const { blockCount, rewardPercentiles, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getFeeHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeeHistoryQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(blockCount && rewardPercentiles && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useFeeHistory.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useGasPrice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useGasPrice": (()=>useGasPrice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getGasPrice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useGasPrice(parameters = {}) {
    const { query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const configChainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const chainId = parameters.chainId ?? configChainId;
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGasPriceQueryOptions"])(config, {
        ...parameters,
        chainId
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options
    });
} //# sourceMappingURL=useGasPrice.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/usePrepareTransactionRequest.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "usePrepareTransactionRequest": (()=>usePrepareTransactionRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/prepareTransactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function usePrepareTransactionRequest(parameters = {}) {
    const { to, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareTransactionRequestQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(to && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=usePrepareTransactionRequest.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useProof.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useProof": (()=>useProof)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getProof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getProof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useProof(parameters = {}) {
    const { address, storageKeys, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getProof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProofQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(address && storageKeys && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useProof.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "usePublicClient": (()=>usePublicClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.0.0/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/getPublicClient.js [app-client] (ecmascript)");
'use client';
;
;
;
function usePublicClient(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])({
        "usePublicClient.useSyncExternalStoreWithSelector": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchPublicClient"])(config, {
                onChange
            })
    }["usePublicClient.useSyncExternalStoreWithSelector"], {
        "usePublicClient.useSyncExternalStoreWithSelector": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublicClient"])(config, parameters)
    }["usePublicClient.useSyncExternalStoreWithSelector"], {
        "usePublicClient.useSyncExternalStoreWithSelector": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublicClient"])(config, parameters)
    }["usePublicClient.useSyncExternalStoreWithSelector"], {
        "usePublicClient.useSyncExternalStoreWithSelector": (x)=>x
    }["usePublicClient.useSyncExternalStoreWithSelector"], {
        "usePublicClient.useSyncExternalStoreWithSelector": (a, b)=>a?.uid === b?.uid
    }["usePublicClient.useSyncExternalStoreWithSelector"]);
} //# sourceMappingURL=usePublicClient.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useReconnect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useReconnect": (()=>useReconnect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$reconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/reconnect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
'use client';
;
;
;
function useReconnect(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$reconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reconnectMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        connectors: config.connectors,
        reconnect: mutate,
        reconnectAsync: mutateAsync
    };
} //# sourceMappingURL=useReconnect.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useSendTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useSendTransaction": (()=>useSendTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/sendTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
'use client';
;
;
;
function useSendTransaction(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransactionMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        sendTransaction: mutate,
        sendTransactionAsync: mutateAsync
    };
} //# sourceMappingURL=useSendTransaction.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useSignTypedData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useSignTypedData": (()=>useSignTypedData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$signTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/signTypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
'use client';
;
;
;
function useSignTypedData(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$signTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTypedDataMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        signTypedData: mutate,
        signTypedDataAsync: mutateAsync
    };
} //# sourceMappingURL=useSignTypedData.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useSimulateContract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useSimulateContract": (()=>useSimulateContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConnectorClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$simulateContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/simulateContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
;
function useSimulateContract(parameters = {}) {
    const { abi, address, connector, functionName, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const { data: connectorClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectorClient"])({
        config,
        connector,
        query: {
            enabled: parameters.account === undefined
        }
    });
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$simulateContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulateContractQueryOptions"])(config, {
        ...parameters,
        account: parameters.account ?? connectorClient?.account,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(abi && address && functionName && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useSimulateContract.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useStorageAt.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useStorageAt": (()=>useStorageAt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getStorageAt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getStorageAt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useStorageAt(parameters = {}) {
    const { address, slot, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getStorageAt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorageAtQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(address && slot && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useStorageAt.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useSwitchAccount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useSwitchAccount": (()=>useSwitchAccount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$switchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/switchAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConnections.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useSwitchAccount(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$switchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["switchAccountMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        connectors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnections"])({
            config
        }).map((connection)=>connection.connector),
        switchAccount: mutate,
        switchAccountAsync: mutateAsync
    };
} //# sourceMappingURL=useSwitchAccount.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useToken.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useToken": (()=>useToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useToken(parameters = {}) {
    const { address, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTokenQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(address && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useToken.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useTransaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useTransaction": (()=>useTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useTransaction(parameters = {}) {
    const { blockHash, blockNumber, blockTag, hash, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(!(blockHash && blockNumber && blockTag && hash) && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useTransaction.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useTransactionConfirmations.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useTransactionConfirmations": (()=>useTransactionConfirmations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getTransactionConfirmations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getTransactionConfirmations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useTransactionConfirmations(parameters = {}) {
    const { hash, transactionReceipt, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getTransactionConfirmations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionConfirmationsQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(!(hash && transactionReceipt) && (hash || transactionReceipt) && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useTransactionConfirmations.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useTransactionCount.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useTransactionCount": (()=>useTransactionCount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getTransactionCount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useTransactionCount(parameters = {}) {
    const { address, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionCountQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(address && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useTransactionCount.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useTransactionReceipt.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useTransactionReceipt": (()=>useTransactionReceipt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useTransactionReceipt(parameters = {}) {
    const { hash, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionReceiptQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(hash && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useTransactionReceipt.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useVerifyMessage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useVerifyMessage": (()=>useVerifyMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$verifyMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/verifyMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useVerifyMessage(parameters = {}) {
    const { address, message, signature, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$verifyMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyMessageQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(address && message && signature && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useVerifyMessage.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useVerifyTypedData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useVerifyTypedData": (()=>useVerifyTypedData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$verifyTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/verifyTypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useVerifyTypedData(parameters = {}) {
    const { address, message, primaryType, signature, types, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$verifyTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyTypedDataQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(address && message && primaryType && signature && types && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useVerifyTypedData.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useWaitForTransactionReceipt": (()=>useWaitForTransactionReceipt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/waitForTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function useWaitForTransactionReceipt(parameters = {}) {
    const { hash, query = {} } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForTransactionReceiptQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId
    });
    const enabled = Boolean(hash && (query.enabled ?? true));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        enabled
    });
} //# sourceMappingURL=useWaitForTransactionReceipt.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWalletClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useWalletClient": (()=>useWalletClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
// Almost identical implementation to `useConnectorClient` (except for return type)
// Should update both in tandem
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/getWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/utils/query.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
;
;
;
function useWalletClient(parameters = {}) {
    const { query = {}, ...rest } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(rest);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { address, connector, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])({
        config
    });
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const activeConnector = parameters.connector ?? connector;
    const { queryKey, ...options } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$getWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWalletClientQueryOptions"])(config, {
        ...parameters,
        chainId: parameters.chainId ?? chainId,
        connector: parameters.connector ?? connector
    });
    const enabled = Boolean((status === 'connected' || status === 'reconnecting' && activeConnector?.getProvider) && (query.enabled ?? true));
    const addressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(address);
    // biome-ignore lint/correctness/useExhaustiveDependencies: `queryKey` not required
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWalletClient.useEffect": ()=>{
            const previousAddress = addressRef.current;
            if (!address && previousAddress) {
                // remove when account is disconnected
                queryClient.removeQueries({
                    queryKey
                });
                addressRef.current = undefined;
            } else if (address !== previousAddress) {
                // invalidate when address changes
                queryClient.invalidateQueries({
                    queryKey
                });
                addressRef.current = address;
            }
        }
    }["useWalletClient.useEffect"], [
        address,
        queryClient
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQuery"])({
        ...query,
        ...options,
        queryKey,
        enabled,
        staleTime: Number.POSITIVE_INFINITY
    });
} //# sourceMappingURL=useWalletClient.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWatchAsset.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useWatchAsset": (()=>useWatchAsset)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$watchAsset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/query/watchAsset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.66.8_react@19.0.0/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
'use client';
;
;
;
function useWatchAsset(parameters = {}) {
    const { mutation } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$watchAsset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchAssetMutationOptions"])(config);
    const { mutate, mutateAsync, ...result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...mutation,
        ...mutationOptions
    });
    return {
        ...result,
        watchAsset: mutate,
        watchAssetAsync: mutateAsync
    };
} //# sourceMappingURL=useWatchAsset.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWatchContractEvent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useWatchContractEvent": (()=>useWatchContractEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchContractEvent.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useWatchContractEvent(parameters = {}) {
    const { enabled = true, onLogs, config: _, ...rest } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const configChainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const chainId = parameters.chainId ?? configChainId;
    // TODO(react@19): cleanup
    // biome-ignore lint/correctness/useExhaustiveDependencies: `rest` changes every render so only including properties in dependency array
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWatchContractEvent.useEffect": ()=>{
            if (!enabled) return;
            if (!onLogs) return;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchContractEvent"])(config, {
                ...rest,
                chainId,
                onLogs
            });
        }
    }["useWatchContractEvent.useEffect"], [
        chainId,
        config,
        enabled,
        onLogs,
        ///
        rest.abi,
        rest.address,
        rest.args,
        rest.batch,
        rest.eventName,
        rest.fromBlock,
        rest.onError,
        rest.poll,
        rest.pollingInterval,
        rest.strict,
        rest.syncConnectedChain
    ]);
} //# sourceMappingURL=useWatchContractEvent.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWatchPendingTransactions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useWatchPendingTransactions": (()=>useWatchPendingTransactions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchPendingTransactions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/actions/watchPendingTransactions.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useWatchPendingTransactions(parameters = {}) {
    const { enabled = true, onTransactions, config: _, ...rest } = parameters;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const configChainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])({
        config
    });
    const chainId = parameters.chainId ?? configChainId;
    // TODO(react@19): cleanup
    // biome-ignore lint/correctness/useExhaustiveDependencies: `rest` changes every render so only including properties in dependency array
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWatchPendingTransactions.useEffect": ()=>{
            if (!enabled) return;
            if (!onTransactions) return;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchPendingTransactions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchPendingTransactions"])(config, {
                ...rest,
                chainId,
                onTransactions
            });
        }
    }["useWatchPendingTransactions.useEffect"], [
        chainId,
        config,
        enabled,
        onTransactions,
        ///
        rest.batch,
        rest.onError,
        rest.poll,
        rest.pollingInterval,
        rest.syncConnectedChain
    ]);
} //# sourceMappingURL=useWatchPendingTransactions.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/exports/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
////////////////////////////////////////////////////////////////////////////////
// Context
////////////////////////////////////////////////////////////////////////////////
// biome-ignore lint/performance/noBarrelFile: entrypoint module
__turbopack_esm__({});
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
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/exports/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BaseError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]),
    "ChainNotConfiguredError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]),
    "ConnectorAccountNotFoundError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorAccountNotFoundError"]),
    "ConnectorAlreadyConnectedError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorAlreadyConnectedError"]),
    "ConnectorChainMismatchError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorChainMismatchError"]),
    "ConnectorNotFoundError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorNotFoundError"]),
    "ConnectorUnavailableReconnectingError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUnavailableReconnectingError"]),
    "Context": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiContext"]),
    "Hydrate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hydrate"]),
    "ProviderNotFoundError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProviderNotFoundError"]),
    "SwitchChainNotSupportedError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchChainNotSupportedError"]),
    "WagmiConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiProvider"]),
    "WagmiContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiContext"]),
    "WagmiProvider": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiProvider"]),
    "WagmiProviderNotFoundError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiProviderNotFoundError"]),
    "cookieStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookieStorage"]),
    "cookieToInitialState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookieToInitialState"]),
    "createConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConfig"]),
    "createConnector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConnector"]),
    "createStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStorage"]),
    "custom": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["custom"]),
    "deepEqual": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"]),
    "deserialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deserialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deserialize"]),
    "fallback": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$transports$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallback"]),
    "http": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"]),
    "injected": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injected"]),
    "mock": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mock"]),
    "noopStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noopStorage"]),
    "normalizeChainId": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeChainId"]),
    "parseCookie": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCookie"]),
    "serialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$serialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"]),
    "unstable_connector": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$transports$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_connector"]),
    "useAccount": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"]),
    "useAccountEffect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccountEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccountEffect"]),
    "useBalance": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBalance"]),
    "useBlock": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlock"]),
    "useBlockNumber": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlockNumber"]),
    "useBlockTransactionCount": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBlockTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlockTransactionCount"]),
    "useBytecode": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBytecode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBytecode"]),
    "useCall": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useCall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCall"]),
    "useChainId": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"]),
    "useChains": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChains"]),
    "useClient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClient"]),
    "useConfig": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"]),
    "useConnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnect"]),
    "useConnections": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnections"]),
    "useConnectorClient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectorClient"]),
    "useConnectors": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectors"]),
    "useContractInfiniteReads": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useInfiniteReadContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteReadContracts"]),
    "useContractRead": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]),
    "useContractReads": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContracts"]),
    "useContractWrite": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"]),
    "useDeployContract": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDeployContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeployContract"]),
    "useDisconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisconnect"]),
    "useEnsAddress": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEnsAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnsAddress"]),
    "useEnsAvatar": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEnsAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnsAvatar"]),
    "useEnsName": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEnsName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnsName"]),
    "useEnsResolver": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEnsResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnsResolver"]),
    "useEnsText": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEnsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnsText"]),
    "useEstimateFeesPerGas": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEstimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEstimateFeesPerGas"]),
    "useEstimateGas": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEstimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEstimateGas"]),
    "useEstimateMaxPriorityFeePerGas": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEstimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEstimateMaxPriorityFeePerGas"]),
    "useFeeData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEstimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEstimateFeesPerGas"]),
    "useFeeHistory": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useFeeHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFeeHistory"]),
    "useGasPrice": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGasPrice"]),
    "useInfiniteReadContracts": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useInfiniteReadContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteReadContracts"]),
    "usePrepareTransactionRequest": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePrepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrepareTransactionRequest"]),
    "useProof": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useProof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProof"]),
    "usePublicClient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"]),
    "useReadContract": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]),
    "useReadContracts": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContracts"]),
    "useReconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReconnect"]),
    "useSendTransaction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendTransaction"]),
    "useSignMessage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSignMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignMessage"]),
    "useSignTypedData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSignTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignTypedData"]),
    "useSimulateContract": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSimulateContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSimulateContract"]),
    "useStorageAt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useStorageAt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStorageAt"]),
    "useSwitchAccount": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwitchAccount"]),
    "useSwitchChain": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwitchChain"]),
    "useToken": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToken"]),
    "useTransaction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransaction"]),
    "useTransactionConfirmations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useTransactionConfirmations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionConfirmations"]),
    "useTransactionCount": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionCount"]),
    "useTransactionReceipt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionReceipt"]),
    "useVerifyMessage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useVerifyMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVerifyMessage"]),
    "useVerifyTypedData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useVerifyTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVerifyTypedData"]),
    "useWaitForTransactionReceipt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"]),
    "useWalletClient": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletClient"]),
    "useWatchAsset": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchAsset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchAsset"]),
    "useWatchBlockNumber": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchBlockNumber"]),
    "useWatchBlocks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchBlocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchBlocks"]),
    "useWatchContractEvent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchContractEvent"]),
    "useWatchPendingTransactions": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchPendingTransactions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchPendingTransactions"]),
    "useWriteContract": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"]),
    "version": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]),
    "webSocket": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$webSocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webSocket"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hydrate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hydrate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/errors/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/cookie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/createConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$createConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/connectors/createConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/createStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/transports/custom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deserialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/deserialize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$transports$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/transports/fallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/connectors/injected.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/connectors/mock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$normalizeChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/normalizeChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$serialize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/utils/serialize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$2$2e$16$2e$4_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$transports$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@wagmi+core@2.16.4_@tanstack+query-core@5.66.4_@types+react@19.0.10_react@19.0.0_typesc_cfe4baedb5d5b304ecfb5d23078ed2ad/node_modules/@wagmi/core/dist/esm/transports/connector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccountEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useAccountEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useBlockNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBlockTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useBlockTransactionCount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBytecode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useBytecode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useCall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useCall.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useChains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConnect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConnections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectorClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConnectorClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useConnectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useInfiniteReadContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useInfiniteReadContracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useReadContracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDeployContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useDeployContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useDisconnect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEnsAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEnsAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEnsAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEnsAvatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEnsName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEnsName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEnsResolver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEnsResolver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEnsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEnsText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEstimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEstimateFeesPerGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEstimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEstimateGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useEstimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useEstimateMaxPriorityFeePerGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useFeeHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useFeeHistory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useGasPrice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePrepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/usePrepareTransactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useProof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useProof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useReconnect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useSendTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSignMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useSignMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSignTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useSignTypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSimulateContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useSimulateContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useStorageAt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useStorageAt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useSwitchAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useTransactionConfirmations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useTransactionConfirmations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useTransactionCount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useVerifyMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useVerifyMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useVerifyTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useVerifyTypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchAsset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWatchAsset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWatchBlockNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchBlocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWatchBlocks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWatchContractEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchPendingTransactions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/hooks/useWatchPendingTransactions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$4_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$webSocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.4_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10/node_modules/viem/_esm/clients/transports/webSocket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$14$2e$11_$40$tanstack$2b$query$2d$core$40$5$2e$66$2e$4_$40$tanstack$2b$react$2d$query$40$5$2e$66$2e$8_react$40$19$2e$0$2e$0_$5f40$t_ed681f263f67eaa2ed51fafc48dbe43b$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/wagmi@2.14.11_@tanstack+query-core@5.66.4_@tanstack+react-query@5.66.8_react@19.0.0__@t_ed681f263f67eaa2ed51fafc48dbe43b/node_modules/wagmi/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=8dbe7_wagmi_dist_esm_b3d7c9._.js.map