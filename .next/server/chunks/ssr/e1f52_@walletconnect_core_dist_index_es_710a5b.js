module.exports = {

"[project]/node_modules/.pnpm/@walletconnect+core@2.10.6/node_modules/@walletconnect/core/dist/index.es.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CORE_CONTEXT": (()=>Q),
    "CORE_DEFAULT": (()=>Qe),
    "CORE_PROTOCOL": (()=>le),
    "CORE_STORAGE_OPTIONS": (()=>Ze),
    "CORE_STORAGE_PREFIX": (()=>O),
    "CORE_VERSION": (()=>Xe),
    "CRYPTO_CLIENT_SEED": (()=>de),
    "CRYPTO_CONTEXT": (()=>et),
    "CRYPTO_JWT_TTL": (()=>tt),
    "Core": (()=>Nr),
    "Crypto": (()=>Tt),
    "EXPIRER_CONTEXT": (()=>Ct),
    "EXPIRER_DEFAULT_TTL": (()=>yr),
    "EXPIRER_EVENTS": (()=>v),
    "EXPIRER_STORAGE_VERSION": (()=>Rt),
    "Expirer": (()=>Bt),
    "HISTORY_CONTEXT": (()=>vt),
    "HISTORY_EVENTS": (()=>R),
    "HISTORY_STORAGE_VERSION": (()=>It),
    "JsonRpcHistory": (()=>Kt),
    "KEYCHAIN_CONTEXT": (()=>it),
    "KEYCHAIN_STORAGE_VERSION": (()=>st),
    "KeyChain": (()=>St),
    "MESSAGES_CONTEXT": (()=>rt),
    "MESSAGES_STORAGE_VERSION": (()=>nt),
    "MessageTracker": (()=>Pt),
    "PAIRING_CONTEXT": (()=>Et),
    "PAIRING_DEFAULT_TTL": (()=>Dr),
    "PAIRING_EVENTS": (()=>V),
    "PAIRING_RPC_OPTS": (()=>F),
    "PAIRING_STORAGE_VERSION": (()=>wt),
    "PENDING_SUB_RESOLUTION_TIMEOUT": (()=>ft),
    "PUBLISHER_CONTEXT": (()=>at),
    "PUBLISHER_DEFAULT_TTL": (()=>ot),
    "Pairing": (()=>kt),
    "RELAYER_CONTEXT": (()=>ut),
    "RELAYER_DEFAULT_LOGGER": (()=>ct),
    "RELAYER_DEFAULT_PROTOCOL": (()=>ht),
    "RELAYER_DEFAULT_RELAY_URL": (()=>ge),
    "RELAYER_EVENTS": (()=>D),
    "RELAYER_FAILOVER_RELAY_URL": (()=>pe),
    "RELAYER_PROVIDER_EVENTS": (()=>P),
    "RELAYER_RECONNECT_TIMEOUT": (()=>dt),
    "RELAYER_SDK_VERSION": (()=>gt),
    "RELAYER_STORAGE_OPTIONS": (()=>gr),
    "RELAYER_SUBSCRIBER_SUFFIX": (()=>lt),
    "RELAYER_TRANSPORT_CUTOFF": (()=>pt),
    "Relayer": (()=>Ut),
    "STORE_STORAGE_VERSION": (()=>Dt),
    "SUBSCRIBER_CONTEXT": (()=>mt),
    "SUBSCRIBER_DEFAULT_TTL": (()=>pr),
    "SUBSCRIBER_EVENTS": (()=>w),
    "SUBSCRIBER_STORAGE_VERSION": (()=>bt),
    "Store": (()=>Mt),
    "Subscriber": (()=>At),
    "TRUSTED_VERIFY_URLS": (()=>_t),
    "VERIFY_CONTEXT": (()=>Z),
    "VERIFY_FALLBACK_SERVER": (()=>ee),
    "VERIFY_SERVER": (()=>$),
    "Verify": (()=>Vt),
    "WALLETCONNECT_CLIENT_ID": (()=>yt),
    "default": (()=>te)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_import__("[externals]/events [external] (events, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$keyvaluestorage$40$1$2e$1$2e$1$2f$node_modules$2f40$walletconnect$2f$keyvaluestorage$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+keyvaluestorage@1.1.1/node_modules/@walletconnect/keyvaluestorage/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$heartbeat$40$1$2e$2$2e$1$2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+heartbeat@1.2.1/node_modules/@walletconnect/heartbeat/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+logger@2.1.2/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$safe$2d$json$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+safe-json@1.0.2/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$relay$2d$auth$40$1$2e$1$2e$0$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+relay-auth@1.1.0/node_modules/@walletconnect/relay-auth/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$1$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/uint8arrays@3.1.1/node_modules/uint8arrays/esm/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+time@1.0.2/node_modules/@walletconnect/time/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$provider$40$1$2e$0$2e$13$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+jsonrpc-provider@1.0.13/node_modules/@walletconnect/jsonrpc-provider/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+jsonrpc-utils@1.0.8/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$ws$2d$connection$40$1$2e$0$2e$14$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$ws$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+jsonrpc-ws-connection@1.0.14/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2e$isequal$40$4$2e$5$2e$0$2f$node_modules$2f$lodash$2e$isequal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash.isequal@4.5.0/node_modules/lodash.isequal/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+utils@2.10.6/node_modules/@walletconnect/utils/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+logger@2.1.2/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$1$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uint8arrays@3.1.1/node_modules/uint8arrays/esm/src/to-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$types$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+types@2.10.6/node_modules/@walletconnect/types/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+jsonrpc-utils@1.0.8/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$7$2e$11$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/pino@7.11.0/node_modules/pino/pino.js [app-ssr] (ecmascript) <export default as pino>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$provider$40$1$2e$0$2e$13$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+jsonrpc-provider@1.0.13/node_modules/@walletconnect/jsonrpc-provider/dist/esm/provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+jsonrpc-utils@1.0.8/node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js [app-ssr] (ecmascript)");
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
function Vi(r, e) {
    if (r.length >= 255) throw new TypeError("Alphabet too long");
    for(var t = new Uint8Array(256), i = 0; i < t.length; i++)t[i] = 255;
    for(var s = 0; s < r.length; s++){
        var n = r.charAt(s), o = n.charCodeAt(0);
        if (t[o] !== 255) throw new TypeError(n + " is ambiguous");
        t[o] = s;
    }
    var a = r.length, h = r.charAt(0), l = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
    function p(u) {
        if (u instanceof Uint8Array || (ArrayBuffer.isView(u) ? u = new Uint8Array(u.buffer, u.byteOffset, u.byteLength) : Array.isArray(u) && (u = Uint8Array.from(u))), !(u instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (u.length === 0) return "";
        for(var m = 0, z = 0, I = 0, _ = u.length; I !== _ && u[I] === 0;)I++, m++;
        for(var S = (_ - I) * d + 1 >>> 0, b = new Uint8Array(S); I !== _;){
            for(var T = u[I], A = 0, C = S - 1; (T !== 0 || A < z) && C !== -1; C--, A++)T += 256 * b[C] >>> 0, b[C] = T % a >>> 0, T = T / a >>> 0;
            if (T !== 0) throw new Error("Non-zero carry");
            z = A, I++;
        }
        for(var x = S - z; x !== S && b[x] === 0;)x++;
        for(var j = h.repeat(m); x < S; ++x)j += r.charAt(b[x]);
        return j;
    }
    function y(u) {
        if (typeof u != "string") throw new TypeError("Expected String");
        if (u.length === 0) return new Uint8Array;
        var m = 0;
        if (u[m] !== " ") {
            for(var z = 0, I = 0; u[m] === h;)z++, m++;
            for(var _ = (u.length - m) * l + 1 >>> 0, S = new Uint8Array(_); u[m];){
                var b = t[u.charCodeAt(m)];
                if (b === 255) return;
                for(var T = 0, A = _ - 1; (b !== 0 || T < I) && A !== -1; A--, T++)b += a * S[A] >>> 0, S[A] = b % 256 >>> 0, b = b / 256 >>> 0;
                if (b !== 0) throw new Error("Non-zero carry");
                I = T, m++;
            }
            if (u[m] !== " ") {
                for(var C = _ - I; C !== _ && S[C] === 0;)C++;
                for(var x = new Uint8Array(z + (_ - C)), j = z; C !== _;)x[j++] = S[C++];
                return x;
            }
        }
    }
    function M(u) {
        var m = y(u);
        if (m) return m;
        throw new Error(`Non-${e} character`);
    }
    return {
        encode: p,
        decodeUnsafe: y,
        decode: M
    };
}
var qi = Vi, ji = qi;
const Ne = (r)=>{
    if (r instanceof Uint8Array && r.constructor.name === "Uint8Array") return r;
    if (r instanceof ArrayBuffer) return new Uint8Array(r);
    if (ArrayBuffer.isView(r)) return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    throw new Error("Unknown type, must be binary type");
}, Gi = (r)=>new TextEncoder().encode(r), Yi = (r)=>new TextDecoder().decode(r);
class Hi {
    constructor(e, t, i){
        this.name = e, this.prefix = t, this.baseEncode = i;
    }
    encode(e) {
        if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type");
    }
}
class Ji {
    constructor(e, t, i){
        if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length));
        } else throw Error("Can only multibase decode strings");
    }
    or(e) {
        return Ue(this, e);
    }
}
class Wi {
    constructor(e){
        this.decoders = e;
    }
    or(e) {
        return Ue(this, e);
    }
    decode(e) {
        const t = e[0], i = this.decoders[t];
        if (i) return i.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
}
const Ue = (r, e)=>new Wi({
        ...r.decoders || {
            [r.prefix]: r
        },
        ...e.decoders || {
            [e.prefix]: e
        }
    });
class Xi {
    constructor(e, t, i, s){
        this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new Hi(e, t, i), this.decoder = new Ji(e, t, s);
    }
    encode(e) {
        return this.encoder.encode(e);
    }
    decode(e) {
        return this.decoder.decode(e);
    }
}
const X = ({ name: r, prefix: e, encode: t, decode: i })=>new Xi(r, e, t, i), B = ({ prefix: r, name: e, alphabet: t })=>{
    const { encode: i, decode: s } = ji(t, e);
    return X({
        prefix: r,
        name: e,
        encode: i,
        decode: (n)=>Ne(s(n))
    });
}, Qi = (r, e, t, i)=>{
    const s = {};
    for(let d = 0; d < e.length; ++d)s[e[d]] = d;
    let n = r.length;
    for(; r[n - 1] === "=";)--n;
    const o = new Uint8Array(n * t / 8 | 0);
    let a = 0, h = 0, l = 0;
    for(let d = 0; d < n; ++d){
        const p = s[r[d]];
        if (p === void 0) throw new SyntaxError(`Non-${i} character`);
        h = h << t | p, a += t, a >= 8 && (a -= 8, o[l++] = 255 & h >> a);
    }
    if (a >= t || 255 & h << 8 - a) throw new SyntaxError("Unexpected end of data");
    return o;
}, Zi = (r, e, t)=>{
    const i = e[e.length - 1] === "=", s = (1 << t) - 1;
    let n = "", o = 0, a = 0;
    for(let h = 0; h < r.length; ++h)for(a = a << 8 | r[h], o += 8; o > t;)o -= t, n += e[s & a >> o];
    if (o && (n += e[s & a << t - o]), i) for(; n.length * t & 7;)n += "=";
    return n;
}, g = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i })=>X({
        prefix: e,
        name: r,
        encode (s) {
            return Zi(s, i, t);
        },
        decode (s) {
            return Qi(s, i, t, r);
        }
    }), es = X({
    prefix: "\0",
    name: "identity",
    encode: (r)=>Yi(r),
    decode: (r)=>Gi(r)
});
var ts = Object.freeze({
    __proto__: null,
    identity: es
});
const is = g({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var ss = Object.freeze({
    __proto__: null,
    base2: is
});
const rs = g({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var ns = Object.freeze({
    __proto__: null,
    base8: rs
});
const os = B({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var as = Object.freeze({
    __proto__: null,
    base10: os
});
const hs = g({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
}), cs = g({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var us = Object.freeze({
    __proto__: null,
    base16: hs,
    base16upper: cs
});
const ls = g({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
}), ds = g({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
}), gs = g({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
}), ps = g({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
}), Ds = g({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
}), ys = g({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
}), ms = g({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
}), bs = g({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
}), fs = g({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var Es = Object.freeze({
    __proto__: null,
    base32: ls,
    base32upper: ds,
    base32pad: gs,
    base32padupper: ps,
    base32hex: Ds,
    base32hexupper: ys,
    base32hexpad: ms,
    base32hexpadupper: bs,
    base32z: fs
});
const ws = B({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), vs = B({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var Is = Object.freeze({
    __proto__: null,
    base36: ws,
    base36upper: vs
});
const Cs = B({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Rs = B({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var _s = Object.freeze({
    __proto__: null,
    base58btc: Cs,
    base58flickr: Rs
});
const Ss = g({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
}), Ts = g({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
}), Ps = g({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
}), xs = g({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var Os = Object.freeze({
    __proto__: null,
    base64: Ss,
    base64pad: Ts,
    base64url: Ps,
    base64urlpad: xs
});
const Le = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), As = Le.reduce((r, e, t)=>(r[t] = e, r), []), zs = Le.reduce((r, e, t)=>(r[e.codePointAt(0)] = t, r), []);
function Ns(r) {
    return r.reduce((e, t)=>(e += As[t], e), "");
}
function Us(r) {
    const e = [];
    for (const t of r){
        const i = zs[t.codePointAt(0)];
        if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
        e.push(i);
    }
    return new Uint8Array(e);
}
const Ls = X({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: Ns,
    decode: Us
});
var Fs = Object.freeze({
    __proto__: null,
    base256emoji: Ls
}), $s = $e, Fe = 128, Ms = 127, ks = ~Ms, Ks = Math.pow(2, 31);
function $e(r, e, t) {
    e = e || [], t = t || 0;
    for(var i = t; r >= Ks;)e[t++] = r & 255 | Fe, r /= 128;
    for(; r & ks;)e[t++] = r & 255 | Fe, r >>>= 7;
    return e[t] = r | 0, $e.bytes = t - i + 1, e;
}
var Bs = he, Vs = 128, Me = 127;
function he(r, i) {
    var t = 0, i = i || 0, s = 0, n = i, o, a = r.length;
    do {
        if (n >= a) throw he.bytes = 0, new RangeError("Could not decode varint");
        o = r[n++], t += s < 28 ? (o & Me) << s : (o & Me) * Math.pow(2, s), s += 7;
    }while (o >= Vs)
    return he.bytes = n - i, t;
}
var qs = Math.pow(2, 7), js = Math.pow(2, 14), Gs = Math.pow(2, 21), Ys = Math.pow(2, 28), Hs = Math.pow(2, 35), Js = Math.pow(2, 42), Ws = Math.pow(2, 49), Xs = Math.pow(2, 56), Qs = Math.pow(2, 63), Zs = function(r) {
    return r < qs ? 1 : r < js ? 2 : r < Gs ? 3 : r < Ys ? 4 : r < Hs ? 5 : r < Js ? 6 : r < Ws ? 7 : r < Xs ? 8 : r < Qs ? 9 : 10;
}, er = {
    encode: $s,
    decode: Bs,
    encodingLength: Zs
}, ke = er;
const Ke = (r, e, t = 0)=>(ke.encode(r, e, t), e), Be = (r)=>ke.encodingLength(r), ce = (r, e)=>{
    const t = e.byteLength, i = Be(r), s = i + Be(t), n = new Uint8Array(s + t);
    return Ke(r, n, 0), Ke(t, n, i), n.set(e, s), new tr(r, t, e, n);
};
class tr {
    constructor(e, t, i, s){
        this.code = e, this.size = t, this.digest = i, this.bytes = s;
    }
}
const Ve = ({ name: r, code: e, encode: t })=>new ir(r, e, t);
class ir {
    constructor(e, t, i){
        this.name = e, this.code = t, this.encode = i;
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? ce(this.code, t) : t.then((i)=>ce(this.code, i));
        } else throw Error("Unknown type, must be binary type");
    }
}
const qe = (r)=>async (e)=>new Uint8Array(await crypto.subtle.digest(r, e)), sr = Ve({
    name: "sha2-256",
    code: 18,
    encode: qe("SHA-256")
}), rr = Ve({
    name: "sha2-512",
    code: 19,
    encode: qe("SHA-512")
});
var nr = Object.freeze({
    __proto__: null,
    sha256: sr,
    sha512: rr
});
const je = 0, or = "identity", Ge = Ne, ar = (r)=>ce(je, Ge(r)), hr = {
    code: je,
    name: or,
    encode: Ge,
    digest: ar
};
var cr = Object.freeze({
    __proto__: null,
    identity: hr
});
new TextEncoder, new TextDecoder;
const Ye = {
    ...ts,
    ...ss,
    ...ns,
    ...as,
    ...us,
    ...Es,
    ...Is,
    ..._s,
    ...Os,
    ...Fs
};
({
    ...nr,
    ...cr
});
function He(r) {
    return globalThis.Buffer != null ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : r;
}
function ur(r = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? He(globalThis.Buffer.allocUnsafe(r)) : new Uint8Array(r);
}
function Je(r, e, t, i) {
    return {
        name: r,
        prefix: e,
        encoder: {
            name: r,
            prefix: e,
            encode: t
        },
        decoder: {
            decode: i
        }
    };
}
const We = Je("utf8", "u", (r)=>"u" + new TextDecoder("utf8").decode(r), (r)=>new TextEncoder().encode(r.substring(1))), ue = Je("ascii", "a", (r)=>{
    let e = "a";
    for(let t = 0; t < r.length; t++)e += String.fromCharCode(r[t]);
    return e;
}, (r)=>{
    r = r.substring(1);
    const e = ur(r.length);
    for(let t = 0; t < r.length; t++)e[t] = r.charCodeAt(t);
    return e;
}), lr = {
    utf8: We,
    "utf-8": We,
    hex: Ye.base16,
    latin1: ue,
    ascii: ue,
    binary: ue,
    ...Ye
};
function dr(r, e = "utf8") {
    const t = lr[e];
    if (!t) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? He(globalThis.Buffer.from(r, "utf-8")) : t.decoder.decode(`${t.prefix}${r}`);
}
const le = "wc", Xe = 2, Q = "core", O = `${le}@2:${Q}:`, Qe = {
    name: Q,
    logger: "error"
}, Ze = {
    database: ":memory:"
}, et = "crypto", de = "client_ed25519_seed", tt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"], it = "keychain", st = "0.3", rt = "messages", nt = "0.3", ot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIX_HOURS"], at = "publisher", ht = "irn", ct = "error", ge = "wss://relay.walletconnect.com", pe = "wss://relay.walletconnect.org", ut = "relayer", D = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}, lt = "_subscription", P = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}, dt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"], gr = {
    database: ":memory:"
}, gt = "2.10.6", pt = 1e4, Dt = "0.3", yt = "WALLETCONNECT_CLIENT_ID", w = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
}, pr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"], mt = "subscription", bt = "0.3", ft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_SECONDS"] * 1e3, Et = "pairing", wt = "0.3", Dr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"], F = {
    wc_pairingDelete: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_SECONDS"],
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_SECONDS"],
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 0
        }
    }
}, V = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
}, R = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}, vt = "history", It = "0.3", Ct = "expirer", v = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}, Rt = "0.3", yr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"], Z = "verify-api", $ = "https://verify.walletconnect.com", ee = "https://verify.walletconnect.org", _t = [
    $,
    ee
];
class St {
    constructor(e, t){
        this.core = e, this.logger = t, this.keychain = new Map, this.name = it, this.version = st, this.initialized = !1, this.storagePrefix = O, this.init = async ()=>{
            if (!this.initialized) {
                const i = await this.getKeyChain();
                typeof i < "u" && (this.keychain = i), this.initialized = !0;
            }
        }, this.has = (i)=>(this.isInitialized(), this.keychain.has(i)), this.set = async (i, s)=>{
            this.isInitialized(), this.keychain.set(i, s), await this.persist();
        }, this.get = (i)=>{
            this.isInitialized();
            const s = this.keychain.get(i);
            if (typeof s > "u") {
                const { message: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${i}`);
                throw new Error(n);
            }
            return s;
        }, this.del = async (i)=>{
            this.isInitialized(), this.keychain.delete(i), await this.persist();
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapToObj"])(e));
    }
    async getKeyChain() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objToMap"])(e) : void 0;
    }
    async persist() {
        await this.setKeyChain(this.keychain);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Tt {
    constructor(e, t, i){
        this.core = e, this.logger = t, this.name = et, this.initialized = !1, this.init = async ()=>{
            this.initialized || (await this.keychain.init(), this.initialized = !0);
        }, this.hasKeys = (s)=>(this.isInitialized(), this.keychain.has(s)), this.getClientId = async ()=>{
            this.isInitialized();
            const s = await this.getClientSeed(), n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$relay$2d$auth$40$1$2e$1$2e$0$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.generateKeyPair(s);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$relay$2d$auth$40$1$2e$1$2e$0$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.encodeIss(n.publicKey);
        }, this.generateKeyPair = ()=>{
            this.isInitialized();
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateKeyPair"])();
            return this.setPrivateKey(s.publicKey, s.privateKey);
        }, this.signJWT = async (s)=>{
            this.isInitialized();
            const n = await this.getClientSeed(), o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$relay$2d$auth$40$1$2e$1$2e$0$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.generateKeyPair(n), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), h = tt;
            return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$relay$2d$auth$40$1$2e$1$2e$0$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.signJWT(a, s, h, o);
        }, this.generateSharedKey = (s, n, o)=>{
            this.isInitialized();
            const a = this.getPrivateKey(s), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deriveSymKey"])(a, n);
            return this.setSymKey(h, o);
        }, this.setSymKey = async (s, n)=>{
            this.isInitialized();
            const o = n || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashKey"])(s);
            return await this.keychain.set(o, s), o;
        }, this.deleteKeyPair = async (s)=>{
            this.isInitialized(), await this.keychain.del(s);
        }, this.deleteSymKey = async (s)=>{
            this.isInitialized(), await this.keychain.del(s);
        }, this.encode = async (s, n, o)=>{
            this.isInitialized();
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateEncoding"])(o), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$safe$2d$json$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])(n);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypeOneEnvelope"])(a)) {
                const y = a.senderPublicKey, M = a.receiverPublicKey;
                s = await this.generateSharedKey(y, M);
            }
            const l = this.getSymKey(s), { type: d, senderPublicKey: p } = a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encrypt"])({
                type: d,
                symKey: l,
                message: h,
                senderPublicKey: p
            });
        }, this.decode = async (s, n, o)=>{
            this.isInitialized();
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDecoding"])(n, o);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypeOneEnvelope"])(a)) {
                const h = a.receiverPublicKey, l = a.senderPublicKey;
                s = await this.generateSharedKey(h, l);
            }
            try {
                const h = this.getSymKey(s), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrypt"])({
                    symKey: h,
                    encoded: n
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$safe$2d$json$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonParse"])(l);
            } catch (h) {
                this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(h);
            }
        }, this.getPayloadType = (s)=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])(s);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeTypeByte"])(n.type);
        }, this.getPayloadSenderPublicKey = (s)=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])(s);
            return n.senderPublicKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$1$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(n.senderPublicKey, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE16"]) : void 0;
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.keychain = i || new St(this.core, this.logger);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    async setPrivateKey(e, t) {
        return await this.keychain.set(e, t), e;
    }
    getPrivateKey(e) {
        return this.keychain.get(e);
    }
    async getClientSeed() {
        let e = "";
        try {
            e = this.keychain.get(de);
        } catch  {
            e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), await this.keychain.set(de, e);
        }
        return dr(e, "base16");
    }
    getSymKey(e) {
        return this.keychain.get(e);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Pt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$types$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMessageTracker"] {
    constructor(e, t){
        super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = rt, this.version = nt, this.initialized = !1, this.storagePrefix = O, this.init = async ()=>{
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const i = await this.getRelayerMessages();
                    typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    });
                } catch (i) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
                } finally{
                    this.initialized = !0;
                }
            }
        }, this.set = async (i, s)=>{
            this.isInitialized();
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(s);
            let o = this.messages.get(i);
            return typeof o > "u" && (o = {}), typeof o[n] < "u" || (o[n] = s, this.messages.set(i, o), await this.persist()), n;
        }, this.get = (i)=>{
            this.isInitialized();
            let s = this.messages.get(i);
            return typeof s > "u" && (s = {}), s;
        }, this.has = (i, s)=>{
            this.isInitialized();
            const n = this.get(i), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(s);
            return typeof n[o] < "u";
        }, this.del = async (i)=>{
            this.isInitialized(), this.messages.delete(i), await this.persist();
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(e, this.name), this.core = t;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapToObj"])(e));
    }
    async getRelayerMessages() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objToMap"])(e) : void 0;
    }
    async persist() {
        await this.setRelayerMessages(this.messages);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class mr extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$types$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IPublisher"] {
    constructor(e, t){
        super(e, t), this.relayer = e, this.logger = t, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = at, this.queue = new Map, this.publishTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEN_SECONDS"]), this.needsTransportRestart = !1, this.publish = async (i, s, n)=>{
            var o;
            this.logger.debug("Publishing Payload"), this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: i,
                    message: s,
                    opts: n
                }
            });
            try {
                const a = n?.ttl || ot, h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(n), l = n?.prompt || !1, d = n?.tag || 0, p = n?.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString(), y = {
                    topic: i,
                    message: s,
                    opts: {
                        ttl: a,
                        relay: h,
                        prompt: l,
                        tag: d,
                        id: p
                    }
                }, M = setTimeout(()=>this.queue.set(p, y), this.publishTimeout);
                try {
                    await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.rpcPublish(i, s, a, h, l, d, p), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(p), this.relayer.events.emit(D.publish, y);
                } catch (u) {
                    if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (o = n?.internal) != null && o.throwOnFailedPublish) throw this.removeRequestFromQueue(p), u;
                    return;
                } finally{
                    clearTimeout(M);
                }
                this.logger.debug("Successfully Published Payload"), this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        topic: i,
                        message: s,
                        opts: n
                    }
                });
            } catch (a) {
                throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a), a;
            }
        }, this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.relayer = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.registerEventListeners();
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    rpcPublish(e, t, i, s, n, o, a) {
        var h, l, d, p;
        const y = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(s.protocol).publish,
            params: {
                topic: e,
                message: t,
                ttl: i,
                prompt: n,
                tag: o
            },
            id: a
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUndefined"])((h = y.params) == null ? void 0 : h.prompt) && ((l = y.params) == null || delete l.prompt), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUndefined"])((d = y.params) == null ? void 0 : d.tag) && ((p = y.params) == null || delete p.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: y
        }), this.relayer.request(y);
    }
    removeRequestFromQueue(e) {
        this.queue.delete(e);
    }
    checkQueue() {
        this.queue.forEach(async (e)=>{
            const { topic: t, message: i, opts: s } = e;
            await this.publish(t, i, s);
        });
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$heartbeat$40$1$2e$2$2e$1$2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>{
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1, this.relayer.events.emit(D.connection_stalled);
                return;
            }
            this.checkQueue();
        }), this.relayer.on(D.message_ack, (e)=>{
            this.removeRequestFromQueue(e.id.toString());
        });
    }
}
class br {
    constructor(){
        this.map = new Map, this.set = (e, t)=>{
            const i = this.get(e);
            this.exists(e, t) || this.map.set(e, [
                ...i,
                t
            ]);
        }, this.get = (e)=>this.map.get(e) || [], this.exists = (e, t)=>this.get(e).includes(t), this.delete = (e, t)=>{
            if (typeof t > "u") {
                this.map.delete(e);
                return;
            }
            if (!this.map.has(e)) return;
            const i = this.get(e);
            if (!this.exists(e, t)) return;
            const s = i.filter((n)=>n !== t);
            if (!s.length) {
                this.map.delete(e);
                return;
            }
            this.map.set(e, s);
        }, this.clear = ()=>{
            this.map.clear();
        };
    }
    get topics() {
        return Array.from(this.map.keys());
    }
}
var fr = Object.defineProperty, Er = Object.defineProperties, wr = Object.getOwnPropertyDescriptors, xt = Object.getOwnPropertySymbols, vr = Object.prototype.hasOwnProperty, Ir = Object.prototype.propertyIsEnumerable, Ot = (r, e, t)=>e in r ? fr(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, q = (r, e)=>{
    for(var t in e || (e = {}))vr.call(e, t) && Ot(r, t, e[t]);
    if (xt) for (var t of xt(e))Ir.call(e, t) && Ot(r, t, e[t]);
    return r;
}, De = (r, e)=>Er(r, wr(e));
class At extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$types$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ISubscriber"] {
    constructor(e, t){
        super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new br, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = mt, this.version = bt, this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = O, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
        }, this.subscribe = async (i, s)=>{
            await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: i,
                    opts: s
                }
            });
            try {
                const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(s), o = {
                    topic: i,
                    relay: n
                };
                this.pending.set(i, o);
                const a = await this.rpcSubscribe(i, n);
                return this.onSubscribe(a, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: i,
                        opts: s
                    }
                }), a;
            } catch (n) {
                throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n), n;
            }
        }, this.unsubscribe = async (i, s)=>{
            await this.restartToComplete(), this.isInitialized(), typeof s?.id < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
        }, this.isSubscribed = async (i)=>this.topics.includes(i) ? !0 : await new Promise((s, n)=>{
                const o = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Watch"];
                o.start(this.pendingSubscriptionWatchLabel);
                const a = setInterval(()=>{
                    !this.pending.has(i) && this.topics.includes(i) && (clearInterval(a), o.stop(this.pendingSubscriptionWatchLabel), s(!0)), o.elapsed(this.pendingSubscriptionWatchLabel) >= ft && (clearInterval(a), o.stop(this.pendingSubscriptionWatchLabel), n(new Error("Subscription resolution timeout")));
                }, this.pollingInterval);
            }).catch(()=>!1), this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.restart = async ()=>{
            this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
        }, this.relayer = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.clientId = "";
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.subscriptions.size;
    }
    get ids() {
        return Array.from(this.subscriptions.keys());
    }
    get values() {
        return Array.from(this.subscriptions.values());
    }
    get topics() {
        return this.topicMap.topics;
    }
    hasSubscription(e, t) {
        let i = !1;
        try {
            i = this.getSubscription(e).topic === t;
        } catch  {}
        return i;
    }
    onEnable() {
        this.cached = [], this.initialized = !0;
    }
    onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
    }
    async unsubscribeByTopic(e, t) {
        const i = this.topicMap.get(e);
        await Promise.all(i.map(async (s)=>await this.unsubscribeById(e, s, t)));
    }
    async unsubscribeById(e, t, i) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: e,
                id: t,
                opts: i
            }
        });
        try {
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(i);
            await this.rpcUnsubscribe(e, t, s);
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: t,
                    opts: i
                }
            });
        } catch (s) {
            throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
        }
    }
    async rpcSubscribe(e, t) {
        const i = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(t.protocol).subscribe,
            params: {
                topic: e
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        });
        try {
            await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.relayer.request(i), this.subscribeTimeout);
        } catch  {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(D.connection_stalled);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(e + this.clientId);
    }
    async rpcBatchSubscribe(e) {
        if (!e.length) return;
        const t = e[0].relay, i = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(t.protocol).batchSubscribe,
            params: {
                topics: e.map((s)=>s.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        });
        try {
            return await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.relayer.request(i), this.subscribeTimeout);
        } catch  {
            this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(D.connection_stalled);
        }
    }
    rpcUnsubscribe(e, t, i) {
        const s = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(i.protocol).unsubscribe,
            params: {
                topic: e,
                id: t
            }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        }), this.relayer.request(s);
    }
    onSubscribe(e, t) {
        this.setSubscription(e, De(q({}, t), {
            id: e
        })), this.pending.delete(t.topic);
    }
    onBatchSubscribe(e) {
        e.length && e.forEach((t)=>{
            this.setSubscription(t.id, q({}, t)), this.pending.delete(t.topic);
        });
    }
    async onUnsubscribe(e, t, i) {
        this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i), await this.relayer.messages.del(e);
    }
    async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e);
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey);
    }
    setSubscription(e, t) {
        this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: t
        }), this.addSubscription(e, t));
    }
    addSubscription(e, t) {
        this.subscriptions.set(e, q({}, t)), this.topicMap.set(t.topic, e), this.events.emit(w.created, t);
    }
    getSubscription(e) {
        this.logger.debug("Getting subscription"), this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
        });
        const t = this.subscriptions.get(e);
        if (!t) {
            const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(i);
        }
        return t;
    }
    deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: t
        });
        const i = this.getSubscription(e);
        this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(w.deleted, De(q({}, i), {
            reason: t
        }));
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit(w.sync);
    }
    async reset() {
        if (this.cached.length) {
            const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for(let t = 0; t < e; t++){
                const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(i);
            }
        }
        this.events.emit(w.resubscribed);
    }
    async restore() {
        try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
        }
    }
    async batchSubscribe(e) {
        if (!e.length) return;
        const t = await this.rpcBatchSubscribe(e);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidArray"])(t) && this.onBatchSubscribe(t.map((i, s)=>De(q({}, e[s]), {
                id: i
            })));
    }
    async onConnect() {
        this.restartInProgress || (await this.restart(), this.onEnable());
    }
    onDisconnect() {
        this.onDisable();
    }
    async checkPending() {
        if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
        const e = [];
        this.pending.forEach((t)=>{
            e.push(t);
        }), await this.batchSubscribe(e);
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$heartbeat$40$1$2e$2$2e$1$2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, async ()=>{
            await this.checkPending();
        }), this.relayer.on(D.connect, async ()=>{
            await this.onConnect();
        }), this.relayer.on(D.disconnect, ()=>{
            this.onDisconnect();
        }), this.events.on(w.created, async (e)=>{
            const t = w.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), await this.persist();
        }), this.events.on(w.deleted, async (e)=>{
            const t = w.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), await this.persist();
        });
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise((e)=>{
            const t = setInterval(()=>{
                this.restartInProgress || (clearInterval(t), e());
            }, this.pollingInterval);
        });
    }
}
var Cr = Object.defineProperty, zt = Object.getOwnPropertySymbols, Rr = Object.prototype.hasOwnProperty, _r = Object.prototype.propertyIsEnumerable, Nt = (r, e, t)=>e in r ? Cr(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, Sr = (r, e)=>{
    for(var t in e || (e = {}))Rr.call(e, t) && Nt(r, t, e[t]);
    if (zt) for (var t of zt(e))_r.call(e, t) && Nt(r, t, e[t]);
    return r;
};
class Ut extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$types$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IRelayer"] {
    constructor(e){
        super(e), this.protocol = "wc", this.version = 2, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = ut, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = [
            "socket hang up",
            "socket stalled"
        ], this.hasExperiencedNetworkDisruption = !1, this.request = async (t)=>{
            this.logger.debug("Publishing Request Payload");
            try {
                return await this.toEstablishConnection(), await this.provider.request(t);
            } catch (i) {
                throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i;
            }
        }, this.onPayloadHandler = (t)=>{
            this.onProviderPayload(t);
        }, this.onConnectHandler = ()=>{
            this.events.emit(D.connect);
        }, this.onDisconnectHandler = ()=>{
            this.onProviderDisconnect();
        }, this.onProviderErrorHandler = (t)=>{
            this.logger.error(t), this.events.emit(D.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
        }, this.registerProviderListeners = ()=>{
            this.provider.on(P.payload, this.onPayloadHandler), this.provider.on(P.connect, this.onConnectHandler), this.provider.on(P.disconnect, this.onDisconnectHandler), this.provider.on(P.error, this.onProviderErrorHandler);
        }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(e.logger, this.name) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$7$2e$11$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__["pino"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level: e.logger || ct
        })), this.messages = new Pt(this.logger, e.core), this.subscriber = new At(this, this.logger), this.publisher = new mr(this, this.logger), this.relayUrl = e?.relayUrl || ge, this.projectId = e.projectId, this.bundleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBundleId"])(), this.provider = {};
    }
    async init() {
        this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([
            this.messages.init(),
            this.subscriber.init()
        ]);
        try {
            await this.transportOpen();
        } catch  {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${pe}...`), await this.restartTransport(pe);
        }
        this.initialized = !0, setTimeout(async ()=>{
            this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
        }, pt);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get connected() {
        return this.provider.connection.connected;
    }
    get connecting() {
        return this.provider.connection.connecting;
    }
    async publish(e, t, i) {
        this.isInitialized(), await this.publisher.publish(e, t, i), await this.recordMessageEvent({
            topic: e,
            message: t,
            publishedAt: Date.now()
        });
    }
    async subscribe(e, t) {
        var i;
        this.isInitialized();
        let s = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "";
        if (s) return s;
        let n;
        const o = (a)=>{
            a.topic === e && (this.subscriber.off(w.created, o), n());
        };
        return await Promise.all([
            new Promise((a)=>{
                n = a, this.subscriber.on(w.created, o);
            }),
            new Promise(async (a)=>{
                s = await this.subscriber.subscribe(e, t), a();
            })
        ]), s;
    }
    async unsubscribe(e, t) {
        this.isInitialized(), await this.subscriber.unsubscribe(e, t);
    }
    on(e, t) {
        this.events.on(e, t);
    }
    once(e, t) {
        this.events.once(e, t);
    }
    off(e, t) {
        this.events.off(e, t);
    }
    removeListener(e, t) {
        this.events.removeListener(e, t);
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(()=>this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
    }
    async transportOpen(e) {
        if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
            e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
            try {
                await Promise.all([
                    new Promise((t)=>{
                        if (!this.initialized) return t();
                        this.subscriber.once(w.resubscribed, ()=>{
                            t();
                        });
                    }),
                    new Promise(async (t, i)=>{
                        try {
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
                        } catch (s) {
                            i(s);
                            return;
                        }
                        t();
                    })
                ]);
            } catch (t) {
                this.logger.error(t);
                const i = t;
                if (!this.isConnectionStalled(i.message)) throw t;
                this.provider.events.emit(P.disconnect);
            } finally{
                this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
            }
        }
    }
    async restartTransport(e) {
        await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
    }
    async confirmOnlineStateOrThrow() {
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOnline"])()) throw new Error("No internet connection detected. Please restart your network and try again.");
    }
    isConnectionStalled(e) {
        return this.staleConnectionErrors.some((t)=>e.includes(t));
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const e = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$provider$40$1$2e$0$2e$13$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$ws$2d$connection$40$1$2e$0$2e$14$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$ws$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelayRpcUrl"])({
            sdkVersion: gt,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: e,
            useOnCloseEvent: !0,
            bundleId: this.bundleId
        }))), this.registerProviderListeners();
    }
    async recordMessageEvent(e) {
        const { topic: t, message: i } = e;
        await this.messages.set(t, i);
    }
    async shouldIgnoreMessageEvent(e) {
        const { topic: t, message: i } = e;
        if (!i || i.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
        if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
        const s = this.messages.has(t, i);
        return s && this.logger.debug(`Ignoring duplicate message: ${i}`), s;
    }
    async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcRequest"])(e)) {
            if (!e.method.endsWith(lt)) return;
            const t = e.params, { topic: i, message: s, publishedAt: n } = t.data, o = {
                topic: i,
                message: s,
                publishedAt: n
            };
            this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Sr({
                type: "event",
                event: t.id
            }, o)), this.events.emit(t.id, o), await this.acknowledgePayload(e), await this.onMessageEvent(o);
        } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcResponse"])(e) && this.events.emit(D.message_ack, e);
    }
    async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (this.events.emit(D.message, e), await this.recordMessageEvent(e));
    }
    async acknowledgePayload(e) {
        const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcResult"])(e.id, !0);
        await this.provider.connection.send(t);
    }
    unregisterProviderListeners() {
        this.provider.off(P.payload, this.onPayloadHandler), this.provider.off(P.connect, this.onConnectHandler), this.provider.off(P.disconnect, this.onDisconnectHandler), this.provider.off(P.error, this.onProviderErrorHandler);
    }
    async registerEventListeners() {
        this.events.on(D.connection_stalled, ()=>{
            this.restartTransport().catch((t)=>this.logger.error(t));
        });
        let e = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOnline"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeToNetworkChange"])(async (t)=>{
            this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch((i)=>this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((i)=>this.logger.error(i))));
        });
    }
    onProviderDisconnect() {
        this.events.emit(D.disconnect), this.attemptToReconnect();
    }
    attemptToReconnect() {
        this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async ()=>{
            await this.restartTransport().catch((e)=>this.logger.error(e));
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(dt)));
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    async toEstablishConnection() {
        if (await this.confirmOnlineStateOrThrow(), !this.connected) {
            if (this.connectionAttemptInProgress) return await new Promise((e)=>{
                const t = setInterval(()=>{
                    this.connected && (clearInterval(t), e());
                }, this.connectionStatusPollingInterval);
            });
            await this.restartTransport();
        }
    }
}
var Tr = Object.defineProperty, Lt = Object.getOwnPropertySymbols, Pr = Object.prototype.hasOwnProperty, xr = Object.prototype.propertyIsEnumerable, Ft = (r, e, t)=>e in r ? Tr(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, $t = (r, e)=>{
    for(var t in e || (e = {}))Pr.call(e, t) && Ft(r, t, e[t]);
    if (Lt) for (var t of Lt(e))xr.call(e, t) && Ft(r, t, e[t]);
    return r;
};
class Mt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$types$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IStore"] {
    constructor(e, t, i, s = O, n = void 0){
        super(e, t, i, s), this.core = e, this.logger = t, this.name = i, this.map = new Map, this.version = Dt, this.cached = [], this.initialized = !1, this.storagePrefix = O, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o)=>{
                this.getKey && o !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUndefined"])(o) ? this.map.set(this.getKey(o), o) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProposalStruct"])(o) ? this.map.set(o.id, o) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSessionStruct"])(o) && this.map.set(o.topic, o);
            }), this.cached = [], this.initialized = !0);
        }, this.set = async (o, a)=>{
            this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({
                type: "method",
                method: "set",
                key: o,
                value: a
            }), this.map.set(o, a), await this.persist());
        }, this.get = (o)=>(this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                type: "method",
                method: "get",
                key: o
            }), this.getData(o)), this.getAll = (o)=>(this.isInitialized(), o ? this.values.filter((a)=>Object.keys(o).every((h)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$2e$isequal$40$4$2e$5$2e$0$2f$node_modules$2f$lodash$2e$isequal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(a[h], o[h]))) : this.values), this.update = async (o, a)=>{
            this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                type: "method",
                method: "update",
                key: o,
                update: a
            });
            const h = $t($t({}, this.getData(o)), a);
            this.map.set(o, h), await this.persist();
        }, this.delete = async (o, a)=>{
            this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({
                type: "method",
                method: "delete",
                key: o,
                reason: a
            }), this.map.delete(o), await this.persist());
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.storagePrefix = s, this.getKey = n;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.map.size;
    }
    get keys() {
        return Array.from(this.map.keys());
    }
    get values() {
        return Array.from(this.map.values());
    }
    async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey);
    }
    getData(e) {
        const t = this.map.get(e);
        if (!t) {
            const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(i), new Error(i);
        }
        return t;
    }
    async persist() {
        await this.setDataStore(this.values);
    }
    async restore() {
        try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class kt {
    constructor(e, t){
        this.core = e, this.logger = t, this.name = Et, this.version = wt, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["default"], this.initialized = !1, this.storagePrefix = O, this.ignoredPayloadTypes = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE_1"]
        ], this.registeredMethods = [], this.init = async ()=>{
            this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
        }, this.register = ({ methods: i })=>{
            this.isInitialized(), this.registeredMethods = [
                ...new Set([
                    ...this.registeredMethods,
                    ...i
                ])
            ];
        }, this.create = async ()=>{
            this.isInitialized();
            const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), s = await this.core.crypto.setSymKey(i), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]), o = {
                protocol: ht
            }, a = {
                topic: s,
                expiry: n,
                relay: o,
                active: !1
            }, h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUri"])({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: s,
                symKey: i,
                relay: o
            });
            return await this.pairings.set(s, a), await this.core.relayer.subscribe(s), this.core.expirer.set(s, n), {
                topic: s,
                uri: h
            };
        }, this.pair = async (i)=>{
            this.isInitialized(), this.isValidPair(i);
            const { topic: s, symKey: n, relay: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUri"])(i.uri);
            let a;
            if (this.pairings.keys.includes(s) && (a = this.pairings.get(s), a.active)) throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
            const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]), l = {
                topic: s,
                relay: o,
                expiry: h,
                active: !1
            };
            return await this.pairings.set(s, l), this.core.expirer.set(s, h), i.activatePairing && await this.activate({
                topic: s
            }), this.events.emit(V.create, l), this.core.crypto.keychain.has(s) || (await this.core.crypto.setSymKey(n, s), await this.core.relayer.subscribe(s, {
                relay: o
            })), l;
        }, this.activate = async ({ topic: i })=>{
            this.isInitialized();
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"]);
            await this.pairings.update(i, {
                active: !0,
                expiry: s
            }), this.core.expirer.set(i, s);
        }, this.ping = async (i)=>{
            this.isInitialized(), await this.isValidPing(i);
            const { topic: s } = i;
            if (this.pairings.keys.includes(s)) {
                const n = await this.sendRequest(s, "wc_pairingPing", {}), { done: o, resolve: a, reject: h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDelayedPromise"])();
                this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", n), ({ error: l })=>{
                    l ? h(l) : a();
                }), await o();
            }
        }, this.updateExpiry = async ({ topic: i, expiry: s })=>{
            this.isInitialized(), await this.pairings.update(i, {
                expiry: s
            });
        }, this.updateMetadata = async ({ topic: i, metadata: s })=>{
            this.isInitialized(), await this.pairings.update(i, {
                peerMetadata: s
            });
        }, this.getPairings = ()=>(this.isInitialized(), this.pairings.values), this.disconnect = async (i)=>{
            this.isInitialized(), await this.isValidDisconnect(i);
            const { topic: s } = i;
            this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), await this.deletePairing(s));
        }, this.sendRequest = async (i, s, n)=>{
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])(s, n), a = await this.core.crypto.encode(i, o), h = F[s].req;
            return this.core.history.set(i, o), this.core.relayer.publish(i, a, h), o.id;
        }, this.sendResult = async (i, s, n)=>{
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcResult"])(i, n), a = await this.core.crypto.encode(s, o), h = await this.core.history.get(s, i), l = F[h.request.method].res;
            await this.core.relayer.publish(s, a, l), await this.core.history.resolve(o);
        }, this.sendError = async (i, s, n)=>{
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcError"])(i, n), a = await this.core.crypto.encode(s, o), h = await this.core.history.get(s, i), l = F[h.request.method] ? F[h.request.method].res : F.unregistered_method.res;
            await this.core.relayer.publish(s, a, l), await this.core.history.resolve(o);
        }, this.deletePairing = async (i, s)=>{
            await this.core.relayer.unsubscribe(i), await Promise.all([
                this.pairings.delete(i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")),
                this.core.crypto.deleteSymKey(i),
                s ? Promise.resolve() : this.core.expirer.del(i)
            ]);
        }, this.cleanup = async ()=>{
            const i = this.pairings.getAll().filter((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpired"])(s.expiry));
            await Promise.all(i.map((s)=>this.deletePairing(s.topic)));
        }, this.onRelayEventRequest = (i)=>{
            const { topic: s, payload: n } = i;
            switch(n.method){
                case "wc_pairingPing":
                    return this.onPairingPingRequest(s, n);
                case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(s, n);
                default:
                    return this.onUnknownRpcMethodRequest(s, n);
            }
        }, this.onRelayEventResponse = async (i)=>{
            const { topic: s, payload: n } = i, o = (await this.core.history.get(s, n.id)).request.method;
            switch(o){
                case "wc_pairingPing":
                    return this.onPairingPingResponse(s, n);
                default:
                    return this.onUnknownRpcMethodResponse(o);
            }
        }, this.onPairingPingRequest = async (i, s)=>{
            const { id: n } = s;
            try {
                this.isValidPing({
                    topic: i
                }), await this.sendResult(n, i, !0), this.events.emit(V.ping, {
                    id: n,
                    topic: i
                });
            } catch (o) {
                await this.sendError(n, i, o), this.logger.error(o);
            }
        }, this.onPairingPingResponse = (i, s)=>{
            const { id: n } = s;
            setTimeout(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(s) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", n), {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcError"])(s) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", n), {
                    error: s.error
                });
            }, 500);
        }, this.onPairingDeleteRequest = async (i, s)=>{
            const { id: n } = s;
            try {
                this.isValidDisconnect({
                    topic: i
                }), await this.deletePairing(i), this.events.emit(V.delete, {
                    id: n,
                    topic: i
                });
            } catch (o) {
                await this.sendError(n, i, o), this.logger.error(o);
            }
        }, this.onUnknownRpcMethodRequest = async (i, s)=>{
            const { id: n, method: o } = s;
            try {
                if (this.registeredMethods.includes(o)) return;
                const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("WC_METHOD_UNSUPPORTED", o);
                await this.sendError(n, i, a), this.logger.error(a);
            } catch (a) {
                await this.sendError(n, i, a), this.logger.error(a);
            }
        }, this.onUnknownRpcMethodResponse = (i)=>{
            this.registeredMethods.includes(i) || this.logger.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("WC_METHOD_UNSUPPORTED", i));
        }, this.isValidPair = (i)=>{
            var s;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidParams"])(i)) {
                const { message: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pair() params: ${i}`);
                throw new Error(o);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidUrl"])(i.uri)) {
                const { message: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
                throw new Error(o);
            }
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUri"])(i.uri);
            if (!((s = n?.relay) != null && s.protocol)) {
                const { message: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw new Error(o);
            }
            if (!(n != null && n.symKey)) {
                const { message: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", "pair() uri#symKey");
                throw new Error(o);
            }
        }, this.isValidPing = async (i)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidParams"])(i)) {
                const { message: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `ping() params: ${i}`);
                throw new Error(n);
            }
            const { topic: s } = i;
            await this.isValidPairingTopic(s);
        }, this.isValidDisconnect = async (i)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidParams"])(i)) {
                const { message: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `disconnect() params: ${i}`);
                throw new Error(n);
            }
            const { topic: s } = i;
            await this.isValidPairingTopic(s);
        }, this.isValidPairingTopic = async (i)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidString"])(i, !1)) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
                throw new Error(s);
            }
            if (!this.pairings.keys.includes(i)) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
                throw new Error(s);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpired"])(this.pairings.get(i).expiry)) {
                await this.deletePairing(i);
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", `pairing topic: ${i}`);
                throw new Error(s);
            }
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.pairings = new Mt(this.core, this.logger, this.name, this.storagePrefix);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(D.message, async (e)=>{
            const { topic: t, message: i } = e;
            if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))) return;
            const s = await this.core.crypto.decode(t, i);
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcRequest"])(s) ? (this.core.history.set(t, s), this.onRelayEventRequest({
                    topic: t,
                    payload: s
                })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcResponse"])(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({
                    topic: t,
                    payload: s
                }), this.core.history.delete(t, s.id));
            } catch (n) {
                this.logger.error(n);
            }
        });
    }
    registerExpirerEvents() {
        this.core.expirer.on(v.expired, async (e)=>{
            const { topic: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseExpirerTarget"])(e.target);
            t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(V.expire, {
                topic: t
            }));
        });
    }
}
class Kt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$types$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IJsonRpcHistory"] {
    constructor(e, t){
        super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = vt, this.version = It, this.cached = [], this.initialized = !1, this.storagePrefix = O, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i)=>this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.set = (i, s, n)=>{
            if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                type: "method",
                method: "set",
                topic: i,
                request: s,
                chainId: n
            }), this.records.has(s.id)) return;
            const o = {
                id: s.id,
                topic: i,
                request: {
                    method: s.method,
                    params: s.params || null
                },
                chainId: n,
                expiry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"])
            };
            this.records.set(o.id, o), this.events.emit(R.created, o);
        }, this.resolve = async (i)=>{
            if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                type: "method",
                method: "update",
                response: i
            }), !this.records.has(i.id)) return;
            const s = await this.getRecord(i.id);
            typeof s.response > "u" && (s.response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcError"])(i) ? {
                error: i.error
            } : {
                result: i.result
            }, this.records.set(s.id, s), this.events.emit(R.updated, s));
        }, this.get = async (i, s)=>(this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                type: "method",
                method: "get",
                topic: i,
                id: s
            }), await this.getRecord(s)), this.delete = (i, s)=>{
            this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                type: "method",
                method: "delete",
                id: s
            }), this.values.forEach((n)=>{
                if (n.topic === i) {
                    if (typeof s < "u" && n.id !== s) return;
                    this.records.delete(n.id), this.events.emit(R.deleted, n);
                }
            });
        }, this.exists = async (i, s)=>(this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : !1), this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get size() {
        return this.records.size;
    }
    get keys() {
        return Array.from(this.records.keys());
    }
    get values() {
        return Array.from(this.records.values());
    }
    get pending() {
        const e = [];
        return this.values.forEach((t)=>{
            if (typeof t.response < "u") return;
            const i = {
                topic: t.topic,
                request: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$utils$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])(t.request.method, t.request.params, t.id),
                chainId: t.chainId
            };
            return e.push(i);
        }), e;
    }
    async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey);
    }
    getRecord(e) {
        this.isInitialized();
        const t = this.records.get(e);
        if (!t) {
            const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(i);
        }
        return t;
    }
    async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit(R.sync);
    }
    async restore() {
        try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
        }
    }
    registerEventListeners() {
        this.events.on(R.created, (e)=>{
            const t = R.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            }), this.persist();
        }), this.events.on(R.updated, (e)=>{
            const t = R.updated;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            }), this.persist();
        }), this.events.on(R.deleted, (e)=>{
            const t = R.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            }), this.persist();
        }), this.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$heartbeat$40$1$2e$2$2e$1$2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>{
            this.cleanup();
        });
    }
    cleanup() {
        try {
            this.records.forEach((e)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
            });
        } catch (e) {
            this.logger.warn(e);
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Bt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$types$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IExpirer"] {
    constructor(e, t){
        super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.name = Ct, this.version = Rt, this.cached = [], this.initialized = !1, this.storagePrefix = O, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i)=>this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.has = (i)=>{
            try {
                const s = this.formatTarget(i);
                return typeof this.getExpiration(s) < "u";
            } catch  {
                return !1;
            }
        }, this.set = (i, s)=>{
            this.isInitialized();
            const n = this.formatTarget(i), o = {
                target: n,
                expiry: s
            };
            this.expirations.set(n, o), this.checkExpiry(n, o), this.events.emit(v.created, {
                target: n,
                expiration: o
            });
        }, this.get = (i)=>{
            this.isInitialized();
            const s = this.formatTarget(i);
            return this.getExpiration(s);
        }, this.del = (i)=>{
            if (this.isInitialized(), this.has(i)) {
                const s = this.formatTarget(i), n = this.getExpiration(s);
                this.expirations.delete(s), this.events.emit(v.deleted, {
                    target: s,
                    expiration: n
                });
            }
        }, this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.expirations.size;
    }
    get keys() {
        return Array.from(this.expirations.keys());
    }
    get values() {
        return Array.from(this.expirations.values());
    }
    formatTarget(e) {
        if (typeof e == "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTopicTarget"])(e);
        if (typeof e == "number") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIdTarget"])(e);
        const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw new Error(t);
    }
    async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey);
    }
    async persist() {
        await this.setExpirations(this.values), this.events.emit(v.sync);
    }
    async restore() {
        try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
        }
    }
    getExpiration(e) {
        const t = this.expirations.get(e);
        if (!t) {
            const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(i), new Error(i);
        }
        return t;
    }
    checkExpiry(e, t) {
        const { expiry: i } = t;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(i) - Date.now() <= 0 && this.expire(e, t);
    }
    expire(e, t) {
        this.expirations.delete(e), this.events.emit(v.expired, {
            target: e,
            expiration: t
        });
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((e, t)=>this.checkExpiry(t, e));
    }
    registerEventListeners() {
        this.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$heartbeat$40$1$2e$2$2e$1$2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>this.checkExpirations()), this.events.on(v.created, (e)=>{
            const t = v.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        }), this.events.on(v.expired, (e)=>{
            const t = v.expired;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        }), this.events.on(v.deleted, (e)=>{
            const t = v.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        });
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Vt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$types$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IVerify"] {
    constructor(e, t){
        super(e, t), this.projectId = e, this.logger = t, this.name = Z, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (i)=>{
            if (this.verifyDisabled || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactNative"])() || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) return;
            const s = this.getVerifyUrl(i?.verifyUrl);
            this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
            try {
                await this.createIframe();
            } catch (n) {
                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(n);
            }
            if (!this.initialized) {
                this.removeIframe(), this.verifyUrl = ee;
                try {
                    await this.createIframe();
                } catch (n) {
                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(n), this.verifyDisabled = !0;
                }
            }
        }, this.register = async (i)=>{
            this.initialized ? this.sendPost(i.attestationId) : (this.addToQueue(i.attestationId), await this.init());
        }, this.resolve = async (i)=>{
            if (this.isDevEnv) return "";
            const s = this.getVerifyUrl(i?.verifyUrl);
            let n;
            try {
                n = await this.fetchAttestation(i.attestationId, s);
            } catch (o) {
                this.logger.info(`failed to resolve attestation: ${i.attestationId} from url: ${s}`), this.logger.info(o), n = await this.fetchAttestation(i.attestationId, ee);
            }
            return n;
        }, this.fetchAttestation = async (i, s)=>{
            this.logger.info(`resolving attestation: ${i} from url: ${s}`);
            const n = this.startAbortTimer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"] * 2), o = await fetch(`${s}/attestation/${i}`, {
                signal: this.abortController.signal
            });
            return clearTimeout(n), o.status === 200 ? await o.json() : void 0;
        }, this.addToQueue = (i)=>{
            this.queue.push(i);
        }, this.processQueue = ()=>{
            this.queue.length !== 0 && (this.queue.forEach((i)=>this.sendPost(i)), this.queue = []);
        }, this.sendPost = (i)=>{
            var s;
            try {
                if (!this.iframe) return;
                (s = this.iframe.contentWindow) == null || s.postMessage(i, "*"), this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`);
            } catch  {}
        }, this.createIframe = async ()=>{
            let i;
            const s = (n)=>{
                n.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", s), i());
            };
            await Promise.race([
                new Promise((n)=>{
                    if (document.getElementById(Z)) return n();
                    window.addEventListener("message", s);
                    const o = document.createElement("iframe");
                    o.id = Z, o.src = `${this.verifyUrl}/${this.projectId}`, o.style.display = "none", document.body.append(o), this.iframe = o, i = n;
                }),
                new Promise((n, o)=>setTimeout(()=>{
                        window.removeEventListener("message", s), o("verify iframe load timeout");
                    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_SECONDS"])))
            ]);
        }, this.removeIframe = ()=>{
            this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
        }, this.getVerifyUrl = (i)=>{
            let s = i || $;
            return _t.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${$}`), s = $), s;
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.verifyUrl = $, this.abortController = new AbortController, this.isDevEnv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNode"])() && process.env.IS_VITEST;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    startAbortTimer(e) {
        return this.abortController = new AbortController, setTimeout(()=>this.abortController.abort(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(e));
    }
}
var Or = Object.defineProperty, qt = Object.getOwnPropertySymbols, Ar = Object.prototype.hasOwnProperty, zr = Object.prototype.propertyIsEnumerable, jt = (r, e, t)=>e in r ? Or(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, Gt = (r, e)=>{
    for(var t in e || (e = {}))Ar.call(e, t) && jt(r, t, e[t]);
    if (qt) for (var t of qt(e))zr.call(e, t) && jt(r, t, e[t]);
    return r;
};
class te extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$types$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICore"] {
    constructor(e){
        super(e), this.protocol = le, this.version = Xe, this.name = Q, this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"], this.initialized = !1, this.on = (i, s)=>this.events.on(i, s), this.once = (i, s)=>this.events.once(i, s), this.off = (i, s)=>this.events.off(i, s), this.removeListener = (i, s)=>this.events.removeListener(i, s), this.projectId = e?.projectId, this.relayUrl = e?.relayUrl || ge, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
        const t = typeof e?.logger < "u" && typeof e?.logger != "string" ? e.logger : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$7$2e$11$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__["pino"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level: e?.logger || Qe.logger
        }));
        this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.heartbeat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$heartbeat$40$1$2e$2$2e$1$2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeartBeat"], this.crypto = new Tt(this, this.logger, e?.keychain), this.history = new Kt(this, this.logger), this.expirer = new Bt(this, this.logger), this.storage = e != null && e.storage ? e.storage : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$keyvaluestorage$40$1$2e$1$2e$1$2f$node_modules$2f40$walletconnect$2f$keyvaluestorage$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](Gt(Gt({}, Ze), e?.storageOptions)), this.relayer = new Ut({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }), this.pairing = new kt(this, this.logger), this.verify = new Vt(this.projectId || "", this.logger);
    }
    static async init(e) {
        const t = new te(e);
        await t.initialize();
        const i = await t.crypto.getClientId();
        return await t.storage.setItem(yt, i), t;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    async start() {
        this.initialized || await this.initialize();
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
        } catch (e) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
        }
    }
}
const Nr = te;
;
 //# sourceMappingURL=index.es.js.map
}}),

};

//# sourceMappingURL=e1f52_%40walletconnect_core_dist_index_es_710a5b.js.map