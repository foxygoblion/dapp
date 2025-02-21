module.exports = {

"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAction = void 0;
function getAction(client, action, name) {
    return (params)=>client[action.name || name]?.(params) ?? action(client, params);
}
exports.getAction = getAction; //# sourceMappingURL=getAction.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiParams = exports.formatAbiItem = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
function formatAbiItem(abiItem, { includeName = false } = {}) {
    if (abiItem.type !== 'function' && abiItem.type !== 'event' && abiItem.type !== 'error') throw new abi_js_1.InvalidDefinitionTypeError(abiItem.type);
    return `${abiItem.name}(${formatAbiParams(abiItem.inputs, {
        includeName
    })})`;
}
exports.formatAbiItem = formatAbiItem;
function formatAbiParams(params, { includeName = false } = {}) {
    if (!params) return '';
    return params.map((param)=>formatAbiParam(param, {
            includeName
        })).join(includeName ? ', ' : ',');
}
exports.formatAbiParams = formatAbiParams;
function formatAbiParam(param, { includeName }) {
    if (param.type.startsWith('tuple')) {
        return `(${formatAbiParams(param.components, {
            includeName
        })})${param.type.slice('tuple'.length)}`;
    }
    return param.type + (includeName && param.name ? ` ${param.name}` : '');
} //# sourceMappingURL=formatAbiItem.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isHex = void 0;
function isHex(value, { strict = true } = {}) {
    if (!value) return false;
    if (typeof value !== 'string') return false;
    return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith('0x');
}
exports.isHex = isHex; //# sourceMappingURL=isHex.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/size.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.size = void 0;
const isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
function size(value) {
    if ((0, isHex_js_1.isHex)(value, {
        strict: false
    })) return Math.ceil((value.length - 2) / 2);
    return value.length;
}
exports.size = size; //# sourceMappingURL=size.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/version.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.version = void 0;
exports.version = '1.21.3'; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/utils.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getVersion = exports.getUrl = exports.getContractAddress = void 0;
const version_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/version.js [app-ssr] (ecmascript)");
const getContractAddress = (address)=>address;
exports.getContractAddress = getContractAddress;
const getUrl = (url)=>url;
exports.getUrl = getUrl;
const getVersion = ()=>`viem@${version_js_1.version}`;
exports.getVersion = getVersion; //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseError = void 0;
const utils_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/utils.js [app-ssr] (ecmascript)");
class BaseError extends Error {
    constructor(shortMessage, args = {}){
        super();
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
            value: 'ViemError'
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (0, utils_js_1.getVersion)()
        });
        const details = args.cause instanceof BaseError ? args.cause.details : args.cause?.message ? args.cause.message : args.details;
        const docsPath = args.cause instanceof BaseError ? args.cause.docsPath || args.docsPath : args.docsPath;
        this.message = [
            shortMessage || 'An error occurred.',
            '',
            ...args.metaMessages ? [
                ...args.metaMessages,
                ''
            ] : [],
            ...docsPath ? [
                `Docs: https://viem.sh${docsPath}.html${args.docsSlug ? `#${args.docsSlug}` : ''}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            `Version: ${this.version}`
        ].join('\n');
        if (args.cause) this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
exports.BaseError = BaseError;
function walk(err, fn) {
    if (fn?.(err)) return err;
    if (err && typeof err === 'object' && 'cause' in err) return walk(err.cause, fn);
    return fn ? null : err;
} //# sourceMappingURL=base.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnsupportedPackedAbiType = exports.InvalidDefinitionTypeError = exports.InvalidArrayError = exports.InvalidAbiDecodingTypeError = exports.InvalidAbiEncodingTypeError = exports.DecodeLogTopicsMismatch = exports.DecodeLogDataMismatch = exports.BytesSizeMismatchError = exports.AbiItemAmbiguityError = exports.AbiFunctionSignatureNotFoundError = exports.AbiFunctionOutputsNotFoundError = exports.AbiFunctionNotFoundError = exports.AbiEventNotFoundError = exports.AbiEventSignatureNotFoundError = exports.AbiEventSignatureEmptyTopicsError = exports.AbiErrorSignatureNotFoundError = exports.AbiErrorNotFoundError = exports.AbiErrorInputsNotFoundError = exports.AbiEncodingLengthMismatchError = exports.AbiEncodingBytesSizeMismatchError = exports.AbiEncodingArrayLengthMismatchError = exports.AbiDecodingZeroDataError = exports.AbiDecodingDataSizeTooSmallError = exports.AbiDecodingDataSizeInvalidError = exports.AbiConstructorParamsNotFoundError = exports.AbiConstructorNotFoundError = void 0;
const formatAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-ssr] (ecmascript)");
const size_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/size.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
class AbiConstructorNotFoundError extends base_js_1.BaseError {
    constructor({ docsPath }){
        super([
            'A constructor was not found on the ABI.',
            'Make sure you are using the correct ABI and that the constructor exists on it.'
        ].join('\n'), {
            docsPath
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiConstructorNotFoundError'
        });
    }
}
exports.AbiConstructorNotFoundError = AbiConstructorNotFoundError;
class AbiConstructorParamsNotFoundError extends base_js_1.BaseError {
    constructor({ docsPath }){
        super([
            'Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.',
            'Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.'
        ].join('\n'), {
            docsPath
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiConstructorParamsNotFoundError'
        });
    }
}
exports.AbiConstructorParamsNotFoundError = AbiConstructorParamsNotFoundError;
class AbiDecodingDataSizeInvalidError extends base_js_1.BaseError {
    constructor({ data, size }){
        super([
            `Data size of ${size} bytes is invalid.`,
            'Size must be in increments of 32 bytes (size % 32 === 0).'
        ].join('\n'), {
            metaMessages: [
                `Data: ${data} (${size} bytes)`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiDecodingDataSizeInvalidError'
        });
    }
}
exports.AbiDecodingDataSizeInvalidError = AbiDecodingDataSizeInvalidError;
class AbiDecodingDataSizeTooSmallError extends base_js_1.BaseError {
    constructor({ data, params, size }){
        super([
            `Data size of ${size} bytes is too small for given parameters.`
        ].join('\n'), {
            metaMessages: [
                `Params: (${(0, formatAbiItem_js_1.formatAbiParams)(params, {
                    includeName: true
                })})`,
                `Data:   ${data} (${size} bytes)`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiDecodingDataSizeTooSmallError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
exports.AbiDecodingDataSizeTooSmallError = AbiDecodingDataSizeTooSmallError;
class AbiDecodingZeroDataError extends base_js_1.BaseError {
    constructor(){
        super('Cannot decode zero data ("0x") with ABI parameters.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiDecodingZeroDataError'
        });
    }
}
exports.AbiDecodingZeroDataError = AbiDecodingZeroDataError;
class AbiEncodingArrayLengthMismatchError extends base_js_1.BaseError {
    constructor({ expectedLength, givenLength, type }){
        super([
            `ABI encoding array length mismatch for type ${type}.`,
            `Expected length: ${expectedLength}`,
            `Given length: ${givenLength}`
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEncodingArrayLengthMismatchError'
        });
    }
}
exports.AbiEncodingArrayLengthMismatchError = AbiEncodingArrayLengthMismatchError;
class AbiEncodingBytesSizeMismatchError extends base_js_1.BaseError {
    constructor({ expectedSize, value }){
        super(`Size of bytes "${value}" (bytes${(0, size_js_1.size)(value)}) does not match expected size (bytes${expectedSize}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEncodingBytesSizeMismatchError'
        });
    }
}
exports.AbiEncodingBytesSizeMismatchError = AbiEncodingBytesSizeMismatchError;
class AbiEncodingLengthMismatchError extends base_js_1.BaseError {
    constructor({ expectedLength, givenLength }){
        super([
            'ABI encoding params/values length mismatch.',
            `Expected length (params): ${expectedLength}`,
            `Given length (values): ${givenLength}`
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEncodingLengthMismatchError'
        });
    }
}
exports.AbiEncodingLengthMismatchError = AbiEncodingLengthMismatchError;
class AbiErrorInputsNotFoundError extends base_js_1.BaseError {
    constructor(errorName, { docsPath }){
        super([
            `Arguments (\`args\`) were provided to "${errorName}", but "${errorName}" on the ABI does not contain any parameters (\`inputs\`).`,
            'Cannot encode error result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the inputs exist on it.'
        ].join('\n'), {
            docsPath
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiErrorInputsNotFoundError'
        });
    }
}
exports.AbiErrorInputsNotFoundError = AbiErrorInputsNotFoundError;
class AbiErrorNotFoundError extends base_js_1.BaseError {
    constructor(errorName, { docsPath } = {}){
        super([
            `Error ${errorName ? `"${errorName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.'
        ].join('\n'), {
            docsPath
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiErrorNotFoundError'
        });
    }
}
exports.AbiErrorNotFoundError = AbiErrorNotFoundError;
class AbiErrorSignatureNotFoundError extends base_js_1.BaseError {
    constructor(signature, { docsPath }){
        super([
            `Encoded error signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.',
            `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join('\n'), {
            docsPath
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiErrorSignatureNotFoundError'
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.signature = signature;
    }
}
exports.AbiErrorSignatureNotFoundError = AbiErrorSignatureNotFoundError;
class AbiEventSignatureEmptyTopicsError extends base_js_1.BaseError {
    constructor({ docsPath }){
        super('Cannot extract event signature from empty topics.', {
            docsPath
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEventSignatureEmptyTopicsError'
        });
    }
}
exports.AbiEventSignatureEmptyTopicsError = AbiEventSignatureEmptyTopicsError;
class AbiEventSignatureNotFoundError extends base_js_1.BaseError {
    constructor(signature, { docsPath }){
        super([
            `Encoded event signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the event exists on it.',
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join('\n'), {
            docsPath
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEventSignatureNotFoundError'
        });
    }
}
exports.AbiEventSignatureNotFoundError = AbiEventSignatureNotFoundError;
class AbiEventNotFoundError extends base_js_1.BaseError {
    constructor(eventName, { docsPath } = {}){
        super([
            `Event ${eventName ? `"${eventName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the event exists on it.'
        ].join('\n'), {
            docsPath
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEventNotFoundError'
        });
    }
}
exports.AbiEventNotFoundError = AbiEventNotFoundError;
class AbiFunctionNotFoundError extends base_js_1.BaseError {
    constructor(functionName, { docsPath } = {}){
        super([
            `Function ${functionName ? `"${functionName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.'
        ].join('\n'), {
            docsPath
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiFunctionNotFoundError'
        });
    }
}
exports.AbiFunctionNotFoundError = AbiFunctionNotFoundError;
class AbiFunctionOutputsNotFoundError extends base_js_1.BaseError {
    constructor(functionName, { docsPath }){
        super([
            `Function "${functionName}" does not contain any \`outputs\` on ABI.`,
            'Cannot decode function result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the function exists on it.'
        ].join('\n'), {
            docsPath
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiFunctionOutputsNotFoundError'
        });
    }
}
exports.AbiFunctionOutputsNotFoundError = AbiFunctionOutputsNotFoundError;
class AbiFunctionSignatureNotFoundError extends base_js_1.BaseError {
    constructor(signature, { docsPath }){
        super([
            `Encoded function signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.',
            `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join('\n'), {
            docsPath
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiFunctionSignatureNotFoundError'
        });
    }
}
exports.AbiFunctionSignatureNotFoundError = AbiFunctionSignatureNotFoundError;
class AbiItemAmbiguityError extends base_js_1.BaseError {
    constructor(x, y){
        super('Found ambiguous types in overloaded ABI items.', {
            metaMessages: [
                `\`${x.type}\` in \`${(0, formatAbiItem_js_1.formatAbiItem)(x.abiItem)}\`, and`,
                `\`${y.type}\` in \`${(0, formatAbiItem_js_1.formatAbiItem)(y.abiItem)}\``,
                '',
                'These types encode differently and cannot be distinguished at runtime.',
                'Remove one of the ambiguous items in the ABI.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiItemAmbiguityError'
        });
    }
}
exports.AbiItemAmbiguityError = AbiItemAmbiguityError;
class BytesSizeMismatchError extends base_js_1.BaseError {
    constructor({ expectedSize, givenSize }){
        super(`Expected bytes${expectedSize}, got bytes${givenSize}.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BytesSizeMismatchError'
        });
    }
}
exports.BytesSizeMismatchError = BytesSizeMismatchError;
class DecodeLogDataMismatch extends base_js_1.BaseError {
    constructor({ abiItem, data, params, size }){
        super([
            `Data size of ${size} bytes is too small for non-indexed event parameters.`
        ].join('\n'), {
            metaMessages: [
                `Params: (${(0, formatAbiItem_js_1.formatAbiParams)(params, {
                    includeName: true
                })})`,
                `Data:   ${data} (${size} bytes)`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'DecodeLogDataMismatch'
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
exports.DecodeLogDataMismatch = DecodeLogDataMismatch;
class DecodeLogTopicsMismatch extends base_js_1.BaseError {
    constructor({ abiItem, param }){
        super([
            `Expected a topic for indexed event parameter${param.name ? ` "${param.name}"` : ''} on event "${(0, formatAbiItem_js_1.formatAbiItem)(abiItem, {
                includeName: true
            })}".`
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'DecodeLogTopicsMismatch'
        });
        Object.defineProperty(this, "abiItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiItem = abiItem;
    }
}
exports.DecodeLogTopicsMismatch = DecodeLogTopicsMismatch;
class InvalidAbiEncodingTypeError extends base_js_1.BaseError {
    constructor(type, { docsPath }){
        super([
            `Type "${type}" is not a valid encoding type.`,
            'Please provide a valid ABI type.'
        ].join('\n'), {
            docsPath
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiEncodingType'
        });
    }
}
exports.InvalidAbiEncodingTypeError = InvalidAbiEncodingTypeError;
class InvalidAbiDecodingTypeError extends base_js_1.BaseError {
    constructor(type, { docsPath }){
        super([
            `Type "${type}" is not a valid decoding type.`,
            'Please provide a valid ABI type.'
        ].join('\n'), {
            docsPath
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiDecodingType'
        });
    }
}
exports.InvalidAbiDecodingTypeError = InvalidAbiDecodingTypeError;
class InvalidArrayError extends base_js_1.BaseError {
    constructor(value){
        super([
            `Value "${value}" is not a valid array.`
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidArrayError'
        });
    }
}
exports.InvalidArrayError = InvalidArrayError;
class InvalidDefinitionTypeError extends base_js_1.BaseError {
    constructor(type){
        super([
            `"${type}" is not a valid definition type.`,
            'Valid types: "function", "event", "error"'
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidDefinitionTypeError'
        });
    }
}
exports.InvalidDefinitionTypeError = InvalidDefinitionTypeError;
class UnsupportedPackedAbiType extends base_js_1.BaseError {
    constructor(type){
        super(`Type "${type}" is not supported for packed encoding.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnsupportedPackedAbiType'
        });
    }
}
exports.UnsupportedPackedAbiType = UnsupportedPackedAbiType; //# sourceMappingURL=abi.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/log.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilterTypeNotSupportedError = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
class FilterTypeNotSupportedError extends base_js_1.BaseError {
    constructor(type){
        super(`Filter type "${type}" is not supported.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'FilterTypeNotSupportedError'
        });
    }
}
exports.FilterTypeNotSupportedError = FilterTypeNotSupportedError; //# sourceMappingURL=log.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/data.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SizeExceedsPaddingSizeError = exports.SliceOffsetOutOfBoundsError = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
class SliceOffsetOutOfBoundsError extends base_js_1.BaseError {
    constructor({ offset, position, size }){
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset "${offset}" is out-of-bounds (size: ${size}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SliceOffsetOutOfBoundsError'
        });
    }
}
exports.SliceOffsetOutOfBoundsError = SliceOffsetOutOfBoundsError;
class SizeExceedsPaddingSizeError extends base_js_1.BaseError {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size}) exceeds padding size (${targetSize}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SizeExceedsPaddingSizeError'
        });
    }
}
exports.SizeExceedsPaddingSizeError = SizeExceedsPaddingSizeError; //# sourceMappingURL=data.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/pad.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.padBytes = exports.padHex = exports.pad = void 0;
const data_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/data.js [app-ssr] (ecmascript)");
function pad(hexOrBytes, { dir, size = 32 } = {}) {
    if (typeof hexOrBytes === 'string') return padHex(hexOrBytes, {
        dir,
        size
    });
    return padBytes(hexOrBytes, {
        dir,
        size
    });
}
exports.pad = pad;
function padHex(hex_, { dir, size = 32 } = {}) {
    if (size === null) return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2) throw new data_js_1.SizeExceedsPaddingSizeError({
        size: Math.ceil(hex.length / 2),
        targetSize: size,
        type: 'hex'
    });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
exports.padHex = padHex;
function padBytes(bytes, { dir, size = 32 } = {}) {
    if (size === null) return bytes;
    if (bytes.length > size) throw new data_js_1.SizeExceedsPaddingSizeError({
        size: bytes.length,
        targetSize: size,
        type: 'bytes'
    });
    const paddedBytes = new Uint8Array(size);
    for(let i = 0; i < size; i++){
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
}
exports.padBytes = padBytes; //# sourceMappingURL=pad.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/encoding.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SizeOverflowError = exports.OffsetOutOfBoundsError = exports.InvalidHexValueError = exports.InvalidHexBooleanError = exports.InvalidBytesBooleanError = exports.IntegerOutOfRangeError = exports.DataLengthTooShortError = exports.DataLengthTooLongError = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
class DataLengthTooLongError extends base_js_1.BaseError {
    constructor({ consumed, length }){
        super(`Consumed bytes (${consumed}) is shorter than data length (${length - 1}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'DataLengthTooLongError'
        });
    }
}
exports.DataLengthTooLongError = DataLengthTooLongError;
class DataLengthTooShortError extends base_js_1.BaseError {
    constructor({ length, dataLength }){
        super(`Data length (${dataLength - 1}) is shorter than consumed bytes length (${length - 1}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'DataLengthTooShortError'
        });
    }
}
exports.DataLengthTooShortError = DataLengthTooShortError;
class IntegerOutOfRangeError extends base_js_1.BaseError {
    constructor({ max, min, signed, size, value }){
        super(`Number "${value}" is not in safe ${size ? `${size * 8}-bit ${signed ? 'signed' : 'unsigned'} ` : ''}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'IntegerOutOfRangeError'
        });
    }
}
exports.IntegerOutOfRangeError = IntegerOutOfRangeError;
class InvalidBytesBooleanError extends base_js_1.BaseError {
    constructor(bytes){
        super(`Bytes value "${bytes}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidBytesBooleanError'
        });
    }
}
exports.InvalidBytesBooleanError = InvalidBytesBooleanError;
class InvalidHexBooleanError extends base_js_1.BaseError {
    constructor(hex){
        super(`Hex value "${hex}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidHexBooleanError'
        });
    }
}
exports.InvalidHexBooleanError = InvalidHexBooleanError;
class InvalidHexValueError extends base_js_1.BaseError {
    constructor(value){
        super(`Hex value "${value}" is an odd length (${value.length}). It must be an even length.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidHexValueError'
        });
    }
}
exports.InvalidHexValueError = InvalidHexValueError;
class OffsetOutOfBoundsError extends base_js_1.BaseError {
    constructor({ nextOffset, offset }){
        super(`Next offset (${nextOffset}) is greater than previous offset + consumed bytes (${offset})`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'OffsetOutOfBoundsError'
        });
    }
}
exports.OffsetOutOfBoundsError = OffsetOutOfBoundsError;
class SizeOverflowError extends base_js_1.BaseError {
    constructor({ givenSize, maxSize }){
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SizeOverflowError'
        });
    }
}
exports.SizeOverflowError = SizeOverflowError; //# sourceMappingURL=encoding.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/trim.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trim = void 0;
function trim(hexOrBytes, { dir = 'left' } = {}) {
    let data = typeof hexOrBytes === 'string' ? hexOrBytes.replace('0x', '') : hexOrBytes;
    let sliceLength = 0;
    for(let i = 0; i < data.length - 1; i++){
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0') sliceLength++;
        else break;
    }
    data = dir === 'left' ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    if (typeof hexOrBytes === 'string') {
        if (data.length === 1 && dir === 'right') data = `${data}0`;
        return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
    }
    return data;
}
exports.trim = trim; //# sourceMappingURL=trim.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hexToString = exports.hexToNumber = exports.hexToBool = exports.hexToBigInt = exports.fromHex = exports.assertSize = void 0;
const encoding_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/encoding.js [app-ssr] (ecmascript)");
const size_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/size.js [app-ssr] (ecmascript)");
const trim_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/trim.js [app-ssr] (ecmascript)");
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
function assertSize(hexOrBytes, { size }) {
    if ((0, size_js_1.size)(hexOrBytes) > size) throw new encoding_js_1.SizeOverflowError({
        givenSize: (0, size_js_1.size)(hexOrBytes),
        maxSize: size
    });
}
exports.assertSize = assertSize;
function fromHex(hex, toOrOpts) {
    const opts = typeof toOrOpts === 'string' ? {
        to: toOrOpts
    } : toOrOpts;
    const to = opts.to;
    if (to === 'number') return hexToNumber(hex, opts);
    if (to === 'bigint') return hexToBigInt(hex, opts);
    if (to === 'string') return hexToString(hex, opts);
    if (to === 'boolean') return hexToBool(hex, opts);
    return (0, toBytes_js_1.hexToBytes)(hex, opts);
}
exports.fromHex = fromHex;
function hexToBigInt(hex, opts = {}) {
    const { signed } = opts;
    if (opts.size) assertSize(hex, {
        size: opts.size
    });
    const value = BigInt(hex);
    if (!signed) return value;
    const size = (hex.length - 2) / 2;
    const max = (1n << BigInt(size) * 8n - 1n) - 1n;
    if (value <= max) return value;
    return value - BigInt(`0x${'f'.padStart(size * 2, 'f')}`) - 1n;
}
exports.hexToBigInt = hexToBigInt;
function hexToBool(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        assertSize(hex, {
            size: opts.size
        });
        hex = (0, trim_js_1.trim)(hex);
    }
    if ((0, trim_js_1.trim)(hex) === '0x00') return false;
    if ((0, trim_js_1.trim)(hex) === '0x01') return true;
    throw new encoding_js_1.InvalidHexBooleanError(hex);
}
exports.hexToBool = hexToBool;
function hexToNumber(hex, opts = {}) {
    return Number(hexToBigInt(hex, opts));
}
exports.hexToNumber = hexToNumber;
function hexToString(hex, opts = {}) {
    let bytes = (0, toBytes_js_1.hexToBytes)(hex);
    if (opts.size) {
        assertSize(bytes, {
            size: opts.size
        });
        bytes = (0, trim_js_1.trim)(bytes, {
            dir: 'right'
        });
    }
    return new TextDecoder().decode(bytes);
}
exports.hexToString = hexToString; //# sourceMappingURL=fromHex.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stringToHex = exports.numberToHex = exports.bytesToHex = exports.boolToHex = exports.toHex = void 0;
const encoding_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/encoding.js [app-ssr] (ecmascript)");
const pad_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/pad.js [app-ssr] (ecmascript)");
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const hexes = Array.from({
    length: 256
}, (_v, i)=>i.toString(16).padStart(2, '0'));
function toHex(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint') return numberToHex(value, opts);
    if (typeof value === 'string') {
        return stringToHex(value, opts);
    }
    if (typeof value === 'boolean') return boolToHex(value, opts);
    return bytesToHex(value, opts);
}
exports.toHex = toHex;
function boolToHex(value, opts = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof opts.size === 'number') {
        (0, fromHex_js_1.assertSize)(hex, {
            size: opts.size
        });
        return (0, pad_js_1.pad)(hex, {
            size: opts.size
        });
    }
    return hex;
}
exports.boolToHex = boolToHex;
function bytesToHex(value, opts = {}) {
    let string = '';
    for(let i = 0; i < value.length; i++){
        string += hexes[value[i]];
    }
    const hex = `0x${string}`;
    if (typeof opts.size === 'number') {
        (0, fromHex_js_1.assertSize)(hex, {
            size: opts.size
        });
        return (0, pad_js_1.pad)(hex, {
            dir: 'right',
            size: opts.size
        });
    }
    return hex;
}
exports.bytesToHex = bytesToHex;
function numberToHex(value_, opts = {}) {
    const { signed, size } = opts;
    const value = BigInt(value_);
    let maxValue;
    if (size) {
        if (signed) maxValue = (1n << BigInt(size) * 8n - 1n) - 1n;
        else maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    } else if (typeof value_ === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if (maxValue && value > maxValue || value < minValue) {
        const suffix = typeof value_ === 'bigint' ? 'n' : '';
        throw new encoding_js_1.IntegerOutOfRangeError({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value_}${suffix}`
        });
    }
    const hex = `0x${(signed && value < 0 ? (1n << BigInt(size * 8)) + BigInt(value) : value).toString(16)}`;
    if (size) return (0, pad_js_1.pad)(hex, {
        size
    });
    return hex;
}
exports.numberToHex = numberToHex;
const encoder = new TextEncoder();
function stringToHex(value_, opts = {}) {
    const value = encoder.encode(value_);
    return bytesToHex(value, opts);
}
exports.stringToHex = stringToHex; //# sourceMappingURL=toHex.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stringToBytes = exports.numberToBytes = exports.hexToBytes = exports.boolToBytes = exports.toBytes = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
const pad_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/pad.js [app-ssr] (ecmascript)");
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const encoder = new TextEncoder();
function toBytes(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint') return numberToBytes(value, opts);
    if (typeof value === 'boolean') return boolToBytes(value, opts);
    if ((0, isHex_js_1.isHex)(value)) return hexToBytes(value, opts);
    return stringToBytes(value, opts);
}
exports.toBytes = toBytes;
function boolToBytes(value, opts = {}) {
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof opts.size === 'number') {
        (0, fromHex_js_1.assertSize)(bytes, {
            size: opts.size
        });
        return (0, pad_js_1.pad)(bytes, {
            size: opts.size
        });
    }
    return bytes;
}
exports.boolToBytes = boolToBytes;
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine) return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F) return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f) return char - (charCodeMap.a - 10);
    return undefined;
}
function hexToBytes(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        (0, fromHex_js_1.assertSize)(hex, {
            size: opts.size
        });
        hex = (0, pad_js_1.pad)(hex, {
            dir: 'right',
            size: opts.size
        });
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2) hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for(let index = 0, j = 0; index < length; index++){
        const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new base_js_1.BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
exports.hexToBytes = hexToBytes;
function numberToBytes(value, opts) {
    const hex = (0, toHex_js_1.numberToHex)(value, opts);
    return hexToBytes(hex);
}
exports.numberToBytes = numberToBytes;
function stringToBytes(value, opts = {}) {
    const bytes = encoder.encode(value);
    if (typeof opts.size === 'number') {
        (0, fromHex_js_1.assertSize)(bytes, {
            size: opts.size
        });
        return (0, pad_js_1.pad)(bytes, {
            dir: 'right',
            size: opts.size
        });
    }
    return bytes;
}
exports.stringToBytes = stringToBytes; //# sourceMappingURL=toBytes.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/normalizeSignature.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeSignature = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
function normalizeSignature(signature) {
    let active = true;
    let current = '';
    let level = 0;
    let result = '';
    let valid = false;
    for(let i = 0; i < signature.length; i++){
        const char = signature[i];
        if ([
            '(',
            ')',
            ','
        ].includes(char)) active = true;
        if (char === '(') level++;
        if (char === ')') level--;
        if (!active) continue;
        if (level === 0) {
            if (char === ' ' && [
                'event',
                'function',
                ''
            ].includes(result)) result = '';
            else {
                result += char;
                if (char === ')') {
                    valid = true;
                    break;
                }
            }
            continue;
        }
        if (char === ' ') {
            if (signature[i - 1] !== ',' && current !== ',' && current !== ',(') {
                current = '';
                active = false;
            }
            continue;
        }
        result += char;
        current += char;
    }
    if (!valid) throw new base_js_1.BaseError('Unable to normalize signature.');
    return result;
}
exports.normalizeSignature = normalizeSignature; //# sourceMappingURL=normalizeSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getFunctionSignature.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFunctionSignature = void 0;
const abitype_1 = __turbopack_require__("[project]/node_modules/.pnpm/abitype@0.9.8_typescript@5.7.3/node_modules/abitype/dist/cjs/index.js [app-ssr] (ecmascript)");
const normalizeSignature_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/normalizeSignature.js [app-ssr] (ecmascript)");
const getFunctionSignature = (fn_)=>{
    const fn = (()=>{
        if (typeof fn_ === 'string') return fn_;
        return (0, abitype_1.formatAbiItem)(fn_);
    })();
    return (0, normalizeSignature_js_1.normalizeSignature)(fn);
};
exports.getFunctionSignature = getFunctionSignature; //# sourceMappingURL=getFunctionSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getEventSignature.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEventSignature = void 0;
const getFunctionSignature_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getFunctionSignature.js [app-ssr] (ecmascript)");
const getEventSignature = (fn)=>{
    return (0, getFunctionSignature_js_1.getFunctionSignature)(fn);
};
exports.getEventSignature = getEventSignature; //# sourceMappingURL=getEventSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.keccak256 = void 0;
const sha3_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/sha3.js [app-ssr] (ecmascript)");
const isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
function keccak256(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0, sha3_1.keccak_256)((0, isHex_js_1.isHex)(value, {
        strict: false
    }) ? (0, toBytes_js_1.toBytes)(value) : value);
    if (to === 'bytes') return bytes;
    return (0, toHex_js_1.toHex)(bytes);
}
exports.keccak256 = keccak256; //# sourceMappingURL=keccak256.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getEventSelector.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEventSelector = void 0;
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const getEventSignature_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getEventSignature.js [app-ssr] (ecmascript)");
const keccak256_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-ssr] (ecmascript)");
const hash = (value)=>(0, keccak256_js_1.keccak256)((0, toBytes_js_1.toBytes)(value));
const getEventSelector = (fn)=>hash((0, getEventSignature_js_1.getEventSignature)(fn));
exports.getEventSelector = getEventSelector; //# sourceMappingURL=getEventSelector.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/address.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidAddressError = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
class InvalidAddressError extends base_js_1.BaseError {
    constructor({ address }){
        super(`Address "${address}" is invalid.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAddressError'
        });
    }
}
exports.InvalidAddressError = InvalidAddressError; //# sourceMappingURL=address.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAddress = void 0;
const addressRegex = /^0x[a-fA-F0-9]{40}$/;
function isAddress(address) {
    return addressRegex.test(address);
}
exports.isAddress = isAddress; //# sourceMappingURL=isAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concatHex = exports.concatBytes = exports.concat = void 0;
function concat(values) {
    if (typeof values[0] === 'string') return concatHex(values);
    return concatBytes(values);
}
exports.concat = concat;
function concatBytes(values) {
    let length = 0;
    for (const arr of values){
        length += arr.length;
    }
    const result = new Uint8Array(length);
    let offset = 0;
    for (const arr of values){
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}
exports.concatBytes = concatBytes;
function concatHex(values) {
    return `0x${values.reduce((acc, x)=>acc + x.replace('0x', ''), '')}`;
}
exports.concatHex = concatHex; //# sourceMappingURL=concat.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/slice.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sliceHex = exports.sliceBytes = exports.slice = void 0;
const data_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/data.js [app-ssr] (ecmascript)");
const isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
const size_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/size.js [app-ssr] (ecmascript)");
function slice(value, start, end, { strict } = {}) {
    if ((0, isHex_js_1.isHex)(value, {
        strict: false
    })) return sliceHex(value, start, end, {
        strict
    });
    return sliceBytes(value, start, end, {
        strict
    });
}
exports.slice = slice;
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > (0, size_js_1.size)(value) - 1) throw new data_js_1.SliceOffsetOutOfBoundsError({
        offset: start,
        position: 'start',
        size: (0, size_js_1.size)(value)
    });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' && typeof end === 'number' && (0, size_js_1.size)(value) !== end - start) {
        throw new data_js_1.SliceOffsetOutOfBoundsError({
            offset: end,
            position: 'end',
            size: (0, size_js_1.size)(value)
        });
    }
}
function sliceBytes(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = value_.slice(start, end);
    if (strict) assertEndOffset(value, start, end);
    return value;
}
exports.sliceBytes = sliceBytes;
function sliceHex(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = `0x${value_.replace('0x', '').slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
    if (strict) assertEndOffset(value, start, end);
    return value;
}
exports.sliceHex = sliceHex; //# sourceMappingURL=slice.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getArrayComponents = exports.encodeAbiParameters = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const address_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/address.js [app-ssr] (ecmascript)");
const isAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-ssr] (ecmascript)");
const concat_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
const pad_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/pad.js [app-ssr] (ecmascript)");
const size_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/size.js [app-ssr] (ecmascript)");
const slice_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/slice.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
function encodeAbiParameters(params, values) {
    if (params.length !== values.length) throw new abi_js_1.AbiEncodingLengthMismatchError({
        expectedLength: params.length,
        givenLength: values.length
    });
    const preparedParams = prepareParams({
        params: params,
        values
    });
    const data = encodeParams(preparedParams);
    if (data.length === 0) return '0x';
    return data;
}
exports.encodeAbiParameters = encodeAbiParameters;
function prepareParams({ params, values }) {
    const preparedParams = [];
    for(let i = 0; i < params.length; i++){
        preparedParams.push(prepareParam({
            param: params[i],
            value: values[i]
        }));
    }
    return preparedParams;
}
function prepareParam({ param, value }) {
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return encodeArray(value, {
            length,
            param: {
                ...param,
                type
            }
        });
    }
    if (param.type === 'tuple') {
        return encodeTuple(value, {
            param: param
        });
    }
    if (param.type === 'address') {
        return encodeAddress(value);
    }
    if (param.type === 'bool') {
        return encodeBool(value);
    }
    if (param.type.startsWith('uint') || param.type.startsWith('int')) {
        const signed = param.type.startsWith('int');
        return encodeNumber(value, {
            signed
        });
    }
    if (param.type.startsWith('bytes')) {
        return encodeBytes(value, {
            param
        });
    }
    if (param.type === 'string') {
        return encodeString(value);
    }
    throw new abi_js_1.InvalidAbiEncodingTypeError(param.type, {
        docsPath: '/docs/contract/encodeAbiParameters'
    });
}
function encodeParams(preparedParams) {
    let staticSize = 0;
    for(let i = 0; i < preparedParams.length; i++){
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic) staticSize += 32;
        else staticSize += (0, size_js_1.size)(encoded);
    }
    const staticParams = [];
    const dynamicParams = [];
    let dynamicSize = 0;
    for(let i = 0; i < preparedParams.length; i++){
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic) {
            staticParams.push((0, toHex_js_1.numberToHex)(staticSize + dynamicSize, {
                size: 32
            }));
            dynamicParams.push(encoded);
            dynamicSize += (0, size_js_1.size)(encoded);
        } else {
            staticParams.push(encoded);
        }
    }
    return (0, concat_js_1.concat)([
        ...staticParams,
        ...dynamicParams
    ]);
}
function encodeAddress(value) {
    if (!(0, isAddress_js_1.isAddress)(value)) throw new address_js_1.InvalidAddressError({
        address: value
    });
    return {
        dynamic: false,
        encoded: (0, pad_js_1.padHex)(value.toLowerCase())
    };
}
function encodeArray(value, { length, param }) {
    const dynamic = length === null;
    if (!Array.isArray(value)) throw new abi_js_1.InvalidArrayError(value);
    if (!dynamic && value.length !== length) throw new abi_js_1.AbiEncodingArrayLengthMismatchError({
        expectedLength: length,
        givenLength: value.length,
        type: `${param.type}[${length}]`
    });
    let dynamicChild = false;
    const preparedParams = [];
    for(let i = 0; i < value.length; i++){
        const preparedParam = prepareParam({
            param,
            value: value[i]
        });
        if (preparedParam.dynamic) dynamicChild = true;
        preparedParams.push(preparedParam);
    }
    if (dynamic || dynamicChild) {
        const data = encodeParams(preparedParams);
        if (dynamic) {
            const length = (0, toHex_js_1.numberToHex)(preparedParams.length, {
                size: 32
            });
            return {
                dynamic: true,
                encoded: preparedParams.length > 0 ? (0, concat_js_1.concat)([
                    length,
                    data
                ]) : length
            };
        }
        if (dynamicChild) return {
            dynamic: true,
            encoded: data
        };
    }
    return {
        dynamic: false,
        encoded: (0, concat_js_1.concat)(preparedParams.map(({ encoded })=>encoded))
    };
}
function encodeBytes(value, { param }) {
    const [, paramSize] = param.type.split('bytes');
    const bytesSize = (0, size_js_1.size)(value);
    if (!paramSize) {
        let value_ = value;
        if (bytesSize % 32 !== 0) value_ = (0, pad_js_1.padHex)(value_, {
            dir: 'right',
            size: Math.ceil((value.length - 2) / 2 / 32) * 32
        });
        return {
            dynamic: true,
            encoded: (0, concat_js_1.concat)([
                (0, pad_js_1.padHex)((0, toHex_js_1.numberToHex)(bytesSize, {
                    size: 32
                })),
                value_
            ])
        };
    }
    if (bytesSize !== parseInt(paramSize)) throw new abi_js_1.AbiEncodingBytesSizeMismatchError({
        expectedSize: parseInt(paramSize),
        value
    });
    return {
        dynamic: false,
        encoded: (0, pad_js_1.padHex)(value, {
            dir: 'right'
        })
    };
}
function encodeBool(value) {
    return {
        dynamic: false,
        encoded: (0, pad_js_1.padHex)((0, toHex_js_1.boolToHex)(value))
    };
}
function encodeNumber(value, { signed }) {
    return {
        dynamic: false,
        encoded: (0, toHex_js_1.numberToHex)(value, {
            size: 32,
            signed
        })
    };
}
function encodeString(value) {
    const hexValue = (0, toHex_js_1.stringToHex)(value);
    const partsLength = Math.ceil((0, size_js_1.size)(hexValue) / 32);
    const parts = [];
    for(let i = 0; i < partsLength; i++){
        parts.push((0, pad_js_1.padHex)((0, slice_js_1.slice)(hexValue, i * 32, (i + 1) * 32), {
            dir: 'right'
        }));
    }
    return {
        dynamic: true,
        encoded: (0, concat_js_1.concat)([
            (0, pad_js_1.padHex)((0, toHex_js_1.numberToHex)((0, size_js_1.size)(hexValue), {
                size: 32
            })),
            ...parts
        ])
    };
}
function encodeTuple(value, { param }) {
    let dynamic = false;
    const preparedParams = [];
    for(let i = 0; i < param.components.length; i++){
        const param_ = param.components[i];
        const index = Array.isArray(value) ? i : param_.name;
        const preparedParam = prepareParam({
            param: param_,
            value: value[index]
        });
        preparedParams.push(preparedParam);
        if (preparedParam.dynamic) dynamic = true;
    }
    return {
        dynamic,
        encoded: dynamic ? encodeParams(preparedParams) : (0, concat_js_1.concat)(preparedParams.map(({ encoded })=>encoded))
    };
}
function getArrayComponents(type) {
    const matches = type.match(/^(.*)\[(\d+)?\]$/);
    return matches ? [
        matches[2] ? Number(matches[2]) : null,
        matches[1]
    ] : undefined;
}
exports.getArrayComponents = getArrayComponents; //# sourceMappingURL=encodeAbiParameters.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getFunctionSelector.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFunctionSelector = void 0;
const slice_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/slice.js [app-ssr] (ecmascript)");
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const getFunctionSignature_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getFunctionSignature.js [app-ssr] (ecmascript)");
const keccak256_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-ssr] (ecmascript)");
const hash = (value)=>(0, keccak256_js_1.keccak256)((0, toBytes_js_1.toBytes)(value));
const getFunctionSelector = (fn)=>(0, slice_js_1.slice)(hash((0, getFunctionSignature_js_1.getFunctionSignature)(fn)), 0, 4);
exports.getFunctionSelector = getFunctionSelector; //# sourceMappingURL=getFunctionSelector.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAmbiguousTypes = exports.isArgOfType = exports.getAbiItem = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
const getEventSelector_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getEventSelector.js [app-ssr] (ecmascript)");
const getFunctionSelector_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getFunctionSelector.js [app-ssr] (ecmascript)");
const isAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-ssr] (ecmascript)");
function getAbiItem({ abi, args = [], name }) {
    const isSelector = (0, isHex_js_1.isHex)(name, {
        strict: false
    });
    const abiItems = abi.filter((abiItem)=>{
        if (isSelector) {
            if (abiItem.type === 'function') return (0, getFunctionSelector_js_1.getFunctionSelector)(abiItem) === name;
            if (abiItem.type === 'event') return (0, getEventSelector_js_1.getEventSelector)(abiItem) === name;
            return false;
        }
        return 'name' in abiItem && abiItem.name === name;
    });
    if (abiItems.length === 0) return undefined;
    if (abiItems.length === 1) return abiItems[0];
    let matchedAbiItem = undefined;
    for (const abiItem of abiItems){
        if (!('inputs' in abiItem)) continue;
        if (!args || args.length === 0) {
            if (!abiItem.inputs || abiItem.inputs.length === 0) return abiItem;
            continue;
        }
        if (!abiItem.inputs) continue;
        if (abiItem.inputs.length === 0) continue;
        if (abiItem.inputs.length !== args.length) continue;
        const matched = args.every((arg, index)=>{
            const abiParameter = 'inputs' in abiItem && abiItem.inputs[index];
            if (!abiParameter) return false;
            return isArgOfType(arg, abiParameter);
        });
        if (matched) {
            if (matchedAbiItem && 'inputs' in matchedAbiItem && matchedAbiItem.inputs) {
                const ambiguousTypes = getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
                if (ambiguousTypes) throw new abi_js_1.AbiItemAmbiguityError({
                    abiItem,
                    type: ambiguousTypes[0]
                }, {
                    abiItem: matchedAbiItem,
                    type: ambiguousTypes[1]
                });
            }
            matchedAbiItem = abiItem;
        }
    }
    if (matchedAbiItem) return matchedAbiItem;
    return abiItems[0];
}
exports.getAbiItem = getAbiItem;
function isArgOfType(arg, abiParameter) {
    const argType = typeof arg;
    const abiParameterType = abiParameter.type;
    switch(abiParameterType){
        case 'address':
            return (0, isAddress_js_1.isAddress)(arg);
        case 'bool':
            return argType === 'boolean';
        case 'function':
            return argType === 'string';
        case 'string':
            return argType === 'string';
        default:
            {
                if (abiParameterType === 'tuple' && 'components' in abiParameter) return Object.values(abiParameter.components).every((component, index)=>{
                    return isArgOfType(Object.values(arg)[index], component);
                });
                if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType)) return argType === 'number' || argType === 'bigint';
                if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType)) return argType === 'string' || arg instanceof Uint8Array;
                if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
                    return Array.isArray(arg) && arg.every((x)=>isArgOfType(x, {
                            ...abiParameter,
                            type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, '')
                        }));
                }
                return false;
            }
    }
}
exports.isArgOfType = isArgOfType;
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
    for(const parameterIndex in sourceParameters){
        const sourceParameter = sourceParameters[parameterIndex];
        const targetParameter = targetParameters[parameterIndex];
        if (sourceParameter.type === 'tuple' && targetParameter.type === 'tuple' && 'components' in sourceParameter && 'components' in targetParameter) return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
        const types = [
            sourceParameter.type,
            targetParameter.type
        ];
        const ambiguous = (()=>{
            if (types.includes('address') && types.includes('bytes20')) return true;
            if (types.includes('address') && types.includes('string')) return (0, isAddress_js_1.isAddress)(args[parameterIndex]);
            if (types.includes('address') && types.includes('bytes')) return (0, isAddress_js_1.isAddress)(args[parameterIndex]);
            return false;
        })();
        if (ambiguous) return types;
    }
    return;
}
exports.getAmbiguousTypes = getAmbiguousTypes; //# sourceMappingURL=getAbiItem.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeEventTopics = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const log_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/log.js [app-ssr] (ecmascript)");
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const getEventSelector_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getEventSelector.js [app-ssr] (ecmascript)");
const keccak256_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-ssr] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-ssr] (ecmascript)");
const getAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
function encodeEventTopics({ abi, eventName, args }) {
    let abiItem = abi[0];
    if (eventName) {
        abiItem = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            args,
            name: eventName
        });
        if (!abiItem) throw new abi_js_1.AbiEventNotFoundError(eventName, {
            docsPath: '/docs/contract/encodeEventTopics'
        });
    }
    if (abiItem.type !== 'event') throw new abi_js_1.AbiEventNotFoundError(undefined, {
        docsPath: '/docs/contract/encodeEventTopics'
    });
    const definition = (0, formatAbiItem_js_1.formatAbiItem)(abiItem);
    const signature = (0, getEventSelector_js_1.getEventSelector)(definition);
    let topics = [];
    if (args && 'inputs' in abiItem) {
        const indexedInputs = abiItem.inputs?.filter((param)=>'indexed' in param && param.indexed);
        const args_ = Array.isArray(args) ? args : Object.values(args).length > 0 ? indexedInputs?.map((x)=>args[x.name]) ?? [] : [];
        if (args_.length > 0) {
            topics = indexedInputs?.map((param, i)=>Array.isArray(args_[i]) ? args_[i].map((_, j)=>encodeArg({
                        param,
                        value: args_[i][j]
                    })) : args_[i] ? encodeArg({
                    param,
                    value: args_[i]
                }) : null) ?? [];
        }
    }
    return [
        signature,
        ...topics
    ];
}
exports.encodeEventTopics = encodeEventTopics;
function encodeArg({ param, value }) {
    if (param.type === 'string' || param.type === 'bytes') return (0, keccak256_js_1.keccak256)((0, toBytes_js_1.toBytes)(value));
    if (param.type === 'tuple' || param.type.match(/^(.*)\[(\d+)?\]$/)) throw new log_js_1.FilterTypeNotSupportedError(param.type);
    return (0, encodeAbiParameters_js_1.encodeAbiParameters)([
        param
    ], [
        value
    ]);
} //# sourceMappingURL=encodeEventTopics.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createFilterRequestScope = void 0;
function createFilterRequestScope(client, { method }) {
    const requestMap = {};
    if (client.transport.type === 'fallback') client.transport.onResponse?.(({ method: method_, response: id, status, transport })=>{
        if (status === 'success' && method === method_) requestMap[id] = transport.request;
    });
    return (id)=>requestMap[id] || client.request;
}
exports.createFilterRequestScope = createFilterRequestScope; //# sourceMappingURL=createFilterRequestScope.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/createContractEventFilter.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createContractEventFilter = void 0;
const encodeEventTopics_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const createFilterRequestScope_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-ssr] (ecmascript)");
async function createContractEventFilter(client, { address, abi, args, eventName, fromBlock, strict, toBlock }) {
    const getRequest = (0, createFilterRequestScope_js_1.createFilterRequestScope)(client, {
        method: 'eth_newFilter'
    });
    const topics = eventName ? (0, encodeEventTopics_js_1.encodeEventTopics)({
        abi,
        args,
        eventName
    }) : undefined;
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(toBlock) : toBlock,
                topics
            }
        ]
    });
    return {
        abi,
        args,
        eventName,
        id,
        request: getRequest(id),
        strict,
        type: 'event'
    };
}
exports.createContractEventFilter = createContractEventFilter; //# sourceMappingURL=createContractEventFilter.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAccount = void 0;
function parseAccount(account) {
    if (typeof account === 'string') return {
        address: account,
        type: 'json-rpc'
    };
    return account;
}
exports.parseAccount = parseAccount; //# sourceMappingURL=parseAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeFunctionData = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const concat_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
const getFunctionSelector_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getFunctionSelector.js [app-ssr] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-ssr] (ecmascript)");
const getAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
function encodeFunctionData({ abi, args, functionName }) {
    let abiItem = abi[0];
    if (functionName) {
        abiItem = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            args,
            name: functionName
        });
        if (!abiItem) throw new abi_js_1.AbiFunctionNotFoundError(functionName, {
            docsPath: '/docs/contract/encodeFunctionData'
        });
    }
    if (abiItem.type !== 'function') throw new abi_js_1.AbiFunctionNotFoundError(undefined, {
        docsPath: '/docs/contract/encodeFunctionData'
    });
    const definition = (0, formatAbiItem_js_1.formatAbiItem)(abiItem);
    const signature = (0, getFunctionSelector_js_1.getFunctionSelector)(definition);
    const data = 'inputs' in abiItem && abiItem.inputs ? (0, encodeAbiParameters_js_1.encodeAbiParameters)(abiItem.inputs, args ?? []) : undefined;
    return (0, concat_js_1.concatHex)([
        signature,
        data ?? '0x'
    ]);
}
exports.encodeFunctionData = encodeFunctionData; //# sourceMappingURL=encodeFunctionData.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/solidity.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.solidityPanic = exports.solidityError = exports.panicReasons = void 0;
exports.panicReasons = {
    1: 'An `assert` condition failed.',
    17: 'Arithmic operation resulted in underflow or overflow.',
    18: 'Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).',
    33: 'Attempted to convert to an invalid type.',
    34: 'Attempted to access a storage byte array that is incorrectly encoded.',
    49: 'Performed `.pop()` on an empty array',
    50: 'Array index is out of bounds.',
    65: 'Allocated too much memory or created an array which is too large.',
    81: 'Attempted to call a zero-initialized variable of internal function type.'
};
exports.solidityError = {
    inputs: [
        {
            name: 'message',
            type: 'string'
        }
    ],
    name: 'Error',
    type: 'error'
};
exports.solidityPanic = {
    inputs: [
        {
            name: 'reason',
            type: 'uint256'
        }
    ],
    name: 'Panic',
    type: 'error'
}; //# sourceMappingURL=solidity.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAddress = exports.checksumAddress = void 0;
const address_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/address.js [app-ssr] (ecmascript)");
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const keccak256_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-ssr] (ecmascript)");
const isAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-ssr] (ecmascript)");
function checksumAddress(address_, chainId) {
    const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
    const hash = (0, keccak256_js_1.keccak256)((0, toBytes_js_1.stringToBytes)(hexAddress), 'bytes');
    const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split('');
    for(let i = 0; i < 40; i += 2){
        if (hash[i >> 1] >> 4 >= 8 && address[i]) {
            address[i] = address[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && address[i + 1]) {
            address[i + 1] = address[i + 1].toUpperCase();
        }
    }
    return `0x${address.join('')}`;
}
exports.checksumAddress = checksumAddress;
function getAddress(address, chainId) {
    if (!(0, isAddress_js_1.isAddress)(address)) throw new address_js_1.InvalidAddressError({
        address
    });
    return checksumAddress(address, chainId);
}
exports.getAddress = getAddress; //# sourceMappingURL=getAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeAbiParameters = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const getAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-ssr] (ecmascript)");
const size_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/size.js [app-ssr] (ecmascript)");
const slice_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/slice.js [app-ssr] (ecmascript)");
const trim_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/trim.js [app-ssr] (ecmascript)");
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
function decodeAbiParameters(params, data) {
    if (data === '0x' && params.length > 0) throw new abi_js_1.AbiDecodingZeroDataError();
    if ((0, size_js_1.size)(data) && (0, size_js_1.size)(data) < 32) throw new abi_js_1.AbiDecodingDataSizeTooSmallError({
        data,
        params: params,
        size: (0, size_js_1.size)(data)
    });
    return decodeParams({
        data,
        params: params
    });
}
exports.decodeAbiParameters = decodeAbiParameters;
function decodeParams({ data, params }) {
    const decodedValues = [];
    let position = 0;
    for(let i = 0; i < params.length; i++){
        if (position >= (0, size_js_1.size)(data)) throw new abi_js_1.AbiDecodingDataSizeTooSmallError({
            data,
            params,
            size: (0, size_js_1.size)(data)
        });
        const param = params[i];
        const { consumed, value } = decodeParam({
            data,
            param,
            position
        });
        decodedValues.push(value);
        position += consumed;
    }
    return decodedValues;
}
function decodeParam({ data, param, position }) {
    const arrayComponents = (0, encodeAbiParameters_js_1.getArrayComponents)(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return decodeArray(data, {
            length,
            param: {
                ...param,
                type: type
            },
            position
        });
    }
    if (param.type === 'tuple') {
        return decodeTuple(data, {
            param: param,
            position
        });
    }
    if (param.type === 'string') {
        return decodeString(data, {
            position
        });
    }
    if (param.type.startsWith('bytes')) {
        return decodeBytes(data, {
            param,
            position
        });
    }
    const value = (0, slice_js_1.slice)(data, position, position + 32, {
        strict: true
    });
    if (param.type.startsWith('uint') || param.type.startsWith('int')) {
        return decodeNumber(value, {
            param
        });
    }
    if (param.type === 'address') {
        return decodeAddress(value);
    }
    if (param.type === 'bool') {
        return decodeBool(value);
    }
    throw new abi_js_1.InvalidAbiDecodingTypeError(param.type, {
        docsPath: '/docs/contract/decodeAbiParameters'
    });
}
function decodeAddress(value) {
    return {
        consumed: 32,
        value: (0, getAddress_js_1.checksumAddress)((0, slice_js_1.slice)(value, -20))
    };
}
function decodeArray(data, { param, length, position }) {
    if (!length) {
        const offset = (0, fromHex_js_1.hexToNumber)((0, slice_js_1.slice)(data, position, position + 32, {
            strict: true
        }));
        const length = (0, fromHex_js_1.hexToNumber)((0, slice_js_1.slice)(data, offset, offset + 32, {
            strict: true
        }));
        let consumed = 0;
        const value = [];
        for(let i = 0; i < length; ++i){
            const decodedChild = decodeParam({
                data: (0, slice_js_1.slice)(data, offset + 32),
                param,
                position: consumed
            });
            consumed += decodedChild.consumed;
            value.push(decodedChild.value);
        }
        return {
            value,
            consumed: 32
        };
    }
    if (hasDynamicChild(param)) {
        const arrayComponents = (0, encodeAbiParameters_js_1.getArrayComponents)(param.type);
        const dynamicChild = !arrayComponents?.[0];
        let consumed = 0;
        const value = [];
        for(let i = 0; i < length; ++i){
            const offset = (0, fromHex_js_1.hexToNumber)((0, slice_js_1.slice)(data, position, position + 32, {
                strict: true
            }));
            const decodedChild = decodeParam({
                data: (0, slice_js_1.slice)(data, offset),
                param,
                position: dynamicChild ? consumed : i * 32
            });
            consumed += decodedChild.consumed;
            value.push(decodedChild.value);
        }
        return {
            value,
            consumed: 32
        };
    }
    let consumed = 0;
    const value = [];
    for(let i = 0; i < length; ++i){
        const decodedChild = decodeParam({
            data,
            param,
            position: position + consumed
        });
        consumed += decodedChild.consumed;
        value.push(decodedChild.value);
    }
    return {
        value,
        consumed
    };
}
function decodeBool(value) {
    return {
        consumed: 32,
        value: (0, fromHex_js_1.hexToBool)(value)
    };
}
function decodeBytes(data, { param, position }) {
    const [_, size] = param.type.split('bytes');
    if (!size) {
        const offset = (0, fromHex_js_1.hexToNumber)((0, slice_js_1.slice)(data, position, position + 32, {
            strict: true
        }));
        const length = (0, fromHex_js_1.hexToNumber)((0, slice_js_1.slice)(data, offset, offset + 32, {
            strict: true
        }));
        if (length === 0) return {
            consumed: 32,
            value: '0x'
        };
        const value = (0, slice_js_1.slice)(data, offset + 32, offset + 32 + length, {
            strict: true
        });
        return {
            consumed: 32,
            value
        };
    }
    const value = (0, slice_js_1.slice)(data, position, position + parseInt(size), {
        strict: true
    });
    return {
        consumed: 32,
        value
    };
}
function decodeNumber(value, { param }) {
    const signed = param.type.startsWith('int');
    const size = parseInt(param.type.split('int')[1] || '256');
    return {
        consumed: 32,
        value: size > 48 ? (0, fromHex_js_1.hexToBigInt)(value, {
            signed
        }) : (0, fromHex_js_1.hexToNumber)(value, {
            signed
        })
    };
}
function decodeString(data, { position }) {
    const offset = (0, fromHex_js_1.hexToNumber)((0, slice_js_1.slice)(data, position, position + 32, {
        strict: true
    }));
    const length = (0, fromHex_js_1.hexToNumber)((0, slice_js_1.slice)(data, offset, offset + 32, {
        strict: true
    }));
    if (length === 0) return {
        consumed: 32,
        value: ''
    };
    const value = (0, fromHex_js_1.hexToString)((0, trim_js_1.trim)((0, slice_js_1.slice)(data, offset + 32, offset + 32 + length, {
        strict: true
    })));
    return {
        consumed: 32,
        value
    };
}
function decodeTuple(data, { param, position }) {
    const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name })=>!name);
    const value = hasUnnamedChild ? [] : {};
    let consumed = 0;
    if (hasDynamicChild(param)) {
        const offset = (0, fromHex_js_1.hexToNumber)((0, slice_js_1.slice)(data, position, position + 32, {
            strict: true
        }));
        for(let i = 0; i < param.components.length; ++i){
            const component = param.components[i];
            const decodedChild = decodeParam({
                data: (0, slice_js_1.slice)(data, offset),
                param: component,
                position: consumed
            });
            consumed += decodedChild.consumed;
            value[hasUnnamedChild ? i : component?.name] = decodedChild.value;
        }
        return {
            consumed: 32,
            value
        };
    }
    for(let i = 0; i < param.components.length; ++i){
        const component = param.components[i];
        const decodedChild = decodeParam({
            data,
            param: component,
            position: position + consumed
        });
        consumed += decodedChild.consumed;
        value[hasUnnamedChild ? i : component?.name] = decodedChild.value;
    }
    return {
        consumed,
        value
    };
}
function hasDynamicChild(param) {
    const { type } = param;
    if (type === 'string') return true;
    if (type === 'bytes') return true;
    if (type.endsWith('[]')) return true;
    if (type === 'tuple') return param.components?.some(hasDynamicChild);
    const arrayComponents = (0, encodeAbiParameters_js_1.getArrayComponents)(param.type);
    if (arrayComponents && hasDynamicChild({
        ...param,
        type: arrayComponents[1]
    })) return true;
    return false;
} //# sourceMappingURL=decodeAbiParameters.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeErrorResult = void 0;
const solidity_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/solidity.js [app-ssr] (ecmascript)");
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const slice_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/slice.js [app-ssr] (ecmascript)");
const getFunctionSelector_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getFunctionSelector.js [app-ssr] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-ssr] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-ssr] (ecmascript)");
function decodeErrorResult({ abi, data }) {
    const signature = (0, slice_js_1.slice)(data, 0, 4);
    if (signature === '0x') throw new abi_js_1.AbiDecodingZeroDataError();
    const abi_ = [
        ...abi || [],
        solidity_js_1.solidityError,
        solidity_js_1.solidityPanic
    ];
    const abiItem = abi_.find((x)=>x.type === 'error' && signature === (0, getFunctionSelector_js_1.getFunctionSelector)((0, formatAbiItem_js_1.formatAbiItem)(x)));
    if (!abiItem) throw new abi_js_1.AbiErrorSignatureNotFoundError(signature, {
        docsPath: '/docs/contract/decodeErrorResult'
    });
    return {
        abiItem,
        args: 'inputs' in abiItem && abiItem.inputs && abiItem.inputs.length > 0 ? (0, decodeAbiParameters_js_1.decodeAbiParameters)(abiItem.inputs, (0, slice_js_1.slice)(data, 4)) : undefined,
        errorName: abiItem.name
    };
}
exports.decodeErrorResult = decodeErrorResult; //# sourceMappingURL=decodeErrorResult.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stringify = void 0;
const stringify = (value, replacer, space)=>JSON.stringify(value, (key, value_)=>{
        const value = typeof value_ === 'bigint' ? value_.toString() : value_;
        return typeof replacer === 'function' ? replacer(key, value) : value;
    }, space);
exports.stringify = stringify; //# sourceMappingURL=stringify.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/formatAbiItemWithArgs.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatAbiItemWithArgs = void 0;
const stringify_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
function formatAbiItemWithArgs({ abiItem, args, includeFunctionName = true, includeName = false }) {
    if (!('name' in abiItem)) return;
    if (!('inputs' in abiItem)) return;
    if (!abiItem.inputs) return;
    return `${includeFunctionName ? abiItem.name : ''}(${abiItem.inputs.map((input, i)=>`${includeName && input.name ? `${input.name}: ` : ''}${typeof args[i] === 'object' ? (0, stringify_js_1.stringify)(args[i]) : args[i]}`).join(', ')})`;
}
exports.formatAbiItemWithArgs = formatAbiItemWithArgs; //# sourceMappingURL=formatAbiItemWithArgs.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/unit.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.weiUnits = exports.gweiUnits = exports.etherUnits = void 0;
exports.etherUnits = {
    gwei: 9,
    wei: 18
};
exports.gweiUnits = {
    ether: -9,
    wei: 9
};
exports.weiUnits = {
    ether: -18,
    gwei: -9
}; //# sourceMappingURL=unit.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatUnits.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatUnits = void 0;
function formatUnits(value, decimals) {
    let display = value.toString();
    const negative = display.startsWith('-');
    if (negative) display = display.slice(1);
    display = display.padStart(decimals, '0');
    let [integer, fraction] = [
        display.slice(0, display.length - decimals),
        display.slice(display.length - decimals)
    ];
    fraction = fraction.replace(/(0+)$/, '');
    return `${negative ? '-' : ''}${integer || '0'}${fraction ? `.${fraction}` : ''}`;
}
exports.formatUnits = formatUnits; //# sourceMappingURL=formatUnits.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatEther.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatEther = void 0;
const unit_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/unit.js [app-ssr] (ecmascript)");
const formatUnits_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatUnits.js [app-ssr] (ecmascript)");
function formatEther(wei, unit = 'wei') {
    return (0, formatUnits_js_1.formatUnits)(wei, unit_js_1.etherUnits[unit]);
}
exports.formatEther = formatEther; //# sourceMappingURL=formatEther.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatGwei = void 0;
const unit_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/unit.js [app-ssr] (ecmascript)");
const formatUnits_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatUnits.js [app-ssr] (ecmascript)");
function formatGwei(wei, unit = 'wei') {
    return (0, formatUnits_js_1.formatUnits)(wei, unit_js_1.gweiUnits[unit]);
}
exports.formatGwei = formatGwei; //# sourceMappingURL=formatGwei.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WaitForTransactionReceiptTimeoutError = exports.TransactionReceiptNotFoundError = exports.TransactionNotFoundError = exports.TransactionExecutionError = exports.InvalidStorageKeySizeError = exports.InvalidSerializedTransactionError = exports.InvalidSerializedTransactionTypeError = exports.InvalidSerializableTransactionError = exports.InvalidLegacyVError = exports.FeeConflictError = exports.prettyPrint = void 0;
const formatEther_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatEther.js [app-ssr] (ecmascript)");
const formatGwei_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
function prettyPrint(args) {
    const entries = Object.entries(args).map(([key, value])=>{
        if (value === undefined || value === false) return null;
        return [
            key,
            value
        ];
    }).filter(Boolean);
    const maxLength = entries.reduce((acc, [key])=>Math.max(acc, key.length), 0);
    return entries.map(([key, value])=>`  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`).join('\n');
}
exports.prettyPrint = prettyPrint;
class FeeConflictError extends base_js_1.BaseError {
    constructor(){
        super([
            'Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.',
            'Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.'
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'FeeConflictError'
        });
    }
}
exports.FeeConflictError = FeeConflictError;
class InvalidLegacyVError extends base_js_1.BaseError {
    constructor({ v }){
        super(`Invalid \`v\` value "${v}". Expected 27 or 28.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidLegacyVError'
        });
    }
}
exports.InvalidLegacyVError = InvalidLegacyVError;
class InvalidSerializableTransactionError extends base_js_1.BaseError {
    constructor({ transaction }){
        super('Cannot infer a transaction type from provided transaction.', {
            metaMessages: [
                'Provided Transaction:',
                '{',
                prettyPrint(transaction),
                '}',
                '',
                'To infer the type, either provide:',
                '- a `type` to the Transaction, or',
                '- an EIP-1559 Transaction with `maxFeePerGas`, or',
                '- an EIP-2930 Transaction with `gasPrice` & `accessList`, or',
                '- a Legacy Transaction with `gasPrice`'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSerializableTransactionError'
        });
    }
}
exports.InvalidSerializableTransactionError = InvalidSerializableTransactionError;
class InvalidSerializedTransactionTypeError extends base_js_1.BaseError {
    constructor({ serializedType }){
        super(`Serialized transaction type "${serializedType}" is invalid.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSerializedTransactionType'
        });
        Object.defineProperty(this, "serializedType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedType = serializedType;
    }
}
exports.InvalidSerializedTransactionTypeError = InvalidSerializedTransactionTypeError;
class InvalidSerializedTransactionError extends base_js_1.BaseError {
    constructor({ attributes, serializedTransaction, type }){
        const missing = Object.entries(attributes).map(([key, value])=>typeof value === 'undefined' ? key : undefined).filter(Boolean);
        super(`Invalid serialized transaction of type "${type}" was provided.`, {
            metaMessages: [
                `Serialized Transaction: "${serializedTransaction}"`,
                missing.length > 0 ? `Missing Attributes: ${missing.join(', ')}` : ''
            ].filter(Boolean)
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSerializedTransactionError'
        });
        Object.defineProperty(this, "serializedTransaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.serializedTransaction = serializedTransaction;
        this.type = type;
    }
}
exports.InvalidSerializedTransactionError = InvalidSerializedTransactionError;
class InvalidStorageKeySizeError extends base_js_1.BaseError {
    constructor({ storageKey }){
        super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${Math.floor((storageKey.length - 2) / 2)} bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidStorageKeySizeError'
        });
    }
}
exports.InvalidStorageKeySizeError = InvalidStorageKeySizeError;
class TransactionExecutionError extends base_js_1.BaseError {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }){
        const prettyArgs = prettyPrint({
            chain: chain && `${chain?.name} (id: ${chain?.id})`,
            from: account?.address,
            to,
            value: typeof value !== 'undefined' && `${(0, formatEther_js_1.formatEther)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Request Arguments:',
                prettyArgs
            ].filter(Boolean)
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TransactionExecutionError'
        });
        this.cause = cause;
    }
}
exports.TransactionExecutionError = TransactionExecutionError;
class TransactionNotFoundError extends base_js_1.BaseError {
    constructor({ blockHash, blockNumber, blockTag, hash, index }){
        let identifier = 'Transaction';
        if (blockTag && index !== undefined) identifier = `Transaction at block time "${blockTag}" at index "${index}"`;
        if (blockHash && index !== undefined) identifier = `Transaction at block hash "${blockHash}" at index "${index}"`;
        if (blockNumber && index !== undefined) identifier = `Transaction at block number "${blockNumber}" at index "${index}"`;
        if (hash) identifier = `Transaction with hash "${hash}"`;
        super(`${identifier} could not be found.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TransactionNotFoundError'
        });
    }
}
exports.TransactionNotFoundError = TransactionNotFoundError;
class TransactionReceiptNotFoundError extends base_js_1.BaseError {
    constructor({ hash }){
        super(`Transaction receipt with hash "${hash}" could not be found. The Transaction may not be processed on a block yet.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TransactionReceiptNotFoundError'
        });
    }
}
exports.TransactionReceiptNotFoundError = TransactionReceiptNotFoundError;
class WaitForTransactionReceiptTimeoutError extends base_js_1.BaseError {
    constructor({ hash }){
        super(`Timed out while waiting for transaction with hash "${hash}" to be confirmed.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WaitForTransactionReceiptTimeoutError'
        });
    }
}
exports.WaitForTransactionReceiptTimeoutError = WaitForTransactionReceiptTimeoutError; //# sourceMappingURL=transaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/contract.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RawContractError = exports.ContractFunctionZeroDataError = exports.ContractFunctionRevertedError = exports.ContractFunctionExecutionError = exports.CallExecutionError = void 0;
const parseAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const solidity_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/solidity.js [app-ssr] (ecmascript)");
const decodeErrorResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-ssr] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-ssr] (ecmascript)");
const formatAbiItemWithArgs_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/formatAbiItemWithArgs.js [app-ssr] (ecmascript)");
const getAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
const formatEther_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatEther.js [app-ssr] (ecmascript)");
const formatGwei_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-ssr] (ecmascript)");
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
const utils_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/utils.js [app-ssr] (ecmascript)");
class CallExecutionError extends base_js_1.BaseError {
    constructor(cause, { account: account_, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }){
        const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
        const prettyArgs = (0, transaction_js_1.prettyPrint)({
            from: account?.address,
            to,
            value: typeof value !== 'undefined' && `${(0, formatEther_js_1.formatEther)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Raw Call Arguments:',
                prettyArgs
            ].filter(Boolean)
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'CallExecutionError'
        });
        this.cause = cause;
    }
}
exports.CallExecutionError = CallExecutionError;
class ContractFunctionExecutionError extends base_js_1.BaseError {
    constructor(cause, { abi, args, contractAddress, docsPath, functionName, sender }){
        const abiItem = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            args,
            name: functionName
        });
        const formattedArgs = abiItem ? (0, formatAbiItemWithArgs_js_1.formatAbiItemWithArgs)({
            abiItem,
            args,
            includeFunctionName: false,
            includeName: false
        }) : undefined;
        const functionWithParams = abiItem ? (0, formatAbiItem_js_1.formatAbiItem)(abiItem, {
            includeName: true
        }) : undefined;
        const prettyArgs = (0, transaction_js_1.prettyPrint)({
            address: contractAddress && (0, utils_js_1.getContractAddress)(contractAddress),
            function: functionWithParams,
            args: formattedArgs && formattedArgs !== '()' && `${[
                ...Array(functionName?.length ?? 0).keys()
            ].map(()=>' ').join('')}${formattedArgs}`,
            sender
        });
        super(cause.shortMessage || `An unknown error occurred while executing the contract function "${functionName}".`, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Contract Call:',
                prettyArgs
            ].filter(Boolean)
        });
        Object.defineProperty(this, "abi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "args", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contractAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "formattedArgs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "functionName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sender", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ContractFunctionExecutionError'
        });
        this.abi = abi;
        this.args = args;
        this.cause = cause;
        this.contractAddress = contractAddress;
        this.functionName = functionName;
        this.sender = sender;
    }
}
exports.ContractFunctionExecutionError = ContractFunctionExecutionError;
class ContractFunctionRevertedError extends base_js_1.BaseError {
    constructor({ abi, data, functionName, message }){
        let cause;
        let decodedData = undefined;
        let metaMessages;
        let reason;
        if (data && data !== '0x') {
            try {
                decodedData = (0, decodeErrorResult_js_1.decodeErrorResult)({
                    abi,
                    data
                });
                const { abiItem, errorName, args: errorArgs } = decodedData;
                if (errorName === 'Error') {
                    reason = errorArgs[0];
                } else if (errorName === 'Panic') {
                    const [firstArg] = errorArgs;
                    reason = solidity_js_1.panicReasons[firstArg];
                } else {
                    const errorWithParams = abiItem ? (0, formatAbiItem_js_1.formatAbiItem)(abiItem, {
                        includeName: true
                    }) : undefined;
                    const formattedArgs = abiItem && errorArgs ? (0, formatAbiItemWithArgs_js_1.formatAbiItemWithArgs)({
                        abiItem,
                        args: errorArgs,
                        includeFunctionName: false,
                        includeName: false
                    }) : undefined;
                    metaMessages = [
                        errorWithParams ? `Error: ${errorWithParams}` : '',
                        formattedArgs && formattedArgs !== '()' ? `       ${[
                            ...Array(errorName?.length ?? 0).keys()
                        ].map(()=>' ').join('')}${formattedArgs}` : ''
                    ];
                }
            } catch (err) {
                cause = err;
            }
        } else if (message) reason = message;
        let signature;
        if (cause instanceof abi_js_1.AbiErrorSignatureNotFoundError) {
            signature = cause.signature;
            metaMessages = [
                `Unable to decode signature "${signature}" as it was not found on the provided ABI.`,
                'Make sure you are using the correct ABI and that the error exists on it.',
                `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`
            ];
        }
        super(reason && reason !== 'execution reverted' || signature ? [
            `The contract function "${functionName}" reverted with the following ${signature ? 'signature' : 'reason'}:`,
            reason || signature
        ].join('\n') : `The contract function "${functionName}" reverted.`, {
            cause,
            metaMessages
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ContractFunctionRevertedError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = decodedData;
        this.reason = reason;
        this.signature = signature;
    }
}
exports.ContractFunctionRevertedError = ContractFunctionRevertedError;
class ContractFunctionZeroDataError extends base_js_1.BaseError {
    constructor({ functionName }){
        super(`The contract function "${functionName}" returned no data ("0x").`, {
            metaMessages: [
                'This could be due to any of the following:',
                `  - The contract does not have the function "${functionName}",`,
                '  - The parameters passed to the contract function may be invalid, or',
                '  - The address is not a contract.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ContractFunctionZeroDataError'
        });
    }
}
exports.ContractFunctionZeroDataError = ContractFunctionZeroDataError;
class RawContractError extends base_js_1.BaseError {
    constructor({ data, message }){
        super(message || '');
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 3
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'RawContractError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
}
exports.RawContractError = RawContractError; //# sourceMappingURL=contract.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/request.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TimeoutError = exports.RpcRequestError = exports.WebSocketRequestError = exports.HttpRequestError = void 0;
const stringify_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const utils_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/utils.js [app-ssr] (ecmascript)");
class HttpRequestError extends base_js_1.BaseError {
    constructor({ body, details, headers, status, url }){
        super('HTTP request failed.', {
            details,
            metaMessages: [
                status && `Status: ${status}`,
                `URL: ${(0, utils_js_1.getUrl)(url)}`,
                body && `Request body: ${(0, stringify_js_1.stringify)(body)}`
            ].filter(Boolean)
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'HttpRequestError'
        });
        Object.defineProperty(this, "body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.body = body;
        this.headers = headers;
        this.status = status;
        this.url = url;
    }
}
exports.HttpRequestError = HttpRequestError;
class WebSocketRequestError extends base_js_1.BaseError {
    constructor({ body, details, url }){
        super('WebSocket request failed.', {
            details,
            metaMessages: [
                `URL: ${(0, utils_js_1.getUrl)(url)}`,
                `Request body: ${(0, stringify_js_1.stringify)(body)}`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WebSocketRequestError'
        });
    }
}
exports.WebSocketRequestError = WebSocketRequestError;
class RpcRequestError extends base_js_1.BaseError {
    constructor({ body, error, url }){
        super('RPC Request failed.', {
            cause: error,
            details: error.message,
            metaMessages: [
                `URL: ${(0, utils_js_1.getUrl)(url)}`,
                `Request body: ${(0, stringify_js_1.stringify)(body)}`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'RpcRequestError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.code = error.code;
    }
}
exports.RpcRequestError = RpcRequestError;
class TimeoutError extends base_js_1.BaseError {
    constructor({ body, url }){
        super('The request took too long to respond.', {
            details: 'The request timed out.',
            metaMessages: [
                `URL: ${(0, utils_js_1.getUrl)(url)}`,
                `Request body: ${(0, stringify_js_1.stringify)(body)}`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TimeoutError'
        });
    }
}
exports.TimeoutError = TimeoutError; //# sourceMappingURL=request.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/rpc.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnknownRpcError = exports.SwitchChainError = exports.ChainDisconnectedError = exports.ProviderDisconnectedError = exports.UnsupportedProviderMethodError = exports.UnauthorizedProviderError = exports.UserRejectedRequestError = exports.JsonRpcVersionUnsupportedError = exports.LimitExceededRpcError = exports.MethodNotSupportedRpcError = exports.TransactionRejectedRpcError = exports.ResourceUnavailableRpcError = exports.ResourceNotFoundRpcError = exports.InvalidInputRpcError = exports.InternalRpcError = exports.InvalidParamsRpcError = exports.MethodNotFoundRpcError = exports.InvalidRequestRpcError = exports.ParseRpcError = exports.ProviderRpcError = exports.RpcError = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const request_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/request.js [app-ssr] (ecmascript)");
const unknownErrorCode = -1;
class RpcError extends base_js_1.BaseError {
    constructor(cause, { code, docsPath, metaMessages, shortMessage }){
        super(shortMessage, {
            cause,
            docsPath,
            metaMessages: metaMessages || cause?.metaMessages
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'RpcError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = cause.name;
        this.code = cause instanceof request_js_1.RpcRequestError ? cause.code : code ?? unknownErrorCode;
    }
}
exports.RpcError = RpcError;
class ProviderRpcError extends RpcError {
    constructor(cause, options){
        super(cause, options);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ProviderRpcError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = options.data;
    }
}
exports.ProviderRpcError = ProviderRpcError;
class ParseRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ParseRpcError.code,
            shortMessage: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ParseRpcError'
        });
    }
}
Object.defineProperty(ParseRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32700
});
exports.ParseRpcError = ParseRpcError;
class InvalidRequestRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidRequestRpcError.code,
            shortMessage: 'JSON is not a valid request object.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidRequestRpcError'
        });
    }
}
Object.defineProperty(InvalidRequestRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32600
});
exports.InvalidRequestRpcError = InvalidRequestRpcError;
class MethodNotFoundRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: MethodNotFoundRpcError.code,
            shortMessage: 'The method does not exist / is not available.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'MethodNotFoundRpcError'
        });
    }
}
Object.defineProperty(MethodNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32601
});
exports.MethodNotFoundRpcError = MethodNotFoundRpcError;
class InvalidParamsRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidParamsRpcError.code,
            shortMessage: [
                'Invalid parameters were provided to the RPC method.',
                'Double check you have provided the correct parameters.'
            ].join('\n')
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParamsRpcError'
        });
    }
}
Object.defineProperty(InvalidParamsRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32602
});
exports.InvalidParamsRpcError = InvalidParamsRpcError;
class InternalRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InternalRpcError.code,
            shortMessage: 'An internal error was received.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InternalRpcError'
        });
    }
}
Object.defineProperty(InternalRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32603
});
exports.InternalRpcError = InternalRpcError;
class InvalidInputRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: InvalidInputRpcError.code,
            shortMessage: [
                'Missing or invalid parameters.',
                'Double check you have provided the correct parameters.'
            ].join('\n')
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidInputRpcError'
        });
    }
}
Object.defineProperty(InvalidInputRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32000
});
exports.InvalidInputRpcError = InvalidInputRpcError;
class ResourceNotFoundRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ResourceNotFoundRpcError.code,
            shortMessage: 'Requested resource not found.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ResourceNotFoundRpcError'
        });
    }
}
Object.defineProperty(ResourceNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32001
});
exports.ResourceNotFoundRpcError = ResourceNotFoundRpcError;
class ResourceUnavailableRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: ResourceUnavailableRpcError.code,
            shortMessage: 'Requested resource not available.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ResourceUnavailableRpcError'
        });
    }
}
Object.defineProperty(ResourceUnavailableRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32002
});
exports.ResourceUnavailableRpcError = ResourceUnavailableRpcError;
class TransactionRejectedRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: TransactionRejectedRpcError.code,
            shortMessage: 'Transaction creation failed.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TransactionRejectedRpcError'
        });
    }
}
Object.defineProperty(TransactionRejectedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32003
});
exports.TransactionRejectedRpcError = TransactionRejectedRpcError;
class MethodNotSupportedRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: MethodNotSupportedRpcError.code,
            shortMessage: 'Method is not implemented.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'MethodNotSupportedRpcError'
        });
    }
}
Object.defineProperty(MethodNotSupportedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32004
});
exports.MethodNotSupportedRpcError = MethodNotSupportedRpcError;
class LimitExceededRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            code: LimitExceededRpcError.code,
            shortMessage: 'Request exceeds defined limit.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'LimitExceededRpcError'
        });
    }
}
Object.defineProperty(LimitExceededRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32005
});
exports.LimitExceededRpcError = LimitExceededRpcError;
class JsonRpcVersionUnsupportedError extends RpcError {
    constructor(cause){
        super(cause, {
            code: JsonRpcVersionUnsupportedError.code,
            shortMessage: 'Version of JSON-RPC protocol is not supported.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'JsonRpcVersionUnsupportedError'
        });
    }
}
Object.defineProperty(JsonRpcVersionUnsupportedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32006
});
exports.JsonRpcVersionUnsupportedError = JsonRpcVersionUnsupportedError;
class UserRejectedRequestError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UserRejectedRequestError.code,
            shortMessage: 'User rejected the request.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UserRejectedRequestError'
        });
    }
}
Object.defineProperty(UserRejectedRequestError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4001
});
exports.UserRejectedRequestError = UserRejectedRequestError;
class UnauthorizedProviderError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UnauthorizedProviderError.code,
            shortMessage: 'The requested method and/or account has not been authorized by the user.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnauthorizedProviderError'
        });
    }
}
Object.defineProperty(UnauthorizedProviderError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4100
});
exports.UnauthorizedProviderError = UnauthorizedProviderError;
class UnsupportedProviderMethodError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: UnsupportedProviderMethodError.code,
            shortMessage: 'The Provider does not support the requested method.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnsupportedProviderMethodError'
        });
    }
}
Object.defineProperty(UnsupportedProviderMethodError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4200
});
exports.UnsupportedProviderMethodError = UnsupportedProviderMethodError;
class ProviderDisconnectedError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: ProviderDisconnectedError.code,
            shortMessage: 'The Provider is disconnected from all chains.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ProviderDisconnectedError'
        });
    }
}
Object.defineProperty(ProviderDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4900
});
exports.ProviderDisconnectedError = ProviderDisconnectedError;
class ChainDisconnectedError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: ChainDisconnectedError.code,
            shortMessage: 'The Provider is not connected to the requested chain.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ChainDisconnectedError'
        });
    }
}
Object.defineProperty(ChainDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4901
});
exports.ChainDisconnectedError = ChainDisconnectedError;
class SwitchChainError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: SwitchChainError.code,
            shortMessage: 'An error occurred when attempting to switch chain.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SwitchChainError'
        });
    }
}
Object.defineProperty(SwitchChainError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4902
});
exports.SwitchChainError = SwitchChainError;
class UnknownRpcError extends RpcError {
    constructor(cause){
        super(cause, {
            shortMessage: 'An unknown RPC error occurred.'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownRpcError'
        });
    }
}
exports.UnknownRpcError = UnknownRpcError; //# sourceMappingURL=rpc.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContractError = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const contract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/contract.js [app-ssr] (ecmascript)");
const rpc_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/rpc.js [app-ssr] (ecmascript)");
const EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi, address, args, docsPath, functionName, sender }) {
    const { code, data, message, shortMessage } = err instanceof contract_js_1.RawContractError ? err : err instanceof base_js_1.BaseError ? err.walk((err)=>'data' in err) || err.walk() : {};
    const cause = (()=>{
        if (err instanceof abi_js_1.AbiDecodingZeroDataError) return new contract_js_1.ContractFunctionZeroDataError({
            functionName
        });
        if ([
            EXECUTION_REVERTED_ERROR_CODE,
            rpc_js_1.InternalRpcError.code
        ].includes(code) && (data || message || shortMessage)) {
            return new contract_js_1.ContractFunctionRevertedError({
                abi,
                data: typeof data === 'object' ? data.data : data,
                functionName,
                message: shortMessage ?? message
            });
        }
        return err;
    })();
    return new contract_js_1.ContractFunctionExecutionError(cause, {
        abi,
        args,
        contractAddress: address,
        docsPath,
        functionName,
        sender
    });
}
exports.getContractError = getContractError; //# sourceMappingURL=getContractError.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccountNotFoundError = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
class AccountNotFoundError extends base_js_1.BaseError {
    constructor({ docsPath } = {}){
        super([
            'Could not find an Account to execute with this Action.',
            'Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.'
        ].join('\n'), {
            docsPath,
            docsSlug: 'account'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AccountNotFoundError'
        });
    }
}
exports.AccountNotFoundError = AccountNotFoundError; //# sourceMappingURL=account.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/estimateGas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EstimateGasExecutionError = void 0;
const formatEther_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatEther.js [app-ssr] (ecmascript)");
const formatGwei_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
class EstimateGasExecutionError extends base_js_1.BaseError {
    constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }){
        const prettyArgs = (0, transaction_js_1.prettyPrint)({
            from: account?.address,
            to,
            value: typeof value !== 'undefined' && `${(0, formatEther_js_1.formatEther)(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' && `${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei`,
            nonce
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...cause.metaMessages ? [
                    ...cause.metaMessages,
                    ' '
                ] : [],
                'Estimate Gas Arguments:',
                prettyArgs
            ].filter(Boolean)
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EstimateGasExecutionError'
        });
        this.cause = cause;
    }
}
exports.EstimateGasExecutionError = EstimateGasExecutionError; //# sourceMappingURL=estimateGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/node.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnknownNodeError = exports.TipAboveFeeCapError = exports.TransactionTypeNotSupportedError = exports.IntrinsicGasTooLowError = exports.IntrinsicGasTooHighError = exports.InsufficientFundsError = exports.NonceMaxValueError = exports.NonceTooLowError = exports.NonceTooHighError = exports.FeeCapTooLowError = exports.FeeCapTooHighError = exports.ExecutionRevertedError = void 0;
const formatGwei_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
class ExecutionRevertedError extends base_js_1.BaseError {
    constructor({ cause, message } = {}){
        const reason = message?.replace('execution reverted: ', '')?.replace('execution reverted', '');
        super(`Execution reverted ${reason ? `with reason: ${reason}` : 'for an unknown reason'}.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ExecutionRevertedError'
        });
    }
}
Object.defineProperty(ExecutionRevertedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 3
});
Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /execution reverted/
});
exports.ExecutionRevertedError = ExecutionRevertedError;
class FeeCapTooHighError extends base_js_1.BaseError {
    constructor({ cause, maxFeePerGas } = {}){
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei` : ''}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'FeeCapTooHigh'
        });
    }
}
Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
exports.FeeCapTooHighError = FeeCapTooHighError;
class FeeCapTooLowError extends base_js_1.BaseError {
    constructor({ cause, maxFeePerGas } = {}){
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)}` : ''} gwei) cannot be lower than the block base fee.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'FeeCapTooLow'
        });
    }
}
Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
exports.FeeCapTooLowError = FeeCapTooLowError;
class NonceTooHighError extends base_js_1.BaseError {
    constructor({ cause, nonce } = {}){
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}is higher than the next one expected.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'NonceTooHighError'
        });
    }
}
Object.defineProperty(NonceTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too high/
});
exports.NonceTooHighError = NonceTooHighError;
class NonceTooLowError extends base_js_1.BaseError {
    constructor({ cause, nonce } = {}){
        super([
            `Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}is lower than the current nonce of the account.`,
            'Try increasing the nonce or find the latest nonce with `getTransactionCount`.'
        ].join('\n'), {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'NonceTooLowError'
        });
    }
}
Object.defineProperty(NonceTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too low|transaction already imported|already known/
});
exports.NonceTooLowError = NonceTooLowError;
class NonceMaxValueError extends base_js_1.BaseError {
    constructor({ cause, nonce } = {}){
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}exceeds the maximum allowed nonce.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'NonceMaxValueError'
        });
    }
}
Object.defineProperty(NonceMaxValueError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce has max value/
});
exports.NonceMaxValueError = NonceMaxValueError;
class InsufficientFundsError extends base_js_1.BaseError {
    constructor({ cause } = {}){
        super([
            'The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.'
        ].join('\n'), {
            cause,
            metaMessages: [
                'This error could arise when the account does not have enough funds to:',
                ' - pay for the total gas fee,',
                ' - pay for the value to send.',
                ' ',
                'The cost of the transaction is calculated as `gas * gas fee + value`, where:',
                ' - `gas` is the amount of gas needed for transaction to execute,',
                ' - `gas fee` is the gas fee,',
                ' - `value` is the amount of ether to send to the recipient.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InsufficientFundsError'
        });
    }
}
Object.defineProperty(InsufficientFundsError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /insufficient funds/
});
exports.InsufficientFundsError = InsufficientFundsError;
class IntrinsicGasTooHighError extends base_js_1.BaseError {
    constructor({ cause, gas } = {}){
        super(`The amount of gas ${gas ? `(${gas}) ` : ''}provided for the transaction exceeds the limit allowed for the block.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'IntrinsicGasTooHighError'
        });
    }
}
Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too high|gas limit reached/
});
exports.IntrinsicGasTooHighError = IntrinsicGasTooHighError;
class IntrinsicGasTooLowError extends base_js_1.BaseError {
    constructor({ cause, gas } = {}){
        super(`The amount of gas ${gas ? `(${gas}) ` : ''}provided for the transaction is too low.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'IntrinsicGasTooLowError'
        });
    }
}
Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too low/
});
exports.IntrinsicGasTooLowError = IntrinsicGasTooLowError;
class TransactionTypeNotSupportedError extends base_js_1.BaseError {
    constructor({ cause }){
        super('The transaction type is not supported for this chain.', {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TransactionTypeNotSupportedError'
        });
    }
}
Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /transaction type not valid/
});
exports.TransactionTypeNotSupportedError = TransactionTypeNotSupportedError;
class TipAboveFeeCapError extends base_js_1.BaseError {
    constructor({ cause, maxPriorityFeePerGas, maxFeePerGas } = {}){
        super([
            `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas ? ` = ${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei` : ''}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${(0, formatGwei_js_1.formatGwei)(maxFeePerGas)} gwei` : ''}).`
        ].join('\n'), {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TipAboveFeeCapError'
        });
    }
}
Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
exports.TipAboveFeeCapError = TipAboveFeeCapError;
class UnknownNodeError extends base_js_1.BaseError {
    constructor({ cause }){
        super(`An error occurred while executing: ${cause?.shortMessage}`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownNodeError'
        });
    }
}
exports.UnknownNodeError = UnknownNodeError; //# sourceMappingURL=node.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNodeError = exports.containsNodeError = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const node_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/node.js [app-ssr] (ecmascript)");
const request_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/request.js [app-ssr] (ecmascript)");
const rpc_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/rpc.js [app-ssr] (ecmascript)");
function containsNodeError(err) {
    return err instanceof rpc_js_1.TransactionRejectedRpcError || err instanceof rpc_js_1.InvalidInputRpcError || err instanceof request_js_1.RpcRequestError && err.code === node_js_1.ExecutionRevertedError.code;
}
exports.containsNodeError = containsNodeError;
function getNodeError(err, args) {
    const message = (err.details || '').toLowerCase();
    const executionRevertedError = err.walk((e)=>e.code === node_js_1.ExecutionRevertedError.code);
    if (executionRevertedError instanceof base_js_1.BaseError) {
        return new node_js_1.ExecutionRevertedError({
            cause: err,
            message: executionRevertedError.details
        });
    }
    if (node_js_1.ExecutionRevertedError.nodeMessage.test(message)) return new node_js_1.ExecutionRevertedError({
        cause: err,
        message: err.details
    });
    if (node_js_1.FeeCapTooHighError.nodeMessage.test(message)) return new node_js_1.FeeCapTooHighError({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas
    });
    if (node_js_1.FeeCapTooLowError.nodeMessage.test(message)) return new node_js_1.FeeCapTooLowError({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas
    });
    if (node_js_1.NonceTooHighError.nodeMessage.test(message)) return new node_js_1.NonceTooHighError({
        cause: err,
        nonce: args?.nonce
    });
    if (node_js_1.NonceTooLowError.nodeMessage.test(message)) return new node_js_1.NonceTooLowError({
        cause: err,
        nonce: args?.nonce
    });
    if (node_js_1.NonceMaxValueError.nodeMessage.test(message)) return new node_js_1.NonceMaxValueError({
        cause: err,
        nonce: args?.nonce
    });
    if (node_js_1.InsufficientFundsError.nodeMessage.test(message)) return new node_js_1.InsufficientFundsError({
        cause: err
    });
    if (node_js_1.IntrinsicGasTooHighError.nodeMessage.test(message)) return new node_js_1.IntrinsicGasTooHighError({
        cause: err,
        gas: args?.gas
    });
    if (node_js_1.IntrinsicGasTooLowError.nodeMessage.test(message)) return new node_js_1.IntrinsicGasTooLowError({
        cause: err,
        gas: args?.gas
    });
    if (node_js_1.TransactionTypeNotSupportedError.nodeMessage.test(message)) return new node_js_1.TransactionTypeNotSupportedError({
        cause: err
    });
    if (node_js_1.TipAboveFeeCapError.nodeMessage.test(message)) return new node_js_1.TipAboveFeeCapError({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas,
        maxPriorityFeePerGas: args?.maxPriorityFeePerGas
    });
    return new node_js_1.UnknownNodeError({
        cause: err
    });
}
exports.getNodeError = getNodeError; //# sourceMappingURL=getNodeError.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getEstimateGasError.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEstimateGasError = void 0;
const estimateGas_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/estimateGas.js [app-ssr] (ecmascript)");
const node_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/node.js [app-ssr] (ecmascript)");
const getNodeError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-ssr] (ecmascript)");
function getEstimateGasError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, getNodeError_js_1.getNodeError)(err, args);
        if (cause instanceof node_js_1.UnknownNodeError) return err;
        return cause;
    })();
    return new estimateGas_js_1.EstimateGasExecutionError(cause, {
        docsPath,
        ...args
    });
}
exports.getEstimateGasError = getEstimateGasError; //# sourceMappingURL=getEstimateGasError.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/extract.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extract = void 0;
function extract(value_, { format }) {
    if (!format) return {};
    const value = {};
    function extract_(formatted) {
        const keys = Object.keys(formatted);
        for (const key of keys){
            if (key in value_) value[key] = value_[key];
            if (formatted[key] && typeof formatted[key] === 'object' && !Array.isArray(formatted[key])) extract_(formatted[key]);
        }
    }
    const formatted = format(value_ || {});
    extract_(formatted);
    return value;
}
exports.extract = extract; //# sourceMappingURL=extract.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/formatter.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineFormatter = void 0;
function defineFormatter(type, format) {
    return ({ exclude, format: overrides })=>{
        return {
            exclude,
            format: (args)=>{
                const formatted = format(args);
                if (exclude) {
                    for (const key of exclude){
                        delete formatted[key];
                    }
                }
                return {
                    ...formatted,
                    ...overrides(args)
                };
            },
            type
        };
    };
}
exports.defineFormatter = defineFormatter; //# sourceMappingURL=formatter.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineTransactionRequest = exports.formatTransactionRequest = exports.rpcTransactionType = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const formatter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/formatter.js [app-ssr] (ecmascript)");
exports.rpcTransactionType = {
    legacy: '0x0',
    eip2930: '0x1',
    eip1559: '0x2'
};
function formatTransactionRequest(transactionRequest) {
    return {
        ...transactionRequest,
        gas: typeof transactionRequest.gas !== 'undefined' ? (0, toHex_js_1.numberToHex)(transactionRequest.gas) : undefined,
        gasPrice: typeof transactionRequest.gasPrice !== 'undefined' ? (0, toHex_js_1.numberToHex)(transactionRequest.gasPrice) : undefined,
        maxFeePerGas: typeof transactionRequest.maxFeePerGas !== 'undefined' ? (0, toHex_js_1.numberToHex)(transactionRequest.maxFeePerGas) : undefined,
        maxPriorityFeePerGas: typeof transactionRequest.maxPriorityFeePerGas !== 'undefined' ? (0, toHex_js_1.numberToHex)(transactionRequest.maxPriorityFeePerGas) : undefined,
        nonce: typeof transactionRequest.nonce !== 'undefined' ? (0, toHex_js_1.numberToHex)(transactionRequest.nonce) : undefined,
        type: typeof transactionRequest.type !== 'undefined' ? exports.rpcTransactionType[transactionRequest.type] : undefined,
        value: typeof transactionRequest.value !== 'undefined' ? (0, toHex_js_1.numberToHex)(transactionRequest.value) : undefined
    };
}
exports.formatTransactionRequest = formatTransactionRequest;
exports.defineTransactionRequest = (0, formatter_js_1.defineFormatter)('transactionRequest', formatTransactionRequest); //# sourceMappingURL=transactionRequest.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertRequest = void 0;
const parseAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const address_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/address.js [app-ssr] (ecmascript)");
const node_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/node.js [app-ssr] (ecmascript)");
const transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
const isAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-ssr] (ecmascript)");
function assertRequest(args) {
    const { account: account_, gasPrice, maxFeePerGas, maxPriorityFeePerGas, to } = args;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
    if (account && !(0, isAddress_js_1.isAddress)(account.address)) throw new address_js_1.InvalidAddressError({
        address: account.address
    });
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (typeof gasPrice !== 'undefined' && (typeof maxFeePerGas !== 'undefined' || typeof maxPriorityFeePerGas !== 'undefined')) throw new transaction_js_1.FeeConflictError();
    if (maxFeePerGas && maxFeePerGas > 2n ** 256n - 1n) throw new node_js_1.FeeCapTooHighError({
        maxFeePerGas
    });
    if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas) throw new node_js_1.TipAboveFeeCapError({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
}
exports.assertRequest = assertRequest; //# sourceMappingURL=assertRequest.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/fee.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MaxFeePerGasTooLowError = exports.Eip1559FeesNotSupportedError = exports.BaseFeeScalarError = void 0;
const formatGwei_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
class BaseFeeScalarError extends base_js_1.BaseError {
    constructor(){
        super('`baseFeeMultiplier` must be greater than 1.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseFeeScalarError'
        });
    }
}
exports.BaseFeeScalarError = BaseFeeScalarError;
class Eip1559FeesNotSupportedError extends base_js_1.BaseError {
    constructor(){
        super('Chain does not support EIP-1559 fees.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Eip1559FeesNotSupportedError'
        });
    }
}
exports.Eip1559FeesNotSupportedError = Eip1559FeesNotSupportedError;
class MaxFeePerGasTooLowError extends base_js_1.BaseError {
    constructor({ maxPriorityFeePerGas }){
        super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0, formatGwei_js_1.formatGwei)(maxPriorityFeePerGas)} gwei).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'MaxFeePerGasTooLowError'
        });
    }
}
exports.MaxFeePerGasTooLowError = MaxFeePerGasTooLowError; //# sourceMappingURL=fee.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/block.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BlockNotFoundError = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
class BlockNotFoundError extends base_js_1.BaseError {
    constructor({ blockHash, blockNumber }){
        let identifier = 'Block';
        if (blockHash) identifier = `Block at hash "${blockHash}"`;
        if (blockNumber) identifier = `Block at number "${blockNumber}"`;
        super(`${identifier} could not be found.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BlockNotFoundError'
        });
    }
}
exports.BlockNotFoundError = BlockNotFoundError; //# sourceMappingURL=block.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineTransaction = exports.formatTransaction = exports.transactionType = void 0;
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const formatter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/formatter.js [app-ssr] (ecmascript)");
exports.transactionType = {
    '0x0': 'legacy',
    '0x1': 'eip2930',
    '0x2': 'eip1559'
};
function formatTransaction(transaction) {
    const transaction_ = {
        ...transaction,
        blockHash: transaction.blockHash ? transaction.blockHash : null,
        blockNumber: transaction.blockNumber ? BigInt(transaction.blockNumber) : null,
        chainId: transaction.chainId ? (0, fromHex_js_1.hexToNumber)(transaction.chainId) : undefined,
        gas: transaction.gas ? BigInt(transaction.gas) : undefined,
        gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : undefined,
        maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : undefined,
        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ? BigInt(transaction.maxPriorityFeePerGas) : undefined,
        nonce: transaction.nonce ? (0, fromHex_js_1.hexToNumber)(transaction.nonce) : undefined,
        to: transaction.to ? transaction.to : null,
        transactionIndex: transaction.transactionIndex ? Number(transaction.transactionIndex) : null,
        type: transaction.type ? exports.transactionType[transaction.type] : undefined,
        typeHex: transaction.type ? transaction.type : undefined,
        value: transaction.value ? BigInt(transaction.value) : undefined,
        v: transaction.v ? BigInt(transaction.v) : undefined
    };
    transaction_.yParity = (()=>{
        if (transaction.yParity) return Number(transaction.yParity);
        if (typeof transaction_.v === 'bigint') {
            if (transaction_.v === 0n || transaction_.v === 27n) return 0;
            if (transaction_.v === 1n || transaction_.v === 28n) return 1;
            if (transaction_.v >= 35n) return transaction_.v % 2n === 0n ? 1 : 0;
        }
        return undefined;
    })();
    if (transaction_.type === 'legacy') {
        delete transaction_.accessList;
        delete transaction_.maxFeePerGas;
        delete transaction_.maxPriorityFeePerGas;
        delete transaction_.yParity;
    }
    if (transaction_.type === 'eip2930') {
        delete transaction_.maxFeePerGas;
        delete transaction_.maxPriorityFeePerGas;
    }
    return transaction_;
}
exports.formatTransaction = formatTransaction;
exports.defineTransaction = (0, formatter_js_1.defineFormatter)('transaction', formatTransaction); //# sourceMappingURL=transaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/block.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineBlock = exports.formatBlock = void 0;
const formatter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/formatter.js [app-ssr] (ecmascript)");
const transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-ssr] (ecmascript)");
function formatBlock(block) {
    const transactions = block.transactions?.map((transaction)=>{
        if (typeof transaction === 'string') return transaction;
        return (0, transaction_js_1.formatTransaction)(transaction);
    });
    return {
        ...block,
        baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
        difficulty: block.difficulty ? BigInt(block.difficulty) : undefined,
        gasLimit: block.gasLimit ? BigInt(block.gasLimit) : undefined,
        gasUsed: block.gasUsed ? BigInt(block.gasUsed) : undefined,
        hash: block.hash ? block.hash : null,
        logsBloom: block.logsBloom ? block.logsBloom : null,
        nonce: block.nonce ? block.nonce : null,
        number: block.number ? BigInt(block.number) : null,
        size: block.size ? BigInt(block.size) : undefined,
        timestamp: block.timestamp ? BigInt(block.timestamp) : undefined,
        transactions,
        totalDifficulty: block.totalDifficulty ? BigInt(block.totalDifficulty) : null
    };
}
exports.formatBlock = formatBlock;
exports.defineBlock = (0, formatter_js_1.defineFormatter)('block', formatBlock); //# sourceMappingURL=block.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlock = void 0;
const block_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/block.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const block_js_2 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/block.js [app-ssr] (ecmascript)");
async function getBlock(client, { blockHash, blockNumber, blockTag: blockTag_, includeTransactions: includeTransactions_ } = {}) {
    const blockTag = blockTag_ ?? 'latest';
    const includeTransactions = includeTransactions_ ?? false;
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    let block = null;
    if (blockHash) {
        block = await client.request({
            method: 'eth_getBlockByHash',
            params: [
                blockHash,
                includeTransactions
            ]
        });
    } else {
        block = await client.request({
            method: 'eth_getBlockByNumber',
            params: [
                blockNumberHex || blockTag,
                includeTransactions
            ]
        });
    }
    if (!block) throw new block_js_1.BlockNotFoundError({
        blockHash,
        blockNumber
    });
    const format = client.chain?.formatters?.block?.format || block_js_2.formatBlock;
    return format(block);
}
exports.getBlock = getBlock; //# sourceMappingURL=getBlock.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getGasPrice.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGasPrice = void 0;
async function getGasPrice(client) {
    const gasPrice = await client.request({
        method: 'eth_gasPrice'
    });
    return BigInt(gasPrice);
}
exports.getGasPrice = getGasPrice; //# sourceMappingURL=getGasPrice.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/estimateMaxPriorityFeePerGas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.internal_estimateMaxPriorityFeePerGas = exports.estimateMaxPriorityFeePerGas = void 0;
const fee_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/fee.js [app-ssr] (ecmascript)");
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const getBlock_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-ssr] (ecmascript)");
const getGasPrice_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getGasPrice.js [app-ssr] (ecmascript)");
async function estimateMaxPriorityFeePerGas(client, args) {
    return internal_estimateMaxPriorityFeePerGas(client, args);
}
exports.estimateMaxPriorityFeePerGas = estimateMaxPriorityFeePerGas;
async function internal_estimateMaxPriorityFeePerGas(client, args) {
    const { block: block_, chain = client.chain, request } = args || {};
    if (typeof chain?.fees?.defaultPriorityFee === 'function') {
        const block = block_ || await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({});
        return chain.fees.defaultPriorityFee({
            block,
            client,
            request
        });
    }
    if (typeof chain?.fees?.defaultPriorityFee !== 'undefined') return chain?.fees?.defaultPriorityFee;
    try {
        const maxPriorityFeePerGasHex = await client.request({
            method: 'eth_maxPriorityFeePerGas'
        });
        return (0, fromHex_js_1.hexToBigInt)(maxPriorityFeePerGasHex);
    } catch  {
        const [block, gasPrice] = await Promise.all([
            block_ ? Promise.resolve(block_) : (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({}),
            (0, getAction_js_1.getAction)(client, getGasPrice_js_1.getGasPrice, 'getGasPrice')({})
        ]);
        if (typeof block.baseFeePerGas !== 'bigint') throw new fee_js_1.Eip1559FeesNotSupportedError();
        const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
        if (maxPriorityFeePerGas < 0n) return 0n;
        return maxPriorityFeePerGas;
    }
}
exports.internal_estimateMaxPriorityFeePerGas = internal_estimateMaxPriorityFeePerGas; //# sourceMappingURL=estimateMaxPriorityFeePerGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/estimateFeesPerGas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.internal_estimateFeesPerGas = exports.estimateFeesPerGas = void 0;
const fee_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/fee.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const estimateMaxPriorityFeePerGas_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/estimateMaxPriorityFeePerGas.js [app-ssr] (ecmascript)");
const getBlock_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-ssr] (ecmascript)");
const getGasPrice_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getGasPrice.js [app-ssr] (ecmascript)");
async function estimateFeesPerGas(client, args) {
    return internal_estimateFeesPerGas(client, args);
}
exports.estimateFeesPerGas = estimateFeesPerGas;
async function internal_estimateFeesPerGas(client, args) {
    const { block: block_, chain = client.chain, request, type = 'eip1559' } = args || {};
    const baseFeeMultiplier = await (async ()=>{
        if (typeof chain?.fees?.baseFeeMultiplier === 'function') return chain.fees.baseFeeMultiplier({
            block: block_,
            client,
            request
        });
        return chain?.fees?.baseFeeMultiplier ?? 1.2;
    })();
    if (baseFeeMultiplier < 1) throw new fee_js_1.BaseFeeScalarError();
    const decimals = baseFeeMultiplier.toString().split('.')[1]?.length ?? 0;
    const denominator = 10 ** decimals;
    const multiply = (base)=>base * BigInt(Math.ceil(baseFeeMultiplier * denominator)) / BigInt(denominator);
    const block = block_ ? block_ : await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({});
    if (typeof chain?.fees?.estimateFeesPerGas === 'function') return chain.fees.estimateFeesPerGas({
        block: block_,
        client,
        multiply,
        request,
        type
    });
    if (type === 'eip1559') {
        if (typeof block.baseFeePerGas !== 'bigint') throw new fee_js_1.Eip1559FeesNotSupportedError();
        const maxPriorityFeePerGas = request?.maxPriorityFeePerGas ? request.maxPriorityFeePerGas : await (0, estimateMaxPriorityFeePerGas_js_1.internal_estimateMaxPriorityFeePerGas)(client, {
            block,
            chain,
            request
        });
        const baseFeePerGas = multiply(block.baseFeePerGas);
        const maxFeePerGas = request?.maxFeePerGas ?? baseFeePerGas + maxPriorityFeePerGas;
        return {
            maxFeePerGas,
            maxPriorityFeePerGas
        };
    }
    const gasPrice = request?.gasPrice ?? multiply(await (0, getAction_js_1.getAction)(client, getGasPrice_js_1.getGasPrice, 'getGasPrice')({}));
    return {
        gasPrice
    };
}
exports.internal_estimateFeesPerGas = internal_estimateFeesPerGas; //# sourceMappingURL=estimateFeesPerGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getTransactionCount.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionCount = void 0;
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function getTransactionCount(client, { address, blockTag = 'latest', blockNumber }) {
    const count = await client.request({
        method: 'eth_getTransactionCount',
        params: [
            address,
            blockNumber ? (0, toHex_js_1.numberToHex)(blockNumber) : blockTag
        ]
    });
    return (0, fromHex_js_1.hexToNumber)(count);
}
exports.getTransactionCount = getTransactionCount; //# sourceMappingURL=getTransactionCount.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/getTransactionType.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionType = void 0;
const transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
function getTransactionType(transaction) {
    if (transaction.type) return transaction.type;
    if (typeof transaction.maxFeePerGas !== 'undefined' || typeof transaction.maxPriorityFeePerGas !== 'undefined') return 'eip1559';
    if (typeof transaction.gasPrice !== 'undefined') {
        if (typeof transaction.accessList !== 'undefined') return 'eip2930';
        return 'legacy';
    }
    throw new transaction_js_1.InvalidSerializableTransactionError({
        transaction
    });
}
exports.getTransactionType = getTransactionType; //# sourceMappingURL=getTransactionType.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prepareTransactionRequest = void 0;
const parseAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const estimateFeesPerGas_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/estimateFeesPerGas.js [app-ssr] (ecmascript)");
const estimateGas_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/estimateGas.js [app-ssr] (ecmascript)");
const getBlock_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-ssr] (ecmascript)");
const getTransactionCount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getTransactionCount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const fee_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/fee.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const assertRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
const getTransactionType_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/getTransactionType.js [app-ssr] (ecmascript)");
async function prepareTransactionRequest(client, args) {
    const { account: account_ = client.account, chain, gas, nonce, type } = args;
    if (!account_) throw new account_js_1.AccountNotFoundError();
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    const block = await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
        blockTag: 'latest'
    });
    const request = {
        ...args,
        from: account.address
    };
    if (typeof nonce === 'undefined') request.nonce = await (0, getAction_js_1.getAction)(client, getTransactionCount_js_1.getTransactionCount, 'getTransactionCount')({
        address: account.address,
        blockTag: 'pending'
    });
    if (typeof type === 'undefined') {
        try {
            request.type = (0, getTransactionType_js_1.getTransactionType)(request);
        } catch  {
            request.type = typeof block.baseFeePerGas === 'bigint' ? 'eip1559' : 'legacy';
        }
    }
    if (request.type === 'eip1559') {
        const { maxFeePerGas, maxPriorityFeePerGas } = await (0, estimateFeesPerGas_js_1.internal_estimateFeesPerGas)(client, {
            block,
            chain,
            request: request
        });
        if (typeof args.maxPriorityFeePerGas === 'undefined' && args.maxFeePerGas && args.maxFeePerGas < maxPriorityFeePerGas) throw new fee_js_1.MaxFeePerGasTooLowError({
            maxPriorityFeePerGas
        });
        request.maxPriorityFeePerGas = maxPriorityFeePerGas;
        request.maxFeePerGas = maxFeePerGas;
    } else {
        if (typeof args.maxFeePerGas !== 'undefined' || typeof args.maxPriorityFeePerGas !== 'undefined') throw new fee_js_1.Eip1559FeesNotSupportedError();
        const { gasPrice: gasPrice_ } = await (0, estimateFeesPerGas_js_1.internal_estimateFeesPerGas)(client, {
            block,
            chain,
            request: request,
            type: 'legacy'
        });
        request.gasPrice = gasPrice_;
    }
    if (typeof gas === 'undefined') request.gas = await (0, getAction_js_1.getAction)(client, estimateGas_js_1.estimateGas, 'estimateGas')({
        ...request,
        account: {
            address: account.address,
            type: 'json-rpc'
        }
    });
    (0, assertRequest_js_1.assertRequest)(request);
    return request;
}
exports.prepareTransactionRequest = prepareTransactionRequest; //# sourceMappingURL=prepareTransactionRequest.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/estimateGas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.estimateGas = void 0;
const parseAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const getEstimateGasError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getEstimateGasError.js [app-ssr] (ecmascript)");
const extract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/extract.js [app-ssr] (ecmascript)");
const transactionRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
const assertRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
const prepareTransactionRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)");
async function estimateGas(client, args) {
    const account_ = args.account ?? client.account;
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/actions/public/estimateGas'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    try {
        const { accessList, blockNumber, blockTag, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = account.type === 'local' ? await (0, prepareTransactionRequest_js_1.prepareTransactionRequest)(client, args) : args;
        const blockNumberHex = blockNumber ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        (0, assertRequest_js_1.assertRequest)(args);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
        const request = format({
            ...(0, extract_js_1.extract)(rest, {
                format: chainFormat
            }),
            from: account.address,
            accessList,
            data,
            gas,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value
        });
        const balance = await client.request({
            method: 'eth_estimateGas',
            params: block ? [
                request,
                block
            ] : [
                request
            ]
        });
        return BigInt(balance);
    } catch (err) {
        throw (0, getEstimateGasError_js_1.getEstimateGasError)(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
}
exports.estimateGas = estimateGas; //# sourceMappingURL=estimateGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/estimateContractGas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.estimateContractGas = void 0;
const parseAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getContractError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const estimateGas_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/estimateGas.js [app-ssr] (ecmascript)");
async function estimateContractGas(client, { abi, address, args, functionName, ...request }) {
    const data = (0, encodeFunctionData_js_1.encodeFunctionData)({
        abi,
        args,
        functionName
    });
    try {
        const gas = await (0, getAction_js_1.getAction)(client, estimateGas_js_1.estimateGas, 'estimateGas')({
            data,
            to: address,
            ...request
        });
        return gas;
    } catch (err) {
        const account = request.account ? (0, parseAccount_js_1.parseAccount)(request.account) : undefined;
        throw (0, getContractError_js_1.getContractError)(err, {
            abi: abi,
            address,
            args,
            docsPath: '/docs/contract/estimateContractGas',
            functionName,
            sender: account?.address
        });
    }
}
exports.estimateContractGas = estimateContractGas; //# sourceMappingURL=estimateContractGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeEventLog = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const getEventSelector_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getEventSelector.js [app-ssr] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-ssr] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-ssr] (ecmascript)");
const docsPath = '/docs/contract/decodeEventLog';
function decodeEventLog({ abi, data, strict: strict_, topics }) {
    const strict = strict_ ?? true;
    const [signature, ...argTopics] = topics;
    if (!signature) throw new abi_js_1.AbiEventSignatureEmptyTopicsError({
        docsPath
    });
    const abiItem = abi.find((x)=>x.type === 'event' && signature === (0, getEventSelector_js_1.getEventSelector)((0, formatAbiItem_js_1.formatAbiItem)(x)));
    if (!(abiItem && 'name' in abiItem) || abiItem.type !== 'event') throw new abi_js_1.AbiEventSignatureNotFoundError(signature, {
        docsPath
    });
    const { name, inputs } = abiItem;
    const isUnnamed = inputs?.some((x)=>!('name' in x && x.name));
    let args = isUnnamed ? [] : {};
    const indexedInputs = inputs.filter((x)=>'indexed' in x && x.indexed);
    for(let i = 0; i < indexedInputs.length; i++){
        const param = indexedInputs[i];
        const topic = argTopics[i];
        if (!topic) throw new abi_js_1.DecodeLogTopicsMismatch({
            abiItem,
            param: param
        });
        args[param.name || i] = decodeTopic({
            param,
            value: topic
        });
    }
    const nonIndexedInputs = inputs.filter((x)=>!('indexed' in x && x.indexed));
    if (nonIndexedInputs.length > 0) {
        if (data && data !== '0x') {
            try {
                const decodedData = (0, decodeAbiParameters_js_1.decodeAbiParameters)(nonIndexedInputs, data);
                if (decodedData) {
                    if (isUnnamed) args = [
                        ...args,
                        ...decodedData
                    ];
                    else {
                        for(let i = 0; i < nonIndexedInputs.length; i++){
                            args[nonIndexedInputs[i].name] = decodedData[i];
                        }
                    }
                }
            } catch (err) {
                if (strict) {
                    if (err instanceof abi_js_1.AbiDecodingDataSizeTooSmallError) throw new abi_js_1.DecodeLogDataMismatch({
                        abiItem,
                        data: err.data,
                        params: err.params,
                        size: err.size
                    });
                    throw err;
                }
            }
        } else if (strict) {
            throw new abi_js_1.DecodeLogDataMismatch({
                abiItem,
                data: '0x',
                params: nonIndexedInputs,
                size: 0
            });
        }
    }
    return {
        eventName: name,
        args: Object.values(args).length > 0 ? args : undefined
    };
}
exports.decodeEventLog = decodeEventLog;
function decodeTopic({ param, value }) {
    if (param.type === 'string' || param.type === 'bytes' || param.type === 'tuple' || param.type.match(/^(.*)\[(\d+)?\]$/)) return value;
    const decodedArg = (0, decodeAbiParameters_js_1.decodeAbiParameters)([
        param
    ], value) || [];
    return decodedArg[0];
} //# sourceMappingURL=decodeEventLog.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatLog = void 0;
function formatLog(log, { args, eventName } = {}) {
    return {
        ...log,
        blockHash: log.blockHash ? log.blockHash : null,
        blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
        logIndex: log.logIndex ? Number(log.logIndex) : null,
        transactionHash: log.transactionHash ? log.transactionHash : null,
        transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null,
        ...eventName ? {
            args,
            eventName
        } : {}
    };
}
exports.formatLog = formatLog; //# sourceMappingURL=log.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getLogs.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLogs = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const decodeEventLog_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-ssr] (ecmascript)");
const encodeEventTopics_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const log_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)");
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_ } = {}) {
    const strict = strict_ ?? false;
    const events = events_ ?? (event ? [
        event
    ] : undefined);
    let topics = [];
    if (events) {
        topics = [
            events.flatMap((event)=>(0, encodeEventTopics_js_1.encodeEventTopics)({
                    abi: [
                        event
                    ],
                    eventName: event.name,
                    args
                }))
        ];
        if (event) topics = topics[0];
    }
    let logs;
    if (blockHash) {
        logs = await client.request({
            method: 'eth_getLogs',
            params: [
                {
                    address,
                    topics,
                    blockHash
                }
            ]
        });
    } else {
        logs = await client.request({
            method: 'eth_getLogs',
            params: [
                {
                    address,
                    topics,
                    fromBlock: typeof fromBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(fromBlock) : fromBlock,
                    toBlock: typeof toBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(toBlock) : toBlock
                }
            ]
        });
    }
    return logs.map((log)=>{
        try {
            const { eventName, args } = events ? (0, decodeEventLog_js_1.decodeEventLog)({
                abi: events,
                data: log.data,
                topics: log.topics,
                strict
            }) : {
                eventName: undefined,
                args: undefined
            };
            return (0, log_js_1.formatLog)(log, {
                args,
                eventName: eventName
            });
        } catch (err) {
            let eventName;
            let isUnnamed;
            if (err instanceof abi_js_1.DecodeLogDataMismatch || err instanceof abi_js_1.DecodeLogTopicsMismatch) {
                if (strict) return;
                eventName = err.abiItem.name;
                isUnnamed = err.abiItem.inputs?.some((x)=>!('name' in x && x.name));
            }
            return (0, log_js_1.formatLog)(log, {
                args: isUnnamed ? [] : {},
                eventName
            });
        }
    }).filter(Boolean);
}
exports.getLogs = getLogs; //# sourceMappingURL=getLogs.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getContractEvents.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContractEvents = void 0;
const getAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const getLogs_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getLogs.js [app-ssr] (ecmascript)");
async function getContractEvents(client, { abi, address, args, blockHash, eventName, fromBlock, toBlock, strict }) {
    const event = eventName ? (0, getAbiItem_js_1.getAbiItem)({
        abi,
        name: eventName
    }) : undefined;
    const events = !event ? abi.filter((x)=>x.type === 'event') : undefined;
    return (0, getAction_js_1.getAction)(client, getLogs_js_1.getLogs, 'getLogs')({
        address,
        args,
        blockHash,
        event,
        events,
        fromBlock,
        toBlock,
        strict
    });
}
exports.getContractEvents = getContractEvents; //# sourceMappingURL=getContractEvents.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeFunctionResult = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-ssr] (ecmascript)");
const getAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
const docsPath = '/docs/contract/decodeFunctionResult';
function decodeFunctionResult({ abi, args, functionName, data }) {
    let abiItem = abi[0];
    if (functionName) {
        abiItem = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            args,
            name: functionName
        });
        if (!abiItem) throw new abi_js_1.AbiFunctionNotFoundError(functionName, {
            docsPath
        });
    }
    if (abiItem.type !== 'function') throw new abi_js_1.AbiFunctionNotFoundError(undefined, {
        docsPath
    });
    if (!abiItem.outputs) throw new abi_js_1.AbiFunctionOutputsNotFoundError(abiItem.name, {
        docsPath
    });
    const values = (0, decodeAbiParameters_js_1.decodeAbiParameters)(abiItem.outputs, data);
    if (values && values.length > 1) return values;
    if (values && values.length === 1) return values[0];
    return undefined;
}
exports.decodeFunctionResult = decodeFunctionResult; //# sourceMappingURL=decodeFunctionResult.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/abis.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.universalSignatureValidatorAbi = exports.smartAccountAbi = exports.addressResolverAbi = exports.textResolverAbi = exports.universalResolverReverseAbi = exports.universalResolverResolveAbi = exports.multicall3Abi = void 0;
exports.multicall3Abi = [
    {
        inputs: [
            {
                components: [
                    {
                        name: 'target',
                        type: 'address'
                    },
                    {
                        name: 'allowFailure',
                        type: 'bool'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    }
                ],
                name: 'calls',
                type: 'tuple[]'
            }
        ],
        name: 'aggregate3',
        outputs: [
            {
                components: [
                    {
                        name: 'success',
                        type: 'bool'
                    },
                    {
                        name: 'returnData',
                        type: 'bytes'
                    }
                ],
                name: 'returnData',
                type: 'tuple[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
const universalResolverErrors = [
    {
        inputs: [],
        name: 'ResolverNotFound',
        type: 'error'
    },
    {
        inputs: [],
        name: 'ResolverWildcardNotSupported',
        type: 'error'
    }
];
exports.universalResolverResolveAbi = [
    ...universalResolverErrors,
    {
        name: 'resolve',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes'
            },
            {
                name: 'data',
                type: 'bytes'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes'
            },
            {
                name: 'address',
                type: 'address'
            }
        ]
    }
];
exports.universalResolverReverseAbi = [
    ...universalResolverErrors,
    {
        name: 'reverse',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                type: 'bytes',
                name: 'reverseName'
            }
        ],
        outputs: [
            {
                type: 'string',
                name: 'resolvedName'
            },
            {
                type: 'address',
                name: 'resolvedAddress'
            },
            {
                type: 'address',
                name: 'reverseResolver'
            },
            {
                type: 'address',
                name: 'resolver'
            }
        ]
    }
];
exports.textResolverAbi = [
    {
        name: 'text',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes32'
            },
            {
                name: 'key',
                type: 'string'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'string'
            }
        ]
    }
];
exports.addressResolverAbi = [
    {
        name: 'addr',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes32'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'address'
            }
        ]
    },
    {
        name: 'addr',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes32'
            },
            {
                name: 'coinType',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes'
            }
        ]
    }
];
exports.smartAccountAbi = [
    {
        name: 'isValidSignature',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'hash',
                type: 'bytes32'
            },
            {
                name: 'signature',
                type: 'bytes'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes4'
            }
        ]
    }
];
exports.universalSignatureValidatorAbi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_signer',
                type: 'address'
            },
            {
                internalType: 'bytes32',
                name: '_hash',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: '_signature',
                type: 'bytes'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    }
]; //# sourceMappingURL=abis.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/contract.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.aggregate3Signature = void 0;
exports.aggregate3Signature = '0x82ad56cb'; //# sourceMappingURL=contract.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/chain.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidChainIdError = exports.ClientChainNotConfiguredError = exports.ChainNotFoundError = exports.ChainMismatchError = exports.ChainDoesNotSupportContract = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
class ChainDoesNotSupportContract extends base_js_1.BaseError {
    constructor({ blockNumber, chain, contract }){
        super(`Chain "${chain.name}" does not support contract "${contract.name}".`, {
            metaMessages: [
                'This could be due to any of the following:',
                ...blockNumber && contract.blockCreated && contract.blockCreated > blockNumber ? [
                    `- The contract "${contract.name}" was not deployed until block ${contract.blockCreated} (current block ${blockNumber}).`
                ] : [
                    `- The chain does not have the contract "${contract.name}" configured.`
                ]
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ChainDoesNotSupportContract'
        });
    }
}
exports.ChainDoesNotSupportContract = ChainDoesNotSupportContract;
class ChainMismatchError extends base_js_1.BaseError {
    constructor({ chain, currentChainId }){
        super(`The current chain of the wallet (id: ${currentChainId}) does not match the target chain for the transaction (id: ${chain.id} – ${chain.name}).`, {
            metaMessages: [
                `Current Chain ID:  ${currentChainId}`,
                `Expected Chain ID: ${chain.id} – ${chain.name}`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ChainMismatchError'
        });
    }
}
exports.ChainMismatchError = ChainMismatchError;
class ChainNotFoundError extends base_js_1.BaseError {
    constructor(){
        super([
            'No chain was provided to the request.',
            'Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.'
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ChainNotFoundError'
        });
    }
}
exports.ChainNotFoundError = ChainNotFoundError;
class ClientChainNotConfiguredError extends base_js_1.BaseError {
    constructor(){
        super('No chain was provided to the Client.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ClientChainNotConfiguredError'
        });
    }
}
exports.ClientChainNotConfiguredError = ClientChainNotConfiguredError;
class InvalidChainIdError extends base_js_1.BaseError {
    constructor({ chainId }){
        super(`Chain ID "${chainId}" is invalid.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidChainIdError'
        });
    }
}
exports.InvalidChainIdError = InvalidChainIdError; //# sourceMappingURL=chain.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getChainContractAddress = void 0;
const chain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/chain.js [app-ssr] (ecmascript)");
function getChainContractAddress({ blockNumber, chain, contract: name }) {
    const contract = chain?.contracts?.[name];
    if (!contract) throw new chain_js_1.ChainDoesNotSupportContract({
        chain,
        contract: {
            name
        }
    });
    if (blockNumber && contract.blockCreated && contract.blockCreated > blockNumber) throw new chain_js_1.ChainDoesNotSupportContract({
        blockNumber,
        chain,
        contract: {
            name,
            blockCreated: contract.blockCreated
        }
    });
    return contract.address;
}
exports.getChainContractAddress = getChainContractAddress; //# sourceMappingURL=getChainContractAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getCallError.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCallError = void 0;
const contract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/contract.js [app-ssr] (ecmascript)");
const node_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/node.js [app-ssr] (ecmascript)");
const getNodeError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-ssr] (ecmascript)");
function getCallError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, getNodeError_js_1.getNodeError)(err, args);
        if (cause instanceof node_js_1.UnknownNodeError) return err;
        return cause;
    })();
    return new contract_js_1.CallExecutionError(cause, {
        docsPath,
        ...args
    });
}
exports.getCallError = getCallError; //# sourceMappingURL=getCallError.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/promise/createBatchScheduler.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createBatchScheduler = void 0;
const schedulerCache = new Map();
function createBatchScheduler({ fn, id, shouldSplitBatch, wait = 0, sort }) {
    const exec = async ()=>{
        const scheduler = getScheduler();
        flush();
        const args = scheduler.map(({ args })=>args);
        if (args.length === 0) return;
        fn(args).then((data)=>{
            if (sort && Array.isArray(data)) data.sort(sort);
            for(let i = 0; i < scheduler.length; i++){
                const { pendingPromise } = scheduler[i];
                pendingPromise.resolve?.([
                    data[i],
                    data
                ]);
            }
        }).catch((err)=>{
            for(let i = 0; i < scheduler.length; i++){
                const { pendingPromise } = scheduler[i];
                pendingPromise.reject?.(err);
            }
        });
    };
    const flush = ()=>schedulerCache.delete(id);
    const getBatchedArgs = ()=>getScheduler().map(({ args })=>args);
    const getScheduler = ()=>schedulerCache.get(id) || [];
    const setScheduler = (item)=>schedulerCache.set(id, [
            ...getScheduler(),
            item
        ]);
    return {
        flush,
        async schedule (args) {
            const pendingPromise = {};
            const promise = new Promise((resolve, reject)=>{
                pendingPromise.resolve = resolve;
                pendingPromise.reject = reject;
            });
            const split = shouldSplitBatch?.([
                ...getBatchedArgs(),
                args
            ]);
            if (split) exec();
            const hasActiveScheduler = getScheduler().length > 0;
            if (hasActiveScheduler) {
                setScheduler({
                    args,
                    pendingPromise
                });
                return promise;
            }
            setScheduler({
                args,
                pendingPromise
            });
            setTimeout(exec, wait);
            return promise;
        }
    };
}
exports.createBatchScheduler = createBatchScheduler; //# sourceMappingURL=createBatchScheduler.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/ccip.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OffchainLookupSenderMismatchError = exports.OffchainLookupResponseMalformedError = exports.OffchainLookupError = void 0;
const stringify_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const utils_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/utils.js [app-ssr] (ecmascript)");
class OffchainLookupError extends base_js_1.BaseError {
    constructor({ callbackSelector, cause, data, extraData, sender, urls }){
        super(cause.shortMessage || 'An error occurred while fetching for an offchain result.', {
            cause,
            metaMessages: [
                ...cause.metaMessages || [],
                cause.metaMessages?.length ? '' : [],
                'Offchain Gateway Call:',
                urls && [
                    '  Gateway URL(s):',
                    ...urls.map((url)=>`    ${(0, utils_js_1.getUrl)(url)}`)
                ],
                `  Sender: ${sender}`,
                `  Data: ${data}`,
                `  Callback selector: ${callbackSelector}`,
                `  Extra data: ${extraData}`
            ].flat()
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'OffchainLookupError'
        });
    }
}
exports.OffchainLookupError = OffchainLookupError;
class OffchainLookupResponseMalformedError extends base_js_1.BaseError {
    constructor({ result, url }){
        super('Offchain gateway response is malformed. Response data must be a hex value.', {
            metaMessages: [
                `Gateway URL: ${(0, utils_js_1.getUrl)(url)}`,
                `Response: ${(0, stringify_js_1.stringify)(result)}`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'OffchainLookupResponseMalformedError'
        });
    }
}
exports.OffchainLookupResponseMalformedError = OffchainLookupResponseMalformedError;
class OffchainLookupSenderMismatchError extends base_js_1.BaseError {
    constructor({ sender, to }){
        super('Reverted sender address does not match target contract address (`to`).', {
            metaMessages: [
                `Contract address: ${to}`,
                `OffchainLookup sender address: ${sender}`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'OffchainLookupSenderMismatchError'
        });
    }
}
exports.OffchainLookupSenderMismatchError = OffchainLookupSenderMismatchError; //# sourceMappingURL=ccip.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAddressEqual = void 0;
const address_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/address.js [app-ssr] (ecmascript)");
const isAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-ssr] (ecmascript)");
function isAddressEqual(a, b) {
    if (!(0, isAddress_js_1.isAddress)(a)) throw new address_js_1.InvalidAddressError({
        address: a
    });
    if (!(0, isAddress_js_1.isAddress)(b)) throw new address_js_1.InvalidAddressError({
        address: b
    });
    return a.toLowerCase() === b.toLowerCase();
}
exports.isAddressEqual = isAddressEqual; //# sourceMappingURL=isAddressEqual.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ccip.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ccipFetch = exports.offchainLookup = exports.offchainLookupAbiItem = exports.offchainLookupSignature = void 0;
const call_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/call.js [app-ssr] (ecmascript)");
const ccip_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/ccip.js [app-ssr] (ecmascript)");
const request_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/request.js [app-ssr] (ecmascript)");
const decodeErrorResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-ssr] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
const concat_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
const isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
exports.offchainLookupSignature = '0x556f1830';
exports.offchainLookupAbiItem = {
    name: 'OffchainLookup',
    type: 'error',
    inputs: [
        {
            name: 'sender',
            type: 'address'
        },
        {
            name: 'urls',
            type: 'string[]'
        },
        {
            name: 'callData',
            type: 'bytes'
        },
        {
            name: 'callbackFunction',
            type: 'bytes4'
        },
        {
            name: 'extraData',
            type: 'bytes'
        }
    ]
};
async function offchainLookup(client, { blockNumber, blockTag, data, to }) {
    const { args } = (0, decodeErrorResult_js_1.decodeErrorResult)({
        data,
        abi: [
            exports.offchainLookupAbiItem
        ]
    });
    const [sender, urls, callData, callbackSelector, extraData] = args;
    try {
        if (!(0, isAddressEqual_js_1.isAddressEqual)(to, sender)) throw new ccip_js_1.OffchainLookupSenderMismatchError({
            sender,
            to
        });
        const result = await ccipFetch({
            data: callData,
            sender,
            urls
        });
        const { data: data_ } = await (0, call_js_1.call)(client, {
            blockNumber,
            blockTag,
            data: (0, concat_js_1.concat)([
                callbackSelector,
                (0, encodeAbiParameters_js_1.encodeAbiParameters)([
                    {
                        type: 'bytes'
                    },
                    {
                        type: 'bytes'
                    }
                ], [
                    result,
                    extraData
                ])
            ]),
            to
        });
        return data_;
    } catch (err) {
        throw new ccip_js_1.OffchainLookupError({
            callbackSelector,
            cause: err,
            data,
            extraData,
            sender,
            urls
        });
    }
}
exports.offchainLookup = offchainLookup;
async function ccipFetch({ data, sender, urls }) {
    let error = new Error('An unknown error occurred.');
    for(let i = 0; i < urls.length; i++){
        const url = urls[i];
        const method = url.includes('{data}') ? 'GET' : 'POST';
        const body = method === 'POST' ? {
            data,
            sender
        } : undefined;
        try {
            const response = await fetch(url.replace('{sender}', sender).replace('{data}', data), {
                body: JSON.stringify(body),
                method
            });
            let result;
            if (response.headers.get('Content-Type')?.startsWith('application/json')) {
                result = (await response.json()).data;
            } else {
                result = await response.text();
            }
            if (!response.ok) {
                error = new request_js_1.HttpRequestError({
                    body,
                    details: result?.error ? (0, stringify_js_1.stringify)(result.error) : response.statusText,
                    headers: response.headers,
                    status: response.status,
                    url
                });
                continue;
            }
            if (!(0, isHex_js_1.isHex)(result)) {
                error = new ccip_js_1.OffchainLookupResponseMalformedError({
                    result,
                    url
                });
                continue;
            }
            return result;
        } catch (err) {
            error = new request_js_1.HttpRequestError({
                body,
                details: err.message,
                url
            });
        }
    }
    throw error;
}
exports.ccipFetch = ccipFetch; //# sourceMappingURL=ccip.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/call.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRevertErrorData = exports.call = void 0;
const parseAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const abis_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/abis.js [app-ssr] (ecmascript)");
const contract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/contract.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const chain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/chain.js [app-ssr] (ecmascript)");
const contract_js_2 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/contract.js [app-ssr] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const getCallError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getCallError.js [app-ssr] (ecmascript)");
const extract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/extract.js [app-ssr] (ecmascript)");
const transactionRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
const createBatchScheduler_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/promise/createBatchScheduler.js [app-ssr] (ecmascript)");
const assertRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
async function call(client, args) {
    const { account: account_ = client.account, batch = Boolean(client.batch?.multicall), blockNumber, blockTag = 'latest', accessList, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = args;
    const account = account_ ? (0, parseAccount_js_1.parseAccount)(account_) : undefined;
    try {
        (0, assertRequest_js_1.assertRequest)(args);
        const blockNumberHex = blockNumber ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
        const request = format({
            ...(0, extract_js_1.extract)(rest, {
                format: chainFormat
            }),
            from: account?.address,
            accessList,
            data,
            gas,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value
        });
        if (batch && shouldPerformMulticall({
            request
        })) {
            try {
                return await scheduleMulticall(client, {
                    ...request,
                    blockNumber,
                    blockTag
                });
            } catch (err) {
                if (!(err instanceof chain_js_1.ClientChainNotConfiguredError) && !(err instanceof chain_js_1.ChainDoesNotSupportContract)) throw err;
            }
        }
        const response = await client.request({
            method: 'eth_call',
            params: block ? [
                request,
                block
            ] : [
                request
            ]
        });
        if (response === '0x') return {
            data: undefined
        };
        return {
            data: response
        };
    } catch (err) {
        const data = getRevertErrorData(err);
        const { offchainLookup, offchainLookupSignature } = await Promise.resolve().then(()=>__turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ccip.js [app-ssr] (ecmascript)"));
        if (data?.slice(0, 10) === offchainLookupSignature && to) {
            return {
                data: await offchainLookup(client, {
                    data,
                    to
                })
            };
        }
        throw (0, getCallError_js_1.getCallError)(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
}
exports.call = call;
function shouldPerformMulticall({ request }) {
    const { data, to, ...request_ } = request;
    if (!data) return false;
    if (data.startsWith(contract_js_1.aggregate3Signature)) return false;
    if (!to) return false;
    if (Object.values(request_).filter((x)=>typeof x !== 'undefined').length > 0) return false;
    return true;
}
async function scheduleMulticall(client, args) {
    const { batchSize = 1024, wait = 0 } = typeof client.batch?.multicall === 'object' ? client.batch.multicall : {};
    const { blockNumber, blockTag = 'latest', data, multicallAddress: multicallAddress_, to } = args;
    let multicallAddress = multicallAddress_;
    if (!multicallAddress) {
        if (!client.chain) throw new chain_js_1.ClientChainNotConfiguredError();
        multicallAddress = (0, getChainContractAddress_js_1.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'multicall3'
        });
    }
    const blockNumberHex = blockNumber ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const block = blockNumberHex || blockTag;
    const { schedule } = (0, createBatchScheduler_js_1.createBatchScheduler)({
        id: `${client.uid}.${block}`,
        wait,
        shouldSplitBatch (args) {
            const size = args.reduce((size, { data })=>size + (data.length - 2), 0);
            return size > batchSize * 2;
        },
        fn: async (requests)=>{
            const calls = requests.map((request)=>({
                    allowFailure: true,
                    callData: request.data,
                    target: request.to
                }));
            const calldata = (0, encodeFunctionData_js_1.encodeFunctionData)({
                abi: abis_js_1.multicall3Abi,
                args: [
                    calls
                ],
                functionName: 'aggregate3'
            });
            const data = await client.request({
                method: 'eth_call',
                params: [
                    {
                        data: calldata,
                        to: multicallAddress
                    },
                    block
                ]
            });
            return (0, decodeFunctionResult_js_1.decodeFunctionResult)({
                abi: abis_js_1.multicall3Abi,
                args: [
                    calls
                ],
                functionName: 'aggregate3',
                data: data || '0x'
            });
        }
    });
    const [{ returnData, success }] = await schedule({
        data,
        to
    });
    if (!success) throw new contract_js_2.RawContractError({
        data: returnData
    });
    if (returnData === '0x') return {
        data: undefined
    };
    return {
        data: returnData
    };
}
function getRevertErrorData(err) {
    if (!(err instanceof base_js_1.BaseError)) return undefined;
    const error = err.walk();
    return typeof error.data === 'object' ? error.data.data : error.data;
}
exports.getRevertErrorData = getRevertErrorData; //# sourceMappingURL=call.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readContract = void 0;
const decodeFunctionResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getContractError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const call_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/call.js [app-ssr] (ecmascript)");
async function readContract(client, { abi, address, args, functionName, ...callRequest }) {
    const calldata = (0, encodeFunctionData_js_1.encodeFunctionData)({
        abi,
        args,
        functionName
    });
    try {
        const { data } = await (0, getAction_js_1.getAction)(client, call_js_1.call, 'call')({
            data: calldata,
            to: address,
            ...callRequest
        });
        return (0, decodeFunctionResult_js_1.decodeFunctionResult)({
            abi,
            args,
            functionName,
            data: data || '0x'
        });
    } catch (err) {
        throw (0, getContractError_js_1.getContractError)(err, {
            abi: abi,
            address,
            args,
            docsPath: '/docs/contract/readContract',
            functionName
        });
    }
}
exports.readContract = readContract; //# sourceMappingURL=readContract.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/simulateContract.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.simulateContract = void 0;
const parseAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getContractError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const call_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/call.js [app-ssr] (ecmascript)");
async function simulateContract(client, { abi, address, args, dataSuffix, functionName, ...callRequest }) {
    const account = callRequest.account ? (0, parseAccount_js_1.parseAccount)(callRequest.account) : undefined;
    const calldata = (0, encodeFunctionData_js_1.encodeFunctionData)({
        abi,
        args,
        functionName
    });
    try {
        const { data } = await (0, getAction_js_1.getAction)(client, call_js_1.call, 'call')({
            batch: false,
            data: `${calldata}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            ...callRequest
        });
        const result = (0, decodeFunctionResult_js_1.decodeFunctionResult)({
            abi,
            args,
            functionName,
            data: data || '0x'
        });
        return {
            result,
            request: {
                abi,
                address,
                args,
                dataSuffix,
                functionName,
                ...callRequest
            }
        };
    } catch (err) {
        throw (0, getContractError_js_1.getContractError)(err, {
            abi: abi,
            address,
            args,
            docsPath: '/docs/contract/simulateContract',
            functionName,
            sender: account?.address
        });
    }
}
exports.simulateContract = simulateContract; //# sourceMappingURL=simulateContract.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.observe = exports.cleanupCache = exports.listenersCache = void 0;
exports.listenersCache = new Map();
exports.cleanupCache = new Map();
let callbackCount = 0;
function observe(observerId, callbacks, fn) {
    const callbackId = ++callbackCount;
    const getListeners = ()=>exports.listenersCache.get(observerId) || [];
    const unsubscribe = ()=>{
        const listeners = getListeners();
        exports.listenersCache.set(observerId, listeners.filter((cb)=>cb.id !== callbackId));
    };
    const unwatch = ()=>{
        const cleanup = exports.cleanupCache.get(observerId);
        if (getListeners().length === 1 && cleanup) cleanup();
        unsubscribe();
    };
    const listeners = getListeners();
    exports.listenersCache.set(observerId, [
        ...listeners,
        {
            id: callbackId,
            fns: callbacks
        }
    ]);
    if (listeners && listeners.length > 0) return unwatch;
    const emit = {};
    for(const key in callbacks){
        emit[key] = (...args)=>{
            const listeners = getListeners();
            if (listeners.length === 0) return;
            for (const listener of listeners)listener.fns[key]?.(...args);
        };
    }
    const cleanup = fn(emit);
    if (typeof cleanup === 'function') exports.cleanupCache.set(observerId, cleanup);
    return unwatch;
}
exports.observe = observe; //# sourceMappingURL=observe.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/wait.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wait = void 0;
async function wait(time) {
    return new Promise((res)=>setTimeout(res, time));
}
exports.wait = wait; //# sourceMappingURL=wait.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/poll.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.poll = void 0;
const wait_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/wait.js [app-ssr] (ecmascript)");
function poll(fn, { emitOnBegin, initialWaitTime, interval }) {
    let active = true;
    const unwatch = ()=>active = false;
    const watch = async ()=>{
        let data = undefined;
        if (emitOnBegin) data = await fn({
            unpoll: unwatch
        });
        const initialWait = await initialWaitTime?.(data) ?? interval;
        await (0, wait_js_1.wait)(initialWait);
        const poll = async ()=>{
            if (!active) return;
            await fn({
                unpoll: unwatch
            });
            await (0, wait_js_1.wait)(interval);
            poll();
        };
        poll();
    };
    watch();
    return unwatch;
}
exports.poll = poll; //# sourceMappingURL=poll.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/promise/withCache.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withCache = exports.getCache = exports.responseCache = exports.promiseCache = void 0;
exports.promiseCache = new Map();
exports.responseCache = new Map();
function getCache(cacheKey) {
    const buildCache = (cacheKey, cache)=>({
            clear: ()=>cache.delete(cacheKey),
            get: ()=>cache.get(cacheKey),
            set: (data)=>cache.set(cacheKey, data)
        });
    const promise = buildCache(cacheKey, exports.promiseCache);
    const response = buildCache(cacheKey, exports.responseCache);
    return {
        clear: ()=>{
            promise.clear();
            response.clear();
        },
        promise,
        response
    };
}
exports.getCache = getCache;
async function withCache(fn, { cacheKey, cacheTime = Infinity }) {
    const cache = getCache(cacheKey);
    const response = cache.response.get();
    if (response && cacheTime > 0) {
        const age = new Date().getTime() - response.created.getTime();
        if (age < cacheTime) return response.data;
    }
    let promise = cache.promise.get();
    if (!promise) {
        promise = fn();
        cache.promise.set(promise);
    }
    try {
        const data = await promise;
        cache.response.set({
            created: new Date(),
            data
        });
        return data;
    } finally{
        cache.promise.clear();
    }
}
exports.withCache = withCache; //# sourceMappingURL=withCache.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlockNumber = exports.getBlockNumberCache = void 0;
const withCache_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/promise/withCache.js [app-ssr] (ecmascript)");
const cacheKey = (id)=>`blockNumber.${id}`;
function getBlockNumberCache(id) {
    return (0, withCache_js_1.getCache)(cacheKey(id));
}
exports.getBlockNumberCache = getBlockNumberCache;
async function getBlockNumber(client, { cacheTime = client.cacheTime, maxAge } = {}) {
    const blockNumberHex = await (0, withCache_js_1.withCache)(()=>client.request({
            method: 'eth_blockNumber'
        }), {
        cacheKey: cacheKey(client.uid),
        cacheTime: maxAge ?? cacheTime
    });
    return BigInt(blockNumberHex);
}
exports.getBlockNumber = getBlockNumber; //# sourceMappingURL=getBlockNumber.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFilterChanges = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const decodeEventLog_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-ssr] (ecmascript)");
const log_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)");
async function getFilterChanges(_client, { filter }) {
    const strict = 'strict' in filter && filter.strict;
    const logs = await filter.request({
        method: 'eth_getFilterChanges',
        params: [
            filter.id
        ]
    });
    return logs.map((log)=>{
        if (typeof log === 'string') return log;
        try {
            const { eventName, args } = 'abi' in filter && filter.abi ? (0, decodeEventLog_js_1.decodeEventLog)({
                abi: filter.abi,
                data: log.data,
                topics: log.topics,
                strict
            }) : {
                eventName: undefined,
                args: undefined
            };
            return (0, log_js_1.formatLog)(log, {
                args,
                eventName
            });
        } catch (err) {
            let eventName;
            let isUnnamed;
            if (err instanceof abi_js_1.DecodeLogDataMismatch || err instanceof abi_js_1.DecodeLogTopicsMismatch) {
                if ('strict' in filter && filter.strict) return;
                eventName = err.abiItem.name;
                isUnnamed = err.abiItem.inputs?.some((x)=>!('name' in x && x.name));
            }
            return (0, log_js_1.formatLog)(log, {
                args: isUnnamed ? [] : {},
                eventName
            });
        }
    }).filter(Boolean);
}
exports.getFilterChanges = getFilterChanges; //# sourceMappingURL=getFilterChanges.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uninstallFilter = void 0;
async function uninstallFilter(_client, { filter }) {
    return filter.request({
        method: 'eth_uninstallFilter',
        params: [
            filter.id
        ]
    });
}
exports.uninstallFilter = uninstallFilter; //# sourceMappingURL=uninstallFilter.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/watchContractEvent.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchContractEvent = void 0;
const observe_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)");
const poll_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/poll.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const rpc_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/rpc.js [app-ssr] (ecmascript)");
const decodeEventLog_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-ssr] (ecmascript)");
const encodeEventTopics_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-ssr] (ecmascript)");
const log_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const createContractEventFilter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/createContractEventFilter.js [app-ssr] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-ssr] (ecmascript)");
const getContractEvents_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getContractEvents.js [app-ssr] (ecmascript)");
const getFilterChanges_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-ssr] (ecmascript)");
const uninstallFilter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-ssr] (ecmascript)");
function watchContractEvent(client, { abi, address, args, batch = true, eventName, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ }) {
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket';
    const pollContractEvent = ()=>{
        const observerId = (0, stringify_js_1.stringify)([
            'watchContractEvent',
            address,
            args,
            batch,
            client.uid,
            eventName,
            pollingInterval
        ]);
        const strict = strict_ ?? false;
        return (0, observe_js_1.observe)(observerId, {
            onLogs,
            onError
        }, (emit)=>{
            let previousBlockNumber;
            let filter;
            let initialized = false;
            const unwatch = (0, poll_js_1.poll)(async ()=>{
                if (!initialized) {
                    try {
                        filter = await (0, getAction_js_1.getAction)(client, createContractEventFilter_js_1.createContractEventFilter, 'createContractEventFilter')({
                            abi,
                            address,
                            args,
                            eventName,
                            strict
                        });
                    } catch  {}
                    initialized = true;
                    return;
                }
                try {
                    let logs;
                    if (filter) {
                        logs = await (0, getAction_js_1.getAction)(client, getFilterChanges_js_1.getFilterChanges, 'getFilterChanges')({
                            filter
                        });
                    } else {
                        const blockNumber = await (0, getAction_js_1.getAction)(client, getBlockNumber_js_1.getBlockNumber, 'getBlockNumber')({});
                        if (previousBlockNumber && previousBlockNumber !== blockNumber) {
                            logs = await (0, getAction_js_1.getAction)(client, getContractEvents_js_1.getContractEvents, 'getContractEvents')({
                                abi,
                                address,
                                args,
                                eventName,
                                fromBlock: previousBlockNumber + 1n,
                                toBlock: blockNumber,
                                strict
                            });
                        } else {
                            logs = [];
                        }
                        previousBlockNumber = blockNumber;
                    }
                    if (logs.length === 0) return;
                    if (batch) emit.onLogs(logs);
                    else for (const log of logs)emit.onLogs([
                        log
                    ]);
                } catch (err) {
                    if (filter && err instanceof rpc_js_1.InvalidInputRpcError) initialized = false;
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return async ()=>{
                if (filter) await (0, getAction_js_1.getAction)(client, uninstallFilter_js_1.uninstallFilter, 'uninstallFilter')({
                    filter
                });
                unwatch();
            };
        });
    };
    const subscribeContractEvent = ()=>{
        let active = true;
        let unsubscribe = ()=>active = false;
        (async ()=>{
            try {
                const topics = eventName ? (0, encodeEventTopics_js_1.encodeEventTopics)({
                    abi: abi,
                    eventName: eventName,
                    args
                }) : [];
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: [
                        'logs',
                        {
                            address,
                            topics
                        }
                    ],
                    onData (data) {
                        if (!active) return;
                        const log = data.result;
                        try {
                            const { eventName, args } = (0, decodeEventLog_js_1.decodeEventLog)({
                                abi: abi,
                                data: log.data,
                                topics: log.topics,
                                strict: strict_
                            });
                            const formatted = (0, log_js_1.formatLog)(log, {
                                args,
                                eventName: eventName
                            });
                            onLogs([
                                formatted
                            ]);
                        } catch (err) {
                            let eventName;
                            let isUnnamed;
                            if (err instanceof abi_js_1.DecodeLogDataMismatch || err instanceof abi_js_1.DecodeLogTopicsMismatch) {
                                if (strict_) return;
                                eventName = err.abiItem.name;
                                isUnnamed = err.abiItem.inputs?.some((x)=>!('name' in x && x.name));
                            }
                            const formatted = (0, log_js_1.formatLog)(log, {
                                args: isUnnamed ? [] : {},
                                eventName
                            });
                            onLogs([
                                formatted
                            ]);
                        }
                    },
                    onError (error) {
                        onError?.(error);
                    }
                });
                unsubscribe = unsubscribe_;
                if (!active) unsubscribe();
            } catch (err) {
                onError?.(err);
            }
        })();
        return unsubscribe;
    };
    return enablePolling ? pollContractEvent() : subscribeContractEvent();
}
exports.watchContractEvent = watchContractEvent; //# sourceMappingURL=watchContractEvent.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertCurrentChain = void 0;
const chain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/chain.js [app-ssr] (ecmascript)");
function assertCurrentChain({ chain, currentChainId }) {
    if (!chain) throw new chain_js_1.ChainNotFoundError();
    if (currentChainId !== chain.id) throw new chain_js_1.ChainMismatchError({
        chain,
        currentChainId
    });
}
exports.assertCurrentChain = assertCurrentChain; //# sourceMappingURL=assertCurrentChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getTransactionError.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionError = void 0;
const node_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/node.js [app-ssr] (ecmascript)");
const transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
const getNodeError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-ssr] (ecmascript)");
function getTransactionError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, getNodeError_js_1.getNodeError)(err, args);
        if (cause instanceof node_js_1.UnknownNodeError) return err;
        return cause;
    })();
    return new transaction_js_1.TransactionExecutionError(cause, {
        docsPath,
        ...args
    });
}
exports.getTransactionError = getTransactionError; //# sourceMappingURL=getTransactionError.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getChainId = void 0;
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
async function getChainId(client) {
    const chainIdHex = await client.request({
        method: 'eth_chainId'
    });
    return (0, fromHex_js_1.hexToNumber)(chainIdHex);
}
exports.getChainId = getChainId; //# sourceMappingURL=getChainId.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendRawTransaction = void 0;
async function sendRawTransaction(client, { serializedTransaction }) {
    return client.request({
        method: 'eth_sendRawTransaction',
        params: [
            serializedTransaction
        ]
    });
}
exports.sendRawTransaction = sendRawTransaction; //# sourceMappingURL=sendRawTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendTransaction = void 0;
const parseAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const assertCurrentChain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)");
const getTransactionError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getTransactionError.js [app-ssr] (ecmascript)");
const extract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/extract.js [app-ssr] (ecmascript)");
const transactionRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const assertRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
const getChainId_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-ssr] (ecmascript)");
const prepareTransactionRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)");
const sendRawTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js [app-ssr] (ecmascript)");
async function sendTransaction(client, args) {
    const { account: account_ = client.account, chain = client.chain, accessList, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = args;
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/actions/wallet/sendTransaction'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    try {
        (0, assertRequest_js_1.assertRequest)(args);
        let chainId;
        if (chain !== null) {
            chainId = await (0, getAction_js_1.getAction)(client, getChainId_js_1.getChainId, 'getChainId')({});
            (0, assertCurrentChain_js_1.assertCurrentChain)({
                currentChainId: chainId,
                chain
            });
        }
        if (account.type === 'local') {
            const request = await (0, getAction_js_1.getAction)(client, prepareTransactionRequest_js_1.prepareTransactionRequest, 'prepareTransactionRequest')({
                account,
                accessList,
                chain,
                data,
                gas,
                gasPrice,
                maxFeePerGas,
                maxPriorityFeePerGas,
                nonce,
                to,
                value,
                ...rest
            });
            if (!chainId) chainId = await (0, getAction_js_1.getAction)(client, getChainId_js_1.getChainId, 'getChainId')({});
            const serializer = chain?.serializers?.transaction;
            const serializedTransaction = await account.signTransaction({
                ...request,
                chainId
            }, {
                serializer
            });
            return await (0, getAction_js_1.getAction)(client, sendRawTransaction_js_1.sendRawTransaction, 'sendRawTransaction')({
                serializedTransaction
            });
        }
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
        const request = format({
            ...(0, extract_js_1.extract)(rest, {
                format: chainFormat
            }),
            accessList,
            data,
            from: account.address,
            gas,
            gasPrice,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value
        });
        return await client.request({
            method: 'eth_sendTransaction',
            params: [
                request
            ]
        });
    } catch (err) {
        throw (0, getTransactionError_js_1.getTransactionError)(err, {
            ...args,
            account,
            chain: args.chain || undefined
        });
    }
}
exports.sendTransaction = sendTransaction; //# sourceMappingURL=sendTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/writeContract.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.writeContract = void 0;
const encodeFunctionData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const sendTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)");
async function writeContract(client, { abi, address, args, dataSuffix, functionName, ...request }) {
    const data = (0, encodeFunctionData_js_1.encodeFunctionData)({
        abi,
        args,
        functionName
    });
    const hash = await (0, getAction_js_1.getAction)(client, sendTransaction_js_1.sendTransaction, 'sendTransaction')({
        data: `${data}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
        to: address,
        ...request
    });
    return hash;
}
exports.writeContract = writeContract; //# sourceMappingURL=writeContract.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/getContract.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEventParameters = exports.getFunctionParameters = exports.getContract = void 0;
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const createContractEventFilter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/createContractEventFilter.js [app-ssr] (ecmascript)");
const estimateContractGas_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/estimateContractGas.js [app-ssr] (ecmascript)");
const getContractEvents_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getContractEvents.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
const simulateContract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/simulateContract.js [app-ssr] (ecmascript)");
const watchContractEvent_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/watchContractEvent.js [app-ssr] (ecmascript)");
const writeContract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/writeContract.js [app-ssr] (ecmascript)");
function getContract({ abi, address, publicClient, walletClient }) {
    const hasPublicClient = publicClient !== undefined && publicClient !== null;
    const hasWalletClient = walletClient !== undefined && walletClient !== null;
    const contract = {};
    let hasReadFunction = false;
    let hasWriteFunction = false;
    let hasEvent = false;
    for (const item of abi){
        if (item.type === 'function') if (item.stateMutability === 'view' || item.stateMutability === 'pure') hasReadFunction = true;
        else hasWriteFunction = true;
        else if (item.type === 'event') hasEvent = true;
        if (hasReadFunction && hasWriteFunction && hasEvent) break;
    }
    if (hasPublicClient) {
        if (hasReadFunction) contract.read = new Proxy({}, {
            get (_, functionName) {
                return (...parameters)=>{
                    const { args, options } = getFunctionParameters(parameters);
                    return (0, getAction_js_1.getAction)(publicClient, readContract_js_1.readContract, 'readContract')({
                        abi,
                        address,
                        functionName,
                        args,
                        ...options
                    });
                };
            }
        });
        if (hasWriteFunction) contract.simulate = new Proxy({}, {
            get (_, functionName) {
                return (...parameters)=>{
                    const { args, options } = getFunctionParameters(parameters);
                    return (0, getAction_js_1.getAction)(publicClient, simulateContract_js_1.simulateContract, 'simulateContract')({
                        abi,
                        address,
                        functionName,
                        args,
                        ...options
                    });
                };
            }
        });
        if (hasEvent) {
            contract.createEventFilter = new Proxy({}, {
                get (_, eventName) {
                    return (...parameters)=>{
                        const abiEvent = abi.find((x)=>x.type === 'event' && x.name === eventName);
                        const { args, options } = getEventParameters(parameters, abiEvent);
                        return (0, getAction_js_1.getAction)(publicClient, createContractEventFilter_js_1.createContractEventFilter, 'createContractEventFilter')({
                            abi,
                            address,
                            eventName,
                            args,
                            ...options
                        });
                    };
                }
            });
            contract.getEvents = new Proxy({}, {
                get (_, eventName) {
                    return (...parameters)=>{
                        const abiEvent = abi.find((x)=>x.type === 'event' && x.name === eventName);
                        const { args, options } = getEventParameters(parameters, abiEvent);
                        return (0, getAction_js_1.getAction)(publicClient, getContractEvents_js_1.getContractEvents, 'getContractEvents')({
                            abi,
                            address,
                            eventName,
                            args,
                            ...options
                        });
                    };
                }
            });
            contract.watchEvent = new Proxy({}, {
                get (_, eventName) {
                    return (...parameters)=>{
                        const abiEvent = abi.find((x)=>x.type === 'event' && x.name === eventName);
                        const { args, options } = getEventParameters(parameters, abiEvent);
                        return (0, getAction_js_1.getAction)(publicClient, watchContractEvent_js_1.watchContractEvent, 'watchContractEvent')({
                            abi,
                            address,
                            eventName,
                            args,
                            ...options
                        });
                    };
                }
            });
        }
    }
    if (hasWalletClient) {
        if (hasWriteFunction) contract.write = new Proxy({}, {
            get (_, functionName) {
                return (...parameters)=>{
                    const { args, options } = getFunctionParameters(parameters);
                    return (0, getAction_js_1.getAction)(walletClient, writeContract_js_1.writeContract, 'writeContract')({
                        abi,
                        address,
                        functionName,
                        args,
                        ...options
                    });
                };
            }
        });
    }
    if (hasPublicClient || hasWalletClient) {
        if (hasWriteFunction) contract.estimateGas = new Proxy({}, {
            get (_, functionName) {
                return (...parameters)=>{
                    const { args, options } = getFunctionParameters(parameters);
                    const client = publicClient ?? walletClient;
                    return (0, getAction_js_1.getAction)(client, estimateContractGas_js_1.estimateContractGas, 'estimateContractGas')({
                        abi,
                        address,
                        functionName,
                        args,
                        ...options,
                        account: options.account ?? walletClient.account
                    });
                };
            }
        });
    }
    contract.address = address;
    contract.abi = abi;
    return contract;
}
exports.getContract = getContract;
function getFunctionParameters(values) {
    const hasArgs = values.length && Array.isArray(values[0]);
    const args = hasArgs ? values[0] : [];
    const options = (hasArgs ? values[1] : values[0]) ?? {};
    return {
        args,
        options
    };
}
exports.getFunctionParameters = getFunctionParameters;
function getEventParameters(values, abiEvent) {
    let hasArgs = false;
    if (Array.isArray(values[0])) hasArgs = true;
    else if (values.length === 1) {
        hasArgs = abiEvent.inputs.some((x)=>x.indexed);
    } else if (values.length === 2) {
        hasArgs = true;
    }
    const args = hasArgs ? values[0] : undefined;
    const options = (hasArgs ? values[1] : values[0]) ?? {};
    return {
        args,
        options
    };
}
exports.getEventParameters = getEventParameters; //# sourceMappingURL=getContract.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/publicKeyToAddress.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publicKeyToAddress = void 0;
const getAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-ssr] (ecmascript)");
const keccak256_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-ssr] (ecmascript)");
function publicKeyToAddress(publicKey) {
    const address = (0, keccak256_js_1.keccak256)(`0x${publicKey.substring(4)}`).substring(26);
    return (0, getAddress_js_1.checksumAddress)(`0x${address}`);
}
exports.publicKeyToAddress = publicKeyToAddress; //# sourceMappingURL=publicKeyToAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/accounts.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publicKeyToAddress = exports.parseAccount = void 0;
var parseAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "parseAccount", {
    enumerable: true,
    get: function() {
        return parseAccount_js_1.parseAccount;
    }
});
var publicKeyToAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/publicKeyToAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "publicKeyToAddress", {
    enumerable: true,
    get: function() {
        return publicKeyToAddress_js_1.publicKeyToAddress;
    }
}); //# sourceMappingURL=accounts.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/uid.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uid = void 0;
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
}
exports.uid = uid; //# sourceMappingURL=uid.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/createClient.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createClient = void 0;
const accounts_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/accounts.js [app-ssr] (ecmascript)");
const uid_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/uid.js [app-ssr] (ecmascript)");
function createClient(parameters) {
    const { batch, cacheTime = parameters.pollingInterval ?? 4000, key = 'base', name = 'Base Client', pollingInterval = 4000, type = 'base' } = parameters;
    const chain = parameters.chain;
    const account = parameters.account ? (0, accounts_js_1.parseAccount)(parameters.account) : undefined;
    const { config, request, value } = parameters.transport({
        chain,
        pollingInterval
    });
    const transport = {
        ...config,
        ...value
    };
    const client = {
        account,
        batch,
        cacheTime,
        chain,
        key,
        name,
        pollingInterval,
        request,
        transport,
        type,
        uid: (0, uid_js_1.uid)()
    };
    function extend(base) {
        return (extendFn)=>{
            const extended = extendFn(base);
            for(const key in client)delete extended[key];
            const combined = {
                ...base,
                ...extended
            };
            return Object.assign(combined, {
                extend: extend(combined)
            });
        };
    }
    return Object.assign(client, {
        extend: extend(client)
    });
}
exports.createClient = createClient; //# sourceMappingURL=createClient.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/promise/withRetry.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withRetry = void 0;
const wait_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/wait.js [app-ssr] (ecmascript)");
function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry = ()=>true } = {}) {
    return new Promise((resolve, reject)=>{
        const attemptRetry = async ({ count = 0 } = {})=>{
            const retry = async ({ error })=>{
                const delay = typeof delay_ === 'function' ? delay_({
                    count,
                    error
                }) : delay_;
                if (delay) await (0, wait_js_1.wait)(delay);
                attemptRetry({
                    count: count + 1
                });
            };
            try {
                const data = await fn();
                resolve(data);
            } catch (err) {
                if (count < retryCount && await shouldRetry({
                    count,
                    error: err
                })) return retry({
                    error: err
                });
                reject(err);
            }
        };
        attemptRetry();
    });
}
exports.withRetry = withRetry; //# sourceMappingURL=withRetry.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/buildRequest.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildRequest = exports.isDeterministicError = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const request_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/request.js [app-ssr] (ecmascript)");
const rpc_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/rpc.js [app-ssr] (ecmascript)");
const withRetry_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/promise/withRetry.js [app-ssr] (ecmascript)");
const isDeterministicError = (error)=>{
    if ('code' in error) return error.code !== -1 && error.code !== -32004 && error.code !== -32005 && error.code !== -32042 && error.code !== -32603;
    if (error instanceof request_js_1.HttpRequestError && error.status) return error.status !== 403 && error.status !== 408 && error.status !== 413 && error.status !== 429 && error.status !== 500 && error.status !== 502 && error.status !== 503 && error.status !== 504;
    return false;
};
exports.isDeterministicError = isDeterministicError;
function buildRequest(request, { retryDelay = 150, retryCount = 3 } = {}) {
    return async (args)=>(0, withRetry_js_1.withRetry)(async ()=>{
            try {
                return await request(args);
            } catch (err_) {
                const err = err_;
                switch(err.code){
                    case rpc_js_1.ParseRpcError.code:
                        throw new rpc_js_1.ParseRpcError(err);
                    case rpc_js_1.InvalidRequestRpcError.code:
                        throw new rpc_js_1.InvalidRequestRpcError(err);
                    case rpc_js_1.MethodNotFoundRpcError.code:
                        throw new rpc_js_1.MethodNotFoundRpcError(err);
                    case rpc_js_1.InvalidParamsRpcError.code:
                        throw new rpc_js_1.InvalidParamsRpcError(err);
                    case rpc_js_1.InternalRpcError.code:
                        throw new rpc_js_1.InternalRpcError(err);
                    case rpc_js_1.InvalidInputRpcError.code:
                        throw new rpc_js_1.InvalidInputRpcError(err);
                    case rpc_js_1.ResourceNotFoundRpcError.code:
                        throw new rpc_js_1.ResourceNotFoundRpcError(err);
                    case rpc_js_1.ResourceUnavailableRpcError.code:
                        throw new rpc_js_1.ResourceUnavailableRpcError(err);
                    case rpc_js_1.TransactionRejectedRpcError.code:
                        throw new rpc_js_1.TransactionRejectedRpcError(err);
                    case rpc_js_1.MethodNotSupportedRpcError.code:
                        throw new rpc_js_1.MethodNotSupportedRpcError(err);
                    case rpc_js_1.LimitExceededRpcError.code:
                        throw new rpc_js_1.LimitExceededRpcError(err);
                    case rpc_js_1.JsonRpcVersionUnsupportedError.code:
                        throw new rpc_js_1.JsonRpcVersionUnsupportedError(err);
                    case rpc_js_1.UserRejectedRequestError.code:
                        throw new rpc_js_1.UserRejectedRequestError(err);
                    case rpc_js_1.UnauthorizedProviderError.code:
                        throw new rpc_js_1.UnauthorizedProviderError(err);
                    case rpc_js_1.UnsupportedProviderMethodError.code:
                        throw new rpc_js_1.UnsupportedProviderMethodError(err);
                    case rpc_js_1.ProviderDisconnectedError.code:
                        throw new rpc_js_1.ProviderDisconnectedError(err);
                    case rpc_js_1.ChainDisconnectedError.code:
                        throw new rpc_js_1.ChainDisconnectedError(err);
                    case rpc_js_1.SwitchChainError.code:
                        throw new rpc_js_1.SwitchChainError(err);
                    case 5000:
                        throw new rpc_js_1.UserRejectedRequestError(err);
                    default:
                        if (err_ instanceof base_js_1.BaseError) throw err_;
                        throw new rpc_js_1.UnknownRpcError(err);
                }
            }
        }, {
            delay: ({ count, error })=>{
                if (error && error instanceof request_js_1.HttpRequestError) {
                    const retryAfter = error?.headers?.get('Retry-After');
                    if (retryAfter?.match(/\d/)) return parseInt(retryAfter) * 1000;
                }
                return ~~(1 << count) * retryDelay;
            },
            retryCount,
            shouldRetry: ({ error })=>!(0, exports.isDeterministicError)(error)
        });
}
exports.buildRequest = buildRequest; //# sourceMappingURL=buildRequest.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/transports/createTransport.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createTransport = void 0;
const buildRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/buildRequest.js [app-ssr] (ecmascript)");
function createTransport({ key, name, request, retryCount = 3, retryDelay = 150, timeout, type }, value) {
    return {
        config: {
            key,
            name,
            request,
            retryCount,
            retryDelay,
            timeout,
            type
        },
        request: (0, buildRequest_js_1.buildRequest)(request, {
            retryCount,
            retryDelay
        }),
        value
    };
}
exports.createTransport = createTransport; //# sourceMappingURL=createTransport.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/transports/custom.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.custom = void 0;
const createTransport_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/transports/createTransport.js [app-ssr] (ecmascript)");
function custom(provider, config = {}) {
    const { key = 'custom', name = 'Custom Provider', retryDelay } = config;
    return ({ retryCount: defaultRetryCount })=>(0, createTransport_js_1.createTransport)({
            key,
            name,
            request: provider.request.bind(provider),
            retryCount: config.retryCount ?? defaultRetryCount,
            retryDelay,
            type: 'custom'
        });
}
exports.custom = custom; //# sourceMappingURL=custom.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/transports/fallback.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rankTransports = exports.fallback = void 0;
const buildRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/buildRequest.js [app-ssr] (ecmascript)");
const wait_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/wait.js [app-ssr] (ecmascript)");
const createTransport_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/transports/createTransport.js [app-ssr] (ecmascript)");
function fallback(transports_, config = {}) {
    const { key = 'fallback', name = 'Fallback', rank = false, retryCount, retryDelay } = config;
    return ({ chain, pollingInterval = 4000, timeout })=>{
        let transports = transports_;
        let onResponse = ()=>{};
        const transport = (0, createTransport_js_1.createTransport)({
            key,
            name,
            async request ({ method, params }) {
                const fetch = async (i = 0)=>{
                    const transport = transports[i]({
                        chain,
                        retryCount: 0,
                        timeout
                    });
                    try {
                        const response = await transport.request({
                            method,
                            params
                        });
                        onResponse({
                            method,
                            params: params,
                            response,
                            transport,
                            status: 'success'
                        });
                        return response;
                    } catch (err) {
                        onResponse({
                            error: err,
                            method,
                            params: params,
                            transport,
                            status: 'error'
                        });
                        if ((0, buildRequest_js_1.isDeterministicError)(err)) throw err;
                        if (i === transports.length - 1) throw err;
                        return fetch(i + 1);
                    }
                };
                return fetch();
            },
            retryCount,
            retryDelay,
            type: 'fallback'
        }, {
            onResponse: (fn)=>onResponse = fn,
            transports: transports.map((fn)=>fn({
                    chain,
                    retryCount: 0
                }))
        });
        if (rank) {
            const rankOptions = typeof rank === 'object' ? rank : {};
            rankTransports({
                chain,
                interval: rankOptions.interval ?? pollingInterval,
                onTransports: (transports_)=>transports = transports_,
                sampleCount: rankOptions.sampleCount,
                timeout: rankOptions.timeout,
                transports,
                weights: rankOptions.weights
            });
        }
        return transport;
    };
}
exports.fallback = fallback;
function rankTransports({ chain, interval = 4000, onTransports, sampleCount = 10, timeout = 1000, transports, weights = {} }) {
    const { stability: stabilityWeight = 0.7, latency: latencyWeight = 0.3 } = weights;
    const samples = [];
    const rankTransports_ = async ()=>{
        const sample = await Promise.all(transports.map(async (transport)=>{
            const transport_ = transport({
                chain,
                retryCount: 0,
                timeout
            });
            const start = Date.now();
            let end;
            let success;
            try {
                await transport_.request({
                    method: 'net_listening'
                });
                success = 1;
            } catch  {
                success = 0;
            } finally{
                end = Date.now();
            }
            const latency = end - start;
            return {
                latency,
                success
            };
        }));
        samples.push(sample);
        if (samples.length > sampleCount) samples.shift();
        const maxLatency = Math.max(...samples.map((sample)=>Math.max(...sample.map(({ latency })=>latency))));
        const scores = transports.map((_, i)=>{
            const latencies = samples.map((sample)=>sample[i].latency);
            const meanLatency = latencies.reduce((acc, latency)=>acc + latency, 0) / latencies.length;
            const latencyScore = 1 - meanLatency / maxLatency;
            const successes = samples.map((sample)=>sample[i].success);
            const stabilityScore = successes.reduce((acc, success)=>acc + success, 0) / successes.length;
            if (stabilityScore === 0) return [
                0,
                i
            ];
            return [
                latencyWeight * latencyScore + stabilityWeight * stabilityScore,
                i
            ];
        }).sort((a, b)=>b[0] - a[0]);
        onTransports(scores.map(([, i])=>transports[i]));
        await (0, wait_js_1.wait)(interval);
        rankTransports_();
    };
    rankTransports_();
}
exports.rankTransports = rankTransports; //# sourceMappingURL=fallback.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transport.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UrlRequiredError = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
class UrlRequiredError extends base_js_1.BaseError {
    constructor(){
        super('No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.', {
            docsPath: '/docs/clients/intro'
        });
    }
}
exports.UrlRequiredError = UrlRequiredError; //# sourceMappingURL=transport.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/promise/withTimeout.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withTimeout = void 0;
function withTimeout(fn, { errorInstance = new Error('timed out'), timeout, signal }) {
    return new Promise((resolve, reject)=>{
        ;
        (async ()=>{
            let timeoutId;
            try {
                const controller = new AbortController();
                if (timeout > 0) {
                    timeoutId = setTimeout(()=>{
                        if (signal) {
                            controller.abort();
                        } else {
                            reject(errorInstance);
                        }
                    }, timeout);
                }
                resolve(await fn({
                    signal: controller?.signal
                }));
            } catch (err) {
                if (err.name === 'AbortError') reject(errorInstance);
                reject(err);
            } finally{
                clearTimeout(timeoutId);
            }
        })();
    });
}
exports.withTimeout = withTimeout; //# sourceMappingURL=withTimeout.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/rpc.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rpc = exports.getSocket = exports.socketsCache = void 0;
const isows_1 = __turbopack_require__("[project]/node_modules/.pnpm/isows@1.0.3_ws@8.13.0/node_modules/isows/_cjs/index.js [app-ssr] (ecmascript)");
const request_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/request.js [app-ssr] (ecmascript)");
const createBatchScheduler_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/promise/createBatchScheduler.js [app-ssr] (ecmascript)");
const withTimeout_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/promise/withTimeout.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
let id = 0;
async function http(url, { body, fetchOptions = {}, timeout = 10000 }) {
    const { headers, method, signal: signal_ } = fetchOptions;
    try {
        const response = await (0, withTimeout_js_1.withTimeout)(async ({ signal })=>{
            const response = await fetch(url, {
                ...fetchOptions,
                body: Array.isArray(body) ? (0, stringify_js_1.stringify)(body.map((body)=>({
                        jsonrpc: '2.0',
                        id: body.id ?? id++,
                        ...body
                    }))) : (0, stringify_js_1.stringify)({
                    jsonrpc: '2.0',
                    id: body.id ?? id++,
                    ...body
                }),
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                },
                method: method || 'POST',
                signal: signal_ || (timeout > 0 ? signal : undefined)
            });
            return response;
        }, {
            errorInstance: new request_js_1.TimeoutError({
                body,
                url
            }),
            timeout,
            signal: true
        });
        let data;
        if (response.headers.get('Content-Type')?.startsWith('application/json')) {
            data = await response.json();
        } else {
            data = await response.text();
        }
        if (!response.ok) {
            throw new request_js_1.HttpRequestError({
                body,
                details: (0, stringify_js_1.stringify)(data.error) || response.statusText,
                headers: response.headers,
                status: response.status,
                url
            });
        }
        return data;
    } catch (err) {
        if (err instanceof request_js_1.HttpRequestError) throw err;
        if (err instanceof request_js_1.TimeoutError) throw err;
        throw new request_js_1.HttpRequestError({
            body,
            details: err.message,
            url
        });
    }
}
exports.socketsCache = new Map();
async function getSocket(url) {
    let socket = exports.socketsCache.get(url);
    if (socket) return socket;
    const { schedule } = (0, createBatchScheduler_js_1.createBatchScheduler)({
        id: url,
        fn: async ()=>{
            const webSocket = new isows_1.WebSocket(url);
            const requests = new Map();
            const subscriptions = new Map();
            const onMessage = ({ data })=>{
                const message = JSON.parse(data);
                const isSubscription = message.method === 'eth_subscription';
                const id = isSubscription ? message.params.subscription : message.id;
                const cache = isSubscription ? subscriptions : requests;
                const callback = cache.get(id);
                if (callback) callback({
                    data
                });
                if (!isSubscription) cache.delete(id);
            };
            const onClose = ()=>{
                exports.socketsCache.delete(url);
                webSocket.removeEventListener('close', onClose);
                webSocket.removeEventListener('message', onMessage);
            };
            webSocket.addEventListener('close', onClose);
            webSocket.addEventListener('message', onMessage);
            if (webSocket.readyState === isows_1.WebSocket.CONNECTING) {
                await new Promise((resolve, reject)=>{
                    if (!webSocket) return;
                    webSocket.onopen = resolve;
                    webSocket.onerror = reject;
                });
            }
            socket = Object.assign(webSocket, {
                requests,
                subscriptions
            });
            exports.socketsCache.set(url, socket);
            return [
                socket
            ];
        }
    });
    const [_, [socket_]] = await schedule();
    return socket_;
}
exports.getSocket = getSocket;
function webSocket(socket, { body, onResponse }) {
    if (socket.readyState === socket.CLOSED || socket.readyState === socket.CLOSING) throw new request_js_1.WebSocketRequestError({
        body,
        url: socket.url,
        details: 'Socket is closed.'
    });
    const id_ = id++;
    const callback = ({ data })=>{
        const message = JSON.parse(data);
        if (typeof message.id === 'number' && id_ !== message.id) return;
        onResponse?.(message);
        if (body.method === 'eth_subscribe' && typeof message.result === 'string') {
            socket.subscriptions.set(message.result, callback);
        }
        if (body.method === 'eth_unsubscribe') {
            socket.subscriptions.delete(body.params?.[0]);
        }
    };
    socket.requests.set(id_, callback);
    socket.send(JSON.stringify({
        jsonrpc: '2.0',
        ...body,
        id: id_
    }));
    return socket;
}
async function webSocketAsync(socket, { body, timeout = 10000 }) {
    return (0, withTimeout_js_1.withTimeout)(()=>new Promise((onResponse)=>exports.rpc.webSocket(socket, {
                body,
                onResponse
            })), {
        errorInstance: new request_js_1.TimeoutError({
            body,
            url: socket.url
        }),
        timeout
    });
}
exports.rpc = {
    http,
    webSocket,
    webSocketAsync
}; //# sourceMappingURL=rpc.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/transports/http.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.http = void 0;
const request_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/request.js [app-ssr] (ecmascript)");
const transport_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transport.js [app-ssr] (ecmascript)");
const createBatchScheduler_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/promise/createBatchScheduler.js [app-ssr] (ecmascript)");
const rpc_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/rpc.js [app-ssr] (ecmascript)");
const createTransport_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/transports/createTransport.js [app-ssr] (ecmascript)");
function http(url, config = {}) {
    const { batch, fetchOptions, key = 'http', name = 'HTTP JSON-RPC', retryDelay } = config;
    return ({ chain, retryCount: retryCount_, timeout: timeout_ })=>{
        const { batchSize = 1000, wait = 0 } = typeof batch === 'object' ? batch : {};
        const retryCount = config.retryCount ?? retryCount_;
        const timeout = timeout_ ?? config.timeout ?? 10000;
        const url_ = url || chain?.rpcUrls.default.http[0];
        if (!url_) throw new transport_js_1.UrlRequiredError();
        return (0, createTransport_js_1.createTransport)({
            key,
            name,
            async request ({ method, params }) {
                const body = {
                    method,
                    params
                };
                const { schedule } = (0, createBatchScheduler_js_1.createBatchScheduler)({
                    id: `${url}`,
                    wait,
                    shouldSplitBatch (requests) {
                        return requests.length > batchSize;
                    },
                    fn: (body)=>rpc_js_1.rpc.http(url_, {
                            body,
                            fetchOptions,
                            timeout
                        }),
                    sort: (a, b)=>a.id - b.id
                });
                const fn = async (body)=>batch ? schedule(body) : [
                        await rpc_js_1.rpc.http(url_, {
                            body,
                            fetchOptions,
                            timeout
                        })
                    ];
                const [{ error, result }] = await fn(body);
                if (error) throw new request_js_1.RpcRequestError({
                    body,
                    error,
                    url: url_
                });
                return result;
            },
            retryCount,
            retryDelay,
            timeout,
            type: 'http'
        }, {
            fetchOptions,
            url
        });
    };
}
exports.http = http; //# sourceMappingURL=http.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/errors.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNullUniversalResolverError = void 0;
const solidity_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/solidity.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const contract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/contract.js [app-ssr] (ecmascript)");
function isNullUniversalResolverError(err, callType) {
    if (!(err instanceof base_js_1.BaseError)) return false;
    const cause = err.walk((e)=>e instanceof contract_js_1.ContractFunctionRevertedError);
    if (!(cause instanceof contract_js_1.ContractFunctionRevertedError)) return false;
    if (cause.data?.errorName === 'ResolverNotFound') return true;
    if (cause.data?.errorName === 'ResolverWildcardNotSupported') return true;
    if (cause.reason?.includes('Wildcard on non-extended resolvers is not supported')) return true;
    if (callType === 'reverse' && cause.reason === solidity_js_1.panicReasons[50]) return true;
    return false;
}
exports.isNullUniversalResolverError = isNullUniversalResolverError; //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/encodedLabelToLabelhash.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodedLabelToLabelhash = void 0;
const isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
function encodedLabelToLabelhash(label) {
    if (label.length !== 66) return null;
    if (label.indexOf('[') !== 0) return null;
    if (label.indexOf(']') !== 65) return null;
    const hash = `0x${label.slice(1, 65)}`;
    if (!(0, isHex_js_1.isHex)(hash)) return null;
    return hash;
}
exports.encodedLabelToLabelhash = encodedLabelToLabelhash; //# sourceMappingURL=encodedLabelToLabelhash.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/namehash.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.namehash = void 0;
const concat_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const keccak256_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-ssr] (ecmascript)");
const encodedLabelToLabelhash_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/encodedLabelToLabelhash.js [app-ssr] (ecmascript)");
function namehash(name) {
    let result = new Uint8Array(32).fill(0);
    if (!name) return (0, toHex_js_1.bytesToHex)(result);
    const labels = name.split('.');
    for(let i = labels.length - 1; i >= 0; i -= 1){
        const hashFromEncodedLabel = (0, encodedLabelToLabelhash_js_1.encodedLabelToLabelhash)(labels[i]);
        const hashed = hashFromEncodedLabel ? (0, toBytes_js_1.toBytes)(hashFromEncodedLabel) : (0, keccak256_js_1.keccak256)((0, toBytes_js_1.stringToBytes)(labels[i]), 'bytes');
        result = (0, keccak256_js_1.keccak256)((0, concat_js_1.concat)([
            result,
            hashed
        ]), 'bytes');
    }
    return (0, toHex_js_1.bytesToHex)(result);
}
exports.namehash = namehash; //# sourceMappingURL=namehash.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/encodeLabelhash.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeLabelhash = void 0;
function encodeLabelhash(hash) {
    return `[${hash.slice(2)}]`;
}
exports.encodeLabelhash = encodeLabelhash; //# sourceMappingURL=encodeLabelhash.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/labelhash.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.labelhash = void 0;
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const keccak256_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-ssr] (ecmascript)");
const encodedLabelToLabelhash_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/encodedLabelToLabelhash.js [app-ssr] (ecmascript)");
function labelhash(label) {
    const result = new Uint8Array(32).fill(0);
    if (!label) return (0, toHex_js_1.bytesToHex)(result);
    return (0, encodedLabelToLabelhash_js_1.encodedLabelToLabelhash)(label) || (0, keccak256_js_1.keccak256)((0, toBytes_js_1.stringToBytes)(label));
}
exports.labelhash = labelhash; //# sourceMappingURL=labelhash.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/packetToBytes.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.packetToBytes = void 0;
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const encodeLabelhash_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/encodeLabelhash.js [app-ssr] (ecmascript)");
const labelhash_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/labelhash.js [app-ssr] (ecmascript)");
function packetToBytes(packet) {
    const value = packet.replace(/^\.|\.$/gm, '');
    if (value.length === 0) return new Uint8Array(1);
    const bytes = new Uint8Array((0, toBytes_js_1.stringToBytes)(value).byteLength + 2);
    let offset = 0;
    const list = value.split('.');
    for(let i = 0; i < list.length; i++){
        let encoded = (0, toBytes_js_1.stringToBytes)(list[i]);
        if (encoded.byteLength > 255) encoded = (0, toBytes_js_1.stringToBytes)((0, encodeLabelhash_js_1.encodeLabelhash)((0, labelhash_js_1.labelhash)(list[i])));
        bytes[offset] = encoded.length;
        bytes.set(encoded, offset + 1);
        offset += encoded.length + 1;
    }
    if (bytes.byteLength !== offset + 1) return bytes.slice(0, offset + 1);
    return bytes;
}
exports.packetToBytes = packetToBytes; //# sourceMappingURL=packetToBytes.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/ens/getEnsAddress.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsAddress = void 0;
const abis_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/abis.js [app-ssr] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)");
const trim_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/trim.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const errors_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/errors.js [app-ssr] (ecmascript)");
const namehash_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/namehash.js [app-ssr] (ecmascript)");
const packetToBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/packetToBytes.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
async function getEnsAddress(client, { blockNumber, blockTag, coinType, name, universalResolverAddress: universalResolverAddress_ }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0, getChainContractAddress_js_1.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver'
        });
    }
    try {
        const functionData = (0, encodeFunctionData_js_1.encodeFunctionData)({
            abi: abis_js_1.addressResolverAbi,
            functionName: 'addr',
            ...coinType != null ? {
                args: [
                    (0, namehash_js_1.namehash)(name),
                    BigInt(coinType)
                ]
            } : {
                args: [
                    (0, namehash_js_1.namehash)(name)
                ]
            }
        });
        const res = await (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract')({
            address: universalResolverAddress,
            abi: abis_js_1.universalResolverResolveAbi,
            functionName: 'resolve',
            args: [
                (0, toHex_js_1.toHex)((0, packetToBytes_js_1.packetToBytes)(name)),
                functionData
            ],
            blockNumber,
            blockTag
        });
        if (res[0] === '0x') return null;
        const address = (0, decodeFunctionResult_js_1.decodeFunctionResult)({
            abi: abis_js_1.addressResolverAbi,
            args: coinType != null ? [
                (0, namehash_js_1.namehash)(name),
                BigInt(coinType)
            ] : undefined,
            functionName: 'addr',
            data: res[0]
        });
        if (address === '0x') return null;
        if ((0, trim_js_1.trim)(address) === '0x00') return null;
        return address;
    } catch (err) {
        if ((0, errors_js_1.isNullUniversalResolverError)(err, 'resolve')) return null;
        throw err;
    }
}
exports.getEnsAddress = getEnsAddress; //# sourceMappingURL=getEnsAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/ens.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EnsAvatarUnsupportedNamespaceError = exports.EnsAvatarUriResolutionError = exports.EnsAvatarInvalidNftUriError = exports.EnsAvatarInvalidMetadataError = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
class EnsAvatarInvalidMetadataError extends base_js_1.BaseError {
    constructor({ data }){
        super('Unable to extract image from metadata. The metadata may be malformed or invalid.', {
            metaMessages: [
                '- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.',
                '',
                `Provided data: ${JSON.stringify(data)}`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EnsAvatarInvalidMetadataError'
        });
    }
}
exports.EnsAvatarInvalidMetadataError = EnsAvatarInvalidMetadataError;
class EnsAvatarInvalidNftUriError extends base_js_1.BaseError {
    constructor({ reason }){
        super(`ENS NFT avatar URI is invalid. ${reason}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EnsAvatarInvalidNftUriError'
        });
    }
}
exports.EnsAvatarInvalidNftUriError = EnsAvatarInvalidNftUriError;
class EnsAvatarUriResolutionError extends base_js_1.BaseError {
    constructor({ uri }){
        super(`Unable to resolve ENS avatar URI "${uri}". The URI may be malformed, invalid, or does not respond with a valid image.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EnsAvatarUriResolutionError'
        });
    }
}
exports.EnsAvatarUriResolutionError = EnsAvatarUriResolutionError;
class EnsAvatarUnsupportedNamespaceError extends base_js_1.BaseError {
    constructor({ namespace }){
        super(`ENS NFT avatar namespace "${namespace}" is not supported. Must be "erc721" or "erc1155".`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EnsAvatarUnsupportedNamespaceError'
        });
    }
}
exports.EnsAvatarUnsupportedNamespaceError = EnsAvatarUnsupportedNamespaceError; //# sourceMappingURL=ens.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/avatar/utils.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNftTokenUri = exports.parseNftUri = exports.parseAvatarUri = exports.getMetadataAvatarUri = exports.getJsonImage = exports.resolveAvatarUri = exports.getGateway = exports.isImageUri = void 0;
const readContract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
const ens_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/ens.js [app-ssr] (ecmascript)");
const networkRegex = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
const ipfsHashRegex = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/;
const base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
const dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function isImageUri(uri) {
    try {
        const res = await fetch(uri, {
            method: 'HEAD'
        });
        if (res.status === 200) {
            const contentType = res.headers.get('content-type');
            return contentType?.startsWith('image/');
        }
        return false;
    } catch (error) {
        if (typeof error === 'object' && typeof error.response !== 'undefined') {
            return false;
        }
        if (!globalThis.hasOwnProperty('Image')) return false;
        return new Promise((resolve)=>{
            const img = new Image();
            img.onload = ()=>{
                resolve(true);
            };
            img.onerror = ()=>{
                resolve(false);
            };
            img.src = uri;
        });
    }
}
exports.isImageUri = isImageUri;
function getGateway(custom, defaultGateway) {
    if (!custom) return defaultGateway;
    if (custom.endsWith('/')) return custom.slice(0, -1);
    return custom;
}
exports.getGateway = getGateway;
function resolveAvatarUri({ uri, gatewayUrls }) {
    const isEncoded = base64Regex.test(uri);
    if (isEncoded) return {
        uri,
        isOnChain: true,
        isEncoded
    };
    const ipfsGateway = getGateway(gatewayUrls?.ipfs, 'https://ipfs.io');
    const arweaveGateway = getGateway(gatewayUrls?.arweave, 'https://arweave.net');
    const networkRegexMatch = uri.match(networkRegex);
    const { protocol, subpath, target, subtarget = '' } = networkRegexMatch?.groups || {};
    const isIPNS = protocol === 'ipns:/' || subpath === 'ipns/';
    const isIPFS = protocol === 'ipfs:/' || subpath === 'ipfs/' || ipfsHashRegex.test(uri);
    if (uri.startsWith('http') && !isIPNS && !isIPFS) {
        let replacedUri = uri;
        if (gatewayUrls?.arweave) replacedUri = uri.replace(/https:\/\/arweave.net/g, gatewayUrls?.arweave);
        return {
            uri: replacedUri,
            isOnChain: false,
            isEncoded: false
        };
    }
    if ((isIPNS || isIPFS) && target) {
        return {
            uri: `${ipfsGateway}/${isIPNS ? 'ipns' : 'ipfs'}/${target}${subtarget}`,
            isOnChain: false,
            isEncoded: false
        };
    }
    if (protocol === 'ar:/' && target) {
        return {
            uri: `${arweaveGateway}/${target}${subtarget || ''}`,
            isOnChain: false,
            isEncoded: false
        };
    }
    let parsedUri = uri.replace(dataURIRegex, '');
    if (parsedUri.startsWith('<svg')) {
        parsedUri = `data:image/svg+xml;base64,${btoa(parsedUri)}`;
    }
    if (parsedUri.startsWith('data:') || parsedUri.startsWith('{')) {
        return {
            uri: parsedUri,
            isOnChain: true,
            isEncoded: false
        };
    }
    throw new ens_js_1.EnsAvatarUriResolutionError({
        uri
    });
}
exports.resolveAvatarUri = resolveAvatarUri;
function getJsonImage(data) {
    if (typeof data !== 'object' || !('image' in data) && !('image_url' in data) && !('image_data' in data)) {
        throw new ens_js_1.EnsAvatarInvalidMetadataError({
            data
        });
    }
    return data.image || data.image_url || data.image_data;
}
exports.getJsonImage = getJsonImage;
async function getMetadataAvatarUri({ gatewayUrls, uri }) {
    try {
        const res = await fetch(uri).then((res)=>res.json());
        const image = await parseAvatarUri({
            gatewayUrls,
            uri: getJsonImage(res)
        });
        return image;
    } catch  {
        throw new ens_js_1.EnsAvatarUriResolutionError({
            uri
        });
    }
}
exports.getMetadataAvatarUri = getMetadataAvatarUri;
async function parseAvatarUri({ gatewayUrls, uri }) {
    const { uri: resolvedURI, isOnChain } = resolveAvatarUri({
        uri,
        gatewayUrls
    });
    if (isOnChain) return resolvedURI;
    const isImage = await isImageUri(resolvedURI);
    if (isImage) return resolvedURI;
    throw new ens_js_1.EnsAvatarUriResolutionError({
        uri
    });
}
exports.parseAvatarUri = parseAvatarUri;
function parseNftUri(uri_) {
    let uri = uri_;
    if (uri.startsWith('did:nft:')) {
        uri = uri.replace('did:nft:', '').replace(/_/g, '/');
    }
    const [reference, asset_namespace, tokenID] = uri.split('/');
    const [eip_namespace, chainID] = reference.split(':');
    const [erc_namespace, contractAddress] = asset_namespace.split(':');
    if (!eip_namespace || eip_namespace.toLowerCase() !== 'eip155') throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'Only EIP-155 supported'
    });
    if (!chainID) throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'Chain ID not found'
    });
    if (!contractAddress) throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'Contract address not found'
    });
    if (!tokenID) throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'Token ID not found'
    });
    if (!erc_namespace) throw new ens_js_1.EnsAvatarInvalidNftUriError({
        reason: 'ERC namespace not found'
    });
    return {
        chainID: parseInt(chainID),
        namespace: erc_namespace.toLowerCase(),
        contractAddress: contractAddress,
        tokenID
    };
}
exports.parseNftUri = parseNftUri;
async function getNftTokenUri(client, { nft }) {
    if (nft.namespace === 'erc721') {
        return (0, readContract_js_1.readContract)(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'tokenURI',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [
                        {
                            name: 'tokenId',
                            type: 'uint256'
                        }
                    ],
                    outputs: [
                        {
                            name: '',
                            type: 'string'
                        }
                    ]
                }
            ],
            functionName: 'tokenURI',
            args: [
                BigInt(nft.tokenID)
            ]
        });
    }
    if (nft.namespace === 'erc1155') {
        return (0, readContract_js_1.readContract)(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'uri',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [
                        {
                            name: '_id',
                            type: 'uint256'
                        }
                    ],
                    outputs: [
                        {
                            name: '',
                            type: 'string'
                        }
                    ]
                }
            ],
            functionName: 'uri',
            args: [
                BigInt(nft.tokenID)
            ]
        });
    }
    throw new ens_js_1.EnsAvatarUnsupportedNamespaceError({
        namespace: nft.namespace
    });
}
exports.getNftTokenUri = getNftTokenUri; //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/avatar/parseAvatarRecord.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAvatarRecord = void 0;
const utils_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/avatar/utils.js [app-ssr] (ecmascript)");
async function parseAvatarRecord(client, { gatewayUrls, record }) {
    if (/eip155:/i.test(record)) return parseNftAvatarUri(client, {
        gatewayUrls,
        record
    });
    return (0, utils_js_1.parseAvatarUri)({
        uri: record,
        gatewayUrls
    });
}
exports.parseAvatarRecord = parseAvatarRecord;
async function parseNftAvatarUri(client, { gatewayUrls, record }) {
    const nft = (0, utils_js_1.parseNftUri)(record);
    const nftUri = await (0, utils_js_1.getNftTokenUri)(client, {
        nft
    });
    const { uri: resolvedNftUri, isOnChain, isEncoded } = (0, utils_js_1.resolveAvatarUri)({
        uri: nftUri,
        gatewayUrls
    });
    if (isOnChain && (resolvedNftUri.includes('data:application/json;base64,') || resolvedNftUri.startsWith('{'))) {
        const encodedJson = isEncoded ? atob(resolvedNftUri.replace('data:application/json;base64,', '')) : resolvedNftUri;
        const decoded = JSON.parse(encodedJson);
        return (0, utils_js_1.parseAvatarUri)({
            uri: (0, utils_js_1.getJsonImage)(decoded),
            gatewayUrls
        });
    }
    let uriTokenId = nft.tokenID;
    if (nft.namespace === 'erc1155') uriTokenId = uriTokenId.replace('0x', '').padStart(64, '0');
    return (0, utils_js_1.getMetadataAvatarUri)({
        gatewayUrls,
        uri: resolvedNftUri.replace(/(?:0x)?{id}/, uriTokenId)
    });
} //# sourceMappingURL=parseAvatarRecord.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/ens/getEnsText.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsText = void 0;
const abis_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/abis.js [app-ssr] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const errors_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/errors.js [app-ssr] (ecmascript)");
const namehash_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/namehash.js [app-ssr] (ecmascript)");
const packetToBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/packetToBytes.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
async function getEnsText(client, { blockNumber, blockTag, name, key, universalResolverAddress: universalResolverAddress_ }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0, getChainContractAddress_js_1.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver'
        });
    }
    try {
        const res = await (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract')({
            address: universalResolverAddress,
            abi: abis_js_1.universalResolverResolveAbi,
            functionName: 'resolve',
            args: [
                (0, toHex_js_1.toHex)((0, packetToBytes_js_1.packetToBytes)(name)),
                (0, encodeFunctionData_js_1.encodeFunctionData)({
                    abi: abis_js_1.textResolverAbi,
                    functionName: 'text',
                    args: [
                        (0, namehash_js_1.namehash)(name),
                        key
                    ]
                })
            ],
            blockNumber,
            blockTag
        });
        if (res[0] === '0x') return null;
        const record = (0, decodeFunctionResult_js_1.decodeFunctionResult)({
            abi: abis_js_1.textResolverAbi,
            functionName: 'text',
            data: res[0]
        });
        return record === '' ? null : record;
    } catch (err) {
        if ((0, errors_js_1.isNullUniversalResolverError)(err, 'resolve')) return null;
        throw err;
    }
}
exports.getEnsText = getEnsText; //# sourceMappingURL=getEnsText.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/ens/getEnsAvatar.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsAvatar = void 0;
const parseAvatarRecord_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/avatar/parseAvatarRecord.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const getEnsText_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/ens/getEnsText.js [app-ssr] (ecmascript)");
async function getEnsAvatar(client, { blockNumber, blockTag, gatewayUrls, name, universalResolverAddress }) {
    const record = await (0, getAction_js_1.getAction)(client, getEnsText_js_1.getEnsText, 'getEnsText')({
        blockNumber,
        blockTag,
        key: 'avatar',
        name,
        universalResolverAddress
    });
    if (!record) return null;
    try {
        return await (0, parseAvatarRecord_js_1.parseAvatarRecord)(client, {
            record,
            gatewayUrls
        });
    } catch  {
        return null;
    }
}
exports.getEnsAvatar = getEnsAvatar; //# sourceMappingURL=getEnsAvatar.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/ens/getEnsName.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsName = void 0;
const abis_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/abis.js [app-ssr] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const errors_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/errors.js [app-ssr] (ecmascript)");
const packetToBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/packetToBytes.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
async function getEnsName(client, { address, blockNumber, blockTag, universalResolverAddress: universalResolverAddress_ }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0, getChainContractAddress_js_1.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver'
        });
    }
    const reverseNode = `${address.toLowerCase().substring(2)}.addr.reverse`;
    try {
        const [name, resolvedAddress] = await (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract')({
            address: universalResolverAddress,
            abi: abis_js_1.universalResolverReverseAbi,
            functionName: 'reverse',
            args: [
                (0, toHex_js_1.toHex)((0, packetToBytes_js_1.packetToBytes)(reverseNode))
            ],
            blockNumber,
            blockTag
        });
        if (address.toLowerCase() !== resolvedAddress.toLowerCase()) return null;
        return name;
    } catch (err) {
        if ((0, errors_js_1.isNullUniversalResolverError)(err, 'reverse')) return null;
        throw err;
    }
}
exports.getEnsName = getEnsName; //# sourceMappingURL=getEnsName.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/ens/getEnsResolver.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnsResolver = void 0;
const getChainContractAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const packetToBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/packetToBytes.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
async function getEnsResolver(client, { blockNumber, blockTag, name, universalResolverAddress: universalResolverAddress_ }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = (0, getChainContractAddress_js_1.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver'
        });
    }
    const [resolverAddress] = await (0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract')({
        address: universalResolverAddress,
        abi: [
            {
                inputs: [
                    {
                        type: 'bytes'
                    }
                ],
                name: 'findResolver',
                outputs: [
                    {
                        type: 'address'
                    },
                    {
                        type: 'bytes32'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            }
        ],
        functionName: 'findResolver',
        args: [
            (0, toHex_js_1.toHex)((0, packetToBytes_js_1.packetToBytes)(name))
        ],
        blockNumber,
        blockTag
    });
    return resolverAddress;
}
exports.getEnsResolver = getEnsResolver; //# sourceMappingURL=getEnsResolver.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/createBlockFilter.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createBlockFilter = void 0;
const createFilterRequestScope_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-ssr] (ecmascript)");
async function createBlockFilter(client) {
    const getRequest = (0, createFilterRequestScope_js_1.createFilterRequestScope)(client, {
        method: 'eth_newBlockFilter'
    });
    const id = await client.request({
        method: 'eth_newBlockFilter'
    });
    return {
        id,
        request: getRequest(id),
        type: 'block'
    };
}
exports.createBlockFilter = createBlockFilter; //# sourceMappingURL=createBlockFilter.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/createEventFilter.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createEventFilter = void 0;
const encodeEventTopics_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const createFilterRequestScope_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-ssr] (ecmascript)");
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock } = {}) {
    const events = events_ ?? (event ? [
        event
    ] : undefined);
    const getRequest = (0, createFilterRequestScope_js_1.createFilterRequestScope)(client, {
        method: 'eth_newFilter'
    });
    let topics = [];
    if (events) {
        topics = [
            events.flatMap((event)=>(0, encodeEventTopics_js_1.encodeEventTopics)({
                    abi: [
                        event
                    ],
                    eventName: event.name,
                    args
                }))
        ];
        if (event) topics = topics[0];
    }
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0, toHex_js_1.numberToHex)(toBlock) : toBlock,
                ...topics.length ? {
                    topics
                } : {}
            }
        ]
    });
    return {
        abi: events,
        args,
        eventName: event ? event.name : undefined,
        fromBlock,
        id,
        request: getRequest(id),
        strict,
        toBlock,
        type: 'event'
    };
}
exports.createEventFilter = createEventFilter; //# sourceMappingURL=createEventFilter.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/createPendingTransactionFilter.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createPendingTransactionFilter = void 0;
const createFilterRequestScope_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/filters/createFilterRequestScope.js [app-ssr] (ecmascript)");
async function createPendingTransactionFilter(client) {
    const getRequest = (0, createFilterRequestScope_js_1.createFilterRequestScope)(client, {
        method: 'eth_newPendingTransactionFilter'
    });
    const id = await client.request({
        method: 'eth_newPendingTransactionFilter'
    });
    return {
        id,
        request: getRequest(id),
        type: 'transaction'
    };
}
exports.createPendingTransactionFilter = createPendingTransactionFilter; //# sourceMappingURL=createPendingTransactionFilter.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBalance.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBalance = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function getBalance(client, { address, blockNumber, blockTag = 'latest' }) {
    const blockNumberHex = blockNumber ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const balance = await client.request({
        method: 'eth_getBalance',
        params: [
            address,
            blockNumberHex || blockTag
        ]
    });
    return BigInt(balance);
}
exports.getBalance = getBalance; //# sourceMappingURL=getBalance.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlockTransactionCount.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlockTransactionCount = void 0;
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = 'latest' } = {}) {
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    let count;
    if (blockHash) {
        count = await client.request({
            method: 'eth_getBlockTransactionCountByHash',
            params: [
                blockHash
            ]
        });
    } else {
        count = await client.request({
            method: 'eth_getBlockTransactionCountByNumber',
            params: [
                blockNumberHex || blockTag
            ]
        });
    }
    return (0, fromHex_js_1.hexToNumber)(count);
}
exports.getBlockTransactionCount = getBlockTransactionCount; //# sourceMappingURL=getBlockTransactionCount.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBytecode.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBytecode = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function getBytecode(client, { address, blockNumber, blockTag = 'latest' }) {
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const hex = await client.request({
        method: 'eth_getCode',
        params: [
            address,
            blockNumberHex || blockTag
        ]
    });
    if (hex === '0x') return undefined;
    return hex;
}
exports.getBytecode = getBytecode; //# sourceMappingURL=getBytecode.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/feeHistory.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatFeeHistory = void 0;
function formatFeeHistory(feeHistory) {
    return {
        baseFeePerGas: feeHistory.baseFeePerGas.map((value)=>BigInt(value)),
        gasUsedRatio: feeHistory.gasUsedRatio,
        oldestBlock: BigInt(feeHistory.oldestBlock),
        reward: feeHistory.reward?.map((reward)=>reward.map((value)=>BigInt(value)))
    };
}
exports.formatFeeHistory = formatFeeHistory; //# sourceMappingURL=feeHistory.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getFeeHistory.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFeeHistory = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const feeHistory_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/feeHistory.js [app-ssr] (ecmascript)");
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = 'latest', rewardPercentiles }) {
    const blockNumberHex = blockNumber ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const feeHistory = await client.request({
        method: 'eth_feeHistory',
        params: [
            (0, toHex_js_1.numberToHex)(blockCount),
            blockNumberHex || blockTag,
            rewardPercentiles
        ]
    });
    return (0, feeHistory_js_1.formatFeeHistory)(feeHistory);
}
exports.getFeeHistory = getFeeHistory; //# sourceMappingURL=getFeeHistory.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getFilterLogs.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFilterLogs = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const decodeEventLog_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-ssr] (ecmascript)");
const log_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)");
async function getFilterLogs(_client, { filter }) {
    const strict = filter.strict ?? false;
    const logs = await filter.request({
        method: 'eth_getFilterLogs',
        params: [
            filter.id
        ]
    });
    return logs.map((log)=>{
        try {
            const { eventName, args } = 'abi' in filter && filter.abi ? (0, decodeEventLog_js_1.decodeEventLog)({
                abi: filter.abi,
                data: log.data,
                topics: log.topics,
                strict
            }) : {
                eventName: undefined,
                args: undefined
            };
            return (0, log_js_1.formatLog)(log, {
                args,
                eventName
            });
        } catch (err) {
            let eventName;
            let isUnnamed;
            if (err instanceof abi_js_1.DecodeLogDataMismatch || err instanceof abi_js_1.DecodeLogTopicsMismatch) {
                if ('strict' in filter && filter.strict) return;
                eventName = err.abiItem.name;
                isUnnamed = err.abiItem.inputs?.some((x)=>!('name' in x && x.name));
            }
            return (0, log_js_1.formatLog)(log, {
                args: isUnnamed ? [] : {},
                eventName
            });
        }
    }).filter(Boolean);
}
exports.getFilterLogs = getFilterLogs; //# sourceMappingURL=getFilterLogs.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineChain = void 0;
function defineChain(chain, config = {}) {
    const { fees = chain.fees, formatters = chain.formatters, serializers = chain.serializers } = config;
    return {
        ...chain,
        fees,
        formatters,
        serializers
    };
}
exports.defineChain = defineChain; //# sourceMappingURL=defineChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/extractChain.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extractChain = void 0;
function extractChain({ chains, id }) {
    return chains.find((chain)=>chain.id === id);
}
exports.extractChain = extractChain; //# sourceMappingURL=extractChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/regex.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.integerRegex = exports.bytesRegex = exports.arrayRegex = void 0;
exports.arrayRegex = /^(.*)\[([0-9]*)\]$/;
exports.bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
exports.integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/; //# sourceMappingURL=regex.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashDomain = exports.hashTypedData = void 0;
const encodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
const concat_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const keccak256_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-ssr] (ecmascript)");
const typedData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/typedData.js [app-ssr] (ecmascript)");
function hashTypedData({ domain: domain_, message, primaryType, types: types_ }) {
    const domain = typeof domain_ === 'undefined' ? {} : domain_;
    const types = {
        EIP712Domain: (0, typedData_js_1.getTypesForEIP712Domain)({
            domain
        }),
        ...types_
    };
    (0, typedData_js_1.validateTypedData)({
        domain,
        message,
        primaryType,
        types
    });
    const parts = [
        '0x1901'
    ];
    if (domain) parts.push(hashDomain({
        domain,
        types: types
    }));
    if (primaryType !== 'EIP712Domain') {
        parts.push(hashStruct({
            data: message,
            primaryType: primaryType,
            types: types
        }));
    }
    return (0, keccak256_js_1.keccak256)((0, concat_js_1.concat)(parts));
}
exports.hashTypedData = hashTypedData;
function hashDomain({ domain, types }) {
    return hashStruct({
        data: domain,
        primaryType: 'EIP712Domain',
        types
    });
}
exports.hashDomain = hashDomain;
function hashStruct({ data, primaryType, types }) {
    const encoded = encodeData({
        data,
        primaryType,
        types
    });
    return (0, keccak256_js_1.keccak256)(encoded);
}
function encodeData({ data, primaryType, types }) {
    const encodedTypes = [
        {
            type: 'bytes32'
        }
    ];
    const encodedValues = [
        hashType({
            primaryType,
            types
        })
    ];
    for (const field of types[primaryType]){
        const [type, value] = encodeField({
            types,
            name: field.name,
            type: field.type,
            value: data[field.name]
        });
        encodedTypes.push(type);
        encodedValues.push(value);
    }
    return (0, encodeAbiParameters_js_1.encodeAbiParameters)(encodedTypes, encodedValues);
}
function hashType({ primaryType, types }) {
    const encodedHashType = (0, toHex_js_1.toHex)(encodeType({
        primaryType,
        types
    }));
    return (0, keccak256_js_1.keccak256)(encodedHashType);
}
function encodeType({ primaryType, types }) {
    let result = '';
    const unsortedDeps = findTypeDependencies({
        primaryType,
        types
    });
    unsortedDeps.delete(primaryType);
    const deps = [
        primaryType,
        ...Array.from(unsortedDeps).sort()
    ];
    for (const type of deps){
        result += `${type}(${types[type].map(({ name, type: t })=>`${t} ${name}`).join(',')})`;
    }
    return result;
}
function findTypeDependencies({ primaryType: primaryType_, types }, results = new Set()) {
    const match = primaryType_.match(/^\w*/u);
    const primaryType = match?.[0];
    if (results.has(primaryType) || types[primaryType] === undefined) {
        return results;
    }
    results.add(primaryType);
    for (const field of types[primaryType]){
        findTypeDependencies({
            primaryType: field.type,
            types
        }, results);
    }
    return results;
}
function encodeField({ types, name, type, value }) {
    if (types[type] !== undefined) {
        return [
            {
                type: 'bytes32'
            },
            (0, keccak256_js_1.keccak256)(encodeData({
                data: value,
                primaryType: type,
                types
            }))
        ];
    }
    if (type === 'bytes') {
        const prepend = value.length % 2 ? '0' : '';
        value = `0x${prepend + value.slice(2)}`;
        return [
            {
                type: 'bytes32'
            },
            (0, keccak256_js_1.keccak256)(value)
        ];
    }
    if (type === 'string') return [
        {
            type: 'bytes32'
        },
        (0, keccak256_js_1.keccak256)((0, toHex_js_1.toHex)(value))
    ];
    if (type.lastIndexOf(']') === type.length - 1) {
        const parsedType = type.slice(0, type.lastIndexOf('['));
        const typeValuePairs = value.map((item)=>encodeField({
                name,
                type: parsedType,
                types,
                value: item
            }));
        return [
            {
                type: 'bytes32'
            },
            (0, keccak256_js_1.keccak256)((0, encodeAbiParameters_js_1.encodeAbiParameters)(typeValuePairs.map(([t])=>t), typeValuePairs.map(([, v])=>v)))
        ];
    }
    return [
        {
            type
        },
        value
    ];
} //# sourceMappingURL=hashTypedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/typedData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.domainSeparator = exports.getTypesForEIP712Domain = exports.validateTypedData = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const address_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/address.js [app-ssr] (ecmascript)");
const isAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-ssr] (ecmascript)");
const size_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/size.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const regex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/regex.js [app-ssr] (ecmascript)");
const hashTypedData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-ssr] (ecmascript)");
function validateTypedData({ domain, message, primaryType, types: types_ }) {
    const types = types_;
    const validateData = (struct, value_)=>{
        for (const param of struct){
            const { name, type: type_ } = param;
            const type = type_;
            const value = value_[name];
            const integerMatch = type.match(regex_js_1.integerRegex);
            if (integerMatch && (typeof value === 'number' || typeof value === 'bigint')) {
                const [_type, base, size_] = integerMatch;
                (0, toHex_js_1.numberToHex)(value, {
                    signed: base === 'int',
                    size: parseInt(size_) / 8
                });
            }
            if (type === 'address' && typeof value === 'string' && !(0, isAddress_js_1.isAddress)(value)) throw new address_js_1.InvalidAddressError({
                address: value
            });
            const bytesMatch = type.match(regex_js_1.bytesRegex);
            if (bytesMatch) {
                const [_type, size_] = bytesMatch;
                if (size_ && (0, size_js_1.size)(value) !== parseInt(size_)) throw new abi_js_1.BytesSizeMismatchError({
                    expectedSize: parseInt(size_),
                    givenSize: (0, size_js_1.size)(value)
                });
            }
            const struct = types[type];
            if (struct) validateData(struct, value);
        }
    };
    if (types.EIP712Domain && domain) validateData(types.EIP712Domain, domain);
    if (primaryType !== 'EIP712Domain') {
        const type = types[primaryType];
        validateData(type, message);
    }
}
exports.validateTypedData = validateTypedData;
function getTypesForEIP712Domain({ domain }) {
    return [
        typeof domain?.name === 'string' && {
            name: 'name',
            type: 'string'
        },
        domain?.version && {
            name: 'version',
            type: 'string'
        },
        typeof domain?.chainId === 'number' && {
            name: 'chainId',
            type: 'uint256'
        },
        domain?.verifyingContract && {
            name: 'verifyingContract',
            type: 'address'
        },
        domain?.salt && {
            name: 'salt',
            type: 'bytes32'
        }
    ].filter(Boolean);
}
exports.getTypesForEIP712Domain = getTypesForEIP712Domain;
function domainSeparator({ domain }) {
    return (0, hashTypedData_js_1.hashDomain)({
        domain,
        types: {
            EIP712Domain: getTypesForEIP712Domain({
                domain
            })
        }
    });
}
exports.domainSeparator = domainSeparator; //# sourceMappingURL=typedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeFunctionData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeFunctionData = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const slice_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/slice.js [app-ssr] (ecmascript)");
const getFunctionSelector_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getFunctionSelector.js [app-ssr] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-ssr] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-ssr] (ecmascript)");
function decodeFunctionData({ abi, data }) {
    const signature = (0, slice_js_1.slice)(data, 0, 4);
    const description = abi.find((x)=>x.type === 'function' && signature === (0, getFunctionSelector_js_1.getFunctionSelector)((0, formatAbiItem_js_1.formatAbiItem)(x)));
    if (!description) throw new abi_js_1.AbiFunctionSignatureNotFoundError(signature, {
        docsPath: '/docs/contract/decodeFunctionData'
    });
    return {
        functionName: description.name,
        args: 'inputs' in description && description.inputs && description.inputs.length > 0 ? (0, decodeAbiParameters_js_1.decodeAbiParameters)(description.inputs, (0, slice_js_1.slice)(data, 4)) : undefined
    };
}
exports.decodeFunctionData = decodeFunctionData; //# sourceMappingURL=decodeFunctionData.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeDeployData = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const concat_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
const docsPath = '/docs/contract/encodeDeployData';
function encodeDeployData({ abi, args, bytecode }) {
    if (!args || args.length === 0) return bytecode;
    const description = abi.find((x)=>'type' in x && x.type === 'constructor');
    if (!description) throw new abi_js_1.AbiConstructorNotFoundError({
        docsPath
    });
    if (!('inputs' in description)) throw new abi_js_1.AbiConstructorParamsNotFoundError({
        docsPath
    });
    if (!description.inputs || description.inputs.length === 0) throw new abi_js_1.AbiConstructorParamsNotFoundError({
        docsPath
    });
    const data = (0, encodeAbiParameters_js_1.encodeAbiParameters)(description.inputs, args);
    return (0, concat_js_1.concatHex)([
        bytecode,
        data
    ]);
}
exports.encodeDeployData = encodeDeployData; //# sourceMappingURL=encodeDeployData.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeErrorResult.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeErrorResult = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const concat_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
const getFunctionSelector_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getFunctionSelector.js [app-ssr] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
const formatAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-ssr] (ecmascript)");
const getAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
const docsPath = '/docs/contract/encodeErrorResult';
function encodeErrorResult({ abi, errorName, args }) {
    let abiItem = abi[0];
    if (errorName) {
        abiItem = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            args,
            name: errorName
        });
        if (!abiItem) throw new abi_js_1.AbiErrorNotFoundError(errorName, {
            docsPath
        });
    }
    if (abiItem.type !== 'error') throw new abi_js_1.AbiErrorNotFoundError(undefined, {
        docsPath
    });
    const definition = (0, formatAbiItem_js_1.formatAbiItem)(abiItem);
    const signature = (0, getFunctionSelector_js_1.getFunctionSelector)(definition);
    let data = '0x';
    if (args && args.length > 0) {
        if (!abiItem.inputs) throw new abi_js_1.AbiErrorInputsNotFoundError(abiItem.name, {
            docsPath
        });
        data = (0, encodeAbiParameters_js_1.encodeAbiParameters)(abiItem.inputs, args);
    }
    return (0, concat_js_1.concatHex)([
        signature,
        data
    ]);
}
exports.encodeErrorResult = encodeErrorResult; //# sourceMappingURL=encodeErrorResult.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeFunctionResult.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeFunctionResult = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const encodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
const getAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
const docsPath = '/docs/contract/encodeFunctionResult';
function encodeFunctionResult({ abi, functionName, result }) {
    let abiItem = abi[0];
    if (functionName) {
        abiItem = (0, getAbiItem_js_1.getAbiItem)({
            abi,
            name: functionName
        });
        if (!abiItem) throw new abi_js_1.AbiFunctionNotFoundError(functionName, {
            docsPath: '/docs/contract/encodeFunctionResult'
        });
    }
    if (abiItem.type !== 'function') throw new abi_js_1.AbiFunctionNotFoundError(undefined, {
        docsPath: '/docs/contract/encodeFunctionResult'
    });
    if (!abiItem.outputs) throw new abi_js_1.AbiFunctionOutputsNotFoundError(abiItem.name, {
        docsPath
    });
    let values = Array.isArray(result) ? result : [
        result
    ];
    if (abiItem.outputs.length === 0 && !values[0]) values = [];
    return (0, encodeAbiParameters_js_1.encodeAbiParameters)(abiItem.outputs, values);
}
exports.encodeFunctionResult = encodeFunctionResult; //# sourceMappingURL=encodeFunctionResult.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodePacked.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodePacked = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const address_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/address.js [app-ssr] (ecmascript)");
const isAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-ssr] (ecmascript)");
const concat_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
const pad_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/pad.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const regex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/regex.js [app-ssr] (ecmascript)");
function encodePacked(types, values) {
    if (types.length !== values.length) throw new abi_js_1.AbiEncodingLengthMismatchError({
        expectedLength: types.length,
        givenLength: values.length
    });
    const data = [];
    for(let i = 0; i < types.length; i++){
        const type = types[i];
        const value = values[i];
        data.push(encode(type, value));
    }
    return (0, concat_js_1.concatHex)(data);
}
exports.encodePacked = encodePacked;
function encode(type, value, isArray = false) {
    if (type === 'address') {
        const address = value;
        if (!(0, isAddress_js_1.isAddress)(address)) throw new address_js_1.InvalidAddressError({
            address
        });
        return (0, pad_js_1.pad)(address.toLowerCase(), {
            size: isArray ? 32 : null
        });
    }
    if (type === 'string') return (0, toHex_js_1.stringToHex)(value);
    if (type === 'bytes') return value;
    if (type === 'bool') return (0, pad_js_1.pad)((0, toHex_js_1.boolToHex)(value), {
        size: isArray ? 32 : 1
    });
    const intMatch = type.match(regex_js_1.integerRegex);
    if (intMatch) {
        const [_type, baseType, bits = '256'] = intMatch;
        const size = parseInt(bits) / 8;
        return (0, toHex_js_1.numberToHex)(value, {
            size: isArray ? 32 : size,
            signed: baseType === 'int'
        });
    }
    const bytesMatch = type.match(regex_js_1.bytesRegex);
    if (bytesMatch) {
        const [_type, size] = bytesMatch;
        if (parseInt(size) !== (value.length - 2) / 2) throw new abi_js_1.BytesSizeMismatchError({
            expectedSize: parseInt(size),
            givenSize: (value.length - 2) / 2
        });
        return (0, pad_js_1.pad)(value, {
            dir: 'right',
            size: isArray ? 32 : null
        });
    }
    const arrayMatch = type.match(regex_js_1.arrayRegex);
    if (arrayMatch && Array.isArray(value)) {
        const [_type, childType] = arrayMatch;
        const data = [];
        for(let i = 0; i < value.length; i++){
            data.push(encode(childType, value[i], true));
        }
        if (data.length === 0) return '0x';
        return (0, concat_js_1.concatHex)(data);
    }
    throw new abi_js_1.UnsupportedPackedAbiType(type);
} //# sourceMappingURL=encodePacked.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isBytes.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isBytes = void 0;
function isBytes(value) {
    if (!value) return false;
    if (typeof value !== 'object') return false;
    if (!('BYTES_PER_ELEMENT' in value)) return false;
    return value.BYTES_PER_ELEMENT === 1 && value.constructor.name === 'Uint8Array';
}
exports.isBytes = isBytes; //# sourceMappingURL=isBytes.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/cursor.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PositionOutOfBoundsError = exports.NegativeOffsetError = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
class NegativeOffsetError extends base_js_1.BaseError {
    constructor({ offset }){
        super(`Offset \`${offset}\` cannot be negative.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'NegativeOffsetError'
        });
    }
}
exports.NegativeOffsetError = NegativeOffsetError;
class PositionOutOfBoundsError extends base_js_1.BaseError {
    constructor({ length, position }){
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PositionOutOfBoundsError'
        });
    }
}
exports.PositionOutOfBoundsError = PositionOutOfBoundsError; //# sourceMappingURL=cursor.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/cursor.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCursor = void 0;
const cursor_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/cursor.js [app-ssr] (ecmascript)");
const staticCursor = {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    assertPosition (position) {
        if (position < 0 || position > this.bytes.length - 1) throw new cursor_js_1.PositionOutOfBoundsError({
            length: this.bytes.length,
            position
        });
    },
    decrementPosition (offset) {
        if (offset < 0) throw new cursor_js_1.NegativeOffsetError({
            offset
        });
        const position = this.position - offset;
        this.assertPosition(position);
        this.position = position;
    },
    incrementPosition (offset) {
        if (offset < 0) throw new cursor_js_1.NegativeOffsetError({
            offset
        });
        const position = this.position + offset;
        this.assertPosition(position);
        this.position = position;
    },
    inspectByte (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectBytes (length, position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + length - 1);
        return this.bytes.subarray(position, position + length);
    },
    inspectUint8 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectUint16 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 1);
        return this.dataView.getUint16(position);
    },
    inspectUint24 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 2);
        return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
    },
    inspectUint32 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 3);
        return this.dataView.getUint32(position);
    },
    pushByte (byte) {
        this.assertPosition(this.position);
        this.bytes[this.position] = byte;
        this.position++;
    },
    pushBytes (bytes) {
        this.assertPosition(this.position + bytes.length - 1);
        this.bytes.set(bytes, this.position);
        this.position += bytes.length;
    },
    pushUint8 (value) {
        this.assertPosition(this.position);
        this.bytes[this.position] = value;
        this.position++;
    },
    pushUint16 (value) {
        this.assertPosition(this.position + 1);
        this.dataView.setUint16(this.position, value);
        this.position += 2;
    },
    pushUint24 (value) {
        this.assertPosition(this.position + 2);
        this.dataView.setUint16(this.position, value >> 8);
        this.dataView.setUint8(this.position + 2, value & ~4294967040);
        this.position += 3;
    },
    pushUint32 (value) {
        this.assertPosition(this.position + 3);
        this.dataView.setUint32(this.position, value);
        this.position += 4;
    },
    readByte () {
        const value = this.inspectByte();
        this.position++;
        return value;
    },
    readBytes (length) {
        const value = this.inspectBytes(length);
        this.position += length;
        return value;
    },
    readUint8 () {
        const value = this.inspectUint8();
        this.position += 1;
        return value;
    },
    readUint16 () {
        const value = this.inspectUint16();
        this.position += 2;
        return value;
    },
    readUint24 () {
        const value = this.inspectUint24();
        this.position += 3;
        return value;
    },
    readUint32 () {
        const value = this.inspectUint32();
        this.position += 4;
        return value;
    },
    setPosition (position) {
        this.assertPosition(position);
        this.position = position;
    }
};
function createCursor(bytes) {
    const cursor = Object.create(staticCursor);
    cursor.bytes = bytes;
    cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    return cursor;
}
exports.createCursor = createCursor; //# sourceMappingURL=cursor.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hexToRlp = exports.bytesToRlp = exports.toRlp = void 0;
const index_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/index.js [app-ssr] (ecmascript)");
const cursor_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/cursor.js [app-ssr] (ecmascript)");
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
function toRlp(bytes, to = 'hex') {
    const encodable = getEncodable(bytes);
    const cursor = (0, cursor_js_1.createCursor)(new Uint8Array(encodable.length));
    encodable.encode(cursor);
    if (to === 'hex') return (0, toHex_js_1.bytesToHex)(cursor.bytes);
    return cursor.bytes;
}
exports.toRlp = toRlp;
function bytesToRlp(bytes, to = 'bytes') {
    return toRlp(bytes, to);
}
exports.bytesToRlp = bytesToRlp;
function hexToRlp(hex, to = 'hex') {
    return toRlp(hex, to);
}
exports.hexToRlp = hexToRlp;
function getEncodable(bytes) {
    if (Array.isArray(bytes)) return getEncodableList(bytes.map((x)=>getEncodable(x)));
    return getEncodableBytes(bytes);
}
function getEncodableList(list) {
    const bodyLength = list.reduce((acc, x)=>acc + x.length, 0);
    const sizeOfBodyLength = getSizeOfLength(bodyLength);
    const length = (()=>{
        if (bodyLength <= 55) return 1 + bodyLength;
        return 1 + sizeOfBodyLength + bodyLength;
    })();
    return {
        length,
        encode (cursor) {
            if (bodyLength <= 55) {
                cursor.pushByte(0xc0 + bodyLength);
            } else {
                cursor.pushByte(0xc0 + 55 + sizeOfBodyLength);
                if (sizeOfBodyLength === 1) cursor.pushUint8(bodyLength);
                else if (sizeOfBodyLength === 2) cursor.pushUint16(bodyLength);
                else if (sizeOfBodyLength === 3) cursor.pushUint24(bodyLength);
                else cursor.pushUint32(bodyLength);
            }
            for (const { encode } of list){
                encode(cursor);
            }
        }
    };
}
function getEncodableBytes(bytesOrHex) {
    const bytes = typeof bytesOrHex === 'string' ? (0, toBytes_js_1.hexToBytes)(bytesOrHex) : bytesOrHex;
    const sizeOfBytesLength = getSizeOfLength(bytes.length);
    const length = (()=>{
        if (bytes.length === 1 && bytes[0] < 0x80) return 1;
        if (bytes.length <= 55) return 1 + bytes.length;
        return 1 + sizeOfBytesLength + bytes.length;
    })();
    return {
        length,
        encode (cursor) {
            if (bytes.length === 1 && bytes[0] < 0x80) {
                cursor.pushBytes(bytes);
            } else if (bytes.length <= 55) {
                cursor.pushByte(0x80 + bytes.length);
                cursor.pushBytes(bytes);
            } else {
                cursor.pushByte(0x80 + 55 + sizeOfBytesLength);
                if (sizeOfBytesLength === 1) cursor.pushUint8(bytes.length);
                else if (sizeOfBytesLength === 2) cursor.pushUint16(bytes.length);
                else if (sizeOfBytesLength === 3) cursor.pushUint24(bytes.length);
                else cursor.pushUint32(bytes.length);
                cursor.pushBytes(bytes);
            }
        }
    };
}
function getSizeOfLength(length) {
    if (length < 2 ** 8) return 1;
    if (length < 2 ** 16) return 2;
    if (length < 2 ** 24) return 3;
    if (length < 2 ** 32) return 4;
    throw new index_js_1.BaseError('Length is too large.');
} //# sourceMappingURL=toRlp.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/getContractAddress.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCreate2Address = exports.getCreateAddress = exports.getContractAddress = void 0;
const concat_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
const isBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isBytes.js [app-ssr] (ecmascript)");
const pad_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/pad.js [app-ssr] (ecmascript)");
const slice_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/slice.js [app-ssr] (ecmascript)");
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const toRlp_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-ssr] (ecmascript)");
const keccak256_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-ssr] (ecmascript)");
const getAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-ssr] (ecmascript)");
function getContractAddress(opts) {
    if (opts.opcode === 'CREATE2') return getCreate2Address(opts);
    return getCreateAddress(opts);
}
exports.getContractAddress = getContractAddress;
function getCreateAddress(opts) {
    const from = (0, toBytes_js_1.toBytes)((0, getAddress_js_1.getAddress)(opts.from));
    let nonce = (0, toBytes_js_1.toBytes)(opts.nonce);
    if (nonce[0] === 0) nonce = new Uint8Array([]);
    return (0, getAddress_js_1.getAddress)(`0x${(0, keccak256_js_1.keccak256)((0, toRlp_js_1.toRlp)([
        from,
        nonce
    ], 'bytes')).slice(26)}`);
}
exports.getCreateAddress = getCreateAddress;
function getCreate2Address(opts) {
    const from = (0, toBytes_js_1.toBytes)((0, getAddress_js_1.getAddress)(opts.from));
    const salt = (0, pad_js_1.pad)((0, isBytes_js_1.isBytes)(opts.salt) ? opts.salt : (0, toBytes_js_1.toBytes)(opts.salt), {
        size: 32
    });
    const bytecodeHash = (()=>{
        if ('bytecodeHash' in opts) {
            if ((0, isBytes_js_1.isBytes)(opts.bytecodeHash)) return opts.bytecodeHash;
            return (0, toBytes_js_1.toBytes)(opts.bytecodeHash);
        }
        return (0, keccak256_js_1.keccak256)(opts.bytecode, 'bytes');
    })();
    return (0, getAddress_js_1.getAddress)((0, slice_js_1.slice)((0, keccak256_js_1.keccak256)((0, concat_js_1.concat)([
        (0, toBytes_js_1.toBytes)('0xff'),
        from,
        salt,
        bytecodeHash
    ])), 12));
}
exports.getCreate2Address = getCreate2Address; //# sourceMappingURL=getContractAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/contract/extractFunctionParts.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extractFunctionType = exports.extractFunctionParams = exports.extractFunctionName = exports.extractFunctionParts = void 0;
const paramsRegex = /((function|event)\s)?(.*)(\((.*)\))/;
function extractFunctionParts(def) {
    const parts = def.match(paramsRegex);
    const type = parts?.[2] || undefined;
    const name = parts?.[3];
    const params = parts?.[5] || undefined;
    return {
        type,
        name,
        params
    };
}
exports.extractFunctionParts = extractFunctionParts;
function extractFunctionName(def) {
    return extractFunctionParts(def).name;
}
exports.extractFunctionName = extractFunctionName;
function extractFunctionParams(def) {
    const params = extractFunctionParts(def).params;
    const splitParams = params?.split(',').map((x)=>x.trim().split(' '));
    return splitParams?.map((param)=>({
            type: param[0],
            name: param[1] === 'indexed' ? param[2] : param[1],
            ...param[1] === 'indexed' ? {
                indexed: true
            } : {}
        }));
}
exports.extractFunctionParams = extractFunctionParams;
function extractFunctionType(def) {
    return extractFunctionParts(def).type;
}
exports.extractFunctionType = extractFunctionType; //# sourceMappingURL=extractFunctionParts.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineTransactionReceipt = exports.formatTransactionReceipt = void 0;
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const formatter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/formatter.js [app-ssr] (ecmascript)");
const log_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)");
const transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-ssr] (ecmascript)");
const statuses = {
    '0x0': 'reverted',
    '0x1': 'success'
};
function formatTransactionReceipt(transactionReceipt) {
    return {
        ...transactionReceipt,
        blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
        contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
        cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
        effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
        gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
        logs: transactionReceipt.logs ? transactionReceipt.logs.map((log)=>(0, log_js_1.formatLog)(log)) : null,
        to: transactionReceipt.to ? transactionReceipt.to : null,
        transactionIndex: transactionReceipt.transactionIndex ? (0, fromHex_js_1.hexToNumber)(transactionReceipt.transactionIndex) : null,
        status: transactionReceipt.status ? statuses[transactionReceipt.status] : null,
        type: transactionReceipt.type ? transaction_js_1.transactionType[transactionReceipt.type] || transactionReceipt.type : null
    };
}
exports.formatTransactionReceipt = formatTransactionReceipt;
exports.defineTransactionReceipt = (0, formatter_js_1.defineFormatter)('transactionReceipt', formatTransactionReceipt); //# sourceMappingURL=transactionReceipt.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromBytes.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bytesToString = exports.bytesToNumber = exports.bytesToBool = exports.bytesToBigInt = exports.fromBytes = void 0;
const encoding_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/encoding.js [app-ssr] (ecmascript)");
const trim_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/trim.js [app-ssr] (ecmascript)");
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
function fromBytes(bytes, toOrOpts) {
    const opts = typeof toOrOpts === 'string' ? {
        to: toOrOpts
    } : toOrOpts;
    const to = opts.to;
    if (to === 'number') return bytesToNumber(bytes, opts);
    if (to === 'bigint') return bytesToBigInt(bytes, opts);
    if (to === 'boolean') return bytesToBool(bytes, opts);
    if (to === 'string') return bytesToString(bytes, opts);
    return (0, toHex_js_1.bytesToHex)(bytes, opts);
}
exports.fromBytes = fromBytes;
function bytesToBigInt(bytes, opts = {}) {
    if (typeof opts.size !== 'undefined') (0, fromHex_js_1.assertSize)(bytes, {
        size: opts.size
    });
    const hex = (0, toHex_js_1.bytesToHex)(bytes, opts);
    return (0, fromHex_js_1.hexToBigInt)(hex);
}
exports.bytesToBigInt = bytesToBigInt;
function bytesToBool(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== 'undefined') {
        (0, fromHex_js_1.assertSize)(bytes, {
            size: opts.size
        });
        bytes = (0, trim_js_1.trim)(bytes);
    }
    if (bytes.length > 1 || bytes[0] > 1) throw new encoding_js_1.InvalidBytesBooleanError(bytes);
    return Boolean(bytes[0]);
}
exports.bytesToBool = bytesToBool;
function bytesToNumber(bytes, opts = {}) {
    if (typeof opts.size !== 'undefined') (0, fromHex_js_1.assertSize)(bytes, {
        size: opts.size
    });
    const hex = (0, toHex_js_1.bytesToHex)(bytes, opts);
    return (0, fromHex_js_1.hexToNumber)(hex);
}
exports.bytesToNumber = bytesToNumber;
function bytesToString(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== 'undefined') {
        (0, fromHex_js_1.assertSize)(bytes, {
            size: opts.size
        });
        bytes = (0, trim_js_1.trim)(bytes, {
            dir: 'right'
        });
    }
    return new TextDecoder().decode(bytes);
}
exports.bytesToString = bytesToString; //# sourceMappingURL=fromBytes.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromRlp.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rlpToHex = exports.rlpToBytes = exports.fromRlp = void 0;
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const encoding_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/encoding.js [app-ssr] (ecmascript)");
const cursor_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/cursor.js [app-ssr] (ecmascript)");
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
function fromRlp(value, to = 'hex') {
    const bytes = (()=>{
        if (typeof value === 'string') {
            if (value.length > 3 && value.length % 2 !== 0) throw new encoding_js_1.InvalidHexValueError(value);
            return (0, toBytes_js_1.hexToBytes)(value);
        }
        return value;
    })();
    const cursor = (0, cursor_js_1.createCursor)(bytes);
    const result = fromRlpCursor(cursor, to);
    return result;
}
exports.fromRlp = fromRlp;
function rlpToBytes(bytes, to = 'bytes') {
    return fromRlp(bytes, to);
}
exports.rlpToBytes = rlpToBytes;
function rlpToHex(hex, to = 'hex') {
    return fromRlp(hex, to);
}
exports.rlpToHex = rlpToHex;
function fromRlpCursor(cursor, to = 'hex') {
    if (cursor.bytes.length === 0) return to === 'hex' ? (0, toHex_js_1.bytesToHex)(cursor.bytes) : cursor.bytes;
    const prefix = cursor.readByte();
    if (prefix < 0x80) cursor.decrementPosition(1);
    if (prefix < 0xc0) {
        const length = readLength(cursor, prefix, 0x80);
        const bytes = cursor.readBytes(length);
        return to === 'hex' ? (0, toHex_js_1.bytesToHex)(bytes) : bytes;
    }
    const length = readLength(cursor, prefix, 0xc0);
    return readList(cursor, length, to);
}
function readLength(cursor, prefix, offset) {
    if (offset === 0x80 && prefix < 0x80) return 1;
    if (prefix <= offset + 55) return prefix - offset;
    if (prefix === offset + 55 + 1) return cursor.readUint8();
    if (prefix === offset + 55 + 2) return cursor.readUint16();
    if (prefix === offset + 55 + 3) return cursor.readUint24();
    if (prefix === offset + 55 + 4) return cursor.readUint32();
    throw new base_js_1.BaseError('Invalid RLP prefix');
}
function readList(cursor, length, to) {
    const position = cursor.position;
    const value = [];
    while(cursor.position - position < length)value.push(fromRlpCursor(cursor, to));
    return value;
} //# sourceMappingURL=fromRlp.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/isHash.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isHash = void 0;
const isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
const size_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/size.js [app-ssr] (ecmascript)");
function isHash(hash) {
    return (0, isHex_js_1.isHex)(hash) && (0, size_js_1.size)(hash) === 32;
}
exports.isHash = isHash; //# sourceMappingURL=isHash.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/sha256.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha256 = void 0;
const sha256_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/sha256.js [app-ssr] (ecmascript)");
const isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
function sha256(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0, sha256_1.sha256)((0, isHex_js_1.isHex)(value, {
        strict: false
    }) ? (0, toBytes_js_1.toBytes)(value) : value);
    if (to === 'bytes') return bytes;
    return (0, toHex_js_1.toHex)(bytes);
}
exports.sha256 = sha256; //# sourceMappingURL=sha256.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/ripemd160.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ripemd160 = void 0;
const ripemd160_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/ripemd160.js [app-ssr] (ecmascript)");
const isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
function ripemd160(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0, ripemd160_1.ripemd160)((0, isHex_js_1.isHex)(value, {
        strict: false
    }) ? (0, toBytes_js_1.toBytes)(value) : value);
    if (to === 'bytes') return bytes;
    return (0, toHex_js_1.toHex)(bytes);
}
exports.ripemd160 = ripemd160; //# sourceMappingURL=ripemd160.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverPublicKey.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverPublicKey = void 0;
const isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function recoverPublicKey({ hash, signature }) {
    const signatureHex = (0, isHex_js_1.isHex)(signature) ? signature : (0, toHex_js_1.toHex)(signature);
    const hashHex = (0, isHex_js_1.isHex)(hash) ? hash : (0, toHex_js_1.toHex)(hash);
    let v = (0, fromHex_js_1.hexToNumber)(`0x${signatureHex.slice(130)}`);
    if (v === 0 || v === 1) v += 27;
    const { secp256k1 } = await Promise.resolve().then(()=>__turbopack_require__("[project]/node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/secp256k1.js [app-ssr] (ecmascript)"));
    const publicKey = secp256k1.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(v - 27).recoverPublicKey(hashHex.substring(2)).toHex(false);
    return `0x${publicKey}`;
}
exports.recoverPublicKey = recoverPublicKey; //# sourceMappingURL=recoverPublicKey.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverAddress = void 0;
const publicKeyToAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/publicKeyToAddress.js [app-ssr] (ecmascript)");
const recoverPublicKey_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverPublicKey.js [app-ssr] (ecmascript)");
async function recoverAddress({ hash, signature }) {
    return (0, publicKeyToAddress_js_1.publicKeyToAddress)(await (0, recoverPublicKey_js_1.recoverPublicKey)({
        hash: hash,
        signature
    }));
}
exports.recoverAddress = recoverAddress; //# sourceMappingURL=recoverAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/strings.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.presignMessagePrefix = void 0;
exports.presignMessagePrefix = '\x19Ethereum Signed Message:\n'; //# sourceMappingURL=strings.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashMessage = void 0;
const strings_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/strings.js [app-ssr] (ecmascript)");
const concat_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const keccak256_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-ssr] (ecmascript)");
function hashMessage(message, to_) {
    const messageBytes = (()=>{
        if (typeof message === 'string') return (0, toBytes_js_1.stringToBytes)(message);
        if (message.raw instanceof Uint8Array) return message.raw;
        return (0, toBytes_js_1.toBytes)(message.raw);
    })();
    const prefixBytes = (0, toBytes_js_1.stringToBytes)(`${strings_js_1.presignMessagePrefix}${messageBytes.length}`);
    return (0, keccak256_js_1.keccak256)((0, concat_js_1.concat)([
        prefixBytes,
        messageBytes
    ]), to_);
}
exports.hashMessage = hashMessage; //# sourceMappingURL=hashMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverMessageAddress.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverMessageAddress = void 0;
const hashMessage_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-ssr] (ecmascript)");
const recoverAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-ssr] (ecmascript)");
async function recoverMessageAddress({ message, signature }) {
    return (0, recoverAddress_js_1.recoverAddress)({
        hash: (0, hashMessage_js_1.hashMessage)(message),
        signature
    });
}
exports.recoverMessageAddress = recoverMessageAddress; //# sourceMappingURL=recoverMessageAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverTypedDataAddress.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverTypedDataAddress = void 0;
const hashTypedData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-ssr] (ecmascript)");
const recoverAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-ssr] (ecmascript)");
async function recoverTypedDataAddress({ domain, message, primaryType, signature, types }) {
    return (0, recoverAddress_js_1.recoverAddress)({
        hash: (0, hashTypedData_js_1.hashTypedData)({
            domain,
            message,
            primaryType,
            types
        }),
        signature
    });
}
exports.recoverTypedDataAddress = recoverTypedDataAddress; //# sourceMappingURL=recoverTypedDataAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/verifyMessage.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyMessage = void 0;
const getAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-ssr] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
const recoverMessageAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverMessageAddress.js [app-ssr] (ecmascript)");
async function verifyMessage({ address, message, signature }) {
    return (0, isAddressEqual_js_1.isAddressEqual)((0, getAddress_js_1.getAddress)(address), await (0, recoverMessageAddress_js_1.recoverMessageAddress)({
        message,
        signature
    }));
}
exports.verifyMessage = verifyMessage; //# sourceMappingURL=verifyMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/verifyTypedData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyTypedData = void 0;
const getAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-ssr] (ecmascript)");
const isAddressEqual_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
const recoverTypedDataAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverTypedDataAddress.js [app-ssr] (ecmascript)");
async function verifyTypedData({ address, domain, message, primaryType, signature, types }) {
    return (0, isAddressEqual_js_1.isAddressEqual)((0, getAddress_js_1.getAddress)(address), await (0, recoverTypedDataAddress_js_1.recoverTypedDataAddress)({
        domain,
        message,
        primaryType,
        signature,
        types
    }));
}
exports.verifyTypedData = verifyTypedData; //# sourceMappingURL=verifyTypedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/getSerializedTransactionType.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSerializedTransactionType = void 0;
const transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
const slice_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/slice.js [app-ssr] (ecmascript)");
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
function getSerializedTransactionType(serializedTransaction) {
    const serializedType = (0, slice_js_1.sliceHex)(serializedTransaction, 0, 1);
    if (serializedType === '0x02') return 'eip1559';
    if (serializedType === '0x01') return 'eip2930';
    if (serializedType !== '0x' && (0, fromHex_js_1.hexToNumber)(serializedType) >= 0xc0) return 'legacy';
    throw new transaction_js_1.InvalidSerializedTransactionTypeError({
        serializedType
    });
}
exports.getSerializedTransactionType = getSerializedTransactionType; //# sourceMappingURL=getSerializedTransactionType.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/assertTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertTransactionLegacy = exports.assertTransactionEIP2930 = exports.assertTransactionEIP1559 = void 0;
const address_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/address.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const chain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/chain.js [app-ssr] (ecmascript)");
const node_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/node.js [app-ssr] (ecmascript)");
const isAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-ssr] (ecmascript)");
function assertTransactionEIP1559(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
    if (chainId <= 0) throw new chain_js_1.InvalidChainIdError({
        chainId
    });
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (gasPrice) throw new base_js_1.BaseError('`gasPrice` is not a valid EIP-1559 Transaction attribute.');
    if (maxFeePerGas && maxFeePerGas > 2n ** 256n - 1n) throw new node_js_1.FeeCapTooHighError({
        maxFeePerGas
    });
    if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas) throw new node_js_1.TipAboveFeeCapError({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
}
exports.assertTransactionEIP1559 = assertTransactionEIP1559;
function assertTransactionEIP2930(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
    if (chainId <= 0) throw new chain_js_1.InvalidChainIdError({
        chainId
    });
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (maxPriorityFeePerGas || maxFeePerGas) throw new base_js_1.BaseError('`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.');
    if (gasPrice && gasPrice > 2n ** 256n - 1n) throw new node_js_1.FeeCapTooHighError({
        maxFeePerGas: gasPrice
    });
}
exports.assertTransactionEIP2930 = assertTransactionEIP2930;
function assertTransactionLegacy(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, accessList } = transaction;
    if (to && !(0, isAddress_js_1.isAddress)(to)) throw new address_js_1.InvalidAddressError({
        address: to
    });
    if (typeof chainId !== 'undefined' && chainId <= 0) throw new chain_js_1.InvalidChainIdError({
        chainId
    });
    if (maxPriorityFeePerGas || maxFeePerGas) throw new base_js_1.BaseError('`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.');
    if (gasPrice && gasPrice > 2n ** 256n - 1n) throw new node_js_1.FeeCapTooHighError({
        maxFeePerGas: gasPrice
    });
    if (accessList) throw new base_js_1.BaseError('`accessList` is not a valid Legacy Transaction attribute.');
}
exports.assertTransactionLegacy = assertTransactionLegacy; //# sourceMappingURL=assertTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/parseTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseAccessList = exports.toTransactionArray = exports.parseTransaction = void 0;
const address_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/address.js [app-ssr] (ecmascript)");
const transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
const isAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-ssr] (ecmascript)");
const isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
const pad_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/pad.js [app-ssr] (ecmascript)");
const trim_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/trim.js [app-ssr] (ecmascript)");
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const fromRlp_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromRlp.js [app-ssr] (ecmascript)");
const isHash_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/isHash.js [app-ssr] (ecmascript)");
const assertTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/assertTransaction.js [app-ssr] (ecmascript)");
const getSerializedTransactionType_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/getSerializedTransactionType.js [app-ssr] (ecmascript)");
function parseTransaction(serializedTransaction) {
    const type = (0, getSerializedTransactionType_js_1.getSerializedTransactionType)(serializedTransaction);
    if (type === 'eip1559') return parseTransactionEIP1559(serializedTransaction);
    if (type === 'eip2930') return parseTransactionEIP2930(serializedTransaction);
    return parseTransactionLegacy(serializedTransaction);
}
exports.parseTransaction = parseTransaction;
function parseTransactionEIP1559(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, v, r, s] = transactionArray;
    if (!(transactionArray.length === 9 || transactionArray.length === 12)) throw new transaction_js_1.InvalidSerializedTransactionError({
        attributes: {
            chainId,
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gas,
            to,
            value,
            data,
            accessList,
            ...transactionArray.length > 9 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip1559'
    });
    const transaction = {
        chainId: (0, fromHex_js_1.hexToNumber)(chainId),
        type: 'eip1559'
    };
    if ((0, isHex_js_1.isHex)(to) && to !== '0x') transaction.to = to;
    if ((0, isHex_js_1.isHex)(gas) && gas !== '0x') transaction.gas = (0, fromHex_js_1.hexToBigInt)(gas);
    if ((0, isHex_js_1.isHex)(data) && data !== '0x') transaction.data = data;
    if ((0, isHex_js_1.isHex)(nonce) && nonce !== '0x') transaction.nonce = (0, fromHex_js_1.hexToNumber)(nonce);
    if ((0, isHex_js_1.isHex)(value) && value !== '0x') transaction.value = (0, fromHex_js_1.hexToBigInt)(value);
    if ((0, isHex_js_1.isHex)(maxFeePerGas) && maxFeePerGas !== '0x') transaction.maxFeePerGas = (0, fromHex_js_1.hexToBigInt)(maxFeePerGas);
    if ((0, isHex_js_1.isHex)(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x') transaction.maxPriorityFeePerGas = (0, fromHex_js_1.hexToBigInt)(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    (0, assertTransaction_js_1.assertTransactionEIP1559)(transaction);
    const signature = transactionArray.length === 12 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionEIP2930(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, gasPrice, gas, to, value, data, accessList, v, r, s] = transactionArray;
    if (!(transactionArray.length === 8 || transactionArray.length === 11)) throw new transaction_js_1.InvalidSerializedTransactionError({
        attributes: {
            chainId,
            nonce,
            gasPrice,
            gas,
            to,
            value,
            data,
            accessList,
            ...transactionArray.length > 8 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip2930'
    });
    const transaction = {
        chainId: (0, fromHex_js_1.hexToNumber)(chainId),
        type: 'eip2930'
    };
    if ((0, isHex_js_1.isHex)(to) && to !== '0x') transaction.to = to;
    if ((0, isHex_js_1.isHex)(gas) && gas !== '0x') transaction.gas = (0, fromHex_js_1.hexToBigInt)(gas);
    if ((0, isHex_js_1.isHex)(data) && data !== '0x') transaction.data = data;
    if ((0, isHex_js_1.isHex)(nonce) && nonce !== '0x') transaction.nonce = (0, fromHex_js_1.hexToNumber)(nonce);
    if ((0, isHex_js_1.isHex)(value) && value !== '0x') transaction.value = (0, fromHex_js_1.hexToBigInt)(value);
    if ((0, isHex_js_1.isHex)(gasPrice) && gasPrice !== '0x') transaction.gasPrice = (0, fromHex_js_1.hexToBigInt)(gasPrice);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    (0, assertTransaction_js_1.assertTransactionEIP2930)(transaction);
    const signature = transactionArray.length === 11 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionLegacy(serializedTransaction) {
    const transactionArray = (0, fromRlp_js_1.fromRlp)(serializedTransaction, 'hex');
    const [nonce, gasPrice, gas, to, value, data, chainIdOrV_, r, s] = transactionArray;
    if (!(transactionArray.length === 6 || transactionArray.length === 9)) throw new transaction_js_1.InvalidSerializedTransactionError({
        attributes: {
            nonce,
            gasPrice,
            gas,
            to,
            value,
            data,
            ...transactionArray.length > 6 ? {
                v: chainIdOrV_,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'legacy'
    });
    const transaction = {
        type: 'legacy'
    };
    if ((0, isHex_js_1.isHex)(to) && to !== '0x') transaction.to = to;
    if ((0, isHex_js_1.isHex)(gas) && gas !== '0x') transaction.gas = (0, fromHex_js_1.hexToBigInt)(gas);
    if ((0, isHex_js_1.isHex)(data) && data !== '0x') transaction.data = data;
    if ((0, isHex_js_1.isHex)(nonce) && nonce !== '0x') transaction.nonce = (0, fromHex_js_1.hexToNumber)(nonce);
    if ((0, isHex_js_1.isHex)(value) && value !== '0x') transaction.value = (0, fromHex_js_1.hexToBigInt)(value);
    if ((0, isHex_js_1.isHex)(gasPrice) && gasPrice !== '0x') transaction.gasPrice = (0, fromHex_js_1.hexToBigInt)(gasPrice);
    (0, assertTransaction_js_1.assertTransactionLegacy)(transaction);
    if (transactionArray.length === 6) return transaction;
    const chainIdOrV = (0, isHex_js_1.isHex)(chainIdOrV_) && chainIdOrV_ !== '0x' ? (0, fromHex_js_1.hexToBigInt)(chainIdOrV_) : 0n;
    if (s === '0x' && r === '0x') {
        if (chainIdOrV > 0) transaction.chainId = Number(chainIdOrV);
        return transaction;
    }
    const v = chainIdOrV;
    const chainId = Number((v - 35n) / 2n);
    if (chainId > 0) transaction.chainId = chainId;
    else if (v !== 27n && v !== 28n) throw new transaction_js_1.InvalidLegacyVError({
        v
    });
    transaction.v = v;
    transaction.s = s;
    transaction.r = r;
    return transaction;
}
function toTransactionArray(serializedTransaction) {
    return (0, fromRlp_js_1.fromRlp)(`0x${serializedTransaction.slice(4)}`, 'hex');
}
exports.toTransactionArray = toTransactionArray;
function parseAccessList(accessList_) {
    const accessList = [];
    for(let i = 0; i < accessList_.length; i++){
        const [address, storageKeys] = accessList_[i];
        if (!(0, isAddress_js_1.isAddress)(address)) throw new address_js_1.InvalidAddressError({
            address
        });
        accessList.push({
            address: address,
            storageKeys: storageKeys.map((key)=>(0, isHash_js_1.isHash)(key) ? key : (0, trim_js_1.trim)(key))
        });
    }
    return accessList;
}
exports.parseAccessList = parseAccessList;
function parseEIP155Signature(transactionArray) {
    const signature = transactionArray.slice(-3);
    const v = signature[0] === '0x' || (0, fromHex_js_1.hexToBigInt)(signature[0]) === 0n ? 27n : 28n;
    return {
        r: (0, pad_js_1.padHex)(signature[1], {
            size: 32
        }),
        s: (0, pad_js_1.padHex)(signature[2], {
            size: 32
        }),
        v,
        yParity: v === 27n ? 0 : 1
    };
} //# sourceMappingURL=parseTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/serializeAccessList.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeAccessList = void 0;
const address_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/address.js [app-ssr] (ecmascript)");
const transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
const isAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-ssr] (ecmascript)");
function serializeAccessList(accessList) {
    if (!accessList || accessList.length === 0) return [];
    const serializedAccessList = [];
    for(let i = 0; i < accessList.length; i++){
        const { address, storageKeys } = accessList[i];
        for(let j = 0; j < storageKeys.length; j++){
            if (storageKeys[j].length - 2 !== 64) {
                throw new transaction_js_1.InvalidStorageKeySizeError({
                    storageKey: storageKeys[j]
                });
            }
        }
        if (!(0, isAddress_js_1.isAddress)(address)) {
            throw new address_js_1.InvalidAddressError({
                address
            });
        }
        serializedAccessList.push([
            address,
            storageKeys
        ]);
    }
    return serializedAccessList;
}
exports.serializeAccessList = serializeAccessList; //# sourceMappingURL=serializeAccessList.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeTransaction = void 0;
const transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
const concat_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
const trim_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/trim.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const toRlp_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-ssr] (ecmascript)");
const assertTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/assertTransaction.js [app-ssr] (ecmascript)");
const getTransactionType_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/getTransactionType.js [app-ssr] (ecmascript)");
const serializeAccessList_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/serializeAccessList.js [app-ssr] (ecmascript)");
function serializeTransaction(transaction, signature) {
    const type = (0, getTransactionType_js_1.getTransactionType)(transaction);
    if (type === 'eip1559') return serializeTransactionEIP1559(transaction, signature);
    if (type === 'eip2930') return serializeTransactionEIP2930(transaction, signature);
    return serializeTransactionLegacy(transaction, signature);
}
exports.serializeTransaction = serializeTransaction;
function serializeTransactionEIP1559(transaction, signature) {
    const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
    (0, assertTransaction_js_1.assertTransactionEIP1559)(transaction);
    const serializedAccessList = (0, serializeAccessList_js_1.serializeAccessList)(accessList);
    const serializedTransaction = [
        (0, toHex_js_1.toHex)(chainId),
        nonce ? (0, toHex_js_1.toHex)(nonce) : '0x',
        maxPriorityFeePerGas ? (0, toHex_js_1.toHex)(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, toHex_js_1.toHex)(maxFeePerGas) : '0x',
        gas ? (0, toHex_js_1.toHex)(gas) : '0x',
        to ?? '0x',
        value ? (0, toHex_js_1.toHex)(value) : '0x',
        data ?? '0x',
        serializedAccessList
    ];
    if (signature) {
        const yParity = (()=>{
            if (signature.v === 0n) return '0x';
            if (signature.v === 1n) return (0, toHex_js_1.toHex)(1);
            return signature.v === 27n ? '0x' : (0, toHex_js_1.toHex)(1);
        })();
        serializedTransaction.push(yParity, (0, trim_js_1.trim)(signature.r), (0, trim_js_1.trim)(signature.s));
    }
    return (0, concat_js_1.concatHex)([
        '0x02',
        (0, toRlp_js_1.toRlp)(serializedTransaction)
    ]);
}
function serializeTransactionEIP2930(transaction, signature) {
    const { chainId, gas, data, nonce, to, value, accessList, gasPrice } = transaction;
    (0, assertTransaction_js_1.assertTransactionEIP2930)(transaction);
    const serializedAccessList = (0, serializeAccessList_js_1.serializeAccessList)(accessList);
    const serializedTransaction = [
        (0, toHex_js_1.toHex)(chainId),
        nonce ? (0, toHex_js_1.toHex)(nonce) : '0x',
        gasPrice ? (0, toHex_js_1.toHex)(gasPrice) : '0x',
        gas ? (0, toHex_js_1.toHex)(gas) : '0x',
        to ?? '0x',
        value ? (0, toHex_js_1.toHex)(value) : '0x',
        data ?? '0x',
        serializedAccessList
    ];
    if (signature) {
        const yParity = (()=>{
            if (signature.v === 0n) return '0x';
            if (signature.v === 1n) return (0, toHex_js_1.toHex)(1);
            return signature.v === 27n ? '0x' : (0, toHex_js_1.toHex)(1);
        })();
        serializedTransaction.push(yParity, (0, trim_js_1.trim)(signature.r), (0, trim_js_1.trim)(signature.s));
    }
    return (0, concat_js_1.concatHex)([
        '0x01',
        (0, toRlp_js_1.toRlp)(serializedTransaction)
    ]);
}
function serializeTransactionLegacy(transaction, signature) {
    const { chainId = 0, gas, data, nonce, to, value, gasPrice } = transaction;
    (0, assertTransaction_js_1.assertTransactionLegacy)(transaction);
    let serializedTransaction = [
        nonce ? (0, toHex_js_1.toHex)(nonce) : '0x',
        gasPrice ? (0, toHex_js_1.toHex)(gasPrice) : '0x',
        gas ? (0, toHex_js_1.toHex)(gas) : '0x',
        to ?? '0x',
        value ? (0, toHex_js_1.toHex)(value) : '0x',
        data ?? '0x'
    ];
    if (signature) {
        const v = (()=>{
            if (chainId > 0) return BigInt(chainId * 2) + BigInt(35n + signature.v - 27n);
            if (signature.v >= 35n) {
                const inferredChainId = (signature.v - 35n) / 2n;
                if (inferredChainId > 0) return signature.v;
                return 27n + (signature.v === 35n ? 0n : 1n);
            }
            const v = 27n + (signature.v === 27n ? 0n : 1n);
            if (signature.v !== v) throw new transaction_js_1.InvalidLegacyVError({
                v: signature.v
            });
            return v;
        })();
        serializedTransaction = [
            ...serializedTransaction,
            (0, toHex_js_1.toHex)(v),
            signature.r,
            signature.s
        ];
    } else if (chainId > 0) {
        serializedTransaction = [
            ...serializedTransaction,
            (0, toHex_js_1.toHex)(chainId),
            '0x',
            '0x'
        ];
    }
    return (0, toRlp_js_1.toRlp)(serializedTransaction);
} //# sourceMappingURL=serializeTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseUnits = void 0;
function parseUnits(value, decimals) {
    let [integer, fraction = '0'] = value.split('.');
    const negative = integer.startsWith('-');
    if (negative) integer = integer.slice(1);
    fraction = fraction.replace(/(0+)$/, '');
    if (decimals === 0) {
        if (Math.round(Number(`.${fraction}`)) === 1) integer = `${BigInt(integer) + 1n}`;
        fraction = '';
    } else if (fraction.length > decimals) {
        const [left, unit, right] = [
            fraction.slice(0, decimals - 1),
            fraction.slice(decimals - 1, decimals),
            fraction.slice(decimals)
        ];
        const rounded = Math.round(Number(`${unit}.${right}`));
        if (rounded > 9) fraction = `${BigInt(left) + BigInt(1)}0`.padStart(left.length + 1, '0');
        else fraction = `${left}${rounded}`;
        if (fraction.length > decimals) {
            fraction = fraction.slice(1);
            integer = `${BigInt(integer) + 1n}`;
        }
        fraction = fraction.slice(0, decimals);
    } else {
        fraction = fraction.padEnd(decimals, '0');
    }
    return BigInt(`${negative ? '-' : ''}${integer}${fraction}`);
}
exports.parseUnits = parseUnits; //# sourceMappingURL=parseUnits.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/parseEther.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseEther = void 0;
const unit_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/unit.js [app-ssr] (ecmascript)");
const parseUnits_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-ssr] (ecmascript)");
function parseEther(ether, unit = 'wei') {
    return (0, parseUnits_js_1.parseUnits)(ether, unit_js_1.etherUnits[unit]);
}
exports.parseEther = parseEther; //# sourceMappingURL=parseEther.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/parseGwei.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseGwei = void 0;
const unit_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/unit.js [app-ssr] (ecmascript)");
const parseUnits_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-ssr] (ecmascript)");
function parseGwei(ether, unit = 'wei') {
    return (0, parseUnits_js_1.parseUnits)(ether, unit_js_1.gweiUnits[unit]);
}
exports.parseGwei = parseGwei; //# sourceMappingURL=parseGwei.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concat = exports.extractFunctionParts = exports.extractFunctionType = exports.extractFunctionParams = exports.extractFunctionName = exports.isAddressEqual = exports.isAddress = exports.getAddress = exports.getCreate2Address = exports.getCreateAddress = exports.getContractAddress = exports.publicKeyToAddress = exports.parseAccount = exports.formatAbiParams = exports.formatAbiItem = exports.formatAbiItemWithArgs = exports.encodePacked = exports.parseAbiParameters = exports.parseAbiParameter = exports.parseAbiItem = exports.parseAbi = exports.getAbiItem = exports.encodeFunctionResult = exports.encodeFunctionData = exports.encodeEventTopics = exports.encodeErrorResult = exports.encodeDeployData = exports.encodeAbiParameters = exports.decodeFunctionResult = exports.decodeFunctionData = exports.decodeEventLog = exports.decodeErrorResult = exports.decodeAbiParameters = exports.validateTypedData = exports.stringify = exports.rpc = exports.getSocket = exports.integerRegex = exports.bytesRegex = exports.arrayRegex = exports.getChainContractAddress = exports.extractChain = exports.defineChain = exports.assertCurrentChain = exports.offchainLookupSignature = exports.offchainLookupAbiItem = exports.offchainLookup = exports.ccipFetch = exports.buildRequest = exports.isDeterministicError = void 0;
exports.getEstimateGasError = exports.getContractError = exports.getCallError = exports.getNodeError = exports.containsNodeError = exports.fromRlp = exports.hexToString = exports.hexToNumber = exports.hexToBigInt = exports.hexToBool = exports.fromHex = exports.fromBytes = exports.bytesToString = exports.bytesToNumber = exports.bytesToBool = exports.bytesToBigint = exports.bytesToBigInt = exports.stringToHex = exports.numberToHex = exports.toHex = exports.bytesToHex = exports.boolToHex = exports.stringToBytes = exports.numberToBytes = exports.hexToBytes = exports.toBytes = exports.boolToBytes = exports.toRlp = exports.extract = exports.formatTransactionRequest = exports.defineTransactionRequest = exports.defineTransactionReceipt = exports.formatLog = exports.transactionType = exports.formatTransaction = exports.defineTransaction = exports.formatBlock = exports.defineBlock = exports.trim = exports.sliceHex = exports.sliceBytes = exports.slice = exports.size = exports.padHex = exports.padBytes = exports.pad = exports.isHex = exports.isBytes = exports.concatHex = exports.concatBytes = void 0;
exports.parseGwei = exports.parseEther = exports.parseUnits = exports.formatUnits = exports.formatGwei = exports.formatEther = exports.serializeAccessList = exports.serializeTransaction = exports.prepareTransactionRequest = exports.parseTransaction = exports.assertTransactionLegacy = exports.assertTransactionEIP2930 = exports.assertTransactionEIP1559 = exports.assertRequest = exports.getTransactionType = exports.getSerializedTransactionType = exports.hashMessage = exports.verifyTypedData = exports.verifyMessage = exports.recoverTypedDataAddress = exports.recoverPublicKey = exports.recoverMessageAddress = exports.recoverAddress = exports.hashTypedData = exports.ripemd160 = exports.sha256 = exports.keccak256 = exports.isHash = exports.getFunctionSelector = exports.getEventSelector = exports.defineFormatter = exports.getTransactionError = void 0;
var buildRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/buildRequest.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "isDeterministicError", {
    enumerable: true,
    get: function() {
        return buildRequest_js_1.isDeterministicError;
    }
});
Object.defineProperty(exports, "buildRequest", {
    enumerable: true,
    get: function() {
        return buildRequest_js_1.buildRequest;
    }
});
var ccip_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ccip.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "ccipFetch", {
    enumerable: true,
    get: function() {
        return ccip_js_1.ccipFetch;
    }
});
Object.defineProperty(exports, "offchainLookup", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookup;
    }
});
Object.defineProperty(exports, "offchainLookupAbiItem", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookupAbiItem;
    }
});
Object.defineProperty(exports, "offchainLookupSignature", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookupSignature;
    }
});
var assertCurrentChain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "assertCurrentChain", {
    enumerable: true,
    get: function() {
        return assertCurrentChain_js_1.assertCurrentChain;
    }
});
var defineChain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "defineChain", {
    enumerable: true,
    get: function() {
        return defineChain_js_1.defineChain;
    }
});
var extractChain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/extractChain.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "extractChain", {
    enumerable: true,
    get: function() {
        return extractChain_js_1.extractChain;
    }
});
var getChainContractAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getChainContractAddress", {
    enumerable: true,
    get: function() {
        return getChainContractAddress_js_1.getChainContractAddress;
    }
});
var regex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/regex.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "arrayRegex", {
    enumerable: true,
    get: function() {
        return regex_js_1.arrayRegex;
    }
});
Object.defineProperty(exports, "bytesRegex", {
    enumerable: true,
    get: function() {
        return regex_js_1.bytesRegex;
    }
});
Object.defineProperty(exports, "integerRegex", {
    enumerable: true,
    get: function() {
        return regex_js_1.integerRegex;
    }
});
var rpc_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/rpc.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getSocket", {
    enumerable: true,
    get: function() {
        return rpc_js_1.getSocket;
    }
});
Object.defineProperty(exports, "rpc", {
    enumerable: true,
    get: function() {
        return rpc_js_1.rpc;
    }
});
var stringify_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "stringify", {
    enumerable: true,
    get: function() {
        return stringify_js_1.stringify;
    }
});
var typedData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/typedData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "validateTypedData", {
    enumerable: true,
    get: function() {
        return typedData_js_1.validateTypedData;
    }
});
var decodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "decodeAbiParameters", {
    enumerable: true,
    get: function() {
        return decodeAbiParameters_js_1.decodeAbiParameters;
    }
});
var decodeErrorResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "decodeErrorResult", {
    enumerable: true,
    get: function() {
        return decodeErrorResult_js_1.decodeErrorResult;
    }
});
var decodeEventLog_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "decodeEventLog", {
    enumerable: true,
    get: function() {
        return decodeEventLog_js_1.decodeEventLog;
    }
});
var decodeFunctionData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeFunctionData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "decodeFunctionData", {
    enumerable: true,
    get: function() {
        return decodeFunctionData_js_1.decodeFunctionData;
    }
});
var decodeFunctionResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "decodeFunctionResult", {
    enumerable: true,
    get: function() {
        return decodeFunctionResult_js_1.decodeFunctionResult;
    }
});
var encodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "encodeAbiParameters", {
    enumerable: true,
    get: function() {
        return encodeAbiParameters_js_1.encodeAbiParameters;
    }
});
var encodeDeployData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "encodeDeployData", {
    enumerable: true,
    get: function() {
        return encodeDeployData_js_1.encodeDeployData;
    }
});
var encodeErrorResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeErrorResult.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "encodeErrorResult", {
    enumerable: true,
    get: function() {
        return encodeErrorResult_js_1.encodeErrorResult;
    }
});
var encodeEventTopics_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "encodeEventTopics", {
    enumerable: true,
    get: function() {
        return encodeEventTopics_js_1.encodeEventTopics;
    }
});
var encodeFunctionData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "encodeFunctionData", {
    enumerable: true,
    get: function() {
        return encodeFunctionData_js_1.encodeFunctionData;
    }
});
var encodeFunctionResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeFunctionResult.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "encodeFunctionResult", {
    enumerable: true,
    get: function() {
        return encodeFunctionResult_js_1.encodeFunctionResult;
    }
});
var getAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getAbiItem", {
    enumerable: true,
    get: function() {
        return getAbiItem_js_1.getAbiItem;
    }
});
var abitype_1 = __turbopack_require__("[project]/node_modules/.pnpm/abitype@0.9.8_typescript@5.7.3/node_modules/abitype/dist/cjs/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "parseAbi", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbi;
    }
});
Object.defineProperty(exports, "parseAbiItem", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiItem;
    }
});
Object.defineProperty(exports, "parseAbiParameter", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiParameter;
    }
});
Object.defineProperty(exports, "parseAbiParameters", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiParameters;
    }
});
var encodePacked_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodePacked.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "encodePacked", {
    enumerable: true,
    get: function() {
        return encodePacked_js_1.encodePacked;
    }
});
var formatAbiItemWithArgs_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/formatAbiItemWithArgs.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "formatAbiItemWithArgs", {
    enumerable: true,
    get: function() {
        return formatAbiItemWithArgs_js_1.formatAbiItemWithArgs;
    }
});
var formatAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/formatAbiItem.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "formatAbiItem", {
    enumerable: true,
    get: function() {
        return formatAbiItem_js_1.formatAbiItem;
    }
});
Object.defineProperty(exports, "formatAbiParams", {
    enumerable: true,
    get: function() {
        return formatAbiItem_js_1.formatAbiParams;
    }
});
var parseAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "parseAccount", {
    enumerable: true,
    get: function() {
        return parseAccount_js_1.parseAccount;
    }
});
var publicKeyToAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/publicKeyToAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "publicKeyToAddress", {
    enumerable: true,
    get: function() {
        return publicKeyToAddress_js_1.publicKeyToAddress;
    }
});
var getContractAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/getContractAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getContractAddress", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getContractAddress;
    }
});
Object.defineProperty(exports, "getCreateAddress", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getCreateAddress;
    }
});
Object.defineProperty(exports, "getCreate2Address", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getCreate2Address;
    }
});
var getAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getAddress", {
    enumerable: true,
    get: function() {
        return getAddress_js_1.getAddress;
    }
});
var isAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "isAddress", {
    enumerable: true,
    get: function() {
        return isAddress_js_1.isAddress;
    }
});
var isAddressEqual_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "isAddressEqual", {
    enumerable: true,
    get: function() {
        return isAddressEqual_js_1.isAddressEqual;
    }
});
var extractFunctionParts_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/contract/extractFunctionParts.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "extractFunctionName", {
    enumerable: true,
    get: function() {
        return extractFunctionParts_js_1.extractFunctionName;
    }
});
Object.defineProperty(exports, "extractFunctionParams", {
    enumerable: true,
    get: function() {
        return extractFunctionParts_js_1.extractFunctionParams;
    }
});
Object.defineProperty(exports, "extractFunctionType", {
    enumerable: true,
    get: function() {
        return extractFunctionParts_js_1.extractFunctionType;
    }
});
Object.defineProperty(exports, "extractFunctionParts", {
    enumerable: true,
    get: function() {
        return extractFunctionParts_js_1.extractFunctionParts;
    }
});
var concat_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "concat", {
    enumerable: true,
    get: function() {
        return concat_js_1.concat;
    }
});
Object.defineProperty(exports, "concatBytes", {
    enumerable: true,
    get: function() {
        return concat_js_1.concatBytes;
    }
});
Object.defineProperty(exports, "concatHex", {
    enumerable: true,
    get: function() {
        return concat_js_1.concatHex;
    }
});
var isBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isBytes.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "isBytes", {
    enumerable: true,
    get: function() {
        return isBytes_js_1.isBytes;
    }
});
var isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "isHex", {
    enumerable: true,
    get: function() {
        return isHex_js_1.isHex;
    }
});
var pad_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/pad.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "pad", {
    enumerable: true,
    get: function() {
        return pad_js_1.pad;
    }
});
Object.defineProperty(exports, "padBytes", {
    enumerable: true,
    get: function() {
        return pad_js_1.padBytes;
    }
});
Object.defineProperty(exports, "padHex", {
    enumerable: true,
    get: function() {
        return pad_js_1.padHex;
    }
});
var size_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/size.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "size", {
    enumerable: true,
    get: function() {
        return size_js_1.size;
    }
});
var slice_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/slice.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "slice", {
    enumerable: true,
    get: function() {
        return slice_js_1.slice;
    }
});
Object.defineProperty(exports, "sliceBytes", {
    enumerable: true,
    get: function() {
        return slice_js_1.sliceBytes;
    }
});
Object.defineProperty(exports, "sliceHex", {
    enumerable: true,
    get: function() {
        return slice_js_1.sliceHex;
    }
});
var trim_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/trim.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "trim", {
    enumerable: true,
    get: function() {
        return trim_js_1.trim;
    }
});
var block_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/block.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "defineBlock", {
    enumerable: true,
    get: function() {
        return block_js_1.defineBlock;
    }
});
Object.defineProperty(exports, "formatBlock", {
    enumerable: true,
    get: function() {
        return block_js_1.formatBlock;
    }
});
var transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "defineTransaction", {
    enumerable: true,
    get: function() {
        return transaction_js_1.defineTransaction;
    }
});
Object.defineProperty(exports, "formatTransaction", {
    enumerable: true,
    get: function() {
        return transaction_js_1.formatTransaction;
    }
});
Object.defineProperty(exports, "transactionType", {
    enumerable: true,
    get: function() {
        return transaction_js_1.transactionType;
    }
});
var log_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "formatLog", {
    enumerable: true,
    get: function() {
        return log_js_1.formatLog;
    }
});
var transactionReceipt_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "defineTransactionReceipt", {
    enumerable: true,
    get: function() {
        return transactionReceipt_js_1.defineTransactionReceipt;
    }
});
var transactionRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "defineTransactionRequest", {
    enumerable: true,
    get: function() {
        return transactionRequest_js_1.defineTransactionRequest;
    }
});
Object.defineProperty(exports, "formatTransactionRequest", {
    enumerable: true,
    get: function() {
        return transactionRequest_js_1.formatTransactionRequest;
    }
});
var extract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/extract.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "extract", {
    enumerable: true,
    get: function() {
        return extract_js_1.extract;
    }
});
var toRlp_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "toRlp", {
    enumerable: true,
    get: function() {
        return toRlp_js_1.toRlp;
    }
});
var toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "boolToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.boolToBytes;
    }
});
Object.defineProperty(exports, "toBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.toBytes;
    }
});
Object.defineProperty(exports, "hexToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.hexToBytes;
    }
});
Object.defineProperty(exports, "numberToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.numberToBytes;
    }
});
Object.defineProperty(exports, "stringToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.stringToBytes;
    }
});
var toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "boolToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.boolToHex;
    }
});
Object.defineProperty(exports, "bytesToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.bytesToHex;
    }
});
Object.defineProperty(exports, "toHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.toHex;
    }
});
Object.defineProperty(exports, "numberToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.numberToHex;
    }
});
Object.defineProperty(exports, "stringToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.stringToHex;
    }
});
var fromBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromBytes.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "bytesToBigInt", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToBigInt;
    }
});
Object.defineProperty(exports, "bytesToBigint", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToBigInt;
    }
});
Object.defineProperty(exports, "bytesToBool", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToBool;
    }
});
Object.defineProperty(exports, "bytesToNumber", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToNumber;
    }
});
Object.defineProperty(exports, "bytesToString", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToString;
    }
});
Object.defineProperty(exports, "fromBytes", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.fromBytes;
    }
});
var fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "fromHex", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.fromHex;
    }
});
Object.defineProperty(exports, "hexToBool", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToBool;
    }
});
Object.defineProperty(exports, "hexToBigInt", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToBigInt;
    }
});
Object.defineProperty(exports, "hexToNumber", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToNumber;
    }
});
Object.defineProperty(exports, "hexToString", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToString;
    }
});
var fromRlp_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromRlp.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "fromRlp", {
    enumerable: true,
    get: function() {
        return fromRlp_js_1.fromRlp;
    }
});
var getNodeError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getNodeError.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "containsNodeError", {
    enumerable: true,
    get: function() {
        return getNodeError_js_1.containsNodeError;
    }
});
Object.defineProperty(exports, "getNodeError", {
    enumerable: true,
    get: function() {
        return getNodeError_js_1.getNodeError;
    }
});
var getCallError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getCallError.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getCallError", {
    enumerable: true,
    get: function() {
        return getCallError_js_1.getCallError;
    }
});
var getContractError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getContractError", {
    enumerable: true,
    get: function() {
        return getContractError_js_1.getContractError;
    }
});
var getEstimateGasError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getEstimateGasError.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getEstimateGasError", {
    enumerable: true,
    get: function() {
        return getEstimateGasError_js_1.getEstimateGasError;
    }
});
var getTransactionError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getTransactionError.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getTransactionError", {
    enumerable: true,
    get: function() {
        return getTransactionError_js_1.getTransactionError;
    }
});
var formatter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/formatter.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "defineFormatter", {
    enumerable: true,
    get: function() {
        return formatter_js_1.defineFormatter;
    }
});
var getEventSelector_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getEventSelector.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getEventSelector", {
    enumerable: true,
    get: function() {
        return getEventSelector_js_1.getEventSelector;
    }
});
var getFunctionSelector_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getFunctionSelector.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getFunctionSelector", {
    enumerable: true,
    get: function() {
        return getFunctionSelector_js_1.getFunctionSelector;
    }
});
var isHash_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/isHash.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "isHash", {
    enumerable: true,
    get: function() {
        return isHash_js_1.isHash;
    }
});
var keccak256_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "keccak256", {
    enumerable: true,
    get: function() {
        return keccak256_js_1.keccak256;
    }
});
var sha256_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/sha256.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "sha256", {
    enumerable: true,
    get: function() {
        return sha256_js_1.sha256;
    }
});
var ripemd160_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/ripemd160.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "ripemd160", {
    enumerable: true,
    get: function() {
        return ripemd160_js_1.ripemd160;
    }
});
var hashTypedData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "hashTypedData", {
    enumerable: true,
    get: function() {
        return hashTypedData_js_1.hashTypedData;
    }
});
var recoverAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "recoverAddress", {
    enumerable: true,
    get: function() {
        return recoverAddress_js_1.recoverAddress;
    }
});
var recoverMessageAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverMessageAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "recoverMessageAddress", {
    enumerable: true,
    get: function() {
        return recoverMessageAddress_js_1.recoverMessageAddress;
    }
});
var recoverPublicKey_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverPublicKey.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "recoverPublicKey", {
    enumerable: true,
    get: function() {
        return recoverPublicKey_js_1.recoverPublicKey;
    }
});
var recoverTypedDataAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverTypedDataAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "recoverTypedDataAddress", {
    enumerable: true,
    get: function() {
        return recoverTypedDataAddress_js_1.recoverTypedDataAddress;
    }
});
var verifyMessage_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/verifyMessage.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "verifyMessage", {
    enumerable: true,
    get: function() {
        return verifyMessage_js_1.verifyMessage;
    }
});
var verifyTypedData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/verifyTypedData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "verifyTypedData", {
    enumerable: true,
    get: function() {
        return verifyTypedData_js_1.verifyTypedData;
    }
});
var hashMessage_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "hashMessage", {
    enumerable: true,
    get: function() {
        return hashMessage_js_1.hashMessage;
    }
});
var getSerializedTransactionType_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/getSerializedTransactionType.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getSerializedTransactionType", {
    enumerable: true,
    get: function() {
        return getSerializedTransactionType_js_1.getSerializedTransactionType;
    }
});
var getTransactionType_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/getTransactionType.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getTransactionType", {
    enumerable: true,
    get: function() {
        return getTransactionType_js_1.getTransactionType;
    }
});
var assertRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "assertRequest", {
    enumerable: true,
    get: function() {
        return assertRequest_js_1.assertRequest;
    }
});
var assertTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/assertTransaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "assertTransactionEIP1559", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionEIP1559;
    }
});
Object.defineProperty(exports, "assertTransactionEIP2930", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionEIP2930;
    }
});
Object.defineProperty(exports, "assertTransactionLegacy", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionLegacy;
    }
});
var parseTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/parseTransaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "parseTransaction", {
    enumerable: true,
    get: function() {
        return parseTransaction_js_1.parseTransaction;
    }
});
var prepareTransactionRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "prepareTransactionRequest", {
    enumerable: true,
    get: function() {
        return prepareTransactionRequest_js_1.prepareTransactionRequest;
    }
});
var serializeTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "serializeTransaction", {
    enumerable: true,
    get: function() {
        return serializeTransaction_js_1.serializeTransaction;
    }
});
var serializeAccessList_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/serializeAccessList.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "serializeAccessList", {
    enumerable: true,
    get: function() {
        return serializeAccessList_js_1.serializeAccessList;
    }
});
var formatEther_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatEther.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "formatEther", {
    enumerable: true,
    get: function() {
        return formatEther_js_1.formatEther;
    }
});
var formatGwei_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "formatGwei", {
    enumerable: true,
    get: function() {
        return formatGwei_js_1.formatGwei;
    }
});
var formatUnits_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatUnits.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "formatUnits", {
    enumerable: true,
    get: function() {
        return formatUnits_js_1.formatUnits;
    }
});
var parseUnits_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "parseUnits", {
    enumerable: true,
    get: function() {
        return parseUnits_js_1.parseUnits;
    }
});
var parseEther_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/parseEther.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "parseEther", {
    enumerable: true,
    get: function() {
        return parseEther_js_1.parseEther;
    }
});
var parseGwei_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/parseGwei.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "parseGwei", {
    enumerable: true,
    get: function() {
        return parseGwei_js_1.parseGwei;
    }
}); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/proof.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatProof = void 0;
const index_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/index.js [app-ssr] (ecmascript)");
function formatStorageProof(storageProof) {
    return storageProof.map((proof)=>({
            ...proof,
            value: BigInt(proof.value)
        }));
}
function formatProof(proof) {
    return {
        ...proof,
        balance: proof.balance ? BigInt(proof.balance) : undefined,
        nonce: proof.nonce ? (0, index_js_1.hexToNumber)(proof.nonce) : undefined,
        storageProof: proof.storageProof ? formatStorageProof(proof.storageProof) : undefined
    };
}
exports.formatProof = formatProof; //# sourceMappingURL=proof.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getProof.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProof = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const proof_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/proof.js [app-ssr] (ecmascript)");
async function getProof(client, { address, blockNumber, blockTag: blockTag_, storageKeys }) {
    const blockTag = blockTag_ ?? 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const proof = await client.request({
        method: 'eth_getProof',
        params: [
            address,
            storageKeys,
            blockNumberHex || blockTag
        ]
    });
    return (0, proof_js_1.formatProof)(proof);
}
exports.getProof = getProof; //# sourceMappingURL=getProof.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getStorageAt.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getStorageAt = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function getStorageAt(client, { address, blockNumber, blockTag = 'latest', slot }) {
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    const data = await client.request({
        method: 'eth_getStorageAt',
        params: [
            address,
            slot,
            blockNumberHex || blockTag
        ]
    });
    return data;
}
exports.getStorageAt = getStorageAt; //# sourceMappingURL=getStorageAt.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransaction = void 0;
const transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
const transaction_js_2 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-ssr] (ecmascript)");
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash, index }) {
    const blockTag = blockTag_ || 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0, toHex_js_1.numberToHex)(blockNumber) : undefined;
    let transaction = null;
    if (hash) {
        transaction = await client.request({
            method: 'eth_getTransactionByHash',
            params: [
                hash
            ]
        });
    } else if (blockHash) {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockHashAndIndex',
            params: [
                blockHash,
                (0, toHex_js_1.numberToHex)(index)
            ]
        });
    } else if ("TURBOPACK compile-time truthy", 1) {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockNumberAndIndex',
            params: [
                blockNumberHex || blockTag,
                (0, toHex_js_1.numberToHex)(index)
            ]
        });
    }
    if (!transaction) throw new transaction_js_1.TransactionNotFoundError({
        blockHash,
        blockNumber,
        blockTag,
        hash,
        index
    });
    const format = client.chain?.formatters?.transaction?.format || transaction_js_2.formatTransaction;
    return format(transaction);
}
exports.getTransaction = getTransaction; //# sourceMappingURL=getTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getTransactionConfirmations.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionConfirmations = void 0;
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-ssr] (ecmascript)");
const getTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getTransaction.js [app-ssr] (ecmascript)");
async function getTransactionConfirmations(client, { hash, transactionReceipt }) {
    const [blockNumber, transaction] = await Promise.all([
        (0, getAction_js_1.getAction)(client, getBlockNumber_js_1.getBlockNumber, 'getBlockNumber')({}),
        hash ? (0, getAction_js_1.getAction)(client, getTransaction_js_1.getTransaction, 'getBlockNumber')({
            hash
        }) : undefined
    ]);
    const transactionBlockNumber = transactionReceipt?.blockNumber || transaction?.blockNumber;
    if (!transactionBlockNumber) return 0n;
    return blockNumber - transactionBlockNumber + 1n;
}
exports.getTransactionConfirmations = getTransactionConfirmations; //# sourceMappingURL=getTransactionConfirmations.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getTransactionReceipt.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionReceipt = void 0;
const transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
const transactionReceipt_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-ssr] (ecmascript)");
async function getTransactionReceipt(client, { hash }) {
    const receipt = await client.request({
        method: 'eth_getTransactionReceipt',
        params: [
            hash
        ]
    });
    if (!receipt) throw new transaction_js_1.TransactionReceiptNotFoundError({
        hash
    });
    const format = client.chain?.formatters?.transactionReceipt?.format || transactionReceipt_js_1.formatTransactionReceipt;
    return format(receipt);
}
exports.getTransactionReceipt = getTransactionReceipt; //# sourceMappingURL=getTransactionReceipt.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/multicall.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multicall = void 0;
const abis_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/abis.js [app-ssr] (ecmascript)");
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
const contract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/contract.js [app-ssr] (ecmascript)");
const decodeFunctionResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
const encodeFunctionData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
const getChainContractAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)");
const getContractError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
async function multicall(client, args) {
    const { allowFailure = true, batchSize: batchSize_, blockNumber, blockTag, contracts, multicallAddress: multicallAddress_ } = args;
    const batchSize = batchSize_ ?? (typeof client.batch?.multicall === 'object' && client.batch.multicall.batchSize || 1024);
    let multicallAddress = multicallAddress_;
    if (!multicallAddress) {
        if (!client.chain) throw new Error('client chain not configured. multicallAddress is required.');
        multicallAddress = (0, getChainContractAddress_js_1.getChainContractAddress)({
            blockNumber,
            chain: client.chain,
            contract: 'multicall3'
        });
    }
    const chunkedCalls = [
        []
    ];
    let currentChunk = 0;
    let currentChunkSize = 0;
    for(let i = 0; i < contracts.length; i++){
        const { abi, address, args, functionName } = contracts[i];
        try {
            const callData = (0, encodeFunctionData_js_1.encodeFunctionData)({
                abi,
                args,
                functionName
            });
            currentChunkSize += (callData.length - 2) / 2;
            if (batchSize > 0 && currentChunkSize > batchSize && chunkedCalls[currentChunk].length > 0) {
                currentChunk++;
                currentChunkSize = (callData.length - 2) / 2;
                chunkedCalls[currentChunk] = [];
            }
            chunkedCalls[currentChunk] = [
                ...chunkedCalls[currentChunk],
                {
                    allowFailure: true,
                    callData,
                    target: address
                }
            ];
        } catch (err) {
            const error = (0, getContractError_js_1.getContractError)(err, {
                abi,
                address,
                args,
                docsPath: '/docs/contract/multicall',
                functionName
            });
            if (!allowFailure) throw error;
            chunkedCalls[currentChunk] = [
                ...chunkedCalls[currentChunk],
                {
                    allowFailure: true,
                    callData: '0x',
                    target: address
                }
            ];
        }
    }
    const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls)=>(0, getAction_js_1.getAction)(client, readContract_js_1.readContract, 'readContract')({
            abi: abis_js_1.multicall3Abi,
            address: multicallAddress,
            args: [
                calls
            ],
            blockNumber,
            blockTag,
            functionName: 'aggregate3'
        })));
    const results = [];
    for(let i = 0; i < aggregate3Results.length; i++){
        const result = aggregate3Results[i];
        if (result.status === 'rejected') {
            if (!allowFailure) throw result.reason;
            for(let j = 0; j < chunkedCalls[i].length; j++){
                results.push({
                    status: 'failure',
                    error: result.reason,
                    result: undefined
                });
            }
            continue;
        }
        const aggregate3Result = result.value;
        for(let j = 0; j < aggregate3Result.length; j++){
            const { returnData, success } = aggregate3Result[j];
            const { callData } = chunkedCalls[i][j];
            const { abi, address, functionName, args } = contracts[results.length];
            try {
                if (callData === '0x') throw new abi_js_1.AbiDecodingZeroDataError();
                if (!success) throw new contract_js_1.RawContractError({
                    data: returnData
                });
                const result = (0, decodeFunctionResult_js_1.decodeFunctionResult)({
                    abi,
                    args,
                    data: returnData,
                    functionName
                });
                results.push(allowFailure ? {
                    result,
                    status: 'success'
                } : result);
            } catch (err) {
                const error = (0, getContractError_js_1.getContractError)(err, {
                    abi,
                    address,
                    args,
                    docsPath: '/docs/contract/multicall',
                    functionName
                });
                if (!allowFailure) throw error;
                results.push({
                    error,
                    result: undefined,
                    status: 'failure'
                });
            }
        }
    }
    if (results.length !== contracts.length) throw new base_js_1.BaseError('multicall results mismatch');
    return results;
}
exports.multicall = multicall; //# sourceMappingURL=multicall.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/contracts.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.universalSignatureValidatorByteCode = void 0;
exports.universalSignatureValidatorByteCode = '0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572'; //# sourceMappingURL=contracts.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isBytesEqual.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isBytesEqual = void 0;
const utils_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/abstract/utils.js [app-ssr] (ecmascript)");
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
function isBytesEqual(a_, b_) {
    const a = (0, isHex_js_1.isHex)(a_) ? (0, toBytes_js_1.toBytes)(a_) : a_;
    const b = (0, isHex_js_1.isHex)(b_) ? (0, toBytes_js_1.toBytes)(b_) : b_;
    return (0, utils_1.equalBytes)(a, b);
}
exports.isBytesEqual = isBytesEqual; //# sourceMappingURL=isBytesEqual.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/verifyHash.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyHash = void 0;
const abis_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/abis.js [app-ssr] (ecmascript)");
const contracts_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/contracts.js [app-ssr] (ecmascript)");
const contract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/contract.js [app-ssr] (ecmascript)");
const isBytesEqual_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isBytesEqual.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const index_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/index.js [app-ssr] (ecmascript)");
const call_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/call.js [app-ssr] (ecmascript)");
async function verifyHash(client, { address, hash, signature, ...callRequest }) {
    const signatureHex = (0, index_js_1.isHex)(signature) ? signature : (0, index_js_1.toHex)(signature);
    try {
        const { data } = await (0, getAction_js_1.getAction)(client, call_js_1.call, 'call')({
            data: (0, index_js_1.encodeDeployData)({
                abi: abis_js_1.universalSignatureValidatorAbi,
                args: [
                    address,
                    hash,
                    signatureHex
                ],
                bytecode: contracts_js_1.universalSignatureValidatorByteCode
            }),
            ...callRequest
        });
        return (0, isBytesEqual_js_1.isBytesEqual)(data ?? '0x0', '0x1');
    } catch (error) {
        if (error instanceof contract_js_1.CallExecutionError) {
            return false;
        }
        throw error;
    }
}
exports.verifyHash = verifyHash; //# sourceMappingURL=verifyHash.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/verifyMessage.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyMessage = void 0;
const index_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/index.js [app-ssr] (ecmascript)");
const verifyHash_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/verifyHash.js [app-ssr] (ecmascript)");
async function verifyMessage(client, { address, message, signature, ...callRequest }) {
    const hash = (0, index_js_1.hashMessage)(message);
    return (0, verifyHash_js_1.verifyHash)(client, {
        address,
        hash,
        signature,
        ...callRequest
    });
}
exports.verifyMessage = verifyMessage; //# sourceMappingURL=verifyMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/verifyTypedData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyTypedData = void 0;
const hashTypedData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-ssr] (ecmascript)");
const verifyHash_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/verifyHash.js [app-ssr] (ecmascript)");
async function verifyTypedData(client, { address, signature, message, primaryType, types, domain, ...callRequest }) {
    const hash = (0, hashTypedData_js_1.hashTypedData)({
        message,
        primaryType,
        types,
        domain
    });
    return (0, verifyHash_js_1.verifyHash)(client, {
        address,
        hash,
        signature,
        ...callRequest
    });
}
exports.verifyTypedData = verifyTypedData; //# sourceMappingURL=verifyTypedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/watchBlockNumber.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchBlockNumber = void 0;
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const observe_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)");
const poll_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/poll.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-ssr] (ecmascript)");
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval }) {
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket';
    let prevBlockNumber;
    const pollBlockNumber = ()=>{
        const observerId = (0, stringify_js_1.stringify)([
            'watchBlockNumber',
            client.uid,
            emitOnBegin,
            emitMissed,
            pollingInterval
        ]);
        return (0, observe_js_1.observe)(observerId, {
            onBlockNumber,
            onError
        }, (emit)=>(0, poll_js_1.poll)(async ()=>{
                try {
                    const blockNumber = await (0, getAction_js_1.getAction)(client, getBlockNumber_js_1.getBlockNumber, 'getBlockNumber')({
                        cacheTime: 0
                    });
                    if (prevBlockNumber) {
                        if (blockNumber === prevBlockNumber) return;
                        if (blockNumber - prevBlockNumber > 1 && emitMissed) {
                            for(let i = prevBlockNumber + 1n; i < blockNumber; i++){
                                emit.onBlockNumber(i, prevBlockNumber);
                                prevBlockNumber = i;
                            }
                        }
                    }
                    if (!prevBlockNumber || blockNumber > prevBlockNumber) {
                        emit.onBlockNumber(blockNumber, prevBlockNumber);
                        prevBlockNumber = blockNumber;
                    }
                } catch (err) {
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin,
                interval: pollingInterval
            }));
    };
    const subscribeBlockNumber = ()=>{
        let active = true;
        let unsubscribe = ()=>active = false;
        (async ()=>{
            try {
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: [
                        'newHeads'
                    ],
                    onData (data) {
                        if (!active) return;
                        const blockNumber = (0, fromHex_js_1.hexToBigInt)(data.result?.number);
                        onBlockNumber(blockNumber, prevBlockNumber);
                        prevBlockNumber = blockNumber;
                    },
                    onError (error) {
                        onError?.(error);
                    }
                });
                unsubscribe = unsubscribe_;
                if (!active) unsubscribe();
            } catch (err) {
                onError?.(err);
            }
        })();
        return unsubscribe;
    };
    return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
}
exports.watchBlockNumber = watchBlockNumber; //# sourceMappingURL=watchBlockNumber.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/waitForTransactionReceipt.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.waitForTransactionReceipt = void 0;
const block_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/block.js [app-ssr] (ecmascript)");
const transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const observe_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)");
const withRetry_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/promise/withRetry.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const getBlock_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-ssr] (ecmascript)");
const getTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getTransaction.js [app-ssr] (ecmascript)");
const getTransactionReceipt_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getTransactionReceipt.js [app-ssr] (ecmascript)");
const watchBlockNumber_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/watchBlockNumber.js [app-ssr] (ecmascript)");
async function waitForTransactionReceipt(client, { confirmations = 1, hash, onReplaced, pollingInterval = client.pollingInterval, timeout }) {
    const observerId = (0, stringify_js_1.stringify)([
        'waitForTransactionReceipt',
        client.uid,
        hash
    ]);
    let transaction;
    let replacedTransaction;
    let receipt;
    let retrying = false;
    return new Promise((resolve, reject)=>{
        if (timeout) setTimeout(()=>reject(new transaction_js_1.WaitForTransactionReceiptTimeoutError({
                hash
            })), timeout);
        const _unobserve = (0, observe_js_1.observe)(observerId, {
            onReplaced,
            resolve,
            reject
        }, (emit)=>{
            const _unwatch = (0, getAction_js_1.getAction)(client, watchBlockNumber_js_1.watchBlockNumber, 'watchBlockNumber')({
                emitMissed: true,
                emitOnBegin: true,
                poll: true,
                pollingInterval,
                async onBlockNumber (blockNumber_) {
                    if (retrying) return;
                    let blockNumber = blockNumber_;
                    const done = (fn)=>{
                        _unwatch();
                        fn();
                        _unobserve();
                    };
                    try {
                        if (receipt) {
                            if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
                            done(()=>emit.resolve(receipt));
                            return;
                        }
                        if (!transaction) {
                            retrying = true;
                            await (0, withRetry_js_1.withRetry)(async ()=>{
                                transaction = await (0, getAction_js_1.getAction)(client, getTransaction_js_1.getTransaction, 'getTransaction')({
                                    hash
                                });
                                if (transaction.blockNumber) blockNumber = transaction.blockNumber;
                            }, {
                                delay: ({ count })=>~~(1 << count) * 200,
                                retryCount: 6
                            });
                            retrying = false;
                        }
                        receipt = await (0, getAction_js_1.getAction)(client, getTransactionReceipt_js_1.getTransactionReceipt, 'getTransactionReceipt')({
                            hash
                        });
                        if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
                        done(()=>emit.resolve(receipt));
                    } catch (err) {
                        if (transaction && (err instanceof transaction_js_1.TransactionNotFoundError || err instanceof transaction_js_1.TransactionReceiptNotFoundError)) {
                            try {
                                replacedTransaction = transaction;
                                retrying = true;
                                const block = await (0, withRetry_js_1.withRetry)(()=>(0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
                                        blockNumber,
                                        includeTransactions: true
                                    }), {
                                    delay: ({ count })=>~~(1 << count) * 200,
                                    retryCount: 6,
                                    shouldRetry: ({ error })=>error instanceof block_js_1.BlockNotFoundError
                                });
                                retrying = false;
                                const replacementTransaction = block.transactions.find(({ from, nonce })=>from === replacedTransaction.from && nonce === replacedTransaction.nonce);
                                if (!replacementTransaction) return;
                                receipt = await (0, getAction_js_1.getAction)(client, getTransactionReceipt_js_1.getTransactionReceipt, 'getTransactionReceipt')({
                                    hash: replacementTransaction.hash
                                });
                                if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
                                let reason = 'replaced';
                                if (replacementTransaction.to === replacedTransaction.to && replacementTransaction.value === replacedTransaction.value) {
                                    reason = 'repriced';
                                } else if (replacementTransaction.from === replacementTransaction.to && replacementTransaction.value === 0n) {
                                    reason = 'cancelled';
                                }
                                done(()=>{
                                    emit.onReplaced?.({
                                        reason,
                                        replacedTransaction: replacedTransaction,
                                        transaction: replacementTransaction,
                                        transactionReceipt: receipt
                                    });
                                    emit.resolve(receipt);
                                });
                            } catch (err_) {
                                done(()=>emit.reject(err_));
                            }
                        } else {
                            done(()=>emit.reject(err));
                        }
                    }
                }
            });
        });
    });
}
exports.waitForTransactionReceipt = waitForTransactionReceipt; //# sourceMappingURL=waitForTransactionReceipt.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/watchBlocks.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchBlocks = void 0;
const block_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/block.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const observe_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)");
const poll_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/poll.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const getBlock_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-ssr] (ecmascript)");
function watchBlocks(client, { blockTag = 'latest', emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval }) {
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket';
    const includeTransactions = includeTransactions_ ?? false;
    let prevBlock;
    const pollBlocks = ()=>{
        const observerId = (0, stringify_js_1.stringify)([
            'watchBlocks',
            client.uid,
            emitMissed,
            emitOnBegin,
            includeTransactions,
            pollingInterval
        ]);
        return (0, observe_js_1.observe)(observerId, {
            onBlock,
            onError
        }, (emit)=>(0, poll_js_1.poll)(async ()=>{
                try {
                    const block = await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
                        blockTag,
                        includeTransactions
                    });
                    if (block.number && prevBlock?.number) {
                        if (block.number === prevBlock.number) return;
                        if (block.number - prevBlock.number > 1 && emitMissed) {
                            for(let i = prevBlock?.number + 1n; i < block.number; i++){
                                const block = await (0, getAction_js_1.getAction)(client, getBlock_js_1.getBlock, 'getBlock')({
                                    blockNumber: i,
                                    includeTransactions
                                });
                                emit.onBlock(block, prevBlock);
                                prevBlock = block;
                            }
                        }
                    }
                    if (!prevBlock?.number || blockTag === 'pending' && !block?.number || block.number && block.number > prevBlock.number) {
                        emit.onBlock(block, prevBlock);
                        prevBlock = block;
                    }
                } catch (err) {
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin,
                interval: pollingInterval
            }));
    };
    const subscribeBlocks = ()=>{
        let active = true;
        let unsubscribe = ()=>active = false;
        (async ()=>{
            try {
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: [
                        'newHeads'
                    ],
                    onData (data) {
                        if (!active) return;
                        const format = client.chain?.formatters?.block?.format || block_js_1.formatBlock;
                        const block = format(data.result);
                        onBlock(block, prevBlock);
                        prevBlock = block;
                    },
                    onError (error) {
                        onError?.(error);
                    }
                });
                unsubscribe = unsubscribe_;
                if (!active) unsubscribe();
            } catch (err) {
                onError?.(err);
            }
        })();
        return unsubscribe;
    };
    return enablePolling ? pollBlocks() : subscribeBlocks();
}
exports.watchBlocks = watchBlocks; //# sourceMappingURL=watchBlocks.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/watchEvent.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchEvent = void 0;
const observe_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)");
const poll_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/poll.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const rpc_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/rpc.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const index_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/index.js [app-ssr] (ecmascript)");
const createEventFilter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/createEventFilter.js [app-ssr] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-ssr] (ecmascript)");
const getFilterChanges_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-ssr] (ecmascript)");
const getLogs_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getLogs.js [app-ssr] (ecmascript)");
const uninstallFilter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-ssr] (ecmascript)");
function watchEvent(client, { address, args, batch = true, event, events, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ }) {
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket';
    const strict = strict_ ?? false;
    const pollEvent = ()=>{
        const observerId = (0, stringify_js_1.stringify)([
            'watchEvent',
            address,
            args,
            batch,
            client.uid,
            event,
            pollingInterval
        ]);
        return (0, observe_js_1.observe)(observerId, {
            onLogs,
            onError
        }, (emit)=>{
            let previousBlockNumber;
            let filter;
            let initialized = false;
            const unwatch = (0, poll_js_1.poll)(async ()=>{
                if (!initialized) {
                    try {
                        filter = await (0, getAction_js_1.getAction)(client, createEventFilter_js_1.createEventFilter, 'createEventFilter')({
                            address,
                            args,
                            event: event,
                            events,
                            strict
                        });
                    } catch  {}
                    initialized = true;
                    return;
                }
                try {
                    let logs;
                    if (filter) {
                        logs = await (0, getAction_js_1.getAction)(client, getFilterChanges_js_1.getFilterChanges, 'getFilterChanges')({
                            filter
                        });
                    } else {
                        const blockNumber = await (0, getAction_js_1.getAction)(client, getBlockNumber_js_1.getBlockNumber, 'getBlockNumber')({});
                        if (previousBlockNumber && previousBlockNumber !== blockNumber) {
                            logs = await (0, getAction_js_1.getAction)(client, getLogs_js_1.getLogs, 'getLogs')({
                                address,
                                args,
                                event: event,
                                events,
                                fromBlock: previousBlockNumber + 1n,
                                toBlock: blockNumber
                            });
                        } else {
                            logs = [];
                        }
                        previousBlockNumber = blockNumber;
                    }
                    if (logs.length === 0) return;
                    if (batch) emit.onLogs(logs);
                    else for (const log of logs)emit.onLogs([
                        log
                    ]);
                } catch (err) {
                    if (filter && err instanceof rpc_js_1.InvalidInputRpcError) initialized = false;
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return async ()=>{
                if (filter) await (0, getAction_js_1.getAction)(client, uninstallFilter_js_1.uninstallFilter, 'uninstallFilter')({
                    filter
                });
                unwatch();
            };
        });
    };
    const subscribeEvent = ()=>{
        let active = true;
        let unsubscribe = ()=>active = false;
        (async ()=>{
            try {
                const events_ = events ?? (event ? [
                    event
                ] : undefined);
                let topics = [];
                if (events_) {
                    topics = [
                        events_.flatMap((event)=>(0, index_js_1.encodeEventTopics)({
                                abi: [
                                    event
                                ],
                                eventName: event.name,
                                args
                            }))
                    ];
                    if (event) topics = topics[0];
                }
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: [
                        'logs',
                        {
                            address,
                            topics
                        }
                    ],
                    onData (data) {
                        if (!active) return;
                        const log = data.result;
                        try {
                            const { eventName, args } = (0, index_js_1.decodeEventLog)({
                                abi: events_,
                                data: log.data,
                                topics: log.topics,
                                strict
                            });
                            const formatted = (0, index_js_1.formatLog)(log, {
                                args,
                                eventName: eventName
                            });
                            onLogs([
                                formatted
                            ]);
                        } catch (err) {
                            let eventName;
                            let isUnnamed;
                            if (err instanceof abi_js_1.DecodeLogDataMismatch || err instanceof abi_js_1.DecodeLogTopicsMismatch) {
                                if (strict_) return;
                                eventName = err.abiItem.name;
                                isUnnamed = err.abiItem.inputs?.some((x)=>!('name' in x && x.name));
                            }
                            const formatted = (0, index_js_1.formatLog)(log, {
                                args: isUnnamed ? [] : {},
                                eventName
                            });
                            onLogs([
                                formatted
                            ]);
                        }
                    },
                    onError (error) {
                        onError?.(error);
                    }
                });
                unsubscribe = unsubscribe_;
                if (!active) unsubscribe();
            } catch (err) {
                onError?.(err);
            }
        })();
        return unsubscribe;
    };
    return enablePolling ? pollEvent() : subscribeEvent();
}
exports.watchEvent = watchEvent; //# sourceMappingURL=watchEvent.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/watchPendingTransactions.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchPendingTransactions = void 0;
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const observe_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/observe.js [app-ssr] (ecmascript)");
const poll_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/poll.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const createPendingTransactionFilter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/createPendingTransactionFilter.js [app-ssr] (ecmascript)");
const getFilterChanges_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-ssr] (ecmascript)");
const uninstallFilter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-ssr] (ecmascript)");
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval }) {
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket';
    const pollPendingTransactions = ()=>{
        const observerId = (0, stringify_js_1.stringify)([
            'watchPendingTransactions',
            client.uid,
            batch,
            pollingInterval
        ]);
        return (0, observe_js_1.observe)(observerId, {
            onTransactions,
            onError
        }, (emit)=>{
            let filter;
            const unwatch = (0, poll_js_1.poll)(async ()=>{
                try {
                    if (!filter) {
                        try {
                            filter = await (0, getAction_js_1.getAction)(client, createPendingTransactionFilter_js_1.createPendingTransactionFilter, 'createPendingTransactionFilter')({});
                            return;
                        } catch (err) {
                            unwatch();
                            throw err;
                        }
                    }
                    const hashes = await (0, getAction_js_1.getAction)(client, getFilterChanges_js_1.getFilterChanges, 'getFilterChanges')({
                        filter
                    });
                    if (hashes.length === 0) return;
                    if (batch) emit.onTransactions(hashes);
                    else for (const hash of hashes)emit.onTransactions([
                        hash
                    ]);
                } catch (err) {
                    emit.onError?.(err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return async ()=>{
                if (filter) await (0, getAction_js_1.getAction)(client, uninstallFilter_js_1.uninstallFilter, 'uninstallFilter')({
                    filter
                });
                unwatch();
            };
        });
    };
    const subscribePendingTransactions = ()=>{
        let active = true;
        let unsubscribe = ()=>active = false;
        (async ()=>{
            try {
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: [
                        'newPendingTransactions'
                    ],
                    onData (data) {
                        if (!active) return;
                        const transaction = data.result;
                        onTransactions([
                            transaction
                        ]);
                    },
                    onError (error) {
                        onError?.(error);
                    }
                });
                unsubscribe = unsubscribe_;
                if (!active) unsubscribe();
            } catch (err) {
                onError?.(err);
            }
        })();
        return unsubscribe;
    };
    return enablePolling ? pollPendingTransactions() : subscribePendingTransactions();
}
exports.watchPendingTransactions = watchPendingTransactions; //# sourceMappingURL=watchPendingTransactions.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/decorators/public.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publicActions = void 0;
const getEnsAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/ens/getEnsAddress.js [app-ssr] (ecmascript)");
const getEnsAvatar_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/ens/getEnsAvatar.js [app-ssr] (ecmascript)");
const getEnsName_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/ens/getEnsName.js [app-ssr] (ecmascript)");
const getEnsResolver_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/ens/getEnsResolver.js [app-ssr] (ecmascript)");
const getEnsText_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/ens/getEnsText.js [app-ssr] (ecmascript)");
const call_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/call.js [app-ssr] (ecmascript)");
const createBlockFilter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/createBlockFilter.js [app-ssr] (ecmascript)");
const createContractEventFilter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/createContractEventFilter.js [app-ssr] (ecmascript)");
const createEventFilter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/createEventFilter.js [app-ssr] (ecmascript)");
const createPendingTransactionFilter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/createPendingTransactionFilter.js [app-ssr] (ecmascript)");
const estimateContractGas_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/estimateContractGas.js [app-ssr] (ecmascript)");
const estimateFeesPerGas_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/estimateFeesPerGas.js [app-ssr] (ecmascript)");
const estimateGas_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/estimateGas.js [app-ssr] (ecmascript)");
const estimateMaxPriorityFeePerGas_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/estimateMaxPriorityFeePerGas.js [app-ssr] (ecmascript)");
const getBalance_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBalance.js [app-ssr] (ecmascript)");
const getBlock_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlock.js [app-ssr] (ecmascript)");
const getBlockNumber_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlockNumber.js [app-ssr] (ecmascript)");
const getBlockTransactionCount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBlockTransactionCount.js [app-ssr] (ecmascript)");
const getBytecode_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getBytecode.js [app-ssr] (ecmascript)");
const getChainId_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-ssr] (ecmascript)");
const getContractEvents_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getContractEvents.js [app-ssr] (ecmascript)");
const getFeeHistory_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getFeeHistory.js [app-ssr] (ecmascript)");
const getFilterChanges_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getFilterChanges.js [app-ssr] (ecmascript)");
const getFilterLogs_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getFilterLogs.js [app-ssr] (ecmascript)");
const getGasPrice_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getGasPrice.js [app-ssr] (ecmascript)");
const getLogs_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getLogs.js [app-ssr] (ecmascript)");
const getProof_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getProof.js [app-ssr] (ecmascript)");
const getStorageAt_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getStorageAt.js [app-ssr] (ecmascript)");
const getTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getTransaction.js [app-ssr] (ecmascript)");
const getTransactionConfirmations_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getTransactionConfirmations.js [app-ssr] (ecmascript)");
const getTransactionCount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getTransactionCount.js [app-ssr] (ecmascript)");
const getTransactionReceipt_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getTransactionReceipt.js [app-ssr] (ecmascript)");
const multicall_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/multicall.js [app-ssr] (ecmascript)");
const readContract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/readContract.js [app-ssr] (ecmascript)");
const simulateContract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/simulateContract.js [app-ssr] (ecmascript)");
const uninstallFilter_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/uninstallFilter.js [app-ssr] (ecmascript)");
const verifyMessage_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/verifyMessage.js [app-ssr] (ecmascript)");
const verifyTypedData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/verifyTypedData.js [app-ssr] (ecmascript)");
const waitForTransactionReceipt_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/waitForTransactionReceipt.js [app-ssr] (ecmascript)");
const watchBlockNumber_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/watchBlockNumber.js [app-ssr] (ecmascript)");
const watchBlocks_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/watchBlocks.js [app-ssr] (ecmascript)");
const watchContractEvent_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/watchContractEvent.js [app-ssr] (ecmascript)");
const watchEvent_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/watchEvent.js [app-ssr] (ecmascript)");
const watchPendingTransactions_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/watchPendingTransactions.js [app-ssr] (ecmascript)");
const prepareTransactionRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)");
const sendRawTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js [app-ssr] (ecmascript)");
function publicActions(client) {
    return {
        call: (args)=>(0, call_js_1.call)(client, args),
        createBlockFilter: ()=>(0, createBlockFilter_js_1.createBlockFilter)(client),
        createContractEventFilter: (args)=>(0, createContractEventFilter_js_1.createContractEventFilter)(client, args),
        createEventFilter: (args)=>(0, createEventFilter_js_1.createEventFilter)(client, args),
        createPendingTransactionFilter: ()=>(0, createPendingTransactionFilter_js_1.createPendingTransactionFilter)(client),
        estimateContractGas: (args)=>(0, estimateContractGas_js_1.estimateContractGas)(client, args),
        estimateGas: (args)=>(0, estimateGas_js_1.estimateGas)(client, args),
        getBalance: (args)=>(0, getBalance_js_1.getBalance)(client, args),
        getBlock: (args)=>(0, getBlock_js_1.getBlock)(client, args),
        getBlockNumber: (args)=>(0, getBlockNumber_js_1.getBlockNumber)(client, args),
        getBlockTransactionCount: (args)=>(0, getBlockTransactionCount_js_1.getBlockTransactionCount)(client, args),
        getBytecode: (args)=>(0, getBytecode_js_1.getBytecode)(client, args),
        getChainId: ()=>(0, getChainId_js_1.getChainId)(client),
        getContractEvents: (args)=>(0, getContractEvents_js_1.getContractEvents)(client, args),
        getEnsAddress: (args)=>(0, getEnsAddress_js_1.getEnsAddress)(client, args),
        getEnsAvatar: (args)=>(0, getEnsAvatar_js_1.getEnsAvatar)(client, args),
        getEnsName: (args)=>(0, getEnsName_js_1.getEnsName)(client, args),
        getEnsResolver: (args)=>(0, getEnsResolver_js_1.getEnsResolver)(client, args),
        getEnsText: (args)=>(0, getEnsText_js_1.getEnsText)(client, args),
        getFeeHistory: (args)=>(0, getFeeHistory_js_1.getFeeHistory)(client, args),
        estimateFeesPerGas: (args)=>(0, estimateFeesPerGas_js_1.estimateFeesPerGas)(client, args),
        getFilterChanges: (args)=>(0, getFilterChanges_js_1.getFilterChanges)(client, args),
        getFilterLogs: (args)=>(0, getFilterLogs_js_1.getFilterLogs)(client, args),
        getGasPrice: ()=>(0, getGasPrice_js_1.getGasPrice)(client),
        getLogs: (args)=>(0, getLogs_js_1.getLogs)(client, args),
        getProof: (args)=>(0, getProof_js_1.getProof)(client, args),
        estimateMaxPriorityFeePerGas: (args)=>(0, estimateMaxPriorityFeePerGas_js_1.estimateMaxPriorityFeePerGas)(client, args),
        getStorageAt: (args)=>(0, getStorageAt_js_1.getStorageAt)(client, args),
        getTransaction: (args)=>(0, getTransaction_js_1.getTransaction)(client, args),
        getTransactionConfirmations: (args)=>(0, getTransactionConfirmations_js_1.getTransactionConfirmations)(client, args),
        getTransactionCount: (args)=>(0, getTransactionCount_js_1.getTransactionCount)(client, args),
        getTransactionReceipt: (args)=>(0, getTransactionReceipt_js_1.getTransactionReceipt)(client, args),
        multicall: (args)=>(0, multicall_js_1.multicall)(client, args),
        prepareTransactionRequest: (args)=>(0, prepareTransactionRequest_js_1.prepareTransactionRequest)(client, args),
        readContract: (args)=>(0, readContract_js_1.readContract)(client, args),
        sendRawTransaction: (args)=>(0, sendRawTransaction_js_1.sendRawTransaction)(client, args),
        simulateContract: (args)=>(0, simulateContract_js_1.simulateContract)(client, args),
        verifyMessage: (args)=>(0, verifyMessage_js_1.verifyMessage)(client, args),
        verifyTypedData: (args)=>(0, verifyTypedData_js_1.verifyTypedData)(client, args),
        uninstallFilter: (args)=>(0, uninstallFilter_js_1.uninstallFilter)(client, args),
        waitForTransactionReceipt: (args)=>(0, waitForTransactionReceipt_js_1.waitForTransactionReceipt)(client, args),
        watchBlocks: (args)=>(0, watchBlocks_js_1.watchBlocks)(client, args),
        watchBlockNumber: (args)=>(0, watchBlockNumber_js_1.watchBlockNumber)(client, args),
        watchContractEvent: (args)=>(0, watchContractEvent_js_1.watchContractEvent)(client, args),
        watchEvent: (args)=>(0, watchEvent_js_1.watchEvent)(client, args),
        watchPendingTransactions: (args)=>(0, watchPendingTransactions_js_1.watchPendingTransactions)(client, args)
    };
}
exports.publicActions = publicActions; //# sourceMappingURL=public.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/createPublicClient.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createPublicClient = void 0;
const createClient_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/createClient.js [app-ssr] (ecmascript)");
const public_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/decorators/public.js [app-ssr] (ecmascript)");
function createPublicClient(parameters) {
    const { key = 'public', name = 'Public Client' } = parameters;
    const client = (0, createClient_js_1.createClient)({
        ...parameters,
        key,
        name,
        type: 'publicClient'
    });
    return client.extend(public_js_1.publicActions);
}
exports.createPublicClient = createPublicClient; //# sourceMappingURL=createPublicClient.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/dropTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dropTransaction = void 0;
async function dropTransaction(client, { hash }) {
    await client.request({
        method: `${client.mode}_dropTransaction`,
        params: [
            hash
        ]
    });
}
exports.dropTransaction = dropTransaction; //# sourceMappingURL=dropTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/dumpState.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dumpState = void 0;
async function dumpState(client) {
    return client.request({
        method: `${client.mode}_dumpState`
    });
}
exports.dumpState = dumpState; //# sourceMappingURL=dumpState.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/getAutomine.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAutomine = void 0;
async function getAutomine(client) {
    if (client.mode === 'ganache') return await client.request({
        method: 'eth_mining'
    });
    return await client.request({
        method: `${client.mode}_getAutomine`
    });
}
exports.getAutomine = getAutomine; //# sourceMappingURL=getAutomine.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/getTxpoolContent.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTxpoolContent = void 0;
async function getTxpoolContent(client) {
    return await client.request({
        method: 'txpool_content'
    });
}
exports.getTxpoolContent = getTxpoolContent; //# sourceMappingURL=getTxpoolContent.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/getTxpoolStatus.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTxpoolStatus = void 0;
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
async function getTxpoolStatus(client) {
    const { pending, queued } = await client.request({
        method: 'txpool_status'
    });
    return {
        pending: (0, fromHex_js_1.hexToNumber)(pending),
        queued: (0, fromHex_js_1.hexToNumber)(queued)
    };
}
exports.getTxpoolStatus = getTxpoolStatus; //# sourceMappingURL=getTxpoolStatus.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/impersonateAccount.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.impersonateAccount = void 0;
async function impersonateAccount(client, { address }) {
    await client.request({
        method: `${client.mode}_impersonateAccount`,
        params: [
            address
        ]
    });
}
exports.impersonateAccount = impersonateAccount; //# sourceMappingURL=impersonateAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/increaseTime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.increaseTime = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function increaseTime(client, { seconds }) {
    return await client.request({
        method: 'evm_increaseTime',
        params: [
            (0, toHex_js_1.numberToHex)(seconds)
        ]
    });
}
exports.increaseTime = increaseTime; //# sourceMappingURL=increaseTime.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/inspectTxpool.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.inspectTxpool = void 0;
async function inspectTxpool(client) {
    return await client.request({
        method: 'txpool_inspect'
    });
}
exports.inspectTxpool = inspectTxpool; //# sourceMappingURL=inspectTxpool.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/loadState.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadState = void 0;
async function loadState(client, { state }) {
    await client.request({
        method: `${client.mode}_loadState`,
        params: [
            state
        ]
    });
}
exports.loadState = loadState; //# sourceMappingURL=loadState.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/mine.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mine = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function mine(client, { blocks, interval }) {
    if (client.mode === 'ganache') await client.request({
        method: 'evm_mine',
        params: [
            {
                blocks: (0, toHex_js_1.numberToHex)(blocks)
            }
        ]
    });
    else await client.request({
        method: `${client.mode}_mine`,
        params: [
            (0, toHex_js_1.numberToHex)(blocks),
            (0, toHex_js_1.numberToHex)(interval || 0)
        ]
    });
}
exports.mine = mine; //# sourceMappingURL=mine.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/removeBlockTimestampInterval.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeBlockTimestampInterval = void 0;
async function removeBlockTimestampInterval(client) {
    await client.request({
        method: `${client.mode}_removeBlockTimestampInterval`
    });
}
exports.removeBlockTimestampInterval = removeBlockTimestampInterval; //# sourceMappingURL=removeBlockTimestampInterval.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/reset.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reset = void 0;
async function reset(client, { blockNumber, jsonRpcUrl } = {}) {
    await client.request({
        method: `${client.mode}_reset`,
        params: [
            {
                forking: {
                    blockNumber: Number(blockNumber),
                    jsonRpcUrl
                }
            }
        ]
    });
}
exports.reset = reset; //# sourceMappingURL=reset.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/revert.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.revert = void 0;
async function revert(client, { id }) {
    await client.request({
        method: 'evm_revert',
        params: [
            id
        ]
    });
}
exports.revert = revert; //# sourceMappingURL=revert.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/sendUnsignedTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendUnsignedTransaction = void 0;
const extract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/extract.js [app-ssr] (ecmascript)");
const transactionRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
async function sendUnsignedTransaction(client, args) {
    const { accessList, data, from, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = args;
    const chainFormat = client.chain?.formatters?.transactionRequest?.format;
    const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
    const request = format({
        ...(0, extract_js_1.extract)(rest, {
            format: chainFormat
        }),
        accessList,
        data,
        from,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        to,
        value
    });
    const hash = await client.request({
        method: 'eth_sendUnsignedTransaction',
        params: [
            request
        ]
    });
    return hash;
}
exports.sendUnsignedTransaction = sendUnsignedTransaction; //# sourceMappingURL=sendUnsignedTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setAutomine.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setAutomine = void 0;
async function setAutomine(client, enabled) {
    if (client.mode === 'ganache') {
        if (enabled) await client.request({
            method: 'miner_start'
        });
        else await client.request({
            method: 'miner_stop'
        });
    } else await client.request({
        method: 'evm_setAutomine',
        params: [
            enabled
        ]
    });
}
exports.setAutomine = setAutomine; //# sourceMappingURL=setAutomine.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setBalance.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setBalance = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function setBalance(client, { address, value }) {
    if (client.mode === 'ganache') await client.request({
        method: 'evm_setAccountBalance',
        params: [
            address,
            (0, toHex_js_1.numberToHex)(value)
        ]
    });
    else await client.request({
        method: `${client.mode}_setBalance`,
        params: [
            address,
            (0, toHex_js_1.numberToHex)(value)
        ]
    });
}
exports.setBalance = setBalance; //# sourceMappingURL=setBalance.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setBlockGasLimit.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setBlockGasLimit = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function setBlockGasLimit(client, { gasLimit }) {
    await client.request({
        method: 'evm_setBlockGasLimit',
        params: [
            (0, toHex_js_1.numberToHex)(gasLimit)
        ]
    });
}
exports.setBlockGasLimit = setBlockGasLimit; //# sourceMappingURL=setBlockGasLimit.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setBlockTimestampInterval.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setBlockTimestampInterval = void 0;
async function setBlockTimestampInterval(client, { interval }) {
    const interval_ = (()=>{
        if (client.mode === 'hardhat') return interval * 1000;
        return interval;
    })();
    await client.request({
        method: `${client.mode}_setBlockTimestampInterval`,
        params: [
            interval_
        ]
    });
}
exports.setBlockTimestampInterval = setBlockTimestampInterval; //# sourceMappingURL=setBlockTimestampInterval.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setCode.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setCode = void 0;
async function setCode(client, { address, bytecode }) {
    await client.request({
        method: `${client.mode}_setCode`,
        params: [
            address,
            bytecode
        ]
    });
}
exports.setCode = setCode; //# sourceMappingURL=setCode.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setCoinbase.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setCoinbase = void 0;
async function setCoinbase(client, { address }) {
    await client.request({
        method: `${client.mode}_setCoinbase`,
        params: [
            address
        ]
    });
}
exports.setCoinbase = setCoinbase; //# sourceMappingURL=setCoinbase.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setIntervalMining.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setIntervalMining = void 0;
async function setIntervalMining(client, { interval }) {
    const interval_ = (()=>{
        if (client.mode === 'hardhat') return interval * 1000;
        return interval;
    })();
    await client.request({
        method: 'evm_setIntervalMining',
        params: [
            interval_
        ]
    });
}
exports.setIntervalMining = setIntervalMining; //# sourceMappingURL=setIntervalMining.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setLoggingEnabled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setLoggingEnabled = void 0;
async function setLoggingEnabled(client, enabled) {
    await client.request({
        method: `${client.mode}_setLoggingEnabled`,
        params: [
            enabled
        ]
    });
}
exports.setLoggingEnabled = setLoggingEnabled; //# sourceMappingURL=setLoggingEnabled.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setMinGasPrice.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setMinGasPrice = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function setMinGasPrice(client, { gasPrice }) {
    await client.request({
        method: `${client.mode}_setMinGasPrice`,
        params: [
            (0, toHex_js_1.numberToHex)(gasPrice)
        ]
    });
}
exports.setMinGasPrice = setMinGasPrice; //# sourceMappingURL=setMinGasPrice.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setNextBlockBaseFeePerGas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setNextBlockBaseFeePerGas = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function setNextBlockBaseFeePerGas(client, { baseFeePerGas }) {
    await client.request({
        method: `${client.mode}_setNextBlockBaseFeePerGas`,
        params: [
            (0, toHex_js_1.numberToHex)(baseFeePerGas)
        ]
    });
}
exports.setNextBlockBaseFeePerGas = setNextBlockBaseFeePerGas; //# sourceMappingURL=setNextBlockBaseFeePerGas.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setNextBlockTimestamp.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setNextBlockTimestamp = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function setNextBlockTimestamp(client, { timestamp }) {
    await client.request({
        method: 'evm_setNextBlockTimestamp',
        params: [
            (0, toHex_js_1.numberToHex)(timestamp)
        ]
    });
}
exports.setNextBlockTimestamp = setNextBlockTimestamp; //# sourceMappingURL=setNextBlockTimestamp.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setNonce.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setNonce = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function setNonce(client, { address, nonce }) {
    await client.request({
        method: `${client.mode}_setNonce`,
        params: [
            address,
            (0, toHex_js_1.numberToHex)(nonce)
        ]
    });
}
exports.setNonce = setNonce; //# sourceMappingURL=setNonce.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setRpcUrl.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setRpcUrl = void 0;
async function setRpcUrl(client, jsonRpcUrl) {
    await client.request({
        method: `${client.mode}_setRpcUrl`,
        params: [
            jsonRpcUrl
        ]
    });
}
exports.setRpcUrl = setRpcUrl; //# sourceMappingURL=setRpcUrl.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setStorageAt.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setStorageAt = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function setStorageAt(client, { address, index, value }) {
    await client.request({
        method: `${client.mode}_setStorageAt`,
        params: [
            address,
            typeof index === 'number' ? (0, toHex_js_1.numberToHex)(index) : index,
            value
        ]
    });
}
exports.setStorageAt = setStorageAt; //# sourceMappingURL=setStorageAt.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/snapshot.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.snapshot = void 0;
async function snapshot(client) {
    return await client.request({
        method: 'evm_snapshot'
    });
}
exports.snapshot = snapshot; //# sourceMappingURL=snapshot.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/stopImpersonatingAccount.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stopImpersonatingAccount = void 0;
async function stopImpersonatingAccount(client, { address }) {
    await client.request({
        method: `${client.mode}_stopImpersonatingAccount`,
        params: [
            address
        ]
    });
}
exports.stopImpersonatingAccount = stopImpersonatingAccount; //# sourceMappingURL=stopImpersonatingAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/decorators/test.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.testActions = void 0;
const dropTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/dropTransaction.js [app-ssr] (ecmascript)");
const dumpState_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/dumpState.js [app-ssr] (ecmascript)");
const getAutomine_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/getAutomine.js [app-ssr] (ecmascript)");
const getTxpoolContent_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/getTxpoolContent.js [app-ssr] (ecmascript)");
const getTxpoolStatus_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/getTxpoolStatus.js [app-ssr] (ecmascript)");
const impersonateAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/impersonateAccount.js [app-ssr] (ecmascript)");
const increaseTime_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/increaseTime.js [app-ssr] (ecmascript)");
const inspectTxpool_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/inspectTxpool.js [app-ssr] (ecmascript)");
const loadState_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/loadState.js [app-ssr] (ecmascript)");
const mine_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/mine.js [app-ssr] (ecmascript)");
const removeBlockTimestampInterval_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/removeBlockTimestampInterval.js [app-ssr] (ecmascript)");
const reset_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/reset.js [app-ssr] (ecmascript)");
const revert_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/revert.js [app-ssr] (ecmascript)");
const sendUnsignedTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/sendUnsignedTransaction.js [app-ssr] (ecmascript)");
const setAutomine_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setAutomine.js [app-ssr] (ecmascript)");
const setBalance_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setBalance.js [app-ssr] (ecmascript)");
const setBlockGasLimit_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setBlockGasLimit.js [app-ssr] (ecmascript)");
const setBlockTimestampInterval_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setBlockTimestampInterval.js [app-ssr] (ecmascript)");
const setCode_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setCode.js [app-ssr] (ecmascript)");
const setCoinbase_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setCoinbase.js [app-ssr] (ecmascript)");
const setIntervalMining_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setIntervalMining.js [app-ssr] (ecmascript)");
const setLoggingEnabled_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setLoggingEnabled.js [app-ssr] (ecmascript)");
const setMinGasPrice_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setMinGasPrice.js [app-ssr] (ecmascript)");
const setNextBlockBaseFeePerGas_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setNextBlockBaseFeePerGas.js [app-ssr] (ecmascript)");
const setNextBlockTimestamp_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setNextBlockTimestamp.js [app-ssr] (ecmascript)");
const setNonce_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setNonce.js [app-ssr] (ecmascript)");
const setRpcUrl_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setRpcUrl.js [app-ssr] (ecmascript)");
const setStorageAt_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/setStorageAt.js [app-ssr] (ecmascript)");
const snapshot_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/snapshot.js [app-ssr] (ecmascript)");
const stopImpersonatingAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/test/stopImpersonatingAccount.js [app-ssr] (ecmascript)");
function testActions({ mode }) {
    return (client_)=>{
        const client = client_.extend(()=>({
                mode
            }));
        return {
            dropTransaction: (args)=>(0, dropTransaction_js_1.dropTransaction)(client, args),
            dumpState: ()=>(0, dumpState_js_1.dumpState)(client),
            getAutomine: ()=>(0, getAutomine_js_1.getAutomine)(client),
            getTxpoolContent: ()=>(0, getTxpoolContent_js_1.getTxpoolContent)(client),
            getTxpoolStatus: ()=>(0, getTxpoolStatus_js_1.getTxpoolStatus)(client),
            impersonateAccount: (args)=>(0, impersonateAccount_js_1.impersonateAccount)(client, args),
            increaseTime: (args)=>(0, increaseTime_js_1.increaseTime)(client, args),
            inspectTxpool: ()=>(0, inspectTxpool_js_1.inspectTxpool)(client),
            loadState: (args)=>(0, loadState_js_1.loadState)(client, args),
            mine: (args)=>(0, mine_js_1.mine)(client, args),
            removeBlockTimestampInterval: ()=>(0, removeBlockTimestampInterval_js_1.removeBlockTimestampInterval)(client),
            reset: (args)=>(0, reset_js_1.reset)(client, args),
            revert: (args)=>(0, revert_js_1.revert)(client, args),
            sendUnsignedTransaction: (args)=>(0, sendUnsignedTransaction_js_1.sendUnsignedTransaction)(client, args),
            setAutomine: (args)=>(0, setAutomine_js_1.setAutomine)(client, args),
            setBalance: (args)=>(0, setBalance_js_1.setBalance)(client, args),
            setBlockGasLimit: (args)=>(0, setBlockGasLimit_js_1.setBlockGasLimit)(client, args),
            setBlockTimestampInterval: (args)=>(0, setBlockTimestampInterval_js_1.setBlockTimestampInterval)(client, args),
            setCode: (args)=>(0, setCode_js_1.setCode)(client, args),
            setCoinbase: (args)=>(0, setCoinbase_js_1.setCoinbase)(client, args),
            setIntervalMining: (args)=>(0, setIntervalMining_js_1.setIntervalMining)(client, args),
            setLoggingEnabled: (args)=>(0, setLoggingEnabled_js_1.setLoggingEnabled)(client, args),
            setMinGasPrice: (args)=>(0, setMinGasPrice_js_1.setMinGasPrice)(client, args),
            setNextBlockBaseFeePerGas: (args)=>(0, setNextBlockBaseFeePerGas_js_1.setNextBlockBaseFeePerGas)(client, args),
            setNextBlockTimestamp: (args)=>(0, setNextBlockTimestamp_js_1.setNextBlockTimestamp)(client, args),
            setNonce: (args)=>(0, setNonce_js_1.setNonce)(client, args),
            setRpcUrl: (args)=>(0, setRpcUrl_js_1.setRpcUrl)(client, args),
            setStorageAt: (args)=>(0, setStorageAt_js_1.setStorageAt)(client, args),
            snapshot: ()=>(0, snapshot_js_1.snapshot)(client),
            stopImpersonatingAccount: (args)=>(0, stopImpersonatingAccount_js_1.stopImpersonatingAccount)(client, args)
        };
    };
}
exports.testActions = testActions; //# sourceMappingURL=test.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/createTestClient.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createTestClient = void 0;
const createClient_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/createClient.js [app-ssr] (ecmascript)");
const test_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/decorators/test.js [app-ssr] (ecmascript)");
function createTestClient(parameters) {
    const { key = 'test', name = 'Test Client', mode } = parameters;
    const client = (0, createClient_js_1.createClient)({
        ...parameters,
        key,
        name,
        type: 'testClient'
    });
    return client.extend((config)=>({
            mode,
            ...(0, test_js_1.testActions)({
                mode
            })(config)
        }));
}
exports.createTestClient = createTestClient; //# sourceMappingURL=createTestClient.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/addChain.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addChain = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function addChain(client, { chain }) {
    const { id, name, nativeCurrency, rpcUrls, blockExplorers } = chain;
    await client.request({
        method: 'wallet_addEthereumChain',
        params: [
            {
                chainId: (0, toHex_js_1.numberToHex)(id),
                chainName: name,
                nativeCurrency,
                rpcUrls: rpcUrls.default.http,
                blockExplorerUrls: blockExplorers ? Object.values(blockExplorers).map(({ url })=>url) : undefined
            }
        ]
    });
}
exports.addChain = addChain; //# sourceMappingURL=addChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/deployContract.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deployContract = void 0;
const encodeDeployData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-ssr] (ecmascript)");
const sendTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)");
function deployContract(walletClient, { abi, args, bytecode, ...request }) {
    const calldata = (0, encodeDeployData_js_1.encodeDeployData)({
        abi,
        args,
        bytecode
    });
    return (0, sendTransaction_js_1.sendTransaction)(walletClient, {
        ...request,
        data: calldata
    });
}
exports.deployContract = deployContract; //# sourceMappingURL=deployContract.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/getAddresses.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAddresses = void 0;
const getAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-ssr] (ecmascript)");
async function getAddresses(client) {
    if (client.account?.type === 'local') return [
        client.account.address
    ];
    const addresses = await client.request({
        method: 'eth_accounts'
    });
    return addresses.map((address)=>(0, getAddress_js_1.checksumAddress)(address));
}
exports.getAddresses = getAddresses; //# sourceMappingURL=getAddresses.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/getPermissions.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPermissions = void 0;
async function getPermissions(client) {
    const permissions = await client.request({
        method: 'wallet_getPermissions'
    });
    return permissions;
}
exports.getPermissions = getPermissions; //# sourceMappingURL=getPermissions.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/requestAddresses.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestAddresses = void 0;
const getAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-ssr] (ecmascript)");
async function requestAddresses(client) {
    const addresses = await client.request({
        method: 'eth_requestAccounts'
    });
    return addresses.map((address)=>(0, getAddress_js_1.getAddress)(address));
}
exports.requestAddresses = requestAddresses; //# sourceMappingURL=requestAddresses.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/requestPermissions.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestPermissions = void 0;
async function requestPermissions(client, permissions) {
    return client.request({
        method: 'wallet_requestPermissions',
        params: [
            permissions
        ]
    });
}
exports.requestPermissions = requestPermissions; //# sourceMappingURL=requestPermissions.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/signMessage.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signMessage = void 0;
const parseAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function signMessage(client, { account: account_ = client.account, message }) {
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/actions/wallet/signMessage'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    if (account.type === 'local') return account.signMessage({
        message
    });
    const message_ = (()=>{
        if (typeof message === 'string') return (0, toHex_js_1.stringToHex)(message);
        if (message.raw instanceof Uint8Array) return (0, toHex_js_1.toHex)(message.raw);
        return message.raw;
    })();
    return client.request({
        method: 'personal_sign',
        params: [
            message_,
            account.address
        ]
    });
}
exports.signMessage = signMessage; //# sourceMappingURL=signMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/signTransaction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signTransaction = void 0;
const parseAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const assertCurrentChain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)");
const transactionRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
const getAction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/getAction.js [app-ssr] (ecmascript)");
const index_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/index.js [app-ssr] (ecmascript)");
const assertRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
const getChainId_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-ssr] (ecmascript)");
async function signTransaction(client, args) {
    const { account: account_ = client.account, chain = client.chain, ...transaction } = args;
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/actions/wallet/signTransaction'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    (0, assertRequest_js_1.assertRequest)({
        account,
        ...args
    });
    const chainId = await (0, getAction_js_1.getAction)(client, getChainId_js_1.getChainId, 'getChainId')({});
    if (chain !== null) (0, assertCurrentChain_js_1.assertCurrentChain)({
        currentChainId: chainId,
        chain
    });
    const formatters = chain?.formatters || client.chain?.formatters;
    const format = formatters?.transactionRequest?.format || transactionRequest_js_1.formatTransactionRequest;
    if (account.type === 'local') return account.signTransaction({
        ...transaction,
        chainId
    }, {
        serializer: client.chain?.serializers?.transaction
    });
    return await client.request({
        method: 'eth_signTransaction',
        params: [
            {
                ...format(transaction),
                chainId: (0, index_js_1.numberToHex)(chainId),
                from: account.address
            }
        ]
    });
}
exports.signTransaction = signTransaction; //# sourceMappingURL=signTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/signTypedData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signTypedData = void 0;
const parseAccount_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
const account_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/account.js [app-ssr] (ecmascript)");
const isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
const stringify_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
const typedData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/typedData.js [app-ssr] (ecmascript)");
async function signTypedData(client, { account: account_ = client.account, domain, message, primaryType, types: types_ }) {
    if (!account_) throw new account_js_1.AccountNotFoundError({
        docsPath: '/docs/actions/wallet/signTypedData'
    });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    const types = {
        EIP712Domain: (0, typedData_js_1.getTypesForEIP712Domain)({
            domain
        }),
        ...types_
    };
    (0, typedData_js_1.validateTypedData)({
        domain,
        message,
        primaryType,
        types
    });
    if (account.type === 'local') return account.signTypedData({
        domain,
        primaryType,
        types,
        message
    });
    const typedData = (0, stringify_js_1.stringify)({
        domain: domain ?? {},
        primaryType,
        types,
        message
    }, (_, value)=>(0, isHex_js_1.isHex)(value) ? value.toLowerCase() : value);
    return client.request({
        method: 'eth_signTypedData_v4',
        params: [
            account.address,
            typedData
        ]
    });
}
exports.signTypedData = signTypedData; //# sourceMappingURL=signTypedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/switchChain.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.switchChain = void 0;
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
async function switchChain(client, { id }) {
    await client.request({
        method: 'wallet_switchEthereumChain',
        params: [
            {
                chainId: (0, toHex_js_1.numberToHex)(id)
            }
        ]
    });
}
exports.switchChain = switchChain; //# sourceMappingURL=switchChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/watchAsset.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watchAsset = void 0;
async function watchAsset(client, params) {
    const added = await client.request({
        method: 'wallet_watchAsset',
        params
    });
    return added;
}
exports.watchAsset = watchAsset; //# sourceMappingURL=watchAsset.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/decorators/wallet.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.walletActions = void 0;
const getChainId_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/public/getChainId.js [app-ssr] (ecmascript)");
const addChain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/addChain.js [app-ssr] (ecmascript)");
const deployContract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/deployContract.js [app-ssr] (ecmascript)");
const getAddresses_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/getAddresses.js [app-ssr] (ecmascript)");
const getPermissions_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/getPermissions.js [app-ssr] (ecmascript)");
const prepareTransactionRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)");
const requestAddresses_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/requestAddresses.js [app-ssr] (ecmascript)");
const requestPermissions_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/requestPermissions.js [app-ssr] (ecmascript)");
const sendRawTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/sendRawTransaction.js [app-ssr] (ecmascript)");
const sendTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)");
const signMessage_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/signMessage.js [app-ssr] (ecmascript)");
const signTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/signTransaction.js [app-ssr] (ecmascript)");
const signTypedData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/signTypedData.js [app-ssr] (ecmascript)");
const switchChain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/switchChain.js [app-ssr] (ecmascript)");
const watchAsset_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/watchAsset.js [app-ssr] (ecmascript)");
const writeContract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/wallet/writeContract.js [app-ssr] (ecmascript)");
function walletActions(client) {
    return {
        addChain: (args)=>(0, addChain_js_1.addChain)(client, args),
        deployContract: (args)=>(0, deployContract_js_1.deployContract)(client, args),
        getAddresses: ()=>(0, getAddresses_js_1.getAddresses)(client),
        getChainId: ()=>(0, getChainId_js_1.getChainId)(client),
        getPermissions: ()=>(0, getPermissions_js_1.getPermissions)(client),
        prepareTransactionRequest: (args)=>(0, prepareTransactionRequest_js_1.prepareTransactionRequest)(client, args),
        requestAddresses: ()=>(0, requestAddresses_js_1.requestAddresses)(client),
        requestPermissions: (args)=>(0, requestPermissions_js_1.requestPermissions)(client, args),
        sendRawTransaction: (args)=>(0, sendRawTransaction_js_1.sendRawTransaction)(client, args),
        sendTransaction: (args)=>(0, sendTransaction_js_1.sendTransaction)(client, args),
        signMessage: (args)=>(0, signMessage_js_1.signMessage)(client, args),
        signTransaction: (args)=>(0, signTransaction_js_1.signTransaction)(client, args),
        signTypedData: (args)=>(0, signTypedData_js_1.signTypedData)(client, args),
        switchChain: (args)=>(0, switchChain_js_1.switchChain)(client, args),
        watchAsset: (args)=>(0, watchAsset_js_1.watchAsset)(client, args),
        writeContract: (args)=>(0, writeContract_js_1.writeContract)(client, args)
    };
}
exports.walletActions = walletActions; //# sourceMappingURL=wallet.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/createWalletClient.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createWalletClient = void 0;
const createClient_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/createClient.js [app-ssr] (ecmascript)");
const wallet_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/decorators/wallet.js [app-ssr] (ecmascript)");
function createWalletClient(parameters) {
    const { key = 'wallet', name = 'Wallet Client', transport } = parameters;
    const client = (0, createClient_js_1.createClient)({
        ...parameters,
        key,
        name,
        transport: (opts)=>transport({
                ...opts,
                retryCount: 0
            }),
        type: 'walletClient'
    });
    return client.extend(wallet_js_1.walletActions);
}
exports.createWalletClient = createWalletClient; //# sourceMappingURL=createWalletClient.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/transports/webSocket.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.webSocket = void 0;
const request_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/request.js [app-ssr] (ecmascript)");
const transport_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transport.js [app-ssr] (ecmascript)");
const rpc_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/rpc.js [app-ssr] (ecmascript)");
const createTransport_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/transports/createTransport.js [app-ssr] (ecmascript)");
function webSocket(url, config = {}) {
    const { key = 'webSocket', name = 'WebSocket JSON-RPC', retryDelay } = config;
    return ({ chain, retryCount: retryCount_, timeout: timeout_ })=>{
        const retryCount = config.retryCount ?? retryCount_;
        const timeout = timeout_ ?? config.timeout ?? 10000;
        const url_ = url || chain?.rpcUrls.default.webSocket?.[0];
        if (!url_) throw new transport_js_1.UrlRequiredError();
        return (0, createTransport_js_1.createTransport)({
            key,
            name,
            async request ({ method, params }) {
                const body = {
                    method,
                    params
                };
                const socket = await (0, rpc_js_1.getSocket)(url_);
                const { error, result } = await rpc_js_1.rpc.webSocketAsync(socket, {
                    body,
                    timeout
                });
                if (error) throw new request_js_1.RpcRequestError({
                    body,
                    error,
                    url: url_
                });
                return result;
            },
            retryCount,
            retryDelay,
            timeout,
            type: 'webSocket'
        }, {
            getSocket () {
                return (0, rpc_js_1.getSocket)(url_);
            },
            async subscribe ({ params, onData, onError }) {
                const socket = await (0, rpc_js_1.getSocket)(url_);
                const { result: subscriptionId } = await new Promise((resolve, reject)=>rpc_js_1.rpc.webSocket(socket, {
                        body: {
                            method: 'eth_subscribe',
                            params
                        },
                        onResponse (response) {
                            if (response.error) {
                                reject(response.error);
                                onError?.(response.error);
                                return;
                            }
                            if (typeof response.id === 'number') {
                                resolve(response);
                                return;
                            }
                            if (response.method !== 'eth_subscription') return;
                            onData(response.params);
                        }
                    }));
                return {
                    subscriptionId,
                    async unsubscribe () {
                        return new Promise((resolve)=>rpc_js_1.rpc.webSocket(socket, {
                                body: {
                                    method: 'eth_unsubscribe',
                                    params: [
                                        subscriptionId
                                    ]
                                },
                                onResponse: resolve
                            }));
                    }
                };
            }
        });
    };
}
exports.webSocket = webSocket; //# sourceMappingURL=webSocket.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/address.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zeroAddress = void 0;
exports.zeroAddress = '0x0000000000000000000000000000000000000000'; //# sourceMappingURL=address.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/number.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.minInt144 = exports.minInt136 = exports.minInt128 = exports.minInt120 = exports.minInt112 = exports.minInt104 = exports.minInt96 = exports.minInt88 = exports.minInt80 = exports.minInt72 = exports.minInt64 = exports.minInt56 = exports.minInt48 = exports.minInt40 = exports.minInt32 = exports.minInt24 = exports.minInt16 = exports.minInt8 = exports.maxInt256 = exports.maxInt248 = exports.maxInt240 = exports.maxInt232 = exports.maxInt224 = exports.maxInt216 = exports.maxInt208 = exports.maxInt200 = exports.maxInt192 = exports.maxInt184 = exports.maxInt176 = exports.maxInt168 = exports.maxInt160 = exports.maxInt152 = exports.maxInt144 = exports.maxInt136 = exports.maxInt128 = exports.maxInt120 = exports.maxInt112 = exports.maxInt104 = exports.maxInt96 = exports.maxInt88 = exports.maxInt80 = exports.maxInt72 = exports.maxInt64 = exports.maxInt56 = exports.maxInt48 = exports.maxInt40 = exports.maxInt32 = exports.maxInt24 = exports.maxInt16 = exports.maxInt8 = void 0;
exports.maxUint256 = exports.maxUint248 = exports.maxUint240 = exports.maxUint232 = exports.maxUint224 = exports.maxUint216 = exports.maxUint208 = exports.maxUint200 = exports.maxUint192 = exports.maxUint184 = exports.maxUint176 = exports.maxUint168 = exports.maxUint160 = exports.maxUint152 = exports.maxUint144 = exports.maxUint136 = exports.maxUint128 = exports.maxUint120 = exports.maxUint112 = exports.maxUint104 = exports.maxUint96 = exports.maxUint88 = exports.maxUint80 = exports.maxUint72 = exports.maxUint64 = exports.maxUint56 = exports.maxUint48 = exports.maxUint40 = exports.maxUint32 = exports.maxUint24 = exports.maxUint16 = exports.maxUint8 = exports.minInt256 = exports.minInt248 = exports.minInt240 = exports.minInt232 = exports.minInt224 = exports.minInt216 = exports.minInt208 = exports.minInt200 = exports.minInt192 = exports.minInt184 = exports.minInt176 = exports.minInt168 = exports.minInt160 = exports.minInt152 = void 0;
exports.maxInt8 = 2n ** (8n - 1n) - 1n;
exports.maxInt16 = 2n ** (16n - 1n) - 1n;
exports.maxInt24 = 2n ** (24n - 1n) - 1n;
exports.maxInt32 = 2n ** (32n - 1n) - 1n;
exports.maxInt40 = 2n ** (40n - 1n) - 1n;
exports.maxInt48 = 2n ** (48n - 1n) - 1n;
exports.maxInt56 = 2n ** (56n - 1n) - 1n;
exports.maxInt64 = 2n ** (64n - 1n) - 1n;
exports.maxInt72 = 2n ** (72n - 1n) - 1n;
exports.maxInt80 = 2n ** (80n - 1n) - 1n;
exports.maxInt88 = 2n ** (88n - 1n) - 1n;
exports.maxInt96 = 2n ** (96n - 1n) - 1n;
exports.maxInt104 = 2n ** (104n - 1n) - 1n;
exports.maxInt112 = 2n ** (112n - 1n) - 1n;
exports.maxInt120 = 2n ** (120n - 1n) - 1n;
exports.maxInt128 = 2n ** (128n - 1n) - 1n;
exports.maxInt136 = 2n ** (136n - 1n) - 1n;
exports.maxInt144 = 2n ** (144n - 1n) - 1n;
exports.maxInt152 = 2n ** (152n - 1n) - 1n;
exports.maxInt160 = 2n ** (160n - 1n) - 1n;
exports.maxInt168 = 2n ** (168n - 1n) - 1n;
exports.maxInt176 = 2n ** (176n - 1n) - 1n;
exports.maxInt184 = 2n ** (184n - 1n) - 1n;
exports.maxInt192 = 2n ** (192n - 1n) - 1n;
exports.maxInt200 = 2n ** (200n - 1n) - 1n;
exports.maxInt208 = 2n ** (208n - 1n) - 1n;
exports.maxInt216 = 2n ** (216n - 1n) - 1n;
exports.maxInt224 = 2n ** (224n - 1n) - 1n;
exports.maxInt232 = 2n ** (232n - 1n) - 1n;
exports.maxInt240 = 2n ** (240n - 1n) - 1n;
exports.maxInt248 = 2n ** (248n - 1n) - 1n;
exports.maxInt256 = 2n ** (256n - 1n) - 1n;
exports.minInt8 = -(2n ** (8n - 1n));
exports.minInt16 = -(2n ** (16n - 1n));
exports.minInt24 = -(2n ** (24n - 1n));
exports.minInt32 = -(2n ** (32n - 1n));
exports.minInt40 = -(2n ** (40n - 1n));
exports.minInt48 = -(2n ** (48n - 1n));
exports.minInt56 = -(2n ** (56n - 1n));
exports.minInt64 = -(2n ** (64n - 1n));
exports.minInt72 = -(2n ** (72n - 1n));
exports.minInt80 = -(2n ** (80n - 1n));
exports.minInt88 = -(2n ** (88n - 1n));
exports.minInt96 = -(2n ** (96n - 1n));
exports.minInt104 = -(2n ** (104n - 1n));
exports.minInt112 = -(2n ** (112n - 1n));
exports.minInt120 = -(2n ** (120n - 1n));
exports.minInt128 = -(2n ** (128n - 1n));
exports.minInt136 = -(2n ** (136n - 1n));
exports.minInt144 = -(2n ** (144n - 1n));
exports.minInt152 = -(2n ** (152n - 1n));
exports.minInt160 = -(2n ** (160n - 1n));
exports.minInt168 = -(2n ** (168n - 1n));
exports.minInt176 = -(2n ** (176n - 1n));
exports.minInt184 = -(2n ** (184n - 1n));
exports.minInt192 = -(2n ** (192n - 1n));
exports.minInt200 = -(2n ** (200n - 1n));
exports.minInt208 = -(2n ** (208n - 1n));
exports.minInt216 = -(2n ** (216n - 1n));
exports.minInt224 = -(2n ** (224n - 1n));
exports.minInt232 = -(2n ** (232n - 1n));
exports.minInt240 = -(2n ** (240n - 1n));
exports.minInt248 = -(2n ** (248n - 1n));
exports.minInt256 = -(2n ** (256n - 1n));
exports.maxUint8 = 2n ** 8n - 1n;
exports.maxUint16 = 2n ** 16n - 1n;
exports.maxUint24 = 2n ** 24n - 1n;
exports.maxUint32 = 2n ** 32n - 1n;
exports.maxUint40 = 2n ** 40n - 1n;
exports.maxUint48 = 2n ** 48n - 1n;
exports.maxUint56 = 2n ** 56n - 1n;
exports.maxUint64 = 2n ** 64n - 1n;
exports.maxUint72 = 2n ** 72n - 1n;
exports.maxUint80 = 2n ** 80n - 1n;
exports.maxUint88 = 2n ** 88n - 1n;
exports.maxUint96 = 2n ** 96n - 1n;
exports.maxUint104 = 2n ** 104n - 1n;
exports.maxUint112 = 2n ** 112n - 1n;
exports.maxUint120 = 2n ** 120n - 1n;
exports.maxUint128 = 2n ** 128n - 1n;
exports.maxUint136 = 2n ** 136n - 1n;
exports.maxUint144 = 2n ** 144n - 1n;
exports.maxUint152 = 2n ** 152n - 1n;
exports.maxUint160 = 2n ** 160n - 1n;
exports.maxUint168 = 2n ** 168n - 1n;
exports.maxUint176 = 2n ** 176n - 1n;
exports.maxUint184 = 2n ** 184n - 1n;
exports.maxUint192 = 2n ** 192n - 1n;
exports.maxUint200 = 2n ** 200n - 1n;
exports.maxUint208 = 2n ** 208n - 1n;
exports.maxUint216 = 2n ** 216n - 1n;
exports.maxUint224 = 2n ** 224n - 1n;
exports.maxUint232 = 2n ** 232n - 1n;
exports.maxUint240 = 2n ** 240n - 1n;
exports.maxUint248 = 2n ** 248n - 1n;
exports.maxUint256 = 2n ** 256n - 1n; //# sourceMappingURL=number.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/bytes.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zeroHash = void 0;
exports.zeroHash = '0x0000000000000000000000000000000000000000000000000000000000000000'; //# sourceMappingURL=bytes.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeDeployData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeDeployData = void 0;
const abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
const decodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-ssr] (ecmascript)");
const docsPath = '/docs/contract/decodeDeployData';
function decodeDeployData({ abi, bytecode, data }) {
    if (data === bytecode) return {
        bytecode
    };
    const description = abi.find((x)=>'type' in x && x.type === 'constructor');
    if (!description) throw new abi_js_1.AbiConstructorNotFoundError({
        docsPath
    });
    if (!('inputs' in description)) throw new abi_js_1.AbiConstructorParamsNotFoundError({
        docsPath
    });
    if (!description.inputs || description.inputs.length === 0) throw new abi_js_1.AbiConstructorParamsNotFoundError({
        docsPath
    });
    const args = (0, decodeAbiParameters_js_1.decodeAbiParameters)(description.inputs, `0x${data.replace(bytecode, '')}`);
    return {
        args,
        bytecode
    };
}
exports.decodeDeployData = decodeDeployData; //# sourceMappingURL=decodeDeployData.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/compactSignatureToSignature.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.compactSignatureToSignature = void 0;
const toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
function compactSignatureToSignature({ r, yParityAndS }) {
    const yParityAndS_bytes = (0, toBytes_js_1.hexToBytes)(yParityAndS);
    const v = yParityAndS_bytes[0] & 0x80 ? 28n : 27n;
    const s = yParityAndS_bytes;
    if (v === 28n) s[0] &= 0x7f;
    return {
        r,
        s: (0, toHex_js_1.bytesToHex)(s),
        v
    };
}
exports.compactSignatureToSignature = compactSignatureToSignature; //# sourceMappingURL=compactSignatureToSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/hexToCompactSignature.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hexToCompactSignature = void 0;
const secp256k1_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/secp256k1.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
function hexToCompactSignature(signatureHex) {
    const { r, s } = secp256k1_1.secp256k1.Signature.fromCompact(signatureHex.slice(2, 130));
    return {
        r: (0, toHex_js_1.numberToHex)(r, {
            size: 32
        }),
        yParityAndS: (0, toHex_js_1.numberToHex)(s, {
            size: 32
        })
    };
}
exports.hexToCompactSignature = hexToCompactSignature; //# sourceMappingURL=hexToCompactSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/hexToSignature.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hexToSignature = void 0;
const secp256k1_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/secp256k1.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
function hexToSignature(signatureHex) {
    const { r, s } = secp256k1_1.secp256k1.Signature.fromCompact(signatureHex.slice(2, 130));
    const v = BigInt(`0x${signatureHex.slice(130)}`);
    return {
        r: (0, toHex_js_1.numberToHex)(r, {
            size: 32
        }),
        s: (0, toHex_js_1.numberToHex)(s, {
            size: 32
        }),
        v
    };
}
exports.hexToSignature = hexToSignature; //# sourceMappingURL=hexToSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/signatureToCompactSignature.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signatureToCompactSignature = void 0;
const index_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/index.js [app-ssr] (ecmascript)");
function signatureToCompactSignature(signature) {
    const { r, s, v } = signature;
    const yParity = v - 27n;
    let yParityAndS = s;
    if (yParity === 1n) {
        const bytes = (0, index_js_1.hexToBytes)(s);
        bytes[0] |= 0x80;
        yParityAndS = (0, index_js_1.bytesToHex)(bytes);
    }
    return {
        r,
        yParityAndS
    };
}
exports.signatureToCompactSignature = signatureToCompactSignature; //# sourceMappingURL=signatureToCompactSignature.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/compactSignatureToHex.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.compactSignatureToHex = void 0;
const secp256k1_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/secp256k1.js [app-ssr] (ecmascript)");
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
function compactSignatureToHex({ r, yParityAndS }) {
    return `0x${new secp256k1_1.secp256k1.Signature((0, fromHex_js_1.hexToBigInt)(r), (0, fromHex_js_1.hexToBigInt)(yParityAndS)).toCompactHex()}`;
}
exports.compactSignatureToHex = compactSignatureToHex; //# sourceMappingURL=compactSignatureToHex.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/signatureToHex.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signatureToHex = void 0;
const secp256k1_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/secp256k1.js [app-ssr] (ecmascript)");
const fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
const toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
function signatureToHex({ r, s, v }) {
    return `0x${new secp256k1_1.secp256k1.Signature((0, fromHex_js_1.hexToBigInt)(r), (0, fromHex_js_1.hexToBigInt)(s)).toCompactHex()}${(0, toHex_js_1.toHex)(v).slice(2)}`;
}
exports.signatureToHex = signatureToHex; //# sourceMappingURL=signatureToHex.js.map
}}),
"[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.maxInt112 = exports.maxInt104 = exports.maxInt96 = exports.maxInt88 = exports.maxInt80 = exports.maxInt72 = exports.maxInt64 = exports.maxInt56 = exports.maxInt48 = exports.maxInt40 = exports.maxInt32 = exports.maxInt24 = exports.maxInt16 = exports.maxInt8 = exports.weiUnits = exports.gweiUnits = exports.etherUnits = exports.zeroAddress = exports.multicall3Abi = exports.webSocket = exports.createWalletClient = exports.createTransport = exports.walletActions = exports.testActions = exports.publicActions = exports.createTestClient = exports.createPublicClient = exports.http = exports.fallback = exports.custom = exports.createClient = exports.getContract = exports.parseAbiParameters = exports.parseAbiParameter = exports.parseAbiItem = exports.parseAbi = exports.UnknownSignatureError = exports.UnknownTypeError = exports.SolidityProtectedKeywordError = exports.InvalidStructSignatureError = exports.InvalidSignatureError = exports.InvalidParenthesisError = exports.InvalidParameterError = exports.InvalidModifierError = exports.InvalidFunctionModifierError = exports.InvalidAbiTypeParameterError = exports.InvalidAbiItemError = exports.InvalidAbiParametersError = exports.InvalidAbiParameterError = exports.CircularReferenceError = void 0;
exports.maxUint256 = exports.maxUint248 = exports.maxUint240 = exports.maxUint232 = exports.maxUint224 = exports.maxUint216 = exports.maxUint208 = exports.maxUint200 = exports.maxUint192 = exports.maxUint184 = exports.maxUint176 = exports.maxUint168 = exports.maxUint160 = exports.maxUint152 = exports.maxUint144 = exports.maxUint136 = exports.maxUint128 = exports.maxUint120 = exports.maxUint112 = exports.maxUint104 = exports.maxUint96 = exports.maxUint88 = exports.maxUint80 = exports.maxUint72 = exports.maxUint64 = exports.maxUint56 = exports.maxUint48 = exports.maxUint40 = exports.maxUint32 = exports.maxUint24 = exports.maxUint16 = exports.maxUint8 = exports.maxInt256 = exports.maxInt248 = exports.maxInt240 = exports.maxInt232 = exports.maxInt224 = exports.maxInt216 = exports.maxInt208 = exports.maxInt200 = exports.maxInt192 = exports.maxInt184 = exports.maxInt176 = exports.maxInt168 = exports.maxInt160 = exports.maxInt152 = exports.maxInt144 = exports.maxInt136 = exports.maxInt128 = exports.maxInt120 = void 0;
exports.AbiFunctionOutputsNotFoundError = exports.AbiFunctionNotFoundError = exports.AbiEventSignatureNotFoundError = exports.AbiEventSignatureEmptyTopicsError = exports.AbiEventNotFoundError = exports.AbiErrorSignatureNotFoundError = exports.AbiErrorNotFoundError = exports.AbiErrorInputsNotFoundError = exports.AbiEncodingBytesSizeMismatchError = exports.AbiEncodingLengthMismatchError = exports.AbiEncodingArrayLengthMismatchError = exports.AbiDecodingZeroDataError = exports.AbiDecodingDataSizeTooSmallError = exports.AbiDecodingDataSizeInvalidError = exports.AbiConstructorParamsNotFoundError = exports.AbiConstructorNotFoundError = exports.presignMessagePrefix = exports.zeroHash = exports.minInt256 = exports.minInt248 = exports.minInt240 = exports.minInt232 = exports.minInt224 = exports.minInt216 = exports.minInt208 = exports.minInt200 = exports.minInt192 = exports.minInt184 = exports.minInt176 = exports.minInt168 = exports.minInt160 = exports.minInt152 = exports.minInt144 = exports.minInt136 = exports.minInt128 = exports.minInt120 = exports.minInt112 = exports.minInt104 = exports.minInt96 = exports.minInt88 = exports.minInt80 = exports.minInt72 = exports.minInt64 = exports.minInt56 = exports.minInt48 = exports.minInt40 = exports.minInt32 = exports.minInt24 = exports.minInt16 = exports.minInt8 = void 0;
exports.InvalidHexBooleanError = exports.IntegerOutOfRangeError = exports.InvalidBytesBooleanError = exports.DataLengthTooShortError = exports.DataLengthTooLongError = exports.InvalidChainIdError = exports.ClientChainNotConfiguredError = exports.ChainNotFoundError = exports.ChainMismatchError = exports.ChainDoesNotSupportContract = exports.UserRejectedRequestError = exports.UnsupportedProviderMethodError = exports.UnknownRpcError = exports.UnauthorizedProviderError = exports.TransactionRejectedRpcError = exports.SwitchChainError = exports.RpcError = exports.ResourceUnavailableRpcError = exports.ResourceNotFoundRpcError = exports.ProviderRpcError = exports.ProviderDisconnectedError = exports.ParseRpcError = exports.MethodNotSupportedRpcError = exports.MethodNotFoundRpcError = exports.LimitExceededRpcError = exports.JsonRpcVersionUnsupportedError = exports.InvalidRequestRpcError = exports.InvalidParamsRpcError = exports.InvalidInputRpcError = exports.InternalRpcError = exports.ChainDisconnectedError = exports.MaxFeePerGasTooLowError = exports.Eip1559FeesNotSupportedError = exports.BaseFeeScalarError = exports.RawContractError = exports.ContractFunctionZeroDataError = exports.ContractFunctionRevertedError = exports.ContractFunctionExecutionError = exports.CallExecutionError = exports.BlockNotFoundError = exports.BaseError = exports.UnsupportedPackedAbiType = exports.InvalidDefinitionTypeError = exports.InvalidArrayError = exports.InvalidAbiEncodingTypeError = exports.InvalidAbiDecodingTypeError = exports.DecodeLogTopicsMismatch = exports.DecodeLogDataMismatch = exports.BytesSizeMismatchError = exports.AbiFunctionSignatureNotFoundError = void 0;
exports.encodeAbiParameters = exports.decodeFunctionResult = exports.decodeFunctionData = exports.decodeEventLog = exports.decodeErrorResult = exports.decodeDeployData = exports.decodeAbiParameters = exports.formatLog = exports.formatBlock = exports.defineBlock = exports.namehash = exports.labelhash = exports.UrlRequiredError = exports.SliceOffsetOutOfBoundsError = exports.SizeExceedsPaddingSizeError = exports.WaitForTransactionReceiptTimeoutError = exports.TransactionReceiptNotFoundError = exports.TransactionNotFoundError = exports.TransactionExecutionError = exports.InvalidStorageKeySizeError = exports.InvalidSerializedTransactionTypeError = exports.InvalidSerializedTransactionError = exports.InvalidSerializableTransactionError = exports.InvalidLegacyVError = exports.FeeConflictError = exports.InvalidAddressError = exports.WebSocketRequestError = exports.TimeoutError = exports.RpcRequestError = exports.HttpRequestError = exports.FilterTypeNotSupportedError = exports.UnknownNodeError = exports.TransactionTypeNotSupportedError = exports.TipAboveFeeCapError = exports.NonceTooLowError = exports.NonceTooHighError = exports.NonceMaxValueError = exports.IntrinsicGasTooLowError = exports.IntrinsicGasTooHighError = exports.InsufficientFundsError = exports.FeeCapTooLowError = exports.FeeCapTooHighError = exports.ExecutionRevertedError = exports.EstimateGasExecutionError = exports.EnsAvatarUnsupportedNamespaceError = exports.EnsAvatarInvalidNftUriError = exports.EnsAvatarUriResolutionError = exports.SizeOverflowError = exports.OffsetOutOfBoundsError = exports.InvalidHexValueError = void 0;
exports.toHex = exports.stringToHex = exports.numberToHex = exports.bytesToHex = exports.boolToHex = exports.toBytes = exports.stringToBytes = exports.numberToBytes = exports.hexToBytes = exports.boolToBytes = exports.assertTransactionLegacy = exports.assertTransactionEIP2930 = exports.assertTransactionEIP1559 = exports.assertRequest = exports.verifyTypedData = exports.verifyMessage = exports.toRlp = exports.hexToRlp = exports.bytesToRlp = exports.signatureToHex = exports.compactSignatureToHex = exports.signatureToCompactSignature = exports.recoverTypedDataAddress = exports.recoverPublicKey = exports.recoverMessageAddress = exports.recoverAddress = exports.hexToSignature = exports.hexToCompactSignature = exports.compactSignatureToSignature = exports.hashTypedData = exports.hashDomain = exports.getTransactionType = exports.getSerializedTransactionType = exports.getCreateAddress = exports.getCreate2Address = exports.getContractAddress = exports.getAbiItem = exports.rpcTransactionType = exports.formatTransactionRequest = exports.defineTransactionRequest = exports.formatTransactionReceipt = exports.defineTransactionReceipt = exports.transactionType = exports.formatTransaction = exports.defineTransaction = exports.encodeFunctionResult = exports.encodeFunctionData = exports.encodeEventTopics = exports.encodeErrorResult = exports.encodeDeployData = void 0;
exports.parseUnits = exports.parseTransaction = exports.parseGwei = exports.parseEther = exports.padHex = exports.padBytes = exports.pad = exports.ripemd160 = exports.sha256 = exports.keccak256 = exports.isHex = exports.isHash = exports.isBytes = exports.isAddressEqual = exports.isAddress = exports.hashMessage = exports.getFunctionSignature = exports.getFunctionSelector = exports.getEventSignature = exports.getEventSelector = exports.getContractError = exports.getAddress = exports.checksumAddress = exports.fromRlp = exports.hexToString = exports.hexToNumber = exports.hexToBool = exports.hexToBigInt = exports.fromHex = exports.formatUnits = exports.formatGwei = exports.formatEther = exports.encodePacked = exports.getChainContractAddress = exports.extractChain = exports.defineChain = exports.assertCurrentChain = exports.concatHex = exports.concatBytes = exports.concat = exports.offchainLookupSignature = exports.offchainLookupAbiItem = exports.offchainLookup = exports.ccipFetch = exports.fromBytes = exports.bytesToString = exports.bytesToNumber = exports.bytesToBool = exports.bytesToBigint = exports.bytesToBigInt = void 0;
exports.getTypesForEIP712Domain = exports.domainSeparator = exports.validateTypedData = exports.trim = exports.stringify = exports.sliceHex = exports.sliceBytes = exports.slice = exports.size = exports.serializeTransaction = exports.serializeAccessList = void 0;
var abitype_1 = __turbopack_require__("[project]/node_modules/.pnpm/abitype@0.9.8_typescript@5.7.3/node_modules/abitype/dist/cjs/index.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "CircularReferenceError", {
    enumerable: true,
    get: function() {
        return abitype_1.CircularReferenceError;
    }
});
Object.defineProperty(exports, "InvalidAbiParameterError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidAbiParameterError;
    }
});
Object.defineProperty(exports, "InvalidAbiParametersError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidAbiParametersError;
    }
});
Object.defineProperty(exports, "InvalidAbiItemError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidAbiItemError;
    }
});
Object.defineProperty(exports, "InvalidAbiTypeParameterError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidAbiTypeParameterError;
    }
});
Object.defineProperty(exports, "InvalidFunctionModifierError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidFunctionModifierError;
    }
});
Object.defineProperty(exports, "InvalidModifierError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidModifierError;
    }
});
Object.defineProperty(exports, "InvalidParameterError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidParameterError;
    }
});
Object.defineProperty(exports, "InvalidParenthesisError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidParenthesisError;
    }
});
Object.defineProperty(exports, "InvalidSignatureError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidSignatureError;
    }
});
Object.defineProperty(exports, "InvalidStructSignatureError", {
    enumerable: true,
    get: function() {
        return abitype_1.InvalidStructSignatureError;
    }
});
Object.defineProperty(exports, "SolidityProtectedKeywordError", {
    enumerable: true,
    get: function() {
        return abitype_1.SolidityProtectedKeywordError;
    }
});
Object.defineProperty(exports, "UnknownTypeError", {
    enumerable: true,
    get: function() {
        return abitype_1.UnknownTypeError;
    }
});
Object.defineProperty(exports, "UnknownSignatureError", {
    enumerable: true,
    get: function() {
        return abitype_1.UnknownSignatureError;
    }
});
Object.defineProperty(exports, "parseAbi", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbi;
    }
});
Object.defineProperty(exports, "parseAbiItem", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiItem;
    }
});
Object.defineProperty(exports, "parseAbiParameter", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiParameter;
    }
});
Object.defineProperty(exports, "parseAbiParameters", {
    enumerable: true,
    get: function() {
        return abitype_1.parseAbiParameters;
    }
});
var getContract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/actions/getContract.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getContract", {
    enumerable: true,
    get: function() {
        return getContract_js_1.getContract;
    }
});
var createClient_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/createClient.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "createClient", {
    enumerable: true,
    get: function() {
        return createClient_js_1.createClient;
    }
});
var custom_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/transports/custom.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "custom", {
    enumerable: true,
    get: function() {
        return custom_js_1.custom;
    }
});
var fallback_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/transports/fallback.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "fallback", {
    enumerable: true,
    get: function() {
        return fallback_js_1.fallback;
    }
});
var http_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/transports/http.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "http", {
    enumerable: true,
    get: function() {
        return http_js_1.http;
    }
});
var createPublicClient_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/createPublicClient.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "createPublicClient", {
    enumerable: true,
    get: function() {
        return createPublicClient_js_1.createPublicClient;
    }
});
var createTestClient_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/createTestClient.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "createTestClient", {
    enumerable: true,
    get: function() {
        return createTestClient_js_1.createTestClient;
    }
});
var public_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/decorators/public.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "publicActions", {
    enumerable: true,
    get: function() {
        return public_js_1.publicActions;
    }
});
var test_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/decorators/test.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "testActions", {
    enumerable: true,
    get: function() {
        return test_js_1.testActions;
    }
});
var wallet_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/decorators/wallet.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "walletActions", {
    enumerable: true,
    get: function() {
        return wallet_js_1.walletActions;
    }
});
var createTransport_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/transports/createTransport.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "createTransport", {
    enumerable: true,
    get: function() {
        return createTransport_js_1.createTransport;
    }
});
var createWalletClient_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/createWalletClient.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "createWalletClient", {
    enumerable: true,
    get: function() {
        return createWalletClient_js_1.createWalletClient;
    }
});
var webSocket_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/clients/transports/webSocket.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "webSocket", {
    enumerable: true,
    get: function() {
        return webSocket_js_1.webSocket;
    }
});
var abis_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/abis.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "multicall3Abi", {
    enumerable: true,
    get: function() {
        return abis_js_1.multicall3Abi;
    }
});
var address_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/address.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "zeroAddress", {
    enumerable: true,
    get: function() {
        return address_js_1.zeroAddress;
    }
});
var unit_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/unit.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "etherUnits", {
    enumerable: true,
    get: function() {
        return unit_js_1.etherUnits;
    }
});
Object.defineProperty(exports, "gweiUnits", {
    enumerable: true,
    get: function() {
        return unit_js_1.gweiUnits;
    }
});
Object.defineProperty(exports, "weiUnits", {
    enumerable: true,
    get: function() {
        return unit_js_1.weiUnits;
    }
});
var number_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/number.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "maxInt8", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt8;
    }
});
Object.defineProperty(exports, "maxInt16", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt16;
    }
});
Object.defineProperty(exports, "maxInt24", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt24;
    }
});
Object.defineProperty(exports, "maxInt32", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt32;
    }
});
Object.defineProperty(exports, "maxInt40", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt40;
    }
});
Object.defineProperty(exports, "maxInt48", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt48;
    }
});
Object.defineProperty(exports, "maxInt56", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt56;
    }
});
Object.defineProperty(exports, "maxInt64", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt64;
    }
});
Object.defineProperty(exports, "maxInt72", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt72;
    }
});
Object.defineProperty(exports, "maxInt80", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt80;
    }
});
Object.defineProperty(exports, "maxInt88", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt88;
    }
});
Object.defineProperty(exports, "maxInt96", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt96;
    }
});
Object.defineProperty(exports, "maxInt104", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt104;
    }
});
Object.defineProperty(exports, "maxInt112", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt112;
    }
});
Object.defineProperty(exports, "maxInt120", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt120;
    }
});
Object.defineProperty(exports, "maxInt128", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt128;
    }
});
Object.defineProperty(exports, "maxInt136", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt136;
    }
});
Object.defineProperty(exports, "maxInt144", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt144;
    }
});
Object.defineProperty(exports, "maxInt152", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt152;
    }
});
Object.defineProperty(exports, "maxInt160", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt160;
    }
});
Object.defineProperty(exports, "maxInt168", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt168;
    }
});
Object.defineProperty(exports, "maxInt176", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt176;
    }
});
Object.defineProperty(exports, "maxInt184", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt184;
    }
});
Object.defineProperty(exports, "maxInt192", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt192;
    }
});
Object.defineProperty(exports, "maxInt200", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt200;
    }
});
Object.defineProperty(exports, "maxInt208", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt208;
    }
});
Object.defineProperty(exports, "maxInt216", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt216;
    }
});
Object.defineProperty(exports, "maxInt224", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt224;
    }
});
Object.defineProperty(exports, "maxInt232", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt232;
    }
});
Object.defineProperty(exports, "maxInt240", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt240;
    }
});
Object.defineProperty(exports, "maxInt248", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt248;
    }
});
Object.defineProperty(exports, "maxInt256", {
    enumerable: true,
    get: function() {
        return number_js_1.maxInt256;
    }
});
Object.defineProperty(exports, "maxUint8", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint8;
    }
});
Object.defineProperty(exports, "maxUint16", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint16;
    }
});
Object.defineProperty(exports, "maxUint24", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint24;
    }
});
Object.defineProperty(exports, "maxUint32", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint32;
    }
});
Object.defineProperty(exports, "maxUint40", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint40;
    }
});
Object.defineProperty(exports, "maxUint48", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint48;
    }
});
Object.defineProperty(exports, "maxUint56", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint56;
    }
});
Object.defineProperty(exports, "maxUint64", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint64;
    }
});
Object.defineProperty(exports, "maxUint72", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint72;
    }
});
Object.defineProperty(exports, "maxUint80", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint80;
    }
});
Object.defineProperty(exports, "maxUint88", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint88;
    }
});
Object.defineProperty(exports, "maxUint96", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint96;
    }
});
Object.defineProperty(exports, "maxUint104", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint104;
    }
});
Object.defineProperty(exports, "maxUint112", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint112;
    }
});
Object.defineProperty(exports, "maxUint120", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint120;
    }
});
Object.defineProperty(exports, "maxUint128", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint128;
    }
});
Object.defineProperty(exports, "maxUint136", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint136;
    }
});
Object.defineProperty(exports, "maxUint144", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint144;
    }
});
Object.defineProperty(exports, "maxUint152", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint152;
    }
});
Object.defineProperty(exports, "maxUint160", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint160;
    }
});
Object.defineProperty(exports, "maxUint168", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint168;
    }
});
Object.defineProperty(exports, "maxUint176", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint176;
    }
});
Object.defineProperty(exports, "maxUint184", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint184;
    }
});
Object.defineProperty(exports, "maxUint192", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint192;
    }
});
Object.defineProperty(exports, "maxUint200", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint200;
    }
});
Object.defineProperty(exports, "maxUint208", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint208;
    }
});
Object.defineProperty(exports, "maxUint216", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint216;
    }
});
Object.defineProperty(exports, "maxUint224", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint224;
    }
});
Object.defineProperty(exports, "maxUint232", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint232;
    }
});
Object.defineProperty(exports, "maxUint240", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint240;
    }
});
Object.defineProperty(exports, "maxUint248", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint248;
    }
});
Object.defineProperty(exports, "maxUint256", {
    enumerable: true,
    get: function() {
        return number_js_1.maxUint256;
    }
});
Object.defineProperty(exports, "minInt8", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt8;
    }
});
Object.defineProperty(exports, "minInt16", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt16;
    }
});
Object.defineProperty(exports, "minInt24", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt24;
    }
});
Object.defineProperty(exports, "minInt32", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt32;
    }
});
Object.defineProperty(exports, "minInt40", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt40;
    }
});
Object.defineProperty(exports, "minInt48", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt48;
    }
});
Object.defineProperty(exports, "minInt56", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt56;
    }
});
Object.defineProperty(exports, "minInt64", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt64;
    }
});
Object.defineProperty(exports, "minInt72", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt72;
    }
});
Object.defineProperty(exports, "minInt80", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt80;
    }
});
Object.defineProperty(exports, "minInt88", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt88;
    }
});
Object.defineProperty(exports, "minInt96", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt96;
    }
});
Object.defineProperty(exports, "minInt104", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt104;
    }
});
Object.defineProperty(exports, "minInt112", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt112;
    }
});
Object.defineProperty(exports, "minInt120", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt120;
    }
});
Object.defineProperty(exports, "minInt128", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt128;
    }
});
Object.defineProperty(exports, "minInt136", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt136;
    }
});
Object.defineProperty(exports, "minInt144", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt144;
    }
});
Object.defineProperty(exports, "minInt152", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt152;
    }
});
Object.defineProperty(exports, "minInt160", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt160;
    }
});
Object.defineProperty(exports, "minInt168", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt168;
    }
});
Object.defineProperty(exports, "minInt176", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt176;
    }
});
Object.defineProperty(exports, "minInt184", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt184;
    }
});
Object.defineProperty(exports, "minInt192", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt192;
    }
});
Object.defineProperty(exports, "minInt200", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt200;
    }
});
Object.defineProperty(exports, "minInt208", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt208;
    }
});
Object.defineProperty(exports, "minInt216", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt216;
    }
});
Object.defineProperty(exports, "minInt224", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt224;
    }
});
Object.defineProperty(exports, "minInt232", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt232;
    }
});
Object.defineProperty(exports, "minInt240", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt240;
    }
});
Object.defineProperty(exports, "minInt248", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt248;
    }
});
Object.defineProperty(exports, "minInt256", {
    enumerable: true,
    get: function() {
        return number_js_1.minInt256;
    }
});
var bytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/bytes.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "zeroHash", {
    enumerable: true,
    get: function() {
        return bytes_js_1.zeroHash;
    }
});
var strings_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/constants/strings.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "presignMessagePrefix", {
    enumerable: true,
    get: function() {
        return strings_js_1.presignMessagePrefix;
    }
});
var abi_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/abi.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "AbiConstructorNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiConstructorNotFoundError;
    }
});
Object.defineProperty(exports, "AbiConstructorParamsNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiConstructorParamsNotFoundError;
    }
});
Object.defineProperty(exports, "AbiDecodingDataSizeInvalidError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiDecodingDataSizeInvalidError;
    }
});
Object.defineProperty(exports, "AbiDecodingDataSizeTooSmallError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiDecodingDataSizeTooSmallError;
    }
});
Object.defineProperty(exports, "AbiDecodingZeroDataError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiDecodingZeroDataError;
    }
});
Object.defineProperty(exports, "AbiEncodingArrayLengthMismatchError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEncodingArrayLengthMismatchError;
    }
});
Object.defineProperty(exports, "AbiEncodingLengthMismatchError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEncodingLengthMismatchError;
    }
});
Object.defineProperty(exports, "AbiEncodingBytesSizeMismatchError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEncodingBytesSizeMismatchError;
    }
});
Object.defineProperty(exports, "AbiErrorInputsNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiErrorInputsNotFoundError;
    }
});
Object.defineProperty(exports, "AbiErrorNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiErrorNotFoundError;
    }
});
Object.defineProperty(exports, "AbiErrorSignatureNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiErrorSignatureNotFoundError;
    }
});
Object.defineProperty(exports, "AbiEventNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEventNotFoundError;
    }
});
Object.defineProperty(exports, "AbiEventSignatureEmptyTopicsError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEventSignatureEmptyTopicsError;
    }
});
Object.defineProperty(exports, "AbiEventSignatureNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiEventSignatureNotFoundError;
    }
});
Object.defineProperty(exports, "AbiFunctionNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiFunctionNotFoundError;
    }
});
Object.defineProperty(exports, "AbiFunctionOutputsNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiFunctionOutputsNotFoundError;
    }
});
Object.defineProperty(exports, "AbiFunctionSignatureNotFoundError", {
    enumerable: true,
    get: function() {
        return abi_js_1.AbiFunctionSignatureNotFoundError;
    }
});
Object.defineProperty(exports, "BytesSizeMismatchError", {
    enumerable: true,
    get: function() {
        return abi_js_1.BytesSizeMismatchError;
    }
});
Object.defineProperty(exports, "DecodeLogDataMismatch", {
    enumerable: true,
    get: function() {
        return abi_js_1.DecodeLogDataMismatch;
    }
});
Object.defineProperty(exports, "DecodeLogTopicsMismatch", {
    enumerable: true,
    get: function() {
        return abi_js_1.DecodeLogTopicsMismatch;
    }
});
Object.defineProperty(exports, "InvalidAbiDecodingTypeError", {
    enumerable: true,
    get: function() {
        return abi_js_1.InvalidAbiDecodingTypeError;
    }
});
Object.defineProperty(exports, "InvalidAbiEncodingTypeError", {
    enumerable: true,
    get: function() {
        return abi_js_1.InvalidAbiEncodingTypeError;
    }
});
Object.defineProperty(exports, "InvalidArrayError", {
    enumerable: true,
    get: function() {
        return abi_js_1.InvalidArrayError;
    }
});
Object.defineProperty(exports, "InvalidDefinitionTypeError", {
    enumerable: true,
    get: function() {
        return abi_js_1.InvalidDefinitionTypeError;
    }
});
Object.defineProperty(exports, "UnsupportedPackedAbiType", {
    enumerable: true,
    get: function() {
        return abi_js_1.UnsupportedPackedAbiType;
    }
});
var base_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/base.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "BaseError", {
    enumerable: true,
    get: function() {
        return base_js_1.BaseError;
    }
});
var block_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/block.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "BlockNotFoundError", {
    enumerable: true,
    get: function() {
        return block_js_1.BlockNotFoundError;
    }
});
var contract_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/contract.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "CallExecutionError", {
    enumerable: true,
    get: function() {
        return contract_js_1.CallExecutionError;
    }
});
Object.defineProperty(exports, "ContractFunctionExecutionError", {
    enumerable: true,
    get: function() {
        return contract_js_1.ContractFunctionExecutionError;
    }
});
Object.defineProperty(exports, "ContractFunctionRevertedError", {
    enumerable: true,
    get: function() {
        return contract_js_1.ContractFunctionRevertedError;
    }
});
Object.defineProperty(exports, "ContractFunctionZeroDataError", {
    enumerable: true,
    get: function() {
        return contract_js_1.ContractFunctionZeroDataError;
    }
});
Object.defineProperty(exports, "RawContractError", {
    enumerable: true,
    get: function() {
        return contract_js_1.RawContractError;
    }
});
var fee_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/fee.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "BaseFeeScalarError", {
    enumerable: true,
    get: function() {
        return fee_js_1.BaseFeeScalarError;
    }
});
Object.defineProperty(exports, "Eip1559FeesNotSupportedError", {
    enumerable: true,
    get: function() {
        return fee_js_1.Eip1559FeesNotSupportedError;
    }
});
Object.defineProperty(exports, "MaxFeePerGasTooLowError", {
    enumerable: true,
    get: function() {
        return fee_js_1.MaxFeePerGasTooLowError;
    }
});
var rpc_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/rpc.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "ChainDisconnectedError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ChainDisconnectedError;
    }
});
Object.defineProperty(exports, "InternalRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.InternalRpcError;
    }
});
Object.defineProperty(exports, "InvalidInputRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.InvalidInputRpcError;
    }
});
Object.defineProperty(exports, "InvalidParamsRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.InvalidParamsRpcError;
    }
});
Object.defineProperty(exports, "InvalidRequestRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.InvalidRequestRpcError;
    }
});
Object.defineProperty(exports, "JsonRpcVersionUnsupportedError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.JsonRpcVersionUnsupportedError;
    }
});
Object.defineProperty(exports, "LimitExceededRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.LimitExceededRpcError;
    }
});
Object.defineProperty(exports, "MethodNotFoundRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.MethodNotFoundRpcError;
    }
});
Object.defineProperty(exports, "MethodNotSupportedRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.MethodNotSupportedRpcError;
    }
});
Object.defineProperty(exports, "ParseRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ParseRpcError;
    }
});
Object.defineProperty(exports, "ProviderDisconnectedError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ProviderDisconnectedError;
    }
});
Object.defineProperty(exports, "ProviderRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ProviderRpcError;
    }
});
Object.defineProperty(exports, "ResourceNotFoundRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ResourceNotFoundRpcError;
    }
});
Object.defineProperty(exports, "ResourceUnavailableRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.ResourceUnavailableRpcError;
    }
});
Object.defineProperty(exports, "RpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.RpcError;
    }
});
Object.defineProperty(exports, "SwitchChainError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.SwitchChainError;
    }
});
Object.defineProperty(exports, "TransactionRejectedRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.TransactionRejectedRpcError;
    }
});
Object.defineProperty(exports, "UnauthorizedProviderError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnauthorizedProviderError;
    }
});
Object.defineProperty(exports, "UnknownRpcError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnknownRpcError;
    }
});
Object.defineProperty(exports, "UnsupportedProviderMethodError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UnsupportedProviderMethodError;
    }
});
Object.defineProperty(exports, "UserRejectedRequestError", {
    enumerable: true,
    get: function() {
        return rpc_js_1.UserRejectedRequestError;
    }
});
var chain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/chain.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "ChainDoesNotSupportContract", {
    enumerable: true,
    get: function() {
        return chain_js_1.ChainDoesNotSupportContract;
    }
});
Object.defineProperty(exports, "ChainMismatchError", {
    enumerable: true,
    get: function() {
        return chain_js_1.ChainMismatchError;
    }
});
Object.defineProperty(exports, "ChainNotFoundError", {
    enumerable: true,
    get: function() {
        return chain_js_1.ChainNotFoundError;
    }
});
Object.defineProperty(exports, "ClientChainNotConfiguredError", {
    enumerable: true,
    get: function() {
        return chain_js_1.ClientChainNotConfiguredError;
    }
});
Object.defineProperty(exports, "InvalidChainIdError", {
    enumerable: true,
    get: function() {
        return chain_js_1.InvalidChainIdError;
    }
});
var encoding_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/encoding.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "DataLengthTooLongError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.DataLengthTooLongError;
    }
});
Object.defineProperty(exports, "DataLengthTooShortError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.DataLengthTooShortError;
    }
});
Object.defineProperty(exports, "InvalidBytesBooleanError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.InvalidBytesBooleanError;
    }
});
Object.defineProperty(exports, "IntegerOutOfRangeError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.IntegerOutOfRangeError;
    }
});
Object.defineProperty(exports, "InvalidHexBooleanError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.InvalidHexBooleanError;
    }
});
Object.defineProperty(exports, "InvalidHexValueError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.InvalidHexValueError;
    }
});
Object.defineProperty(exports, "OffsetOutOfBoundsError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.OffsetOutOfBoundsError;
    }
});
Object.defineProperty(exports, "SizeOverflowError", {
    enumerable: true,
    get: function() {
        return encoding_js_1.SizeOverflowError;
    }
});
var ens_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/ens.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "EnsAvatarUriResolutionError", {
    enumerable: true,
    get: function() {
        return ens_js_1.EnsAvatarUriResolutionError;
    }
});
Object.defineProperty(exports, "EnsAvatarInvalidNftUriError", {
    enumerable: true,
    get: function() {
        return ens_js_1.EnsAvatarInvalidNftUriError;
    }
});
Object.defineProperty(exports, "EnsAvatarUnsupportedNamespaceError", {
    enumerable: true,
    get: function() {
        return ens_js_1.EnsAvatarUnsupportedNamespaceError;
    }
});
var estimateGas_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/estimateGas.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "EstimateGasExecutionError", {
    enumerable: true,
    get: function() {
        return estimateGas_js_1.EstimateGasExecutionError;
    }
});
var node_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/node.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "ExecutionRevertedError", {
    enumerable: true,
    get: function() {
        return node_js_1.ExecutionRevertedError;
    }
});
Object.defineProperty(exports, "FeeCapTooHighError", {
    enumerable: true,
    get: function() {
        return node_js_1.FeeCapTooHighError;
    }
});
Object.defineProperty(exports, "FeeCapTooLowError", {
    enumerable: true,
    get: function() {
        return node_js_1.FeeCapTooLowError;
    }
});
Object.defineProperty(exports, "InsufficientFundsError", {
    enumerable: true,
    get: function() {
        return node_js_1.InsufficientFundsError;
    }
});
Object.defineProperty(exports, "IntrinsicGasTooHighError", {
    enumerable: true,
    get: function() {
        return node_js_1.IntrinsicGasTooHighError;
    }
});
Object.defineProperty(exports, "IntrinsicGasTooLowError", {
    enumerable: true,
    get: function() {
        return node_js_1.IntrinsicGasTooLowError;
    }
});
Object.defineProperty(exports, "NonceMaxValueError", {
    enumerable: true,
    get: function() {
        return node_js_1.NonceMaxValueError;
    }
});
Object.defineProperty(exports, "NonceTooHighError", {
    enumerable: true,
    get: function() {
        return node_js_1.NonceTooHighError;
    }
});
Object.defineProperty(exports, "NonceTooLowError", {
    enumerable: true,
    get: function() {
        return node_js_1.NonceTooLowError;
    }
});
Object.defineProperty(exports, "TipAboveFeeCapError", {
    enumerable: true,
    get: function() {
        return node_js_1.TipAboveFeeCapError;
    }
});
Object.defineProperty(exports, "TransactionTypeNotSupportedError", {
    enumerable: true,
    get: function() {
        return node_js_1.TransactionTypeNotSupportedError;
    }
});
Object.defineProperty(exports, "UnknownNodeError", {
    enumerable: true,
    get: function() {
        return node_js_1.UnknownNodeError;
    }
});
var log_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/log.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "FilterTypeNotSupportedError", {
    enumerable: true,
    get: function() {
        return log_js_1.FilterTypeNotSupportedError;
    }
});
var request_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/request.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "HttpRequestError", {
    enumerable: true,
    get: function() {
        return request_js_1.HttpRequestError;
    }
});
Object.defineProperty(exports, "RpcRequestError", {
    enumerable: true,
    get: function() {
        return request_js_1.RpcRequestError;
    }
});
Object.defineProperty(exports, "TimeoutError", {
    enumerable: true,
    get: function() {
        return request_js_1.TimeoutError;
    }
});
Object.defineProperty(exports, "WebSocketRequestError", {
    enumerable: true,
    get: function() {
        return request_js_1.WebSocketRequestError;
    }
});
var address_js_2 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/address.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "InvalidAddressError", {
    enumerable: true,
    get: function() {
        return address_js_2.InvalidAddressError;
    }
});
var transaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "FeeConflictError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.FeeConflictError;
    }
});
Object.defineProperty(exports, "InvalidLegacyVError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidLegacyVError;
    }
});
Object.defineProperty(exports, "InvalidSerializableTransactionError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidSerializableTransactionError;
    }
});
Object.defineProperty(exports, "InvalidSerializedTransactionError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidSerializedTransactionError;
    }
});
Object.defineProperty(exports, "InvalidSerializedTransactionTypeError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidSerializedTransactionTypeError;
    }
});
Object.defineProperty(exports, "InvalidStorageKeySizeError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.InvalidStorageKeySizeError;
    }
});
Object.defineProperty(exports, "TransactionExecutionError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.TransactionExecutionError;
    }
});
Object.defineProperty(exports, "TransactionNotFoundError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.TransactionNotFoundError;
    }
});
Object.defineProperty(exports, "TransactionReceiptNotFoundError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.TransactionReceiptNotFoundError;
    }
});
Object.defineProperty(exports, "WaitForTransactionReceiptTimeoutError", {
    enumerable: true,
    get: function() {
        return transaction_js_1.WaitForTransactionReceiptTimeoutError;
    }
});
var data_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/data.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "SizeExceedsPaddingSizeError", {
    enumerable: true,
    get: function() {
        return data_js_1.SizeExceedsPaddingSizeError;
    }
});
Object.defineProperty(exports, "SliceOffsetOutOfBoundsError", {
    enumerable: true,
    get: function() {
        return data_js_1.SliceOffsetOutOfBoundsError;
    }
});
var transport_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/errors/transport.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "UrlRequiredError", {
    enumerable: true,
    get: function() {
        return transport_js_1.UrlRequiredError;
    }
});
var labelhash_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/labelhash.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "labelhash", {
    enumerable: true,
    get: function() {
        return labelhash_js_1.labelhash;
    }
});
var namehash_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ens/namehash.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "namehash", {
    enumerable: true,
    get: function() {
        return namehash_js_1.namehash;
    }
});
var block_js_2 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/block.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "defineBlock", {
    enumerable: true,
    get: function() {
        return block_js_2.defineBlock;
    }
});
Object.defineProperty(exports, "formatBlock", {
    enumerable: true,
    get: function() {
        return block_js_2.formatBlock;
    }
});
var log_js_2 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/log.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "formatLog", {
    enumerable: true,
    get: function() {
        return log_js_2.formatLog;
    }
});
var decodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeAbiParameters.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "decodeAbiParameters", {
    enumerable: true,
    get: function() {
        return decodeAbiParameters_js_1.decodeAbiParameters;
    }
});
var decodeDeployData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeDeployData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "decodeDeployData", {
    enumerable: true,
    get: function() {
        return decodeDeployData_js_1.decodeDeployData;
    }
});
var decodeErrorResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeErrorResult.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "decodeErrorResult", {
    enumerable: true,
    get: function() {
        return decodeErrorResult_js_1.decodeErrorResult;
    }
});
var decodeEventLog_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeEventLog.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "decodeEventLog", {
    enumerable: true,
    get: function() {
        return decodeEventLog_js_1.decodeEventLog;
    }
});
var decodeFunctionData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeFunctionData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "decodeFunctionData", {
    enumerable: true,
    get: function() {
        return decodeFunctionData_js_1.decodeFunctionData;
    }
});
var decodeFunctionResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "decodeFunctionResult", {
    enumerable: true,
    get: function() {
        return decodeFunctionResult_js_1.decodeFunctionResult;
    }
});
var encodeAbiParameters_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "encodeAbiParameters", {
    enumerable: true,
    get: function() {
        return encodeAbiParameters_js_1.encodeAbiParameters;
    }
});
var encodeDeployData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeDeployData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "encodeDeployData", {
    enumerable: true,
    get: function() {
        return encodeDeployData_js_1.encodeDeployData;
    }
});
var encodeErrorResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeErrorResult.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "encodeErrorResult", {
    enumerable: true,
    get: function() {
        return encodeErrorResult_js_1.encodeErrorResult;
    }
});
var encodeEventTopics_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeEventTopics.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "encodeEventTopics", {
    enumerable: true,
    get: function() {
        return encodeEventTopics_js_1.encodeEventTopics;
    }
});
var encodeFunctionData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "encodeFunctionData", {
    enumerable: true,
    get: function() {
        return encodeFunctionData_js_1.encodeFunctionData;
    }
});
var encodeFunctionResult_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodeFunctionResult.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "encodeFunctionResult", {
    enumerable: true,
    get: function() {
        return encodeFunctionResult_js_1.encodeFunctionResult;
    }
});
var transaction_js_2 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "defineTransaction", {
    enumerable: true,
    get: function() {
        return transaction_js_2.defineTransaction;
    }
});
Object.defineProperty(exports, "formatTransaction", {
    enumerable: true,
    get: function() {
        return transaction_js_2.formatTransaction;
    }
});
Object.defineProperty(exports, "transactionType", {
    enumerable: true,
    get: function() {
        return transaction_js_2.transactionType;
    }
});
var transactionReceipt_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transactionReceipt.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "defineTransactionReceipt", {
    enumerable: true,
    get: function() {
        return transactionReceipt_js_1.defineTransactionReceipt;
    }
});
Object.defineProperty(exports, "formatTransactionReceipt", {
    enumerable: true,
    get: function() {
        return transactionReceipt_js_1.formatTransactionReceipt;
    }
});
var transactionRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "defineTransactionRequest", {
    enumerable: true,
    get: function() {
        return transactionRequest_js_1.defineTransactionRequest;
    }
});
Object.defineProperty(exports, "formatTransactionRequest", {
    enumerable: true,
    get: function() {
        return transactionRequest_js_1.formatTransactionRequest;
    }
});
Object.defineProperty(exports, "rpcTransactionType", {
    enumerable: true,
    get: function() {
        return transactionRequest_js_1.rpcTransactionType;
    }
});
var getAbiItem_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getAbiItem", {
    enumerable: true,
    get: function() {
        return getAbiItem_js_1.getAbiItem;
    }
});
var getContractAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/getContractAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getContractAddress", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getContractAddress;
    }
});
Object.defineProperty(exports, "getCreate2Address", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getCreate2Address;
    }
});
Object.defineProperty(exports, "getCreateAddress", {
    enumerable: true,
    get: function() {
        return getContractAddress_js_1.getCreateAddress;
    }
});
var getSerializedTransactionType_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/getSerializedTransactionType.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getSerializedTransactionType", {
    enumerable: true,
    get: function() {
        return getSerializedTransactionType_js_1.getSerializedTransactionType;
    }
});
var getTransactionType_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/getTransactionType.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getTransactionType", {
    enumerable: true,
    get: function() {
        return getTransactionType_js_1.getTransactionType;
    }
});
var hashTypedData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/hashTypedData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "hashDomain", {
    enumerable: true,
    get: function() {
        return hashTypedData_js_1.hashDomain;
    }
});
Object.defineProperty(exports, "hashTypedData", {
    enumerable: true,
    get: function() {
        return hashTypedData_js_1.hashTypedData;
    }
});
var compactSignatureToSignature_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/compactSignatureToSignature.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "compactSignatureToSignature", {
    enumerable: true,
    get: function() {
        return compactSignatureToSignature_js_1.compactSignatureToSignature;
    }
});
var hexToCompactSignature_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/hexToCompactSignature.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "hexToCompactSignature", {
    enumerable: true,
    get: function() {
        return hexToCompactSignature_js_1.hexToCompactSignature;
    }
});
var hexToSignature_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/hexToSignature.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "hexToSignature", {
    enumerable: true,
    get: function() {
        return hexToSignature_js_1.hexToSignature;
    }
});
var recoverAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "recoverAddress", {
    enumerable: true,
    get: function() {
        return recoverAddress_js_1.recoverAddress;
    }
});
var recoverMessageAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverMessageAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "recoverMessageAddress", {
    enumerable: true,
    get: function() {
        return recoverMessageAddress_js_1.recoverMessageAddress;
    }
});
var recoverPublicKey_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverPublicKey.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "recoverPublicKey", {
    enumerable: true,
    get: function() {
        return recoverPublicKey_js_1.recoverPublicKey;
    }
});
var recoverTypedDataAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/recoverTypedDataAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "recoverTypedDataAddress", {
    enumerable: true,
    get: function() {
        return recoverTypedDataAddress_js_1.recoverTypedDataAddress;
    }
});
var signatureToCompactSignature_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/signatureToCompactSignature.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "signatureToCompactSignature", {
    enumerable: true,
    get: function() {
        return signatureToCompactSignature_js_1.signatureToCompactSignature;
    }
});
var compactSignatureToHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/compactSignatureToHex.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "compactSignatureToHex", {
    enumerable: true,
    get: function() {
        return compactSignatureToHex_js_1.compactSignatureToHex;
    }
});
var signatureToHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/signatureToHex.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "signatureToHex", {
    enumerable: true,
    get: function() {
        return signatureToHex_js_1.signatureToHex;
    }
});
var toRlp_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toRlp.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "bytesToRlp", {
    enumerable: true,
    get: function() {
        return toRlp_js_1.bytesToRlp;
    }
});
Object.defineProperty(exports, "hexToRlp", {
    enumerable: true,
    get: function() {
        return toRlp_js_1.hexToRlp;
    }
});
Object.defineProperty(exports, "toRlp", {
    enumerable: true,
    get: function() {
        return toRlp_js_1.toRlp;
    }
});
var verifyMessage_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/verifyMessage.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "verifyMessage", {
    enumerable: true,
    get: function() {
        return verifyMessage_js_1.verifyMessage;
    }
});
var verifyTypedData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/verifyTypedData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "verifyTypedData", {
    enumerable: true,
    get: function() {
        return verifyTypedData_js_1.verifyTypedData;
    }
});
var assertRequest_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "assertRequest", {
    enumerable: true,
    get: function() {
        return assertRequest_js_1.assertRequest;
    }
});
var assertTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/assertTransaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "assertTransactionEIP1559", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionEIP1559;
    }
});
Object.defineProperty(exports, "assertTransactionEIP2930", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionEIP2930;
    }
});
Object.defineProperty(exports, "assertTransactionLegacy", {
    enumerable: true,
    get: function() {
        return assertTransaction_js_1.assertTransactionLegacy;
    }
});
var toBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "boolToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.boolToBytes;
    }
});
Object.defineProperty(exports, "hexToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.hexToBytes;
    }
});
Object.defineProperty(exports, "numberToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.numberToBytes;
    }
});
Object.defineProperty(exports, "stringToBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.stringToBytes;
    }
});
Object.defineProperty(exports, "toBytes", {
    enumerable: true,
    get: function() {
        return toBytes_js_1.toBytes;
    }
});
var toHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/toHex.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "boolToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.boolToHex;
    }
});
Object.defineProperty(exports, "bytesToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.bytesToHex;
    }
});
Object.defineProperty(exports, "numberToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.numberToHex;
    }
});
Object.defineProperty(exports, "stringToHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.stringToHex;
    }
});
Object.defineProperty(exports, "toHex", {
    enumerable: true,
    get: function() {
        return toHex_js_1.toHex;
    }
});
var fromBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromBytes.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "bytesToBigInt", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToBigInt;
    }
});
Object.defineProperty(exports, "bytesToBigint", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToBigInt;
    }
});
Object.defineProperty(exports, "bytesToBool", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToBool;
    }
});
Object.defineProperty(exports, "bytesToNumber", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToNumber;
    }
});
Object.defineProperty(exports, "bytesToString", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.bytesToString;
    }
});
Object.defineProperty(exports, "fromBytes", {
    enumerable: true,
    get: function() {
        return fromBytes_js_1.fromBytes;
    }
});
var ccip_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/ccip.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "ccipFetch", {
    enumerable: true,
    get: function() {
        return ccip_js_1.ccipFetch;
    }
});
Object.defineProperty(exports, "offchainLookup", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookup;
    }
});
Object.defineProperty(exports, "offchainLookupAbiItem", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookupAbiItem;
    }
});
Object.defineProperty(exports, "offchainLookupSignature", {
    enumerable: true,
    get: function() {
        return ccip_js_1.offchainLookupSignature;
    }
});
var concat_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/concat.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "concat", {
    enumerable: true,
    get: function() {
        return concat_js_1.concat;
    }
});
Object.defineProperty(exports, "concatBytes", {
    enumerable: true,
    get: function() {
        return concat_js_1.concatBytes;
    }
});
Object.defineProperty(exports, "concatHex", {
    enumerable: true,
    get: function() {
        return concat_js_1.concatHex;
    }
});
var assertCurrentChain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "assertCurrentChain", {
    enumerable: true,
    get: function() {
        return assertCurrentChain_js_1.assertCurrentChain;
    }
});
var defineChain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/defineChain.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "defineChain", {
    enumerable: true,
    get: function() {
        return defineChain_js_1.defineChain;
    }
});
var extractChain_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/extractChain.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "extractChain", {
    enumerable: true,
    get: function() {
        return extractChain_js_1.extractChain;
    }
});
var getChainContractAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getChainContractAddress", {
    enumerable: true,
    get: function() {
        return getChainContractAddress_js_1.getChainContractAddress;
    }
});
var encodePacked_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/abi/encodePacked.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "encodePacked", {
    enumerable: true,
    get: function() {
        return encodePacked_js_1.encodePacked;
    }
});
var formatEther_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatEther.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "formatEther", {
    enumerable: true,
    get: function() {
        return formatEther_js_1.formatEther;
    }
});
var formatGwei_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatGwei.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "formatGwei", {
    enumerable: true,
    get: function() {
        return formatGwei_js_1.formatGwei;
    }
});
var formatUnits_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/formatUnits.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "formatUnits", {
    enumerable: true,
    get: function() {
        return formatUnits_js_1.formatUnits;
    }
});
var fromHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "fromHex", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.fromHex;
    }
});
Object.defineProperty(exports, "hexToBigInt", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToBigInt;
    }
});
Object.defineProperty(exports, "hexToBool", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToBool;
    }
});
Object.defineProperty(exports, "hexToNumber", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToNumber;
    }
});
Object.defineProperty(exports, "hexToString", {
    enumerable: true,
    get: function() {
        return fromHex_js_1.hexToString;
    }
});
var fromRlp_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/encoding/fromRlp.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "fromRlp", {
    enumerable: true,
    get: function() {
        return fromRlp_js_1.fromRlp;
    }
});
var getAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/getAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "checksumAddress", {
    enumerable: true,
    get: function() {
        return getAddress_js_1.checksumAddress;
    }
});
Object.defineProperty(exports, "getAddress", {
    enumerable: true,
    get: function() {
        return getAddress_js_1.getAddress;
    }
});
var getContractError_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/errors/getContractError.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getContractError", {
    enumerable: true,
    get: function() {
        return getContractError_js_1.getContractError;
    }
});
var getEventSelector_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getEventSelector.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getEventSelector", {
    enumerable: true,
    get: function() {
        return getEventSelector_js_1.getEventSelector;
    }
});
var getEventSignature_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getEventSignature.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getEventSignature", {
    enumerable: true,
    get: function() {
        return getEventSignature_js_1.getEventSignature;
    }
});
var getFunctionSelector_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getFunctionSelector.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getFunctionSelector", {
    enumerable: true,
    get: function() {
        return getFunctionSelector_js_1.getFunctionSelector;
    }
});
var getFunctionSignature_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/getFunctionSignature.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "getFunctionSignature", {
    enumerable: true,
    get: function() {
        return getFunctionSignature_js_1.getFunctionSignature;
    }
});
var hashMessage_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/signature/hashMessage.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "hashMessage", {
    enumerable: true,
    get: function() {
        return hashMessage_js_1.hashMessage;
    }
});
var isAddress_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddress.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "isAddress", {
    enumerable: true,
    get: function() {
        return isAddress_js_1.isAddress;
    }
});
var isAddressEqual_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "isAddressEqual", {
    enumerable: true,
    get: function() {
        return isAddressEqual_js_1.isAddressEqual;
    }
});
var isBytes_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isBytes.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "isBytes", {
    enumerable: true,
    get: function() {
        return isBytes_js_1.isBytes;
    }
});
var isHash_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/isHash.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "isHash", {
    enumerable: true,
    get: function() {
        return isHash_js_1.isHash;
    }
});
var isHex_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/isHex.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "isHex", {
    enumerable: true,
    get: function() {
        return isHex_js_1.isHex;
    }
});
var keccak256_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/keccak256.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "keccak256", {
    enumerable: true,
    get: function() {
        return keccak256_js_1.keccak256;
    }
});
var sha256_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/sha256.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "sha256", {
    enumerable: true,
    get: function() {
        return sha256_js_1.sha256;
    }
});
var ripemd160_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/hash/ripemd160.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "ripemd160", {
    enumerable: true,
    get: function() {
        return ripemd160_js_1.ripemd160;
    }
});
var pad_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/pad.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "pad", {
    enumerable: true,
    get: function() {
        return pad_js_1.pad;
    }
});
Object.defineProperty(exports, "padBytes", {
    enumerable: true,
    get: function() {
        return pad_js_1.padBytes;
    }
});
Object.defineProperty(exports, "padHex", {
    enumerable: true,
    get: function() {
        return pad_js_1.padHex;
    }
});
var parseEther_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/parseEther.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "parseEther", {
    enumerable: true,
    get: function() {
        return parseEther_js_1.parseEther;
    }
});
var parseGwei_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/parseGwei.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "parseGwei", {
    enumerable: true,
    get: function() {
        return parseGwei_js_1.parseGwei;
    }
});
var parseTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/parseTransaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "parseTransaction", {
    enumerable: true,
    get: function() {
        return parseTransaction_js_1.parseTransaction;
    }
});
var parseUnits_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/unit/parseUnits.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "parseUnits", {
    enumerable: true,
    get: function() {
        return parseUnits_js_1.parseUnits;
    }
});
var serializeAccessList_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/serializeAccessList.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "serializeAccessList", {
    enumerable: true,
    get: function() {
        return serializeAccessList_js_1.serializeAccessList;
    }
});
var serializeTransaction_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "serializeTransaction", {
    enumerable: true,
    get: function() {
        return serializeTransaction_js_1.serializeTransaction;
    }
});
var size_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/size.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "size", {
    enumerable: true,
    get: function() {
        return size_js_1.size;
    }
});
var slice_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/slice.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "slice", {
    enumerable: true,
    get: function() {
        return slice_js_1.slice;
    }
});
Object.defineProperty(exports, "sliceBytes", {
    enumerable: true,
    get: function() {
        return slice_js_1.sliceBytes;
    }
});
Object.defineProperty(exports, "sliceHex", {
    enumerable: true,
    get: function() {
        return slice_js_1.sliceHex;
    }
});
var stringify_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/stringify.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "stringify", {
    enumerable: true,
    get: function() {
        return stringify_js_1.stringify;
    }
});
var trim_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/data/trim.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "trim", {
    enumerable: true,
    get: function() {
        return trim_js_1.trim;
    }
});
var typedData_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/viem@1.21.4_typescript@5.7.3/node_modules/viem/_cjs/utils/typedData.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "validateTypedData", {
    enumerable: true,
    get: function() {
        return typedData_js_1.validateTypedData;
    }
});
Object.defineProperty(exports, "domainSeparator", {
    enumerable: true,
    get: function() {
        return typedData_js_1.domainSeparator;
    }
});
Object.defineProperty(exports, "getTypesForEIP712Domain", {
    enumerable: true,
    get: function() {
        return typedData_js_1.getTypesForEIP712Domain;
    }
}); //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=447a0_viem__cjs_e5d92d._.js.map