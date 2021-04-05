import type { RequestHandler } from 'express'


const requestState: RequestHandler = (req, _res, next) => {
  req.context = {
    device: null,
    appHtml: null,
    redirectUrl: null,
    helmet: null,
    initialData: null,
    initialApolloState: null,
    loadableTags: null,
    assets: null,
  }

  return next()
}


export default requestState
