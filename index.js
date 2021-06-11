'use strict'

module.exports = function (fn) {
    try {
        return [null, fn()]
    } catch (e) {
        return [e]
    }
}

module.exports.promise = async function (fn) {
    try {
        return [null, await fn()]
    } catch (e) {
        return [e]
    }
}
