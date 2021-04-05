const getServerBuild = async () => {
  const mobule =  await import('../../build/server/server')

  let app = mobule.default

  // reload signal from nodemon
  process.once('SIGHUP', () => {
    if (app?.server) {
      app.server.close(async () => {
        console.log('Reload server code')
        const mobule =  await import('../../build/server/server')
  
        app = mobule.default
      })
    }
  })

  // graceful shutdown
  process.on('SIGTERM', () => {
    if (app?.server) {
      app.server.close(() => {
        console.log('Server was shutdown...')
        process.exit(0)
      })
    }
  })
}


getServerBuild()
