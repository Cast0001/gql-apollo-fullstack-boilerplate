const assets = (req, _res, next) => {
  const { scripts, styles } = req.context.loadableTags

  req.context.assets = {
    scripts,
    styles,
  }

  next()
}


export default assets
