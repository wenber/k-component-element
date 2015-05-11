define('lodash/object/keysIn', [
    '../lang/isArguments',
    '../lang/isArray',
    '../internal/isIndex',
    '../internal/isLength',
    '../lang/isObject',
    '../support'
], function (isArguments, isArray, isIndex, isLength, isObject, support) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function keysIn(object) {
        if (object == null) {
            return [];
        }
        if (!isObject(object)) {
            object = Object(object);
        }
        var length = object.length;
        length = length && isLength(length) && (isArray(object) || support.nonEnumArgs && isArguments(object)) && length || 0;
        var Ctor = object.constructor, index = -1, isProto = typeof Ctor == 'function' && Ctor.prototype === object, result = Array(length), skipIndexes = length > 0;
        while (++index < length) {
            result[index] = index + '';
        }
        for (var key in object) {
            if (!(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
                result.push(key);
            }
        }
        return result;
    }
    return keysIn;
});