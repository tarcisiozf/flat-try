const { expect } = require('chai')
const Try = require('../index')

describe('flat-try', () => {
    describe('sync', () => {
        it("should return the function's returned value and no error", () => {
            const value = 1
            const [err, subject] = Try(() => 1)

            expect(err).to.be.null
            expect(subject).to.eq(value)
        })

        it('should handle the exception', () => {
            const exception = new Error()
            const [err, returned] = Try(() => { throw exception })

            expect(err).to.eq(exception)
            expect(returned).to.be.undefined
        })
    })

    describe('async', () => {
        it("should return the promise's returned value and no error", async () => {
            const value = 1
            const [err, subject] = await Try.promise(() => Promise.resolve(1))

            expect(err).to.be.null
            expect(subject).to.eq(value)
        })

        it('should handle exceptions', async () => {
            const exception = new Error()
            const [err, returned] = await Try.promise(() => Promise.reject(exception))

            expect(err).to.eq(exception)
            expect(returned).to.be.undefined
        })
    })
})
