// https://www.codementor.io/@geekuillaume/getting-per-request-context-in-nodejs-with-async_hooks-tw37axrrr
import asyncHooks from 'async_hooks'


const contexts: { [key: number]: Server.RequestContext } = {}

asyncHooks.createHook({
  init: (asyncId, type, triggerAsyncId) => {
    // A new async resource was created
    // If our parent asyncId already had a context object
    // we assign it to our resource asyncId
    if (contexts[triggerAsyncId]) {
      contexts[asyncId] = contexts[triggerAsyncId]
    }
  },
  destroy: (asyncId) => {
    // some cleaning to prevent memory leaks
    delete contexts[asyncId]
  },
}).enable()


export function initRequestContext(callback: (context: Server.RequestContext) => void) {
  // We force the initialization of a new Async Resource
  const asyncResource = new asyncHooks.AsyncResource('REQUEST_CONTEXT')
  return asyncResource.runInAsyncScope(() => {
    // We now have a new asyncId
    const asyncId = asyncHooks.executionAsyncId()
    // We assign a new empty object as the context of our asyncId
    contexts[asyncId] = {}
    return callback(contexts[asyncId])
  })
}


export function getRequestContext(): Server.RequestContext {
  const asyncId = asyncHooks.executionAsyncId()
  // We try to get the context object linked to our current asyncId
  // if there is none, we return an empty object
  return contexts[asyncId] || {}
}
