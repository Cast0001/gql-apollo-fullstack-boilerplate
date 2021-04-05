import { initRequestContext, getRequestContext } from 'request-context'


describe('requestContext', () => {

  it('should save values in async calls', (callback) => {
    // ATTN this test doesn't work with fake timers
    const saved = []

    const reader = () => {
      const context = getRequestContext()
      saved.push(context.requestId)

      if (saved.length === 4) {
        expect(saved).toEqual(['1', '2', '1', '2'])
        callback()
      }
    }

    initRequestContext((context) => {
      context.requestId = '1'
      setTimeout(reader, 10)
      setTimeout(reader, 30)
    })

    initRequestContext((context) => {
      context.requestId = '2'
      setTimeout(reader, 20)
      setTimeout(reader, 40)
    })
  })
})
