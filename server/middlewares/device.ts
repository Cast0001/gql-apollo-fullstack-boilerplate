import useragent from 'express-useragent'
// import logger from 'logger'


const device = (req, res, next) => {
  const source = req.headers['user-agent']
  const { os, platform, browser, version, isMobile, isTablet, isDesktop, isBot } = useragent.parse(source)

  req.context.device = {
    os,
    platform,
    browser,
    version,
    isMobile,
    isTablet,
    isDesktop,
    isBot,
  }

  // logger.info(`is bot: ${isBot}`)

  return next()
}


export default device
