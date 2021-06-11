'use strict'

module.exports = function (fn) {
    try {
        return [null, fn()]
    } catch (e) {
        return [e, null]
    }
}

module.exports.promise = async function (fn) {
    try {
        return [null, await fn()]
    } catch (e) {
        return [e, null]
    }
}

module.exports.apply = function (fn, ...args) {
    try {
        return [null, fn.apply(null, args)]
    } catch (e) {
        return [e, null]
    }
}
