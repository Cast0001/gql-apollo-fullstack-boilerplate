import render from './render'
import device from './device'
import requestState from './requestState'
import apolloClient from './apolloClient'
import requestContext from './requestContext'
import type { RequestHandler } from 'express'


export default [
  requestContext,
  requestState,
  apolloClient,
  device,
  ...render,
] as RequestHandler[]
