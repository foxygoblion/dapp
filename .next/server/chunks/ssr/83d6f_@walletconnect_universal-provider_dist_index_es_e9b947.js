module.exports = {

"[project]/node_modules/.pnpm/@walletconnect+universal-provider@2.10.6/node_modules/@walletconnect/universal-provider/dist/index.es.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "UniversalProvider": (()=>cv),
    "default": (()=>lr)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+logger@2.1.2/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$http$2d$connection$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+jsonrpc-http-connection@1.0.8/node_modules/@walletconnect/jsonrpc-http-connection/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$provider$40$1$2e$0$2e$13$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+jsonrpc-provider@1.0.13/node_modules/@walletconnect/jsonrpc-provider/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_import__("[externals]/events [external] (events, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$provider$40$1$2e$0$2e$13$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+jsonrpc-provider@1.0.13/node_modules/@walletconnect/jsonrpc-provider/dist/esm/provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$7$2e$11$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/pino@7.11.0/node_modules/pino/pino.js [app-ssr] (ecmascript) <export default as pino>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+logger@2.1.2/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+utils@2.10.6/node_modules/@walletconnect/utils/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$sign$2d$client$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+sign-client@2.10.6/node_modules/@walletconnect/sign-client/dist/index.es.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const Ia = "error", Ug = "wss://relay.walletconnect.com", Wg = "wc", Fg = "universal_provider", xa = `${Wg}@2:${Fg}:`, Mg = "https://rpc.walletconnect.com/v1/", Vn = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
};
var ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ui = {
    exports: {}
}; /**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ 
(function(C, u) {
    (function() {
        var i, d = "4.17.21", w = 200, T = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", $ = "Expected a function", En = "Invalid `variable` option passed into `_.template`", zt = "__lodash_hash_undefined__", pr = 500, It = "__lodash_placeholder__", Ln = 1, Fn = 2, xt = 4, Et = 1, ve = 2, vn = 1, ct = 2, qi = 4, Dn = 8, yt = 16, Hn = 32, St = 64, Mn = 128, Kt = 256, dr = 512, La = 30, Da = "...", Ha = 800, Na = 16, Bi = 1, $a = 2, Ua = 3, ht = 1 / 0, kn = 9007199254740991, Wa = 17976931348623157e292, _e = 0 / 0, Nn = 4294967295, Fa = Nn - 1, Ma = Nn >>> 1, qa = [
            [
                "ary",
                Mn
            ],
            [
                "bind",
                vn
            ],
            [
                "bindKey",
                ct
            ],
            [
                "curry",
                Dn
            ],
            [
                "curryRight",
                yt
            ],
            [
                "flip",
                dr
            ],
            [
                "partial",
                Hn
            ],
            [
                "partialRight",
                St
            ],
            [
                "rearg",
                Kt
            ]
        ], Ot = "[object Arguments]", me = "[object Array]", Ba = "[object AsyncFunction]", Yt = "[object Boolean]", Zt = "[object Date]", Ga = "[object DOMException]", we = "[object Error]", Pe = "[object Function]", Gi = "[object GeneratorFunction]", yn = "[object Map]", Jt = "[object Number]", za = "[object Null]", qn = "[object Object]", zi = "[object Promise]", Ka = "[object Proxy]", Xt = "[object RegExp]", Sn = "[object Set]", Qt = "[object String]", Ae = "[object Symbol]", Ya = "[object Undefined]", Vt = "[object WeakMap]", Za = "[object WeakSet]", kt = "[object ArrayBuffer]", Rt = "[object DataView]", gr = "[object Float32Array]", vr = "[object Float64Array]", _r = "[object Int8Array]", mr = "[object Int16Array]", wr = "[object Int32Array]", Pr = "[object Uint8Array]", Ar = "[object Uint8ClampedArray]", Cr = "[object Uint16Array]", Ir = "[object Uint32Array]", Ja = /\b__p \+= '';/g, Xa = /\b(__p \+=) '' \+/g, Qa = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ki = /&(?:amp|lt|gt|quot|#39);/g, Yi = /[&<>"']/g, Va = RegExp(Ki.source), ka = RegExp(Yi.source), ja = /<%-([\s\S]+?)%>/g, no = /<%([\s\S]+?)%>/g, Zi = /<%=([\s\S]+?)%>/g, to = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, eo = /^\w*$/, ro = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xr = /[\\^$.*+?()[\]{}|]/g, io = RegExp(xr.source), Er = /^\s+/, so = /\s/, uo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ao = /\{\n\/\* \[wrapped with (.+)\] \*/, oo = /,? & /, fo = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, co = /[()=,{}\[\]\/\s]/, ho = /\\(\\)?/g, lo = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ji = /\w*$/, po = /^[-+]0x[0-9a-f]+$/i, go = /^0b[01]+$/i, vo = /^\[object .+?Constructor\]$/, _o = /^0o[0-7]+$/i, mo = /^(?:0|[1-9]\d*)$/, wo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ce = /($^)/, Po = /['\n\r\u2028\u2029\\]/g, Ie = "\\ud800-\\udfff", Ao = "\\u0300-\\u036f", Co = "\\ufe20-\\ufe2f", Io = "\\u20d0-\\u20ff", Xi = Ao + Co + Io, Qi = "\\u2700-\\u27bf", Vi = "a-z\\xdf-\\xf6\\xf8-\\xff", xo = "\\xac\\xb1\\xd7\\xf7", Eo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", yo = "\\u2000-\\u206f", So = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ki = "A-Z\\xc0-\\xd6\\xd8-\\xde", ji = "\\ufe0e\\ufe0f", ns = xo + Eo + yo + So, yr = "['\u2019]", Oo = "[" + Ie + "]", ts = "[" + ns + "]", xe = "[" + Xi + "]", es = "\\d+", Ro = "[" + Qi + "]", rs = "[" + Vi + "]", is = "[^" + Ie + ns + es + Qi + Vi + ki + "]", Sr = "\\ud83c[\\udffb-\\udfff]", bo = "(?:" + xe + "|" + Sr + ")", ss = "[^" + Ie + "]", Or = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rr = "[\\ud800-\\udbff][\\udc00-\\udfff]", bt = "[" + ki + "]", us = "\\u200d", as = "(?:" + rs + "|" + is + ")", To = "(?:" + bt + "|" + is + ")", os = "(?:" + yr + "(?:d|ll|m|re|s|t|ve))?", fs = "(?:" + yr + "(?:D|LL|M|RE|S|T|VE))?", cs = bo + "?", hs = "[" + ji + "]?", Lo = "(?:" + us + "(?:" + [
            ss,
            Or,
            Rr
        ].join("|") + ")" + hs + cs + ")*", Do = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ho = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ls = hs + cs + Lo, No = "(?:" + [
            Ro,
            Or,
            Rr
        ].join("|") + ")" + ls, $o = "(?:" + [
            ss + xe + "?",
            xe,
            Or,
            Rr,
            Oo
        ].join("|") + ")", Uo = RegExp(yr, "g"), Wo = RegExp(xe, "g"), br = RegExp(Sr + "(?=" + Sr + ")|" + $o + ls, "g"), Fo = RegExp([
            bt + "?" + rs + "+" + os + "(?=" + [
                ts,
                bt,
                "$"
            ].join("|") + ")",
            To + "+" + fs + "(?=" + [
                ts,
                bt + as,
                "$"
            ].join("|") + ")",
            bt + "?" + as + "+" + os,
            bt + "+" + fs,
            Ho,
            Do,
            es,
            No
        ].join("|"), "g"), Mo = RegExp("[" + us + Ie + Xi + ji + "]"), qo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Bo = [
            "Array",
            "Buffer",
            "DataView",
            "Date",
            "Error",
            "Float32Array",
            "Float64Array",
            "Function",
            "Int8Array",
            "Int16Array",
            "Int32Array",
            "Map",
            "Math",
            "Object",
            "Promise",
            "RegExp",
            "Set",
            "String",
            "Symbol",
            "TypeError",
            "Uint8Array",
            "Uint8ClampedArray",
            "Uint16Array",
            "Uint32Array",
            "WeakMap",
            "_",
            "clearTimeout",
            "isFinite",
            "parseInt",
            "setTimeout"
        ], Go = -1, B = {};
        B[gr] = B[vr] = B[_r] = B[mr] = B[wr] = B[Pr] = B[Ar] = B[Cr] = B[Ir] = !0, B[Ot] = B[me] = B[kt] = B[Yt] = B[Rt] = B[Zt] = B[we] = B[Pe] = B[yn] = B[Jt] = B[qn] = B[Xt] = B[Sn] = B[Qt] = B[Vt] = !1;
        var q = {};
        q[Ot] = q[me] = q[kt] = q[Rt] = q[Yt] = q[Zt] = q[gr] = q[vr] = q[_r] = q[mr] = q[wr] = q[yn] = q[Jt] = q[qn] = q[Xt] = q[Sn] = q[Qt] = q[Ae] = q[Pr] = q[Ar] = q[Cr] = q[Ir] = !0, q[we] = q[Pe] = q[Vt] = !1;
        var zo = {
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "s"
        }, Ko = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }, Yo = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }, Zo = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, Jo = parseFloat, Xo = parseInt, ps = typeof ge == "object" && ge && ge.Object === Object && ge, Qo = typeof self == "object" && self && self.Object === Object && self, k = ps || Qo || Function("return this")(), Tr = u && !u.nodeType && u, lt = Tr && !0 && C && !C.nodeType && C, ds = lt && lt.exports === Tr, Lr = ds && ps.process, _n = function() {
            try {
                var h = lt && lt.require && lt.require("util").types;
                return h || Lr && Lr.binding && Lr.binding("util");
            } catch  {}
        }(), gs = _n && _n.isArrayBuffer, vs = _n && _n.isDate, _s = _n && _n.isMap, ms = _n && _n.isRegExp, ws = _n && _n.isSet, Ps = _n && _n.isTypedArray;
        function cn(h, g, p) {
            switch(p.length){
                case 0:
                    return h.call(g);
                case 1:
                    return h.call(g, p[0]);
                case 2:
                    return h.call(g, p[0], p[1]);
                case 3:
                    return h.call(g, p[0], p[1], p[2]);
            }
            return h.apply(g, p);
        }
        function Vo(h, g, p, A) {
            for(var S = -1, U = h == null ? 0 : h.length; ++S < U;){
                var X = h[S];
                g(A, X, p(X), h);
            }
            return A;
        }
        function mn(h, g) {
            for(var p = -1, A = h == null ? 0 : h.length; ++p < A && g(h[p], p, h) !== !1;);
            return h;
        }
        function ko(h, g) {
            for(var p = h == null ? 0 : h.length; p-- && g(h[p], p, h) !== !1;);
            return h;
        }
        function As(h, g) {
            for(var p = -1, A = h == null ? 0 : h.length; ++p < A;)if (!g(h[p], p, h)) return !1;
            return !0;
        }
        function jn(h, g) {
            for(var p = -1, A = h == null ? 0 : h.length, S = 0, U = []; ++p < A;){
                var X = h[p];
                g(X, p, h) && (U[S++] = X);
            }
            return U;
        }
        function Ee(h, g) {
            var p = h == null ? 0 : h.length;
            return !!p && Tt(h, g, 0) > -1;
        }
        function Dr(h, g, p) {
            for(var A = -1, S = h == null ? 0 : h.length; ++A < S;)if (p(g, h[A])) return !0;
            return !1;
        }
        function G(h, g) {
            for(var p = -1, A = h == null ? 0 : h.length, S = Array(A); ++p < A;)S[p] = g(h[p], p, h);
            return S;
        }
        function nt(h, g) {
            for(var p = -1, A = g.length, S = h.length; ++p < A;)h[S + p] = g[p];
            return h;
        }
        function Hr(h, g, p, A) {
            var S = -1, U = h == null ? 0 : h.length;
            for(A && U && (p = h[++S]); ++S < U;)p = g(p, h[S], S, h);
            return p;
        }
        function jo(h, g, p, A) {
            var S = h == null ? 0 : h.length;
            for(A && S && (p = h[--S]); S--;)p = g(p, h[S], S, h);
            return p;
        }
        function Nr(h, g) {
            for(var p = -1, A = h == null ? 0 : h.length; ++p < A;)if (g(h[p], p, h)) return !0;
            return !1;
        }
        var nf = $r("length");
        function tf(h) {
            return h.split("");
        }
        function ef(h) {
            return h.match(fo) || [];
        }
        function Cs(h, g, p) {
            var A;
            return p(h, function(S, U, X) {
                if (g(S, U, X)) return A = U, !1;
            }), A;
        }
        function ye(h, g, p, A) {
            for(var S = h.length, U = p + (A ? 1 : -1); A ? U-- : ++U < S;)if (g(h[U], U, h)) return U;
            return -1;
        }
        function Tt(h, g, p) {
            return g === g ? gf(h, g, p) : ye(h, Is, p);
        }
        function rf(h, g, p, A) {
            for(var S = p - 1, U = h.length; ++S < U;)if (A(h[S], g)) return S;
            return -1;
        }
        function Is(h) {
            return h !== h;
        }
        function xs(h, g) {
            var p = h == null ? 0 : h.length;
            return p ? Wr(h, g) / p : _e;
        }
        function $r(h) {
            return function(g) {
                return g == null ? i : g[h];
            };
        }
        function Ur(h) {
            return function(g) {
                return h == null ? i : h[g];
            };
        }
        function Es(h, g, p, A, S) {
            return S(h, function(U, X, M) {
                p = A ? (A = !1, U) : g(p, U, X, M);
            }), p;
        }
        function sf(h, g) {
            var p = h.length;
            for(h.sort(g); p--;)h[p] = h[p].value;
            return h;
        }
        function Wr(h, g) {
            for(var p, A = -1, S = h.length; ++A < S;){
                var U = g(h[A]);
                U !== i && (p = p === i ? U : p + U);
            }
            return p;
        }
        function Fr(h, g) {
            for(var p = -1, A = Array(h); ++p < h;)A[p] = g(p);
            return A;
        }
        function uf(h, g) {
            return G(g, function(p) {
                return [
                    p,
                    h[p]
                ];
            });
        }
        function ys(h) {
            return h && h.slice(0, bs(h) + 1).replace(Er, "");
        }
        function hn(h) {
            return function(g) {
                return h(g);
            };
        }
        function Mr(h, g) {
            return G(g, function(p) {
                return h[p];
            });
        }
        function jt(h, g) {
            return h.has(g);
        }
        function Ss(h, g) {
            for(var p = -1, A = h.length; ++p < A && Tt(g, h[p], 0) > -1;);
            return p;
        }
        function Os(h, g) {
            for(var p = h.length; p-- && Tt(g, h[p], 0) > -1;);
            return p;
        }
        function af(h, g) {
            for(var p = h.length, A = 0; p--;)h[p] === g && ++A;
            return A;
        }
        var of = Ur(zo), ff = Ur(Ko);
        function cf(h) {
            return "\\" + Zo[h];
        }
        function hf(h, g) {
            return h == null ? i : h[g];
        }
        function Lt(h) {
            return Mo.test(h);
        }
        function lf(h) {
            return qo.test(h);
        }
        function pf(h) {
            for(var g, p = []; !(g = h.next()).done;)p.push(g.value);
            return p;
        }
        function qr(h) {
            var g = -1, p = Array(h.size);
            return h.forEach(function(A, S) {
                p[++g] = [
                    S,
                    A
                ];
            }), p;
        }
        function Rs(h, g) {
            return function(p) {
                return h(g(p));
            };
        }
        function tt(h, g) {
            for(var p = -1, A = h.length, S = 0, U = []; ++p < A;){
                var X = h[p];
                (X === g || X === It) && (h[p] = It, U[S++] = p);
            }
            return U;
        }
        function Se(h) {
            var g = -1, p = Array(h.size);
            return h.forEach(function(A) {
                p[++g] = A;
            }), p;
        }
        function df(h) {
            var g = -1, p = Array(h.size);
            return h.forEach(function(A) {
                p[++g] = [
                    A,
                    A
                ];
            }), p;
        }
        function gf(h, g, p) {
            for(var A = p - 1, S = h.length; ++A < S;)if (h[A] === g) return A;
            return -1;
        }
        function vf(h, g, p) {
            for(var A = p + 1; A--;)if (h[A] === g) return A;
            return A;
        }
        function Dt(h) {
            return Lt(h) ? mf(h) : nf(h);
        }
        function On(h) {
            return Lt(h) ? wf(h) : tf(h);
        }
        function bs(h) {
            for(var g = h.length; g-- && so.test(h.charAt(g)););
            return g;
        }
        var _f = Ur(Yo);
        function mf(h) {
            for(var g = br.lastIndex = 0; br.test(h);)++g;
            return g;
        }
        function wf(h) {
            return h.match(br) || [];
        }
        function Pf(h) {
            return h.match(Fo) || [];
        }
        var Af = function h(g) {
            g = g == null ? k : Ht.defaults(k.Object(), g, Ht.pick(k, Bo));
            var p = g.Array, A = g.Date, S = g.Error, U = g.Function, X = g.Math, M = g.Object, Br = g.RegExp, Cf = g.String, wn = g.TypeError, Oe = p.prototype, If = U.prototype, Nt = M.prototype, Re = g["__core-js_shared__"], be = If.toString, F = Nt.hasOwnProperty, xf = 0, Ts = function() {
                var n = /[^.]+$/.exec(Re && Re.keys && Re.keys.IE_PROTO || "");
                return n ? "Symbol(src)_1." + n : "";
            }(), Te = Nt.toString, Ef = be.call(M), yf = k._, Sf = Br("^" + be.call(F).replace(xr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Le = ds ? g.Buffer : i, et = g.Symbol, De = g.Uint8Array, Ls = Le ? Le.allocUnsafe : i, He = Rs(M.getPrototypeOf, M), Ds = M.create, Hs = Nt.propertyIsEnumerable, Ne = Oe.splice, Ns = et ? et.isConcatSpreadable : i, ne = et ? et.iterator : i, pt = et ? et.toStringTag : i, $e = function() {
                try {
                    var n = mt(M, "defineProperty");
                    return n({}, "", {}), n;
                } catch  {}
            }(), Of = g.clearTimeout !== k.clearTimeout && g.clearTimeout, Rf = A && A.now !== k.Date.now && A.now, bf = g.setTimeout !== k.setTimeout && g.setTimeout, Ue = X.ceil, We = X.floor, Gr = M.getOwnPropertySymbols, Tf = Le ? Le.isBuffer : i, $s = g.isFinite, Lf = Oe.join, Df = Rs(M.keys, M), Q = X.max, nn = X.min, Hf = A.now, Nf = g.parseInt, Us = X.random, $f = Oe.reverse, zr = mt(g, "DataView"), te = mt(g, "Map"), Kr = mt(g, "Promise"), $t = mt(g, "Set"), ee = mt(g, "WeakMap"), re = mt(M, "create"), Fe = ee && new ee, Ut = {}, Uf = wt(zr), Wf = wt(te), Ff = wt(Kr), Mf = wt($t), qf = wt(ee), Me = et ? et.prototype : i, ie = Me ? Me.valueOf : i, Ws = Me ? Me.toString : i;
            function a(n) {
                if (Y(n) && !O(n) && !(n instanceof H)) {
                    if (n instanceof Pn) return n;
                    if (F.call(n, "__wrapped__")) return Fu(n);
                }
                return new Pn(n);
            }
            var Wt = function() {
                function n() {}
                return function(t) {
                    if (!K(t)) return {};
                    if (Ds) return Ds(t);
                    n.prototype = t;
                    var e = new n;
                    return n.prototype = i, e;
                };
            }();
            function qe() {}
            function Pn(n, t) {
                this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i;
            }
            a.templateSettings = {
                escape: ja,
                evaluate: no,
                interpolate: Zi,
                variable: "",
                imports: {
                    _: a
                }
            }, a.prototype = qe.prototype, a.prototype.constructor = a, Pn.prototype = Wt(qe.prototype), Pn.prototype.constructor = Pn;
            function H(n) {
                this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Nn, this.__views__ = [];
            }
            function Bf() {
                var n = new H(this.__wrapped__);
                return n.__actions__ = un(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = un(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = un(this.__views__), n;
            }
            function Gf() {
                if (this.__filtered__) {
                    var n = new H(this);
                    n.__dir__ = -1, n.__filtered__ = !0;
                } else n = this.clone(), n.__dir__ *= -1;
                return n;
            }
            function zf() {
                var n = this.__wrapped__.value(), t = this.__dir__, e = O(n), r = t < 0, s = e ? n.length : 0, o = eh(0, s, this.__views__), f = o.start, c = o.end, l = c - f, v = r ? c : f - 1, _ = this.__iteratees__, m = _.length, P = 0, I = nn(l, this.__takeCount__);
                if (!e || !r && s == l && I == l) return ou(n, this.__actions__);
                var E = [];
                n: for(; l-- && P < I;){
                    v += t;
                    for(var b = -1, y = n[v]; ++b < m;){
                        var D = _[b], N = D.iteratee, dn = D.type, sn = N(y);
                        if (dn == $a) y = sn;
                        else if (!sn) {
                            if (dn == Bi) continue n;
                            break n;
                        }
                    }
                    E[P++] = y;
                }
                return E;
            }
            H.prototype = Wt(qe.prototype), H.prototype.constructor = H;
            function dt(n) {
                var t = -1, e = n == null ? 0 : n.length;
                for(this.clear(); ++t < e;){
                    var r = n[t];
                    this.set(r[0], r[1]);
                }
            }
            function Kf() {
                this.__data__ = re ? re(null) : {}, this.size = 0;
            }
            function Yf(n) {
                var t = this.has(n) && delete this.__data__[n];
                return this.size -= t ? 1 : 0, t;
            }
            function Zf(n) {
                var t = this.__data__;
                if (re) {
                    var e = t[n];
                    return e === zt ? i : e;
                }
                return F.call(t, n) ? t[n] : i;
            }
            function Jf(n) {
                var t = this.__data__;
                return re ? t[n] !== i : F.call(t, n);
            }
            function Xf(n, t) {
                var e = this.__data__;
                return this.size += this.has(n) ? 0 : 1, e[n] = re && t === i ? zt : t, this;
            }
            dt.prototype.clear = Kf, dt.prototype.delete = Yf, dt.prototype.get = Zf, dt.prototype.has = Jf, dt.prototype.set = Xf;
            function Bn(n) {
                var t = -1, e = n == null ? 0 : n.length;
                for(this.clear(); ++t < e;){
                    var r = n[t];
                    this.set(r[0], r[1]);
                }
            }
            function Qf() {
                this.__data__ = [], this.size = 0;
            }
            function Vf(n) {
                var t = this.__data__, e = Be(t, n);
                if (e < 0) return !1;
                var r = t.length - 1;
                return e == r ? t.pop() : Ne.call(t, e, 1), --this.size, !0;
            }
            function kf(n) {
                var t = this.__data__, e = Be(t, n);
                return e < 0 ? i : t[e][1];
            }
            function jf(n) {
                return Be(this.__data__, n) > -1;
            }
            function nc(n, t) {
                var e = this.__data__, r = Be(e, n);
                return r < 0 ? (++this.size, e.push([
                    n,
                    t
                ])) : e[r][1] = t, this;
            }
            Bn.prototype.clear = Qf, Bn.prototype.delete = Vf, Bn.prototype.get = kf, Bn.prototype.has = jf, Bn.prototype.set = nc;
            function Gn(n) {
                var t = -1, e = n == null ? 0 : n.length;
                for(this.clear(); ++t < e;){
                    var r = n[t];
                    this.set(r[0], r[1]);
                }
            }
            function tc() {
                this.size = 0, this.__data__ = {
                    hash: new dt,
                    map: new (te || Bn),
                    string: new dt
                };
            }
            function ec(n) {
                var t = nr(this, n).delete(n);
                return this.size -= t ? 1 : 0, t;
            }
            function rc(n) {
                return nr(this, n).get(n);
            }
            function ic(n) {
                return nr(this, n).has(n);
            }
            function sc(n, t) {
                var e = nr(this, n), r = e.size;
                return e.set(n, t), this.size += e.size == r ? 0 : 1, this;
            }
            Gn.prototype.clear = tc, Gn.prototype.delete = ec, Gn.prototype.get = rc, Gn.prototype.has = ic, Gn.prototype.set = sc;
            function gt(n) {
                var t = -1, e = n == null ? 0 : n.length;
                for(this.__data__ = new Gn; ++t < e;)this.add(n[t]);
            }
            function uc(n) {
                return this.__data__.set(n, zt), this;
            }
            function ac(n) {
                return this.__data__.has(n);
            }
            gt.prototype.add = gt.prototype.push = uc, gt.prototype.has = ac;
            function Rn(n) {
                var t = this.__data__ = new Bn(n);
                this.size = t.size;
            }
            function oc() {
                this.__data__ = new Bn, this.size = 0;
            }
            function fc(n) {
                var t = this.__data__, e = t.delete(n);
                return this.size = t.size, e;
            }
            function cc(n) {
                return this.__data__.get(n);
            }
            function hc(n) {
                return this.__data__.has(n);
            }
            function lc(n, t) {
                var e = this.__data__;
                if (e instanceof Bn) {
                    var r = e.__data__;
                    if (!te || r.length < w - 1) return r.push([
                        n,
                        t
                    ]), this.size = ++e.size, this;
                    e = this.__data__ = new Gn(r);
                }
                return e.set(n, t), this.size = e.size, this;
            }
            Rn.prototype.clear = oc, Rn.prototype.delete = fc, Rn.prototype.get = cc, Rn.prototype.has = hc, Rn.prototype.set = lc;
            function Fs(n, t) {
                var e = O(n), r = !e && Pt(n), s = !e && !r && at(n), o = !e && !r && !s && Bt(n), f = e || r || s || o, c = f ? Fr(n.length, Cf) : [], l = c.length;
                for(var v in n)(t || F.call(n, v)) && !(f && (v == "length" || s && (v == "offset" || v == "parent") || o && (v == "buffer" || v == "byteLength" || v == "byteOffset") || Zn(v, l))) && c.push(v);
                return c;
            }
            function Ms(n) {
                var t = n.length;
                return t ? n[ei(0, t - 1)] : i;
            }
            function pc(n, t) {
                return tr(un(n), vt(t, 0, n.length));
            }
            function dc(n) {
                return tr(un(n));
            }
            function Yr(n, t, e) {
                (e !== i && !bn(n[t], e) || e === i && !(t in n)) && zn(n, t, e);
            }
            function se(n, t, e) {
                var r = n[t];
                (!(F.call(n, t) && bn(r, e)) || e === i && !(t in n)) && zn(n, t, e);
            }
            function Be(n, t) {
                for(var e = n.length; e--;)if (bn(n[e][0], t)) return e;
                return -1;
            }
            function gc(n, t, e, r) {
                return rt(n, function(s, o, f) {
                    t(r, s, e(s), f);
                }), r;
            }
            function qs(n, t) {
                return n && Un(t, V(t), n);
            }
            function vc(n, t) {
                return n && Un(t, on(t), n);
            }
            function zn(n, t, e) {
                t == "__proto__" && $e ? $e(n, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: e,
                    writable: !0
                }) : n[t] = e;
            }
            function Zr(n, t) {
                for(var e = -1, r = t.length, s = p(r), o = n == null; ++e < r;)s[e] = o ? i : Si(n, t[e]);
                return s;
            }
            function vt(n, t, e) {
                return n === n && (e !== i && (n = n <= e ? n : e), t !== i && (n = n >= t ? n : t)), n;
            }
            function An(n, t, e, r, s, o) {
                var f, c = t & Ln, l = t & Fn, v = t & xt;
                if (e && (f = s ? e(n, r, s, o) : e(n)), f !== i) return f;
                if (!K(n)) return n;
                var _ = O(n);
                if (_) {
                    if (f = ih(n), !c) return un(n, f);
                } else {
                    var m = tn(n), P = m == Pe || m == Gi;
                    if (at(n)) return hu(n, c);
                    if (m == qn || m == Ot || P && !s) {
                        if (f = l || P ? {} : bu(n), !c) return l ? Zc(n, vc(f, n)) : Yc(n, qs(f, n));
                    } else {
                        if (!q[m]) return s ? n : {};
                        f = sh(n, m, c);
                    }
                }
                o || (o = new Rn);
                var I = o.get(n);
                if (I) return I;
                o.set(n, f), sa(n) ? n.forEach(function(y) {
                    f.add(An(y, t, e, y, n, o));
                }) : ra(n) && n.forEach(function(y, D) {
                    f.set(D, An(y, t, e, D, n, o));
                });
                var E = v ? l ? pi : li : l ? on : V, b = _ ? i : E(n);
                return mn(b || n, function(y, D) {
                    b && (D = y, y = n[D]), se(f, D, An(y, t, e, D, n, o));
                }), f;
            }
            function _c(n) {
                var t = V(n);
                return function(e) {
                    return Bs(e, n, t);
                };
            }
            function Bs(n, t, e) {
                var r = e.length;
                if (n == null) return !r;
                for(n = M(n); r--;){
                    var s = e[r], o = t[s], f = n[s];
                    if (f === i && !(s in n) || !o(f)) return !1;
                }
                return !0;
            }
            function Gs(n, t, e) {
                if (typeof n != "function") throw new wn($);
                return le(function() {
                    n.apply(i, e);
                }, t);
            }
            function ue(n, t, e, r) {
                var s = -1, o = Ee, f = !0, c = n.length, l = [], v = t.length;
                if (!c) return l;
                e && (t = G(t, hn(e))), r ? (o = Dr, f = !1) : t.length >= w && (o = jt, f = !1, t = new gt(t));
                n: for(; ++s < c;){
                    var _ = n[s], m = e == null ? _ : e(_);
                    if (_ = r || _ !== 0 ? _ : 0, f && m === m) {
                        for(var P = v; P--;)if (t[P] === m) continue n;
                        l.push(_);
                    } else o(t, m, r) || l.push(_);
                }
                return l;
            }
            var rt = vu($n), zs = vu(Xr, !0);
            function mc(n, t) {
                var e = !0;
                return rt(n, function(r, s, o) {
                    return e = !!t(r, s, o), e;
                }), e;
            }
            function Ge(n, t, e) {
                for(var r = -1, s = n.length; ++r < s;){
                    var o = n[r], f = t(o);
                    if (f != null && (c === i ? f === f && !pn(f) : e(f, c))) var c = f, l = o;
                }
                return l;
            }
            function wc(n, t, e, r) {
                var s = n.length;
                for(e = R(e), e < 0 && (e = -e > s ? 0 : s + e), r = r === i || r > s ? s : R(r), r < 0 && (r += s), r = e > r ? 0 : aa(r); e < r;)n[e++] = t;
                return n;
            }
            function Ks(n, t) {
                var e = [];
                return rt(n, function(r, s, o) {
                    t(r, s, o) && e.push(r);
                }), e;
            }
            function j(n, t, e, r, s) {
                var o = -1, f = n.length;
                for(e || (e = ah), s || (s = []); ++o < f;){
                    var c = n[o];
                    t > 0 && e(c) ? t > 1 ? j(c, t - 1, e, r, s) : nt(s, c) : r || (s[s.length] = c);
                }
                return s;
            }
            var Jr = _u(), Ys = _u(!0);
            function $n(n, t) {
                return n && Jr(n, t, V);
            }
            function Xr(n, t) {
                return n && Ys(n, t, V);
            }
            function ze(n, t) {
                return jn(t, function(e) {
                    return Jn(n[e]);
                });
            }
            function _t(n, t) {
                t = st(t, n);
                for(var e = 0, r = t.length; n != null && e < r;)n = n[Wn(t[e++])];
                return e && e == r ? n : i;
            }
            function Zs(n, t, e) {
                var r = t(n);
                return O(n) ? r : nt(r, e(n));
            }
            function en(n) {
                return n == null ? n === i ? Ya : za : pt && pt in M(n) ? th(n) : dh(n);
            }
            function Qr(n, t) {
                return n > t;
            }
            function Pc(n, t) {
                return n != null && F.call(n, t);
            }
            function Ac(n, t) {
                return n != null && t in M(n);
            }
            function Cc(n, t, e) {
                return n >= nn(t, e) && n < Q(t, e);
            }
            function Vr(n, t, e) {
                for(var r = e ? Dr : Ee, s = n[0].length, o = n.length, f = o, c = p(o), l = 1 / 0, v = []; f--;){
                    var _ = n[f];
                    f && t && (_ = G(_, hn(t))), l = nn(_.length, l), c[f] = !e && (t || s >= 120 && _.length >= 120) ? new gt(f && _) : i;
                }
                _ = n[0];
                var m = -1, P = c[0];
                n: for(; ++m < s && v.length < l;){
                    var I = _[m], E = t ? t(I) : I;
                    if (I = e || I !== 0 ? I : 0, !(P ? jt(P, E) : r(v, E, e))) {
                        for(f = o; --f;){
                            var b = c[f];
                            if (!(b ? jt(b, E) : r(n[f], E, e))) continue n;
                        }
                        P && P.push(E), v.push(I);
                    }
                }
                return v;
            }
            function Ic(n, t, e, r) {
                return $n(n, function(s, o, f) {
                    t(r, e(s), o, f);
                }), r;
            }
            function ae(n, t, e) {
                t = st(t, n), n = Hu(n, t);
                var r = n == null ? n : n[Wn(In(t))];
                return r == null ? i : cn(r, n, e);
            }
            function Js(n) {
                return Y(n) && en(n) == Ot;
            }
            function xc(n) {
                return Y(n) && en(n) == kt;
            }
            function Ec(n) {
                return Y(n) && en(n) == Zt;
            }
            function oe(n, t, e, r, s) {
                return n === t ? !0 : n == null || t == null || !Y(n) && !Y(t) ? n !== n && t !== t : yc(n, t, e, r, oe, s);
            }
            function yc(n, t, e, r, s, o) {
                var f = O(n), c = O(t), l = f ? me : tn(n), v = c ? me : tn(t);
                l = l == Ot ? qn : l, v = v == Ot ? qn : v;
                var _ = l == qn, m = v == qn, P = l == v;
                if (P && at(n)) {
                    if (!at(t)) return !1;
                    f = !0, _ = !1;
                }
                if (P && !_) return o || (o = new Rn), f || Bt(n) ? Su(n, t, e, r, s, o) : jc(n, t, l, e, r, s, o);
                if (!(e & Et)) {
                    var I = _ && F.call(n, "__wrapped__"), E = m && F.call(t, "__wrapped__");
                    if (I || E) {
                        var b = I ? n.value() : n, y = E ? t.value() : t;
                        return o || (o = new Rn), s(b, y, e, r, o);
                    }
                }
                return P ? (o || (o = new Rn), nh(n, t, e, r, s, o)) : !1;
            }
            function Sc(n) {
                return Y(n) && tn(n) == yn;
            }
            function kr(n, t, e, r) {
                var s = e.length, o = s, f = !r;
                if (n == null) return !o;
                for(n = M(n); s--;){
                    var c = e[s];
                    if (f && c[2] ? c[1] !== n[c[0]] : !(c[0] in n)) return !1;
                }
                for(; ++s < o;){
                    c = e[s];
                    var l = c[0], v = n[l], _ = c[1];
                    if (f && c[2]) {
                        if (v === i && !(l in n)) return !1;
                    } else {
                        var m = new Rn;
                        if (r) var P = r(v, _, l, n, t, m);
                        if (!(P === i ? oe(_, v, Et | ve, r, m) : P)) return !1;
                    }
                }
                return !0;
            }
            function Xs(n) {
                if (!K(n) || fh(n)) return !1;
                var t = Jn(n) ? Sf : vo;
                return t.test(wt(n));
            }
            function Oc(n) {
                return Y(n) && en(n) == Xt;
            }
            function Rc(n) {
                return Y(n) && tn(n) == Sn;
            }
            function bc(n) {
                return Y(n) && ar(n.length) && !!B[en(n)];
            }
            function Qs(n) {
                return typeof n == "function" ? n : n == null ? fn : typeof n == "object" ? O(n) ? js(n[0], n[1]) : ks(n) : ma(n);
            }
            function jr(n) {
                if (!he(n)) return Df(n);
                var t = [];
                for(var e in M(n))F.call(n, e) && e != "constructor" && t.push(e);
                return t;
            }
            function Tc(n) {
                if (!K(n)) return ph(n);
                var t = he(n), e = [];
                for(var r in n)r == "constructor" && (t || !F.call(n, r)) || e.push(r);
                return e;
            }
            function ni(n, t) {
                return n < t;
            }
            function Vs(n, t) {
                var e = -1, r = an(n) ? p(n.length) : [];
                return rt(n, function(s, o, f) {
                    r[++e] = t(s, o, f);
                }), r;
            }
            function ks(n) {
                var t = gi(n);
                return t.length == 1 && t[0][2] ? Lu(t[0][0], t[0][1]) : function(e) {
                    return e === n || kr(e, n, t);
                };
            }
            function js(n, t) {
                return _i(n) && Tu(t) ? Lu(Wn(n), t) : function(e) {
                    var r = Si(e, n);
                    return r === i && r === t ? Oi(e, n) : oe(t, r, Et | ve);
                };
            }
            function Ke(n, t, e, r, s) {
                n !== t && Jr(t, function(o, f) {
                    if (s || (s = new Rn), K(o)) Lc(n, t, f, e, Ke, r, s);
                    else {
                        var c = r ? r(wi(n, f), o, f + "", n, t, s) : i;
                        c === i && (c = o), Yr(n, f, c);
                    }
                }, on);
            }
            function Lc(n, t, e, r, s, o, f) {
                var c = wi(n, e), l = wi(t, e), v = f.get(l);
                if (v) {
                    Yr(n, e, v);
                    return;
                }
                var _ = o ? o(c, l, e + "", n, t, f) : i, m = _ === i;
                if (m) {
                    var P = O(l), I = !P && at(l), E = !P && !I && Bt(l);
                    _ = l, P || I || E ? O(c) ? _ = c : Z(c) ? _ = un(c) : I ? (m = !1, _ = hu(l, !0)) : E ? (m = !1, _ = lu(l, !0)) : _ = [] : pe(l) || Pt(l) ? (_ = c, Pt(c) ? _ = oa(c) : (!K(c) || Jn(c)) && (_ = bu(l))) : m = !1;
                }
                m && (f.set(l, _), s(_, l, r, o, f), f.delete(l)), Yr(n, e, _);
            }
            function nu(n, t) {
                var e = n.length;
                if (e) return t += t < 0 ? e : 0, Zn(t, e) ? n[t] : i;
            }
            function tu(n, t, e) {
                t.length ? t = G(t, function(o) {
                    return O(o) ? function(f) {
                        return _t(f, o.length === 1 ? o[0] : o);
                    } : o;
                }) : t = [
                    fn
                ];
                var r = -1;
                t = G(t, hn(x()));
                var s = Vs(n, function(o, f, c) {
                    var l = G(t, function(v) {
                        return v(o);
                    });
                    return {
                        criteria: l,
                        index: ++r,
                        value: o
                    };
                });
                return sf(s, function(o, f) {
                    return Kc(o, f, e);
                });
            }
            function Dc(n, t) {
                return eu(n, t, function(e, r) {
                    return Oi(n, r);
                });
            }
            function eu(n, t, e) {
                for(var r = -1, s = t.length, o = {}; ++r < s;){
                    var f = t[r], c = _t(n, f);
                    e(c, f) && fe(o, st(f, n), c);
                }
                return o;
            }
            function Hc(n) {
                return function(t) {
                    return _t(t, n);
                };
            }
            function ti(n, t, e, r) {
                var s = r ? rf : Tt, o = -1, f = t.length, c = n;
                for(n === t && (t = un(t)), e && (c = G(n, hn(e))); ++o < f;)for(var l = 0, v = t[o], _ = e ? e(v) : v; (l = s(c, _, l, r)) > -1;)c !== n && Ne.call(c, l, 1), Ne.call(n, l, 1);
                return n;
            }
            function ru(n, t) {
                for(var e = n ? t.length : 0, r = e - 1; e--;){
                    var s = t[e];
                    if (e == r || s !== o) {
                        var o = s;
                        Zn(s) ? Ne.call(n, s, 1) : si(n, s);
                    }
                }
                return n;
            }
            function ei(n, t) {
                return n + We(Us() * (t - n + 1));
            }
            function Nc(n, t, e, r) {
                for(var s = -1, o = Q(Ue((t - n) / (e || 1)), 0), f = p(o); o--;)f[r ? o : ++s] = n, n += e;
                return f;
            }
            function ri(n, t) {
                var e = "";
                if (!n || t < 1 || t > kn) return e;
                do t % 2 && (e += n), t = We(t / 2), t && (n += n);
                while (t)
                return e;
            }
            function L(n, t) {
                return Pi(Du(n, t, fn), n + "");
            }
            function $c(n) {
                return Ms(Gt(n));
            }
            function Uc(n, t) {
                var e = Gt(n);
                return tr(e, vt(t, 0, e.length));
            }
            function fe(n, t, e, r) {
                if (!K(n)) return n;
                t = st(t, n);
                for(var s = -1, o = t.length, f = o - 1, c = n; c != null && ++s < o;){
                    var l = Wn(t[s]), v = e;
                    if (l === "__proto__" || l === "constructor" || l === "prototype") return n;
                    if (s != f) {
                        var _ = c[l];
                        v = r ? r(_, l, c) : i, v === i && (v = K(_) ? _ : Zn(t[s + 1]) ? [] : {});
                    }
                    se(c, l, v), c = c[l];
                }
                return n;
            }
            var iu = Fe ? function(n, t) {
                return Fe.set(n, t), n;
            } : fn, Wc = $e ? function(n, t) {
                return $e(n, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: bi(t),
                    writable: !0
                });
            } : fn;
            function Fc(n) {
                return tr(Gt(n));
            }
            function Cn(n, t, e) {
                var r = -1, s = n.length;
                t < 0 && (t = -t > s ? 0 : s + t), e = e > s ? s : e, e < 0 && (e += s), s = t > e ? 0 : e - t >>> 0, t >>>= 0;
                for(var o = p(s); ++r < s;)o[r] = n[r + t];
                return o;
            }
            function Mc(n, t) {
                var e;
                return rt(n, function(r, s, o) {
                    return e = t(r, s, o), !e;
                }), !!e;
            }
            function Ye(n, t, e) {
                var r = 0, s = n == null ? r : n.length;
                if (typeof t == "number" && t === t && s <= Ma) {
                    for(; r < s;){
                        var o = r + s >>> 1, f = n[o];
                        f !== null && !pn(f) && (e ? f <= t : f < t) ? r = o + 1 : s = o;
                    }
                    return s;
                }
                return ii(n, t, fn, e);
            }
            function ii(n, t, e, r) {
                var s = 0, o = n == null ? 0 : n.length;
                if (o === 0) return 0;
                t = e(t);
                for(var f = t !== t, c = t === null, l = pn(t), v = t === i; s < o;){
                    var _ = We((s + o) / 2), m = e(n[_]), P = m !== i, I = m === null, E = m === m, b = pn(m);
                    if (f) var y = r || E;
                    else v ? y = E && (r || P) : c ? y = E && P && (r || !I) : l ? y = E && P && !I && (r || !b) : I || b ? y = !1 : y = r ? m <= t : m < t;
                    y ? s = _ + 1 : o = _;
                }
                return nn(o, Fa);
            }
            function su(n, t) {
                for(var e = -1, r = n.length, s = 0, o = []; ++e < r;){
                    var f = n[e], c = t ? t(f) : f;
                    if (!e || !bn(c, l)) {
                        var l = c;
                        o[s++] = f === 0 ? 0 : f;
                    }
                }
                return o;
            }
            function uu(n) {
                return typeof n == "number" ? n : pn(n) ? _e : +n;
            }
            function ln(n) {
                if (typeof n == "string") return n;
                if (O(n)) return G(n, ln) + "";
                if (pn(n)) return Ws ? Ws.call(n) : "";
                var t = n + "";
                return t == "0" && 1 / n == -ht ? "-0" : t;
            }
            function it(n, t, e) {
                var r = -1, s = Ee, o = n.length, f = !0, c = [], l = c;
                if (e) f = !1, s = Dr;
                else if (o >= w) {
                    var v = t ? null : Vc(n);
                    if (v) return Se(v);
                    f = !1, s = jt, l = new gt;
                } else l = t ? [] : c;
                n: for(; ++r < o;){
                    var _ = n[r], m = t ? t(_) : _;
                    if (_ = e || _ !== 0 ? _ : 0, f && m === m) {
                        for(var P = l.length; P--;)if (l[P] === m) continue n;
                        t && l.push(m), c.push(_);
                    } else s(l, m, e) || (l !== c && l.push(m), c.push(_));
                }
                return c;
            }
            function si(n, t) {
                return t = st(t, n), n = Hu(n, t), n == null || delete n[Wn(In(t))];
            }
            function au(n, t, e, r) {
                return fe(n, t, e(_t(n, t)), r);
            }
            function Ze(n, t, e, r) {
                for(var s = n.length, o = r ? s : -1; (r ? o-- : ++o < s) && t(n[o], o, n););
                return e ? Cn(n, r ? 0 : o, r ? o + 1 : s) : Cn(n, r ? o + 1 : 0, r ? s : o);
            }
            function ou(n, t) {
                var e = n;
                return e instanceof H && (e = e.value()), Hr(t, function(r, s) {
                    return s.func.apply(s.thisArg, nt([
                        r
                    ], s.args));
                }, e);
            }
            function ui(n, t, e) {
                var r = n.length;
                if (r < 2) return r ? it(n[0]) : [];
                for(var s = -1, o = p(r); ++s < r;)for(var f = n[s], c = -1; ++c < r;)c != s && (o[s] = ue(o[s] || f, n[c], t, e));
                return it(j(o, 1), t, e);
            }
            function fu(n, t, e) {
                for(var r = -1, s = n.length, o = t.length, f = {}; ++r < s;){
                    var c = r < o ? t[r] : i;
                    e(f, n[r], c);
                }
                return f;
            }
            function ai(n) {
                return Z(n) ? n : [];
            }
            function oi(n) {
                return typeof n == "function" ? n : fn;
            }
            function st(n, t) {
                return O(n) ? n : _i(n, t) ? [
                    n
                ] : Wu(W(n));
            }
            var qc = L;
            function ut(n, t, e) {
                var r = n.length;
                return e = e === i ? r : e, !t && e >= r ? n : Cn(n, t, e);
            }
            var cu = Of || function(n) {
                return k.clearTimeout(n);
            };
            function hu(n, t) {
                if (t) return n.slice();
                var e = n.length, r = Ls ? Ls(e) : new n.constructor(e);
                return n.copy(r), r;
            }
            function fi(n) {
                var t = new n.constructor(n.byteLength);
                return new De(t).set(new De(n)), t;
            }
            function Bc(n, t) {
                var e = t ? fi(n.buffer) : n.buffer;
                return new n.constructor(e, n.byteOffset, n.byteLength);
            }
            function Gc(n) {
                var t = new n.constructor(n.source, Ji.exec(n));
                return t.lastIndex = n.lastIndex, t;
            }
            function zc(n) {
                return ie ? M(ie.call(n)) : {};
            }
            function lu(n, t) {
                var e = t ? fi(n.buffer) : n.buffer;
                return new n.constructor(e, n.byteOffset, n.length);
            }
            function pu(n, t) {
                if (n !== t) {
                    var e = n !== i, r = n === null, s = n === n, o = pn(n), f = t !== i, c = t === null, l = t === t, v = pn(t);
                    if (!c && !v && !o && n > t || o && f && l && !c && !v || r && f && l || !e && l || !s) return 1;
                    if (!r && !o && !v && n < t || v && e && s && !r && !o || c && e && s || !f && s || !l) return -1;
                }
                return 0;
            }
            function Kc(n, t, e) {
                for(var r = -1, s = n.criteria, o = t.criteria, f = s.length, c = e.length; ++r < f;){
                    var l = pu(s[r], o[r]);
                    if (l) {
                        if (r >= c) return l;
                        var v = e[r];
                        return l * (v == "desc" ? -1 : 1);
                    }
                }
                return n.index - t.index;
            }
            function du(n, t, e, r) {
                for(var s = -1, o = n.length, f = e.length, c = -1, l = t.length, v = Q(o - f, 0), _ = p(l + v), m = !r; ++c < l;)_[c] = t[c];
                for(; ++s < f;)(m || s < o) && (_[e[s]] = n[s]);
                for(; v--;)_[c++] = n[s++];
                return _;
            }
            function gu(n, t, e, r) {
                for(var s = -1, o = n.length, f = -1, c = e.length, l = -1, v = t.length, _ = Q(o - c, 0), m = p(_ + v), P = !r; ++s < _;)m[s] = n[s];
                for(var I = s; ++l < v;)m[I + l] = t[l];
                for(; ++f < c;)(P || s < o) && (m[I + e[f]] = n[s++]);
                return m;
            }
            function un(n, t) {
                var e = -1, r = n.length;
                for(t || (t = p(r)); ++e < r;)t[e] = n[e];
                return t;
            }
            function Un(n, t, e, r) {
                var s = !e;
                e || (e = {});
                for(var o = -1, f = t.length; ++o < f;){
                    var c = t[o], l = r ? r(e[c], n[c], c, e, n) : i;
                    l === i && (l = n[c]), s ? zn(e, c, l) : se(e, c, l);
                }
                return e;
            }
            function Yc(n, t) {
                return Un(n, vi(n), t);
            }
            function Zc(n, t) {
                return Un(n, Ou(n), t);
            }
            function Je(n, t) {
                return function(e, r) {
                    var s = O(e) ? Vo : gc, o = t ? t() : {};
                    return s(e, n, x(r, 2), o);
                };
            }
            function Ft(n) {
                return L(function(t, e) {
                    var r = -1, s = e.length, o = s > 1 ? e[s - 1] : i, f = s > 2 ? e[2] : i;
                    for(o = n.length > 3 && typeof o == "function" ? (s--, o) : i, f && rn(e[0], e[1], f) && (o = s < 3 ? i : o, s = 1), t = M(t); ++r < s;){
                        var c = e[r];
                        c && n(t, c, r, o);
                    }
                    return t;
                });
            }
            function vu(n, t) {
                return function(e, r) {
                    if (e == null) return e;
                    if (!an(e)) return n(e, r);
                    for(var s = e.length, o = t ? s : -1, f = M(e); (t ? o-- : ++o < s) && r(f[o], o, f) !== !1;);
                    return e;
                };
            }
            function _u(n) {
                return function(t, e, r) {
                    for(var s = -1, o = M(t), f = r(t), c = f.length; c--;){
                        var l = f[n ? c : ++s];
                        if (e(o[l], l, o) === !1) break;
                    }
                    return t;
                };
            }
            function Jc(n, t, e) {
                var r = t & vn, s = ce(n);
                function o() {
                    var f = this && this !== k && this instanceof o ? s : n;
                    return f.apply(r ? e : this, arguments);
                }
                return o;
            }
            function mu(n) {
                return function(t) {
                    t = W(t);
                    var e = Lt(t) ? On(t) : i, r = e ? e[0] : t.charAt(0), s = e ? ut(e, 1).join("") : t.slice(1);
                    return r[n]() + s;
                };
            }
            function Mt(n) {
                return function(t) {
                    return Hr(va(ga(t).replace(Uo, "")), n, "");
                };
            }
            function ce(n) {
                return function() {
                    var t = arguments;
                    switch(t.length){
                        case 0:
                            return new n;
                        case 1:
                            return new n(t[0]);
                        case 2:
                            return new n(t[0], t[1]);
                        case 3:
                            return new n(t[0], t[1], t[2]);
                        case 4:
                            return new n(t[0], t[1], t[2], t[3]);
                        case 5:
                            return new n(t[0], t[1], t[2], t[3], t[4]);
                        case 6:
                            return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
                        case 7:
                            return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                    }
                    var e = Wt(n.prototype), r = n.apply(e, t);
                    return K(r) ? r : e;
                };
            }
            function Xc(n, t, e) {
                var r = ce(n);
                function s() {
                    for(var o = arguments.length, f = p(o), c = o, l = qt(s); c--;)f[c] = arguments[c];
                    var v = o < 3 && f[0] !== l && f[o - 1] !== l ? [] : tt(f, l);
                    if (o -= v.length, o < e) return Iu(n, t, Xe, s.placeholder, i, f, v, i, i, e - o);
                    var _ = this && this !== k && this instanceof s ? r : n;
                    return cn(_, this, f);
                }
                return s;
            }
            function wu(n) {
                return function(t, e, r) {
                    var s = M(t);
                    if (!an(t)) {
                        var o = x(e, 3);
                        t = V(t), e = function(c) {
                            return o(s[c], c, s);
                        };
                    }
                    var f = n(t, e, r);
                    return f > -1 ? s[o ? t[f] : f] : i;
                };
            }
            function Pu(n) {
                return Yn(function(t) {
                    var e = t.length, r = e, s = Pn.prototype.thru;
                    for(n && t.reverse(); r--;){
                        var o = t[r];
                        if (typeof o != "function") throw new wn($);
                        if (s && !f && je(o) == "wrapper") var f = new Pn([], !0);
                    }
                    for(r = f ? r : e; ++r < e;){
                        o = t[r];
                        var c = je(o), l = c == "wrapper" ? di(o) : i;
                        l && mi(l[0]) && l[1] == (Mn | Dn | Hn | Kt) && !l[4].length && l[9] == 1 ? f = f[je(l[0])].apply(f, l[3]) : f = o.length == 1 && mi(o) ? f[c]() : f.thru(o);
                    }
                    return function() {
                        var v = arguments, _ = v[0];
                        if (f && v.length == 1 && O(_)) return f.plant(_).value();
                        for(var m = 0, P = e ? t[m].apply(this, v) : _; ++m < e;)P = t[m].call(this, P);
                        return P;
                    };
                });
            }
            function Xe(n, t, e, r, s, o, f, c, l, v) {
                var _ = t & Mn, m = t & vn, P = t & ct, I = t & (Dn | yt), E = t & dr, b = P ? i : ce(n);
                function y() {
                    for(var D = arguments.length, N = p(D), dn = D; dn--;)N[dn] = arguments[dn];
                    if (I) var sn = qt(y), gn = af(N, sn);
                    if (r && (N = du(N, r, s, I)), o && (N = gu(N, o, f, I)), D -= gn, I && D < v) {
                        var J = tt(N, sn);
                        return Iu(n, t, Xe, y.placeholder, e, N, J, c, l, v - D);
                    }
                    var Tn = m ? e : this, Qn = P ? Tn[n] : n;
                    return D = N.length, c ? N = gh(N, c) : E && D > 1 && N.reverse(), _ && l < D && (N.length = l), this && this !== k && this instanceof y && (Qn = b || ce(Qn)), Qn.apply(Tn, N);
                }
                return y;
            }
            function Au(n, t) {
                return function(e, r) {
                    return Ic(e, n, t(r), {});
                };
            }
            function Qe(n, t) {
                return function(e, r) {
                    var s;
                    if (e === i && r === i) return t;
                    if (e !== i && (s = e), r !== i) {
                        if (s === i) return r;
                        typeof e == "string" || typeof r == "string" ? (e = ln(e), r = ln(r)) : (e = uu(e), r = uu(r)), s = n(e, r);
                    }
                    return s;
                };
            }
            function ci(n) {
                return Yn(function(t) {
                    return t = G(t, hn(x())), L(function(e) {
                        var r = this;
                        return n(t, function(s) {
                            return cn(s, r, e);
                        });
                    });
                });
            }
            function Ve(n, t) {
                t = t === i ? " " : ln(t);
                var e = t.length;
                if (e < 2) return e ? ri(t, n) : t;
                var r = ri(t, Ue(n / Dt(t)));
                return Lt(t) ? ut(On(r), 0, n).join("") : r.slice(0, n);
            }
            function Qc(n, t, e, r) {
                var s = t & vn, o = ce(n);
                function f() {
                    for(var c = -1, l = arguments.length, v = -1, _ = r.length, m = p(_ + l), P = this && this !== k && this instanceof f ? o : n; ++v < _;)m[v] = r[v];
                    for(; l--;)m[v++] = arguments[++c];
                    return cn(P, s ? e : this, m);
                }
                return f;
            }
            function Cu(n) {
                return function(t, e, r) {
                    return r && typeof r != "number" && rn(t, e, r) && (e = r = i), t = Xn(t), e === i ? (e = t, t = 0) : e = Xn(e), r = r === i ? t < e ? 1 : -1 : Xn(r), Nc(t, e, r, n);
                };
            }
            function ke(n) {
                return function(t, e) {
                    return typeof t == "string" && typeof e == "string" || (t = xn(t), e = xn(e)), n(t, e);
                };
            }
            function Iu(n, t, e, r, s, o, f, c, l, v) {
                var _ = t & Dn, m = _ ? f : i, P = _ ? i : f, I = _ ? o : i, E = _ ? i : o;
                t |= _ ? Hn : St, t &= ~(_ ? St : Hn), t & qi || (t &= ~(vn | ct));
                var b = [
                    n,
                    t,
                    s,
                    I,
                    m,
                    E,
                    P,
                    c,
                    l,
                    v
                ], y = e.apply(i, b);
                return mi(n) && Nu(y, b), y.placeholder = r, $u(y, n, t);
            }
            function hi(n) {
                var t = X[n];
                return function(e, r) {
                    if (e = xn(e), r = r == null ? 0 : nn(R(r), 292), r && $s(e)) {
                        var s = (W(e) + "e").split("e"), o = t(s[0] + "e" + (+s[1] + r));
                        return s = (W(o) + "e").split("e"), +(s[0] + "e" + (+s[1] - r));
                    }
                    return t(e);
                };
            }
            var Vc = $t && 1 / Se(new $t([
                ,
                -0
            ]))[1] == ht ? function(n) {
                return new $t(n);
            } : Di;
            function xu(n) {
                return function(t) {
                    var e = tn(t);
                    return e == yn ? qr(t) : e == Sn ? df(t) : uf(t, n(t));
                };
            }
            function Kn(n, t, e, r, s, o, f, c) {
                var l = t & ct;
                if (!l && typeof n != "function") throw new wn($);
                var v = r ? r.length : 0;
                if (v || (t &= ~(Hn | St), r = s = i), f = f === i ? f : Q(R(f), 0), c = c === i ? c : R(c), v -= s ? s.length : 0, t & St) {
                    var _ = r, m = s;
                    r = s = i;
                }
                var P = l ? i : di(n), I = [
                    n,
                    t,
                    e,
                    r,
                    s,
                    _,
                    m,
                    o,
                    f,
                    c
                ];
                if (P && lh(I, P), n = I[0], t = I[1], e = I[2], r = I[3], s = I[4], c = I[9] = I[9] === i ? l ? 0 : n.length : Q(I[9] - v, 0), !c && t & (Dn | yt) && (t &= ~(Dn | yt)), !t || t == vn) var E = Jc(n, t, e);
                else t == Dn || t == yt ? E = Xc(n, t, c) : (t == Hn || t == (vn | Hn)) && !s.length ? E = Qc(n, t, e, r) : E = Xe.apply(i, I);
                var b = P ? iu : Nu;
                return $u(b(E, I), n, t);
            }
            function Eu(n, t, e, r) {
                return n === i || bn(n, Nt[e]) && !F.call(r, e) ? t : n;
            }
            function yu(n, t, e, r, s, o) {
                return K(n) && K(t) && (o.set(t, n), Ke(n, t, i, yu, o), o.delete(t)), n;
            }
            function kc(n) {
                return pe(n) ? i : n;
            }
            function Su(n, t, e, r, s, o) {
                var f = e & Et, c = n.length, l = t.length;
                if (c != l && !(f && l > c)) return !1;
                var v = o.get(n), _ = o.get(t);
                if (v && _) return v == t && _ == n;
                var m = -1, P = !0, I = e & ve ? new gt : i;
                for(o.set(n, t), o.set(t, n); ++m < c;){
                    var E = n[m], b = t[m];
                    if (r) var y = f ? r(b, E, m, t, n, o) : r(E, b, m, n, t, o);
                    if (y !== i) {
                        if (y) continue;
                        P = !1;
                        break;
                    }
                    if (I) {
                        if (!Nr(t, function(D, N) {
                            if (!jt(I, N) && (E === D || s(E, D, e, r, o))) return I.push(N);
                        })) {
                            P = !1;
                            break;
                        }
                    } else if (!(E === b || s(E, b, e, r, o))) {
                        P = !1;
                        break;
                    }
                }
                return o.delete(n), o.delete(t), P;
            }
            function jc(n, t, e, r, s, o, f) {
                switch(e){
                    case Rt:
                        if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) return !1;
                        n = n.buffer, t = t.buffer;
                    case kt:
                        return !(n.byteLength != t.byteLength || !o(new De(n), new De(t)));
                    case Yt:
                    case Zt:
                    case Jt:
                        return bn(+n, +t);
                    case we:
                        return n.name == t.name && n.message == t.message;
                    case Xt:
                    case Qt:
                        return n == t + "";
                    case yn:
                        var c = qr;
                    case Sn:
                        var l = r & Et;
                        if (c || (c = Se), n.size != t.size && !l) return !1;
                        var v = f.get(n);
                        if (v) return v == t;
                        r |= ve, f.set(n, t);
                        var _ = Su(c(n), c(t), r, s, o, f);
                        return f.delete(n), _;
                    case Ae:
                        if (ie) return ie.call(n) == ie.call(t);
                }
                return !1;
            }
            function nh(n, t, e, r, s, o) {
                var f = e & Et, c = li(n), l = c.length, v = li(t), _ = v.length;
                if (l != _ && !f) return !1;
                for(var m = l; m--;){
                    var P = c[m];
                    if (!(f ? P in t : F.call(t, P))) return !1;
                }
                var I = o.get(n), E = o.get(t);
                if (I && E) return I == t && E == n;
                var b = !0;
                o.set(n, t), o.set(t, n);
                for(var y = f; ++m < l;){
                    P = c[m];
                    var D = n[P], N = t[P];
                    if (r) var dn = f ? r(N, D, P, t, n, o) : r(D, N, P, n, t, o);
                    if (!(dn === i ? D === N || s(D, N, e, r, o) : dn)) {
                        b = !1;
                        break;
                    }
                    y || (y = P == "constructor");
                }
                if (b && !y) {
                    var sn = n.constructor, gn = t.constructor;
                    sn != gn && "constructor" in n && "constructor" in t && !(typeof sn == "function" && sn instanceof sn && typeof gn == "function" && gn instanceof gn) && (b = !1);
                }
                return o.delete(n), o.delete(t), b;
            }
            function Yn(n) {
                return Pi(Du(n, i, Bu), n + "");
            }
            function li(n) {
                return Zs(n, V, vi);
            }
            function pi(n) {
                return Zs(n, on, Ou);
            }
            var di = Fe ? function(n) {
                return Fe.get(n);
            } : Di;
            function je(n) {
                for(var t = n.name + "", e = Ut[t], r = F.call(Ut, t) ? e.length : 0; r--;){
                    var s = e[r], o = s.func;
                    if (o == null || o == n) return s.name;
                }
                return t;
            }
            function qt(n) {
                var t = F.call(a, "placeholder") ? a : n;
                return t.placeholder;
            }
            function x() {
                var n = a.iteratee || Ti;
                return n = n === Ti ? Qs : n, arguments.length ? n(arguments[0], arguments[1]) : n;
            }
            function nr(n, t) {
                var e = n.__data__;
                return oh(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
            }
            function gi(n) {
                for(var t = V(n), e = t.length; e--;){
                    var r = t[e], s = n[r];
                    t[e] = [
                        r,
                        s,
                        Tu(s)
                    ];
                }
                return t;
            }
            function mt(n, t) {
                var e = hf(n, t);
                return Xs(e) ? e : i;
            }
            function th(n) {
                var t = F.call(n, pt), e = n[pt];
                try {
                    n[pt] = i;
                    var r = !0;
                } catch  {}
                var s = Te.call(n);
                return r && (t ? n[pt] = e : delete n[pt]), s;
            }
            var vi = Gr ? function(n) {
                return n == null ? [] : (n = M(n), jn(Gr(n), function(t) {
                    return Hs.call(n, t);
                }));
            } : Hi, Ou = Gr ? function(n) {
                for(var t = []; n;)nt(t, vi(n)), n = He(n);
                return t;
            } : Hi, tn = en;
            (zr && tn(new zr(new ArrayBuffer(1))) != Rt || te && tn(new te) != yn || Kr && tn(Kr.resolve()) != zi || $t && tn(new $t) != Sn || ee && tn(new ee) != Vt) && (tn = function(n) {
                var t = en(n), e = t == qn ? n.constructor : i, r = e ? wt(e) : "";
                if (r) switch(r){
                    case Uf:
                        return Rt;
                    case Wf:
                        return yn;
                    case Ff:
                        return zi;
                    case Mf:
                        return Sn;
                    case qf:
                        return Vt;
                }
                return t;
            });
            function eh(n, t, e) {
                for(var r = -1, s = e.length; ++r < s;){
                    var o = e[r], f = o.size;
                    switch(o.type){
                        case "drop":
                            n += f;
                            break;
                        case "dropRight":
                            t -= f;
                            break;
                        case "take":
                            t = nn(t, n + f);
                            break;
                        case "takeRight":
                            n = Q(n, t - f);
                            break;
                    }
                }
                return {
                    start: n,
                    end: t
                };
            }
            function rh(n) {
                var t = n.match(ao);
                return t ? t[1].split(oo) : [];
            }
            function Ru(n, t, e) {
                t = st(t, n);
                for(var r = -1, s = t.length, o = !1; ++r < s;){
                    var f = Wn(t[r]);
                    if (!(o = n != null && e(n, f))) break;
                    n = n[f];
                }
                return o || ++r != s ? o : (s = n == null ? 0 : n.length, !!s && ar(s) && Zn(f, s) && (O(n) || Pt(n)));
            }
            function ih(n) {
                var t = n.length, e = new n.constructor(t);
                return t && typeof n[0] == "string" && F.call(n, "index") && (e.index = n.index, e.input = n.input), e;
            }
            function bu(n) {
                return typeof n.constructor == "function" && !he(n) ? Wt(He(n)) : {};
            }
            function sh(n, t, e) {
                var r = n.constructor;
                switch(t){
                    case kt:
                        return fi(n);
                    case Yt:
                    case Zt:
                        return new r(+n);
                    case Rt:
                        return Bc(n, e);
                    case gr:
                    case vr:
                    case _r:
                    case mr:
                    case wr:
                    case Pr:
                    case Ar:
                    case Cr:
                    case Ir:
                        return lu(n, e);
                    case yn:
                        return new r;
                    case Jt:
                    case Qt:
                        return new r(n);
                    case Xt:
                        return Gc(n);
                    case Sn:
                        return new r;
                    case Ae:
                        return zc(n);
                }
            }
            function uh(n, t) {
                var e = t.length;
                if (!e) return n;
                var r = e - 1;
                return t[r] = (e > 1 ? "& " : "") + t[r], t = t.join(e > 2 ? ", " : " "), n.replace(uo, `{
/* [wrapped with ` + t + `] */
`);
            }
            function ah(n) {
                return O(n) || Pt(n) || !!(Ns && n && n[Ns]);
            }
            function Zn(n, t) {
                var e = typeof n;
                return t = t ?? kn, !!t && (e == "number" || e != "symbol" && mo.test(n)) && n > -1 && n % 1 == 0 && n < t;
            }
            function rn(n, t, e) {
                if (!K(e)) return !1;
                var r = typeof t;
                return (r == "number" ? an(e) && Zn(t, e.length) : r == "string" && t in e) ? bn(e[t], n) : !1;
            }
            function _i(n, t) {
                if (O(n)) return !1;
                var e = typeof n;
                return e == "number" || e == "symbol" || e == "boolean" || n == null || pn(n) ? !0 : eo.test(n) || !to.test(n) || t != null && n in M(t);
            }
            function oh(n) {
                var t = typeof n;
                return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
            }
            function mi(n) {
                var t = je(n), e = a[t];
                if (typeof e != "function" || !(t in H.prototype)) return !1;
                if (n === e) return !0;
                var r = di(e);
                return !!r && n === r[0];
            }
            function fh(n) {
                return !!Ts && Ts in n;
            }
            var ch = Re ? Jn : Ni;
            function he(n) {
                var t = n && n.constructor, e = typeof t == "function" && t.prototype || Nt;
                return n === e;
            }
            function Tu(n) {
                return n === n && !K(n);
            }
            function Lu(n, t) {
                return function(e) {
                    return e == null ? !1 : e[n] === t && (t !== i || n in M(e));
                };
            }
            function hh(n) {
                var t = sr(n, function(r) {
                    return e.size === pr && e.clear(), r;
                }), e = t.cache;
                return t;
            }
            function lh(n, t) {
                var e = n[1], r = t[1], s = e | r, o = s < (vn | ct | Mn), f = r == Mn && e == Dn || r == Mn && e == Kt && n[7].length <= t[8] || r == (Mn | Kt) && t[7].length <= t[8] && e == Dn;
                if (!(o || f)) return n;
                r & vn && (n[2] = t[2], s |= e & vn ? 0 : qi);
                var c = t[3];
                if (c) {
                    var l = n[3];
                    n[3] = l ? du(l, c, t[4]) : c, n[4] = l ? tt(n[3], It) : t[4];
                }
                return c = t[5], c && (l = n[5], n[5] = l ? gu(l, c, t[6]) : c, n[6] = l ? tt(n[5], It) : t[6]), c = t[7], c && (n[7] = c), r & Mn && (n[8] = n[8] == null ? t[8] : nn(n[8], t[8])), n[9] == null && (n[9] = t[9]), n[0] = t[0], n[1] = s, n;
            }
            function ph(n) {
                var t = [];
                if (n != null) for(var e in M(n))t.push(e);
                return t;
            }
            function dh(n) {
                return Te.call(n);
            }
            function Du(n, t, e) {
                return t = Q(t === i ? n.length - 1 : t, 0), function() {
                    for(var r = arguments, s = -1, o = Q(r.length - t, 0), f = p(o); ++s < o;)f[s] = r[t + s];
                    s = -1;
                    for(var c = p(t + 1); ++s < t;)c[s] = r[s];
                    return c[t] = e(f), cn(n, this, c);
                };
            }
            function Hu(n, t) {
                return t.length < 2 ? n : _t(n, Cn(t, 0, -1));
            }
            function gh(n, t) {
                for(var e = n.length, r = nn(t.length, e), s = un(n); r--;){
                    var o = t[r];
                    n[r] = Zn(o, e) ? s[o] : i;
                }
                return n;
            }
            function wi(n, t) {
                if (!(t === "constructor" && typeof n[t] == "function") && t != "__proto__") return n[t];
            }
            var Nu = Uu(iu), le = bf || function(n, t) {
                return k.setTimeout(n, t);
            }, Pi = Uu(Wc);
            function $u(n, t, e) {
                var r = t + "";
                return Pi(n, uh(r, vh(rh(r), e)));
            }
            function Uu(n) {
                var t = 0, e = 0;
                return function() {
                    var r = Hf(), s = Na - (r - e);
                    if (e = r, s > 0) {
                        if (++t >= Ha) return arguments[0];
                    } else t = 0;
                    return n.apply(i, arguments);
                };
            }
            function tr(n, t) {
                var e = -1, r = n.length, s = r - 1;
                for(t = t === i ? r : t; ++e < t;){
                    var o = ei(e, s), f = n[o];
                    n[o] = n[e], n[e] = f;
                }
                return n.length = t, n;
            }
            var Wu = hh(function(n) {
                var t = [];
                return n.charCodeAt(0) === 46 && t.push(""), n.replace(ro, function(e, r, s, o) {
                    t.push(s ? o.replace(ho, "$1") : r || e);
                }), t;
            });
            function Wn(n) {
                if (typeof n == "string" || pn(n)) return n;
                var t = n + "";
                return t == "0" && 1 / n == -ht ? "-0" : t;
            }
            function wt(n) {
                if (n != null) {
                    try {
                        return be.call(n);
                    } catch  {}
                    try {
                        return n + "";
                    } catch  {}
                }
                return "";
            }
            function vh(n, t) {
                return mn(qa, function(e) {
                    var r = "_." + e[0];
                    t & e[1] && !Ee(n, r) && n.push(r);
                }), n.sort();
            }
            function Fu(n) {
                if (n instanceof H) return n.clone();
                var t = new Pn(n.__wrapped__, n.__chain__);
                return t.__actions__ = un(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t;
            }
            function _h(n, t, e) {
                (e ? rn(n, t, e) : t === i) ? t = 1 : t = Q(R(t), 0);
                var r = n == null ? 0 : n.length;
                if (!r || t < 1) return [];
                for(var s = 0, o = 0, f = p(Ue(r / t)); s < r;)f[o++] = Cn(n, s, s += t);
                return f;
            }
            function mh(n) {
                for(var t = -1, e = n == null ? 0 : n.length, r = 0, s = []; ++t < e;){
                    var o = n[t];
                    o && (s[r++] = o);
                }
                return s;
            }
            function wh() {
                var n = arguments.length;
                if (!n) return [];
                for(var t = p(n - 1), e = arguments[0], r = n; r--;)t[r - 1] = arguments[r];
                return nt(O(e) ? un(e) : [
                    e
                ], j(t, 1));
            }
            var Ph = L(function(n, t) {
                return Z(n) ? ue(n, j(t, 1, Z, !0)) : [];
            }), Ah = L(function(n, t) {
                var e = In(t);
                return Z(e) && (e = i), Z(n) ? ue(n, j(t, 1, Z, !0), x(e, 2)) : [];
            }), Ch = L(function(n, t) {
                var e = In(t);
                return Z(e) && (e = i), Z(n) ? ue(n, j(t, 1, Z, !0), i, e) : [];
            });
            function Ih(n, t, e) {
                var r = n == null ? 0 : n.length;
                return r ? (t = e || t === i ? 1 : R(t), Cn(n, t < 0 ? 0 : t, r)) : [];
            }
            function xh(n, t, e) {
                var r = n == null ? 0 : n.length;
                return r ? (t = e || t === i ? 1 : R(t), t = r - t, Cn(n, 0, t < 0 ? 0 : t)) : [];
            }
            function Eh(n, t) {
                return n && n.length ? Ze(n, x(t, 3), !0, !0) : [];
            }
            function yh(n, t) {
                return n && n.length ? Ze(n, x(t, 3), !0) : [];
            }
            function Sh(n, t, e, r) {
                var s = n == null ? 0 : n.length;
                return s ? (e && typeof e != "number" && rn(n, t, e) && (e = 0, r = s), wc(n, t, e, r)) : [];
            }
            function Mu(n, t, e) {
                var r = n == null ? 0 : n.length;
                if (!r) return -1;
                var s = e == null ? 0 : R(e);
                return s < 0 && (s = Q(r + s, 0)), ye(n, x(t, 3), s);
            }
            function qu(n, t, e) {
                var r = n == null ? 0 : n.length;
                if (!r) return -1;
                var s = r - 1;
                return e !== i && (s = R(e), s = e < 0 ? Q(r + s, 0) : nn(s, r - 1)), ye(n, x(t, 3), s, !0);
            }
            function Bu(n) {
                var t = n == null ? 0 : n.length;
                return t ? j(n, 1) : [];
            }
            function Oh(n) {
                var t = n == null ? 0 : n.length;
                return t ? j(n, ht) : [];
            }
            function Rh(n, t) {
                var e = n == null ? 0 : n.length;
                return e ? (t = t === i ? 1 : R(t), j(n, t)) : [];
            }
            function bh(n) {
                for(var t = -1, e = n == null ? 0 : n.length, r = {}; ++t < e;){
                    var s = n[t];
                    r[s[0]] = s[1];
                }
                return r;
            }
            function Gu(n) {
                return n && n.length ? n[0] : i;
            }
            function Th(n, t, e) {
                var r = n == null ? 0 : n.length;
                if (!r) return -1;
                var s = e == null ? 0 : R(e);
                return s < 0 && (s = Q(r + s, 0)), Tt(n, t, s);
            }
            function Lh(n) {
                var t = n == null ? 0 : n.length;
                return t ? Cn(n, 0, -1) : [];
            }
            var Dh = L(function(n) {
                var t = G(n, ai);
                return t.length && t[0] === n[0] ? Vr(t) : [];
            }), Hh = L(function(n) {
                var t = In(n), e = G(n, ai);
                return t === In(e) ? t = i : e.pop(), e.length && e[0] === n[0] ? Vr(e, x(t, 2)) : [];
            }), Nh = L(function(n) {
                var t = In(n), e = G(n, ai);
                return t = typeof t == "function" ? t : i, t && e.pop(), e.length && e[0] === n[0] ? Vr(e, i, t) : [];
            });
            function $h(n, t) {
                return n == null ? "" : Lf.call(n, t);
            }
            function In(n) {
                var t = n == null ? 0 : n.length;
                return t ? n[t - 1] : i;
            }
            function Uh(n, t, e) {
                var r = n == null ? 0 : n.length;
                if (!r) return -1;
                var s = r;
                return e !== i && (s = R(e), s = s < 0 ? Q(r + s, 0) : nn(s, r - 1)), t === t ? vf(n, t, s) : ye(n, Is, s, !0);
            }
            function Wh(n, t) {
                return n && n.length ? nu(n, R(t)) : i;
            }
            var Fh = L(zu);
            function zu(n, t) {
                return n && n.length && t && t.length ? ti(n, t) : n;
            }
            function Mh(n, t, e) {
                return n && n.length && t && t.length ? ti(n, t, x(e, 2)) : n;
            }
            function qh(n, t, e) {
                return n && n.length && t && t.length ? ti(n, t, i, e) : n;
            }
            var Bh = Yn(function(n, t) {
                var e = n == null ? 0 : n.length, r = Zr(n, t);
                return ru(n, G(t, function(s) {
                    return Zn(s, e) ? +s : s;
                }).sort(pu)), r;
            });
            function Gh(n, t) {
                var e = [];
                if (!(n && n.length)) return e;
                var r = -1, s = [], o = n.length;
                for(t = x(t, 3); ++r < o;){
                    var f = n[r];
                    t(f, r, n) && (e.push(f), s.push(r));
                }
                return ru(n, s), e;
            }
            function Ai(n) {
                return n == null ? n : $f.call(n);
            }
            function zh(n, t, e) {
                var r = n == null ? 0 : n.length;
                return r ? (e && typeof e != "number" && rn(n, t, e) ? (t = 0, e = r) : (t = t == null ? 0 : R(t), e = e === i ? r : R(e)), Cn(n, t, e)) : [];
            }
            function Kh(n, t) {
                return Ye(n, t);
            }
            function Yh(n, t, e) {
                return ii(n, t, x(e, 2));
            }
            function Zh(n, t) {
                var e = n == null ? 0 : n.length;
                if (e) {
                    var r = Ye(n, t);
                    if (r < e && bn(n[r], t)) return r;
                }
                return -1;
            }
            function Jh(n, t) {
                return Ye(n, t, !0);
            }
            function Xh(n, t, e) {
                return ii(n, t, x(e, 2), !0);
            }
            function Qh(n, t) {
                var e = n == null ? 0 : n.length;
                if (e) {
                    var r = Ye(n, t, !0) - 1;
                    if (bn(n[r], t)) return r;
                }
                return -1;
            }
            function Vh(n) {
                return n && n.length ? su(n) : [];
            }
            function kh(n, t) {
                return n && n.length ? su(n, x(t, 2)) : [];
            }
            function jh(n) {
                var t = n == null ? 0 : n.length;
                return t ? Cn(n, 1, t) : [];
            }
            function nl(n, t, e) {
                return n && n.length ? (t = e || t === i ? 1 : R(t), Cn(n, 0, t < 0 ? 0 : t)) : [];
            }
            function tl(n, t, e) {
                var r = n == null ? 0 : n.length;
                return r ? (t = e || t === i ? 1 : R(t), t = r - t, Cn(n, t < 0 ? 0 : t, r)) : [];
            }
            function el(n, t) {
                return n && n.length ? Ze(n, x(t, 3), !1, !0) : [];
            }
            function rl(n, t) {
                return n && n.length ? Ze(n, x(t, 3)) : [];
            }
            var il = L(function(n) {
                return it(j(n, 1, Z, !0));
            }), sl = L(function(n) {
                var t = In(n);
                return Z(t) && (t = i), it(j(n, 1, Z, !0), x(t, 2));
            }), ul = L(function(n) {
                var t = In(n);
                return t = typeof t == "function" ? t : i, it(j(n, 1, Z, !0), i, t);
            });
            function al(n) {
                return n && n.length ? it(n) : [];
            }
            function ol(n, t) {
                return n && n.length ? it(n, x(t, 2)) : [];
            }
            function fl(n, t) {
                return t = typeof t == "function" ? t : i, n && n.length ? it(n, i, t) : [];
            }
            function Ci(n) {
                if (!(n && n.length)) return [];
                var t = 0;
                return n = jn(n, function(e) {
                    if (Z(e)) return t = Q(e.length, t), !0;
                }), Fr(t, function(e) {
                    return G(n, $r(e));
                });
            }
            function Ku(n, t) {
                if (!(n && n.length)) return [];
                var e = Ci(n);
                return t == null ? e : G(e, function(r) {
                    return cn(t, i, r);
                });
            }
            var cl = L(function(n, t) {
                return Z(n) ? ue(n, t) : [];
            }), hl = L(function(n) {
                return ui(jn(n, Z));
            }), ll = L(function(n) {
                var t = In(n);
                return Z(t) && (t = i), ui(jn(n, Z), x(t, 2));
            }), pl = L(function(n) {
                var t = In(n);
                return t = typeof t == "function" ? t : i, ui(jn(n, Z), i, t);
            }), dl = L(Ci);
            function gl(n, t) {
                return fu(n || [], t || [], se);
            }
            function vl(n, t) {
                return fu(n || [], t || [], fe);
            }
            var _l = L(function(n) {
                var t = n.length, e = t > 1 ? n[t - 1] : i;
                return e = typeof e == "function" ? (n.pop(), e) : i, Ku(n, e);
            });
            function Yu(n) {
                var t = a(n);
                return t.__chain__ = !0, t;
            }
            function ml(n, t) {
                return t(n), n;
            }
            function er(n, t) {
                return t(n);
            }
            var wl = Yn(function(n) {
                var t = n.length, e = t ? n[0] : 0, r = this.__wrapped__, s = function(o) {
                    return Zr(o, n);
                };
                return t > 1 || this.__actions__.length || !(r instanceof H) || !Zn(e) ? this.thru(s) : (r = r.slice(e, +e + (t ? 1 : 0)), r.__actions__.push({
                    func: er,
                    args: [
                        s
                    ],
                    thisArg: i
                }), new Pn(r, this.__chain__).thru(function(o) {
                    return t && !o.length && o.push(i), o;
                }));
            });
            function Pl() {
                return Yu(this);
            }
            function Al() {
                return new Pn(this.value(), this.__chain__);
            }
            function Cl() {
                this.__values__ === i && (this.__values__ = ua(this.value()));
                var n = this.__index__ >= this.__values__.length, t = n ? i : this.__values__[this.__index__++];
                return {
                    done: n,
                    value: t
                };
            }
            function Il() {
                return this;
            }
            function xl(n) {
                for(var t, e = this; e instanceof qe;){
                    var r = Fu(e);
                    r.__index__ = 0, r.__values__ = i, t ? s.__wrapped__ = r : t = r;
                    var s = r;
                    e = e.__wrapped__;
                }
                return s.__wrapped__ = n, t;
            }
            function El() {
                var n = this.__wrapped__;
                if (n instanceof H) {
                    var t = n;
                    return this.__actions__.length && (t = new H(this)), t = t.reverse(), t.__actions__.push({
                        func: er,
                        args: [
                            Ai
                        ],
                        thisArg: i
                    }), new Pn(t, this.__chain__);
                }
                return this.thru(Ai);
            }
            function yl() {
                return ou(this.__wrapped__, this.__actions__);
            }
            var Sl = Je(function(n, t, e) {
                F.call(n, e) ? ++n[e] : zn(n, e, 1);
            });
            function Ol(n, t, e) {
                var r = O(n) ? As : mc;
                return e && rn(n, t, e) && (t = i), r(n, x(t, 3));
            }
            function Rl(n, t) {
                var e = O(n) ? jn : Ks;
                return e(n, x(t, 3));
            }
            var bl = wu(Mu), Tl = wu(qu);
            function Ll(n, t) {
                return j(rr(n, t), 1);
            }
            function Dl(n, t) {
                return j(rr(n, t), ht);
            }
            function Hl(n, t, e) {
                return e = e === i ? 1 : R(e), j(rr(n, t), e);
            }
            function Zu(n, t) {
                var e = O(n) ? mn : rt;
                return e(n, x(t, 3));
            }
            function Ju(n, t) {
                var e = O(n) ? ko : zs;
                return e(n, x(t, 3));
            }
            var Nl = Je(function(n, t, e) {
                F.call(n, e) ? n[e].push(t) : zn(n, e, [
                    t
                ]);
            });
            function $l(n, t, e, r) {
                n = an(n) ? n : Gt(n), e = e && !r ? R(e) : 0;
                var s = n.length;
                return e < 0 && (e = Q(s + e, 0)), or(n) ? e <= s && n.indexOf(t, e) > -1 : !!s && Tt(n, t, e) > -1;
            }
            var Ul = L(function(n, t, e) {
                var r = -1, s = typeof t == "function", o = an(n) ? p(n.length) : [];
                return rt(n, function(f) {
                    o[++r] = s ? cn(t, f, e) : ae(f, t, e);
                }), o;
            }), Wl = Je(function(n, t, e) {
                zn(n, e, t);
            });
            function rr(n, t) {
                var e = O(n) ? G : Vs;
                return e(n, x(t, 3));
            }
            function Fl(n, t, e, r) {
                return n == null ? [] : (O(t) || (t = t == null ? [] : [
                    t
                ]), e = r ? i : e, O(e) || (e = e == null ? [] : [
                    e
                ]), tu(n, t, e));
            }
            var Ml = Je(function(n, t, e) {
                n[e ? 0 : 1].push(t);
            }, function() {
                return [
                    [],
                    []
                ];
            });
            function ql(n, t, e) {
                var r = O(n) ? Hr : Es, s = arguments.length < 3;
                return r(n, x(t, 4), e, s, rt);
            }
            function Bl(n, t, e) {
                var r = O(n) ? jo : Es, s = arguments.length < 3;
                return r(n, x(t, 4), e, s, zs);
            }
            function Gl(n, t) {
                var e = O(n) ? jn : Ks;
                return e(n, ur(x(t, 3)));
            }
            function zl(n) {
                var t = O(n) ? Ms : $c;
                return t(n);
            }
            function Kl(n, t, e) {
                (e ? rn(n, t, e) : t === i) ? t = 1 : t = R(t);
                var r = O(n) ? pc : Uc;
                return r(n, t);
            }
            function Yl(n) {
                var t = O(n) ? dc : Fc;
                return t(n);
            }
            function Zl(n) {
                if (n == null) return 0;
                if (an(n)) return or(n) ? Dt(n) : n.length;
                var t = tn(n);
                return t == yn || t == Sn ? n.size : jr(n).length;
            }
            function Jl(n, t, e) {
                var r = O(n) ? Nr : Mc;
                return e && rn(n, t, e) && (t = i), r(n, x(t, 3));
            }
            var Xl = L(function(n, t) {
                if (n == null) return [];
                var e = t.length;
                return e > 1 && rn(n, t[0], t[1]) ? t = [] : e > 2 && rn(t[0], t[1], t[2]) && (t = [
                    t[0]
                ]), tu(n, j(t, 1), []);
            }), ir = Rf || function() {
                return k.Date.now();
            };
            function Ql(n, t) {
                if (typeof t != "function") throw new wn($);
                return n = R(n), function() {
                    if (--n < 1) return t.apply(this, arguments);
                };
            }
            function Xu(n, t, e) {
                return t = e ? i : t, t = n && t == null ? n.length : t, Kn(n, Mn, i, i, i, i, t);
            }
            function Qu(n, t) {
                var e;
                if (typeof t != "function") throw new wn($);
                return n = R(n), function() {
                    return --n > 0 && (e = t.apply(this, arguments)), n <= 1 && (t = i), e;
                };
            }
            var Ii = L(function(n, t, e) {
                var r = vn;
                if (e.length) {
                    var s = tt(e, qt(Ii));
                    r |= Hn;
                }
                return Kn(n, r, t, e, s);
            }), Vu = L(function(n, t, e) {
                var r = vn | ct;
                if (e.length) {
                    var s = tt(e, qt(Vu));
                    r |= Hn;
                }
                return Kn(t, r, n, e, s);
            });
            function ku(n, t, e) {
                t = e ? i : t;
                var r = Kn(n, Dn, i, i, i, i, i, t);
                return r.placeholder = ku.placeholder, r;
            }
            function ju(n, t, e) {
                t = e ? i : t;
                var r = Kn(n, yt, i, i, i, i, i, t);
                return r.placeholder = ju.placeholder, r;
            }
            function na(n, t, e) {
                var r, s, o, f, c, l, v = 0, _ = !1, m = !1, P = !0;
                if (typeof n != "function") throw new wn($);
                t = xn(t) || 0, K(e) && (_ = !!e.leading, m = "maxWait" in e, o = m ? Q(xn(e.maxWait) || 0, t) : o, P = "trailing" in e ? !!e.trailing : P);
                function I(J) {
                    var Tn = r, Qn = s;
                    return r = s = i, v = J, f = n.apply(Qn, Tn), f;
                }
                function E(J) {
                    return v = J, c = le(D, t), _ ? I(J) : f;
                }
                function b(J) {
                    var Tn = J - l, Qn = J - v, wa = t - Tn;
                    return m ? nn(wa, o - Qn) : wa;
                }
                function y(J) {
                    var Tn = J - l, Qn = J - v;
                    return l === i || Tn >= t || Tn < 0 || m && Qn >= o;
                }
                function D() {
                    var J = ir();
                    if (y(J)) return N(J);
                    c = le(D, b(J));
                }
                function N(J) {
                    return c = i, P && r ? I(J) : (r = s = i, f);
                }
                function dn() {
                    c !== i && cu(c), v = 0, r = l = s = c = i;
                }
                function sn() {
                    return c === i ? f : N(ir());
                }
                function gn() {
                    var J = ir(), Tn = y(J);
                    if (r = arguments, s = this, l = J, Tn) {
                        if (c === i) return E(l);
                        if (m) return cu(c), c = le(D, t), I(l);
                    }
                    return c === i && (c = le(D, t)), f;
                }
                return gn.cancel = dn, gn.flush = sn, gn;
            }
            var Vl = L(function(n, t) {
                return Gs(n, 1, t);
            }), kl = L(function(n, t, e) {
                return Gs(n, xn(t) || 0, e);
            });
            function jl(n) {
                return Kn(n, dr);
            }
            function sr(n, t) {
                if (typeof n != "function" || t != null && typeof t != "function") throw new wn($);
                var e = function() {
                    var r = arguments, s = t ? t.apply(this, r) : r[0], o = e.cache;
                    if (o.has(s)) return o.get(s);
                    var f = n.apply(this, r);
                    return e.cache = o.set(s, f) || o, f;
                };
                return e.cache = new (sr.Cache || Gn), e;
            }
            sr.Cache = Gn;
            function ur(n) {
                if (typeof n != "function") throw new wn($);
                return function() {
                    var t = arguments;
                    switch(t.length){
                        case 0:
                            return !n.call(this);
                        case 1:
                            return !n.call(this, t[0]);
                        case 2:
                            return !n.call(this, t[0], t[1]);
                        case 3:
                            return !n.call(this, t[0], t[1], t[2]);
                    }
                    return !n.apply(this, t);
                };
            }
            function np(n) {
                return Qu(2, n);
            }
            var tp = qc(function(n, t) {
                t = t.length == 1 && O(t[0]) ? G(t[0], hn(x())) : G(j(t, 1), hn(x()));
                var e = t.length;
                return L(function(r) {
                    for(var s = -1, o = nn(r.length, e); ++s < o;)r[s] = t[s].call(this, r[s]);
                    return cn(n, this, r);
                });
            }), xi = L(function(n, t) {
                var e = tt(t, qt(xi));
                return Kn(n, Hn, i, t, e);
            }), ta = L(function(n, t) {
                var e = tt(t, qt(ta));
                return Kn(n, St, i, t, e);
            }), ep = Yn(function(n, t) {
                return Kn(n, Kt, i, i, i, t);
            });
            function rp(n, t) {
                if (typeof n != "function") throw new wn($);
                return t = t === i ? t : R(t), L(n, t);
            }
            function ip(n, t) {
                if (typeof n != "function") throw new wn($);
                return t = t == null ? 0 : Q(R(t), 0), L(function(e) {
                    var r = e[t], s = ut(e, 0, t);
                    return r && nt(s, r), cn(n, this, s);
                });
            }
            function sp(n, t, e) {
                var r = !0, s = !0;
                if (typeof n != "function") throw new wn($);
                return K(e) && (r = "leading" in e ? !!e.leading : r, s = "trailing" in e ? !!e.trailing : s), na(n, t, {
                    leading: r,
                    maxWait: t,
                    trailing: s
                });
            }
            function up(n) {
                return Xu(n, 1);
            }
            function ap(n, t) {
                return xi(oi(t), n);
            }
            function op() {
                if (!arguments.length) return [];
                var n = arguments[0];
                return O(n) ? n : [
                    n
                ];
            }
            function fp(n) {
                return An(n, xt);
            }
            function cp(n, t) {
                return t = typeof t == "function" ? t : i, An(n, xt, t);
            }
            function hp(n) {
                return An(n, Ln | xt);
            }
            function lp(n, t) {
                return t = typeof t == "function" ? t : i, An(n, Ln | xt, t);
            }
            function pp(n, t) {
                return t == null || Bs(n, t, V(t));
            }
            function bn(n, t) {
                return n === t || n !== n && t !== t;
            }
            var dp = ke(Qr), gp = ke(function(n, t) {
                return n >= t;
            }), Pt = Js(function() {
                return arguments;
            }()) ? Js : function(n) {
                return Y(n) && F.call(n, "callee") && !Hs.call(n, "callee");
            }, O = p.isArray, vp = gs ? hn(gs) : xc;
            function an(n) {
                return n != null && ar(n.length) && !Jn(n);
            }
            function Z(n) {
                return Y(n) && an(n);
            }
            function _p(n) {
                return n === !0 || n === !1 || Y(n) && en(n) == Yt;
            }
            var at = Tf || Ni, mp = vs ? hn(vs) : Ec;
            function wp(n) {
                return Y(n) && n.nodeType === 1 && !pe(n);
            }
            function Pp(n) {
                if (n == null) return !0;
                if (an(n) && (O(n) || typeof n == "string" || typeof n.splice == "function" || at(n) || Bt(n) || Pt(n))) return !n.length;
                var t = tn(n);
                if (t == yn || t == Sn) return !n.size;
                if (he(n)) return !jr(n).length;
                for(var e in n)if (F.call(n, e)) return !1;
                return !0;
            }
            function Ap(n, t) {
                return oe(n, t);
            }
            function Cp(n, t, e) {
                e = typeof e == "function" ? e : i;
                var r = e ? e(n, t) : i;
                return r === i ? oe(n, t, i, e) : !!r;
            }
            function Ei(n) {
                if (!Y(n)) return !1;
                var t = en(n);
                return t == we || t == Ga || typeof n.message == "string" && typeof n.name == "string" && !pe(n);
            }
            function Ip(n) {
                return typeof n == "number" && $s(n);
            }
            function Jn(n) {
                if (!K(n)) return !1;
                var t = en(n);
                return t == Pe || t == Gi || t == Ba || t == Ka;
            }
            function ea(n) {
                return typeof n == "number" && n == R(n);
            }
            function ar(n) {
                return typeof n == "number" && n > -1 && n % 1 == 0 && n <= kn;
            }
            function K(n) {
                var t = typeof n;
                return n != null && (t == "object" || t == "function");
            }
            function Y(n) {
                return n != null && typeof n == "object";
            }
            var ra = _s ? hn(_s) : Sc;
            function xp(n, t) {
                return n === t || kr(n, t, gi(t));
            }
            function Ep(n, t, e) {
                return e = typeof e == "function" ? e : i, kr(n, t, gi(t), e);
            }
            function yp(n) {
                return ia(n) && n != +n;
            }
            function Sp(n) {
                if (ch(n)) throw new S(T);
                return Xs(n);
            }
            function Op(n) {
                return n === null;
            }
            function Rp(n) {
                return n == null;
            }
            function ia(n) {
                return typeof n == "number" || Y(n) && en(n) == Jt;
            }
            function pe(n) {
                if (!Y(n) || en(n) != qn) return !1;
                var t = He(n);
                if (t === null) return !0;
                var e = F.call(t, "constructor") && t.constructor;
                return typeof e == "function" && e instanceof e && be.call(e) == Ef;
            }
            var yi = ms ? hn(ms) : Oc;
            function bp(n) {
                return ea(n) && n >= -kn && n <= kn;
            }
            var sa = ws ? hn(ws) : Rc;
            function or(n) {
                return typeof n == "string" || !O(n) && Y(n) && en(n) == Qt;
            }
            function pn(n) {
                return typeof n == "symbol" || Y(n) && en(n) == Ae;
            }
            var Bt = Ps ? hn(Ps) : bc;
            function Tp(n) {
                return n === i;
            }
            function Lp(n) {
                return Y(n) && tn(n) == Vt;
            }
            function Dp(n) {
                return Y(n) && en(n) == Za;
            }
            var Hp = ke(ni), Np = ke(function(n, t) {
                return n <= t;
            });
            function ua(n) {
                if (!n) return [];
                if (an(n)) return or(n) ? On(n) : un(n);
                if (ne && n[ne]) return pf(n[ne]());
                var t = tn(n), e = t == yn ? qr : t == Sn ? Se : Gt;
                return e(n);
            }
            function Xn(n) {
                if (!n) return n === 0 ? n : 0;
                if (n = xn(n), n === ht || n === -ht) {
                    var t = n < 0 ? -1 : 1;
                    return t * Wa;
                }
                return n === n ? n : 0;
            }
            function R(n) {
                var t = Xn(n), e = t % 1;
                return t === t ? e ? t - e : t : 0;
            }
            function aa(n) {
                return n ? vt(R(n), 0, Nn) : 0;
            }
            function xn(n) {
                if (typeof n == "number") return n;
                if (pn(n)) return _e;
                if (K(n)) {
                    var t = typeof n.valueOf == "function" ? n.valueOf() : n;
                    n = K(t) ? t + "" : t;
                }
                if (typeof n != "string") return n === 0 ? n : +n;
                n = ys(n);
                var e = go.test(n);
                return e || _o.test(n) ? Xo(n.slice(2), e ? 2 : 8) : po.test(n) ? _e : +n;
            }
            function oa(n) {
                return Un(n, on(n));
            }
            function $p(n) {
                return n ? vt(R(n), -kn, kn) : n === 0 ? n : 0;
            }
            function W(n) {
                return n == null ? "" : ln(n);
            }
            var Up = Ft(function(n, t) {
                if (he(t) || an(t)) {
                    Un(t, V(t), n);
                    return;
                }
                for(var e in t)F.call(t, e) && se(n, e, t[e]);
            }), fa = Ft(function(n, t) {
                Un(t, on(t), n);
            }), fr = Ft(function(n, t, e, r) {
                Un(t, on(t), n, r);
            }), Wp = Ft(function(n, t, e, r) {
                Un(t, V(t), n, r);
            }), Fp = Yn(Zr);
            function Mp(n, t) {
                var e = Wt(n);
                return t == null ? e : qs(e, t);
            }
            var qp = L(function(n, t) {
                n = M(n);
                var e = -1, r = t.length, s = r > 2 ? t[2] : i;
                for(s && rn(t[0], t[1], s) && (r = 1); ++e < r;)for(var o = t[e], f = on(o), c = -1, l = f.length; ++c < l;){
                    var v = f[c], _ = n[v];
                    (_ === i || bn(_, Nt[v]) && !F.call(n, v)) && (n[v] = o[v]);
                }
                return n;
            }), Bp = L(function(n) {
                return n.push(i, yu), cn(ca, i, n);
            });
            function Gp(n, t) {
                return Cs(n, x(t, 3), $n);
            }
            function zp(n, t) {
                return Cs(n, x(t, 3), Xr);
            }
            function Kp(n, t) {
                return n == null ? n : Jr(n, x(t, 3), on);
            }
            function Yp(n, t) {
                return n == null ? n : Ys(n, x(t, 3), on);
            }
            function Zp(n, t) {
                return n && $n(n, x(t, 3));
            }
            function Jp(n, t) {
                return n && Xr(n, x(t, 3));
            }
            function Xp(n) {
                return n == null ? [] : ze(n, V(n));
            }
            function Qp(n) {
                return n == null ? [] : ze(n, on(n));
            }
            function Si(n, t, e) {
                var r = n == null ? i : _t(n, t);
                return r === i ? e : r;
            }
            function Vp(n, t) {
                return n != null && Ru(n, t, Pc);
            }
            function Oi(n, t) {
                return n != null && Ru(n, t, Ac);
            }
            var kp = Au(function(n, t, e) {
                t != null && typeof t.toString != "function" && (t = Te.call(t)), n[t] = e;
            }, bi(fn)), jp = Au(function(n, t, e) {
                t != null && typeof t.toString != "function" && (t = Te.call(t)), F.call(n, t) ? n[t].push(e) : n[t] = [
                    e
                ];
            }, x), nd = L(ae);
            function V(n) {
                return an(n) ? Fs(n) : jr(n);
            }
            function on(n) {
                return an(n) ? Fs(n, !0) : Tc(n);
            }
            function td(n, t) {
                var e = {};
                return t = x(t, 3), $n(n, function(r, s, o) {
                    zn(e, t(r, s, o), r);
                }), e;
            }
            function ed(n, t) {
                var e = {};
                return t = x(t, 3), $n(n, function(r, s, o) {
                    zn(e, s, t(r, s, o));
                }), e;
            }
            var rd = Ft(function(n, t, e) {
                Ke(n, t, e);
            }), ca = Ft(function(n, t, e, r) {
                Ke(n, t, e, r);
            }), id = Yn(function(n, t) {
                var e = {};
                if (n == null) return e;
                var r = !1;
                t = G(t, function(o) {
                    return o = st(o, n), r || (r = o.length > 1), o;
                }), Un(n, pi(n), e), r && (e = An(e, Ln | Fn | xt, kc));
                for(var s = t.length; s--;)si(e, t[s]);
                return e;
            });
            function sd(n, t) {
                return ha(n, ur(x(t)));
            }
            var ud = Yn(function(n, t) {
                return n == null ? {} : Dc(n, t);
            });
            function ha(n, t) {
                if (n == null) return {};
                var e = G(pi(n), function(r) {
                    return [
                        r
                    ];
                });
                return t = x(t), eu(n, e, function(r, s) {
                    return t(r, s[0]);
                });
            }
            function ad(n, t, e) {
                t = st(t, n);
                var r = -1, s = t.length;
                for(s || (s = 1, n = i); ++r < s;){
                    var o = n == null ? i : n[Wn(t[r])];
                    o === i && (r = s, o = e), n = Jn(o) ? o.call(n) : o;
                }
                return n;
            }
            function od(n, t, e) {
                return n == null ? n : fe(n, t, e);
            }
            function fd(n, t, e, r) {
                return r = typeof r == "function" ? r : i, n == null ? n : fe(n, t, e, r);
            }
            var la = xu(V), pa = xu(on);
            function cd(n, t, e) {
                var r = O(n), s = r || at(n) || Bt(n);
                if (t = x(t, 4), e == null) {
                    var o = n && n.constructor;
                    s ? e = r ? new o : [] : K(n) ? e = Jn(o) ? Wt(He(n)) : {} : e = {};
                }
                return (s ? mn : $n)(n, function(f, c, l) {
                    return t(e, f, c, l);
                }), e;
            }
            function hd(n, t) {
                return n == null ? !0 : si(n, t);
            }
            function ld(n, t, e) {
                return n == null ? n : au(n, t, oi(e));
            }
            function pd(n, t, e, r) {
                return r = typeof r == "function" ? r : i, n == null ? n : au(n, t, oi(e), r);
            }
            function Gt(n) {
                return n == null ? [] : Mr(n, V(n));
            }
            function dd(n) {
                return n == null ? [] : Mr(n, on(n));
            }
            function gd(n, t, e) {
                return e === i && (e = t, t = i), e !== i && (e = xn(e), e = e === e ? e : 0), t !== i && (t = xn(t), t = t === t ? t : 0), vt(xn(n), t, e);
            }
            function vd(n, t, e) {
                return t = Xn(t), e === i ? (e = t, t = 0) : e = Xn(e), n = xn(n), Cc(n, t, e);
            }
            function _d(n, t, e) {
                if (e && typeof e != "boolean" && rn(n, t, e) && (t = e = i), e === i && (typeof t == "boolean" ? (e = t, t = i) : typeof n == "boolean" && (e = n, n = i)), n === i && t === i ? (n = 0, t = 1) : (n = Xn(n), t === i ? (t = n, n = 0) : t = Xn(t)), n > t) {
                    var r = n;
                    n = t, t = r;
                }
                if (e || n % 1 || t % 1) {
                    var s = Us();
                    return nn(n + s * (t - n + Jo("1e-" + ((s + "").length - 1))), t);
                }
                return ei(n, t);
            }
            var md = Mt(function(n, t, e) {
                return t = t.toLowerCase(), n + (e ? da(t) : t);
            });
            function da(n) {
                return Ri(W(n).toLowerCase());
            }
            function ga(n) {
                return n = W(n), n && n.replace(wo, of).replace(Wo, "");
            }
            function wd(n, t, e) {
                n = W(n), t = ln(t);
                var r = n.length;
                e = e === i ? r : vt(R(e), 0, r);
                var s = e;
                return e -= t.length, e >= 0 && n.slice(e, s) == t;
            }
            function Pd(n) {
                return n = W(n), n && ka.test(n) ? n.replace(Yi, ff) : n;
            }
            function Ad(n) {
                return n = W(n), n && io.test(n) ? n.replace(xr, "\\$&") : n;
            }
            var Cd = Mt(function(n, t, e) {
                return n + (e ? "-" : "") + t.toLowerCase();
            }), Id = Mt(function(n, t, e) {
                return n + (e ? " " : "") + t.toLowerCase();
            }), xd = mu("toLowerCase");
            function Ed(n, t, e) {
                n = W(n), t = R(t);
                var r = t ? Dt(n) : 0;
                if (!t || r >= t) return n;
                var s = (t - r) / 2;
                return Ve(We(s), e) + n + Ve(Ue(s), e);
            }
            function yd(n, t, e) {
                n = W(n), t = R(t);
                var r = t ? Dt(n) : 0;
                return t && r < t ? n + Ve(t - r, e) : n;
            }
            function Sd(n, t, e) {
                n = W(n), t = R(t);
                var r = t ? Dt(n) : 0;
                return t && r < t ? Ve(t - r, e) + n : n;
            }
            function Od(n, t, e) {
                return e || t == null ? t = 0 : t && (t = +t), Nf(W(n).replace(Er, ""), t || 0);
            }
            function Rd(n, t, e) {
                return (e ? rn(n, t, e) : t === i) ? t = 1 : t = R(t), ri(W(n), t);
            }
            function bd() {
                var n = arguments, t = W(n[0]);
                return n.length < 3 ? t : t.replace(n[1], n[2]);
            }
            var Td = Mt(function(n, t, e) {
                return n + (e ? "_" : "") + t.toLowerCase();
            });
            function Ld(n, t, e) {
                return e && typeof e != "number" && rn(n, t, e) && (t = e = i), e = e === i ? Nn : e >>> 0, e ? (n = W(n), n && (typeof t == "string" || t != null && !yi(t)) && (t = ln(t), !t && Lt(n)) ? ut(On(n), 0, e) : n.split(t, e)) : [];
            }
            var Dd = Mt(function(n, t, e) {
                return n + (e ? " " : "") + Ri(t);
            });
            function Hd(n, t, e) {
                return n = W(n), e = e == null ? 0 : vt(R(e), 0, n.length), t = ln(t), n.slice(e, e + t.length) == t;
            }
            function Nd(n, t, e) {
                var r = a.templateSettings;
                e && rn(n, t, e) && (t = i), n = W(n), t = fr({}, t, r, Eu);
                var s = fr({}, t.imports, r.imports, Eu), o = V(s), f = Mr(s, o), c, l, v = 0, _ = t.interpolate || Ce, m = "__p += '", P = Br((t.escape || Ce).source + "|" + _.source + "|" + (_ === Zi ? lo : Ce).source + "|" + (t.evaluate || Ce).source + "|$", "g"), I = "//# sourceURL=" + (F.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Go + "]") + `
`;
                n.replace(P, function(y, D, N, dn, sn, gn) {
                    return N || (N = dn), m += n.slice(v, gn).replace(Po, cf), D && (c = !0, m += `' +
__e(` + D + `) +
'`), sn && (l = !0, m += `';
` + sn + `;
__p += '`), N && (m += `' +
((__t = (` + N + `)) == null ? '' : __t) +
'`), v = gn + y.length, y;
                }), m += `';
`;
                var E = F.call(t, "variable") && t.variable;
                if (!E) m = `with (obj) {
` + m + `
}
`;
                else if (co.test(E)) throw new S(En);
                m = (l ? m.replace(Ja, "") : m).replace(Xa, "$1").replace(Qa, "$1;"), m = "function(" + (E || "obj") + `) {
` + (E ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (c ? ", __e = _.escape" : "") + (l ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + m + `return __p
}`;
                var b = _a(function() {
                    return U(o, I + "return " + m).apply(i, f);
                });
                if (b.source = m, Ei(b)) throw b;
                return b;
            }
            function $d(n) {
                return W(n).toLowerCase();
            }
            function Ud(n) {
                return W(n).toUpperCase();
            }
            function Wd(n, t, e) {
                if (n = W(n), n && (e || t === i)) return ys(n);
                if (!n || !(t = ln(t))) return n;
                var r = On(n), s = On(t), o = Ss(r, s), f = Os(r, s) + 1;
                return ut(r, o, f).join("");
            }
            function Fd(n, t, e) {
                if (n = W(n), n && (e || t === i)) return n.slice(0, bs(n) + 1);
                if (!n || !(t = ln(t))) return n;
                var r = On(n), s = Os(r, On(t)) + 1;
                return ut(r, 0, s).join("");
            }
            function Md(n, t, e) {
                if (n = W(n), n && (e || t === i)) return n.replace(Er, "");
                if (!n || !(t = ln(t))) return n;
                var r = On(n), s = Ss(r, On(t));
                return ut(r, s).join("");
            }
            function qd(n, t) {
                var e = La, r = Da;
                if (K(t)) {
                    var s = "separator" in t ? t.separator : s;
                    e = "length" in t ? R(t.length) : e, r = "omission" in t ? ln(t.omission) : r;
                }
                n = W(n);
                var o = n.length;
                if (Lt(n)) {
                    var f = On(n);
                    o = f.length;
                }
                if (e >= o) return n;
                var c = e - Dt(r);
                if (c < 1) return r;
                var l = f ? ut(f, 0, c).join("") : n.slice(0, c);
                if (s === i) return l + r;
                if (f && (c += l.length - c), yi(s)) {
                    if (n.slice(c).search(s)) {
                        var v, _ = l;
                        for(s.global || (s = Br(s.source, W(Ji.exec(s)) + "g")), s.lastIndex = 0; v = s.exec(_);)var m = v.index;
                        l = l.slice(0, m === i ? c : m);
                    }
                } else if (n.indexOf(ln(s), c) != c) {
                    var P = l.lastIndexOf(s);
                    P > -1 && (l = l.slice(0, P));
                }
                return l + r;
            }
            function Bd(n) {
                return n = W(n), n && Va.test(n) ? n.replace(Ki, _f) : n;
            }
            var Gd = Mt(function(n, t, e) {
                return n + (e ? " " : "") + t.toUpperCase();
            }), Ri = mu("toUpperCase");
            function va(n, t, e) {
                return n = W(n), t = e ? i : t, t === i ? lf(n) ? Pf(n) : ef(n) : n.match(t) || [];
            }
            var _a = L(function(n, t) {
                try {
                    return cn(n, i, t);
                } catch (e) {
                    return Ei(e) ? e : new S(e);
                }
            }), zd = Yn(function(n, t) {
                return mn(t, function(e) {
                    e = Wn(e), zn(n, e, Ii(n[e], n));
                }), n;
            });
            function Kd(n) {
                var t = n == null ? 0 : n.length, e = x();
                return n = t ? G(n, function(r) {
                    if (typeof r[1] != "function") throw new wn($);
                    return [
                        e(r[0]),
                        r[1]
                    ];
                }) : [], L(function(r) {
                    for(var s = -1; ++s < t;){
                        var o = n[s];
                        if (cn(o[0], this, r)) return cn(o[1], this, r);
                    }
                });
            }
            function Yd(n) {
                return _c(An(n, Ln));
            }
            function bi(n) {
                return function() {
                    return n;
                };
            }
            function Zd(n, t) {
                return n == null || n !== n ? t : n;
            }
            var Jd = Pu(), Xd = Pu(!0);
            function fn(n) {
                return n;
            }
            function Ti(n) {
                return Qs(typeof n == "function" ? n : An(n, Ln));
            }
            function Qd(n) {
                return ks(An(n, Ln));
            }
            function Vd(n, t) {
                return js(n, An(t, Ln));
            }
            var kd = L(function(n, t) {
                return function(e) {
                    return ae(e, n, t);
                };
            }), jd = L(function(n, t) {
                return function(e) {
                    return ae(n, e, t);
                };
            });
            function Li(n, t, e) {
                var r = V(t), s = ze(t, r);
                e == null && !(K(t) && (s.length || !r.length)) && (e = t, t = n, n = this, s = ze(t, V(t)));
                var o = !(K(e) && "chain" in e) || !!e.chain, f = Jn(n);
                return mn(s, function(c) {
                    var l = t[c];
                    n[c] = l, f && (n.prototype[c] = function() {
                        var v = this.__chain__;
                        if (o || v) {
                            var _ = n(this.__wrapped__), m = _.__actions__ = un(this.__actions__);
                            return m.push({
                                func: l,
                                args: arguments,
                                thisArg: n
                            }), _.__chain__ = v, _;
                        }
                        return l.apply(n, nt([
                            this.value()
                        ], arguments));
                    });
                }), n;
            }
            function ng() {
                return k._ === this && (k._ = yf), this;
            }
            function Di() {}
            function tg(n) {
                return n = R(n), L(function(t) {
                    return nu(t, n);
                });
            }
            var eg = ci(G), rg = ci(As), ig = ci(Nr);
            function ma(n) {
                return _i(n) ? $r(Wn(n)) : Hc(n);
            }
            function sg(n) {
                return function(t) {
                    return n == null ? i : _t(n, t);
                };
            }
            var ug = Cu(), ag = Cu(!0);
            function Hi() {
                return [];
            }
            function Ni() {
                return !1;
            }
            function og() {
                return {};
            }
            function fg() {
                return "";
            }
            function cg() {
                return !0;
            }
            function hg(n, t) {
                if (n = R(n), n < 1 || n > kn) return [];
                var e = Nn, r = nn(n, Nn);
                t = x(t), n -= Nn;
                for(var s = Fr(r, t); ++e < n;)t(e);
                return s;
            }
            function lg(n) {
                return O(n) ? G(n, Wn) : pn(n) ? [
                    n
                ] : un(Wu(W(n)));
            }
            function pg(n) {
                var t = ++xf;
                return W(n) + t;
            }
            var dg = Qe(function(n, t) {
                return n + t;
            }, 0), gg = hi("ceil"), vg = Qe(function(n, t) {
                return n / t;
            }, 1), _g = hi("floor");
            function mg(n) {
                return n && n.length ? Ge(n, fn, Qr) : i;
            }
            function wg(n, t) {
                return n && n.length ? Ge(n, x(t, 2), Qr) : i;
            }
            function Pg(n) {
                return xs(n, fn);
            }
            function Ag(n, t) {
                return xs(n, x(t, 2));
            }
            function Cg(n) {
                return n && n.length ? Ge(n, fn, ni) : i;
            }
            function Ig(n, t) {
                return n && n.length ? Ge(n, x(t, 2), ni) : i;
            }
            var xg = Qe(function(n, t) {
                return n * t;
            }, 1), Eg = hi("round"), yg = Qe(function(n, t) {
                return n - t;
            }, 0);
            function Sg(n) {
                return n && n.length ? Wr(n, fn) : 0;
            }
            function Og(n, t) {
                return n && n.length ? Wr(n, x(t, 2)) : 0;
            }
            return a.after = Ql, a.ary = Xu, a.assign = Up, a.assignIn = fa, a.assignInWith = fr, a.assignWith = Wp, a.at = Fp, a.before = Qu, a.bind = Ii, a.bindAll = zd, a.bindKey = Vu, a.castArray = op, a.chain = Yu, a.chunk = _h, a.compact = mh, a.concat = wh, a.cond = Kd, a.conforms = Yd, a.constant = bi, a.countBy = Sl, a.create = Mp, a.curry = ku, a.curryRight = ju, a.debounce = na, a.defaults = qp, a.defaultsDeep = Bp, a.defer = Vl, a.delay = kl, a.difference = Ph, a.differenceBy = Ah, a.differenceWith = Ch, a.drop = Ih, a.dropRight = xh, a.dropRightWhile = Eh, a.dropWhile = yh, a.fill = Sh, a.filter = Rl, a.flatMap = Ll, a.flatMapDeep = Dl, a.flatMapDepth = Hl, a.flatten = Bu, a.flattenDeep = Oh, a.flattenDepth = Rh, a.flip = jl, a.flow = Jd, a.flowRight = Xd, a.fromPairs = bh, a.functions = Xp, a.functionsIn = Qp, a.groupBy = Nl, a.initial = Lh, a.intersection = Dh, a.intersectionBy = Hh, a.intersectionWith = Nh, a.invert = kp, a.invertBy = jp, a.invokeMap = Ul, a.iteratee = Ti, a.keyBy = Wl, a.keys = V, a.keysIn = on, a.map = rr, a.mapKeys = td, a.mapValues = ed, a.matches = Qd, a.matchesProperty = Vd, a.memoize = sr, a.merge = rd, a.mergeWith = ca, a.method = kd, a.methodOf = jd, a.mixin = Li, a.negate = ur, a.nthArg = tg, a.omit = id, a.omitBy = sd, a.once = np, a.orderBy = Fl, a.over = eg, a.overArgs = tp, a.overEvery = rg, a.overSome = ig, a.partial = xi, a.partialRight = ta, a.partition = Ml, a.pick = ud, a.pickBy = ha, a.property = ma, a.propertyOf = sg, a.pull = Fh, a.pullAll = zu, a.pullAllBy = Mh, a.pullAllWith = qh, a.pullAt = Bh, a.range = ug, a.rangeRight = ag, a.rearg = ep, a.reject = Gl, a.remove = Gh, a.rest = rp, a.reverse = Ai, a.sampleSize = Kl, a.set = od, a.setWith = fd, a.shuffle = Yl, a.slice = zh, a.sortBy = Xl, a.sortedUniq = Vh, a.sortedUniqBy = kh, a.split = Ld, a.spread = ip, a.tail = jh, a.take = nl, a.takeRight = tl, a.takeRightWhile = el, a.takeWhile = rl, a.tap = ml, a.throttle = sp, a.thru = er, a.toArray = ua, a.toPairs = la, a.toPairsIn = pa, a.toPath = lg, a.toPlainObject = oa, a.transform = cd, a.unary = up, a.union = il, a.unionBy = sl, a.unionWith = ul, a.uniq = al, a.uniqBy = ol, a.uniqWith = fl, a.unset = hd, a.unzip = Ci, a.unzipWith = Ku, a.update = ld, a.updateWith = pd, a.values = Gt, a.valuesIn = dd, a.without = cl, a.words = va, a.wrap = ap, a.xor = hl, a.xorBy = ll, a.xorWith = pl, a.zip = dl, a.zipObject = gl, a.zipObjectDeep = vl, a.zipWith = _l, a.entries = la, a.entriesIn = pa, a.extend = fa, a.extendWith = fr, Li(a, a), a.add = dg, a.attempt = _a, a.camelCase = md, a.capitalize = da, a.ceil = gg, a.clamp = gd, a.clone = fp, a.cloneDeep = hp, a.cloneDeepWith = lp, a.cloneWith = cp, a.conformsTo = pp, a.deburr = ga, a.defaultTo = Zd, a.divide = vg, a.endsWith = wd, a.eq = bn, a.escape = Pd, a.escapeRegExp = Ad, a.every = Ol, a.find = bl, a.findIndex = Mu, a.findKey = Gp, a.findLast = Tl, a.findLastIndex = qu, a.findLastKey = zp, a.floor = _g, a.forEach = Zu, a.forEachRight = Ju, a.forIn = Kp, a.forInRight = Yp, a.forOwn = Zp, a.forOwnRight = Jp, a.get = Si, a.gt = dp, a.gte = gp, a.has = Vp, a.hasIn = Oi, a.head = Gu, a.identity = fn, a.includes = $l, a.indexOf = Th, a.inRange = vd, a.invoke = nd, a.isArguments = Pt, a.isArray = O, a.isArrayBuffer = vp, a.isArrayLike = an, a.isArrayLikeObject = Z, a.isBoolean = _p, a.isBuffer = at, a.isDate = mp, a.isElement = wp, a.isEmpty = Pp, a.isEqual = Ap, a.isEqualWith = Cp, a.isError = Ei, a.isFinite = Ip, a.isFunction = Jn, a.isInteger = ea, a.isLength = ar, a.isMap = ra, a.isMatch = xp, a.isMatchWith = Ep, a.isNaN = yp, a.isNative = Sp, a.isNil = Rp, a.isNull = Op, a.isNumber = ia, a.isObject = K, a.isObjectLike = Y, a.isPlainObject = pe, a.isRegExp = yi, a.isSafeInteger = bp, a.isSet = sa, a.isString = or, a.isSymbol = pn, a.isTypedArray = Bt, a.isUndefined = Tp, a.isWeakMap = Lp, a.isWeakSet = Dp, a.join = $h, a.kebabCase = Cd, a.last = In, a.lastIndexOf = Uh, a.lowerCase = Id, a.lowerFirst = xd, a.lt = Hp, a.lte = Np, a.max = mg, a.maxBy = wg, a.mean = Pg, a.meanBy = Ag, a.min = Cg, a.minBy = Ig, a.stubArray = Hi, a.stubFalse = Ni, a.stubObject = og, a.stubString = fg, a.stubTrue = cg, a.multiply = xg, a.nth = Wh, a.noConflict = ng, a.noop = Di, a.now = ir, a.pad = Ed, a.padEnd = yd, a.padStart = Sd, a.parseInt = Od, a.random = _d, a.reduce = ql, a.reduceRight = Bl, a.repeat = Rd, a.replace = bd, a.result = ad, a.round = Eg, a.runInContext = h, a.sample = zl, a.size = Zl, a.snakeCase = Td, a.some = Jl, a.sortedIndex = Kh, a.sortedIndexBy = Yh, a.sortedIndexOf = Zh, a.sortedLastIndex = Jh, a.sortedLastIndexBy = Xh, a.sortedLastIndexOf = Qh, a.startCase = Dd, a.startsWith = Hd, a.subtract = yg, a.sum = Sg, a.sumBy = Og, a.template = Nd, a.times = hg, a.toFinite = Xn, a.toInteger = R, a.toLength = aa, a.toLower = $d, a.toNumber = xn, a.toSafeInteger = $p, a.toString = W, a.toUpper = Ud, a.trim = Wd, a.trimEnd = Fd, a.trimStart = Md, a.truncate = qd, a.unescape = Bd, a.uniqueId = pg, a.upperCase = Gd, a.upperFirst = Ri, a.each = Zu, a.eachRight = Ju, a.first = Gu, Li(a, function() {
                var n = {};
                return $n(a, function(t, e) {
                    F.call(a.prototype, e) || (n[e] = t);
                }), n;
            }(), {
                chain: !1
            }), a.VERSION = d, mn([
                "bind",
                "bindKey",
                "curry",
                "curryRight",
                "partial",
                "partialRight"
            ], function(n) {
                a[n].placeholder = a;
            }), mn([
                "drop",
                "take"
            ], function(n, t) {
                H.prototype[n] = function(e) {
                    e = e === i ? 1 : Q(R(e), 0);
                    var r = this.__filtered__ && !t ? new H(this) : this.clone();
                    return r.__filtered__ ? r.__takeCount__ = nn(e, r.__takeCount__) : r.__views__.push({
                        size: nn(e, Nn),
                        type: n + (r.__dir__ < 0 ? "Right" : "")
                    }), r;
                }, H.prototype[n + "Right"] = function(e) {
                    return this.reverse()[n](e).reverse();
                };
            }), mn([
                "filter",
                "map",
                "takeWhile"
            ], function(n, t) {
                var e = t + 1, r = e == Bi || e == Ua;
                H.prototype[n] = function(s) {
                    var o = this.clone();
                    return o.__iteratees__.push({
                        iteratee: x(s, 3),
                        type: e
                    }), o.__filtered__ = o.__filtered__ || r, o;
                };
            }), mn([
                "head",
                "last"
            ], function(n, t) {
                var e = "take" + (t ? "Right" : "");
                H.prototype[n] = function() {
                    return this[e](1).value()[0];
                };
            }), mn([
                "initial",
                "tail"
            ], function(n, t) {
                var e = "drop" + (t ? "" : "Right");
                H.prototype[n] = function() {
                    return this.__filtered__ ? new H(this) : this[e](1);
                };
            }), H.prototype.compact = function() {
                return this.filter(fn);
            }, H.prototype.find = function(n) {
                return this.filter(n).head();
            }, H.prototype.findLast = function(n) {
                return this.reverse().find(n);
            }, H.prototype.invokeMap = L(function(n, t) {
                return typeof n == "function" ? new H(this) : this.map(function(e) {
                    return ae(e, n, t);
                });
            }), H.prototype.reject = function(n) {
                return this.filter(ur(x(n)));
            }, H.prototype.slice = function(n, t) {
                n = R(n);
                var e = this;
                return e.__filtered__ && (n > 0 || t < 0) ? new H(e) : (n < 0 ? e = e.takeRight(-n) : n && (e = e.drop(n)), t !== i && (t = R(t), e = t < 0 ? e.dropRight(-t) : e.take(t - n)), e);
            }, H.prototype.takeRightWhile = function(n) {
                return this.reverse().takeWhile(n).reverse();
            }, H.prototype.toArray = function() {
                return this.take(Nn);
            }, $n(H.prototype, function(n, t) {
                var e = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), s = a[r ? "take" + (t == "last" ? "Right" : "") : t], o = r || /^find/.test(t);
                s && (a.prototype[t] = function() {
                    var f = this.__wrapped__, c = r ? [
                        1
                    ] : arguments, l = f instanceof H, v = c[0], _ = l || O(f), m = function(D) {
                        var N = s.apply(a, nt([
                            D
                        ], c));
                        return r && P ? N[0] : N;
                    };
                    _ && e && typeof v == "function" && v.length != 1 && (l = _ = !1);
                    var P = this.__chain__, I = !!this.__actions__.length, E = o && !P, b = l && !I;
                    if (!o && _) {
                        f = b ? f : new H(this);
                        var y = n.apply(f, c);
                        return y.__actions__.push({
                            func: er,
                            args: [
                                m
                            ],
                            thisArg: i
                        }), new Pn(y, P);
                    }
                    return E && b ? n.apply(this, c) : (y = this.thru(m), E ? r ? y.value()[0] : y.value() : y);
                });
            }), mn([
                "pop",
                "push",
                "shift",
                "sort",
                "splice",
                "unshift"
            ], function(n) {
                var t = Oe[n], e = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n);
                a.prototype[n] = function() {
                    var s = arguments;
                    if (r && !this.__chain__) {
                        var o = this.value();
                        return t.apply(O(o) ? o : [], s);
                    }
                    return this[e](function(f) {
                        return t.apply(O(f) ? f : [], s);
                    });
                };
            }), $n(H.prototype, function(n, t) {
                var e = a[t];
                if (e) {
                    var r = e.name + "";
                    F.call(Ut, r) || (Ut[r] = []), Ut[r].push({
                        name: t,
                        func: e
                    });
                }
            }), Ut[Xe(i, ct).name] = [
                {
                    name: "wrapper",
                    func: i
                }
            ], H.prototype.clone = Bf, H.prototype.reverse = Gf, H.prototype.value = zf, a.prototype.at = wl, a.prototype.chain = Pl, a.prototype.commit = Al, a.prototype.next = Cl, a.prototype.plant = xl, a.prototype.reverse = El, a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = yl, a.prototype.first = a.prototype.head, ne && (a.prototype[ne] = Il), a;
        }, Ht = Af();
        lt ? ((lt.exports = Ht)._ = Ht, Tr._ = Ht) : k._ = Ht;
    }).call(ge);
})(Ui, Ui.exports);
var qg = Object.defineProperty, Bg = Object.defineProperties, Gg = Object.getOwnPropertyDescriptors, Ea = Object.getOwnPropertySymbols, zg = Object.prototype.hasOwnProperty, Kg = Object.prototype.propertyIsEnumerable, ya = (C, u, i)=>u in C ? qg(C, u, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : C[u] = i, cr = (C, u)=>{
    for(var i in u || (u = {}))zg.call(u, i) && ya(C, i, u[i]);
    if (Ea) for (var i of Ea(u))Kg.call(u, i) && ya(C, i, u[i]);
    return C;
}, Yg = (C, u)=>Bg(C, Gg(u));
function ft(C, u, i) {
    var d;
    const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseChainId"])(C);
    return ((d = u.rpcMap) == null ? void 0 : d[w.reference]) || `${Mg}?chainId=${w.namespace}:${w.reference}&projectId=${i}`;
}
function Ct(C) {
    return C.includes(":") ? C.split(":")[1] : C;
}
function Sa(C) {
    return C.map((u)=>`${u.split(":")[0]}:${u.split(":")[1]}`);
}
function Zg(C, u) {
    const i = Object.keys(u.namespaces).filter((w)=>w.includes(C));
    if (!i.length) return [];
    const d = [];
    return i.forEach((w)=>{
        const T = u.namespaces[w].accounts;
        d.push(...T);
    }), d;
}
function Jg(C = {}, u = {}) {
    const i = Oa(C), d = Oa(u);
    return Ui.exports.merge(i, d);
}
function Oa(C) {
    var u, i, d, w;
    const T = {};
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidObject"])(C)) return T;
    for (const [$, En] of Object.entries(C)){
        const zt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCaipNamespace"])($) ? [
            $
        ] : En.chains, pr = En.methods || [], It = En.events || [], Ln = En.rpcMap || {}, Fn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])($);
        T[Fn] = Yg(cr(cr({}, T[Fn]), En), {
            chains: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeArrays"])(zt, (u = T[Fn]) == null ? void 0 : u.chains),
            methods: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeArrays"])(pr, (i = T[Fn]) == null ? void 0 : i.methods),
            events: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeArrays"])(It, (d = T[Fn]) == null ? void 0 : d.events),
            rpcMap: cr(cr({}, Ln), (w = T[Fn]) == null ? void 0 : w.rpcMap)
        });
    }
    return T;
}
function Xg(C) {
    return C.includes(":") ? C.split(":")[2] : C;
}
function Qg(C) {
    const u = {};
    for (const [i, d] of Object.entries(C)){
        const w = d.methods || [], T = d.events || [], $ = d.accounts || [], En = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCaipNamespace"])(i) ? [
            i
        ] : d.chains ? d.chains : Sa(d.accounts);
        u[i] = {
            chains: En,
            methods: w,
            events: T,
            accounts: $
        };
    }
    return u;
}
function Wi(C) {
    return typeof C == "number" ? C : C.includes("0x") ? parseInt(C, 16) : C.includes(":") ? Number(C.split(":")[1]) : Number(C);
}
const Ra = {}, z = (C)=>Ra[C], Fi = (C, u)=>{
    Ra[C] = u;
};
class Vg {
    constructor(u){
        this.name = "polkadot", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    request(u) {
        return this.namespace.methods.includes(u.request.method) ? this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    setDefaultChain(u, i) {
        this.httpProviders[u] || this.setHttpProvider(u, i), this.chainId = u, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u}`);
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]) || [] : [];
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            var d;
            const w = Ct(i);
            u[w] = this.createHttpProvider(w, (d = this.namespace.rpcMap) == null ? void 0 : d[i]);
        }), u;
    }
    getHttpProvider() {
        const u = `${this.name}:${this.chainId}`, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    setHttpProvider(u, i) {
        const d = this.createHttpProvider(u, i);
        d && (this.httpProviders[u] = d);
    }
    createHttpProvider(u, i) {
        const d = i || ft(u, this.namespace, this.client.core.projectId);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$provider$40$1$2e$0$2e$13$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$http$2d$connection$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](d, z("disableProviderPing")));
    }
}
class kg {
    constructor(u){
        this.name = "eip155", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
    }
    async request(u) {
        switch(u.request.method){
            case "eth_requestAccounts":
                return this.getAccounts();
            case "eth_accounts":
                return this.getAccounts();
            case "wallet_switchEthereumChain":
                return await this.handleSwitchChain(u);
            case "eth_chainId":
                return parseInt(this.getDefaultChain());
        }
        return this.namespace.methods.includes(u.request.method) ? await this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    setDefaultChain(u, i) {
        this.httpProviders[u] || this.setHttpProvider(parseInt(u), i), this.chainId = parseInt(u), this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u}`);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId.toString();
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    createHttpProvider(u, i) {
        const d = i || ft(`${this.name}:${u}`, this.namespace, this.client.core.projectId);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$provider$40$1$2e$0$2e$13$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$http$2d$connection$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpConnection"](d, z("disableProviderPing")));
    }
    setHttpProvider(u, i) {
        const d = this.createHttpProvider(u, i);
        d && (this.httpProviders[u] = d);
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            var d;
            const w = parseInt(Ct(i));
            u[w] = this.createHttpProvider(w, (d = this.namespace.rpcMap) == null ? void 0 : d[i]);
        }), u;
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? [
            ...new Set(u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]))
        ] : [];
    }
    getHttpProvider() {
        const u = this.chainId, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    async handleSwitchChain(u) {
        var i, d;
        let w = u.request.params ? (i = u.request.params[0]) == null ? void 0 : i.chainId : "0x0";
        w = w.startsWith("0x") ? w : `0x${w}`;
        const T = parseInt(w, 16);
        if (this.isChainApproved(T)) this.setDefaultChain(`${T}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
            topic: u.topic,
            request: {
                method: u.request.method,
                params: [
                    {
                        chainId: w
                    }
                ]
            },
            chainId: (d = this.namespace.chains) == null ? void 0 : d[0]
        }), this.setDefaultChain(`${T}`);
        else throw new Error(`Failed to switch to chain 'eip155:${T}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
        return null;
    }
    isChainApproved(u) {
        return this.namespace.chains.includes(`${this.name}:${u}`);
    }
}
class jg {
    constructor(u){
        this.name = "solana", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    request(u) {
        return this.namespace.methods.includes(u.request.method) ? this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    setDefaultChain(u, i) {
        this.httpProviders[u] || this.setHttpProvider(u, i), this.chainId = u, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u}`);
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? [
            ...new Set(u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]))
        ] : [];
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            var d;
            const w = Ct(i);
            u[w] = this.createHttpProvider(w, (d = this.namespace.rpcMap) == null ? void 0 : d[i]);
        }), u;
    }
    getHttpProvider() {
        const u = `${this.name}:${this.chainId}`, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    setHttpProvider(u, i) {
        const d = this.createHttpProvider(u, i);
        d && (this.httpProviders[u] = d);
    }
    createHttpProvider(u, i) {
        const d = i || ft(u, this.namespace, this.client.core.projectId);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$provider$40$1$2e$0$2e$13$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$http$2d$connection$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](d, z("disableProviderPing")));
    }
}
class nv {
    constructor(u){
        this.name = "cosmos", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    request(u) {
        return this.namespace.methods.includes(u.request.method) ? this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    setDefaultChain(u, i) {
        this.httpProviders[u] || this.setHttpProvider(u, i), this.chainId = u, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? [
            ...new Set(u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]))
        ] : [];
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            var d;
            const w = Ct(i);
            u[w] = this.createHttpProvider(w, (d = this.namespace.rpcMap) == null ? void 0 : d[i]);
        }), u;
    }
    getHttpProvider() {
        const u = `${this.name}:${this.chainId}`, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    setHttpProvider(u, i) {
        const d = this.createHttpProvider(u, i);
        d && (this.httpProviders[u] = d);
    }
    createHttpProvider(u, i) {
        const d = i || ft(u, this.namespace, this.client.core.projectId);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$provider$40$1$2e$0$2e$13$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$http$2d$connection$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](d, z("disableProviderPing")));
    }
}
class tv {
    constructor(u){
        this.name = "cip34", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    request(u) {
        return this.namespace.methods.includes(u.request.method) ? this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    setDefaultChain(u, i) {
        this.httpProviders[u] || this.setHttpProvider(u, i), this.chainId = u, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? [
            ...new Set(u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]))
        ] : [];
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            const d = this.getCardanoRPCUrl(i), w = Ct(i);
            u[w] = this.createHttpProvider(w, d);
        }), u;
    }
    getHttpProvider() {
        const u = `${this.name}:${this.chainId}`, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    getCardanoRPCUrl(u) {
        const i = this.namespace.rpcMap;
        if (i) return i[u];
    }
    setHttpProvider(u, i) {
        const d = this.createHttpProvider(u, i);
        d && (this.httpProviders[u] = d);
    }
    createHttpProvider(u, i) {
        const d = i || this.getCardanoRPCUrl(u);
        if (!d) throw new Error(`No RPC url provided for chainId: ${u}`);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$provider$40$1$2e$0$2e$13$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$http$2d$connection$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](d, z("disableProviderPing")));
    }
}
class ev {
    constructor(u){
        this.name = "elrond", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    request(u) {
        return this.namespace.methods.includes(u.request.method) ? this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    setDefaultChain(u, i) {
        this.httpProviders[u] || this.setHttpProvider(u, i), this.chainId = u, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u}`);
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? [
            ...new Set(u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]))
        ] : [];
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            var d;
            const w = Ct(i);
            u[w] = this.createHttpProvider(w, (d = this.namespace.rpcMap) == null ? void 0 : d[i]);
        }), u;
    }
    getHttpProvider() {
        const u = `${this.name}:${this.chainId}`, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    setHttpProvider(u, i) {
        const d = this.createHttpProvider(u, i);
        d && (this.httpProviders[u] = d);
    }
    createHttpProvider(u, i) {
        const d = i || ft(u, this.namespace, this.client.core.projectId);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$provider$40$1$2e$0$2e$13$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$http$2d$connection$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](d, z("disableProviderPing")));
    }
}
class rv {
    constructor(u){
        this.name = "multiversx", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    request(u) {
        return this.namespace.methods.includes(u.request.method) ? this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    setDefaultChain(u, i) {
        this.httpProviders[u] || this.setHttpProvider(u, i), this.chainId = u, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u}`);
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? [
            ...new Set(u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]))
        ] : [];
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            var d;
            const w = Ct(i);
            u[w] = this.createHttpProvider(w, (d = this.namespace.rpcMap) == null ? void 0 : d[i]);
        }), u;
    }
    getHttpProvider() {
        const u = `${this.name}:${this.chainId}`, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    setHttpProvider(u, i) {
        const d = this.createHttpProvider(u, i);
        d && (this.httpProviders[u] = d);
    }
    createHttpProvider(u, i) {
        const d = i || ft(u, this.namespace, this.client.core.projectId);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$provider$40$1$2e$0$2e$13$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$http$2d$connection$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](d, z("disableProviderPing")));
    }
}
class iv {
    constructor(u){
        this.name = "near", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    request(u) {
        return this.namespace.methods.includes(u.request.method) ? this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    setDefaultChain(u, i) {
        if (this.chainId = u, !this.httpProviders[u]) {
            const d = i || ft(`${this.name}:${u}`, this.namespace);
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            this.setHttpProvider(u, d);
        }
        this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]) || [] : [];
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            var d;
            u[i] = this.createHttpProvider(i, (d = this.namespace.rpcMap) == null ? void 0 : d[i]);
        }), u;
    }
    getHttpProvider() {
        const u = `${this.name}:${this.chainId}`, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    setHttpProvider(u, i) {
        const d = this.createHttpProvider(u, i);
        d && (this.httpProviders[u] = d);
    }
    createHttpProvider(u, i) {
        const d = i || ft(u, this.namespace);
        return typeof d > "u" ? void 0 : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$provider$40$1$2e$0$2e$13$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$jsonrpc$2d$http$2d$connection$40$1$2e$0$2e$8$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](d, z("disableProviderPing")));
    }
}
var sv = Object.defineProperty, uv = Object.defineProperties, av = Object.getOwnPropertyDescriptors, ba = Object.getOwnPropertySymbols, ov = Object.prototype.hasOwnProperty, fv = Object.prototype.propertyIsEnumerable, Ta = (C, u, i)=>u in C ? sv(C, u, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : C[u] = i, hr = (C, u)=>{
    for(var i in u || (u = {}))ov.call(u, i) && Ta(C, i, u[i]);
    if (ba) for (var i of ba(u))fv.call(u, i) && Ta(C, i, u[i]);
    return C;
}, Mi = (C, u)=>uv(C, av(u));
class lr {
    constructor(u){
        this.events = new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["default"], this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = u, this.logger = typeof u?.logger < "u" && typeof u?.logger != "string" ? u.logger : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$7$2e$11$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__["pino"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$logger$40$2$2e$1$2e$2$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level: u?.logger || Ia
        })), this.disableProviderPing = u?.disableProviderPing || !1;
    }
    static async init(u) {
        const i = new lr(u);
        return await i.initialize(), i;
    }
    async request(u, i) {
        const [d, w] = this.validateChain(i);
        if (!this.session) throw new Error("Please call connect() before request()");
        return await this.getProvider(d).request({
            request: hr({}, u),
            chainId: `${d}:${w}`,
            topic: this.session.topic
        });
    }
    sendAsync(u, i, d) {
        this.request(u, d).then((w)=>i(null, w)).catch((w)=>i(w, void 0));
    }
    async enable() {
        if (!this.client) throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties
        }), await this.requestAccounts();
    }
    async disconnect() {
        var u;
        if (!this.session) throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: (u = this.session) == null ? void 0 : u.topic,
            reason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")
        }), await this.cleanup();
    }
    async connect(u) {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (this.setNamespaces(u), await this.cleanupPendingPairings(), !u.skipPairing) return await this.pair(u.pairingTopic);
    }
    on(u, i) {
        this.events.on(u, i);
    }
    once(u, i) {
        this.events.once(u, i);
    }
    removeListener(u, i) {
        this.events.removeListener(u, i);
    }
    off(u, i) {
        this.events.off(u, i);
    }
    get isWalletConnect() {
        return !0;
    }
    async pair(u) {
        this.shouldAbortPairingAttempt = !1;
        let i = 0;
        do {
            if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
            if (i >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
            const { uri: d, approval: w } = await this.client.connect({
                pairingTopic: u,
                requiredNamespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties
            });
            d && (this.uri = d, this.events.emit("display_uri", d)), await w().then((T)=>{
                this.session = T, this.namespaces || (this.namespaces = Qg(T.namespaces), this.persist("namespaces", this.namespaces));
            }).catch((T)=>{
                if (T.message !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$sign$2d$client$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROPOSAL_EXPIRY_MESSAGE"]) throw T;
                i++;
            });
        }while (!this.session)
        return this.onConnect(), this.session;
    }
    setDefaultChain(u, i) {
        try {
            if (!this.session) return;
            const [d, w] = this.validateChain(u);
            this.getProvider(d).setDefaultChain(w, i);
        } catch (d) {
            if (!/Please call connect/.test(d.message)) throw d;
        }
    }
    async cleanupPendingPairings(u = {}) {
        this.logger.info("Cleaning up inactive pairings...");
        const i = this.client.pairing.getAll();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidArray"])(i)) {
            for (const d of i)u.deletePairings ? this.client.core.expirer.set(d.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(d.topic);
            this.logger.info(`Inactive pairings cleared: ${i.length}`);
        }
    }
    abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0;
    }
    async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
            const u = this.client.session.keys.length - 1;
            this.session = this.client.session.get(this.client.session.keys[u]), this.createProviders();
        }
    }
    async initialize() {
        this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
    }
    async createClient() {
        this.client = this.providerOpts.client || await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$sign$2d$client$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].init({
            logger: this.providerOpts.logger || Ia,
            relayUrl: this.providerOpts.relayUrl || Ug,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name
        }), this.logger.trace("SignClient Initialized");
    }
    createProviders() {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
        const u = [
            ...new Set(Object.keys(this.session.namespaces).map((i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])(i)))
        ];
        Fi("client", this.client), Fi("events", this.events), Fi("disableProviderPing", this.disableProviderPing), u.forEach((i)=>{
            if (!this.session) return;
            const d = Zg(i, this.session), w = Sa(d), T = Jg(this.namespaces, this.optionalNamespaces), $ = Mi(hr({}, T[i]), {
                accounts: d,
                chains: w
            });
            switch(i){
                case "eip155":
                    this.rpcProviders[i] = new kg({
                        namespace: $
                    });
                    break;
                case "solana":
                    this.rpcProviders[i] = new jg({
                        namespace: $
                    });
                    break;
                case "cosmos":
                    this.rpcProviders[i] = new nv({
                        namespace: $
                    });
                    break;
                case "polkadot":
                    this.rpcProviders[i] = new Vg({
                        namespace: $
                    });
                    break;
                case "cip34":
                    this.rpcProviders[i] = new tv({
                        namespace: $
                    });
                    break;
                case "elrond":
                    this.rpcProviders[i] = new ev({
                        namespace: $
                    });
                    break;
                case "multiversx":
                    this.rpcProviders[i] = new rv({
                        namespace: $
                    });
                    break;
                case "near":
                    this.rpcProviders[i] = new iv({
                        namespace: $
                    });
                    break;
            }
        });
    }
    registerEventListeners() {
        if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", (u)=>{
            this.events.emit("session_ping", u);
        }), this.client.on("session_event", (u)=>{
            const { params: i } = u, { event: d } = i;
            if (d.name === "accountsChanged") {
                const w = d.data;
                w && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidArray"])(w) && this.events.emit("accountsChanged", w.map(Xg));
            } else if (d.name === "chainChanged") {
                const w = i.chainId, T = i.event.data, $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])(w), En = Wi(w) !== Wi(T) ? `${$}:${Wi(T)}` : w;
                this.onChainChanged(En);
            } else this.events.emit(d.name, d.data);
            this.events.emit("session_event", u);
        }), this.client.on("session_update", ({ topic: u, params: i })=>{
            var d;
            const { namespaces: w } = i, T = (d = this.client) == null ? void 0 : d.session.get(u);
            this.session = Mi(hr({}, T), {
                namespaces: w
            }), this.onSessionUpdate(), this.events.emit("session_update", {
                topic: u,
                params: i
            });
        }), this.client.on("session_delete", async (u)=>{
            await this.cleanup(), this.events.emit("session_delete", u), this.events.emit("disconnect", Mi(hr({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), {
                data: u.topic
            }));
        }), this.on(Vn.DEFAULT_CHAIN_CHANGED, (u)=>{
            this.onChainChanged(u, !0);
        });
    }
    getProvider(u) {
        if (!this.rpcProviders[u]) throw new Error(`Provider not found: ${u}`);
        return this.rpcProviders[u];
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach((u)=>{
            var i;
            this.getProvider(u).updateNamespace((i = this.session) == null ? void 0 : i.namespaces[u]);
        });
    }
    setNamespaces(u) {
        const { namespaces: i, optionalNamespaces: d, sessionProperties: w } = u;
        i && Object.keys(i).length && (this.namespaces = i), d && Object.keys(d).length && (this.optionalNamespaces = d), this.sessionProperties = w, this.persist("namespaces", i), this.persist("optionalNamespaces", d);
    }
    validateChain(u) {
        const [i, d] = u?.split(":") || [
            "",
            ""
        ];
        if (!this.namespaces || !Object.keys(this.namespaces).length) return [
            i,
            d
        ];
        if (i && !Object.keys(this.namespaces || {}).map(($)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])($)).includes(i)) throw new Error(`Namespace '${i}' is not configured. Please call connect() first with namespace config.`);
        if (i && d) return [
            i,
            d
        ];
        const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$utils$40$2$2e$10$2e$6$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])(Object.keys(this.namespaces)[0]), T = this.rpcProviders[w].getDefaultChain();
        return [
            w,
            T
        ];
    }
    async requestAccounts() {
        const [u] = this.validateChain();
        return await this.getProvider(u).requestAccounts();
    }
    onChainChanged(u, i = !1) {
        var d;
        if (!this.namespaces) return;
        const [w, T] = this.validateChain(u);
        i || this.getProvider(w).setDefaultChain(T), ((d = this.namespaces[w]) != null ? d : this.namespaces[`${w}:${T}`]).defaultChain = T, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", T);
    }
    onConnect() {
        this.createProviders(), this.events.emit("connect", {
            session: this.session
        });
    }
    async cleanup() {
        this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
            deletePairings: !0
        });
    }
    persist(u, i) {
        this.client.core.storage.setItem(`${xa}/${u}`, i);
    }
    async getFromStore(u) {
        return await this.client.core.storage.getItem(`${xa}/${u}`);
    }
}
const cv = lr;
;
 //# sourceMappingURL=index.es.js.map
}}),

};

//# sourceMappingURL=83d6f_%40walletconnect_universal-provider_dist_index_es_e9b947.js.map