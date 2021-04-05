import { IncomingMessage, ServerResponse } from 'http'
import { initRequestContext } from 'request-context'
// import logger from 'logger'


const requestContext = (req: IncomingMessage, res: ServerResponse, next) => {
  // init request context for async storage for the request
  initRequestContext((context) => {
    // fill async context for logger
    context.startTime = Date.now()
    context.requestId = req.headers['x-request-id'] as string || `fallback-${(Math.random() * 100000).toFixed(0)}`

    if (__DEV__) {
      // logger.debug(`<-- ${req.method.toUpperCase()} ${req.url}`)
    }

    res.once('finish', () => {
      const delta = Date.now() - context.startTime
      const time = delta < 10000 ? `${delta}ms` : `${Math.round(delta / 1000)}s`

      if (__DEV__) {
        // logger.debug(`--> ${req.method.toUpperCase()} ${req.url} ${res.statusCode} ${time}`)

        // flush all request logs
        console.group(`\n${context.requestId}:`)

        if (context.logs) {
          context.logs.forEach(({ message, contexts, extra }) => {
            if (contexts || extra) {
              console.group(message)
              console.log({ contexts, extra })
              console.groupEnd()
            }
            else {
              console.log(message)
            }
          })
        }

        console.groupEnd()
      }
      else {
        // logger.debug(`${req.method.toUpperCase()} ${req.url} ${res.statusCode} ${time}`)
      }
    })

    next()
  })
}


export default requestContext
