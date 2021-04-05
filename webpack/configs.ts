import clientConfig from './client'
import serverConfig from './server'


export default process.env.NODE_ENV === 'production'
  ? [ clientConfig.prod, serverConfig.prod ]
  : [ clientConfig.dev, serverConfig.dev ]
