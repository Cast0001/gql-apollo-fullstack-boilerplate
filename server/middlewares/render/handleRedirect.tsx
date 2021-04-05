// import logger from 'logger'


const handleRedirect = (req, res, next) => {
  const { redirectUrl } = req.context

  if (redirectUrl) {
    const message = `Redirecting to ${redirectUrl}`

    // logger.info(message)

    res.writeHead(302, {
      'Location': redirectUrl,
      'Content-Type': 'text/plain',
      'Content-Length': message.length,
    })

    res.end(message)
  }
  else {
    next()
  }
}


export default handleRedirect
